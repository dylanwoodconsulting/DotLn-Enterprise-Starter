# WO-034 implementation evidence

2026-11-06. The executor reshaped the first movement batch, tightened study
translation coverage, repaired the shared drawing marks and trimmed the work
catalogs. The target baseline is `d7d842dc4fdbde03099695933a448d9632fa4335`, the
integrated target `main` at activation. [Decisions](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md) retain the
alternatives, measurements and reopening conditions. The work adds no route,
page, family or dependency and changes no movement simulation.

## Presentation shape and output contract

[The before audit](shape-audit-before.json) records the original 17 functions
with at least eight positional parameters, 38 functions of 70–80 counted lines,
and 94 numbered placeholders. [The candidate audit](shape-audit-after.json)
records zero first-batch presentation functions over four parameters and zero
numbered placeholders. All 1,251 first-batch model messages have nested keys.
[Static checks](static-checks.json) also confirm unchanged dependency keys, no
changed movement simulation and no model message beginning with a placeholder
in the EIP or RxJS catalogs.
The shared `number-format.ts` preserves each authored precision, near-zero
threshold, negative-zero treatment and compact-number option.

The retained [audit program](shape-audit.mjs) scans the broader study corpus to
show the boundary, then identifies the first batch explicitly. Its 23 remaining
first-batch functions of at least 70 counted lines are diagnostic observations,
not exceptions to the 80-line ceiling. The executor read each whole function:

| Function in `studies/` | Counted lines | Cohesion judgment |
| --- | ---: | --- |
| `movement/align.presentation.ts:294` · `lateBraking` | 79 | Builds the complete late-braking counterexample from the two described runs; its timeline and findings are one comparison. |
| `movement/making-the-creatures.presentation.ts:378` · `frameOf` | 78 | Projects one creature frame into its drawing, measures and explanation from a single frame description. |
| `movement/two-level-formation-steering.presentation.ts:104` · `escortWorkedLines` | 77 | Keeps the ordered anchor-to-local-to-world escort calculation readable as one worked sequence. |
| `movement/face.presentation.ts:444` · `present` | 76 | Composes the Face study from its run, selected frame, moments, inputs and one motor comparison. |
| `movement/formation-pattern-interface.presentation.ts:259` · `frameWorkedLines` | 76 | Explains one slot transformation in calculation order, from pattern coordinates through rotation to the assigned target. |
| `movement/priority-steering.presentation.ts:445` · `present` | 76 | Assembles one priority-study presentation; the selection and comparison remain visible at its composition point. |
| `movement/separation.presentation.ts:318` · `compareRuns` | 76 | Builds the with-separation versus zero-weight comparison, including aligned traces and the resulting clearance finding. |
| `movement/align.presentation.ts:188` · `frameOf` | 75 | Maps a single angular frame to the study drawing, measures and worked explanation. |
| `movement/face.presentation.ts:317` · `slowMotor` | 75 | Describes the slower-motor counterfactual and its measured angular lag together. |
| `movement/making-the-creatures.presentation.ts:301` · `describeFrame` | 75 | Derives the named creature-frame quantities once for all projections of that frame. |
| `movement/slot-assignment.presentation.ts:309` · `compareRuns` | 75 | Explains a single authored assignment comparison with its matching endpoints and cost findings. |
| `movement/wander.presentation.ts:403` · `present` | 75 | Composes the seeded Wander run with its drawing, moments, inputs and comparison without splitting that assembly into arbitrary fragments. |
| `movement/weighted-blending.presentation.ts:229` · `frameWorkedLines` | 75 | Keeps the weighted-force arithmetic and limiting step in the order a reader computes them. |
| `movement/group-movement.presentation.ts:200` · `workedLines` | 74 | Explains the leader, slot and member calculation for one group frame as a single sequence. |
| `movement/making-the-creatures.presentation.ts:87` · `worked` | 74 | Builds one creature frame's worked calculation from the named description, keeping the derived values beside the steps that use them. |
| `movement/pursue.presentation.ts:352` · `present` | 74 | Composes the pursuit run, selected frame, inputs, moments and target-motion comparison. |
| `movement/flocking.presentation.ts:101` · `workedLines` | 73 | Presents the separation, alignment, cohesion and combined-force calculation in one ordered worked example. |
| `movement/pursue.presentation.ts:132` · `frameOf` | 73 | Projects one pursuit frame into its target prediction, drawing, measures and narrative. |
| `movement/seek.presentation.ts:326` · `present` | 73 | Assembles the Seek study with its force-limited comparison at one composition point. |
| `movement/flocking.presentation.ts:387` · `describeFrame` | 71 | Computes a flock frame's named neighbour and force quantities for reuse by its render projections. |
| `movement/pursue.presentation.ts:221` · `comparison` | 70 | Presents the one same-target counterfactual, with aligned travel traces and the measured outcome. |
| `movement/two-level-formation-steering.presentation.ts:481` · `present` | 70 | Composes the escort presentation, including its input controls and local/world slot comparison. |
| `movement/velocity-matching.presentation.ts:137` · `frameOf` | 70 | Maps one velocity-matching frame to its drawing, measures and worked calculation. |

These judgments keep complete calculations and composition points together.
The independent design review additionally reads the whole change for coupling
and artificial splits. Numerical limits alone do not establish readable code.

## Every rendered movement frame

[The production comparison](dom-diff.json) covers all 40 movement studies,
including every frame in both the motion and timeline views: 6,950 rows at the
integrated base and 6,950 at the candidate. There are no missing or added rows
and zero differing text-node or accessibility-label sequences outside the wall
study. The 162 changed wall rows are steps 0–80 in each view; their exact text
differences are retained in the comparison. They are the admitted comparison,
moment, caption and limit changes. Both browser captures report no page errors.

[The crawl](crawl.mjs) opens all disclosures with stable element handles before
capturing. [D006](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d006) records the initial capture's deferred
content error and the real pipeline-label regression it exposed. That diagnostic
capture remains under `dom-first/`; it is not the passing comparison. The final
comparison uses fresh captures of both builds after those corrections.

The complete raw captures are retained as [base JSON](dom-before.json.gz) and
[candidate JSON](dom-after.json.gz), compressed losslessly. The
[archive manifest](capture-archive.json) records both expanded and stored
digests and sizes, including the historical captures. The
[archive program](archive-captures.mjs) verified exact byte equality after
decompression before removing each expanded duplicate. The five captures take
5,070,119 stored bytes instead of 311,932,139 expanded bytes. The
[comparison program](compare-dom.mjs) reads either form and passed again from
the archives; its source digests and byte counts identify the expanded JSON.

After round one's repairs, the candidate was rebuilt and recaptured. The
comparison still reports only the 162 admitted wall rows. The first review's
capture set remains in `review-round1/`; the base and three historical archives
are byte-identical to that set. The current candidate archive includes the
qualified default-example note.

[The transfer measurement](transfer.json) follows the same cold first-reading
journey after opening the shelf. The observed AI for Games reading assets total
185,788 gzip bytes at the base and 178,607 at the candidate, a decrease of 7,181
bytes. Each response's raw size, gzip size and digest are retained. These are
`gzipSync` measurements of observed assets, not a claim about server compression
or real-user loading time. The work remains the catalog loading unit.

## Translation guard and negative controls

The corpus guard brackets both ends of translated messages, rejects letters
outside those spans and rejects word-bearing parameters that did not pass
through the translator. Its narrow machine-value cases are specific marble
symbol fields, translated-separator lists of those symbols, and the declared
process-manager order id in its order field.

[The retained injection program](negative-controls.mjs) copies the candidate
into fresh scratch, runs the corpus assertion, then runs each of the two escape
forms from the prior verification independently. It restores the scratch
subject afterward; it never injects the target source. The
[results](negative-controls/results.json) and logs record:

| Copy | Exit | Observation |
| --- | ---: | --- |
| Candidate | 0 | The corpus assertion passes. |
| Appended literal | 1 | The same assertion rejects `UNTRANSLATED_SUFFIX` outside a translated label. |
| Literal parameter | 1 | The same assertion rejects `UNTRANSLATED_PARAMETER` in the worked seconds parameter. |

The command inside each copy is `node node_modules/vitest/vitest.mjs run
--config libs/features/tools/vite.config.mts src/lib/studies/study-models.spec.ts
-t 'routes visible narration'`. The result binds the injected source hash and
retains each log. Physical-position, force, angle, timing and raw stream-payload
assertions remain in the model specs.

The marble test helper names its translation and description expectations in
`MarbleExpectationOptions`. A wrapped translator still receives the default
payload-description check. An intentionally different description selects
`authored`, while raw scheduler values and rendered deliveries remain checked.
Two regressions prove those boundaries. [The independent code reviews](self-review.md)
and [D008](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d008) record the removal of the implicit
translator-identity switch.

The [resolved ESLint rule](checks/study-lint-rule.json), extracted from
`eslint --print-config` on `seek.presentation.ts`, is an error at 80 lines,
excluding blank lines and comments. The existing study glob therefore still
covers the reshaped modules.

## Shared drawing and wall study

The unchanged VER-001 [label-sweep program](../WO-028/ver-001/label-sweep.mjs)
ran against the current production build with all five default sizes. Its
[complete results](label-sweep.json) contain 200 study/viewport rows, covering
all 40 movement studies and 17,375 frames. Every measured frame has zero
horizontal clipping and zero overlapping label glyph boxes:

| Viewport | First-batch frames | Second-batch frames | Clipped frames | Overprinted frames |
| --- | ---: | ---: | ---: | ---: |
| 360×900 | 2,485 | 990 | 0 | 0 |
| 768×900 | 2,485 | 990 | 0 | 0 |
| 1440×900 | 2,485 | 990 | 0 | 0 |
| 2080×1460 | 2,485 | 990 | 0 | 0 |
| 3840×1620 | 2,485 | 990 | 0 | 0 |

The executed command was `node scripts/harness.mjs bounded --timeout-seconds
1800 -- node docs/evidence/WO-028/ver-001/label-sweep.mjs
../DotLn-Angular-wo034
docs/evidence/WO-034/label-sweep.json`; it exited 0. This measures clipping
at the SVG's horizontal edges and pairwise label overlap; it does not claim
an exhaustive visual judgment of every pixel.

[The three glyph regressions](glyph-regressions-5/results.json) run the same
candidate tests against the retained base production build and the candidate.
All three fail on the base and pass on the candidate: a displaced label's guide
stops at its near edge; an unreadably short vector is absent; and a wide drawing
uses its actual font size when reserving room for a label. The fifth run repeats
the final lint- and type-compatible tests after the review repairs. Earlier experiment directories retain
test-selection, floating-point-tolerance and syntax refinements, not the final
verdict.

[The wall review](review.md) disposes both independent critics' findings. The
record remains `checked`. Criterion 6's admitted fallback is used: the default
ray hits at frames 5 and 6, misses again at frame 7, and makes a brief clearance
correction while Seek supplies most turning. A same-setup one-unit ray provides
the counterfactual. The captions do not claim sustained wall following.

The [executor walkthrough](walkthrough.md) records the current production build
at 2080×1460 and 3840×1620. It steps through the hit, miss, closest-clearance and
end frames, then checks ray lengths of 1, 0.5 and 10. Its twelve inspected PNGs
and the captured frame descriptions agree; neither browser context reports a
page error or a failed request.

## Catalogs and stream wording

[The catalog change inventory](catalog-changes.json) identifies every removed
fixture key and every changed message. AI for Games title rows decrease from
768 to 89, EIP from 288 to 66, and RxJS from 742 to 89. These are the title ids
read by records and nearby links. `wander.record.parameters.drawPairs` is gone.
The twelve EIP test-only messages live beside their five consuming specs, with
fixture translators passed through the existing marble-test path.

The historical order estimate was 48 parameterized messages across 15 stream
studies. Reading the current strings found 29 whose sentence or label actually
started with a placeholder, including sentence starts inside longer notes.
Already word-led strings retain their wording. The complete before/after list
is below; the parameters, stream mechanisms and payloads are unchanged:

| Message | Before | After |
| --- | --- | --- |
| `studyEip.command-message.model.example.steps.6.states.store` | {{results}} result for 7 | For 7: {{results}} result |
| `studyEip.command-message.model.example.steps.7.states.store` | {{results}} results for 7 | For 7: {{results}} results |
| `studyEip.command-message.model.example.moments.4.label` | {{results}} results | Results: {{results}} |
| `studyEip.content-based-router.model.flow.states.0.verifier` | {{remaining}} findings to file | To file: {{remaining}} findings |
| `studyEip.content-based-router.model.flow.states.1.verifier` | {{remaining}} to file | To file: {{remaining}} |
| `studyEip.content-based-router.model.flow.states.3.verifier` | {{remaining}} to file | To file: {{remaining}} |
| `studyEip.content-based-router.model.flow.states.5.verifier` | {{remaining}} to file | To file: {{remaining}} |
| `studyEip.content-based-router.model.flow.states.7.verifier` | {{remaining}} to file | To file: {{remaining}} |
| `studyEip.control-bus.model.example.steps.0.states.queue` | {{count}} record | Records: {{count}} |
| `studyEip.control-bus.model.example.steps.2.states.queue` | {{count}} record | Records: {{count}} |
| `studyEip.control-bus.model.example.steps.9.states.queue` | {{count}} records | Records: {{count}} |
| `studyEip.correlation-identifier.model.flow.states.0.kernel` | {{pending}} to send | To send: {{pending}} |
| `studyEip.correlation-identifier.model.flow.states.1.kernel` | {{pending}} to send | To send: {{pending}} |
| `studyEip.correlation-identifier.model.flow.states.2.kernel` | {{pending}} to send | To send: {{pending}} |
| `studyEip.event-message.model.sweepState` | {{time}}: {{status}}, {{age}} min old | At {{time}}: {{status}}, {{age}} min old |
| `studyEip.message-expiration.model.example.moments.1.label` | {{waiting}} waiting | Waiting: {{waiting}} |
| `studyEip.message-expiration.model.flow.states.0.operator` | {{requests}} requests to send | To send: {{requests}} requests |
| `studyEip.message-store.model.example.steps.0.states.log` | {{count}} entry | Entries: {{count}} |
| `studyEip.message-store.model.example.steps.1.states.log` | {{count}} entries | Entries: {{count}} |
| `studyEip.message-translator.model.example.notes.0` | Nothing has moved yet. {{inputCount}} rows wait in the legacy chunk: t, n and c. | Nothing has moved yet. The legacy chunk holds {{inputCount}} rows: t, n and c. |
| `studyEip.recipient-list.model.example.notes.8` | The Recipient list sends a copy of close 2 to each of A, B and C and entry r to the Close record, and the closes end. {{closes}} closes made {{copies}} copies, and v0.96.0 is C's first release. | The Recipient list sends a copy of close 2 to each of A, B and C and entry r to the Close record, and the closes end. The {{closes}} closes made {{copies}} copies, and v0.96.0 is C's first release. |
| `studyEip.recipient-list.model.flow.states.3.record` | {{entries}} entry | Entries: {{entries}} |
| `studyEip.recipient-list.model.flow.states.5.record` | {{entries}} entries | Entries: {{entries}} |
| `studyEip.recipient-list.model.flow.states.8.record` | {{entries}} entries | Entries: {{entries}} |
| `studyEip.resequencer.model.example.moments.2.label` | {{held}} held | Held: {{held}} |
| `studyRxjs.combine-latest.model.budget` | {{budget}}% left | Left: {{budget}}% |
| `studyRxjs.combine-latest.model.row` | {{state}}, {{budget}}% left | State: {{state}}, {{budget}}% left |
| `studyRxjs.concat-map.model.example.notes.5` | owl arrives and queues behind dog. {{waiting}} photos now wait, in the order they were added. | owl arrives and queues behind dog. There are now {{waiting}} photos waiting, in the order they were added. |
| `studyRxjs.repeat.model.example.notes.8` | The second run completes. {{completed}} runs are finished, so repeat waits once more. | The second run completes. Repeat has finished {{completed}} runs, so it waits once more. |

## Workspace tools read under the same standards

| Source | Verdict | Reason |
| --- | --- | --- |
| `tools/board-count.mjs` | Reshaped documentation only | Its scan and masking functions already have focused responsibilities and at most four parameters. JSDoc now describes the comment forms, input paths and returned counts; execution is unchanged. |
| `tools/scripts/check-script-reference.mjs` | Reshaped documentation only | Collection and coverage checks already form small named operations. JSDoc makes the workspace root, returned reference set and throwing coverage check explicit. |
| `tools/pr-title.mjs` | Reshaped documentation only | The pure title transform and command entry remain separate. JSDoc states the input, transformed title and command arguments; no title rule changes. |

`node --test tools/` passed all 92 tests in
[the tooling run](checks/tooling-first.json). The diff against the integrated
base for `tools/board-count.test.mjs`, `tools/check-script-reference.test.mjs`
and `tools/pr-title.test.mjs` is empty. Those existing suites remain the oracle.

## Preflight checks

Captured logs and Playwright report locations use portable path placeholders;
console logs also normalize line endings and trailing whitespace.
[The normalization record](path-normalization.json) binds their raw and
published bytes; unmodified originals remain in session scratch. Only displayed
locations and console whitespace change; test results, measurements, production
captures and screenshots are unchanged. [D009](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d009) records the document
gate failure that found these paths and the passing focused repair check;
[D010](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d010) records the completion check's whitespace repair.

The [workspace preflight](checks/preflight-final.json) ran
`npx nx run-many -t lint test --output-style=static` successfully across all 20
projects. It includes 974 Tools tests, the workspace's 92 tooling tests,
`i18n:check` with no missing keys, and `studies:check` over 80 records with no
problems. Its [complete log](checks/preflight-final.log) retains the nested
commands and their results. The three warnings introduced in the new browser
regressions were removed without changing their assertions; unchanged catalog
browser tests retain their existing fixed-wait warnings.

The final [browser-test lint](checks/e2e-lint-final.json) reports no errors or
new warnings. The [browser-test type check](checks/e2e-types-fixed.json) also
passes. Its first run caught `toSorted` in the new regression under the existing
older library target; the test now copies and sorts the array without changing
compiler settings or the checked behavior.

The [format preflight](checks/preflight-format-final.json) passed. The
[Tools spec type check](checks/review-fixes-types.json) also passed after the
review repairs, including the new marble-helper regressions.
The [production bundle preflight](checks/preflight-bundle-final.json) rebuilt the
candidate after the review fixes. It reports
406,485 initial bytes, no lazy study code in the initial bundle, and the menu
available with Tools. The first reading's separate transfer measurement appears
with the production-crawl comparison, because that journey includes assets
loaded after the shelf.

The [completed gate record](checks/completed-gates.json) records passing plain
and review target gates: all five plain commands and all eight review commands,
including the full browser and visual suites. No command changed tracked target
bytes or HEAD. The document preflight passed all 14 checks before those gates.
[The handoff](handoff.md) judges every criterion and distinguishes the completed
executor work from the verifier's independent reading.

## Evidence ownership

The review subject includes the target's complete change against
`d7d842dc4fdbde03099695933a448d9632fa4335` and the launchpad's write-backs:
this evidence directory, `docs/repositories/dotln-angular.md`,
`docs/workstreams/WS-001-dotln-angular.md`, the generated decisions and order
indexes, and `docs/final-reviews/WO-034/RELEASE-NOTES.md`. The target's two
product documents are `docs/ai-reference/catalog-rules.md` and
`docs/dev-reference/architecture/catalog.md`. No dependency or version file
changed. The consistency review traces those sources and their consumers;
the target and document gates run only after the independent review ladder.

The executor's model and effort are `gpt-6-astra` / `max`, with Codex CLI
`0.167.0` from session readback. The [worker plan](fan-out.md) distinguishes the
content critics from the later code-review ladder and discloses unknown worker
counters. The implementation handoff names the final gate rows, exact
criterion judgments and current attestation. The verifier's random code
reading and final-review publication remain their separately dispatched work.
