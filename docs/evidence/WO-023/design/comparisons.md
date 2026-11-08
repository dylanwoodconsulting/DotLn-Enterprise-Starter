# WO-023 comparisons for the states family

The order names the family's first pair under WS-001 rule 25. A is a register table whose rows move
between state columns. B is a state-machine diagram with the current state raised. The one
variable is the representation. Each candidate is rendered at about 2080 by 1460, the operator's
centre browser window, and at 360.

## The rounds are deferred to an A/B testing pass

On 2026-11-07 the operator delayed this order's A/B testing and asked for a follow-up that triggers
during a dedicated A/B testing pass, a pass apart from the coding-standards passes (capture SHA-256
`8bf3461a…`; [D008](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d008)). The pair below was built before that message
arrived and was never put to the operator, so it has no pick. Until that pass decides, the family
draws the register table. The state-machine candidate left the code; its source, with the rest of
the family as it stood for the pair, is kept in [round-01/pair-source](round-01/pair-source/) with a
`.txt` suffix, so the pass can rebuild it.

## Round 1: the representation

The example is Unit of Work's study, captured at steps 2 and 4 from the production build with
reduced motion. Both candidates were served from the order's worktree on local ports, stopped after
the deferral.

| Candidate | Caption | 2080 by 1460 | 360 |
| --- | --- | --- | --- |
| A, the register table | Each composition is a row and each register a column, and a token sits in the column of its register. A token that moves is green, with an arrow from the column it left and the operation above the arrow, and the column it enters is tinted. Each row's name and note sit at its left. | [page at step 4](round-01/A-2080.png), [drawing at step 2](round-01/A-2080-step-2-drawing.png) | [page at step 4](round-01/A-360.png), [drawing at step 2](round-01/A-360-step-2-drawing.png) |
| B, the state machine | Each register is a box and each operation an arrow between boxes, with a dot for the way in and a ring for the way out. Tokens sit inside their state's box, the box an object has just entered is raised, and the arrow it took is green with its name. A list under the drawing says which letter is which composition. On a phone the boxes stack and only the arrow taken is named. | [page at step 4](round-01/B-2080.png), [drawing at step 2](round-01/B-2080-step-2-drawing.png) | [page at step 4](round-01/B-360.png), [drawing at step 2](round-01/B-360-step-2-drawing.png) |

**Pick:** none. The round passes to the A/B testing pass with the follow-up D008 names.

What the captures show, recorded for that pass and not offered as a preference: at 360, B's arcs
and their names crowd the right-hand gutter, and its way-in arrow sits between two stacked boxes,
where it reads like a transition between them; A's text is smaller at 360, and every part stays
inside the drawing.

## The candidate that left the code

B was `states-machine.ts` (`machineDrawing`: boxes across a wide reading and stacked on a phone;
forward arcs above the boxes, backward arcs below, loops over a box, a dot and a ring for the ways
in and out), its spec `states-machine.spec.ts`, the machine template in `states.html`, its styles in
`states.scss`, the messages `tools.study.states.keyed`, `tools.study.states.keyedNote` and
`studyCommon.states.machineCaption`, and the build-time constant `comparedRepresentation` that chose
between the candidates. All of it left the code on 2026-11-07. The source as built is in
[round-01/pair-source](round-01/pair-source/).
