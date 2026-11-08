// The comparator's control: the base crawl compared with a copy of itself in which one text node
// outside every frame the narrow-heading decision names has changed. The comparator must refuse it,
// exiting non-zero, so it is shown to refuse a difference it does not permit.
// Usage: node comparator-control.mjs <base crawl.json[.gz]> <scratch directory> <result.json>
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gunzipSync } from "node:zlib";

const [basePath, scratch, output] = process.argv.slice(2);
if (!basePath || !scratch || !output)
  throw new Error(
    "usage: comparator-control.mjs <base crawl> <scratch directory> <result.json>",
  );
const stored = readFileSync(basePath);
const base = JSON.parse(basePath.endsWith(".gz") ? gunzipSync(stored) : stored);
// One text node of Identity Map's first frame at 1440, a study and a width the decision leaves alone.
const frame = base.frames.find(
  ({ slug, viewport, step }) =>
    slug === "identity-map" && viewport === 1440 && step === 0,
);
const index = frame.nodes.findIndex((_, at) => !frame.headings.includes(at));
const original = frame.nodes[index];
frame.nodes[index] = `${original} (changed)`;
mkdirSync(scratch, { recursive: true });
const changed = join(scratch, "dom-control.json");
writeFileSync(changed, `${JSON.stringify(base)}\n`);
const comparator = new URL("./compare-dom.mjs", import.meta.url).pathname;
const result = spawnSync(
  process.execPath,
  [comparator, basePath, changed, join(scratch, "dom-control-diff.json")],
  { encoding: "utf8" },
);
const summary = JSON.parse(result.stdout.trim().split("\n").at(-1));
const record = {
  changedFrame: {
    slug: frame.slug,
    viewport: frame.viewport,
    step: frame.step,
    node: index,
  },
  original,
  command:
    "node compare-dom.mjs <base crawl> <base crawl with one node changed> <diff>",
  exitCode: result.status,
  summary,
  refused: result.status !== 0 && summary.unexpectedFrames === 1,
};
writeFileSync(output, `${JSON.stringify(record, null, 2)}\n`);
console.log(
  JSON.stringify({ exitCode: record.exitCode, refused: record.refused }),
);
if (!record.refused) process.exitCode = 1;
