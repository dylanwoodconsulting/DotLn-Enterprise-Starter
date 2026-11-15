// Bundle the final reviewer's probe in memory against an engine root: the target worktree, or an
// export of the base engine. esbuild always comes from the target worktree's node_modules.
import { readFileSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const target = realpathSync(process.argv[2]);
const engineRoot = realpathSync(process.argv[3]);
const { build } = await import(
  pathToFileURL(join(target, "node_modules/esbuild/lib/main.js"))
);
const result = await build({
  stdin: {
    contents: readFileSync(
      new URL("./final-001-probe.ts", import.meta.url),
      "utf8",
    ),
    resolveDir: engineRoot,
    loader: "ts",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  logLevel: "warning",
});
await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].contents).toString("base64")}`
);
