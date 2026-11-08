const fs = require("node:fs"),
  path = require("node:path");
const { createRequire } = require("node:module");
const root = path.resolve(process.argv[2]);
const ts = createRequire(path.join(root, "package.json"))("typescript");
require.extensions[".ts"] = (m, f) =>
  m._compile(
    ts.transpileModule(fs.readFileSync(f, "utf8"), {
      compilerOptions: {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.CommonJS,
      },
    }).outputText,
    f,
  );
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const catalogs = {
  studyPoeaa: read("apps/dotln/public/i18n/studyPoeaa/en.json"),
  studyCommon: read("apps/dotln/public/i18n/studyCommon/en.json"),
};
const msg = (key) => key.split(".").reduce((o, p) => o?.[p], catalogs);
const t = (key, v = {}) => {
  const m = msg(key);
  if (typeof m !== "string") throw new Error("missing " + key);
  return m.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, n) => String(v[n]));
};
const fill = (text, values) =>
  text.replace(/\{(\w+)\}/g, (all, n) =>
    n in values ? String(values[n]) : all,
  );
for (const [slug, over, fields] of JSON.parse(process.argv[3])) {
  const rec = read(`libs/shared/catalog/src/studies/poeaa/${slug}.json`);
  const run = require(path.join(root, rec.pseudocode.executable.module)).model(
    { ...rec.example.parameters, ...over },
    t,
  );
  const frames = run.states.frames,
    last = frames[frames.length - 1];
  console.log(`== ${slug} ${JSON.stringify(over)}`);
  for (const field of fields) {
    const key = field.split(".").reduce((o, p) => o?.[p], rec);
    const text =
      typeof key === "string" && key.startsWith("studyPoeaa.")
        ? msg(key)
        : null;
    console.log(
      `  ${field}: ${text ? fill(text, last.values) : JSON.stringify(key)}`,
    );
  }
  if (run.comparison?.findings)
    console.log("  findings:", run.comparison.findings.join(" | "));
  if (last.worked?.note) console.log("  last worked note:", last.worked.note);
}
