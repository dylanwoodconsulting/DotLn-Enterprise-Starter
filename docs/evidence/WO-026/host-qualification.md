# WO-026 host qualification

Observed 2026-10-31 during executor work under Claude Code 2.1.316, with the model
claude-opus-5-5 and the effort `max` read from the session (`CLAUDE_EFFORT`, selected
rather than effective). The session resolved the worktree and Git root before its first
Git command, and the lifecycle owned the single writer throughout
(`node scripts/harness.mjs writer --show` read this session's actor, alive).

The executor wrote in this worktree, in the registered target worktree
`../DotLn-Angular-wo026` under the role's `target-worktree` grant, and in the DotLn
session scratch. Every authored target write was the Write or Edit tool, a one-off Node
script applying exact replacements, or Prettier over a standing document, and the
target's diff names no other file. `npm ci` and the commands the rule documents name ran
there and wrote only ignored output, with one exception: the scene's regeneration rule
rewrote a tracked fixture until Prettier restored its bytes (D009).

Each command in [the census's tables](census.md#commands-the-rule-documents-name) ran
under `node scripts/harness.mjs bounded -- sh -c "<command>"` from the target worktree,
one at a time, with `NX_DAEMON=false NX_ISOLATE_PLUGINS=false` in the environment, which
are the two the registered gate sets, so that no Nx daemon outlived a probe. The bounded
wrapper's budget was 3 GiB on this host's 48 GiB.

The work the operator directed after the first handoff (D013) continued in this session
with the same writer, and the host admitted its writes to the target worktree while the
order stood at `ready-to-verify`. The DotLn session scratch was cleaned when the transition
recorded, so the scripts of that work ran from Claude Code's session scratchpad.

Outward commands were reads: `git fetch origin` in the target, naming its own origin,
and `curl` of the 19 public URLs the standing documents linked, one of which left with the stubs. No push, commit, pull
request or publish happened in this dispatch; the publish invocation, the hook's
decision and the host's belong to the verification and final-review sessions, which
record them here.

Four commands were refused or failed as shell matters, and none was a host denial. The
kit's guard refused one Bash call because a `cd -` left the relative paths after it
unresolved, and the call was rerun with absolute paths. zsh read an unquoted
`--include=*.ts` as a file pattern, and an unmatched `docs/evidence/WO-026/*` and
`apps/dotln/*.ts` as errors, and those commands were rerun quoted or after the directory
existed.

## Verification and draft publication — 2026-10-31

`resume: verify` ran under Codex CLI 0.166.0, `gpt-6.1-sol`, selected effort `max`,
from the active-thread readback. VER-001, filed in the target at
`docs/dotln/verifications/WO-026/VER-001.md`,
records the independent walkthrough, the 40 serial bounded command probes, the
two census/name/link audits and the unchanged final target bytes. The temporary
browser and development server were stopped. No worker was launched.

`npm run format:check` passed in the launchpad. The document gate passed 14 of 14
fresh tasks with no failures, in 0 h 18 min, including 0 h 17 min waiting for
host lanes held by another checkout. Its monitor advised that the original-parent
unique-identity signal was unavailable and that the other signals remained active;
the gate completed normally. Its three capture-provenance advisories concern
earlier records outside this order.

`verification-result pass` accepted the report, actor, seven met criterion lines
and current gate evidence, recorded VER-001 and released the writer. Canonical
status and the index now show `verified` and verdict `pass`, with `final-review`
as the next legal action. The projection also retains criterion 1 from the
executor's ordinal-2 ledger, which records the verifier walkthrough as pending;
VER-001 supplies that walkthrough and judges criterion 1 met.

The order's step 10, through WO-007 step 15, authorizes the passing verifier to
run this plain command from the launchpad root:

```sh
node scripts/worktree.mjs publish WO-026 --target-worktree --draft --branch docs/quality-pass-reference-documents --title "docs: pass the reference documents for usefulness and currency" --body-file docs/evidence/WO-026/draft-pr-body.md
```

The host executed it and it exited 0, reporting that it pushed the detached draft
commit `4ee26ca5ced01232f211ccc32907e43686f8475c` and opened
[draft pull request 10](https://github.com/DylanBWood/DotLn-Angular/pull/10) in
`DylanBWood/DotLn-Angular`. A separate
`gh pr view 10 --repo DylanBWood/DotLn-Angular` read confirmed the draft flag,
`main` base, `docs/quality-pass-reference-documents` branch and that exact head.
The published body was read, including its generated 54-file change table.
The helper reported unchanged HEAD and index; independent Git readback confirmed
HEAD at `6268de9fc3cae84bf66091c1fbcc30d344411cd2` and an empty staged diff.

Codex tool calls have no project hook admission row here; that observation remains
unavailable. The canonical transition and registered publication helper both
accepted their inputs, and no host refusal or separate approval rejection was
returned. Final review reads this one draft's workflow runs and threads and reuses
its branch and pull request under the cited procedure.

## Final review — 2026-10-31

`resume: final review` ran under Claude Code 2.1.316 with the model `claude-opus-5-5`, which
the operator set as the session model immediately before the dispatch, at effort `max` read
from `CLAUDE_EFFORT` (selected, not effective), in this worktree. The hook recorded the
dispatch once at 18:26:56Z and allocated FINAL-001. No worker was launched, 0 of the cap of
20, and no background monitor was started.

The session wrote in this worktree and the DotLn session scratch, which took the intake
archive and the probe scripts. Its one effect in the target worktree was the two reviewed
commits, made with `git add` by path and `git commit` on `wo-026`; no reset, restore or stash
was used, and the second commit's tree is the verified `7156c5bc…`. Its other outward commands
were reads: `git fetch origin` in both repositories and `gh pr view`, `gh run view`,
`gh run list`, `gh release list` and `gh api` calls. One `gh release list` named a repository
that does not exist and returned not found; nothing rested on it.

The bounded wrapper ran one chain, from the launchpad root and into the target with the
registration's `NX_DAEMON=false` and `NX_ISOLATE_PLUGINS=false`: `npx nx format:check`,
`npm run check:scripts`, `npm run i18n:check` and `npm run catalog:check`, exit 0 with no
tracked byte moved. The review gate did not rerun, because its row binds the tree.

Eight calls were stopped or thinned as shell matters, and none was a host denial. zsh read an
unquoted `===` as a program in four batched commands and an unmatched glob as an error in
three, and the kit's guard refused one call because a `cd -` left a later relative path
unresolved. Each was rerun with quoted words or absolute paths.

`npm run test:docs` passed 14 of 14 on the candidate tree before the result, in 0 h 1 min. Its
first run after `target-records` failed: `docs-check` refused two relative links here to records
that had moved, this file's to VER-001 and the evidence README's to `decisions.md`. I had read
WO-015's surviving link as proof that such a link was safe, and it is a declared exception in
`docs/control/doc-baseline.json`. Both links now name the target path as plain text, which needs
no exception. No filed report or target byte changed, and the gate reran after the repair.

The publish invocations, the hook's decision and the host's are appended below after the result.
