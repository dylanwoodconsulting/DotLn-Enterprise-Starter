// VER-003's probe of what reaches the reader around the message system. Each message comes back
// marked, so at every value of every offered input, across all eighty models, it lists:
//  - string parameters with letters that are not themselves marked (a literal or a payload inside a message);
//  - output fields whose letters lie outside any mark (a literal in the model's output).
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { studyModels } from "@target/libs/features/tools/src/lib/studies/study-models";

const [target, output] = process.argv.slice(2);
const params = new Map<
  string,
  { key: string; name: string; value: string; study: string; count: number }
>();
const fields = new Map<
  string,
  { path: string; sample: string; studies: Set<string>; count: number }
>();
let current = "";
const OPEN = "⟦";
const CLOSE = "⟧";
const outside = (text: string) => {
  let depth = 0;
  let out = "";
  for (const c of text) {
    if (c === OPEN) depth++;
    else if (c === CLOSE) depth = Math.max(0, depth - 1);
    else if (!depth) out += c;
  }
  return out;
};
const t = (key: string, parameters: Record<string, string | number> = {}) => {
  for (const [name, value] of Object.entries(parameters))
    if (typeof value === "string" && /[A-Za-z]{2,}/.test(outside(value))) {
      const id = `${key}#${name}=${value}`;
      const row = params.get(id) ?? {
        key,
        name,
        value,
        study: current,
        count: 0,
      };
      row.count++;
      params.set(id, row);
    }
  return `${OPEN}${key}${CLOSE}`;
};
const machine =
  /(^|\.)(family|tone|shape|id|from|to|kind|state|anchor|name|lane|type|direction|view|source|target|node|nodes|key|hops|held|operator)(\[\d+\])*$/;
const walk = (value: unknown, path: string) => {
  if (typeof value === "string") {
    const left = outside(value);
    if (/[A-Za-z]{2,}/.test(left)) {
      const shape = path.replace(/\[\d+\]/g, "[]");
      const id = `${shape}|${machine.test(shape) ? "machine" : "visible"}`;
      const row = fields.get(id) ?? {
        path: shape,
        sample: left.slice(0, 80),
        studies: new Set<string>(),
        count: 0,
      };
      row.count++;
      row.studies.add(current);
      fields.set(id, row);
    }
  } else if (Array.isArray(value))
    value.forEach((v, i) => walk(v, `${path}[${i}]`));
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
};
const records = ["aifg", "rxjs", "eip"].flatMap((work) => {
  const dir = join(target, "libs/shared/catalog/src/studies", work);
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")));
});
let runs = 0;
for (const record of records) {
  current = record.slug;
  const { model } = (await studyModels[record.visual.model]()) as unknown as {
    model: (p: unknown, tr: typeof t) => Record<string, unknown>;
  };
  const defaults = record.example.parameters;
  const first = model(defaults, t);
  const inputs = (first["inputs"] ?? []) as {
    name: string;
    min: number;
    max: number;
    step: number;
  }[];
  const cases = [defaults];
  for (const input of inputs) {
    const count = Math.round((input.max - input.min) / input.step);
    for (let i = 0; i <= count; i++)
      cases.push({
        ...defaults,
        [input.name]: Number((input.min + i * input.step).toFixed(10)),
      });
  }
  for (const parameters of cases) {
    runs++;
    walk(model(parameters, t), "");
  }
}
const paramRows = [...params.values()].sort((a, b) =>
  a.key.localeCompare(b.key),
);
const fieldRows = [...fields.entries()].map(([id, r]) => ({
  class: id.split("|")[1],
  path: r.path,
  sample: r.sample,
  count: r.count,
  studies: [...r.studies],
}));
writeFileSync(
  output,
  JSON.stringify(
    { runs, studies: records.length, paramRows, fieldRows },
    null,
    1,
  ) + "\n",
);
console.log(
  JSON.stringify({
    runs,
    studies: records.length,
    paramRows: paramRows.length,
    fieldRows: fieldRows.length,
  }),
);
