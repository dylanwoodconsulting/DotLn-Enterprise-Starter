# WO-021 rejected candidates

Each candidate was built for its round and left the code when the round was decided; its
screenshots stay under the round's folder and [the comparisons](comparisons.md) record the pick.

## Round 1, candidate B: the vertical two-column timeline

A second layout inside `marblesDrawing`, chosen by an `orientation` input on `StudyMarbles` that
`study.html` set to `vertical` for the build. Time ran down the page at 34 units a frame under a
64-unit header; the input and the streams the operator opened stood as columns in the left half,
the outputs in the right half, the operator's band stood between the columns with its text rotated,
the frame numbers ran down the left edge, and the stepped frame was a dotted line across the
columns. Removed with the round: the `vertical` function and the `MarblesOrientation` type in
`marbles-drawing.ts`, the `orientation` input and the rotated operator text in `marbles.ts` and
`marbles.html`, the `data-orientation` attribute, and the vertical case of
`marbles-drawing.spec.ts`. `grep -rn "vertical\|orientation"` over the family's files prints
nothing.

## Round 2, candidate B: the stepped emission named beside its marble

A `named` input on `StudyMarbles`, set true by `study.html` for the build, that drew the value a
letter stands for (`bee`; `ant, page 1`) beside each marble of the stepped frame, in the interface's
type with a surface-coloured stroke behind it; `DrawnMarble` carried the value for it. Removed with
the round: the input, the `@if (named() …)` text in `marbles.html`, the `.marble .value` rule in
`marbles.scss` and the `value` field of `DrawnMarble`. `grep -n "named" ` over the family's files
prints nothing.

## Round 3, candidate A: values nothing receives drawn hollow

The family's first form: an inner stream's values after it was cut off, and its unheard completion
or error, were drawn where they would have arrived as hollow dashed marbles and faint bars on a
dotted tail of the lane, with a `Hollow · emitted, received by nothing` legend entry and the
sentence of the frame naming them as received by nothing. Removed with the round: the `dropped`
input on `StudyMarbles` and its parameter in `marblesDrawing`, the `delivered` fields of the drawn
marbles, bars and crosses, the `dropped` classes and their rules in `marbles.html` and
`marbles.scss`, the dotted tail after a cut-off, the legend entry and the caption's sentence, and
the undelivered frames from the diagram's steps and sentences in `marbles.ts`. The model's
`MarbleEvent.delivered` stays, so a spec can still assert what the operator dropped.

## Round 4, candidate B: nothing drawn before a stream is opened

A `leadIn` input on `StudyMarbles`, set false by `study.html` for the build, under which a lane
opened later than frame 0 began at its opening frame with nothing drawn before it. Removed with
the round: the input, the parameter of `marblesDrawing` and its branch, and the spec's case.
`grep -rn "leadIn"` over `libs/features/tools/src` prints nothing.

## Round 5, candidate B: only the eventful frames numbered

A `ruler` input on `StudyMarbles`, set to `events` by `study.html` for the build, under which the
numbers under the diagram were the frames the slider steps through instead of every frame that
fits. Removed with the round: the input, the parameter of `marblesDrawing` and its branch, and the
spec's case. `grep -rn "ruler"` over `libs/features/tools/src` prints nothing.

## Round 6, candidate B: the stepped frame as a shaded band

A `mark` input on `StudyMarbles`, set to `band` by `study.html` for the build, under which the
drawing put a pale rectangle one frame wide behind the lanes at the stepped frame in place of the
dotted line. Removed with the round: the input, the parameter of `marblesDrawing`, the `band` field
of the drawing, the `@if (view.band)` branch of `marbles.html` and the `.band` rule in
`marbles.scss`. `grep -n "band" ` over the family's files finds only the operator's band.

## Round 7, candidate A: the slider named by the frame alone

The family's first label, `Frame 5`, through the translation `tools.study.frame`, and a `clock`
input on `StudyMarbles` that chose between it and `tools.study.frameOf` for the round. Removed
with the round: the input, the branch in `marbles.html` and the `tools.study.frame` key in the
app's translations and the Tools test copy; the slider is named `Frame 5 of 14` by
`tools.study.frameOf`.

## Round 8, candidate A: Play at 0.6 seconds a frame

The family's first pace, `secondsPerFrame = 0.6` in `marbles.ts`, built for the round and replaced
by 1.2 when the round was decided. Nothing else differed between the candidates.

## Round 9, candidate B: the operator as a line of text

An `operatorAs` input on `StudyMarbles`, set to `line` by `study.html` for the build, under which
the drawing wrote the operator's code at the left between the lanes, led by a down arrow, and drew
no band behind it; the drawing's operator carried a `boxed` flag for it. Removed with the round:
the input, the parameter of `marblesDrawing`, the flag and the `@if` branch in `marbles.html`.

## Round 10, candidate A: the disclosure called Show the numbers under a marble diagram

A `disclosure` input on `StudyMarbles`, set to `emissions` by `study.html` for candidate B's build,
under which the summary of the closed disclosure under the drawing read `Show the numbers`, as it
does under a movement drawing, instead of `Show the emissions`. Removed with the round: the input
and the branch in `marbles.html`; the summary reads `tools.study.emissions`.

## Round 11, candidate B: 46 units a lane

`laneHeight` 46 and `axisOffset` 32 in `marbles-drawing.ts`, built for the round and reverted to 58
and 40; what the operator kept from it is the label's distance to its axis, `labelOffset` 22.

## Round 12, candidate B: ties from a source emission to the streams it opens or cuts off

An `openingTies` input on `StudyMarbles`, set true by `study.html` for the build, under which
`marblesDrawing` drew a thin grey line from a source marble down to each inner lane it opened and
to the ring of each inner lane it cut off at that frame. Removed with the rounds' end: the input,
the `opening` branch of the drawing's ties, and the tie lines in `marbles.html` and `marbles.scss`
where round 13 keeps none.

## Unasked: the size of a marble

A pair built for round 12 before the operator asked for the last two rounds to count: marbles of
radius 12 against 9. Withdrawn without being asked; its screenshots were removed.

## Round 13, candidate B: ties from an emission to the output emission it becomes

A `flowTies` input on `StudyMarbles`, set true by `study.html` for the build, under which
`marblesDrawing` drew a thin grey line from each inner or input emission down to the output
emission it became at the same frame, through the operator's band. Removed with the round, together
with round 12's `openingTies`: the two inputs, the `MarbleTies` parameter and the ties the drawing
computed, the tie lines in `marbles.html` and the `.tie` rule in `marbles.scss`.

## Round 14, candidate A: a pulse alone

An `emission` input on `StudyMarbles`, `'pulse'` by default and set to `'courier'` by `study.html`
for candidate B's build, under which the couriers were drawn only for B. The operator picked B, so
the input and the `@if` around the couriers in `marbles.html` left the code; the pulse itself, the
pop and the ripple, stays as part of what B is.

## Round 15, candidate A: a dot for a courier

A `cargo` input on `StudyMarbles`, `'dot'` by default and set to `'value'` by `study.html` for
candidate B's build. Under `'dot'` the courier was a small circle in the emitting lane's tone, at
0.55 of a marble's radius, and the output value it reached was drawn before it arrived and popped
as it landed. The operator picked B, so the input, the dot branch of `marbles.html`, the dot's
`DrawnCourier` fields (`landingTone`, and `tone` meaning the origin's) and the `value-cargo` class
left the code; the courier is the output value itself, at the marbles' size and in the output
lane's tone.

## With round 15's directions: the opening frame of a marble example

`MarbleExample.initialFrame`, the frame a drawing opened on (the output's first emission when
absent), set by all twenty modules. The operator directed that the example open on its last frame
once the output lane fills in as the frames pass, so the field left the contract and the modules;
each spec now indexes the frame it tells about by number.
