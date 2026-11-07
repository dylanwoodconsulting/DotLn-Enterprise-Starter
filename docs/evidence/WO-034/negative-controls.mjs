// Run the corpus guard on a source copy, then on each of its two known escape forms.
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

const [target, scratch, output] = process.argv
  .slice(2)
  .map((path) => resolve(path));
if (!target || !scratch || !output)
  throw new Error(
    "usage: negative-controls.mjs <target> <fresh scratch> <output directory>",
  );
mkdirSync(scratch);
mkdirSync(output, { recursive: true });
const paths = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { cwd: target, encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean);
for (const path of paths) {
  const destination = join(scratch, path);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(join(target, path), destination);
}
symlinkSync(join(target, "node_modules"), join(scratch, "node_modules"), "dir");
const subject =
  "libs/features/tools/src/lib/studies/movement/seek.presentation.ts";
const source = readFileSync(join(scratch, subject), "utf8");
const variants = [
  { name: "candidate", text: source, expected: 0 },
  {
    name: "appended-literal",
    text: source.replace(
      "label: t('studyAifg.seek.model.labels.velocity')",
      "label: t('studyAifg.seek.model.labels.velocity') + ' UNTRANSLATED_SUFFIX'",
    ),
    expected: 1,
  },
  {
    name: "literal-parameter",
    text: source.replace(
      "seconds: fixed(seconds),",
      "seconds: 'UNTRANSLATED_PARAMETER',",
    ),
    expected: 1,
  },
];
const results = [];
for (const { name, text, expected } of variants) {
  if (expected && text === source)
    throw new Error(`Injection did not apply: ${name}`);
  writeFileSync(join(scratch, subject), text);
  const args = [
    "node_modules/vitest/vitest.mjs",
    "run",
    "--config",
    "libs/features/tools/vite.config.mts",
    "src/lib/studies/study-models.spec.ts",
    "-t",
    "routes visible narration",
  ];
  const result = spawnSync(process.execPath, args, {
    cwd: scratch,
    env: { ...process.env, NX_DAEMON: "false", NX_ISOLATE_PLUGINS: "false" },
    encoding: "utf8",
    timeout: 120000,
    maxBuffer: 16 * 1024 * 1024,
  });
  const log = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  writeFileSync(join(output, `${name}.log`), log);
  const guardFailed =
    /FAIL.*study-models\.spec\.ts[\s\S]*routes visible narration/.test(log);
  const met =
    expected === 0 ? result.status === 0 : result.status === 1 && guardFailed;
  results.push({
    name,
    command: ["node", ...args],
    subject,
    injected: expected !== 0,
    exitCode: result.status,
    guardFailed,
    met,
    log: `${name}.log`,
  });
  console.log(JSON.stringify(results.at(-1)));
}
writeFileSync(join(scratch, subject), source);
writeFileSync(
  join(output, "results.json"),
  JSON.stringify(
    {
      sourceSha256: createHash("sha256").update(source).digest("hex"),
      results,
    },
    null,
    2,
  ) + "\n",
);
if (results.some(({ met }) => !met)) process.exitCode = 1;
