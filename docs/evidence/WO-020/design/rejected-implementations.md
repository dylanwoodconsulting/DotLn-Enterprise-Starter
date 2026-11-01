# Rejected implementations

## Round 1, candidate B: the study on its own page

`ChildPaths.Study = 'catalog/:toolId/study'` routed to a `StudyPage` container that provided
`ToolsFacade`, called `arrive` with the route's id, and rendered a link back to the reading, the
place, the title as `h1`, the definition in the reading type, then `tools-study`, all in a centred
68ch measure. The reading rendered a single `Read the study` link in place of the study, through a
`studyHref` input carried from the catalog page down `ReadingView`. Nearby links led to readings, not
to other studies. A temporary constant chose between the candidates at build time.
All of it left the code when round 1 was decided.

## Round 2, candidate B: the drawing first

The figure moved above the idea, situation and example in `study.html`, directly under the heading.
It was a reordering of one template, built once for the comparison and never kept.

## Round 3, candidate A: by hand only

The scrubber without its Play and Pause button. This is what the scrubber was before the round, so
nothing left the code; Play stayed.

## Round 4, candidate B: drawing and chart together

The switch was removed, the chart was projected into the motion family above its controls, and the
timeline family took a `controls` input set to false so the two shared one scrubber. It was built
once for the comparison and never kept.

## Round 5, candidate A: legend first

The families' projected legend and caption sat between the drawing and the scrubber, in the order the
Arrive study had. Moving one `ng-content` below the scrubber and the moment's text made candidate B;
A is what that replaced.

## Round 6, candidate A: the full sentence always shown

Each family rendered the filled text equivalent as a paragraph, with the frame's note after it. The
paragraph is now inside a closed disclosure whenever a frame has a note, and the note leads.

## Round 7, candidate A: no jump link

The reading as it stood; nothing to remove.

## Round 8, candidate A: the scene link at the foot

`ConceptReading` projected the scene link into a `.scene-note` paragraph after the experiment
section. The paragraph left the template; the link is now on the line under the title.

## Round 9, candidate A: a fixed example

The study with no inputs block. A study whose model declares no inputs still renders this way.

## Rounds 10 to 12, the always-shown candidates

The legend, the example's description and the inputs as open blocks. Each became a closed disclosure
whose open state lives in the facade.

## Round 13, candidate A: marks only

The invitation with no list of studied concepts; the list now sits there.

## Round 14, candidate A: nearby only

The study with no Next study link; a study after the last one in a work still ends this way.

## Rounds 15 to 21

Monospace labels (15), the test tube glyph (16), the order with See it elsewhere before Where this
breaks down (17), the worked step before the pseudocode (18), the nearby concepts behind a disclosure
(19), every study opening on its first moment (20) and the chart's title on the switch (21) were each
one-line or one-block changes built for their round and reverted, or replaced, when it was decided.
The wording Over time in round 21 never entered the code past its round; the label is Chart.
