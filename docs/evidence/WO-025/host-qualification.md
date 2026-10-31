# WO-025 host qualification

Observed 2026-10-30 during executor work under Claude Code 2.1.314, with the model
claude-opus-5-5 and the effort `max` read from the session (`CLAUDE_EFFORT`, selected
rather than effective). The worktree was resolved before every Git command, and the
lifecycle owned the single writer throughout.

The executor wrote only inside this worktree and the session scratch directory. It
read two places outside the worktree, both read-only: the main checkout's ignored
intake, which is the single copy of the order's cited captures, and the registered
DotLn-Angular clone at `6268de9`. Nothing in either changed. The operator's messages
after the handoff are captured in this worktree's own ignored `docs/intake/notes/`,
which reaches the main checkout at release close.

Outward commands were reads, each naming its repository: `gh release list` and
`gh pr list` for `DylanBWood/DotLn-Angular`, and `gh release list` for
`dylanwoodconsulting/DotLn-Enterprise-Starter`. No push, commit, pull request or
publish happened in this dispatch; the publish invocation, the hook's decision and
the host's belong to the final review, which records them here.

The confinement probe ran from this linked worktree under the bounded wrapper and
reported `inForce: false` with no probe file left, and the host lock acquired and
released twice. `AI-HARNESS-SECURITY.md` records what that means, including that the
local settings file exists only in the main checkout.

Two commands failed as shell errors, and neither was a host refusal: zsh
read an unquoted `======` word and an unquoted `--include=*.ts` pattern as file
expansions, and the commands were rerun quoted.

Three `dotln-worker` review agents ran across seven rounds and stayed read-only, with
no descendant. The gates ran from this worktree with no wait on another lane. On the
final tree of that dispatch the document gate took 19,001 ms and the complete run
14,639 ms, the second of its 3. The dispatch stayed within its bound throughout, so no
acceptance was recorded.

The operator widened the order after the first handoff, in this same session and
with this session's writer. The kit removed the session scratch directory at that
handoff, so later temporary files went to the host scratchpad. The discovery refresh
ran under the bounded wrapper, as did a throwaway clone of the target for the gate
proof, and a first attempt at that proof failed with exit 127 on the removed path
while its pipeline reported 0, so its result was read from its output and the proof
was rerun. A fourth read-only `dotln-worker` read the earlier captures: 4 of the cap
of 20.

The repair after VER-001 ran on 2026-10-31 in a new session under Claude Code 2.1.316,
with the model claude-opus-5-5 and the effort `xhigh` read from `CLAUDE_EFFORT`. It
wrote inside this worktree and the session scratch directory, where a throwaway clone
held the census probe and was removed. Its one outward command was a read,
`git ls-remote` of `main`, which stood at the base, so nothing was integrated. Three
fresh `dotln-worker` reviewers stayed read-only with no descendant, 3 of this session's
cap of 20, and their mutating probes ran in their own throwaway clones.

One run of the census probe gave three false results: BSD `sed` rejected three of its
mutations and emptied the census copy, so those cases exited 1 for the wrong reason.
The output showed `0 paths counted`. The mutations were rewritten, the probe now refuses
an emptied copy, and the whole matrix was rerun before any result was recorded.

The gates ran from this worktree with no wait on another lane. The document gate took
18,945 ms and the complete run 14,543 ms, the first of this dispatch's 3, which stayed
within its bound, so no acceptance was recorded.

The final review ran on 2026-10-31 under Claude Code 2.1.316, with the model
claude-fable-5-1 and the effort `xhigh` read from `CLAUDE_EFFORT`, in this linked
worktree with the lifecycle's writer. It wrote inside this worktree and the DotLn
session scratch, where the intake backup and the probe scripts went. Its outward
commands were reads that named their repository: `git fetch origin` and
`git ls-remote` of this launchpad's `main`, which stood at the base, so the
integration took in nothing, and `gh release list` for `DylanBWood/DotLn-Angular`.
No worker was launched, 0 of the cap of 20, and no background monitor was started.
The probes ran one at a time under the bounded wrapper outside any gate; the one
document gate ran after the last edit of the reports. The publish invocation is
`node scripts/worktree.mjs publish WO-025 --title <the amended step 10's title> --body-file docs/final-reviews/WO-025/PR.md`,
run from this worktree after the result was recorded and the reviewed state
committed; the hook's decision and the host's are reported in the review session's
response, since the helper runs after these bytes are committed.
