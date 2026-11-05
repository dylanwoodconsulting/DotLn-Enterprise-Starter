# WO-028 repair evidence — 2026-11-04

The repair responds to [VER-001](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/verifications/WO-028/VER-001.md) F1 and the related F4/F5 findings. [The plan](plan.md) names the admitted scope, alternatives and worker accounting; decisions [D026–D030](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d026) retain the choices and their evidence.

The shared motion renderer places names separately from physical points, using a free row or horizontal gap and a guide back to the anchor. No body or wall moves to accommodate text. [The corpus comparison](label-comparison.json) covers 3,475 default frames and 11,544 supplied names in forty studies: the existing suppression helper would remove 650 names, while the selected placement retains them all. The model suite adds complete-corpus retention, boundary and separation assertions; browser regressions measure actual glyph boxes in four representative studies across both operator sizes and 360 pixels. Fifteen existing movement specs now read labelX for label bounds and separation, retaining their physical-coordinate assertions.

The wall study’s default has delivery height 15 and ray length 9. A finite-wall distance measure remains meaningful around its ends. The comparison changes only delivery height to zero and retains the straight-on failure. All twenty new bylines identify the original authors’ host and model from the retained author receipts. The revised wall record returns to checked only after the two repair content critics pass it.

## Executed checks before the review ladder

The complete Tools suite passes 101 files and 866 cases before the input-bookmark regression was added. Eleven cases cover the wall study, including the default glancing turn, clearance between updates, finite endpoints and the head-on comparison. Two non-PTY invocations terminated with exit 137; a streamed legacy-runner PTY invocation passes. That observation does not establish why the prior processes ended. No dependency or runtime setting was changed to obtain the pass.

The production build passes. [The walkthrough manifest](walkthrough/manifest.json) records 39 images with DOM/accessibility state, no page errors, no failed responses and no horizontal overflow, at 360, 2080 and 3840 pixels. The wall is sampled at first hit, 1.6 s, 4 s and 8 s, beside Motor control, Iterative targeting, The firing solution and Movement in the third dimension. The parent inspected representative images; the reading critic inspects all images and requests additional views where coverage is missing.

The unchanged verifier [glyph-sweep instrument](../ver-001/label-sweep.mjs) measures the production build across every frame in both batches. `labels-initial.json` is earlier evidence before the wall-content change; the final sweep is recorded separately. The only source changes after its build are the no-hit/no-turn bookmark labels and the default-example caption qualification, neither of which changes model geometry, supplied drawing labels or the default frame sequence. Final gates establish the completed candidate separately.

## Content findings

FC-01: short rays can produce no hit, and the straight-on run produces no turn. The former bookmark fallbacks nevertheless named those events. D029 changes the first bookmark to Start · ray misses when no hit occurs and omits an absent turning event, with a regression for both cases. The default event sequence is unchanged.

The reading critic’s guide finding: after the instructed change to a straight-on destination, the fixed drawing guide still described an offset delivery. D030 qualifies that passage as the default example, preserving the selected-frame note and numbers as the current-run account. Targeted rechecks judge both changes.

The layout-width finding F3 remains the already recorded road-planning follow-up in D024. It changes neither this repair’s scope nor its failed-label rule. F2’s narrow label failures are measured by the same renderer and browser checks; no new page, family or design round is added.

The final glyph sweep passes with zero clipped or overprinted frames in all 990 new-batch frames and all 2,485 first-batch frames at each of 3840×1620, 2080×1460, 1440×900, 768×900 and 360×900. [labels-final.json](labels-final.json) retains every per-study result. This covers 17,375 rendered frame observations.

Both final content receipts pass: [factual](critics/factual-final.json) and [reading](critics/reading-final.json). FC-01 and RC-01 are resolved. [The final supplemental manifest](reading-final/manifest.json) binds four recaptured production images and their accessibility state. [content-identity.json](content-identity.json) binds the admitted reviewer/checked metadata transition; studies:check reports 80 records and zero problems. The final Tools run passes 101 files / 867 cases, including the added selected-run bookmark regression. The fixture, component-order, event-hygiene and translation checks also pass.

The streamed preflight completes lint, test and build for all twenty projects. It exposed two import-order errors in the wall model and spec; the formatter changes only the order of named imports. [The identity proof](import-order-identity.json) preserves the critic-inspected hashes and verifies identical module/binding sets and identical text outside imports. No physics, example, claim or assertion changed.

The full functional browser suite passes 159 cases, including twelve new all-frame glyph regressions and the original study, accessibility and scene journeys. Its invocation uses the installed Nx entry point with streamed output and the same project target as `npx nx e2e dotln-e2e`. Adjacent item 0003 now has its three required passing checks.

The format check then named only the wall record’s reviewer array after its checked-state transition. Prettier wraps that array; [the formatting identity](checked-format-identity.json) verifies identical parsed JSON and binds the before/after hashes.

The final preflight format check passes. Tooling passes all 74 cases; check:bundle passes with 405,832 initial bytes, no lazy code in the initial closure and the Tools menu available. These checks precede the fresh implementation review ladder and its complete gates.

Round 1’s criteria and consistency reviewers find no issues. The design reviewer’s DI-01 shows that a later guide could paint through an earlier name because guides and text were interleaved. D034 separates the guide layer from the final text layer and extends the real-browser regressions to reject a guide after text. Physical geometry, placement coordinates, names and models are byte-unchanged; the all-frame clipping/overprint sweep still covers that geometry. The new layer-order check and complete gates validate the rendering change separately.

After DI-01, the complete functional browser suite again passes all 159 cases, including every new paint-order assertion. The design recheck holds with no new finding; the reviewed target bytes match round-2-candidate.json. Both main branches remain at the activation bases, so integration has nothing to take in. Format, sync and publication checks are current before the complete gates.

Both complete target runs pass: five commands in the plain selection and eight in review, including production build, functional browser tests and visual baselines, with no target-byte or HEAD mutation. [gates.json](gates.json) preserves their stdout-derived results; [canonical-target-gate.json](canonical-target-gate.json) confirms the current target row through the public gate-evidence function. The final [bundle receipt](bundle.json) reports 405,832 initial bytes and a 314,637-byte AI for Games chunk with forty records; the final bundle guard passes after the layer correction. The final handoff owns the criterion judgments and document-gate transition.
