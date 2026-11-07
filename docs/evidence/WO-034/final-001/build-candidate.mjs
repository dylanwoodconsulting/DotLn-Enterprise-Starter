// FINAL-001: build the candidate's production bundle into session scratch, leaving the
// target's own dist untouched. Usage: node build-candidate.mjs <target worktree> <output dir>
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const [target, output] = process.argv.slice(2);
if (!target || !output)
  throw new Error("usage: build-candidate.mjs <target worktree> <output dir>");
const result = spawnSync(
  "npx",
  [
    "nx",
    "build",
    "dotln",
    "--configuration=production",
    `--outputPath=${resolve(output)}`,
    "--skip-nx-cache",
  ],
  {
    cwd: resolve(target),
    stdio: "inherit",
    env: { ...process.env, NX_DAEMON: "false", NX_ISOLATE_PLUGINS: "false" },
  },
);
process.exitCode = result.status ?? 1;
