# WO-034 host qualification

2026-11-06. The executor runs Codex CLI `0.167.0`, model `gpt-6-astra`,
effort `max`, source `codex-session-readback`. Canonical status selects the
active target order. Physical working-directory and Git-root checks agree
for both registered worktrees, and the executor holds their one writer
reservation.

Target commands run through the launchpad's bounded-command wrapper, with
`NX_DAEMON=false` and `NX_ISOLATE_PLUGINS=false`. The retained check records
identify each command and its exit status. Browser evidence uses fresh
Playwright Chromium contexts serving local production assets. The session
does not use the operator's browser profile or native desktop control.

`npm run release -- prepare --local` reports that this target order records no
launchpad release and changes no files. `npm run publication:check` reports
that no publication editions are declared. The target's declared release
classification remains patch; its reviewed-note draft is at
`docs/final-reviews/WO-034/RELEASE-NOTES.md` in the launchpad.

No publication command has run in this execution. Draft pull-request
publication, workflow review, target-record filing and the final publication
observation belong to the separately dispatched later roles. This record
therefore makes no host-admission claim for an unexecuted publication.

## Draft at verified, 2026-11-06

The verifying session (Claude Code `2.1.319`, `claude-opus-5-5`, effort `max`
from `CLAUDE_EFFORT`), after recording VER-001's pass, ran from the launchpad
root:

`node scripts/worktree.mjs publish WO-034 --target-worktree --draft --branch refactor/movement-presentations --title "refactor: reshape the first movement batch's presentations and tighten the study guards" --body-file docs/evidence/WO-034/ver-001/preview-pr-body.md`

The project hook admitted it and the host ran it without a prompt. The kit's
outward lint refused the first body for a launchpad order identifier; the
reworded body passed. The helper pushed `76f8bcee89abec81f66f3120268a4879de097aef`,
whose tree is the verified `d554030f09eb631952b8b6f1c2396b6938f20398` and whose
parent is the base `d7d842dc4fdbde03099695933a448d9632fa4335`, and opened draft
pull request #16 on `DylanBWood/DotLn-Angular`, leaving HEAD and the index
unchanged.

## Final review, 2026-11-06

Observed under `resume: final review` (dispatched 2026-11-07T02:17:51Z). The host is Claude Code `2.1.319`, model `claude-opus-5-5`, with selected effort `max` read from `CLAUDE_EFFORT`. The reviewer worked from the launchpad order worktree's root. It read and committed in the target with `git -C`, ran `node --test tools/` and `npx eslint --print-config` from the target worktree, and ran its production build, its walkthrough and the per-commit Tools suites through programs in session scratch under the launchpad's bounded wrapper, one process at a time. It read the draft pull request from the forge read-only with `gh pr view`, `gh run list`, `gh run view` and one GraphQL query, each naming `--repo DylanBWood/DotLn-Angular`. The hook refused no call; its only notes were two shell diagnostics for unquoted glob patterns in the reviewer's own commands, which the reviewer reran quoted. The host prompted for none of these calls. No desktop control, operator browser session or worker was used.

The six reviewed commits were made with `git add` of named paths and `git commit -F` from message files in session scratch. The target clone has no installed hooks, so no hook rewrote a staged file. The publish invocations and the hook's and host's decisions on them are recorded below once they run.
