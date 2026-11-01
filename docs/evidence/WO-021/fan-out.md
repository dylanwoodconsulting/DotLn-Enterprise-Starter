# WO-021 authoring fan-out

Every worker of this phase is a Claude `dotln-worker` (claude-opus-5-5 at `xhigh`, the kit's pin;
D003), launched through the host's Agent tool with no model override. Each author works in its own
copy of the files a marble study needs, under the session's scratch directory, with the target's
installed packages linked in, so it runs its spec, the type check and the record check without
touching either worktree; the executor copies the deliverables across and stays the one writer of
both. A rewrite continues the same agent. Effective effort has no independent readback; the type's
pin is what was launched. Absolute locations stay in session messages.

The stop figure is 117,733,609 tokens (D004): the fan-out stops with a recorded decision when the
workers' observed totals summed with this session's own pass it. A Claude worker's tokens are not
reported back to the root, so the sum is the root's dispatch reading from
`node scripts/harness.mjs usage`.

## The plan under the cap

Ten authors, one factual critic and one reading critic, then the three independent reviewers:
fifteen workers against `subagentCap` 20, none spawning a descendant. The executor wrote switchMap
as the worked example of the executable form (D005), so the ten authors hold the nineteen other
concepts, nine with two and one with observeOn alone.

| Label     | Concepts                                          |
| --------- | ------------------------------------------------- |
| author-01 | `rxc:215` share, `rxc:216` shareReplay            |
| author-02 | `rxc:5` Subject, `rxc:62` BehaviorSubject         |
| author-03 | `rxc:63` ReplaySubject, `rxc:199` startWith       |
| author-04 | `rxc:220` catchError, `rxc:221` retry             |
| author-05 | `rxc:147` concatMap, `rxc:150` mergeMap           |
| author-06 | `rxc:149` exhaustMap, `rxc:192` takeUntil         |
| author-07 | `rxc:161` scan, `rxc:134` combineLatest           |
| author-08 | `rxc:237` finalize, `rxc:234` timeout             |
| author-09 | `rxc:238` repeat, `rxc:229` materialize           |
| author-10 | `rxc:230` observeOn                               |

The usage reading before the first worker: 10,575,648 tokens, source
`claude-transcript-message-usage`, scope dispatch, at 2026-11-01T03:13:22Z, with 0 of 20 observed
subagents and the dispatch at 0 h 36 min of its 8 h 0 min bound.

## The authors' brief

Each author received this text after its assignment (its two concepts, their slugs and the six file
names), with its rows, the RxJS index for nearby ids, the list of where this app uses the operators
with those files, the product direction and the catalog rules beside it.

```text
You are writing concept studies for DotLn-Angular, an Angular sandbox whose catalog maps the works its
owner reads. This batch studies RxJS: twenty operators and subjects the app itself runs on. A concept
study explains one catalog concept from several sides, all on one example, for a senior Angular
engineer with years of reactive work who reads to learn which operator fits which situation in their
own code and what each one silently drops.

Your working directory is your own private copy of the files you need. It has no Git metadata and the
real repository is elsewhere: write only inside this directory, change nothing under <the home directory>, spawn no
agents, and leave node_modules (a link to the installed packages) alone. The executor takes only the
deliverables below and owns the real repository.

READ FIRST
- brief/assignment.md: your two concepts, their slugs and the file names you deliver.
- brief/rows.json: your rows, with definition, place, related titles, hooks and verification note.
- brief/rxjs-index.json: every RxJS row by id and title, for nearby concepts; an id you cite must be
  in it. brief/app-uses.md lists where this app uses the operators, with the files under brief/app/.
- brief/concept-study.md (the product direction) and brief/catalog-rules.md (the rules a study
  meets; the study rules are the second half).
- libs/shared/models/src/lib/concept-study.ts and
  libs/shared/catalog/src/schema/concept-study-v0.schema.json: the record you write.
- libs/shared/catalog/src/studies/rxjs/switch-map.json,
  libs/features/tools/src/lib/studies/rxjs/switch-map.ts and switch-map.spec.ts: the worked example
  of the form. Match its depth and its honesty, not its outline: each study takes the form its idea
  needs.
- libs/features/tools/src/lib/studies/rxjs/marbles.ts: the MarbleExample contract your module
  exports and how the drawing reads it; marble-testing.ts: what the spec asserts;
  libs/features/tools/src/lib/studies/study-model.ts: the MarblesModel the page draws.

DELIVERABLES, for each concept and its slug
- libs/shared/catalog/src/studies/rxjs/<slug>.json, in draft: authored.by is the name in your
  assignment, authored.on is 2026-10-31, authored.reviewedBy is [], authored.state is "draft".
- libs/features/tools/src/lib/studies/rxjs/<slug>.ts, exporting `example: MarbleExample` and
  `model: StudyModelFunction` exactly as switch-map.ts does.
- libs/features/tools/src/lib/studies/rxjs/<slug>.spec.ts beside it, calling expectMarbleExample
  and asserting the behavioural claims your prose makes (what is kept, what is dropped, when).

THE RULES
- Own words. Write every prose field yourself from the row's definition and public sources. Copy no
  sentence of the RxJS documentation or of any other page, and do not repeat the row's definition:
  it is shown right above the study, so the study adds to it.
- One example. Choose one concrete, named situation and make every part of the study explain it: the
  marble diagram, the ordinary pseudocode, the RxJS code, the limits. A reader should be able to
  point at a marble, find the step in the pseudocode and the line in the code.
- Executable. The RxJS code is real: `run` builds the pipeline from the streams the spec makes
  from your strings, and expectMarbleExample asserts every output's marbles and every subscription
  string you declare. pseudocode.rxjs in the record is the pipeline as it stands in your module,
  whitespace and trailing commas aside (the record check compares them); display it as a short
  assignment such as `shown$ = query$.pipe(...)` and keep that same statement in run.
  pseudocode.executable is { "kind": "rxjs", "module": "<the module's repository path>" } and
  visual is { "family": "marbles", "model": "<the same path>", "textEquivalent": "..." }.
- The marble diagram. Strings use the TestScheduler's syntax: `-` one frame, a letter or digit an
  emission, `|` completion, `#` error, `(ab)` two emissions on one frame, and in a subscriptions
  string `^` where the subscription starts and `!` where it ends. Keep the whole diagram within
  about 24 frames, so the page can draw it. Give each stream a short label (an identifier such as
  `query$`, or `results(ant)` for an inner stream). Values are short words or numbers; the values
  map is what the text equivalent names. Use `inner` for streams an operator opens and declare
  their `subscriptions`, so the drawing shows where each was opened and cut off; use `hot: true`
  with `^` for a source that emits whether or not anything listens. Put one event per frame on a
  line unless a group is the point. Name three to five `moments` by frame, choose `initialFrame`
  as the most telling moment, and write `notes` for the frames that matter, in plain words.
  `operator` is one line of at most forty characters, as the drawing labels the band between
  inputs and outputs.
- Subjects and multicasting. Model a subject as the thing `run` builds: feed an input stream into
  it (`inputs.source$.subscribe(subject)`) and let other inputs say when subscribers arrive, each
  output being what one subscriber sees. share and shareReplay take the same source and show two
  subscribers, one early and one late. Time-based operators (timeout, repeat with a delay, retry with
  a delay) run on virtual time: a frame is a millisecond, and the streams you are given carry a
  `scheduler` if an operator wants one.
- The values the prose may read. Every frame supplies {frame} (the frame number), {now} (what
  happens at that frame, written from the events, in the form "query$ emits b (bee); results(ant)
  is cut off") and {delivered} (the outputs' values so far), plus every entry of
  example.parameters as text. The text equivalent and the mechanism steps may use them, as the
  worked example does; the check requires every placeholder you write to be supplied.
- Ordinary pseudocode explains the mechanism without RxJS vocabulary: what is kept, what is
  dropped, when a request is cut off, what memory a subject holds, what happens on an error. Its
  blank-line blocks match mechanism.steps one to one.
- Nothing fabricated. Open every reference and implementation with curl or your web tool before
  citing it, and cite it only for what you saw there. accessed is 2026-10-31. supports states the
  specific claim the source backs. A source you could not open is not cited. References: the RxJS
  documentation page of your operator (https://rxjs.dev/api/index/function/<name>, or
  /api/index/class/<Name> for a subject), the RxJS source at the installed version 7.8.2
  (https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/<name>.ts, or
  src/internal/<Name>.ts for a subject), and a treatment in another public reference where one
  exists, such as the RxJS guide pages or Angular's documentation.
- Implementations, introduced on their own terms. First, where this app uses it: pick the file from
  brief/app-uses.md, read it under brief/app/, cite it as
  https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/<path>
  with relevance beginning "Where this app uses it: <path> ..." and explanation saying what the
  code does with the operator. If the app does not use your concept, say so in your statement and
  give public uses only. Then one or two public uses, each a real file pinned to a tag or commit
  (Angular's repository at a commit you open, RxJS's own source, NgRx, public repositories), with
  relevance saying what the project is and explanation saying what it does with the operator, from
  code you read. An empty list is honest; a filler entry is not.
- Limits are real failure cases: what the operator silently drops, when it is the wrong choice and
  what to reach for instead. nearby ids come from brief/rxjs-index.json and your row's related
  titles, with why saying when a reader would reach for that concept instead.
- A representation the idea does not need stays absent: null or an empty list, never filled. The
  record's shape is closed: add no field.
- Only observeOn and materialize may be illustrative, and only if the example cannot honestly be
  expressed as a marble diagram: then executable is null, visual is null, pseudocode.rxjs begins
  with the line `// Illustrative: <the reason>` and your statement gives the reason. materialize is
  expressible: the expected values are plain notification objects such as { kind: "N", value: "a" }
  and { kind: "C" }. Prefer executable wherever it is honest.

HOUSE STYLE
TypeScript strict, no any, no lint or type suppressions, readonly by default, imports grouped Angular
and third party, then @dotln-angular, then relative, furthest first. Comments say what the code does
or why, in words a reader who has not seen this brief understands; name no order, finding or brief.
Prose is plain, specific and in British spelling, with no filler.

CHECK BEFORE YOU FINISH, from your working directory
- npx vitest run libs/features/tools/src/lib/studies/rxjs/<slug>.spec.ts
- npx tsc --noEmit -p tsconfig.json
- node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/rxjs/<slug>.json
  (the only problem it may report is that the record is a draft)
- npx prettier --write <your six files>

FINISH with one JSON object as your last message, and nothing after it:
{ "label": "...", "statement": "<one line>",
  "studies": [{ "slug": "...", "executable": true | false, "why": "<why illustrative, or 'runs'>",
                "appUse": "<the app file cited, or none>",
                "opened": [{ "url": "...", "how": "web | curl", "saw": "<a few words>" }] }] }
```

## The workers as they ran

Twelve workers ran: the ten authors and the two critics, each a Claude `dotln-worker` launched with
no model override, so claude-opus-5-5 at `xhigh` by the type's pin. The authors were launched at
03:15Z to 03:16Z on 2026-11-01. Every author then received one further message at 03:36Z to
03:37Z, after the executor found that nine of them had started before their `brief/assignment.md`
was in place: the assignment, the contract additions and the rule against describing values nothing
receives, with a request to reconcile. The critics were launched at 04:25Z, and at 04:53Z to 04:54Z
the nine authors the critics had findings on received those findings as a rewrite round; author-05
had none. The executor made the every-frame repairs of D011 itself and sent none of them back. A run
in the table is one stretch from the host's launch of an agent, or a message to it, to its
hand-back; an author still at work when a message arrived took it within the run, so the runs
column is two or three and is not the number of rounds. The critics' second run is the pass over
the final records recorded in `review.md`. A worker's tokens are the host's figure in
the notification that closed each of its runs, which counts the whole agent to that point, so the
figure here is each worker's last. Time is the sum of its runs' durations. The three independent
reviewers are the thirteenth to fifteenth workers and have their own table in `self-review.md`.

| Worker | Runs | Tokens | Tool calls | Time |
| --- | ---: | ---: | ---: | --- |
| author-01 | 2 | 278,768 | 74 | 0 h 27 min |
| author-02 | 2 | 315,184 | 113 | 0 h 30 min |
| author-03 | 3 | 290,466 | 116 | 0 h 29 min |
| author-04 | 3 | 301,238 | 102 | 0 h 29 min |
| author-05 | 2 | 267,403 | 60 | 0 h 24 min |
| author-06 | 3 | 266,821 | 88 | 0 h 22 min |
| author-07 | 3 | 257,621 | 92 | 0 h 23 min |
| author-08 | 2 | 344,097 | 151 | 0 h 34 min |
| author-09 | 3 | 277,840 | 124 | 0 h 27 min |
| author-10 | 3 | 199,252 | 60 | 0 h 16 min |
| critic-factual | 2 | 486,973 | 149 | 0 h 30 min |
| critic-reading | 2 | 318,940 | 92 | 0 h 15 min |

The twelve workers' figures sum to 3,604,603 tokens after the critics' second pass (3,403,648
before it). D004's rule sums them with the session's own reading: at the last reading before the
reviews (`harness usage`, 05:38Z) the session stood at 72,632,980, so the sum then was 76,036,628
against the stop figure of 117,733,609, 64.6 per cent of it with the three reviewers still to run;
the handoff carries the final reading.

## The workers' statements

Each author's statement is the `statement` line of the JSON object that closed its last run, as
the host delivered it; author-05's is from its only reply after the first pass, since it had no
rewrite round. The critics' first-pass and second-pass statements are both given.

- **author-01**: Both studies run again and the rewrite round is in. The factual critic's finding is fixed: the Angular guide support sentence is reworded in my own words in both records, as is share's situation sentence, which echoed the same note. On my own initiative I also reworded the share and shareReplay API supports, the multicasting-deprecation supports (which reused 'thin wrapper') and the marble-guide supports, because they followed the RxJS pages' wording too closely. The contract changes are folded in. Both specs now pin the new frame-7 sentences: 'chart$ subscribes' for share, and 'chart$ subscribes; chart$ emits b (104)' for shareReplay. The two captions described a cut-off lane as ending in a cross; they now say it ends in a small ring, since a cross is an error only. I removed the two mechanism sentences that described values nothing receives, and nothing now describes hollow or dropped marbles; the limits still say in words what each operator drops. Checks: my two specs pass 21 tests (26 in the full suite), tsc exits 0, the record check reports only that both records are drafts, and Prettier leaves all six files unchanged. authored stays as the brief gives it. I opened no new sources this round, so accessed stays 2026-10-31. This app does not use share or shareReplay, so the implementations are public NgRx and RxJS files only.
- **author-02**: Rewrite round done in my six files only. The critic's finding is fixed: the BehaviorSubject API reference's support sentence is now in my own words (it must be built with a value, hands the value it holds to each new subscription, and exposes it through a read-only value property and getValue()). I also reworded three other support sentences that echoed their page's phrasing: the Subject API page, the Subject guide and the BehaviorSubject guide. A scan of 7-word runs against the API pages, both guides and the 7.8.2 sources (raw source and doc comments) finds no shared runs in the records or module comments; the same scan finds 10 in the old flagged sentence, so it works. For the contract changes, both specs now expect every frame 0 to the last as a step and pin the new sentences: 'panel$ subscribes; panel$ emits r (running)' at the BehaviorSubject's opening frame, 'log$ subscribes' at frame 4 and 'latecomer$ subscribes; latecomer$ completes' at frame 16 in the Subject. The specs also require a note of its own on every frame where something happens, quiet frames keeping 'nothing new happens'. Nothing describes hollow, crossed or dropped marbles. Checks: npx prettier --write leaves all six files unchanged; npx vitest run gives 11/11 for subject.spec.ts and 7/7 for behavior-subject.spec.ts (23/23 for the full suite); npx tsc --noEmit -p tsconfig.json is clean; check-studies.mjs reports only that each record is a draft. accessed stays 2026-10-31, the day each source was first opened; on 2026-11-01 I fetched the guides and sources again only for the scan.
- **author-03**: Rewrite round applied to the six files only. start-with: the scheduler limit is deleted, the situation says 'the person watching', and the startWith.ts reference now backs only the seed-then-source order. Both studies: the ordinary pseudocode uses listener and 'when someone starts listening' with no RxJS vocabulary, still one block per step; the specs pin the new frame sentences ('verifier$ subscribes; ...', 'auditor$ subscribes; ...', 'latePanel$ subscribes; ...') and no longer mark unreceived values. vitest 24/24 (replay-subject 9, start-with 10), tsc --noEmit and prettier pass, and the record check reports only the draft state. This app does not use ReplaySubject, so its implementations are public uses only.
- **author-04**: Rewrite round applied to my six files only. Each example now has its own caption, built from the module's constants. catchError's caption says the cross on departures$ is its error, feed lost, which catchError stops before board$ and answers with timetable$. retry's says a cross on an attempt is its error, which retry keeps from board$ and answers with a new attempt 2 frames later. The ordinary pseudocode now reads 'start listening to replacement', 'start an attempt' and 'start a new attempt'. I added notes for the newly stepped quiet frames: catchError frame 8, retry frames 3 and 8. Both specs assert the caption. A spec-only error message 'dropped' is renamed 'reset', so no caption, note, text equivalent or spec describes hollow or dropped marbles; only the limits say in words what is lost. Under the new every-frame steps, vitest passes 7/7 and 8/8 (20/20 overall), tsc --noEmit is clean, the record check reports only the draft state for each record, and Prettier is clean. Unchanged from the last round: the app does not use the retry operator, so retry cites one public use, Angular CLI's TestProjectHost; its diagram has no input lane, so the legend's input entry points at nothing.
- **author-05**: Reconciled with brief/assignment.md: slugs concat-map and merge-map confirmed, authored.by is now 'Claude dotln-worker author-05', and to give 'the same inputs, two outputs' both studies now share one example, three photos (cat, dog, owl) uploaded to a shared album, with identical photo$ and upload(...) strings; each diagram draws its own operator's stored$ (concatMap '------1-2--3|', one upload at a time and in order; mergeMap '----2-13|', overlapping, with dog stored before cat). I applied the line across the pair rather than putting both outputs in one diagram, because an inner lane holds a single subscription window and these two operators differ exactly in when the inner streams are subscribed. Each spec asserts that the two examples' inputs are identical and that the other operator on these inputs gives the sibling study's drawn output (mergeMap capped at one gives the concatMap output). mergeMap's concurrency cap moved from the example into a limit, the nearby list and the spec. Under the updated contract neither diagram has a value that nothing receives, and no note, caption or text equivalent mentions hollow or dropped marbles. Checks: vitest passes 12 of 12 for each new spec (29 of 29 across the workspace), tsc --noEmit exits 0, check-studies reports only the draft state for each record, and npx prettier --write with the workspace .prettierrc leaves all six files unchanged. This app does not use mergeMap, only the static merge creator in catalog-store.ts, scene-clock.ts and scene.facade.ts, so that study cites public uses only. The six files are libs/shared/catalog/src/studies/rxjs/{concat-map,merge-map}.json and libs/features/tools/src/lib/studies/rxjs/{concat-map,merge-map}{.ts,.spec.ts}.
- **author-06**: Changes made to the six files only. exhaust-map now has a caption: a press with no save lane below it was turned away while a save ran, so save was never called for b or d. It also gains notes for the quiet frames 2, 4, 7 and 9, and a spec showing the slot stays busy after a save answers until it completes. take-until now has a caption: the ring that ends the tick$ lane is where this page let go of the clock, not where the clock stopped, and the clock ticks on for other listeners this drawing does not show. Mechanism step 1 and the first pseudocode block now read 'when the page starts listening'. A signal that emits as it is subscribed, as takeUntilDestroyed's does for a destroyed context, completes the output at once; a plain Subject that fired earlier stops nothing. That case is now also a limit and has a spec. The nearby entry rxc:387 is gone. Both specs now expect every frame to be a step, 0-13 and 0-7, with quiet frames reading 'nothing new happens'. The spec names no longer describe dropped presses. Checks: vitest exhaust-map 9 passed, take-until 10 passed, workspace 24 passed; tsc clean; the record check reports only the draft state; prettier clean.
- **author-07**: Rewrite round: the combineLatest limit on an input that completes without a value now says the row completes empty only once every other input has completed, and that the API reference says it completes at once while the 7.8.2 source waits. Both specs now expect every frame to be a step (0 to 11 for scan, 0 to 15 for combineLatest) and assert the new 'nothing new happens' sentence; scan's frame 5 now reads 'phone$ subscribes'. No prose describes hollow or cut-off marbles. This app does not use combineLatest at base 4c21c586, so that study cites public uses only. The rxjs.dev page URLs return a client-rendered shell over curl, so their content was read from the generated/docs JSON the page's bundle loads. No source was reopened this round, so accessed stays 2026-10-31. Checks: vitest passes 11/11 for scan and 10/10 for combine-latest; tsc --noEmit exits 0; the record check reports only that each record is a draft; prettier --write leaves all six files unchanged.
- **author-08**: Both critics' points are applied in my six files only. finalize: the limit on a throwing clean-up now says only that RxJS gathers the error into an UnsubscriptionError and throws it at the code that ended the subscription, so keep clean-ups from throwing; its spec now asserts just those two endings. The nearby entries rxc:355 and rxc:440 are gone. The ordinary pseudocode uses the critic's wording (starts/stops listening, the download's own clean-up, in the order they were attached). timeout: the band reads 'timeout({ first: 6, each: 4 })', built from the module's waits and asserted in the spec; the pseudocode opens 'when the reader starts listening for pages' and has no stream identifiers. Both captions now describe a cut-off as a small hollow ring and a cross as an error, and nothing anywhere describes hollow or dropped marbles. Under the new every-frame contract vitest passes (4 files, 24 tests), tsc and prettier pass, and the record check reports only the draft state for each. Earlier statements still stand: the app does not use finalize, so its implementations are Angular's HttpClient and router only; RxJS 7.8.2 sets TimeoutInfo.lastValue to null on timeout (ReactiveX/rxjs#7324), which the timeout spec pins and its prose states, contradicting the row's 'last value' wording; the timeout spec registers a TimeoutError equality tester because vitest 5 compares the stack RxJS stores as an own property, and builds its expected error with RxJS's deprecated TimeoutError constructor, which a no-deprecated lint rule may flag. No sources were added this round.
- **author-09**: Both critics' points are applied in my six files. materialize: a caption now says the cross on import$ is its error, which materialize sends on as the record e before completing log$; the text equivalent is just 'Frame {frame}: {now}.'; the ordinary pseudocode says 'send the record' and 'end the output normally'; the spec now pins the new sentence 'log$ emits e (kind E, error row 3 is unreadable, hasValue false)'. repeat: the ordinary pseudocode now reads 'when the page starts listening', 'start the check' and 'then start the check again', with the other lines in the same plain words, and step titles 1 and 4 match them. Two changes beyond the brief, both in my files and caused by the new contract. First, every frame is now a step, so repeat's waiting frames 1, 4, 6, 9 and 11 have notes and materialize's quiet frames 2 and 5 have short ones. Second, repeat has its own caption, because the default caption describes hollow rings and repeat draws none. No text of mine mentions hollow or dropped marbles. Unchanged: the app uses neither concept; repeat cites no implementation because none could be found and opened; materialize's plain records carry hasValue because RxJS 7.8.2 sets it; references were not re-fetched this round. Checks: vitest repeat 15/15, materialize 10/10, workspace 30/30; tsc --noEmit exit 0; the record check reports only the draft; prettier is clean.
- **author-10**: Rewrite round done. I removed nearby rxc:69, since its source, the Scheduler guide, is already a reference; nearby is now rxc:231, rxc:226, rxc:170, rxc:127, rxc:295, rxc:294 and rxp:175. To fit the new contract, the spec now expects every frame 0 to 7 as a step, and the module gives quiet frame 4 its own note. I reworded the unsubscribe limit and one spec test title from 'drops' to 'cancels'; nowhere does any wording now describe hollow or dropped marbles. Checks: the spec passes 11/11 and vitest overall 16/16, tsc --noEmit is clean, prettier is clean, and the record check reports only that the record is a draft. The reading still runs on animationFrameScheduler with example.animate, and authored.by is 'Claude dotln-worker author-10', on 2026-10-31.
- **critic-factual**, first pass: All 20 specs pass (195 tests), tsc is clean, and each record check reports only the draft state. All 99 cited URLs returned 200 and support what they are cited for, except one clause on switchMap's API page. 15 findings: 3 in switch-map, 3 supports texts that copy their source (behavior-subject, share, share-replay), and RxJS vocabulary in the ordinary pseudocode of 9 studies. combineLatest's completion timing and timeout's null lastValue depart from their row definitions, but they match the 7.8.2 code. Side effects: the allowed vitest runs updated vitest's results cache under the linked node_modules/.vite, and two temporary URL lists I wrote to the session scratchpad by mistake were deleted.
- **critic-factual**, second pass: Second pass on the final worktree files, read-only. All 20 specs pass (196 tests) and every record passes the check. In all twenty, pseudocode.rxjs is the pipeline the module's run builds. The reworded supports texts (share, shareReplay, Subject, BehaviorSubject, switchMap) are backed by their sources and copy no sentence; a rescan of all prose and module notes against every cited source found no copied passage. The ordinary pseudocode of all twenty uses no RxJS vocabulary. Records, notes and captions agree with the module strings and the 7.8.2 code; the drawing now opens on the last frame. What still fails is two spec titles, in scan and repeat, that name an opening frame the drawing no longer uses. I opened no new URLs: I re-fetched cited sources for the copy scan, and re-read the multicasting page to confirm shareReplay's new 'resets turned off' claim. The records already list the factual critic in reviewedBy, ahead of this pass.
- **critic-reading**, first pass: I viewed all twenty renders, cropped to full resolution, beside each record and module. Every study keeps one example from start to finish and is executable. The failures that recur are these: an error drawn as a cross under the default caption, which says a cross is where the operator stopped listening (catch-error, retry, materialize); a frame placeholder in one of switch-map's limits; a subscription at a named moment narrated as 'nothing happens'; and input lanes drawn past their completion bar. Page-wide, the line 'Displayed values are rounded to two decimal places' says nothing on a marble study. I wrote only temporary crops inside the working directory and removed them; no file there was changed.
- **critic-reading**, second pass: No renders exist for the final state, so I read the final records, modules and the changed marble family (marbles.ts, marbles-drawing.ts) as text in the target worktree, read-only; I wrote nothing and ran nothing. All twenty of my first-pass findings are resolved, three of them (the lanes running past their completion bar) by the drawing now ending each lane at its completion or error. Three new problems remain: share-replay now opens on a fragment, observe-on's caption promises arrivals its drawing deliberately suppresses, and timeout's reworded intuition no longer says what it drops.

## The critics' briefs

Each critic was launched with the short text below (an absolute location in it is replaced by a
placeholder in angle brackets, as this record keeps absolute locations in session messages) and
found its assignment, also below, at `brief/assignment.md` in its own workspace, with the twenty
records, modules and specs copied in and the authors' statements of what they opened beside them.

The factual critic's launch text:

```text
You are the factual critic of the RxJS concept-study batch for DotLn-Angular. Your working directory is <scratch>/authors/critic-factual — everything you need is there. Read brief/assignment.md first and follow it exactly: it says what to check in every record and module, which commands to run from the working directory, and the one JSON object to finish with. Write nothing outside that directory and change no file inside it (running vitest and the record check is allowed); never write under <the projects directory> or anywhere else; spawn no agents; node_modules there is a link to the installed packages, leave it alone. Finish with the JSON object the brief asks for as your last message, and nothing after it.
```

The reading critic's launch text:

```text
You are the reading critic of the RxJS concept-study batch for DotLn-Angular. Your working directory is <scratch>/authors/critic-reading — everything you need is there, including a rendered screenshot of every study under review/. Read brief/assignment.md first and follow it exactly: it says how to read each study, the five questions to judge it on, and the one JSON object to finish with. Write nothing outside that directory and change no file inside it; never write under <the projects directory> or anywhere else; spawn no agents; node_modules there is a link to the installed packages, leave it alone. Finish with the JSON object the brief asks for as your last message, and nothing after it.
```

The factual critic's `brief/assignment.md`:

```text
# Assignment for the factual critic

You are the factual critic of a batch of twenty RxJS concept studies for DotLn-Angular, an Angular
sandbox whose catalog maps the works its owner reads. A fabricated or unsupported reference, a claim
the code does not bear out, and an example whose drawing does not match its test are the defects
this program cannot accept.

Your working directory is a private copy of the batch: the twenty records under
libs/shared/catalog/src/studies/rxjs/, their executable modules and specs under
libs/features/tools/src/lib/studies/rxjs/, the contract marbles.ts and marble-testing.ts beside
them, the catalog rows in brief/rows.json (definition, relations, hooks, verification note), the
authors' brief in brief/authors-brief.md, where this app uses the operators in brief/app-uses.md
with those files under brief/app/, and the product direction and rules in brief/concept-study.md
and brief/catalog-rules.md. Write nothing outside this directory; inside it, run the checks below
and change no file. You cannot spawn agents. node_modules is a link to the installed packages.

For every record:
1. Run its spec from the working directory: `npx vitest run libs/features/tools/src/lib/studies/rxjs/<slug>.spec.ts`,
   and record the result and the number of tests. Then run
   `node tools/scripts/catalog/check-studies.mjs libs/shared/catalog/src/studies/rxjs/<slug>.json`;
   the only problem it may report is that the record is a draft. Anything else is a finding.
2. Open every URL in references and implementations yourself, with curl or your web tool. Note
   the HTTP status, or what the page showed. Do not take an author's word that it opened. rxjs.dev
   pages are client-rendered: read the generated document the page loads
   (https://rxjs.dev/generated/docs/<the page's path>.json) and judge the page URL by it. A GitHub
   blob URL pinned to a tag or commit should show the file it claims to.
3. Read enough of each source to judge whether it supports the claim it is cited for: the
   reference's supports text, and an implementation's relevance and explanation. A real page that
   does not say what it is cited for is a finding. An implementation introduced as where this app
   uses it must match the file under brief/app/ at the same path.
4. Check that no prose contradicts the catalog row's definition, and that what the prose says the
   operator keeps, drops, replays, cuts off or completes is what the module's marble strings and the
   RxJS 7.8.2 source do. An example may be narrower than the definition; a statement that conflicts
   with it, or with the code, is a finding.
5. Check that the record's pseudocode.rxjs is the pipeline the module runs (the check compares
   them), that the mechanism steps match the pseudocode blocks in meaning and not only in count,
   and that the ordinary pseudocode uses no RxJS vocabulary.
6. Check that the study quotes no passage of the RxJS documentation or of any other page: a
   sentence that reads as copied is a finding, with the source and the sentence.

Report a finding only for something concrete. Do not comment on style, structure or depth:
another critic reads for those.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>",
  "specs": [{ "slug": "...", "result": "pass | fail", "tests": <number>, "recordCheck": "draft only | <the problems>" }],
  "urls": [{ "url": "...", "status": "<HTTP status, or what happened>", "how": "web | curl", "supportsClaim": true | false }],
  "findings": [{ "slug": "...", "field": "<which part of the record or module>", "kind": "unreachable | unsupported | contradiction | code-claim | quotation | spec | other", "finding": "<what is wrong>", "evidence": "<what you saw, with the URL or file and line>", "fix": "<the smallest correction>" }] }
A study with no findings has no entry in findings. Every URL in every record appears once in urls.
```

The reading critic's `brief/assignment.md`:

```text
# Assignment for the reading critic

You are the reading critic of a batch of twenty RxJS concept studies for DotLn-Angular, an Angular
sandbox whose catalog maps the works its owner reads. You read each study as its owner would: a
senior Angular engineer with about eight years of functional and reactive work, reading to learn
which operator fits which situation in their own code and what each one silently drops, and to
decide which flattening or multicasting choice to make next time.

Your working directory is a private copy of the batch. For each study, review/<slug>.png is the
concept's reading as it renders at 1440 pixels, with every section of the study open, on the frame
the drawing opens on. The record is libs/shared/catalog/src/studies/rxjs/<slug>.json and its
module libs/features/tools/src/lib/studies/rxjs/<slug>.ts: the marble strings, the moments, the
notes and the operator line. brief/rows.json holds each row's definition, which the page shows
directly above the study. brief/concept-study.md is the product direction and
brief/catalog-rules.md the rules; brief/authors-brief.md is what the authors were told.
switch-map is the worked example of the form, but a study should take the form its idea needs.
Write nothing outside this directory and change no file in it. You cannot spawn agents.

Look at each image with your image tool. If you cannot view images, say so in your statement and
read the record and module instead.

Judge each study on these questions only:
1. Do the representations explain the same example? Can a reader point at a marble, find the step
   in the ordinary pseudocode and the line in the RxJS code, and see in the text under the drawing
   what that emission is? Name any place where the example changes or a representation explains
   something else.
2. Does the reader learn what the operator keeps and what it silently drops, and when it is the
   wrong choice? Name the study that leaves this unclear.
3. Is any section filler: a limit that is not a real failure, a nearby concept with no reason to
   go there, an implementation that adds nothing, a repeat of the definition above the study, a
   sentence that says nothing?
4. Is any prose hard to follow for this reader: jargon left unexplained, a text equivalent or
   note too long to read beside a drawing, a sentence of frame numbers where a plain statement
   would serve?
5. Can the diagram itself be read: are the lanes and their names legible, do the marbles' letters
   and the values map make sense, is the operator line understandable, does the opening frame show
   the point of the study, are the named moments the right ones, do the limits name what the
   drawing cannot show?

Do not check whether references are real or support their claims, and do not run the specs:
another critic does.

Report a finding only for something concrete, with the smallest fix. A study that reads well gets
no finding, and say which three studies read best and which three read worst.

Finish with one JSON object as your last message and nothing after it:
{ "statement": "<one line>", "best": ["<slug>", "<slug>", "<slug>"], "worst": ["<slug>", "<slug>", "<slug>"],
  "findings": [{ "slug": "...", "where": "<which part>", "kind": "same-example | drops-unclear | filler | hard-prose | drawing", "finding": "<what fails the reader>", "fix": "<the smallest change>" }] }
```
