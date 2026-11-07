// VER-001: placeholders in the first batch's presentation modules named for a step count while the
// value they carry is a time in seconds (a step multiplied by the example's time step).
// Usage: node time-placeholders.mjs <target worktree> [results.json]
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [target, out] = process.argv.slice(2);
const firstBatch = [
  "align",
  "arrive",
  "equilibrium-fallback",
  "face",
  "fixed-formations",
  "flocking",
  "formation-pattern-interface",
  "group-movement",
  "making-the-creatures",
  "priority-steering",
  "pursue",
  "scalable-formations",
  "seek",
  "separation",
  "slot-assignment",
  "steering-pipeline",
  "two-level-formation-steering",
  "velocity-matching",
  "wander",
  "weighted-blending",
];
const catalog = JSON.parse(
  readFileSync(
    join(target, "apps/dotln/public/i18n/studyAifg/en.json"),
    "utf8",
  ),
);
const message = (key) =>
  key
    .split(".")
    .slice(1)
    .reduce((node, part) => node?.[part], catalog);
const sites = [];
for (const slug of firstBatch) {
  const lines = readFileSync(
    join(
      target,
      `libs/features/tools/src/lib/studies/movement/${slug}.presentation.ts`,
    ),
    "utf8",
  ).split("\n");
  lines.forEach((line, index) => {
    const match = /\b(\w*[sS]teps?): [^,]*\*\s*[\w.]*timeStep/.exec(line);
    if (!match) return;
    // The message is the nearest t('…') call at or above the parameter.
    const last = (text) =>
      [...text.matchAll(/t\('([^']+)'/g)].at(-1)?.[1] ?? null;
    let key = last(line.slice(0, match.index));
    for (let back = index - 1; back >= Math.max(0, index - 12) && !key; back--)
      key = last(lines[back]);
    sites.push({
      module: `${slug}.presentation.ts`,
      line: index + 1,
      placeholder: match[1],
      code: line.trim(),
      key,
      english: key ? message(key) : null,
    });
  });
}
const result = {
  schemaVersion: 1,
  rule: "placeholders named for what they hold (WO-034 Design)",
  sites,
};
if (out) writeFileSync(out, `${JSON.stringify(result, null, 1)}\n`);
console.log(
  JSON.stringify(
    sites.map(
      ({ module, line, placeholder, english }) =>
        `${module}:${line} {{${placeholder}}} → ${english}`,
    ),
    null,
    1,
  ),
);
