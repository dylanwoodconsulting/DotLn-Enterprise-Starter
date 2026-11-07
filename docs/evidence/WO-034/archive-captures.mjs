// Retain large raw captures losslessly without making every checkout carry their expanded bytes.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { gunzipSync, gzipSync } from "node:zlib";

const root = new URL("./", import.meta.url);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const names = [
  "dom-before.json",
  "dom-after.json",
  "dom-first/dom-before.json",
  "dom-first/dom-after.json",
  "dom-first/dom-diff.json",
];
const captures = names.map((name) => {
  const archivedName = `${name}.gz`;
  const hasRaw = existsSync(new URL(name, root));
  const raw = hasRaw
    ? readFileSync(new URL(name, root))
    : gunzipSync(readFileSync(new URL(archivedName, root)));
  if (hasRaw)
    writeFileSync(new URL(archivedName, root), gzipSync(raw, { level: 9 }));
  const stored = readFileSync(new URL(archivedName, root));
  assert(
    gunzipSync(stored).equals(raw),
    `Lossless verification failed for ${name}`,
  );
  const row = {
    rawName: name,
    rawBytes: raw.length,
    rawSha256: sha256(raw),
    archivedName,
    archivedBytes: stored.length,
    archivedSha256: sha256(stored),
  };
  if (hasRaw) unlinkSync(new URL(name, root));
  return row;
});
writeFileSync(
  new URL("capture-archive.json", root),
  JSON.stringify({ archivedAt: new Date().toISOString(), captures }, null, 2) +
    "\n",
);
console.log(
  JSON.stringify({
    captures: captures.length,
    rawBytes: captures.reduce((sum, row) => sum + row.rawBytes, 0),
    archivedBytes: captures.reduce((sum, row) => sum + row.archivedBytes, 0),
  }),
);
