// Runs one of the repair's probes against a target worktree. It bundles the probe in memory with
// the target's own esbuild and writes no file anywhere.
//
//   node docs/evidence/WO-036/repair-1/probe.mjs <target-worktree> <probe.ts> [arguments]
import { readFileSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const [, , worktree, probe, ...rest] = process.argv;
if (!worktree || !probe) {
  throw new Error("usage: probe.mjs <target-worktree> <probe.ts> [arguments]");
}

const target = realpathSync(worktree);
const { build } = await import(
  pathToFileURL(join(target, "node_modules/esbuild/lib/main.js")).href
);
const result = await build({
  stdin: {
    contents: readFileSync(new URL(`./${probe}`, import.meta.url), "utf8"),
    resolveDir: target,
    loader: "ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
  define: { PROBE_ARGS: JSON.stringify(rest) },
});
await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].contents).toString("base64")}`
);
