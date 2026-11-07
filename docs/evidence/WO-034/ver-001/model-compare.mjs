// VER-001: compare the complete model output of all forty movement studies at the integrated base and
// at the candidate, at the default example and across every offered input's range.
// Usage: node model-compare.mjs <base tree> <candidate tree> <scratch dir> <results.json>
// Each tree's models are bundled by the esbuild the target installs and read with that tree's own
// English catalogs, so a renamed key or placeholder compares by the words it renders. The two
// outputs are compared field by field, ignoring only object key order.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [baseArgument, candidateArgument, scratchArgument, out] =
  process.argv.slice(2);
if (!out)
  throw new Error(
    "usage: model-compare.mjs <base> <candidate> <scratch> <results.json>",
  );
const scratch = resolve(scratchArgument);
mkdirSync(scratch, { recursive: true });
const records = (root) => {
  const directory = join(root, "libs/shared/catalog/src/studies/aifg");
  return readdirSync(directory)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => JSON.parse(readFileSync(join(directory, name), "utf8")));
};

async function load(name, root) {
  const esbuild = createRequire(join(root, "package.json"))("esbuild");
  const slugs = records(root).map(({ slug }) => slug);
  const lines = slugs.map(
    (slug, index) =>
      `import * as m${index} from './libs/features/tools/src/lib/studies/movement/${slug}.model.ts';`,
  );
  lines.push(
    `export const models = { ${slugs.map((slug, index) => `${JSON.stringify(slug)}: m${index}`).join(", ")} };`,
  );
  const outfile = join(scratch, `${name}-models.mjs`);
  await esbuild.build({
    stdin: { contents: lines.join("\n"), resolveDir: root, loader: "ts" },
    bundle: true,
    format: "esm",
    platform: "node",
    outfile,
    tsconfig: join(root, "tsconfig.base.json"),
    logLevel: "error",
  });
  const catalogs = {};
  const i18n = join(root, "apps/dotln/public/i18n");
  for (const entry of readdirSync(i18n, { withFileTypes: true }))
    if (entry.isDirectory())
      catalogs[entry.name] = JSON.parse(
        readFileSync(join(i18n, entry.name, "en.json"), "utf8"),
      );
  const translate = (key, parameters = {}) => {
    const value = key
      .split(".")
      .reduce(
        (node, part) =>
          node && typeof node === "object" ? node[part] : undefined,
        catalogs,
      );
    if (typeof value !== "string") throw new Error(`missing message ${key}`);
    return value.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, parameter) => {
      if (parameters[parameter] === undefined)
        throw new Error(`missing parameter ${key}.${parameter}`);
      return String(parameters[parameter]);
    });
  };
  const { models } = await import(pathToFileURL(outfile).href);
  return {
    models,
    translate,
    records: new Map(records(root).map((record) => [record.slug, record])),
  };
}

function differences(a, b, path = "", found = []) {
  if (found.length >= 20) return found;
  if (Object.is(a, b)) return found;
  if (
    typeof a !== typeof b ||
    a === null ||
    b === null ||
    typeof a !== "object"
  ) {
    found.push({ path, base: a, candidate: b });
    return found;
  }
  if (Array.isArray(a) !== Array.isArray(b)) {
    found.push({ path, base: "array?", candidate: "array?" });
    return found;
  }
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) differences(a[key], b[key], `${path}.${key}`, found);
  return found;
}

const run = (side, slug, parameters) => {
  try {
    return { output: side.models[slug].model(parameters, side.translate) };
  } catch (error) {
    return { error: String(error.message ?? error) };
  }
};

const base = await load("base", resolve(baseArgument));
const candidate = await load("candidate", resolve(candidateArgument));
const studies = [];
for (const [slug, record] of candidate.records) {
  const defaults = record.example.parameters;
  const probe = run(candidate, slug, defaults).output;
  const inputs = probe?.inputs ?? [];
  const cases = [{ name: "default", parameters: defaults }];
  for (const input of inputs) {
    const mid =
      input.min +
      Math.round((input.max - input.min) / 2 / input.step) * input.step;
    for (const [label, value] of [
      ["min", input.min],
      ["mid", mid],
      ["max", input.max],
    ])
      cases.push({
        name: `${input.name}=${label}`,
        parameters: { ...defaults, [input.name]: value },
      });
  }
  if (inputs.length > 1) {
    cases.push({
      name: "all=min",
      parameters: {
        ...defaults,
        ...Object.fromEntries(inputs.map((i) => [i.name, i.min])),
      },
    });
    cases.push({
      name: "all=max",
      parameters: {
        ...defaults,
        ...Object.fromEntries(inputs.map((i) => [i.name, i.max])),
      },
    });
  }
  const results = cases.map(({ name, parameters }) => {
    const before = run(base, slug, parameters);
    const after = run(candidate, slug, parameters);
    const diff =
      before.error || after.error
        ? before.error === after.error
          ? []
          : [
              {
                path: "(error)",
                base: before.error ?? null,
                candidate: after.error ?? null,
              },
            ]
        : differences(before.output, after.output);
    const frames = before.output?.motion?.frames?.length ?? 0;
    return {
      name,
      equal: diff.length === 0,
      errored: Boolean(before.error || after.error),
      frames,
      differences: diff.slice(0, 5),
    };
  });
  studies.push({
    slug,
    cases: results.length,
    errored: results.filter(({ errored }) => errored).length,
    frames: results.reduce((sum, { frames }) => sum + frames, 0),
    equal: results.filter(({ equal }) => equal).length,
    differing: results
      .filter(({ equal }) => !equal)
      .map(({ name, differences }) => ({ name, differences })),
  });
}
const summary = {
  studies: studies.length,
  cases: studies.reduce((sum, study) => sum + study.cases, 0),
  erroredCases: studies.reduce((sum, study) => sum + study.errored, 0),
  comparedFrames: studies.reduce((sum, study) => sum + study.frames, 0),
  differingCases: studies.reduce(
    (sum, study) => sum + study.differing.length,
    0,
  ),
  studiesWithDifferences: studies
    .filter(({ differing }) => differing.length)
    .map(({ slug, differing }) => `${slug} (${differing.length})`),
};
writeFileSync(
  out,
  `${JSON.stringify({ schemaVersion: 1, summary, studies }, null, 1)}\n`,
);
console.log(JSON.stringify(summary, null, 1));
