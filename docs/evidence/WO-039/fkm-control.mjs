// Foreign Key Mapping's read-limit spec run twice on a fresh copy of the target: once as the copy
// stands, once with the copy carrying the integrated base's foreign-key-mapping.simulation.ts.
// The spec's limit test must pass on the first arm and fail on the second. Modelled on WO-034's
// negative-controls.mjs; it never writes the target itself.
// Usage: node fkm-control.mjs <target worktree> <base commit> <fresh scratch> <output directory>
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

const [target, base, scratch, output] = process.argv.slice(2);
if (!target || !base || !scratch || !output)
  throw new Error(
    "usage: fkm-control.mjs <target> <base commit> <fresh scratch> <output directory>",
  );
const root = resolve(target);
const copy = resolve(scratch);
const results = resolve(output);
mkdirSync(copy);
mkdirSync(results, { recursive: true });
const files = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { cwd: root, encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean);
for (const path of files) {
  const destination = join(copy, path);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(join(root, path), destination);
}
symlinkSync(join(root, "node_modules"), join(copy, "node_modules"), "dir");
// The logs name the copy and the target by placeholders, so no machine's paths are filed.
const portable = (text) =>
  [
    [realpathSync(copy), "<scratch copy>"],
    [copy, "<scratch copy>"],
    [root, "<target worktree>"],
  ].reduce((written, [path, name]) => written.replaceAll(path, name), text);

const subject =
  "libs/features/tools/src/lib/studies/poeaa/foreign-key-mapping.simulation.ts";
const test =
  "stops at its read limit only when the next key still to resolve needs a read";
const candidate = readFileSync(join(copy, subject), "utf8");
const baseline = execFileSync("git", ["show", `${base}:${subject}`], {
  cwd: root,
  encoding: "utf8",
});
const sha256 = (text) => createHash("sha256").update(text).digest("hex");
const arms = [
  { name: "candidate", text: candidate, expected: 0 },
  { name: "control", text: baseline, expected: 1 },
];
const args = [
  "node_modules/vitest/vitest.mjs",
  "run",
  "--config",
  "libs/features/tools/vite.config.mts",
  "src/lib/studies/poeaa/foreign-key-mapping.model.spec.ts",
  "-t",
  test,
];
const recorded = [];
for (const { name, text, expected } of arms) {
  writeFileSync(join(copy, subject), text);
  const result = spawnSync(process.execPath, args, {
    cwd: copy,
    env: { ...process.env, NX_DAEMON: "false", NX_ISOLATE_PLUGINS: "false" },
    encoding: "utf8",
    timeout: 120000,
    maxBuffer: 16 * 1024 * 1024,
  });
  // Each log ends in one newline, so a log that ends in blank lines passes git diff --check.
  const log = `${portable(`${result.stdout ?? ""}\n${result.stderr ?? ""}`).trimEnd()}\n`;
  writeFileSync(join(results, `${name}.log`), log);
  const testFailed = log.includes("FAIL") && log.includes(test);
  recorded.push({
    name,
    simulation: name === "control" ? `${base}:${subject}` : subject,
    simulationSha256: sha256(text),
    command: ["node", ...args],
    exitCode: result.status,
    testFailed,
    met:
      expected === 0 ? result.status === 0 : result.status === 1 && testFailed,
    log: `${name}.log`,
  });
  console.log(JSON.stringify(recorded.at(-1)));
}
writeFileSync(join(copy, subject), candidate);
writeFileSync(
  join(results, "results.json"),
  `${JSON.stringify({ base, test, arms: recorded }, null, 2)}\n`,
);
if (recorded.some(({ met }) => !met)) process.exitCode = 1;
