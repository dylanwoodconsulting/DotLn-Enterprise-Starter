# WO-020 critic findings and their dispositions

Two Codex critics reviewed all twenty studies (D003), then rechecked the rewrites. Every finding is
listed here with what happened to it. The reports themselves are in the session's ignored scratch;
what follows is their substance, in the executor's words where a finding was long.

| Critic | Pass | Findings | Result |
| --- | --- | --- | --- |
| Factual | First | 0 | All 31 URLs opened; each cited source supported its claim, no prose contradicted a row, and no study quotes a work in copyright |
| Reading | First | 23 | Fixed by the executor or by the same authors in one rewrite |
| Factual | Recheck | 2 | Both in the Arrive model, exposed by the live inputs; fixed |
| Reading | Recheck | 5 | Four in the Arrive model, one in Slot assignment; fixed |

The factual critic marked no reference unsupported. Its one note, in both passes, is that the book's
DOI redirects to a publisher page that refuses automated clients; it corroborated the cited sections
in the publisher's own preview. [The evidence README](README.md#the-link-check) records the status.

## Reading critic, first pass

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| seek | Movement text equivalent | The coordinate and vector pairs make the reader decode signs to discover that Mica is moving away while acceleration pulls back. | Fixed by the author in the rewrite. |
| align | Smaller slowing angle comparison chart | The bottom −18.4 tick is clipped at the left edge, obscuring its minus sign. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |
| face | Slower motor comparison chart | Leading digits of y-axis labels are clipped: 63.67 reads as 3.67. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |
| pursue | Movement text equivalent | Positions, velocities, acceleration and the predicted point appear as coordinate pairs in one sentence, burying the useful relationship between Reed and the forecast cross. | Fixed by the author in the rewrite. |
| wander | Opening movement drawing | The bounds for the whole patrol compress Nia, both velocity segments and the circle construction into a small corner cluster. The velocity directions are difficult to compare. | Fixed by the author in the rewrite. |
| wander | Movement text equivalent | One sentence inventories coordinates, velocities, carried angles, drawing marks and chart values. It is too dense to read alongside the construction. | Fixed by the author in the rewrite. |
| wander | Smaller circle comparison chart | The leading 1 in the 14.31 y-axis tick is clipped, leaving 4.31. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |
| weighted-blending | Movement note at “First weighted sum” | The note says separation takes Nia below the robot. She starts above it, and the negative-y push takes her farther upwards in this drawing. | Fixed by the author in the rewrite. |
| weighted-blending | Text equivalent and mechanism explanations | Six-decimal vector pairs, such as (5.928261, 0.925055), dominate the explanation and make the contributions unnecessarily difficult to compare. | Fixed by the author in the rewrite. |
| weighted-blending | Cancellation comparison chart | The 10.67 y-axis tick loses its leading digit and reads as 0.67. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |
| priority-steering | Example description and first two limits | Literal placeholders including {initialPosition}, {failedOrder}, {minimumGap} and {switches} appear instead of the example's values. | Fixed by the executor: placeholders now fill in the example and the limits (D013). |
| equilibrium-fallback | Example description and first two limits | Literal placeholders leave the setup and failure results unresolved, including {initialX}, {weakInitialMagnitude} and {maxOffset}. | Fixed by the executor: placeholders now fill in the example and the limits (D013). |
| flocking | Opening movement drawing | Alignment and crossing drive point right from Mara on the same baseline as the resultant. The green resultant overlays them, making their separate contributions difficult to identify. | Fixed by the author in the rewrite. |
| steering-pipeline | Example description and first limit | The setup renders placeholders such as {goal}, {firstCorner} and {maxChecks}; the failure paragraph also leaves {failureChecks} unresolved. | Fixed by the executor: placeholders now fill in the example and the limits (D013). |
| steering-pipeline | Repair budget comparison chart | The leading digits of 53.33 and 26.67 are clipped from the y-axis labels. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |
| two-level-formation-steering | Movement text equivalent | Listing every member position, slot position, mean, anchor and proposal in one sentence obscures the central relationship: the robots trail their slots while the anchor is held near their mean. | Fixed by the author in the rewrite. |
| formation-pattern-interface | Opening drawing at “Lookout leaves” | The caption promises muted uncorrected target dots, but they coincide with and are hidden beneath the escort dots at this moment. That useful coincidence is unstated. | Fixed by the author in the rewrite. |
| formation-pattern-interface | Movement text equivalent | The sentence lists actual, corrected and uncorrected coordinates before explaining their relationship, requiring the reader to compare several position tables mentally. | Fixed by the author in the rewrite. |
| formation-pattern-interface | Fifth limit | The fixed anchor, scripted heading and omitted controllers repeat the example's scope without identifying another failure. | Fixed by the author in the rewrite. |
| group-movement | Movement text equivalent | Expanding {slots} and {members} produces a long catalogue of positions and velocity pairs. It hides the visible fact that the medic trails the escorts and has the largest slot gap. | Fixed by the author in the rewrite. |
| making-the-creatures | Opening movement drawing | Fern's wander and flee contributions are collinear. The much longer flee segment overlays the short wander segment, so the reader cannot distinguish both contributions named by the legend. | Fixed by the author in the rewrite. |
| making-the-creatures | Movement text equivalent | One sentence combines five actor positions, seven acceleration vectors and both chart readings. The controller's composition gets lost in the numerical inventory. | Fixed by the author in the rewrite. |
| making-the-creatures | Player response comparison chart | Leading digits are clipped from y-axis labels: 19.05 appears as 9.05 and 12.76 as 2.76. | Fixed by the executor: the chart's drawing area widened, the base's geometry unchanged (D013). |

## Factual critic, recheck

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| arrive | visual.model: workedStep narration and frame notes | The new slowing-radius control exposes overshoot and return states that the narration describes incorrectly. Negative acceleration is labelled braking even when it increases speed, and motion away from the target is described as approaching it. | Fixed by the executor: the narration now judges braking from acceleration against velocity and direction from velocity against the target, and a spec walks a late-braking run past the target. |
| arrive | visual.model: workedStep arithmetic | After overshoot, the displayed equations equate a negative position offset with a positive distance and omit the direction sign when calculating desired velocity. | Fixed by the executor: the narration now judges braking from acceleration against velocity and direction from velocity against the target, and a spec walks a late-braking run past the target. |

## Reading critic, recheck

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| arrive | Example description after changing an input | The setup still declares slowing radius 36 and maximum acceleration 12 after the reader changes those controls, so it describes different inputs from the drawing. | Fixed by the executor: the description reads the changed values through placeholders. |
| arrive | Frame note and worked-step note | With slowing radius 8 at 8.0 seconds, the character has overshot and is accelerating back towards the target. Both notes call this braking; velocity and acceleration are both negative, so speed is increasing. | Fixed by the executor, with the factual finding above; the note now names the return past the target. |
| arrive | Slowing-radius comparison findings | Selecting radius 8 makes both comparison runs identical, but the prose says the 8-unit run overshoots and the selected 8-unit run approaches without passing the target. | Fixed by the executor: each run's verdict is calculated, and equal radii say the two runs are the same. |
| arrive | Movement bounds and comparison chart ranges | Allowed inputs exceed the fixed drawing ranges: radius 60 clips the slowing circle, while radius 4 with acceleration 4 produces a peak position of 127.76 above the comparison chart's upper limit of 110. | Fixed by the executor: the box and the chart's window derive from the runs, keeping the base's values at the example's inputs. |
| slot-assignment | Worked cost table | The revised table appends every guard's coordinates and lists every post's coordinates, although positions never enter the suitability calculation and the drawing already names these marks. | Fixed by the same author. |

After these, the executor set every record to `checked` with both critics named. The last five fixes
were not read a third time by the critics; `arrive.model.spec.ts`, `slot-assignment.model.spec.ts`
and the three independent reviewers cover them.
