# WO-034 wall study — independent factual critic

2026-11-06. Returned by `wall_factual`, launched through Codex with fresh context,
`gpt-6.1-sol` at `max`. The worker was read-only and ran no test-runner gate.
The executor filed the returned findings and measurements below.

No unresolved factual findings. The honest-caption fallback accurately
describes the simulation and satisfies the permitted criterion-6 alternative.

Independent execution of the current simulation confirmed:

| Measurement | Result |
| --- | ---: |
| Default hit frames | 5 and 6 |
| Ray misses again | Frame 7 |
| Default minimum sampled clearance | 0.118664833 |
| One-unit comparison-ray hits | None |
| Comparison minimum sampled clearance | −0.082825280 |
| Maximum heading difference | 6.470312970° |
| Overlap for each offered ray length 10–12 | 0.739372150 |

The comparison changes only ray length. The caption correctly attributes most
turning to Seek and describes avoidance as a brief clearance correction. The
finite-segment intersection, normal-offset target, clearance formula, and
worked calculations agree with the implementation.

One evidence finding was raised and resolved: the original probes used raw
angle subtraction for `maxHeadingGap`, which could exceed 180°. The retained
probe now calculates angular separation correctly, and
[D005](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d005) explicitly supersedes those historical
measurements. Independently recalculating all 946 corrected rows produced no
metric mismatches; applying the recorded filter returned zero useful
candidates. This supports the bounded-search decision without asserting that
no possible parameter set exists.

The public-source descriptions are accurate.
[gdx-ai 1.8.2](https://github.com/libgdx/gdx-ai/blob/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/RaycastObstacleAvoidance.java)
supports the nearest-hit selection, radius-plus-boundary normal offset, zero
steering without a collision, and corner-trap discussion. The
[book preview's contents](https://api.pageplace.de/preview/DT0400.9781351053297_A36789489/preview-9781351053297_A36789489.pdf)
confirms Chapter 3, §3.3.15; the record appropriately makes no claim about the
unread section text.

Read inventory: operator instructions and reusable guidance; the order's wall
requirements and fallback; repository content-worker rules; D002/D005 and
fan-out record; both original probes, retained probe source and corrected
extended output; the wall catalog record and complete English subtree;
simulation, presentation, model and model spec; supporting `seek`, vector and
parameter functions; both public references.

Boundary: this was a factual review, with direct in-memory execution and no
browser review. The reviewed presentation SHA-256 is
`38c0253b144540215224c0583eea88195500852ae1a4bbde541c4011fa201d96`;
the final English subtree includes the neutral comparison-ray wording.
Independent runtime and usage counters were unavailable to this worker.
