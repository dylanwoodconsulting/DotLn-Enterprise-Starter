# WO-018 — The toy shelf: the run's nineteen toys carried in full as records whose text goes through the message system, read on a shelf under Tools, each toy's tools followed into the catalog, and the next toy picked

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `toys.ts` (the `Toy` record) to the models,
`toy-v0.schema.json`, `libs/shared/catalog/src/toys/toys.json` (the run's
nineteen toys in full) and the `toys` message scope
`apps/dotln/public/i18n/toys/en.json`, the loader's toys chunk, the toys
store and its two event groups, `ChildPaths.Toys` and `ChildPaths.Toy`, the
shelf and the toy page with their facade, composites and stories, the Toys
link in the menu's Tools group and on the Tools home,
`tools/scripts/catalog/check-toys.mjs` with `npm run toys:check` inside
`check:fixtures` and `tools/toys.test.mjs`, the e2e cases, the visual
baselines the menu link changes, `docs/evidence/WO-018/tool-resolution.json`
and the documents (`catalog.md` §Toys, `catalog-rules.md`, `sub-apps.md`,
`scripts.md`); about 30 source files plus nineteen records; adds no runtime
dependency. Removes nothing. Wall-clock: about 5 h 0 min to 8 h 0 min of
executor work plus the design rounds and the fixed cycle; unknown until run.
Context bytes: WS-001 rules 9, 23 to 26 and 29 and §The app and its
sub-apps; the catalog's loader, store, reading and filters, the Tools
routes, home, facades and catalog page and the models' `toolbox.ts` (about
77 KB at `eb9d227`); `catalog.md` (44 KB) and `catalog-rules.md` (14 KB);
`toys.jsonl` and the design files its anchors name (unknown until run); this
order; about 200 KB for the executor. Commands added in the target:
`npm run toys:check` (with its `-- --source <toys.jsonl>` mode). Tokens:
unknown until run. Steps: 14. Re-mints: none. Refutations paid before this
pass: five (receipts 008 to 012, on the texts before the 2026-11-01 second
pass's authorized amendment, WO-018-D001, which the next planning pass's
refutation judges); this pass's receipt.
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
after the catalog pipeline, map The Art of War and design toys for the six
mined sources that have none; the app's data comes from public mining into
its own store. Design files of the run this order and WO-043 build from,
read at the run's folder on this machine (core's ignored intake, read-only;
digests pin what was read): `digest/queue-and-rules.md` §1.2 items 15 and 17
(the map pass and the six-source toy design, each sized under the
twenty-agent rule; SHA-256
`b60a7607797cd781c94dc2b872e5e478ab1eb18b42964e967d1f45269e2beb31`),
`out/maps/README.md` (the row schema a map follows; SHA-256
`9b6c905f7a2772e5f4eb60d66f66527629467e0b549f586232870c16cc3ad5e0`),
`out/angular/README.md` §Sources with no toy (SHA-256
`4810fd3337dc3fedaaf3e37f1fe2a0841e79a91bc73dd9db38833d104223762c`) and
`out/angular/toys.jsonl` (the nineteen toys: id, rank, slice, purpose,
horizon, design anchor, sources, tools, records replayed, question,
evidence, what each graduates into, first slice, dependencies; SHA-256
`411e486e086218e9988e26c2f290dd302115518b3c049279fef3793e3efea0fb`). This
order builds from `toys.jsonl` and the design files its anchors name, which
step 2 pins at read; WO-043 builds from the other three. The
run is the operator's own research and lies outside the clean room (WS-001
rule 23 as corrected on 2026-10-26); the quarantine files stay closed
because they were quarantined for employer material. Planner-synthesized by
the 2026-10-24 planning pass ([planning document](../planning/passes/mining-run-orders-2026-10-24.md)
§6 D10 and §9); amended by the 2026-10-24 second pass and the 2026-10-25
pass for receipts 008 and 009. Rewritten by the 2026-10-26 pass
([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D8) on
the operator's direction of that day (capture SHA-256
`9ec78ddbc267936d59fc7fe88b4a8b9c8d42d4692979db31be5129c817fd72a6`): the
"never a passage" overlap check, the "mapper's own words" rule and the
"ids and short titles only" reading of the nineteen toys rested on a rule
the operator never gave and go; the toys enter in full; the map rows carry
the public text's maxims where a maxim is the concept; the shelf is a page
the operator reads to pick the next toy, accepted by use (rule 24) and
briefed for its look (rule 25). Amended by the 2026-10-28 pass
([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6
D4 and D6): the design comparison reads as the operator corrected it in
WO-019, with the shelf's first pair named, and receipt 011's items are
written in: the fan-out stops by decision when its token total passes
WO-014's recorded order total (its item (a)); the operator's ruling on the
run's toy designs is recorded at activation (b); criterion 6 gains the
production build within the declared budgets with the chunk sizes beside
WO-019's (c); the three meanings of "store" are named (d). Amended by the
2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D9):
the order is cut to the toy shelf, and The Art of War's map, the six new
toys with their tools, both worker fan-outs and their carry-ins move to
WO-043; the base is `eb9d227` in place of a commit with an empty tree; the
edge on WO-017 becomes reference-only, the patience lane linking to the
twin's route only where the base has it; the toys' text goes through the
message system (rule 9); the toys live beside `studies/` because the
catalog check refuses any other file in `data/`; the run's tool references
are resolved into a recorded list beside the run's values, and the page
says what it shows for one that does not resolve; the run's files gain a
fallback; the first pair renders at about 2080 by 1460 and 360 with the
deferral route admitted, the walkthrough reads at the operator's sizes, and
the new script gains its `scripts.md` row. Opaque identifier, not a
priority.
**Depends on:** WO-014 merged (hard: the `Tool` schema and the catalog the
toys' tools resolve against); WO-019 merged (hard: the reading a toy's tools
link into, the Tools home and the catalog check as it leaves them; the
reading's address `/tools/catalog/<id>` landed with WO-020, merged as well);
WO-017 reference-only (non-blocking: the patience
lane's status links to the twin's route only where the integrated base
carries it; step 1 reads `BasePaths` at activation, and nothing here waits
for a later order).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-014",
    "relation": "hard",
    "reason": "the Tool schema and the catalog the toys' tools resolve against"
  },
  {
    "workOrderId": "WO-019",
    "relation": "hard",
    "reason": "the reading the toys' tools link into, the Tools home and the catalog check as it leaves them"
  },
  {
    "workOrderId": "WO-017",
    "relation": "reference-only",
    "reason": "the patience lane links to the twin's route only where the integrated base carries it; the shelf depends on no later order"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 3, 5, 8, 9, 10, 15, 16, 22 to 26 and 29; §The app and its
sub-apps, G3, G6 and §Design direction); `docs/repositories/dotln-angular.md`
(§Run the app and its checks, §Catalog and concept studies);
`docs/operator/README.md`; the target's
`docs/dev-reference/architecture/catalog.md` (§Data and provenance, §Loading
and state, §Reading and studying, §The record),
`docs/ai-reference/catalog-rules.md`,
`docs/dev-reference/architecture/sub-apps.md`,
`docs/dev-reference/workspace/scripts.md` and
`docs/dev-reference/workspace/storybook.md` (the baseline refresh);
`toys.jsonl` at the path and digest named above.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
the menu's Tools group and sees Toys beside Catalog; the Tools home says
how many toys are designed and how many built. They open Toys and see the
nineteen toys of their research run on a shelf, grouped by the five
purposes the run gave them (agents in concert, the toolbox and the toy
scene, the operator-model testbed, the planning and riff surface, flow and
the constraint) or in the run's own rank order, as the comparison rounds
decide; each row shows the toy's title, its source works, its one-line
question and its status (designed, built, graduated, did not stick). They
open The Twenty and read, in a measure set for reading, what the toy is
for, what they would see on screen, the question it answers, the evidence
it would produce, what it would graduate into, the records it replays and
the tools it needs: each tool the catalog has is a link into its reading,
and a tool the run named that the catalog lacks reads as the run wrote it,
marked as not in the catalog; its status says built and links to the
scene. They open The patience lane and read the same; its status says
designed, with no link, until the twin's route exists. They filter the
shelf to one source and then to designed toys, and decide which to build
next; the toy page says how to say so (a GitHub issue on the platform's
repository, the graduation route). What the operator learns is what every
toy in the run would show them; what they decide is the next one to build.

**Observed gap (dated 2026-11-09 at `eb9d227`):** the app has no toy record
type, schema, data or page: `libs/shared/models/src/lib/` holds
`app-state.ts`, `board.ts`, `concept-study.ts` and `toolbox.ts`, and
`ChildPaths` in `libs/shared/core/src/lib/paths/routes.ts` is `Root`,
`Catalog` and `Reading`. The menu's Tools group links the catalog alone
(`apps/dotln/src/app/app.ts`), and the Tools home lists the works and the
last reading (`tools-home.ts`). `BasePaths` is `Board`, `Scene`, `Machinery`
and `Tools`: the scene The Twenty became is at `/scene`, and the twin's
route does not exist. The catalog's data directory admits only the eight
batch checkpoints and the summary: `readCheckpoints` in
`tools/scripts/catalog/check-catalog.mjs` fails with `Unexpected catalog
data file.` on any other file there (lines 207 to 212), and its pinned
totals assume six works and 3,463 rows. Record text reaches the screen
through Transloco's lazy scopes, which `MessageCatalog`
(`libs/shared/i18n/src/lib/message-catalog.ts`) loads as the studies'
`studyAifg/` to `studyRxjs/` scopes do, and `check-study-messages.mjs`
holds the studies' records and scopes to each other; the catalog's mined
rows are the one surface still outside the message system, and rule 9's
exemption covers only them. The run's `toys.jsonl` carries the nineteen
toys in full with their question, evidence, graduation path, tools and
sources; whether its tool references equal catalog ids, name a map file
and line, or name a concept by title is unknown until run, and so is how
many of them the catalog has.

**Design:**

- **Toy records** (`libs/shared/models/src/lib/toys.ts`, exported through
  `public_api.ts`; `libs/shared/catalog/src/schema/toy-v0.schema.json`;
  `libs/shared/catalog/src/toys/toys.json`, beside `studies/` because the
  catalog check refuses any other file in `data/` and a toy is not a tool
  checkpoint). One record per toy, in two origins the closed schema
  separates. `run-2026-10-22` carries every field of the run's row (id,
  rank, slice, purpose, horizon, design anchor, sources, tools, records
  replayed, question, evidence, what it graduates into, first slice and
  dependencies) under the record's names, mapped one to one by a table in
  `check-toys.mjs` that refuses a source field it does not map. `this-app`
  is a toy this app designs: a scene type (`SceneTypeId`), a question, its
  metrics and its tool ids, which WO-043 fills with no change of schema; a
  fixture record proves the branch here. Every record also carries the
  app's own fields: `title` (the toy's name as the run gives it, from the
  row where it has a name field and otherwise from the heading at its
  design anchor; the decisions record which), `youWouldSee` (the scene
  paragraph of the toy's design file at the anchor the row names), `status`
  (`designed`, `built`,
  `graduated`, `did-not-stick`), `route` (a `BasePaths` value for a built
  toy, else null), `origin`, and `toolIds`, one catalog id or null per
  entry of `tools`, kept beside the run's values and never replacing them.
- **Text through the message system** (rule 9; G3). Every string a toy page
  shows is a message. The record holds keys, `toys.<toy id>.<field>` with a
  list's entries by position, for the run's prose fields, the app's `title`
  and `youWouldSee`, and each entry of `sources`, `tools` and
  `dependencies` the page names, whose English text is the run's value for
  it; the English text sits in the lazy scope
  `apps/dotln/public/i18n/toys/en.json`, loaded through `MessageCatalog`
  with the shelf. Identifiers stay data beside the keys: `id`, `rank`,
  `designAnchor`, the run's values of those three lists, `toolIds` and
  `route`. `toys:check` refuses a key a record names that the scope lacks
  and a key the scope carries that no record names, as
  `check-study-messages.mjs` does for the studies, and its parity mode
  compares the run's text with these English messages. A
  resolved tool's catalog title is a row of the mined catalog and sits
  under rule 9's exemption until WO-035 lands.
- **The run's tools in the catalog.** The import resolves each entry of a
  toy's `tools` against the catalog at the integrated base by one rule,
  tried in order: the entry equals a catalog id; it names a map file and
  line that the `batches` table in `check-catalog.mjs` maps to an id
  (`<prefix>:<line>`); it equals the title of exactly one catalog row.
  Otherwise it stays unresolved (null).
  `docs/evidence/WO-018/tool-resolution.json` lists every entry with the
  run's value, the id or null and the rule that resolved it, and each
  record's `toolIds` equals its entries. On the toy page a resolved tool is
  a link to its reading, `/tools/catalog/<id>`, named by its catalog title;
  an unresolved one reads as the run wrote it, with the words "not in the
  catalog" (`tools.toys.notInCatalog`) and no link. The run's values are
  never rewritten, so parity holds whatever resolves.
- **Status and routes.** The Twenty is `built` with `route` `BasePaths.Scene`.
  The patience lane is `built` with the twin's route only when the
  integrated base's `BasePaths` carries it (WO-017 merged); otherwise it is
  `designed` with a null route and its page shows no route link. Every other
  run toy is `designed`. Step 1 records which held.
- **Loading and state** (rules 8, 10, 16). `CatalogLoader` gains `toys()`,
  one lazy chunk (`../toys/toys.json`) cached as the summary is.
  `ToysStore`, in `libs/shared/catalog/src/lib/toys-store.ts` and provided
  with the catalog by `provideCatalog()`, loads it through a `toyEvents`
  data-access trinity with call state; `toysPageEvents` (ui) carries the
  shelf's and the toy page's intents (opened, retry, filters changed); each
  ships its test kit. The Tools home reads the counts by status from the
  same chunk and still loads no work's chunk; the toy page names each
  resolved tool by its title from the chunks of the works its tools come
  from, through the loader's `load(work)`.
- **The shelf and the toy page** (`ChildPaths.Toys = 'toys'` and
  `ChildPaths.Toy = 'toys/:toyId'` in core; containers `toys-page` and
  `toy-page` over a `ToysFacade` in `libs/features/tools/src/lib/facades/`;
  composites for the shelf's rows and the toy's reading). The shelf lists
  rows (title, sources, the one-line question, status) in the form the
  rounds choose, with source and status facets through the house filter
  menu as the catalog's facets use it; in either form a toy of origin
  `this-app` sits after the run's toys in a group of its own, under its
  source, so WO-043's six need no change to the shelf. The toy page reads
  as prose in the catalog's reading measure and type scale: purpose, what
  you would see,
  the question, the evidence, what it graduates into, the records it
  replays, the tools (links, or the run's words as above), the
  dependencies, the status with a link to its route when built, and the
  graduation route sentence (pick a toy by filing a GitHub issue on the
  platform's repository naming its id). An unknown toy id says so, as an
  unknown reading does. The menu's Tools group lists Toys after Catalog,
  and the Tools home lists Toys beside Catalog with the counts of designed
  and built toys.
- **Design brief** (WS-001 rule 25 under §Design direction): the shelf and
  the toy page use the catalog's type scale, measure and work colours (a
  source's colour where its work has a `--dotln-work-<slug>` token, the
  accent otherwise); the shelf is a list of rows with the question legible
  at a glance, never a card grid; the toy page is prose with the tools as
  links and no label-value grid (G6); the status is a word, not a badge
  grid; nothing animated at rest. The first pair: A, the shelf grouped by
  the run's five purposes; B, one list in the run's rank order; one
  variable, the grouping. Both are rendered at about 2080 by 1460, the
  operator's centre window, and at 360, read at 3840 by 1620, and presented
  A then B with the round named in the question and both captions; the
  operator's preference makes the next pair, content and usability before
  cosmetic polish, until the operator says the process is done; a
  preferred candidate alone is not acceptance; the rejected implementation
  leaves the code when its round is decided, its screenshots and an
  implementation record under `docs/evidence/WO-018/design/` the history;
  nothing is relitigated for this order. The operator may delay the rounds
  to a dedicated A/B testing pass: the order then records the first pair
  without a pick, ships A, keeps B's implementation record and screenshots
  under `design/`, and carries the rounds as a follow-up that the planning
  pass filing that A/B testing pass allocates to it. A comparison session
  runs under the kit's dispatch bound, with rule 25's route when the
  operator says the session runs as long as it needs.
- **The run's files and their fallback** (rule 23). `toys.jsonl` is read at
  the run's folder and its SHA-256 compared with the pin; each design file
  the nineteen anchors name is read there and its path and SHA-256 recorded
  in the evidence README before any `youWouldSee` is written. A missing
  file, or `toys.jsonl` at another digest, stops the import before any toy
  is written: the executor records the observed digest (never the content)
  in the decisions and asks the operator in the session for the file at its
  pinned digest or for their word to take the file as it is; that word is
  captured in ignored intake and cited by digest, and the observed digest
  then replaces the pin in the decisions, the parity run and the evidence
  README. With neither, the order stops for a planning pass. No quarantine
  file is opened.
- **The check** (rule 26). `tools/scripts/catalog/check-toys.mjs`,
  `npm run toys:check`, runs inside `check:fixtures` after `studies:check`:
  the schema, unique ids, every message key against the scope both ways,
  and every non-null `toolIds` entry against the catalog's checkpoints.
  `--source <toys.jsonl>` verifies the source's SHA-256, that the records of
  origin `run-2026-10-22` carry exactly the source's ids, and that every
  source field equals its record value, prose through its English message.
  It earns a gate place because the records and the scope change by hand
  and a dangling key or tool id would otherwise reach the page;
  `scripts.md` gains its row and the `check:fixtures` row names it.
- **Documents:** `docs/dev-reference/architecture/catalog.md` gains §Toys
  (the record and its two origins, the message scope, the resolution rule,
  the shelf, the status ladder, the graduation route) and its §Loading and
  state names the toys chunk; `docs/ai-reference/catalog-rules.md` gains the
  rules (a toy enters with its full design; its text is messages; the run's
  values are never rewritten and the resolution sits beside them);
  `docs/dev-reference/architecture/sub-apps.md`'s Tools row names
  `/tools/toys` and `/tools/toys/<toy id>`.

Rejected: the nineteen toys as id and short title only (axis: the rule that
reading rested on was never the operator's, and a shelf of titles is the
hollow page again); `toys.json` in the catalog's `data/` with the check
taught to admit it (axis: a toy is not a tool checkpoint, and the check's
refusal of a stray file protects the catalog's inventory); rewriting the
run's tool references to catalog ids (axis: parity with the run; the
resolution sits beside the run's values); toy text kept as data outside the
message system (axis: rule 9, whose exemption is the mined catalog rows'
alone); linking the patience lane to `/twin` ahead of the route (axis: a
link to a route the base lacks, and a dependence on a later order); The Art
of War, the six new toys and both fan-outs in this order (axis: one outcome
per order; WO-043 carries them on this shelf).

Live-run surfaces at the base: WO-006's served production build and
Storybook; the menu, the Tools home, the catalog's reading at
`/tools/catalog/<id>` and the scene at `/scene` (WO-013 to WO-019, present
at `eb9d227`); the twin's route is absent at `eb9d227`.

**Deliverables:** the toy type, schema, records and message scope; the
loader chunk, the store and its events; the routes, the shelf, the toy page
and the menu and home links; the check, its npm script and its tooling
test; the e2e cases and the refreshed baselines; the four documents;
`docs/evidence/WO-018/` with the README, `tool-resolution.json`, the design
record, `walkthrough.md` and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-018: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1; record in the decisions file the
   operator's ruling of 2026-10-26 that the run's toy designs and the works
   they reference lie outside the clean room (WS-001 rule 23; capture
   SHA-256 `9ec78ddb…`), the warrant for carrying `toys.jsonl` and the
   design anchors as data, and whether the integrated base's `BasePaths` in
   `libs/shared/core/src/lib/paths/routes.ts` carries the twin's route.
   Check: the decisions carry the integrated commit, the ruling and the
   route reading.
2. The run's files, under the Design's fallback: `shasum -a 256` over
   `toys.jsonl` at the run's folder; read each design file the anchors
   name; record every path and SHA-256 read in
   `docs/evidence/WO-018/README.md`, and each source field's name and value
   type (never a value) in the decisions. Check: the printed digest is the
   pin, or the fallback's decision and the operator's cited word are
   recorded.
3. `libs/shared/models/src/lib/toys.ts` (exported), `toy-v0.schema.json`
   with both origins; `tools/scripts/catalog/check-toys.mjs` and
   `npm run toys:check` in `package.json`, appended to `check:fixtures`;
   `tools/toys.test.mjs` with fixtures under `tools/lint-fixtures/catalog/`
   (a record naming a tool id the catalog lacks; a key the scope lacks; a
   scope key no record names; a `this-app` record that passes; for the
   source mode, a synthetic source with a toy dropped, a value changed and
   an unmapped field); the `scripts.md` rows for `npm run toys:check` and
   `npm run check:fixtures`. Check: `npm run test:tooling` and
   `npm run check:scripts` exit 0.
4. The nineteen records in `libs/shared/catalog/src/toys/toys.json` and
   their messages in `apps/dotln/public/i18n/toys/en.json`, every field
   from the source row and `youWouldSee` from the paragraph at its anchor.
   Check: `npm run toys:check` exits 0; `npm run toys:check -- --source
   <the run's toys.jsonl>` prints PASS, its command and output recorded in
   the evidence README.
5. The resolution: each run toy's `tools` entries resolved by the Design's
   rule into `toolIds`; `docs/evidence/WO-018/tool-resolution.json`; the
   README records how many resolved and how many did not. Check:
   `npm run toys:check` exits 0, and the resolution file has one entry per
   entry of every run toy's `tools`.
6. Status and routes: The Twenty `built` with `BasePaths.Scene`, the
   patience lane by step 1's reading, every other run toy `designed`; a
   spec in `libs/shared/catalog` asserts that every built toy's `route` is
   a `BasePaths` value, The Twenty's is `BasePaths.Scene`, and a toy with a
   null route is not built. Check: `npx nx test catalog` exits 0.
7. Loading and state: `toys()` on `CatalogLoader` in
   `libs/shared/catalog/src/lib/types.ts` and its chunk in
   `catalog-loader.ts`; `ToysStore` in `toys-store.ts`, added to
   `provideCatalog()`; `toyEvents` under
   `libs/shared/events/src/lib/data-access/` and `toysPageEvents` under
   `libs/shared/events/src/lib/ui/`; their test kits. Check:
   `npx nx run-many -t test -p catalog events` exits 0; `npm run check:kits`
   and `npm run lint:hygiene` exit 0.
8. `ChildPaths.Toys` and `ChildPaths.Toy`; the two routes in
   `libs/features/tools/src/lib/tools.routes.ts`; `ToysFacade`; `toys-page`
   and `toy-page`; the shelf and toy-reading composites (candidate A
   first); the facets; the menu link in `apps/dotln/src/app/app.ts`; the
   Tools home's Toys line and counts in `tools-home.ts`; `tools.toys.*` keys
   in `apps/dotln/public/i18n/en.json`; stories `Shelf`, `ToyBuilt`,
   `ToyDesigned`, `ToyUnresolvedTool` and one per shelf candidate while its
   round is open; component specs that render, from fixtures, a resolved
   tool as a link and an unresolved one with `tools.toys.notInCatalog` and
   no link, and a `this-app` toy after the run's toys in its own group
   under its source in each candidate. Check: `npx nx test tools` exits 0;
   `npm run i18n:check` and
   `npm run lint:components` exit 0.
9. The first pair (A grouped by purpose, B in rank order) rendered at about
   2080 by 1460 and 360 and read at 3840 by 1620; the rounds, or the
   operator's word delaying them; the rejected implementation removed with
   its record. Check: `docs/evidence/WO-018/design/comparisons.md` records
   the pair.
10. e2e `apps/dotln-e2e/src/toys.spec.ts`: the menu and the Tools home show
    Toys; `/tools/toys` lists the nineteen toys; a source filter narrows
    the shelf and the status filter narrows it to designed toys; The
    Twenty's page shows its question and what you would see, links a
    resolved tool into `/tools/catalog/<id>` and its status into `/scene`;
    an intercepted `toys` scope whose every value carries a visible prefix
    shows the prefix on every field the record supplies on The Twenty's
    page and on the shelf's titles and questions; an unknown toy id says so;
    axe; no horizontal overflow at 360, 768, 1440, about 2080 by 1460 and
    3840 by 1620. Then the visual baselines the menu link changes,
    refreshed on macOS with the command `storybook.md` documents
    (`npx nx e2e-visual dotln-e2e -- --update-snapshots=all`), each changed
    screenshot read before commit. Check: `npx nx e2e dotln-e2e` and
    `npx nx e2e-visual dotln-e2e` exit 0.
11. The walkthrough: the executor performs the Objective's session in the
    served production build, saves one screenshot per step at 360, 768,
    1440, about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-018/walkthrough/` and writes
    `docs/evidence/WO-018/walkthrough.md` with the dated steps and, for
    three toys, what each would show in the executor's words; the verifier
    repeats the session independently for criterion 1. Check: the files
    exist.
12. Documents: `catalog.md` §Toys and §Loading and state,
    `catalog-rules.md`, `sub-apps.md`. Check: `grep -n "^## Toys"
    docs/dev-reference/architecture/catalog.md` prints the heading and
    `grep -c "full design" docs/ai-reference/catalog-rules.md` is at least
    1.
13. Dependency check as WO-015 step 15; `npx nx build dotln
    --configuration=production` and `npm run check:bundle`, the toys
    chunk's size recorded in the evidence README; gate plain and review.
    Check: passing rows, no tracked-byte mutation.
14. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation, §Catalog and concept studies, gains the toy record, the
    `toys` scope, the store and the shelf; WS-001's delivery states updated
    by the final review. Check: `npm run test:docs`. Then the publish,
    review and records steps as WO-007 steps 15 to 17, with the branch
    `feat/toy-shelf`, the title `feat: add the toy shelf with the run's
    nineteen toys`, `docs/evidence/WO-018/` and
    `docs/final-reviews/WO-018/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run check:fixtures`, `npm run toys:check`, `npm run test:tooling`,
`npm run i18n:check`, `npm run check:scripts`, `npm run check:bundle`,
`npx nx e2e dotln-e2e`, `npx nx e2e-visual dotln-e2e`; in the launchpad
order worktree `npm run test:docs`; then the target gate plain and review
once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
   session in the served production build: open Toys from the menu; open
   The Twenty and follow a tool into the catalog's reading and its status
   into the scene; open The patience lane; filter the shelf to one source
   and to designed toys; and, where `tool-resolution.json` records an
   unresolved tool, open a toy that names one and read how it is named. The
   VER report carries a `## Walkthrough` section with the dated steps and
   names the screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by
   1620 under `docs/evidence/WO-018/walkthrough/`, and states in the
   verifier's own words what each of three opened toys would show, as read
   from the page alone. Met only when every step completed and that
   statement is present; a UI issue at about 2080 by 1460 or at 3840 by
   1620 fails the order, and one at another size is a boarded follow-up.
2. **The records.** `npm run toys:check` exits 0: every record in
   `libs/shared/catalog/src/toys/toys.json` validates against
   `toy-v0.schema.json`, every message key a record names is in
   `apps/dotln/public/i18n/toys/en.json` and the scope carries no key that
   no record names, and every non-null `toolIds` entry is a catalog id;
   `tools/toys.test.mjs` proves that a record naming a tool id the catalog
   lacks, a key the scope lacks and a scope key no record names each fail
   the check, and that a `this-app` fixture record with a scene type, a
   question, metrics and tool ids passes it.
3. **Carried in full.** `npm run toys:check -- --source <the run's
   toys.jsonl>` prints PASS against the file whose SHA-256 is
   `411e486e086218e9988e26c2f290dd302115518b3c049279fef3793e3efea0fb`, or
   against the digest the operator's word accepted under step 2 as the
   decisions record it: the records of origin `run-2026-10-22` carry
   exactly the source's ids, and every source field equals its record
   value, prose through its English message. Its command and output are
   recorded in `docs/evidence/WO-018/README.md`, which also lists every run
   file read with its path and SHA-256 beside the launchpad's read
   observation for the quarantine path (the harness journal's row count,
   or `unobserved` where the host kept no attributable rows). The tooling
   test proves that a dropped toy, a changed value and a source field the
   table does not map each fail the mode. Where the verifier's host has no
   copy of the file at that digest, the recorded command and output and the
   tooling test stand as the evidence.
4. **The tools in the catalog.** `docs/evidence/WO-018/tool-resolution.json`
   lists every entry of every run toy's `tools` with the run's value, the
   catalog id or null and the rule that resolved it, and each record's
   `toolIds` equals its entries; step 8's component specs render a resolved
   tool as a link to `/tools/catalog/<id>` named by its catalog title, an
   unresolved one as the run's text with `tools.toys.notInCatalog` and no
   link, and a `this-app` toy after the run's toys in its own group under
   its source.
5. **Status and routes.** The Twenty is `built` with `route`
   `BasePaths.Scene`; The patience lane is `built` with the twin's route
   when the integrated base's `BasePaths` carries it and otherwise
   `designed` with a null route, as the decisions record step 1's reading;
   step 6's spec passes, so every built toy's route is a `BasePaths` value
   and no toy with a null route shows a route link.
6. **Every toy string through the message system (rule 9).**
   `npm run i18n:check` exits 0, and step 10's case with the intercepted
   `toys` scope shows its prefix on every field the record supplies on The
   Twenty's page and on the shelf's titles and questions.
7. **The pages.** `npx nx e2e dotln-e2e` exits 0 with step 10's cases, axe at
   the board spec's threshold and no horizontal overflow at 360, 768,
   1440, about 2080 by 1460 and 3840 by 1620; `npx nx e2e-visual dotln-e2e`
   exits 0 against the refreshed baselines; `grep -rlE
   "<dl|dotln-key-value-list" libs/features/tools/src` prints nothing.
8. **The look (rule 25).** `docs/evidence/WO-018/design/comparisons.md`
   records the first pair (A grouped by the run's five purposes, B one list
   in the run's rank order), each rendered at about 2080 by 1460 and at
   360, and then either every later round with its pair and pick, the
   decisions file recording the operator's word that ended the rounds and
   naming the removed candidate's files, `ls` on each printing nothing; or
   the operator's word delaying the rounds to a dedicated A/B testing pass,
   with the first pair recorded without a pick, candidate A shipped, B's
   implementation record and screenshots under `design/`, and the rounds
   recorded in the decisions as a follow-up.
9. **Build.** `npx nx build dotln --configuration=production` exits 0 within
   the declared budgets with the toy pages and the toys chunk lazy under
   Tools, `npm run check:bundle` passes, and `package.json`'s
   `dependencies` keys equal the integrated base's.
10. **Documents and scripts.** `docs/dev-reference/architecture/catalog.md`
    carries the heading `Toys`; `docs/ai-reference/catalog-rules.md` states
    that a toy enters with its full design and that its text is messages
    (`grep -c "full design" docs/ai-reference/catalog-rules.md` is at least
    1); `docs/dev-reference/architecture/sub-apps.md`'s Tools row names
    `/tools/toys`; `docs/dev-reference/workspace/scripts.md` has a row for
    `npm run toys:check`, and `npm run check:scripts` exits 0.
11. `node scripts/target-gate.mjs WO-018 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-018/README.md`, `docs/evidence/WO-018/tool-resolution.json`,
`docs/evidence/WO-018/design/`, `docs/evidence/WO-018/walkthrough.md` and its
screenshots, and `docs/evidence/WO-018/host-qualification.md`.

**Known issues and carry-ins:** The base is DotLn-Angular's `main` at
`eb9d227` (WO-039's merge); step 1 fast-forwards the target worktree to
`main` as it finds it. From the 2026-11-01 pass's criteria adversary (its R1
and R9), carried into this text by the 2026-11-01 second pass: step 1's
base guard is an ancestor check and the fast-forward, and the nineteen
imported toys are checked for parity with the run's `toys.jsonl` (step 4,
criterion 3), because an origin count and non-empty fields admit invented
replacements. Every run toy step 6 does not mark built stays designed;
building one is a later member the operator picks from the shelf
(candidate C5). The Art of War's map, the six new toys for the sources the
run has no toy for, their tools, both worker fan-outs and the carry-ins of
receipts 008 to 011 about them are WO-043's, which adds its six records to
this shelf with no change to `toy-v0`. From receipt 011, kept here: the
operator's ruling on the run's designs is recorded at activation (step 1);
the production build within the declared budgets is criterion 9's; "store"
has three meanings here, the committed data the app ships (this order's
records), the mining store that stays candidate C1 of 2026-10-24, and the
Tools feature's SignalStores (this order's `ToysStore`); the shelf's form is
chosen through the rounds of rule 25. The side orders WO-035 and WO-044
change the Tools feature too (the catalog loader and the Tools home); the
later of two to publish integrates the target's `main`. Starter v0.96.1's
plan gate no longer advises on this order's own launchpad record paths;
they stay as the kit names them and the publish command's body file must
not name them. This order activates only on a launchpad whose starter
carries core WO-221's `--draft` form; the draft pull request and its
workflow runs are a final-review obligation read from
`docs/evidence/WO-018/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` were set by
the 2026-10-24 pass under WO-012's declared policy.

**Non-goals:** building any of the toys; The Art of War, the six new toys
and their tools (WO-043); the commander scene; a live agent; the graduation
route's issue export (candidate C4); the catalog's search controls
(WO-019-D017); the mining store and the app's API (candidate C1).

**Operator-review assumptions:** the operator accepts the run's toy rows as
the shelf's records, carried in full with their text as messages, and a
tool the catalog lacks shown as the run wrote it; judges the first pair and
ends the rounds in their own words or delays them to an A/B testing pass;
and reads the one draft pull request before final review, which the final
publish reuses.
