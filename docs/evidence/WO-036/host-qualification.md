# WO-036 host qualification

2026-11-14 to 2026-11-15. The executor runs Claude Code `2.1.325` with model
`claude-opus-5-5` and effort `max`, read from `CLAUDE_EFFORT`; its source is
`claude-session-readback`. It was dispatched by `resume: next` at 23:11Z on 2026-11-14.
Canonical status selects WO-036 as the active target order on base
`eb9d227483e30164105da077f50673789d1e5c9f`. The physical working directory and Git root agree
for both registered worktrees: the launchpad's on branch `wo-036` and the target's on branch
`wo-036`. The executor holds their one writer reservation.

Target commands ran from the launchpad session as `cd <target worktree> && <command>` or
`git -C <target worktree> …`, one target command per line, with `NX_DAEMON=false` and
`NX_ISOLATE_PLUGINS=false` on the Nx commands that build, test or serve. The hook admitted
those lines; it refused none of the executor's commands. Its notes were shell diagnostics for
unquoted globs and for `timeout`, which macOS lacks; each command was rerun in a working
form. The host denied no call.

The launchpad's host guard stopped twelve of the session's own commands on 2026-11-15,
between 14:47Z and 15:23Z, each at its 3 GiB budget for a command run outside the bounded
wrapper (its incident log, failure kind `memory-budget`, measured footprints 3.22 to 3.91 GB):
eleven runs of the tools project's unit tests at their configured two workers, which peak just
above that budget on their own, and one line that rebuilt the app and ran the visual suite
together, whose visual suite then ran alone and passed. A stopped command ends with exit 1 and
no output, so the cause was not plain at first. The tools tests then ran at one worker, 129
files and 1,116 tests passing. Two diagnostic runs at two workers, started in a process session
of their own before the incident log was read, passed the same 129 files and 1,116 tests; they
stood outside the guard's attribution, and no run was started that way again. The guard refuses
the bounded wrapper in a target worktree, so the configured two-worker run of the tools tests
was left to the gate, under its own per-command budget, where it passed. The incident log holds
no further stop of this session's commands after 15:23Z (read at 17:07Z).

Reviewers ran as `dotln-worker` agents through the host's agent tool, the instance's `default`
worker, on Claude Opus 5.5 at xhigh: three fresh launches for review round 1, three re-tasks
for round 2 and one fresh combined launch for round 3, seven uses of a cap of 40 by the
session's own count. None changed either repository; the host refused their writes to session
scratch, so each returned its report as text, recorded from that text with `npm run worker --
record`. Rounds 1 and 2 were recorded without `--target dotln-angular`, so their records name
the launchpad's working tree as the tree reviewed ([WO-036-D016](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d016)).

The meta critic the operator asked for ([WO-036-D012](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d012)) ran once, from
16:09:10Z to 16:27:29Z, through the Codex CLI 0.169.0, signed in, on GPT-6 Astra at max, read-only
and under the kit's isolated Codex home. Its isolation record: the operator's Codex
configuration and trust table unchanged, the isolated home removed. The one Codex process new
after it had exited by 16:28Z, and a Codex app server older than the dispatch was left alone.
A launch made through node is not one the hook counts, so it is counted here: eight worker uses
in all. The critic's clock ended with the passing review gate at 17:23Z, a minute before a
second critic fell due, so no second one ran; its timer was stopped then.

Browser evidence used fresh Chromium contexts launched from the target's Playwright
installation (1.64.1) against the app's own builds served from `dist/apps/dotln/browser` on
the loopback: the `mocked` build for the design captures and the probes, the production build
for the walkthrough, run last at 17:01Z on the final candidate. The session used neither the
operator's browser sessions nor desktop control. The local server for the captures was
stopped at 17:23Z.

The operator answered two questions through the host's question tool: the design round's
pick ([WO-036-D009](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d009)) and the authority to run past the dispatch
bound, recorded with `npm run resume -- accept-overrun` for `wallClockMs` and `completeRuns`
with no ceiling, citing the ignored capture by its SHA-256. Mid-turn they asked for the meta
critic on GPT-6 Astra (D012), and directed that the executor's reference to a critic's point
before giving them the report be recorded as an error (D014), each cited by its capture's
SHA-256.

`npm run release -- prepare --local` reports that the target order records no release and
that no files changed. No publication command has run in this execution; the draft at
verified, the target records and the final publish belong to the later roles.

## The repair of VER-001

2026-11-15. The repair's executor runs Claude Code `2.1.325` with model `claude-fable-5-2` and
effort `xhigh`, read from `CLAUDE_EFFORT`; its source is `claude-session-readback`. It was
dispatched by `resume: fix` at 18:38:29Z. Canonical status selects WO-036 in the phase
`repairing` with `repair-complete` its one legal next action. The physical working directory
and Git root agree for the launchpad worktree on branch `wo-036`, and the target worktree is on
its branch `wo-036` at `eb9d227`, the target's `main`.

Target commands ran from the launchpad session as `cd <target worktree> && <command>`, with
`NX_DAEMON=false` and `NX_ISOLATE_PLUGINS=false` on the Nx commands, and target files were
changed with the host's edit tool, apart from three passages of the two scene documents
replaced by short Python scripts: a table row of `scene.md` at 19:29Z, and after the review the
separation group's passages in `scene.md` and `scene-rules.md`. After meta critic 3 those two
passages and the comment on the boarded case in `steering.spec.ts` were changed again, with the
edit tool ([WO-036-D026](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d026)). The hook refused none of the executor's
commands. It gave two shell
diagnostics, for an unquoted glob and for an assignment to zsh's reserved `status`, and each
command ran again in a working form. The host denied no call. Two lines were run against the
executor's own rule of one target command a line: a read-only `cd <target> && node -e` that
printed catalog rows at 18:58Z, and lines that follow a target command with `tail` of its
scratch log and the command's exit code, used from 19:26Z so that a check's status is never
hidden by a pipe ([WO-036-D019](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d019), point 3).

Probes ran one at a time under `node scripts/harness.mjs bounded`, from session scratch while
the repair was being chosen and from `docs/evidence/WO-036/repair-1/` once filed. The scratch
probes bundled a copy of the engine taken at 18:42Z, before any repair, whose three changed
files were later compared equal to the blobs of the tree VER-001 judged. The comparison arms
ran Vitest inside scratch copies of the engine's project with the target's `node_modules`
linked beside them; nothing was written to the target for them.

The meta critic ran twice more at the operator's request
([WO-036-D019](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d019), [WO-036-D026](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d026)): launch 2,
from 18:59:52Z for 15 minutes, and launch 3, from 20:14:56Z for 17 minutes, each through the
Codex CLI on GPT-6 Astra with effort max as the launch configured it (the effective effort was
not read back), read-only and under the kit's isolated Codex home, with the launcher the first
session ran, rebuilt in this session's scratch from that session's transcript. Each run's
isolation record: the operator's Codex configuration and trust table unchanged and the
isolated home removed. A launch made through node is not one the hook counts, so it is counted
here: with the review, three worker uses by the executor's own count, where the harness's
usage report at 20:41:48Z counts two launches.

The repair's one review ran through the kit's helper, `npm run worker -- review --kind
combined --host codex --order WO-036 --target dotln-angular --since <the tree VER-001 judged>`,
on the instance's default Codex worker, GPT-6.1 Sol with effort max pinned on the command line
(the effective effort was not read back), from 19:52:09Z to 20:01:56Z, read-only in the target
worktree; the helper filed its report in the reviews lane under `repair-1/` and counts its own
launch. Its dry run was read first, and its receipt after, for the checkout, the base and the
tree read ([WO-036-D025](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d025)). The reviewer's sandbox refused its own
probes, so it judged by reading; it was launched before the candidate's results were filed and
could not read the results directory ([WO-036-D026](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d026), point 4).

The session used no browser of its own; the page-level evidence of the repair is the browser
case added to the target's `scene.spec.ts`, which the review gate runs. It used neither the
operator's browser sessions nor desktop control. No publication command has run.

One read went against the launchpad's rule that nothing under `docs/control/local/` is printed:
shortly after 19:48:51Z, checking a time it had written from memory, the executor read the
follow-up queue's event log there and printed the number, time and kind of its own five queue
events. The session's transcript, searched for its own calls naming that directory, shows one
more touch against the rule, a listing of its first five names at 19:31:17Z, and one read that
is the launcher's to make, the review's own report at 20:02:37Z. The queue's own projection,
`npm run adjacent -- list`, is the reading to use, and it carries no event times; the times now
stand in [WO-036-D023](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d023).

The repair's review gate, `node scripts/target-gate.mjs WO-036 --review`, ran twice from the
launchpad root in the background and passed every declared command each time: from 20:26:22Z
to 20:29:10Z on the tree the Preflight ran on, and from 20:43:29Z to 20:46:17Z on the
candidate, after the correction of [WO-036-D026](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d026). Of the first run: `node scripts/harness.mjs evidence --wait` reported no run to wait on for it and exited
2, so the gate was awaited through its own task's completion; nothing was written outside the
order's evidence directory while it ran. Meta critic 3 had been launched at 20:14:56Z, before
the gate, and was still running through it. The critic's clock ended with the passing gate run
at 20:29:10Z, and the timer for a fourth launch was stopped then. The second run was awaited
the same way, and while it ran the executor wrote only D026 and `repair-1/variants.md`.

After critic 3's report two more forms of the rule were measured in session scratch, each
probe under the bounded wrapper, between 20:34:10Z and 20:40:11Z; neither was taken and the
target's code was not changed for them ([repair-1/variants.md](repair-1/variants.md)).

The document gate, `DOTLN_LAUNCHPAD=<this worktree> node scripts/test-runner.mjs --document`,
ran once in the background from 20:52:31Z to 20:53:33Z and passed 15 of 15 tasks, its
formatting task among them; nothing else of the session ran and nothing was written while it
did. After it the executor wrote only inside this order's evidence directory.

## The final review

2026-11-15. The reviewer runs Claude Code `2.1.325` with model `claude-fable-5-2` and effort
`xhigh`, read from `CLAUDE_EFFORT`; its source is `claude-session-readback`. The session's hook
recorded the `resume: final review` dispatch at 21:44:01Z and allocated FINAL-001. Canonical
status selects WO-036 in the phase `final-review` with `final-review-result` its one legal next
action. The physical working directory and Git root agree for the launchpad worktree on branch
`wo-036`; the target worktree was on its branch `wo-036` at `eb9d227` with the candidate
uncommitted, and its tree read through a temporary index was
`78254cc323844f197c04f8d1af6ae2020e655150`.

Both remotes were fetched at entry: the target's `origin/main` was `eb9d227` and the launchpad's
`562fb91`, each its worktree's `HEAD`, and `node scripts/worktree.mjs integrate WO-036` took in
nothing.

Target commands ran from the launchpad session as `cd <target worktree> && <command>` or `git -C
<target worktree> …`, with `NX_DAEMON=false` and `NX_ISOLATE_PLUGINS=false` on the Nx commands.
The hook refused none of them and the host denied no call. The hook gave three shell
diagnostics, two for unquoted patterns that matched no file and one for an unquoted word of
equals signs, and each line ran again in a working form. One compound line ended inside this
order's results directory and left the session's working directory there; the next command
returned it to the worktree root, and nothing was written from the wrong place. One of the
reviewer's lines piped a target command through `tail`, the production build for the session on
the page, which hides the command's own exit code; the build's result stands on the gate's
build row and the bundle check, each read with its own exit code.

Probes ran one at a time under `node scripts/harness.mjs bounded` from this evidence directory,
against the target worktree and against an export of the base engine in session scratch
(`git archive eb9d227`); nothing was written to the target for them. No worker was launched or
re-tasked: zero uses of a cap of 40.

The session had no Playwright MCP, so the Objective's session was driven by a script
([final-001-walkthrough.mjs](final-001-walkthrough.mjs)) in a Chromium it launched from the
target's Playwright installation, against the production build served from
`dist/apps/dotln/browser` by a static server in session scratch on the loopback, started at
21:55:15Z and stopped at 21:59:40Z by the session's journal. It used neither the operator's
browser sessions nor desktop control.

The reviewed tree was committed in the target as four commits with `git add <paths>` and `git
commit -F <message file>`, ending at `a96a60cc3f2c54e5da5c9b615e9cf00a49916a0a`, whose tree is
the candidate's. Before them the reviewer asked the kit for the draft the verified phase had not
opened:

```sh
node scripts/worktree.mjs publish WO-036 --target-worktree --draft --branch feat/scene-walls-and-ways --title ":sparkles: Add walls, obstacles and pathfinding to the soldier scene" --body-file docs/final-reviews/WO-036/TARGET-PR.md
```

The hook admitted the line and the kit refused it: `error: target publish refused: the draft
form is legal at verified with a passing verification; WO-036 is final-review`
([WO-036-D029](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d029)).

The review gate, `node scripts/target-gate.mjs WO-036 --review`, ran once from the launchpad
root in the background, from 22:08:25Z to 22:10:45Z by the session's journal, and passed every
declared command at the reviewed commit; it was awaited through the host's completion signal,
and while it ran the reviewer wrote only in this order's evidence and final-review directories.
After it the engine's suite, the scene feature's and scene store's suites and the bundle check
ran one at a time in the target worktree.
