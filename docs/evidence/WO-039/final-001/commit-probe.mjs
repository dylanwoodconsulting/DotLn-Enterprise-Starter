// Runs the checks that cover one commit of the reviewed series on a fresh export of that commit,
// so the series can be read one commit at a time: an export of the commit's tree, the target's
// installed dependencies linked in, and the named commands run from the export's root. Modelled
// on the order's fkm-control.mjs; it never writes the target itself.
// Usage: node commit-probe.mjs <target worktree> <commit> <fresh scratch> <output directory> <probe>...
//   where a probe is tools-types | states-specs | tooling-tests | studies-check
import { execFileSync, spawnSync } from "node:child_process";
import {
  mkdirSync,
  readdirSync,
  realpathSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";

const [target, commit, scratch, output, ...probes] = process.argv.slice(2);
if (!target || !commit || !scratch || !output || probes.length === 0)
  throw new Error(
    "usage: commit-probe.mjs <target> <commit> <fresh scratch> <output directory> <probe>...",
  );
const root = resolve(target);
const copy = resolve(scratch);
const results = resolve(output);
mkdirSync(copy);
mkdirSync(results, { recursive: true });
const tree = execFileSync("git", ["rev-parse", `${commit}^{tree}`], {
  cwd: root,
  encoding: "utf8",
}).trim();
// The export holds the commit's tracked files alone; dependencies are the target's, linked in.
const archive = execFileSync("git", ["archive", "--format=tar", commit], {
  cwd: root,
  maxBuffer: 512 * 1024 * 1024,
});
execFileSync("tar", ["-x", "-C", copy], { input: archive });
symlinkSync(join(root, "node_modules"), join(copy, "node_modules"), "dir");
const portable = (text) =>
  [
    [realpathSync(copy), "<export>"],
    [copy, "<export>"],
    [root, "<target worktree>"],
  ].reduce((written, [path, name]) => written.replaceAll(path, name), text);

const commands = {
  "tools-types": [
    [
      "node_modules/typescript/bin/tsc",
      "-p",
      "libs/features/tools/tsconfig.lib.json",
      "--noEmit",
      "--pretty",
      "false",
    ],
    [
      "node_modules/typescript/bin/tsc",
      "-p",
      "libs/features/tools/tsconfig.spec.json",
      "--noEmit",
      "--pretty",
      "false",
    ],
  ],
  "states-specs": [
    [
      "node_modules/vitest/vitest.mjs",
      "run",
      "--config",
      "libs/features/tools/vite.config.mts",
      "src/lib/composites/study-visuals/drawn-text.spec.ts",
      "src/lib/composites/study-visuals/states/states-register.spec.ts",
      "src/lib/composites/study-visuals/states/states.spec.ts",
    ],
  ],
  // Every tools/*.test.mjs the export holds, as npm run test:tooling runs them.
  "tooling-tests": [
    [
      "--test",
      ...readdirSync(join(copy, "tools"))
        .filter((file) => file.endsWith(".test.mjs"))
        .sort()
        .map((file) => join("tools", file)),
    ],
  ],
  "studies-check": [["tools/scripts/catalog/check-studies.mjs"]],
};

const recorded = [];
for (const probe of probes) {
  const runs = commands[probe];
  if (!runs) throw new Error(`unknown probe ${probe}`);
  for (const [index, args] of runs.entries()) {
    const result = spawnSync(process.execPath, args, {
      cwd: copy,
      env: { ...process.env, NX_DAEMON: "false", NX_ISOLATE_PLUGINS: "false" },
      encoding: "utf8",
      timeout: 600000,
      maxBuffer: 64 * 1024 * 1024,
    });
    const name = runs.length > 1 ? `${probe}-${index + 1}` : probe;
    // Each line loses the trailing whitespace a tool prints, so the log passes git diff --check.
    const log = `${portable(`${result.stdout ?? ""}\n${result.stderr ?? ""}`)
      .split("\n")
      .map((line) => line.trimEnd())
      .join("\n")
      .trimEnd()}\n`;
    writeFileSync(join(results, `${name}.log`), log);
    recorded.push({
      probe: name,
      command: ["node", ...args],
      exitCode: result.status,
      log: `${name}.log`,
    });
    console.log(JSON.stringify(recorded.at(-1)));
  }
}
writeFileSync(
  join(results, "results.json"),
  `${JSON.stringify({ commit, tree, probes: recorded }, null, 2)}\n`,
);
if (recorded.some(({ exitCode }) => exitCode !== 0)) process.exitCode = 1;
