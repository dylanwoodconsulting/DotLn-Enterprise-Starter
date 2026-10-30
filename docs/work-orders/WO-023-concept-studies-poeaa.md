# WO-023 — Concept studies IV: the twenty enterprise application patterns behind the app's data and state layers, from Patterns of Enterprise Application Architecture, each with a state drawing and a small executable model

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh+; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 6268de9fc3cae84bf66091c1fbcc30d344411cd2
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/catalog/src/studies/poeaa/` (twenty records), the
`states` family under `libs/features/tools/src/lib/composites/study-visuals/states/`,
the executable TypeScript models and specs the records name under
`libs/features/tools/src/lib/studies/poeaa/`, one coverage row and one rule,
about 40 source files plus twenty data records; adds no runtime dependency.
Removes nothing. Wall-clock: about 6 to 10 hours of executor work, of which
the fan-out runs in parallel, plus the fixed cycle; unknown until run.
Context bytes: WO-020's record, check, families and rules as it leaves them,
`catalog.md` §Studies, the twenty catalog rows, this order,
`docs/dev-reference/architecture/events-and-state.md` and `foundation.md`
(the app's own stores, data access and persistence), about 190 KB for the
executor; each author reads two rows, the contract and the public catalog
pages it cites. Commands added: none. Tokens: unknown until run; recorded
per worker. Steps: 12. Re-mints: none. Refutations paid: the 2026-10-30
second pass's receipt.
**Nomination provenance:** the operator's direction of 2026-10-30 (ignored
intake capture `docs/intake/notes/planning-2026-10-30-second.md`, SHA-256
`8e8cdbeb9b227932d9119b5a012a72086a1ebe349f368b42b0ff788d9060382e`); the
depth direction of 2026-10-26 (capture SHA-256
`5742f0a794ee937eba3573e29fa99c18df074f293a583b0fbbb2ab55826cade4`); the
operator's standing wants (security and correctness that would hold in a
real organization; the reference workspace a colleague recognizes), which
these patterns name; register row `FUP-5f1cdfde5e860902` allocated to
WO-020 to WO-024. Planner-synthesized by the 2026-10-30 second planning pass
([planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md)
§Orders filed and amended, D4 and D5). Opaque identifier, not a priority.
**Depends on:** WO-020 merged (hard: the record, the check, the study
composite, the addressable route and the fan-out procedure; the base above is
provisional and publishes right under starter v0.96.1's merge-base publish; a
pass may set it to WO-020's merge commit).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-020",
    "relation": "hard",
    "reason": "the concept-study record, check, study composite, addressable route and fan-out procedure this batch reuses; the base line is provisional and publishes right under starter v0.96.1's merge-base publish"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 7, 8, 15, 17, 23, 24, 25, 26; §The app and its sub-apps,
§Design direction); `docs/repositories/dotln-angular.md`;
`docs/product/concept-study.md`; `docs/control/budgets.json` (`subagentCap`);
the target's `catalog.md` §Studies and `catalog-rules.md` as WO-020 leaves
them, `docs/dev-reference/architecture/events-and-state.md` and
`foundation.md`; WO-020's `fan-out.md`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses Patterns of Enterprise Application Architecture and
sees twenty studied concepts; they open Unit of Work and read its study: the
idea in plain words (one object remembers everything a business transaction
changed and writes it out once) and the situation it serves (a scene's saved
compositions written together, or not at all), a state drawing of one
example they step through as objects become new, dirty, clean and removed
with the text equivalent naming each register, the ordinary pseudocode of
registering and committing, the executable TypeScript model with the note
that it ran in the test suite, how Doctrine, Hibernate and a TypeScript ORM
name and implement it, the public catalog page and the book as references,
the limits (a long-lived unit of work holds stale objects; nothing coordinates
two units) and the nearby patterns as links (Identity Map, Data Mapper, Lazy
Load). They open Identity Map and step a lookup that hits and one that misses;
they open Optimistic and Pessimistic Offline Lock side by side and read where
each fails; they open Data Transfer Object and Remote Facade and read why the
pair exists. What the operator learns is which pattern their stores and data
access already embody, under what name, and where each breaks; what they
decide is which pattern to make explicit in the app or to show a colleague.

**Observed gap (dated 2026-10-30):** at `6268de9` the catalog carries 455
PoEAA rows (83 patterns), 3 typed, none studied; the app's own data access,
stores and persistence (`events-and-state.md`, `foundation.md`) embody several
of these patterns under other names and no page says which; no `states`
family exists.

**Design:**

- **The `states` family** (`composites/study-visuals/states/`): objects or
  records as rows and their states as columns, or a state machine as nodes
  and transitions, laid out by the model; stepping on command moves an object
  between states or fires a transition, with the text equivalent naming what
  moved and why; reduced motion steps without transition. First rendered
  pair (rule 25): A, a register table whose rows move between state columns;
  B, a state-machine diagram with the current state raised; one variable, the
  representation; both at 1440 and 360; the rounds continue until the
  operator says done.
- **Executable models**: each record's `pseudocode.executable` is
  `{ kind: 'typescript', module: 'libs/features/tools/src/lib/studies/poeaa/<slug>.ts' }`,
  a small pure or in-memory model of the pattern (a unit of work over an
  in-memory store; an identity map; a lazy-loaded ghost; a lock table) with a
  spec beside it that drives the model through the study's example, whose
  states the `states` family draws from the same module; a pattern that is a
  structural choice without a mechanism to run (Domain Model, Transaction
  Script, Table Module, Template View, Page Controller, Canonical shapes)
  marks `executable: null` with its reason. The `rxjs` field is illustrative
  where a stream clarifies a pattern (Lazy Load as a deferred observable;
  Registry as a subject) and `null` otherwise.
- **Where the app embodies it**: each study's implementations begin with the
  app's own place where a pattern or its cousin lives (the SignalStores,
  `withPersistedState`, the data-access gateways, the catalog loader), named
  by repository path and stated as the author's reading of the code, never as
  a claim the pattern was designed in; then two public implementations
  (Doctrine, Hibernate or JPA, a TypeScript ORM such as MikroORM or TypeORM,
  Entity Framework) introduced on their own terms. References: the public
  catalog page of the pattern on the author's site and the book's publisher
  page, each with `accessed` and `supports`. Own words; no passage of the
  book (rule 23; the publishing decision at activation).
- **The twenty concepts**, by the pass's rule (the twenty most-related rows
  by resolved in-degree, ties toward typed rows then source order):
  `poeaa:240` Data Mapper, `poeaa:246` Unit of Work, `poeaa:218` Domain
  Model, `poeaa:254` Identity Map, `poeaa:370` Optimistic Offline Lock,
  `poeaa:377` Pessimistic Offline Lock, `poeaa:421` Registry, `poeaa:214`
  Transaction Script, `poeaa:340` Template View, `poeaa:357` Remote Facade,
  `poeaa:363` Data Transfer Object, `poeaa:408` Gateway, `poeaa:260` Lazy
  Load, `poeaa:452` Record Set, `poeaa:268` Identity Field, `poeaa:443`
  Plugin, `poeaa:226` Service Layer, `poeaa:278` Foreign Key Mapping,
  `poeaa:448` Service Stub, `poeaa:330` Page Controller. One recorded
  substitution under the rule is admitted as in WO-020.
- **The fan-out**: WO-020's procedure, at most twelve workers, with the
  factual critic also running each model's spec and checking that every
  "where the app embodies it" sentence names a file that exists at the base
  and reads as the author's reading.
- **Documents:** `catalog.md` §Studies gains the PoEAA coverage row and the
  `states` family; `catalog-rules.md` gains the rule that a study naming
  where the app embodies a pattern names the file and marks the reading as
  the author's; `docs/dev-reference/architecture/events-and-state.md` gains
  one paragraph naming the patterns its stores and data access embody, with
  links to the studies.

Rejected: examples in a generic banking or e-commerce domain (axis: the
reference workspace explains itself best through its own stores); every
pattern executable (axis: a layering choice has no mechanism to run, and a
forced model misleads); a database dependency for the models (axis: an
in-memory model shows the mechanism and the gate needs no service).

Live-run surfaces at the base: the catalog with WO-020's studies and the
addressable readings.

**Deliverables:** the twenty records with their models and specs where
executable; the `states` family with its stories and specs; the coverage row,
the rule and the paragraph; `docs/evidence/WO-023/` with the fan-out record,
the review record, the link check, the walkthrough and its screenshots, and
the design record.

**Execution plan:**

1. Base guard and activation as WO-005 step 1, for WO-023; fast-forward the
   target worktree to the target's `main` (WO-014-D001); read the harness
   usage and record the subagent remainder; record the publishing decision
   as WO-020 did.
2. The `states` family with stories `StudyStates` and a spec that renders a
   four-state register to its text equivalent. Check: `npx nx test tools`
   exits 0; `npm run lint:components` exits 0.
3. The first rendered pair (A register table, B state machine) at 1440 and
   360; the rounds; the rejected implementation removed with its record.
   Check: `grep -c "Round" docs/evidence/WO-023/design/comparisons.md` is at
   least 1.
4. The authors' brief with the embodiment rule into `fan-out.md`; dispatch
   the ten authors; merge the twenty drafts. Check: `npx nx test tools` exits
   0 over the models' specs.
5. Dispatch the two critics; dispose the findings; rewrite through the same
   authors; set `checked`. Check: `npm run studies:check` exits 0 over
   `studies/poeaa/`.
6. The link check into `docs/evidence/WO-023/README.md`. Check: every URL has
   a status.
7. e2e `apps/dotln-e2e/src/catalog.spec.ts`: PoEAA shows twenty studied; Unit
   of Work's study steps its states under reduced motion with the text
   equivalent naming the register; Identity Map's study shows a hit and a
   miss; the two lock studies open from the contents; axe; no overflow at
   360, 768 and 1440. Check: `npx nx e2e dotln-e2e` exits 0.
8. The walkthrough as WO-020 step 11, under `docs/evidence/WO-023/`. Check:
   the files exist.
9. Documents: the coverage row, the family, the rule and the paragraph.
   Check: `grep -c "embod" docs/ai-reference/catalog-rules.md` is at least 1
   and `grep -c "Unit of Work" docs/dev-reference/architecture/events-and-state.md`
   is at least 1.
10. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
    nothing; the chunk sizes recorded.
11. Gate plain and review. Check: passing rows, no tracked-byte mutation.
12. Launchpad write-back (the profile's implementation map names the `states`
    family; WS-001's delivery states by the final review); then the publish,
    review and records steps as WO-007 steps 15 to 17, with the branch
    `feat/poeaa-concept-studies`, the title `feat: add concept studies for
    the enterprise application patterns`, `docs/evidence/WO-023/` and
    `docs/final-reviews/WO-023/`.

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
   Enterprise Application Architecture and read the studied count; open Unit
   of Work and step its states, expand the pseudocode, the executable model
   and the limits; open Identity Map and step a hit and a miss; open the two
   offline locks; open Data Transfer Object and Remote Facade. The VER report
   carries a `## Walkthrough` section with the dated steps and the
   screenshots at 360, 768 and 1440 under `docs/evidence/WO-023/walkthrough/`
   (`ls docs/evidence/WO-023/walkthrough | wc -l` prints at least 15), and
   states in the verifier's own words what a unit of work tracks, what an
   identity map prevents, and when an optimistic lock is the wrong choice, as
   read from the studies alone. Met only when every step completed and that
   statement is present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/poeaa/`
   with exactly the twenty ids this order names (or one recorded
   substitution), every record `checked` with at least two reviewers, every
   reference complete, and `studies-summary.json` current.
3. Every record with `executable` names a module under
   `libs/features/tools/src/lib/studies/poeaa/` with a spec beside it that
   drives the model through the study's example, every record with
   `executable: null` carries its reason in the decisions file (the file
   names each), and `npx nx test tools` exits 0 with those specs.
4. `docs/evidence/WO-023/fan-out.md`, `review.md` and `README.md` as WO-020's
   criterion 4, the review record also listing, per study, the app file the
   embodiment sentence names and the critic's confirmation that it exists at
   the base.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 7 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the `states` family and the records in lazy chunks,
   `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists PoEAA with
   twenty studied; `docs/ai-reference/catalog-rules.md` states the
   embodiment rule (`grep -c "embod" docs/ai-reference/catalog-rules.md` is at
   least 1); `docs/dev-reference/architecture/events-and-state.md` names the
   patterns the stores embody with links to their studies
   (`grep -c "Unit of Work" docs/dev-reference/architecture/events-and-state.md`
   is at least 1).
8. `docs/evidence/WO-023/design/comparisons.md` records the first pair (A
   register table, B state machine) and every later round with its pick, and
   the decisions file records the operator's word that ended the rounds; the
   decisions file names the removed candidate's files and `ls` on each prints
   nothing.
9. `node scripts/target-gate.mjs WO-023 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-023/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, `design/`, and
`docs/evidence/WO-023/host-qualification.md`.

**Known issues and carry-ins:** The base line is provisional and publishes
right under starter v0.96.1's merge-base publish; a pass may set it to
WO-020's merge commit. This order and WO-024 are a lane pair: disjoint
surfaces, no edge, the second to publish integrates the target's `main` and
rewrites `studies-summary.json` before its publish; the operator may run them
one at a time. WO-008 (authentication and permissions) will read the
Optimistic Offline Lock, Service Stub and Gateway studies as context and owes
them nothing. The remaining sixty-odd PoEAA patterns are the next batches'
candidates (the filing pass's C3). This order activates only on a launchpad
whose starter carries core WO-221's `--draft` form; the draft pull request and
its workflow runs are a final-review obligation read from
`docs/evidence/WO-023/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** refactoring the app's stores or data access toward a pattern;
a database or API dependency; the remaining patterns; the general search
controls (WO-018).

**Operator-review assumptions:** the operator accepts the in-degree selection
and the twenty patterns it names, accepts the app's own code as the first
implementation named in each study, judges the first pair and ends the rounds
in their own words, and reads the one draft pull request before final review,
which the final publish reuses.
