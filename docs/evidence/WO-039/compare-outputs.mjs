// Compare two runs of model-outputs.probe.ts: every model's output digest at every case, and, for
// an enterprise model whose output differs, the first paths at which the two outputs part.
// Usage: node compare-outputs.mjs <base.json> <candidate.json> [result.json]
import { readFileSync, writeFileSync } from "node:fs";

const [basePath, candidatePath, output] = process.argv.slice(2);
if (!basePath || !candidatePath)
  throw new Error(
    "usage: compare-outputs.mjs <base.json> <candidate.json> [result.json]",
  );
const base = JSON.parse(readFileSync(basePath, "utf8"));
const candidate = JSON.parse(readFileSync(candidatePath, "utf8"));

/** The paths at which two values differ, at most `limit` of them, depth first. */
function partings(a, b, path = "", found = [], limit = 12) {
  if (found.length >= limit) return found;
  if (JSON.stringify(a) === JSON.stringify(b)) return found;
  if (a && b && typeof a === "object" && typeof b === "object") {
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)]))
      partings(a[key], b[key], `${path}.${key}`, found, limit);
    return found;
  }
  found.push({ path, base: a ?? null, candidate: b ?? null });
  return found;
}

const differences = [];
const missing = [];
for (const [slug, cases] of Object.entries(base.digests))
  for (const [key, digest] of Object.entries(cases)) {
    const other = candidate.digests[slug]?.[key];
    if (other === undefined) missing.push(`${slug} ${key}`);
    else if (other !== digest)
      differences.push({
        slug,
        case: key,
        partings:
          base.outputs[slug] && candidate.outputs[slug]
            ? partings(base.outputs[slug][key], candidate.outputs[slug][key])
            : [],
      });
  }
const added = Object.entries(candidate.digests).flatMap(([slug, cases]) =>
  Object.keys(cases)
    .filter((key) => base.digests[slug]?.[key] === undefined)
    .map((key) => `${slug} ${key}`),
);
const result = {
  comparedAt: new Date().toISOString(),
  baseCases: base.cases,
  candidateCases: candidate.cases,
  missing,
  added,
  differingCases: differences.length,
  differences,
};
if (output) writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(
  JSON.stringify({
    baseCases: base.cases,
    candidateCases: candidate.cases,
    differingCases: differences.length,
    missing: missing.length,
    added: added.length,
  }),
);
for (const { slug, case: key, partings: at } of differences.slice(0, 10))
  console.log(slug, key, JSON.stringify(at.slice(0, 3)));
if (differences.length || missing.length || added.length) process.exitCode = 1;
