# WO-028 execution evidence

Baseline: target `55b59c9133056c1d6471274a9676a7d5649196ac`, fetched and checked on 2026-11-04. The activation base is an ancestor of origin/main and the target fast-forward was a no-op. The batch adds the twenty concepts filed by the order without substitution.

[Decisions](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md), [authoring and accounting](fan-out.md), and [host qualification](host-qualification.md) record the execution boundaries. Per-author receipts under `authors/` describe which engine steps and local teaching steps each model uses and which public sources the author opened. Both content critics judged all twenty and cleared the bounded corrections before the records became checked; [review.md](review.md) carries every disposition and the per-study engine/local confirmation.

## Dependencies and release

The target's `package.json` dependency keys equal the baseline's. A Python comparison using `git show 55b59c9133056c1d6471274a9676a7d5649196ac:package.json` and the candidate file exited 0 with no output on 2026-11-04. `npm ci` exited 0 against the unchanged lockfile. The launchpad release preparation reported that this target order records no launchpad release and changed no files. Target release classification remains minor under the order's declared policy; final review owns its reviewed release notes.

## Evidence collection

The production walkthrough uses a fresh browser context at each required width and reads the rendered DOM and accessibility state before recording screenshots. It records page errors, failed responses and horizontal overflow. The end-to-end suite separately asserts reduced-motion stepping, executable-model provenance, the required links and the board's serious/critical axe threshold. The integration updates expected shelf counts from the generated summary, while the tooling tests separately pin both movement batches' membership.

## Incremental executable check

After the first three author pairs were integrated, both registries contained the 26 current movement records. Summary generation validated their schema and reported only the six intentional draft states (66 records overall); no draft is claimed ready to ship. The first `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npx nx test tools` ended with exit 137 and no diagnostic output before reporting a test result. The cause is unestablished. The same command with static output is the next diagnostic attempt; this is not a recorded target gate or passing test claim.

The diagnostic rerun of `npx nx test tools --outputStyle=static` completed with 752/753 tests passing; all first six model specs passed. Its one failing disclosure test and two unhandled translation errors identified the missing Tools test-kit translation mirror. The parent regenerated that mirror from the app tools block and changed the disclosure's relative direction to “above” after the pseudocode-first layout. Later reruns returned exit 137 without output, including one with Nx's legacy command runner; cause remains unknown. These are not passing evidence.

The first eight studies, the disclosure and all existing Tools specs passed together: `npx nx test tools --outputStyle=static`, 89 files / 766 tests, exit 0. The regenerated summary resolved the intermediate inventory mismatch. `npx nx lint tools --fix --outputStyle=static` corrected import order only and passed. `npx nx build dotln --configuration=production --outputStyle=static` passed for that intermediate candidate. These invocations used `NX_DAEMON=false`, `NX_ISOLATE_PLUGINS=false`, `NX_NATIVE_COMMAND_RUNNER=false` and a host PTY. The observations support this invocation mode; they do not establish the cause of earlier exit-137 events. Final-candidate validation still follows integration and review.

The instrumented twelve-study test run stopped at the 3 GiB task memory ceiling (3,300,673,344 bytes measured footprint). WO-028-D007 records the approved bounded increase to 4 GiB on this host; the aggregate host ceiling remains in force. Earlier silent failures remain observations, not independently proven causes.

At the twelve-study candidate, the bounded test rerun passed 93 files / 802 tests. Peak measured footprint was 3,123,797,408 bytes against the new 4,294,967,296-byte ceiling. All four new ballistic/jump specs and the registry-wide parameter-range checks passed. `npm run i18n:check` also passed with no missing keys.

The eighteen-study candidate passed the complete Tools suite: 99 files / 846 tests, peak footprint 3,148,310,248 bytes under the 4 GiB task ceiling. This includes the Corner trap screen-orientation regression, the motor-capacity and infeasible-actuator comparisons, both dimension models and both kinematic arrival/radius models. The independent critics have not yet marked these drafts checked.

The full twenty-study draft candidate passed the Tools suite: 101 files / 859 tests, exit 0, peak measured footprint 3,124,172,104 bytes under the 4 GiB task ceiling. This includes both final Kinematic wander and Coordinated movement specs. The record checker found exactly eighty records and only the twenty intentionally unreviewed draft-state problems; no schema, registry or missing-reference problem was reported. Source formatting completed before the content critics’ candidate snapshot.

## Reference and implementation link check

Observed by the independent factual critic on 2026-11-04. The 33 unique URLs below cover all 78 reference and implementation occurrences in the twenty records. All cited claims were confirmed within the stated access scope; no source was marked unsupported. The detailed claim mapping is retained in the [factual receipt](critics/factual-initial.json).

| URL | Observed status and access scope |
| --- | --- |
| https://doi.org/10.1201/9781351053303 | Publisher HTML HTTP 403 after DOI redirect; DOI content-negotiation metadata HTTP 200 |
| https://www.red3d.com/cwr/steer/gdc99/ | curl HTTP 403; web opened readable article content |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/SteeringBehavior.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Seek.java | HTTP 200 |
| https://github.com/libgdx/gdx-ai/blob/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/SteeringAcceleration.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Flee.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/MatchVelocity.java | HTTP 200 |
| https://github.com/libgdx/gdx-ai/blob/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/CollisionAvoidance.java | HTTP 200 |
| https://github.com/meshula/OpenSteer/blob/710432341807f5597b62fa168f194f9ef2640c8e/include/OpenSteer/SteerLibrary.h | HTTP 200 |
| https://github.com/libgdx/gdx-ai/blob/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/RaycastObstacleAvoidance.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/RaycastObstacleAvoidance.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/BlendedSteering.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/PrioritySteering.java | HTTP 200 |
| https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion | HTTP 200 |
| https://raw.githubusercontent.com/forrestthewoods/lib_fts/350529579db315c3d0c579f70d871ef13400d418/projects/unity/ballistic_trajectory/Assets/Scripts/BallisticMotion.cs | HTTP 200 |
| https://www.forrestthewoods.com/blog/solving_ballistic_trajectories/ | HTTP 200 |
| https://github.com/forrestthewoods/lib_fts/blob/350529579db315c3d0c579f70d871ef13400d418/code/fts_ballistic_trajectory.cs | HTTP 200 |
| https://www.gnu.org/software/gsl/doc/html/roots.html | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Jump.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/tests/src/com/badlogic/gdx/ai/tests/steer/box2d/Box2dSteeringEntity.java | HTTP 200 |
| https://raw.githubusercontent.com/Mugen87/yuka/v0.7.6/src/steering/Vehicle.js | HTTP 200 |
| https://raw.githubusercontent.com/Mugen87/yuka/v0.7.6/src/steering/behaviors/SeekBehavior.js | HTTP 200 |
| https://raw.githubusercontent.com/godotengine/godot-demo-projects/52e30044658448149b04e8f69b475eebbfbd8f6e/3d/platformer/player/player.gd | HTTP 200 |
| https://raw.githubusercontent.com/recastnavigation/recastnavigation/v1.6.0/DetourCrowd/Source/DetourCrowd.cpp | HTTP 200 |
| https://raw.githubusercontent.com/recastnavigation/recastnavigation/v1.6.0/DetourCrowd/Source/DetourPathCorridor.cpp | HTTP 200 |
| https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/src/kinematic.cpp | HTTP 200 |
| https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/include/aicore/kinematic.h | HTTP 200 |
| https://raw.githubusercontent.com/idmillington/aicore/52fc032d2d605265e7ec2cc93c949d10efc70f5d/README.md | HTTP 200 |
| https://raw.githubusercontent.com/highnet/AI-Steering-Behaviors-for-Games/39b5b3ffa261ba9576379cf64ca84e7d90463068/src/KinematicArrive.cs | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/steer/behaviors/Arrive.java | HTTP 200 |
| https://raw.githubusercontent.com/highnet/AI-Steering-Behaviors-for-Games/39b5b3ffa261ba9576379cf64ca84e7d90463068/src/KinematicWander.cs | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/Formation.java | HTTP 200 |
| https://raw.githubusercontent.com/libgdx/gdx-ai/1.8.2/gdx-ai/src/com/badlogic/gdx/ai/fma/FormationMotionModerator.java | HTTP 200 |

## Corrected candidate validation

After the six reading corrections, the complete Tools suite passed 101 files / 860 tests, exit 0, at 2026-11-04T19:33:56Z. Peak task footprint was 3,866,940,512 bytes under the 4,294,967,296-byte ceiling. The production build passed at 19:34:42Z: initial 405.83 kB, AI for Games study lazy chunk 312.55 kB (73.31 kB estimated transfer). The fresh production browser run completed at 19:35:11Z with 53 named captures (twenty full readings and thirty-three walkthrough shots) plus twenty chart images, no horizontal overflow, page errors or failed responses. Final metadata, visual-baseline and gate validation follows the critic recheck.

The first exact preflight run passed 37 of 39 lint/test/build tasks and failed only e2e lint (cross-project JSON import) and workspace type checking (sixteen index-signature property accesses in new specs). D015 records the fixture-read and bracket-notation repairs; no model calculations or expected values changed. This failed run is retained, not represented as a pass.

The repaired preflight lint/test/build command passed all 39 tasks at 2026-11-04T19:49:48Z (34 cache hits, five executed tasks). The explicit fixture, component, hygiene, catalog/study, tooling and translation commands passed; tooling reported 74 tests, and the record checker reported 80 records with zero problems. check:bundle passed with initialBytes 405832, no lazy code in the initial bundle and the menu available with Tools. The browser stage is recorded separately after completion.

The first complete browser preflight passed 144 of 147 cases. All three new width cases stopped at the same ambiguous selector: the shared how-to-read class names both the example and drawing-guide disclosures. The parent reused the existing text-qualified How to read locator, preserving the intended interaction and all assertions. The focused three-case reproduction and full browser rerun follow; the original failure remains recorded.

The corrected three-width browser cases passed together, then the exact npx nx e2e dotln-e2e rerun passed all 147 tests at 2026-11-04T19:55:13Z. The new cases include reduced-motion stepping, closest-approach text, distinct Movement/Chart keys, executable-model provenance, required linked readings, serious/critical axe checks and no horizontal overflow at each required width.

## Completed implementation checks

The exact target Preflight commands all passed before the first complete gate; [validation.json](validation.json) binds their command, exit and time to retained-log hashes. The final browser run passed 147 cases. The final catalog visual run passed all nine cases (three overview, three existing movement, three marbles) at 2026-11-04T19:59:10Z. The exact Tools command passed again from the current cache at 19:59:11Z; the executed complete suite had 101 files / 860 tests. The latest e2e lint and target format check passed.

D016’s three catalog overview images were regenerated from the current candidate. The 360-pixel image is byte-identical because its viewport has no shelf or affected contents entry. At 768 pixels, Coordinated movement now has a studied marker and wraps onto two lines; at 1440 pixels it gains that marker and the shelf reads forty. All three were read visually against the originals. The first anchored grep selected no tests and exited 1; the corrected selector ran the intended three. The default snapshot updater initially retained the old 1440 count because that tiny change fell inside image tolerance; explicit update-snapshots=all wrote the current image. No unrelated baselines changed.

The final checked-record production build and bundle check passed at 19:59:15Z, restoring the matching build executed at 19:50:04Z. [bundle.json](bundle.json) records initial 405,832 bytes, the AI for Games lazy chunk 314,011 bytes (about 73.32 kB estimated transfer), exactly forty record inputs in that chunk, no route-only code in the initial bundle and unchanged dependency keys. The earlier 312.55 kB figure describes draft metadata; the final checked/reviewer metadata explains the later figure.

Both repositories were fetched again at 19:59Z: target HEAD and origin/main remained 55b59c9133056c1d6471274a9676a7d5649196ac; launchpad HEAD and origin/main remained a5e7076cfe1082d888966223f544e17d471324ae. There was no newer main to integrate. Queue revision 15 marks adjacent-0001 complete on all four declared checks; adjacent-0002 remains explicitly disposed to FUP-2c1a53924446e9dd.

The final checked-record production capture completed at 2026-11-04T19:59:52Z: twenty full readings, twenty charts and thirty-three walkthrough images, with no page errors, failed responses or horizontal overflow. [capture-manifest.json](capture-manifest.json) binds all 73 current images. Model content and drawing geometry are unchanged from the critics’ cleared candidate.

The first launchpad document preflight stopped at four decision dispatch labels that lacked a leading control prefix (D004, D005, D006, D013). Each now starts with resume: next; its meaning, captured approval and decision are unchanged. The decisions index and follow-up projection were regenerated before repeating the document gate.

The repaired launchpad Preflight npm run test:docs passed all fourteen checks at 2026-11-04T20:01:55Z before any full target gate. The final image comparison found all twenty Chart and all thirty-three walkthrough captures byte-identical to the critic-cleared images; only the bottom reviewer attribution changed in the twenty full readings. No drawing or prose above that attribution changed.

The independent design review’s two bounded changes are recorded by D017 and review.md. The correction batch initially invoked a nonexistent check:foundations script; package.json names typecheck:foundations, and the corrected invocation is used. No missing-script attempt is claimed as a successful check.

The D017 candidate passed Tools lint, foundation type checks and the complete Tools suite (101 files / 861 tests) at 20:10:20Z; the new case covers selected legend mapping. All three objective-width browser cases passed at 20:10:36Z. Production build and bundle check passed at 20:10:44Z; initial and AI for Games chunk byte sizes remain 405,832 and 314,011. A fresh production capture checks that the refactor preserves all recorded images.

The post-D017 production capture completed at 2026-11-04T20:11:21.460Z, with no browser errors or overflow. All 73 images are byte-identical to the preceding checked-record capture, confirming that the legend refactor preserves the rendered readings and walkthrough.

The completed independent ladder found two design issues and fixed both; criteria and consistency had zero findings. The design recheck passes. Both repositories were fetched again at 20:11Z and remain at their recorded main/base revisions; format and sync report all surfaces current. The post-D017 launchpad document preflight passed fourteen checks at 20:12:51Z before the first full target gate.

## Complete target gates

The completed independent ladder preceded both gates. The plain target gate passed all five declared commands at 2026-11-04T20:15:01Z (0 h 1 min). The review target gate passed all eight declared commands, including builds, functional e2e and visual e2e, at 20:18:30Z (0 h 3 min). Both canonical runs exited zero and retained unchanged target bytes/HEAD. [gates.json](gates.json) records each command result and the reviewed identity. No reviewer ran after either passing complete gate.

The final handoff records criterion 1 as unmet, later-phase, because it specifically requires the separate verifier’s own session and VER statement. The executor journey and thirty-three screenshots are ready for that independent verification. Criteria 2–8 are supported by the retained executable evidence and passing rows.

## Repair after VER-001 — 2026-11-04

[Repair evidence](repair-1/README.md) records the shared motion-label placement, the successful glancing wall example, truthful selected-input bookmarks and expanded author bylines. Its full five-viewport glyph sweep has zero clipped and overprinted labels in both movement batches. Both content critics pass after two bounded findings are fixed; the revised Tools suite passes 867 cases. The original evidence above remains the historical implementation and verification record.

## Where the records went

After the final review passed on 2026-11-05, `target-records` moved `decisions.md`, the three verification reports and both final reviews into the target's `docs/dotln/` with its records commit `51bf26df57e66564b35406942368068ac1d6f5f6`. The decisions this directory's records cite (D001 to D063) are read there, and the links that pointed at the moved files now point at that commit. The final review's own probes and repairs are under [final-002/](final-002/README.md), and [preview-pr.json](preview-pr.json) records both drafts of pull request 14 and the readback this review took.
