// Bundle the independent verifier probe in memory against the target's current engine.
import { readFileSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const target = realpathSync(process.argv[2]);
const { build } = await import(
  pathToFileURL(join(target, "node_modules/esbuild/lib/main.js"))
);
const result = await build({
  stdin: {
    contents: readFileSync(
      new URL("./ver-002-probe.ts", import.meta.url),
      "utf8",
    ),
    resolveDir: target,
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
