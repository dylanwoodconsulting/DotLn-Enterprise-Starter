# WO-034 worker plan

The executor is the only writer in both registered worktrees. Workers read and
return findings; the executor applies changes. No worker may launch a test-runner
gate or another worker.

The initial plan reserves nine uses: two independent critics of the changed wall
study, three independent first-round reviewers, up to three rechecks and one final
combined delta review if required. The session cap is twenty. The Codex workers
use `gpt-6.1-sol` at `max`, with fresh context. The executor runs `gpt-6-astra` at
`max`; the dispatch did not select Astra workers.

The content-worker token stop is 117,733,609, the profile's recorded fallback
until the WO-014 total is available from the usage projection. Before each use,
the executor reads usage and reconciles worker receipts. Unknown or overlapping
counts are stated and never added twice. At entry no worker has run. The first
dispatch readback reports 41,461 total tokens (31,872 cached input), from the
Codex transcript counter, dispatch scope, cutoff 2026-11-06T22:14:36.788Z.

Before the factual critic launch, the parent usage readback at 2026-11-06T22:33:22.219Z reports 30,601,663 total tokens: 29,587,840 cached input and 1,013,823 other tokens, dispatch scope, codex-transcript-counter. No workers have yet run. This known subtotal is below the 117,733,609 stop. The first two uses are the factual and reading critics of the completed wall-study revision; each is read-only, uses gpt-6.1-sol at max, and may launch no descendants or test-runner gate. Their counters will be reconciled when returned.

Before the reading critic launch, the parent readback at 2026-11-06T22:33:47.796Z reports 31,136,158 total tokens (30,114,560 cached input; 1,021,598 other). Manual uses: one, wall_factual; the harness currently reports zero and does not establish unused capacity. The running critic's usage is unknown, so the known parent subtotal is below the stop without claiming complete token-limit compliance. The reading critic is use two.

Before answering the factual critic's source question (use three, counted conservatively as a re-task), the parent readback at 2026-11-06T22:35:27.132Z is 35,907,575 total tokens: 34,819,200 cached input and 1,088,375 other. Both workers' counters remain unavailable from their runtime, and the parent/worker overlap is unknown. The known parent subtotal is below the stop. Two workers have launched; one source clarification follows.

The implementation, product write-backs and browser evidence are complete before
the first code-review round. Three fresh native Codex workers receive the
target-aware canonical prompts rendered by `worker review --dry-run`, one each
for criteria, design and consistency. Each prompt is one batch below the
400,000-character ceiling and names target tree
`1e3054f994361c7f8e0e9ebc0b1691d9ba3c0b02` against the activation base. The
executor receives their reports directly and records them through `worker
record`; it does not expose the private review directory. These are
`codex-spawn-agent` workers, `gpt-6.1-sol` at `max`, with no descendants, subject
writes or test-runner gates. The planned three uses bring the manual total from
three to six; up to three rechecks and one final combined delta remain reserved
within the cap of twenty.

Before the criteria review (use four), usage at
2026-11-06T23:02:32.941Z is 64,464,903 parent tokens: 62,679,552 cached input
and 1,785,351 other tokens, from the dispatch-scoped Codex transcript counter.
The completed critics' independent counters remain unavailable. The known
subtotal is below 117,733,609; no complete token-limit compliance or money
figure is claimed.

Before the design review (use five), the parent readback at 2026-11-06T23:02:47.759Z is 64,866,410 total tokens: 63,075,968 cached input and 1,790,442 other. Source: codex-transcript-counter, scope dispatch. The two critics and running criteria reviewer expose no independent token counters. No known subtotal exceeds the stop; four manual uses precede this launch.

Before the consistency review (use six), the parent readback at 2026-11-06T23:02:54.276Z is 65,137,799 total tokens: 63,344,896 cached input and 1,792,903 other. Source: codex-transcript-counter, scope dispatch. Independent counters for the critics and current reviewers remain unavailable, and overlapping scopes are not summed. The known subtotal is below the stop; five manual uses precede this launch.

Before a source-state clarification to the design reviewer (use seven), usage at 2026-11-06T23:05:46.825Z is 66,718,121 parent tokens: 64,900,992 cached input and 1,817,129 other; codex-transcript-counter, dispatch scope. Worker counters remain unavailable. The clarification distinguishes unchanged untracked formatter files from the deletions that plain git diff against a tree reports for them. The known subtotal remains below the stop.

Before the criteria recheck (use eight), the parent readback at 2026-11-06T23:23:20.244Z is 79,728,079 total tokens: 77,644,928 cached input and 2,083,151 other. Source: codex-transcript-counter; scope: dispatch. Seven manual uses precede this re-task. Independent worker counters and their overlap remain unavailable; the observed subtotal is below 117,733,609. The three rechecks use the existing native Codex reviewers at gpt-6.1-sol/max, each confirming its own fixes and reviewing the whole change under the round-two admission rule. Current target tree: d554030f09eb631952b8b6f1c2396b6938f20398.

Before the design recheck (use nine), the parent readback at 2026-11-06T23:23:29.392Z is 79,982,250 total tokens: 77,895,680 cached input and 2,086,570 other; codex-transcript-counter, dispatch scope. Eight manual uses precede this re-task. Worker counters remain unavailable and overlapping scopes are not summed; the known subtotal is below the stop.

Before the consistency recheck (use ten), the parent readback at 2026-11-06T23:23:36.552Z is 80,238,476 total tokens: 78,149,888 cached input and 2,088,588 other; codex-transcript-counter, dispatch scope. Nine manual uses precede this re-task. Independent worker counters remain unavailable; overlapping scopes are not summed. No known subtotal exceeds 117,733,609, and ten uses leave ten within the separate cap of twenty.

Before the design reviewer's report-schema clarification (use eleven, conservatively counted as a re-task), the parent readback at 2026-11-06T23:25:24.613Z is 81,030,730 total tokens: 78,929,792 cached input and 2,100,938 other; codex-transcript-counter, dispatch scope. The reply names the recorder's id field and adds no review scope. Independent worker counters remain unavailable and the known subtotal remains below the stop.
