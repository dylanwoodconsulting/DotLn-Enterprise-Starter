// VER-001: an independent reading of the first batch's function signatures, beside the shape audit.
// Usage: node signature-audit.mjs <tree root> [results.json]
// For every function in the twenty first-batch presentation modules it records each parameter's
// declared type form and the declared return type, and flags the shapes the order's Design refuses:
// more than four parameters, a parameter typed inline as an object literal or as another function's
// return type, an untyped or inline-typed destructured object, and a top-level function without a
// named return type. It also counts number-format spellings outside the shared formatter.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const [rootArgument, out] = process.argv.slice(2);
if (!rootArgument)
  throw new Error("usage: signature-audit.mjs <tree root> [results.json]");
const ts = createRequire(join(rootArgument, "package.json"))("typescript");
const directory = join(
  rootArgument,
  "libs/features/tools/src/lib/studies/movement",
);
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
const files = readdirSync(directory)
  .filter(
    (name) => name.endsWith(".presentation.ts") && name !== "presentation.ts",
  )
  .filter((name) => !secondBatch.has(name.replace(".presentation.ts", "")))
  .sort();

const rows = [];
const flags = [];
const spellings = {};
for (const name of files) {
  const text = readFileSync(join(directory, name), "utf8");
  spellings[name] = {
    toFixed: (text.match(/\.toFixed\(/g) ?? []).length,
    toPrecision: (text.match(/\.toPrecision\(/g) ?? []).length,
    intlNumberFormat: (text.match(/Intl\.NumberFormat|toLocaleString\(/g) ?? [])
      .length,
    stringOfNumber: (text.match(/String\(Number\(/g) ?? []).length,
    mathRoundDivision: (
      text.match(/Math\.round\([^)]*\*\s*10+\)\s*\/\s*10+/g) ?? []
    ).length,
    createNumberFormat: (text.match(/createNumberFormat\(/g) ?? []).length,
  };
  const source = ts.createSourceFile(name, text, ts.ScriptTarget.Latest, true);
  const visit = (node) => {
    const isFunction =
      ts.isFunctionDeclaration(node) ||
      ts.isArrowFunction(node) ||
      ts.isFunctionExpression(node) ||
      ts.isMethodDeclaration(node);
    if (isFunction && node.body) {
      const holder = node.parent;
      const fnName =
        node.name?.getText(source) ??
        (holder &&
        (ts.isVariableDeclaration(holder) || ts.isPropertyAssignment(holder))
          ? holder.name.getText(source)
          : "(callback)");
      const topLevel =
        ts.isSourceFile(node.parent) ||
        (holder &&
          ts.isVariableDeclaration(holder) &&
          ts.isSourceFile(holder.parent?.parent?.parent));
      const line =
        source.getLineAndCharacterOfPosition(node.getStart()).line + 1;
      const parameters = node.parameters.map((parameter) => {
        const type = parameter.type;
        const kind = !type
          ? "untyped"
          : ts.isTypeLiteralNode(type)
            ? "inline-object"
            : /ReturnType<|Parameters</.test(type.getText(source))
              ? "borrowed"
              : "named";
        const destructured = ts.isObjectBindingPattern(parameter.name)
          ? parameter.name.elements.length
          : 0;
        return {
          text: parameter.getText(source).replace(/\s+/g, " ").slice(0, 120),
          kind,
          destructured,
        };
      });
      const returnType = node.type
        ? node.type.getText(source).replace(/\s+/g, " ")
        : null;
      const row = {
        file: name,
        name: fnName,
        line,
        topLevel: Boolean(topLevel),
        parameters,
        returnType,
      };
      rows.push(row);
      const problems = [];
      if (parameters.length > 4)
        problems.push(`${parameters.length} parameters`);
      for (const parameter of parameters) {
        if (parameter.kind === "inline-object")
          problems.push(`inline object type: ${parameter.text}`);
        if (parameter.kind === "borrowed")
          problems.push(`borrowed type: ${parameter.text}`);
        if (parameter.destructured > 4 && parameter.kind !== "named")
          problems.push(
            `destructured ${parameter.destructured} fields without a named type: ${parameter.text}`,
          );
        if (topLevel && parameter.kind === "untyped")
          problems.push(`untyped parameter: ${parameter.text}`);
      }
      if (topLevel && !returnType) problems.push("no declared return type");
      if (
        returnType &&
        (/^\{/.test(returnType) || /ReturnType</.test(returnType))
      )
        problems.push(
          `inline or borrowed return type: ${returnType.slice(0, 80)}`,
        );
      if (problems.length)
        flags.push({
          file: name,
          name: fnName,
          line,
          topLevel: Boolean(topLevel),
          problems,
        });
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
}
const topLevel = rows.filter((row) => row.topLevel);
const summary = {
  files: files.length,
  functions: rows.length,
  topLevelFunctions: topLevel.length,
  overFourParameters: rows.filter((row) => row.parameters.length > 4).length,
  inlineObjectParameters: rows
    .flatMap((row) => row.parameters)
    .filter((p) => p.kind === "inline-object").length,
  borrowedParameterTypes: rows
    .flatMap((row) => row.parameters)
    .filter((p) => p.kind === "borrowed").length,
  topLevelWithoutReturnType: topLevel.filter((row) => !row.returnType).length,
  flagged: flags.length,
  spellingTotals: Object.values(spellings).reduce((total, counts) => {
    for (const [key, value] of Object.entries(counts))
      total[key] = (total[key] ?? 0) + value;
    return total;
  }, {}),
};
const result = { schemaVersion: 1, summary, flags, spellings, topLevel };
if (out) writeFileSync(out, `${JSON.stringify(result, null, 1)}\n`);
console.log(JSON.stringify({ summary, flags: flags.slice(0, 40) }, null, 1));
