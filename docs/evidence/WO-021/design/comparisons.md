# WO-021 marble diagram comparisons

The order runs the look of the `marbles` family as the operator's eye doctor test (WS-001 rule 25): a
pair of rendered candidates, one independent variable per pair, the operator's preference making the
next pair, until they say the process is done. A preferred candidate is not acceptance. Rejected
implementations leave the code when their round is decided; [the record of
them](rejected-implementations.md) and the screenshots here keep what they were. WO-020's decided
study form stands under every round: the study inside the reading below the definition, prose first,
the controls under the drawing, the short sentence on screen with the values behind Show the numbers,
the legend behind How to read this drawing.

Every candidate is the switchMap study at `/tools/catalog/rxc:152`, opened on its most telling
frame, in the production build served locally, at 1440 and 360 pixels. The `-figure` files crop the
drawing and its controls; the others show the whole study.

## The process

The operator ended the comparisons after round 13 on 2026-11-01 (two more rounds that count,
D016), then reopened them the same day with a direction (D017): the slider keeps one step a frame,
the dotted line glides between frames while the example plays, and an emission is animated when
Play reaches it. The gliding line was built as directed; round 14 paired two animations and round
15 what the courier carries. Round 15's answer ended the rounds and carried two further directions
(D019): the output lane shows nothing before its frame, and the example opens on its last frame.
Round 8's first answer was a direction rather than a pick too (D011): every frame is a step.
Ending the rounds is not final design acceptance, which remains the verifier's walkthrough and the
operator's own check of the finished work.

## Round 1: the orientation of the diagram

The one variable is which way time runs. The strings, the stepped frame, the raised emission, the
hollow marbles for values nothing receives, the cut-off crosses and the text equivalent are the same.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, horizontal | Horizontal marble lines with time left to right, as RxJS documentation draws them: the inputs above, the operator's band across the middle, the output below, the frame numbers along the foot, and the stepped frame as a dotted line down through every lane with its emission raised. | [A at 1440](round-01/A-1440.png), [the drawing](round-01/A-1440-figure.png) | [A at 360](round-01/A-360.png), [the drawing](round-01/A-360-figure.png) |
| B, vertical | A vertical two-column timeline with time down the page: the input and the streams the operator opens as columns on the left, the output on the right, the operator's band standing between them, the frame numbers down the left edge, and the stepped frame as a dotted line across the columns. | [B at 1440](round-01/B-1440.png), [the drawing](round-01/B-1440-figure.png) | [B at 360](round-01/B-360.png), [the drawing](round-01/B-360-figure.png) |

**Pick:** A (D006).

## Round 2: naming the stepped frame's emission in the drawing

The one variable is whether the drawing writes what the stepped frame's emission stands for beside
its marble. In both, the marble carries its letter, the sentence under the drawing names the
emission and the full values sit behind Show the numbers.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, the letter only | The stepped frame's emissions are raised with a green ring; what the letter stands for is read in the sentence under the drawing. | [A at 1440](round-02/A-1440.png), [the drawing](round-02/A-1440-figure.png) | [A at 360](round-02/A-360.png), [the drawing](round-02/A-360-figure.png) |
| B, the value written beside it | The same raised marbles, and the value each letter stands for (bee, ant page 1) written beside the marble for the stepped frame alone, so the eye need not leave the drawing. | [B at 1440](round-02/B-1440.png), [the drawing](round-02/B-1440-figure.png) | [B at 360](round-02/B-360.png), [the drawing](round-02/B-360-figure.png) |

**Pick:** A (D007).

## Round 3: what the drawing shows of a value nothing receives

The one variable is whether the diagram keeps the values that were emitted but never received: an
inner stream's pages after it was cut off, and its unheard completion.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, shown hollow | A value nothing receives is drawn where it would have arrived, as a hollow dashed marble on a dotted lane, and an unheard completion as a faint bar, so what the operator dropped is visible. | [A at 1440](round-03/A-1440.png), [the drawing](round-03/A-1440-figure.png) | [A at 360](round-03/A-360.png), [the drawing](round-03/A-360-figure.png) |
| B, left out | A cut-off lane ends at its cross; what the stream would have delivered afterwards is not drawn, so the diagram shows only what happened. | [B at 1440](round-03/B-1440.png), [the drawing](round-03/B-1440-figure.png) | [B at 360](round-03/B-360.png), [the drawing](round-03/B-360-figure.png) |

**Pick:** B (D007).

## Round 4: the lane before a stream is opened

The one variable, on the streams the operator opens, is what is drawn before the frame they are
opened at.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, dotted lead-in | From frame 0 to the frame the stream is opened, its lane is dotted, so every lane spans the whole diagram and the opening reads as the point where the dots turn solid. | [A at 1440](round-04/A-1440.png), [the drawing](round-04/A-1440-figure.png) | [A at 360](round-04/A-360.png), [the drawing](round-04/A-360-figure.png) |
| B, nothing before | The lane begins at the frame the stream is opened and nothing is drawn before it, so the staggered starts show at a glance when each stream came to life. | [B at 1440](round-04/B-1440.png), [the drawing](round-04/B-1440-figure.png) | [B at 360](round-04/B-360.png), [the drawing](round-04/B-360-figure.png) |

**Pick:** A (D008).

## Round 5: the frame ruler

The one variable is which frames are numbered under the diagram.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, every frame | Every frame that fits is numbered, 0 to the last, so the ruler reads like a scale and a gap between emissions can be counted. | [A at 1440](round-05/A-1440.png), [the drawing](round-05/A-1440-figure.png) | [A at 360](round-05/A-360.png), [the drawing](round-05/A-360-figure.png) |
| B, the eventful frames | Only the frames where something is received, opened or cut off are numbered, the same frames the slider steps through, so each number under the diagram is a moment a reader can land on. | [B at 1440](round-05/B-1440.png), [the drawing](round-05/B-1440-figure.png) | [B at 360](round-05/B-360.png), [the drawing](round-05/B-360-figure.png) |

**Pick:** A (D008).

## Round 6: how the stepped frame is marked

The one variable is the mark of the selected frame across the diagram.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, a dotted line | A dotted green line runs down through every lane at the stepped frame, and the emissions on it are ringed. | [A at 1440](round-06/A-1440.png), [the drawing](round-06/A-1440-figure.png) | [A at 360](round-06/A-360.png), [the drawing](round-06/A-360-figure.png) |
| B, a shaded band | A pale band one frame wide sits behind the lanes at the stepped frame, and the emissions on it are ringed, so the whole frame reads as a column. | [B at 1440](round-06/B-1440.png), [the drawing](round-06/B-1440-figure.png) | [B at 360](round-06/B-360.png), [the drawing](round-06/B-360-figure.png) |

**Pick:** A (D009).

## Round 7: what the slider is called

The one variable is the name of the frame slider under the drawing.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, the frame alone | The slider is named by the stepped frame: Frame 5. | [A at 1440](round-07/A-1440.png), [the drawing](round-07/A-1440-figure.png) | [A at 360](round-07/A-360.png), [the drawing](round-07/A-360-figure.png) |
| B, the frame out of the last | The slider is named by the stepped frame and the diagram's last: Frame 5 of 14, so a reader knows how far the example runs without reading the ruler. | [B at 1440](round-07/B-1440.png), [the drawing](round-07/B-1440-figure.png) | [B at 360](round-07/B-360.png), [the drawing](round-07/B-360-figure.png) |

**Pick:** B (D010).

## Round 8: the pace of Play

The one variable is how long Play lingers on each frame of the diagram. The screenshots of the two
candidates are the same still; the pace is judged by pressing Play on the served candidates with
reduced motion off, or by watching the frame counter advance.

Asked the first time, the operator could not judge the pace: Play stopped only on the frames where
something happened. That answer is recorded as a direction (D011): every frame is now a step, so
Play counts through 0, 1, 2, 3, and the round was asked again on the corrected builds.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, 0.6 seconds a frame | Play moves to the next frame every 0.6 seconds, so the fourteen frames of the switchMap example run in about eight seconds. | [A at 1440](round-08/A-1440.png), [the drawing](round-08/A-1440-figure.png) | [A at 360](round-08/A-360.png), [the drawing](round-08/A-360-figure.png) |
| B, 1.2 seconds a frame | Play moves to the next frame every 1.2 seconds, so the same example runs in about seventeen seconds and each emission can be read before the next. | [B at 1440](round-08/B-1440.png), [the drawing](round-08/B-1440-figure.png) | [B at 360](round-08/B-360.png), [the drawing](round-08/B-360-figure.png) |

**Pick:** B (D012).

## Round 9: the operator between the inputs and the outputs

The one variable is how the operator is written between the input lanes and the output lanes.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, a band | The operator sits in a pale rounded band across the whole diagram, its code centred, so the inputs read as going in at the top of the band and the outputs as coming out below it. | [A at 1440](round-09/A-1440.png), [the drawing](round-09/A-1440-figure.png) | [A at 360](round-09/A-360.png), [the drawing](round-09/A-360-figure.png) |
| B, a line of text | The operator is a line of text at the left between the lanes, led by a down arrow, with no band behind it, so the diagram is lanes and text alone. | [B at 1440](round-09/B-1440.png), [the drawing](round-09/B-1440-figure.png) | [B at 360](round-09/B-360.png), [the drawing](round-09/B-360-figure.png) |

**Pick:** A (D013).

## Round 10: what the disclosure under a marble diagram is called

The one variable is the name of the closed disclosure under the drawing that holds the frame's full
sentence. The movement studies call it Show the numbers, because their sentence carries the moment's
values; under a marble diagram the sentence names the frame's emissions.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, Show the numbers | The same name as under a movement drawing, so every study's disclosure reads alike. | [A at 1440](round-10/A-1440.png), [the drawing](round-10/A-1440-figure.png) | [A at 360](round-10/A-360.png), [the drawing](round-10/A-360-figure.png) |
| B, Show the emissions | Named for what the sentence under a marble diagram carries: which stream emitted what at the stepped frame, and what the output has shown so far. | [B at 1440](round-10/B-1440.png), [the drawing](round-10/B-1440-figure.png) | [B at 360](round-10/B-360.png), [the drawing](round-10/B-360-figure.png) |

**Pick:** B (D014).

## Round 11: the spacing of the lanes

The one variable is how tall each lane is, and so how tall the diagram stands on the page.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, 58 units a lane | Each stream has 58 units of the drawing's height, its name sitting well clear of the lane above. | [A at 1440](round-11/A-1440.png), [the drawing](round-11/A-1440-figure.png) | [A at 360](round-11/A-360.png), [the drawing](round-11/A-360-figure.png) |
| B, 46 units a lane | Each stream has 46 units, so a diagram of five streams is about a fifth shorter and the lanes read as one block. | [B at 1440](round-11/B-1440.png), [the drawing](round-11/B-1440-figure.png) | [B at 360](round-11/B-360.png), [the drawing](round-11/B-360-figure.png) |

**Pick:** A's lane height with B's label distance, in the operator's own words (D015).

## Round 12: ties from a source emission to the streams it opens or cuts off

The operator asked for two more rounds that count, so the cosmetic pair that had been built for
this round (the size of a marble) was withdrawn unasked. The one variable here is whether the
diagram draws, for a flattening operator, the line of cause from a source emission down to the
inner stream that emission opened and to the inner stream it cut off at the same frame.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, no ties | The lanes stand on their own: that b opened results(bee) and cut off results(ant) is read from the frame alignment and the sentence under the drawing. | [A at 1440](round-12/A-1440.png), [the drawing](round-12/A-1440-figure.png) | [A at 360](round-12/A-360.png), [the drawing](round-12/A-360-figure.png) |
| B, ties | A thin grey line runs from each source marble down to the inner lane it opens, and down to the ring of the lane it cuts off, so the projection and the cancelling read as one stroke from the value that caused them. | [B at 1440](round-12/B-1440.png), [the drawing](round-12/B-1440-figure.png) | [B at 360](round-12/B-360.png), [the drawing](round-12/B-360-figure.png) |

**Pick:** A (D016).

## Round 13: ties from an emission to the output emission it becomes

The second of the operator's last two rounds. The one variable is whether the diagram draws a line
from an inner or input emission down to the output emission it becomes at the same frame, so what
came from where is read without matching frames by eye.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, no ties | The output's marbles stand on their own under the operator's band; their origin is read from the frame alignment and the sentence under the drawing. | [A at 1440](round-13/A-1440.png), [the drawing](round-13/A-1440-figure.png) | [A at 360](round-13/A-360.png), [the drawing](round-13/A-360-figure.png) |
| B, ties | A thin grey line runs from each emission that becomes an output value down to that value on the output lane, through the operator's band, so the path of each value is one stroke. | [B at 1440](round-13/B-1440.png), [the drawing](round-13/B-1440-figure.png) | [B at 360](round-13/B-360.png), [the drawing](round-13/B-360-figure.png) |

**Pick:** A (D016).

## Round 14: the animation of an emission

Built on the operator's direction: the line of the stepped frame now glides from the frame to the
next over the frame's 1.2 seconds while the example plays, arriving as the counter turns, and a
hand step stays instant. The one variable is what happens when the line reaches an emission. The
stills cannot show motion; `A-play-1440.webm` and `B-play-1440.webm` record Play from frame 0, and
the `-play-4.95s` and `-play-5.3s` stills catch the emission at frame 4 as it animates.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, a pulse | The emitting marble pops and a ring ripples out of it and fades, on every lane where something is emitted at that frame. | [A at 1440](round-14/A-1440.png), [playing](round-14/A-play-4.95s-1440.png), [video](round-14/A-play-1440.webm) | [A at 360](round-14/A-360.png) |
| B, a pulse and a courier | The same pulse, and a small dot leaves the emission that becomes an output value, travels down through the operator's band to that value on the output lane, and the output marble pops as it lands. | [B at 1440](round-14/B-1440.png), [playing](round-14/B-play-4.95s-1440.png), [video](round-14/B-play-1440.webm) | [B at 360](round-14/B-360.png) |

**Pick:** B, a pulse and a courier (D018).

## Round 15: what the courier carries

Round 14's courier, varied in one way: what travels from the emission down to the output. The
`-play-4.95s`, `-play-5.2s` and `-play-5.5s` stills catch the courier leaving, half way and landed
at frame 4; the videos record Play from frame 0.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, a dot | A small dot in the emitting lane's tone travels down to the output value, which is already drawn and pops as the dot lands. | [A at 1440](round-15/A-1440.png), [playing](round-15/A-play-5.2s-1440.png), [video](round-15/A-play-1440.webm) | [A at 360](round-15/A-360.png) |
| B, the value rides down | A full marble carrying the output value, in the output lane's tone, peels off the emission and travels down; the output lane shows nothing there until it lands and settles into place. | [B at 1440](round-15/B-1440.png), [playing](round-15/B-play-5.2s-1440.png), [video](round-15/B-play-1440.webm) | [B at 360](round-15/B-360.png) |

**Pick:** B, the value rides down, with two directions: an output lane shows no value before its
frame, and the example opens on its last frame so the whole run is seen first. The operator ended
the rounds with this answer (D019).
