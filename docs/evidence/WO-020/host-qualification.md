# WO-020 host qualification

Observed 2026-10-31 during executor work under Claude Code 2.1.316, with the model claude-opus-5-5
and the effort `max` read from the session (`CLAUDE_EFFORT`, selected rather than effective). The
registered launchpad and target worktrees were resolved before Git operations, and the launchpad
lifecycle owned the single writer throughout.

The operator directed that this phase's workers run on Codex (D003). From this Claude Code root each
ran as one `codex exec` under a session-scratch launcher: `gpt-6.1-sol` at effort `max`, a private
Codex home holding only a link to the operator's credentials, the user's configuration ignored, no
MCP or memories, an empty shell environment and a read-confined filesystem. Probes showed `.ssh`, the
operator's shell profile and their Codex configuration refused, and the configuration's digest
unchanged across every run. Each author worked in a copy of the target with no Git metadata, so no
worker wrote to either repository. These workers are outside the harness's subagent hook, so its
reading of 0 of 20 is not a count of them: the explicit count is in [the fan-out](fan-out.md).

The host's guards acted once on a write to `/tmp`, in a command that had no need of it; nothing was
written and the command was rerun without it. The dispatch bound was not reached: the operator lifted
only the fan-out's token stop (D012), and no bound in `docs/control/budgets.json` was changed.

Executed local surfaces: the optimized mocked and production apps, Storybook through the browser and
visual suites, Vitest, Playwright, and the fixture, token, catalog, study, translation, bundle and
template checks. Throwaway probes ran from the session's scratch directories. The operator was asked
each comparison round through the host's own dialog, with both candidates served on local ports that
were stopped afterwards.

No pull request, push, commit or publish happened in this dispatch. The publish invocation, the
hook's decision and the host's belong to the verification and final-review phases, which record them
here as the repository profile requires.

## The verification's draft publish, as the final review found it

The verifying Codex session opened the draft pull request after `verification-result pass`, which is
the repository profile's route, but filed no record of the call: VER-001 was filed at 23:38:31Z,
before the publish, and this record was the executor's. What the forge and the local object store
show: a commit `a2f0a612a9bcb2473630ba43266ec39cee378173` with parent `eb9eeec8…` and tree
`4e6b3e4b93d6c5226e31f2e819006d0723911dbf`, authored at 2026-10-31T23:38:46Z with the subject
`feat: add concept studies for the movement tools and the study record`, on
`feat/movement-concept-studies` at `github.com/DylanBWood/DotLn-Angular`; pull request 11, opened at
23:39:50Z as a draft, with the title workflow's gitmoji prefix and the bytes of
[PULL-REQUEST.md](PULL-REQUEST.md) as its body above the helper's Change table. The target
worktree's HEAD and index did not move, which is the helper's `--draft` behaviour. The exact
invocation, the hook's decision and the host's decision were not filed and are unknown to this
review; the tree it pushed is the verified tree, and [the preview record](preview-pr.json) carries
what this review read back.
