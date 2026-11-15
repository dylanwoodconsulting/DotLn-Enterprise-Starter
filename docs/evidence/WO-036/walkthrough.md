# WO-036 walkthrough

The executor's own run of the order's Objective, 2026-11-15, on the candidate review round 3
and the change after it ([D016](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d016)) leave, in the served production
build (`npx nx build dotln --configuration=production`, finished at 17:01:11Z, served from
`dist/apps/dotln/browser` on the loopback), with motion on, in fresh Chromium contexts from the
target's Playwright 1.64.1. The same fourteen steps ran at 2080 by 1460 (17:01:21Z to
17:01:52Z), 3840 by 1620 (17:01:52Z to 17:02:24Z), 1440 by 900 (17:02:24Z to 17:02:55Z), 768
by 900 (17:02:55Z to 17:03:26Z) and 360 by 800 (17:03:26Z to 17:03:56Z). Each run ended with no
page error and no horizontal overflow. This run replaces one at 15:05Z whose captures predated
the review rounds' fixes. The captures are under [walkthrough/](walkthrough/), named
`<step>-<name>-<width>x<height>.png`. The verifier performs the session independently for
criterion 1; this record is the executor's.

The executor read all fourteen captures at 2080 by 1460, `03-a-star-routes-and-search` at
3840 by 1620 and `06-sealed-no-route` at 360 by 800; the figures in the table are from the
2080 by 1460 captures, and the readings at the other sizes are the script's own.

| Step | What was done | What the page showed (2080 by 1460) |
| --- | --- | --- |
| 01 arrival | Opened `/scene`. | The idle field; the rail with its Ways group; the field tools under the transport (Select, Draw wall, Place obstacle, Clear walls, the Tile graph's cell size of 2.5); eight instruments. |
| 02 wall-and-obstacles | Draw wall from the top edge at x = 70 down to y = 64; Place obstacle by a click at (62, 74) and by a drag at (82, 72). | A bar and two discs in the field's stone grey; the coach line asking for a right-click to send the units. |
| 03 a-star-routes-and-search | A marquee over the eleven units west of the wall; A* from Ways; a click at (100, 40) for the objective; Apply; Show search. | At frame 37 each selected unit's route dashed round the wall's foot, the first unit's drawn whole; the search shaded, closed cells inside its frontier; the heuristics as words (zero, Manhattan, Euclidean, octile); "With a route: 11, 84.5 long on average"; "The search for executor unit-01 expanded 531 cells". |
| 04 second-wall-replan | While they moved, a second wall from (76, 58) to (92, 44), across their way. | At frame 96 the routes bend round the new wall; replans 11; path length 72.6; the rows read "replanning". |
| 05 arrived | Waited for the group. | At frame 606 time to objective 9.9 s; the eleven stacked on the objective as one marker, 55 touching pairs, which is Arrive with no separation. |
| 06 sealed-no-route | A new objective at (25, 40), back through the gap, then a wall from (70, 60) to (70, 79.5) sealing it. | The notice "No route (11): walls seal the objective off, so each stops where it stands.", naming each unit; "The search for executor unit-01 expanded 627 cells and found no way"; "With no route: 11"; blocked units 11; replans 33; the squad stopped east of the wall. |
| 07 cleared-moving-again | Clear walls. | At frame 844 blocked units 0; the squad routed west to the objective over the cleared field, path length 53.6. |
| 08 trial-with-and-without-the-wall | Fork, then a wall from (50, 20) to (50, 70), then Compare. | "The branches first differ at frame 868"; with the wall the route bends round its foot; time to objective 6.5 before and 9.3 after, replans 44 and 55; Keep this trial offered. |
| 09 obstacle-avoidance-whiskers | Four units of the east column picked in the text layer, Obstacle and wall avoidance applied, a right-click at (15, 45) sending them west. | Each of the four casting its ray ahead and two shorter whiskers. |
| 10 obstacle-avoidance-later | Four seconds on. | At frame 1284 the units given avoidance pressed against the wall at x = 50, their rays running along it, while the A* squad, sent west by the same right-click, had gone round the wall's foot and stacked on the objective. |
| 11 saved-reopened-with-walls | Save, reload, Open. | The composition replaying from frame 0, and at frame 47 the wall and the two obstacles drawn at frame 0 back on the field and in the list (Wall 1, Obstacle 2, Obstacle 3); the log titles each step, "Walls and obstacles cleared" among them; one trial kept. |
| 12 head-on-passing | A fresh page; unit-02 and unit-04 given Collision avoidance; a right-click at their midpoint. | At frame 51 the pair closing, collisions 0. |
| 13 head-on-parted | Waited. | At frame 165 the two stopped beside each other at the objective, by the reviewer standing there; time to objective 2.5 s; collisions 0. |
| 14 head-on-replayed | Restart. | The same parting, the same 2.5 s, collisions 0. |

The readings agree across the sizes: the second wall made 11 replans at every size; the seal
left 11 units blocked with 33 replans counted and the same notice; the composition reopened
with its three shapes; Arrive's stack touched in 55 pairs. They differ where the frame a step
landed on differs: the first path length read 81.6 to 83.1, the arrival 9.8 to 10.4 s, the
trial's first divergence frame 868 to 933, and the head-on pair took 2.5 s at four sizes and
2.3 s at 360 by 800, where the pixel-derived midpoint fell elsewhere, the same on each replay.

unit-02 and unit-04 do not start exactly in line (y = 16.6 and 16.7), so Collision avoidance's
own steering parts them and the head-on policy, which acts only on a pair exactly head on, does
not fire in this session; the engine's specs carry the policy's three cases and their replays
(criterion 3; review round 1's finding C11, [D013](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d013)).

**What I read from the page alone.** The squad found its way by a search I could watch: the
shaded cells showed how far A* looked before it committed, the dashed lines showed where each
unit meant to go, and when a wall landed across their way the rows said "replanning" and the
lines bent round it. When there was no way at all they did not grind against the wall: they
stopped, the inspector and every row said there was no route and why, and the blocked count
read eleven; clearing the walls set them going again. Avoidance added something different:
the four units given it had no plan, so they ran at the wall, felt it with their whiskers and
slid along it, while the A* squad, which had one, went round the wall's foot to the objective. Two units sent at
each other passed without touching and did it the same way twice. On arrival the routed squad
stacked on the objective, as Arrive does with no separation (review round 1's finding C10,
recorded).
