// Independent, read-only corpus probe. Run under the launchpad's bounded wrapper.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");

const root = path.resolve(process.argv[2]);
const local = createRequire(path.join(root, "package.json"));
const ts = local("typescript");
require.extensions[".ts"] = (module, filename) => {
  const source = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.CommonJS,
    },
  }).outputText;
  module._compile(source, filename);
};
const read = (file) =>
  JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const catalogs = {
  studyPoeaa: read("apps/dotln/public/i18n/studyPoeaa/en.json"),
  studyCommon: read("apps/dotln/public/i18n/studyCommon/en.json"),
};
const translate = (key, values = {}) => {
  const message = key
    .split(".")
    .reduce((object, part) => object?.[part], catalogs);
  assert.equal(typeof message, "string", `Missing message ${key}`);
  return message.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name) => {
    assert.ok(Object.hasOwn(values, name), `Missing ${key}.${name}`);
    return String(values[name]);
  });
};
const folder = "libs/shared/catalog/src/studies/poeaa";
const records = fs
  .readdirSync(path.join(root, folder))
  .sort()
  .map((file) => read(`${folder}/${file}`));
assert.equal(records.length, 20);
const ids = [
  240, 246, 218, 254, 370, 377, 421, 214, 340, 357, 363, 408, 260, 452, 268,
  443, 226, 278, 448, 330,
];
assert.deepEqual(
  records.map((record) => record.id).sort(),
  ids.map((id) => `poeaa:${id}`).sort(),
);
const structural = new Set([
  "domain-model",
  "transaction-script",
  "template-view",
  "page-controller",
]);
const { registerDrawing } = require(
  path.join(
    root,
    "libs/features/tools/src/lib/composites/study-visuals/states/states-register.ts",
  ),
);
let variants = 0;
let frames = 0;
const coverage = [];
for (const record of records) {
  assert.equal(record.schema, "concept-study-v1");
  assert.equal(record.authored.state, "checked");
  assert.ok(new Set(record.authored.reviewedBy).size >= 2);
  if (structural.has(record.slug)) {
    assert.equal(record.visual, null);
    assert.equal(record.pseudocode.executable, null);
    continue;
  }
  const file = record.pseudocode.executable.module;
  assert.equal(record.visual.model, file);
  const { model } = require(path.join(root, file));
  const initial = model(record.example.parameters, translate);
  let inputs = [{}];
  for (const input of initial.inputs ?? []) {
    const middle =
      input.min +
      Math.floor((input.max - input.min) / input.step / 2) * input.step;
    const values = [...new Set([input.min, middle, input.max])];
    inputs = inputs.flatMap((parameters) =>
      values.map((value) => ({ ...parameters, [input.name]: value })),
    );
  }
  const cases = [
    record.example.parameters,
    ...inputs.map((input) => ({ ...record.example.parameters, ...input })),
  ];
  for (const parameters of cases) {
    const before = JSON.stringify(parameters);
    const run = model(parameters, translate);
    assert.equal(
      JSON.stringify(parameters),
      before,
      `${record.slug} mutates its inputs`,
    );
    assert.deepEqual(
      model(parameters, translate),
      run,
      `${record.slug} is not deterministic`,
    );
    assert.equal(run.family, "states");
    const objects = new Set(run.states.objects.map((object) => object.id));
    const states = new Set(run.states.nodes.map((state) => state.id));
    for (const moment of run.moments)
      assert.ok(
        Number.isInteger(moment.step) &&
          moment.step >= 0 &&
          moment.step < run.states.frames.length,
      );
    for (const [index, frame] of run.states.frames.entries()) {
      const placed = new Set();
      for (const placement of frame.placements) {
        assert.ok(objects.has(placement.object) && states.has(placement.node));
        assert.ok(!placed.has(placement.object));
        placed.add(placement.object);
      }
      const equivalent = translate(record.visual.textEquivalent).replace(
        /\{(\w+)\}/g,
        (_, name) => {
          assert.ok(
            Object.hasOwn(frame.values, name),
            `${record.slug} missing prose value ${name}`,
          );
          return frame.values[name];
        },
      );
      assert.ok(
        !/\{\{?\w+\}?\}|(?:undefined|NaN|Infinity)|studyPoeaa\./.test(
          equivalent,
        ),
        record.slug,
      );
      for (const layout of ["wide", "narrow"]) {
        const drawing = registerDrawing(run.states, index, layout);
        for (const token of drawing.tokens) {
          assert.ok(Number.isFinite(token.x) && Number.isFinite(token.y));
          assert.ok(
            token.x - token.r >= drawing.nameWidth &&
              token.x + token.r <= drawing.width,
          );
          assert.ok(
            token.y - token.r >= 0 && token.y + token.r <= drawing.height,
          );
        }
      }
      frames++;
    }
    variants++;
  }
  coverage.push({ slug: record.slug, variants: cases.length });
}
// Semantic attacks beyond the rendered defaults.
const unit = require(
  path.join(
    root,
    "libs/features/tools/src/lib/studies/poeaa/unit-of-work.simulation.ts",
  ),
);
for (const renames of [0, 1, 2, 3]) {
  const run = unit.unitOfWorkRun({
    versionFlank: 3,
    versionRidge: 5,
    renames,
    otherTabSaves: 1,
  });
  const before = run.at(-2),
    after = run.at(-1);
  if (renames > 0) {
    assert.deepEqual(after.store.rows, before.store.rows);
    assert.deepEqual(after.unit, before.unit);
    assert.equal(after.operation.result.conflict, "ridge");
  } else assert.equal(after.operation.result.conflict, null);
}
const identity = require(
  path.join(
    root,
    "libs/features/tools/src/lib/studies/poeaa/identity-map.simulation.ts",
  ),
);
const mapRun = identity.identityMapRun({ maps: 1, revisits: 3 });
const finds = mapRun.filter((step) => step.operation.kind === "find");
assert.equal(finds[0].operation.study, finds[2].operation.study);
assert.notEqual(finds[0].operation.study, finds.at(-1).operation.study);
const remote = require(
  path.join(
    root,
    "libs/features/tools/src/lib/studies/poeaa/remote-facade.simulation.ts",
  ),
);
const remoteRecord = records.find((record) => record.slug === "remote-facade");
const partial = remote
  .remoteFacadeRun({
    ...remoteRecord.example.parameters,
    buildsDown: 1,
    reportsFailures: 1,
  })
  .at(-1);
assert.equal(partial.page.length, 5);
assert.equal(
  partial.page.find((panel) => panel.id === "builds").status,
  "unavailable",
);
const failed = remote
  .remoteFacadeRun({
    ...remoteRecord.example.parameters,
    buildsDown: 1,
    reportsFailures: 0,
  })
  .at(-1);
assert.equal(failed.operation.kind, "fail");
assert.deepEqual(failed.page, []);
console.log(
  JSON.stringify({
    records: 20,
    executable: 16,
    structural: 4,
    variants,
    frames,
    coverage,
    semanticAttacks:
      "atomic conflict, unchanged-row conflict scope, shared-object identity and new-session refresh, partial reply and whole-call failure",
    result: "pass",
  }),
);
