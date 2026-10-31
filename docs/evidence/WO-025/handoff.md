# WO-025 executor handoff

Dispatch: `resume: fix`, 2026-10-31, under Claude Code, repairing
[VER-001](../../verifications/WO-025/VER-001.md). The worktree is on `wo-025` with this
order's work uncommitted; no commit, push, pull request or publication occurred.

VER-001 failed criterion 2 alone: the census counted three reports that did not exist.
The repair holds one rule (D020): every path the census counts names a file that
exists and Git lists, and every Markdown path Git lists is counted once. A later report
sits in its own table and counts from the moment Git lists its file, so the next
verification and the final review file theirs without writing the census. The case VER-001 did not quote is
its own successor: with `VER-002.md` filed the assertion exits 0, and with an unlisted
`VER-003.md` it exits 1. F2's repeated sentence is gone, VER-001's own row no longer
calls it a later report, and `FUP-3436884063e324de` is settled.

The repair changed this order's evidence, the follow-up register, the generated indexes
and the control log, and no standing document, so the documents VER-001 walked through
are the ones it read. The judgments below are against the order as amended and this
tree.

The outcome matches the order's goal. Every standing document of the census was
passed, the profile is in the shape the operator chose and current to `6268de9` and
`DotLn Angular v0.6.0`, the launchpad's own README is at `docs/launchpad-readme.md`,
and no existing operator direction or house rule changed in substance. The gaps the
first report listed are closed. Two rows stay deferred, each waiting on something outside
this order: `FUP-9958a2830a81ad0c`, on the upstream kit no longer causing merge issues
with the root README, and `FUP-f8216ece83a3e7a6`, on WO-026, because a self order
cannot write the target.

**Criterion 1:** met — [VER-001](../../verifications/WO-025/VER-001.md#walkthrough) carries the dated `## Walkthrough`, every step completed and the verifier states what each opened document told them; this repair changed none of those documents, and a fresh verification judges it again.

**Criterion 2:** met — [census.md](census.md) lists the 278 files of this tree, 270 tracked and 8 untracked, and the 4 later reports in their own table, each with a kind the Design names and its reason, and all 26 standing documents with `changed` or `unchanged` and their unresolved facts. The [script](README.md#the-census-equals-the-tree) exited 0 with no problem line, and its cases show it stays exact as those reports are filed and at the committed tree.

**Criterion 3:** met — the profile opens with the table naming the class, base branch, application, evidence root, workstream, last reviewed target source and `DotLn Angular v0.6.0`; `grep -c "^## "` prints 7, in the Design's order; `grep -c '\*\*Checked:\*\*'` prints 0; and the link check prints `26 documents, 0 unresolved`.

**Criterion 4:** met — as amended: the digest multiset goes from 37 tokens to 47 and the date multiset from 47 to 57, the census records both lists and the diff, and the diff holds only the ten directions the census lists. `node scripts/docs-check.mjs` reports no operator-word advisory for the record; its three advisories are on older records and were there at base.

**Criterion 5:** met — `grep -c "^[0-9]*\. \*\*" docs/workstreams/WS-001-dotln-angular.md` prints 26 and the numbers read 1 to 26, asserted in the census. It printed 33 at base because the seven taxonomy kinds shared the shape, which D002 discloses. The `dotln-workstream` block's SHA-256 is `e3b1c8d2486caebf233f28a4baba0763c09832bef1e86ba836598754a3f08f05` at base and now.

**Criterion 6:** met — as amended: `node scripts/docs-check.mjs` passes with no ceiling advisory and no document trimmed, `npm run publication:check` exits 0, `node scripts/harness.mjs check` reports 35 surfaces at their pinned bytes, and the diff names no excluded path and no work order but this one. `README.md` differs from the base by the one release claim line, and this order's file by its release label and the amendment of 2026-10-30.

**Criterion 7:** met — `npm run work-orders -- index --check` reports both pages current, and `npm run plan -- check` reports `advisories: []` with one workspace update, the `authorized-execution-amendment` bound to D013.

**Criterion 8:** met — `npm run test:docs` passed 14 of 14 and then `npm test -- --review` passed 7 of 7 at this tree, with the rest of the Preflight line run first: `docs-check`, `publication:check`, `harness check`, `index --check` and `plan check` each exited 0. The document gate ran once more after this file's last edit.

**Criterion 9:** met — the registration's `gate` holds `typecheck` in the plain and review selections. In a throwaway clone of the target at `6268de9` the command exited 0, and exited 2 with `TS2322` after a mistyped line was added to an e2e spec, as the [evidence README](README.md#the-registered-gates-new-command) records and VER-001 reproduced.

**Criterion 10:** met — `docs/launchpad-readme.md` opens with a table of facts and seven task-named sections, says how to run the launchpad and its gates, where its documents are and how a change lands, carries no release block, and its links are among the 26 documents' with 0 unresolved.

self-review: found 43; fixed 42; recorded 1

Those count this repair's distinct findings across five rounds from one set of three fresh `dotln-worker` agents, which stayed read-only and spawned nothing, 3 of the cap of 20. The [self-review](self-review.md#the-repair-after-ver-001) gives each finding's disposition and says how the later rounds narrowed. The one recorded is `meta.json`, a meter snapshot a later phase refreshes. The execution's own reviews found 83, fixed 81 and recorded 2.

**Actor attestation:** {"harness":"claude-code","harnessVersion":"2.1.316","model":"claude-opus-5-5","effort":"xhigh","source":"claude-session-readback"}

**Process cost:** entry 42636 tokens; handoff 10774496 tokens at 2026-10-31T10:40:13Z; source claude-transcript-message-usage; scope dispatch. Standing about 1 h 2 min of 8 h 0 min and 1 of 3 complete runs. The final count stays in the ignored receipt and the response.
