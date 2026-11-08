// Read-only: run named models at given parameters and print frame notes and texts.
const fs = require("node:fs"),
  path = require("node:path");
const { createRequire } = require("node:module");
const root = path.resolve(process.argv[2]);
const local = createRequire(path.join(root, "package.json"));
const ts = local("typescript");
require.extensions[".ts"] = (module, filename) => {
  module._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.CommonJS,
      },
    }).outputText,
    filename,
  );
};
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const catalogs = {
  studyPoeaa: read("apps/dotln/public/i18n/studyPoeaa/en.json"),
  studyCommon: read("apps/dotln/public/i18n/studyCommon/en.json"),
};
const t = (key, values = {}) => {
  const m = key.split(".").reduce((o, p) => o?.[p], catalogs);
  if (typeof m !== "string") throw new Error("missing " + key);
  return m.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, n) => String(values[n]));
};
const cases = JSON.parse(process.argv[3]);
for (const [slug, over] of cases) {
  const rec = read(`libs/shared/catalog/src/studies/poeaa/${slug}.json`);
  const mod = require(path.join(root, rec.pseudocode.executable.module));
  const run = mod.model({ ...rec.example.parameters, ...over }, t);
  const frames = run.states.frames;
  const last = frames[frames.length - 1];
  console.log(`== ${slug} ${JSON.stringify(over)}: ${frames.length} frames`);
  for (const f of frames)
    console.log(`  [${f.step}] ${(f.note ?? "").slice(0, 260)}`);
  if (run.comparison)
    console.log("  CMP:", JSON.stringify(run.comparison).slice(0, 400));
}
