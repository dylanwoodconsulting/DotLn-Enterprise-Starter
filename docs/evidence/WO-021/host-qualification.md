# WO-021 host qualification

Observed on 2026-11-01 during executor work under Claude Code 2.1.316, with the model
claude-fable-5-1 and the effort `max` read from the session (`CLAUDE_EFFORT`, the selected value;
effective effort has no readback). The registered launchpad and target worktrees were resolved
before Git operations, and the launchpad lifecycle owned the single writer throughout; no commit was
made on either branch in this dispatch.

The phase's workers ran as Claude `dotln-worker` agents through the host's Agent tool, with no model
override, so claude-opus-5-5 at `xhigh` by the type's pin (D003). Each author and critic worked in
its own copy of the files a marble study needs under the session's scratch directory, with the
target's installed packages linked in; the executor copied the deliverables across and remained the
one writer of both worktrees. The host's subagent hook observed all twelve: `harness usage` reads
12 of 20, exact-observed, with no unresolved admissions and no unlinked children, which matches the
explicit count in [the fan-out](fan-out.md). A rewrite, a critic's second pass and a reviewer's recheck each continued the same agent by message rather than spawning another. The three independent reviewers bring the count to fifteen, which `harness usage` reads as 15 of 20.

The dispatch bound was not reached and no bound in `docs/control/budgets.json` was changed: at the
last reading before the reviews the standing was 3 h 2 min of 8 h 0 min with 0 of 3 complete runs.
The fan-out's stop figure (D004) was not reached: the twelve workers' figures sum to 3,403,648
tokens, which with the session's own 72,632,980 at that reading is 76,036,628 against 117,733,609.

The host's guards and diagnostics acted as follows. The shell diagnostic reported unquoted glob
patterns twice (`--include=*.ts` and `$S/*.md`, which zsh took as file patterns and did not run);
each command was rerun with the pattern quoted. The outside-write guard refused once, a redirect of
the bundle check's output to `/tmp` in a command that had no need of it (WO-144, WO-168); nothing
was written and the command was rerun into session scratch. The live-gate guard refused once: the
launchpad's `npm run test:docs` had been started before the last document edit and, while it ran,
every write and heredoc was refused as a possible change to a gate input; the run was stopped with
`node scripts/harness.mjs evidence --stop` (no pass supplied) and run again after the last edit. No
other refusal fired. Two background runs of the end-to-end suite failed before testing anything:
the first because the static server's dependent production build exceeded Playwright's two-minute
start timeout on a cold cache, the second within six seconds while a concurrent `nx run-many -t
lint` held the workspace; a warm build and a run with nothing else of Nx's alongside passed 132
tests. The order's Preflight line was run as a script three times: the first run's end-to-end stage
ended seven seconds after Nx printed its header, with no further output and no exit line in the
log, which was not explained; the second failed `nx run-many -t lint test build` on one lint error
the Play landing fix had introduced (an injection in a presentational component, which the
repository forbids) and passed everything else, 132 end-to-end tests included; the third, on the
corrected tree at 06:42Z to 06:45Z, passed every command. A fourth, after the recheck's last fixes,
ran from 06:59:08Z to 07:02:43Z and is the run the README records; the final review corrected this
sentence, which had named the third. The
operator was asked each comparison round through the host's own dialog, with both candidates served
on two local ports from copies under session scratch; the servers were stopped before the result
was recorded.

Executed local surfaces: the production app from the target's build, served from a copy; Vitest
over every project through `nx run-many -t test` (the tools library alone
58 files, 515 tests) and
the tooling tests (71); Playwright end to end (132) and the visual suite (50, with the three new
marbles baselines); lint and build over the twenty projects; the fixture, token, template,
translation, component-order, script-reference, kit, hygiene, shared-type, foundation-type,
catalog, study and bundle checks; the study link check; and Prettier over the changed files.
Throwaway probes, a Playwright probe of the frame line's position after Play, and the screenshot
scripts ran from the session's scratch directories.

No pull request, push, commit or publish happened in this dispatch. The publish invocation, the
hook's decision and the host's belong to the verification and final-review phases, which record
them here as the repository profile requires.

## Verification and publication recovery

The original executor account above describes its own dispatch. On 2026-11-01 the operator
explicitly authorized the implementation commit and pull request. The recovery ran under Codex
CLI 0.166.0, gpt-6.1-sol, selected effort max from the session readback. It created implementation
commit `52ba4c7eef7cc30c1c92f77a9602a5aa02656d85` with subject
`feat: add executable RxJS concept studies`. The target checkout then had empty Git status,
and its product tree remained identical to the passing review gate. No product source changed.
D028, filed in the target at `docs/dotln/evidence/WO-021/decisions.md`, records the critical verifier error and removal of the unauthorized
waiver. VER-002 was filed through `verification-result pass` with eleven met criteria and no waiver.

The first exact publication invocation was:

```sh
node scripts/worktree.mjs publish WO-021 --target-worktree --draft --branch feat/rxjs-concept-studies --title 'feat: add concept studies for the RxJS operators with executable marble examples' --body-file docs/evidence/WO-021/pull-request.md
```

The helper refused it before pushing because the prescribed title's subject was 80 characters
against the outward lint limit of 72. The title was shortened while retaining the order's change,
branch and destination. The retry invocation was:

```sh
node scripts/worktree.mjs publish WO-021 --target-worktree --draft --branch feat/rxjs-concept-studies --title 'feat: add RxJS concept studies with executable marble examples' --body-file docs/evidence/WO-021/pull-request.md
```

These were plain registered-target helper calls from the launchpad root. Codex tool calls have no
Claude hook decision to report; the host executed the calls without a permission prompt or denial.
The first refusal was the helper's public-text validation, not a host permission rejection.

The shortened-title attempt stalled while fetching the target's remote base branch. Its temporary
pack stopped receiving bytes; the fetch subprocess and its HTTPS child were stopped, after which
the helper reported the failed fetch and retained prepared work. No push process was stopped.
The same shortened-title command was then retried without changing repository or account settings.

The retry completed successfully: it pushed draft commit
`e5caa48e8eb405ab0e8fee39cd238acc95a33674` to `feat/rxjs-concept-studies` and opened
[pull request #12](https://github.com/DylanBWood/DotLn-Angular/pull/12). The helper admitted the
registered publication, and the host returned exit 0 without a prompt or denial. GitHub readback
confirmed the request is open, draft, targeting `main`, with the named branch and commit. The
implementation HEAD remained `52ba4c7eef7cc30c1c92f77a9602a5aa02656d85`; both HEAD and the draft
commit have tree `18e79e8409e334c35c7e1d9eec7a97e19dee556a`, and target Git status remained empty.
The order is verified and ready for final review; this dispatch makes no final-review verdict.

## Final review and publication

The final review ran under Claude Code 2.1.316, with the model `claude-opus-5-5` and the effort `max` read from `CLAUDE_EFFORT` (the selected value; effective effort has no readback). It launched no worker. Its target publish was one plain helper call from the launchpad worktree root, after `final-review-result pass`, `target-records`, the product-gate correction and the instance records commit:

```sh
node scripts/worktree.mjs publish WO-021 --target-worktree --branch feat/rxjs-concept-studies --title 'feat: add RxJS concept studies with executable marble examples' --body-file docs/final-reviews/WO-021/PR.md
```

It exited 0 and printed that it pushed `feat/rxjs-concept-studies` at `e97855b442523cc7039c1db6ad21d352a4063c57` over draft `e5caa48e8eb405ab0e8fee39cd238acc95a33674` and marked pull request #12 ready; no term needed confirming. The hook's admission line is not surfaced in a tool result, so its decision is known only by its effect: the call ran with no prompt and no denial, and the ignored publication log records `PullRequestOpened` with the draft it reused. The title is the draft's, since the order's 80-character title cannot pass the outward limit.

Because step 2 changed `dotln.config.json`, the launchpad's code identity differs from `main`'s, so the records publish reads a reviewed product gate. `npm test -- --review` ran once at that identity (seven suites, all fresh, all passing), complete run 1 of the 3 the dispatch allows, and `npm run resume -- correct 10 --set productGate=<its evidence reference>` bound it to the final review.

The live-gate guard refused two read commands while that gate ran, each carrying a `cd` it cannot judge; neither ran, and the reads went through the file tool. The shell diagnostic reported five mistakes in this session's own commands (unquoted patterns and words beginning with `=`), each rerun corrected. No other refusal fired, and no setting or bound was changed.
