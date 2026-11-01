# WO-022 flow drawing comparisons

The order runs the look of the `flow` family as the operator's eye doctor test (WS-001 rule 25): a
pair of rendered candidates, one independent variable per pair, the operator's preference making the
next pair, until they say the process is done. A preferred candidate is not acceptance. Rejected
implementations leave the code when their round is decided; [the record of
them](rejected-implementations.md) and the screenshots here keep what they were. The decided study
form of WO-019 to WO-021 stands under every round: the study inside the reading below the
definition, prose first, the controls under the drawing, the step's sentence on screen with its full
text behind a disclosure, the legend behind How to read this drawing.

Every candidate is the Aggregator study at `/tools/catalog/eip:110` in the production build served
locally, opened on the step the round names, at 1440 and 360 pixels. The `-figure` files crop the
drawing and its controls; the others show the whole study. The operator saw each round as a private
page with A and B side by side and answered in the host's question dialog.

## The process

The operator first asked for the rounds to wait until after the reviews (D004), then, back early,
chose to begin before them (D005), so each decided round's rejected implementation leaves the code
before the reviewers start. During round 8 the operator said the Aggregator example itself was hard
to follow; it was reworked by its author (D016) and shown step by step on the same page, and the
operator found it followable. The operator then ended the rounds after round 8, on 2026-11-01, in
their own word, "Done, end the rounds" (D018). Ending the rounds is not final design acceptance,
which remains the verifier's walkthrough and the operator's own check of the finished work.

The decided look: on a wide screen the stages stand in columns left to right (round 1), and on a
phone they run top to bottom, a row each (round 2); a node's box holds its name, its state and the
messages it holds (round 3); a node a moving message leaves or reaches is outlined in green (round
4); a channel is a pipe whose round ends keep their size (round 5); the pattern's own node keeps its
dark outline and bold name, with no fill (round 6); a messaging study opens at its start, before
anything moves (round 7); and a moving message rests a little past the middle of its line (round 8).

## Round 1: the layout of the flow

The one variable is the layout. The example, the step, the tokens, the states, the controls and the
sentence are the same.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, pipeline (picked) | Each stage stands in its own column, left to right: the three reviewers, the shared reports channel, the aggregator and the complete run. The messages moving at the selected step sit on the lines between them, in green; what a node is holding sits under it, outlined, with its state in words below. Stepping shows where each message is now. | [A at 1440](round-01/A-1440.png), [the drawing](round-01/A-1440-figure.png) | [A at 360](round-01/A-360.png), [the drawing](round-01/A-360-figure.png) |
| B, swim lanes | Each node has its own lane, named on the left with its state and what it holds; time runs left to right, one column per step. Every message is an arrow crossing from its sender's lane to its receiver's: the selected step's in green, the earlier ones in grey, so the drawing keeps every hop so far. | [B at 1440](round-01/B-1440.png), [the drawing](round-01/B-1440-figure.png) | [B at 360](round-01/B-360.png), [the drawing](round-01/B-360-figure.png) |

Shown on step 8, where the metadata reviewer's report completes order 32's set and the aggregator
sends its self-review while order 31 still waits.

**Pick:** A (D008).

## Round 2: which way the pipeline runs on a phone

The one variable is the direction of the stages below 600 pixels. At 1440 the two candidates are the
same pixels (`cmp` of the two 1440 drawings reports no difference).

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, left to right everywhere | The pipeline keeps its columns at every width. On a phone the whole flow fits one screen width, so its names and states shrink, and a name too long for its box is scaled down to fit. | [A at 1440](round-02/A-1440.png), [the drawing](round-02/A-1440-figure.png) | [A at 360](round-02/A-360.png), [the drawing](round-02/A-360-figure.png) |
| B, top to bottom on a phone (picked) | Below 600 pixels the stages turn into rows, top to bottom: the reviewers side by side, then the reports channel, the aggregator and the complete run. Each box holds its name, its state and what it holds at full size, and the messages move down the lines between rows. At 1440 it is the same as A. | [B at 1440](round-02/B-1440.png), [the drawing](round-02/B-1440-figure.png) | [B at 360](round-02/B-360.png), [the drawing](round-02/B-360-figure.png) |

Shown on step 8, with all twenty drafts merged.

**Pick:** B (D009).

## Round 3: where a node's state sits on a wide screen

The one variable is whether a node's state and the messages it holds sit under its box or inside it
at 1440. At 360 the two candidates are the same pixels, since the phone's rows already hold them
inside.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, under the box | Each box holds only its name; what the node holds sits under it as outlined messages, with its state in words below them. The boxes stay small and level, and the words spread into the space between rows. | [A at 1440](round-03/A-1440.png), [the drawing](round-03/A-1440-figure.png) | [A at 360](round-03/A-360.png), [the drawing](round-03/A-360-figure.png) |
| B, inside the box (picked) | Each box holds its name, its state under the name and the messages it holds at its foot, as the phone's rows already do. Boxes grow to fit their words, and a channel's pipe rounds into an oval when it grows tall. | [B at 1440](round-03/B-1440.png), [the drawing](round-03/B-1440-figure.png) | [B at 360](round-03/B-360.png), [the drawing](round-03/B-360-figure.png) |

**Pick:** B (D010).

## Round 4: whether the nodes that act at the step are marked

The one variable is a green outline on every node a moving message leaves or reaches at the
selected step.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, no mark | Only the moving messages and their lines turn green; every box keeps its usual outline, so a reader finds who acted by following the green lines. | [A at 1440](round-04/A-1440.png), [the drawing](round-04/A-1440-figure.png) | [A at 360](round-04/A-360.png), [the drawing](round-04/A-360-figure.png) |
| B, acting nodes outlined (picked) | A box that a moving message leaves or reaches takes the same green outline as the message, so at step 8 the metadata reviewer, the reports channel, the aggregator and the complete run stand out and the two idle reviewers stay grey. | [B at 1440](round-04/B-1440.png), [the drawing](round-04/B-1440-figure.png) | [B at 360](round-04/B-360.png), [the drawing](round-04/B-360-figure.png) |

**Pick:** B (D011).

## Round 5: the shape of a channel that has grown tall

The one variable is the corner radius of a channel drawn as a place of its own once round 3's words
inside it make it tall. At 360 the two candidates are the same pixels.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, an oval | A channel drawn as a place of its own has fully rounded ends, so when its words make it tall, as the reports channel's state does here, it rounds into an oval. | [A at 1440](round-05/A-1440.png), [the drawing](round-05/A-1440-figure.png) | [A at 360](round-05/A-360.png), [the drawing](round-05/A-360-figure.png) |
| B, a pipe (picked) | A channel keeps round ends of the same size however tall it grows, so it reads as a pipe beside the square-cornered endpoints. | [B at 1440](round-05/B-1440.png), [the drawing](round-05/B-1440-figure.png) | [B at 360](round-05/B-360.png), [the drawing](round-05/B-360-figure.png) |

The first publish of this round's page carried round 4's text with round 5's images, because the
step that copied the page stopped on an error; the operator reported it and the page was published
again before they answered.

**Pick:** B (D012).

## Round 6: how the pattern's own node stands out

The one variable is a light tinted fill on the node the pattern names, beside the dark outline and
bold name it already had, now that round 4's green outline replaces that outline whenever the node
acts.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, outline and bold name (picked) | The pattern's own node has a dark outline and a bold name. When a message leaves or reaches it, its outline turns green like any acting node, so at those steps only the bold name sets it apart. | [A at 1440](round-06/A-1440.png), [the drawing](round-06/A-1440-figure.png) | [A at 360](round-06/A-360.png), [the drawing](round-06/A-360-figure.png) |
| B, also a tinted fill | The pattern's own node also has a light grey fill, so the aggregator stays easy to find at every step, whatever colour its outline takes. | [B at 1440](round-06/B-1440.png), [the drawing](round-06/B-1440-figure.png) | [B at 360](round-06/B-360.png), [the drawing](round-06/B-360-figure.png) |

**Pick:** A (D013).

## Round 7: what a messaging study opens on

The one variable is the step the drawing opens on. Earlier rounds were shown on step 8; this round
shows each candidate as it opens.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, the author's telling step | The study opens on the step its author chose as the most telling, here step 8, where order 32's set completes and its self-review leaves while order 31 still waits. A reader sees the pattern at work at once and steps back or forward from there. | [A at 1440](round-07/A-1440.png), [the drawing](round-07/A-1440-figure.png) | [A at 360](round-07/A-360.png), [the drawing](round-07/A-360-figure.png) |
| B, the start (picked) | The study opens on step 0, before any report has arrived: the aggregator holds nothing and the complete run may not start. A reader steps forward to watch the story in order, and the named moments still jump to the telling steps. | [B at 1440](round-07/B-1440.png), [the drawing](round-07/B-1440-figure.png) | [B at 360](round-07/B-360.png), [the drawing](round-07/B-360-figure.png) |

**Pick:** B (D014).

## Round 8: where a moving message rests on its line

The one variable is the share of its line a moving message rests at: a little past the middle, or
at the receiver's edge. The difference shows most on a long line, the metadata reviewer's here; on
the short lines between columns the two positions nearly coincide.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, midway (picked) | A message moving at the step sits a little past the middle of its line, in transit between sender and receiver; with motion allowed it glides there from the sender. | [A at 1440](round-08/A-1440.png), [the drawing](round-08/A-1440-figure.png) | [A at 360](round-08/A-360.png), [the drawing](round-08/A-360-figure.png) |
| B, at the receiver | A message moving at the step sits at the end of its line, against the receiver's edge, as if just delivered; the difference shows most on a long line, such as the metadata reviewer's. | [B at 1440](round-08/B-1440.png), [the drawing](round-08/B-1440-figure.png) | [B at 360](round-08/B-360.png), [the drawing](round-08/B-360-figure.png) |

The operator first saw no difference, and with it said the Aggregator example itself was hard to
follow; the executor withdrew the pair and sent the example back to its author (D016). The operator
then found the difference and picked A.

**Pick:** A (D015).
