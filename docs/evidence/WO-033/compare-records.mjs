import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  currentPath,
  moveIndex,
} from "../../../scripts/lib/document-moves.mjs";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const manifest = JSON.parse(
  readFileSync(new URL("records-before.json", import.meta.url), "utf8"),
);
assert.equal(manifest.schemaVersion, 1);
assert.ok(
  manifest.files.length > 0,
  "the activation manifest must not be empty",
);
const moves = moveIndex(root);
const authorized = JSON.parse(
  readFileSync(new URL("authorized-appends.json", import.meta.url), "utf8"),
);
assert.equal(authorized.schemaVersion, 1);
assert.equal(authorized.authorization, "WO-033-D007");
assert.equal(authorized.appends.length, 6);
const appends = new Map(authorized.appends.map((row) => [row.path, row]));
assert.deepEqual(
  [...appends.keys()].sort(),
  ["008", "016", "017", "018", "023", "024"].map(
    (id) => `docs/evidence/WO-${id}/decisions.md`,
  ),
);
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
let unchanged = 0;
let preserved = 0;

for (const { path, sha256 } of manifest.files) {
  const destination = currentPath(moves, path);
  let bytes;
  try {
    bytes = readFileSync(join(root, destination));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    console.error(`missing ${destination}`);
    process.exitCode = 1;
    continue;
  }
  const append = appends.get(path);
  if (append) {
    assert.ok(
      Number.isSafeInteger(append.originalBytes) && append.originalBytes > 0,
    );
    assert.ok(
      Number.isSafeInteger(append.appendedBytes) && append.appendedBytes > 0,
    );
    if (
      bytes.length !== append.originalBytes + append.appendedBytes ||
      hash(bytes.subarray(0, append.originalBytes)) !== sha256 ||
      hash(bytes.subarray(append.originalBytes)) !== append.appendedSha256
    ) {
      console.error(
        `changed ${destination}: original prefix or authorized append`,
      );
      process.exitCode = 1;
    } else preserved += 1;
  } else if (hash(bytes) !== sha256) {
    console.error(`changed ${destination}`);
    process.exitCode = 1;
  } else unchanged += 1;
}

console.log(`unchanged ${unchanged}`);
console.log(
  `original bytes preserved ${preserved}; authorized appends ${preserved}`,
);
assert.equal(preserved, 6, "all six authorized appends must be checked");
