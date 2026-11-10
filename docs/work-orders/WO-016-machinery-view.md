# WO-016 — The replay of a recorded order: one recorded order's agents in their role slots over scrubbed, field-reduced copies of the platform's WO-221 and WO-226 segments, each agent's active gems, supports and prose sections readable, a mechanism change the operator drops on an agent redrawing the example use case with the before as a ghost, the operator's own ideas persisted in the browser and saved to ignored intake through a local sink, and the shared records and replay libraries

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh+; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `machinery.ts` to `libs/shared/models`, `libs/shared/records`
(reader, folds, loader and store, the committed copies and their schema,
the testing kit), `libs/shared/replay` (the virtual-time clock), the reducer
`tools/scripts/reduce-control-segment.mjs` and the copy check
`tools/scripts/check-record-fixtures.mjs` with their tooling test and
`scripts.md` rows, two core snapshots (`core-snapshot-order-221.json`,
`core-snapshot-order-226.json`) and `order-machinery.ts`, `ChildPaths.Replay`
and the shell's Replay menu item, the idea sink process with its tooling
test and `scripts.md` row, an optional `ideaSinkUrl` on `EnvironmentConfig`,
`/docs/intake/` in `.gitignore`, `apps/dotln-e2e/src/machinery-replay.spec.ts`;
about 75 source files (the planner's estimate); adds no runtime dependency.
Extends `libs/features/machinery` (the replay page, strip, slots, cards,
shelf, editor and `ReplayFacade`), `libs/features/machinery-data-access`
(`ReplayStore` and the snapshots), WO-046's two documents, `check:fixtures`
and, where it refuses an input directory a commit lacks, WO-046's miner.
Removes nothing; regenerates the app's whole-page visual baselines, each of
which shows the menu. One launchpad configuration line (`docs/intake` in the
class's disposable output). Wall-clock: about 8 to 12 hours of executor work
plus the design rounds and the fixed cycle; unknown until run. Context bytes:
WS-001 §The app and its sub-apps and the rules cited, design A §1 and §1.6,
the UI vision §4 and V7 read at the run's folder, WO-046's Design and the
target's `machinery.md` after it merges, this order, about 190 KB; core's
sources at the two commits are read by the miner, not into context. Commands
added in the target: `npm run idea-sink`. Tokens: unknown until run. Steps:
20. Re-mints: none. Refutations paid: five (receipts 008 to 012, on the texts
before the 2026-11-01 second pass's authorized amendment, WO-016-D001, which
the next planning pass's refutation judges), and the 2026-11-09 pass's
receipt.
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
the machinery view shows an agent, a change to its gems, supports or
mechanisms dropped on it, and what changes in the example use case, so the
operator can tune the mechanisms until they run without them and then see
agents working in concert; workers are metaphors, today separate agents in
their role slots; select-then-apply first, drag later; the ideas the operator
drops are theirs and are also saved to ignored intake; scrubbed copies of the
platform's WO-221 and WO-226 records are a stopgap. Design files this order
builds from, read at the run's folder on this machine (core's ignored intake,
read-only; digests pin what was read): `out/angular/design-agents-in-concert.md`
§1 (the concert strip) and §1.6 (its first buildable slice; SHA-256
`70d14655e88d5540b92e1700e56a385bb700b0e2a3152897882ecf0a74023676`);
`out/process/ui-vision-see-the-agents.md` §4 (the idea card as data and how
a drop changes an example without changing the platform) and V7 (SHA-256
`d3bbf3a21e5b0892e117d71d604acd779e8fdbe08350f0cf3a9bd074f0fcedd2`);
`out/angular/dotln-angular-forward.md` §2.0 (the shared substrate's lint
placement; SHA-256
`c05dea11b47547b5e6dd9e9880758539c3a36648cda1d281a7b9a54a1f8daaf8`). The design files are the operator's own research and lie outside the clean room (WS-001 rule 23 as corrected on 2026-10-26). Planner-synthesized by the 2026-10-24 planning pass
([planning document](../planning/passes/mining-run-orders-2026-10-24.md) §4 (the
re-derived WO-221 and WO-226 tables), §6 D8 and §9). Opaque identifier, not a
priority. Amended by the 2026-10-24 second pass ([planning document](../planning/passes/standard-pass-v0-96-1-2026-10-24.md)
§6 D3 and D4): the fixture file names, criterion 3's starter and counts, the
records types' name, the caption rule, the base clause and receipt 008's known
issues. Amended by the 2026-10-25 pass ([planning document](../planning/passes/standard-pass-v0-99-0-2026-10-25.md)
§6 D4): receipt 009's known issues (the `actor` composite and its scrub, the
repairer slot, the sink's directory rule and a drop while the sink is down). Amended by the 2026-10-26 pass ([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the sink checks `Origin` and `Host` (its item (a)), its default directory is DotLn-Angular's own ignored tree and never the launchpad's intake (b), criterion 3 reads the counts the executor recorded and names no starter's figures (c), `machinery.md` carries the rule per idea kind (d), a stored value that fails to parse is covered by a spec (e), the fixtures' `actor` values are the observed labels (f), the row counts are asserted by a spec rather than a line grep (g), and the copies' sources are the platform's public repositories (h). Amended by the 2026-10-28 pass ([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the sink refuses a directory outside the Git root of the checkout it runs from (its item (a)), the verifier recounts the stamp ids independently (b), a planner, refuter or release-close actor is an `unknown`-slot beat naming the role (c), and the reducer's scrub fails a run of 32 or more hexadecimal characters and a UUID shape (d).
The operator's restatement of 2026-11-09 (journal row 2026-11-10T02:27:22Z,
capture SHA-256
`b5aa37ca8d678027353a0e786bda9b8d288933e92398cc58903f9924a5f42d90`),
paraphrased: this is a separate, later order that replays a recorded work
order, showing its agents and how they worked with one another with the
machinery each had at the time, and then what a change to that machinery
would have changed in the order or in their decisions; it is planned work
they have gone over many times.
Amended by the 2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D17):
the replay placed beside WO-046's view at `/machinery/replay` with a Replay
menu item, extending that order's libraries under its own names and storage
key; each agent's machinery read from core's snapshot at the last commit
before the order's first row, mined by WO-046's miner, in place of the
launchpad's role stamps, with the idea kinds read against it and criterion 3
replaced by the snapshots' reproduction; the base set to `eb9d227` and the
gap re-dated; criterion 2 asserted from the rows' own stamps; the copies
made production data; the idea sink's defects repaired; and the rule 9, 24,
25 and 29 conventions.
**Depends on:** WO-013 merged (hard: the `/machinery` route and the Machinery
menu group; DotLn-Angular #6, in the base). WO-046 (hard, sequenced ahead:
the page at `/machinery` it leaves in place, `libs/features/machinery-data-access`
with `CoreSnapshotStore` and `core-reading.ts`, the `core-snapshot-v0` schema
and its types in `libs/shared/models`, and the miner
`tools/scripts/core-snapshot.mjs`, which this order runs at two more core
commits).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-013",
    "relation": "hard",
    "reason": "the machinery route and menu group this order adds a second route and a menu item to; merged, and the base eb9d227 contains it"
  },
  {
    "workOrderId": "WO-046",
    "relation": "hard",
    "reason": "sequenced ahead: the page at /machinery it leaves in place, libs/features/machinery-data-access, the core-snapshot-v0 schema and types, core-reading.ts and the miner, which this order extends and runs at the recorded orders' core commits"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 18, 19, 20, 22 to 26 and 29;
§The app and its sub-apps, G1 to G6, §Design direction, operating rules I1 to
I3); `docs/repositories/dotln-angular.md` (§Run the app and its checks,
§Publish a change, §What close deletes, retains or refuses);
`docs/operator/README.md`; `docs/work-orders/WO-046-machinery-view-what-core-has.md`
(its Design) and, after it merges, the target's
`docs/dev-reference/architecture/machinery.md`; the target's
`docs/ai-reference/*`, `apps/dotln/src/app/app.ts`,
`libs/shared/core/src/lib/paths/routes.ts`,
`libs/features/tools/src/lib/tools.routes.ts` (a feature with child paths),
`libs/shared/catalog/src/lib/catalog-loader.ts` (committed data as lazy
chunks), `eslint.config.mjs` (the `type:data-access` constraint),
`tools/scripts/scrub-board-fixture.mjs`, `tools/scripts/prime-environment.mjs`,
`.env.example` and `libs/shared/data-access/src/lib/interceptors.ts` at the
base; the platform's public `docs/control/orders/WO-221.jsonl` and
`WO-226.jsonl`, `scripts/lib/control.mjs` and `scripts/lib/off-ramps.mjs`
(`recordingSession`) at `49d8c4c364dc5986e8c76b4ac27a0110c380206f`; core's
`.claude/skills/dotln-*/SKILL.md`, `.claude/harness-manifest.json`,
`packages/skeleton/src/loadouts/*.ts` and `docs/product/02-domain-model.md`
(its mechanism table and mechanism hierarchy) at
`8bbdcbff67fe5cb9600bab24cec46ed0b0c726cb` and
`55699291a324265da49667dc90d5809d50f1fbfc`; design A and the UI vision at the
sections named above.

**Objective:** (the operator's session, WS-001 rule 24) at
`/machinery/replay`, opened by the Replay item in the Machinery menu group,
the operator sees one recorded order (WO-221, switchable to WO-226) as a
strip of beats left to right in recorded time, the distance between beats
proportional to the minutes between rows; above it the four role slots
(executor, verifier, repairer, reviewer) and the operator as a figure at the
edge; stepping the anchor fills a slot with the agent that made the next
row, labelled by harness, model and effort, with a hand-back card reading
pass, fail or no verdict; a refilled slot keeps the earlier occupant as a
ghost; opening an agent shows its declared obligation, the mechanisms it ran
with (its role's gems and supports by id, each with core's own statement,
and its prose sections by key, from core as it stood when the order ran) and
what it waited on; a shelf holds the operator's own ideas, each a titled
mechanism change (remove or add a gem or support, narrow the knowledge to
listed inputs, set a mechanism's rung, add a wait with its cause, replace a
prose section with the operator's own words); selecting an idea then an
agent redraws that agent's card and the use case's beats under the idea's
caption with the before as a ghost and a band saying presentation only,
nothing written (the caption names what the change shows in the use case and
says so when the beats are unchanged); a refused drop stays visible with its
reason; the operator's ideas and applied state persist in browser storage
and, when the local sink runs, every dropped idea is also appended to the
repository's ignored intake; nothing else leaves the browser. The operator
learns how the order's agents handed work to one another with the machinery
each had at the time and what one change to that machinery shows in the
order, and decides which mechanisms to tune next.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `/machinery` renders
WO-013's arriving page
(`libs/features/machinery/src/lib/containers/machinery-arriving-page/`), an
empty state whose message names this order and a link back to the board,
and `machineryRoutes` holds that one route. `ChildPaths` holds `Root`,
`Catalog` and `Reading` beside `BasePaths` in
`libs/shared/core/src/lib/paths/routes.ts`, and the Tools feature is the one
with child paths (`toolsRoutes`: a `''` parent whose `children` are keyed by
`ChildPaths`). The shell's menu (`apps/dotln/src/app/app.ts`) builds each
link's commands with `buildRoute` and marks the current link with
`routerLinkActive` and no exact matching; `apps/dotln-e2e/src/sub-apps.spec.ts`
asserts the menu's links and one `aria-current` per route, and every
whole-page visual baseline shows the menu. The app has no record reader,
fold, replay clock or copy of a control segment (`git grep` finds no
`control-event-lite` or `ImplementationReady` outside `docs/dotln`), and
`libs/shared/records`, `libs/shared/replay` and
`libs/features/machinery-data-access` do not exist. `EnvironmentConfig` has
no sink field; `tools/scripts/prime-environment.mjs` throws on any `DOTLN_`
key outside its ten (`Unrecognized DOTLN_ setting`) and `.env.example` opens
by saying its values become public browser configuration; `.gitignore` does
not ignore `docs/intake/`; the development server sets no host or port, so
its origin is `http://localhost:4200`; production excludes the mock worker
and the fixtures, and the catalog's committed data reaches production as
lazy chunks (`catalog-loader.ts`); a `type:data-access` library imports only
`layer:shared-data-access`, events, models, core and util
(`eslint.config.mjs`), so a feature's data-access library cannot import
`records`; `check:scripts` requires a `scripts.md` row for each npm script
and each `.mjs` file directly under `tools/scripts`; and an undeclared
ignored file refuses a release close in either checkout (the profile,
§What close deletes, retains or refuses). WO-046, sequenced ahead, replaces
the arriving page with its view of what core has and adds
`libs/features/machinery-data-access` (`CoreSnapshotStore`, `core-reading.ts`,
`src/data/core-snapshot.json`), `core-snapshot.ts` in `libs/shared/models`,
`MachineryFacade`, the miner `tools/scripts/core-snapshot.mjs` with its
`--check` in `check:fixtures`, `apps/dotln-e2e/src/machinery.spec.ts` and the
two documents this order extends; this order activates on the `main` that
holds it.

The platform's public segments at core
`49d8c4c364dc5986e8c76b4ac27a0110c380206f` (SHA-256 `WO-221.jsonl`
`3fc912a0353145d51532d602af051eead4ce23f7f8bacd425a7fc99e0daef700`,
`WO-226.jsonl`
`80ee59928e50f061e47e6a278d370e36abd91c0073fb0c9063e17fca4221b726`): WO-221
has 16 rows, 8 of them operator rows (the activation, three verification
requests, two repair requests, two final-review requests, none carrying an
actor), hand-backs at rows 2 (implementation, no verdict), 4 (verification,
fail), 6 (repair), 8 (verification, pass), 10 (final review, fail), 12
(repair, `subagents` mode), 14 (verification, pass) and 16 (final review,
pass), by three models on two harnesses. Its seven gaps after a hand-back,
from rows 2 to 3, 4 to 5, 6 to 7, 8 to 9, 10 to 11, 12 to 13 and 14 to 15,
are 5,269,494, 6,596,601, 99,153, 81,573, 125,939, 1,091,866 and 351,351
milliseconds by the rows' `recordedAt` stamps, shown to one decimal as 87.8,
109.9, 1.7, 1.4, 2.1, 18.2 and 5.9 minutes; five of the seven differ from
those forms by 1.5 to 2.8 seconds. The 87.8-minute gap followed the
implementation hand-back, which carries no verdict, and the 109.9-minute gap
the first verification's fail. The operator minutes (each hand-back to the
next request) total 13,615,977 milliseconds (226.93295 minutes), the worker
minutes (the activation or a request to its hand-back) 53,003,892
(883.39820), and the span 66,619,869 (1,110.33115). WO-226 has 6 rows, 3
operator rows, hand-backs at rows 2, 4 (verification, pass) and 6 (final
review, pass), no repair, two gaps after a hand-back of 18,962,551 and
1,903,881 milliseconds (316.0 and 31.7 minutes), operator minutes 20,866,432
milliseconds (347.77387 minutes), worker minutes 13,945,770 (232.42950) and a
span of 34,812,202 (580.20337). No row of either segment carries an
`ordinal` (the platform numbers a row by its line, `index + 1` in
`scripts/lib/control.mjs` at the pin) or a `recordingSession`, so
`actor.role` is absent from every row of both copies; each `actor` also
carries `harnessVersion` and `source`, and row 12 `raw`, which the copies
drop.

The last commit of core's `main` before each order's first row, by `git -C
<core> rev-list -1 --before=<stamp> 49d8c4c3`, is
`8bbdcbff67fe5cb9600bab24cec46ed0b0c726cb` (committed 2026-10-18T18:34:40Z,
before WO-221's first row at 2026-10-18T18:35:59.680Z) and
`55699291a324265da49667dc90d5809d50f1fbfc` (2026-10-22T02:08:29Z, before
WO-226's at 2026-10-22T02:09:57.819Z); neither carries a tag (`git describe`
reads `v0.84.0-5-g8bbdcbff6` and `v0.89.0-5-g55699291a`), and core's `main`
took no commit between either order's first and last row. At both commits
`.claude/harness-manifest.json` (SHA-256
`11161710c330ee1b0575250e1e323f9754971db261edfe27dfdd9fe8dfc4de9e` and
`ea0b79b756c29b6cbb5ea259562eadc08e532e3d5e4988636401ef0083d2054b`) has the
top-level shape WO-046 mines at its pin: three profiles, 33 installed
surfaces and three per-host residue entries holding ten items; the hooks
carry the same `runHarnessHook` configuration fields; `.codex/agents/` does
not exist; and there are six role skills (executor, planner, refuter,
release-close, reviewer, verifier; the router arrived later), whose Origin
stamps carry 19 ids for the executor and 13 for each other role, each skill
stating its supports as `Name: statement` lines and its feedback units as
`id: statement` lines. Core's loadout source
(`packages/skeleton/src/loadouts/*.ts`) declares one active mechanic,
`clean-room` (`activeMechanicId`), which core's domain model calls a skill
gem, and support facets, which it calls support gems: `contributor.permissions`
(`supportFacetId`) and, through `promptSupport`, the executor's six equipped
supports and the shared `process-cost` and `goal-alignment`; the other ids a
stamp carries are feedback units (`feedback.ts`) and the role's own facet.
No role's stamp carries `clean-room` or `contributor.permissions`: the
executor carries eight supports, every other role two (`process-cost` and
`goal-alignment`), and no role carries a gem. The operator has decided:
slots, select-then-apply, no generated cards, ideas saved to ignored intake.

**Design:**

- **Types** (`libs/shared/models/src/lib/machinery.ts`, `type:models`):
  `ControlEventLite { ordinal, type, recordedAt, workOrderId, actor?: {
  harness, model, effort, mode?, role? }, verdict?: 'pass' | 'fail' }` and
  nothing else, the operator's field list (`actor` is one composite object
  with exactly those keys, declared in the schema with
  `additionalProperties: false`; a slot label reads its three values as
  they are, and the reader never splits or derives them; `role` is one of
  `executor`, `verifier`, `reviewer`, `planner`, `refuter`,
  `release-close` and `operator`, kept from the role the platform's row
  records for its session, `recordingSession.role` in the kit's segment
  schema at v0.105.0, and absent where the row records none or records the
  kit's `unobserved` sentinel, which `recordingSession` in
  `scripts/lib/off-ramps.mjs` writes when no harness session was observed); `SlotId` (`executor`, `verifier`,
  `repairer`, `reviewer`); `Beat`, `Episode`, `OrderStrip` (beats,
  episodes, anchor, totals of operator and worker minutes, omissions; named a
  strip, not a scene, so that "scene" stays the scene engine's and the
  catalog's word);
  `MechanismChange` (`removeGem(id)`, `addGem(id)`, `removeSupport(id)`,
  `addSupport(id)`, `narrowKnowledge(inputs)`, `setRung(id, n)`,
  `addWait(minutes, cause)`, `replaceProse(sectionKey, text)`); `IdeaCard {
  id, title, by: 'operator', change: MechanismChange, appliesTo: SlotId[],
  caption, createdAt, status: 'draft' | 'applied' | 'did-not-stick', claims:
  'presentation-only' }`; `RoleMechanisms { role, gems: string[], supports:
  string[], others: { id, kind }[], proseSections: string[] }` and
  `OrderMachinery { source: { repository, commit }, gems: string[],
  supports: string[], roles: RoleMechanisms[] }`, both derived from the
  order's core snapshot (below), never copied by hand.
- **Records** (`libs/shared/records`, `scope:shared`, `type:data-access`,
  `@dotln-angular/records` and `/testing`): `scene-reader.ts` (a copy's
  rows to `ControlEventLite[]`, tolerant of an unknown `type`, which becomes
  an `unknown` beat and is never dropped); `concert-fold.ts` (rows to
  `OrderStrip`: the slot for a row is a fixed table by `type`, the
  implementation hand-back to the executor, a verification completion to the
  verifier, a repair completion to the repairer, a final-review completion
  to the reviewer, every request and the activation to the operator, else
  `unknown`, and a row whose `actor.role` is `planner`, `refuter` or
  `release-close` is an `unknown`-slot beat that names the role, never
  dropped (the slot table reads `type` and the role reads `actor.role`, so
  two rows whose other actor labels match are told apart); gaps from
  `recordedAt` differences; a refilled slot's earlier
  occupant kept as a ghost; a `mode: 'subagents'` actor flagged as a colony
  of unknown size); `apply-ideas.ts` (a pure fold of mechanism changes over
  a copy of the strip and of the order's machinery; a change is refused with
  its reason, the strip and the card left as they were, under the rules per
  kind below and whenever its `appliesTo` excludes the target slot or the
  target is an empty slot or the operator figure). The copies are production
  data, not test fixtures: `src/data/segments/order-221.json` and
  `order-226.json`, each loaded as its own lazy chunk through `import()` by
  `records-loader.ts`, the way `catalog-loader.ts` loads the catalog, and held
  with WO-007's call state by `RecordsStore`, whose load trinity is a
  `recordsEvents` group in `@dotln-angular/events`' data-access tier (rules
  8 and 16), so the production build, which excludes the mock worker and its
  fixtures, renders them; the schema
  `src/schema/control-event-lite-v0.schema.json`. The `/testing` entry point
  holds `provideRecordsTestKit()` and synthetic rows (an unknown `type`, and
  rows whose `actor.role` is `planner`, `refuter` or `release-close`, which
  no row of the copies carries). The two segment files are named by the
  platform order's number alone, never `WO-NNN`, because the target's
  outward lint refuses a launchpad identifier in any path the pull request's
  Change table lists (core's answer of 2026-10-24, item 1; the 2026-10-24
  second pass verified the names against the lint); the platform id stays
  inside each file as `source.order`.
- **Replay** (`libs/shared/replay`, `scope:shared`, `type:util`): `replayOn(events,
  scheduler, zero)` emitting each event at its `recordedAt` offset on an
  injected scheduler; `ReplayClock` (position, speed, `jumpTo`) over RxJS
  virtual time with a resolution parameter (one frame per recorded second by
  default); `toAsciiMarble`; `frames`. Takes a generic `{ recordedAt }` shape so
  it imports no models.
- **Copies.** `tools/scripts/reduce-control-segment.mjs <segment.jsonl>
  <out.json> --commit <sha>` keeps exactly the fields of `ControlEventLite`,
  numbering `ordinal` from 1 by line as the platform numbers a row, writes
  `{ schema: 'control-event-lite-v0', source: { repository:
  'DylanBWood/DotLn', commit, order }, rows }`, runs the scrub over every
  value in `rows`, each `actor` value included, which must read as a
  harness, model or effort label, or for `actor.role` as one of the role
  names the type lists (a value carrying `@`, a path separator, an absolute
  path by `assertScrubbed` of `scrub-board-fixture.mjs`, a dotted hostname,
  a run of 32 or more hexadecimal characters or a UUID shape fails), and
  prints PASS or FAIL without values. The `source` block is the reducer's own
  output from its arguments and lies outside the scrub, which would refuse
  the commit and the repository it must name; the schema's patterns validate
  it (a 40-character hexadecimal commit, the repository, the order). The
  committed copies carry the `actor` values the platform's rows recorded
  (harness, model and effort as observed labels, never a pin); the reducer is
  run by hand on each segment read with `git show` at a recorded commit of
  the platform's public repository, as the board fixture was captured, so
  the copies' sources are public and each copy's `source` block names the
  repository. `tools/scripts/check-record-fixtures.mjs` (Ajv against
  `control-event-lite-v0.schema.json` with `additionalProperties: false`,
  plus the scrub over the rows) wired into `check:fixtures`.
- **The machinery each agent had** (`libs/features/machinery-data-access`):
  WO-046's miner, run with `--core <git dir> --commit <sha> --out <file>` and
  no `--tag`, since neither commit carries one, at the last commit of core's
  `main` before each order's first row (`git -C <core> rev-list -1
  --before=<first recordedAt> 49d8c4c3…`), writes
  `src/data/core-snapshot-order-221.json` (core at `8bbdcbff…`) and
  `src/data/core-snapshot-order-226.json` (core at `55699291…`) beside
  WO-046's `core-snapshot.json`, in schema `core-snapshot-v0`; named by the
  platform order's number alone, as the copies are. `ReplayStore` loads the
  selected order's snapshot as its own lazy chunk through `import()`, as
  WO-046's store loads its snapshot, so the production build carries both,
  and `check:fixtures` runs the miner's `--check` over both. Where the miner
  refuses an input a commit lacks (`.codex/agents/` at both), it reads an
  absent directory as empty, and `tools/core-snapshot.test.mjs` gains that
  case. `order-machinery.ts` (pure) builds an `OrderMachinery` from a
  snapshot through WO-046's reading: per role, the ids the role carries (its
  Origin stamp's), its gems those whose kind is `activeMechanicId` (core's
  active mechanic, which core's domain model calls a skill gem), its
  supports those whose kind is `promptSupport` or `supportFacetId` (core's
  support facets, which it calls support gems), every other id (a feedback
  unit, the role's own facet, an `undeclared` id) under the kind the
  snapshot gives it, and its prose sections, `description` and each carried
  id whose statement the snapshot holds; and the snapshot's gems and
  supports. The repairer slot reads the executor role's entry, because the
  repairer is the executor role at `resume: fix`, which the executor skill's
  `description` states at both commits, and the agent card says so.
- **What each idea kind reads in the snapshot.** An idea applies to one
  agent, a slot's occupant or its ghost at a beat, and reads that agent's
  role entry in the order's snapshot; the operator's words gem and support
  name core's active mechanic and support facet. `removeGem(id)` and
  `removeSupport(id)` take an id among the agent's gems or supports, which
  then shows as the ghost; no role carries a gem at either commit, so every
  `removeGem` is refused with that reason. `addGem(id)` and `addSupport(id)`
  take an id not already on the agent: an id the snapshot declares of the
  other kind is refused, an id it declares of the same kind (`clean-room` is
  its one gem) shows with the statement the snapshot holds for it, or none,
  and any other id is the operator's own and shows as theirs.
  `narrowKnowledge(inputs)` names ids the role carries, of any kind, and the
  card keeps only those, the rest as the ghost; an empty list or an id the
  role does not carry is refused. `setRung(id, n)` names an id the role
  carries and a rung from 1 to 9 on core's mechanism hierarchy, and the card
  shows the id at that rung beside the surfaces and rungs the snapshot
  records for it, the before as the ghost; any other id is refused.
  `addWait(minutes, cause)` takes a positive whole number of minutes.
  `replaceProse(sectionKey, text)` names one of the role's prose sections,
  and the card shows the operator's words under the key with core's text as
  the ghost; any other key is refused. Only `addWait` moves the beats; every
  other kind redraws the card and the caption says the beats are unchanged.
- **Route and menu** (WS-001 rules 4, 11 and 22): `ChildPaths` gains
  `Replay = 'replay'`; `machineryRoutes` gains `{ path: ChildPaths.Replay,
  providers: [...], component: ReplayPage }` beside WO-046's entry, which it
  leaves as it is, the shape `toolsRoutes` uses for its child paths, and the
  feature still exports only its routes. The shell's `App` gains `readonly
  replay = buildRoute(BasePaths.Machinery, { child: ChildPaths.Replay })` and
  a Replay item (`shell.menu.replay`) directly after the Machinery link in
  the Machinery group, so no feature spells the address. The Machinery link
  keeps its label and target and is marked current on WO-046's page and not
  on `/machinery/replay` (`routerLinkActiveOptions` with `paths: 'exact'`
  and query parameters, matrix parameters and fragment ignored, while
  WO-046's page has no child path of its own), so each route marks one link.
  The replay is a child of `BasePaths.Machinery` and adds no `BasePaths`
  member; under WO-008's `routePermissions`, where a child takes its base
  path's list, it stays public.
- **Feature** (`libs/features/machinery` and
  `libs/features/machinery-data-access`, both extended beside WO-046's
  view): `replay-page` (container) over `ReplayFacade` (`vm = computed(() =>
  applyIdeas(fold(copy), orderMachinery(snapshot), applied))`); composites
  `beat-strip` (beats as buttons with pressed state; gaps as inline SVG
  widths with a floor so a one-minute gap stays visible; a text equivalent
  per gap), `slot-row` (four slots and the operator figure; ghosts as
  reduced-opacity figures with an earlier-occupant line), `agent-card`
  (harness, model and effort badge; declared obligation, the role's
  `description` in the order's snapshot; mechanisms as a readable list of
  names, the role's gems and supports by id, each with core's statement, the
  other ids it carries under the kind the snapshot gives, and its prose
  sections by key, under a line naming core's commit; waiting on),
  `idea-shelf` (the operator's cards; the new-idea form with a title, a
  change kind from a menu, its parameters and the target roles; no
  generated cards), `use-case-caption` (what the applied change shows in the
  use case: `addWait` moves the beats after its target by its minutes; every
  other change redraws the agent's card and the caption says the beats are
  unchanged), `sandbox-band`; mappers `declared-line`,
  `phase-glyph` (native emoji with a text equivalent), `gap-scale`; a layout.
  `ReplayStore` (SignalStore) loads the selected order's core snapshot with
  WO-007's call state and holds the applied ideas and the shelf with
  WO-007's `withPersistedState({ key: 'machinery.replay', select, restore })`
  under `dotln-angular.machinery.replay`; it imports no `records`, which a
  `type:data-access` library may not, and the facade composes it with
  `RecordsStore`; the strip itself derives from the copy and never
  persists. WO-046's `MachineryFacade`, `CoreSnapshotStore` and
  `dotln-angular.machinery.core` are not touched. Event groups in
  `@dotln-angular/events` by tier (rules 8 and 16): the snapshot's load
  trinity and the sink post's in the data-access tier, the page's events in
  one `ui` group. Order switch WO-221 and WO-226. Select-then-apply with the
  keyboard: pick a card, then a slot or an agent; no drag. Every string on
  screen is a message (rule 9): beat types, slot and role names, captions,
  the band, refusal reasons and the gap and total figures are keys under
  `machinery.replay.*` in `apps/dotln/public/i18n/en.json`, the menu item's
  label is `shell.menu.replay`, and none is hard-coded in TypeScript;
  harness, model and effort labels, mechanism ids and section keys are
  machine identifiers shown inside message frames (G3); the operator's own
  text (a title, a cause, replaced words, a typed id) is their input, shown
  as typed inside a message frame; core's statements are mined text,
  registered with the translator from the loaded snapshot as WO-046
  registers its own, under a scope per order, so a statement core changed
  between commits never replaces another; `tools/i18n-copies.test.mjs`
  asserts the feature's testing translations equal the app catalog's
  `machinery` block.
- **The idea sink** (`tools/idea-sink/idea-sink.mjs`, `npm run idea-sink`):
  a local Node process on `127.0.0.1` whose settings are command-line flags
  and nothing else: `--port` (default 4310), `--dir` (default
  `docs/intake/ideas/` in the DotLn-Angular checkout the sink runs from,
  never the launchpad's intake) and `--origin` (default
  `http://localhost:4200`, the development server's origin). It accepts
  `POST /ideas` only when the request's `Origin` is the allowed origin and
  its `Host` is the loopback address and port, and answers the CORS
  preflight `OPTIONS /ideas` from that origin alone, allowing `POST` and
  `Content-Type`, with `Access-Control-Allow-Origin` set to it on the post's
  response, because a JSON post from the development server to the loopback
  port is a cross-origin request the browser preflights; any other origin or
  host is refused with 403. It refuses a body over 16 KB with 413, never
  logs a body, and appends one JSON line per idea to `ideas-YYYY-MM-DD.jsonl`
  in the directory, creating it; it refuses to start when the resolved
  directory lies outside the Git root of the checkout the sink runs from,
  lies in no Git repository, is not ignored by the one that contains it
  (`git check-ignore -q <dir>` exits nonzero) or lies under `docs/control/`,
  so an idea never lands in a tracked path, a control directory, another
  repository or the launchpad. `.gitignore` gains `/docs/intake/`; nothing
  is added to `.env`, `.env.example` or `prime-environment.mjs`.
  `EnvironmentConfig` gains an optional `readonly ideaSinkUrl?: string |
  null`, and the app posts a dropped idea through its `HttpClient` when it is
  a string (development, `environment.ts`: `http://127.0.0.1:4310/ideas`;
  production, `environment.prod.ts`: `null`; the `mocked` build and the
  generated `local` profile leave it absent and never post); the drop is
  applied and persisted in browser storage first, then posted, and a failed
  post (the sink set but down) is one toast through WO-007's error store,
  from the `errorEvents.httpFailed` its error interceptor already
  dispatches, so nothing is lost and nothing blocks. The operator runs the
  sink beside `nx serve` from their own checkout, so the ideas land in that
  checkout's ignored intake and are not lost in a browser; because an
  undeclared ignored file refuses a release close in either checkout, the
  launchpad write-back adds `docs/intake` to the class's disposable output,
  under whose `judge-only` base policy the ideas in the base checkout stay.
- **Design brief** (WS-001 rules 25 and 29): the strip is a timeline
  instrument across the page's width, the gaps drawn as distance with their
  minutes beside them, the beats as glyphs in one phase palette; the four
  slots as figures above it in the one role palette the scene and the
  catalog share, a ghost at reduced opacity; the agent card as prose in the
  catalog's measure (what it was obliged to do, what it ran with, what it
  waited on) with the mechanisms as a readable list of names, never a
  definition-list grid; the idea shelf as rows; the sandbox band as text;
  nothing animated at rest. The comparison runs as the operator's eye doctor
  test: the first pair is the slots above a horizontal strip (A) against the
  slots beside a vertical one (B), one independent variable, the strip's
  axis, both built and rendered at about 2080 by 1460 and at 360 during
  execution and read at 3840 by 1620, presented as A then B with the round
  named in the question and both captions; the operator's preference makes
  the next pair, content and usability before cosmetic polish, until the
  operator says the process is done, and a preferred candidate alone is not
  acceptance; the decisions file records each round's pair and pick, the
  rejected implementation leaves the code when its round is decided (its
  screenshots and an implementation record under
  `docs/evidence/WO-016/design/` are the history), and a decided choice is
  not relitigated for this order. The operator may delay the rounds: the
  order then records the first pair without a pick and ships A, and the
  delayed rounds stay this order's own criterion, run later as exactly that
  and combined with nothing else.
- **Documents:** the target's `docs/dev-reference/architecture/machinery.md`
  and `docs/ai-reference/machinery-rules.md`, which WO-046 adds, gain the
  replay's sections: in `machinery.md` the records and replay libraries, the
  fold's slot table, the reducer and its field list, the two snapshots and
  why each is core at the last commit before its order's first row, what
  each idea kind reads in the snapshot and the rule per kind (only `addWait`
  moves the beats; every other kind redraws the card and the caption says
  the beats are unchanged), the idea sink with its flags and refusals, and
  what the replay claims and does not; in `machinery-rules.md`: copies carry
  the six fields and no path; the fold decides nothing and derives slots
  from the type table; an unknown type renders as unknown, never dropped; a
  drop changes a copy and claims presentation only; no idea card is
  generated from records; nothing writes a control record or core; the
  sink's settings are flags, never `.env`. `sub-apps.md` names the replay's
  route; the generated READMEs of `records` and `replay` and their testing
  entry points are replaced as rule 19 directs, and the machinery
  libraries' READMEs name the replay.

Rejected: reading the platform's resident over its loopback (axis: the
operator's decision that the app is not wired to core; the stopgap is a
scrubbed copy, the store comes later); reading each agent's mechanisms from
the launchpad's role skills at activation (axis: the machinery each agent had
at the time; those skills are the fork's at a later starter and carry a role,
the router, that did not exist when the rows were recorded, while core at the
last commit before each order's first row is what the order ran under);
replacing `/machinery` (axis: WO-046's view of what core has is the page
there; the replay is a second route of the same feature); generated idea
cards from records (axis: the operator's decision; the ideas are theirs);
drag and drop now (axis: select-then-apply first); the sink's port and
directory as `DOTLN_` variables in `.env.example` (axis: where a Node
process's settings live; `prime-environment.mjs` throws on an unlisted
`DOTLN_` key in `.env` and its values become public browser configuration);
the launchpad's intake as the sink's default (axis: the app's process writes
inside its own repository; the operator points the sink elsewhere by one
flag); episodes as the unit instead of slots (axis: the operator's words,
separate agents in their role slots today; the episode view is a later
toggle).

Live-run surfaces at the base: WO-006's served production build and
Storybook; WO-007's MSW worker; WO-013's menu and the arriving page at
`/machinery`; WO-014 and WO-019's catalog; WO-015's scene; WO-046's page,
snapshot and miner once it merges (none at `eb9d227`); core at
`49d8c4c3`, `8bbdcbff` and `55699291`, in the clone beside the launchpad and
on GitHub.

**Deliverables:** the types; the records and replay libraries with kits; the
reducer and the check; the two copies and the two core snapshots; the route,
the menu item and the replay page, facade and store; the idea sink and its
tooling test; the environment field and the `.gitignore` line; the e2e,
Storybook and visual changes; the two documents' sections; the launchpad's
disposable entry; `docs/evidence/WO-016/`.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-016: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, which holds WO-046's
   merge (`ls libs/features/machinery-data-access/src/data/core-snapshot.json
   tools/scripts/core-snapshot.mjs` lists both; if not, stop: the hard
   dependency is unmet), and that integrated commit is the baseline of every
   later comparison; then the route guard and activation as WO-005 step 1.
   Check: the decisions carry the integrated commit.
2. Generate `libs/shared/records` (`scope:shared,type:data-access`) and
   `libs/shared/replay` (`scope:shared,type:util`), each with a testing
   entry point, appending the commands to
   `docs/dev-reference/workspace/generator-log.md`; add `shared/records` and
   `shared/replay` to the list in `tools/scripts/check-foundation-types.mjs`.
   Check: `npx nx show projects` lists `records` and `replay`; `npm run
   typecheck:foundations` exits 0.
3. `machinery.ts` types exported through `public_api.ts`;
   `control-event-lite-v0.schema.json`; `reduce-control-segment.mjs`;
   `check-record-fixtures.mjs` wired into `check:fixtures`; their
   `scripts.md` rows (rule 26); `tools/record-copies.test.mjs`, a tooling
   test that the reducer drops every field outside the list, numbers
   `ordinal` from 1, keeps `recordingSession.role` as `actor.role`, leaves
   `actor.role` absent for the kit's `unobserved` sentinel and for a row with
   none, refuses any other role outside the named set, refuses an absolute
   path, a run of 32 or more hexadecimal characters and a UUID shape in a
   row value while writing the commit and the repository in `source`, and
   prints no input value on failure. Check: `npm run check:shared-types`,
   `npm run test:tooling` and `npm run check:scripts` exit 0.
4. The copies: from the core clone beside the launchpad when `git -C <clone>
   cat-file -e 49d8c4c364dc5986e8c76b4ac27a0110c380206f^{commit}` exits 0,
   otherwise a `git clone --filter=blob:none
   https://github.com/DylanBWood/DotLn` in the session scratch, otherwise stop
   and record the blocker (a copy is never invented), write each segment at
   that commit into the session scratch with `git show`, then reduce it to
   `libs/shared/records/src/data/segments/order-221.json` and
   `order-226.json` with `--commit` set to it; record in the decisions file
   the path used, the commands, each segment's SHA-256 and the row counts
   (16 and 6). Check: the digests equal the Observed gap's; `npm run
   check:fixtures` exits 0.
5. The snapshots: in the same clone, `git -C <core> rev-list -1
   --before=<the order's first recordedAt>
   49d8c4c364dc5986e8c76b4ac27a0110c380206f` for each order, then `node
   tools/scripts/core-snapshot.mjs --core <core> --commit <that commit> --out
   libs/features/machinery-data-access/src/data/core-snapshot-order-<n>.json`;
   the absent-directory case and `--check` over both as the Design states;
   record the commands, the commits and the printed digests. Check: the
   commits and each `.claude/harness-manifest.json` digest equal the
   Observed gap's; both runs print PASS; `npm run test:tooling` and `npm run
   check:fixtures` exit 0.
6. `scene-reader.ts`, `concert-fold.ts`, `apply-ideas.ts`, `records-loader.ts`
   and `RecordsStore` with its `recordsEvents` group, and the testing kit,
   with the specs of criterion 2. Check: `npx nx test records` exits 0;
   `npm run lint:hygiene` exits 0.
7. `replay`: `replayOn`, `ReplayClock`, `toAsciiMarble`, `frames`; a marble
   spec reproduces the WO-221 rows at their frames. Check: `npx nx test
   replay` exits 0.
8. In `libs/features/machinery-data-access`: `order-machinery.ts` and
   `ReplayStore` with `withPersistedState` under
   `dotln-angular.machinery.replay`, the snapshot loads, its event groups
   and its testing kit (rule 5). Check: `npx nx test machinery-data-access`
   exits 0 with criterion 3's role-entry specs and criterion 6's
   persisted-state specs over a fake storage; `npm run check:kits` exits 0.
9. Route and menu as the Design states, with a `routes.spec.ts` case that
   `buildRoute(BasePaths.Machinery, { child: ChildPaths.Replay }).commands`
   equals `['/', 'machinery', 'replay']`. Check: `npx nx test core` and `npx
   nx test dotln` exit 0.
10. Composites, mappers, layout, container, facade; the `machinery.replay.*`
    and `shell.menu.replay` messages and the testing translations; the
    statements' registration; stories `RecordedWO221`, `RecordedWO226`,
    `UnknownEventType`, `IdeaApplied`, and one story per layout candidate
    while its round is open. Check: `npx nx test machinery` exits 0; `npm
    run lint:components`, `npm run i18n:check` and `npm run check:templates`
    exit 0.
11. The idea shelf's new-idea form, select-then-apply, the ghost, the band,
    the caption, the refusal. Check: a facade spec applies `narrowKnowledge`
    to the verifier at beat 4 and the card's mechanism count falls while the
    ghost keeps the before and the caption says the beats are unchanged; a
    second spec applies `addWait` and the beats after the target move by its
    minutes; the per-kind specs of criterion 3 pass.
12. The idea sink process, `npm run idea-sink` and its `scripts.md` row,
    `.gitignore` entry for `/docs/intake/`, `ideaSinkUrl` on
    `EnvironmentConfig` (development string, production `null`), the post on
    drop with the toast on failure. Check: `tools/idea-sink.test.mjs` starts
    the sink on an ephemeral port with a temporary ignored directory, posts
    one idea and asserts one JSON line appended; a second post over 16 KB is
    refused with 413; a post whose `Origin` is not the allowed origin or
    whose `Host` is not the loopback is refused; the preflight is answered
    from the allowed origin alone; further tests start it on a tracked
    directory of a temporary repository, on an ignored directory outside the
    checkout's Git root, on a directory under `docs/control/` and from a
    directory in no Git repository and assert each refusal; a facade spec
    with the post failing asserts the idea is applied and present in the
    fake storage; `npm run test:tooling` and `npm run check:scripts` exit 0.
13. The first pair (A slots above a horizontal strip, B slots beside a
    vertical one) rendered at about 2080 by 1460 and 360 and read at 3840 by
    1620; the rounds, or the operator's deferral; the rejected
    implementation removed with its record. Check: criterion 11's file.
14. e2e: `apps/dotln-e2e/src/machinery-replay.spec.ts` with criterion 7's
    cases; the menu tests of `sub-apps.spec.ts` read the Replay link;
    `storybook.spec.ts` gains the new stories; the whole-page visual
    baselines regenerated with the reason named in the pull request. Check:
    `npx nx e2e dotln-e2e` and `npx nx e2e-visual dotln-e2e` exit 0; `npm
    run typecheck:e2e` exits 0.
15. Production: criterion 8's build, greps and `npm run check:bundle`.
    Check: the build exits 0 and each grep prints what criteria 5 and 8
    state.
16. The walkthrough: the executor performs the Objective's session in the
    served production build, saves one screenshot per step at 360, 768,
    1440, about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-016/walkthrough/` and writes
    `docs/evidence/WO-016/walkthrough.md` with the dated steps and what the
    caption said at each drop. Check: the files exist.
17. Documents: the replay's sections of `machinery.md` and
    `machinery-rules.md`, `sub-apps.md`, pointers, `conventions.md` and the
    library READMEs. Check: `grep -c "generated from records"
    docs/ai-reference/machinery-rules.md` prints at least 1.
18. Dependency check as WO-015 step 15. Check: prints nothing.
19. Gate plain and review. Check: passing rows, no tracked-byte mutation.
20. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation gains the replay (the records fold, the replay clock, the
    snapshots at the orders' commits and the replay page) and §What close
    deletes, retains or refuses lists `docs/intake` with its reason;
    `dotln.config.json` adds `docs/intake` to
    `classes.angular-nx-monorepo.disposable`; WS-001's delivery states
    updated by the final review. Check: `npm run test:docs`. Then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/order-replay`, the title `:sparkles: Replay a recorded order
    in the machinery view`, `docs/evidence/WO-016/` and
    `docs/final-reviews/WO-016/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run check:scripts`, `npm run check:templates`, `npm run catalog:check`,
`npm run test:tooling`, `npm run i18n:check`, `npm run typecheck:e2e`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`, `npx nx e2e-visual
dotln-e2e`; in the launchpad order worktree `npm run test:docs`; then the
target gate plain and review once each.

**Acceptance criteria (all required)**

1. `libs/shared/records/src/data/segments/order-221.json` and
   `order-226.json` validate against `control-event-lite-v0.schema.json` with
   `additionalProperties: false` over the fields `ordinal`, `type`,
   `recordedAt`, `workOrderId`, `actor`, `verdict`, carry a `source.commit`
   of `49d8c4c364dc5986e8c76b4ac27a0110c380206f` and no absolute path (`npm
   run check:fixtures` exits 0), a spec asserts `order-221.json` carries 16
   rows and `order-226.json` 6, the reducer's tooling test proves a row value
   carrying a run of 32 or more hexadecimal characters or a UUID shape fails
   the scrub while the `source` block's commit passes, and `ls
   libs/shared/records/src/data/segments | grep -ciE '^wo-'` prints 0.
2. `npx nx test records` exits 0 with specs asserting: the WO-221 fold has 16
   beats, 8 operator beats and seven gaps after a hand-back, each equal to
   the millisecond to the difference of the `recordedAt` stamps of the
   copy's rows 2 and 3, 4 and 5, 6 and 7, 8 and 9, 10 and 11, 12 and 13, and
   14 and 15, the first following a hand-back with no verdict, and operator
   and worker totals and a span equal to the sums and the difference the
   spec computes from the same stamps; the WO-226 fold has 6 beats, 3
   operator beats and the gaps of rows 2 and 3 and of rows 4 and 5,
   computed the same way; an unknown `type` yields an `unknown` beat; two
   rows of one `type` whose harness, model, effort and mode match, one with
   `actor.role` `planner` and one with none, fold to an `unknown`-slot beat
   naming the planner and to the type's slot respectively, and a `refuter`
   row and a `release-close` row each yield an `unknown`-slot beat naming
   its role; the verifier slot carries one ghost after its refill; and
   `applyIdeas` refuses a card whose `appliesTo` excludes the target with a
   reason while the strip stays unchanged.
3. **The machinery at the time.**
   `libs/features/machinery-data-access/src/data/core-snapshot-order-221.json`
   and `core-snapshot-order-226.json` validate as `core-snapshot-v0` (`npm
   run check:fixtures` exits 0 with the miner's `--check` over both) and
   name in `source.commit` `8bbdcbff67fe5cb9600bab24cec46ed0b0c726cb` and
   `55699291a324265da49667dc90d5809d50f1fbfc`, each equal to what `git -C
   <core> rev-list -1 --before=<the order's first recordedAt>
   49d8c4c364dc5986e8c76b4ac27a0110c380206f` prints; run from the core clone
   beside the launchpad or a fresh clone of
   `https://github.com/DylanBWood/DotLn`, `node tools/scripts/core-snapshot.mjs
   --core <path> --commit <that commit> --out <scratch file>` prints PASS and
   `cmp` exits 0 against each committed snapshot (where neither clone is
   reachable at verification, the verifier records the reproduction
   untested with the reason and judges it from the executor's recorded run
   in the decisions file); `npx nx test machinery-data-access` exits 0 with
   specs on both committed snapshots asserting that each role's entry lists
   exactly the ids its role carries there, its gems those of kind
   `activeMechanicId`, its supports those of kind `promptSupport` or
   `supportFacetId` and every other id under its own kind, with its prose
   sections, and that the repairer slot reads the executor's entry; `npx nx
   test machinery` exits 0 with specs asserting that the repairer's card
   states that the repairer runs the executor role at `resume: fix`, and,
   on the verifier of WO-221's fourth beat, that `removeGem` is refused with
   its reason, `addGem` of `clean-room` and `removeSupport` of `process-cost`
   are applied with the before as the ghost, `narrowKnowledge` and `setRung`
   naming an id the role does not carry are refused, and `replaceProse` is
   refused for a key the snapshot does not hold for that role and applied
   for `description`; and the verifier reads each role skill's Origin stamp
   at both commits with `git -C <core> show
   <commit>:.claude/skills/dotln-<role>/SKILL.md` and records in the VER
   report, beside the spec's, that each role's ids equal the snapshot's.
4. A spec with empty storage asserts the shelf renders no card at first
   render and that every card the form creates carries `by: 'operator'` and
   `claims: 'presentation-only'`, so no card is generated from records; `npm
   run i18n:check` and `npm run check:templates` exit 0, every string the
   replay adds on screen being a message under `machinery.replay.*` or
   `shell.menu.replay` in the translation files and none hard-coded in
   TypeScript (rule 9); and a spec asserts the agent card renders core's
   statements through the translator from the scope registered for the
   order's snapshot.
5. The tooling test for the idea sink passes (`npm run test:tooling` exits
   0): one post appends one JSON line to a temporary ignored directory; a
   body over the Design's size limit is refused with 413 and appends
   nothing; a request whose `Origin` is not the allowed origin or whose
   `Host` is not the loopback address and port is refused with 403; the
   preflight from the allowed origin is answered with the allow headers and
   from another origin refused; and the sink refuses to start on a directory
   that is not Git-ignored, that lies outside the Git root of the checkout
   it runs from or under `docs/control/`, or from a directory in no Git
   repository; `environment.prod.ts` sets `ideaSinkUrl` to `null`, `git diff
   --exit-code <integrated base> -- .env.example
   tools/scripts/prime-environment.mjs` exits 0, and `grep -rl
   "127.0.0.1:4310" dist/apps/dotln/browser` prints nothing after `npx nx
   build dotln --configuration=production`.
6. The persisted-state spec asserts every key written starts with
   `dotln-angular.machinery.replay` and no other storage, cookie or network
   write occurs except the sink post when `ideaSinkUrl` is set, a spec with
   that post failing asserts the dropped idea is applied and persisted and
   one `errorEvents.httpFailed` dispatched, a spec seeding
   `dotln-angular.machinery.replay` with a value that does not parse asserts
   the shelf renders empty and the strip renders; and
   `grep -rlE "from 'node:|from \"node:|require\(" libs/shared/records/src libs/shared/replay/src libs/features/machinery/src libs/features/machinery-data-access/src --include='*.ts' | grep -v spec`
   prints nothing.
7. `npx nx e2e dotln-e2e` exits 0 and includes, in
   `apps/dotln-e2e/src/machinery-replay.spec.ts`: sixteen beat buttons, four
   role slots and the operator figure on `/machinery/replay`; the executor
   slot filled at the second beat; a ghost in the verifier slot after the
   eighth; an idea created, applied and redrawn with the ghost, the
   presentation-only band and a caption naming what changed; a refused drop
   visible with its reason; the idea present after a reload; the keyboard
   path across the beats and the shelf; the Replay link in the Machinery
   menu group directly after Machinery and the one link marked current on
   `/machinery/replay`, while `/machinery` still renders WO-046's page with
   Machinery the one link marked current (WO-046's `machinery.spec.ts`
   unchanged and passing); axe at the board spec's threshold; no horizontal
   overflow at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620; and `npx
   nx e2e-visual dotln-e2e` exits 0 with each regenerated baseline named in
   the pull request with its reason.
8. `npx nx build dotln --configuration=production` exits 0, after which
   `grep -rl "control-event-lite-v0" dist/apps/dotln/browser` and `grep -rl
   "8bbdcbff67fe5cb9600bab24cec46ed0b0c726cb" dist/apps/dotln/browser` each
   print a file and `npm run check:bundle` passes;
   `docs/dev-reference/architecture/machinery.md` and
   `docs/ai-reference/machinery-rules.md` carry the replay's sections and the
   rules file states that the fold decides nothing and that no idea card is
   generated from records (`grep -c "generated from records"
   docs/ai-reference/machinery-rules.md` is at least 1); `npm run
   check:scripts` exits 0 with the reducer's, the copy check's and the
   sink's rows; and `package.json`'s `dependencies` keys equal the
   integrated base's.
9. `node scripts/target-gate.mjs WO-016 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight line ran before the first full gate.
10. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
    session in the served production build: open Replay in the Machinery
    menu on WO-221; step the anchor to the second beat and read the
    executor's card; step past the eighth and find the verifier's ghost;
    open an agent and read its obligation, its mechanisms with core's
    statements as core stood when the order ran, and what it waited on;
    create an idea in the shelf, apply it to the verifier and read the
    caption and the band; apply a refused drop and read its reason; reload
    and find the idea; switch to WO-226. The VER report carries a `##
    Walkthrough` section with the dated steps and names each step's
    screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-016/walkthrough/`, and states in the verifier's own
    words what the applied idea changed in the use case. The criterion is
    met only when every step completed and that statement is present; a UI
    issue at about 2080 by 1460 or 3840 by 1620 fails it, and one at another
    size is a boarded follow-up.
11. `docs/evidence/WO-016/design/comparisons.md` records the first pair (A
    slots above a horizontal strip, B slots beside a vertical one) rendered
    at about 2080 by 1460 and 360, and either every round with its pick and
    the operator's word that ended them, the removed candidate's files named
    in the decisions file and `ls` on each printing nothing, or the
    operator's deferral with the pair unpicked and A shipped, the rounds
    remaining this order's own criterion, run later as exactly that (rule
    25).

**Evidence gate:** the gate rows, the recorded command outputs, `docs/evidence/WO-016/README.md`, `design/`, `docs/evidence/WO-016/walkthrough.md` and its screenshots, and `docs/evidence/WO-016/host-qualification.md`.

**Known issues and carry-ins:** The base is `eb9d227`, WO-039's merge on the
target's `main`, set by the 2026-11-09 pass; the earlier pin, `bc9133e`, was
the empty initial commit, so a comparison with the base's files had nothing
to compare with, and every such comparison here reads the integrated base
step 1 records, which holds WO-046's merge. WO-046, filed after this order
and sequenced ahead of it, replaces the arriving page this order was written
to replace and adds the `machinery-data-access` library, the two documents
and `machinery.spec.ts` this text had named for itself; this order adds the
replay beside that view under its own names and storage key and leaves
WO-046's page, `MachineryFacade`, `CoreSnapshotStore` and
`dotln-angular.machinery.core` as they are. The copies are a stopgap the
operator named: when the mining store exists (candidate C1), the copies
become a route behind the same loader or are deleted. The strip's axis is
time, never cost, and a gap includes idle time; the view labels a long gap
as nobody dispatched, never as the operator idle, because the record has no
presence. The prose sections are listed by key; replacing one applies the
operator's own words to the copy and never to core or a kit file. Each
snapshot is core at the last commit of its `main` before the order's first
row, and core's `main` took no commit while either order ran. Starter
v0.96.1's plan gate no longer advises on this order's own launchpad record
paths (core's answer of 2026-10-24, item 1); they stay as the kit names them
and the publish command's body file must not name them. From receipt 008
(the 2026-10-24 pass's refutation), carried into this text by the 2026-10-24
second pass: only `addWait` moves the use case's beats and the caption says
so for every other change (the Objective, the `use-case-caption` composite
and step 11); criterion 3 reads the role stamps instead of hard-coding a
starter and its counts, now core's stamps at the two commits through the
snapshots, which a rerun of the miner reproduces; and the records types are
`OrderStrip`, not `ConcertScene`, so that "scene" is not overloaded across
the fold, the scene engine and the catalog. From receipt 009 (the second
2026-10-24 pass's refutation), carried into this text by the 2026-10-25
pass: `actor` is one composite the schema declares and the reducer's scrub
screens each of its values (the types, the reducer, criterion 1); the
repairer slot reads the executor's entry and its card says why, and the e2e
counts four role slots and the operator figure (the machinery each agent
had, step 14, criteria 3 and 7); the sink refuses a directory that is not
Git-ignored, and a drop while the sink is down is applied and persisted
before the post (the sink, step 12, criteria 5 and 6). From receipt 011 (the
2026-10-26 pass's refutation), carried into this text by the 2026-10-28
pass: the sink refuses a directory outside the Git root of the checkout it
runs from (the sink, step 12, criterion 5); the verifier recounts the stamp
ids independently (criterion 3); a planner, refuter or release-close actor
is an `unknown`-slot beat naming the role (the fold, criterion 2); the scrub
fails a run of 32 or more hexadecimal characters and a UUID shape (the
reducer, criterion 1); the layout is chosen through the rounds of rule 25.
From the 2026-11-01 pass's criteria adversary (its R4), carried into this
text by the 2026-11-01 second pass: the reduced `actor` dropped any role, so
the fold could not name a planner, refuter or release-close row; `actor` now
keeps the row's recorded session role as an enum, and the types, the
reducer, step 3 and criterion 2 change together. The same pass replaced the
inherited exact-tip base guard of step 1 with an ancestor check and the
fast-forward (that pass's adversary R1). Corrected by the 2026-11-09 pass
(D17): criterion 2 held WO-221's seven gaps within one second of
their one-decimal forms, which five of the seven miss by 1.5 to 2.8 seconds
at core `49d8c4c3`, and WO-226's two gaps miss theirs by 2.6 and 1.9
seconds, so the criterion asserts each from the copy's own stamps; the
agent card read `role-mechanisms.json`, hand-copied from the launchpad's
role stamps at activation, which are the fork's machinery at a later
starter and not what the recorded agents ran with, so it reads core's
snapshot at each order's commit; the copies sat under a `/testing` entry
point while the walkthrough runs on the production build, which excludes
fixtures, so they are production data loaded as lazy chunks; no segment row
carries an `ordinal`, so the reducer numbers it; the scrub ran over every
string, `source` included, whose commit and repository its own rules
refuse; the sink's port and directory were `DOTLN_` variables documented in
`.env.example`, which `prime-environment.mjs` refuses in `.env` and whose
values become public browser configuration, so they are flags; a JSON post
from the development origin is preflighted, and the sink accepted `POST`
alone; its "never a control directory" had no rule refusing
`docs/control/local/`, which is ignored and inside the root; a `.gitkeep` in
an ignored directory is never committed, so the sink creates the directory;
an undeclared ignored file refuses a release close in either checkout, so
`docs/intake` joins the class's disposable output; and criterion 4's grep
read `libs/features/machinery/src/testing/fixtures`, which no step creates.
This order activates only on a launchpad whose starter carries core WO-221's
`--draft` form; the draft pull request and its workflow runs are a
final-review obligation read from `docs/evidence/WO-016/preview-pr.json`,
never a criterion. `Target release classification: minor` and `Target
release notes: reviewed` were set by the 2026-10-24 pass under WO-012's
declared policy.

**Non-goals:** a live connection to any resident or to core; editing core;
any change to WO-046's page, `MachineryFacade`, `CoreSnapshotStore` or
`dotln-angular.machinery.core`; drag; generated idea cards; agents in concert
beyond one order's slots (the fleet, the blackboard room and the flow
instruments of the run are later members, candidate C5); the digital twin's
lane (WO-017); any write outside browser storage and the local sink; a sink
setting in `.env` or `.env.example`; a token axis.

**Operator-review assumptions:** the operator accepts the six-field copy as
the stopgap and core at the last commit before each order's first row as the
machinery its agents had, runs the idea sink beside the dev server from their
own checkout when they want ideas saved, judges the first pair at their sizes
and ends the rounds in their own words or defers them, and reads the one
draft pull request before final review, which the final publish reuses.
