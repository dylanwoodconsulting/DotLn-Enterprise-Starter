# WO-022 authoring fan-out

Every worker of this phase is a Claude `dotln-worker` (claude-opus-5-5 at `xhigh`, the kit's pin),
launched through the host's Agent tool with no model override, because the operator's dispatch line
named no other worker. Each author works in its own copy of the target's tracked tree under the
session's scratch directory, without Git metadata, local settings or records, and with a
`node_modules` of links to the target's installed packages that keeps its own Vitest cache, so it
runs its specs, the type check, lint and the record check without touching either worktree; the
executor copies the deliverables across and stays the one writer of both. A rewrite continues the
same agent. Effective effort has no independent readback; the type's pin is what was launched.
Absolute locations stay in session messages.

## The plan under the cap

Ten authors with two patterns each, one factual critic and one reading critic: twelve Claude
workers against `subagentCap` 20, none spawning a descendant. The three independent reviewers that
follow run as Codex workers by the operator's direction (D007), outside the host's subagent count. The
order names no worked example for this batch, so the ten authors hold all twenty patterns; the flow
family's two fixtures, a three-stage flow written step by step and a flow over a marble example,
and the RxJS batch's switchMap study are the worked forms. Pairs keep together what the operator
reads together: Publish-Subscribe Channel with Competing Consumers, so one sender, one set of
messages and one set of receivers show the two delivery rules, and Request-Reply with Correlation
Identifier, whose link the operator follows.

| Label     | Patterns                                                  | Runs                       |
| --------- | --------------------------------------------------------- | -------------------------- |
| author-01 | `eip:110` Aggregator, `eip:120` Resequencer               | both required              |
| author-02 | `eip:65` Publish-Subscribe Channel, `eip:211` Competing Consumers | both required      |
| author-03 | `eip:87` Correlation Identifier, `eip:83` Request-Reply   | the author's judgment      |
| author-04 | `eip:99` Content-Based Router, `eip:105` Recipient List   | both required              |
| author-05 | `eip:91` Message Expiration, `eip:71` Guaranteed Delivery | required; judgment         |
| author-06 | `eip:184` Control Bus, `eip:192` Message Store            | neither runs               |
| author-07 | `eip:170` Transactional Client, `eip:131` Process Manager | does not run; judgment     |
| author-08 | `eip:60` Message Translator, `eip:146` Canonical Data Model | judgment; does not run   |
| author-09 | `eip:73` Channel Adapter, `eip:175` Message Dispatcher    | does not run; judgment     |
| author-10 | `eip:78` Command Message, `eip:80` Event Message          | the author's judgment      |

"Required" is the seven stream transformations criterion 3 names; "does not run" is the five
structures and protocols the Design names (Canonical Data Model, Control Bus, Message Store,
Transactional Client, Channel Adapter); the other eight are judged by their mechanism, with the
reason recorded.

The usage reading before the first worker: 20,885,889 tokens, source
`claude-transcript-message-usage`, scope dispatch, at 2026-11-01T15:01:17Z, with 0 of 20 observed
subagents and the dispatch at 0 h 24 min of its 8 h 0 min bound. The authors were launched at
15:02Z.

## The authors' brief

Each author received this text at `brief/brief.md`, its assignment at `brief/assignment.md` (its
two patterns, their slugs and files, whether each runs, and what the operator reads there), its rows
at `brief/rows.json`, the work's index at `brief/eip-index.json`, the product direction at
`brief/concept-study.md` and the public records below at `brief/platform.md`. Its launch text named
its working directory and repeated the write boundary.

```text
You are writing concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the works its
owner reads. This batch studies Enterprise Integration Patterns (Hohpe and Woolf, 2003): twenty
messaging patterns, each drawn as a flow that steps messages through endpoints and channels. A study
explains one catalog concept from several sides, all on one example, for a senior Angular engineer
with years of functional and reactive work who is new to integration patterns. They read to learn the
vocabulary of agents handing records to each other through channels, and where each pattern fails,
and to decide which pattern the app's machinery view or a toy should show next.

Your working directory is your own private copy of the repository. It has no Git metadata and the
real repository is elsewhere: write only inside this directory, change nothing outside it, spawn no
agents, and leave node_modules alone (its entries link to the installed packages). The executor takes
only the deliverables below and owns the real repository.

READ FIRST
- brief/assignment.md: your two concepts, their slugs, the files you deliver, whether each must run.
- brief/rows.json: your rows, with definition, place, related titles (with ids where resolved),
  hooks (where the operator's research saw this pattern in DotLn's machinery) and verification note.
- brief/eip-index.json: every row of the work by id and title; a nearby id you cite must be in it.
- brief/concept-study.md (the product direction), docs/ai-reference/catalog-rules.md (the rules a
  study meets; the study rules are the second half), docs/dev-reference/architecture/catalog.md
  §Studies, and docs/dev-reference/architecture/concept-mapping.md (how an analogy is stated).
- brief/platform.md: the public records of the platform and of this app that your examples may read.
- The record: libs/shared/models/src/lib/concept-study.ts and
  libs/shared/catalog/src/schema/concept-study-v0.schema.json.
- The flow family: libs/features/tools/src/lib/studies/study-model.ts (FlowNode, FlowLink,
  FlowFrame, FlowStudyModel), libs/features/tools/src/lib/studies/flow.ts (flowModel for a flow
  written step by step, flowFromMarbles for a flow over a marble example that runs), the two worked
  forms `flowStudyModel` and `marbleFlowStudyModel` in
  libs/features/tools/src/lib/composites/study-visuals/fixtures.ts, and
  libs/features/tools/src/lib/composites/study-visuals/flow/flow-drawing.ts: exactly what the
  drawing draws. It has two candidate layouts, a pipeline with a column per stage and swim lanes with
  a lane per node, and the owner will choose between them later, so write a flow that reads well in
  both: the layout is not yours to choose and the record names neither.
- For a study that runs: libs/features/tools/src/lib/studies/rxjs/marbles.ts (MarbleExample),
  marble-testing.ts (expectMarbleExample) and the worked example of an executable marble study,
  libs/shared/catalog/src/studies/rxjs/switch-map.json with
  libs/features/tools/src/lib/studies/rxjs/switch-map.ts and its spec. Match its depth and honesty,
  not its outline: each study takes the form its idea needs.

DELIVERABLES, for each concept and its slug
- libs/shared/catalog/src/studies/eip/<slug>.json, in draft: authored.by is the name in your
  assignment, authored.on is 2026-11-01, authored.reviewedBy is [], authored.state is "draft". The
  work's chunk, libs/shared/catalog/src/studies/eip.ts, already lists your two records; leave it.
- libs/features/tools/src/lib/studies/eip/<slug>.ts, exporting `model: StudyModelFunction`. A study
  that runs also exports `example: MarbleExample` and `flow: MarbleFlow`, and its model is
  `(parameters) => flowFromMarbles(example, flow, parameters)`. A study that does not run exports
  `example: FlowExample` and its model is `(parameters) => flowModel(example, parameters)`.
- libs/features/tools/src/lib/studies/eip/<slug>.spec.ts beside it.
Touch no other file.

THE EXAMPLE, IN THE PLATFORM'S OWN TERMS, AS AN ANALOGY
- Choose one small flow from the platform's public vocabulary or this app's own, for the pattern:
  an order's records moving through the planner, executor, verifier and reviewer; the catalog's
  loader answering the Tools home; the scene's events; the board reading the app's API. Name the
  messages and endpoints as that vocabulary does. brief/platform.md lists the public records.
- State it as an analogy, never as a claim that the platform or the app implements the pattern that
  way: the situation or the example's description says it is an analogy (for instance "As an
  analogy, read against DotLn's public execution guide: ...") and names the public record it reads.
  Cite that record among the references, with supports saying what the record says about the
  platform, not about the pattern. If the platform does something differently from the pattern, say
  so; an analogy that breaks is worth one sentence in the limits.
- Carry the row's hooks into the situation where they fit, rephrased in your words as analogies.
- One example. Every part of the study explains it: the flow, the ordinary pseudocode, the RxJS
  reading, the limits. A reader should be able to point at a message in the drawing, find the step
  in the pseudocode and see what changes when an input changes.

THE FLOW
- Nodes: at most four stages (columns), at most four nodes in a stage, at most eight nodes in all.
  A label is one or two short words, each at most ten letters, so it reads at 360 pixels. Mark the
  pattern's own part with tone "subject" (the aggregator, the router, the channel the pattern is
  about); give a channel the pattern is about its own node with kind "channel"; any other channel
  may be a labelled link. Lay the stages out in the order messages travel.
- Steps: each step moves the few messages that cross a link at that moment. A hand-written flow
  has at most sixteen steps after the start; a marble example stays within about sixteen frames,
  since every frame is a step of the flow. A node's state is short prose of at most forty
  characters ("holds 2 of 3 for order 31"); list a buffer's messages in held.
- Every step has a note: a plain sentence on what happens and why. In a hand-written flow that is
  the step's note; for a marble example, write example.notes for every frame, in the flow's words
  (who sends what to whom), since both drawings show that note.
- moments: three to five named steps. initialStep: the most telling step, or 0 to start at the
  beginning.
- The record's visual is { "family": "flow", "model": "libs/features/tools/src/lib/studies/eip/<slug>.ts",
  "textEquivalent": "..." }. The text equivalent says in a sentence what the drawing shows at the
  selected step, through placeholders every frame supplies: the family supplies {step}, {moves}
  (what moves where), {states} (what each node holds or decides), {held} and every entry of
  example.parameters as text; a flow over marbles also {frame}, {now} and {delivered}. Name the
  channels in it.

RUNNING OR NOT
- Your assignment says whether a concept must run ("required"), must not ("none"), or is yours to
  judge. Judge by the mechanism: a pattern that transforms a stream of messages (routes, filters,
  combines, reorders, expires, copies or shares them out) runs; a structure, a data model or a
  protocol whose point is not a stream does not, because a forced example misleads.
- A study that runs: pseudocode.executable is { "kind": "rxjs", "module": "<the module's path>" },
  the same path as visual.model. The MarbleExample follows the contract in marbles.ts
  exactly as switch-map.ts does (strings in the TestScheduler's syntax, a frame per character, values, inner
  streams with subscriptions, hot inputs where a source emits regardless). pseudocode.rxjs is the
  pipeline as it stands in run, whitespace and trailing commas aside (the record check compares
  them), written as a short assignment such as `ready$ = findings$.pipe(...)` with that same
  statement in run. flow.routes says which link each line's emissions cross; a line carrying several
  senders' messages routes by letter. The spec calls expectMarbleExample(example).
- A study that does not run: pseudocode.executable is null. pseudocode.rxjs is null unless an RxJS
  reading genuinely clarifies the idea; then its first line is `// Illustrative: <the reason it does
  not run>`. Your statement gives the reason.

THE RECORD
- Own words. Write every prose field yourself from the row's definition and public sources. Copy no
  sentence of the book, of the pattern catalog's pages, of any project's documentation or of any
  other page, and do not repeat the row's definition: it is shown right above the study, so the
  study adds to it.
- Ordinary pseudocode explains the mechanism without RxJS vocabulary, and its blank-line blocks
  match mechanism.steps one to one (the page shows each step beside its own lines). Steps and limits
  may use {placeholders}.
- Implementations, each introduced on its own terms: Apache Camel's public documentation page for
  the pattern and Spring Integration's, then one further public implementation where one exists
  (another integration framework's documentation or a real source file pinned to a tag or commit).
  relevance says what the project is and why it matters here; explanation says how it does this and
  what it adds, from the page you read. Do not force a comparison to this page's example. Where one
  of the two has no page for the pattern, leave it out and say so in your statement; a filler entry
  is worse than none.
- References: the pattern's page in the public pattern catalog (find it under
  https://www.enterpriseintegrationpatterns.com/patterns/messaging/), the book's publisher page, cited
  once with a title naming the chapter and section your row's place gives and supports saying only
  that the book covers the pattern there (you have not read its text, so claim nothing about what it
  says), and the platform's or app's public record your analogy reads.
- Nothing fabricated. Open every reference and implementation with your web tool or curl before
  citing it, and cite it only for what you saw there. accessed is 2026-11-01. supports states the
  specific claim the source backs. A source you could not open is not cited. Prefer stable URLs.
- limits are real failure cases in plain prose: what the pattern loses, holds or duplicates, when it
  is the wrong choice and what to reach for instead. nearby ids come from your row's related ids and
  brief/eip-index.json, with why saying when a reader would reach for that concept instead.
- A representation the idea does not need stays absent: null or an empty list, never filled. The
  record's shape is closed: add no field.

THE SPEC
- Load your record with `loadFlowStudy('<id>')` from '../../../../testing/src' and assert that its
  visual.model, and for a study that runs its pseudocode.executable.module, is this module's path.
- Assert, from the model, each behavioural claim the prose makes: who receives which message at
  which step, what is held and released, what is dropped or duplicated, and the failure case of the
  limits where the flow can show it (a second run with changed parameters is a good way). A study
  that runs also calls expectMarbleExample(example). The spec's parameters equal the record's.

HOUSE STYLE
TypeScript strict, no any, no lint or type suppressions, readonly by default, imports grouped Angular
and third party, then @dotln-angular, then relative, furthest first. Comments say what the code does
or why, in words a reader who has not seen this brief understands; name no order, finding or brief.
Prose is plain, specific and in British spelling, with no filler.

CHECK BEFORE YOU FINISH, from your working directory
- npx vitest run --project tools src/lib/studies/eip/<slug>.spec.ts
- npx tsc --noEmit -p libs/features/tools/tsconfig.spec.json
- node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/eip/<slug>.json
  (the only problem it may report is that the record is a draft)
- npx eslint libs/features/tools/src/lib/studies/eip/<slug>.ts libs/features/tools/src/lib/studies/eip/<slug>.spec.ts
- npx prettier --write <your six files>

FINISH with one JSON object as your last message, and nothing after it:
{ "label": "...", "statement": "<one line>",
  "studies": [{ "slug": "...", "executable": true | false, "why": "<'runs', or why it does not>",
                "analogy": "<the public record the example reads, as a URL>",
                "opened": [{ "url": "...", "how": "web | curl", "saw": "<a few words>" }] }] }
```

The public records an example may read, `brief/platform.md`:

```text
# Public records an example may read

An example drawn from the platform or from this app is an analogy. Read the record before you lean
on it, describe only what it says, and cite it by the pinned URL below. Name a role or a record as
the source names it.

## DotLn, the operator's agentic platform

Public repository https://github.com/DylanBWood/DotLn, pinned at commit
9139d91eb0b2b5cdcb683f750e48684b43fb95b6. Cite a document as
https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/<file>
(raw text: https://raw.githubusercontent.com/DylanBWood/DotLn/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/<file>).
The product documents there are 00-vision.md, 01-principles.md, 02-domain-model.md,
03-architecture.md, 04-interfaces.md, 05-pattern-library.md, 06-roadmap.md, 07-execution-guide.md
(how a session is dispatched to a role: planning, execution, verification, final review, the
operator's resume phrases, gates, integration and recovery), 08-publication-compiler.md,
09-audit-resilience-privacy.md, 10-ir-compatibility.md, 12-workstream-application.md and
13-uifa-roles.md. They are long: search them for the words you need rather than reading them whole.

## DotLn-Angular, this app

Public repository https://github.com/DylanBWood/DotLn-Angular, pinned at commit
c0e5a36008828ec5b742d6e740efff619f3cedbe, which is the copy in your working directory. Cite a file
as https://github.com/DylanBWood/DotLn-Angular/blob/c0e5a36008828ec5b742d6e740efff619f3cedbe/<path>.
Places worth reading:

- libs/shared/catalog/src/lib/catalog-loader.ts: the loader that answers the Tools home and the
  catalog, loading each work's rows and studies as a lazy chunk.
- libs/shared/events/src/lib/: the app's event groups by tier (ui, data-access, navigation, app),
  and docs/dev-reference/architecture/ for how events, stores and facades meet.
- libs/features/board-data-access/src/lib/board-api.ts and board-store.ts: the board reading the
  app's own API.
- libs/shared/scene-engine/src/lib/ and docs/dev-reference/architecture/scene.md: the soldier
  scene's engine, its runs and replays.
```

## The workers as they ran

The ten authors were launched at 15:02Z and the two critics at 16:02Z, each a Claude `dotln-worker`
through the Agent tool with no model override; a later round continued the same agent with a
message. Tokens are the host's figure at each finish; for a continued agent that figure includes the
context it carried over, so a later run's figure is not that run's cost alone. Time is wall clock
from the launch or the message to the finish.

| Worker | Run | Finished | Tokens | Tool uses | Time | Outcome |
| --- | --- | --- | ---: | ---: | --- | --- |
| author-01 | 1 | 15:37Z | 367,910 | 119 | 0 h 36 min | Aggregator and Resequencer, both running: groupBy, take(3) and toArray per order; a buffer that releases only the unbroken run |
| author-02 | 1 | 15:40Z | 363,244 | 142 | 0 h 38 min | Publish-Subscribe Channel and Competing Consumers, both running on one planner and three sessions: share() gives every session every order, zip with the free sessions gives each order to one |
| author-03 | 1 | 15:32Z | 328,409 | 103 | 0 h 30 min | Correlation Identifier runs; Request-Reply does not (a protocol of two one-way channels) and has an illustrative reading |
| author-04 | 1 | 15:37Z | 387,322 | 144 | 0 h 35 min | Content-Based Router and Recipient List, both running: findings routed by their fields; each release close's recipients computed from the declared siblings |
| author-05 | 1 | 15:38Z | 368,720 | 116 | 0 h 36 min | Message Expiration runs (age checked when a request's turn comes); Guaranteed Delivery does not (durable stores, crashes and acknowledgements) |
| author-06 | 1 | 15:37Z | 340,598 | 99 | 0 h 35 min | Control Bus and Message Store, neither running (a layout of channels; an archive queried later); Message Store has an illustrative reading |
| author-07 | 1 | 15:31Z | 321,268 | 106 | 0 h 28 min | Process Manager runs (a fold over reports choosing the next step); Transactional Client does not (a durability boundary) |
| author-08 | 1 | 15:31Z | 306,103 | 114 | 0 h 29 min | Message Translator runs (each record rebuilt in the new shape, or refused); Canonical Data Model does not (a structure, not an operation) |
| author-09 | 1 | 15:31Z | 310,773 | 87 | 0 h 29 min | Message Dispatcher runs (one dispatcher handing each request to its performer); Channel Adapter does not and has an illustrative reading |
| author-10 | 1 | 15:28Z | 299,199 | 79 | 0 h 26 min | Command Message and Event Message, neither running (kinds of message); Event Message has an illustrative reading |
| critic-reading | 1 | 16:15Z | 286,162 | 95 | 0 h 13 min | 20 findings; Aggregator, Correlation Identifier and Competing Consumers read best |
| critic-factual | 1 | 16:37Z | 509,859 | 194 | 0 h 35 min | 16 findings: 1 contradiction, 6 implementation claims the cited Camel page does not bear out, 1 analogy giving the wrong cause, 8 copied passages; all twenty specs passed, 137 tests; all 101 URLs opened; all twenty analogies marked, nineteen supported |
| author-01 | 2 | 16:25Z | 475,053 | 31 | 0 h 12 min | The Aggregator rebuilt so the operator could follow it (D016): one report per step on its own reviewer's line, letters naming the reviewer and the order, plain box names |
| author-01 | 3 | 16:42Z | 490,652 | 8 | 0 h 3 min | Camel's completion conditions stated condition by condition; the Resequencer's third limit cut; both readings annotated |
| author-02 | 2 | 16:49Z | 457,491 | 28 | 0 h 10 min | One move per step in both studies; at step 2 the topic sends three copies of order 31 and the queue one; Camel relevance and two copied clauses fixed; readings annotated |
| author-03 | 2 | 16:50Z | 415,945 | 31 | 0 h 11 min | Request-Reply rebuilt as a twelve-step story with one move per step; Correlation Identifier retimed, its duplicate given a letter of its own; readings annotated |
| author-04 | 2 | 16:52Z | 500,246 | 38 | 0 h 12 min | Link labels dropped, tokens numbered to match the prose, one move per step; copied sentences restated; readings annotated |
| author-05 | 2 | 16:49Z | 449,506 | 28 | 0 h 10 min | Message Expiration retimed with plain names; Guaranteed Delivery's host state, supports and Spring Integration relevance fixed; reading annotated |
| author-06 | 2 | 16:54Z | 456,686 | 34 | 0 h 15 min | Control Bus's work channel made a pipe of its own; both stories one move per step; copied sentences restated; Message Store's reading annotated; reported the empty-capsule defect (D021) |
| author-07 | 2 | 16:52Z | 415,273 | 41 | 0 h 13 min | Process Manager cites the Dynamic Router page for its mechanics and moves one message per step; Transactional Client's states fit a phone; reading annotated |
| author-08 | 2 | 16:50Z | 391,973 | 43 | 0 h 11 min | Canonical Data Model's labels dropped and its situation shortened; Message Translator's limit says what happens; reading annotated |
| author-09 | 2 | 16:50Z | 395,133 | 28 | 0 h 11 min | Channel Adapter's caption names every token and box and gives the guide's own reason; Message Dispatcher rebuilt in plain words; readings annotated |
| author-10 | 2 | 16:46Z | 353,083 | 28 | 0 h 7 min | Order number corrected; captions reworded for the green outline; the beacon described plainly; Event Message's reading annotated |
| critic-reading | 2 | 17:08Z | 440,808 | 70 | 0 h 9 min | Nineteen of its twenty findings resolved, one partly; six small new findings; Correlation Identifier, Competing Consumers and Process Manager read best |
| critic-factual | 2 | 17:16Z | 668,048 | 38 | 0 h 17 min | All sixteen findings resolved; twenty specs passed, 154 tests; 102 URLs opened, each supporting its claim; nine new findings, eight near-quotations and one analogy |

The eleven that run, the four with an illustrative reading and the five with none are the counts
D019 records. Every author left `authored` as a draft with no reviewers; the executor sets it after
the critics' second pass.

## The critics' briefs

Each critic worked in its own copy of the target with the merged batch, under the same write
boundary as the authors, with `brief/rows.json`, the authors' brief, `brief/platform.md`, the
product direction and each author's closing report. The factual critic's assignment:

```text
# Assignment for the factual critic

You are the factual critic of a batch of twenty Enterprise Integration Patterns concept studies for
DotLn-Angular, an Angular sandbox whose catalog maps the works its owner reads. A fabricated or
unsupported reference, a claim the code or the source does not bear out, a drawing that does not
match its test, and an analogy to the platform stated as fact are the defects this program cannot
accept.

Your working directory is a private copy of the repository with the batch in place: the twenty
records under libs/shared/catalog/src/studies/eip/, their modules and specs under
libs/features/tools/src/lib/studies/eip/, the flow family's builders in
libs/features/tools/src/lib/studies/flow.ts and the marble contract in
libs/features/tools/src/lib/studies/rxjs/marbles.ts and marble-testing.ts. brief/rows.json holds
every row of the batch (definition, place, relations, hooks, verification note), brief/authors-brief.md
is what the authors were told, brief/platform.md lists the public records an example may read,
brief/authors/ holds each author's closing statement, and brief/concept-study.md is the
product direction; docs/ai-reference/catalog-rules.md holds the rules. Write nothing outside this
directory; inside it, run the checks below and change no file. You cannot spawn agents. node_modules
holds links to the installed packages: leave it alone.

For every record:
1. Run its spec: `npx vitest run --project tools src/lib/studies/eip/<slug>.spec.ts`, and record
   the result and the number of tests. Then run
   `node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/eip/<slug>.json`;
   the only problem it may report is that the record is a draft. Anything else is a finding.
2. Open every URL in references and implementations yourself, with curl or your web tool. Note the
   HTTP status, or what the page showed. Do not take an author's word that it opened. A GitHub blob
   URL pinned to a tag or commit should show the file it claims to.
3. Read enough of each source to judge whether it supports the claim it is cited for: a reference's
   supports text, and an implementation's relevance and explanation. A real page that does not say
   what it is cited for is a finding. The book's publisher page supports only that the book covers
   the pattern at the place named.
4. Check that no prose contradicts the row's definition, and that what the prose says the pattern
   sends, holds, drops, copies or completes is what the model's frames and, for a study that runs,
   the marble strings and RxJS 7.8.2 do. An example may be narrower than the definition; a statement
   that conflicts with it, or with the code, is a finding.
5. The analogy rule. Every example drawn from the platform (DotLn) or from this app must be stated as
   an analogy, and the study must name the public record it reads and cite it. A sentence that
   claims the platform or the app implements the pattern that way, or that describes the platform
   beyond what its cited record says, is a finding: open the cited record and check. Record each
   study's analogy and your verdict in `analogies`.
6. For a study that runs, check that pseudocode.rxjs is the pipeline the module runs (the record
   check compares them), that the flow is built with flowFromMarbles from the same example, and that
   the mechanism steps match the ordinary pseudocode's blocks in meaning, not only in count; the
   ordinary pseudocode uses no RxJS vocabulary. For a study that does not run, check that its reason
   holds and that any RxJS reading begins `// Illustrative:`.
7. Check that the study quotes no passage of the book, the pattern catalog, a project's
   documentation or any other page: a sentence that reads as copied is a finding, with the source and
   the sentence.

Report a finding only for something concrete. Do not comment on style, structure or depth: another
critic reads for those.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>",
  "specs": [{ "slug": "...", "result": "pass | fail", "tests": <number>, "recordCheck": "draft only | <the problems>" }],
  "urls": [{ "url": "...", "status": "<HTTP status, or what happened>", "how": "web | curl", "supportsClaim": true | false }],
  "analogies": [{ "slug": "...", "analogy": "<the example and the record it reads>", "marked": true | false, "supported": true | false }],
  "findings": [{ "slug": "...", "field": "<which part of the record or module>", "kind": "unreachable | unsupported | contradiction | code-claim | analogy | quotation | spec | other", "finding": "<what is wrong>", "evidence": "<what you saw, with the URL or file and line>", "fix": "<the smallest correction>" }] }
A study with no findings has no entry in findings. Every URL in every record appears once in urls.
```

The reading critic's assignment, with `review/` holding the renders the executor made of the merged
batch in a production build, every section open at 1440 pixels and the drawing at 360:

```text
# Assignment for the reading critic

You are the reading critic of a batch of twenty Enterprise Integration Patterns concept studies for
DotLn-Angular, an Angular sandbox whose catalog maps the works its owner reads. You read each study
as its owner would: a senior Angular engineer with years of functional and reactive work, new to
integration patterns, reading to learn the vocabulary of agents handing records to each other
through channels and where each pattern fails, and to decide which pattern the app's machinery view
or a toy should show next.

Your working directory is a private copy of the batch. For each study, review/<slug>-1440.png is the
concept's reading as it renders at 1440 pixels with every section of the study open, on the step the
drawing opens on, and review/<slug>-360.png the drawing at 360 pixels. The record is
libs/shared/catalog/src/studies/eip/<slug>.json and its module
libs/features/tools/src/lib/studies/eip/<slug>.ts: the flow's nodes, links, steps, states and notes,
and for a study that runs, the marble example its flow is built from. brief/rows.json holds each
row's definition, which the page shows directly above the study. brief/concept-study.md is the
product direction, docs/ai-reference/catalog-rules.md the rules, and brief/authors-brief.md what the
authors were told. Write nothing outside this directory and change no file in it. You cannot spawn
agents.

Look at each image with your image tool. If you cannot view images, say so in your statement and
read the record and module instead.

Judge each study on these questions only:
1. Do the representations explain the same example? Can a reader point at a message in the flow,
   find the step in the ordinary pseudocode and, where the study runs, the line in the RxJS code, and
   see in the sentence under the drawing what moved where?
2. Is any section filler: a limit that is not a real failure, a nearby concept with no reason to go
   there, an implementation that adds nothing, a repeat of the definition above the study, a sentence
   that says nothing?
3. Does a reader learn what the pattern does and when it fails? Name the study that leaves this
   unclear. For Aggregator: when does the set complete, and what happens to a set that never does?
   For Publish-Subscribe Channel and Competing Consumers, read side by side: is the difference in
   delivery plain? For Request-Reply and Correlation Identifier: is it plain what the identifier is for?
4. Is the analogy to the platform or the app plain as an analogy, and does it help this reader, or
   does it get in the way of the pattern?
5. Is any prose hard to follow for this reader: jargon left unexplained, a text equivalent or note
   too long to read beside a drawing, a name in the drawing too long for its box?
6. Can the drawing itself be read at both widths: are its marks distinguishable, does a node's state
   fit beside it, does the legend say what each mark is?

Do not check whether references are real or support their claims: another critic does.

Report a finding only for something concrete, with the smallest fix. A study that reads well gets no
finding; say which three studies read best.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>", "best": ["<slug>", "<slug>", "<slug>"],
  "findings": [{ "slug": "...", "where": "<which part>", "kind": "same-example | filler | unclear-idea | analogy | hard-prose | drawing", "finding": "<what fails the reader>", "fix": "<the smallest change>" }] }
```

## The rewrite round

The executor sent each author one message at about 16:39Z with its findings from both critics, each
with the smallest fix the critic proposed. It also named the operator's annotation request (D019)
and said the author's copy had been refreshed. Four of the reading critic's findings were the flow
family's, not an author's, and the executor fixed them in the family (D017): n 3, messages sharing a
line; n 13, lines that skip a stage; n 14, the legend, with author-10 fixing both captions; and
n 15, the precision note. The others went to their authors:

| Author | Reading critic | Factual critic |
| --- | --- | --- |
| author-01 | 18 | 2 |
| author-02 | (none) | 5, 6, 14 |
| author-03 | 16, 17 | (none) |
| author-04 | 6, 7, 8, 9 | 13 |
| author-05 | 2 | 15 |
| author-06 | 11 | 9, 12 |
| author-07 | 12 | 8, 11, 16 |
| author-08 | 4, 5, 19 | (none) |
| author-09 | 10 | 3, 4, 7, 10 |
| author-10 | 1, 14 (captions), 20 | 1 |

Every author also received `brief/rewrite-lessons.md`: what the design rounds changed in the
family and what the operator's reading of the first Aggregator taught. Author-01 had already
applied items 1 to 6 in its rework.

```text
What the operator's design rounds changed in the flow family since you wrote your studies, and what
their reading of the Aggregator study taught. Your working directory has been refreshed with the
current repository: read your files again before you edit.

The family now:
- A flow always opens at step 0, before anything moves. The initialStep option is gone; the
  executor removed it from your module and set your spec to expect step 0. Name your moments for the
  telling steps instead.
- A node's state and the messages it holds sit inside its box, under its name; a node that a moving
  message leaves or reaches at the step is outlined in green; a channel is a pipe with round ends;
  on a phone the stages run top to bottom. If your caption says the words sit beside or under a
  node, or describes the old drawing in any other way, correct it.

The operator could not follow the Aggregator study and said they had no idea where anything was
happening: its reports channel said it carried both orders while the text said the orders were with
the reviewers. Check your own studies against the same lessons:
1. Make it plain where everything is. Say in the caption what a token is and what each box is. A
   box's state describes only that box, in short plain words, and no state contradicts or repeats
   a note.
2. No pass-through stop: a node that only passes each message straight on makes one message appear
   on two lines at one step. Route around it, or leave the passing line unrouted, unless holding
   or choosing there is the point.
3. One thing happens per step. Drop steps where nothing happens unless the waiting is the point,
   and let a result leave on the step after the message that caused it when that reads clearer.
4. Letters that say who and which, explained in the caption.
5. Plain names and no DotLn jargon a newcomer would not know, unless the sentence explains it.
6. Before you rewrite, set the story down in a few plain sentences a reader could follow without
   the drawing, then make each step match one of them, its note saying who sends what to whom.

The operator finds the "Think in streams" readings the most helpful part of these studies, and asked
for them to name the pattern's parts:
7. If your study has an RxJS reading, add short comments to it, one line each, on the operators that
   carry the pattern's parts, in the pattern's own vocabulary. For the Aggregator that is: groupBy is
   the correlation, take(3) the completion condition, toArray and map the aggregation. Put the same
   comments in the module's pipeline: the record check compares the reading with the module after
   removing comments on both sides, so the code itself must still match what runs. Keep the comments
   true to the code; a comment that names a part the code does not carry is worse than none.
   A study with no RxJS reading stays without one.
```

Two authors departed from the fix proposed, each with its reason in its report. Author-06 made
Control Bus's work channel a pipe node, "Work queue", instead of labelling the line, because a
labelled line was crossed by the Executor's bus line on a phone. Author-01 did not say that batch
completion closes every group, because the cited Camel page does not say so.

## Merging

The executor alone writes the target. It copies each author's six files, its two records, two
modules and two specs, by the author's assigned slugs. The first merge of the rewrite round
instead copied every study file that differed between an author's copy and the target. A later
copy therefore carried older versions of earlier authors' files back into the target. The executor
redid the merge by slug before any check ran on that state. A hash comparison of the ten copies then
showed that every file outside an author's own pair was identical across the copies, so no author
had changed another's work. Author-06's files, still being written at the time, were compared with
the refresh and found unchanged before its own merge.

## The critics' second pass

Both critics continued as the same agents at about 16:57Z, each in its copy refreshed with the
merged batch, the reading critic with new renders of every study at step 0 at 1440 and 360. Their
findings and what was done with each are in [the review record](review.md#the-critics-second-pass):
the executor applied the fifteen small changes the two passes asked for, in the critics' own
restatements, set every record `checked` with both critics in `reviewedBy`, and rewrote
`studies-summary.json`. No author was continued for them; each change was a sentence or a state.

## Tokens against the stop figure

| Measure | Tokens |
| --- | ---: |
| The ten authors, each at its last finish | 4,325,988 |
| The two critics, each at its last finish | 1,108,856 |
| The twelve workers | 5,434,844 |
| The session's own, read at 2026-11-01T17:18:46Z (`claude-transcript-message-usage`, scope dispatch) | 272,071,981 |
| Their sum | 277,506,825 |
| WO-014's recorded order total, the stop figure WO-020's procedure names | 117,733,609 |

The sum passed the figure while the authors were working. The rule was not set before the spend,
as the procedure asks (D023); on the operator's direction D028 set it at 18:10Z, with the sum then
at 384,899,604, and stopped the fan-out. No worker has run since the reviewers finished at 17:37Z. A worker's figure is the host's at its finish and, for a continued agent, includes the context
it carried over; the session's figure is mostly cached re-reads of its own context. The three
independent reviewers are not in these figures; [the handoff](handoff.md) gives the last reading.

`harness usage` read 12 of 20 observed subagents at 17:18Z (exact-observed, no unresolved
admissions, no unlinked children), the twelve workers above, with the dispatch at 2 h 42 min of its
8 h 0 min bound and 0 of 3 complete runs.
