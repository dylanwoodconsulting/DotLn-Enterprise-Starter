// VER-003's probe: every model of the migrated tree against the same model in the tree VER-002
// verified (git f0e7087, tree 80145e0), at the record's example and at every value of every
// offered input. The translator here is this probe's own, written to Transloco's rule: a missing
// parameter renders empty, so a lost parameter shows up as a difference and in `lostParameters`.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { studyModels as oldModels } from "@old/libs/features/tools/src/lib/studies/study-models";
import { studyModels as newModels } from "@target/libs/features/tools/src/lib/studies/study-models";

const [target, old, output] = process.argv.slice(2);
const catalogs: Record<string, unknown> = {};
for (const scope of ["studyAifg", "studyRxjs", "studyEip", "studyCommon"])
  catalogs[scope] = JSON.parse(
    readFileSync(
      join(target, "apps/dotln/public/i18n", scope, "en.json"),
      "utf8",
    ),
  );
const lostParameters = new Set<string>();
const missingKeys = new Set<string>();
const usedKeys = new Set<string>();
const t = (key: string, parameters: Record<string, string | number> = {}) => {
  const value = key
    .split(".")
    .reduce<unknown>(
      (entry, part) => (entry as Record<string, unknown> | undefined)?.[part],
      catalogs,
    );
  if (typeof value !== "string") {
    missingKeys.add(key);
    return key;
  }
  usedKeys.add(key);
  return value.replace(/\{\{\s*([^{}\s]+)\s*\}\}/g, (_, name: string) => {
    if (parameters[name] === undefined) {
      lostParameters.add(`${key}#${name}`);
      return "";
    }
    return String(parameters[name]);
  });
};

const normal = (value: unknown): unknown => JSON.parse(JSON.stringify(value));
const differences = (
  a: unknown,
  b: unknown,
  path = "",
  out: [string, unknown, unknown][] = [],
) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) out.push([`${path}.length`, a.length, b.length]);
    for (let i = 0; i < Math.min(a.length, b.length); i++)
      differences(a[i], b[i], `${path}[${i}]`, out);
  } else if (a && b && typeof a === "object" && typeof b === "object") {
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)]))
      differences(
        (a as Record<string, unknown>)[k],
        (b as Record<string, unknown>)[k],
        `${path}.${k}`,
        out,
      );
  } else if (a !== b) out.push([path, a, b]);
  return out;
};
const recordsIn = (root: string) =>
  ["aifg", "rxjs", "eip"].flatMap((work) => {
    const dir = join(root, "libs/shared/catalog/src/studies", work);
    return readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")));
  });
const newRecords = new Map(recordsIn(target).map((r) => [r.id, r]));
const rows = [];
let runs = 0;
let frames = 0;
let leafDifferences = 0;
let sameRuns = 0;
for (const oldRecord of recordsIn(old)) {
  const record = newRecords.get(oldRecord.id);
  const row = {
    slug: oldRecord.slug,
    work: oldRecord.work,
    runs: 0,
    frames: 0,
    differingRuns: 0,
    differences: 0,
    numeric: 0,
    text: 0,
    other: 0,
    samples: [] as unknown[],
    parametersEqual:
      JSON.stringify(oldRecord.example.parameters) ===
      JSON.stringify(record?.example.parameters),
  };
  rows.push(row);
  const oldPath = oldRecord.visual?.model;
  const newPath = record?.visual?.model;
  if (!oldPath || !newPath) {
    (row as Record<string, unknown>).noModel = true;
    continue;
  }
  const oldModel = (await oldModels[oldPath]()).model as (
    p: unknown,
  ) => Record<string, unknown>;
  const newModel = (await newModels[newPath]()).model as (
    p: unknown,
    tr: typeof t,
  ) => Record<string, unknown>;
  const defaults = oldRecord.example.parameters;
  const first = oldModel(defaults);
  const inputs = (first["inputs"] ?? []) as {
    name: string;
    min: number;
    max: number;
    step: number;
  }[];
  const cases = [defaults];
  for (const input of inputs) {
    const count = Math.round((input.max - input.min) / input.step);
    for (let i = 0; i <= count; i++) {
      const value = Number((input.min + i * input.step).toFixed(10));
      if (value !== defaults[input.name])
        cases.push({ ...defaults, [input.name]: value });
    }
  }
  for (const parameters of cases) {
    let before: unknown;
    let after: unknown;
    let beforeError: string | null = null;
    let afterError: string | null = null;
    try {
      before = normal(oldModel(parameters));
    } catch (e) {
      beforeError = String(e);
    }
    try {
      after = normal(newModel(parameters, t));
    } catch (e) {
      afterError = String(e);
    }
    runs++;
    row.runs++;
    const ticks =
      (before as {
        motion?: { frames: unknown[] };
        flow?: { frames: unknown[] };
        marbles?: { frames: unknown[] };
      }) ?? {};
    const count =
      (ticks.motion ?? ticks.flow ?? ticks.marbles)?.frames.length ?? 0;
    frames += count;
    row.frames += count;
    if (beforeError !== afterError) {
      row.differingRuns++;
      row.other++;
      row.samples.push({ parameters, beforeError, afterError });
      continue;
    }
    const found = differences(before, after);
    if (!found.length) {
      sameRuns++;
      continue;
    }
    row.differingRuns++;
    row.differences += found.length;
    leafDifferences += found.length;
    for (const [path, a, b] of found) {
      if (typeof a === "number" || typeof b === "number") row.numeric++;
      else if (typeof a === "string" && typeof b === "string") row.text++;
      else row.other++;
      if (row.samples.length < 400)
        row.samples.push({
          isDefault: parameters === defaults,
          path,
          before: a,
          after: b,
        });
    }
  }
}
const totals = rows.reduce(
  (sum, r) => ({
    numeric: sum.numeric + r.numeric,
    text: sum.text + r.text,
    other: sum.other + r.other,
  }),
  { numeric: 0, text: 0, other: 0 },
);
writeFileSync(
  output,
  JSON.stringify(
    {
      subject: "target working tree against git f0e7087 (tree 80145e0)",
      studies: rows.length,
      runs,
      frames,
      sameRuns,
      leafDifferences,
      totals,
      lostParameters: [...lostParameters],
      missingKeys: [...missingKeys],
      usedKeys: usedKeys.size,
      rows,
    },
    null,
    1,
  ) + "\n",
);
console.log(
  JSON.stringify({
    studies: rows.length,
    runs,
    frames,
    sameRuns,
    leafDifferences,
    totals,
    lost: lostParameters.size,
    missing: missingKeys.size,
    usedKeys: usedKeys.size,
  }),
);
