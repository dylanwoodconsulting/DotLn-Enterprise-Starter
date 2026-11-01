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

## The final publish

From this launchpad worktree's root, after `final-review-result pass`, `target-records` (the
target's records commit `0243ea0de2c4cade661ab7e4224ce4f95dcda133` over the reviewed commit
`77dc9e545e5310ea6e20af6da0b445f754960e9e`) and the instance records commit
`75307635d643e8dba2963d78cc43befd52295254`, the registered helper ran from this review's Claude Code
session with the `DOTLN_LAUNCHPAD` prefix the dispatch briefing named (its value was this worktree's
absolute root, written here as `<worktree>`), chained after that commit in one shell line and with its output redirected to a file in the session's scratchpad:

```sh
DOTLN_LAUNCHPAD=<worktree> node scripts/worktree.mjs publish WO-020 --target-worktree --branch feat/movement-concept-studies --title "feat: add concept studies for the movement tools and the study record" --body-file docs/final-reviews/WO-020/PR.md
```

It exited 0. Its one output line: pushed `feat/movement-concept-studies` at `0243ea0d…` over the
draft `a2f0a612…` and marked pull request 11 on `github.com/DylanBWood/DotLn-Angular` ready. The
session's pre-tool hook admitted the call; its admission line is not part of the command's output
and was not surfaced in the tool result. The host ran the command under the session's permission
mode with no refusal.

A read-only forge read at 2026-11-01T00:24:44Z confirmed `isDraft` false, head `0243ea0d…` on
`main`, the force push at 00:24:00Z and the ready event at 00:24:01Z, merge state `BLOCKED` while
the new CI run (41256580793, started 00:24:04Z) was in progress, the title run (41256580797)
passed, and no review, comment or thread. The published body is PR.md's bytes followed by the
helper's Change table and Target checks section; the four record paths in the generated Change
table are the body's only launchpad identifiers, which the kit judges apart from the reviewed
prose. [The preview record](preview-pr.json) holds the read.

A second read at 2026-11-01T00:37:48Z, after waiting on CI, read `checks` (00:24:06Z to 00:37:29Z)
and `visual` (to 00:26:28Z) passed in run 41256580793 and `title` passed in run 41256580797, all
on head `0243ea0d…`, merge state `CLEAN`, and still no review, comment or thread; the preview
record holds both reads. The records branch publish follows this section's commit, so its result is
in the review session's closing message rather than here.
