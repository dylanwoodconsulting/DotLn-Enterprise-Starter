// VER-001: draw three of the first movement batch's twenty presentation modules at random.
// Usage: node pick-modules.mjs <target worktree>
import { randomInt } from "node:crypto";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const [target] = process.argv.slice(2);
if (!target) throw new Error("usage: pick-modules.mjs <target worktree>");
// The twenty studies WO-028 added (the shape audit's list); every other movement study is WO-020's.
const secondBatch = new Set([
  "steering-behaviors",
  "projectile-trajectory",
  "variable-matching",
  "jump-points",
  "motor-control",
  "movement-in-the-third-dimension",
  "flee",
  "collision-avoidance",
  "obstacle-and-wall-avoidance",
  "corner-trap",
  "blending-versus-arbitration",
  "actuator",
  "the-firing-solution",
  "iterative-targeting",
  "coordinated-movement",
  "two-and-a-half-dimensions",
  "steering-output",
  "kinematic-arrive",
  "satisfaction-radius",
  "kinematic-wander",
]);
const directory = join(target, "libs/features/tools/src/lib/studies/movement");
const firstBatch = readdirSync(directory)
  .filter(
    (name) => name.endsWith(".presentation.ts") && name !== "presentation.ts",
  )
  .filter((name) => !secondBatch.has(name.replace(".presentation.ts", "")))
  .sort();
if (firstBatch.length !== 20)
  throw new Error(`expected 20 modules, found ${firstBatch.length}`);
const pool = [...firstBatch];
const picked = [];
for (let draw = 0; draw < 3; draw++)
  picked.push(pool.splice(randomInt(pool.length), 1)[0]);
console.log(
  JSON.stringify(
    {
      drawnAt: new Date().toISOString(),
      source: "node:crypto randomInt",
      firstBatch,
      picked,
    },
    null,
    1,
  ),
);
