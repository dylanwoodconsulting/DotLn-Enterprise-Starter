# WO-026 evidence

This order ran the kit's `quality pass:` procedure over DotLn-Angular's standing
documents, so the README, the developer reference, the AI reference and the library
READMEs read as what is so at WO-015's merge. [census.md](census.md) lists every tracked Markdown file in the
target with its kind and every standing document's outcome, and the decisions, filed in the
target at `docs/dotln/evidence/WO-026/decisions.md`, record the choices.
[self-review.md](self-review.md) holds the three reviews and what became of each finding,
[host-qualification.md](host-qualification.md) records how the work ran on this host,
[handoff.md](handoff.md) judges the criteria and
[preview-pr.json](preview-pr.json) records the draft pull request, its checks and the final
review's reading of it.

## What the pass found

Nothing a standing document named was missing from the tree: the stale facts were
descriptions, not names. The board's taxonomy paragraph denied the store and HTTP it has
had since events landed, `foundation.md` gave translations a home page that no longer
exists, `conventions.md` said the final publish supersedes the draft it reuses, and
`scripts.md` left `typecheck:e2e` out of the gate. `catalog.md` held the Arrive study's
facts in the order they were added, and now reads as one account. Three things the
Objective's reader needs did not exist and were added: a table from a question to a
document and a file, how a feature library is laid out, and where state lives.

Running the rule documents' commands found one defect no reading had: the scene's
regeneration rule exits 0 and leaves the tree failing the format gate (D009).

One line of the order did not hold as written: the Design counts the arriving pages among
removed surfaces, and the one at `/machinery` still exists. The documents now call it a
placeholder (D004).

The order's first list omitted the 33 READMEs under `libs/`, though the direction behind it
was every public mutable document, and criterion 6 was written from that list. The first
handoff left them unedited. The operator directed otherwise, the order was amended (D013),
and all 33 were passed: nineteen generator stubs replaced, one false statement corrected, the
17 library READMEs saying what the library is for, how it is imported and how it is tested,
and the 16 entry points what they export and how they are imported. The standard went into
the target's conventions so the next library does not ship a stub (D014). The first handoff's `ImplementationReady` event and ledger predate this work, because
the kit has no route from `ready-to-verify` back to the executor; this tree's gates and
[handoff.md](handoff.md) supersede them.

## Checks

Each ran on the final tree on 2026-10-31, the target at its base with every change
uncommitted. A hash of `git status` and `git diff` in the target read `c5f9a43dac36c2b7`
before and after the rule documents' sequence and again after both gates.

| Check | Result |
| --- | --- |
| Every command the rule documents name, plus the Preflight's lint | 40 rows, each exit 0 on the final tree; [the census's table](census.md#commands-the-rule-documents-name) |
| Every command the library READMEs name | 41 rows, each exit 0 on the final READMEs; [the census's table](census.md#commands-the-library-readmes-name) |
| Regeneration then formatting of the known outcome | the fixture differs after the first and is byte-identical after the second (D009) |
| [The script below](#the-census-the-names-and-the-links) | `94 tracked, 94 rows`; `54 documents, 492 names`; `122 repository links`; `0 problems` |
| External links in the standing documents | 18 of 18 answer HTTP 200 by `curl -L`; `https://nx.dev`, which also answered, left with the stubs |
| Step 3: `grep -c "scene" README.md` | 2 |
| Step 7: `package.json` `dependencies` keys against the base | prints nothing |
| Criterion 3's grep, the same pattern over the library READMEs, and the same search for `filter row` | each prints nothing |
| Paths in the target's diff outside criterion 6's fence | none; 54 files changed |
| `npm start` from the README, before the widening, which changed no code | the root answers HTTP 200 with `<title>DotLn</title>` and `<dotln-root>` |
| The Preflight line, before the first full gate | `npx nx format:check`, `npm run check:scripts`, `npm run i18n:check` and `npx nx run-many -t lint` exit 0 with no tracked byte moved; `npm run test:docs` 14 passed, 0 failed |
| `node scripts/target-gate.mjs WO-026` | passed: install, lint, typecheck, test, format, in 0 h 1 min |
| `node scripts/target-gate.mjs WO-026 --review` | passed: those five and build, e2e, visual, in 0 h 1 min, with no tracked-byte mutation. Test, build and e2e read Nx's cache of the sequence on this same tree; lint and visual ran live |

## The census, the names and the links

This script takes the census's standing rows and the target worktree and asserts three
things. It prints one count line for each and one line for each failure, and exits 0
only when there are none.

- **The census equals the tree.** The census's rows name exactly the files
  `git ls-files '*.md' '**/*.md'` prints, each with a kind the Design names and a
  reason, and every standing row carries an outcome and its unresolved facts. Paths
  `target-records` files for this order after the review count as records without a
  row, because they cannot exist in the tree the census describes.
- **Every name exists.** Over every standing document it extracts each route
  (`BasePaths.X`, `ChildPaths.X` and a backticked path such as `/tools/catalog`), each
  library alias (`@dotln-angular/...`), each npm script (`npm run x` and a backticked
  `x:y`), each `tools/scripts/*` file and each other repository path in backticks, and
  checks it against `libs/shared/core/src/lib/paths/routes.ts`, `tsconfig.base.json`,
  `package.json` and the tracked tree. A placeholder such as `<lib>`, a glob, a path the
  documents describe as generated, a catalog id such as `geb1:8`, `/api`, and
  `packages/console/`, which `console.md` names in the platform's repository, are not
  names of something in this tree.
- **Every link resolves.** Every `](…)` target in a standing document or the generator
  log that is a repository path exists, and every `#fragment` on one matches a heading
  of the file it points to.

Run it from this worktree's root, with `TARGET` naming the target worktree:

```sh
TARGET=../DotLn-Angular-wo026 node --input-type=module -e "$(awk '/^```js$/{f=1;next}/^```$/{f=0}f' docs/evidence/WO-026/README.md)"
```

```js
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';

const target = process.env.TARGET ?? '../DotLn-Angular-wo026';
const census = readFileSync('docs/evidence/WO-026/census.md', 'utf8');
const read = (path) => readFileSync(join(target, path), 'utf8');
const problems = [];

const tracked = execFileSync('git', ['-C', target, 'ls-files'], { encoding: 'utf8' })
  .trim()
  .split('\n');
const markdown = execFileSync('git', ['-C', target, 'ls-files', '*.md', '**/*.md'], {
  encoding: 'utf8',
})
  .trim()
  .split('\n');

// The census equals the tree.
const kinds = new Set(['standing', 'ledger', 'licence text', 'record']);
const rows = census
  .split('\n')
  .filter((line) => /^\| `[^` ]+` \|/.test(line))
  .map((line) => {
    const [path, kind, reason, ...cells] = line
      .slice(1, -1)
      .split(' | ')
      .map((cell) => cell.trim());
    return { path: path.replaceAll('`', ''), kind, reason, cells };
  });
const counted = (label) => Number(census.match(new RegExp(`^\\| ${label} \\| (\\d+) \\|$`, 'm'))?.[1]);
const ofKind = (kind) => rows.filter((row) => row.kind === kind);
const library = ofKind('standing').filter((row) => row.path.startsWith('libs/')).length;
for (const [label, count] of [
  ['standing, the first list', ofKind('standing').length - library],
  ['standing, a library README', library],
  ['ledger', ofKind('ledger').length],
  ['licence text', ofKind('licence text').length],
  ['record', ofKind('record').length],
  ['all', rows.length],
])
  if (counted(label) !== count) problems.push(`count differs: ${label}: ${counted(label)}, ${count}`);
const laterRecord =
  /^docs\/dotln\/(?:(?:evidence|verifications|final-reviews)\/WO-026\/|work-orders\/WO-026-)/;
const listed = new Set(rows.map((row) => row.path));
for (const path of markdown)
  if (!listed.has(path) && !laterRecord.test(path)) problems.push(`no census row: ${path}`);
for (const row of rows) {
  if (!markdown.includes(row.path)) problems.push(`census row names no tracked file: ${row.path}`);
  if (!kinds.has(row.kind)) problems.push(`unknown kind: ${row.path}: ${row.kind}`);
  if (!row.reason) problems.push(`no reason: ${row.path}`);
  if (row.kind === 'standing') {
    const [outcome, unresolved] = row.cells;
    if (!/^(changed: \S|unchanged)/.test(outcome ?? ''))
      problems.push(`no outcome: ${row.path}: ${outcome}`);
    if (!unresolved || unresolved === 'pending') problems.push(`no unresolved: ${row.path}`);
  }
}
if (new Set(rows.map((row) => row.path)).size !== rows.length) problems.push('duplicate row');
console.log(`census: ${markdown.length} tracked, ${rows.length} rows`);

// Every name exists.
const standing = rows.filter((row) => row.kind === 'standing').map((row) => row.path);
const routes = read('libs/shared/core/src/lib/paths/routes.ts');
const enumValues = (name) =>
  Object.fromEntries(
    [...routes.match(new RegExp(`enum ${name} \\{([^}]*)\\}`))[1].matchAll(/(\w+) = '([^']*)'/g)].map(
      ([, key, value]) => [key, value],
    ),
  );
const basePaths = enumValues('BasePaths');
const childPaths = enumValues('ChildPaths');
const aliases = Object.keys(JSON.parse(read('tsconfig.base.json')).compilerOptions.paths);
const scripts = new Set(Object.keys(JSON.parse(read('package.json')).scripts));
const trackedSet = new Set(tracked);
const generated =
  /(^|\/)(\.env|environment\.local\.ts|public-config\.local\.ts)$|^\.nx(\/|$)|^dist\/|^coverage\//;
const repoRoot = /^(apps|libs|tools|docs|\.github|\.storybook)\//;
const rootFile =
  /^(eslint\.config\.mjs|package\.json|package-lock\.json|nx\.json|tsconfig\.base\.json|vitest\.config\.mts|\.node-version|\.env\.example|\.editorconfig|\.prettierrc|\.prettierignore)$/;
const pathShaped = /^[\w.@-]+(\/[\w.@-]+)*\/?$/;
const fileShaped = /\.(ts|mts|mjs|json|scss|md|html)$/;
const inTree = (path) => {
  const bare = path.replace(/\/$/, '');
  return (
    trackedSet.has(bare) ||
    tracked.some((file) => file.startsWith(`${bare}/`)) ||
    tracked.some((file) => file.endsWith(`/${bare}`) || file.includes(`/${bare}/`))
  );
};
let names = 0;
for (const path of standing) {
  const text = read(path);
  const fail = (what) => problems.push(`${path}: ${what}`);
  for (const [alias] of text.matchAll(/@dotln-angular\/[a-z0-9-]+(?:\/[a-z0-9-]+)*/g)) {
    names += 1;
    if (!aliases.includes(alias)) fail(`no alias ${alias}`);
  }
  for (const [, enumName, key] of text.matchAll(/\b(BasePaths|ChildPaths)\.(\w+)/g)) {
    names += 1;
    if (!(key in (enumName === 'BasePaths' ? basePaths : childPaths)))
      fail(`no route ${enumName}.${key}`);
  }
  for (const [, script] of text.matchAll(/\bnpm run ([\w:-]+)/g)) {
    names += 1;
    if (!scripts.has(script)) fail(`no npm script ${script}`);
  }
  for (const [file] of text.matchAll(/tools\/scripts\/[\w./-]*\.mjs/g)) {
    names += 1;
    if (!trackedSet.has(file)) fail(`no tool script ${file}`);
  }
  for (const [, token] of text.matchAll(/`([^`\n]+)`/g)) {
    if (/^\/[a-z]/.test(token) && !/^\/(api|testing)\b/.test(token)) {
      names += 1;
      const [base, child] = token.split(/[?#]/)[0].slice(1).split('/');
      if (!Object.values(basePaths).includes(base)) fail(`no route ${token}`);
      if (child && !Object.values(childPaths).includes(child)) fail(`no child route ${token}`);
    } else if (/^[a-z0-9]+:[a-z][a-z0-9-]*$/.test(token) && !/^(scope|type|layer):/.test(token)) {
      names += 1;
      if (!scripts.has(token) && token !== 'workspace-tools:lint') fail(`no npm script ${token}`);
    } else if (
      pathShaped.test(token) &&
      !token.startsWith('@') &&
      !/^\.[a-z]+$/.test(token) &&
      !token.startsWith('packages/console/') &&
      (repoRoot.test(token) || rootFile.test(token) || fileShaped.test(token)) &&
      !generated.test(token)
    ) {
      names += 1;
      if (!inTree(token)) fail(`no file ${token}`);
    }
  }
}
console.log(`names: ${standing.length} documents, ${names} names`);

// Every link resolves.
const slug = (heading) =>
  heading
    .replace(/[`*_]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-');
const headings = (path) =>
  new Set([...read(path).matchAll(/^#{1,6} (.+)$/gm)].map(([, heading]) => slug(heading)));
let links = 0;
for (const path of [...standing, 'docs/dev-reference/workspace/generator-log.md']) {
  for (const [, href] of read(path).matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^[a-z]+:/.test(href)) continue;
    links += 1;
    const [file, fragment] = href.split('#');
    const resolved = file ? normalize(join(dirname(path), file)) : path;
    if (!existsSync(join(target, resolved))) problems.push(`${path}: broken link ${href}`);
    else if (fragment && !headings(resolved).has(fragment))
      problems.push(`${path}: no heading for ${href}`);
  }
}
console.log(`links: ${links} repository links`);

for (const problem of problems) console.log(`PROBLEM ${problem}`);
console.log(`${problems.length} problems`);
process.exitCode = problems.length ? 1 : 0;
```
