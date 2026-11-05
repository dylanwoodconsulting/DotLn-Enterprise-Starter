// VER-003's check of criterion 4's mechanism table after the split: the behaviours each of the twenty
// studies imports from the scene engine, before the migration and after it, against review.md's label.
// Usage: node engine-imports.mjs <target worktree> <old tree> <review.md>
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
const [T, O, review] = process.argv.slice(2);
const slugs = [
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
];
const dir = "libs/features/tools/src/lib/studies/movement";
const importsOf = (path) => {
  if (!existsSync(path)) return [];
  const text = readFileSync(path, "utf8");
  return [
    ...text.matchAll(
      /import\s*(?:type\s*)?\{([^}]*)\}\s*from\s*'@dotln-angular\/scene-engine'/g,
    ),
  ].flatMap((m) =>
    /import\s*type/.test(m[0])
      ? []
      : m[1]
          .split(",")
          .map((s) => s.trim().replace(/^type\s+.*/, ""))
          .filter(Boolean),
  );
};
const reviewText = readFileSync(review, "utf8");
const rows = slugs.map((slug) => {
  const before = new Set(importsOf(join(O, dir, `${slug}.model.ts`)));
  const after = new Set(
    ["model", "simulation", "presentation"].flatMap((part) =>
      importsOf(join(T, dir, `${slug}.${part}.ts`)),
    ),
  );
  const sim = new Set(importsOf(join(T, dir, `${slug}.simulation.ts`)));
  return {
    slug,
    lost: [...before].filter((x) => !after.has(x)),
    gained: [...after].filter((x) => !before.has(x)),
    simulation: [...sim].sort().join(" "),
  };
});
for (const r of rows)
  console.log(
    r.slug.padEnd(34),
    "lost",
    JSON.stringify(r.lost),
    "gained",
    JSON.stringify(r.gained),
    "| sim:",
    r.simulation,
  );
const line = (slug) =>
  reviewText
    .split("\n")
    .find(
      (l) =>
        l.toLowerCase().includes(slug.replaceAll("-", " ")) &&
        /\b(mixed|local|engine)\b/i.test(l),
    )
    ?.slice(0, 120);
console.log(line("flee"));
console.log(line("collision-avoidance"));
console.log(line("jump-points"));
