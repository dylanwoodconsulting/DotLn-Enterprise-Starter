# WO-045 — The grid family and the A* study: the pathfinding chapter made drawable by a `grid` family that builds a study's frames from its data in one builder over the engine's own search, the study record's version step that admits it, A* stepped across a grid, the scene inspector's link to a tool's study, and the two avoidance studies made to demonstrate the avoidance the scene now runs

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/features/tools/src/lib/studies/grid.ts` (`gridModel`: a
grid example and the reader's parameters in, the `grid` family's frames out,
the search run by WO-036's `pathfinding.ts` over a `graph.ts` grid built from
the example's cells) and its spec, `GridStudyModel` in the family union of
`study-model.ts`; the `grid` family under
`libs/features/tools/src/lib/composites/study-visuals/grid/` (the composite,
its template and styles, the pure `grid-drawing.ts` with its spec, the
composite's spec, the `StudyGrid` stories) and its case in the study
composite's `study.html`; `concept-study-v2.schema.json` beside the
unchanged v0 and v1, `grid` in `visualFamilies` and the v2 literal in
`ConceptStudy` (`libs/shared/models/src/lib/concept-study.ts`), with
`catalog-loader.ts`, `tools/scripts/catalog/check-studies.mjs` and the
catalog test kit's record builder accepting v1 and v2; the A* study: the
record `libs/shared/catalog/src/studies/aifg/a-star.json`, the module
`libs/features/tools/src/lib/studies/pathfinding/a-star.ts` (its example as
data and a model that returns `gridModel`'s result) with `a-star.spec.ts`,
its `study-models.ts` entry, its messages in
`apps/dotln/public/i18n/studyAifg/en.json` and the testing copy
`libs/features/tools/testing/src/lib/study-en.json`, its row in
`studies-summary.json`; the Collision avoidance study's comparison, spec and
messages; the wall study's simulation, model entry, moments, comparison
chart, spec and messages; the scene inspector's study line
(`inspector-mapper.ts`, `unit-inspector.html`, a `scene.inspector` message
and its copy `scene-en.json`); e2e cases and the regenerated
`scene-flocking-*.png` baselines; the documents (`catalog.md` §The record
and §The families, `catalog-rules.md`, `scene.md` §The list of tools). About
35 source files; adds no runtime dependency and no tool script. Removes the
wall study's own ray cast (`castWallRay`) and avoidance step. Wall-clock:
estimated at about 4 h 0 min to 6 h 0 min of executor work plus the two
critics, the design rounds and the fixed cycle, an estimate and not a
measure; unknown until run. Context bytes: the builders `flow.ts` (14 KB)
and `rxjs/marbles.ts` (16 KB) with an EIP study that feeds one, the `flow`
family's composite (48 KB), the two avoidance studies (39 KB and 34 KB),
`check-studies.mjs` (15 KB), `catalog-loader.ts` and the v1 schema (13 KB),
`catalog.md` (44 KB) and `catalog-rules.md` (14 KB), measured at `eb9d227`;
WO-036's `graph.ts` and `pathfinding.ts`; the catalog's Chapter 4 rows;
WS-001 rules 9, 25, 27, 29, 30 and 31; WS-002 rules 6 and 7; this order;
about 400 KB for the executor, an estimate. Commands added in the target:
none. Tokens: unknown until run. Steps: 15. Re-mints: none. Refutations
paid: this pass's receipt.
**Nomination provenance:** split from WO-036 by the
[2026-11-09 pass](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md)
(D6), carrying WO-036's provenance for the parts it moved: the operator's
follow-up of 2026-11-04 during WO-028 asking that pathfinding, obstacles and
walls be planned and not forgotten (ignored capture
`docs/intake/notes/wo028-scene-navigation-followup-2026-11-04.md`, SHA-256
`fcb33759c95fb20b77ee2bf2f48cec61a6cac1215948bcd16386448d33636186`;
WO-028-D006; register row `FUP-2c1a53924446e9dd`); the 2026-11-04 pass's
NoOp on the pathfinding chapter's research, reopened by a road order that
lands a family drawing a graph search (WS-002 rule 6); register row
`FUP-592e538095eaead9` (the inspector's link to a tool's study), allocated
to WO-036 by the
[2026-11-05 pass](../planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md)
(D5) and moved here; the two gaps WO-034's verifier boarded in the wall
study (WO-034-D013, register row `FUP-4e24208e45d27a1d`); and WO-028-D009's
ask that the Collision avoidance study's comparison be kept as the honest
regression of the engine's head-on policy. The builder-first family is
WS-001 rule 31 as the 2026-11-09 pass (D3) states it. Planner-synthesized.
Opaque identifier, not a priority.
**Depends on:** WO-036 merged (hard: `pathfinding.ts` and `graph.ts`, which
the builder runs, the wall avoidance and head-on policy the two avoidance
studies demonstrate, and the inspector this order extends). WO-040 merged
(hard: it reshapes the Collision avoidance and wall studies' presentation
modules and specs and edits `studyAifg/en.json` and `study-en.json`, all of
which this order edits).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-036",
    "relation": "hard",
    "reason": "the engine's pathfinding module and tile graph the grid builder runs, the wall avoidance and head-on policy the two avoidance studies demonstrate, and the scene inspector this order extends"
  },
  {
    "workOrderId": "WO-040",
    "relation": "hard",
    "reason": "it reshapes the Collision avoidance and wall studies' presentation modules and specs and edits the AI for Games study messages, files this order edits"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 9, 15, 24, 25, 26, 27, 29, 30 and 31; §The app and its
sub-apps, the paragraph on a concept as a place to study an idea, G1, G2,
G3, §Design direction); `docs/workstreams/WS-002-concept-research.md`
(rules 3, 6 and 7); `docs/product/concept-study.md`;
`docs/repositories/dotln-angular.md` (§Run the app and its checks, §Run
content workers, §Catalog and concept studies); the target's
`docs/dev-reference/architecture/catalog.md` §Studies (§The record, §The
models, §The families, §The composite, §The check and the coverage),
`docs/ai-reference/catalog-rules.md`, `docs/dev-reference/architecture/scene.md`
§The list of tools; `flowModel` in `libs/features/tools/src/lib/studies/flow.ts`
and `marbleModel` in `studies/rxjs/marbles.ts` with
`studies/eip/aggregator.ts` as a study that feeds one; WO-036's Design in
this launchpad; WO-034-D013 and WO-028-D009 in the target's `docs/dotln/`;
the catalog's AI for Games rows of Chapter 4 (`libs/shared/catalog/src/data/tools-aifg-a.json`).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
the scene, chooses A* in the rail's `ways` group, and the inspector's
definition ends with "read the study"; they follow it to the A* reading,
where a small grid shows a start, a goal and a wall of blocked cells; they
step the search and watch the frontier grow cell by cell, the closed cells
filling behind it, the text beside the drawing naming the cell just
expanded and how many wait on the frontier, until the path appears; they
set the heuristic to zero and step again, and the frontier spreads evenly
as Dijkstra's does, expanding more cells for the same path. They go back to
the scene, choose Collision avoidance, read its study and open its
comparison: the plain closest-approach rule leaves two bodies sent exactly
head on overlapping, and the scene's head-on policy parts them. They open
Obstacle and wall avoidance's study, choose the straight-ahead delivery and
find its moments in time order, and its clearance comparison shows the two
traces parting round the wall's end. What the operator learns is how A*
chooses the next cell and what its heuristic buys, and that the studies show
the avoidance the scene runs; what they decide is which pathfinding concepts
the research track studies next, now that the grid can draw them.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `visualFamilies` in
`libs/shared/models/src/lib/concept-study.ts` and the `visual.family` enum
of `concept-study-v1.schema.json` name six families (`motion`, `timeline`,
`marbles`, `flow`, `states`, `relations`); five have a composite under
`composites/study-visuals/` and `relations` is WO-024's; none draws a grid
or a graph. `check-studies.mjs` compiles validators for v0 and v1 and
refuses a shipped record that is not v1 (line 264); `catalog-loader.ts`
refuses a record whose schema is not v1 (line 63); `ConceptStudy.schema` is
the literal `'concept-study-v1'`. The catalog holds one hundred studies (AI
for Games 40, EIP 20, PoEAA 20, RxJS 20); Chapter 4 Pathfinding has 76 rows
and none is studied. Two families are fed by one builder each, `marbleModel`
(`studies/rxjs/marbles.ts`, line 381) and `flowModel` (`studies/flow.ts`,
line 315), so a stream or messaging study is its example as data, while each
movement study hand-writes a presentation module. The scene inspector shows
a tool's definition and no link to its study, though each of the sixteen
rail tools has a study, as do Collision avoidance (`aifg-a:134`) and
Obstacle and wall avoidance (`aifg-a:137`), which WO-036 brings to the
rail. The Collision avoidance study's simulation calls the engine's `avoid`
(line 144), and `collision-avoidance.model.spec.ts` pins the exact head-on
zero and the overlap (lines 137 to 157), the honest record of WO-028-D009's
blind spot; WO-036 leaves `avoid` so and adds the scene's policy beside it.
The wall study builds its own ray cast (`castWallRay`) and avoidance step in
`obstacle-and-wall-avoidance.simulation.ts`, re-exported by its model entry,
where `catalog-rules.md` (line 99) asks a study to call the scene engine's
function where it has the behaviour, which it has once WO-036 lands; and
WO-034-D013's two gaps stand: with the delivery straight ahead the moment
buttons run Ray first hits, Ray misses again, Smallest clearance and End of
run, out of time order (`momentsOf` lists the miss before the smallest
clearance whatever their steps), and the comparison chart plots both
clearances on the full axis, where the 0.2-unit correction is under 2% of
its height. The two avoidance studies' presentation modules and model specs,
`studyAifg/en.json` and `study-en.json` are files WO-040 edits.

**Design:**

- **Builder first.** A `grid` study is data passed to one family builder,
  as a stream study is passed to `marbleModel` and a messaging study to
  `flowModel`. `studies/grid.ts` exports `gridModel(example, parameters, t)`:
  the example names the grid's size, its blocked cells and cell costs, the
  start and the goal, the heuristic the reader's input selects, the moments
  by expansion and the message keys for its labels; the builder builds the
  graph with WO-036's `graph.ts` from those cells, runs WO-036's A* in
  `pathfinding.ts` with its per-expansion trace, and returns the family's
  frames (each cell's state, the open and closed sets and the frontier at
  that expansion, the path once found), each frame's text equivalent, note
  and worked step (the expanded cell's cost so far, estimate and total),
  translated at the boundary through `StudyTranslate`. The search is the
  engine's, never the study's (catalog rule: call the scene engine's
  function where it has the behaviour). The A* module holds its example and
  a `model` that returns `gridModel`'s result, and declares no frame, text
  equivalent or drawing of its own. So the shape a grid study takes lives in
  one place, a later grid study is a data file, and the standards passes
  read the builder rather than a presentation per study (WS-001 rule 31;
  WS-002 rule 6).
- **The `grid` family.** `composites/study-visuals/grid/` is one composite
  that takes the builder's model and a step index and draws an SVG: cells
  with their costs and the blocked cells, the open and closed sets and the
  frontier at the step, the found path through cell centres, start and goal
  marked; geometry in a pure `grid-drawing.ts` with its own spec; tones from
  the families' shared tones; a cell's token letters through the house
  symbol template; a text equivalent naming the expanded cell and the
  frontier's size at every step; it steps on command, offers no Play under
  reduced motion and moves without transition there (G2); every word on it
  is a message (rule 9). `study.html` gains its `grid` case and
  `study-model.ts` the `GridStudyModel` member of the family union; the
  family loads with the study that reads it, in the study's lazy chunk.
- **The record's version step.** The v1 schema's family enum and
  `visualFamilies` are closed, so `grid` is a shape change and a new version
  (catalog rules: a change after shipping is a new schema version; WS-002
  rule 7). `concept-study-v2.schema.json` is v1 with `grid` added to the
  enum and `concept-study-v2` as the schema's constant, and nothing else
  changed; `ConceptStudy.schema` admits both literals; `catalog-loader.ts`,
  `check-studies.mjs` (its validator map and its rule on shipped records)
  and the catalog test kit's record builder accept v1 and v2; a record that
  names `grid` is v2, a v1 record is read unchanged, and a batch drawn by a
  v1 family may keep writing v1; the v0 and v1 schemas stay byte-identical;
  and the record check's negative control refuses a v1 record that names
  `grid` and admits the same record as v2. WO-024's `relations` needs no
  version: v1 already names it.
- **The A* study.** One record, A* (`aifg-a:222`), as v2: its intuition and
  situation, one example (a small grid with a wall between start and goal),
  the mechanism's steps matched to the ordinary pseudocode's blocks,
  `pseudocode.executable` naming `studies/pathfinding/a-star.ts` with its
  spec, the `grid` visual reading the same module, implementations,
  references opened and dated, limits (a grid is one representation; a
  heuristic that overestimates loses the shortest path) and nearby concepts
  (Dijkstra's algorithm, the Tile graph, Path smoothing, Cost functions),
  in its author's words with every authored field a message key in
  `studyAifg/en.json`. Authored by the executor under the record contract
  and criticized by the factual and reading critics under the profile (two
  launches, WS-002 rule 3's procedure for one study), their findings
  disposed in `docs/evidence/WO-045/review.md`; `checked` with two reviewers.
  The study lets the research track draw the pathfinding chapter's 76 rows
  (WS-002 rule 6).
- **The two avoidance studies demonstrate the engine.** Collision avoidance
  keeps its exact head-on comparison and makes it the regression WO-028-D009
  asked for: the same run under the engine's plain `avoid`, which leaves the
  pair overlapping, and under the scene's head-on policy, which parts them
  from the first frame after it fires, with findings that say both through
  messages. Obstacle and wall avoidance takes its ray cast and avoidance
  step from the engine (WO-036's `geometry.ts` ray cast and wall avoidance,
  run with the study's single central ray), its own `castWallRay` and step
  removed from the simulation and the model entry; its moments are listed
  in step order whatever input the reader chooses, the straight-ahead run's
  moment labels and steps pinned in its spec, and its clearance comparison
  shown where the reader can see the two traces part (the chart zoomed on
  the pass round the wall's end, or the difference plotted; the executor
  records which). Where the engine's function moves the study's frames, the
  study's prose and placeholders follow it, and the walkthrough reads the
  result.
- **The inspector's study line** (`FUP-592e538095eaead9`). The scene
  inspector's definition gains "read the study", linking `/tools/catalog/<id>`
  through `buildRoute` and `ChildPaths.Reading`, for a tool the catalog
  summary lists as studied (`studiedIds`), the reverse of the reading's "Run
  it in the soldier scene" link; a tool with no study shows no such line.
  The `scene-flocking-*.png` baselines change because Flocking has a study.
- **Design brief and the first pair** (WS-001 rule 25, at the operator's
  sizes, rule 29): the drawing is the page's subject and the reading's
  measure stays as WO-019 settled it. A: each cell the search has touched
  prints its cost so far and its estimate small in the cell, the path drawn
  through cell centres; B: cells show their state by tone alone (open,
  closed, blocked, on the path), and the stepped cell's arithmetic sits in
  the worked step beside the drawing. One variable, whether a cell prints
  its numbers; both rendered at about 2080 by 1460 and at 360, read at 3840
  by 1620; A then B with the round named; the operator's preference makes
  the next pair; the rounds continue until the operator says the process is
  done, the rejected implementation leaves the code when its round is
  decided, and the decisions file records each round. If the operator
  delays the rounds to a dedicated A/B testing pass, the order records the
  first pair without a pick, ships A, removes B's implementation with its
  screenshots and record kept, and carries the rounds as the follow-up that
  pass takes (rule 25).

Rejected: a hand-written `a-star.presentation.ts` beside a simulation, as
each movement study is written (axis: where a family's shape lives; one
presentation per study is one more module per study for the standards
passes to read and for the chapter's next rows to copy, while one builder
holds the shape once); the search written inside the study (axis: the
catalog rule that a study calls the engine's function where it has the
behaviour, and the scene and the study then show one search); drawing A* in
an existing family (axis: `motion` draws bodies over time and `relations` a
concept map, and neither shows a frontier over cells); editing v1's enum in
place (axis: a shipped schema changes only by a new version); moving every
record to v2 (axis: a hundred records rewritten for a family none of them
draws, where the immutable-schema rule wants the old version read, not
replaced); a fallback inside the Collision avoidance study's model (axis:
WO-028-D009, the study demonstrates the engine).

Live-run surfaces at the base (the integrated `main` after WO-036 and
WO-040): the scene with its `ways` group and the inspector; the catalog with
one hundred studies, or more where WO-024 or a research batch has landed,
and the families landed by then; the Collision avoidance and wall studies
as WO-040 leaves them.

**Deliverables:** the builder and its spec; the `grid` family with its
drawing, specs and stories; the v2 schema and its readers; the A* study's
record, module, spec, messages and summary row; the two avoidance studies'
changes; the inspector's study line; the regenerated scene baselines;
`docs/evidence/WO-045/` with the design record, `review.md`, the link check,
`walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-045: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <WO-036's merge commit>
   origin/main` and `git merge-base --is-ancestor <WO-040's merge commit>
   origin/main` each exit 0 (the pass after both merge sets the pin; a
   `main` without either stops for a planning pass); the target worktree
   then fast-forwards to the target's `main`, and that integrated commit is
   the baseline of every later comparison until a later integration of
   `main` replaces it; then the route guard and activation as WO-005 step 1;
   read the harness usage and record the subagent remainder for the two
   critics. Check: the decisions carry them.
2. `libs/shared/catalog/src/schema/concept-study-v2.schema.json`, with
   `visualFamilies` and `ConceptStudy` in `libs/shared/models/src/lib/concept-study.ts`,
   `libs/shared/catalog/src/lib/catalog-loader.ts`,
   `tools/scripts/catalog/check-studies.mjs`,
   `tools/scripts/catalog/check-study-messages.mjs` (it refuses every schema
   but `concept-study-v1` today, and `i18n:check` runs it first) and the
   record builder in
   `libs/shared/catalog/testing/src/lib/catalog-test-kits.ts` accepting v1
   and v2, the message check validating a v2 record's messages as it does a
   v1 record's. Check: `npm run studies:check` exits 0; on a scratch copy of the
   studies directory a v1 record naming `grid` is refused and the same
   record as v2 admitted (recorded with both exit codes); `npx nx test
   catalog`, `npx nx test models` and `npm run test:tooling` exit 0.
3. `libs/features/tools/src/lib/studies/grid.ts` (`gridModel`), the
   `GridStudyModel` member in `study-model.ts`, and `grid.spec.ts` over a
   small fixed grid. Check: `npx nx test tools` exits 0.
4. `libs/features/tools/src/lib/composites/study-visuals/grid/` (candidate
   A) with `grid-drawing.ts`, its spec, the composite's spec and the
   `StudyGrid` stories, and the `grid` case in
   `composites/study/study.html`. Check: `npx nx test tools` and
   `npm run lint:components` exit 0.
5. The first rendered pair (A numbers in cells, B tone alone) at about 2080
   by 1460 and 360, read at 3840 by 1620; the rounds, or their deferral as
   the Design states; the rejected or unpicked implementation removed with
   its record. Check: `docs/evidence/WO-045/design/comparisons.md` exists
   and names the pair.
6. The A* study: `studies/pathfinding/a-star.ts` and `a-star.spec.ts`, its
   entry in `study-models.ts`, the record
   `libs/shared/catalog/src/studies/aifg/a-star.json` as v2, exported from
   the work chunk `libs/shared/catalog/src/studies/aifg.ts` (the studies
   check refuses a directory and a chunk that disagree), with
   `tools/studies.test.mjs`'s membership assertion for AI for Games kept
   per batch for the two movement batches and given its own for this
   study, its messages in
   `apps/dotln/public/i18n/studyAifg/en.json` and `study-en.json`, and its
   summary row through `npm run studies:check -- --write-summary`. Check:
   `npm run studies:check`, `npm run i18n:check`, `npm run test:tooling`
   and `npx nx test tools` exit 0.
7. The two critics dispatched under the profile, their findings disposed in
   `docs/evidence/WO-045/review.md`, `npm run studies:links` run over the
   record and its output recorded, the record `checked` with two reviewers.
   Check: `npm run studies:check` exits 0.
8. `studies/movement/collision-avoidance.simulation.ts`,
   `collision-avoidance.presentation.ts` and `collision-avoidance.model.spec.ts`
   with their messages: the head-on comparison under `avoid` and under the
   scene's policy. Check: `npx nx test tools` and `npm run i18n:check` exit
   0.
9. `studies/movement/obstacle-and-wall-avoidance.simulation.ts` and
   `obstacle-and-wall-avoidance.model.ts` on the engine's ray cast and wall
   avoidance, `obstacle-and-wall-avoidance.presentation.ts`'s `momentsOf` in
   step order and its comparison chart, `obstacle-and-wall-avoidance.model.spec.ts`
   pinning the straight-ahead run, and their messages. Check: `npx nx test
   tools` exits 0; `grep -c "castWallRay"` over the three modules prints 0
   for each.
10. `libs/features/scene/src/lib/mappers/inspector-mapper.ts` and
    `composites/unit-inspector/unit-inspector.html`: the study line, its
    message in `apps/dotln/public/i18n/en.json` and its copy `scene-en.json`.
    Check: `npx nx test scene`, `npm run i18n:check` and
    `node --test tools/i18n-copies.test.mjs` exit 0.
11. e2e: in `apps/dotln-e2e/src/scene.spec.ts`, A*'s study line followed to
    `/tools/catalog/aifg-a:222`, and a tool with no study showing none; in
    `apps/dotln-e2e/src/catalog.spec.ts`, the A* reading stepped to its path
    with the text equivalent naming the expanded cell, the heuristic set to
    zero and stepped again; in `apps/dotln-e2e/src/storybook.spec.ts`, the
    `StudyGrid` story beside the other families'; axe; no overflow at 360,
    768, 1440 and the operator's sizes; then the scene's baselines
    regenerated on macOS with
    `npx nx e2e-visual dotln-e2e -- --update-snapshots=all`, each image read
    at reading size before it is accepted. Check: `npx nx e2e dotln-e2e`
    and `npx nx e2e-visual dotln-e2e` exit 0.
12. The walkthrough as WO-020 step 11, under `docs/evidence/WO-045/`, with
    screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
    Check: the files exist.
13. Documents: `catalog.md` §The record (v1 and v2, which names `grid`) and
    §The families (`grid` and its builder), `catalog-rules.md` (a record
    whose family v1 does not name is v2; a grid study is data passed to
    `gridModel`), `scene.md` §The list of tools (the inspector's study line).
    Check: `grep -c "gridModel" docs/dev-reference/architecture/catalog.md`
    is at least 1.
14. Dependency check as WO-015 step 15; `npm run check:bundle`; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
15. Launchpad write-back (the profile's §Catalog and concept studies and §The
    soldier scene implementation maps; WS-001 §Delivery states; WS-002 rule
    6, that the `grid` family has landed and the pathfinding chapter's rows
    are drawable, and rule 7, that a record is v1 or v2), then the publish,
    review and records steps as WO-007 steps 15 to 17, with the branch
    `feat/grid-family-a-star`, the title `feat: add the grid study family
    and the A* study`, `docs/evidence/WO-045/` and
    `docs/final-reviews/WO-045/`; the final reviewer commits the order's
    records on the order branch before `npm run resume -- target-records`
    (the profile's publish route, step 3). Check: `npm run test:docs` in
    the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run typecheck:e2e`,
`npm run lint:components`, `npm run check:fixtures`, `npm run studies:check`,
`npm run i18n:check`, `npm run test:tooling`, `npm run check:bundle`,
`npx nx e2e dotln-e2e`, `npx nx e2e-visual dotln-e2e`; in the launchpad
order worktree `npm run test:docs`; then the target gate plain and review
once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: choose A* in the scene, follow "read the
   study", step the search to its path, set the heuristic to zero and step
   again, return to the scene, open Collision avoidance's study and its
   head-on comparison, open Obstacle and wall avoidance's study with the
   straight-ahead delivery, step its moments and read its clearance
   comparison. The VER report carries a `## Walkthrough` section with the
   dated steps and screenshots at 360, 768, 1440, about 2080 by 1460 and
   3840 by 1620 under `docs/evidence/WO-045/walkthrough/`, and states in the
   verifier's own words how A* chose its next cell, what the zero heuristic
   changed, what the head-on comparison showed and where the wall study's
   two clearance traces part, as read from the page alone. Met only when
   every step completed and that statement is present; a UI issue at about
   2080 by 1460 or 3840 by 1620 fails here (rule 29).
2. **Research read (WS-001 rule 27).** The verifier reads the A* study's
   record, its messages and its module whole (the one new study, so the
   sample is the whole of it) and the two avoidance studies' changed text,
   judges their quality and content against the record contract and the
   house rules, and the VER report names what was read and the judgment.
3. `libs/features/tools/src/lib/studies/pathfinding/a-star.ts` exports its
   example and a model that returns `gridModel`'s result for it, and imports
   nothing from `composites/`; `grid.spec.ts` asserts on its fixed grid that
   the builder's open and closed sets at each expansion and its path equal
   the trace and path WO-036's `pathfinding.ts` returns for the same grid,
   and that each frame's text equivalent names the expanded cell and the
   frontier's size; `a-star.spec.ts` asserts the example's path and its
   expansions under the octile and the zero heuristic.
4. `npm run studies:check` exits 0 over every record at the candidate, the
   A* record as `concept-study-v2` and every other as the version it
   declares; on a scratch copy it refuses a v1 record naming `grid` and
   admits the same record as v2 (both exit codes recorded in the evidence
   README); `git diff --quiet <latest integrated main> --
   libs/shared/catalog/src/schema/concept-study-v0.schema.json
   libs/shared/catalog/src/schema/concept-study-v1.schema.json` exits 0; and
   `npx nx test catalog` passes with the loader serving the A* record.
5. The A* record is `checked` with two reviewers named, and
   `docs/evidence/WO-045/review.md` records both critics' findings with a
   disposition for each and the link check's status for every reference and
   implementation the record cites; `npm run i18n:check` exits 0 and the
   corpus test passes over the A* module.
6. `grid-drawing.spec.ts` and the `grid` composite's spec pass: every cell
   is placed inside the drawing's bounds, the stepped frame's text
   equivalent renders beside the drawing, the composite steps on command and
   under reduced motion offers no Play and draws without transition; and
   `apps/dotln-e2e/src/storybook.spec.ts` lists the `StudyGrid` story beside
   the other families' and finds its composite rendered there.
7. `collision-avoidance.model.spec.ts` asserts that on the exact head-on run
   the engine's `avoid` leaves the pair overlapping and the scene's head-on
   policy parts them from the first frame after it fires with no later
   overlap, and the study's comparison renders both runs; the wall study's
   simulation imports its ray cast and wall avoidance from
   `@dotln-angular/scene-engine`, `grep -c "castWallRay"` prints 0 for its
   simulation, model and spec, and its spec pins the straight-ahead run's
   moment labels and steps and asserts that every input's moments are
   listed in step order.
8. The scene inspector shows "read the study", linking the tool's reading,
   for a rail tool the summary lists as studied and no such line for one it
   does not (a scene spec covers both), and the e2e case follows A*'s line
   to its reading.
9. `npx nx e2e dotln-e2e` exits 0 with the step 11 cases, axe at the board
   spec's threshold and no horizontal overflow at 360, 768, 1440, about
   2080 by 1460 and 3840 by 1620; `npx nx e2e-visual dotln-e2e` exits 0, and
   the evidence README lists each regenerated baseline with what changed in
   it.
10. `docs/evidence/WO-045/design/comparisons.md` records the first pair (A
    numbers in cells, B tone alone) and either every later round with its
    pick and the operator's word that ended the rounds in the decisions
    file, or the pair without a pick and the operator's word that delayed
    the rounds to a dedicated A/B testing pass with A shipped (rule 25); in
    either case the decisions file names the removed implementation's files
    and `ls` on each prints nothing.
11. `npx nx build dotln --configuration=production` exits 0 within the
    declared budgets, `npm run check:bundle` passes with the `grid` family
    and the A* study in lazy chunks, and `package.json`'s `dependencies`
    keys equal the integrated base's.
12. `node scripts/target-gate.mjs WO-045 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-045/README.md`,
`design/`, `review.md`, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-045/host-qualification.md`.

**Known issues and carry-ins:** The base is provisional, WO-039's merge;
the pass after WO-036 and WO-040 merge sets it to the later of their merge
commits. The `concept-study-v2` schema is this order's shared-infrastructure
change (WS-002 rule 7), bounded to the family enum; a research batch that
draws a v1 family writes v1 or v2 with no other change, and one that draws
`grid` writes v2. WO-024 also adds a family case to `study.html`, rows to
`studies-summary.json` and a family to `catalog.md` §The families: the
second publisher integrates the target's `main`, regenerates the studies
summary and reruns `studies:check`. The `grid` family makes the pathfinding
chapter's 76 rows drawable for the research track, which cuts a batch after
this order merges and owes no standards pass first, the builder being the
one place a grid study's shape lives (WS-002 rule 6). The wall study's
frames may move where the engine's function differs from the study's own
by rounding or by its ray; the study's text follows its frames. This order
activates only on a launchpad whose starter carries core WO-221's `--draft`
form; the draft pull request and its workflow runs are a final-review
obligation read from `docs/evidence/WO-045/preview-pr.json`, never a
criterion. Before `target-records`, the final reviewer commits the order's
records on the order branch (the profile's publish route, step 3).
`Target release classification: minor` and `Target release notes:
reviewed` are set under WO-012's declared policy.

**Non-goals:** more than one grid study (the research track's); a family
for graphs that are not grids, navigation meshes or hierarchical
pathfinding; migrating any v1 record; changing the engine's search,
avoidance or head-on policy (WO-036's); any scene change beyond the
inspector's study line; Babylon.js (candidate C2).

**Operator-review assumptions:** the operator accepts a family whose study
is data passed to one builder, the v2 schema bounded to the family enum,
and the two avoidance studies showing the engine's behaviour; judges the
first pair and ends or delays the rounds in their own words; and reads the
one draft pull request before final review, which the final publish reuses.
