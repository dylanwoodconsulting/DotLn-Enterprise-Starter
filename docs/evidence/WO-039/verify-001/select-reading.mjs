// Draw the verifier's three presentation modules without replacement, before reading them.
// Usage: node select-reading.mjs <target> <output.json>
import { randomInt } from "node:crypto";
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [target, output] = process.argv.slice(2);
const relative = "libs/features/tools/src/lib/studies/poeaa";
const population = readdirSync(join(target, relative))
  .filter((name) => name.endsWith(".presentation.ts"))
  .sort();
const remaining = [...population];
const selected = Array.from(
  { length: 3 },
  () => remaining.splice(randomInt(remaining.length), 1)[0],
);
const result = {
  capturedAt: new Date().toISOString(),
  method:
    "crypto.randomInt, sampling without replacement from sorted sixteen-file inventory",
  population,
  selected: selected.map((name) => `${relative}/${name}`),
};
writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result));
