# WO-027 implementation evidence

Observed on 2026-11-06 in the paired registered worktrees. The target comparison
base is `48c7f8e6916692bca833c4985e2cf95978ab2c06`; target HEAD, main and fetched
origin/main agree. The launchpad base is
`a33191ae54f68ea9d0051f2dc9f54ccd1a1069fa`. No application, library or filed
record bytes changed, and runtime dependency keys match the target base.

## Executed preflight

| Command | Result |
| --- | --- |
| `npm ci` in the target | Exit 0; installed the locked dependencies. Reported 29 existing audit findings (28 moderate, 1 high); no dependency change was made. |
| `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npx nx format:check` | Exit 0. |
| `npm run check:scripts` | Exit 0: 32 npm scripts; 17 direct module files. |
| `node --test tools/` | Exit 0: 92 tests passed, none failed or skipped. |
| `npm run i18n:check` | Exit 0; no missing keys. |
| `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npx nx run-many -t lint` | Exit 0: all 20 tasks succeeded. |
| `npm run publication:check` in the launchpad | Exit 0; no publication editions declared. |
| `npm run release -- prepare --local` | Exit 0; target order, no launchpad version or file changes. |

The document preflight passed all 14 checks before the first target gate. After
the independent review ladder, the target plain gate passed all five commands
in 0 h 2 min, and the review gate passed all eight commands in 0 h 4 min. The
review selection includes build, browser behavior, accessibility and the tracked
visual comparisons. Both target gates exited 0 and recorded no tracked-byte or
HEAD mutation. The [handoff](handoff.md) binds these results to the criteria.

## Script-reference controls

`tools/check-script-reference.test.mjs` copies the candidate's `package.json`,
`tools/scripts/` and `docs/dev-reference/workspace/scripts.md` to isolated scratch
storage, runs the actual CLI there and removes each copy. The tooling run reports:

- `script reference passes on an unmodified candidate copy`: pass, with
  `PASS script reference: 32 npm scripts; 17 files`.
- `expected failure: removing the npm run boards row fails even when prose still names it`:
  pass; the child refuses with `Undocumented scripts: npm run boards`. A fenced
  example row cannot stand in for the removed table row either.
- `expected failure: adding a row for npm run removed:check fails`: pass; the child
  refuses with `Stale script rows: npm run removed:check`.
- Missing direct-module coverage and a row for a removed module: both refused.

The unchanged coverage boundary is npm scripts and `.mjs` files directly under
`tools/scripts/`, not nested script directories or all `tools/*.mjs` files.

## Board count and occurrence census

The session scratch `controls.mjs` ran from the launchpad under
`node scripts/harness.mjs bounded -- node <session-scratch>/controls.mjs`.
It copied all candidate nonignored files into each of three temporary Git trees,
registered those files, linked the installed dependencies, and ran each copy's
actual `node tools/board-count.mjs`. It removed all three scratch repositories.

| Tree | Count | Observation |
| --- | ---: | --- |
| Candidate and unmodified candidate copy | 1 | `tools/pr-title.mjs:56`, the existing fork-token title-edit limitation. |
| Copy with `// BOARDED: probe` appended to `tools/pr-title.mjs` and `# BOARDED: probe` appended to `.github/workflows/ci.yml` | 3 | Exactly two more than the candidate. |
| Separate copy with `const inert = 'BOARDED: not a marker';` appended to `tools/pr-title.mjs` | 1 | The string adds no marker. |

Read every `git grep -n 'BOARDED:'` hit and the newly added test file's hits:

| File and occurrences | Classification | Count |
| --- | --- | ---: |
| `tools/pr-title.mjs:56` | Leading JavaScript comment; boards the already-recorded fork-title limitation, FUP-223cde718a523e67. | 1 |
| `tools/board-count.mjs` (marker regular expression) | Scanner regular-expression literal, not a comment. | 0 |
| `tools/board-count.test.mjs` lines 15–20, 27, 33, 37, 43, 45, 48, 50, 57, 63, 72, 74, 76, 78–79, 94–99, 102 and the later regression cases | Quoted fixture source, including multiline examples represented with escaped newlines. | 0 |
| `docs/ai-reference/component-rules.md:12` | Markdown guidance; outside the scan. | 0 |
| `docs/dev-reference/workspace/conventions.md:245,249` | Markdown guidance; outside the scan. | 0 |
| `docs/dev-reference/workspace/scripts.md:78` | Markdown command table; outside the scan. | 0 |
| `docs/dotln/evidence/WO-026/decisions.md:323` | Historical quoted alternative; outside the scan and unchanged. | 0 |

The permanent tests exercise all eight extensions, one marker per line, inline
and string exclusions, multiline templates, Sass strings, HTML attributes, YAML
quoted and block scalars, tracked scope, symlinks, documentation and dependency
exclusions. The helper reports nonzero counts without treating them as failure.

## Document and title checks

The scratch controls verify the eight plain/review commands appear exactly once
in sub-app rules, no duplicated lint subcommand remains there, all seven catalog
Markdown links and their anchors resolve, and no bare launchpad pointer or design
round date remains. The target's four feature entry points expose routes only;
Tools does so through its route-only `public_api.ts`.

The installed Angular build source confirms the common-Git-directory cache
resolution and the prebundling dependency documented in conventions rule 2.
The scene paragraph distinguishes a structural signal-write bound from measured
frame time and names when sampling should be added.

The tooling output includes passing cases for all supported shortcode and emoji
prefixes with untyped subjects, conventional-title decoration, bare-subject
refusal and a workflow no-op for an already valid untyped title. Live GitHub
workflow observation follows the independent verification and draft publication.

The first scratch run completed the board and dependency controls but stopped on
an unimplemented cross-document-anchor check. The checker was completed, and the
second run passed every control, including `../README.md#checks`. No target fix
or changed expectation was needed for that scratch harness correction.

## Review ladder

Round 1 used three fresh read-only codex-spawn-agent reviewers, each
`gpt-6.1-sol` at max. Criteria found three parser defects, consistency found one
moved-record pointer, and design found zero issues. All four were fixed under
[WO-027-D006](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d006-resolve-the-first-independent-review).
The parent reproduced each parser failure with a single bounded test before
the fix, and all three tests pass afterward. The permanent tooling suite now
contains 92 tests. The two reviewers with fixes rechecked their findings only.

The helper retains each report in the prescribed local reviews lane. Its
wrapper's Claude host/model defaults are not actual worker readback; the report
text and this account name the actual native Codex workers (WO-027-D007).

Round 2 resolved all four original findings. It found two parser regressions in
the repair delta: YAML adjacent quoted flow-map values and HTML custom-element
names matching a raw-text prefix. Both were reproduced and fixed, with permanent
location assertions (WO-027-D008). Round 3's final combined review confirmed both
fixes and found no new admissible findings. Manual worker accounting includes the three initial launches, two
rechecks, two evidence-coordination messages and that combined launch: eight
uses out of twenty, with no descendants.

The first document preflight rejected the eight new decision dispatch fields
because they omitted the required control prefix. The unfiled records were
corrected to name the actual `resume: next` dispatch and the index regenerated.
This metadata-only correction changes no decision or implementation. No further
review worker runs for that correction; the skill skips documentation-only
repair review.

## VER-001 repair — repository identity and record lookup

Observed on 2026-11-06 under `resume: fix`. The earlier evidence above describes
the implementation candidate that VER-001 judged. Its repository-name claim was
wrong: the local folder name had been mistaken for the GitHub repository.
[WO-027-D011](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d011-correct-repository-identity-and-make-record-links-traceable)
records the same-day correction to D003. Only the two named target documents
change in this repair; all tool code, tests and dependency files retain the
verified candidate's bytes.

The repaired rule is that a repository reference comes from the repository's
declared identity and resolves with its cited path, never from a local folder
name. The catalog now names `dylanwoodconsulting/DotLn-Enterprise-Starter` and
links its design directory at the observed launchpad base
`a33191ae54f68ea9d0051f2dc9f54ccd1a1069fa`. The developer-reference row names
the same repository and tells readers to use the `FinalReviewCompleted` event's
`checkpointSha` in `docs/control/orders/WO-NNN.jsonl`, resolving links from the
records' original `docs/` locations. It identifies that checkpoint as local,
with no promise that GitHub hosts it.

| Read or control | Observed result |
| --- | --- |
| `git remote get-url origin` in the launchpad | Names `https://github.com/dylanwoodconsulting/DotLn-Enterprise-Starter.git`. |
| GitHub connector `get_repo`, then `gh repo view dylanwoodconsulting/DotLn-Enterprise-Starter --json nameWithOwner,visibility,isFork` | Both resolve the same public repository; the CLI reports `isFork: true`. |
| `gh api 'repos/dylanwoodconsulting/DotLn-Enterprise-Starter/contents/docs/evidence/WO-022/design?ref=main' --jq '.[].name'`, repeated at the pinned commit | Exit 0 for both; `comparisons.md`, `rejected-implementations.md` and rounds 01–08 exist. The connector's independent directory read agrees. |
| `git grep -n 'DotLn-Instance' -- docs/dev-reference` in the target | Exit 1 with no output: neither wrong name remains. |
| Session-scratch `check-repair.mjs` under `node scripts/harness.mjs bounded -- node …/check-repair.mjs` | Exit 0. Both documents use the origin identity; the lookup fields are present; all seven existing catalog Markdown paths and anchors resolve; the eighth link is the verified pinned public directory. |

The additional case, beyond the two quoted failures, follows WO-026's filed
final review. Its control segment's `FinalReviewCompleted.checkpointSha` is
`12a2c75f1578c50b360738b349931823b6d86ad9`. `git show` at that checkpoint
reproduces `docs/dotln/final-reviews/WO-026/FINAL-001.md` byte for byte from its
original `docs/final-reviews/WO-026/FINAL-001.md` location. `git cat-file -e`
confirms its `../../evidence/WO-026/preview-pr.json` destination there. GitHub's
contents endpoint resolves the control segment and retained preview record on
`main`, but returns HTTP 404 for that checkpoint commit. This is why the row
distinguishes local checkpoint recovery from public repository browsing.

These are read-only local and GitHub checks. No record was rewritten and no
checkpoint was published. The scratch check creates no repository or server.

The repair followed VER-001's prescribed final-round entry for this bounded
delta: one combined round-3 reviewer, a read-only `codex-spawn-agent` supplied
`gpt-6.1-sol` at `max`, found zero blocking or nonblocking findings. Its report
is retained at `docs/control/local/reviews/WO-027/repair-1/round-3-combined.md`.
The worker independently resolved the repository and pinned directory, matched
the WO-026 checkpoint's report and preview link, traced checkpoint creation and
record filing, and checked the decision/index consumers. It ran no test or gate.
The recorder's wrapper limitation described in D007 still applies; the actual
worker type and pin are those stated here. Manual use is one of twenty, with
no descendants or re-tasks. Rounds 1 and 2 were skipped under the report's repair
rule. The complete target gates follow the finished review.

The first repair plain gate passed install, lint, types and unit tests, then
failed format. Its focused reproduction named only
`docs/dev-reference/README.md`: the longer records row needed new table-column
padding. The installed Prettier formatter corrected that file, and the repeated
`npx nx format:check` passed. The wording reviewed above is unchanged. D012
records the formatting-only exception to another review round; no worker runs
again for this correction. Fresh complete target selections, rather than the
focused check, support the final gate claims below.

At final target tree `0dd65acc3de303551c7e52a45d53f8b47d97aaff`, the replacement
plain selection passed install, lint, typecheck, test and format in 0 h 1 min.
The review selection passed those five plus build, e2e and visual in 0 h 2 min,
recording `target-gate:cd6d0120-cc3b-4dd5-a5a4-e25e6f86e07f` at
2026-11-06T16:36:27.484Z. Each command executed with exit 0 and the runner found
no candidate-byte or HEAD mutation. Nx may reuse its unchanged task outputs;
the repair changes documentation only. The final launchpad document gate runs
after the repair handoff, and its outcome is recorded there.

The final `npm run test:docs` passed 14 fresh checks with zero failures in
0 h 1 min, recorded at 2026-11-06T16:40:29.044Z. It removed all 35 gate-created
temporary roots, with none retained and no cleanup blocker. Its passing row
excludes this order’s evidence directory from the standing document identity;
only the final evidence and handoff judgments changed afterwards.
