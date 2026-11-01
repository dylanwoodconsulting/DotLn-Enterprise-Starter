# WO-022 host qualification

Observed on 2026-11-01 during executor work under Claude Code 2.1.316, with the model
claude-opus-5-5 and the effort `max` read from the session (`CLAUDE_EFFORT`, the selected value;
effective effort has no readback). The registered launchpad and target worktrees were resolved
before Git operations, and the launchpad lifecycle owned the single writer throughout; no commit was
made on either branch in this dispatch.

## Workers

The ten authors and the two critics ran as Claude `dotln-worker` agents through the host's Agent
tool with no model override, so claude-opus-5-5 at `xhigh` by the type's pin. Each worked in its own
copy of the target under the session's scratch directory, with the target's installed packages
linked in, and the executor copied the deliverables across and stayed the one writer of both
worktrees. A rework, a rewrite and a critic's second pass each continued the same agent by message.
The host's subagent hook observed all twelve: `harness usage` read 12 of 20 at 17:18Z,
exact-observed, with no unresolved admissions and no unlinked children. Vitest in an author's copy
wrote its transform cache through the linked packages into the target's ignored `node_modules`, as
author-01 reported; no tracked file was touched by it.

The three independent reviewers ran under Codex by the operator's direction (D007), through a
launcher in the session's scratch: Codex CLI 0.166.0 with `gpt-6.1-sol` at `max`, a private
`CODEX_HOME` holding only a link to the operator's credentials, the user's configuration ignored,
no MCP servers or memories, a shell environment reduced to the paths the tools need, and the
workspace-write sandbox with network access off. The launcher's probe showed that this sandbox
confines writes but not reads (D007), so each reviewer's brief bounds what it reads to its own copy.
Before the copies were handed over, the launchpad's local-terms check ran over every text file a
reviewer could read, 117 in each copy, and found nothing; a first run that also read the binary
image baselines as text matched bytes inside one PNG, and text files alone were checked from then
on. The three runs started at 17:26Z, took 9, 12 and 12 minutes, exited 0 and left the operator's
Codex configuration unchanged, by the launcher's digest of it before and after. The reviewers are
outside the host's subagent count.

## Bounds

The dispatch bound was not reached and no bound in `docs/control/budgets.json` was changed: at
17:18Z the standing was 2 h 42 min of 8 h 0 min with 0 of 3 complete runs. The fan-out's stop rule
from WO-020's procedure was not declared before the spend and the sum passed its figure; D023
records it, and D028 set the rule and stopped the fan-out on the operator's direction at 18:10Z.

## What the host did

The shell diagnostic reported an unquoted glob once (`--include=*.ts`, which zsh took as a file
pattern and did not run); the command was rerun with the pattern quoted. Two of the executor's own
shell scripts failed and were fixed: a relative `mkdir` run with the target as the working directory
created empty folders there, which were removed with `rmdir` before anything was written into them,
and a zsh loop variable named `path` replaced the command search path, so the reviewer copies were
made again with the variable renamed. The executor's first merge of the rewrite round copied older
files back into the target and was redone by assigned slug before any check ran ([the fan-out](fan-out.md#merging)).

The first full end-to-end run failed four of 142 tests: the catalog's sticky shelf covering the
reading history (D020) and three expectations this order changes (D022). A dry run of
`nx run-many -t lint test build` while the three reviewers were running exited 1 after 90 seconds,
right after the scene library's tests passed, with no failing task and no summary printed; the same
command run again at once passed every target of the twenty projects, so the cause is not known.
Twice a foreground command that ran the whole tools suite with its output redirected into the
session's scratch returned exit 1 and printed nothing, not even the line echoed after it; the same
suite run in the background passed 703 of 703, and that run is the one recorded. The comparison
candidates of the eight rounds were served on two local ports from copies under session scratch, the
critics' renders and the walkthrough from two more, each a copy of a production or mocked build; the
operator was asked each round through the host's own dialog and read the pairs on a private page the
host published for them.

Executed local surfaces: the production app from the target's build, served from a copy; Vitest over
every project, the tools library 81 files and 703 tests on the final tree; the tooling tests (73);
Playwright end to end (144 in the Preflight run, after focused runs of the changed cases) and the
visual suite (50, with the catalog's 1440 baseline regenerated, D022); lint over the four affected projects; `tsc` over the tools library
with its specs and over the end-to-end project; the fixture, component-order, hygiene, translation
and study checks; the bundle check; the study link check; and Prettier over the changed files.

The target gate passed plain at 18:03Z in 53 s and with review at 18:05Z in 76 s, at `c0e5a36`,
after the Preflight line had run as written from 17:56Z to 18:00Z. No live-gate or outside-write
refusal fired in this dispatch.

No pull request, push, commit or publish happened in this dispatch.

## Independent verification and draft publication

On 2026-11-01, the independent Codex continuation filed VER-001 as pass after the production
walkthrough through the Playwright MCP, the passing registered target review and the launchpad
document gate's fourteen passing checks. D030 records the approved writer takeover. D029's
critical native-desktop process error remains recorded and its observations are excluded.

The profile's authorized draft-publication route then opened
[DotLn-Angular pull request #13](https://github.com/DylanBWood/DotLn-Angular/pull/13), on
`feat/eip-concept-studies`, at `28b1a4c486f182b74e94ad4046038eda515d2f37`. The controlled helper
reported the target's HEAD and index unchanged. The target remains over integrated baseline
`c0e5a36008828ec5b742d6e740efff619f3cedbe`; no launchpad branch commit was made.

The first publication attempt was refused by the helper's GitHub body check because the prepared
prose had physical soft wraps. The body was corrected to one physical line per paragraph and the
same command succeeded. This changed only the prepared body, leaving the judged application
unchanged. The host permitted the helper; Codex tool calls have no admission hook, so a hook
admission row is unobserved rather than claimed. Final review owns collecting the draft's threads
and workflow runs into `preview-pr.json` and routing them before acceptance.
