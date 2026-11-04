# WO-031 — Concept research IV: twenty more enterprise application patterns from Patterns of Enterprise Application Architecture, drawn by the `states` family WO-023 lands with executable models, authored and checked by the research track's workers with no new page, family or design round

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes). The research track runs on
the operator's spare Codex capacity, so the intended route is
`drive: WO-031 --host codex` (the executor and its workers on `gpt-6.1-sol`
at `max`, the harness default); the attended phrases on either host are
admitted.
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 55b59c9133056c1d6471274a9676a7d5649196ac
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds twenty records under `libs/shared/catalog/src/studies/poeaa/`
(the directory WO-023 makes), the executable TypeScript models and specs
the records name under `libs/features/tools/src/lib/studies/poeaa/`, twenty rows in `studies-summary.json`, the work's record chunk under
`libs/shared/catalog/src/studies/` and the shared model registry
`libs/features/tools/src/lib/studies/study-models.ts` extended, the
inventory tests (`tools/studies.test.mjs`), the e2e counts (`catalog.spec.ts`)
and the catalog's visual baselines (`catalog.visual.spec.ts`) updated, one changed coverage row in `catalog.md`
§Studies, one paragraph in `events-and-state.md` extended with the patterns
this batch finds the stores embody, and one e2e case; about 40 source files
plus twenty data records; adds no runtime dependency, no family, no
composite, no route and no page. Removes nothing. Wall-clock: about 4 h 0
min to 8 h 0 min of executor work, of which the fan-out runs in parallel
and none is a design round, plus the fixed cycle; unknown until run.
Context bytes: the study record, its check, the `states` drawing, the
embodiment rule and the catalog rules as the target's `main` leaves them
after WO-023 merges; `catalog.md` §Studies; WO-023's `fan-out.md` and its
Unit of Work worked example; `events-and-state.md` and `foundation.md`; the
twenty catalog rows; this order; about 190 KB for the executor; each author
reads two rows, the contract, the worked example and the public catalog
pages it cites. Commands added: none. Tokens: unknown until run; recorded
per worker. Steps: 10. Re-mints: none. Refutations paid: this pass's
receipt.
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
**Depends on:** WO-023 merged (hard: the `states` family, the executable-model
rule, the embodiment rule, the PoEAA study and model directories and the
settled look this batch reuses; WO-020's record, check, composite, route
and fan-out procedure come with it). The base above is provisional at
WO-022's merge; the pass after WO-023 merges may set it to WO-023's merge,
and step 1 integrates the target's current `main` in any case.
**Workstream:** WS-002

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-023",
    "relation": "hard",
    "reason": "the states family, the executable-model rule, the embodiment rule, the PoEAA study and model directories and the settled look this batch reuses, with WO-020's record, check, composite, route and fan-out procedure"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-002-concept-research.md`
(the track's rules); `docs/workstreams/WS-001-dotln-angular.md` (house rules
7, 8, 15, 17, 23, 24, 26); `docs/repositories/dotln-angular.md` (§Run content
workers, §Catalog and concept studies); `docs/product/concept-study.md`;
`docs/control/budgets.json` (`subagentCap`); the target's `catalog.md`
§Studies, `catalog-rules.md` (the embodiment rule WO-023 adds),
`docs/dev-reference/architecture/events-and-state.md` and `foundation.md`
as the target's `main` leaves them after WO-023 merges; WO-023's
`fan-out.md` and `docs/evidence/WO-023/design/` (the settled look).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses Patterns of Enterprise Application Architecture and
sees forty studied concepts, WO-023's twenty and these twenty; they open
Repository and read its study: the idea in plain words (a collection-like
interface in front of the mapping layer, so domain code asks for objects by
criteria and never sees a query) and the situation it serves (the catalog's
loader answering the Tools home by work and by studied state), a state
drawing of one example they step through as a criteria object becomes a
query and a result set becomes domain objects, with the text equivalent
naming each stage, the ordinary pseudocode, the executable TypeScript model
with the note that it ran in the test suite, where the app's data access
already embodies the pattern (stated as the author's reading of the code)
and how two public frameworks name it, the public catalog page and the book
as references, the limits (a repository hides the cost of the query it
builds) and the nearby patterns as links (Data Mapper, Query Object,
Identity Map). They open Value Object and Money together and step an
allocation that must not lose a cent; they open Optimistic Offline Lock
(WO-023's) beside Coarse-Grained Lock and read how the lock's grain changes
what conflicts; they open Client Session State and Server Session State and
read where each keeps the session. What the operator learns is which further
patterns their stores, data access and session handling embody, under what
name, and where each breaks; what they decide is which to make explicit in
the app or to show a colleague.

**Observed gap (dated 2026-11-04 at `55b59c9`):** the catalog carries 455
PoEAA rows, none studied at this base; WO-023 (filed, in the lane pair at
the front of WS-001's sequence) studies twenty and lands the `states` family
and the embodiment rule; 435 rows are unstudied beyond WO-023's twenty and
137 of them are related to by other rows; `events-and-state.md` names only
the patterns WO-023 will name.

**Design:**

- **No new page, family or round** (WS-002 rule 1). The twenty records are
  drawn by `states`, as WO-023's records are; the look is settled by
  WO-023's rounds (`docs/evidence/WO-023/design/`). WS-001 rule 25 governs
  an order that lands a page; this order lands none, so no pair is rendered
  and no question is asked of the operator.
- **The twenty, by the track's rule** (WS-002 rule 2). `states` draws
  objects or records moving between states, or a state machine, so the
  candidates are the unstudied PoEAA rows beyond WO-023's twenty; the rule
  run over the catalog's data at `55b59c9` by the filing pass gives:
  `poeaa:353` Application Controller, `poeaa:223` Table Module, `poeaa:428`
  Value Object, `poeaa:231` Table Data Gateway, `poeaa:234` Row Data
  Gateway, `poeaa:416` Layer Supertype, `poeaa:418` Separated Interface,
  `poeaa:432` Money, `poeaa:143` Transaction, `poeaa:303` Class Table
  Inheritance, `poeaa:313` Metadata Mapping, `poeaa:322` Repository,
  `poeaa:335` Front Controller, `poeaa:385` Coarse-Grained Lock, `poeaa:394`
  Client Session State, `poeaa:399` Server Session State, `poeaa:289`
  Dependent Mapping, `poeaa:295` Serialized LOB, `poeaa:300` Single Table
  Inheritance, `poeaa:306` Concrete Table Inheritance. The next rows under
  the rule, for the one substitution: `poeaa:309` Inheritance Mappers,
  `poeaa:326` Model View Controller, `poeaa:348` Two Step View, `poeaa:391`
  Implicit Lock, `poeaa:403` Database Session State.
- **Executable models, as WO-023's.** Each record's `pseudocode.executable`
  is `{ kind: 'typescript', module: 'libs/features/tools/src/lib/studies/poeaa/<slug>.ts' }`,
  a small pure or in-memory model of the pattern (a repository over an
  in-memory store; a value object's equality; money allocation; the three
  inheritance mappings over one small hierarchy; a coarse-grained lock over
  an aggregate; a transaction's states) with a spec beside it that drives
  the model through the study's example, whose states the `states` family
  draws from the same module; the three rows that are a layering choice
  without a mechanism to run (Table Module, Layer Supertype, Separated
  Interface) mark `executable: null` with their reason, judged by WO-023's
  test. The `rxjs` field is illustrative where a stream clarifies a pattern
  and `null` otherwise.
- **Where the app embodies it, as WO-023's rule.** Each study's
  implementations begin with the app's own place where the pattern or its
  cousin lives (the SignalStores, `withPersistedState`, the data-access
  gateways, the catalog loader), named by repository path and stated as the
  author's reading of the code, never as a claim the pattern was designed
  in, or, for a pattern the app does not embody at the integrated base, the
  finding that it does not, stated in those words; then two public
  implementations introduced on their own terms.
  References: the public catalog page of the pattern on the author's site
  and the book's publisher page, each with `accessed` and `supports`. Own
  words; no passage of the book (WS-001 rule 23).
- **The fan-out as the track's workers** (WS-002 rule 3). Ten authors with
  two rows each, one factual critic who opens every reference, runs each
  model's spec and checks that every embodiment sentence names a file that
  exists at the integrated base and reads as the author's reading, one
  reading critic who reads as the operator would: twelve launches against
  `subagentCap` 20, under the
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
- **Documents.** `catalog.md` §Studies: the PoEAA coverage row reads forty
  studied and names this batch beside WO-023's; `events-and-state.md`'s
  paragraph gains the patterns this batch finds the stores and data access
  embody, with links to their studies. No new rule unless a critic finding
  needs one, recorded in the decisions.

Rejected: examples in a generic banking or e-commerce domain (axis:
WO-023's reason stands, the reference workspace explains itself best
through its own stores); every pattern executable (axis: a layering choice
has no mechanism to run, and a forced model misleads); a database dependency
for the models (axis: an in-memory model shows the mechanism and the gate
needs no service); the concepts chosen by the planner's taste (axis: the
rule is checkable against the data).

Live-run surfaces at the base: the catalog with WO-023's twenty PoEAA
studies, the `states` family and the addressable readings, once WO-023 has
merged.

**Deliverables:** the twenty records with their models and specs where
executable; the summary rows; the coverage row and the paragraph;
`docs/evidence/WO-031/` with `fan-out.md`, `review.md`, `README.md` (the
link check), `walkthrough.md` and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-031: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <the Repository pin>
   origin/main` exits 0 and WO-023's merge is an ancestor of `origin/main`
   (a `main` without either stops for a planning pass); the target worktree
   then fast-forwards to the target's `main`, and that integrated commit is
   the baseline of every later comparison; then the route guard and
   activation as WO-005 step 1; read the harness usage; record the subagent
   remainder, the token stop and the publishing decision in `fan-out.md` and
   the decisions as WO-020 did. Check: the decisions carry them.
2. The authors' brief into `fan-out.md` from WO-023's brief, with the
   work's index, the twenty rows, the embodiment rule, the authoring date
   and the launch form of this host; dispatch the ten authors; merge the twenty drafts into the work's record
   chunk and register each model in `study-models.ts`. Check: `npx nx test tools` exits 0 over the models'
   specs.
3. Dispatch the two critics; dispose the findings; rewrite through the same
   authors or apply the bounded corrections in the parent under the profile;
   set `checked`. Check: `npm run studies:check` exits 0 over
   `studies/poeaa/`.
4. The link check into `docs/evidence/WO-031/README.md`. Check: every URL has
   a status.
5. e2e `apps/dotln-e2e/src/catalog.spec.ts`: PoEAA shows forty studied on
   the shelf and in the contents; Repository's study steps its states under
   reduced motion with the text equivalent naming the stage; Value Object
   opens from the contents; the Money link opens its reading; axe; no
   overflow at 360, 768 and 1440. Check: `npx nx e2e dotln-e2e` exits 0; `npm run test:tooling` exits 0 over
   the updated `tools/studies.test.mjs`; the regenerated baselines are
   recorded in `docs/evidence/WO-031/README.md`.
6. The walkthrough as WO-020 step 11, under `docs/evidence/WO-031/`. Check:
   the files exist.
7. Documents: the coverage row and the paragraph. Check: `grep -n "Patterns
   of Enterprise Application Architecture"
   docs/dev-reference/architecture/catalog.md` prints the row reading forty,
   and `grep -c "Repository" docs/dev-reference/architecture/events-and-state.md`
   is at least 1.
8. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
   nothing; the chunk sizes recorded.
9. Gate plain and review. Check: passing rows, no tracked-byte mutation.
10. Launchpad write-back (WS-002's delivery state by the final review; the
    profile's implementation map unchanged unless a path is new); then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/poeaa-concept-studies-2`, the title `feat: add the second
    batch of enterprise application pattern studies`,
    `docs/evidence/WO-031/` and `docs/final-reviews/WO-031/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run studies:check`, `npm run test:tooling`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session in
   the served production build: open Tools, Catalog; choose Patterns of
   Enterprise Application Architecture and read the studied count; open
   Repository and step its states, expand the pseudocode, the executable
   model and the limits; open Value Object and Money; open Coarse-Grained
   Lock beside Optimistic Offline Lock; open Client Session State and Server
   Session State. The VER report carries a `## Walkthrough` section with the
   dated steps and the screenshots at 360, 768 and 1440 under
   `docs/evidence/WO-031/walkthrough/` (`ls docs/evidence/WO-031/walkthrough
   | wc -l` prints at least 15), and states in the verifier's own words what
   a repository hides, why money is not a number, and what a coarse-grained
   lock gives up, as read from the studies alone. Met only when every step
   completed and that statement is present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/poeaa/`
   with exactly the forty ids of WO-023's twenty (or its recorded
   substitution) and this order's twenty (or one recorded substitution from
   the Design's next rows), every record `checked` with at least two
   reviewers, every reference complete, and `studies-summary.json` current.
3. Every record of this order's twenty except the three the Design names
   as layering choices without a mechanism to run (Table Module, Layer
   Supertype, Separated Interface) carries `executable` naming a module under
   `libs/features/tools/src/lib/studies/poeaa/` with a spec beside it that
   imports that module and drives its model through the study's example; a
   recorded substitution brings in a record held to the same rule, by the
   Design's test of whether it has a mechanism to run, and the decisions
   file names which; every record with `executable: null` carries its reason
   in the decisions file (the file names each, and names no record outside
   the three and a substitution it names as structural); WO-023's twenty keep
   the exceptions WO-023's own criterion 3 names and are not judged again
   here; and `npx nx test tools` exits 0 with those specs.
4. The candidate studies cite supported, reachable references and embody
   the app accurately. Run `cat docs/evidence/WO-031/review.md
   docs/evidence/WO-031/README.md`: every critic finding has a disposition,
   every reference and implementation URL has its observed link-check
   status, no candidate record cites a URL recorded unreachable or a
   reference the factual critic marked unsupported, and the review record
   lists, per study, either the app file its embodiment sentence names with
   the critic's confirmation that it exists at the integrated base and reads
   as the pattern the study names, or the recorded finding that the app does
   not embody the pattern there with the critic's confirmation. Worker
   accounting remains the profile's process duty.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 5 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440;
   `npm run test:tooling` exits 0 with `tools/studies.test.mjs` holding the
   first batch's membership check and this batch's; and the regenerated
   visual baselines match the integrated shelf.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the records in the work's lazy chunk,
   `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists Patterns of
   Enterprise Application Architecture with forty studied, naming this batch
   beside WO-023's, and `docs/dev-reference/architecture/events-and-state.md`
   names the patterns this batch finds the stores and data access embody
   with links to their studies.
8. `node scripts/target-gate.mjs WO-031 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-031/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-031/host-qualification.md`.

**Known issues and carry-ins:**

- **Waits for WO-023.** This order activates only after WO-023 has merged
  into the target's `main` (step 1 refuses otherwise); the pass after that
  merge may set the base to WO-023's merge and adjust the list if WO-023's
  recorded substitution took one of these twenty (then the first of the
  Design's next rows takes its place, recorded in the decisions).
- **The operator's touchpoints** (WS-002 rule 4): `drive: WO-031 --host
  codex` from the launchpad's main checkout; the merge of the target's pull
  request and of the launchpad's records pull request when the drive stops
  at awaiting-merge; the drive phrase again for the release close. Nothing
  else is asked of the operator: there is no design round, a routine
  question is resolved under the executor's authority, and a criterion no
  candidate can meet as written is recorded unmet with its defect class for
  the verifier (product 07 §Operator-opened planning pass's five classes),
  never carried to the operator as a question. The attended phrases stay
  admitted on either host.
- **Beside the road** (WS-002 rule 5): this order edits `studies/poeaa/`,
  the PoEAA model directory, the summary, one coverage row, one paragraph
  and one e2e case, surfaces disjoint from every sequenced order's once
  WO-023 has merged except the shared
  registry `study-models.ts`, the summary and the e2e counts, which the
  integration reconciles; it may run in its own worktree beside any of them, and a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it.
- The draft pull request is opened at the verification pass as every target
  order's is (core WO-221's `--draft` form; its workflow runs are a
  final-review obligation read from `docs/evidence/WO-031/preview-pr.json`,
  never a criterion); whether the operator reads twenty records before the
  final review is their choice (the assumption below).
- The record's shape is closed (`concept-study-v0`); a change is a new
  schema version, never an edit. `Target release classification: minor` and
  `Target release notes: reviewed` are set under WO-012's declared policy.
- WO-008 (authentication and permissions) may read the session-state and
  lock studies as context and owes them nothing. The remaining forty-odd
  PoEAA patterns are the next cuts (WS-002 rule 6).

**Non-goals:** a new visual family, composite, route or page; design rounds;
refactoring the app's stores or data access toward a pattern; a database or
API dependency; the remaining patterns; the catalog's search controls
(WO-018).

**Operator-review assumptions:** the operator accepts the track's selection
rule and the twenty rows it names, with the Design's next rows as the one
substitution's source; accepts the app's own code as the first
implementation named in each study; accepts Codex with the harness defaults
as the host and models of the track; accepts that no paired comparison runs
because no page lands; and accepts the critics' review and the verifier's
walkthrough as the reading of the twenty records, reading the draft pull
request at their choice. Reopen on the operator's word.
