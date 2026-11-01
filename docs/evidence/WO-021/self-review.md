# WO-021 self-review

Three independent reviewers read the finished change on 2026-11-01, each a Claude `dotln-worker`
(claude-opus-5-5 at `xhigh`, the type's pin, D003) launched through the host's Agent tool with a
brief that did not overlap the others: the criteria adversary, the design improver and the
consistency reviewer. Each read both worktrees read-only, ran only the read-only checks the brief
allowed (the record check, the tooling tests, the translation and template checks, `tsc` and
Vitest on named files), wrote nothing under either worktree and spawned no agent; the briefs and
reports stay in the session's ignored scratch, so what follows is their substance in the
executor's words. The first pass ran from 06:03Z and the three reports were in by 06:16Z; the same
three agents were then resumed by message on the corrected tree for the rechecks recorded below.

| Reviewer             | First pass                    | Recheck                       | Tokens, first pass / total |
| -------------------- | ----------------------------- | ----------------------------- | -------------------------- |
| Criteria adversary   | 4 blocking, 7 should, 5 could | 1 blocking, 3 should, 3 could | 183,518 / 233,238          |
| Design improver      | 1 blocking, 5 should, 6 could | 0 blocking, 1 should, 5 could | 199,871 / 260,847          |
| Consistency reviewer | 0 blocking, 8 should, 7 could | 1 blocking, 5 should, 4 could | 191,475 / 300,463          |

The recheck was the last pass: the operator ended the rounds on its cost (D024), so its findings
were applied or deferred by the executor and verified by command, not by a third pass.

## The first pass and what changed

**Blocking, all five blocking findings fixed.** The design improver found, as a blocking finding,
and the consistency reviewer as a should, that under a reduced-motion preference the courier was
drawn at rest over the source marble, in the output's colour and with its letter, since
`animation: none` left it at its start; `.courier` is now `display: none` under that preference, the end-to-end switchMap test
asserts it hidden at frame 4 in the default reduced-motion context, and the component spec covers
the courier at a frame that has one. The criteria adversary found the fan-out short of WO-020's
criterion 4 (no statement per worker, the critics' assignments only pointed to), the README's
"two orders of magnitude" false under D004's own rule, no decision naming the removed candidates'
files, and the Preflight line not run as written; the fan-out now carries each worker's statement
and both assignments, the stop figure is stated as the summed figure, D021 records that no
candidate had a file of its own with the grep that stands in for `ls`, and the Preflight line was
run after the last code change with each command's result in the README.

**Should, fixed.** The design improver: the courier's origin was the drawing's guess (observeOn's
values rode down from the `repaint` marker), so the builder now names each output value's origin
and the example can override it (`origins`), with one courier per landing marble (D022); the
ripple's `fill: none` never applied, so the styles now say the soft disc the operator saw; the
testing helper's closing check was a tautology, so it now compares what each output delivered
under the run with the drawing's delivered events, requires every inner stream's subscription
marbles (the type now says so) and asserts a cold input the example does not place was first
subscribed at frame 0; the delivered list in the text equivalent merged every output lane, so it
now groups by lane when there are two, and the share, shareReplay and scan templates were
reworded; the component spec fed a hand-written text equivalent, so it now derives it from the
fixture's frame. The consistency reviewer: the cut-off was still "at its cross" in the
architecture note and the drawing's header, the note said every study opens on its author's moment
and reads under Show the numbers, the study fixture's caption described the rejected round-3
candidate and its legend lacked the inner entry, thirteen spec titles said "opens on", the
walkthrough said three input lanes, the fan-out's run counts and worker ordinals disagreed with
its table; all corrected. The criteria adversary: worker counts reconciled with the host's
notifications; the review record now says what each rewrite changed and both critics re-read the
final records (review.md); the cut-off ring is a decision (D022) and the note is corrected; the
checks were rerun after the last edit and the README says when; the README carries the step 2, 3
and 4 outputs and the count of illustrative exceptions (none); absolute paths left the fan-out;
`repeat`'s empty implementations list has its reason (D023); takeUntil's pseudocode lost its last
`emits`.

**Could, fixed.** Marbles are tracked by a stable id so a jump between steps cannot reuse a
`current` or `landing` element; the stacked JSDoc on `secondsPerFrame` and the frame, subscription
and radius comments say what ships; the Default story uses the every-frame steps; the scrubber's
frame label has its own spec; the README's and comparisons' decision labels are corrected (D017 is a
direction, rounds 14 and 15 cite D018 and D019, D020 names step 12); the caption says "press Play
where it is offered"; the share and shareReplay end-to-end test asserts the frame where the two
differ; the record check strips comments before matching the code and requires the spec to call
`expectMarbleExample`, with tests for both; D018 cites the host's dialog; the README no longer
attributes the initial bundle's growth without a measurement.

**Deferred, with reasons.** None of the first pass's findings was deferred.

**Found beside the findings.** The design improver could not explain from the code why the
walkthrough video showed the line gliding forward from frame 0 when Play starts on the last frame,
and filed nothing; a probe of the served build showed the line sweeping backwards across the whole
diagram for the first 1.2 seconds, since the step jumps from the last frame to 0 under the gliding
transition. The component now lands the line on the new frame without a transition after any jump
while playing, forces the layout, and glides from the next paint; the component spec pins the
layout read and the lead that follows, and the probe shows the line at frame 0 fifty milliseconds
after Play.

## The recheck and what changed

The two blocking findings were one: the grep D021 offered in place of criterion 8's `ls` matched
the word `vertical` in two movement models because its paths included `studies/movement`, and the
record claimed the reviewers had run it. D021 now gives a grep over the family's, the study
composite's and the RxJS studies' paths that prints nothing, with the criteria adversary's own run
of it. Also fixed: the sizes table remeasured from the Preflight's build of the final tree; the
fan-out's statements without their empty times and with both critic passes; the record check now
strips comments from the spec before looking for `expectMarbleExample`, with the commented-out case
tested; a builder spec pins the courier's origin rule (the emitting lane, the inner stream before
the input, each grouped value with its own courier, the error fallback, no origin for a seed or a
replay, a named origin, a null one, an unknown id refused) and observeOn's spec pins its absent
origins; two lines sharing a label are refused; the architecture note describes the helper's
delivered-events check, the required inner subscriptions, the origin rule and the two new check
rules; the ring became the soft disc in the note and the walkthrough; the study fixture and both
stories take their text equivalents from the model; the landing test records the gliding class and
the line's position at the layout read; the self-review's attribution and the README's links and
grep paths are corrected; `npm run test:docs` runs once after the last document edit as the final
step, which is why no document records its result.

**Deferred, with reasons (D024).** A cold input that declares a late subscription would still be
drawn from frame 0, and the testing helper does not assert its first subscription: no example
declares one, and the contract note says where it stands. `origins` stays keyed by frame alone: no
example has two outputs with different origins at one frame. The drawing keeps finding the origin
lane by label; the builder refuses a repeated label instead of carrying ids. The landing test does
not add the Play-from-a-middle-frame, hand-step and reduced-motion cases: the design improver
traced those paths in the code and found them sound, and the served-build probe covers the one that
had failed.
