# WO-036 evidence — walls and ways

The soldier scene gains walls and obstacles drawn on the field, a tile graph those block,
A* and Dijkstra's algorithm with the catalog's heuristics and cost functions on the rail,
path following that plans again when the field changes and shows a unit with no route,
obstacle and wall avoidance, a head-on policy beside collision avoidance, a crowd under
priority steering that comes to rest, and geometry saved with a composition and replayed.
The target is `dotln-angular` at `eb9d227483e30164105da077f50673789d1e5c9f`, WO-039's merge,
which is also the target's `main` throughout this execution
([WO-036-D002](decisions.md#wo-036-d002)).

## What to read

- [decisions.md](decisions.md): D002 activation; D003 the priority repair and every arm
  measured; D004 geometry, its one shape model and following; D005 the search and the
  cost functions; D006 avoidance and the head-on policy; D007 the enum's growth and the
  typed rows; D008 how path and field steps act on units; D009 the design round; D010 the
  older-trial rule; D011 the page around the new engine; D012 the meta critic the operator
  asked for; D013 review round 1's findings and what became of each; D014 the executor's error
  over meta critic 1's report, and the critic's five points; D015 review round 2; D016 review
  round 3 and the changes after it; D017 and D018 the verifier's judgments in VER-001; D019
  meta critic 2 in the repair and its five points; D020 the repair of F1, every rule measured
  and why criterion 3 stays unmet; D021 the repair of F2; D022 a formation takes its members
  off their routes; D023 a correction of two times; D024 the document gate's formatting
  deadline.
- [The repair of VER-001](#the-repair-of-ver-001) below, with [repair-1/](repair-1/README.md):
  the probes that measure it, their raw results and the variants tried.
- [design/comparisons.md](design/comparisons.md): round 1, A (the transport) against B (a
  Field tab), the operator's pick of A, and B's record.
- [walkthrough.md](walkthrough.md) and `walkthrough/`: the Objective's session performed in
  the served production build.
- [host-qualification.md](host-qualification.md), [handoff.md](handoff.md), the repair's
  handoff, and [implementation-handoff.md](implementation-handoff.md), the first execution's.

## Criterion 3: the priority repair, failing at the base and passing after it

Both arms ran the candidate's `steering.spec.ts` block "a crowd under priority steering with
Arrive" (four crowds that must come to rest; three settled crowds sent 12 to 14 units away
that must reach the new objective no later than a plain Arrive from the same places), Node
26.9.0, Vitest 5.0.5, on 2026-11-15: the base arm at 16:35Z, the candidate arm at 16:36Z and again at 17:25Z on the final candidate, the tree both target gates passed, with the same result:

| Arm | What ran | Exit code | Result |
| --- | --- | --- | --- |
| Integrated base | The block copied unchanged into a spec file of its own (`criterion3.spec.ts`), run against the base engine exported whole: `git archive eb9d227 libs/shared/scene-engine package.json tsconfig.base.json` extracted into a scratch directory, the target worktree's `node_modules` linked beside it, then `npx vitest run src/lib/criterion3.spec.ts` in `libs/shared/scene-engine` with the base's own `vite.config.mts` | 1 | 7 failed of 7: the four rest cases on `expected false to be true`, the three re-targets on `expected null not to be null` |
| Candidate | `npx vitest run --config libs/shared/scene-engine/vite.config.mts src/lib/steering.spec.ts -t "a crowd under priority steering with Arrive"` in the target worktree | 0 | 7 passed, 39 skipped of 46 |

The first base arm, on 2026-11-14 at 23:35Z, swapped the base's `simulation.ts` alone into the
candidate and failed on the same two assertions. That method no longer reaches them: the
candidate's interpreter now plans routes on every objective step, which the base's
simulation gives no geometry to, so each case throws before it runs (review round 2's
criteria finding C15, [D015](decisions.md#wo-036-d015)). Hence the whole base engine.

The repair changes priority steering alone. `git diff --quiet eb9d227 --
libs/features/tools/src/lib/studies` exits 0, so the Collision avoidance study and its spec
are as they were, and `avoid` in `steering.ts` is byte-for-byte the base's: the file's diff
removes only its one import line.

## Criterion 2: the known outcomes

`trial-known-outcome.json` keeps every frame hash and series it had; regenerating it adds
only the three new metrics' series (12 lines, all `null` path lengths and zero replans and
blocked units, since its one tool is Flocking). `walls-known-outcome.json` is new: the twelve
units west of x = 70 given A* toward (100, 40), past a wall standing down from the top edge to
y = 64 and two obstacles at its foot, all drawn at frame 0; branch B seals the gap at frame 30.
In branch A every unit of the squad arrives (the group at 9.47 s) with no frame placing a
unit inside a shape; in branch B all twelve plan again at the seal and end blocked, and the
branches first part at frame 31. Both files were written by
`WRITE_SCENE_FIXTURES=1 npx vitest run … known-outcome.spec.ts`, formatted with Prettier, and
left byte-identical by a second regeneration and by a plain run (`shasum -a 256 -c`).

## Criterion 6: the regenerated visual baselines

Regenerated on macOS with `npx nx e2e-visual dotln-e2e -- --update-snapshots=all
src/scene.visual.spec.ts`, the scene's visual spec alone, so no other baseline was
rewritten. They were read at reading size in their final bytes as follows: `scene-1440.png`
at 14:53:58Z, `scene-flocking-1440.png` at 14:56:46Z and `scene-360.png` at 14:56:49Z on
2026-11-15, before the README first said all six were read; `scene-768.png`,
`scene-flocking-768.png` and `scene-flocking-360.png` only at 16:30Z, after meta critic 1 found
the claim ran ahead of the reads ([D014](decisions.md#wo-036-d014)). Every one is a
`scene-*.png` under `apps/dotln-e2e/src/visual-baselines/darwin/`:

| Baseline | What changed in it |
| --- | --- |
| `scene-360.png` | The transport gains the field tools (Select, Draw wall, Place obstacle, Clear walls, the Tile graph's cell size); the strip shows eight instruments in three columns, path length, replans and blocked units after the five it had. |
| `scene-768.png` | The same field tools in one row; the eight instruments in two rows, six and two, each unit wrapping under its figure where a column is narrow. |
| `scene-1440.png` | The field tools in one row under the toggles; the eight instruments in one row; the rail gains its Ways group of ten path tools, and Collision avoidance and Obstacle and wall avoidance in Avoid. |
| `scene-flocking-360.png` | As at 360, with the rail scrolled to Flocking, chosen, and its reading beneath. |
| `scene-flocking-768.png` | As at 768, with Flocking chosen and its reading beneath the rail. |
| `scene-flocking-1440.png` | As at 1440, with Flocking chosen and its reading in the inspector. |

## Criteria 4, 5, 7 and 9: what holds them

- **Saved scenes (4).** `scene-store.spec.ts` covers a kept trial with only the eight first
  series restoring complete with the three route series as series of nulls, the same trial imported
  from an export, a series of words still refused, and field steps exported and imported as
  written; the browser test "a saved composition keeps its walls through a reload and replays
  them" saves, reloads, opens and steps to find the wall in the list. `npm run
  check:fixtures` validates `walls-known-outcome.json`, which `check-scene-fixtures.mjs` now
  lists, and `tools/scene-fixtures.test.mjs` checks that a known outcome carrying field steps
  validates and one with a malformed step does not.
- **The rail and the costs (5).** The facade spec compares the rail's ids with
  `sceneTools('aifg')` filtered by `isRunnable` (28 tools), puts the five path rows and the
  five cost rows in Ways and both avoidance rows in Avoid, and runs every offered tool at its
  defaults with every parameter read. `pathfinding.spec.ts` "cost steps on the known field"
  applies a `path.cost` step with a terrain multiplier of 2 and finds more expansions for the
  same waypoints, and Tactical pathfinding's and Tactic weights and concern blending's
  weights leaving the waypoints and the expansions as they were; the inspector says which in
  words (`costTravel`, `costLayers`, `costLayersOnly`). `interpretedKinds` equals
  `sceneTransformKinds` (the facade spec); `npm run catalog:check` and `npx nx test catalog`
  pass; `aifg-a:247` still reads `status: background` with no `faces`.
- **Messages (7).** Every new string on the scene is a key under `scene.` in
  `apps/dotln/public/i18n/en.json`, A*'s heuristic names among them, with the three path
  transforms' readings under `tools.transforms`; `npm run i18n:check` exits 0 and `node --test
  tools/i18n-copies.test.mjs` passes, the two testing copies equal to the app's catalog.
- **Build and dependencies (9).** `package.json` and `package-lock.json` have no diff against
  `eb9d227`; no runtime dependency was added. The production build exits 0 with an initial
  total of 406.92 kB and no budget warning, and `npm run check:bundle` passes, its initial
  bytes 406,919 and no lazy code in the initial files (the Preflight below).

## The Preflight

The order's Preflight line ran on the candidate review round 3 and the change after it leave
([D016](decisions.md#wo-036-d016)), before the first full gate, in the target worktree with
`NX_DAEMON=false` and `NX_ISOLATE_PLUGINS=false`, one command at a time, each with its own exit
code, between 17:06:32Z and 17:14:25Z on 2026-11-15:

| Command | Exit code | Result |
| --- | --- | --- |
| `npx nx format:check` | 0 | |
| `npx nx run-many -t lint` | 0 | 20 projects |
| `npx nx run-many -t test --exclude=tools --parallel=1` | 0 | 17 projects |
| `npx vitest run --config libs/features/tools/vite.config.mts --maxWorkers=1` | 0 | 129 files, 1,116 tests |
| `npx nx run-many -t build --parallel=1` | 0 | `dotln` |
| `npm run typecheck:e2e` | 0 | |
| `npm run lint:fixtures` | 0 | |
| `npm run lint:components` | 0 | |
| `npm run check:fixtures` | 0 | the board and scene fixtures, the catalog and the studies |
| `npm run studies:check` | 0 | |
| `npm run i18n:check` | 0 | |
| `npm run test:tooling` | 0 | 95 of 95 |
| `npm run check:bundle` | 0 | initial bytes 406,919 |
| `npx nx e2e dotln-e2e` | 0 | 180 passed, 17:10:11Z to 17:13:40Z |
| `npx nx e2e-visual dotln-e2e` | 0 | 50 passed, 17:13:50Z to 17:14:25Z |

The line's `npx nx run-many -t lint test build` ran as its three targets, the tools project's
tests apart at one worker: under the session's host guard a command run outside the bounded
wrapper has 3 GiB, and the tools project's tests at their configured two workers peak just
above it ([host-qualification.md](host-qualification.md)). The gate runs the declared
command whole under its own budget.

## The gates

After the Preflight, from this launchpad worktree on 2026-11-15:

- **Document gate.** `DOTLN_LAUNCHPAD=<launchpad worktree> node scripts/test-runner.mjs --document`
  passed 15 of 15 suites at 17:16:44Z (structural 38.4 s, `npm run test:docs` 65.0 s) and again at 17:28:00Z (35.5 s and 62.4 s), after D013's last wording and the decisions index it generates. Its row
  also records the tree without this order's evidence directory, so the evidence written after
  it leaves the row standing.
- **Plain target gate.** `node scripts/target-gate.mjs WO-036` passed at `eb9d227` in 4 min 1 s,
  finishing at about 17:20:58Z: install 157.8 s, lint 53.0 s, typecheck 1.0 s, test 27.7 s and
  format 2.0 s.
- **Review target gate.** `node scripts/target-gate.mjs WO-036 --review` passed at `eb9d227` in
  1 min 57 s, finishing at about 17:23:09Z: install 15.2 s, lint 61.3 s, typecheck 1.1 s, test
  1.1 s, format 2.0 s, build 1.0 s, e2e 1.0 s and visual 34.4 s. Its test row replayed the plain gate's run, and its build and e2e rows the Preflight's, from Nx's cache, the inputs being the same.

A target gate passes only when every command passes and the target worktree's tree and `HEAD`
are as they were before each command, so neither gate changed a tracked byte.

## The repair of VER-001

2026-11-15, `resume: fix`. [VER-001](../../verifications/WO-036/VER-001.md) failed the order on
three findings; the repair's decisions are [D019](decisions.md#wo-036-d019) to
[D026](decisions.md#wo-036-d026) and its handoff is [handoff.md](handoff.md). The tree VER-001
judged is the target's `d0a6c4e21f2e0e0f22e8cb52165d88b8e526a199`; the repair's one review read
`52d4693845cbdd20c1a5aba868de21776036266d`; the candidate is
`78254cc323844f197c04f8d1af6ae2020e655150`. The Preflight, the arms and the filed probes ran
on `c5485a4ead3d0f34377d4feb99c3a0e5e9980415`, called the Preflight tree below, from which the
candidate differs in passages of `scene.md` and `scene-rules.md` and one comment in
`steering.spec.ts` (D026): the engine's source is the same in both. The repair changes eight
files since the judged tree, all in the target: the engine's `steering.ts`, `simulation.ts`
and `interpreter.ts`, its `steering.spec.ts` and `path-following.spec.ts`, the browser spec
`scene.spec.ts`, and the documents `scene.md` and `scene-rules.md`.

| Finding | What the repair holds | Decision |
| --- | --- | --- |
| F1, criterion 3: a settled crowd under priority steering reached a near objective after plain Arrive | Under separation's claim what a unit's neighbours add (a stiffened push and friction) is equal and opposite between a pair, so a crowd's centre moves as its units' own steering moves it; and a unit's own steering does not answer for the speed the push gives it, so a carried unit does not brake against the crowd. Closed at Arrive's defaults; steep tunings of Arrive are still late and criterion 3 is judged unmet | [D020](decisions.md#wo-036-d020), [D025](decisions.md#wo-036-d025), [D026](decisions.md#wo-036-d026) |
| F2, criterion 1: a unit with Wander kept walking under a no-route notice | A unit with no route is steered by nothing, in one place, and brakes where it stands whatever it carries | [D021](decisions.md#wo-036-d021) |
| F3, criterion 10: the document gate's formatting task timed out | No change; the check takes 11.9 s alone, and the gate's own row at the repair's tree decides | [D024](decisions.md#wo-036-d024) |
| Adjacent, met while closing F2's class | A formation step takes the units it places off their routes | [D022](decisions.md#wo-036-d022) |

Two limits are boarded in the target's specs, each a skipped failing case under a `BOARDED:`
comment (WS-001 rule 21), and each carried by a follow-up: with Arrive tuned to a slow radius
of 3 or less a crowd still reaches a near objective a few frames after plain Arrive
(`FUP-74e51991919f0a80`), and a two-level formation's anchor takes no route round a wall
(`FUP-bdcc89104aa99bb0`). Both cases were run unskipped in a scratch copy, on the tree the
review read, and failed on their own assertions (24 frames against 22; the formation never
forms); the steep case still fails on the candidate (D025), and its cause is not established
(D026).

### The arms

The repaired specs, run four ways with Node 26.9.0 and Vitest 5.0.5 on 2026-11-15: the base
and judged arms at 20:17Z, the reviewed arm at 20:14:36Z and the candidate arm at 20:14:20Z on
the Preflight tree and again at 20:43:16Z on the candidate, with the same result:

| Arm | What ran | Exit code | Result |
| --- | --- | --- | --- |
| Integrated base | The block "a crowd under priority steering with Arrive" of the repaired `steering.spec.ts`, 25 cases and one boarded, copied unchanged into `criterion3.spec.ts` and run against the base engine exported whole, by the recipe of [§Criterion 3](#criterion-3-the-priority-repair-failing-at-the-base-and-passing-after-it) | 1 | 24 failed, 1 passed, 1 skipped of 26. The rest cases fail on `expected false to be true` and the re-targets on the crowd never reaching (`Infinity`). The one pass is the stopwatch's credit at two units, which the base gives early because its crowd crawls |
| The engine as VER-001 judged it | The repaired `steering.spec.ts` and `path-following.spec.ts` in a copy of the engine's project with `simulation.ts`, `steering.ts` and `interpreter.ts` as that tree has them (each compared equal to its blob in `d0a6c4e2`) | 1 | 21 failed, 65 passed, 2 skipped of 88: the five re-targets from 1.05 to 2.5 units, the crowds of 3, 6, 7 and 20, the stopwatch at two far offsets, the first step, the four cases of `neighbourForces`, the three blocked units and the two formation cases |
| The engine as the review read it | The repaired `steering.spec.ts` in a copy of the engine's project with `simulation.ts` as tree `52d46938` has it | 1 | 5 failed, 63 passed, 1 skipped of 69: the crowds of 6 and 7 by a frame, the stopwatch at the three far offsets by 4 to 7 |
| Candidate | `npx vitest run --config libs/shared/scene-engine/vite.config.mts` in the target worktree | 0 | 217 passed, 2 skipped of 219, the two skipped being the boarded cases |

### What was measured

[repair-1/README.md](repair-1/README.md) gives each probe's command and what it prints, and
`repair-1/results/` holds the raw output of each run: `judged-*` on the engine as VER-001
judged it, `reviewed-*` on the tree the review read, and the rest on the candidate's engine
(run on the Preflight tree, but for the scan of sizes 17 and 19, run on the candidate). For a
settled crowd sent to a near objective, against the same units under a plain Arrive from the
same places, by the frame the crowd's centre comes inside the target radius unless a row names
the stopwatch, and with twelve units unless a row names other sizes:

| | The engine as VER-001 judged it | The tree the review read | The candidate |
| --- | --- | --- | --- |
| VER-001's three two-unit offsets, frames for the centre to reach | 51 against 48 | 47 against 48 | 43 or 44 against 48 |
| The stopwatch's credit at its four longer offsets | 5, 1 and 1 frames after plain Arrive, and 3 before | 2 to 7 after | 4 to 8 before |
| Twelve units at Arrive's defaults, objectives from 1.005 to 4 units | later on 3,983 of 5,508, by up to 3 frames | none of 13,770 | none of 13,770 |
| Crowds of 2 to 16, 18 and 20, 17 sizes | later for every size, 1,052 to 4,450 of 5,508 | 283 of 234,090, a frame each, across seven sizes | none of 234,090 |
| Crowds of 17 and 19 | not run | not run | none of 27,540 |
| Arrive retuned, 25 tunings, 108 objectives each | later at all 25, by up to 14 frames | none later at 14 | none later at 19; slow radii of 1, 2 and 3 later on 96, 96 and 56 by up to 5 frames; a time to target of 0.05 and a weight of 5 on 12 by one frame; a time to target of 2 on 19 by up to 4 |
| 144 crowd tunings, 3,600 frames | 143 at rest, 144 arrive, 54 touching frames | 144, 144, 28 | 144, 144, 17 |
| A unit with Wander, sealed off on the move | still moving at 2.39 after 300 frames | at rest 1.58 units on | at rest 1.58 units on, and off again when the walls clear |

The stopwatch's figures are for VER-001's seven offsets with twelve units, of which the row
above gives the four longer ones; no other crowd size was put to the stopwatch. The filed scan of Arrive's tunings does not sample a target radius of 0,
which the catalog admits; a scratch scan that does is recorded with the rules measured and not
taken, and the function that ran them, in [repair-1/variants.md](repair-1/variants.md).

### The repair's Preflight

The order's Preflight line ran again on the Preflight tree
(`c5485a4ead3d0f34377d4feb99c3a0e5e9980415`, the candidate until D026's correction of two
documents and one comment; it was not run again after that), in the target worktree with
`NX_DAEMON=false` and
`NX_ISOLATE_PLUGINS=false`, one command at a time, each with its own exit code, between
20:17:34Z and 20:25:08Z on 2026-11-15. It had run once before, between 19:52Z and 20:01:54Z,
on the tree the review read, with the same exit codes.

| Command | Exit code | Result |
| --- | --- | --- |
| `npx nx format:check` | 0 | |
| `npx nx run-many -t lint` | 0 | 20 projects |
| `npx nx run-many -t test --exclude=tools --parallel=1` | 0 | 17 projects; the engine's suite 217 passed, 2 skipped |
| `npx vitest run --config libs/features/tools/vite.config.mts --maxWorkers=1` | 0 | 129 files, 1,116 tests |
| `npx nx run-many -t build --parallel=1` | 0 | `dotln`, initial total 406.92 kB |
| `npm run typecheck:e2e` | 0 | |
| `npm run lint:fixtures` | 0 | |
| `npm run lint:components` | 0 | |
| `npm run check:fixtures` | 0 | |
| `npm run studies:check` | 0 | |
| `npm run i18n:check` | 0 | |
| `npm run test:tooling` | 0 | |
| `npm run check:bundle` | 0 | initial bytes 406,919, as before the repair |
| `npx nx e2e dotln-e2e` | 0 | 181 passed, 20:21:00Z to 20:24:34Z, the new case among them |
| `npx nx e2e-visual dotln-e2e` | 0 | 50 passed, 20:24:34Z to 20:25:08Z; the repair changes no baseline |

### The repair's gates

From this launchpad worktree on 2026-11-15, after the Preflight, with neither `main` moved
(read at 20:26:06Z: the target's `origin/main` is `eb9d227`, the launchpad's `562fb91`):

- **Review target gate, first run.** `node scripts/target-gate.mjs WO-036 --review` passed at
  `eb9d227` on the Preflight tree `c5485a4ead3d0f34377d4feb99c3a0e5e9980415` in 2 min 45 s,
  from 20:26:22Z to 20:29:10Z: install 40.5 s, lint 55.3 s, typecheck 1.0 s, test 29.3 s,
  format 2.4 s, build 1.1 s, e2e 1.2 s and visual 34.4 s. Its build and e2e rows replayed the
  Preflight's runs from Nx's cache, the inputs being the same; the target's tree was the same
  after it.
- **Review target gate, on the candidate.** After D026's correction the same command passed
  at `eb9d227` on the candidate `78254cc323844f197c04f8d1af6ae2020e655150` in 2 min 45 s, from
  20:43:29Z to 20:46:17Z: install 42.1 s, lint 83.3 s, typecheck 1.0 s, test 4.7 s, format
  1.4 s, build 0.5 s, e2e 7.6 s and visual 24.5 s. Before it, on the same bytes, the target's
  `npx nx format:check` exited 0 and the engine's suite, run by itself at 20:43:16Z, passed 217
  with 2 skipped.
- **Document gate.** `DOTLN_LAUNCHPAD=<this worktree> node scripts/test-runner.mjs --document`
  passed from 20:52:31Z to 20:53:33Z with nothing else of the session running: `npm run
  test:docs`, 15 passed and 0 failed of 15 fresh tasks, its formatting task among them, which
  is the task that timed out twice for VER-001 (F3, [D024](decisions.md#wo-036-d024)). The
  session journal records the gate at 61,159 ms. It ran after the last edit outside this
  evidence directory (the indexes and the follow-up register regenerated after D026), and the
  launchpad's `git status` read the same before and after the release and publication reports
  that followed it.

## The final review

2026-11-15, `resume: final review`. [FINAL-001](../../final-reviews/WO-036/FINAL-001.md) accepts
the order on the target's commit `a96a60cc3f2c54e5da5c9b615e9cf00a49916a0a`, whose tree is the
candidate `78254cc323844f197c04f8d1af6ae2020e655150` that VER-002 and VER-003 judged; the review
changed no source. Its decisions are [D029](decisions.md#wo-036-d029) to
[D031](decisions.md#wo-036-d031).

The reviewed tree is four commits on `eb9d227`:

| Commit | What it holds |
| --- | --- |
| `bf9b4e8` | The engine: geometry and field steps, the tile graph, search, following, the blocked state, wall avoidance, the head-on policy, the priority repair, the metrics, their specs and the two known outcomes |
| `d0add77` | The seven typed catalog rows, the grown enum, the kind lists and the rewritten summary |
| `f697147` | The older-trial rule in `stored-scene.ts` and its specs |
| `a96a60c` | The scene feature, its messages and testing copies, the reading mapper's labels, the browser cases and the six regenerated baselines, the field skin's tokens and the documents |

### What the reviewer ran

Run from the launchpad worktree, each under the bounded wrapper, against the target worktree or
against an export of the base engine (`git archive eb9d227` of `libs/shared/scene-engine`, the
scene's fixture, `tsconfig.base.json` and `package.json`, extracted in session scratch):

```sh
node scripts/harness.mjs bounded -- node docs/evidence/WO-036/final-001-probe.mjs ../DotLn-Angular-wo036 ../DotLn-Angular-wo036 crowd
```

| Probe mode and engine | What it prints | Result file |
| --- | --- | --- |
| `crowd`, candidate | Six crowds of twelve under Priority steering and Arrive (the spec's units in either order of the two steps, two twelves of the scene's own twenty, and the spec's at slow radii of 3 and 1): the frame the stopwatch first credits each, the frame it comes to rest, and, settled and sent seven distances from 1.05 to 12 units in sixteen directions, how many objectives it reaches later than the same units under Arrive alone | `final-001-results/crowd-candidate.txt` |
| `crowd`, base | The same on the base engine | `final-001-results/crowd-base.txt` |
| `blocked`, candidate | Six of the scene's units given A* past a wall and sealed off on the move, carrying each of eight compositions beside the path tool: activity, rest, movement in the next 120 frames and after the walls clear | `final-001-results/blocked.txt` |
| `headon`, candidate | Two of the scene's units exactly head on with Arrive and Collision avoidance: least gap, sides, collisions, and whether a second run is the same | `final-001-results/headon.txt` |

The candidate probes ran before the four commits and again after them, with the same output.

| | The base | The reviewed commit |
| --- | --- | --- |
| Twelve units under priority steering with Arrive at the catalog's defaults, four crowds | none at rest inside 3,600 frames, peak speed 0.11 to 0.17 after 2,400 | all at rest, at frames 629, 629, 1,326 and 855 |
| The same four, settled and sent 1.05 to 12 units, 112 objectives each | sent 2 units or more, never there inside 1,800 frames in 70 to 80 of 80 cases a crowd | none later than plain Arrive |
| The spec's twelve at a slow radius of 3 | never there in 80 of 80 | later by 1 to 3 frames at 2, 5, 8 and 12 units |
| The spec's twelve at a slow radius of 1 | never there in 71 of 80 | later by up to 5 frames from 1.5 units on |
| The frame the stopwatch first credits a scattered crowd | 270, 309, 344, 315 and 411 | 354, 342, 395, 384 and 418 |
| A unit sealed off on the move, eight compositions | no field steps at the base | blocked and at rest under all eight, moving again when the walls clear |
| Two units exactly head on with Collision avoidance | not run | least gap 0.9997, no collision counted, the same on a second run |

Of the eight compositions in the `blocked` run, three carried a term that was silent while the
squad walked (Flee, far from the objective; Obstacle and wall avoidance, with nothing in its
rays' reach; the Equilibrium fallback order, whose seek group claimed the unit), so their
figures before the seal equal those of the squad carrying nothing else; Wander, Flocking,
Collision avoidance and Priority steering each moved the squad differently before it was
sealed off, and all eight end the same way.

At the reviewed commit the reviewer also ran the target's review gate (below), the engine's
suite by itself (`npx vitest run --config libs/shared/scene-engine/vite.config.mts`, exit 0, 217
passed and 2 skipped of 219, started 22:12:01Z), the scene feature's and the scene store's
suites without Nx's cache (191 and 34 passed) and `npm run check:bundle` (exit 0, initial bytes
406,919, no lazy code in the initial files); and compared `trial-known-outcome.json` with the
file at `eb9d227` field by field (hashes, the other fields and the eight carried series equal,
the three added series nulls and zeros).

### The reviewer's session on the page

WS-001 rule 24 has the final reviewer perform the Objective's session before recording a pass.
[final-001-walkthrough.mjs](final-001-walkthrough.mjs) drives it in a Chromium launched from the
target's Playwright installation against the production build
(`npx nx build dotln --configuration=production`, served from `dist/apps/dotln/browser` on the
loopback), reading the page's text at each step into
`final-001-results/walkthrough-route.txt` and
`final-001-results/walkthrough-live-avoid-headon.txt`. The captures the reviewer read, under
`walkthrough/`:

| Step | Capture |
| --- | --- |
| A squad of eleven on its routes round the wall, the tool live | [03](walkthrough/final-001-03-route-2080.png) |
| Arrived, 9.5 s | [04](walkthrough/final-001-04-arrived-2080.png) |
| Show search at frame 6 after a restart | [05](walkthrough/final-001-05-show-search-2080.png) |
| A second wall mid-run, eleven replans, the search still shaded | [06b](walkthrough/final-001-06b-replan-live-2080.png) |
| The gap sealed: the notice, eight units still and blocked | [07](walkthrough/final-001-07-no-route-2080.png) |
| That state at 360 by 800 | [field](walkthrough/final-001-08-blocked-360.png), [notice](walkthrough/final-001-08-notice-360.png) |
| At 768 by 900, 1440 by 900 and 3840 by 1620 | [768](walkthrough/final-001-08-blocked-768.png), [1440](walkthrough/final-001-08-blocked-1440.png), [3840](walkthrough/final-001-08-blocked-3840.png) |
| The trial with and without the sealing wall, first differing at frame 158 | [09](walkthrough/final-001-09-trial-2080.png) |
| Saved, reloaded and opened: the wall and both obstacles back at frame 1 | [11](walkthrough/final-001-11-reopened-2080.png) |
| Obstacle and wall avoidance feeling the wall, and later | [13](walkthrough/final-001-13-whiskers-2080.png), [14](walkthrough/final-001-14-whiskers-later-2080.png) |
| The head-on pair parted, no collision, 2.5 s on both runs | [16](walkthrough/final-001-16-head-on-parted-2080.png) |

Three counts in the route log were read before the page had rendered the change and are wrong
as printed: the shapes after the second obstacle (2, where the page had 3), the selected units
after the marquee (0, where eleven were selected) and the shapes after the reopened composition's
first step (0, where the capture shows 3). The captures and the later lines of the same log bear
out the true figures.

### The final review's gates

- **Review target gate.** `node scripts/target-gate.mjs WO-036 --review` passed at
  `a96a60cc3f2c54e5da5c9b615e9cf00a49916a0a` in 2 min 17 s, finishing at about 22:10:45Z: install
  44.0 s, lint 53.9 s, typecheck 1.0 s, test 1.1 s, format 2.0 s, build 0.9 s, e2e 1.0 s and
  visual 33.2 s. Its test, build and e2e rows replayed earlier runs from Nx's cache, the inputs
  being the same bytes the repair's gates judged.
- **Document gate.** `DOTLN_LAUNCHPAD=<this worktree> node scripts/test-runner.mjs --document`
  passed from 22:19:56Z to 22:20:59Z, after FINAL-001's last edit and with nothing else of the
  session running: `npm run test:docs`, 15 of 15 fresh suites in 62,195 ms. Its row records the
  tree without this evidence directory, so what the review wrote here afterwards leaves it
  standing, and `final-review-result pass` consumed it.
