# WO-037 — Shooting and bullets: a unit given a fire tool shoots at a target unit or point, bullets as entities with speed, range, drag and a hit radius that walls and obstacles stop, aim leading a moving target by the catalog's firing solution and by iterative targeting, hits counted in the instruments and shown on the field and in the text layer, a knockout option that takes a unit out of the run after a number of hits, all deterministic and replayed, with the rail's new `fight` group

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh+; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 48c7f8e6916692bca833c4985e2cf95978ab2c06
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds to `libs/shared/scene-engine` the modules `projectiles.ts`
(bullets as entities: owner, position, velocity, range left, radius, drag;
their advance, their hit test against units and geometry) and `aiming.ts`
(the closed-form intercept of a moving target for a straight bullet, the
iterative solution under drag) and their specs, extends `types.ts`
(`BulletState`, `hits` and the `down` activity on a unit state,
`SimulationState.bullets`), `interpreter.ts` (the kinds `combat.fire`,
`combat.aim` and `combat.projectile`; a `combat.fire` step's target as a
unit id or a point), `simulation.ts` (bullets advance before units; a
knocked-out unit leaves the formation under the lost-member rule and is not
steered) and `metrics.ts` (shots, hits, accuracy, down units); types five
catalog rows (`aifg-a:161` Aiming and shooting, `aifg-a:163` The firing
solution, `aifg-a:166` Iterative targeting, `aifg-a:167` Moving targets,
`aifg-a:162` Projectile trajectory) and grows `TransformKind`; adds to the
scene feature the rail group `fight`, the inspector's fire views (the
target chooser: the selected target unit or the objective point, the
preview rows), the painter's bullet, spark, wall-mark and down-unit layers,
the text layer's hit rows and each unit's hit count, the trial compare's
accuracy series, a fixture `scene-range.json` and the known outcome
regenerated, e2e cases and the documents (`scene.md`, `scene-rules.md`, the
profile's implementation map); about 40 source files; adds no runtime
dependency. Removes nothing. Wall-clock: about 8 h 0 min to 12 h 0 min of
executor work plus the design rounds and the fixed cycle; unknown until
run. Context bytes: the engine after WO-036 (about 120 KB), the scene
feature (about 180 KB), `scene.md`, `scene-rules.md`, the catalog's Chapter
3 §3.5 rows and WO-028's Projectile trajectory, The firing solution and
Iterative targeting studies, WS-001 rules 24, 25, 28 and 29, this order;
about 450 KB for the executor. Commands added in the target: none. Tokens:
unknown until run. Steps: 14. Re-mints: none. Refutations paid: this pass's
receipt.
**Nomination provenance:** the operator's follow-up of 2026-11-04 during
WO-028 (ignored capture
`docs/intake/notes/wo028-scene-shooting-followup-2026-11-04.md`, SHA-256
`91de02f4aa54b9300fe157b373b277993302cddf81d95f67344a8409b6733085`;
WO-028-D005; register row `FUP-2c1a53924446e9dd`): are shooting and
bullets getting added to the scene, and a note so it is not forgotten; the
expansion of 2026-11-04 (capture
`fcb33759c95fb20b77ee2bf2f48cec61a6cac1215948bcd16386448d33636186`;
WO-028-D006) asking planning to identify the combat dependencies and split
the road orders where useful; the operator's dispatch of 2026-11-05
(ignored capture `docs/intake/notes/planning-2026-11-05.md`). The split:
WO-036 lands the geometry and the ways, this order lands the shooting
over them. Planner-synthesized by the
[2026-11-05 pass](../planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md)
(D5). Opaque identifier, not a priority.
**Depends on:** WO-036 merged (hard: the geometry bullets stop at, the
`scene-v1` contract, the rail groups, the inspector's views and the
painter's layers this order extends).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-036",
    "relation": "hard",
    "reason": "the walls and obstacles a bullet stops at, the scene-v1 contract, the rail's groups and the inspector's and painter's layers this order extends"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 1, 5, 12, 14, 18, 24, 25, 28, 29 and 30; §The app and its
sub-apps, G1, G2, G5, §Design direction); `docs/repositories/dotln-angular.md`
(§Run the app and its checks, §Demonstrated architecture: the scene rows);
the target's `docs/dev-reference/architecture/scene.md` and
`docs/ai-reference/scene-rules.md` as WO-036 leaves them; the catalog's AI
for Games rows of Chapter 3 §3.5 (`libs/shared/catalog/src/data/tools-aifg-a.json`)
and the studies `projectile-trajectory`, `the-firing-solution` and
`iterative-targeting` under `libs/shared/catalog/src/studies/aifg/`;
WO-015's Design and WO-036's in this launchpad.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
the scene, selects three units, gives them Aiming and shooting from the
rail's new `fight` group and clicks a unit across the field as the target:
bullets stream across, sparks mark the hits, the instruments count shots,
hits and accuracy, and the target's row in the text layer counts its hits;
they set the target moving with Arrive and an objective and watch the
shots fall behind it; they give the shooters The firing solution and the
bullets lead the target and hit; they turn drag up in the inspector and the
closed-form lead misses again, then give them Iterative targeting and the
hits return; they draw a wall between shooters and target and every bullet
ends on the wall with a mark; they set knockout to three hits, and the
target goes down after the third, its squad closing its slot; they run a
trial of the two aims from one seed and read where they diverge. What the
operator learns is what it takes to hit a moving thing and what a wall
does to a line of fire; what they decide is whether the scene's next toy is
cover, or ammunition, or sides.

**Observed gap (dated 2026-11-05 at `48c7f8e`):** the engine has no
projectile and no aim: `SimulationState` holds units, formations and an
objective; the catalog's §3.5 rows (Aiming and shooting, The firing
solution, Iterative targeting, Moving targets, Projectile trajectory) are
untyped, so the rail does not offer them, although WO-028 studied three of
them with executable models that the scene does not run; a unit has no hit
count and no way out of a run; nothing on the field is consumed, ended or
marked by anything else moving.

**Design:**

- **Bullets.** A bullet is an entity in `SimulationState.bullets`: owner,
  position, velocity, range left, radius and drag; it advances before the
  units each tick, loses speed by drag, and ends when its range is spent,
  when it crosses a wall segment or enters an obstacle (a mark on the
  geometry for a few frames) or when it comes within `hit-radius` plus the
  unit's radius of a unit other than its owner (a hit). Bullets are drawn
  as short streaks in the owner's role colour, a hit as a spark (G2:
  motion means transition; nothing animates at rest), and every bullet and
  hit has a row or a count in the text layer (G1).
- **Firing.** `combat.fire` (Aiming and shooting, `aifg-a:161`) on the
  selected units with a target that is a unit id (the unit clicked after
  the tool is chosen, select-then-apply) or the objective point; parameters
  `bullet-speed`, `range`, `rate` (shots per second, one shot every
  `60 / rate` ticks on the seeded clock), `hit-radius` and `knockout-hits`
  (0, the default, means a unit is never knocked out). A unit fires along
  its aim while the step is active and the target is within range.
- **Aim.** `combat.aim` chooses the lead: The firing solution
  (`aifg-a:163`) and Moving targets (`aifg-a:167`) give the closed-form
  intercept of a target moving at its current velocity for a straight
  bullet at `bullet-speed`, the quadratic the catalog's study walks
  through; Iterative targeting (`aifg-a:166`) refines the aim by simulating
  the bullet under drag for `iterations`; with no aim tool a unit fires at
  the target's current position. Projectile trajectory (`aifg-a:162`,
  `combat.projectile`) sets `bullet-speed` and `drag`. Both aims are new
  mechanisms of the engine's `aiming.ts`, written there because the scene
  engine is `type:util` and imports nothing from a feature (WS-001 rule 15,
  the module-boundary lint) and because the three WO-028 studies hold
  different mechanisms: `solveFiringSolution` gives the low and high gravity
  arcs to a fixed point, `searchTarget` bisects a launch angle under
  gravity, and neither takes a target velocity, so they are not the
  straight-bullet intercept or the drag-aware lead the scene needs. The
  studies keep their mechanisms and records unchanged; the fight tools'
  definitions link to them as the catalog's readings of the same ideas, and
  nothing is claimed to be shared that is not.
- **Hits and knockout.** A hit increments the unit's `hits`; at
  `knockout-hits` the unit's activity becomes `down`: it stops, is not
  steered, is drawn dim, leaves its formation under WO-015's lost-member
  rule (the anchor moves to the centre of the slots still held) and is
  listed as down in the text layer; a reset revives it. Metrics: shots,
  hits, accuracy (hits over shots, `unknown` with no shots), down units;
  the trial compare carries accuracy as a series.
- **The rail and the inspector.** The five rows typed, `TransformKind`
  grown by a recorded decision, `interpretedKinds` and `sceneTransformKinds`
  equal, `readsParam` extended; the rail group `fight`; the inspector's
  fire view names the target (unit or objective), shows the preview rows
  (time to target, lead angle, range after drag) and the knockout setting.
- **Design brief and the first pair** (WS-001 rule 25, at the operator's
  sizes, rule 29): A: a hit is a spark on the field and a count in the
  instruments and the text layer, the unit itself unchanged; B: a hit is a
  spark and the unit's glyph gains a ring that fills toward knockout. One
  variable, whether the unit shows its hits on the field; both rendered at
  about 2080 by 1460 and at 360, read at 3840 by 1620; A then B with the
  round named; the rounds continue until the operator says the process is
  done; the rejected implementation leaves the code when its round is
  decided. The rule of cool (rule 28) applies in both directions.
- **Fixtures and determinism.** `scene-range.json` (three shooters, one
  target, a wall) and the known outcome regenerated with the reason in the
  pull request; a replay applies fire steps at their ticks; the frame
  hashes with bullets reproduce.

Rejected: ballistic arcs drawn in height over the top-down field (axis: the
field is a plan view and a lob's arc is the study's drawing, not the
scene's; drag is the honest difference between the two aims here); sides
or teams (axis: the operator's sandbox has roles, and a target is whatever
the operator points at; sides are a later toy); ammunition and reloading
(axis: nothing in the request asks for it, and rate and range bound a run
already); removing a knocked-out unit from the scene definition (axis: a
reset revives it and the fixture's twenty units stay twenty); bullets as
units (axis: a bullet has no steering and no role, and twenty units stay
the scene's contract).

Live-run surfaces at the base: the scene after WO-036 with its geometry,
the 25-tool rail and the `grid` family.

**Deliverables:** the engine modules and their specs; the typed rows and
the grown enum; the rail group, the inspector's fire views, the painter's
layers, the text layer's rows; the fixtures; `docs/evidence/WO-037/` with
the design record, `walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-037: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <WO-036's merge commit>
   origin/main` exits 0 (the pass after WO-036 merges sets the pin; a `main`
   that does not contain it stops for a planning pass); the target worktree
   then fast-forwards to the target's `main`, and that integrated commit is
   the baseline of every later comparison; then the route guard and
   activation as WO-005 step 1. Check: the decisions carry the integrated
   commit.
2. `projectiles.ts` and the types: advance, drag, range, the hit tests
   against units and geometry. Check: `npx nx test scene-engine` exits 0
   with a spec that ends a bullet on a wall, in an obstacle and on a unit.
3. `aiming.ts`: the closed-form intercept of a target at constant velocity
   for a straight bullet and the iterative lead under drag, as engine
   functions with no import outside the engine. Check: a spec hits a crossing
   target with the closed form at drag 0 and misses it at drag 0.3, where
   the iterative solution hits.
4. The interpreter's three kinds, the fire step's target, the knockout and
   `down` activity, the lost-member rule, the metrics. Check: `npx nx test
   scene-engine` exits 0; the formation spec reassigns after a knockout.
5. The five rows typed, `TransformKind` grown (a decision), the kinds kept
   equal, `readsParam` extended, the rail group `fight`. Check: the spec
   that runs every rail tool at its defaults passes over 30 tools;
   `npm run catalog:check` exits 0.
6. The inspector's fire views and target chooser, the painter's bullet,
   spark, wall-mark and down layers (candidate A), the text layer's rows and
   counts, the trial's accuracy series. Check: `npx nx test scene` exits 0;
   `npm run lint:components` exits 0.
7. The first rendered pair (A spark and counts, B the hit ring) at about
   2080 by 1460 and 360, read at 3840 by 1620; the rounds; the rejected
   implementation removed with its record. Check: `grep -c "Round"
   docs/evidence/WO-037/design/comparisons.md` is at least 1.
8. Fixtures: `scene-range.json`, the known outcome regenerated and read
   before commit. Check: `npm run check:fixtures` exits 0; the hashes
   reproduce across two runs.
9. e2e `apps/dotln-e2e/src/scene.spec.ts`: fire at a standing unit and read
   the hits, lead a moving target with the two aims under drag, a wall
   between them, knockout at three, save and reload with the fire step,
   the trial; axe; no overflow at 360, 768, 1440 and the operator's sizes.
   Check: `npx nx e2e dotln-e2e` exits 0.
10. The walkthrough as WO-020 step 11, under `docs/evidence/WO-037/`, with
    screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
    Check: the files exist.
11. Documents: `scene.md` (bullets, aim, hits, knockout), `scene-rules.md`
    (bullets advance before units; a bullet ends on geometry; the studies'
    mechanisms are the engine's aim), the profile's implementation map.
    Check: `grep -ci bullet docs/dev-reference/architecture/scene.md` is at
    least 1.
12. Dependency check as WO-015 step 15; `npm run check:bundle`. Check:
    prints nothing; the chunk sizes recorded.
13. Gate plain and review. Check: passing rows, no tracked-byte mutation.
14. Launchpad write-back (the profile's implementation map and rail count;
    WS-001's delivery states), then the publish, review and records steps
    as WO-007 steps 15 to 17, with the branch `feat/scene-shooting`, the
    title `feat: add shooting and bullets to the soldier scene`,
    `docs/evidence/WO-037/` and `docs/final-reviews/WO-037/`. Check:
    `npm run test:docs` in the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run check:fixtures`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: fire at a standing unit, set it moving,
   lead it with the closed form, raise drag and watch the miss, lead it
   with Iterative targeting, draw a wall between them, set knockout to
   three and watch the target go down and its squad close the slot, run the
   trial of the two aims. The VER report carries a `## Walkthrough` section
   with the dated steps and screenshots at 360, 768, 1440, about 2080 by
   1460 and 3840 by 1620 under `docs/evidence/WO-037/walkthrough/`, and
   states in the verifier's own words why the plain shot fell behind the
   moving target, what each aim did about it and what the wall did to the
   line of fire, as read from the page alone. Met only when every step
   completed and that statement is present. Rule 28 applies: a sloppy or
   uncool scene fails here, and the verifier says so in their words.
2. On `scene-range.json`, the known-outcome spec asserts that the three
   shooters hit the standing target within the fixture's ticks, that a
   crossing target is hit by the closed form at drag 0 and missed by it at
   drag 0.3 where the iterative aim hits, that with the wall drawn between
   them no bullet reaches the target and every bullet ends on the wall, and
   that the frame hashes with bullets reproduce across two runs.
3. With `knockout-hits` at 3, the target's activity reads `down` after its
   third hit, it is not steered thereafter, its formation's slot error
   returns under the fixture's threshold after reassignment, and a reset
   revives it; with `knockout-hits` at 0 no unit goes down over the run.
4. The rail lists 30 tools with the `fight` group, the spec that runs every
   rail tool at its defaults passes, `interpretedKinds` equals
   `sceneTransformKinds`, and the five typed rows pass `npm run catalog:check`;
   `libs/shared/scene-engine/src/lib/aiming.ts` imports nothing outside
   the engine (`grep -cE "@dotln-angular/|libs/features"
   libs/shared/scene-engine/src/lib/aiming.ts` prints 0), `npx nx lint
   scene-engine` passes the module-boundary rule, and `aiming.spec.ts`
   asserts the intercept and the drag-aware lead on the fixture's crossing
   target.
5. A composition exported with a fire step imports and replays it at its
   tick, and `npm run check:fixtures` passes.
6. `npx nx e2e dotln-e2e` exits 0 with the step 9 cases, axe at the board
   spec's threshold and no horizontal overflow at 360, 768, 1440 and the
   operator's sizes.
7. `docs/evidence/WO-037/design/comparisons.md` records the first pair (A
   spark and counts, B the hit ring) and every later round with its pick,
   and the decisions file records the operator's word that ended the rounds;
   the decisions file names the removed candidate's files and `ls` on each
   prints nothing.
8. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets, `npm run check:bundle` passes, and `package.json`'s
   `dependencies` keys equal the integrated base's.
9. `node scripts/target-gate.mjs WO-037 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-037/README.md`,
`design/`, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-037/host-qualification.md`.

**Known issues and carry-ins:** The base is provisional, WO-028's merge;
the pass after WO-036 merges sets it to WO-036's merge commit. Sides,
cover, ammunition and a lobbed arc are later toys the operator picks after
playing. The scene's known outcome is regenerated here with its reason in
the pull request. This order activates only on a launchpad whose starter
carries core WO-221's `--draft` form; the draft pull request and its
workflow runs are a final-review obligation read from
`docs/evidence/WO-037/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** sides or teams; ammunition; a lobbed trajectory drawn in
height; cover and line of sight beyond the wall stop; a study of its own
(the three studies exist); Babylon.js (candidate C2).

**Operator-review assumptions:** the operator accepts straight bullets with
drag as the scene's projectiles, the closed-form and iterative aims as the
two tools, knockout as a parameter that defaults off, judges the first pair
and ends the rounds in their own words, and reads the one draft pull request
before final review, which the final publish reuses.
