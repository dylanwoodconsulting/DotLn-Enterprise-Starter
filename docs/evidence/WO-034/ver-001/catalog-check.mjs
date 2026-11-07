// VER-001: criterion 7's catalog claims, read from the base and candidate trees directly.
// Usage: node catalog-check.mjs <base tree> <candidate tree> <evidence README> <results.json>
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [base, candidate, readme, out] = process.argv.slice(2);
if (!out)
  throw new Error(
    "usage: catalog-check.mjs <base> <candidate> <README.md> <results.json>",
  );
const catalog = (root, scope) =>
  JSON.parse(
    readFileSync(
      join(root, "apps/dotln/public/i18n", scope, "en.json"),
      "utf8",
    ),
  );
const flat = (value, prefix = "", rows = {}) => {
  if (typeof value === "string") rows[prefix] = value;
  else
    for (const [key, entry] of Object.entries(value))
      flat(entry, prefix ? `${prefix}.${key}` : key, rows);
  return rows;
};
const works = { aifg: "studyAifg", eip: "studyEip", rxjs: "studyRxjs" };
const result = {
  titles: {},
  fixtureKeys: [],
  drawPairs: {},
  placeholderStarts: {},
  sentenceStarts: {},
  reworded: {},
};

// 1. Title rows: exactly the ids a record or a nearby link names, per work.
for (const [work, scope] of Object.entries(works)) {
  const directory = join(candidate, "libs/shared/catalog/src/studies", work);
  const named = new Set();
  for (const file of readdirSync(directory).filter((name) =>
    name.endsWith(".json"),
  )) {
    const record = JSON.parse(readFileSync(join(directory, file), "utf8"));
    named.add(record.id);
    for (const { id } of record.nearby ?? []) named.add(id);
  }
  const before = Object.keys(catalog(base, scope).titles ?? {});
  const after = Object.keys(catalog(candidate, scope).titles ?? {});
  result.titles[scope] = {
    before: before.length,
    after: after.length,
    named: named.size,
    missing: [...named].filter((id) => !after.includes(id)),
    extra: after.filter((id) => !named.has(id)),
    keptTextUnchanged: after.every(
      (id) =>
        catalog(base, scope).titles[id] ===
        catalog(candidate, scope).titles[id],
    ),
  };
}

// 2. The twelve EIP keys: absent from the candidate catalog, present at base, read only by specs at
// base, and defined beside the specs at the candidate.
const changes = JSON.parse(
  readFileSync(new URL("../catalog-changes.json", import.meta.url), "utf8"),
);
const grep = (root, pattern) => {
  try {
    return execFileSync("grep", ["-rlF", pattern, "libs", "apps", "tools"], {
      cwd: root,
      encoding: "utf8",
    })
      .split("\n")
      .filter(Boolean);
  } catch {
    return [];
  }
};
const eipBase = flat(catalog(base, "studyEip"));
const eipCandidate = flat(catalog(candidate, "studyEip"));
for (const { path, messages } of changes.fixtures)
  for (const key of Object.keys(messages)) {
    const short = key.replace(/^studyEip\./, "");
    const tail = key.split(".").slice(-2).join(".");
    const readersAtBase = grep(base, tail).filter(
      (file) => !file.includes("/i18n/") && !file.endsWith("study-en.json"),
    );
    result.fixtureKeys.push({
      key,
      atBase: short in eipBase,
      atCandidate: short in eipCandidate,
      baseReadersOutsideSpecs: readersAtBase.filter(
        (file) => !/\.spec\.ts$/.test(file),
      ),
      inCandidateSpec: readFileSync(join(candidate, path), "utf8").includes(
        key,
      ),
      sameEnglish: readFileSync(join(candidate, path), "utf8").includes(
        JSON.stringify(eipBase[short]).slice(1, -1),
      ),
    });
  }

// 3. The unread wander key.
const aifgBase = flat(catalog(base, "studyAifg"));
const aifgCandidate = flat(catalog(candidate, "studyAifg"));
result.drawPairs = {
  atBase: "wander.record.parameters.drawPairs" in aifgBase,
  atCandidate: "wander.record.parameters.drawPairs" in aifgCandidate,
  readersAtBase: grep(base, "drawPairs").filter(
    (file) => !file.includes("/i18n/") && !file.endsWith("study-en.json"),
  ),
};

// 4. Model messages: none begins with a placeholder; and no sentence inside one opens with one.
for (const scope of ["studyEip", "studyRxjs"]) {
  const rows = Object.entries(flat(catalog(candidate, scope))).filter(([key]) =>
    key.includes(".model."),
  );
  result.placeholderStarts[scope] = {
    modelMessages: rows.length,
    startingWithPlaceholder: rows
      .filter(([, text]) => /^\s*\{\{/.test(text))
      .map(([key]) => key),
  };
  result.sentenceStarts[scope] = rows
    .filter(([, text]) => /[.!?;]\s+\{\{/.test(text))
    .map(([key, text]) => ({ key, text }));
}

// 5. Every changed English message in the two stream catalogs, against the README's table.
const table = new Map();
for (const line of readFileSync(readme, "utf8").split("\n")) {
  const match = /^\| `(study(?:Eip|Rxjs)\.[^`]+)` \| (.*) \| (.*) \|$/.exec(
    line,
  );
  if (match) table.set(match[1], { before: match[2], after: match[3] });
}
for (const scope of ["studyEip", "studyRxjs"]) {
  const before = flat(catalog(base, scope));
  const after = flat(catalog(candidate, scope));
  const changed = Object.keys(after).filter(
    (key) => key in before && before[key] !== after[key],
  );
  const added = Object.keys(after).filter((key) => !(key in before));
  const removed = Object.keys(before).filter(
    (key) => !(key in after) && !key.startsWith("titles."),
  );
  result.reworded[scope] = {
    changed: changed.length,
    listedExactly: changed.filter((key) => {
      const row = table.get(`${scope}.${key}`);
      return row && row.before === before[key] && row.after === after[key];
    }).length,
    unlisted: changed.filter((key) => !table.has(`${scope}.${key}`)),
    added,
    removedOutsideTitles: removed,
    parametersChanged: changed.filter((key) => {
      const names = (text) =>
        [...text.matchAll(/\{\{\s*(\w+)\s*\}\}/g)]
          .map((m) => m[1])
          .sort()
          .join(",");
      return names(before[key]) !== names(after[key]);
    }),
  };
}
result.readmeRows = table.size;
writeFileSync(out, `${JSON.stringify(result, null, 1)}\n`);
console.log(JSON.stringify(result, null, 1));
