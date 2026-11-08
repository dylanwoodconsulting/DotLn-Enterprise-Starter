# WO-023 host qualification

Observed 2026-11-07 during executor work under Claude Code, model `claude-opus-5-5`, with the
selected effort `max` read from the session (`CLAUDE_EFFORT`, selected rather than effective).
Canonical status selected WO-023 in phase `active`; the physical working directory and Git root
agreed for both registered worktrees, the launchpad's `wo-023` and the target's `wo-023`, before any
Git command, and the lifecycle owned the single writer throughout.

Target commands ran from the target worktree as single command lines, with `NX_DAEMON=false` and
`NX_ISOLATE_PLUGINS=false` on every Nx command; the hook refused none. The host guard stopped two
runs of the whole Tools unit suite started as ordinary session commands, at 19:52:46Z and
19:53:18Z, for exceeding the memory budget it gives such a command, which is below the bounded
wrapper's 4 GiB; the launchpad's private harness log holds the incidents. The suite then ran from
the launchpad root under the bounded wrapper, as
`node scripts/harness.mjs bounded -- env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npm --prefix <target worktree> run test -- --projects=tools --skip-nx-cache`,
and exited 0 at a peak of 3,266,131,088 bytes; heavy target suites use that form. The launchpad's one probe of
this execution, criterion 10's cleanup-declaration check, ran under the launchpad's bounded wrapper
([cleanup-declaration.md](cleanup-declaration.md)). Throwaway scripts, the first pair's two
production builds and the author copies lived in the session's DotLn scratch directory; the
candidates were served on local ports 4311 and 4312 and stopped once the operator deferred the
rounds ([D008](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d008)). Browser evidence comes from Playwright Chromium contexts
this session launched; no operator browser profile or desktop control was used.

The fan-out's workers are Claude `dotln-worker` launches through the host's Agent tool, each
writing only in its own copy of the target without Git metadata ([fan-out.md](fan-out.md)). The
harness counts each launch against `subagentCap`.

No pull request, push, commit or publish happened in this execution. The draft publish at verified,
the hook's decision and the host's on it belong to the verifying session, and the final publish to
the final review; each records its own invocation here.

## Final review

Observed 2026-11-07 to 2026-11-08 under Claude Code 2.1.319, model `claude-opus-5-5`, with the
selected effort `max` read from `CLAUDE_EFFORT`. The verifying session opened no draft pull request,
so there is no draft invocation to record. The final review ran its probes and target checks from
the launchpad root, one process at a time under the bounded wrapper with the target worktree as an
argument, and the target review gate in the background as the briefing qualifies it, with the
launchpad named in `DOTLN_LAUNCHPAD`. Two Claude `dotln-worker` reviewers read the target and
neither edited a worktree, ran a gate nor launched an agent. The target's three commits were made
with `git -C` on its worktree; the first commit's three shared files were staged by blob, without
touching the working tree.

The final publish ran plainly from the launchpad root as
`node scripts/worktree.mjs publish WO-023 --target-worktree --branch feat/poeaa-concept-studies --title ":sparkles: Add twenty enterprise application pattern studies, each read against the app's own code" --body-file docs/final-reviews/WO-023/TARGET-PR.md`.
No hook refused it, the host's permissions admitted it, and it printed "Pushed
feat/poeaa-concept-studies at a98d59c7c641a6bb50de2165b1694a4a954f9835 and opened pull request
#17 on github.com/DylanBWood/DotLn-Angular." Read back from the forge at 2026-11-08T00:33Z, the
pull request is open and ready, its head is that records commit, its merge state is clean, and it
has no review or comment. On that head, CI run 42429493412 passed its `checks` job (0 h 9 min) and
its `visual` job (0 h 4 min), and the title workflow, run 42429493287, passed and left the gitmoji
title as written.
