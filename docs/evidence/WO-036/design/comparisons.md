# WO-036 design comparisons

WS-001 rule 25's eye doctor test for walls and ways. The field stays the page; the one
variable of the first pair is where field editing lives.

## Round 1 — 2026-11-15

**A, the transport.** The field tools (Select, Draw wall, Place obstacle, Clear walls and
the Tile graph's cell size, its name a link to the Tile graph's reading) sit in the
transport, under Play, Step and Restart. The list of walls and obstacles sits under the
unit list in the text layer, every number editable from the keyboard.

**B, a Field tab.** An Inspector and Field tab pair takes the inspector's place in the
right column. The Field tab holds the same tools and the same list; the transport keeps
only the run's controls.

Both were rendered from the served mocked production build after the same session: a wall
drawn from the top edge at x = 70 to y = 64, an obstacle placed by a click and one by a
drag, the squad west of the wall selected, A* chosen with the objective set beyond the
wall, Apply pressed, four frames stepped and Show search on. They were captured at about
2080 by 1460, the operator's centre window, at 360 by 800, and read at 3840 by 1620. At 360
the script's objective click landed after the page had scrolled, so the 360 captures show
no objective and no routes; the layout is what they compare.

| Size | A | B |
| --- | --- | --- |
| 2080 by 1460 | [a-2080x1460.png](round-1/a-2080x1460.png) | [b-2080x1460-field-tab.png](round-1/b-2080x1460-field-tab.png), [b-2080x1460-inspector.png](round-1/b-2080x1460-inspector.png) |
| 360 by 800 | [a-360.png](round-1/a-360.png), [a-360-full.png](round-1/a-360-full.png) | [b-360-field-tab.png](round-1/b-360-field-tab.png) |
| 3840 by 1620 | [a-3840x1620.png](round-1/a-3840x1620.png) | [b-3840x1620-field-tab.png](round-1/b-3840x1620-field-tab.png) |

B's implementation record is [b-field-tab.patch](round-1/b-field-tab.patch): the scene
page's template and class from A to B as they stood, and the three messages B added,
listed rather than applied.

**Pick: A, and the rounds are done**, on the operator's word, recorded in
[WO-036-D009](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d009). B has left the code.
