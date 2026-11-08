# WO-023 implementation handoff

2026-11-07. The catalog now studies the twenty patterns of Patterns of Enterprise Application
Architecture that the order names. Sixteen run as small TypeScript models with specs and are drawn
by the new `states` family, a register of the example's objects in rows and their states in
columns. The four structural choices carry `executable: null` and `visual: null`, with their
reasons in [D011](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d011). The same change removes the `tool-v0` compatibility
reader ([D010](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d010)), writes the documents the order names, and replaces the
launchpad's nested `node_modules` declarations with `**/node_modules`
([cleanup-declaration.md](cleanup-declaration.md)).

The integrated target base is `9637f73539e387b46f65855db78f3c4b5285e561`, the target's `main`
when the worktree was fast-forwarded ([D006](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d006), corrected by
[D015](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d015)). Neither repository's `main` moved during the execution, so no
integration was needed before the gates. The independently reviewed target tree is
`d83eec7587271bdd2fb502b01e1921e1eebb46b2`; only comments changed after it
([D017](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d017)). The Preflight line ran from 22:05Z to 22:12Z. The launchpad's
document gate passed at 22:15Z, 14 of 14. The target's plain gate passed at 22:19Z after 0 h 4 min
and its review gate at 22:24Z after 0 h 5 min, on the candidate tree
`08c77326385e1652b9f68d8bcc1c66b0a5453e85` with HEAD at the base; that tree was the same before
and after both gates.

## Acceptance criteria

**Criterion 1:** unmet — later-phase duty. The criterion is the verifier's own session in the
served production build and the verifier's statement, in its own words, of what a unit of work
tracks, what an identity map prevents and when an optimistic lock is the wrong choice. The
[executor's walkthrough](walkthrough.md) took every step at 360, 768 and 1440, and three of them
at 2080 by 1460 and 3840 by 1620, with 42 screenshots (`ls docs/evidence/WO-023/walkthrough | wc
-l` prints 42), no page error and no overflow. It prepares the verifier's session and does not
stand in for it. This is neither a waiver nor a defect verdict.

**Criterion 2:** met — `npm run studies:check` exits 0 with 100 records and 0 problems. The twenty
in `libs/shared/catalog/src/studies/poeaa/` are exactly the twenty ids the order names, with no
substitution, and `tools/studies.test.mjs` pins them. Every one is `concept-study-v1` and
`checked`, with the factual and reading critics as its two reviewers, its references complete and
its text in `apps/dotln/public/i18n/studyPoeaa/en.json`; the check's comparison finds
`studies-summary.json` current. `npm run i18n:check` exits 0 with no missing keys, and the corpus
test `libs/features/tools/src/lib/studies/study-models.spec.ts` passes over all twenty models in
the Tools suite, in the Preflight and in both target gates.

**Criterion 3:** met — sixteen records carry `pseudocode.executable` `{ kind: 'typescript',
module }` naming a `*.model.ts` entry under `libs/features/tools/src/lib/studies/poeaa/`. Each
entry composes its `*.simulation.ts` and `*.presentation.ts`, with a `*.model.spec.ts` beside it
that imports the entry and drives the study's example through the record it reads. Their `states`
drawings read the same module, which `check-studies.mjs` now requires. The four the Design names,
Domain Model, Transaction Script, Template View and Page Controller, carry `executable: null` and
`visual: null`; [D011](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d011) gives each one's reason and names no other
record. `npx nx test tools` exits 0 with those specs, in the Preflight's
`nx run-many -t lint test build` (39 tasks) and in both target gates' test rows.

**Criterion 4:** met — [review.md](review.md) gives every finding of both critics its
disposition. It also lists, per study, the app file its embodiment sentence names, with the
factual critic's confirmation that it exists at the base. The
[evidence README](README.md#link-check) gives every reference and implementation address its
observed status: all 75 that the PoEAA studies cite answered 200, in a run that ended at 21:38Z
after round 1 gave Unit of Work its fourth implementation. No record cites an unreachable address
or a reference the factual critic marked unsupported. The supports that the critics and the round-1
criteria adversary found too close to the catalog's summaries were rewritten. Hibernate's
`ActionQueue` was added after the critics read the batch, and the executor read it at its tag, as
the README says.

**Criterion 5:** met — the review gate's `e2e` row (`npx nx run-many -t e2e`, which runs
`dotln-e2e`) passed, and the Preflight's run passed 172 tests. `apps/dotln-e2e/src/catalog.spec.ts`
carries the step 7 cases: PoEAA shows twenty studied; Unit of Work steps its registers under
reduced motion, and at step 2 the text equivalent names the registers and the moving token's
animation is off; Identity Map steps a miss and a hit; and the two lock studies open from the
contents. Unit of Work's study is checked against the board spec's serious/critical axe threshold
and for horizontal overflow at 360, 768 and 1440. The review gate's `visual` row passed with the
three baselines this order changed.

**Criterion 6:** met — `npx nx build dotln --configuration=production` exits 0 within the declared
budgets: the review gate's `build` row, and the fresh build inside the Preflight's
`npm run check:bundle` at 22:09Z. `check:bundle` passes, with the initial bundle at 406,523 bytes
and no lazy code in it. The `states` family loads in the lazy Tools chunk (223,213 bytes), and the
twenty records in their own lazy chunk (74,526 bytes), as the
[evidence README](README.md#chunk-sizes) records; the Preflight's build measured the same sizes.
`package.json` and the lockfile are unchanged, so the `dependencies` keys equal the base's.

**Criterion 7:** met — `docs/dev-reference/architecture/catalog.md` §Studies has the coverage row
for Patterns of Enterprise Application Architecture: twenty studied, sixteen drawn and four
structural. `grep -c "embod" docs/ai-reference/catalog-rules.md` prints 1 (the embodiment rule)
and `grep -c "Unit of Work" docs/dev-reference/architecture/events-and-state.md` prints 1. That
document's last section, §Patterns these stores carry, names twelve patterns the stores and their
data access carry, each linked to its study record. `grep -c tool-v0` prints 0 for each of the four
files the order names.

**Criterion 8:** unmet — defect class later-phase, for the verifier to record or refute.
[design/comparisons.md](design/comparisons.md) records the first pair, A the register table and B
the state machine, each rendered at about 2080 by 1460 and at 360.
[D008](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d008) names the removed candidate's two files, and `ls` prints nothing
on each. During execution the operator deferred this order's rounds to a dedicated A/B testing
pass, apart from the coding-standards passes, and asked for a follow-up that triggers there
(`FUP-02c1ebe8146fe2f1`, deferred). So no later round ran, round 1 carries no pick and no operator
word ended the rounds; those parts belong to the A/B testing pass that runs them. The register
ships until that pass decides. The executor neither amends the criterion nor asks the operator.

**Criterion 9:** met — `node scripts/target-gate.mjs WO-023 --review` passed at 22:24Z, with a
passing row for each of its eight declared commands (install, lint, typecheck, test, format, build,
e2e and visual), after the plain gate passed at 22:19Z. The candidate tree was
`08c77326385e1652b9f68d8bcc1c66b0a5453e85` before and after both, so no tracked byte changed.
`npm run test:docs` passed in this worktree at 22:15Z, 14 of 14. The Preflight line ran in full
before the first full gate, as the next section records.

**Criterion 10:** met — [cleanup-declaration.md](cleanup-declaration.md) records the probe, run
verbatim under the bounded wrapper in this worktree, exiting 0 with "cleanup declaration matches
dependencies and excludes source". It also records the config diff: only the seventeen nested
declarations and the root `node_modules` are replaced by `**/node_modules`, and the other twelve
declarations and the judge-only policy are intact. The profile's cleanup section in
`docs/repositories/dotln-angular.md` lists the effective thirteen and explains the pattern. The
round-1 and round-2 consistency reviews re-ran the probe, and it exited 0 both times.

## Review and disposition

self-review: found 44; fixed 22; recorded 22; rounds 2; unreviewed 12 lines (comments only, after round 2's reviewed tree)

Round 1 ran three fresh Claude `dotln-worker` reviewers over the whole change: the criteria
adversary found 9, the design improver 16 and the consistency reviewer 8. Fixed: 8 of the
criteria adversary's (all but criterion 8, judged above), 6 of the design improver's and all 8 of
the consistency reviewer's. Recorded without a full fix: criterion 8, and 10 design findings
deferred, two of them in part, to the next coding-standards pass over the batch
([D016](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d016), `FUP-54793e1f600d5c5d`).

Round 2 re-tasked the same three. Every fix held except three of the four comments D016 had listed
as fixed, and those were then fixed. No reviewer admitted a new finding. Their 11 observations are
recorded, with a follow-up for those that need work ([D017](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d017),
`FUP-762c13bca9cf4a31`). Round 3 did not run, because the changes after round 2 touch only
comments: 12 lines in `studies/states.ts`, `studies/poeaa/registry.presentation.ts` and
`testing/src/lib/tools-test-kits.ts`.

The six reports are `round-1-criteria.md`, `round-1-design.md`, `round-1-consistency.md` and their
`round-2-` counterparts in the order's private review lane, recorded with `npm run worker -- record`.
The record command bound them to the launchpad worktree's snapshot; round 2's target tree is the
one named above. No reviewer edited either worktree, ran a gate or launched an agent.

The criteria adversary's round-2 statement says the order cannot pass while criterion 8 is unmet.
The lifecycle's route for a criterion that no candidate can meet as written is the verifier's
defect record. Whether criterion 8 is one is the verifier's judgment; an operator word ending the
rounds would also settle it.

## Preflight, gates and evidence

In the target worktree on 2026-11-07, after the review ladder:

| Command | Started | Result |
| --- | --- | --- |
| `npx nx format:check` | 22:05Z | exit 0 |
| `npx nx run-many -t lint test build` | 22:05Z | 39 tasks succeeded in 0 h 3 min; run under the bounded wrapper with `--parallel=1` and `--skip-nx-cache`, so one task at a time stays inside its 4 GiB budget |
| `npm run lint:fixtures`, `lint:components`, `lint:hygiene`, `check:fixtures`, `studies:check`, `test:tooling` and `i18n:check` | 22:08Z | each exit 0 |
| `npm run check:bundle` | 22:09Z | exit 0 on a fresh production build, with the chunk sizes the README records |
| `npx nx e2e dotln-e2e` | 22:10Z | 172 passed, run in the gate's form `nx run-many -t e2e` under the bounded wrapper |

In the launchpad, `npm run test:docs` first ran at 22:13Z and failed on one missing anchor.
[fan-out.md](fan-out.md) quoted the three briefs inside three-backtick fences that also held
three-backtick JSON blocks, so its later sections rendered as code. The outer fences now use four
backticks, and the second run passed 14 of 14 at 22:15Z. The target gate then ran once plain and
once with `--review`. An earlier full pass of the same checks, between 21:38Z and 21:51Z before
round 2, also passed, including the visual suite with its baselines unchanged and the link check.

## Boundaries, release and attestation

The outcome matches the order except criterion 8's rounds, which the operator moved to a dedicated
A/B testing pass. No store or data access was refactored toward a pattern, and no database or API
dependency was added. `package.json` and the lockfile are unchanged. This execution made no commit,
push, pull request or publish; the draft publish, the final review's notes and the merge belong to
the later roles. The target release classification is minor, and `Target release notes: reviewed`
gives the notes to the final review. `npm run release -- prepare --local` printed "WO-023: target
order records no release; no files changed."

Executor attestation: `claude-code` version `2.1.319`, model `claude-opus-5-5`, effort `max`,
source `claude-session-readback` (`CLAUDE_EFFORT`, selected rather than effective). Workers were
Claude `dotln-worker` launches, `claude-opus-5-5` at `xhigh` by their definition with no override;
their effective effort has no readback.

Parent usage at handoff, 22:24:58Z, from the dispatch-scoped `claude-transcript-message-usage`
counter: 243,704,271 tokens. Of these, 241,844,930 were cached input the session re-read with each
turn, and 1,859,341 were other. Workers: 15 launches and 3 re-tasks, 18 uses of the cap of 40. The
harness's completion notices give 6,003,382 worker tokens, for a known subtotal of 249,707,653.
[fan-out.md](fan-out.md#accounting) holds each reading. The operator lifted the token stop for this
order and raised the cap ([D014](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d014)). The dispatch stands at 3 h 27 min of
its 8 h 0 min bound.

The session's DotLn scratch held the author and critic copies, the candidate builds and the
throwaway scripts; the host scratchpad held downloads and logs that authors wrote there. Both are
cleared before this handoff is recorded, and neither worktree holds a nested repository.
