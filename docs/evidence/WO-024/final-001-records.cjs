// Reads the twenty new records, their catalogs, the order's link table and decisions,
// and the candidate's changed files. Changes nothing. Usage:
//   node final-001-records.cjs <target worktree> <launchpad worktree>
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const [target, launchpad] = process.argv.slice(2);
const read = (file) => fs.readFileSync(file, "utf8");
const json = (file) => JSON.parse(read(file));

const expected = {
  geb: [
    "geb2:8",
    "geb2:9",
    "geb1:107",
    "geb1:228",
    "geb1:53",
    "geb1:65",
    "geb2:138",
    "geb1:51",
    "geb2:61",
    "geb2:302",
  ],
  tt: [
    "tt3:8",
    "tt3:7",
    "tt3:9",
    "tt1:92",
    "tt1:138",
    "tt1:94",
    "tt1:151",
    "tt2:90",
    "tt3:47",
    "tt1:215",
  ],
};
const mechanisms = new Set(["geb2:9", "geb1:228", "geb1:53", "tt1:92"]);
const scopes = { geb: "studyGeb", tt: "studyTt" };
const report = { works: {}, problems: [] };
const urls = new Map();
const nullExecutable = [];

for (const [work, ids] of Object.entries(expected)) {
  const directory = path.join(target, "libs/shared/catalog/src/studies", work);
  const catalog = json(
    path.join(target, "apps/dotln/public/i18n", scopes[work], "en.json"),
  );
  const lookup = (key) =>
    key
      .split(".")
      .slice(1)
      .reduce((value, part) => value?.[part], catalog);
  const records = fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".json"))
    .map((name) => json(path.join(directory, name)));
  const found = records.map((record) => record.id).sort();
  if (JSON.stringify(found) !== JSON.stringify([...ids].sort()))
    report.problems.push(`${work}: ids differ: ${found}`);
  let keys = 0;
  const walk = (value, trail, record) => {
    if (typeof value === "string") {
      if (value.startsWith(`${scopes[work]}.`)) {
        keys += 1;
        if (typeof lookup(value) !== "string")
          report.problems.push(
            `${record.id}: ${trail} has no message ${value}`,
          );
      } else if (/^study[A-Z]/.test(value))
        report.problems.push(
          `${record.id}: ${trail} names another catalog: ${value}`,
        );
      return;
    }
    if (value && typeof value === "object")
      for (const [key, child] of Object.entries(value))
        walk(child, `${trail}.${key}`, record);
  };
  for (const record of records) {
    walk(record, record.slug, record);
    if (record.schema !== "concept-study-v1")
      report.problems.push(`${record.id}: schema ${record.schema}`);
    if (record.authored.state !== "checked")
      report.problems.push(`${record.id}: state ${record.authored.state}`);
    if (new Set(record.authored.reviewedBy).size < 2)
      report.problems.push(`${record.id}: fewer than two reviewers`);
    if (record.visual === null)
      report.problems.push(`${record.id}: visual null`);
    else if (record.visual.family !== "relations")
      report.problems.push(`${record.id}: family ${record.visual.family}`);
    const modelFile = record.visual && path.join(target, record.visual.model);
    if (modelFile && !fs.existsSync(modelFile))
      report.problems.push(`${record.id}: no model ${record.visual.model}`);
    if (modelFile && !fs.existsSync(modelFile.replace(/\.ts$/, ".spec.ts")))
      report.problems.push(`${record.id}: no spec beside its model`);
    if (modelFile && !/relationsModel\(/.test(read(modelFile)))
      report.problems.push(`${record.id}: model does not call relationsModel`);
    const spec = modelFile && read(modelFile.replace(/\.ts$/, ".spec.ts"));
    if (spec && !spec.includes(`loadModelStudy('${record.id}', 'relations')`))
      report.problems.push(`${record.id}: spec does not load its record`);
    const executable = record.pseudocode.executable;
    if (mechanisms.has(record.id)) {
      if (
        !executable ||
        executable.kind !== "typescript" ||
        executable.module !== record.visual.model ||
        !executable.module.endsWith(`${record.slug}.model.ts`)
      )
        report.problems.push(
          `${record.id}: mechanism lacks its executable entry`,
        );
      const simulation = modelFile.replace(/\.model\.ts$/, ".simulation.ts");
      if (!fs.existsSync(simulation))
        report.problems.push(`${record.id}: no simulation`);
      else {
        if (!read(modelFile).includes(`./${record.slug}.simulation`))
          report.problems.push(
            `${record.id}: entry does not import its simulation`,
          );
        if (
          /study-translate|studyMessage|StudyTranslate/.test(read(simulation))
        )
          report.problems.push(`${record.id}: simulation reads language`);
        if (!spec.includes(`./${record.slug}.simulation`))
          report.problems.push(
            `${record.id}: spec does not import the simulation`,
          );
      }
    } else {
      if (executable !== null)
        report.problems.push(`${record.id}: unexpected executable`);
      nullExecutable.push(record.slug);
    }
    for (const entry of [...record.references, ...record.implementations]) {
      if (!urls.has(entry.url)) urls.set(entry.url, new Set());
      urls.get(entry.url).add(record.id);
    }
    for (const reference of record.references)
      if (
        !reference.title ||
        !reference.url ||
        !reference.accessed ||
        !reference.supports
      )
        report.problems.push(`${record.id}: incomplete reference`);
  }
  report.works[work] = { records: records.length, messageKeys: keys };
}

// The link table against the records, both ways.
const evidence = read(path.join(launchpad, "docs/evidence/WO-024/README.md"));
const table = new Map();
for (const line of evidence.split("\n")) {
  const row = line.match(
    /^\| \[[^\]]+\]\((https?:[^)]+)\) \| (\d{3}) \| ([^|]+) \|$/,
  );
  if (row)
    table.set(row[1], {
      status: row[2],
      ids: row[3].trim().split(", ").sort().join(", "),
    });
}
report.links = {
  cited: urls.size,
  tabled: table.size,
  not200: [...table]
    .filter(([, row]) => row.status !== "200")
    .map(([url]) => url),
};
for (const [url, ids] of urls) {
  const row = table.get(url);
  if (!row) report.problems.push(`link table lacks ${url}`);
  else if (row.ids !== [...ids].sort().join(", "))
    report.problems.push(
      `link table ids differ for ${url}: ${row.ids} against ${[...ids].sort().join(", ")}`,
    );
}
for (const url of table.keys())
  if (!urls.has(url))
    report.problems.push(`link table names an uncited address ${url}`);

// Every record without an executable is named with its reason, and none of the four is.
const decisions = read(
  path.join(launchpad, "docs/evidence/WO-024/decisions.md"),
);
const d016 = decisions.slice(
  decisions.indexOf("## WO-024-D016"),
  decisions.indexOf("## WO-024-D017"),
);
report.d016 = { named: 0 };
for (const slug of nullExecutable) {
  if (new RegExp(`"${slug} — \\S`).test(d016)) report.d016.named += 1;
  else report.problems.push(`D016 does not name ${slug}`);
}
for (const slug of [
  "chunking",
  "godel-numbering",
  "decision-procedure",
  "conways-law",
])
  if (new RegExp(`"${slug} — `).test(d016))
    report.problems.push(`D016 names the mechanism ${slug}`);

// Suppressions and stray whitespace in what the candidate adds.
const git = (...args) =>
  execFileSync("git", ["-C", target, ...args], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
const added = git("diff", "HEAD", "--unified=0")
  .split("\n")
  .filter((line) => line.startsWith("+") && !line.startsWith("+++"));
const untracked = git("ls-files", "--others", "--exclude-standard")
  .split("\n")
  .filter(Boolean);
const directive =
  /eslint-disable|@ts-ignore|@ts-expect-error|@ts-nocheck|istanbul ignore|v8 ignore|c8 ignore|stylelint-disable|\bas any\b|\.only\(|\bfit\(|\bfdescribe\(|\.skip\(|BOARDED:/;
report.suppressions = added
  .filter((line) => directive.test(line))
  .map((line) => `tracked: ${line.slice(0, 120)}`);
report.untracked = untracked.length;
for (const file of untracked) {
  if (/\.(png|ico|woff2)$/.test(file)) continue;
  const text = read(path.join(target, file));
  text.split("\n").forEach((line, index) => {
    if (directive.test(line))
      report.suppressions.push(
        `${file}:${index + 1}: ${line.trim().slice(0, 100)}`,
      );
    if (/[ \t]+$/.test(line))
      report.problems.push(`${file}:${index + 1}: trailing whitespace`);
  });
  if (!text.endsWith("\n")) report.problems.push(`${file}: no final newline`);
}
report.lineCeiling = [];
for (const file of untracked.filter((name) => name.endsWith(".ts"))) {
  const longest = Math.max(
    ...read(path.join(target, file))
      .split("\n")
      .map((line) => line.length),
  );
  if (longest > 100) report.lineCeiling.push(`${file}: ${longest}`);
}

console.log(JSON.stringify(report, null, 2));
