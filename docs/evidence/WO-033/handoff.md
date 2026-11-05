# WO-033 implementation handoff — 2026-11-05

The nineteen dated planning documents now live under `docs/planning/passes/`.
The move map preserves kit resolution of historical references; standing
navigation and the ledger point to current paths. The planning page explains
its inputs and record directories. Desktop control is explicitly disabled for
the operator's recorded reason, and the control projection is generated from
its owner. The classified application target is v0.3.5.

The operator-approved exception in WO-033-D007 appends exactly one path-only
decision to each of six older decision files. All 1,923 original byte sequences
are preserved: 1,917 whole files are unchanged, and six original prefixes are
unchanged with their exact approved suffixes. The six incorrect intermediate
amendment bindings were withdrawn; their events remain intact.

## Acceptance

**Criterion 1:** met — [listings.md](listings.md) records the before/after directories; the final bounded candidate check confirms exactly the four standing root files and three directories, with all nineteen mapped destinations present and all old paths absent.

**Criterion 2:** met — [document-moves.json](../../control/document-moves.json) contains nineteen schema-1 moves naming WO-033. The final bounded `node scripts/docs-check.mjs` passes with zero failures and 45 declared historical link occurrences.

**Criterion 3:** met — [links.md](links.md) records the literal required regex over 44 standing documents plus the ledger: 48 baseline lines, zero current matches. [compare-records.mjs](compare-records.mjs) reports `unchanged 1917` and `original bytes preserved 6; authorized appends 6`, with no changed or missing file. All 1,923 baseline hashes independently match their Git blobs. The canonical plan check validates every receipt and the seven authorized amendments.

**Criterion 4:** met — `npm run plan -- followups --sync` passes with all 45 pending sources present. The entire 204-row register is unchanged; three already-closed historical rows retain their pre-existing missing sources, and none is introduced by the moves. `npm run plan -- check` passes for 21 receipts and 20 passes, including after the WS-001 correction.

**Criterion 5:** met — [the planning page](../../planning/README.md) names and links the sequence, register, cost table, three record directories and generated work-order index by reader task, without dated filenames. Its critical-path note locates the historical declaration. The final document preflight passes.

**Criterion 6:** met — `npm run features -- check` passes. [FEATURES.md](../../control/FEATURES.md) shows desktop control false from `dotln.config.json`, with the operator's 2026-11-01 direction; the other three feature sources remain default and budget sources remain `docs/control/budgets.json`. The final candidate check confirms no other configuration change.

**Criterion 7:** met — the bounded `refreshControlProjection` call regenerates the page; a second render is byte-identical and `npm run resume -- status` prints no projection warning. D006 records the command and D009 records the zero-context [projection diff](projection.diff).

**Criterion 8:** met — the complete `npm test -- --review` gate passed all seven required suites; `npm run test:docs` passed all fourteen required suites; full-candidate `git diff --check` passed. Both gates have zero failures and no unrun suite. The kit's 1,103 files, dependencies, lockfile, hand-written floor and unrelated registration keys are unchanged.

## Validation and review

The complete review gate ran once, from 2026-11-05T18:05:17.458Z to
2026-11-05T18:05:39.748Z, with seven fresh suites, zero failures, zero unrun
suites, and unchanged code and build identities. Its tree is
`07b4d277c0c02723f5b68424b7d86afa8a6aaa88`; its code identity is
`2651683b2d2bc56af8eba84252a15f72fbb24b15363250953a7fde28f4ba0ebc`.
The required suites were kit verification, format, configuration root,
registrations, declarations, generated outputs and host. Cleanup removed all
33 temporary roots, with none retained or blocked.

The document gate ran from 2026-11-05T18:06:04.724Z to
2026-11-05T18:06:41.670Z and passed all fourteen fresh suites with zero failures
or unrun suites. Its candidate tree is
`ed7b439b96a8475723d6fe277aa0bb55638e0d85`, with the same code identity as the
complete gate. It also binds document tree
`508f2748d573998cfeb96b18f1fc615106a4b532`, excluding only
`docs/evidence/WO-033`; this result update stays inside that permitted
post-pass evidence area. Cleanup removed all 35 temporary roots with no
retained root or blocker. The five historical operator-word advisories remain
advisory; no new one is introduced by this order.

`npm run format` and `npm run sync` passed before the gate; sync reported all
generated surfaces current. Main had no commits ahead of this worktree's HEAD.
The adjacent-work queue has no remaining item. No branch commit, push, PR or
publication was performed by this executor.

self-review: found 19; fixed 13; recorded 6; rounds 1; unreviewed 416 lines (documentation and generated output since round 1, including this executor-owned post-pass handoff; no source changes; round 2 skipped under the executor rule).

The counts include repeated findings from the three reports. All dispositions
and report paths are in [review-resolution.md](review-resolution.md). Workers
were three independent Claude print reviews, Opus 5.5 at selected xhigh;
effective effort was not observable. Three of twenty worker uses were used,
with no descendants or rechecks. No reviewer ran after the complete gate.
This handoff is an executor-owned post-pass write-back.

## Limits and continuation

Core WO-238 used the same map design but retained receipt-bound work-order
links. These six decision appends are specific to this instance's requirement
to update open-order links. Historical Markdown links in GitHub or an editor
can still fail; the map resolves them inside the kit's readers. The register
keeps stored historical references. This limit was explicitly accepted by the
order, not repaired by rewriting records.

`plan subject` reads HEAD. Its successful CLI result is supplemented by the
workspace `buildPlanSubject` check that finds the moved declaration and
WO-008's foundation role. A post-commit CLI check belongs to the later phase;
this executor cannot commit. A hypothetical projection warning after a future
main-branch lifecycle event remains unproven; reopen if reproduced.

The outcome matches the authorized goal: current navigation and explicit
configuration, with original records preserved. There is no remaining
implementation repair or pending required gate. Verification and final review
remain separate dispatches; the next operator phase is `resume: verify`.

Executor attestation: `codex-cli` 0.166.0; model `gpt-6-astra`; effort `max`;
source `codex-session-readback`. The root was the only writable agent in this
worktree. Usage is read through `harness usage` from the Codex transcript
counter, dispatch scope; the pre-handoff readback cutoff is
2026-11-05T18:05:41.741Z and reports the dispatch within its 8 h 0 min and
three-complete-run bounds. Final numeric counters stay in ignored observations
and the operator response; monetary cost is unavailable. The retained
`meta.json` is a preflight snapshot at its own stated cutoff, not final usage.
