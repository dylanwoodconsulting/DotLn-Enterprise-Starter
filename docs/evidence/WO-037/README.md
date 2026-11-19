# WO-037 evidence

The scene adds five tools under Fight, two board-animation aim modes, streaks, contact marks, knockout, and a trial overlay showing both branches. The same seed reproduces the clear lane, the walled lane and the crossing runner. The executor also repaired the recorded-route display after Restart. [Walkthrough and screenshots](walkthrough.md) · [Design comparison](design/comparisons.md) · [Decisions](decisions.md) · [Host](host-qualification.md)

## Determinism

The engine wrote three known outcomes with its fixture writer. The new range fixture ends with nine shots and nine contacts on the open branch, nine shots and nine wall stops on the walled branch. Its first frame difference is 21. The standing target takes zero hits behind the wall. Its owner, position and velocity are represented on every live streak. Hashes fold the streaks' positions and velocities into each frame after the units.

The trial and wall fixtures add shots, hits, accuracy and down-unit series. Both of the trial's 11-sample hash arrays and both of the wall fixture's 16-sample arrays equal the corresponding arrays at integrated target main. A pre-037 stored or imported trial restores the four absent series as null through its existing reader. The package's runtime dependency keys match that integrated base.

## Visual baselines

All baselines below are under the target's `apps/dotln-e2e/src/visual-baselines/darwin/`.

| Files | Visible change |
| --- | --- |
| `scene-360.png`, `scene-768.png`, `scene-1440.png` | The responsive instrument grid includes shots, hits, accuracy and down units. The rail adds Fight on the wider layouts. |
| `scene-flocking-360.png`, `scene-flocking-768.png`, `scene-flocking-1440.png` | On phones and tablets the chosen tool scrolls into view with the new Fight group beneath it. The desktop inspector shares the updated instrument grid. |
| `scene-volley-360.png`, `scene-volley-1440.png` | New captures at frame 55 show nine shots, three hits and 33% accuracy alongside the crossing streaks and contact spark. |
| `scene-knockout-row-360.png` | A close view of unit 09 keeps its position, still activity, down state and three hits legible in the same text row. |
