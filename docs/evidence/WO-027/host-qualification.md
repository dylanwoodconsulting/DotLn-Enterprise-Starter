# WO-027 host qualification

Observed on 2026-11-06 during implementation. The active host is Codex CLI
0.167.0, model gpt-6-astra, effort max, from codex-session-readback.

The executor made local changes in the registered launchpad and target
worktrees. No publish invocation, push, pull request, account setting change
or live title workflow ran in this phase. Hook and host admission of the later
publish command are therefore untested. The verifier records the draft publish
invocation and its actual decisions after a passing independent verification;
the final reviewer reads the resulting preview and title workflow evidence.

Target commands ran individually. The target policy excludes compound commands,
inline node evaluation and the bounded wrapper in the target worktree. The
dependency comparison and scratch controls use a file in the session scratch
directory, run through the launchpad's bounded wrapper. No desktop control or
operator browser session was used.

The independent implementation reviews ran through codex-spawn-agent with
`gpt-6.1-sol` and max effort. The required `worker record` helper stamps its
Claude defaults in wrapper metadata; those fields are not readback of these
native workers. The retained report text binds their actual host and target
trees. WO-027-D007 records the helper limitation for the next core planning pass.

## Verification (VER-002)

Observed on 2026-11-06 under `resume: verify`. The host is Claude Code 2.1.319,
model `claude-opus-5-5`, with selected effort `xhigh` read from `CLAUDE_EFFORT`.
The verifier ran target commands one at a time through session-scratch runners
under the launchpad's bounded wrapper. It used no desktop control, no operator
browser session and no worker.

The profile's route has the session that records the verification pass open the
draft pull request with the publish helper's `--draft` form. The operator's
standing instructions require their explicit authorization for any push or pull
request, and the `resume: verify` dispatch does not state one. The verifier
therefore did not run the publish helper when it filed VER-002. It asks the
operator once after recording the result. Any invocation it then runs, with the
hook's and the host's decisions, is recorded below this paragraph. Until then,
the safe default is no draft. Without a draft, the final review's
`preview-pr.json` obligation has no pull request or title-workflow run to read.

### Draft publication after the operator's authorization

After recording `verification-result pass` at 17:26Z, the verifier asked the
operator once whether to open the draft. The operator chose "Open the draft
now" in the session's question dialog. The body is
[`draft-pr-body.md`](draft-pr-body.md). Before the publish, it passed
Prettier and the local-terms check, and it is not ignored. The verifier ran
this exact invocation from the launchpad order worktree's root, plainly, with
no pipe, redirect, `cd` or variable prefix:

```sh
node scripts/worktree.mjs publish WO-027 --target-worktree --draft --branch docs/workspace-says-and-checks-what-is-so --title ":memo: Make the gate tools and reference documents say and check what is so" --body-file docs/evidence/WO-027/draft-pr-body.md
```

The hook admitted it with no refusal or advisory, and the host ran it without a
permission prompt. The helper printed: "Pushed draft
docs/workspace-says-and-checks-what-is-so at
47e739acbdb3be999f817ed1817815f2a848f36b and opened draft pull request #15 on
github.com/DylanBWood/DotLn-Angular; HEAD and the index are unchanged."
`gh pr view 15 --repo DylanBWood/DotLn-Angular` then read the pull request as
an open draft, with the head at that commit and the title exactly as written.
GitHub queued the `CI` and `Pull request title` workflows on the
`pull_request` event for that head. The title workflow's outcome is recorded
below.

The `Pull request title` run 42262742002, on the `pull_request` event for head
`47e739acbdb3be999f817ed1817815f2a848f36b`, completed with conclusion
`success` at 17:33:48Z. After it, `gh pr view 15` still read the title as
`:memo: Make the gate tools and reference documents say and check what is so`,
so the workflow left the gitmoji-and-subject title as written. The workflow's
step label still reads "Validate and decorate the conventional title".
`.github/workflows/pr-title.yml` is outside this order's declared surfaces, and
the label changes no behavior. The `CI` run on the same head was queued when
this was recorded; the final review reads its result with the pull request's
threads into `preview-pr.json`.

## Final review (FINAL-001)

Observed on 2026-11-06 under `resume: final review`. The host is Claude Code
2.1.319, model `claude-fable-5-1`, with selected effort `xhigh` read from
`CLAUDE_EFFORT`. The reviewer ran target commands plainly, one at a time, from
the target worktree (`node --test tools/`, `node tools/board-count.mjs`,
`npm run check:scripts`) and Git reads with `git -C` from the launchpad; the
review gate reran as `node scripts/target-gate.mjs WO-027 --review` from the
launchpad root after the root release-notes file left the candidate
([D014](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d014-carry-the-reviewed-release-notes-beside-the-final-report-not-at-the-targets-root)).
The hook admitted every call without an advisory, and the host ran each without
a permission prompt. No desktop control, operator browser session or worker was
used.

The draft pull request was read from the forge with `gh pr view`, `gh run list`,
`gh run view` and one GraphQL query for its thread, comment and review counts,
read-only as the operator's signed-in account. The reviewed commits were made
with `git add` and `git commit -F` from message files in the DotLn session
scratch; the repository's commit hook accepted each. The publish invocations and
the hook's and host's decisions on them are recorded below once they run.

After `final-review-result pass` at 18:36:41Z, `target-records` moved the
decisions, VER-001, VER-002 and FINAL-001 into the target's `docs/dotln/` as
its records commit `47f7a2f02f1374f2e635260c4a69d528e3e909e3`. A direct run of
the document check (`node scripts/harness.mjs bounded -- node
scripts/docs-check.mjs`) then refused eight relative links to the moved
`decisions.md`: two in the evidence README, two in the handoff, one in the
VER-001 reproduction note, one in this file, and one each in the repository
profile and the workstream's rule 20. Each now links the same anchor at the
record's new home in the target at that commit, the form WO-028's evidence and
the workstream already use for a moved record; no wording changed, and no
filed report or target byte changed. The check reran green before the
instance records were committed.

### The final publish

From this launchpad worktree's root, after `final-review-result pass` at
18:36:41Z, `target-records` (records commit
`47f7a2f02f1374f2e635260c4a69d528e3e909e3`) and the instance records commit
`e643e9970d3103040e18a36ad771186fc8824495`, the exact registered helper ran
plainly, with no environment prefix, pipe or redirect:

```sh
node scripts/worktree.mjs publish WO-027 --target-worktree --branch docs/workspace-says-and-checks-what-is-so --title ":memo: Make the gate tools and reference documents say and check what is so" --body-file docs/final-reviews/WO-027/PR.md
```

The hook admitted it with no refusal or advisory, and the host ran it without a
permission prompt. It exited 0 with one output line: pushed the branch at
`47f7a2f0…` over the draft `47e739ac…` and marked pull request 15 on
`github.com/DylanBWood/DotLn-Angular` ready.

A read-only forge read at 18:40:24Z confirmed `isDraft` false, head
`47f7a2f0…`, the five commits in order (the four reviewed commits and the
records commit), merge state mergeable, and no review, comment or thread. CI
run 42272762780 was queued on that head; the title workflow runs on the opened
and edited events only, so its passing run on the draft stands for the
unchanged title. The CI outcome is recorded in
[the preview record](preview-pr.json) once the run ends. The published body is
PR.md with the helper's Change and Target checks sections.

CI run 42272762780 on the published head ended at 19:01:37Z with the required
`checks` job green at every step and the `visual` job cancelled at 18:55:05Z
with no runner and no step run; the job's own annotation reads that it was not
acquired by a hosted runner after multiple attempts, beside GitHub's capacity
notices for macOS arm64 runners. The same visual suite passed on the draft's
tree an hour earlier, and the reviewed tree differs from it only by the removed
root release-notes file and the filed records. At 19:03:22Z the reviewer ran
`gh run rerun 42272762780 --failed --repo DylanBWood/DotLn-Angular` from the
target worktree; the host ran it without a prompt. The re-run's outcome is in
[the preview record](preview-pr.json).

The records branch publish follows this section's commit, so its result is in
the review session's closing message rather than here.
