// Compare two crawls of the twenty enterprise pattern studies frame by frame. Adapted from
// WO-034's comparator: it takes the two captures and the output as arguments, so its control can
// run it on a copy, and it admits one kind of difference, the narrow register's state headings in
// the frames the order's narrow-heading decision names, with every other text node of those frames
// equal. Any other difference, a missing or added frame, a page error or a short inventory exits
// non-zero.
// Usage: node compare-dom.mjs <before.json[.gz]> <after.json[.gz]> <diff.json>
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { gunzipSync } from "node:zlib";

const [beforePath, afterPath, output] = process.argv.slice(2);
if (!beforePath || !afterPath || !output)
  throw new Error(
    "usage: compare-dom.mjs <before.json[.gz]> <after.json[.gz]> <diff.json>",
  );

// The frames the narrow register's heading decision changes: every step of these studies at 360.
const narrowRegisterFrames = {
  viewport: 360,
  slugs: ["service-layer", "data-transfer-object", "record-set"],
};

const read = (path) => {
  const stored = readFileSync(path);
  const bytes = path.endsWith(".gz") ? gunzipSync(stored) : stored;
  return {
    name: basename(path),
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    value: JSON.parse(bytes),
  };
};

/** What left one sequence and what arrived in the other, by their longest common subsequence. */
function sequenceDiff(before, after) {
  const table = Array.from(
    { length: before.length + 1 },
    () => new Uint32Array(after.length + 1),
  );
  for (let i = before.length - 1; i >= 0; i--)
    for (let j = after.length - 1; j >= 0; j--)
      table[i][j] =
        before[i] === after[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
  const removed = [];
  const added = [];
  let i = 0;
  let j = 0;
  while (i < before.length && j < after.length) {
    if (before[i] === after[j]) {
      i++;
      j++;
    } else if (table[i + 1][j] >= table[i][j + 1])
      removed.push({ index: i, text: before[i++] });
    else added.push({ index: j, text: after[j++] });
  }
  while (i < before.length) removed.push({ index: i, text: before[i++] });
  while (j < after.length) added.push({ index: j, text: after[j++] });
  return { removed, added };
}

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const key = ({ slug, viewport, step }) => `${slug}/${viewport}/${step}`;
// A frame's text without its register headings, which must not change even where they may.
const withoutHeadings = ({ nodes, headings }) => {
  const marked = new Set(headings);
  return nodes.filter((_, index) => !marked.has(index));
};
const headingsOf = ({ nodes, headings }) =>
  headings.map((index) => nodes[index]);
const permitted = ({ slug, viewport }) =>
  viewport === narrowRegisterFrames.viewport &&
  narrowRegisterFrames.slugs.includes(slug);

const before = read(beforePath);
const after = read(afterPath);
const candidates = new Map(
  after.value.frames.map((frame) => [key(frame), frame]),
);
const differences = [];
const missing = [];
for (const old of before.value.frames) {
  const current = candidates.get(key(old));
  if (!current) {
    missing.push(key(old));
    continue;
  }
  candidates.delete(key(old));
  if (same(old.nodes, current.nodes) && same(old.labels, current.labels))
    continue;
  const allowed =
    permitted(old) &&
    same(withoutHeadings(old), withoutHeadings(current)) &&
    same(old.labels, current.labels);
  differences.push({
    slug: old.slug,
    viewport: old.viewport,
    step: old.step,
    allowed,
    nodes: sequenceDiff(old.nodes, current.nodes),
    ...(same(old.labels, current.labels)
      ? {}
      : { labels: sequenceDiff(old.labels, current.labels) }),
  });
}
// Each named study's headings before and after, read from its first frame at the narrow width.
const headingChanges = narrowRegisterFrames.slugs.map((slug) => {
  const first = (capture) =>
    capture.value.frames.find(
      (frame) =>
        frame.slug === slug &&
        frame.viewport === narrowRegisterFrames.viewport &&
        frame.step === 0,
    );
  const [old, current] = [first(before), first(after)];
  return {
    slug,
    before: old ? headingsOf(old) : null,
    after: current ? headingsOf(current) : null,
  };
});
const inventory = ({ value }) =>
  value.studies === 20 &&
  value.statesStudies === 16 &&
  value.errors.length === 0;
const result = {
  comparedAt: new Date().toISOString(),
  sources: [before, after].map(({ name, bytes, sha256, value }) => ({
    name,
    bytes,
    sha256,
    capturedAt: value.capturedAt,
    studies: value.studies,
    statesStudies: value.statesStudies,
    viewports: value.viewports,
    frames: value.frameCount,
    errors: value.errors,
  })),
  permittedFrames: narrowRegisterFrames,
  missing,
  added: [...candidates.keys()],
  differingFrames: differences.length,
  allowedFrames: differences.filter(({ allowed }) => allowed).length,
  unexpectedFrames: differences.filter(({ allowed }) => !allowed).length,
  headingChanges,
  differences,
};
writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(
  JSON.stringify({
    beforeFrames: before.value.frameCount,
    afterFrames: after.value.frameCount,
    differingFrames: result.differingFrames,
    allowedFrames: result.allowedFrames,
    unexpectedFrames: result.unexpectedFrames,
    missing: missing.length,
    added: candidates.size,
  }),
);
if (
  !inventory(before) ||
  !inventory(after) ||
  missing.length ||
  candidates.size ||
  result.unexpectedFrames
)
  process.exitCode = 1;
