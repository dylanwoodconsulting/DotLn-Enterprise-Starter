# WO-020 authoring fan-out

Every worker of this phase runs on Codex at the operator's direction (D003): `gpt-6.1-sol` at effort
`max`, launched from the Claude Code root as one `codex exec` per worker, in a private Codex home
holding only a link to the operator's credentials, with the user's configuration ignored, no MCP,
no memories, an empty shell environment and a read-confined filesystem. A rewrite resumes the same
thread. Each author works in its own copy of the target with no Git metadata, and the executor
copies its files across, so the executor stays the only writer of both worktrees. Effective effort
is not independently observed; the selection is what was launched. Absolute locations go in session
messages and are not filed here.

The stop figure was 117,733,609 tokens (D004): the fan-out was to stop with a recorded decision when
the workers' totals summed with the session's own passed it. The operator lifted it for this order
(D012), so it no longer applies.

## The plan under the cap

Ten authors, one factual critic and one reading critic, then the three independent reviewers:
fifteen workers against `subagentCap` 20, none spawning a descendant. Arrive's record is the
migrated worked example, so the ten authors hold the nineteen other concepts, nine with two and one
with the steering pipeline alone. Arrive still goes through both critics (D005).

| Label     | Concepts                                                                                            |
| --------- | --------------------------------------------------------------------------------------------------- |
| author-01 | `aifg-a:110` Seek, `aifg-a:120` Pursue                                                              |
| author-02 | `aifg-a:116` Align, `aifg-a:123` Face                                                               |
| author-03 | `aifg-a:118` Velocity matching, `aifg-a:125` Wander                                                 |
| author-04 | `aifg-a:131` Separation, `aifg-a:144` Weighted blending                                             |
| author-05 | `aifg-a:145` Flocking, `aifg-b:373` Making the creatures                                            |
| author-06 | `aifg-a:149` Priority steering, `aifg-a:151` Equilibrium fallback                                   |
| author-07 | `aifg-a:153` Steering pipeline                                                                      |
| author-08 | `aifg-a:174` Fixed formations, `aifg-a:175` Scalable formations                                     |
| author-09 | `aifg-a:177` Two-level formation steering, `aifg-a:181` Formation pattern interface                 |
| author-10 | `aifg-a:186` Slot assignment, `aifg-b:354` Group movement                                           |

## The authors' brief

Each author received this text, its assignment and its rows.

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
  assignment, authored.on is 2026-10-31, authored.reviewedBy is [], authored.state is "draft".
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
  2026-10-31. supports states the specific claim the source backs. A source you could not open is
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

CHECK BEFORE YOU FINISH
- cd libs/features/tools && npx vitest run src/lib/studies/movement/<slug>.model.spec.ts
- node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/aifg/<slug>.json
  (from the root; the only problem it may report is that the record is a draft)
- npx prettier --write on your files

FINISH with one JSON object as your last message, and nothing after it:
{ "label": "...", "statement": "<one line>", "studies": [{ "slug": "...", "steps": "engine | local |
mixed, and why", "familyGaps": "<anything the drawing families could not show, or none>",
"opened": [{ "url": "...", "how": "web | curl", "saw": "<a few words>" }] }] }
```

## The factual critic's brief

```text
You are the factual critic of a batch of twenty concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the books its owner reads. A fabricated or unsupported reference is the one defect this program cannot accept.

Your working directory is a private read-only copy of the repository. Do not try to change it. You cannot spawn agents.

The twenty records are libs/shared/catalog/src/studies/aifg/*.json. brief/rows.json holds each concept's catalog row: its definition, relations and verification note. brief/concept-study.md is the product direction. The models are libs/features/tools/src/lib/studies/movement/*.model.ts and the engine they call is libs/shared/scene-engine/src/lib/.

For every record:
1. Open every URL in references and implementations yourself, with your web tool or curl. Note the HTTP status, or what the page showed. Do not take an author's word that it opened. A raw GitHub URL or a pinned commit URL should show the file it claims to.
2. Read enough of each source to judge whether it supports the claim it is cited for: the reference's supports text, and an implementation's relevance and explanation. A real page that does not say what it is cited for is a finding.
3. Check that no prose contradicts the catalog row's definition. An example may be narrower than the definition; a statement that conflicts with it is a finding.
4. Check that claims about what the engine or the scene does match the code in libs/shared/scene-engine and docs/dev-reference/architecture/scene.md.
5. Check that the study quotes no passage of a work in copyright, and that the DOI reference claims only that the book covers this topic at that place.

Report a finding only for something concrete. Do not comment on style, structure or depth: another critic reads for those.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>",
  "urls": [{ "url": "...", "status": "<HTTP status, or what happened>", "how": "web | curl", "supportsClaim": true | false }],
  "findings": [{ "slug": "...", "field": "<which part of the record>", "kind": "unreachable | unsupported | contradiction | engine-claim | quotation | other", "finding": "<what is wrong>", "evidence": "<what you saw, with the URL or file and line>", "fix": "<the smallest correction>" }] }
A study with no findings has no entry. Every URL in every record appears once in urls.
```

## The reading critic's brief

```text
You are the reading critic of a batch of twenty concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the books its owner reads. You read each study as its owner would: a senior Angular engineer with years of functional and reactive work, new to game AI, reading to learn what the movement idea does and when it fails, and to decide which concept to deepen or play with next.

Your working directory is a private read-only copy of the repository. Do not try to change it. You cannot spawn agents.

For each study, review/<slug>.png is the concept's reading as it renders, with every section of the study open, at the moment the drawing opens on. The record is libs/shared/catalog/src/studies/aifg/<slug>.json, and its model is libs/features/tools/src/lib/studies/movement/<slug>.model.ts: the drawing's frames, moments, captions and worked steps. brief/rows.json holds each row's definition, which the page shows directly above the study. brief/concept-study.md is the product direction. arrive.json is the worked example of the form, but a study should take the form its idea needs.

Look at the image: use your image tool if you have one. If you cannot view images, say so in your statement and read the record and model instead.

Judge each study on these questions only:
1. Do the representations explain the same example? Can a reader point at something in the drawing, find it in the pseudocode, and see what changes when an input changes? Name any place where the example changes, or a representation explains something else.
2. Is any section filler: a limit that is not a real failure, a nearby concept with no reason to go there, an implementation that adds nothing, a repeat of the definition above the study, a sentence that says nothing?
3. Does a reader learn what the idea does and when it fails? Name the study that leaves this unclear.
4. Is any prose hard to follow for this reader: jargon left unexplained, a text equivalent or caption too long to read beside a drawing, coordinates where a plain sentence would serve?
5. Can the drawing itself be read: are its marks distinguishable, is anything off the bounds, does the legend say what each mark is?

Do not check whether references are real or support their claims: another critic does.

Report a finding only for something concrete, with the smallest fix. A study that reads well gets no finding, and say which three studies read best.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>", "best": ["<slug>", "<slug>", "<slug>"],
  "findings": [{ "slug": "...", "where": "<which part>", "kind": "same-example | filler | unclear-idea | hard-prose | drawing", "finding": "<what fails the reader>", "fix": "<the smallest change>" }] }
```

## The three reviewers

The reviewers run after the fan-out, each on Codex in its own disposable copy with the same common brief and one of three non-overlapping charges: the criteria adversary, the design improver and the consistency reviewer. Each was resumed on the same thread after every set of fixes. [The self-review](self-review.md) records their reports.

| Label | Runs | Minutes | Tokens | Statement |
| --- | --- | ---: | ---: | --- |
| reviewer-criteria | 4 | 19 | 10,403,797 | Reproduced three runtime defects and three validation gaps, then one more; every fix held on the last pass with no findings. |
| reviewer-design | 4 | 16 | 10,176,875 | Found seven design issues and one test-scope risk; six fixes confirmed, one deferred by decision, and no findings on the last pass. |
| reviewer-consistency | 4 | 12 | 10,423,683 | Found two evidence write-backs, one test-scope risk and one parser gap; all resolved, with no findings on the last pass. |

Reviewers' total: 31,004,355 tokens. With the twelve workers below that is fifteen workers against `subagentCap` 20, none spawning a descendant, so the explicit count stands at 15 of 20.

## The workers

Each worker's token total is its thread's last reading, because a resumed thread reports its cumulative usage (D003). Runs counts the first run and each resume.

| Label | Runs | Minutes | Tokens | Statement |
| --- | --- | ---: | ---: | --- |
| author-01 | 2 | 32 | 5,071,826 | Revised both studies with live inputs, concise notes, separated labels and two-decimal displays; all 23 tests pass, focused types and lint pass, and catalog checks report only draft status. |
| author-02 | 2 | 32 | 6,461,160 | Updated only the six deliverables; 28 tests, focused strict typechecking and formatting pass; catalog checks report only draft status. |
| author-03 | 3 | 32 | 6,788,437 | Both rewrites complete: 23 tests, strict typechecking and formatting pass; catalog checks report only the required draft status. |
| author-04 | 3 | 36 | 8,276,280 | Both drafts rewritten; all 27 tests and focused type checks pass; catalog checks report only draft status. |
| author-05 | 3 | 39 | 10,554,652 | Revised all six deliverables with live inputs, dynamic notes, labelled force rows and relational descriptions; 24 study tests, 3 shared tests, scoped strict typing and formatting pass; catalog checks report drafts only. |
| author-06 | 3 | 35 | 8,229,829 | Both studies rewritten; 18 model tests, 3 registry tests and strict TypeScript checks pass. Prettier completed; catalog checks report only draft status. |
| author-07 | 3 | 30 | 6,902,906 | Rewritten; 14 study tests and 3 shared model tests pass; TypeScript passes; catalog validation reports only draft status. |
| author-08 | 2 | 30 | 6,383,680 | Updated only my six deliverables; 21 tests and focused strict typing pass, with only expected draft notices from catalog checks. |
| author-09 | 2 | 44 | 7,515,063 | Both rewrites complete; 20 study tests and 3 shared model tests pass, with only required draft notices from catalog checks. |
| author-10 | 3 | 26 | 7,085,385 | Both studies now have live inputs, brief frame notes, labels and relational number disclosures; all 22 tests, typing, lint and formatting pass; catalog findings are draft-only. |
| factual-critic | 2 | 13 | 12,008,267 | Opened every cited URL in both passes and raised two findings, both in the Arrive model. |
| reading-critic | 2 | 31 | 9,070,429 | Read all twenty as the operator would; 23 findings, then 5 on recheck, its earlier findings gone. |

Workers' total: 94,347,914 tokens across 12 workers.

| Measure | Tokens |
| --- | ---: |
| The twelve workers | 94,347,914 |
| The three reviewers | 31,004,355 |
| The session's own, read at 2026-10-31T23:19:05Z (`claude-transcript-message-usage`, scope dispatch) | 144,354,371 |
| Their sum | 269,706,640 |
| WO-014's recorded order total, the original stop figure (D004) | 117,733,609 |

The sum passed WO-014's figure after the operator lifted that stop for this order, so no decision stopped the fan-out; D012 records the lift. The session's figure is mostly cached re-reads, and [the handoff](handoff.md) gives its last reading.

Every run exited 0 and left the operator's Codex configuration unchanged (the launcher compares its digest around each run). Effective effort has no independent readback; `gpt-6.1-sol` at `max` is what was launched.

One statement per study records whether the engine or a study-local step runs, and why:

| Study | Steps |
| --- | --- |
| align | local, because the engine has no angular controller; drawing vectors use engine sine and cosine. |
| equilibrium-fallback | mixed, engine seek, blend, wander and firstActive with fixed heading and angle, plus local fixed-step integration. |
| face | local, because the engine has no Face behaviour; bearing calculation delegates to the shared local Align controller. |
| fixed-formations | mixed: engine patternSlots, advanceFormation and slotPosition; local turn schedule and sampled speed check. |
| flocking | mixed: engine separate, arrive, matchVelocity and blend; local perception, crossing policy and fixed-step integration. |
| formation-pattern-interface | mixed: engine geometry, assignment, slot transforms and arrival; local capacity and drift adapter, roster changes, scripted heading and integration. |
| group-movement | mixed: engine patternSlots, slotPosition, arrive and advanceFormation; local fixed-step integration and arrival diagnostics. |
| making-the-creatures | mixed: engine separate, arrive, matchVelocity, wander, flee and blend; local species profiles, perception, deterministic wander input, player path and integration. |
| priority-steering | mixed, engine separate, matchVelocity, blend, arrive and firstActive with local fixed-step integration. |
| pursue | mixed, local capped prediction because the engine has no pursuit function, followed by engine seek and vector updates |
| scalable-formations | mixed: engine patternSlots generates geometry; local membership schedule and footprint clearance calculation. |
| seek | mixed, engine seek and vector operations; a local open-plane update is needed because no standalone integrator is exported |
| separation | mixed: engine separate supplies both falloffs; local fixed steps update velocity and position. |
| slot-assignment | mixed: engine assignSlots ranks and reserves; local code reveals decisions and exhaustively audits total cost. |
| steering-pipeline | mixed: local targeter, decomposer and constraint loop; engine Arrive actuation and velocity-matching fallback. |
| two-level-formation-steering | mixed: engine slot generation, assignment, arrival and anchor advancement; local integration supplies the study’s fixed timestep. |
| velocity-matching | mixed: engine matchVelocity computes acceleration; local fixed updates advance Mira and the cart. |
| wander | mixed: engine wander computes acceleration; a local tape supplies angle changes and fixed updates advance motion, using engine sine and cosine. |
| weighted-blending | mixed: engine seek, separate and blend calculate acceleration; local fixed steps apply it. |
| arrive | Local: the base's fixed-step arithmetic, kept because criterion 3 pins its numbers and the engine's arrive fades its speed instead of snapping at a tolerance (D010). |
