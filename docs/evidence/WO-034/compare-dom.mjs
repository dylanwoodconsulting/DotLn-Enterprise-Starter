// Compare every captured movement frame and retain the exact allowed wall-study differences.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";

const root = new URL("./", import.meta.url);
const read = (name) => {
  const archived = !existsSync(new URL(name, root));
  const storedName = archived ? `${name}.gz` : name;
  const stored = readFileSync(new URL(storedName, root));
  const bytes = archived ? gunzipSync(stored) : stored;
  return {
    name: storedName,
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    value: JSON.parse(bytes),
  };
};
const before = read("dom-before.json");
const after = read("dom-after.json");
const key = ({ slug, view, step }) => `${slug}/${view}/${step}`;
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
  const fields = {};
  for (const field of ["nodes", "labels"])
    if (JSON.stringify(old[field]) !== JSON.stringify(current[field]))
      fields[field] = Array.from(
        { length: Math.max(old[field].length, current[field].length) },
        (_, index) => ({
          index,
          before: old[field][index] ?? null,
          after: current[field][index] ?? null,
        }),
      ).filter((row) => row.before !== row.after);
  if (Object.keys(fields).length)
    differences.push({
      slug: old.slug,
      view: old.view,
      step: old.step,
      allowed: old.slug === "obstacle-and-wall-avoidance",
      fields,
    });
}
const result = {
  comparedAt: new Date().toISOString(),
  sources: [before, after].map(({ name, bytes, sha256, value }) => ({
    name,
    bytes,
    sha256,
    capturedAt: value.capturedAt,
    studies: value.studies,
    frames: value.frameCount,
    errors: value.errors,
  })),
  missing,
  added: [...candidates.keys()],
  differingFrames: differences.length,
  unexpectedFrames: differences.filter((row) => !row.allowed).length,
  allowedReason:
    "The wall study's same-setup ray comparison, moment name, limits and honest caption are the explicit criterion-6 changes; simulations are unchanged.",
  differences,
};
writeFileSync(
  new URL("dom-diff.json", root),
  JSON.stringify(result, null, 2) + "\n",
);
writeFileSync(
  new URL("transfer.json", root),
  JSON.stringify(
    {
      measurement: before.value.firstReading.measurement,
      before: before.value.firstReading,
      after: after.value.firstReading,
      gzipDelta: after.value.firstReading.gzip - before.value.firstReading.gzip,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    beforeFrames: before.value.frameCount,
    afterFrames: after.value.frameCount,
    differingFrames: result.differingFrames,
    unexpectedFrames: result.unexpectedFrames,
    missing: missing.length,
    added: candidates.size,
    gzipBefore: before.value.firstReading.gzip,
    gzipAfter: after.value.firstReading.gzip,
  }),
);
assert(before.value.studies === 40 && after.value.studies === 40);
assert(before.value.errors.length === 0 && after.value.errors.length === 0);
assert(
  missing.length === 0 &&
    candidates.size === 0 &&
    result.unexpectedFrames === 0,
);
