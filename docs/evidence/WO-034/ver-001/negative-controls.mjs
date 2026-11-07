// VER-001: the corpus guard against VER-003's two escape forms, with VER-003's own strings, injected
// at places the executor's controls did not use, on a fresh copy of the candidate in scratch.
// Usage: node negative-controls.mjs <target worktree> <fresh scratch dir> <output dir>
import { execFileSync, spawnSync } from "node:child_process";
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";

const [target, scratch, output] = process.argv
  .slice(2)
  .map((path) => resolve(path));
if (!output)
  throw new Error(
    "usage: negative-controls.mjs <target> <fresh scratch> <output>",
  );
mkdirSync(scratch);
mkdirSync(output, { recursive: true });
for (const path of execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { cwd: target, encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean)) {
  mkdirSync(dirname(join(scratch, path)), { recursive: true });
  copyFileSync(join(target, path), join(scratch, path));
}
symlinkSync(join(target, "node_modules"), join(scratch, "node_modules"), "dir");
const movement = "libs/features/tools/src/lib/studies/movement";
const variants = [
  { name: "candidate", expected: "pass" },
  {
    name: "VER-003 appended literal (first batch, wander)",
    file: `${movement}/wander.presentation.ts`,
    from: "label: t('studyAifg.wander.model.labels.target'),",
    to: "label: t('studyAifg.wander.model.labels.target') + ' the runner, in plain English',",
    expected: "fail",
  },
  {
    name: "VER-003 literal message parameter (first batch, arrive)",
    file: `${movement}/arrive.presentation.ts`,
    from: "exampleTarget: fixed(example.target),",
    to: "exampleTarget: 'twenty plain English units',",
    expected: "fail",
  },
  {
    name: "prepended literal (first batch, formation pattern interface)",
    file: `${movement}/formation-pattern-interface.presentation.ts`,
    from: "label: t('studyAifg.formation-pattern-interface.model.labels.anchor'),",
    to: "label: 'Note: ' + t('studyAifg.formation-pattern-interface.model.labels.anchor'),",
    expected: "fail",
  },
  {
    name: "VER-003 literal message parameter (second batch, flee)",
    file: `${movement}/flee.presentation.ts`,
    from: "threat: fixed(example.threat),",
    to: "threat: 'twenty plain English units',",
    expected: "fail",
  },
];
const args = [
  "node_modules/vitest/vitest.mjs",
  "run",
  "--config",
  "libs/features/tools/vite.config.mts",
  "src/lib/studies/study-models.spec.ts",
  "-t",
  "routes visible narration",
];
const results = [];
for (const variant of variants) {
  let original = null;
  if (variant.file) {
    original = readFileSync(join(scratch, variant.file), "utf8");
    if (!original.includes(variant.from))
      throw new Error(`anchor not found: ${variant.name}`);
    writeFileSync(
      join(scratch, variant.file),
      original.replace(variant.from, variant.to),
    );
  }
  const run = spawnSync(process.execPath, args, {
    cwd: scratch,
    encoding: "utf8",
    timeout: 300000,
    maxBuffer: 32 * 1024 * 1024,
    env: { ...process.env, NX_DAEMON: "false" },
  });
  const log = `${run.stdout ?? ""}\n${run.stderr ?? ""}`;
  const slug = variant.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const portable = [
    [realpathSync(scratch), "<verifier-scratch>"],
    [scratch, "<verifier-scratch>"],
    [realpathSync(target), "<target-worktree>"],
    [target, "<target-worktree>"],
    [homedir(), "<home>"],
  ].reduce((text, [path, name]) => text.replaceAll(path, name), log);
  writeFileSync(join(output, `${slug}.log`), portable);
  const named =
    /literal parameter|routes visible narration|untranslated|the runner, in plain English|twenty plain English units|Note: /i.test(
      log,
    );
  const outcome = run.status === 0 ? "pass" : "fail";
  results.push({
    name: variant.name,
    file: variant.file ?? null,
    injected: variant.to ?? null,
    exitCode: run.status,
    outcome,
    expected: variant.expected,
    met: outcome === variant.expected && (variant.expected === "pass" || named),
    log: `${slug}.log`,
  });
  console.log(JSON.stringify(results.at(-1)));
  if (original !== null) writeFileSync(join(scratch, variant.file), original);
}
writeFileSync(
  join(output, "results.json"),
  `${JSON.stringify({ ranAt: new Date().toISOString(), command: ["node", ...args], results }, null, 1)}\n`,
);
if (results.some(({ met }) => !met)) process.exitCode = 1;
