// VER-003's audit, sharing no code with the target's checks: resolves every v1 record through the
// served catalogs and compares it with the pre-migration record in git f0e7087, then judges the
// forty AI for Games ids, their state, reviewers and references, and the summary.
// Usage: node record-audit.mjs <target worktree> <directory holding the old tree> <results.json>
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const [T, O, output] = process.argv.slice(2);
const json = (p) => JSON.parse(readFileSync(p, "utf8"));
const scopes = Object.fromEntries(
  ["studyAifg", "studyRxjs", "studyEip", "studyCommon"].map((s) => [
    s,
    json(join(T, "apps/dotln/public/i18n", s, "en.json")),
  ]),
);
const isKey = (v) => typeof v === "string" && /^study[A-Z][A-Za-z]*\./.test(v);
const usedKeys = new Set();
const at = (key) => {
  const [scope, ...parts] = key.split(".");
  const value = parts.reduce((e, p) => e?.[p], scopes[scope]);
  if (typeof value === "string") usedKeys.add(key);
  return value;
};
const resolve = (v) =>
  Array.isArray(v)
    ? v.map(resolve)
    : v && typeof v === "object"
      ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, resolve(x)]))
      : isKey(v)
        ? at(v)
        : v;
const canon = (v) =>
  Array.isArray(v)
    ? v.map(canon)
    : v && typeof v === "object"
      ? Object.fromEntries(
          Object.entries(v)
            .sort(([a], [b]) => (a < b ? -1 : 1))
            .map(([k, x]) => [k, canon(x)]),
        )
      : v;
const dir = (root, w) => join(root, "libs/shared/catalog/src/studies", w);
const works = ["aifg", "rxjs", "eip"];
const results = {
  records: 0,
  differences: [],
  schemas: {},
  literalProse: [],
  doubleBraceInRecordText: [],
};
for (const w of works)
  for (const f of readdirSync(dir(T, w)).filter((n) => n.endsWith(".json"))) {
    const now = json(join(dir(T, w), f));
    const was = json(join(dir(O, w), f));
    results.records++;
    results.schemas[now.schema] = (results.schemas[now.schema] ?? 0) + 1;
    const { schema: _a, ...a } = resolve(now);
    const { schema: _b, ...b } = was;
    if (JSON.stringify(canon(a)) !== JSON.stringify(canon(b)))
      results.differences.push(`${w}/${f}`);
    const walk = (v, path) => {
      if (typeof v === "string") {
        if (isKey(v) && /\{\{/.test(at(v) ?? ""))
          results.doubleBraceInRecordText.push(`${f}:${path}`);
        if (!isKey(v) && / /.test(v) && !/^https?:/.test(v))
          results.literalProse.push(`${f}:${path}: ${v.slice(0, 60)}`);
      } else if (v && typeof v === "object")
        for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
    };
    walk(now, "");
  }
// The forty ids.
const first = readdirSync(dir(O, "aifg")).length;
const aifg = readdirSync(dir(T, "aifg"))
  .filter((n) => n.endsWith(".json"))
  .map((f) => json(join(dir(T, "aifg"), f)));
const named = [
  "105",
  "162",
  "108",
  "169",
  "192",
  "196",
  "111",
  "134",
  "137",
  "139",
  "143",
  "157",
  "163",
  "166",
  "173",
  "90",
  "94",
  "101",
  "102",
  "103",
].map((n) => `aifg-a:${n}`);
const base = aifg
  .filter((r) => !named.includes(r.id))
  .map((r) => r.id)
  .sort();
const summary = json(
  join(T, "libs/shared/catalog/src/studies/studies-summary.json"),
);
const summaryAifg = summary.works?.find((x) => x.work === "aifg");
results.aifg = {
  oldDirectoryEntries: first,
  records: aifg.length,
  orderTwentyPresent: named.filter((id) => aifg.some((r) => r.id === id))
    .length,
  firstBatchIds: base.length,
  allChecked: aifg.every((r) => r.authored.state === "checked"),
  minReviewers: Math.min(
    ...aifg.map((r) => new Set(r.authored.reviewedBy.map(at)).size),
  ),
  referenceIncomplete: aifg.flatMap((r) =>
    r.references
      .filter(
        (x) =>
          !x.url ||
          (!x.accessed && !x.date && !x.retrieved) ||
          !at(x.title) ||
          !at(x.supports),
      )
      .map(() => r.slug),
  ),
  summaryIds: summaryAifg?.studies?.length,
  summaryMatches:
    JSON.stringify((summaryAifg?.studies ?? []).map((s) => s.id).sort()) ===
    JSON.stringify(aifg.map((r) => r.id).sort()),
};
// The order's twenty: module, spec beside it, importing the module, driving the example.
results.twenty = named.map((id) => {
  const r = aifg.find((x) => x.id === id);
  const module =
    r.pseudocode.executable?.module ?? r.executable?.module ?? r.visual?.model;
  const spec = module?.replace(/\.ts$/, ".spec.ts");
  const text =
    spec && existsSync(join(T, spec))
      ? readFileSync(join(T, spec), "utf8")
      : "";
  const base = module?.split("/").at(-1).replace(/\.ts$/, "");
  return {
    slug: r.slug,
    module,
    executableKind: r.pseudocode.executable?.kind ?? r.executable?.kind ?? null,
    moduleExists: !!module && existsSync(join(T, module)),
    specExists: !!text,
    importsModule: text.includes(`./${base}'`),
    callsModel: /\bmodel\(/.test(text),
    usesExampleParameters: /example\.parameters/.test(text),
  };
});
// Catalog keys no record or model reaches are dead prose.
writeFileSync(output, JSON.stringify(results, null, 1) + "\n");
const { twenty, ...head } = results;
console.log(JSON.stringify(head, null, 1));
console.log(
  twenty.filter(
    (r) =>
      !(
        r.moduleExists &&
        r.specExists &&
        r.importsModule &&
        r.callsModel &&
        r.usesExampleParameters
      ),
  ),
);
console.log(
  "twenty kinds",
  [...new Set(twenty.map((r) => r.executableKind))],
  "module sample",
  twenty[0].module,
);
