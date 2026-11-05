# WO-028 fan-out

Authoring date: 2026-11-04. Baseline: `55b59c9133056c1d6471274a9676a7d5649196ac`.

Ten authors with two rows each, one factual critic, one reading critic, then three independent reviewers: 15 planned uses of cap 20; five reserved for rechecks. No descendants. Every worker uses native Codex spawn_agent, fork_turns none, gpt-6.1-sol, max. Authors write only private non-Git copies; the parent integrates. Critics and reviewers do not change the worktrees or start gates.

Token stop: 117,733,609 (profile fallback when WO-014 total is unavailable). Parent cached input and other tokens are separate; latest cumulative worker counts are counted once, never added again after a continuation. Unavailable/overlapping counters remain unknown; no monetary claim. Read usage before each use and stop launches on an observed subtotal above the stop. No publication in this executor phase.

## Assignments

- author-01: `aifg-a:105` steering-behaviors, `aifg-a:94` steering-output
- author-02: `aifg-a:111` flee, `aifg-a:108` variable-matching
- author-03: `aifg-a:134` collision-avoidance, `aifg-a:137` obstacle-and-wall-avoidance
- author-04: `aifg-a:139` corner-trap, `aifg-a:143` blending-versus-arbitration
- author-05: `aifg-a:162` projectile-trajectory, `aifg-a:163` the-firing-solution
- author-06: `aifg-a:166` iterative-targeting, `aifg-a:169` jump-points
- author-07: `aifg-a:192` motor-control, `aifg-a:157` actuator
- author-08: `aifg-a:196` movement-in-the-third-dimension, `aifg-a:90` two-and-a-half-dimensions
- author-09: `aifg-a:101` kinematic-arrive, `aifg-a:102` satisfaction-radius
- author-10: `aifg-a:103` kinematic-wander, `aifg-a:173` coordinated-movement

## Author brief

```text
You are writing concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the books
its owner reads. A concept study explains one catalog concept from several sides, all on one
example, for a senior Angular engineer who is new to game AI and reads to understand what the idea
does and when it fails.

Your working directory is your own private copy of the repository. It has no Git metadata. Write
what you need here; the executor takes only the deliverables below and owns the real repository.
You cannot spawn agents. Your assignment and catalog rows are in brief/.

READ FIRST
- brief/assignment.md, brief/rows.json (your rows: definitions, relations, hooks, verification
  notes), brief/chapter-index.json (every Chapter 3 concept by id and title, for nearby concepts)
- brief/concept-study.md: the product direction for a study
- libs/shared/models/src/lib/concept-study.ts and
  libs/shared/catalog/src/schema/concept-study-v0.schema.json: the record you write
- libs/shared/catalog/src/studies/aifg/arrive.json and
  libs/features/tools/src/lib/studies/movement/arrive.model.ts with its spec: the worked example of
  the form. Match its depth, not its outline: each study takes the form its idea needs.
- libs/features/tools/src/lib/studies/study-model.ts: what a model returns
- libs/features/tools/src/lib/composites/study-visuals/motion/motion-drawing.ts and
  timeline/timeline-drawing.ts: exactly what the two drawing families draw
- docs/dev-reference/architecture/scene.md and libs/shared/scene-engine/src/lib/: the engine

DELIVERABLES, for each concept and its slug
- libs/shared/catalog/src/studies/aifg/<slug>.json, in draft: authored.by is the name in your
  assignment, authored.on is 2026-11-04, authored.reviewedBy is [], authored.state is "draft".
- libs/features/tools/src/lib/studies/movement/<slug>.model.ts, exporting
  `export const model = (parameters: StudyParameters): StudyModel => ...`
- libs/features/tools/src/lib/studies/movement/<slug>.model.spec.ts beside it

THE RULES
- Own words. Write every prose field yourself from the row's definition and public sources. Quote no
  passage of any work in copyright, and copy no definition: the row's definition is shown right
  above the study, so the study adds to it instead of repeating it.
- One example. Choose one concrete, named example, and make every part of the study explain it: the
  drawing, the chart, the pseudocode, the worked numbers and the failure case. A reader should be
  able to point at the drawing, find the step in the pseudocode and see what changes when an input
  changes. All the numbers come from example.parameters, and the prose never hard-codes a value the
  model computes: use {name} placeholders.
- Nothing fabricated. Open every reference and implementation with your web tool or curl before
  citing it, and cite it only for what you saw there. accessed is the date you opened it,
  2026-11-04. supports states the specific claim the source backs. A source you could not open is
  not cited. Prefer stable URLs: an author's or publisher's page, a project's documentation, a
  public repository file pinned to a tag or commit. Cite the book once by its DOI,
  https://doi.org/10.1201/9781351053303, with a title naming the chapter and section your row comes
  from, and let supports say only that the book covers this topic at that place; you have not read
  its text, so claim nothing about what it says.
- Implementations. List real public projects that implement the idea, each introduced on its own
  terms: relevance says what the project is and why it matters here, and explanation says how it
  does this and what it adds, from code you read. Do not force a comparison to this page's example.
  An empty list is honest; a filler entry is not.
- A representation the idea does not need stays absent. pseudocode.rxjs is null unless streams
  clarify the idea. An RxJS reading is illustrative unless you also supply a tested module.
- The record's shape is closed. Add no field. mechanism.steps and the blocks of pseudocode.ordinary
  separated by a blank line must match one to one, because the page shows each step beside its own
  lines. Step text may use {name} placeholders.
- visual is { family: "motion", model: "<repository path of your model>", textEquivalent }. The text
  equivalent says in a sentence what the drawing shows at the selected moment, with {name}
  placeholders every frame's values must supply. A reader who cannot see the drawing loses nothing.
- pseudocode.executable is { kind: "typescript", module: "<repository path of your model>" } when
  your model runs the mechanism, which it should.
- limits are real failure cases in plain prose. nearby ids must exist in the catalog: take them from
  your row's relations and brief/chapter-index.json, and say in why when a reader would reach for
  that concept instead.

THE MODEL
- A pure function of the record's parameters: no randomness, clock or global state, the same input
  giving the same frames. Use fixed steps, the same arithmetic the prose explains.
- Where the behaviour exists in @dotln-angular/scene-engine (seek, arrive, flee, separate,
  matchVelocity, wander, blend, firstActive, patternSlots, advanceFormation, assignSlots), call the
  engine's function for that step, so the study explains what actually runs. Use a study-local step
  only where the engine has none, and say so in your statement. The engine's sine and cosine are
  deterministic; use them for anything a spec pins by value. Do not change the engine.
- The drawing is the study's own: one or a few bodies, at most about seven, never the twenty-unit
  scene. Keep a run to at most about 240 frames.
- Return motion with bounds wide enough for every position, timeline (a chart of what changes over
  time, or null if nothing does), initialStep (the most telling moment), three to five named
  moments, legend, caption and, where they help, a frame note, a worked step showing the arithmetic
  of that moment, and a comparison: a second run with one input changed that makes a failure
  visible.
- The spec checks numbers a reader can verify by hand, and asserts each behavioural claim the prose
  makes, including the failure case. Its parameters equal the record's.

HOUSE STYLE
TypeScript strict, no any, no lint or type suppressions, #private over private, readonly by default,
imports grouped Angular and third party, then @dotln-angular, then relative, furthest first.
Comments say what the code does or why, in words a reader who has not seen this brief understands.
Prose is plain, specific and in British spelling, as the catalog is, with no filler.

CHECKS AND OWNERSHIP
Do not run gates, install dependencies or tests; the executor runs your specs after integration. Do not edit either real worktree. Do not spawn/re-task any worker. No Git repository in your copy. Only author the assigned JSON records and model/spec pairs, with helper types only if required in a sibling uniquely named file. Do not edit chunk/registry/summary/shared types/engine. Open every cited URL. You may use curl and web. Write brief/result.json with per-study slug, engine/local/mixed steps explanation, executable-null rationale if applicable, opened URLs and observed statuses/claims, any limitations. Report available token counters with their scope/cutoff; unavailable remains unknown.
Only these seven may use executable:null if illustrative: Steering behaviors, Motor control, Movement in the third dimension, Actuator, Coordinated movement, Two-and-a-half dimensions, Steering output. All other assigned concepts must execute their mechanism. No substitution. Use the exact assigned slug. Nearby links for Collision avoidance must include Separation, Obstacle and wall avoidance, Flee; Obstacle and wall avoidance must include Corner trap; Projectile trajectory must include The firing solution. Collision avoidance text equivalent names time to closest approach in each frame. Ray drawings use links. No family changes. Keep model declarations simple enough to read; one concrete example and genuine failure tests matter more than a generic framework.
```

## Accounting

Entry: zero workers; parent 35,510 total, cached input 28,800, other 6,710; codex-transcript-counter dispatch scope, cutoff 2026-11-04T18:26:38.298Z. Worker totals unknown until returned.

Before author-01: parent 898,048 total, cached input 818,048, other 80,000; cutoff 2026-11-04T18:28:31.687Z, dispatch scope. Manual uses 1/20. Worker counters pending. `meta --json` returned no WO-014 order row, so the profile fallback applies.

Before author-02: parent 1,113,825 total, cached input 1,032,448, other 81,377; cutoff 2026-11-04T18:28:40.472Z, dispatch scope. Manual uses 2/20; native worker counters unobserved by harness, pending receipts.

Before author-03: parent 1,331,884 total, cached input 1,249,024, other 82,860; cutoff 2026-11-04T18:28:49.531Z, dispatch scope. Manual uses 3/20; all three worker counters pending. No known subtotal exceeds the stop; total compliance is unproven while counters are missing.

## Current source boundaries

The authors read the engine API in the integrated target, not the proposed function names as proof of exports. The existing engine exports `avoid` for closest-approach avoidance and `flee` with a distance fade. `nextBinomial` is internal to the engine, not exported through its public API; a study needing seeded binomial draws must state the local step without importing a private library file. No engine API change is part of this batch.

The book DOI can return metadata through content negotiation while its publisher HTML returns 403. Authors record both observations; the DOI supports bibliographic identity and catalog location only, not a claim to have read chapter text. Critics verify these boundaries independently.

The operator approved budget and agent-cap increases as needed during execution (D004). At that admission no token or agent-use cap increase had been needed; subsequent admissions keep their observed counts and sources. D007 and the later explicit D013 separately govern the instance memory allowance.

Before author-04 (planned manual use 4/20): parent total 7927613, cached input 7744512, other 183101; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:38:57.867Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 7927613, no observed overrun; total compliance unproven.

Author-02 returned both triples; the parent copied only the assigned paths. Its cumulative counter is unavailable at its recorded 2026-11-04T18:37:47Z cutoff; no child tokens were added as zero. Public author receipts omit private-copy absolute paths; the original receipt stays in session scratch.

Before author-05 (planned manual use 5/20): parent total 8956507, cached input 8761216, other 195291; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:39:49.273Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 8956507, no observed overrun; total compliance unproven.

Author-01 returned both triples and an unavailable cumulative counter, author scope, cutoff 2026-11-04 18:38:07 UTC. The parent integrated assigned paths only. Author-04 and author-05 occupy the released slots; five native launches total, no re-tasks or descendants.

Before author-06 (planned manual use 6/20): parent total 10254976, cached input 10050944, other 204032; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:41:44.509Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 10254976, no observed overrun; total compliance unproven.

Before author-07 (planned manual use 7/20): parent total 15951492, cached input 15657856, other 293636; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:50:36.840Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 15951492, no observed overrun; total compliance unproven.

Before author-08 (planned manual use 8/20): parent total 18778583, cached input 18431232, other 347351; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:54:32.666Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 18778583, no observed overrun; total compliance unproven.

Before author-09 (planned manual use 9/20): parent total 19294772, cached input 18939008, other 355764; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T18:55:16.464Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 19294772, no observed overrun; total compliance unproven.

Before author-10 (planned manual use 10/20): parent total 23377153, cached input 22961024, other 416129; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:01:48.590Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 23377153, no observed overrun; total compliance unproven.

Executor readback corrections before critic dispatch: WO-028-D008 projects Corner trap geometry into a positive-y-up drawing and removes Collision avoidance’s redundant projected-pair label. The parent made these bounded edits and added the coordinate-orientation regression; the authors’ original receipts remain historical.

All ten authors returned and the parent integrated their sixty assigned files. All ten report unavailable cumulative token counters; no descendant or re-task is reported. Ten native uses are complete. WO-028-D010 adds a parent correction to Actuator’s drawing margins before both critics read the integrated candidate.

Before factual-critic (planned manual use 11/20): parent total 32022799, cached input 31425792, other 597007; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:17:41.559Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 32022799, no observed overrun; total compliance unproven.

Before reading-critic (planned manual use 12/20): parent total 32293411, cached input 31694976, other 598435; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:17:55.714Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 32293411, no observed overrun; total compliance unproven.

Before factual-critic-recheck (planned manual use 13/20): parent total 42581102, cached input 41757696, other 823406; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:35:30.645Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 42581102, no observed overrun; total compliance unproven.

Before reading-critic-recheck (planned manual use 14/20): parent total 42809935, cached input 41984512, other 825423; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:35:48.182Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 42809935, no observed overrun; total compliance unproven.

Before factual-label-recheck (planned manual use 15/20): parent total 45523913, cached input 44653312, other 870601; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:39:54.946Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 45523913, no observed overrun; total compliance unproven.

Before reading-label-recheck (planned manual use 16/20): parent total 46161475, cached input 45284480, other 876995; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T19:41:08.515Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 46161475, no observed overrun; total compliance unproven.

## Content-review completion

Ten authors returned sixty assigned files. The factual critic and reading critic each performed an initial review and two bounded rechecks, so the manual count before the independent review ladder is sixteen uses (twelve launches and four re-tasks), with no descendants. All six original reading findings and the later mobile beacon-label finding are resolved. Final reports retain their original candidate manifests and permit the checked/reviewer metadata transition; formatting changes only line wrapping. Both critics’ cumulative token counters remain unknown. Their latest receipts are linked from review.md and include available source/scope/cutoff. The next planned three fresh reviewers bring the count to nineteen of twenty; any needed rechecks beyond the remaining use will use the operator’s standing budget authorization with a recorded reason.

Before round-1-criteria (planned manual use 17/20): parent total 57067088, cached input 55993984, other 1073104; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T20:01:55.013Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 57067088, no observed overrun; total compliance unproven.

Before round-1-design (planned manual use 18/20): parent total 57067088, cached input 55993984, other 1073104; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T20:01:55.013Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 57067088, no observed overrun; total compliance unproven.

Before round-1-consistency (planned manual use 19/20): parent total 57067088, cached input 55993984, other 1073104; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T20:01:55.013Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 57067088, no observed overrun; total compliance unproven.

Before round-2-design-recheck (planned manual use 20/20): parent total 62310484, cached input 61177984, other 1132500; source codex-transcript-counter, scope dispatch, cutoff 2026-11-04T20:11:21.060Z. Native child tokens remain unknown unless their result receipt supplies them; no overlap is added. Known subtotal 62310484, no observed overrun; total compliance unproven.

Final executed allocation before gates: twenty uses, consisting of fifteen distinct launches (ten authors, two content critics, three implementation reviewers) and five re-tasks (four content-critic rechecks and one design recheck), with no descendants. This fits cap twenty; no agent-cap increase was needed. All latest cumulative child counters remain unknown.
