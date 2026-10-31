# WO-025 — A quality pass over every standing document of this launchpad under the kit's `quality pass:` procedure, with the repository profile rewritten to the shape the operator chose (v0.3.4)

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** machinery
**Release classification:** patch. Documents of this instance, its discovery
record, one document-baseline row and the `dotln-angular` registered gate change;
no kit file or grant changes.
**Cost:** rewrites `docs/repositories/dotln-angular.md` to the shape of the
proposed profile kept in ignored intake; edits, where the pass finds a
defect of usefulness, currency, coherence or organization, the other
standing documents of the census (the operator record and its
implementation guidance, WS-001, the product purpose and the concept-study
direction, the hand-written floor of `CLAUDE.md`, `AI-HARNESS-SECURITY.md`,
the environment truth, the directory READMEs); adds
`docs/evidence/WO-025/census.md`. Removes nothing tracked. Wall-clock: about
4 to 8 hours of executor work plus the fixed cycle (activation,
verification, final review, release close); unknown until run. Context
bytes: the census (about 24 files, 240 KB, of which the profile, WS-001 and
the operator record are 95 KB), product 07 §Operator-opened planning pass
item 7 and the generated role's `quality pass:` paragraph, the proposed
profile (28 KB), this order, about 300 KB for the executor. Commands added:
none. Tokens: unknown until run. Steps: 10. Re-mints: none; no registered
evidence source, feedback source or machinery suite source is edited, so
`npm test` is the product gate. Refutations paid: the 2026-10-30 second
pass's receipt.
**Nomination provenance:** the operator's direction of 2026-10-30 (ignored
intake capture `docs/intake/notes/planning-2026-10-30-second-messages.md`,
SHA-256 `39b30d94667c52a26d7d6efba61bb6e2f1b55d602831f3f778525953b0765468`,
messages 2 and 3): one order, or two, whose only job is to run the new
`quality pass:` behaviour over every public mutable document in the instance
and in DotLn-Angular; and the operator's preference for the profile that
core's WO-235 restart proposed over the current one, updated for what has
merged since. Starter v0.103.0 (core WO-235) put the `quality pass:`
procedure in every generated role and product 07 item 7 named the three
kinds of committed document. Planner-synthesized by the 2026-10-30 second
planning pass ([planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md)
§Orders filed and amended, D8). Opaque identifier, not a priority.
**Depends on:** nothing typed. The order runs on this launchpad's `main` at
activation; a starter update that lands between filing and activation
changes nothing in its census rule.
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/product/07-execution-guide.md`
§Operator-opened planning pass (item 7, the three kinds of committed
document) and the generated planner role's `quality pass:` paragraph
(`.claude/skills/dotln-planner/SKILL.md`, the same text in every role);
`docs/operator/README.md` (§What the operator does not want: narrative in
the record, direct quotes, event history appended to a standing document;
§When this record changes); `docs/workstreams/WS-001-dotln-angular.md`
(§House rules, every rule by number); `docs/repositories/dotln-angular.md`;
`docs/product/purpose.md` and `docs/product/concept-study.md` with
`docs/control/doc-ceilings.json`; `KIT-MANIFEST.json` (the kit files the
census excludes); the proposed profile at
`docs/intake/notes/dotln-angular.proposed-wo235-restart-2026-10-30.md`
(SHA-256 `0986e1d54a2fb3dabec0c045eb07f17687b20f841b88d9b90048b4c9bbbbf674`,
a copy of core's WO-235 restart's `dotln-angular.proposed.md`, read-only).

**Objective:** (the operator's session, WS-001 rule 24, with the documents as
the surface) the operator opens `docs/repositories/dotln-angular.md` and
reads, in the shape they chose, a table of facts first (class, base branch,
application, evidence root, the workstream, the last reviewed source and the
latest release), then what the repository is for, how to run the app and its
checks with the registered gate as a table, where to find the implementation
of each house role, how a change is published and a release closed, the
versions and provenance as tables, and history only where it explains a
boundary or a recovery route, every fact current to WO-015's merge and
`DotLn Angular v0.6.0`, every link relative and resolving. They open the
operator record and find every standing direction they gave, each as the
rule with its date and capture, none lost, none narrated, in an order they
can scan. They open WS-001 and find the house rules under their numbers,
the dependency plan saying what is so today, the sub-app section without a
diary. They open the purpose and the concept-study direction and read
sentences that are true of the app as it is. They open the environment
truth, the harness-security note and the directory READMEs and find each
says what a reader needs and nothing that is stale. They open the launchpad's
own README at `docs/launchpad-readme.md` and read, in the same table-first shape,
what this repository is, how to run it, where everything is and how a change
lands. What the operator learns
is that every document a session reads at start says what is so; what they
decide is whether the record of their directions is complete.

**Observed gap (dated 2026-10-30):** at `0c6de07` the launchpad's tracked
Markdown falls into kit files (37, manifest-listed), records (planning
documents, refutation receipts, order records; immutable), judged order
texts (bound by the plan gate), generated pages (the indexes and the current
page), the idea ledger, and 24 standing documents. Of the standing
documents, the profile was cut to its current state on 2026-10-30 but keeps
the paragraph-per-topic form the operator found less useful than the
table-led, task-named shape core's WO-235 restart proposed on 2026-10-30
(which itself names `DotLn Angular v0.4.0` and the root at `/board`, both
stale); the profile's `Checked:` line, the WS-001 member table and road table
and the operator record were updated by passes, not read as wholes since
2026-10-30; `README.md` is a template-derived carrier the starter's updates
rewrite through Git merges (core WO-207's row), and `CLAUDE.md`'s generated
block is the harness's; no pass has run the `quality pass:` procedure over a
document since starter v0.103.0 carried it.

**Design:**

- **The census** (`docs/evidence/WO-025/census.md`, written first): every
  tracked Markdown file (`git ls-files '*.md' '**/*.md'`) with its kind under
  product 07 item 7 and the reason: kit (listed in `KIT-MANIFEST.json`;
  excluded, core's text); record (dated planning documents, refutation
  receipts, everything under `docs/evidence/`, `docs/verifications/`,
  `docs/final-reviews/`, `docs/decisions/0*`; excluded, immutable); judged
  order text (`docs/work-orders/WO-*.md`; excluded, bound by the plan gate
  and amended only through `amend-order`); generated
  (`docs/work-orders/README.md`, `HISTORY.md`, `docs/lineage/README.md`,
  `docs/lineage/decisions-index.md`, `docs/control/current.md`; excluded,
  regenerated by their commands); the idea ledger (append-only
  registration; excluded); template-derived (`README.md`, rewritten by the
  starter's updates through Git merges; excluded with the reason, since an
  instance edit would fork it from the updates until core's WO-207 lands);
  and standing, the pass's subject: `docs/repositories/dotln-angular.md`,
  `docs/workstreams/WS-001-dotln-angular.md`, `docs/operator/README.md`,
  `docs/operator/implementation-guidance.md`, `docs/product/purpose.md`,
  `docs/product/concept-study.md`, `docs/product/README.md`,
  `docs/planning/sequence.md`, `docs/discovery/environment.md`,
  `AI-HARNESS-SECURITY.md`, `docs/launchpad-readme.md`, the hand-written floor of
  `CLAUDE.md` (above its
  generated block; `AGENTS.md` is its symlink), and the directory READMEs
  under `docs/` (`docs/README.md`, `control`, `decisions`, `discovery`,
  `observations`, `planning`, `publication`, `releases`, `repositories`,
  `workstreams`, `evidence` and the other record-root READMEs). The census
  is checked against the tree at activation and corrected there if a file
  has appeared or moved.
- **The procedure**, per document, in the census's order: the executor runs
  the `quality pass:` procedure the role text defines (read the document's
  contract and the factual sources it rests on; improve usefulness,
  currency, coherence and organization; integrate accumulated additions into
  their paragraphs; preserve useful information and established structure;
  leave sound passages unchanged; check every factual change against its
  source and every link; run the checks appropriate to the document; record
  what changed or needed no change and any unresolved fact), and records the
  result in the census row (changed with a one-line account, or unchanged,
  and the unresolved facts). The order is the authority for the edits; the
  phrase names the procedure, not a dispatch.
- **The profile** is rewritten to the shape of the proposed draft: the table
  of facts first; then §What this repository is for, §Run the app and its
  checks (with the registered gate as a table), §Find the implementation (a
  table per area, the house roles demonstrated), §Publish a change, §Close a
  release and handle local files, §Versions, provenance and recovery context
  (tables), §Upstream and copied-contract references; every fact read from
  the target at `6268de9` and the launchpad at activation (the root at
  `/scene`, the sixteen tools, `DotLn Angular v0.6.0`, the scene engine and
  data-access libraries, the catalog as WO-019 left it, the draft-at-verified
  route, the sixth refusal), every link relative within this repository or
  to the target, the `Checked:` field dropped in favour of the table's last
  reviewed source (the kit reads no `Checked:` field; core's WO-238 drops it
  from the template), the kit's workstream parser untouched (it reads only
  WS-001's JSON block), and history kept only where the draft keeps it: a
  boundary or a recovery route, each with its record linked.
- **The operator record**: every standing direction keeps its rule, its date
  and its capture digest; a rule may move to a better section or be reworded
  for clarity, never changed in substance; no sentence narrates a day,
  characterizes the operator or quotes them; a direction the record carries
  twice is merged with both captures kept. The pass's own change log is the
  census, not the record.
- **WS-001**: the house rules keep their numbers (orders cite them); the
  `dotln-workstream` JSON block is not edited (the kit reads it); the member
  table, the dependency plan, the sub-app section and the delivery states
  are read as wholes and brought to what is so, with the dated accounts
  moved to the records that hold them, where a pass has not already done it.
- **The product documents** (`purpose.md`, `concept-study.md`): edited for
  currency and coherence only; `npm run publication:check` and
  `node scripts/docs-check.mjs` run after; a ceiling the edit exceeds is
  recorded as the check's advisory in the census and never answered by
  trimming (ceilings are planning's; the next pass re-sets them).
- **The floor and the security note**: the hand-written floor of `CLAUDE.md`
  keeps its locked Clean Room paragraph verbatim and its Secrets paragraph's
  rules; `node scripts/harness.mjs check` confirms the generated block is
  untouched. `AI-HARNESS-SECURITY.md` is read against the settings actually
  loaded (the README's first-steps rule) and says what is so.
- **The README** (amended on the operator's direction of 2026-10-30,
  WO-025-D013): the root `README.md` stays the starter's text, changed only by
  the release claim line `release prepare` writes, because the starter's updates
  rewrite it through Git merges and a fixed page there would conflict on them.
  The launchpad's own fixed page is `docs/launchpad-readme.md`, a standing
  document in the profile's shape, until the upstream kit no longer causes merge
  issues with the root page.
- **The gaps the pass finds** (the same amendment): the pass closes what it can
  instead of listing it. `typecheck:e2e` joins the `dotln-angular` registered
  gate, `docs/discovery/environment.json` is refreshed for the installed
  harnesses, the unused link row leaves `docs/control/doc-baseline.json`, and
  standing directions no pass recorded enter the operator record with their
  dates and captures.
- **Checks**: `npm run test:docs`, `node scripts/docs-check.mjs`,
  `npm run publication:check`, `node scripts/harness.mjs check`,
  `npm run work-orders -- index --check` (the sequence and WS-001's block
  unchanged), `npm run plan -- check` (no judged order text changed) and
  `npm test` as the product gate; a relative-link check over the census's
  standing documents (every `](…)` target that is a repository path exists),
  run ad hoc and recorded in the census, or committed as a helper only if the
  executor judges it earns its place.

Rejected: one order for both repositories (axis: an order names one
repository, one gate and one release policy, so the target's documents are
WO-026's); rewriting README.md (axis: it is the starter's text carried
through Git merges, and an instance edit forks it from every later update
until WO-207); editing the operator record's rules for tone or brevity (axis:
each rule is the operator's direction with its date and capture; the pass may
move and clarify, never change substance); a byte or size target for any
document (axis: usefulness is the test, and ceilings are planning's).

**Deliverables:** the rewritten profile; the standing documents of the census
each passed and recorded; `docs/evidence/WO-025/census.md` with every tracked
Markdown file's kind and every standing document's outcome; `docs/evidence/WO-025/README.md`
with the checks run and the link-check record.

**Execution plan:**

1. Base guard and activation as WO-003 step 1, for WO-025, on this
   launchpad's `main`; record in the decisions file the procedure's source
   (the role text's `quality pass:` paragraph at the activation's starter
   version) and that the order's authority covers the edits.
2. The census: `git ls-files '*.md' '**/*.md'` classified against
   `KIT-MANIFEST.json` and the kind rule, written to
   `docs/evidence/WO-025/census.md` with one row per file. Check:
   `grep -c "| standing |" docs/evidence/WO-025/census.md` is at least 20.
3. The profile rewritten to the proposed shape from the draft in ignored
   intake and the target at `6268de9` (read-only), every link relative.
   Check: the seven section headings of the Design are present
   (`grep -c "^## " docs/repositories/dotln-angular.md` prints 7) and no
   `**Checked:**` line remains.
4. The operator record passed. Check: the set of `(date, capture digest)`
   pairs cited in the record is unchanged (a script lists `20\d\d-\d\d-\d\d`
   and `[0-9a-f]{8}…` tokens before and after and diffs them; recorded in the
   census).
5. WS-001 passed. Check: `grep -c "^[0-9]*\. \*\*" docs/workstreams/WS-001-dotln-angular.md`
   prints 26 and the `dotln-workstream` JSON block is byte-identical to the
   base's (`git diff --stat` on the block's lines prints nothing).
6. The product documents, the floor, the security note, the environment
   truth, the sequence and the directory READMEs passed, and
   `docs/launchpad-readme.md` written. Check:
   `node scripts/docs-check.mjs` and `npm run publication:check` exit 0, any
   ceiling advisory recorded in the census; `node scripts/harness.mjs check`
   exits 0.
7. The relative-link check over the census's standing documents, recorded in
   the evidence README. Check: the README lists every unresolved link, with
   none left unresolved in a standing document.
8. `npm run work-orders -- index --check` and `npm run plan -- check`. Check:
   both report current with no advisory from this order.
9. `npm test` and `npm run test:docs`. Check: both exit 0.
10. The publish, review and records steps as WO-012 steps 8 to 10, with the
    branch `docs/quality-pass-launchpad-documents`, the title `:memo: Pass
    the launchpad's standing documents for usefulness and currency`,
    `docs/evidence/WO-025/` and `docs/final-reviews/WO-025/`.

**Preflight:** `node scripts/docs-check.mjs`, `npm run publication:check`,
`node scripts/harness.mjs check`, `npm run work-orders -- index --check`,
`npm run plan -- check`, `npm run test:docs`; then `npm test` once.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24, the documents as the surface; no screenshots).**
   The verifier performs the Objective's session on the committed tree: open
   the profile and find, from its table and sections alone, how to run the
   app, which command runs the review gate, where a Container and a Wrapper
   are demonstrated, and how a change is published; open the operator record
   and find the directions on dictation, holds, design comparisons and the
   closed-journal window with their dates; open WS-001 and find rules 23 to
   26 under their numbers and the dependency plan's current chain. The VER
   report carries a `## Walkthrough` section with the dated steps and states
   in the verifier's own words what each opened document told them and what
   they could not find. Met only when every step completed and that
   statement is present.
2. `docs/evidence/WO-025/census.md` lists every file `git ls-files '*.md'
   '**/*.md'` prints at the reviewed tree, each with one of the kinds the
   Design names and its reason, and every standing document with `changed`
   (and a one-line account) or `unchanged` and its unresolved facts (or
   `none`); a script in the evidence README asserts the file list equals the
   census's rows.
3. `docs/repositories/dotln-angular.md` opens with a table whose rows name
   the repository class, base branch, application, evidence root, the
   workstream, the last reviewed target source and the latest target release
   (`DotLn Angular v0.6.0` or later), carries exactly seven `## ` headings in
   the Design's order, has no `**Checked:**` line, and every `](…)` link in it
   that names a repository path resolves (the evidence README records the
   check with zero unresolved).
4. `docs/operator/README.md`: the multiset of capture digests cited (every
   `[0-9a-f]{8}…` or 64-hex token) and the multiset of dates cited before and
   after the pass are equal apart from the directions the pass records on the
   operator's direction of 2026-10-30, each listed in the census (the census
   records both lists and the diff, which holds only those), and
   `node scripts/docs-check.mjs` reports no new operator-word advisory for the
   record.
5. `docs/workstreams/WS-001-dotln-angular.md` carries house rules 1 to 26
   under their numbers (`grep -c "^[0-9]*\. \*\*" …` prints 26 and the
   numbers are consecutive, asserted in the census) and its
   `dotln-workstream` JSON block is byte-identical to the base's.
6. `node scripts/docs-check.mjs` passes with any ceiling advisory recorded in
   the census and no document trimmed to meet one; `npm run publication:check`
   exits 0; `node scripts/harness.mjs check` reports the generated surfaces
   at their pinned bytes; `git diff --name-only <base> HEAD` names no file
   under `scripts/`, `packages/`, `.claude/`, `.agents/`, `.codex/`,
   `docs/planning/*-20*.md`, `docs/planning/refutations/`,
   `docs/evidence/WO-0[01]*/` or `KIT-MANIFEST.json`, and no work order but this
   one; `README.md` differs from the base by the one release claim line
   `release prepare` writes, and this order's file by its release label and the
   amendment of 2026-10-30.
7. `npm run work-orders -- index --check` reports both pages current and
   `npm run plan -- check` reports no advisory attributable to this order.
8. `npm test` and `npm run test:docs` pass at the reviewed tree; the
   Preflight line ran before the full run.
9. The `dotln-angular` registration's `gate` runs `npm run typecheck:e2e` in the
   plain and review selections. In a throwaway clone of the target at `6268de9`
   that command exits 0, and exits nonzero after a mistyped line is added to an
   e2e spec, recorded in the evidence README.
10. `docs/launchpad-readme.md` opens with a table of facts, then task-named
    sections, and says how to run the launchpad and its gates, where its
    documents are and how a change lands; every `](…)` link in it that names a
    repository path resolves; it carries no release block.

**Evidence gate:** the gate rows, `docs/evidence/WO-025/census.md`,
`docs/evidence/WO-025/README.md` and
`docs/evidence/WO-025/host-qualification.md`.

**Known issues and carry-ins:** This order and WO-026 are a lane pair in the
sequence: different repositories, disjoint surfaces, no edge; the operator
may run them one at a time. The profile's shape follows the operator's
preference of 2026-10-30 for core's WO-235 restart's draft; that draft names
`DotLn Angular v0.4.0`, the root at `/board` and WO-019 as active, all
superseded, and links to the fork by absolute URL, which this order makes
relative; the draft is a shape to follow, never text to copy. `README.md`
stays the starter's text as a template-derived carrier, with
`docs/launchpad-readme.md` holding the launchpad's fixed page until the upstream
kit no longer causes merge issues with it. A standing direction the operator
gave in a session and no pass recorded enters the operator record with its date
and capture; an order-scoped one stays in that order's decisions. A planning pass that runs between filing and
activation may edit the same standing documents; the executor integrates
`main` at activation and passes what is there. The order's version is
assigned at activation.

**Non-goals:** editing records, generated documents, judged order texts, kit
files or `README.md` beyond its release claim line; changing any house rule's
substance, any operator direction's substance, the sequence, WS-001's JSON block
or any configuration beyond the registered gate's `typecheck:e2e`; the target's
documents (WO-026); a byte or size goal.

**Operator-review assumptions:** the operator reads the rewritten profile and
the operator record's diff in the pull request before final review, accepts
the census's kind judgments, and accepts that `README.md` stays the
starter's text for now.
