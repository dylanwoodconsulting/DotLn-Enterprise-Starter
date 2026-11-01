# WO-020 execution evidence

AI for Games now has twenty studied concepts. Tools and the shelf count them, Chapter 3 marks them,
and a chosen work lists them. Each opens to a study written for this app on one example: the idea
and a situation it serves, a drawing stepped by hand or played on command with a text equivalent, a
chart of what changes, live inputs that rerun the example, pseudocode with the worked numbers, an
RxJS reading where streams clarify the idea, public implementations and references, limits with a
visible failure, nearby concepts and the next study. Readings have real addresses, so Back and a
shared link return to them, and the Tools home loads no work's chunk.

The operator made every choice about how a study looks and reads in
[twenty-one comparison rounds](design/comparisons.md), then ended them (D017). Their direction moved
the workers to Codex (D003) and lifted the fan-out's token stop (D012).

See the decisions, filed in the target at `docs/dotln/evidence/WO-020/decisions.md` once the
records move, [the fan-out](fan-out.md), [the critics' findings](review.md),
[the comparisons](design/comparisons.md), [the rejected candidates](design/rejected-implementations.md),
[the self-review](self-review.md), [the executor walkthrough](walkthrough.md),
[host qualification](host-qualification.md) and [the handoff](handoff.md). The independent verifier's
walkthrough is a separate duty.

## What the decisions settled

D001 is the base, D002 the publishing rule, D003 the Codex route and D005 how nineteen concepts fell
to ten authors. D006, D007, D011, D014 and D017 are the comparisons. D008 is the addressable reading,
D009 how the record carries the decided form without a new field, and D010 the engine's added
exports. D013 and D016 are what the critics changed, D015 the avoidable bundle growth, and D018
what the three independent reviewers' first pass changed, with one deferral.

## The link check

`npm run studies:links` opened every cited address once from the executor's session on 2026-10-31:
31 distinct URLs, 30 answering 200. The other is the book's DOI: `doi.org` resolves it (302) to the
publisher, whose Cloudflare page answers automated clients 403, a real headless Chromium included.
The DOI's own metadata answers 200 by content negotiation, and the factual critic corroborated the
cited sections in the publisher's preview, so it stands as the canonical citation (D016). No URL is
unreachable, and the factual critic marked no reference unsupported.

| Status | URL | Cited by |
| --- | --- | --- |
| 403 at the publisher; `doi.org` answers 302 and the DOI's metadata answers 200 (D016) | https://doi.org/10.1201/9781351053303 | align, equilibrium-fallback, face, fixed-formations, flocking, formation-pattern-interface, group-movement, making-the-creatures, priority-steering, pursue, scalable-formations, seek, separation, slot-assignment, steering-pipeline, two-level-formation-steering, velocity-matching, wander, weighted-blending |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/ReachOrientation.java | align |
| 200 | https://www.red3d.com/cwr/steer/Arrival.html | arrive |
| 200 | https://github.com/libgdx/gdx-ai/blob/master/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Arrive.java | arrive |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/withLatestFrom.ts | arrive |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/PrioritySteering.java | equilibrium-fallback, priority-steering |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/BlendedSteering.java | equilibrium-fallback, weighted-blending |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Face.java | face |
| 200 | https://github.com/libgdx/gdx-ai/wiki/Formation-Motion | fixed-formations |
| 200 | https://www.red3d.com/cwr/boids/ | flocking, making-the-creatures |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/tests/src/com/badlogic/gdx/ai/tests/steer/scene2d/tests/Scene2dFlockingTest.java | flocking |
| 200 | https://raw.githubusercontent.com/meshula/OpenSteer/710432341807f5597b62fa168f194f9ef2640c8e/plugins/Boids.cpp | flocking |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/FormationPattern.java | formation-pattern-interface |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/patterns/DefensiveCircleFormationPattern.java | formation-pattern-interface, scalable-formations |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/FormationMotionModerator.java | formation-pattern-interface, two-level-formation-steering |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/Formation.java | formation-pattern-interface, group-movement, scalable-formations, two-level-formation-steering |
| 200 | https://raw.githubusercontent.com/SarasiNishala/Sheep_Dog_Game/1a1c98e74238a613c72c7bbeb031bf6d8ce7850e/src/ai/boids.py | making-the-creatures |
| 200 | https://raw.githubusercontent.com/SarasiNishala/Sheep_Dog_Game/1a1c98e74238a613c72c7bbeb031bf6d8ce7850e/src/agents/sheep.py | making-the-creatures |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Pursue.java | pursue |
| 200 | https://www.red3d.com/cwr/steer/PursueEvade.html | pursue |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Seek.java | seek |
| 200 | https://www.red3d.com/cwr/steer/SeekFlee.html | seek |
| 200 | https://www.red3d.com/cwr/steer/gdc99/ | separation, weighted-blending |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Separation.java | separation |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/SoftRoleSlotAssignmentStrategy.java | slot-assignment |
| 200 | https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/src/steerpipe.cpp | steering-pipeline |
| 200 | https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/include/aicore/steerpipe.h | steering-pipeline |
| 200 | https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/README.md | steering-pipeline |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/MatchVelocity.java | velocity-matching |
| 200 | https://www.red3d.com/cwr/steer/Wander.html | wander |
| 200 | https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Wander.java | wander |

## Checks

The last code change is the chunk parser in `tools/scripts/catalog/check-studies.mjs`. Every result
below is on that tree or on inputs it did not change, at the target's base `eb9eeec`.

| Check | Result |
| --- | --- |
| `node scripts/target-gate.mjs WO-020` | Passed: install, lint, types, tests and format, with no tracked-byte mutation |
| `node scripts/target-gate.mjs WO-020 --review` | Passed: those and build, e2e and visual, with no tracked-byte mutation |
| `npx nx format:check` | Passed |
| `npx nx run-many -t lint test build` | Passed for 20 projects, Tools with 297 tests and the catalog with 34 |
| `npm run lint:fixtures`, `lint:components`, `lint:hygiene` | Passed: 0 findings, 0 exceptions |
| `npm run check:fixtures`, `catalog:check` | Passed |
| `npm run studies:check` | `check-studies: 20 records; 0 problems` |
| `npm run test:tooling` | 66 passed, and inside the gate's lint |
| `npm run i18n:check`, `check:scripts`, `check:bundle` | Passed; 32 npm scripts, 17 files; 399,297 initial bytes |
| `npx nx e2e dotln-e2e` | 127 passed, in the Preflight |
| `npx nx e2e-visual dotln-e2e` | 47 passed, and again in the review gate |

In both gate rows Nx restored `test`, `build` and `e2e` from its cache of the passing runs above,
because their inputs had not changed. `lint`, `format` and `visual` ran.

## Sizes

From the production build of the final tree beside a clean export of the fast-forwarded base. WO-019
measured 393.63 kB initial, and WO-015's scene took that to the base's 398.22 kB.

| Chunk | Base, raw / transfer | Now, raw / transfer |
| --- | --- | --- |
| Initial total | 398.22 kB / 110.58 kB | 399.30 kB / 111.38 kB |
| Tools feature (`index`) | 137.09 kB / 30.31 kB | 166.94 kB / 36.07 kB |
| `study-explanation` | 24.83 kB / 5.53 kB | 7.80 kB / 2.3 kB |
| `aifg`, all twenty records | none | 164.38 kB / 40.0 kB |
| Each model module | none | 7 to 14 kB raw, 3 to 5 kB transfer |
| `catalog-summary-json` | loaded with nothing else needing it | 23.47 kB / 4.6 kB |
| `studies-summary-json` | none | 808 bytes |
| The eight tool chunks | unchanged | unchanged, 3,463 rows in eight lazy chunks |

`npm run check:bundle` passes at 399,297 initial bytes with no catalog or study code in the initial
graph. The first version added 8.3 kB of `@angular/core` for `resource()`, which D015 removed. The
home opens without loading any tool chunk, which a browser test asserts.
