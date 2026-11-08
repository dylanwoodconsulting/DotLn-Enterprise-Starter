#!/usr/bin/env node
// FINAL-002's shape audit of the study model sources and message catalogs, copied from WO-034's
// evidence and extended for the enterprise batch: the poeaa group's functions over four
// positional parameters and at 70 counted lines or more, and its message catalog's counts.
// Usage: node shape-audit.mjs <target worktree> [results.json]
// Reads only; uses the TypeScript the target installs. Counted lines are nonblank lines that do
// not open with a comment marker, which approximates the lint rule's count and may differ by one.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, relative } from "node:path";

const [target, out] = process.argv.slice(2);
if (!target)
  throw new Error("usage: shape-audit.mjs <target worktree> [results.json]");
const ts = createRequire(join(target, "package.json"))("typescript");
const root = join(target, "libs/features/tools/src/lib/studies");

// The twenty studies WO-028 adds; every other movement study is WO-020's first batch.
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

const sources = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? sources(join(directory, entry.name))
      : entry.name.endsWith(".ts") &&
          !/\.spec\.ts$|-testing\.ts$/.test(entry.name)
        ? [join(directory, entry.name)]
        : [],
  );

function groupOf(path) {
  const [first, file] = relative(root, path).split("/");
  if (first !== "movement") return file ? first : "shared";
  const slug = file.split(".")[0];
  if (slug === "presentation") return "movement shared helpers";
  return secondBatch.has(slug)
    ? "movement, second batch (WO-028)"
    : "movement, first batch (WO-020)";
}

const functions = [];
for (const path of sources(root)) {
  const text = readFileSync(path, "utf8");
  const lines = text.split("\n");
  const source = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
  const visit = (node) => {
    const isFunction =
      ts.isFunctionDeclaration(node) ||
      ts.isArrowFunction(node) ||
      ts.isFunctionExpression(node) ||
      ts.isMethodDeclaration(node);
    if (isFunction && node.body) {
      const start = source.getLineAndCharacterOfPosition(node.getStart()).line;
      const end = source.getLineAndCharacterOfPosition(node.getEnd()).line;
      const counted = lines
        .slice(start, end + 1)
        .filter(
          (line) => line.trim() && !/^(\/\/|\/\*|\*)/.test(line.trim()),
        ).length;
      const holder = node.parent;
      const name =
        node.name?.getText(source) ??
        (holder &&
        (ts.isVariableDeclaration(holder) || ts.isPropertyAssignment(holder))
          ? holder.name.getText(source)
          : "(anonymous)");
      functions.push({
        file: relative(root, path),
        group: groupOf(path),
        name,
        line: start + 1,
        parameters: node.parameters.length,
        lines: counted,
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
}

const groups = [...new Set(functions.map(({ group }) => group))]
  .sort()
  .map((group) => {
    const rows = functions.filter((row) => row.group === group);
    const withParameters = (count) =>
      rows.filter(({ parameters }) => parameters >= count).length;
    return {
      group,
      files: new Set(rows.map(({ file }) => file)).size,
      functions: rows.length,
      parameters6: withParameters(6),
      parameters8: withParameters(8),
      mostParameters: Math.max(...rows.map(({ parameters }) => parameters)),
      lines70to80: rows.filter(({ lines }) => lines >= 70).length,
      longest: Math.max(...rows.map(({ lines }) => lines)),
    };
  });

// Message placeholders: a name such as value1 tells a translator nothing about the value.
const catalog = JSON.parse(
  readFileSync(
    join(target, "apps/dotln/public/i18n/studyAifg/en.json"),
    "utf8",
  ),
);
const placeholders = Object.entries(catalog)
  .filter(([slug]) => slug !== "titles")
  .map(([slug, body]) => {
    const row = {
      study: slug,
      batch: secondBatch.has(slug) ? "second" : "first",
      messages: 0,
      numbered: 0,
      flatModelKeys: 0,
      nestedModelKeys: 0,
    };
    const walk = (value, depth, inModel) => {
      if (typeof value === "string") {
        row.messages += 1;
        if (inModel) row[depth <= 1 ? "flatModelKeys" : "nestedModelKeys"] += 1;
        row.numbered += [...value.matchAll(/\{\{\s*value\d+\s*\}\}/g)].length;
      } else if (value && typeof value === "object")
        for (const [key, entry] of Object.entries(value))
          walk(entry, inModel ? depth + 1 : 0, inModel || key === "model");
    };
    walk(body, 0, false);
    return row;
  });
const batchPlaceholders = ["first", "second"].map((batch) => {
  const rows = placeholders.filter((row) => row.batch === batch);
  const sum = (field) => rows.reduce((total, row) => total + row[field], 0);
  return {
    batch,
    studies: rows.length,
    studiesWithNumberedPlaceholders: rows.filter(({ numbered }) => numbered)
      .length,
    numberedPlaceholders: sum("numbered"),
    flatModelKeys: sum("flatModelKeys"),
    nestedModelKeys: sum("nestedModelKeys"),
  };
});

// The enterprise batch's catalog: how many strings it holds, how many use numbered placeholders,
// and how many model messages sit directly under a study's model key rather than nested by part.
const poeaaCatalog = JSON.parse(
  readFileSync(
    join(target, "apps/dotln/public/i18n/studyPoeaa/en.json"),
    "utf8",
  ),
);
const poeaaMessages = {
  strings: 0,
  numbered: 0,
  flatModelKeys: 0,
  nestedModelKeys: 0,
};
const walkPoeaa = (value, depth, inModel) => {
  if (typeof value === "string") {
    poeaaMessages.strings += 1;
    if (inModel)
      poeaaMessages[depth <= 1 ? "flatModelKeys" : "nestedModelKeys"] += 1;
    poeaaMessages.numbered += [
      ...value.matchAll(/\{\{\s*value\d+\s*\}\}/g),
    ].length;
  } else if (value && typeof value === "object")
    for (const [key, entry] of Object.entries(value))
      walkPoeaa(entry, inModel ? depth + 1 : 0, inModel || key === "model");
};
walkPoeaa(poeaaCatalog, 0, false);
const poeaa = functions.filter(({ group }) => group === "poeaa");

const results = {
  schemaVersion: 1,
  subject:
    "libs/features/tools/src/lib/studies, apps/dotln/public/i18n/studyAifg/en.json and apps/dotln/public/i18n/studyPoeaa/en.json",
  groups,
  poeaa: {
    files: new Set(poeaa.map(({ file }) => file)).size,
    functions: poeaa.length,
    overFourParameters: poeaa.filter(({ parameters }) => parameters > 4),
    seventyOrMoreLines: poeaa
      .filter(({ lines }) => lines >= 70)
      .sort((a, b) => b.lines - a.lines || a.file.localeCompare(b.file)),
    messages: poeaaMessages,
  },
  firstBatchPresentations: functions.filter(
    ({ file, group }) =>
      group === "movement, first batch (WO-020)" &&
      file.endsWith(".presentation.ts"),
  ),
  firstBatchOverFourParameters: functions.filter(
    ({ file, group, parameters }) =>
      group === "movement, first batch (WO-020)" &&
      file.endsWith(".presentation.ts") &&
      parameters > 4,
  ),
  eightOrMoreParameters: functions
    .filter(({ parameters }) => parameters >= 8)
    .sort(
      (a, b) => b.parameters - a.parameters || a.file.localeCompare(b.file),
    ),
  seventyOrMoreLines: functions
    .filter(({ lines }) => lines >= 70)
    .sort((a, b) => b.lines - a.lines || a.file.localeCompare(b.file)),
  batchPlaceholders,
  placeholders: placeholders.filter(({ numbered }) => numbered),
};
if (out) writeFileSync(out, `${JSON.stringify(results, null, 2)}\n`);
console.table(groups);
console.table(batchPlaceholders);
console.log(
  `functions with eight or more parameters: ${results.eightOrMoreParameters.length}; of 70 or more counted lines: ${results.seventyOrMoreLines.length}`,
);
console.log(
  `poeaa: ${results.poeaa.files} files, ${results.poeaa.functions} functions, ${results.poeaa.overFourParameters.length} over four positional parameters, ${results.poeaa.seventyOrMoreLines.length} of 70 or more counted lines (${results.poeaa.seventyOrMoreLines.map(({ file, name, lines }) => `${file} ${name} ${lines}`).join("; ")}); ${results.poeaa.messages.strings} catalog strings, ${results.poeaa.messages.numbered} numbered placeholders`,
);
