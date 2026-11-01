# WO-022 rejected candidates

Each candidate was built for its round and left the code when the round was decided; its
screenshots stay under the round's folder and [the comparisons](comparisons.md) record the pick.

## Round 1, candidate B: the swim lanes

A second layout inside `flowDrawing`, `lanes`, chosen by a `layout` input on `StudyFlow` that
`study.ts` set through a temporary `flowLayout` constant for the build. Each node had a lane at least
64 units tall across the drawing, named in a 168-unit column on the left with its state and the
messages it held under the name. Time ran left to right from that column, one column per step. Each
hop of every step so far was a vertical arrow from the sender's lane to the receiver's, ending in
the message's token: the selected step's in green, earlier ones in grey (a `past` token state and
link class), several hops of one step 10 units apart. A dotted line marked the selected step.

Removed with the round: the `lanes` function, the `FlowLayout` type and the `nameColumn` constant
in `flow-drawing.ts`, with the drawing's `layout`, `lanes` and `cursor` fields, the link's `past`
flag and the `past` token state; the `layout` input in `flow.ts`; the lane rectangles, the cursor
line and the `data-layout` attribute in `flow.html`; the `.lane`, `.cursor`, `.link.past` and
`.token[data-state='past']` rules in `flow.scss`; the `Lanes` story; the lanes cases in
`flow-drawing.spec.ts` and `flow.spec.ts`; and the `flowLayout` constant in `study.ts` with its
binding in `study.html`. `grep -rn "lanes\|FlowLayout\|data-layout\|flowLayout"` over
`libs/features/tools/src/lib/composites/study-visuals/flow` and
`libs/features/tools/src/lib/composites/study` prints nothing.

## Round 2, candidate A: the pipeline left to right on a phone

The left-to-right drawing kept its columns below 600 pixels with larger narrow-screen text: names at
24 pixels scaled per node by a `--flow-narrow` custom property, states at 20, channel names and
message letters at 18, under `@media (max-width: 600px)`. To make that fit, lines were broken at the
narrow size (`text.name.narrow` and `text.state.narrow` in `flow-drawing.ts`) and each node carried a
second scale for it. Candidate B was built beside it as a `narrow` input on `StudyFlow`, set by a
temporary `flowNarrow` constant in `study.ts` for the build.

Removed with the round: the narrow measurement and the narrow scale (a node's `scale` is now one
number, applied through `--flow-scale`), the narrow text sizes of the left-to-right drawing, the
`narrow` input and the `flowNarrow` constant with its binding. The top-to-bottom drawing is now
always drawn beside the left-to-right one, and the stylesheet shows one or the other by the
screen's width. `grep -rn "narrow\|flowNarrow\|wide-only"` over
`libs/features/tools/src/lib/composites/study-visuals/flow` and
`libs/features/tools/src/lib/composites/study` finds only the comment naming the narrow screen the
top-to-bottom drawing is laid out for.

## Round 3, candidate A: the state under the box

On a wide screen a box held only its name, centred in it; the messages the node held sat in a row
under the box and its state in words under them, each node's column keeping room for its longest
state, so the boxes stayed small and level. Candidate B was built as an `inside` parameter of the
left-to-right geometry, passed through a temporary `statesInside` input on `StudyFlow` that a
`flowStatesInside` constant in `study.ts` set for the build.

Removed with the round: the under-the-box branches of the left-to-right geometry (the `below`
height, the centred name and the positions under the box), the `inside` parameter and the
`statesInside` argument of `flowDrawing`, the `statesInside` input and the `flowStatesInside`
constant with its binding. `grep -rn "statesInside\|flowStatesInside"` over the flow family and the
study composite prints nothing.

## Round 4, candidate A: no mark on the acting nodes

Every box kept its tone's outline whatever moved. Candidate B was built as an `acting` flag on each
drawn node, with a `.node.acting` rule, applied through a temporary `markActing` input on
`StudyFlow` that a `flowMarkActing` constant in `study.ts` set for the build. Removed with the
round: the input and the constant with its binding; the flag and the rule now always apply.
`grep -rn "markActing\|flowMarkActing"` over the flow family and the study composite prints nothing.

## Round 5, candidate A: the oval channel

A channel's corner radius was half its height, so a channel whose words made it tall became an oval.
Candidate B was built as a `pipeEnds` parameter of the left-to-right geometry, passed through a
temporary `pipeEnds` input on `StudyFlow` that a `flowPipeEnds` constant in `study.ts` set for the
build. Removed with the round: the half-height radius, the parameter, the input and the constant
with its binding; a channel's radius is now at most 22 units in both directions of the drawing.
`grep -rn "pipeEnds\|flowPipeEnds"` over the flow family and the study composite prints nothing.

## Round 6, candidate B: the pattern's own node tinted

A `.subject-fill .node[data-tone='subject']` rule filled the pattern's own node with 9 per cent of
the ink colour mixed into the surface, in both directions of the drawing, switched on by a
temporary `subjectFill` input on `StudyFlow` that a `flowSubjectFill` constant in `study.ts` set for
the build. Removed with the round: the rule, the input, the class bindings and the constant with its
binding. `grep -rn "subjectFill\|subject-fill\|flowSubjectFill"` over the flow family and the study
composite prints nothing.

## Round 7, candidate A: opening on the author's telling step

Each flow's model carried the step its author chose, `initialStep` in a hand-written `FlowExample`
or a `MarbleFlow`, and the study opened there. Candidate B was built as a temporary
`flowOpensAtStart` constant in `study-mapper.ts` that opened a flow study at step 0 instead.

Removed with the round: the `initialStep` option of both flow builders and their check that it lay
inside the flow, the `initialStep` each of the twenty modules set, and the constant in the mapper;
the builders now give every flow `initialStep: 0`. The twenty specs that asserted their author's
step now assert step 0, their titles say the study opens at the start, the builder's spec drops the
case for an opening outside the flow, and the resequencer spec drops the import it used to read its
module's step. `grep -rn "flowOpensAtStart"` over `libs/features/tools/src` prints nothing, and
`grep -n "initialStep" libs/features/tools/src/lib/studies/eip/*.ts` finds only assertions of 0
and the five specs that read it from a run.

## Round 8, candidate B: the message at the receiver's edge

A `restAlong` function in `flow-drawing.ts` placed a moving message just short of its line's
arrowhead, `1 - (radius + 11) / length` of the way along, when a module-level `arriving` flag was
set through `restAt`, which a temporary `arriving` input on `StudyFlow` called before each drawing;
a `flowArriving` constant in `study.ts` set it for the build. Removed with the round: the function,
the flag and its setter, the input and the constant with its binding; a moving message rests at 0.55
of its line again in both directions. `grep -rn "restAt\|restAlong\|flowArriving"` over the flow
family and the study composite prints nothing.
