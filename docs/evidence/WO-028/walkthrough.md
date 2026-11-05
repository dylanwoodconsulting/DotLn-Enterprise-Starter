# WO-028 executor walkthrough

Executed 2026-11-04 in the served production build, using new Chromium contexts at 360, 768 and 1440 pixels, reduced motion enabled. The executor inspected rendered DOM and accessibility snapshots, observed page errors and network responses, then read the screenshots as images. The root’s helper asserts the forty-study list, required paths, stepping, closest-approach accessible text, visible executable-model spec, no horizontal overflow, no page errors and no failed responses. The repository e2e separately supplies axe assertions.

This is executor evidence. Acceptance criterion 1 still requires the independent verifier to perform the session and state its own understanding in the VER report; these screenshots do not substitute for that later-phase act.

## Session

| Step | Observation | 360 | 768 | 1440 |
| --- | --- | --- | --- | --- |
| Tools → Catalog → AI for Games | Shelf shows forty studied; the integrated list contains forty links, thirty-eight under Movement. | [360](walkthrough/01-shelf-360.png) | [768](walkthrough/01-shelf-768.png) | [1440](walkthrough/01-shelf-1440.png) |
| Open Collision avoidance and step once | At 0.10 s the text reports 1.13 s until closest approach and the predicted centres/gap; reduced motion offers step controls and no Play. | [360](walkthrough/02-collision-360.png) | [768](walkthrough/02-collision-768.png) | [1440](walkthrough/02-collision-1440.png) |
| Switch to Chart | Current gap and predicted gap share the same selected time; the expanded key names each series. | [360](walkthrough/03-separation-chart-360.png) | [768](walkthrough/03-separation-chart-768.png) | [1440](walkthrough/03-separation-chart-1440.png) |
| Expand Follow the mechanism | Ordinary pseudocode and its step explanations are readable at each width. | [360](walkthrough/02b-collision-mechanism-360.png) | [768](walkthrough/02b-collision-mechanism-768.png) | [1440](walkthrough/02b-collision-mechanism-1440.png) |
| Expand Executable model | The model module, spec path and tested-model statement are visibly open above the worked calculation. | [360](walkthrough/02c-executable-model-360.png) | [768](walkthrough/02c-executable-model-768.png) | [1440](walkthrough/02c-executable-model-1440.png) |
| Expand Where this breaks down | The current-velocity forecast, exact head-on zero-offset failure, one-neighbour limit and no-wall boundary are explicit. | [360](walkthrough/02d-collision-limits-360.png) | [768](walkthrough/02d-collision-limits-768.png) | [1440](walkthrough/02d-collision-limits-1440.png) |
| Open Flee from Contents | The force points away from the source, fades with distance and leaves existing velocity to coast. | [360](walkthrough/04-flee-360.png) | [768](walkthrough/04-flee-768.png) | [1440](walkthrough/04-flee-1440.png) |
| Open Obstacle and wall avoidance; step and choose Ray first hits | A finite ray meets the wall; its normal constructs a target. The two offset lanes keep velocity and acceleration distinct from that construction. | [360](walkthrough/05-wall-rays-360.png) | [768](walkthrough/05-wall-rays-768.png) | [1440](walkthrough/05-wall-rays-1440.png) |
| Follow the nearby Corner trap link | Both whiskers hit; the sideways requests cancel. The goal and both ray-hit marks remain legible on mobile. | [360](walkthrough/06-corner-trap-360.png) | [768](walkthrough/06-corner-trap-768.png) | [1440](walkthrough/06-corner-trap-1440.png) |
| Open Projectile trajectory and step to exact landing | The arc ends at the solved contact height; Landing remains fully visible at 360 pixels. | [360](walkthrough/07-projectile-landing-360.png) | [768](walkthrough/07-projectile-landing-768.png) | [1440](walkthrough/07-projectile-landing-1440.png) |
| Follow The firing solution and open mechanism and limits | The low candidate is selected, the high arc is comparison, and the beacon cross remains visible at low-shot contact. | [360](walkthrough/08-firing-solution-360.png) | [768](walkthrough/08-firing-solution-768.png) | [1440](walkthrough/08-firing-solution-1440.png) |

The walkthrough directory contains thirty-three screenshots. The separate readings directory contains a full open reading and Chart image for each of the twenty studies. All twenty were independently read by both content critics within their assigned factual/reading duties; the reading critic inspected the images. The executor additionally read the full study screenshots and all walkthrough views.

## What the studies explain

Collision avoidance compares the bodies’ relative position and velocity to predict when their centres will be closest if both keep their current velocities. It steers away before that forecast encounter when the time is inside the prediction window and the predicted separation is too small. A new turn can invalidate that forecast. In this engine, an exact head-on forecast can also give a zero direction, which the study exposes rather than concealing.

Flee reverses Seek’s offset: the desired push points from the source towards the body, away from the source. The engine’s twenty-unit distance fade reduces that push as the body gets away. A zero push does not erase velocity, and the body can coast; reversing a steering request is not the same as instantly reversing motion.

The fixed-speed firing solution has no real launch angle when its discriminant is negative. At zero there is one coincident direction; a positive discriminant can give two arcs subject to the solver’s forward-flight admission. In the out-of-range comparison the launcher withholds the shot, so the chart’s remaining distance is an unmet request, not a simulated projectile missing the beacon. A raised target passage and eventual water contact are separate events.

## Capture corrections

The initial detail capture checked text presence before deferred content became visible. The helper now waits for the disclosure and requires its spec paragraph to be visible; the final detail captures show it open. Detail screenshots use the viewport after scrolling, avoiding the off-viewport fixed skip-link artifact found in a tall element capture. Decisions D008, D010, D012 and D014 record the drawing corrections discovered during these reads.

The final checked-record production capture completed at 2026-11-04T19:59:52Z: twenty full readings, twenty charts and thirty-three walkthrough images, with no page errors, failed responses or horizontal overflow. [capture-manifest.json](capture-manifest.json) binds all 73 current images. Model content and drawing geometry are unchanged from the critics’ cleared candidate.

## Repair production readback — 2026-11-04

[repair-1/walkthrough/manifest.json](repair-1/walkthrough/manifest.json) records thirty-nine selected-frame captures with structured text at 360, 2080 and 3840 pixels, with no page errors or horizontal overflow. [The final supplemental manifest](repair-1/reading-final/manifest.json) adds the default wall chart/comparison, the straight-on end with numbers and inputs, and all limits at 360 pixels. Both workers independently judged this content; the verifier’s new session remains a separate lifecycle dispatch.
