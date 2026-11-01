# WO-020 executor walkthrough

Performed on 2026-10-31 against the optimized production build (`nx build dotln
--configuration=production`), served locally, with a fresh browser profile at each width. Every step
completed at 1440, 768 and 360 pixels with no page error and no horizontal overflow. There is one
screenshot per step and width under [`walkthrough/`](walkthrough/), named by step and width: 48 in
all. The independent verifier repeats this session for criterion 1.

| Step | What was done | What the page showed |
| --- | --- | --- |
| 1 | Opened Tools | The works from the summaries, AI for Games with 768 concepts and 20 studied, and the catalog link |
| 2 | Opened the catalog | The shelf: AI for Games, 768 concepts, 20 studied, units on terrain |
| 3 | Chose AI for Games | The reading area lists the 20 studied concepts as links |
| 4 | Opened Chapter 3 and 3.4 Combining Steering Behaviors | Five concepts in that section carry the studied mark |
| 5 | Opened Flocking from the contents | The definition, then the study: the Reed Field crossing, the idea, the situation and the drawing, with the address `/tools/catalog/aifg-a:145` |
| 6 | Stepped the drawing forward twice | The time moved and the sentence under the drawing changed: the walkers still adjusting their pace while balancing staying close against leaving room |
| 7 | Opened Follow the mechanism | The ordinary pseudocode, read top to bottom, each step explained, then the worked numbers for the moment |
| 8 | Opened Think in streams | An RxJS reading marked Illustrative |
| 9 | Opened See it elsewhere and a reference | Each reference with the claim it supports; Craig Reynolds's Boids page opened with status 200 |
| 10 | Followed a nearby concept | Separation's reading, with Back returning to Flocking |
| 11 | Followed Run it in the soldier scene | `/scene?tool=aifg-a:145`, with twenty units |
| 12 | Pressed Back | Flocking, at its own address |
| 13 to 15 | Opened Seek, Separation and Two-level formation steering | Each study in its own form, its drawing and sentence as below |
| 16 | Opened the link to Slot assignment in a new tab | It opened on that reading |

## What four studies explained

**Flocking.** Three walkers crossing a field keep room between them with no leader and no plan, because
each one reacts only to the people near it, reading the same previous moment. Separation pushes,
cohesion pulls and velocity matching agrees on motion, and a separate drive supplies the crossing. It
fails in two instructive ways. Blending can reach an equilibrium where the pushes cancel, which is
fine as spacing and fatal as a standstill: take away the drive and a symmetric group just stops. And
turn separation down and the group still agrees on velocity while piling up, so agreement alone looks
like success and is not.

**Seek.** A courier's motor always pulls at full strength toward a beacon. The study's point is that
acceleration changes velocity and does not replace it, so any sideways speed survives the approach
and the courier sails past and orbits. Being near the target is not arriving, and Seek has no way to
shed speed. Set the sideways start to zero and the orbit becomes a straight overshoot, and the study
points to Arrive for a delivery that has to stop.

**Separation.** Two couriers at a shelf each push away from a neighbour inside a threshold. The study
runs linear and inverse-square falloff side by side, so the difference is visible. It fails because
it reads present distance: a fast approach overlaps before the push can turn it, the push ends at the
threshold while the outward velocity remains, and equal pushes from opposite sides can cancel at an
uncomfortably small spacing.

**Two-level formation steering.** A formation gets two levels: an invisible anchor that is steered
toward the destination, and members that steer to slots around it. The important feedback runs
upward: if the anchor could run ahead, the robots would chase a wedge that keeps escaping, so it is
held near their measured centre and the plan waits for execution. Loosen that limit and the slots
draw away. It fails because the mean can hide one stranded robot, and because a blocked quay delays
the plan for ever: it does not choose another route.
