# VER-002 independent reproductions

2026-11-15. These observations judge the repaired target tree
`78254cc323844f197c04f8d1af6ae2020e655150`, based on
`eb9d227483e30164105da077f50673789d1e5c9f`. The verifier changed no target
implementation or test. The executable source is [ver-002-probe.ts](ver-002-probe.ts),
loaded without writing a target bundle by [ver-002-probe.mjs](ver-002-probe.mjs).

Run from the launchpad worktree:

```sh
node scripts/harness.mjs bounded -- node docs/evidence/WO-036/ver-002-probe.mjs ../DotLn-Angular-wo036
```

The run started at 2026-11-15T21:19:56.654Z and exited 0 at
2026-11-15T21:19:57.005Z, with no dropped output. Exit 0 means the probe completed,
not that every comparison passed. It validates each constructed step with
`isSafeStep` and rejects an interpreter refusal. All input steps were accepted.

## F1: a supported Arrive tuning still reaches later

The probe starts twelve scattered units using the existing test builder, sets
the objective to `(60, 40)`, applies priority steering with avoidance 1,
separation 2, seek 3 and epsilon 0.1, then Arrive with weight 1. After 2,400
frames, it sends the settled crowd to eight nearby objectives. The control uses
the same settled positions, new units at rest and plain Arrive with the same
weight and slow radius. Reaching means the centroid first comes within one field
unit of the new objective, the existing spec's definition; the observation bound
is 1,200 frames. The other Arrive parameters retain their defaults.

Every crowd reached rest before the re-target: `isAtRest: true`, peak speed 0.
The catalog's Arrive parameter admits a slow radius from 1 to 50, default 10
(`libs/shared/catalog/src/data/tools-aifg-a.json`, the `slow-radius` parameter).
Both failing tunings are therefore ordinary offered inputs.

Each cell below is **priority frames / plain Arrive frames**. Lower is earlier.

| Offset from settled centroid | Radius 10 | Radius 3 | Radius 1 | Radius 20 |
| --- | --- | --- | --- | --- |
| `(2, 0)` | 43 / 48 | **23 / 22** | **21 / 19** | 79 / 87 |
| `(-2, 0)` | 44 / 48 | **23 / 22** | **21 / 19** | 79 / 87 |
| `(0, 2)` | 44 / 48 | **23 / 22** | **21 / 19** | 79 / 88 |
| `(0, -2)` | 43 / 48 | **23 / 22** | **21 / 19** | 79 / 85 |
| `(3, 0)` | 57 / 68 | 29 / 29 | **28 / 26** | 113 / 132 |
| `(-3, 0)` | 57 / 67 | 29 / 29 | **28 / 26** | 113 / 131 |
| `(0, 3)` | 57 / 67 | 29 / 29 | **28 / 26** | 113 / 132 |
| `(0, -3)` | 57 / 67 | 29 / 29 | **28 / 26** | 113 / 134 |

The old default-radius reproduction now passes. Twelve of these 32 comparisons
still fail the no-later rule: four at radius 3 and eight at radius 1. This is a
criterion 3 failure, not evidence that the criterion is impossible. No minimum
distance or restriction to default tuning is stated by that criterion. This
probe does not quantify every admitted parameter, crowd size, initial state or
the page's arrival stopwatch; those are limits of the sample.

Repair ownership remains with WO-036. Hold settling and the no-later comparison
over supported tunings while changing priority steering alone; preserve the
original known-outcome hashes and the movement studies. Keep the failing cases
active during repair. [D027](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d027) records this judgment and
its reopening condition.

## VER-001 F2: blocked units now rest and resume

For each of three prior steering compositions, start one unit at `(20, 20)`,
draw a wall at x=60 from y=0 to 50, set a goal at `(100, 20)` and apply A* with
heuristic 3. Advance 30 frames so the unit is moving, then seal the gap with a
second wall at x=60 from y=40 to 80. Observe after 300 frames, another 120 frames
without changes, and 120 frames after clearing geometry.

| Prior steering | Speed before seal | Activity after seal | Rest / speed | Displacement in next 120 frames | Displacement after clear | Behavior retained |
| --- | ---: | --- | --- | ---: | ---: | --- |
| Wander, weight 1 | 6.782624 | blocked | true / 0 | 0 | 14.763902 | true |
| Velocity matching, weight 1 | 7.488938 | blocked | true / 0 | 0 | 20.267409 | true |
| Priority Wander 1, seek 2, epsilon 0.1 | 4.174079 | blocked | true / 0 | 0 | 6.551395 | true |

These are motion observations, not just the blocked label. The prior behavior
object remains equal after clearing geometry. The central blocked-state rule
now prevents active steering from fighting the stop, while clearing permits
movement again. This closes the earlier Wander reproduction.

The production page independently confirmed Wander then A*: unit 01 was
`still · blocked · no route` through 60 actual Step-button clicks after the
no-route state appeared. Clearing walls removed the notice and made it
`walking · moving · replanning`. See
[the inspected capture](walkthrough/ver-002-wander-rest-2080.png).

## Browser and command evidence

The [VER-002 walkthrough](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/verifications/WO-036/VER-002.md#walkthrough)
records the fresh production session, its five viewport captures and the
additional avoidance, replay and comparison checks. The isolated browser was
closed and its scratch HTTP server stopped before the document gate. The server's
bounded receipt is marked stopped because it was intentionally terminated after
use; this is not an application check failure. A Playwright snapshot temporarily
written outside the evidence directory was preserved in session scratch.

Fresh target commands completed successfully:

```sh
env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npm run format:check
env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npx nx test scene-engine --skip-nx-cache
env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npx nx build dotln --configuration=production
```

The engine task ran without the Nx cache. The build task used the cache; its
production output was what the browser served. The target's current review row
supplies the complete required checks, accepted by `targetGateEvidence` at the
exact candidate tree. The verifier did not repeat its installation or all suites.

Independent reads also found the original fixture's actual `hashes` field equal
to the integrated base and no diff in the movement studies, `package.json` or
`package-lock.json`. This comparison is of the existing hash field, not equality
between two absent fields. No expected data was changed by verification.

## Document-gate correction

The verifier's first `npm run test:docs` attempt passed formatting but rejected
two newly authored lines: D027's dispatch lacked the required control prefix,
and this reproduction command used an absolute home path. Both draft lines
were corrected before filing: D027 retains a paraphrase and its capture digest,
and the command now uses the actual sibling worktree's relative path. The
remaining suites had been skipped after that failure, so the whole document
gate was run again after regeneration and the terms scan. No gate code,
deadline, historical report or product implementation was changed.
