# VER-001 reproductions

The verifier's own probes of 2026-11-19 on target tree
`27e2390c6eb19f8e988e54d6545a4a0bb563ce9e` over base
`6eef542987ab2183817baba329a64373cb61b157`. [VER-001](../../verifications/WO-037/VER-001.md)
judges from these readings. The probe sources stayed in session scratch and
changed nothing in the target.

## How each was run

| Probe | Command | Result |
| --- | --- | --- |
| Format | `npx nx format:check` in the target | exit 0 |
| Production build | `npx nx build dotln --configuration=production` | exit 0, Nx cache hit on the gate's build |
| Bundle | `npm run check:bundle` | exit 0, no lazy code in the initial bundle |
| Engine specs | `npx vitest run` in `libs/shared/scene-engine` | 10 files, 231 passed, 2 skipped |
| Scene specs | `npx vitest run` in `libs/features/scene` | 8 files, 198 passed |
| Store specs | `npx vitest run` in `libs/features/scene-data-access` | 36 passed |
| Catalog specs | `npx vitest run` in `libs/shared/catalog` | 33 passed |
| Catalog check | `npm run catalog:check` | exit 0, 8 checkpoints, 3,463 tools |
| Fixture check | `npm run check:fixtures` | exit 0, `range-known-outcome.json` among five scene fixtures |
| Messages | `npm run i18n:check`, `node --test tools/i18n-copies.test.mjs` | exit 0; 3 copy tests passed |
| Engine lint | `npx nx lint scene-engine --skip-nx-cache` | exit 0 |
| Engine probe | a scratch TypeScript file bundled with the target's `esbuild` against the engine sources and fixtures, run under `node scripts/harness.mjs bounded` | readings below |
| Browser session | a headless Chromium launched by this session through the target's Playwright package, against a loopback static server over `dist/apps/dotln/browser` | the report's Walkthrough |

## The range fixture and the wall

Both branches of `range-known-outcome.json` ran twice. Every frame hash
reproduced, and the sampled hashes equal the fixture's. Bullets were in flight
on 90 frames and removing them from a frame changes its hash.

| Reading | Clear branch | Walled branch |
| --- | --- | --- |
| Shots | 9 | 9 |
| First hit on unit 09 | frame 45 of 150 | none |
| Hits on unit 09 at the end | 9, three from each shooter | 0 on every frame |
| Marks on the wall | 0 | 9 |
| Furthest a bullet travelled east | past the target | x = 71.02, the wall stands at 72 |

The branches first differ at frame 21. Varying what the fixture holds
constant: at the fastest streak the catalog offers (120) with a hit radius of
0, walls 1, 0.2 and 0.05 thick each stopped all 177 landed shots of 180, and
no bullet was ever east of the wall. A slow streak of 4 with the widest hit
radius also stopped there. A placed obstacle of radius 3 took nine marks from
ten shots with one still in flight.

The `hashes` of `trial-known-outcome.json` (11 a branch) and
`walls-known-outcome.json` (16 a branch) equal the base's arrays. The only
difference in either file is the four added metric series.

## The crossing piece

The stock board, unit 09 running south under Arrive, three shooters, 21 shots
in 145 frames. Hits on the runner:

| Aim | Drag 0 | Drag 0.1 | Drag 0.3 | Drag 1.0 |
| --- | --- | --- | --- | --- |
| None, the current position | 0 | not run | 0 | not run |
| The firing solution, tempo 36 | 11 | 0 | 0 | not run |
| Iterative targeting, four later cues, tempo 36 | not run | 11 | 8 | 0 |
| Iterative targeting, one later cue | not run | not run | 0 | not run |
| The firing solution, tempo 72 | 13 | not run | 0 | not run |
| Iterative targeting, tempo 72 | not run | not run | 8 | not run |
| The firing solution, tempo 12 | 11 | not run | not run | not run |
| Iterative targeting, tempo 12 | not run | not run | 5 | not run |

At drag 1.0 the streak arrives eight beats late and four later cues cannot
reach that far, which is what the inspector's Later cues sentence says.

## Knockout and the squads

- One shooter at knockout three: unit 09 had 2 hits on frame 82 and went down
  with 3 on frame 83. On every later frame of 400 its activity read `down`,
  its velocity was zero, its position and hit count did not change, and the
  shooter fired no more. A second run went down on the same frame. At knockout
  zero it took 13 hits and nobody went down.
- A target running under Arrive with an A* route went down on frame 128 and
  had zero velocity on every frame after.
- Two-level squads of five (wedge, line and column at spacing 5) that lost
  unit 09: the four left held exactly `patternSlots` for four at spacing 5,
  assigned exactly as `assignSlots` gives under the formation's costs. Slot
  error stood between 9.4 and 10.0 on the knockout frame, fell below 1 within
  52 to 62 frames and ended at 0.02 to 0.03.
- A fixed squad of units 09, 10 and 14: with leader 09 down, unit 10, which
  held the next slot, leads, the anchor is at unit 10's position on the next
  frame, and unit 14 holds slot 1. With follower 10 down, unit 14 moves from
  slot 2 to slot 1 behind leader 09. Giving unit 10 Wander instead leaves
  slots 0 and 2 held and three slots laid out.

## Per-frame cost

Twenty shooters under Iterative targeting at drag 1, the slowest tempo and
twelve shots a second, with the whole board flocking, cost 0.58 ms a frame
with up to 512 streaks in flight. An idle board costs 0.01 ms.

## Findings reproduced

### F1: Down units reads zero while the shooters are selected

Engine: with unit 09 down, `measure(state).downUnits` is 1 and
`measure(state, ['unit-08']).downUnits` is 0. Page: with units 03, 08 and 13
selected, the Down units instrument read 0 on frame 574 with unit 09's row
reading down, and 0 on frame 2450 with five rows reading down
([capture](walkthrough/ver-001-07-continuous-knockout-2080.png)).

### F2: a knockout setting counts the hits a piece already has

Page, one continuous session: units 04, 09, 10, 14 and 15 had 19, 82, 7, 11 and
8 hits when Hits to knock out was set to 3 on frame 2121. Unit 10 was down by
frame 2190, unit 09 by 2205, unit 04 by 2220, unit 15 by 2250 and unit 14 by
2450, each on the first shot to reach it that was fired after the setting.
Four of the five were bystanders in the line of fire, and one piece of the
six-piece squad was left standing
([capture](walkthrough/ver-001-07-continuous-knockout-2080.png)). From a
fresh composition the same setting retired unit 09 on its third hit (frame
571: 2 hits; frame 574: 3 hits, down).

### F3: Aiming and shooting forgets the mark when it is opened again

Page, a fresh load of the production build. Units 03, 08 and 13 were given
Aiming and shooting at three shots a second with unit 09 clicked as the
target, then The firing solution. Choosing Aiming and shooting again on the
same three showed Fire at as Objective point, Shots per second as 2 and the
preview line asking for a target, while the three were still hitting unit 09.
Moving only Hits to knock out to 3 and pressing Apply, which was enabled,
recorded a second fire step on frame 135 with no `target` and a rate of 2.
From frame 141 to frame 381 the shot count stayed at 21, unit 09 took only the
six shots already in flight (15 to 21 hits) and never went down. With an
objective on the field the same Apply would aim the three at that point.
Clicking the target's glyph or choosing it in Fire at before Apply, as the
Walkthrough did, applies the knockout to the intended target.
