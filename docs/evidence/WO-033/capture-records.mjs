import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const git = (...args) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8" });
const roots = [
  "docs/evidence/",
  "docs/verifications/",
  "docs/final-reviews/",
  "docs/planning/refutations/",
  "docs/planning/entropy-reviews/",
  "docs/planning/passes/",
];
const paths = git("ls-files", "-z")
  .split("\0")
  .filter(
    (path) =>
      !path.startsWith("docs/evidence/WO-033/") &&
      (roots.some((prefix) => path.startsWith(prefix)) ||
        /^docs\/planning\/[^/]+-2026-\d{2}-\d{2}\.md$/u.test(path)),
  )
  .sort();
const files = paths.map((path) => ({
  path,
  sha256: createHash("sha256")
    .update(readFileSync(join(root, path)))
    .digest("hex"),
}));

writeFileSync(
  new URL("records-before.json", import.meta.url),
  `${JSON.stringify({ schemaVersion: 1, baselineCommit: git("rev-parse", "HEAD").trim(), roots, files }, null, 2)}\n`,
  { flag: "wx" },
);
console.log(`captured ${files.length}`);
