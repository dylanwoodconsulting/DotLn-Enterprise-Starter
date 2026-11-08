# WO-030 — Concept research III: twenty more messaging patterns from Enterprise Integration Patterns, each a `flow` drawn by the landed family, authored and checked by the research track's workers with no new page, family or design round

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes). The research track runs on
the operator's spare Codex capacity, so the intended route is
`drive: WO-030 --host codex` (the executor and its workers on `gpt-6.1-sol`
at `max`, the harness default); the attended phrases on either host are
admitted.
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds twenty records under `libs/shared/catalog/src/studies/eip/`,
the flow models and, where a pattern transforms a stream, the executable
modules with marble specs under `libs/features/tools/src/lib/studies/eip/`,
twenty rows in `studies-summary.json`, the work's record chunk under
`libs/shared/catalog/src/studies/` and the shared model registry
`libs/features/tools/src/lib/studies/study-models.ts` extended, the
inventory tests (`tools/studies.test.mjs`), the e2e counts (`catalog.spec.ts`)
and the catalog's visual baselines (`catalog.visual.spec.ts`) updated, one changed coverage row in
`catalog.md` §Studies and one e2e case; about 40 source files plus twenty
data records; adds no runtime dependency, no family, no composite, no route
and no page. Removes nothing. Wall-clock: about 4 h 0 min to 8 h 0 min of
executor work, of which the fan-out runs in parallel and none is a design
round, plus the fixed cycle; unknown until run. Context bytes: the study
record, its check, the `flow` drawing, `flow.ts`'s two builders, the marble
contract and the catalog rules as the target's `main` leaves them at
activation; `catalog.md` §Studies; WO-022's `fan-out.md` and its Aggregator
worked example; the twenty catalog rows with their hooks; this order; about
180 KB for the executor; each author reads two rows, the contract, the
worked example and the public pattern pages it cites. Commands added: none.
Tokens: unknown until run; recorded per worker. Steps: 10. Re-mints: none.
Refutations paid: this pass's receipt.
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
**Depends on:** WO-022 merged (hard: the `flow` family and its two builders,
the analogy rule and the messaging study directory this batch reuses; the
`marbles` family and WO-020's record, check, composite, route and fan-out
procedure come with it). The base above is WO-023's merge (#17), released as `DotLn Angular v0.11.0`, set by the 2026-11-08 pass; step 1 integrates the target's current `main`.
**Workstream:** WS-002

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-022",
    "relation": "hard",
    "reason": "the flow family and its two builders, the analogy rule and the messaging study directory this batch reuses, with the marbles family and WO-020's record, check, composite, route and fan-out procedure"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-002-concept-research.md`
(the track's rules); `docs/workstreams/WS-001-dotln-angular.md` (house rules
7, 8, 15, 17, 23, 24, 26; §The app and its sub-apps);
`docs/repositories/dotln-angular.md` (§Run content workers, §Catalog and
concept studies); `docs/product/concept-study.md`; `docs/control/budgets.json`
(`subagentCap`); the target's `catalog.md` §Studies, `catalog-rules.md` (the
flow rule and the analogy rule) and `concept-mapping.md` as the target's
`main` leaves them at activation, `libs/features/tools/src/lib/studies/flow.ts`,
WO-022's `fan-out.md` and `docs/evidence/WO-022/design/` (the settled look).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses Enterprise Integration Patterns and sees forty
studied concepts, WO-022's twenty and these twenty; they open Message Filter
and read its study: the idea in plain words (a filter passes a message on
when it meets a condition and drops it when it does not) and the situation
it serves (a channel of every order's events, of which one agent wants only
the completions), a flow drawing they step message by message with the
dropped and the passed messages named in the text equivalent, the ordinary
pseudocode, the executable marble pipeline labelled executable with its spec
named, how Apache Camel and Spring Integration name and implement it, the
public pattern page and the book as references, the limits (a filter cannot
say why a message was dropped; a dropped message is gone unless a channel
keeps it) and the nearby patterns as links (Selective Consumer, Message
Router, Invalid Message Channel). They open Scatter-Gather and watch one
request fan out to three recipients and their replies gather into one;
they open Point-to-Point Channel beside Publish-Subscribe Channel (WO-022's)
and read the two delivery rules side by side; they open Idempotent Receiver
and step a duplicate arriving twice. What the operator learns is the
remaining vocabulary of agents handing records through channels and where
each pattern fails; what they decide is which pattern the machinery view or
a toy should show next.

**Observed gap (dated 2026-11-04 at `55b59c9`):** the catalog carries 288
EIP rows and 20 studied, each a `flow` (WO-022, `DotLn Angular v0.9.0`);
268 rows are unstudied and 127 of them are related to by other rows; the
`flow` family, its two builders, the analogy rule, the record check and the
fan-out procedure exist and are idle between batches.

**Design:**

- **No new page, family or round** (WS-002 rule 1). The twenty records are
  drawn by `flow`, built by `flowModel` from steps written by hand or by
  `flowFromMarbles` from the marble example the study's spec runs, exactly
  as WO-022's records are; the look was settled by WO-022's rounds
  (`docs/evidence/WO-022/design/`). WS-001 rule 25 governs an order that
  lands a page; this order lands none, so no pair is rendered and no
  question is asked of the operator.
- **The twenty, by the track's rule** (WS-002 rule 2). `flow` draws a
  messaging pattern's endpoints, channels and messages, so the candidates
  are the unstudied rows of the pattern catalog (the book's chapters 3 to
  11); the two integration styles of chapter 2 among the most-related rows
  (`eip:49` Messaging and `eip:47` Remote Procedure Invocation) compare
  styles rather than step messages and are set aside with that reason. The
  rule run over the catalog's data at `55b59c9` by the filing pass then
  gives: `eip:101` Message Filter, `eip:66` Datatype Channel, `eip:193`
  Smart Proxy, `eip:57` Message Router, `eip:64` Point-to-Point Channel,
  `eip:68` Invalid Message Channel, `eip:127` Scatter-Gather, `eip:79`
  Document Message, `eip:89` Message Sequence, `eip:177` Selective Consumer,
  `eip:195` Test Message, `eip:62` Message Endpoint, `eip:86` Return
  Address, `eip:172` Polling Consumer, `eip:173` Event-Driven Consumer,
  `eip:180` Idempotent Receiver, `eip:54` Pipes and Filters, `eip:103`
  Dynamic Router, `eip:140` Content Enricher, `eip:143` Claim Check. The
  next rows under the rule, for the one substitution: `eip:167` Messaging
  Gateway, `eip:52` Message Channel, `eip:178` Durable Subscriber.
- **Examples in the app's own terms, as WO-022's.** Each study's example is
  a small flow from the platform's public vocabulary or the app's own,
  stated as an analogy with the public record it reads and never as a claim
  that the platform implements the pattern that way (the analogy rule in
  `catalog-rules.md`); the row's DotLn hooks are carried into the situation
  where they fit.
- **Executable arm where the mechanism transforms a stream, as WO-022's.**
  The eight patterns among the twenty whose mechanism transforms a stream
  (Message Filter, Message Router, Dynamic Router, Scatter-Gather, Content
  Enricher, Claim Check, Idempotent Receiver and Selective Consumer) carry
  `executable: { kind: 'rxjs', module }` with a marble spec, their flow
  built by `flowFromMarbles`, and the reader may switch to the marble
  drawing at the same step; the eight that are a channel, a message form, an
  endpoint or a composition (Datatype Channel, Point-to-Point Channel,
  Invalid Message Channel, Document Message, Message Endpoint, Return
  Address, Test Message, Pipes and Filters) are built by `flowModel` and mark
  `executable: null` with their reason; the four others (Smart Proxy,
  Message Sequence, Polling Consumer, Event-Driven Consumer) are judged by
  their mechanism, the reason recorded in the decisions. The module's
  pipeline names the pattern's parts in short comments on the operators that
  carry them, as the catalog rule asks.
- **Implementations and references, as WO-022's.** Apache Camel's and Spring
  Integration's documentation pages for the pattern, each introduced on its
  own terms, and one further public implementation where one exists; the
  public pattern catalog page and the book's publisher page as references,
  each with `accessed` and `supports`; own words throughout, no passage of
  the book (WS-001 rule 23).
- **The fan-out as the track's workers** (WS-002 rule 3). Ten authors with
  two rows each, one factual critic who opens every reference, runs each
  module's spec and checks that every analogy to the platform is marked as
  one, one reading critic who reads as the operator would: twelve launches
  against `subagentCap` 20, under the
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
- **Documents.** `catalog.md` §Studies: the Enterprise Integration Patterns
  coverage row reads forty studied and names this batch beside WO-022's. No
  new rule unless a critic finding needs one, recorded in the decisions.

Rejected: the two integration styles drawn as flows (axis: a comparison of
styles has no messages to step, and a forced flow misleads); every pattern
executable in RxJS (axis: WO-022's reason stands, a channel or a message
form has no stream to run); the concepts chosen by the planner's taste
(axis: the rule is checkable against the data).

Live-run surfaces at the base: the catalog with a hundred studies in the message system, the five landed families, the messaging study directory and the addressable readings.

**Deliverables:** the twenty records with their flow models and, where
executable, their modules and specs; the summary rows; the coverage row;
`docs/evidence/WO-030/` with `fan-out.md`, `review.md`, `README.md` (the
link check), `walkthrough.md` and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-030: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <the Repository pin>
   origin/main` exits 0 (a `main` that does not contain the pin stops for a
   planning pass); the target worktree then fast-forwards to the target's
   `main`, and that integrated commit is the baseline of every later
   comparison; then the route guard and activation as WO-005 step 1; read
   the harness usage; record the subagent remainder, the token stop and the
   publishing decision in `fan-out.md` and the decisions as WO-020 did.
   Check: the decisions carry them.
2. The authors' brief into `fan-out.md` from WO-022's brief, with the
   work's index, the twenty rows with their hooks, the two flow builders,
   the analogy rule, the authoring date and the launch form of this host;
   dispatch the ten authors; merge the twenty drafts into the work's record
   chunk and register each model in `study-models.ts`. Check: `npx nx test
   tools` exits 0 over the executable modules' specs and the flow specs.
3. Dispatch the two critics; dispose the findings; rewrite through the same
   authors or apply the bounded corrections in the parent under the profile;
   set `checked`. Check: `npm run studies:check` exits 0 over `studies/eip/`.
4. The link check into `docs/evidence/WO-030/README.md`. Check: every URL has
   a status.
5. e2e `apps/dotln-e2e/src/catalog.spec.ts`: Enterprise Integration Patterns
   shows forty studied on the shelf and in the contents; Message Filter's
   study steps its flow under reduced motion with the text equivalent naming
   the dropped message; Scatter-Gather opens from the contents; the
   Selective Consumer link opens its reading; axe; no overflow at 360, 768
   and 1440. Check: `npx nx e2e dotln-e2e` exits 0; `npm run test:tooling` exits 0 over
   the updated `tools/studies.test.mjs`; the regenerated baselines are
   recorded in `docs/evidence/WO-030/README.md`.
6. The walkthrough as WO-020 step 11, under `docs/evidence/WO-030/`. Check:
   the files exist.
7. Documents: the coverage row. Check: `grep -n "Enterprise Integration
   Patterns" docs/dev-reference/architecture/catalog.md` prints the row
   reading forty.
8. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
   nothing; the chunk sizes recorded.
9. Gate plain and review. Check: passing rows, no tracked-byte mutation.
10. Launchpad write-back (WS-002's delivery state by the final review; the
    profile's implementation map unchanged unless a path is new); then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/eip-concept-studies-2`, the title `feat: add the second
    batch of messaging concept studies`, `docs/evidence/WO-030/` and
    `docs/final-reviews/WO-030/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run studies:check`, `npm run test:tooling`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session in
   the served production build: open Tools, Catalog; choose Enterprise
   Integration Patterns and read the studied count; open Message Filter and
   step its flow, expand the pseudocode, the executable pipeline and the
   limits; open Scatter-Gather; open Point-to-Point Channel and
   Publish-Subscribe Channel; open Idempotent Receiver. The VER report
   carries a `## Walkthrough` section with the dated steps and the
   screenshots at 360, 768 and 1440 under `docs/evidence/WO-030/walkthrough/`
   (`ls docs/evidence/WO-030/walkthrough | wc -l` prints at least 15), and
   states in the verifier's own words what a filter cannot tell a sender,
   how scatter-gather completes, how the two channel patterns deliver
   differently, and what an idempotent receiver remembers, as read from the
   studies alone. Met only when every step completed and that statement is
   present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/eip/`
   with exactly the forty ids of WO-022's twenty and this order's twenty (or
   one recorded substitution from the Design's next rows), every record
   `checked` with at least two reviewers, every reference complete, and
   `studies-summary.json` current.
3. The eight records the Design names as stream transformations carry
   `executable` naming a module under
   `libs/features/tools/src/lib/studies/eip/` with a marble spec beside it
   that imports that module and runs the study's example under
   `TestScheduler`, their flows built by `flowFromMarbles`; if criterion 2's
   one substitution replaces one of the eight, the decisions file names the
   replaced record and its replacement, held to the same rule when its
   mechanism transforms a stream; every other record with `executable` does
   the same; every record with `executable: null` carries its reason in the
   decisions file (the file names each, and names none of the eight); and
   `npx nx test tools` exits 0 with those specs counted in its output.
4. The candidate studies cite supported, reachable references and state
   every platform analogy as one. Run `cat docs/evidence/WO-030/review.md
   docs/evidence/WO-030/README.md`: every critic finding has a disposition,
   every reference and implementation URL has its observed link-check
   status, no candidate record cites a URL recorded unreachable or a
   reference the factual critic marked unsupported, and the review record
   lists each study's platform analogy as checked. Worker accounting remains
   the profile's process duty.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 5 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440;
   `npm run test:tooling` exits 0 with `tools/studies.test.mjs` holding the
   first batch's membership check and this batch's; and the regenerated
   visual baselines match the integrated shelf.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the records in the work's lazy chunk,
   `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists Enterprise
   Integration Patterns with forty studied, naming this batch beside
   WO-022's.
8. `node scripts/target-gate.mjs WO-030 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-030/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-030/host-qualification.md`.

**Known issues and carry-ins:**

- **The operator's touchpoints** (WS-002 rule 4): `drive: WO-030 --host
  codex` from the launchpad's main checkout; the merge of the target's pull
  request and of the launchpad's records pull request when the drive stops
  at awaiting-merge; the drive phrase again for the release close. Nothing
  else is asked of the operator: there is no design round, a routine
  question is resolved under the executor's authority, and a criterion no
  candidate can meet as written is recorded unmet with its defect class for
  the verifier (product 07 §Operator-opened planning pass's five classes),
  never carried to the operator as a question. The attended phrases stay
  admitted on either host.
- **Beside the road** (WS-002 rule 5): this order edits `studies/eip/`, the
  messaging module directory, the summary, one coverage row and one e2e
  case, surfaces disjoint from every sequenced order's except the shared
  registry `study-models.ts`, the summary and the e2e counts, which the
  integration reconciles; it may run in its
  own worktree beside any of them, and a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it.
- The draft pull request is opened at the verification pass as every target
  order's is (core WO-221's `--draft` form; its workflow runs are a
  final-review obligation read from `docs/evidence/WO-030/preview-pr.json`,
  never a criterion); whether the operator reads twenty records before the
  final review is their choice (the assumption below).
- The record's shape is `concept-study-v1` (WS-002 rule 7): every authored
  on-screen field is a message key in
  `apps/dotln/public/i18n/studyEip/en.json`, each model is a language-free
  simulation, a presentation taking a `StudyTranslate` and an entry of a few
  lines, with nested keys, named placeholders and no function split to fit
  the 80-line ceiling (WS-001 rules 9, 30 and 31; the shape WO-034's reshaped batch set; WO-028's twenty are WO-040's to reshape and no precedent, rule 30), and the authors' and critics' briefs name those rules; a changed record shape is a new schema version, never an edit. The base is WO-023's merge (#17), set by the 2026-11-08 pass; WO-034's tightened corpus test and its rewording of this work's count-led stream messages are in the base, and WO-040, the standards pass that reads this work's modules, may land before or after this batch, which integrates the target's `main` in either case. `Target release classification: minor` and
  `Target release notes: reviewed` are set under WO-012's declared policy.
- A study's "see it in the machinery view" link remains the candidate after
  WO-016 merges (`FUP-4fde2cb5fc229dc2`), not this order's. The remaining
  patterns of the catalog are the next cuts (WS-002 rule 6).

**Non-goals:** a new visual family, composite, route or page; design rounds;
the two integration styles; the machinery view or any runtime channel in the
app; typing further EIP rows for the `channels` scene; the catalog's search
controls (WO-018).

**Operator-review assumptions:** the operator accepts the track's selection
rule, the two rows it sets aside and the twenty it names, with the Design's
next rows as the one substitution's source; accepts Codex with the harness
defaults as the host and models of the track; accepts that no paired
comparison runs because no page lands; and accepts the critics' review and
the verifier's walkthrough as the reading of the twenty records, reading the
draft pull request at their choice. Reopen on the operator's word.
