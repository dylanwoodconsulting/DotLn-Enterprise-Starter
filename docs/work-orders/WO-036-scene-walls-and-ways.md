# WO-036 — Walls and ways: the soldier scene gains walls and obstacles the operator draws on the field, a tile graph those block, A* and Dijkstra with the catalog's heuristics and cost functions as rail tools, path following with replanning when the field changes and a visible no-route state, obstacle and wall avoidance from the engine with a deterministic head-on policy, geometry saved with the composition and replayed, and the `grid` drawing family the pathfinding chapter's studies need

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh+; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 48c7f8e6916692bca833c4985e2cf95978ab2c06
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds to `libs/shared/scene-engine` the modules `geometry.ts`
(segments, discs, inflation, ray and segment tests), `graph.ts` (the tile
graph over the field, blocked by geometry, 8-connected with octile costs
and a cost function), `pathfinding.ts` (A* with a pluggable heuristic,
Dijkstra as its zero heuristic, path retrieval, line-of-sight smoothing),
`path-following.ts` (seek the next waypoint, arrive at the last, the
predictive variant) and their specs, extends `steering.ts` (obstacle and
wall avoidance by ray and whiskers; the head-on policy in `avoid`),
`simulation.ts` (walls and obstacles stop a unit; replanning on a geometry
or objective step; the `blocked` activity), `interpreter.ts` (the kinds
`graph.tile`, `path.find`, `path.smooth`, `path.follow` and `path.cost`
interpreted; the `field.wall`, `field.obstacle` and `field.clear` steps),
`metrics.ts` (path length, replans, blocked units) and `types.ts`
(`SceneGeometry`, `BlockedActivity`, `scene-v1`); types nine catalog rows
(`faces.transform` on `aifg-a:222` A*, `aifg-a:212` Dijkstra's algorithm,
`aifg-a:247` Tile graph, `aifg-a:254` Path smoothing, `aifg-a:127` Path
following, `aifg-a:129` Predictive path following, `aifg-a:137` Obstacle
and wall avoidance, `aifg-a:134` Collision avoidance; `aifg-a:253` Cost
functions already typed) and grows `TransformKind` in `models`; adds to
the scene feature the field tools in the transport, the geometry list in
the text layer, the rail group `ways`, the inspector's route views and the
no-route notice, the canvas painter's geometry, path and frontier layers,
the `scene-v1` fixture contract with `stored-scene.ts` reading v0 and v1,
a geometry fixture and the known outcome regenerated; adds the `grid` study
family under `libs/features/tools/src/lib/composites/study-visuals/grid/`,
the `concept-study-v2` schema (`grid` added to the family enum and nothing
else changed) with `VisualFamily`, the loader and `check-studies.mjs`
accepting v1 and v2, and one authored study, A* (`aifg-a:222`), under
`libs/shared/catalog/src/studies/aifg/` with its simulation, presentation
and entry under `libs/features/tools/src/lib/studies/pathfinding/`, its
messages in `studyAifg/en.json` and its row in `studies-summary.json`; e2e
cases; the documents (`scene.md`, `scene-rules.md`, `catalog.md` §The
families, the profile's implementation map); about 70 source files; adds
no runtime dependency. Removes nothing. Wall-clock: about 12 h 0 min to
18 h 0 min of executor work plus the design rounds and the fixed cycle;
unknown until run. Context bytes: the engine (about 90 KB), the scene
feature (about 160 KB), `scene.md`, `scene-rules.md`, the catalog's
Chapter 3 and Chapter 4 rows, the study contract, WS-001 rules 24, 25, 28
and 29, this order; about 420 KB for the executor. Commands added in the
target: none. Tokens: unknown until run. Steps: 16. Re-mints: none.
Refutations paid: this pass's receipt.
**Nomination provenance:** the operator's follow-ups of 2026-11-04 during
WO-028 (ignored captures
`docs/intake/notes/wo028-scene-shooting-followup-2026-11-04.md`, SHA-256
`91de02f4aa54b9300fe157b373b277993302cddf81d95f67344a8409b6733085`, and
`docs/intake/notes/wo028-scene-navigation-followup-2026-11-04.md`, SHA-256
`fcb33759c95fb20b77ee2bf2f48cec61a6cac1215948bcd16386448d33636186`;
WO-028-D005, D006 and D009; register row `FUP-2c1a53924446e9dd`): shooting
and bullets, then pathfinding, obstacles and walls, to be planned and not
forgotten, with the navigation, geometry and combat dependencies identified
and the road orders split where useful; the engine's exact head-on blind
spot D009 deferred to the navigation order; the operator's dispatch of
2026-11-05 asking that the reminders be addressed (ignored capture
`docs/intake/notes/planning-2026-11-05.md`); the 2026-11-04 pass's NoOp on
the pathfinding chapter's research, reopened by a road order that lands a
family drawing a graph search; register row `FUP-592e538095eaead9` (the
inspector's link to a tool's study) allocated here because this order
touches the inspector. Planner-synthesized by the
[2026-11-05 pass](../planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md)
(D5). Opaque identifier, not a priority.
**Depends on:** WO-015 merged (hard: the engine, the renderer seam, the
rail, the inspector, the text layer, the store and the fixtures this order
extends; merged as `DotLn Angular v0.6.0`). WO-035 (reference-only: the inspector's
definition reads the catalog's messages once WO-035 lands; whichever lands
later integrates the target's `main`).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-015",
    "relation": "hard",
    "reason": "the pure scene engine, the renderer seam, the rail, the inspector, the text layer, the store and the fixture contract this order extends"
  },
  {
    "workOrderId": "WO-035",
    "relation": "reference-only",
    "reason": "the inspector's definition and the rail's names read the catalog's messages once WO-035 lands; the later of the two integrates the target's main"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 1, 5, 12, 14, 18, 24, 25, 28, 29 and 30; §The app and its
sub-apps, G1, G2, G6, §Design direction); `docs/repositories/dotln-angular.md`
(§Run the app and its checks, §Run content workers, §Demonstrated
architecture: the scene rows); `docs/product/concept-study.md`; the
target's `docs/dev-reference/architecture/scene.md`,
`docs/ai-reference/scene-rules.md`, `docs/dev-reference/architecture/catalog.md`
§The families, `docs/ai-reference/catalog-rules.md`; the catalog's AI for
Games rows of Chapter 3 §3.3 and Chapter 4 (`libs/shared/catalog/src/data/tools-aifg-a.json`);
WO-015's Design and WO-028-D009 in the target's `docs/dotln/`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
the scene, chooses Draw wall and drags a wall across the field between the
units and the objective, then places two obstacles; they select a squad,
give it A* from the rail's new `ways` group and set the objective beyond the
wall; the units route around the wall's end, past the obstacles, and
arrive, the chosen unit's path drawn faintly ahead of it and the instruments
showing path length and replans; they drag another wall across that path
while the squad moves and watch the squad replan around it; they close the
gap entirely and read, in the inspector's notice and in each unit's row of
the text layer, that there is no route, the units stopping where they are;
they clear the walls and the squad moves again. They give a second squad
Obstacle and wall avoidance instead of a path and watch it feel its way
along the wall with its whiskers. They send two units head on at each other
and watch them part deterministically every time. They save the
composition, reload, and the walls are there; they run a trial with and
without the wall from one seed and read the first divergence. They open the
A* study from the inspector's "read the study" line and step the search
across a grid, the frontier growing cell by cell until the path appears.
What the operator learns is how a route is found and followed on a field
with geometry, where it fails and what avoidance adds; what they decide is
which pathfinding concepts the research track studies next, now that the
grid can draw them.

**Observed gap (dated 2026-11-05 at `48c7f8e`):** the scene's field has no
geometry: `SceneDefinition` is a field size, a seed and twenty units; the
only walls are the field's edges (`keepOnField`); the engine has no graph,
no search and no path following (`steering.ts` exports seek, arrive, flee,
separate, avoid, wander and keepOnField; `interpretedKinds` are
`steer.blend`, `steer.priority`, `formation.twoLevel`, `formation.fixed` and
`objective.set`); the catalog's Chapter 4 Pathfinding has 76 rows, one
typed (`aifg-a:253` Cost functions, kind `path.cost`, which no engine
interprets) and none studied, because no landed family draws a grid or a
graph (the 2026-11-04 pass's NoOp); `avoid` in `steering.ts` returns zero
acceleration for exactly coincident projected centres, so two units sent
exactly head on pass through each other (WO-028-D009); the inspector shows
a tool's definition and no link to its study; a composition carries no
geometry (`scene-v0`).

**Design:**

- **Geometry.** Two shapes, decided here as D006 asked: a wall is a
  segment with a thickness, an obstacle a disc; a rectangle is four walls.
  Drawn on the field with two field tools in the transport, Draw wall
  (press, drag, release; Shift snaps to the axes) and Place obstacle (click
  places, drag sets the radius), and Clear; every shape is also a row of a
  geometry list under the unit list in the text layer, with editable
  coordinates, so the keyboard reaches every edit (G1). A geometry edit is a
  step (`field.wall`, `field.obstacle`, `field.clear`) with its true tick,
  so a composition replays its walls where they were drawn, and a trial
  compares two branches of one seed with and without a wall. `scene-v1`
  adds `geometry: { walls, obstacles }` to the fixture contract and the
  stored composition; `stored-scene.ts` reads v0 as v1 with empty geometry
  and writes v1; a stored value that fails validation is ignored and
  reported as today.
- **The graph, under one clearance contract.** A tile graph over the
  field at `cell-size` (default so the field is about 48 by 27 cells),
  8-connected with octile edge costs multiplied by the cost function;
  rebuilt when geometry changes (the field is small; a rebuild per edit is
  cheap and deterministic). One clearance test serves the graph, the
  smoothing and the physics: a cell is blocked when the unit's disc at its
  centre meets a wall or obstacle; an edge between two cells is traversable
  only when the swept unit, the disc moved along the segment between the
  two centres, clears every wall and obstacle, so a thin wall between two
  centres blocks the edge and not only the cells it covers; a diagonal move
  needs both of its orthogonal neighbours' edges traversable, so no route
  cuts a corner; smoothing keeps a shortcut only when its swept segment
  passes the same test; and the simulation's stop at geometry and the
  avoidance rays use that test too, so a route the search returns is one
  the body can walk.
  `path.cost` (`aifg-a:253`, travel, danger and visibility costs) multiplies
  the travel cost; the danger and visibility layers are uniform zero until
  an influence-map order lands one, and the inspector's preview row says so
  in words rather than showing an effect that is not there.
- **The search.** A* with a pluggable heuristic (`euclidean`, `octile`,
  `manhattan`, `zero`), Dijkstra as the zero heuristic, path retrieval by
  back-tracking, line-of-sight smoothing; the search's open and closed
  sets per expansion kept for the `grid` drawing. Integer-friendly
  arithmetic and the engine's own `sine` and `cosine`, never native
  `Math.sin` or `Math.cos`, so the known outcome reproduces on every
  machine (scene rules).
- **Following and replanning.** `path.follow` seeks the next waypoint
  within `waypoint-radius` and arrives at the last; the predictive variant
  looks `predict-time` ahead along the velocity; a unit replans when a
  geometry step lands, when the objective moves or when the geometry stops
  it on its path (its swept step blocked), counted in `replans`; no
  route sets the unit's activity to `blocked`, with a text equivalent in
  its row, a notice in the inspector naming the unit and the reason, and a
  count in the instruments (`blockedUnits`); walls and obstacles stop a unit
  dead in that direction as the field's edge does, so a pinned unit reads
  as stopped.
- **Avoidance.** Obstacle and wall avoidance (`aifg-a:137`) casts a ray of
  `look-ahead` and two whiskers at `whisker-angle` against the geometry and
  steers from the nearest hit by `avoid-distance`, in the avoidance group;
  Collision avoidance (`aifg-a:134`) names the existing `avoid` as a rail
  tool of its own; the head-on policy (D009): when two bodies' projected
  centres coincide, the pair takes one normal in world coordinates, the
  perpendicular of the offset from the lower unit id to the higher, or the
  world x-axis when that offset is zero (coincident, stationary bodies),
  and the lower id steers along it while the higher steers against it, so
  the two corrections are opposite in world space whatever the headings and
  the bodies separate; the regressions cover exact head-on with opposite
  headings, initial overlap, ordinary offset crossings and a replay of
  each, every one asserting that the pair's separation grows from the first
  frame after the policy fires and that no later frame overlaps, with the
  Collision avoidance study's comparison retained as the honest regression
  of the chosen policy.
- **The rail and the inspector.** The nine rows typed with the kinds above
  (`graph.tile` for Tile graph with `cell-size` and `connectivity`;
  `path.find` for A* with `heuristic` and for Dijkstra with the heuristic
  fixed at zero; `path.smooth` with `max-skip`; `path.follow` for the two
  following rows with `waypoint-radius`, `path-offset` and `predict-time`;
  `steer.blend` for the two avoidance rows with `obstacle-avoidance-weight`,
  `look-ahead`, `whisker-angle`, `avoid-distance` and `avoidance-weight`),
  `TransformKind` grown by a recorded decision, `sceneTransformKinds` and
  `interpretedKinds` kept equal, `readsParam`'s tables extended so a new
  tool needs no new code, and the rail's new group `ways` listing them; the
  inspector shows a route's parameters and preview rows (path length,
  expansions, the first waypoint), and its definition gains the line "read
  the study" linking to `/tools/catalog/<id>` for a tool with a study
  (`FUP-592e538095eaead9`), the reverse of the reading's "runs in the
  soldier scene" line.
- **The painter and the text layer.** The canvas draws walls as bars and
  obstacles as discs in the field tokens, the chosen unit's path as a faint
  polyline, and, when the inspector's "show search" toggle is on, the last
  search's frontier and closed cells shaded; nothing animates at rest (G2);
  the text layer's geometry list and each unit's route state (on path,
  replanning, no route) are the accessibility surface (G1).
- **The `grid` family and the A* study.** `composites/study-visuals/grid/`
  draws a grid of cells with costs and blocked cells, the open and closed
  sets and the frontier per expansion, and the found path, stepping on
  command with a text equivalent naming the expanded cell and the frontier
  size; reduced motion steps without transition. Its first use is one
  authored study, A* (`aifg-a:222`), whose simulation calls the engine's
  `pathfinding.ts` (the rule: call the engine's function where it has the
  behaviour), authored by the executor under the record contract, which
  this order moves to `concept-study-v2`: the v1 schema's `visual.family`
  enum and `VisualFamily` in `models` name six families and are closed, so
  `grid` is a shape change and a new version (WS-002 rule 7; the catalog
  rules). `concept-study-v2.schema.json` adds `grid` to the enum and changes
  nothing else; the loader, `VisualFamily` and `check-studies.mjs` accept v1
  and v2, a v1 record reading as v2 unchanged; new writes use v2; the v0 and
  v1 schemas stay immutable; and the record check's negative control refuses
  a v1 record that names `grid` and admits the v2 one. The A* record is v2,
  with message keys in `studyAifg/` and the model split into simulation,
  presentation and entry under WO-034's shape rule, and is criticized by the
  factual and reading critics under the profile (two launches). The family lets the research track draw the pathfinding
  chapter's 76 rows (WS-002 rule 6).
- **Design brief and the first pair** (WS-001 rule 25, at the operator's
  sizes, rule 29): the field stays the page. A: the field tools sit in the
  transport beside Play, Pause and Step, and the geometry list sits under
  the unit list; B: a Field tab in the right column, beside the inspector,
  holds the tools and the geometry list. One variable, where field editing
  lives; both rendered at about 2080 by 1460 and at 360, read at 3840 by
  1620; A then B with the round named; the operator's preference makes the
  next pair; content and usability before polish; the rounds continue until
  the operator says the process is done, the rejected implementation leaves
  the code when its round is decided, and the decisions file records each
  round. The rule of cool (rule 28) applies to this scene order in both
  directions.
- **Fixtures and determinism.** `scene-walls.json` (geometry with the
  twenty units) and the known outcome regenerated with
  `WRITE_SCENE_FIXTURES=1`, the reason stated in the pull request; the
  frame hashes with geometry reproduce; a replay applies geometry steps at
  their ticks.

Rejected: a navigation mesh (axis: the tile graph is the chapter's first
representation, cheap to rebuild and honest at the field's size; a mesh is a
later tool when a scene needs it); polygon obstacles (axis: segments and
discs cover the book's ray examples and keep the tests simple, and a
rectangle is four walls); replanning every tick (axis: replan on a geometry
or objective change, deterministic and cheap); the `grid` family in a
separate order (axis: the search's drawing is what the scene paints already,
and the family unlocks the chapter for the research track at once); walls
as catalog tools (axis: geometry is the field's, not a concept's; the rail
offers only tools the engine runs on units); the head-on fallback inside the
study model (axis: D009, the study demonstrates the engine).

Live-run surfaces at the base: the scene with sixteen rail tools, the
catalog with eighty studies and the five landed families.

**Deliverables:** the engine modules and their specs; the typed rows and the
grown enum; the field tools, the geometry list, the rail group, the
inspector's views, notice and study link; the painter's layers; the
`scene-v1` contract and fixtures; the `grid` family with its stories and
spec; the A* study with its record, modules, spec and messages;
`docs/evidence/WO-036/` with the design record, `review.md`, the link
check, `walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-036: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   48c7f8e6916692bca833c4985e2cf95978ab2c06 origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1; read the harness usage and record the
   subagent remainder. Check: the decisions carry them.
2. `geometry.ts` and `types.ts` (`SceneGeometry`, `scene-v1`); the
   `field.*` steps in the interpreter; `stored-scene.ts` reading v0 and v1.
   Check: `npx nx test scene-engine` and `npx nx test scene-data-access`
   exit 0; a v0 fixture loads with empty geometry.
3. `graph.ts` and `pathfinding.ts` with the heuristics, Dijkstra, retrieval
   and smoothing; a spec on a fixed field with a wall asserting the path,
   the expansions, the no-route case, a thin wall between two cell centres
   (no edge across it) and a diagonal past a blocked corner (refused).
   Check: `npx nx test scene-engine` exits 0.
4. `path-following.ts`, replanning, the `blocked` activity, the stop at
   geometry, the metrics. Check: a spec drives a unit around a wall to the
   objective, a sealed unit to `blocked`, and a unit the geometry stops on
   its path to a replan.
5. Obstacle and wall avoidance and the head-on policy in `steering.ts`;
   the Collision avoidance study's comparison as the regression. Check:
   `steering.spec.ts` covers exact head-on with opposite headings, initial
   overlap, an ordinary offset and a replay of each, asserting physical
   separation; `npx nx test tools` exits 0 for the study.
6. The nine rows typed, `TransformKind` grown (a decision records it),
   `sceneTransformKinds` and `interpretedKinds` equal, `readsParam`
   extended; the rail group `ways`. Check: the spec that runs every rail
   tool at its defaults exits 0 over 25 tools; `npm run catalog:check`
   exits 0.
7. The field tools in the transport (candidate A), the geometry list, the
   inspector's route views and notice, the painter's geometry, path and
   frontier layers, the "read the study" line. Check: `npx nx test scene`
   exits 0; `npm run lint:components` exits 0.
8. The first rendered pair (A transport, B Field tab) at about 2080 by
   1460 and 360, read at 3840 by 1620; the rounds; the rejected
   implementation removed with its record. Check: `grep -c "Round"
   docs/evidence/WO-036/design/comparisons.md` is at least 1.
9. The `grid` family with stories `StudyGrid` and a spec rendering a
   search's steps to its text equivalent. Check: `npx nx test tools` exits
   0; `npm run lint:components` exits 0.
10. The `concept-study-v2` schema, `VisualFamily`, the loader and
    `check-studies.mjs` accepting v1 and v2 with the negative control; the
    A* study: the record (v2), the three modules and the spec, the
    messages; the two critics dispatched under the profile and their
    findings disposed; `checked`. Check: `npm run studies:check` exits 0
    over every record, the eighty v1 ones unchanged; `npm run i18n:check`
    exits 0.
11. Fixtures: `scene-walls.json`, the known outcome regenerated and read
    before commit; `check:fixtures` over `scene-v1`. Check: `npm run
    check:fixtures` exits 0; the simulation's frame hashes reproduce across
    two runs.
12. e2e `apps/dotln-e2e/src/scene.spec.ts`: draw a wall, route around it,
    replan when a second wall lands, no route when sealed, clear, save and
    reload with geometry, the head-on pair, the study link; axe; no overflow
    at 360, 768, 1440 and the operator's sizes. Check: `npx nx e2e
    dotln-e2e` exits 0.
13. The walkthrough as WO-020 step 11, under `docs/evidence/WO-036/`, with
    screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
    Check: the files exist.
14. Documents: `scene.md` (geometry, the graph, the search, following, the
    policy), `scene-rules.md` (geometry edits are steps; the stop rule; the
    head-on policy), `catalog.md` §The families (`grid`), the profile's
    implementation map. Check: `grep -c grid docs/dev-reference/architecture/catalog.md`
    is at least 1.
15. Dependency check as WO-015 step 15; `npm run check:bundle`; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
16. Launchpad write-back (the profile's implementation map and rail count;
    WS-001's delivery states; WS-002 rule 6's note that the pathfinding
    chapter is drawable), then the publish, review and records steps as
    WO-007 steps 15 to 17, with the branch `feat/scene-walls-and-ways`, the
    title `feat: add walls, obstacles and pathfinding to the soldier scene`,
    `docs/evidence/WO-036/` and `docs/final-reviews/WO-036/`. Check:
    `npm run test:docs` in the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run check:fixtures`, `npm run studies:check`,
`npm run i18n:check`, `npm run check:bundle`, `npx nx e2e dotln-e2e`; in the
launchpad order worktree `npm run test:docs`; then the target gate plain
and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: draw a wall and two obstacles, give a
   squad A* and an objective beyond the wall, watch the route and the
   arrival, drag a second wall across the path and watch the replan, seal
   the gap and read the no-route state in the notice and the text layer,
   clear, give a second squad Obstacle and wall avoidance, send two units
   head on, save and reload, run a trial with and without the wall, open
   the A* study from the inspector and step the search. The VER report
   carries a `## Walkthrough` section with the dated steps and screenshots
   at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620 under
   `docs/evidence/WO-036/walkthrough/`, and states in the verifier's own
   words how the squad found its way, what it did when there was none and
   what the avoidance added, as read from the page alone. Met only when
   every step completed and that statement is present. Rule 28 applies: a
   sloppy or uncool scene fails here, and the verifier says so in their
   words.
2. On `scene-walls.json` with A* and an objective beyond the wall, the
   known-outcome spec asserts that every unit of the squad reaches the
   objective without any frame placing a unit inside a wall or obstacle,
   that the recorded path length and expansions match the fixture, and
   that the frame hashes reproduce across two runs; with the gap sealed,
   every unit of the squad reads `blocked` within the fixture's tick and
   `blockedUnits` counts them; the thin-wall regression yields no edge
   across a wall between two cell centres, the diagonal-corner regression
   refuses a diagonal past a blocked corner, and a unit the geometry stops
   on its path replans within the fixture's tick.
3. `steering.spec.ts` covers exact head-on, initial overlap, an ordinary
   offset crossing and a replay of each, asserting that the pair's
   separation grows from the first frame after the policy fires, that no
   later frame overlaps and that the sides are the same across runs, and
   the Collision avoidance study's comparison passes as the regression of
   the policy.
4. A composition exported after drawing geometry imports with its walls and
   obstacles, a `scene-v0` stored value loads with empty geometry, and
   `npm run check:fixtures` passes over the v1 schema.
5. The rail lists 25 tools in the `ways`, `avoid` and existing groups, the
   spec that runs every rail tool at its defaults passes, `interpretedKinds`
   equals `sceneTransformKinds`, and the nine typed rows pass
   `npm run catalog:check`.
6. `npm run studies:check` exits 0 over every record, the A* record as
   `concept-study-v2` and the eighty v1 records unchanged, and on a scratch
   copy refuses a v1 record that names `grid`; the A* record is `checked`
   with two reviewers and `docs/evidence/WO-036/review.md` records both
   critics' dispositions; the `grid` family's spec renders a search's steps to a
   text equivalent; and the inspector's "read the study" line opens the A*
   reading.
7. `npx nx e2e dotln-e2e` exits 0 with the step 12 cases, axe at the board
   spec's threshold and no horizontal overflow at 360, 768, 1440 and the
   operator's sizes.
8. `docs/evidence/WO-036/design/comparisons.md` records the first pair (A
   transport, B Field tab) and every later round with its pick, and the
   decisions file records the operator's word that ended the rounds; the
   decisions file names the removed candidate's files and `ls` on each
   prints nothing.
9. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets, `npm run check:bundle` passes, and `package.json`'s
   `dependencies` keys equal the integrated base's.
10. `node scripts/target-gate.mjs WO-036 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-036/README.md`,
`design/`, `review.md`, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-036/host-qualification.md`.

**Known issues and carry-ins:** The danger and visibility layers of
`path.cost` are uniform until an influence-map order lands one (a candidate
in the filing pass's NoOps); the inspector says so. The `concept-study-v2`
schema is this order's shared-infrastructure change (WS-002 rule 7),
bounded to the family enum; a research batch that lands after it writes v2
records with no other change. The `grid` family makes
the pathfinding chapter's 76 rows drawable for the research track (WS-002
rule 6), which cuts a batch after this order merges. WO-037 (shooting and bullets) depends on this order's geometry. The two gaps WO-034's verifier boarded in the wall study (WO-034-D013, `FUP-4e24208e45d27a1d`) are this order's, since it takes the study's avoidance from the engine: the study's moments listed in step order whatever input the reader chooses, the straight-ahead run's moment labels and steps pinned in its spec, and the clearance comparison shown where the reader can see the two traces part. The scene's known outcome is
regenerated here with its reason in the pull request. This order activates
only on a launchpad whose starter carries core WO-221's `--draft` form; the
draft pull request and its workflow runs are a final-review obligation read
from `docs/evidence/WO-036/preview-pr.json`, never a criterion. `Target
release classification: minor` and `Target release notes: reviewed` are set
under WO-012's declared policy.

**Non-goals:** a navigation mesh, polygon obstacles or hierarchical
pathfinding; influence maps and the danger layer; shooting and bullets
(WO-037); more than one pathfinding study (the research track's);
Babylon.js (candidate C2).

**Operator-review assumptions:** the operator accepts segments and discs
as the field's shapes, the tile graph as the first representation and the
head-on policy as written, judges the first pair and ends the rounds in
their own words, and reads the one draft pull request before final review,
which the final publish reuses.
