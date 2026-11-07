// VER-001: the 80-line rule as ESLint resolves it for study sources, and as it enforces it.
// Usage: node lint-rule.mjs <copy of the candidate> <results.json>
// Runs in a copy so the enforcement probe never writes into the target worktree.
import { spawnSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const [copyArgument, out] = process.argv.slice(2);
const copy = resolve(copyArgument);
const eslint = (args) =>
  spawnSync(process.execPath, ["node_modules/eslint/bin/eslint.js", ...args], {
    cwd: copy,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
const resolved = {};
for (const file of [
  "libs/features/tools/src/lib/studies/movement/wander.presentation.ts",
  "libs/features/tools/src/lib/studies/movement/flee.presentation.ts",
  "libs/features/tools/src/lib/studies/number-format.ts",
]) {
  const run = eslint(["--print-config", file]);
  resolved[file] =
    run.status === 0
      ? (JSON.parse(run.stdout.slice(run.stdout.indexOf("{"))).rules?.[
          "max-lines-per-function"
        ] ?? null)
      : `print-config exit ${run.status}`;
}
// Enforcement: an 85-line function in a study source must fail a direct ESLint run.
const probe =
  "libs/features/tools/src/lib/studies/movement/verifier-probe.presentation.ts";
const body = Array.from(
  { length: 85 },
  (_, index) => `  const value${index} = ${index};`,
).join("\n");
writeFileSync(
  join(copy, probe),
  `export function longProbe(): number {\n${body}\n  return value84;\n}\n`,
);
const enforced = eslint(["--no-warn-ignored", "--format", "json", probe]);
rmSync(join(copy, probe));
const messages = enforced.stdout.includes("[")
  ? JSON.parse(enforced.stdout.slice(enforced.stdout.indexOf("["))).flatMap(
      (file) => file.messages,
    )
  : [];
const result = {
  resolved,
  enforcement: {
    probe,
    exitCode: enforced.status,
    maxLinesMessages: messages
      .filter((message) => message.ruleId === "max-lines-per-function")
      .map(({ severity, message }) => ({ severity, message })),
  },
};
writeFileSync(out, `${JSON.stringify(result, null, 1)}\n`);
console.log(JSON.stringify(result, null, 1));
