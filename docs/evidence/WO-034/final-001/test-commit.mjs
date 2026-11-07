// FINAL-001: run the Tools unit suite on one commit of the series, exported with git archive.
// Usage: node test-commit.mjs <target worktree> <commit> <scratch dir>
// The export shares the target worktree's node_modules (the lockfile is unchanged in the series).
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, symlinkSync } from "node:fs";
import { join, resolve } from "node:path";

const [target, commit, scratch] = process.argv.slice(2);
if (!target || !commit || !scratch)
  throw new Error("usage: test-commit.mjs <target> <commit> <scratch>");
const copy = resolve(scratch, `export-${commit}`);
if (existsSync(copy)) rmSync(copy, { recursive: true, force: true });
mkdirSync(copy, { recursive: true });
const archive = execFileSync("git", ["-C", target, "archive", commit], {
  maxBuffer: 1 << 30,
});
execFileSync("tar", ["-x", "-C", copy], { input: archive });
symlinkSync(join(resolve(target), "node_modules"), join(copy, "node_modules"));
const result = spawnSync(
  "node",
  [
    "node_modules/vitest/vitest.mjs",
    "run",
    "--config",
    "libs/features/tools/vite.config.mts",
  ],
  { cwd: copy, stdio: "inherit" },
);
rmSync(copy, { recursive: true, force: true });
process.exitCode = result.status ?? 1;
