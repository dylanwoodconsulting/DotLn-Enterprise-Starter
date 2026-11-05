// VER-003's audit of FINAL-001's F9 and F10 on the source: function sizes counted as the lint rule
// counts them, string literals outside message keys, repeated helpers, and the simulation boundary.
// Usage: node source-audit.mjs <target worktree> <results.json>
import { createRequire } from "node:module";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
const [T, output] = process.argv.slice(2);
const ts = createRequire(join(T, "package.json"))("typescript");
const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)],
  );
const sources = walk(join(T, "libs/features/tools/src/lib/studies")).filter(
  (p) => p.endsWith(".ts") && !/\.spec\.ts$|-testing\.ts$/.test(p),
);
const keyRe = /^study[A-Z][A-Za-z0-9]*\.[\w:.-]+$/;
const sizes = [];
const prose = [];
const helpers = { fixed: [], bounds: [] };
const simulationBoundary = [];
for (const path of sources) {
  const rel = relative(T, path);
  const text = readFileSync(path, "utf8");
  const sf = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
  const lines = text.split("\n");
  const commentLine = new Set();
  const scanComments = (node) => {
    for (const r of ts.getLeadingCommentRanges(text, node.getFullStart()) ??
      []) {
      const a = sf.getLineAndCharacterOfPosition(r.pos).line;
      const b = sf.getLineAndCharacterOfPosition(r.end).line;
      for (let i = a; i <= b; i++) commentLine.add(i);
    }
    ts.forEachChild(node, scanComments);
  };
  scanComments(sf);
  const count = (node) => {
    const a = sf.getLineAndCharacterOfPosition(node.getStart()).line;
    const b = sf.getLineAndCharacterOfPosition(node.getEnd()).line;
    let n = 0;
    for (let i = a; i <= b; i++)
      if (lines[i].trim() && !commentLine.has(i)) n++;
    return n;
  };
  const visit = (node) => {
    if (ts.isFunctionLike(node) && node.body) {
      const name =
        node.name?.getText(sf) ??
        (ts.isVariableDeclaration(node.parent)
          ? node.parent.name.getText(sf)
          : ts.isPropertyAssignment(node.parent)
            ? node.parent.name.getText(sf)
            : "(anonymous)");
      sizes.push({
        file: rel.replace("libs/features/tools/src/lib/studies/", ""),
        name,
        lines: count(node),
      });
    }
    if (
      (ts.isFunctionDeclaration(node) || ts.isVariableDeclaration(node)) &&
      /^(fixed|format\w*|boundsOf\w*|paddedBounds|bounds)$/.test(
        node.name?.getText(sf) ?? "",
      )
    ) {
      (node.name.getText(sf) === "fixed" ? helpers.fixed : helpers.bounds).push(
        `${rel.split("/").at(-1)}:${node.name.getText(sf)}`,
      );
    }
    if (
      ts.isStringLiteralLike(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node)
    ) {
      const s = node.text;
      const parent = node.parent;
      const isImport =
        ts.isImportDeclaration(parent) ||
        ts.isExportDeclaration(parent) ||
        ts.isImportTypeNode?.(parent?.parent) ||
        ts.isLiteralTypeNode(parent) ||
        (ts.isCallExpression(parent) &&
          parent.expression.kind === ts.SyntaxKind.ImportKeyword);
      if (
        !isImport &&
        !keyRe.test(s) &&
        /[A-Za-z]{2,}/.test(s) &&
        (/[a-z]{2,} [a-z]/i.test(s) || /^[A-Z][a-z]+/.test(s))
      ) {
        const line = sf.getLineAndCharacterOfPosition(node.getStart()).line + 1;
        prose.push({
          file: rel.replace("libs/features/tools/src/lib/studies/", ""),
          line,
          text: s.slice(0, 90),
          parent: ts.SyntaxKind[parent.kind],
          property: ts.isPropertyAssignment(parent)
            ? parent.name.getText(sf)
            : null,
          callee: ts.isCallExpression(parent)
            ? parent.expression.getText(sf).slice(0, 40)
            : null,
        });
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  if (/\.simulation\.ts$/.test(path)) {
    const bad = [];
    if (/study-translate|StudyTranslate/.test(text))
      bad.push("imports the translator");
    if (/\bt\(\s*['"`]/.test(text)) bad.push("calls a translator");
    if (/from '\.\/[\w-]+\.presentation'/.test(text))
      bad.push("imports presentation");
    if (bad.length) simulationBoundary.push({ file: rel, bad });
  }
}
sizes.sort((a, b) => b.lines - a.lines);
const result = {
  files: sources.length,
  functions: sizes.length,
  overEighty: sizes.filter((s) => s.lines > 80),
  top: sizes.slice(0, 12),
  modelEntryMax: Math.max(
    ...sizes.filter((s) => s.name === "model").map((s) => s.lines),
  ),
  modelEntriesOverTen: sizes.filter((s) => s.name === "model" && s.lines > 10),
  localFixedHelpers: helpers.fixed,
  localBoundsHelpers: helpers.bounds,
  simulationBoundary,
  proseLiteralCount: prose.length,
  prose,
};
writeFileSync(output, JSON.stringify(result, null, 1) + "\n");
const { prose: _p, ...head } = result;
console.log(JSON.stringify(head, null, 0).slice(0, 2600));
const groups = {};
for (const p of prose)
  (groups[p.property ?? p.callee ?? p.parent] ??= []).push(p);
for (const [k, v] of Object.entries(groups)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 25))
  console.log(
    k,
    v.length,
    JSON.stringify(
      v.slice(0, 3).map((x) => `${x.file}:${x.line} ${x.text}`),
    ).slice(0, 330),
  );
