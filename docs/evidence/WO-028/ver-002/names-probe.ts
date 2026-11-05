// VER-002: every supplied movement name, on every frame, at every value of every offered input.
// Bundled against the target worktree with an alias; see README.md.
import { readdirSync, readFileSync } from "node:fs";
import { motionDrawing } from "@target/libs/features/tools/src/lib/composites/study-visuals/motion/motion-drawing";
import { studyModels } from "@target/libs/features/tools/src/lib/studies/study-models";

const dir = `${process.argv[2]}/libs/shared/catalog/src/studies/aifg/`;
let runs = 0;
let frames = 0;
let supplied = 0;
let lost = 0;
for (const file of readdirSync(dir).filter((name) => name.endsWith(".json"))) {
  const record = JSON.parse(readFileSync(dir + file, "utf8"));
  if (!record.visual?.model) continue;
  const study = await (studyModels as any)[record.visual.model]();
  const example = study.model(record.example.parameters);
  if (example.family !== "motion") continue;
  const variants = [record.example.parameters];
  for (const input of example.inputs ?? [])
    for (let value = input.min; value <= input.max + 1e-9; value += input.step)
      variants.push({
        ...record.example.parameters,
        [input.name]: Number(value.toFixed(6)),
      });
  for (const parameters of variants) {
    runs++;
    const run = study.model(parameters);
    if (run.family !== "motion") continue;
    for (const [step, frame] of run.motion.frames.entries()) {
      frames++;
      const drawing = motionDrawing(run.motion, step);
      const source = [...frame.bodies, ...(frame.marks ?? [])].filter(
        (p: any) => p.label,
      ).length;
      const drawn = [...drawing.bodies, ...drawing.marks].filter(
        (p: any) => p.label,
      ).length;
      supplied += source;
      lost += source - drawn;
    }
  }
}
console.log(JSON.stringify({ runs, frames, supplied, lost }));
