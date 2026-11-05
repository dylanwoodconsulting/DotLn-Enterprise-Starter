# WO-033 — The launchpad's documents follow the kit's contract as core's do: the dated planning documents move under `docs/planning/passes/` with a moves map and rewritten standing links, the planning README names the planning root's documents, the elections the operator decided are declared in the features file with their reasons, and the control projection is regenerated from its fold (v0.3.5)

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** machinery
**Release classification:** patch. Document moves, a moves map, one
standing page rewritten, one declared election and one regenerated
projection in this instance; no kit file, runtime or registration key
changes. Assigned at activation under the standing opt-out default.
**Cost:** moves, by `git mv`, the nineteen dated planning documents the
planning root still holds, eighteen pass documents and the critical-path
declaration
(`acceptance-by-use-2026-10-26.md`, `critical-path-2026-09-08.md`, `angular-workstream-2026-10-18.md`,
`concept-batches-and-quality-passes-2026-10-30.md`,
`criterion-9-phase-2026-11-01.md`, `entropy-reducer-2026-11-03.md`,
`latest-upstream-2026-10-19.md`, `latest-upstream-and-core-answers-2026-10-20.md`,
`latest-upstream-fixes-2026-10-21.md`, `main-rules-and-platform-items-2026-10-18.md`,
`mining-run-orders-2026-10-24.md`, `standard-pass-v0-100-0-2026-10-28.md`,
`standard-pass-v0-101-0-2026-10-28.md`, `standard-pass-v0-103-0-2026-10-30.md`,
`standard-pass-v0-105-0-2026-11-01.md`, `standard-pass-v0-93-0-2026-10-23.md`,
`standard-pass-v0-96-1-2026-10-24.md`, `standard-pass-v0-99-0-2026-10-25.md`,
`ui-planning-2026-10-21.md`) into `docs/planning/passes/`, where the
passes since 2026-11-03 already live (the two of that day, the 2026-11-04
pass and the 2026-11-05 pass); adds
`docs/control/document-moves.json` (schema 1, one entry per move naming this
order, the shape core's WO-238 wrote), which the document check reads so a
record's link to an old path still resolves; rewrites every link to a moved
document in the standing documents (README.md, `docs/README.md`,
`docs/planning/README.md`, `docs/control/README.md`, the operator record,
`docs/operator/implementation-guidance.md`, WS-001, WS-002, the repository
profile, the open orders, the sequence, `docs/product/purpose.md` and
`concept-study.md`, the directory READMEs) and in the idea ledger's Record
links, which the plan tooling reads, while every record (decisions, evidence,
verifications, final reviews, receipts, the moved passes themselves, the
entropy review pages) keeps its original bytes, with only the six
append-only decision entries authorized below; rewrites `docs/planning/README.md`
from the export's one line into the planning root's page (the sequence, the
register and the cost table, `passes/`, `refutations/`, `entropy-reviews/`,
the generated index, and where a pass's document is found); declares
`features.desktop-control` as `{ "on": false, "note": "<the operator's
direction of 2026-11-01>" }` in `dotln.config.json` and regenerates
`docs/control/FEATURES.md`, leaving every other election at its default;
and regenerates `docs/control/current.md` from the canonical fold of the
control segments through its owner, `refreshControlProjection` exported by
`scripts/resume.mjs` (the function integration and the lifecycle events
call; `status` renders the same fold read-only and prints the warning at
1070), so `npm run resume -- status` stops warning. Removes: nineteen
records from the planning root's listing beside its standing documents; the
export's one-line planning README; a projection warning on every status
read; an election the operator decided that the page showed as a default.
Wall-clock: about 2 h 0 min of executor work plus the fixed cycle; unknown
until run. Context bytes: this order, core's `docs/control/document-moves.json`
and WO-238's step 10 as the pattern, `scripts/lib/document-moves.mjs`,
`scripts/lib/document-kinds.mjs`, the kit guide §Document quality, the
planning README's reader (a planner at `plan start`), about 80 KB. Commands
added: none. Tokens: unknown until run. Steps: 9. Re-mints: none.
Refutations paid: this pass's receipt.
**Nomination provenance:** the operator's direction of 2026-11-04 (ignored
intake capture `docs/intake/notes/planning-2026-11-04.md`, SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`): the
passes core's orders made over core's own documents (WO-245, WO-249, WO-238,
WO-241 named, the list not exhaustive) are to happen here too where they
have not; the filing pass's parity table (the
[planning document](../planning/passes/standard-pass-v0-115-0-research-track-2026-11-04.md)
D7) finds WO-245's and WO-249's done, WO-238's half done (the kinds registry
and the red tags by the pass itself, the moves and the planning page here)
and WO-241's page rendered with the election undeclared; the v0.113.0
release's Read before upgrading (pass documents live under
`docs/planning/passes/`), carried by the 2026-11-03 pass as an observation
for the next launchpad pass; `npm run resume -- status`'s projection warning
observed on 2026-11-04. Planner-synthesized by the 2026-11-04 planning pass.
Opaque identifier, not a priority. Clean-room screen: no stop condition.
**Depends on:** WO-025 (closed, `Launchpad v0.3.4`: the quality pass whose
census and profile shape this order leaves as they are); the starter at
v0.115.0 or later (the moves map reader, the kinds registry and the features
file shipped by core's WO-238 and WO-241, taken by #55).

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-025",
    "relation": "satisfied-by-close",
    "reason": "the quality pass over this launchpad's standing documents, whose census and profile shape this order leaves as they are"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `scripts/lib/document-moves.mjs` and
`scripts/lib/document-kinds.mjs` (how a move resolves and how a kind is
derived); `scripts/docs-check.mjs` (the moves import at 57);
`scripts/refute-plan.mjs` (`followups --sync`; the `start` skeleton's pass
path); `scripts/lib/plan-subject.mjs` 740 to 744 (where the critical-path
declaration may live); `scripts/lib/features.mjs` and `scripts/features.mjs`
(`features -- list|render|check`); `scripts/resume.mjs` 1070 (the projection
warning); the kit guide §Planning in this instance, §Features and §Document
quality; product 07 §Operator-opened planning pass item 7 (the three kinds);
core's `docs/control/document-moves.json` and WO-238 step 10 at
`DylanBWood/DotLn@1823a9cd` as the pattern; `docs/control/documents.json`
(this pass's registry); `docs/operator/README.md` (§Harness, browser
verification, the 2026-11-01 direction the note cites).

**Objective:** a planner opening this launchpad sees in `docs/planning/`
the documents they use (the sequence, the register, the cost table, the
planning page) and the directories that hold the records (`passes/`,
`refutations/`, `entropy-reviews/`), not twenty dated accounts beside them;
a reader following an old link from a record still arrives; the features
page says the operator chose to keep desktop control off and why; and a
status read prints the state without warning about its own projection.

**Observed gap (dated 2026-11-04 at `main` `a44ca7dd`, starter v0.115.0):**
`ls docs/planning` lists nineteen dated documents, eighteen pass documents
and the critical-path declaration, beside `sequence.md`,
`README.md`, `followups.json`, `cost-table.json` and the three directories,
while the kit writes a new pass's document under `passes/` since v0.113.0
and core moved its 51 under WO-238; the dated documents are records by the
kit's kinds and nothing standing needs them in the root. `docs/planning/README.md`
is the export's one line and names the dated passes as its first item.
`docs/control/document-moves.json` does not exist, and the document check
imports its reader. `npm run resume -- status` prints `warning:
docs/control/current.md disagrees with the canonical fold of control
segments` on every read. `docs/control/FEATURES.md` shows `desktop-control`
effective false from `default`, while the operator record carries the
operator's direction of 2026-11-01 that desktop control stays off and needs
their explicit request in a session.

**Design (scope discipline):**

- **Records move; records are not rewritten.** The moves map carries the
  old and new paths so every link written before the move still resolves
  through it, as core's does; only standing documents and the ledger's
  Record links are rewritten. A digest manifest of every record taken at
  activation and compared through the map after the moves is the witness
  that no original record bytes changed. On 2026-11-05 the operator approved
  one appended path-amendment decision in each existing `decisions.md` for
  WO-008, WO-016, WO-017, WO-018, WO-023 and WO-024, preserving each complete
  original prefix. `authorized-appends.json` records their original lengths
  and exact suffix digests; WO-033-D007 records the authorization. No other
  captured record may change. Rejected: rewriting the links inside the moved
  records and the receipts (axis: a record is never rewritten); leaving the
  records where they are (axis: the kit's layout since v0.113.0, and the
  operator's ask for core's passes here).
- **The planning page says what the root holds.** The README names the
  standing documents and the record directories by what a planner does with
  each. Rejected: an index of every dated pass (axis: the generated pages
  and the ledger's headings already list them; a hand list drifts).
- **Declare only what the operator decided.** `desktop-control` carries the
  2026-11-01 direction as its note; `plan-first`, `private-destination` and
  `tinkerer-economy` stay at their defaults. Rejected: declaring all four
  (axis: an election without the operator's word is a rule nobody gave).
- **The projection is regenerated by its owner.** The kit command that
  renders `docs/control/current.md` from the fold is run, not a hand edit.
  Rejected: editing the projection (axis: a generated document changes only
  through its command).
- **Live-run surfaces at the base.** The moves reader, the kinds registry,
  the features command and the status warning: exist. The map, the page, the
  election and the quiet status: absent.

**Deliverables:** the moves and the map; the rewritten standing links and
ledger links; the planning README; the declared election and the regenerated
features page; the regenerated projection; `docs/evidence/WO-033/` with the
decisions, the before-and-after of `ls docs/planning`, the records manifest
and its comparison, the link rewrite inventory and the handoff.

**Execution plan (the executor follows these steps in order):**

1. Activation as WO-025 step 1 (a self order in its `wo-033` worktree);
   record `ls docs/planning` and `npm run plan -- documents`'s counts before
   any move in the decisions; write `docs/evidence/WO-033/records-before.json`,
   the SHA-256 of every tracked file under `docs/evidence/`,
   `docs/verifications/`, `docs/final-reviews/`, `docs/planning/refutations/`,
   `docs/planning/entropy-reviews/` and `docs/planning/passes/` and of the
   nineteen documents to be moved, by a script kept beside it. Check: the
   decisions carry the listings, and the manifest lists every such file.
2. `git mv` each of the nineteen documents into `docs/planning/passes/`;
   write `docs/control/document-moves.json` with one entry per move naming
   `WO-033`. Check: `node scripts/docs-check.mjs` resolves every old-path
   link through the map (no broken link named); `npm run plan -- subject`
   still reads the critical-path declaration at its new path.
3. Rewrite the links to moved documents in the standing documents the Cost
   names and in the idea ledger's Record links, by inventory
   (`grep -rn -E "planning/[a-z0-9-]+-2026-[0-9]{2}-[0-9]{2}\.md"` over the
   standing documents before and after, recorded in
   `docs/evidence/WO-033/links.md`); preserve original record bytes and append
   only the six decisions authorized in the Design. Bind the affected orders
   with `npm run plan -- amend-order` and their path-amendment decisions.
   Check: the grep over
   the standing documents prints nothing; `node
   docs/evidence/WO-033/compare-records.mjs` maps every path of
   `records-before.json` through `document-moves.json` and prints
   `unchanged <N>` for whole-file matches and `original bytes preserved 6;
   authorized appends 6` for the six exact appends, with no `changed` or
   `missing` line, the order's own
   `docs/evidence/WO-033/` excluded as new.
4. Rewrite `docs/planning/README.md` as the Design states. Check:
   `node scripts/docs-check.mjs` passes; the page links `sequence.md`,
   `followups.json`, `cost-table.json`, `passes/`, `refutations/`,
   `entropy-reviews/` and `../work-orders/README.md`.
5. `npm run plan -- followups --sync`; `npm run plan -- check`;
   `node scripts/lineage.mjs index`. Check: the sync reports no
   `sourceMissing` row; the plan check passes with every receipt's recorded
   hash matching its file; the lineage index regenerates without a broken
   Record link.
6. `dotln.config.json`: the `features` section with `desktop-control`
   `{ "on": false, "note": "..." }` naming the operator's direction of
   2026-11-01 and the operator record; `npm run meta`. Check: `npm run
   features -- check` passes; `docs/control/FEATURES.md` shows the election
   with source `dotln.config.json` and the note; the other three `features.*`
   rows (`tinkerer-economy`, `plan-first`, `private-destination`) read
   `default`, and the rows the budgets file sets keep
   `docs/control/budgets.json`.
7. The projection: run `refreshControlProjection(process.cwd())` from
   `scripts/resume.mjs` under the bounded wrapper (`node
   scripts/harness.mjs bounded -- node --input-type=module --eval 'import
   { refreshControlProjection } from "./scripts/resume.mjs";
   refreshControlProjection(process.cwd());'`), record the command and the
   diff of `docs/control/current.md` in the decisions. Check: `npm run
   resume -- status` prints no projection warning.
8. Write-backs: `docs/README.md` and `docs/control/README.md` where they
   describe the planning root or the projection; `docs/evidence/WO-033/decisions.md`;
   `npm run meta`; `npm run work-orders -- index`. Check: `npm run
   work-orders -- index --check` passes.
9. Handoff: `npm run format` and `npm run sync`; the independent reviews the
   executor root requires; `npm test` and `npm run test:docs` once after the
   last edit; `docs/evidence/WO-033/handoff.md`; `npm run resume --
   implementation-ready <flags>`.

**Preflight:** `node scripts/docs-check.mjs` after steps 2, 3 and 4;
`npm run plan -- check` and `npm run plan -- followups --sync` after step 5;
`npm run features -- check` after step 6; `npm run resume -- status` after
step 7; `npm run test:docs` when a document changes; each under
`node scripts/harness.mjs bounded --`; then `npm test` once
(07-execution-guide.md §Preflight before the full gate).

**Acceptance criteria (all required)**

1. `ls docs/planning` lists no dated Markdown document: only `README.md`,
   `sequence.md`, `followups.json`, `cost-table.json` and the directories
   `passes/`, `refutations/` and `entropy-reviews/`; `ls docs/planning/passes`
   lists the nineteen moved documents beside the passes already there.
2. `docs/control/document-moves.json` carries one entry per moved document,
   nineteen in all, naming `WO-033`, and `node scripts/docs-check.mjs` passes with every
   old-path link in the records resolved through it (it names no broken
   link).
3. Over the standing documents the Cost names,
   `grep -rn -E "planning/[a-z0-9-]+-2026-[0-9]{2}-[0-9]{2}\.md"` prints
   nothing, and the records keep their original bytes: `node
   docs/evidence/WO-033/compare-records.mjs` maps every path of
   `records-before.json` through `document-moves.json` and finds every
   digest equal to the file at its current path, except the six decision
   files authorized in the Design, whose complete original prefixes must
   match those digests and whose appended suffixes must match
   `authorized-appends.json`. It prints no `changed` or `missing` line, with
   the order's own `docs/evidence/WO-033/` excluded as new;
   `npm run plan -- check` also finds every refutation receipt's
   recorded hash matching its file.
4. `npm run plan -- followups --sync` reports no `sourceMissing` row and
   `npm run plan -- check` passes.
5. `docs/planning/README.md` names the sequence, the register, the cost
   table, the three record directories and the generated index with what a
   planner does with each, links each, and names no dated document;
   `node scripts/docs-check.mjs` passes on it.
6. `docs/control/FEATURES.md` shows `desktop-control` effective `false` with
   source `dotln.config.json` and a note naming the operator's direction of
   2026-11-01; the other three `features.*` rows (`tinkerer-economy`,
   `plan-first`, `private-destination`) show source `default`, and the rows
   the budgets file sets keep `docs/control/budgets.json`; `npm run features
   -- check` passes.
7. `npm run resume -- status` prints no projection warning, and
   `docs/control/current.md` equals what the owning command renders (running
   it again changes nothing).
8. `npm test` and `npm run test:docs` green; `git diff --check` clean; no new
   dependency; the hand-written floor of `CLAUDE.md`, the kit files and the
   registration's other keys unchanged.

**Evidence gate:** `docs/evidence/WO-033/decisions.md`, `links.md`, the
before-and-after listings and `handoff.md`; `npm test` and
`npm run test:docs` before `implementation-ready`.

**Write-back duty:** as listed in step 8.

**Known issues and carry-ins:**

- The critical-path declaration (`docs/planning/passes/critical-path-2026-09-08.md`)
  is among the nineteen and a dated name the kit reads at either its passes
  or its root location (`plan-subject.mjs` 743 to 744): after the move the
  executor confirms `npm run plan -- subject` still reads it (reopen: the subject
  reports the declaration absent after the move).
- The kit's own records (the entropy review pages under
  `docs/planning/entropy-reviews/`, the receipts) link the moved documents by
  their old paths; the moves map resolves them and they are not edited
  (reopen: a reader of a record cannot find a moved document from its old
  path despite the map).
- Core's WO-257 writes a provenance footer for records moved into a target;
  it does not apply to these launchpad-internal moves (reopen: core changes
  the moves contract).
- The `plan documents` census counts a read of an old path for the new one
  through the map, as core's does (reopen: a moved document is red-tagged
  after the move because its reads were counted at the old path).

**Non-goals:** rewriting any original record bytes or appending beyond the
six decision entries authorized in the Design; declaring `plan-first`,
`private-destination` or `tinkerer-economy`; the kit's templates or the
execution guide (kit files); a quality pass over the standing documents
(WO-025 did it; the 2026-11-04 pass's red tags are disposed there); the
nested `node_modules` declaration (WO-023's write-back).

**Operator-review assumptions:** the operator wants core's document layout
here (their direction of 2026-11-04 names WO-238 among the passes to
repeat); accepts that records keep their old-path links resolved by the map
rather than rewritten; and accepts the one election declared as their
2026-11-01 direction with the others left at defaults. Reopen on the
operator's word.
