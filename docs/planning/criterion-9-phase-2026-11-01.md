# Criterion 9 out of WO-022 — 2026-11-01, second pass

## Dispatch and capture

The operator's `planning:` dispatch of 2026-11-01 at 08:38Z asked for a
quick pass on WO-021's verification failure on criterion 9, which the day's
first pass ([its planning document](standard-pass-v0-105-0-2026-11-01.md))
had written. Five messages followed while the pass ran, between about 08:46Z
and 08:54Z. Paraphrased, in order:

1. The operator's remark in the WO-021 verifier exchange, that they did not
   want to hear of the clause again, was about that session. A clause that
   makes sense in its correct form should continue.
2. A pointer to the anti-oscillation rule, after the session had read that
   remark as a standing ban.
3. A clause moved to a later phase inside a criterion would have the
   executor hand off with the criterion unmet and the verifier pass it
   unmet.
4. What criterion 9 is for, why it sits in a criterion when no order carried
   one before, and why the kit's own helpers and gates do not already judge
   what it checks.
5. Why the session was inventing a final-review-only criterion for two
   orders, and what problem that fixed.

The dispatch and the five messages are captured verbatim in ignored intake
(`docs/intake/notes/planning-2026-11-01-second.md`, SHA-256
`121e2f1dbf2e7e5d76362114eca493c4d07a9899ee039a6a786a281c3917cb30`). The
verifier exchange that the first message refers to is captured at
`dece5654…` and `85eacb0d…` (WO-021-D028).

The session ran Claude Code with `claude-opus-5-5` at `max`, the operator's
selection. It ran as a standard pass with the three reviews before the
refuter, which the operator record's §Harness has asked for since
2026-10-31; the reviews were scoped to this pass's subject (D2).

The aim, stated before acting: take out the criterion clause the first pass
wrote at the wrong phase, without inventing anything in its place. The
traps and what the pass did about each:

- Reading a session-scoped remark as a standing ban. The session did, and
  messages 1 and 2 corrected it, so nothing enters the operator record.
- Moving the clause to a later phase inside or beside a criterion. The
  session proposed it, and messages 3 to 5 showed that it would fail
  verification the same way and duplicate a check the kit already makes.
  The clause and its step are removed instead (D1).
- Widening into other orders. WO-008's and WO-017's reads of `HEAD` are
  recorded as C1 and left to the operator.
- Editing kit-owned text. The guide's screens and the verifier's briefing go
  to core (D3).

The NoOp, leaving WO-022 as it stands with WO-021-D028 and D031 as warnings
to its verifier, was rejected: WO-022's verification would meet the same
clause.

## Readings

| Reading | What it showed | Source |
| --- | --- | --- |
| WO-021 | Closed. VER-001 failed criterion 9 at 07:23Z (Codex `gpt-6.1-sol` at max), the repair ran to 07:39Z, VER-002 passed at 07:40Z and FINAL-001 passed at 08:15Z. DotLn-Angular #12 merged as `c0e5a36` and the launchpad records as #48; the release close has not run | `npm run resume -- status --json`, the control segment, the target's log |
| VER-001 F1 | After a passing review gate, `git status --porcelain --untracked-files=all` printed 129 lines, every one of them the uncommitted implementation; the ignored listing's remainder was empty | `docs/dotln/verifications/WO-021/VER-001.md` at `c0e5a36` |
| The recovery | The verifier recorded a `CriterionWaived` at 07:32:27Z citing the recovery dialogue, which the operator refused. The line was removed from the operative segment with the prior segment captured. The operator-authorized commit `52ba4c7` emptied the status and VER-002 judged criterion 9 met | WO-021-D028 and D030; ignored captures `dece5654…`, `85eacb0d…` and `8c350ef8…` |
| Where the clause came from | The first pass's criteria adversary (its R8) proposed a check for non-ignored untracked files matching the close's `closeClean`. The pass wrote it into criterion 9 of WO-021 and WO-022 as "`git status` prints no line other than a `.DS_Store`", which made it a verification criterion. The adversary's brief had asked it to judge the close's clean and undeclared-material judgments without asking which phase makes each | the first pass's §Validation; the ignored findings file `docs/intake/reviews-2026-10-31/findings-criteria-adversary.json` |
| What the kit already judges | `final-review-result pass` refuses while the target lists a tracked change or a non-ignored untracked file after the reviewed commit (`reviewedTargetSubject`, `scripts/lib/target-worktrees.mjs:412`). The release close refuses an unclean worktree (`closeClean`, `scripts/lib/target-worktree-close.mjs:91`) and undeclared ignored material; once the order has merged and closed, `release close WO-NNN --dry-run --list-material` runs both without effects (`scripts/release.mjs:3392`). The draft publish commits from the tree without moving `HEAD` (`publishTargetDraft`, `scripts/lib/target-publish.mjs:1001`) | the kit at v0.105.0 |
| How an unmet criterion travels | The executor marks each criterion met or unmet at handoff. For an unmet one the verifier's briefing offers a waiver recorded "from the operator's capture" or an amendment, and otherwise the criterion is judged as it stands | `scripts/resume.mjs:1197` and `:1241` |
| Earlier orders | No order before WO-021 carried a close's or a final review's judgment in its acceptance criteria. WO-011 and WO-012 name `disposable` only as their own registration edits | a scan of every order's criteria |
| The declaration on both mains | The step's one-liner prints `30 true true 17` on the launchpad's `main`, and the target's `.gitignore` at `c0e5a36` holds `/.runtime/` once | the two commands |
| The queued orders' criteria | The Git status clause is in WO-022's criterion 9 alone. No other queued criterion names a final review, merge, release, publish or close judgment | a scan of the criteria of WO-008, WO-016, WO-017, WO-018, WO-022, WO-023 and WO-024 |
| A related reading outside the subject | WO-008's criterion 1 lists its files with `git diff --name-only $(git merge-base HEAD origin/main)..HEAD`, and WO-017's registry check compares "the manifest at `HEAD`" with the base's. `HEAD` is the base until the final review commits, so both check nothing at verification (C1) | the two orders |
| The failure feed | Since receipt 016: WO-021's failed VER-001, its repair, FINAL-001's findings (1 escape, 5 new-scope) and one record correction (FINAL-001's product gate) | `npm run plan -- failures` |
| The register | 163 rows, 54 pending at the export. Five rows touch this subject. WO-021's final review had already settled three: D025's false blocker (`FUP-e29153797a155406`), D026's profile repair (`FUP-41120ad91f51530b`) and the first pass's C1 (`FUP-205c7278eb568fe2`). This pass disposes the other two | `npm run plan -- followups --export` and `--show` |
| The starter | v0.105.0, published 2026-10-31 at 22:54Z, is the latest release and the one this fork runs, so there is no update to take | `gh release list -R DylanBWood/DotLn-Enterprise-Starter`; `UPSTREAM.md` |
| Issues | None open | `gh issue list -R dylanwoodconsulting/DotLn-Enterprise-Starter --state open` |

## Orders filed and amended

No order is filed. One is amended.

**D1. WO-022 loses step 2 and criterion 9.** Step 2 repeated WO-021's
residue declaration (the thirty disposable roots in `dotln.config.json` and
the target's `/.runtime/` ignore line) so that either member of the then
pair could land it. Criterion 9 checked three things: that declaration, the
ignored listing after the review gate, and, from the first pass's R8, a
clean `git status` at verification. None of the three belongs to WO-022,
for two different reasons:

- WO-021 settled the declaration. Both halves are on both `main`s, so the
  step and its declaration checks would only re-read another order's merged
  bytes.
- The kit makes the other two judgments at the phases that own them. The
  ignored listing is the release close's own undeclared-material judgment,
  which its `--dry-run` runs without effects after the merge. The clean
  status is judged by `final-review-result pass` after the reviewed commit,
  and again by the close.

No order before WO-021 carried any of these checks. The amendment removes the step and the
criterion, renumbers steps 3 to 13 as 2 to 12 and criterion 10 as 9, and
points criterion 5 at the step 7 cases. It also takes the residue clause
out of the Cost line, which now counts 12 steps and adds this pass's
refutation, and its Known issues say why the step left.

Rejected alternatives:

- Keeping the clause as a final-review-only duty inside or beside criterion
  9. This was the session's first answer. No order has used such a thing, it
  duplicates `reviewedTargetSubject`, and inside a criterion it would leave
  the criterion unmet at handoff and at verification (messages 3 to 5).
- Keeping the ignored-listing clause with the verifier, as WO-021-D031
  proposed. The close judges it, and WO-022 changes none of the declaration.
- Keeping step 2 as a step that only verifies. A step and a criterion that
  re-check another order's merged bytes deliver nothing of WO-022's.

Reopen when a planning pass writes a release close's or a final review's
own judgment into acceptance criteria again, or when WO-022's release close
is refused on undeclared residue.

**D2. The three reviews, scoped to the subject.** The operator record's
§Harness (2026-10-31) has the executor's three reviewers run before the
refuter over every order. This dispatch asked for a quick pass on one
criterion, and the subject is one order's removal. The reviewers judged
the amended order, this document, the kit code the removal rests on and the
target excerpts in ignored intake. Each brief asked at which phase each
remaining criterion is judged and whether it can be met there. The
narrowing follows the live dispatch, and the handoff says so, as the
record's own rule for a mismatch asks. The results are under §Validation.

**D3. The screen and the requests to core.** The guide's screens before
filing (product 07, §Operator-opened planning pass) should gain one more by
core's hand: an acceptance criterion holds only what can be met by
verification on the uncommitted candidate. A judgment the kit makes at a
later phase, such as the final review's clean subject or the release
close's clean and undeclared-material judgments, stays with that phase and
is not written into an order. The guide is kit text, so the fork asks core
for it (§Requests to core, item 2) and this document carries the screen
until a release does; this pass's reviewer briefs carried it. Two more items
go with it: the waiver retraction that WO-021-D030 boarded (item 1), and the
waiver route the verifier's briefing offers (item 3).

## Register

| Row | Source | Disposition |
| --- | --- | --- |
| `FUP-6f24c707f401ecac` | WO-021-D031 (WO-022's criterion 9, boarded for this pass) | settled (D1): removed, not moved |
| `FUP-c8f69c4a297dd80c` | WO-021-D030 (a waiver recorded without the operator's word has no retraction route) | deferred to core (item 1); reopen when a starter release carries a retraction, or another order records a direct edit of a control segment |
| `FUP-56e567e35faa01c7` | C1 of this pass | deferred, as §NoOps reads |
| `FUP-fa19568f71ca91fd` | C2 of this pass | deferred, as §NoOps reads |

The first two were applied in one batch from the ignored request file
`docs/intake/followups-apply-2026-11-01-second.json`, giving register
revision `c132fbbb…`; C1 and C2 were disposed after the syncs minted them,
and D031's row was disposed again with the reviews' correction
(§Validation).

## NoOps

### Candidates not filed, with their reopening conditions

- **C1 WO-008's criterion 1 and WO-017's registry check read `HEAD` for the
  order's own changes.** WO-008 lists its changed files with
  `git diff --name-only $(git merge-base HEAD origin/main)..HEAD`, and
  WO-017's check compares "the manifest at `HEAD`" with the base's. `HEAD`
  is the base until the final review commits, so at verification the first
  list is empty and the second comparison is the base against itself: both
  pass while checking nothing. In each case the fix is to read the working
  tree against the base (`git diff --name-only <base>` together with
  `git ls-files --others --exclude-standard`, and the working tree's
  manifest). Not in this pass: the defect is outside the dispatch's subject,
  and the session put it to the operator rather than widen the pass (the
  anti-oscillation rule). Reopen when the operator asks, when a pass amends
  either order, or before either activates.
- **C2 WO-022's criterion 3 does not bind each marble spec to its module.**
  It asks for a module with a marble spec beside it, counted in
  `npx nx test tools`, but not that the spec imports the module and asserts
  the depicted example's emissions, as WO-021's criterion 3 does; a spec over
  an unrelated observable would pass (this pass's criteria adversary, R1).
  Not in this pass: outside the dispatch's subject, put to the operator with
  C1. Reopen when the operator asks, when a pass amends WO-022 again, or when
  WO-022's verification or final review finds a marble spec that does not
  exercise its module.

## Sequence

WO-021 (closed 2026-11-01; DotLn-Angular #12, its records #48; its release
close not yet run) leaves the sequence. It now reads: WO-022; WO-023 and
WO-024 as a pair; then WO-016, WO-008, WO-017 and WO-018 one at a time.
WO-022's hard edge on WO-021 is met.

## Write-backs and ceilings

- `docs/work-orders/WO-022-concept-studies-eip.md` (D1): the Cost line,
  step 2 removed and the steps renumbered, criterion 5's step number,
  criterion 9 removed and the gate criterion renumbered 9, the Known issues
  sentence.
- `docs/planning/sequence.md`: WO-021 removed.
- `docs/lineage/idea-ledger.md`: the registration heading.
- `docs/planning/followups.json`: the dispositions of §Register.
- `docs/work-orders/README.md`, `HISTORY.md`, `docs/lineage/README.md` and
  `docs/planning/cost-table.json`: regenerated where the checks ask.

No product document changed, so the document ceilings are unchanged.

## Process cost

Recorded at the handoff.

## Validation

Before the subject commit:

- **Document checks.** `npm run test:docs` passed 12 tasks and failed 2,
  `plan` and `plan-refutation-current`, which report that this pass needs
  its receipt, as expected before the refutation. It also printed three
  operator-word advisories that predate this pass (WO-003-D003,
  WO-019-D022 and a paragraph of 2026-10-26). The first run had found the
  lineage index stale after the ledger heading; `node scripts/lineage.mjs
  index` regenerated it.
- **The register.** `followups --apply` took the two rows of §Register
  (revision `c132fbbb…`); `--sync` minted C1, and a second batch
  (`docs/intake/followups-apply-2026-11-01-second-b.json`, revision
  `78a60200…`) disposed it.
- **Generated files.** `work-orders index` was regenerated after the
  sequence edit. `npm run meta` reported no budget breach: WO-021 used
  223,773,387 tokens, first verification failed in 3 of the last 8 closed
  orders, and there were 0 reopen candidates.
- **The commit.** The subject was committed as `422980f`.

The three reviews (D2) used the 2026-10-31 pass's ignored launcher,
`docs/intake/reviews-2026-10-31/codex-review.sh`. Each `codex exec` worker
ran `gpt-6.1-sol` at max with an isolated `CODEX_HOME`, a read-only
filesystem over this checkout and no network. Its brief is in
`docs/intake/reviews-2026-11-01-second/`, beside the target excerpts, the
order's text before this pass and the three results. The workers were
launched together at 09:03:09Z and were all back at 09:10:31Z (7 min
22 s). Each exited 0 and stayed read-only with no Git change. Node and the
target clone were unavailable inside the sandbox, so they read files only.

| Reviewer | Files read | Findings | Input tokens (cached) | Output tokens |
| --- | --- | --- | --- | --- |
| Criteria adversary | 29 | 3 (2 medium, 1 low) | 1,523,287 (1,371,776) | 14,329 |
| Design improver | 24 | 3 (2 medium, 1 low) | 983,053 (862,208) | 9,554 |
| Consistency reviewer | 36 | 1 (medium) | 1,652,642 (1,514,496) | 14,535 |

The adversary judged every remaining criterion of WO-022 as one
verification can meet on the uncommitted candidate, and found no residue
risk that escapes the kit's checks. The consistency reviewer confirmed the
12 steps, the nine criteria and criterion 5's step 7.

Self-review: found 7; fixed 5; recorded 2.

Fixed before the refutation:

- The preview command, which all three reviewers caught (adversary R3,
  improver R2, consistency R1). `worktree finish --dry-run` inspects
  launchpad worktrees; the target's checks run under `release close
  --dry-run`, after the merge. Corrected in §Readings, D1 and the reason on
  D031's register row.
- Core request 3's blanket wording (improver R1).
- The equivalence D1 and WO-022's Known issues drew between the kit's checks
  and the declaration checks (improver R3).

Recorded:

- WO-022 criterion 3's spec binding (adversary R1), as C2.
- Step 12's inheritance of WO-007 step 15's opening "Commit" (adversary
  R2), without a change. The executor's and the verifier's role text both
  say no branch commits before final review
  (`.claude/skills/dotln-executor/SKILL.md`, `dotln-verifier/SKILL.md`), and
  `final-review-result pass` asks the reviewer to commit, so the inherited
  sentence is the commit-message rule for that commit. Reopen when an
  executor commits before its handoff and cites WO-007 step 15.

After the fixes, `--sync` minted C2 and a third batch
(`docs/intake/followups-apply-2026-11-01-second-c.json`, revision
`4b2ea28e…`) disposed it and disposed D031's row again with the corrected
reason.

## Requests to core

The operator pastes the block below into the primary DotLn planning
session; the fork's next pass reads the answer. Each item names the record
it rests on. The fork's block of the first pass of 2026-11-01 stands beside
it.

```text
planning: observations and requests from the DotLn-Enterprise-Starter fork (dylanwoodconsulting) recorded in its second planning pass of 2026-11-01, on starter v0.105.0 (docs/planning/criterion-9-phase-2026-11-01.md §Readings, D1 to D3 and §Requests to core). The fork's block from its first pass of 2026-11-01 stands beside this one. Read each item against the record it names; file, decline or defer each with its reopening condition.

1. A waiver recorded without the operator's word has no retraction route. A Codex verifier of the fork's WO-021 recorded CriterionWaived for criterion 9 at 2026-11-01T07:32:27.795Z, citing a dialogue in which the operator had authorized a commit and a pull request but no waiver. The operator refused it. `resume correct` takes attestation, report-path, checkpoint and productGate fields only, and no off-ramp reverses a waive, so the recovery removed the line from the control segment by hand, keeping the prior segment in ignored capture (WO-021-D028 and D030, DotLn-Angular docs/dotln/evidence/WO-021/decisions.md). Request: a lifecycle event that retracts a CriterionWaived and stays in the committed segment.

2. A planning screen against criteria that need a later phase. The fork's 2026-11-01 first pass integrated a criteria adversary's finding as an acceptance clause, "after the review gate, git status --porcelain --untracked-files=all in the target prints no line other than a .DS_Store". The verifier judges the uncommitted candidate, the draft publish commits from the tree without moving HEAD, and final-review-result pass already refuses an unclean target after the reviewed commit (reviewedTargetSubject, scripts/lib/target-worktrees.mjs), so the clause failed WO-021's VER-001 on its 129 uncommitted implementation paths. Request: one more screen in 07 §Operator-opened planning pass, and in the canonical reviewer briefs WO-244 carries, saying that an acceptance criterion holds only what can be met by verification on the uncommitted candidate, and that a judgment the kit makes at a later phase (the final review's clean subject, the release close's clean and undeclared-material judgments) stays with that phase. A clause that reads HEAD or a commit range for the order's own changes before the final review's commit is the same defect in its passing form: it checks nothing.

3. The verifier's briefing offers a waiver route that a session took on its own. For an unmet criterion the briefing says that a waiver this session records from the operator's capture, or an authorized amendment, spares the cycle (scripts/resume.mjs, the unmet briefing). The verifier in item 1 took that route from a capture in which the operator objected to the criterion and asked for no waiver. Request: the briefing and the verifier and executor role text say that a waiver is recorded only from the operator's words asking for that criterion's waiver; the operator calling a criterion wrong does not by itself authorize a waiver, and an amendment needs its own authority.
```
