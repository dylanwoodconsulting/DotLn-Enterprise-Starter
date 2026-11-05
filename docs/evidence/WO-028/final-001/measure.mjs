// Measures what FINAL-001 fails WO-028 on, from the target worktree's working tree.
// Run from the target root: node <launchpad>/docs/evidence/WO-028/final-001/measure.mjs
// Prints JSON: per movement model module, its length, the exported model function's
// length and its literal user-facing lines; per AI for Games record, its prose strings;
// and which modules redefine the same helpers.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const movement = "libs/features/tools/src/lib/studies/movement";
const records = "libs/shared/catalog/src/studies/aifg";
const batch = new Set([
  "actuator",
  "blending-versus-arbitration",
  "collision-avoidance",
  "coordinated-movement",
  "corner-trap",
  "flee",
  "iterative-targeting",
  "jump-points",
  "kinematic-arrive",
  "kinematic-wander",
  "motor-control",
  "movement-in-the-third-dimension",
  "obstacle-and-wall-avoidance",
  "projectile-trajectory",
  "satisfaction-radius",
  "steering-behaviors",
  "steering-output",
  "the-firing-solution",
  "two-and-a-half-dimensions",
  "variable-matching",
]);
const skip = new Set([
  "url",
  "id",
  "module",
  "model",
  "kind",
  "family",
  "schema",
  "slug",
  "work",
  "on",
  "state",
  "by",
  "reviewedBy",
  "accessed",
  "parameters",
]);

const modules = readdirSync(movement)
  .filter((name) => name.endsWith(".model.ts"))
  .map((name) => {
    const lines = readFileSync(join(movement, name), "utf8").split("\n");
    const start = lines.findIndex((line) =>
      line.startsWith("export const model"),
    );
    return {
      module: name,
      batch: batch.has(name.replace(".model.ts", "")) ? "WO-028" : "main",
      lines: lines.length,
      modelFunctionLines: start < 0 ? null : lines.length - start,
      literalLines: lines.filter(
        (line) =>
          /^\s*(label|caption|note|title|intro):\s*[`']/.test(line) ||
          /^\s*[`'][^`']{20,}[`'],?$/.test(line),
      ).length,
      redefinesFixed: lines.some((line) => line.startsWith("const fixed = ")),
      recomputesBounds: lines.some((line) =>
        line.includes("minX: Math.min(...points.map"),
      ),
    };
  });

const prose = (value, out) => {
  if (Array.isArray(value)) value.forEach((item) => prose(item, out));
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value))
      if (!skip.has(key)) prose(item, out);
  } else if (typeof value === "string" && value.length > 20) {
    out.strings += 1;
    out.characters += value.length;
  }
};
const studies = readdirSync(records)
  .filter((name) => name.endsWith(".json"))
  .map((name) => {
    const out = {
      record: name,
      batch: batch.has(name.replace(".json", "")) ? "WO-028" : "main",
      strings: 0,
      characters: 0,
    };
    prose(JSON.parse(readFileSync(join(records, name), "utf8")), out);
    return out;
  });

const sum = (rows, key) =>
  rows.reduce((total, row) => total + (row[key] ?? 0), 0);
const of = (rows, which) => rows.filter((row) => row.batch === which);
console.log(
  JSON.stringify(
    {
      measuredAt: new Date().toISOString(),
      movementModules: {
        count: modules.length,
        redefineFixed: modules.filter((row) => row.redefinesFixed).length,
        recomputeBounds: modules.filter((row) => row.recomputesBounds).length,
        "WO-028": {
          count: of(modules, "WO-028").length,
          literalLines: sum(of(modules, "WO-028"), "literalLines"),
          modelFunctionLines: of(modules, "WO-028")
            .map((row) => row.modelFunctionLines)
            .sort((a, b) => a - b),
        },
        main: {
          count: of(modules, "main").length,
          literalLines: sum(of(modules, "main"), "literalLines"),
          modelFunctionLines: of(modules, "main")
            .map((row) => row.modelFunctionLines)
            .sort((a, b) => a - b),
        },
        rows: modules,
      },
      aifgRecords: {
        "WO-028": {
          count: of(studies, "WO-028").length,
          strings: sum(of(studies, "WO-028"), "strings"),
          characters: sum(of(studies, "WO-028"), "characters"),
        },
        main: {
          count: of(studies, "main").length,
          strings: sum(of(studies, "main"), "strings"),
          characters: sum(of(studies, "main"), "characters"),
        },
        rows: studies,
      },
    },
    null,
    2,
  ),
);
