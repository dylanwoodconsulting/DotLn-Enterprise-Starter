// VER-001's independent observations. This writes no target file.
import { readFileSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

if (process.argv.length !== 3) {
  throw new Error("usage: ver-001-engine-probe.mjs <target-worktree>");
}

const target = realpathSync(process.argv[2]);
const { build } = await import(
  pathToFileURL(join(target, "node_modules/esbuild/lib/main.js")).href
);
const source = readFileSync(
  new URL("./ver-001-engine-probe.ts", import.meta.url),
  "utf8",
);
const result = await build({
  stdin: { contents: source, resolveDir: target, loader: "ts" },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
});
await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].contents).toString("base64")}`
);
