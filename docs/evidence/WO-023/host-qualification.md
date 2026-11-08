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
