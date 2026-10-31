# WO-025 evidence

This order ran the kit's `quality pass:` procedure over every standing document of
this launchpad and rewrote the repository profile to the shape the operator chose.
[census.md](census.md) lists every Markdown file with its kind and every
standing document's outcome, and [decisions.md](decisions.md) records the choices.
[self-review.md](self-review.md) holds the three reviews and what became of each
finding, [host-qualification.md](host-qualification.md) records how the work ran on
this host and [handoff.md](handoff.md) judges the criteria.

The operator widened the order after the first handoff (D013). The exclusion of
`README.md` came out of criterion 6, whose conflict with criterion 8 D003 had reported,
and the order was amended through `amend-order`. The launchpad's own page is
[`docs/launchpad-readme.md`](../../launchpad-readme.md), off the main page because the
starter's updates rewrite the root one (D014). The gaps the pass had listed were
closed instead of deferred, as the census records. The kit has no route from
`ready-to-verify` back to the executor, so this work follows the first handoff's
`ImplementationReady` event, whose ledger predates the amendment; this tree's gates
and [handoff.md](handoff.md) supersede it.

One thing in the order's first text did not hold as written: its grep for WS-001's
house rules also counted the seven taxonomy kinds (D002).

[VER-001](../../verifications/WO-025/VER-001.md) failed criterion 2 alone, because the
census counted three reports that did not exist. The repair changed this order's
evidence and no standing document (D020); [the census's assertion](#the-census-equals-the-tree)
states the rule it holds.

## Checks

Each ran on this worktree at the repair, with the Preflight line's checks before the two gates and the document gate before the complete run. The document gate ran once more after the last document edit, and its row is the record of that run.

| Check | Result |
| --- | --- |
| `node scripts/docs-check.mjs` | passes; no ceiling advisory, and no new operator-word advisory for the record |
| `npm run publication:check` | `publication: no editions declared` |
| `node scripts/harness.mjs check` | `harness check: 35 generated surfaces; local-terms list: present` |
| `npm run work-orders -- index --check` | both pages current |
| `npm run plan -- check` | `advisories: []`; the one workspace update is the `authorized-execution-amendment` bound to D013 |
| `npm run terms -- check` over every changed document | `local-terms list: present`, no match |
| [The census's assertion](#the-census-equals-the-tree) | `278 paths counted, 278 listed, 0 problems` |
| `npm run test:docs` | 14 passed, 0 failed, 18,945 ms |
| `npm test -- --review` | 7 passed, 0 failed, 14,543 ms; the kit's 1,042 files verified |

`grep -c "^## " docs/repositories/dotln-angular.md` prints 7 and
`grep -c '\*\*Checked:\*\*' docs/repositories/dotln-angular.md` prints 0.
`grep -c "^[0-9]*\. \*\*" docs/workstreams/WS-001-dotln-angular.md` prints 26.

## The census equals the tree

Every path the census counts names a file that exists and Git lists, and every Markdown
path Git lists is counted once (D020). An inventory row, a backticked path with a kind
and a reason, always counts. A row under [Later reports](census.md#later-reports) counts
from the moment Git lists its file, so the next verification and the final review file
their reports without writing the census.

This asserts it from the worktree root, with the kinds, reasons and standing outcomes
criterion 2 names and the kind totals VER-001 requires. It prints a count line, then one
line for each failure, and exits 0 only when there are none.

```bash
node --input-type=module <<'EOF'
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

// The kinds the order's Design names.
const kinds = ["generated", "idea ledger", "judged order text", "kit", "record", "standing", "template-derived"];

const census = readFileSync("docs/evidence/WO-025/census.md", "utf8");
const [inventory, ...later] = census.split(/^## Later reports$/m);

// Git's NUL-separated listing leaves an unusual name unquoted.
const git = ["ls-files", "-z", "-co", "--exclude-standard", "*.md", "**/*.md"];
const listed = new Set(execFileSync("git", git, { encoding: "utf8" }).split("\0").filter(Boolean));
const isFile = (path) => statSync(path, { throwIfNoEntry: false })?.isFile() ?? false;
const problems = [];

// An inventory row is a backticked path, a kind and a reason.
const rows = [...inventory.matchAll(/^\| `([^`]+)` \| ([^|]+?) \| ([^|]*[^|\s][^|]*) \|/gm)];
for (const [, path, kind] of rows) if (!kinds.includes(kind)) problems.push(`! kind: ${path} is ${kind}`);

// A later row names this order's report, and counts once Git lists its file.
const laterRow =
  /^\| (docs\/(?:verifications\/WO-025\/VER-\d{3}|final-reviews\/WO-025\/(?:FINAL-\d{3}|PR|RELEASE-NOTES))\.md) \| record \| [^|]*[^|\s][^|]* \|$/;
const laterHeader = ["| File | Kind | Reason |", "| --- | --- | --- |"];
const laterLines = later.join("\n").split("\n").filter((line) => line.includes("|") && !laterHeader.includes(line));
if (laterLines.length === 0) problems.push("! later row: none found");
const laterPaths = [];
for (const line of laterLines) {
  const path = laterRow.exec(line)?.[1];
  if (!path || laterPaths.includes(path)) problems.push(`! later row: ${line}`);
  else laterPaths.push(path);
}

// The counted paths and Git's list are the same set, and each is a file.
const counted = new Set();
for (const path of [...rows.map((row) => row[1]), ...laterPaths.filter((path) => listed.has(path))]) {
  if (counted.has(path) || !listed.has(path) || !isFile(path)) problems.push(`< ${path}`);
  counted.add(path);
}
for (const path of listed) if (!counted.has(path)) problems.push(`> ${path}`);

// The Counts table holds exactly these lines, in this order.
const expected = [
  ...kinds.map((kind) => `| ${kind} | ${rows.filter((row) => row[2] === kind).length} |`),
  `| all | ${rows.length} |`,
];
const found = inventory.match(/^\| [a-z -]+ \| \d+ \|$/gm) ?? [];
if (found.join() !== expected.join()) problems.push(`! Counts table: the rows give ${expected.join(" ")}`);

// A standing document carries its outcome and its unresolved facts.
const standing =
  /^\| `[^`]+` \| standing \| [^|]+ \| (?:changed: [^|]*[^|\s][^|]*|unchanged(?:: [^|]*[^|\s][^|]*)?) \| [^|]*[^|\s][^|]* \|$/;
for (const [line] of inventory.matchAll(/^\| `[^`]+` \| standing \|.*$/gm))
  if (!standing.test(line)) problems.push(`! standing row: ${line}`);

console.log(`${counted.size} paths counted, ${listed.size} listed, ${problems.length} problems`);
for (const problem of problems) console.log(problem);
process.exitCode = problems.length ? 1 : 0;
EOF
```

A `>` line is a path Git lists that the census does not count: the executor adds its
row under the kind rule, or a Later reports row for this order's own report. A `<` line
is a counted path with no file, one Git does not list, or one counted twice: the
executor corrects the row. A `!` line is a kind the Design does not name, a Counts table
that differs from the rows, a row off its shape, printed whole, or no Later reports row
at all. A later row needs this order's report path, `record` and a reason; a standing
row needs `changed:` with an account or `unchanged`, then its unresolved facts or
`none`. A `>` line beside a `!` Counts line is usually a row that is there but off its
shape, so correct it and add no second row. A verifier or final reviewer records any of
these as a finding and leaves the census alone, apart from the integration below.

The script holds at this order's reviewed tree; later orders add Markdown it will
report. An integration of `main` that changes Markdown changes the rows, the Counts
table and the census's cutoff sentence in the same step. The script cannot see a later
report nobody listed until that report is filed, so a repair adds its next reports' rows
before its handoff. It judges that a kind is one the Design names, not that it is the
right one for its file.

On this candidate it printed `278 paths counted, 278 listed, 0 problems` and exited 0,
over 270 tracked and 8 untracked paths. These cases ran on 2026-10-31 in a scratch
clone of this tree, under the bounded wrapper. The probe took the script from the fence
above, so it tested these bytes, and each case printed the same under bash and zsh,
except VER-001's own command, which ran under bash.

| Case | Exit | Printed |
| --- | ---: | --- |
| This candidate | 0 | `278 paths counted, 278 listed, 0 problems` |
| `VER-002.md` filed, untracked | 0 | `279 paths counted, 279 listed, 0 problems` |
| All four later reports filed | 0 | `282 paths counted, 282 listed, 0 problems` |
| All four and every other file in a real commit of the clone | 0 | `282 paths counted, 282 listed, 0 problems` |
| An unlisted `VER-003.md` or `FINAL-002.md` filed | 1 | its `>` line |
| An unlisted `docs/stray.md` | 1 | its `>` line |
| An unlisted `docs/café.md`, untracked, staged or committed | 1 | its `>` line, by its real name |
| An unlisted name with a quote, a tab or a leading space | 1 | its `>` line, by its real name |
| An unlisted dangling symlink, untracked or committed, or a symlink to a directory | 1 | its `>` line |
| A tracked file removed, its row dropped and the Counts lowered | 1 | its `>` line |
| Untracked `VER-001.md` removed | 1 | its `<` line |
| Tracked `docs/product/purpose.md` removed, a dangling symlink, or a directory | 1 | its `<` line |
| `VER-002.md` staged, then removed | 1 | its `<` line |
| After that commit, `VER-001.md` or `FINAL-001.md` removed | 1 | its `<` line |
| A row for an ignored file or `package.json`, with the Counts raised | 1 | its `<` line |
| `PR.md` given a backticked row, filed or not | 1 | its `<` line and the `! Counts table:` line |
| The same backticked row twice | 1 | its `<` line and the `! Counts table:` line |
| The census VER-001 judged, from checkpoint 5 | 1 | its three `<` lines and `! later row: none found` |
| A later row padded, bold, backticked, indented, with no leading pipe, with no reason, with the kind `banana`, or with the path `VER-02.md` or another order's | 1 | `! later row:` and the row |
| A later row repeated, or a bad row under a second Later reports heading | 1 | `! later row:` and the row |
| The Later reports heading renamed | 1 | `! later row: none found` |
| The later table's header deleted, its rows sound | 0 | `278 paths counted, 278 listed, 0 problems` |
| `record` set to 999 or 0183, `all` to 279, the `kit` total off its shape, or a false `record` row above the true one | 1 | `! Counts table:` and what the rows give |
| A row's kind set to `banana` or `Record`, to `banana` with the Counts naming it, or to `all` with `all` set to 279 | 1 | `! kind:` and the `! Counts table:` line |
| A row's kind set to `banana` or `all`, with `record` lowered to match | 1 | its `! kind:` line |
| A row with no reason, or without its backticks | 1 | its `>` line and the `! Counts table:` line |
| A standing row's outcome replaced, its account blank, or its unresolved facts emptied | 1 | `! standing row:` and the row |
| VER-001's own command on this candidate | 0 | nothing |
| VER-001's own command with `VER-002.md` filed | 1 | `> docs/verifications/WO-025/VER-002.md` |
| VER-001's own command at that commit | 1 | four `>` lines, one for each later report |

## Relative links

Over the census's standing documents, this resolves every Markdown link that names a
repository path, and its anchor when it has one, with the document check's own
parser. It exits 1 on any failure.

```bash
node --input-type=module <<'EOF'
import { readFileSync } from "node:fs";
import { linkFailures } from "./scripts/docs-check.mjs";
const census = readFileSync("docs/evidence/WO-025/census.md", "utf8");
const docs = [...census.matchAll(/^\| `([^`]+)` \| standing \|/gm)].map((m) => m[1]);
const failures = linkFailures(process.cwd(), docs);
console.log(`${docs.length} documents, ${failures.length} unresolved`);
for (const f of failures) console.log(`${f.file}:${f.line}: ${f.href}: ${f.reason}`);
process.exitCode = failures.length ? 1 : 0;
EOF
```

It printed `26 documents, 0 unresolved`, and exited 0. The profile's own links and
`docs/launchpad-readme.md`'s are among them.

## The profile's paths

This lists the profile's path-shaped code spans that are not paths in the target at
`6268de9` or in this tree. It runs from the worktree root, with the target's clone
beside it:

```bash
comm -23 \
  <(grep -oE '`[^` ]+/[^` ]*`' docs/repositories/dotln-angular.md | tr -d '`' | sed 's:/$::' | sort -u) \
  <({ git -C ../DotLn-Angular ls-tree -r --name-only 6268de9; git -C ../DotLn-Angular ls-tree -rd --name-only 6268de9; git ls-files; git ls-tree -rd --name-only HEAD; } | sort -u)
```

Of 124 unique spans it printed these 23, and each was read and is not a repository
path at that commit: import aliases and packages, routes and a URL, upstream
repositories and their paths, a Git range, a placeholder, ignored local files, and
worked examples.

```text
.nx/cache
@angular/build
@dotln-angular/ui/menu
@ngrx/signals
/tools/catalog
<type>/<slug>
angular-architects/ngrx-toolkit@22.0.0
apps/dotln/src/environments/environment.local.ts
apps/dotln/src/environments/public-config.local.ts
apps/example/test-output/result.json
docs/control/local/harness/memory-incidents.jsonl
docs/product/04-interfaces.md
DylanBWood/DotLn-Angular
DylanBWood/DotLn@a54f8d6520ed54d05e5209455c67541562716404
DylanBWood/DotLn@c670e6288ecb221ef2416cef06f920006866bc5d
http://127.0.0.1:4200
ngrx/platform@22.0.1
node_modules/@angular/build/src/utils/normalize-cache.js
origin/main..HEAD
packages/console/README.md
packages/skeleton/src/console-loopback.ts
src/cdk
test-output/result.json
```

## The registered gate's new command

`dotln.config.json` adds the command to both selections. In a throwaway clone of the
target at `6268de9`, under the bounded wrapper, with the registered gate's own
environment prefix (D015):

```text
npm ci exit 0
clean tree exit 0
mistyped spec exit 2
apps/dotln-e2e/src/scene.spec.ts(317,7): error TS2322: Type 'string' is not assignable to type 'number'.
```

The registered clone stayed at `6268de9` with no status lines. The mistyped line was
appended to `apps/dotln-e2e/src/scene.spec.ts` in the throwaway clone only.

## Control records

Besides the lifecycle's and the amendment's own events, this order changes
`dotln.config.json` (D015), `docs/discovery/environment.json` (D016) and one control
file, removing the unused row from `docs/control/doc-baseline.json` (D016).
The diff also holds one line it did not write: `docs/control/orders/WO-015.jsonl`
gains WO-015's `OperatorOverrideRecorded` event, which the kit's `worktree start`
carried from the main checkout's pending lane (D012). This worktree holds the only
copy, so the line lands with this order.

## Follow-ups

`npm run plan -- followups --sync` minted one row for each decision that names a
follow-up. `FUP-038b001b4b40c345` (D003), `FUP-63ce6b9d99120991` (D004),
`FUP-b6399de280f00c80` (D008) and `FUP-0c52723152a08626` (D009) are settled by the
later decisions, and `FUP-3436884063e324de` (D019) by the repair (D020). Two stay
deferred, each waiting on something outside this order:
`FUP-9958a2830a81ad0c` (D014) replaces the root `README.md` with
`docs/launchpad-readme.md` once the upstream kit no longer causes merge issues with
it, and archives the old page unless the kit has moved its instruction text
elsewhere; and `FUP-f8216ece83a3e7a6` (D015) has WO-026 correct the target's
`scripts.md`, which this self order cannot write. `FUP-c9f1e0a81d3ddaba` is re-disposed to point at the
first.
