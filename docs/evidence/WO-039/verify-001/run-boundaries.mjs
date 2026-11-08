import { copyFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

const [scratch, output] = process.argv.slice(2).map((path) => resolve(path));
const test = "libs/features/tools/src/lib/studies/wo039-verifier.spec.ts";
copyFileSync(
  new URL("./boundaries.probe.ts", import.meta.url),
  join(scratch, test),
);
const args = [
  "node_modules/vitest/vitest.mjs",
  "run",
  "--config",
  "libs/features/tools/vite.config.mts",
  "src/lib/studies/wo039-verifier.spec.ts",
];
const result = spawnSync(process.execPath, args, {
  cwd: scratch,
  encoding: "utf8",
  timeout: 120000,
  env: { ...process.env, NX_DAEMON: "false", NX_ISOLATE_PLUGINS: "false" },
});
const log =
  `${result.stdout ?? ""}\n${result.stderr ?? ""}`
    .replaceAll(scratch, "<scratch copy>")
    .trimEnd() + "\n";
writeFileSync(join(output, "boundaries.log"), log);
writeFileSync(
  join(output, "boundaries.json"),
  JSON.stringify(
    {
      capturedAt: new Date().toISOString(),
      command: ["node", ...args],
      exitCode: result.status,
      passed: result.status === 0,
    },
    null,
    2,
  ) + "\n",
);
console.log(log);
process.exitCode = result.status ?? 1;
