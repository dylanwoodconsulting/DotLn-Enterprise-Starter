// FINAL-001: build the intermediate versions of the three files the commit series splits.
// Usage: node stage-builder.mjs <target worktree> <base commit> <output dir>
// Every other changed file enters one commit whole. Stage C is the drawing, A the reshape,
// D the wall study, E the catalogs (the candidate). Writes nothing in the target.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { isDeepStrictEqual } from "node:util";

const [target, base, out] = process.argv.slice(2);
if (!target || !base || !out)
  throw new Error("usage: stage-builder.mjs <target> <base> <out>");
mkdirSync(out, { recursive: true });
const git = (...args) =>
  execFileSync("git", ["-C", target, ...args], {
    encoding: "utf8",
    maxBuffer: 1 << 28,
  });
const atBase = (path) => git("show", `${base}:${path}`);
const atCandidate = (path) => readFileSync(join(target, path), "utf8");
const json = (value) => `${JSON.stringify(value, null, 2)}\n`;

// The catalog architecture document: three hunks, one per commit.
const docPath = "docs/dev-reference/architecture/catalog.md";
const hunks = [];
for (const line of git("diff", "-U0", base, "--", docPath).split("\n")) {
  const header = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/.exec(line);
  if (header) {
    hunks.push({
      oldStart: Number(header[1]),
      oldCount: header[2] === undefined ? 1 : Number(header[2]),
      added: [],
    });
  } else if (hunks.length && line.startsWith("+") && !line.startsWith("+++"))
    hunks.at(-1).added.push(line.slice(1));
}
if (hunks.length !== 3)
  throw new Error(`expected 3 hunks, found ${hunks.length}`);
const baseDoc = atBase(docPath).split("\n");
const applyHunks = (selected) => {
  const lines = [...baseDoc];
  // Apply from the end so earlier line numbers stay valid.
  for (const hunk of [...selected].sort((a, b) => b.oldStart - a.oldStart)) {
    const start = hunk.oldCount === 0 ? hunk.oldStart : hunk.oldStart - 1;
    lines.splice(start, hunk.oldCount, ...hunk.added);
  }
  return lines.join("\n");
};
const [presentationHunk, marbleHunk, drawingHunk] = hunks;
const docs = {
  C: applyHunks([drawingHunk]),
  A: applyHunks([presentationHunk, drawingHunk]),
  E: applyHunks(hunks),
};
if (docs.E !== atCandidate(docPath))
  throw new Error(
    "applying every hunk does not reproduce the candidate document",
  );

// The AI for Games catalog: the reshaped subtrees, then the wall study, then the trims.
const aifgPath = "apps/dotln/public/i18n/studyAifg/en.json";
const baseAifg = JSON.parse(atBase(aifgPath));
const candidateAifg = JSON.parse(atCandidate(aifgPath));
const firstBatch = [
  "align",
  "arrive",
  "equilibrium-fallback",
  "face",
  "fixed-formations",
  "flocking",
  "formation-pattern-interface",
  "group-movement",
  "making-the-creatures",
  "priority-steering",
  "pursue",
  "scalable-formations",
  "seek",
  "separation",
  "slot-assignment",
  "steering-pipeline",
  "two-level-formation-steering",
  "velocity-matching",
  "wander",
  "weighted-blending",
];
const changedTop = Object.keys({ ...baseAifg, ...candidateAifg }).filter(
  (key) => !isDeepStrictEqual(baseAifg[key], candidateAifg[key]),
);
const expectedTop = [
  ...firstBatch,
  "obstacle-and-wall-avoidance",
  "titles",
].sort();
if (JSON.stringify([...changedTop].sort()) !== JSON.stringify(expectedTop))
  throw new Error(`unexpected changed subtrees: ${changedTop.join(", ")}`);
const stageA = structuredClone(baseAifg);
for (const slug of firstBatch)
  stageA[slug] = structuredClone(candidateAifg[slug]);
// The unread wander key leaves with the catalog trims, at its base position.
const baseParameters = baseAifg.wander.record.parameters;
const candidateParameters = candidateAifg.wander.record.parameters;
if (!("drawPairs" in baseParameters) || "drawPairs" in candidateParameters)
  throw new Error("expected drawPairs only at the base");
stageA.wander.record.parameters = Object.fromEntries(
  Object.keys({ ...baseParameters, ...candidateParameters }).map((key) => [
    key,
    key in candidateParameters ? candidateParameters[key] : baseParameters[key],
  ]),
);
const withoutDrawPairs = structuredClone(stageA.wander);
delete withoutDrawPairs.record.parameters.drawPairs;
if (!isDeepStrictEqual(withoutDrawPairs, candidateAifg.wander))
  throw new Error("wander differs from the candidate by more than drawPairs");
const stageD = structuredClone(stageA);
stageD["obstacle-and-wall-avoidance"] = structuredClone(
  candidateAifg["obstacle-and-wall-avoidance"],
);
const stageE = structuredClone(stageD);
stageE.titles = structuredClone(candidateAifg.titles);
delete stageE.wander.record.parameters.drawPairs;
if (json(stageE) !== atCandidate(aifgPath))
  throw new Error("the last stage does not reproduce the candidate catalog");

// The testing copy equals the four lazy study catalogs at every stage.
const copyPath = "libs/features/tools/testing/src/lib/study-en.json";
const baseCopy = JSON.parse(atBase(copyPath));
const copyOf = (aifg) =>
  Object.fromEntries(
    Object.keys(baseCopy).map((name) => [
      name,
      name === "studyAifg" ? aifg : baseCopy[name],
    ]),
  );
for (const name of Object.keys(baseCopy))
  if (
    name !== "studyAifg" &&
    !isDeepStrictEqual(
      baseCopy[name],
      JSON.parse(atBase(`apps/dotln/public/i18n/${name}/en.json`)),
    )
  )
    throw new Error(`base copy of ${name} differs from its catalog`);

const written = {
  "C-catalog.md": docs.C,
  "A-catalog.md": docs.A,
  "A-studyAifg.json": json(stageA),
  "D-studyAifg.json": json(stageD),
  "A-study-en.json": json(copyOf(stageA)),
  "D-study-en.json": json(copyOf(stageD)),
};
for (const [name, text] of Object.entries(written))
  writeFileSync(join(out, name), text);
console.log(
  JSON.stringify({
    hunks: hunks.map(({ oldStart, oldCount, added }) => ({
      oldStart,
      oldCount,
      added: added.length,
    })),
    copyOrder: Object.keys(baseCopy),
    written: Object.keys(written),
  }),
);
