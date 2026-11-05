# WO-029 — Concept research II: twenty more RxJS operators and creation functions, each with an executable marble example drawn by the landed `marbles` family, authored and checked by the research track's workers with no new page, family or design round

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes). The research track runs on
the operator's spare Codex capacity, so the intended route is
`drive: WO-029 --host codex` (the executor and its workers on `gpt-6.1-sol`
at `max`, the harness default); the attended phrases on either host are
admitted.
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 48c7f8e6916692bca833c4985e2cf95978ab2c06
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds twenty records under `libs/shared/catalog/src/studies/rxjs/`,
twenty executable modules with marble specs under
`libs/features/tools/src/lib/studies/rxjs/`, twenty rows in `studies-summary.json`, the work's record chunk under
`libs/shared/catalog/src/studies/` and the shared model registry
`libs/features/tools/src/lib/studies/study-models.ts` extended, the
inventory tests (`tools/studies.test.mjs`), the e2e counts (`catalog.spec.ts`)
and the catalog's visual baselines (`catalog.visual.spec.ts`) updated, one changed coverage row in `catalog.md` §Studies
and one e2e case; about 40 source files plus twenty data records; adds no
runtime dependency, no family, no composite, no route and no page. Removes
nothing. Wall-clock: about 4 h 0 min to 8 h 0 min of executor work, of which
the fan-out runs in parallel and none is a design round, plus the fixed
cycle; unknown until run. Context bytes: the study record, its check, the
`marbles` drawing, `marbles.ts`, `marble-testing.ts` and the catalog rules
as the target's `main` leaves them at activation; `catalog.md` §Studies;
WO-021's `fan-out.md` and its switchMap worked example; the twenty catalog
rows; this order; about 180 KB for the executor; each author reads two rows,
the contract, the worked example and the RxJS documentation pages it cites.
Commands added: none. Tokens: unknown until run; recorded per worker. Steps:
10. Re-mints: none. Refutations paid: this pass's receipt.
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
**Depends on:** WO-021 merged (hard: the `marbles` family, the marble
contract and spec helper, the executable rule and the RxJS study directory
this batch reuses; WO-020's record, check, composite, route and fan-out
procedure come with it). The base above is WO-022's merge, released as
`DotLn Angular v0.9.0`; step 1 integrates the target's current `main`.
**Workstream:** WS-002

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-021",
    "relation": "hard",
    "reason": "the marbles family, the marble contract and spec helper, the executable rule and the RxJS study directory this batch reuses, with WO-020's record, check, composite, route and fan-out procedure"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-002-concept-research.md`
(the track's rules); `docs/workstreams/WS-001-dotln-angular.md` (house rules
7, 8, 15, 17, 23, 24, 26); `docs/repositories/dotln-angular.md` (§Run content
workers, §Catalog and concept studies); `docs/product/concept-study.md`;
`docs/control/budgets.json` (`subagentCap`); the target's `catalog.md`
§Studies and `catalog-rules.md` as the target's `main` leaves them at
activation (the executable rule and its `// Illustrative:` exception),
`libs/features/tools/src/lib/studies/rxjs/marbles.ts` and
`marble-testing.ts`, WO-021's `fan-out.md` and `docs/evidence/WO-021/design/`
(the settled look).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses RxJS and sees forty studied concepts, WO-021's twenty
and these twenty; they open debounceTime and read its study: the idea in
plain words (an emission is passed on only once its source has been quiet for
the given time, so a burst collapses to its last value) and the situation it
serves (the catalog's search box, where a query is sent only when the
operator pauses), a marble drawing of the burst they step emission by
emission with the text equivalent naming which values are dropped and which
is delivered, the ordinary pseudocode of the timer that is reset by each
arrival, the executable pipeline labelled executable with its spec named,
where this app uses the operator and two public uses, the RxJS documentation
and source as references, the limits (a source that never pauses never
emits) and the nearby concepts as links (throttleTime, auditTime,
distinctUntilChanged). They open throttleTime beside it and watch the same
burst keep its first value instead of its last; they open withLatestFrom and
step a sampled combination, then zip and watch pairs wait for each other;
they open fromEvent and read how a DOM event becomes a stream. What the
operator learns is which of the rate-limiting and joining operators their
stores and facades should use where; what they decide is which habit to
change in the app's own pipelines.

**Observed gap (dated 2026-11-04 at `55b59c9`):** the catalog carries 742
RxJS rows and 20 studied, all drawn by `marbles` with executable marble
specs (WO-021, `DotLn Angular v0.8.0`); 722 rows are unstudied and 183 of
them are related to by other rows; the `marbles` family, the marble contract
and spec helper, the record check and the fan-out procedure exist and are
idle between batches.

**Design:**

- **No new page, family or round** (WS-002 rule 1). The twenty records are
  drawn by `marbles` from the same module each spec runs, exactly as
  WO-021's records are; the look was settled by WO-021's rounds
  (`docs/evidence/WO-021/design/`). WS-001 rule 25 governs an order that
  lands a page; this order lands none, so no pair is rendered and no
  question is asked of the operator.
- **The twenty, by the track's rule** (WS-002 rule 2). `marbles` draws the
  input and output streams of a pipeline, so the candidates are the
  unstudied operators, creation functions and subjects whose example a
  `TestScheduler` run can draw; five of the most-related rows name no such
  stream and are set aside with their reason recorded here: `rxc:81`
  TestScheduler (the harness the family runs under), `rxc:254`
  firstValueFrom and `rxc:255` lastValueFrom (functions that return a
  promise, which the family has no mark for), `rxc:76` animationFrameScheduler
  (a scheduler, not a stream) and `rxp:223` toSignal (Angular interop outside
  the scheduler). The rule run over the catalog's data at `55b59c9` by the
  filing pass then gives: `rxc:172` debounceTime, `rxc:176` throttleTime,
  `rxc:157` map, `rxc:178` distinctUntilChanged, `rxc:111` fromEvent,
  `rxc:119` throwError, `rxc:200` withLatestFrom, `rxc:170` auditTime,
  `rxc:114` timer, `rxc:132` connectable, `rxc:140` zip, `rxc:225` tap,
  `rxc:182` first, `rxc:195` concatAll, `rxc:110` from, `rxc:124` EMPTY,
  `rxc:127` scheduled, `rxc:144` bufferTime, `rxc:191` takeLast, `rxc:197`
  mergeAll. The next rows under the rule, for the one substitution:
  `rxc:116` defer, `rxc:136` forkJoin, `rxc:175` throttle, `rxc:181` filter,
  `rxc:185` single.
- **Executable examples, as WO-021's.** Every record's `pseudocode.executable`
  is `{ kind: 'rxjs', module: 'libs/features/tools/src/lib/studies/rxjs/<slug>.ts' }`,
  the module exporting the example's marble strings and its pipeline, with a
  spec beside it that calls `expectMarbleExample` under `TestScheduler`; the
  study's RxJS section is labelled executable and names the spec; the
  `ordinary` pseudocode explains the mechanism without RxJS vocabulary. A
  row whose example cannot run under the scheduler as written (fromEvent
  over a DOM target, scheduled over a scheduler) runs over a test double the
  module supplies, and a record that still cannot run marks its reading
  illustrative with `// Illustrative: <reason>` as the code's first line and
  the reason in the decisions, as the catalog rule admits.
- **Implementations and references, as WO-021's, with one addition.** Where
  this app uses the operator (a repository path read from the source at the
  integrated base, introduced as "where this app uses it") and one or two
  public uses, each introduced on its own terms; an operator the app does
  not use at the integrated base records that finding in those words, with
  two public uses in its place (the filing pass's reviewers found no use of `debounceTime`, `throttleTime`,
  `fromEvent`, `connectable`, `concatAll`, `bufferTime`, `takeLast` or
  `mergeAll` under `apps/` and `libs/` at `55b59c9`, and the critic confirms
  each search); the RxJS documentation page of the operator,
  the RxJS GitHub source at the installed version and a treatment in another
  public reference where one exists, each with `accessed` and `supports`;
  own words throughout (WS-001 rule 23).
- **The fan-out as the track's workers** (WS-002 rule 3). Ten authors with
  two rows each, one factual critic who opens every reference and runs each
  module's spec, one reading critic who reads as the operator would: twelve
  launches against `subagentCap` 20, under the
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
- **Documents.** `catalog.md` §Studies: the RxJS coverage row reads forty
  studied and names this batch beside WO-021's. No new rule unless a critic
  finding needs one, recorded in the decisions.

Rejected: the five set-aside rows forced into marble examples (axis: a
promise, a scheduler and the test harness itself have no output the family
draws, and a forced example misleads); the RxJS patterns (`rxp`) before the
remaining core operators (axis: WO-021's reason stands, the patterns' rows
relate to the operators); the concepts chosen by the planner's taste (axis:
the rule is checkable against the data).

Live-run surfaces at the base: the catalog with eighty studies in the
message system, the three landed families, the forty movement studies in
the migrated model shape, the RxJS study directory and the addressable readings.

**Deliverables:** the twenty records and executable modules with marble
specs; the summary rows; the coverage row; `docs/evidence/WO-029/` with
`fan-out.md`, `review.md`, `README.md` (the link check), `walkthrough.md` and
its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-029: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <the Repository pin>
   origin/main` exits 0 (a `main` that does not contain the pin stops for a
   planning pass); the target worktree then fast-forwards to the target's
   `main`, and that integrated commit is the baseline of every later
   comparison; then the route guard and activation as WO-005 step 1; read
   the harness usage; record the subagent remainder, the token stop and the
   publishing decision in `fan-out.md` and the decisions as WO-020 did.
   Check: the decisions carry them.
2. The authors' brief into `fan-out.md` from WO-021's brief, with the
   work's index, the twenty rows, the marble contract and spec helper, the
   authoring date and the launch form of this host; dispatch the ten authors; merge the twenty drafts into the work's record
   chunk and register each model in `study-models.ts`. Check: `npx nx test tools` exits 0 over
   the modules' specs.
3. Dispatch the two critics; dispose the findings; rewrite through the same
   authors or apply the bounded corrections in the parent under the profile;
   set `checked`. Check: `npm run studies:check` exits 0 over
   `studies/rxjs/`.
4. The link check into `docs/evidence/WO-029/README.md`. Check: every URL has
   a status.
5. e2e `apps/dotln-e2e/src/catalog.spec.ts`: RxJS shows forty studied on the
   shelf and in the contents; debounceTime's study steps its marbles under
   reduced motion with each emission named; throttleTime opens from the
   contents; the auditTime link opens its reading; axe; no overflow at 360,
   768 and 1440. Check: `npx nx e2e dotln-e2e` exits 0; `npm run test:tooling` exits 0 over
   the updated `tools/studies.test.mjs`; the regenerated baselines are
   recorded in `docs/evidence/WO-029/README.md`.
6. The walkthrough as WO-020 step 11, under `docs/evidence/WO-029/`. Check:
   the files exist.
7. Documents: the coverage row. Check: `grep -n "RxJS"
   docs/dev-reference/architecture/catalog.md` prints the row reading forty.
8. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
   nothing; the chunk sizes recorded.
9. Gate plain and review. Check: passing rows, no tracked-byte mutation.
10. Launchpad write-back (WS-002's delivery state by the final review; the
    profile's implementation map unchanged unless a path is new); then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/rxjs-concept-studies-2`, the title `feat: add the second
    batch of RxJS concept studies`, `docs/evidence/WO-029/` and
    `docs/final-reviews/WO-029/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run studies:check`, `npm run test:tooling`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session in
   the served production build: open Tools, Catalog; choose RxJS and read
   the studied count; open debounceTime and step its marbles, expand the
   pseudocode, the executable pipeline and the limits; open throttleTime;
   open withLatestFrom and zip; open fromEvent. The VER report carries a
   `## Walkthrough` section with the dated steps and the screenshots at 360,
   768 and 1440 under `docs/evidence/WO-029/walkthrough/`
   (`ls docs/evidence/WO-029/walkthrough | wc -l` prints at least 15), and
   states in the verifier's own words which value a debounce keeps and which
   a throttle keeps, what withLatestFrom samples, and when zip stalls, as
   read from the studies alone. Met only when every step completed and that
   statement is present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/rxjs/`
   with exactly the forty ids of WO-021's twenty and this order's twenty (or
   one recorded substitution from the Design's next rows), every record
   `checked` with at least two reviewers, every reference complete, and
   `studies-summary.json` current.
3. Every record carries `executable` naming a module under
   `libs/features/tools/src/lib/studies/rxjs/` with a spec beside it that
   imports that module and calls `expectMarbleExample` over the study's
   example, except a record whose code opens with `// Illustrative:` and
   whose reason the decisions file carries (the file names each, and names
   no record the Design's test says can run); and `npx nx test tools` exits
   0 with those specs counted in its output.
4. The candidate studies cite supported, reachable references and say truly
   where the app uses each operator. Run `cat docs/evidence/WO-029/review.md
   docs/evidence/WO-029/README.md`: every critic finding has a disposition,
   every reference and implementation URL has its observed link-check
   status, no candidate record cites a URL recorded unreachable or a
   reference the factual critic marked unsupported, and the review record
   lists, per study, either the app file its "where this app uses it" entry
   names with the critic's confirmation that it exists at the integrated
   base, or the recorded finding that the app does not use the operator
   there with the critic's confirmation of the search. Worker accounting
   remains the profile's process duty.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 5 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440;
   `npm run test:tooling` exits 0 with `tools/studies.test.mjs` holding the
   first batch's membership check and this batch's; and the regenerated
   visual baselines match the integrated shelf.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the records in the work's lazy chunk,
   `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists RxJS with
   forty studied, naming this batch beside WO-021's.
8. `node scripts/target-gate.mjs WO-029 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-029/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-029/host-qualification.md`.

**Known issues and carry-ins:**

- **The operator's touchpoints** (WS-002 rule 4): `drive: WO-029 --host
  codex` from the launchpad's main checkout; the merge of the target's pull
  request and of the launchpad's records pull request when the drive stops
  at awaiting-merge; the drive phrase again for the release close. Nothing
  else is asked of the operator: there is no design round, a routine
  question is resolved under the executor's authority, and a criterion no
  candidate can meet as written is recorded unmet with its defect class for
  the verifier (product 07 §Operator-opened planning pass's five classes),
  never carried to the operator as a question. The attended phrases stay
  admitted on either host.
- **Beside the road** (WS-002 rule 5): this order edits `studies/rxjs/`, the
  RxJS module directory, the summary, one coverage row and one e2e case,
  surfaces disjoint from every sequenced order's except the shared
  registry `study-models.ts`, the summary and the e2e counts, which the
  integration reconciles; it may run in its own
  worktree beside any of them, and a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it.
- The draft pull request is opened at the verification pass as every target
  order's is (core WO-221's `--draft` form; its workflow runs are a
  final-review obligation read from `docs/evidence/WO-029/preview-pr.json`,
  never a criterion); whether the operator reads twenty records before the
  final review is their choice (the assumption below).
- The record's shape is `concept-study-v1` (WS-002 rule 7): every authored
  on-screen field is a message key in
  `apps/dotln/public/i18n/studyRxjs/en.json`, each model is a language-free
  simulation, a presentation taking a `StudyTranslate` and an entry of a few
  lines, with nested keys, named placeholders and no function split to fit
  the 80-line ceiling (WS-001 rules 9, 30 and 31; the shape WO-028's own
  twenty and WO-034's reshaped batch set), and the authors' and critics'
  briefs name those rules; a changed record shape is a new schema version,
  never an edit. The base is WO-028's merge (#14), set by the 2026-11-05
  pass; a batch that lands before WO-034 is judged by its tightened corpus
  test when WO-034 integrates `main`, and WO-034 rewords this work's
  count-led stream messages. `Target release classification: minor` and
  `Target release notes: reviewed` are set under WO-012's declared policy.
- The remaining operators and the RxJS patterns (`rxp`) are the next cuts
  (WS-002 rule 6).

**Non-goals:** a new visual family, composite, route or page; design rounds;
the five set-aside rows and the RxJS patterns; refactoring the app's own
pipelines toward an operator; the catalog's search controls (WO-018).

**Operator-review assumptions:** the operator accepts the track's selection
rule, the five rows it sets aside and the twenty it names, with the Design's
next rows as the one substitution's source; accepts Codex with the harness
defaults as the host and models of the track; accepts that no paired
comparison runs because no page lands; and accepts the critics' review and
the verifier's walkthrough as the reading of the twenty records, reading the
draft pull request at their choice. Reopen on the operator's word.
