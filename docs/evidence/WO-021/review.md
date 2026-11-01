# WO-021 critic findings and their dispositions

Two Claude `dotln-worker` critics read all twenty studies (D003): the factual critic, which opened
every cited address, ran every module's spec and checked each claim against the RxJS 7.8.2 source
and this app's files, and the reading critic, which read each study as the operator would from a
rendered screenshot with every section open. Every finding is listed here with what happened to it.
The reports themselves are in the session's ignored scratch; what follows is their substance, in
the executor's words where a finding was long.

## Reading critic, first pass

Best three: share-replay, concat-map, timeout. Worst three: materialize, take-until, finalize. The
statement: every study keeps one example from start to finish and is executable; the recurring
failures are an error drawn with the same cross as a cut-off, a lane drawn past its completion
bar, a subscription at a named moment narrated as nothing happening, and a page-wide precision
note that says nothing on a marble study.

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| switch-map | limits, the source that emits faster than its requests | `{frame}` in the limit prints whatever frame the reader is on; the cut-off is at frame 7. | Fixed by the executor: the limit names frame 7. |
| catch-error | drawing, the feed's error | The error is drawn as the same cross a cut-off uses, and the default caption reads a cross as where the operator stopped listening. | Fixed by the executor in the family: a cut-off now ends a lane in a small hollow ring and a cross is an error alone, the caption saying so; the author adds a caption naming the feed's error. |
| retry | drawing, the crosses ending the attempts | The same confusion between an error and a cancellation. | Fixed by the executor in the family, as above; the author adds a caption. |
| materialize | drawing, the import's failure | The same confusion. | Fixed by the executor in the family; the author adds a caption. |
| materialize | text equivalent | `{delivered}` prints every record as raw JSON with its hasValue flag, three lines beside the drawing. | Fixed by the executor in the family: an object value reads `kind N, value a`; the author drops the records-so-far clause. |
| exhaust-map | drawing, the turned-away presses | The presses that are ignored look like the accepted ones; only a missing save lane marks them. | Sent to the author: a caption naming the turned-away presses. |
| exhaust-map | drawing, the press lane | The lane runs past its completion bar. | Fixed by the executor in the family: a lane ends at its completion or error when its subscription is not declared. |
| concat-map | drawing, the photo lane | The lane runs past its completion bar. | Fixed by the executor in the family, as above. |
| combine-latest | drawing, the budget lane | The lane runs past its completion bar. | Fixed by the executor in the family, as above. |
| combine-latest | the limit on an input that completes without a value | The sentence can be read as the reference agreeing with the source. | Sent to the author. |
| share, subject, scan | the frame's sentence at an output's subscription | An output subscribing at a named moment reads as nothing happening. | Fixed by the executor in the family: the sentence names `<output> subscribes`. |
| take-until | drawing, the clock lane | The cross on the clock makes it look stopped; nothing says it ticks on for other listeners. | Sent to the author: a caption; the family's ring already reads as letting go rather than stopping. |
| take-until | mechanism step 1 and its pseudocode block | A Subject that fired before the subscription is implied to still guard it. | Sent to the author. |
| take-until | nearby, the Notifier row | Restates a step and a limit with no reason to go there. | Sent to the author. |
| finalize | the limit on a clean-up that throws | Runs through three asides before the advice. | Sent to the author. |
| finalize | nearby, UnsubscriptionError and the v7 order row | Named with no reason to go there, or repeating a limit. | Sent to the author. |
| start-with | the limit on the trailing scheduler argument | Repeats the definition shown above the study and names no failure. | Sent to the author. |
| start-with | the situation | "the operator" reads as startWith rather than the person watching. | Sent to the author. |
| observe-on | nearby, the Scheduler guide row | A source, not a concept, and already a reference. | Sent to the author. |
| timeout | drawing, the operator's band | The band names the parameters, not their values, so the reader counts frames. | Sent to the author. |
| every study | the precision note under the worked step | "Displayed values are rounded to two decimal places" says nothing on a marble study. | Fixed by the executor in the family: the note is shown for the movement drawings alone. |

## Factual critic, first pass

Every module's spec passed under the critic's own run (195 tests across the twenty), `tsc` was
clean, and each record check reported only the draft state. All 99 cited addresses answered 200 and
support what they are cited for, except one clause on the switchMap API page. The critic found that
combineLatest's completion timing and timeout's null `lastValue` depart from the mined row
definitions but match the 7.8.2 code, which the two studies say.

| Study | Spec | Where | Finding | Disposition |
| --- | --- | --- | --- | --- |
| switch-map | pass, 4 | references, the API page | Cited for unsubscribing the previous inner, which the page does not say; the source reference does. | Fixed by the executor: the claim is that only the latest inner's values pass on. |
| switch-map | pass, 4 | pseudocode blocks 1 and 2, steps 1 and 2 | The new request is started before the one in flight is stopped; RxJS 7.8.2 does the reverse, as the record's own source reference says. | Fixed by the executor: the request in flight is cut off first, then the new one opened, in the steps and the pseudocode. |
| switch-map | pass, 4 | the limit on a fast source | `{frame}` names the viewed frame, not the cut-off. | Fixed by the executor (also the reading critic's): frame 7. |
| behavior-subject | pass, 7 | references, the API page's support | The support sentence copies the page's summary word for word. | Sent to the author. |
| share | pass, 11 | references, the Angular guide's support | The support sentence reproduces the guide's note with one verb changed. | Sent to the author. |
| share-replay | pass, 10 | references, the Angular guide's support | The same sentence. | Sent to the author. |
| catch-error | pass, 7 | ordinary pseudocode | RxJS vocabulary (subscribe). | Sent to the author. |
| finalize | pass, 11 | ordinary pseudocode | RxJS vocabulary and a stream identifier. | Sent to the author. |
| materialize | pass, 10 | ordinary pseudocode | RxJS vocabulary (emit). | Sent to the author. |
| repeat | pass, 15 | ordinary pseudocode | RxJS vocabulary (subscribe). | Sent to the author. |
| replay-subject | pass, 9 | ordinary pseudocode | RxJS vocabulary (subscriber, subscribes). | Sent to the author. |
| retry | pass, 8 | ordinary pseudocode | RxJS vocabulary (subscribe). | Sent to the author. |
| start-with | pass, 10 | ordinary pseudocode | RxJS vocabulary (subscribes, subscriber). | Sent to the author. |
| take-until | pass, 9 | ordinary pseudocode | RxJS vocabulary (subscribes). | Sent to the author. |
| timeout | pass, 8 | ordinary pseudocode | RxJS vocabulary and a stream identifier. | Sent to the author. |

Specs with no finding: combine-latest (10), concat-map (12), exhaust-map (9), merge-map (12),
observe-on (11), scan (11), subject (11).

## Each module's spec, as the factual critic ran it

The factual critic ran every module's spec in its own workspace before the rewrite round and
reported each result; the record check at that point reported only the draft state, which the
executor set to `checked` after the rewrites. The twenty summed to 195 tests.

| Module | Spec | Tests | Record check |
| --- | --- | ---: | --- |
| `behavior-subject` | pass | 7 | draft only |
| `catch-error` | pass | 7 | draft only |
| `combine-latest` | pass | 10 | draft only |
| `concat-map` | pass | 12 | draft only |
| `exhaust-map` | pass | 9 | draft only |
| `finalize` | pass | 11 | draft only |
| `materialize` | pass | 10 | draft only |
| `merge-map` | pass | 12 | draft only |
| `observe-on` | pass | 11 | draft only |
| `repeat` | pass | 15 | draft only |
| `replay-subject` | pass | 9 | draft only |
| `retry` | pass | 8 | draft only |
| `scan` | pass | 11 | draft only |
| `share-replay` | pass | 10 | draft only |
| `share` | pass | 11 | draft only |
| `start-with` | pass | 10 | draft only |
| `subject` | pass | 11 | draft only |
| `switch-map` | pass | 4 | draft only |
| `take-until` | pass | 9 | draft only |
| `timeout` | pass | 8 | draft only |

After the rewrite round and the executor's merge of all twenty into the target, the family's
every-frame contract and the opening on the last frame, `vitest` over
`libs/features/tools/src/lib/studies/rxjs/` passes 20 files and 196 tests, and `npx nx test tools`
passes 57 files and 505 tests; `check-studies` reports 40 records and 0 problems.

## What the rewrite round changed

The nine authors with findings received them at 04:53Z to 04:54Z and reported back by 05:00Z; the
executor merged their six files each into the target afterwards. Each author's own account is its
statement in [the fan-out](fan-out.md); what follows is the substance, by finding, in the executor's
words.

- **switch-map** (the executor's own, three factual findings): the frame placeholder in the limit
  was filled, the support sentence that echoed the API page was reworded, and the API clause the
  critic found unsupported was dropped from the supports text.
- **share, shareReplay** (author-01): the Angular guide support sentence and share's situation
  sentence, which echoed the same note, were reworded; the API, deprecation and marble-guide
  supports were reworded on the author's own initiative; the two captions now say a cut-off lane
  ends in a small ring; the mechanism sentences about values nothing receives were removed.
- **Subject, BehaviorSubject** (author-02): the BehaviorSubject API support sentence and three
  others that echoed their pages were reworded; the author scanned seven-word runs against the
  pages and the 7.8.2 sources and found none left.
- **ReplaySubject, startWith** (author-03): startWith's scheduler limit was deleted, its
  situation names the person watching, and the startWith.ts reference backs only the seed-then-source
  order; both ordinary pseudocodes now say listener and when someone starts listening.
- **catchError, retry** (author-04): each example gained a caption that says the cross is its
  error and what the operator does with it; the ordinary pseudocode says start listening, start an
  attempt, start a new attempt; a spec-only message named dropped was renamed.
- **exhaustMap, takeUntil** (author-06): exhaust-map gained a caption on the press turned away and
  notes for its quiet frames; take-until gained a caption on the ring that ends the tick$ lane, a
  limit and a spec for a signal that fires as it is subscribed, and plain words in its first step.
  The executor later changed one more word in its ordinary pseudocode, `emits` to `signals`, on a
  reviewer's finding.
- **scan, combineLatest** (author-07): combineLatest's limit on an input that completes empty now
  says when the row completes and that the 7.8.2 source waits where the API reference says at once.
- **finalize, timeout** (author-08): finalize's throwing clean-up limit says only what RxJS does
  with the error; two nearby entries left; the ordinary pseudocode uses the critic's wording;
  timeout's band reads `timeout({ first: 6, each: 4 })` from the module's waits and its pseudocode
  has no stream identifiers; both captions say ring for a cut-off and cross for an error.
- **repeat, materialize** (author-09): materialize's caption says the cross is its error, sent on
  as the record e; its text equivalent is the plain frame sentence and its pseudocode says send the
  record and end the output normally; repeat's pseudocode reads in plain words and gained its own
  caption, since it draws no rings.
- **observeOn** (author-10): the nearby entry whose source was already a reference left; the
  unsubscribe limit and a spec title say cancels rather than drops.
- **concatMap, mergeMap** (author-05): no findings; the author's rewrite was its reconciliation
  with the assignment, under which the two studies share one example.

The family changes that followed (D019, D022) altered every study's caption and the text
equivalents' delivered lists, so both critics were asked for a second pass over the final records
and modules in the target worktree, read-only, with their stale workspaces set aside.

## The critics' second pass

Both ran on 2026-11-01 after 06:20Z as the same agents, continued by message.

The reading critic read the final records, modules and the changed family as text, since no renders
of the final state exist, and reported all twenty of its first-pass findings resolved, three of
them (lanes running past their completion bar) by the drawing now ending each lane at its
completion or error. It found three new things, each applied by the executor: shareReplay's last
note, now the opening one because the drawing opens on the last frame, began with a back-reference
("And again") and now reads as a sentence of its own; observeOn's caption now says why its values
do not ride down at a paint (each left `progress$` frames earlier and waited in the scheduler's
queue, which is what `origins` draws, D022); and timeout's intuition says again what is lost, a page
the server sends after the deadline, page 4 here, which the rewrite had dropped.

The factual critic ran the twenty specs in the target worktree (20 files, 196 tests, all passing),
ran the record check on each (no problem), confirmed every `pseudocode.rxjs` is the pipeline its
module builds, rescanned all prose and module notes against every cited source for copied passages
and found none, confirmed the reworded supports texts are backed by their sources, confirmed the
ordinary pseudocode of all twenty uses no RxJS vocabulary, and found nothing contradicting the
module strings or the 7.8.2 code. Its two findings were spec titles in scan and repeat that still
named an opening frame; both were renamed. Its statement notes that the records listed it in
`reviewedBy` ahead of this pass; the pass is what that listing now rests on. The five changes the
two passes asked for were applied after them and not re-read by a critic: the three sentences are
the reading critic's own wording, and the two titles are the factual critic's.

## The three independent reviewers

The three reviewers' passes, findings and what changed are in [the self-review](self-review.md).
