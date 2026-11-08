# WO-032 — Concept research V: ten more Gödel, Escher, Bach concepts and ten more Team Topologies concepts, drawn by the `relations` family WO-024 lands, authored and checked by the research track's workers with no new page, family or design round

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes). The research track runs on
the operator's spare Codex capacity, so the intended route is
`drive: WO-032 --host codex` (the executor and its workers on `gpt-6.1-sol`
at `max`, the harness default); the attended phrases on either host are
admitted.
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 55b59c9133056c1d6471274a9676a7d5649196ac
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds ten records under `libs/shared/catalog/src/studies/geb/` and
ten under `libs/shared/catalog/src/studies/tt/` (the directories WO-024
makes), the executable models and specs the records name under
`libs/features/tools/src/lib/studies/geb/` and `studies/tt/`, twenty rows in `studies-summary.json`, the work's record chunk under
`libs/shared/catalog/src/studies/` and the shared model registry
`libs/features/tools/src/lib/studies/study-models.ts` extended, the
inventory tests (`tools/studies.test.mjs`), the e2e counts (`catalog.spec.ts`)
and the catalog's visual baselines (`catalog.visual.spec.ts`) updated, two changed coverage rows in `catalog.md` §Studies
and one e2e case; about 30 source files plus twenty data records; adds no
runtime dependency, no family, no composite, no route and no page. Removes
nothing. Wall-clock: about 4 h 0 min to 8 h 0 min of executor work, of which
the fan-out runs in parallel and none is a design round, plus the fixed
cycle; unknown until run. Context bytes: the study record, its check, the
`relations` drawing, the absent-material rule and the catalog rules as the
target's `main` leaves them after WO-024 merges; `catalog.md` §Studies;
WO-024's `fan-out.md` and its worked examples; the twenty catalog rows; this
order; about 180 KB for the executor; each author reads two rows, the
contract, a worked example and the public sources it cites. Commands added:
none. Tokens: unknown until run; recorded per worker. Steps: 10. Re-mints:
none. Refutations paid: this pass's receipt.
**Nomination provenance:** the operator's direction of 2026-11-04 (ignored
intake capture `docs/intake/notes/planning-2026-11-04.md`, SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`): drain
the research queue on spare Codex capacity, apart from the Angular work,
limited where needed to the kinds of research already done, with orders that
limit the operator's intervention and need no paired comparisons; the depth
direction of 2026-10-26 (capture SHA-256
`5742f0a794ee937eba3573e29fa99c18df074f293a583b0fbbb2ab55826cade4`);
register rows `FUP-862baf0e83c307d0` and `FUP-85de3e8d18bab62a`, fired by
that direction and allocated to WO-028 to WO-032. Planner-synthesized by the
2026-11-04 planning pass
([planning document](../planning/passes/standard-pass-v0-115-0-research-track-2026-11-04.md)
§Orders filed and amended). Opaque identifier, not a priority.
**Depends on:** WO-024 merged (hard: the `relations` family, the
absent-material rule, the two study and model directories and the settled
look this batch reuses; WO-022's analogy rule and WO-020's record, check,
composite, route and fan-out procedure come with it). The base above is
provisional at WO-022's merge; the pass after WO-024 merges may set it to
WO-024's merge, and step 1 integrates the target's current `main` in any
case.
**Workstream:** WS-002

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-024",
    "relation": "hard",
    "reason": "the relations family, the absent-material rule, the two study and model directories and the settled look this batch reuses, with the analogy rule and WO-020's record, check, composite, route and fan-out procedure"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-002-concept-research.md`
(the track's rules); `docs/workstreams/WS-001-dotln-angular.md` (house rules
7, 8, 15, 17, 23, 24, 26; §Design: the Tipping Point taxonomy);
`docs/repositories/dotln-angular.md` (§Run content workers, §Catalog and
concept studies); `docs/product/concept-study.md`; `docs/control/budgets.json`
(`subagentCap`); the target's `catalog.md` §Studies and `catalog-rules.md`
(the analogy rule and the absent-material rule) as the target's `main`
leaves them after WO-024 merges; WO-024's `fan-out.md` and
`docs/evidence/WO-024/design/` (the settled look).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses Gödel, Escher, Bach and sees twenty studied
concepts, WO-024's ten and these ten; they open Recursion and read its
study: the idea in plain words (a procedure that is defined in terms of a
smaller case of itself, with a case that ends it) and the situation it
serves (the launchpad's planning pass reading the pass before it, which read
the pass before that), a relations drawing they step as a call opens a
smaller call and the stack unwinds, with the text equivalent naming each
level, the ordinary pseudocode, the executable model with the note that it
ran in the test suite, two public treatments introduced on their own terms,
the publisher's page as the reference, the limits (a recursion with no base
case never returns, and the levels drawing shows where) and the nearby
concepts as links (Levels of description, Strange loop, Tangled hierarchy).
They open BlooP and FlooP together and read why one always finishes and the
other may not, then the Halting problem link; they open Tangled hierarchy
and read how it extends Strange loop. They choose Team Topologies, see
twenty studied, open Exactly one owning team per part of the system and read
it against the platform's one writer per worktree as an analogy, then Three
core team interaction modes and the modes WO-024 studied as links, then
Communication paths restrict the solution search space and read Conway's
law's consequence drawn as a graph. What the operator learns is how the two
works' remaining vocabulary describes the platform's levels and its roles;
what they decide is which concept to put on the machinery view or a toy
next.

**Observed gap (dated 2026-11-04 at `55b59c9`):** the catalog carries 573
Gödel, Escher, Bach rows and 637 Team Topologies rows, none studied at this
base; WO-024 (filed, in the lane pair at the front of WS-001's sequence)
studies ten of each and lands the `relations` family; 563 and 627 rows are
unstudied beyond WO-024's, 185 and 382 of them related to by other rows.

**Design:**

- **No new page, family or round** (WS-002 rule 1). The twenty records are
  drawn by `relations`, as WO-024's records are, or keep `visual: null`
  where no drawing explains the idea better than the words, recorded with
  the reason as WO-024's rule asks; the look is settled by WO-024's rounds
  (`docs/evidence/WO-024/design/`). WS-001 rule 25 governs an order that
  lands a page; this order lands none, so no pair is rendered and no
  question is asked of the operator.
- **The twenty, by the track's rule** (WS-002 rule 2): the ten most-related
  unstudied rows of each work beyond WO-024's ten, run over the catalog's
  data at `55b59c9` by the filing pass: GEB `geb1:114` Completeness,
  `geb2:114` FlooP, `geb2:29` Sealed-off levels, `geb2:303` Tangled
  hierarchy, `geb1:125` Recursion, `geb1:171` Fantasy rule, `geb1:64`
  Interpretation, `geb2:101` BlooP, `geb2:116` Halting problem, `geb2:33`
  Rules at the bottom, thoughts on top; Team Topologies `tt1:176` Low- or
  zero-bandwidth communication between teams, `tt1:240` Exactly one owning
  team per part of the system, `tt1:85` Three core team interaction modes,
  `tt3:28` Primary interaction modes per team type, `tt3:43` Deliberate
  mode transitions, `tt1:135` Communication paths restrict the solution
  search space, `tt1:213` Team (definition), `tt1:233` Work flows to
  long-lived teams, `tt1:276` Number and relative complexity of domains per
  team, `tt1:340` Auto Trader stream-aligned office layout. WO-024's
  recorded substitution took Strange loop in place of Completeness, so
  Completeness heads this list. The next rows under the rule, for the one
  substitution per work: GEB `geb2:148` Essential incompleteness, `geb1:7`
  Canon, `geb1:88` Recursively enumerable set; Team Topologies `tt1:351`
  Engineering practices are foundational, `tt1:84` Four fundamental team
  types, `tt1:284` Domain complexity classification.
- **Executable arm where it exists, as WO-024's.** A study with a mechanism
  to run carries `executable: { kind: 'typescript', module }` with a spec: a
  recursion over a toy structure, BlooP's bounded and FlooP's unbounded loop
  over one toy problem, a completeness check over the toy rule system
  WO-024's Consistency study authored, a fantasy-rule derivation, a count of
  communication paths over a team graph, a sum of domain complexity per
  team; the others mark `executable: null` with their reason. The `rxjs`
  field is illustrative where a stream clarifies and `null` otherwise.
  Missing material stays missing (the absent-material rule).
- **Situations from the platform and the app, as WO-024's.** Each study's
  situation is drawn from the platform's public records and the app's own
  structure, stated as an analogy the row's hooks support and never as a
  claim about the book's intent or the platform's design (the analogy rule).
- **Implementations and references, as WO-024's.** Public treatments and
  implementations, each introduced on its own terms; the publishers' pages
  as references, each with `accessed` and `supports`; own words, no passage
  of either book (WS-001 rule 23).
- **The fan-out as the track's workers** (WS-002 rule 3). Ten authors with
  two rows each, one factual critic who opens every reference, runs each
  model's spec, checks the analogy rule and that no study characterizes the
  operator or quotes the books, one reading critic who reads as the operator
  would: twelve launches against `subagentCap` 20, under the
  [profile's worker-admission and accounting rules](../repositories/dotln-angular.md#run-content-workers)
  declared before any worker starts; under Codex each is a `spawn_agent`
  with `fork_turns: none`, `gpt-6.1-sol` at `max`; under Claude each is a
  `dotln-worker`. Each worker writes only in its private copy of the target,
  spawns nothing and starts no gate; the executor stays the one writer.
- **The inventory's consumers.** The work's record chunk
  (`libs/shared/catalog/src/studies/<work>.ts`, which imports and exports
  every record and which `check-studies.mjs` holds to the directory) and the
  shared model registry (`libs/features/tools/src/lib/studies/study-models.ts`,
  which `study-models.spec.ts` compares with the records' model paths and
  `ToolsFacade` reads) gain this batch's entries before any check runs;
  `tools/studies.test.mjs` keeps the first batch's membership check and gains
  this batch's; `apps/dotln-e2e/src/catalog.spec.ts` derives its studied
  counts from the integrated `studies-summary.json` rather than a new global
  pin; the catalog's visual baselines (`catalog.visual.spec.ts`,
  `catalog-{360,768,1440}.png`) are regenerated for the changed shelf counts
  and the change recorded in the evidence README, as WO-022's was. A
  concurrent batch reconciles the chunk, the registry and the summary when it
  integrates `main`.
- **Documents.** `catalog.md` §Studies: the two coverage rows read twenty
  studied each and name this batch beside WO-024's. No new rule unless a
  critic finding needs one, recorded in the decisions.

Rejected: twenty GEB concepts and Team Topologies later (axis: WO-024's
reason stands, the two works together describe the platform's levels and
its roles); drawings for every concept (axis: `concept-study.md` keeps
missing material missing); the concepts chosen by the planner's taste (axis:
the rule is checkable against the data).

Live-run surfaces at the base: the catalog with WO-024's twenty studies, the
`relations` family and the addressable readings, once WO-024 has merged.

**Deliverables:** the twenty records with their models and specs where
executable; the summary rows; the two coverage rows; `docs/evidence/WO-032/`
with `fan-out.md`, `review.md`, `README.md` (the link check),
`walkthrough.md` and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-032: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <the Repository pin>
   origin/main` exits 0 and WO-024's merge is an ancestor of `origin/main`
   (a `main` without either stops for a planning pass); the target worktree
   then fast-forwards to the target's `main`, and that integrated commit is
   the baseline of every later comparison; then the route guard and
   activation as WO-005 step 1; read the harness usage; record the subagent
   remainder, the token stop and the publishing decision in `fan-out.md` and
   the decisions as WO-020 did. Check: the decisions carry them.
2. The authors' brief into `fan-out.md` from WO-024's brief, with each
   work's index, the twenty rows, the analogy and absent-material rules, the
   authoring date and the launch form of this host; dispatch the ten authors; merge the twenty drafts into the work's record
   chunk and register each model in `study-models.ts`. Check: `npx nx test tools` exits 0 over
   the models' specs.
3. Dispatch the two critics; dispose the findings; rewrite through the same
   authors or apply the bounded corrections in the parent under the profile;
   set `checked`. Check: `npm run studies:check` exits 0 over
   `studies/geb/` and `studies/tt/`.
4. The link check into `docs/evidence/WO-032/README.md`. Check: every URL has
   a status.
5. e2e `apps/dotln-e2e/src/catalog.spec.ts`: Gödel, Escher, Bach and Team
   Topologies each show twenty studied on the shelf and in the contents;
   Recursion's study steps its levels under reduced motion with the text
   equivalent naming the level; BlooP opens from the contents and the FlooP
   link opens its reading; Exactly one owning team per part of the system
   opens from the Team Topologies contents; axe; no overflow at 360, 768 and
   1440. Check: `npx nx e2e dotln-e2e` exits 0; `npm run test:tooling` exits 0 over
   the updated `tools/studies.test.mjs`; the regenerated baselines are
   recorded in `docs/evidence/WO-032/README.md`.
6. The walkthrough as WO-020 step 11, under `docs/evidence/WO-032/`. Check:
   the files exist.
7. Documents: the two coverage rows. Check: `grep -n "Gödel, Escher, Bach\|Team
   Topologies" docs/dev-reference/architecture/catalog.md` prints the two
   rows reading twenty.
8. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
   nothing; the chunk sizes recorded.
9. Gate plain and review. Check: passing rows, no tracked-byte mutation.
10. Launchpad write-back (WS-002's delivery state by the final review; the
    profile's implementation map unchanged unless a path is new); then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/geb-tt-concept-studies-2`, the title `feat: add the second
    batch of levels, loops and teams concept studies`,
    `docs/evidence/WO-032/` and `docs/final-reviews/WO-032/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run studies:check`, `npm run test:tooling`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session in
   the served production build: open Tools, Catalog; choose Gödel, Escher,
   Bach and read the studied count; open Recursion and step its levels,
   expand the pseudocode, the executable model and the limits; open BlooP
   and FlooP and follow the Halting problem link; open Tangled hierarchy;
   choose Team Topologies and read the studied count; open Exactly one
   owning team per part of the system, Three core team interaction modes
   and Communication paths restrict the solution search space. The VER
   report carries a `## Walkthrough` section with the dated steps and the
   screenshots at 360, 768 and 1440 under `docs/evidence/WO-032/walkthrough/`
   (`ls docs/evidence/WO-032/walkthrough | wc -l` prints at least 15), and
   states in the verifier's own words what ends a recursion, why BlooP
   always finishes and FlooP may not, and what Conway's law implies for the
   paths between teams, as read from the studies alone. Met only when every
   step completed and that statement is present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/geb/`
   and `libs/shared/catalog/src/studies/tt/` with exactly the twenty ids per
   work of WO-024's ten (or its recorded substitution) and this order's ten
   (or one recorded substitution per work from the Design's next rows),
   every record `checked` with at least two reviewers, every reference
   complete, and `studies-summary.json` current.
3. Every record the Design names as having a mechanism to run (Recursion,
   BlooP, FlooP, Completeness, Fantasy rule, Communication paths restrict
   the solution search space, Number and relative complexity of domains per
   team) carries `executable` naming a module under
   `libs/features/tools/src/lib/studies/geb/` or `studies/tt/` with a spec
   beside it that imports that module and drives its model through the
   study's example; a recorded substitution is held to the same test and
   the decisions file names it; every record with `executable: null` or
   `visual: null` carries its reason in the decisions file (the file names
   each, and names none of the seven); and `npx nx test tools` exits 0 with
   those specs.
4. The candidate studies cite supported, reachable references and state
   every analogy as one. Run `cat docs/evidence/WO-032/review.md
   docs/evidence/WO-032/README.md`: every critic finding has a disposition,
   every reference and implementation URL has its observed link-check
   status, no candidate record cites a URL recorded unreachable or a
   reference the factual critic marked unsupported, and the review record
   lists each study's analogy as checked and confirms that no record
   characterizes the operator or quotes either book. Worker accounting
   remains the profile's process duty.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 5 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440;
   `npm run test:tooling` exits 0 with `tools/studies.test.mjs` holding the
   first batch's membership check and this batch's; and the regenerated
   visual baselines match the integrated shelf.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the records in the works' lazy chunks,
   `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists Gödel,
   Escher, Bach and Team Topologies with twenty studied each, naming this
   batch beside WO-024's.
8. `node scripts/target-gate.mjs WO-032 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-032/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-032/host-qualification.md`.

**Known issues and carry-ins:**

- **Waits for WO-024.** This order activates only after WO-024 has merged
  into the target's `main` (step 1 refuses otherwise); the pass after that
  merge may set the base to WO-024's merge and adjust the lists if WO-024's
  further substitutions took one of these twenty (then the first of the
  Design's next rows for that work takes its place, recorded in the
  decisions).
- **The operator's touchpoints** (WS-002 rule 4): `drive: WO-032 --host
  codex` from the launchpad's main checkout; the merge of the target's pull
  request and of the launchpad's records pull request when the drive stops
  at awaiting-merge; the drive phrase again for the release close. Nothing
  else is asked of the operator: there is no design round, a routine
  question is resolved under the executor's authority, and a criterion no
  candidate can meet as written is recorded unmet with its defect class for
  the verifier (product 07 §Operator-opened planning pass's five classes),
  never carried to the operator as a question. The attended phrases stay
  admitted on either host.
- **Beside the road** (WS-002 rule 5): this order edits `studies/geb/`,
  `studies/tt/`, their model directories, the summary, two coverage rows and
  one e2e case, surfaces disjoint from every sequenced order's once WO-024
  has merged except the shared
  registry `study-models.ts`, the summary and the e2e counts, which the
  integration reconciles; it may run in its own worktree beside any of them, and a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it.
- The draft pull request is opened at the verification pass as every target
  order's is (core WO-221's `--draft` form; its workflow runs are a
  final-review obligation read from `docs/evidence/WO-032/preview-pr.json`,
  never a criterion); whether the operator reads twenty records before the
  final review is their choice (the assumption below).
- The record's shape is `concept-study-v1` (WS-002 rule 7): every authored
  on-screen field is a message key in the works' catalogs
  `apps/dotln/public/i18n/studyGeb/en.json` and `studyTt/en.json`, which
  WO-024 creates, each model is a language-free simulation, a presentation
  taking a `StudyTranslate` and an entry of a few lines, with nested keys,
  named placeholders and no function split to fit the 80-line ceiling
  (WS-001 rules 9, 30 and 31; the shape WO-034's reshaped batch set and WO-039's reshaped enterprise batch sets for an executable model; WO-028's twenty are WO-040's to reshape and no precedent, rule 30), and the authors' and critics' briefs name those
  rules; a changed record shape is a new schema version, never an edit.
  `Target release classification: minor` and `Target release notes:
  reviewed` are set under WO-012's declared policy.
- The remaining rows of both works are the next cuts (WS-002 rule 6); the
  formal-system interpreter as a sub-app stays WO-018's route.

**Non-goals:** a new visual family, composite, route or page; design rounds;
a formal-system interpreter as a sub-app; the remaining rows of either work;
the catalog's search controls (WO-018).

**Operator-review assumptions:** the operator accepts the track's selection
rule and the twenty rows it names, with the Design's next rows as the one
substitution's source per work; accepts the analogies to the platform's
levels and roles as the studies' situations; accepts Codex with the harness
defaults as the host and models of the track; accepts that no paired
comparison runs because no page lands; and accepts the critics' review and
the verifier's walkthrough as the reading of the twenty records, reading the
draft pull request at their choice. Reopen on the operator's word.
