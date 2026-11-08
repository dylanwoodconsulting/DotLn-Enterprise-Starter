// A probe of every study model's output, run at the integrated base and at the candidate so the
// two can be compared: every model a record names at its own parameters, and each enterprise
// pattern model over the grid of its declared inputs (every value of every input together where
// that grid stays within 256 cases, else each input across its range with the others at the
// record's values). A comparison chart's x values are read under one name, whatever the model
// calls them, since this order renames that field and nothing else about it.
// It runs as a spec copied for the run into the target's libs/features/tools/tests/ and removed
// afterwards; WO039_PROBE_OUT names the JSON file it writes.
import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";

import { createCatalogLoader } from "@dotln-angular/catalog";
import type { ConceptStudy, StudyParameters } from "@dotln-angular/models";

import { studyTranslate } from "../testing/src";
import { studyModels } from "../src/lib/studies/study-models";
import { translateStudy } from "../src/lib/studies/study-record";

const records = async () => {
  const loader = createCatalogLoader();
  const { studies } = await loader.summary();
  const found = await Promise.all(
    studies.works.flatMap(({ studies }) =>
      studies.map(({ id }) => loader.study(id)),
    ),
  );
  return found
    .filter((study): study is ConceptStudy => study !== null)
    .map((study) => translateStudy(study, studyTranslate));
};

// A chart's x values under one name, so a renamed field compares equal when its values do.
const normalized = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalized);
  if (!value || typeof value !== "object") return value;
  const entries = Object.entries(value as Record<string, unknown>);
  const chart =
    entries.some(([key]) => key === "series") &&
    entries.some(([key]) => key === "xLabel");
  return Object.fromEntries(
    entries.map(([key, entry]) => [
      chart && ["seconds", "steps", "counts"].includes(key) ? "x" : key,
      normalized(entry),
    ]),
  );
};

const digest = (value: unknown) =>
  createHash("sha256")
    .update(JSON.stringify(normalized(value)))
    .digest("hex");

interface Input {
  readonly name: string;
  readonly min: number;
  readonly max: number;
  readonly step: number;
}

const valuesOf = ({ min, max, step }: Input) =>
  Array.from({ length: Math.round((max - min) / step) + 1 }, (_, index) =>
    Number((min + index * step).toFixed(6)),
  );

function casesOf(
  parameters: StudyParameters,
  inputs: readonly Input[],
): StudyParameters[] {
  const size = inputs.reduce(
    (product, input) => product * valuesOf(input).length,
    1,
  );
  if (size <= 256)
    return inputs.reduce<StudyParameters[]>(
      (cases, input) =>
        cases.flatMap((known) =>
          valuesOf(input).map((value) => ({ ...known, [input.name]: value })),
        ),
      [parameters],
    );
  return [
    parameters,
    ...inputs.flatMap((input) =>
      valuesOf(input).map((value) => ({ ...parameters, [input.name]: value })),
    ),
  ];
}

it("records every study model’s output for comparison", async () => {
  const output = process.env["WO039_PROBE_OUT"];
  if (!output)
    throw new Error("WO039_PROBE_OUT names the file the probe writes.");
  const digests: Record<string, Record<string, string>> = {};
  const outputs: Record<string, Record<string, unknown>> = {};
  let cases = 0;
  for (const record of await records()) {
    if (!record.visual?.model) continue;
    const { model } = await studyModels[record.visual.model]();
    const initial = model(record.example.parameters, studyTranslate);
    const grid =
      record.work === "poeaa"
        ? casesOf(record.example.parameters, initial.inputs ?? [])
        : [record.example.parameters];
    digests[record.slug] = {};
    if (record.work === "poeaa") outputs[record.slug] = {};
    for (const parameters of grid) {
      const key = JSON.stringify(parameters);
      const run = model(parameters, studyTranslate);
      digests[record.slug][key] = digest(run);
      if (record.work === "poeaa") outputs[record.slug][key] = normalized(run);
      cases++;
    }
  }
  writeFileSync(output, `${JSON.stringify({ cases, digests, outputs })}\n`);
  expect(cases).toBeGreaterThan(100);
});
