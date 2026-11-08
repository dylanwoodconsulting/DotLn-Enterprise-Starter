# WO-023 authoring fan-out

Authoring date: 2026-11-07. Integrated target baseline: `9637f73539e387b46f65855db78f3c4b5285e561`
(D006). Every worker is a Claude `dotln-worker` launched through the host's Agent tool from this
Claude Code root; its definition pins `claude-opus-5-5` at effort `xhigh`, and no launch overrides
it. Effective effort has no independent readback. Each author works in its own copy of the target
with no Git metadata and a link to the target's installed `node_modules`; the executor copies only
the deliverables across, so it stays the only writer of both worktrees. Workers start no
test-runner gate. Absolute scratch locations stay in session messages and are not filed here.

## The stop and the use budget

The token stop is 117,733,609, the recorded figure of WO-020-D004, because `npm run meta` lists no
WO-014 order row (read 2026-11-07T19:08Z). WO-020-D012's lift was that order's alone and does not
apply here (D003). Before each launch or re-task the executor reads this session's harness usage
and records it below; a known subtotal above the stop stops further launches until the operator
grants a scoped extension.

The use cap is `subagentCap` 20. The plan: ten authors and two critics, twelve uses; the
independent review ladder reserved at seven, three reviewers in round 1, up to three rechecks in
round 2 and one combined reviewer in round 3; nineteen in all, one spare. No author re-task is
planned: the executor applies the critics' bounded corrections itself and records who changed what.
No worker spawns a descendant.

## Assignments

The executor authored Unit of Work, `poeaa:246`, as the family's worked example and the subject of
the first pair (D009). The ten authors hold the other nineteen of the order's twenty rows.

| Label | Concepts |
| --- | --- |
| author-01 | `poeaa:240` Data Mapper, `poeaa:278` Foreign Key Mapping |
| author-02 | `poeaa:254` Identity Map, `poeaa:268` Identity Field |
| author-03 | `poeaa:370` Optimistic Offline Lock, `poeaa:377` Pessimistic Offline Lock |
| author-04 | `poeaa:357` Remote Facade, `poeaa:363` Data Transfer Object |
| author-05 | `poeaa:408` Gateway, `poeaa:448` Service Stub |
| author-06 | `poeaa:260` Lazy Load, `poeaa:452` Record Set |
| author-07 | `poeaa:421` Registry, `poeaa:443` Plugin |
| author-08 | `poeaa:214` Transaction Script, `poeaa:218` Domain Model, both structural |
| author-09 | `poeaa:226` Service Layer, `poeaa:330` Page Controller, the second structural |
| author-10 | `poeaa:340` Template View, structural |

Each author also received `brief/assignment.md` (its rows' places, whether each is executable or
structural, the app files to start the embodiment from, and the points the operator's session
needs), `brief/rows.json` (its catalog rows), `brief/chapter-index.json` (every PoEAA row by id,
title and place), the product direction `brief/concept-study.md`, the house rules 7, 9, 12, 13, 23
and 30 with G3 and G6 in `brief/house-rules.md`, and `brief/integrate.mjs`, the merge helper the
executor also integrates with.

## The authors' brief

````markdown
# The authors' brief: concept studies of the enterprise application patterns

You are writing concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the books
its owner reads. This batch studies twenty patterns from Patterns of Enterprise Application
Architecture. A study explains one catalog concept from several sides, all on one example, for a
senior Angular engineer with years of functional and reactive work who reads to learn which
pattern the app's own stores and data access already embody, under what name, and where each
pattern breaks; what they decide is which pattern to make explicit in the app or show a colleague.

Your working directory is your own private copy of the repository at commit
9637f73539e387b46f65855db78f3c4b5285e561. It has no Git metadata; `node_modules` is a link to the
real installation, which you must not change. Write what you need inside your copy; the executor
takes only the deliverables below and owns the real repository. You cannot spawn agents.

## Read first

- `brief/assignment.md` (your concepts, slugs and the points the operator's session needs),
  `brief/rows.json` (your rows: definitions, relations, hooks, places, verification notes) and
  `brief/chapter-index.json` (every PoEAA row by id, title, chapter and section, for nearby links).
- `brief/concept-study.md`: the product direction for a study.
- `brief/house-rules.md`: the house rules the batch is judged by, rules 7, 9, 12, 13, 23 and 30
  and G3, G6. They override any precedent you find in the repository: a reused shape is judged by
  these rules, never by the earlier batch that set it.
- `docs/dev-reference/architecture/catalog.md` §Studies and `docs/ai-reference/catalog-rules.md`.
- `libs/shared/models/src/lib/concept-study.ts` and
  `libs/shared/catalog/src/schema/concept-study-v1.schema.json`: the record you write.
- The `states` family, new in this batch: `libs/features/tools/src/lib/studies/study-model.ts`
  (`StatesModel`, `StateNode`, `StateObject`, `StateTransition`, `StatesFrame`,
  `StatesStudyModel`), `libs/features/tools/src/lib/studies/states.ts` (the `statesModel` builder
  your presentation calls: you give it the shape, one language-free snapshot per moment and that
  moment's words, and it derives the moves, refusing an id it does not know), and
  `libs/features/tools/src/lib/composites/study-visuals/states/` (what the family draws). The
  family draws a register table: the example's objects as rows and its states as columns, with a
  moving object's token green, an arrow from the column it left and the operation that moved it
  above the arrow. A later design pass may draw the same model as a state machine, boxes for states
  and arrows for transitions, so name every state, object and transition, and give every
  transition the operation that takes it.
- The worked example, Unit of Work: `libs/shared/catalog/src/studies/poeaa/unit-of-work.json`,
  its messages in `apps/dotln/public/i18n/studyPoeaa/en.json` under `unit-of-work`, and
  `libs/features/tools/src/lib/studies/poeaa/unit-of-work.{simulation,presentation,model,model.spec}.ts`.
  Match its depth and its code shape, not its outline: each study takes the form its idea needs.
- For the code's shape also read one reshaped movement study, `seek.simulation.ts`,
  `seek.presentation.ts` and `seek.model.ts` under `libs/features/tools/src/lib/studies/movement/`,
  and `studies/study-message.ts`, `studies/number-format.ts` and `studies/parameters.ts`.

## Deliverables, for each of your concepts

- `libs/shared/catalog/src/studies/poeaa/<slug>.json`, a `concept-study-v1` record in draft:
  `authored.by` is a message whose English is the name in your assignment, `authored.on` is
  `2026-11-07`, `authored.reviewedBy` is `[]` and `authored.state` is `"draft"`. Every authored
  on-screen field is a message key `studyPoeaa.<slug>.record.<path>`, exactly as the worked example
  writes them; ids, URLs, module paths, dates and parameters keep their machine meaning.
- `brief/out/<slug>.messages.json`: `{ "<slug>": { "record": { ... }, "model": { ... } },
  "titles": { "<id>": "<catalog title>", ... } }`, holding the English of every key your record
  and model use, and the catalog title of your record's id and of every nearby id.
- Unless your assignment marks the concept structural:
  `libs/features/tools/src/lib/studies/poeaa/<slug>.simulation.ts`, `<slug>.presentation.ts`,
  `<slug>.model.ts` and `<slug>.model.spec.ts`. The record's `pseudocode.executable` is
  `{ "kind": "typescript", "module": "libs/features/tools/src/lib/studies/poeaa/<slug>.model.ts" }`
  and its `visual` is `{ "family": "states", "model": <the same path>, "textEquivalent": <key> }`.
- A concept your assignment marks structural has no mechanism to run, and a forced model
  misleads: its `pseudocode.executable` is `null`. Give it a `states` drawing from an illustrative
  model under the same four file names only if stepping one example through the structure teaches
  something true (for instance which part holds each rule as one request passes through);
  otherwise its `visual` is `null`. Either way, say why in your result.

## The rules

- **Own words.** Write every prose field yourself, from the row's definition, the app's code and
  public sources. Quote no passage of the book, of its catalog pages or of any work in copyright,
  and do not restate the row's definition: it is shown right above the study, so the study adds to it.
- **One example, in this app.** The reference workspace explains itself best through its own
  stores, so set the example in the app's own world: the soldier scene's saved compositions, the
  catalog's works, readings and study chunks, the actor board and its `uifa-board-v1` response,
  browser storage, the app's own HTTP API and its mocks. Never a generic bank, shop or order book.
  Every part of the study explains that one example: the drawing, the pseudocode, the worked
  lines and the failure case. Every number comes from `example.parameters`, and prose never
  hard-codes a value the model computes: use `{name}` placeholders that every moment's values
  supply. The pseudocode is ordinary pseudocode; its blank-line-separated blocks match
  `mechanism.steps` one to one.
- **Where the app embodies it.** `implementations` begins with the app's own place where the
  pattern or its cousin lives: `project` names it (`DotLn-Angular · SceneStore with
  withPersistedState`), `url` is
  `https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/<path>`
  for a file that exists in your copy, `relevance` says what that code is in the app, and
  `explanation` begins with the words "The author's reading of the code" and says, from code you
  read, where the pattern or its cousin shows and where it stops. It is never a claim that the app
  was designed as the pattern. Where the app has no such place, name the file where the pattern
  would go and say plainly that the app does not do it. Your assignment lists candidate files to
  start from; read them and choose, or find a better one.
- **Then two public implementations,** each introduced on its own terms: what the project is and
  why it matters here (`relevance`), then how it does this and what it adds, from code or
  documentation you read (`explanation`). Prefer Doctrine, Hibernate or JPA, a TypeScript ORM
  such as MikroORM or TypeORM, Entity Framework, Spring or Rails. Pin repository files to a tag or
  commit. Do not force a comparison with the page's example.
- **References, exactly two:** the pattern's page in Martin Fowler's online catalog,
  `https://martinfowler.com/eaaCatalog/<page>.html` (find the right page and open it), and the
  book's publisher page,
  `https://www.informit.com/store/patterns-of-enterprise-application-architecture-9780321127426`,
  whose `supports` names the chapter your row's place gives and says the study quotes nothing
  from it. `accessed` is `2026-11-07`; `supports` states the specific claim the source backs.
- **Nothing fabricated.** Open every reference and implementation yourself with your web tool or
  curl before citing it, and cite it only for what you saw there. A source you could not open is
  not cited. An empty or short list is honest; a filler entry is not.
- **A representation the idea does not need stays absent.** `pseudocode.rxjs` is `null` unless a
  stream clarifies the pattern (Lazy Load as a deferred observable, Registry as a subject), and
  then it begins `// Illustrative:` with its reason, since nothing in this batch runs RxJS.
- **Limits** are real failure cases in plain prose. `nearby` ids must exist in
  `brief/chapter-index.json`; take them from your row's relations, and say in `why` when a reader
  would go there instead. Your assignment names pairs the operator reads side by side.
- **Messages, never literals.** Every string a reader can see goes through a message: record
  fields, state, object and transition names, notes, worked lines, captions, legends, moments,
  input labels and units, comparison text. Keys are nested by study and part
  (`studyPoeaa.<slug>.model.notes.stale`) and written as whole string literals, never assembled
  from template strings. Placeholders name what they hold (`{{version}}`, `{{stored}}`), never
  `valueN`. A machine id, a parameter value and a token's letter keep their meaning; their display
  words are messages.
- **British spelling,** plain and specific, with no filler.

## The model

- `<slug>.simulation.ts` is the mechanism and knows no language: pure functions over plain data,
  or a small in-memory model (a store with versioned rows, a map, a lock table, a ghost), no
  randomness, clock or global state, the same parameters giving the same run. It reads the
  record's parameters with `numberParameter` or `textParameter` and returns the run the
  presentation reads: each moment's operation and the state after it, so labels, notes and worked
  lines read the same results that advanced the mechanism.
- `<slug>.presentation.ts` takes that run and a `StudyTranslate` and builds the study with
  `statesModel`: the shape (states as `nodes`, the example's records or objects as `objects`,
  every operation as a `transitions` entry, `from` or `to` null for the way into or out of the
  example), one snapshot per moment (`at`: each tracked object's state; `took`: the transition
  each object took to reach it) and that moment's words (`values`, `note`, `worked`, and short
  per-object `notes`). Describe the example once, with named interfaces for the run and the moment;
  pass those descriptions, the translator or a selection, at most four parameters, and keep each
  function whole around one job: the 80-line lint ceiling is a ceiling, not a target to split for.
  Use `studies/number-format.ts` for any decimal and `studyParameterValues` for the parameters the
  prose reads. Use the shared `studyCommon.states.legend.*` entries and `studyCommon.states.caption`
  unless your drawing needs its own words.
- `<slug>.model.ts` is the entry of a few lines composing the two, exporting
  `export const model = (parameters: StudyParameters, t: StudyTranslate): StatesStudyModel => ...`,
  and may re-export the simulation's functions for the spec.
- Keep the drawing small: two to five states, one to five objects, five to twelve moments. Choose
  `initialStep` (the start unless another moment tells more), three to five named `moments`, a
  worked step per moment where arithmetic or a check is worth showing, `inputs` where changing a
  number makes the failure visible, and a `comparison` (a second run charted against the first)
  only where it shows something the drawing cannot.
- `<slug>.model.spec.ts` loads the record with `loadStatesStudy('<id>')` from
  `../../../../testing/src`, checks its parameters equal the ones the spec runs, drives the
  mechanism through the study's example with the simulation's own functions, asserts every
  behavioural claim the prose makes, including the failure case, and checks the drawing's
  placements at the telling moments and the text equivalent at one of them.

## House style and ownership

TypeScript strict, no `any`, no lint or type suppressions, `#private` over `private`, `readonly` by
default, imports grouped Angular and third party, then `@dotln-angular`, then relative, furthest
first. Comments say what the code does or why, in words a reader who has not seen this brief
understands. Only author your assigned files and `brief/out/`; do not edit shared types, the
`states` family, the builder, the engine, the checks or another study. If the contract cannot
express something your study needs, say so in `familyGaps` instead of working round it.

## Check before you finish, from your copy's root

1. `node brief/integrate.mjs brief/out/<slug>.messages.json` (once per messages file, or all at once).
2. `cd libs/features/tools && npx vitest run src/lib/studies/poeaa/<slug>.model.spec.ts src/lib/studies/study-models.spec.ts`
3. `node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/poeaa/<slug>.json`
   (the only problem it may report is that the record is a draft).
4. `npm run i18n:check`, `npx eslint <your files>` and
   `npx tsc --noEmit -p libs/features/tools/tsconfig.spec.json`.
5. `npx prettier --write <your files> brief/out`.

Run no gate (`npm test`, `nx run-many`, `target-gate`, `test-runner`), install nothing and use no
Git. Do not write outside your copy.

## Finish

End with one JSON object as your last message, and nothing after it:

```json
{ "label": "author-NN", "statement": "<one line>",
  "studies": [{ "slug": "...", "executable": "typescript | null: <reason>",
    "embodiment": { "file": "<repository path>", "reading": "<one line>" },
    "opened": [{ "url": "...", "how": "web | curl", "saw": "<a few words>" }],
    "familyGaps": "<what the states family could not show, or none>",
    "checks": "<what you ran and what it printed, in a line>" }],
  "usage": "<any token counter you can read, with its scope, or unknown>" }
```
````

## Accounting

Usage readings are this session's `node scripts/harness.mjs usage` with source
`claude-transcript-message-usage` and scope `dispatch`; parent cached input is shown apart from the
parent's other tokens. Worker tokens come from each worker's returned usage where it reports one,
counted once at its latest reading, and are otherwise unknown, never zero.

| Before | Cutoff | Parent total | Parent cached input | Parent other | Workers known | Known subtotal | Uses after |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| the ten authors | 2026-11-07T19:43:20Z | 63,889,143 | 63,133,418 | 755,725 | 0 | 63,889,143 | 10 of 20 |
| the two critics | 2026-11-07T20:21:25Z | 105,471,921 | 104,489,601 | 982,320 | 3,441,083 | 108,913,004 | 12 of 20 |

The ten authors' totals are the harness's `subagent_tokens` from each completion notice, counted
once; every author reported its own counter unavailable. author-01 376,118; author-02 361,769;
author-03 356,600; author-04 365,108; author-05 400,710; author-06 417,416; author-07 371,581;
author-08 246,651; author-09 305,604; author-10 239,526.

Two authors reported writing outside their copies, against the brief: author-07 saved its web
downloads to the session's host scratchpad and deleted them before finishing, and author-02 saved
two downloaded source files there. Other folders in that scratchpad show more authors did the same
with downloads and logs. The scratchpad is the session's own temporary space; neither real worktree
gained an unexpected file (`git status --short` in both, 2026-11-07T20:21Z), and the scratchpad is
cleared before handoff.

## The critics' briefs

Each critic received its brief as `brief/brief.md` in a read-only copy of the integrated
candidate, with `brief/rows.json` (the twenty rows), `brief/concept-study.md`,
`brief/house-rules.md`, and, for the factual critic, `brief/base-files.txt` (every file at the
integrated base) or, for the reading critic, `review/` (each study's page with every disclosure
open, and its drawing at the last step, captured from the production build at 1440 pixels with
reduced motion).

````markdown
# The factual critic's brief

You are the factual critic of a batch of twenty concept studies of Patterns of Enterprise
Application Architecture for DotLn-Angular, an Angular sandbox whose catalog maps the books its
owner reads. A fabricated or unsupported reference, an inaccurate reading of the app's own code, or
a model that does not do what its study says is the defect this batch cannot accept.

Your working directory is a private copy of the integrated candidate, with no Git metadata and a
link to the installed `node_modules`. Treat it as read-only: change no file. You cannot spawn
agents. Run no gate (`npm test`, `nx run-many`, `target-gate`, `test-runner`, `test:docs`).

The records are `libs/shared/catalog/src/studies/poeaa/*.json`. Their reader-visible fields are
message keys: resolve each in `apps/dotln/public/i18n/studyPoeaa/en.json` (shared narration in
`studyCommon/en.json`). `brief/rows.json` holds each concept's catalog row, shown to the reader
directly above the study. `brief/concept-study.md` is the product direction and
`brief/house-rules.md` the house rules 7, 9, 12, 13, 23 and 30 with G3 and G6. The models are
`libs/features/tools/src/lib/studies/poeaa/<slug>.{simulation,presentation,model,model.spec}.ts`,
built on `libs/features/tools/src/lib/studies/states.ts` and drawn by
`libs/features/tools/src/lib/composites/study-visuals/states/`. `brief/base-files.txt` lists every
file in the target repository at the integrated base commit
`9637f73539e387b46f65855db78f3c4b5285e561`. Unit of Work is the executor's own study and the
batch's worked example; hold it to the same rules as the rest, and judge every study against the
rules, never against the worked example (rule 30).

For every record:

1. Open every URL in `references` and `implementations` yourself, with your web tool or curl. Note
   the HTTP status or what the page showed; do not take an author's word that it opened. A
   repository URL must show the file it names at the pinned tag or commit.
2. Judge whether each source supports what it is cited for: a reference's `supports`, an
   implementation's `relevance` and `explanation`. A real page that does not say what it is cited
   for is a finding. The publisher's page supports only that the book covers the topic at the
   chapter named.
3. The embodiment, `implementations[0]`: confirm the DotLn-Angular file its URL names is in
   `brief/base-files.txt`, read the file in your copy, and judge whether the explanation is
   accurate about that code and reads as the author's reading (it begins "The author's reading of
   the code"), never as a claim that the app was designed as the pattern. Where the study says the
   app has no such place, judge whether that is true.
4. Run each executable model's spec from `libs/features/tools`:
   `npx vitest run src/lib/studies/poeaa/<slug>.model.spec.ts`, a few files at a time (the host
   stops a single process that grows past its memory budget), and record the result.
5. Check that each model does what its study says: the mechanism steps, the limits, the text
   equivalent and the worked lines read the same run the spec drives, and a structural study
   (`pseudocode.executable` null) claims nothing runs.
6. Check that no prose contradicts the row's definition, and that no study quotes a passage of the
   book, of its catalog pages or of any other work in copyright.
7. Independently of any earlier batch: every string a reader can see comes from a message (no
   literal in a presentation field, no assembled key), placeholders name what they hold (never
   `valueN`), the simulation knows no language and the presentation takes a translator, and
   functions take descriptions rather than long scalar lists (at most four parameters).

Report a finding only for something concrete, with the smallest correction. Do not comment on
style or depth; another critic reads for those.

Finish with one JSON object as your last message and nothing after it:

```json
{ "statement": "<one line>",
  "urls": [{ "url": "...", "status": "<HTTP status or what happened>", "how": "web | curl", "supportsClaim": true }],
  "embodiments": [{ "slug": "...", "file": "<path>", "existsAtBase": true, "readsAsAuthors": true, "accurate": true, "note": "<a few words>" }],
  "specs": [{ "slug": "...", "command": "...", "result": "<pass counts or the failure>" }],
  "findings": [{ "slug": "...", "field": "<part of the record or file>", "kind": "unreachable | unsupported | contradiction | embodiment | model-claim | quotation | messages | split | other", "finding": "...", "evidence": "<URL or file and line>", "fix": "<the smallest correction>" }],
  "usage": "<any token counter you can read, with its scope, or unknown>" }
```

Every URL in every record appears once in `urls`; every record appears once in `embodiments`;
every executable model appears once in `specs`. A study with no findings has no entry in
`findings`.
````

````markdown
# The reading critic's brief

You are the reading critic of a batch of twenty concept studies of Patterns of Enterprise
Application Architecture for DotLn-Angular, an Angular sandbox whose catalog maps the books its
owner reads. You read each study as its owner would: a senior Angular engineer with years of
functional and reactive work, reading to learn which pattern the app's own stores and data access
already embody, under what name, and where each pattern breaks, and deciding which pattern to make
explicit in the app or to show a colleague.

Your working directory is a private copy of the integrated candidate, with no Git metadata. Treat
it as read-only: change no file. You cannot spawn agents. Run no gate or test suite.

For each study, `review/<slug>.png` is the study as it renders at 1440 pixels with every disclosure
open, at the moment its drawing opens on, and `review/<slug>-last-step.png` is its drawing at the
last step. Look at the images with your image tool; if you cannot view images, say so in your
statement and read the record and model instead. The record is
`libs/shared/catalog/src/studies/poeaa/<slug>.json`, its English in
`apps/dotln/public/i18n/studyPoeaa/en.json`, and its model
`libs/features/tools/src/lib/studies/poeaa/<slug>.presentation.ts` with the simulation beside it.
`brief/rows.json` holds each row's definition, which the page shows directly above the study.
`brief/concept-study.md` is the product direction and `brief/house-rules.md` the house rules. Unit
of Work is the executor's own study and the batch's worked example; hold it to the same rules and
judge every study against the rules, not against the worked example (rule 30).

Judge each study on these questions only:

1. Do the representations explain the same example? Can a reader point at an object in the
   drawing, find its step in the pseudocode, and see what changes when an input changes?
2. Is any section filler: a limit that is not a real failure, a nearby concept with no reason to go
   there, an implementation that adds nothing, a repeat of the definition, a sentence that says
   nothing?
3. Does the reader learn what the pattern does, where the app embodies it and when it fails? The
   operator's session needs these in particular: Unit of Work steps objects through new, dirty,
   clean and removed with every register named; Identity Map shows a lookup that hits and one that
   misses; Optimistic and Pessimistic Offline Lock, read side by side, say where each fails and when
   an optimistic lock is the wrong choice; Data Transfer Object and Remote Facade say why the pair
   exists.
4. Is any prose hard to follow for this reader: jargon left unexplained, a text equivalent or note
   too long to read beside a drawing, a sentence a plain one would serve better?
5. Can the drawing be read: are its states, rows and tokens distinct, is anything clipped or
   overlapping, do the notes say something useful, does the legend say what each mark is?
6. Independently of any earlier batch: is any visible English on the page not from a message (a
   word in a drawing, note or label that no message holds), and does any simulation carry words a
   reader sees?

Do not check whether references are real or support their claims, or run specs: another critic
does. Report a finding only for something concrete, with the smallest fix. A study that reads well
gets no finding; name the three that read best.

Finish with one JSON object as your last message and nothing after it:

```json
{ "statement": "<one line>", "best": ["<slug>", "<slug>", "<slug>"],
  "findings": [{ "slug": "...", "where": "<part>", "kind": "same-example | filler | unclear-idea | hard-prose | drawing | messages | split", "finding": "...", "fix": "<the smallest change>" }],
  "usage": "<any token counter you can read, with its scope, or unknown>" }
```
````

## The critics and the stop

The factual critic returned at 2026-11-07T20:56Z after 522,295 tokens by the harness's count and
the reading critic at 20:34Z after 267,443; both reported their own counters unavailable. Their
findings and dispositions are in [review.md](review.md). The reading critic wrote one helper
script into the session's host scratchpad, outside its copy; it changed nothing in either worktree.

| Reading | Cutoff | Parent total | Parent cached input | Parent other | Workers known | Known subtotal | Uses |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| after the critics | 2026-11-07T20:41:14Z | 143,772,981 | 142,630,344 | 1,142,637 | 4,230,821 | 148,003,802 | 12 of 20 |

The known subtotal passed the stop of 117,733,609 while the critics ran, almost all of it this
session's cached re-reads; the parent alone read 119,638,195 at 20:28:05Z. No worker has launched
since. The review ladder's seven reserved uses wait for the operator's scoped extension
([D013](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d013)).

The operator lifted the stop for the rest of this order at about 21:05Z and raised the cap to 40
([D014](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d014)).

| Before | Cutoff | Parent total | Parent cached input | Parent other | Workers known | Known subtotal | Uses after |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| review round 1, three reviewers | 2026-11-07T21:03:23Z | 164,619,067 | 163,387,900 | 1,231,167 | 4,230,821 | 168,849,888 | 15 of 40 |


The three round-1 reviewers returned with 288,996 tokens for the criteria adversary, 228,435 for
the design improver and 288,649 for the consistency reviewer, by the harness's count from each
completion notice; their reports are recorded in the order's private review lane, and their
findings' dispositions are in [D015](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d015) and
[D016](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d016). Round 2 re-tasks the same three, three more uses.

| Before | Cutoff | Parent total | Parent cached input | Parent other | Workers known | Known subtotal | Uses after |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| review round 2, three re-tasks | 2026-11-07T21:53:58Z | 215,223,058 | 213,603,225 | 1,619,833 | 5,036,901 | 220,259,959 | 18 of 40 |

The three round-2 re-tasks returned with 347,173 tokens for the criteria adversary, 277,215 for
the design improver and 342,093 for the consistency reviewer, by the harness's count from the
completion notice of each re-task; their reports are in the order's private review lane and their
dispositions in [D017](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d017). The ladder ended at round 2, so the use reserved
for round 3 was not spent: 18 of 40 uses in all, and 6,003,382 worker tokens known.
