# VER-001 independent reproductions

2026-11-15. Target base `eb9d227483e30164105da077f50673789d1e5c9f`, candidate tree
`d0a6c4e21f2e0e0f22e8cb52165d88b8e526a199`. No target implementation file was changed.

Run from the launchpad worktree:

```sh
node scripts/harness.mjs bounded -- node docs/evidence/WO-036/ver-001-engine-probe.mjs ../DotLn-Angular-wo036
```

The [runner](ver-001-engine-probe.mjs) bundles the [probe](ver-001-engine-probe.ts)
against that worktree in memory. It writes no target file. Every composition step
passes `isSafeStep` and `applyStep` accepts it. The command exited 0 at
2026-11-15T18:07:00.617Z; this means the observations completed, not that the
requirements passed. [Machine observations](ver-001-engine-results.json) include the
bounded run's exit code and resource measurements.

## F1: a nearby re-target can reach the objective later

Start with `createScatteredUnits(12)`, seed 1, objective `(60, 40)`, priority order
avoidance 1, separation 2, seek 3, epsilon 0.1, and Arrive weight 1. Advance 2,400
frames. All twelve are at rest and their maximum speed is zero. Set an objective
at the settled crowd's centroid plus each offset below. Compare with a fresh
plain-Arrive scene built from those same twelve positions, as the existing
`steering.spec.ts` comparison does. Both runs use the same objective.

The centre column uses the existing spec's definition: the first frame on which
the centroid is at most 1 field unit from the objective. The stopwatch column
uses the first frame on which `measure(state).timeToObjective` is non-null. Frame
numbers are counted after the re-target.

| Offset | Priority centre | Plain centre | Priority stopwatch | Plain stopwatch |
| --- | ---: | ---: | ---: | ---: |
| `(2, 0)` | 51 | 48 | 104 | 111 |
| `(-2, 0)` | 51 | 48 | 104 | 111 |
| `(0, 2)` | 51 | 48 | 104 | 111 |
| `(4, 0)` | 75 | 78 | 125 | 120 |
| `(10, 6)` | 105 | 114 | 151 | 150 |
| `(0, -12)` | 107 | 116 | 152 | 151 |
| `(-14, 0)` | 113 | 125 | 158 | 161 |

Criterion 3's no-later comparison fails at a two-unit offset under the spec's own
centre definition. The requirement gives no minimum distance for nearby, and two
units is a supported objective change. The stopwatch is not needed to establish
that failure; it shows why changing the measurement alone does not settle the
concern recorded in D003. The three longer offsets in the existing regression
spec all pass its centre comparison.

**Repair rule:** preserve the priority-only repair, the rest and slow-radius
cases, and the unchanged old known-outcome hashes, while making the no-later
comparison hold for nearby supported objectives. Include objectives inside the
crowd's spacing in the regression cases. Do not silently add a distance exemption
to the criterion or replace its comparison with an allowance for a lag.

## F2: Wander keeps a unit moving while it is reported blocked

In the pure-engine probe, put one unit at `(20, 20)`, draw a wall from `(60, 0)`
to `(60, 50)` with thickness 1, and set objective `(100, 20)`. Give the unit A*
with octile heuristic, optionally preceded by Velocity matching or Wander at
weight 1. Advance 30 frames, then seal the gap with a second wall from `(60, 40)`
to `(60, 80)`. Advance 300 more frames.

| Prior steering | Activity after seal | Displacement since seal | Final speed | At rest |
| --- | --- | ---: | ---: | --- |
| None | blocked | 1.744931 | 0 | yes |
| Velocity matching | blocked | 1.744931 | 0 | yes |
| Wander | blocked | 4.853557 | 2.394456 | no |

The units of displacement and speed are the engine's field units and field units
per simulation second. This separates the remaining failure from D016's fixed
Velocity matching case. In `simulation.ts`, `towardObjective` brakes a blocked
unit's seek/arrive terms, while `ownSteering` still blends a nonzero Wander term
and its field-edge term. The resulting velocity remains nonzero.

The served production page independently reproduces it with normal controls:

1. Start a fresh composition, select unit-01 and apply Wander.
2. Draw a vertical wall at x = 60 from y = 0.5 to y = 79.5, thickness 1.
3. Put the objective on the opposite side and apply A* with octile heuristic.
4. Play, then pause. The notice says there is no route and that the unit stops
   where it stands, but it keeps walking.
5. At frame 332, the row reads `walking · blocked · no route`. Advance another
   120 frames with Step: it still reads that at frame 452, and the notice still
   promises that it stops. The browser reported no console errors.

Captures: [field and notice](walkthrough/ver-001-11-blocked-wander-2080.png),
[unit row](walkthrough/ver-001-11-blocked-wander-row-2080.png), and
[after 120 more frames](walkthrough/ver-001-12-blocked-wander-after-2080.png).

This is criterion 1's sealed-gap behavior on a supported composition. D015 and
D016 already admit prior steering followed by A* as an ordinary input to that
step; Wander is offered in the same rail. No malformed stored state, unsupported
transform or internal browser injection is needed.

**Repair rule:** a route reported blocked must bring the unit to rest even when
other offered steering was applied before A*. Keep the composition and its
parameters, so clearing the obstruction can resume the run. Add a case that
starts on the move and checks actual rest, not just the `blocked` activity.

## Verification operations

The canonical `targetGateEvidence` reader accepts the executor's review row at the
current candidate tree: install, lint, typecheck, test, format, build, e2e and
visual; recorded 2026-11-15T17:23:09.045Z. The verifier also ran the target package's
`format:check`, exit 0. Its first formatting command used `npm exec --prefix`
from the launchpad, which left Nx in a non-workspace directory and exited 1
without checking formatting. It was corrected to `npm --prefix <target> run
format:check`; the failed invocation is not a subject defect.

The first document-gate attempt ended at its structural formatting preflight:
it named the new `ver-001-engine-probe.ts` as unformatted and reached the
format suite's 0 h 1 min timeout. No document suite ran in that attempt. Only
that evidence file was formatted before the gate was rerun; no target source or
gate configuration changed.

The separate documentation check identified an absolute home path in the
reproduction command above. It was replaced with the sibling worktree's relative
path before rechecking; the command still resolves the same target.

## F3: the document gate does not finish its formatting prerequisite

The second document-gate attempt also exited 1 at formatting, now with no
formatting warning. All 14 later suites were skipped. Both used the briefing's
qualified `scripts/test-runner.mjs --document` command; the failed rows report
zero passing suites. `scripts/test-runner.mjs` declares the format task with
`timeoutMs: 30000`. A separate bounded run of
`npm run format:check -- --log-level debug` exited 0 and printed
`All matched files use Prettier code style!`. Its measured run was 0 h 1 min:

```json
{
  "startedAt": "2026-11-15T18:17:27.082Z",
  "finishedAt": "2026-11-15T18:18:22.021Z",
  "durationMs": 54938,
  "exitCode": 0,
  "executed": true,
  "droppedOutputBytes": 0
}
```

That debug run establishes that the current files are formatted; its logging
overhead means it does not measure the ordinary command's exact duration. The
ordinary gate's two timeout results establish that it did not finish inside its
own deadline on this host. The cause of the difference from the executor's
passing run is unresolved. It is not evidence that a target product test failed,
nor that the criterion is impossible for every candidate.

Criterion 10 remains unmet. A passing full document row at the current authored
tree is required before it can be met. No timeout, check, success record or
target implementation was altered to obtain a pass. D018 records the repair
handoff; a final gate attempt after these record edits remains the required
closeout check rather than a promise of success.

An automatic Playwright snapshot initially landed in `.playwright-mcp/` in the
launchpad. It was preserved in session scratch; the dated screenshot evidence
remains here. The briefing then classified the launchpad changes as documents
and records, requiring no complete launchpad product run. The verifier's isolated
browser and production server were stopped before handoff.
