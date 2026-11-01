# WO-020 study comparisons

The order runs where the study lives as the operator's eye doctor test (WS-001 rule 25): a pair of
rendered candidates, one independent variable per pair, the operator's preference making the next
pair, until they say the process is done. A preferred candidate is not acceptance. Rejected
implementations leave the code when their round is decided; [the record of
them](rejected-implementations.md) and the screenshots here keep what they were.

## Process ended

The operator ended the comparisons for this order after round 21 on 2026-10-31 (capture SHA-256
`75d67f52…`; D017). That is not final design acceptance, which remains the verifier's walkthrough and
the operator's reading of the draft pull request.

## Round 1: where the study lives

The one variable is where the study sits. The drawing, the explanations and the content are the same.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, in the reading (picked) | The study sits inside the reading, below the definition, with the shelf and contents beside it, as Arrive did. | [A at 1440](round-01/A-1440.png) | [A at 360](round-01/A-360.png) |
| B, its own page (rejected) | The reading keeps the definition and one link, Read the study. The study is its own addressable page with the definition repeated at its head and no shelf or contents beside it. | [reading](round-01/B-reading-1440.png), [study](round-01/B-study-1440.png) | [reading](round-01/B-reading-360.png), [study](round-01/B-study-360.png) |

**Pick:** A (D006).

## Round 2: the drawing's place within the study

The one variable is whether the drawing comes before or after the study's prose.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, prose first (picked) | The idea, the situation and the example come first, then the drawing, so a reader knows what they are looking at. | [A at 1440](round-02/A-1440.png) | [A at 360](round-02/A-360.png) |
| B, drawing first (rejected) | The drawing comes straight after the study's heading, with the idea, situation and example below it. | [B at 1440](round-02/B-1440.png) | [B at 360](round-02/B-360.png) |

**Pick:** A (D007).

## Round 3: how a reader moves through the example

The one variable is whether the drawing can run. Neither candidate ever starts by itself.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, by hand only (rejected) | The slider, Step back, Step forward and the named moments. | [A at 1440](round-03/A-1440.png) | [A at 360](round-03/A-360.png) |
| B, adds Play (picked) | The same, plus Play and Pause, running from the selected moment at the example's own pace. A hand step stops it, and a reader who asked for reduced motion gets no Play button. | [B at 1440](round-03/B-1440.png) | [B at 360](round-03/B-360.png) |

**Pick:** B (D007).

## Round 4: how the drawing and the chart sit together

The one variable is whether a reader sees one or both at a time.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, a switch (picked) | One or the other is shown, with the controls under whichever is showing. | [A at 1440](round-04/A-1440.png) | [A at 360](round-04/A-360.png) |
| B, both together (rejected) | Both always shown, the drawing above the chart, with one set of controls below them. The page is longer. | [B at 1440](round-04/B-1440.png) | [B at 360](round-04/B-360.png) |

**Pick:** A (D007).

## Round 5: the legend and the controls

The one variable, on Flocking, is what comes straight after the drawing.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, legend first (rejected) | The legend and caption sit between the drawing and the controls, as the Arrive study did. | [A at 1440](round-05/A-1440.png) | [A at 360](round-05/A-360.png) |
| B, controls first (picked) | The controls sit right under the drawing, so the slider stays close to what it moves, and the legend and caption come after the moment's description. | [B at 1440](round-05/B-1440.png) | [B at 360](round-05/B-360.png) |

**Pick:** B (D011).

## Round 6: how a moment reads under the drawing

The one variable, on Flocking, is what stays on screen. In both, the full text stays the drawing's
accessible name.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, full sentence (rejected) | The moment's full sentence with all its values, then the short sentence on what is happening, both always shown. | [A at 1440](round-06/A-1440.png) | [A at 360](round-06/A-360.png) |
| B, short sentence (picked) | The short sentence on what is happening is shown, and the full values sit behind a closed Show the numbers disclosure. | [B at 1440](round-06/B-1440.png) | [B at 360](round-06/B-360.png) |

**Pick:** B (D011).

## Round 7: reaching the study from the top of the reading

The one variable, on Flocking, is a way past the definition.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, no link (rejected) | The study starts below the definition and is reached by scrolling. | [A at 1440](round-07/A-1440.png) | [A at 360](round-07/A-360.png) |
| B, jump link (picked) | A one-line Jump to the study link under the concept's title. | [B at 1440](round-07/B-1440.png) | [B at 360](round-07/B-360.png) |

**Pick:** B (D011).

## Round 8: where the scene link sits

The one variable, on Flocking, is where a tool the scene runs links to the scene.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, at the foot (rejected) | After the study and the experiment section, as it was. | [A at 1440](round-08/A-1440.png) | [A at 360](round-08/A-360.png) |
| B, at the top (picked) | On the same line as Jump to the study, under the title. | [B at 1440](round-08/B-1440.png) | [B at 360](round-08/B-360.png) |

**Pick:** B (D011).

## Round 9: can a reader change the example's inputs

The one variable, on Arrive, is whether the example is fixed.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, fixed example (rejected) | A failure case shows a second run with one input changed, as a chart under Where this breaks down. | [A at 1440](round-09/A-1440.png) | [A at 360](round-09/A-360.png) |
| B, live inputs (picked) | The same, plus a Try another value block with a slider for each input worth changing. The example reruns as a reader drags, the drawing, chart and worked numbers all following, and Back to the example restores it. | [B at 1440](round-09/B-1440.png) | [B at 360](round-09/B-360.png) |

**Pick:** B (D011).

## Round 10: whether the legend stays on show

The one variable, on Flocking, now that a drawing can label its own marks, is whether the legend and
caption stay on the page.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, always shown (rejected) | The legend and caption always show under the inputs. | [A at 1440](round-10/A-1440.png) | [A at 360](round-10/A-360.png) |
| B, on request (picked) | They sit behind a closed How to read this drawing disclosure, so the study reaches its explanations sooner. | [B at 1440](round-10/B-1440.png) | [B at 360](round-10/B-360.png) |

**Pick:** B (D014).

## Round 11: how much of the example shows above the drawing

The one variable, on Flocking, is whether the example's full description stays on the page.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, spelled out (rejected) | The example's full description, with its starting values, shows above the drawing. | [A at 1440](round-11/A-1440.png) | [A at 360](round-11/A-360.png) |
| B, on request (picked) | The idea and the situation show, and the full description sits behind a closed The example in full disclosure, so the drawing comes sooner. | [B at 1440](round-11/B-1440.png) | [B at 360](round-11/B-360.png) |

**Pick:** B (D014).

## Round 12: whether Try another value stays open

The one variable, on Flocking, is whether the input sliders show by default.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, open (rejected) | The input sliders always show, inviting a reader to play. | [A at 1440](round-12/A-1440.png) | [A at 360](round-12/A-360.png) |
| B, closed (picked) | A Try another value disclosure, so the explanations come sooner and the sliders are one click away. | [B at 1440](round-12/B-1440.png) | [B at 360](round-12/B-360.png) |

**Pick:** B (D014).

## Round 13: how a reader gets to the studied concepts

The one variable is whether the studied concepts can be opened without going through the chapters.
It shows when a work is chosen and no concept is open.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, marks only (rejected) | The invitation says to open a chapter, and the studied mark shows on concepts inside the contents. | [A at 1440](round-13/A-1440.png) | [A at 360](round-13/A-360.png) |
| B, list them (picked) | The same, plus the work's studied concepts listed as links in the reading area. | [B at 1440](round-13/B-1440.png) | [B at 360](round-13/B-360.png) |

**Pick:** B (D014).

## Round 14: whether a study hands the reader on

The one variable, on Flocking, is what comes after the nearby concepts.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, nearby only (rejected) | A study ends with its nearby concepts, each with why a reader would go there. | [A at 1440](round-14/A-1440.png) | [A at 360](round-14/A-360.png) |
| B, next study (picked) | The same, plus one Next study link, going through the work's studied concepts in book order. | [B at 1440](round-14/B-1440.png) | [B at 360](round-14/B-360.png) |

**Pick:** B (D014).

## Round 15: the type inside a drawing

The first cosmetic pair, on Flocking. The one variable is the labels' typeface.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, monospace (rejected) | As the charts have used since the Arrive study: technical, reading as instrument labels. | [A at 1440](round-15/A-1440.png) | [A at 360](round-15/A-360.png) |
| B, sans-serif (picked) | The interface's sans-serif, slightly smaller: quieter, matching the controls around the drawing. | [B at 1440](round-15/B-1440.png) | [B at 360](round-15/B-360.png) |

**Pick:** B (D014).

## Round 16: the glyph on a studied concept

The one variable is the glyph in the contents and the search results. The screen-reader text is the
same either way.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, open book (picked) | 📖: this concept has more to read. | [A at 1440](round-16/A-1440.png) | [A at 360](round-16/A-360.png) |
| B, test tube (rejected) | 🧪: this concept has something to try. | [B at 1440](round-16/B-1440.png) | [B at 360](round-16/B-360.png) |

**Pick:** A (D017).

## Round 17: the order of the last two explanations

The one variable, on Flocking, is the order of the limits and the implementations with their
references. The order's Design says the sections follow the record's order, which puts the
implementations and references first, and the Arrive study had the limits first.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, limits first (picked) | Follow the mechanism, Think in streams, Where this breaks down, See it elsewhere, so a reader learns when the idea fails before seeing it elsewhere. | [A at 1440](round-17/A-1440.png) | [A at 360](round-17/A-360.png) |
| B, elsewhere first (rejected) | The record's order, ending on the limits right before the nearby concepts that answer them. | [B at 1440](round-17/B-1440.png) | [B at 360](round-17/B-360.png) |

**Pick:** A (D017), a recorded departure from the order's sentence, on the operator's word.

## Round 18: what comes first inside Follow the mechanism

The one variable, on Flocking, is the order of the worked numbers and the pseudocode.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, numbers first (rejected) | The worked step first, with the selected moment's real numbers, then the pseudocode and its explanations, as the Arrive study had it. | [A at 1440](round-18/A-1440.png) | [A at 360](round-18/A-360.png) |
| B, code first (picked) | The pseudocode and its explanations first, read top to bottom, then the worked step applying it to the selected moment. | [B at 1440](round-18/B-1440.png) | [B at 360](round-18/B-360.png) |

**Pick:** B (D017).

## Round 19: whether the nearby concepts stay on show

The one variable, on Flocking, is whether the nearby concepts are listed or behind a disclosure.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, always listed (picked) | The nearby concepts are always listed after the explanations, each with why a reader would go there. | [A at 1440](round-19/A-1440.png) | [A at 360](round-19/A-360.png) |
| B, on request (rejected) | They sit behind a fifth closed disclosure, so the study ends on Next study. | [B at 1440](round-19/B-1440.png) | [B at 360](round-19/B-360.png) |

**Pick:** A (D017).

## Round 20: which moment a drawing opens on

The one variable is the opening moment. It was captured first on Flocking, which opens at the start
either way, so the operator saw no difference and it was recaptured on Arrive. Fifteen of the twenty
studies open partway through their run.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, telling moment (picked) | Each study opens on the moment its author chose as the most telling; Play runs from there. | [A at 1440](round-20/A-1440.png) | [A at 360](round-20/A-360.png) |
| B, the start (rejected) | Every study opens on its first moment, and Play runs the whole example. | [B at 1440](round-20/B-1440.png) | [B at 360](round-20/B-360.png) |

**Pick:** A (D017).

## Round 21: how the chart is named

The one variable, on Flocking, is what the switch calls the chart.

| Candidate | Caption | 1440 | 360 |
| --- | --- | --- | --- |
| A, title on the switch (rejected) | The switch button carries the chart's own title. | [A at 1440](round-21/A-1440.png) | [A at 360](round-21/A-360.png) |
| B, a fixed label (picked, with a change) | The switch always reads the same two words, and the chart's title sits above the chart. | [B at 1440](round-21/B-1440.png) | [B at 360](round-21/B-360.png) |

**Pick:** B, with a change. The operator took the fixed label but rejected the candidate's wording,
Over time, so the second view is labelled Chart (D017).
