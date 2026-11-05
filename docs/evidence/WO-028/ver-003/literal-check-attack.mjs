// VER-003's attack on the study-message check: which forms of an untranslated literal does it refuse?
// Usage: node literal-check-attack.mjs <target worktree>
import { pathToFileURL } from "node:url";
import { join } from "node:path";
const [T] = process.argv.slice(2);
const { presentationProblems } = await import(
  pathToFileURL(join(T, "tools/scripts/catalog/check-study-messages.mjs")).href
);
const variants = {
  "label: literal": `const a = { label: 'Hello there' };`,
  "caption: template with a value":
    "const x = 1; const a = { caption: `Hello ${x}` };",
  "note: literal through a const": `const n = 'Hello there'; const a = { note: n };`,
  "title: conditional literal": `const c = true; const a = { title: c ? 'Hello' : 'There' };`,
  "lines: array of literals": `const a = { lines: ['Hello there'] };`,
  "label: concatenation": `const x = '1'; const a = { label: 'Hello ' + x };`,
  "label: nullish fallback": `const x: string | undefined = undefined; const a = { label: x ?? 'Hello there' };`,
  "label: parenthesised literal": `const a = { label: ('Hello there') };`,
  "label: literal cast": `const a = { label: 'Hello there' as string };`,
  "caption: join": `const a = { caption: ['Hello', 'there'].join(' ') };`,
  "caption: helper call": `const h = (s: string) => s; const a = { caption: h('Hello there') };`,
  "values: literal (read by the prose)": `const a = { values: { decision: 'Hello there' } };`,
  "legend entry under another property name": `const a = { name: 'Hello there' };`,
  "text field": `const a = { text: 'Hello there' };`,
  "moment label via shorthand": `const label = 'Hello there'; const a = { label };`,
  "label: t() with a literal key that is prose": `const t = (s: string) => s; const a = { label: t('Hello there') };`,
  "control: message key": `const a = { label: 'studyAifg.flee.model.x' };`,
};
const rows = Object.entries(variants).map(([name, text]) => ({
  name,
  refused: presentationProblems(text, "probe.ts").problems.length > 0,
}));
for (const r of rows) console.log(r.refused ? "refused " : "ADMITTED", r.name);
