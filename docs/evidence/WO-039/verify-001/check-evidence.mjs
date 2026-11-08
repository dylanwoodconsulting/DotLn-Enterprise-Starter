import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { gunzipSync, gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { enterpriseStudies } from "../serve-build.mjs";

const [targetArg, scratchArg] = process.argv.slice(2);
const target = resolve(targetArg),
  scratch = resolve(scratchArg);
const evidence = resolve("docs/evidence/WO-039");
const output = join(evidence, "verify-001");
mkdirSync(scratch, { recursive: true });
const records = [];
const run = (name, script, args, expected = 0) => {
  const r = spawnSync(process.execPath, [join(evidence, script), ...args], {
    encoding: "utf8",
  });
  records.push({
    name,
    script,
    expected,
    exitCode: r.status,
    summary: r.stdout.trim().split("\n").at(-1),
  });
  assert.equal(r.status, expected, `${name}: ${r.stderr}`);
};
const read = (file) =>
  JSON.parse(
    file.endsWith(".gz")
      ? gunzipSync(readFileSync(file))
      : readFileSync(file, "utf8"),
  );
run("fresh shape audit", "shape-audit.mjs", [
  target,
  join(output, "shape-audit.json"),
]);
assert.deepEqual(
  read(join(output, "shape-audit.json")),
  read(join(evidence, "shape-audit-after.json")),
);
run("fresh capture versus base", "compare-dom.mjs", [
  join(evidence, "dom-before.json.gz"),
  join(output, "dom-candidate.json"),
  join(output, "dom-diff.json"),
]);
run("fresh capture versus executor candidate", "compare-dom.mjs", [
  join(evidence, "dom-after.json.gz"),
  join(output, "dom-candidate.json"),
  join(output, "dom-replay.json"),
]);
run("declared comparator control", "comparator-control.mjs", [
  join(evidence, "dom-before.json.gz"),
  join(scratch, "declared-control"),
  join(output, "comparator-control.json"),
]);
const base = read(join(evidence, "dom-before.json.gz"));
const fresh = read(join(output, "dom-candidate.json"));
const inventory = enterpriseStudies(target);
for (const capture of [base, fresh]) {
  assert.equal(capture.frames.length, 238);
  assert.equal(
    new Set(capture.frames.map((f) => `${f.slug}/${f.viewport}/${f.step}`))
      .size,
    238,
  );
  for (const width of [360, 1440]) {
    for (const study of inventory) {
      const frames = capture.frames.filter(
        (f) => f.viewport === width && f.slug === study.slug,
      );
      assert.ok(frames.length > 0, study.slug);
      if (study.family === "states")
        assert.deepEqual(
          frames.map((f) => f.step),
          Array.from({ length: frames.length }, (_, step) => step),
        );
      else
        assert.deepEqual(
          frames.map((f) => f.step),
          [null],
        );
    }
  }
}
const changes = {
  "body-inside-heading-exemption": (capture) => {
    const frame = capture.frames.find(
      (f) => f.slug === "service-layer" && f.viewport === 360 && f.step === 3,
    );
    frame.nodes[frame.nodes.findIndex((_, i) => !frame.headings.includes(i))] +=
      " verifier control";
  },
  "aria-inside-heading-exemption": (capture) => {
    const frame = capture.frames.find(
      (f) => f.slug === "service-layer" && f.viewport === 360 && f.step === 3,
    );
    frame.labels[0] += " verifier control";
  },
  "missing-frame": (capture) => {
    capture.frames.pop();
  },
  "browser-error": (capture) => {
    capture.errors.push("verifier control");
  },
};
for (const [name, change] of Object.entries(changes)) {
  const altered = structuredClone(base);
  change(altered);
  const path = join(scratch, `${name}.json`);
  writeFileSync(path, JSON.stringify(altered));
  run(
    name,
    "compare-dom.mjs",
    [join(evidence, "dom-before.json.gz"), path, join(output, `${name}.json`)],
    1,
  );
}
const git = (...args) =>
  execFileSync("git", args, { cwd: target, encoding: "utf8" });
const flowSpecs = git(
  "diff",
  "--name-only",
  "--",
  "libs/features/tools/src/lib/studies/eip/*.spec.ts",
)
  .trim()
  .split("\n");
const nonMechanical = flowSpecs.filter((file) => {
  const before = git("show", `HEAD:${file}`)
    .replaceAll("loadFlowStudy", "loadModelStudy")
    .replace(/loadModelStudy\(('([^']+)')\)/g, "loadModelStudy($1, 'flow')");
  return (
    before.replace(/\s/g, "") !==
    readFileSync(join(target, file), "utf8").replace(/\s/g, "")
  );
});
assert.deepEqual(nonMechanical, []);
const presentations = readdirSync(
  join(target, "libs/features/tools/src/lib/studies/poeaa"),
).filter((f) => f.endsWith(".presentation.ts"));
const switches = presentations.map((file) => ({
  file,
  count: (
    readFileSync(
      join(target, "libs/features/tools/src/lib/studies/poeaa", file),
      "utf8",
    ).match(/switch \(/g) ?? []
  ).length,
}));
assert.equal(switches.length, 16);
assert.ok(switches.every((f) => f.count === 0));
const baselineChanges = git(
  "diff",
  "--name-only",
  "HEAD",
  "--",
  "*.png",
  "*snapshots*",
).trim();
assert.equal(baselineChanges, "");
const diff = git("diff", "--unified=0");
const suppressions = diff
  .split("\n")
  .filter(
    (line) =>
      line.startsWith("+") &&
      !line.startsWith("+++") &&
      /eslint-disable|@ts-ignore|@ts-nocheck/.test(line),
  );
assert.deepEqual(suppressions, []);
const bytes = readFileSync(join(output, "dom-candidate.json"));
const zipped = gzipSync(bytes);
assert.deepEqual(gunzipSync(zipped), bytes);
writeFileSync(join(output, "dom-candidate.json.gz"), zipped);
writeFileSync(
  join(output, "checks.json"),
  JSON.stringify(
    {
      capturedAt: new Date().toISOString(),
      records,
      inventory: {
        studies: inventory.length,
        states: inventory.filter((s) => s.family === "states").length,
        frames: fresh.frames.length,
        uniqueFrames: 238,
        continuousSteps: true,
      },
      flowLoaderMigration: { specs: flowSpecs.length, nonMechanical },
      switches,
      baselineChanges: [],
      addedSuppressions: suppressions,
      capture: {
        expandedSha256: createHash("sha256").update(bytes).digest("hex"),
        expandedBytes: bytes.length,
        storedBytes: zipped.length,
        losslessRoundTrip: true,
      },
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    probes: records.map(({ name, exitCode, expected }) => ({
      name,
      exitCode,
      expected,
    })),
    frames: fresh.frames.length,
    flowSpecs: flowSpecs.length,
    switches: switches.length,
  }),
);
