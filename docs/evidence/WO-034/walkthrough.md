# WO-034 executor walkthrough

2026-11-06. The executor opened the current production build in fresh Chromium
contexts at 2080×1460 and 3840×1620. The retained
[walkthrough program](wall-walkthrough.mjs) expands the study's disclosures,
operates its moment buttons and ray-length control, and records the displayed
frame descriptions, network failures and page errors in
[the results](wall-walkthrough/results.json).

## The wall study in use

| Action, repeated at both sizes | Observed result |
| --- | --- |
| Open Obstacle and wall avoidance with its default inputs. | The comparison changes ray length from 9 to 1 while retaining the same initial motion, delivery, radius, normal offset, speed and acceleration. |
| Select **Ray first hits**. | Frame 5, at 0.50 s, shows the hit at (10.00, 4.15), its left-facing normal and the substituted target at (4.00, 4.15). |
| Select **Ray misses again**. | Frame 7, at 0.70 s, seeks the delivery point again. The short intervention has ended. |
| Select **Smallest clearance**. | Frame 29, at 2.90 s, reports 0.12 units of body clearance from the finite wall. |
| Select **End of run**. | Frame 80, at 8.00 s, shows the courier near the delivery point. |
| Read **Compare ray lengths**. | The page reports 2 hit frames out of 81 for the selected ray, none for the comparison ray, minimum clearances of 0.12 and −0.08, and a greatest heading difference of 6.47 degrees. |
| Set the forward ray length to 1 and select the smallest clearance. | Frame 29 shows the slight overlap of −0.08 units. The comparison explicitly reports equal ray lengths. |
| Set the forward ray length to 0.5. | The neutral comparison title remains correct; the equal-length finding disappears. Both traces report no hits and the same minimum clearance. |
| Set the forward ray length to 10 and select the smallest clearance. | Frame 39 reports −0.74 units. The limits explain this overlap and do not promise that more lookahead is safer. |

The avoidance contribution is a brief change in clearance, while seeking the
offset delivery supplies most of the turn. The visible explanation says this;
it does not claim sustained wall following. This is criterion 6's expressly
admitted fallback, with the bounded search and independent findings recorded in
[the decisions](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md) and [the wall review](review.md).

The executor read all twelve PNGs after the first capture. The repeat after the
review repairs reproduced ten images byte for byte; the two changed comparison
images were read again and show the qualified default-example explanation.
The courier, hit, delivery and
control labels are readable and separated in the inspected frames. The
comparison chart and its findings fit the content column at both sizes. No
network failure or page error was recorded. These observations cover the named
frames; the all-frame label sweep supplies the broader geometry evidence.

## Captured views

| View | 2080×1460 | 3840×1620 |
| --- | --- | --- |
| First hit, frame 5 | [Image](wall-walkthrough/2080x1460-selected-5.png) | [Image](wall-walkthrough/3840x1620-selected-5.png) |
| Ray misses, frame 7 | [Image](wall-walkthrough/2080x1460-selected-7.png) | [Image](wall-walkthrough/3840x1620-selected-7.png) |
| Smallest clearance, frame 29 | [Image](wall-walkthrough/2080x1460-selected-29.png) | [Image](wall-walkthrough/3840x1620-selected-29.png) |
| End, frame 80 | [Image](wall-walkthrough/2080x1460-selected-80.png) | [Image](wall-walkthrough/3840x1620-selected-80.png) |
| Comparison chart | [Image](wall-walkthrough/2080x1460-comparison.png) | [Image](wall-walkthrough/3840x1620-comparison.png) |
| One-unit ray, frame 29 | [Image](wall-walkthrough/2080x1460-one-unit-ray.png) | [Image](wall-walkthrough/3840x1620-one-unit-ray.png) |

This executor walkthrough does not stand in for criterion 1's independent
verifier reading of three randomly selected modules on the committed tree.
That reading belongs to the separately dispatched verifier and its VER report.
