# FINAL-001 evidence

2026-11-08. The final review's own evidence for WO-039. The subject is the target worktree's
tree `aa01296dfa364e9285fd1967283a9cee4cfa4e17` on branch `wo-039`, the tree
[VER-001](../../../verifications/WO-039/VER-001.md) verified; the review made no source change
and committed that tree as three commits. The [report](../../../final-reviews/WO-039/FINAL-001.md)
judges the eight criteria; [decisions D019](../decisions.md#wo-039-d019) records the acceptance,
the series and the dispositions.

## Identity

| Fact | Value |
| --- | --- |
| Candidate tree, through a temporary index (`GIT_INDEX_FILE=<scratch>/review-index git add -A && git write-tree`) | `aa01296dfa364e9285fd1967283a9cee4cfa4e17` |
| Target base and `origin/main` after `git fetch` | `f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3` |
| Launchpad `main` and `origin/main` after `git fetch` | `7a8dcff2909b7b2384407d1656286b0119badb97`; `worktree integrate WO-039` took in nothing |
| Draft pull request 18's head and its tree | `8968a30bdb2e1dc41a062522343f1ad41e1716ca`, tree `aa01296…` |
| Passing review gate rows at that tree | `target-gate:dc474eef-8a2d-489a-85a8-33be0687f7b5` (the executor, 18:54Z) and `target-gate:d766a76f-2e45-494d-9f8a-56a3e0bd2947` (the verifier, 19:19Z) |

## The commit series

| Commit | Tree | Subject | Probe |
| --- | --- | --- | --- |
| `cb82e00` | `e81441cd67ea91b2930a237b8c0c16196c59b44e` | fix: floor narrow state headings at two thirds and break longer names | [commit-1/](commit-1/results.json): the tools library's `tsconfig.lib.json` and `tsconfig.spec.json` compile, and `drawn-text.spec.ts`, `states-register.spec.ts` and `states.spec.ts` pass |
| `c32ebd8` | `fe5d85e4d99ea6e539a7f63642bb05c4cf7dfbe0` | refactor: move the states drawing rule into its own check | [commit-2/](commit-2/results.json): the fourteen `tools/*.test.mjs` files pass and the study check reports 100 records and 0 problems |
| `eb22279` | `aa01296dfa364e9285fd1967283a9cee4cfa4e17` | refactor: reshape the enterprise studies into the example to copy | the gated tree: the two review gate rows above |

The first commit stages the composites, their specs and the catalog document's families hunk
alone, the second the study check, the third everything else, the three new files among them.
[commit-probe.mjs](commit-probe.mjs) exports a commit with `git archive`, links the target's
installed dependencies in and runs the named checks from the export's root; each ran from the
launchpad under `node scripts/harness.mjs bounded --`, one at a time, as
`node docs/evidence/WO-039/final-001/commit-probe.mjs <target> <commit> <scratch>/commit-N docs/evidence/WO-039/final-001/commit-N <probes>`.
The logs replace the export's and the target's paths with placeholders.

## Inline reproductions at the candidate

| Claim | Command | Result |
| --- | --- | --- |
| No presentation keeps a `switch` (criterion 2) | `grep -c "switch (" libs/features/tools/src/lib/studies/poeaa/*.presentation.ts`; `grep -l "default:"` over the same | 0 for each of the sixteen; no file |
| The two loaders are one (criterion 4) | `grep -c "loadStatesStudy\|loadFlowStudy" libs/features/tools/testing/src/lib/tools-test-kits.ts`; `grep -rl loadModelStudy` over the tools specs | 0; 37 specs |
| No model spec reads the register drawing (criterion 3) | `grep -l "registerDrawing\|states-register" libs/features/tools/src/lib/studies/poeaa/*.spec.ts` | none |
| The documents and the check (criterion 7) | `grep -c symbol docs/ai-reference/catalog-rules.md`; `grep -c statesProblems tools/scripts/catalog/check-studies.mjs` | 2; 2 |
| No suppression added | `git diff HEAD` filtered for `eslint-disable`, `@ts-ignore`, `@ts-expect-error`, `@ts-nocheck` on added lines | none |
| No dependency change | `git diff HEAD --stat -- package.json package-lock.json` | nothing |
| The after audit (criterion 2) | `node docs/evidence/WO-039/shape-audit.mjs <target> <scratch>/shape-audit-review.json`, compared with `shape-audit-after.json` | equal in every field but the time: 48 files, 937 functions, 0 over four positional parameters, 1 at 70 or more counted lines (`shapeOf`, 71), 1,763 strings, 0 numbered placeholders |
| The narrow register's frames (criterion 6) | `narrow-register/service-layer-step3-base.png`, `-candidate.png` and `record-set-step4-candidate.png`, read as images | the base's Announced and Accepted cannot be read at 360; the candidate's Annou-/nced, Acce-/pted, Refu-/sed and Uncha-/nged read at a glance, nothing collides |
| The draft's state | `gh pr view 18`, one GraphQL query for reviews, comments, review threads and title events, `gh run list --commit 8968a30…` | open draft, mergeable and clean; 0 reviews, 0 comments, 0 threads; one title event by `github-actions` at 19:33:04Z adding `:recycle:`; CI run 42515589911 (`checks` 19:32:54–19:41:56, `visual` 19:32:56–19:36:53) and title run 42515589930 (19:32:54–19:33:07) all succeeded |

`npm run release -- prepare --local` reported that this target order records no release and
changed no file. `npm run plan -- followups --touching` listed the five rows D018 records, all
deferred; the four rows the 2026-11-08 pass allocated to this order are settled by D019.

## What the review read

The order, the handoff, VER-001 and its probe index, decisions D001 to D018, the evidence README,
the walkthrough, the reading critic's record, the host qualification and the draft's body; in the
target, the whole diff against `f99580f`: the sixteen presentations, simulations, entries and
specs, the builder and its spec, the test kit and its README, the twenty flow specs and the
localization spec, the chart types and the timeline composite, the register, its text helper,
fixtures and specs, the study check and the two standing documents. In the launchpad, the
publication contract, the verification-review section, the repository profile, the operator
record, the reader profiles of the four publication surfaces and the previous target orders'
publication records as evidence of the route.

## Limits

- The review reused the two passing review gate rows at the candidate tree instead of running a
  third; the completion binds the newest to the reviewed commit. A source change would have
  owed a fresh row.
- The commit probes cover the checks that read the first two commits' files; the third commit's
  tree is the gated one. No probe ran the browser.
- The six private review reports were not read; D016 and D017 carry their findings and
  dispositions, and VER-001 reproduced the claims this verdict rests on.
