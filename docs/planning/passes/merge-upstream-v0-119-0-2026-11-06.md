# merge upstream v0 119 0 — 2026-11-06

## Dispatch and capture

The operator dispatched a planning pass asking for the upstream merge, as a
message of its own, and one word followed mid-turn at about 21:19Z, after
the session said update #64 was open, saying it was merged. Both are captured verbatim in ignored intake at
`docs/intake/notes/planning-2026-11-06-merge-upstream.md` (SHA-256
`78897db75ff18771a2283ec71ef247e15328fe5a03c3faab93dca0c0b604c90a` as the
update publish and finish read it, with the dispatch alone;
`8895e8fa567abf95556985a7b5ec69ade643eebf0a4b33e15567c70ee8884274` with the
merge word appended; the final digest, with the two messages numbered as
items for the criteria review, is in §Validation). Received 2026-11-06T21:05:23Z (prompt-hook time) in
Claude Code 2.1.319, Fable 5.1 at `xhigh` (`CLAUDE_EFFORT` in the session's
environment; operator-selected). The hook journaled the message as a
`planning:` dispatch of class `direction` and resolved the role planner on
the first row (2026-11-06T21:05:24.141Z, digest `7a3fb3a1…`, 24 bytes): no
slash-command block or pasted wrapper preceded it, so the defect the two
previous passes met did not arise. The line names no worker option, so the
Claude workers run as `dotln-worker`.

The aim read from the operator's message, stated before acting: this is the
session in which the operator asks for the newer starter release, so the
pass takes it first through an update pull request, the operator merges it,
the session finishes it on `main`, and the planning pass then runs over
what the release changes in this fork's records. This is document-only
planning: it takes starter v0.119.0 (core WO-257), settles six of the seven
register rows whose condition was that a starter carries WO-257 and keeps the
seventh deferred on the reviews' evidence, corrects the standing sentences
that said what the fork does until then, gives WO-034 one observation to
make with the release's record footer, files no order, activates nothing,
records no new rule and leaves its pull request for the operator's merge.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `1755b6a` at the dispatch (#63, the previous pass), clean; one writer, this session; no order worktree; starter v0.118.0; `Launchpad v0.3.5` the latest release | `git status`, `node scripts/harness.mjs writer --show`, `UPSTREAM.md` |
| Upstream | one refresh commit past v0.118.0 in the starter repository: `07442fd` (v0.119.0, core WO-257, released 2026-11-06T21:03:44Z, two minutes before the dispatch); fetched into `refs/upstream-releases/v0.119.0` | `git fetch --no-tags upstream refs/tags/v0.119.0:refs/upstream-releases/v0.119.0`, `gh release view v0.119.0 -R DylanBWood/DotLn` |
| The pass's own error | the session's first fetch was again `git fetch upstream --tags`, which overrides the `--no-tags` option the previous pass set and brought the starter's 39 tags (v0.85.0 to v0.119.0) into the clone; each was an ancestor of `upstream/main` and none on `origin` (whose eight tags are the launchpad's own), and all 39 were deleted before any release command ran; the clone holds its eight tags again | `git tag -l`, `git ls-remote --tags origin`, `git merge-base --is-ancestor`, `git tag -d` |
| The preview | from the detached worktree at `refs/upstream-releases/v0.119.0`: 95 kit files replaced, 3 added (`packages/skeleton/fixtures/wo257-role-baseline.json`, `scripts/lib/criteria-status.mjs`, `scripts/lib/feature-registry.mjs`), 0 removed, 0 refused, 1,011 unchanged; build snapshot `fnv1a64:4b2f168bcfab3e2f` to `fnv1a64:ffc9a92d0eead86d`; no instance action declared; 222 ms under the bounded wrapper | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.119.0` |
| The update | one merge commit (`ab74149`, no conflict, 99 files); `npm ci`; `harness emit` 43 surfaces with no drift; the lineage index and the meter unchanged; the work-order index regenerated (`b925d80`: the history page's cards gain the criteria line the release renders, for example `Criteria: 1 met by VER-001 (executor: unmet at handoff, ordinal 2)`, and the self orders' observed target moves to `main`'s tip); `node scripts/siblings.mjs index` reports no sibling declaration, which an instance does not carry; no instance seed changed; no build overlay names `tinkerer-economy` | the merge, the commands on the branch, `git diff b925d80~1 b925d80` |
| The gates on the update branch | `harness check` 43 surfaces; `launchpad verify` 1,109 kit files at `62b0332a`; `npm test` 7 passed; `npm run test:docs` 12 passed and 2 failed (`plan`, `plan-refutation-current`) on the one cause of D4; 0 h 2 min for all four (21:10:34Z to 21:12:05Z) | the gate log in the session scratch |
| Pull request #64 | opened by `node scripts/launchpad.mjs update --publish` with `--operator-request --capture --capture-hash` naming the dispatch capture, admitted with no host prompt on the first try (the WO-246 rule, read at session start); the operator merged it at about 21:19Z (`e32ce0c`) and said so; the session's watcher observed the merge at the same time | the helper's output (`operator request recorded: … sha256:78897db7…`), `gh pr view 64`, the operator's word |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main`, run by v0.118.0's launchpad before the fast-forward so it needed no flags: fetched `origin`, fast-forwarded `main` to `e32ce0c`, emitted 43 surfaces, bootstrapped (one preparation step); seconds | the command's output |
| `plan start` | the branch `planning/2026-11-06-merge-upstream-v0-119-0` and the eleven-heading skeleton, with an empty `Rules recorded` block and no red tag carried; failures, reader scores, conditions, census and branch 0 h 0 min each; prune 0 h 0 min (9 candidates, 4,885,918 bytes, 9 removed, 662 retained, remaining 0) | `npm run plan -- start merge-upstream-v0-119-0` |
| The failure feed | the window since receipt 022 (2026-11-06T20:50Z) holds no lifecycle event: 0 failed verifications, 0 failed final reviews, 0 repairs, 0 orders made ready, 0 off-ramps, 0 host denials, 0 long phases, 0 bound stops; the local rows are this session's own (2 failed gate rows, the update branch's two document-gate tasks of D4; 3 shell diagnostics, unquoted patterns the session corrected; 2 interventions, the dispatch and the merge word); the record holds 7 failed verifications, 3 failed final reviews and 10 repairs, each routed by the pass that read it; nothing to route | `npm run plan -- failures` |
| Conditions | 0 holding, 0 unknown; 482 decision conditions and 209 register rows not evaluated by the mechanical read (1.9 s); 16 logical CPUs, no lane held; the seven register conditions that fired are read by hand in §Register | `npm run plan -- conditions` |
| Register | 209 rows, 45 pending at entry (all deferred); six settled in §Register and one re-disposed as deferred, 39 pending after | `npm run plan -- followups --export` |
| Documents | 78 standing, 533 record, 10 generated; no red tag; 28 unread over the five-release window (35 of 60 sessions observed; a lower bound with Codex unobserved); reader scores not due and no profile declared (`docs/control/reader-profiles.json` absent) | `npm run plan -- documents`, the start report |
| Issues | no open issue on the fork's repository | `gh issue list -R dylanwoodconsulting/DotLn-Enterprise-Starter` |
| Process health | unchanged from the previous pass: 2 budget breaches (the kit's router skill at 17,024 bytes against the 16,384-byte cold-start ceiling in both skill roots), WO-027's 97,154,668 tokens under an unset token limit, a first verification failed in 4 of the last 8 closed orders, the one reopen candidate "seeking the wrong goal" (machinery share 0.663); no order closed since, so the previous pass's NoOp on the candidate stands | `npm run meta -- --plan-cost`, `npm run work-orders -- index` |
| DotLn-Angular | `main` at `d7d842d` (#15, WO-027's merge), released as `DotLn Angular v0.10.1`; the registered clone clean at it; no `wo-*` worktree; nothing landed since the previous pass | `git -C ../DotLn-Angular log`, `gh release list -R DylanBWood/DotLn-Angular` |
| Core | `main` at `62b0332ab` (#279, WO-257's merge, the commit v0.119.0 was exported from); WO-242 in execution (a `../DotLn-wo242` worktree); no new answer block was pasted, so none is read | `git -C ../DotLn log`, `git -C ../DotLn worktree list` |
| Usage | at the role's resolution (21:05:33Z): 93,996 tokens (4 input, 71,137 cached, 22,342 cache-write, 513 output) by the transcript counter, scope dispatch; subagents 0 of 20 | `node scripts/harness.mjs usage 3030584f-59cf-4d9d-ad7f-e1f81ff56910` |

### What the release asks an instance to read

**v0.119.0 (core WO-257).** The index and the meter are regenerated after
the merge (done on the update branch; `npm run meta` changed nothing). The
emitted `.claude/settings.json` gains `Bash(node scripts/worktree.mjs
publish *)` beside the two WO-246 rules, read when the next session starts;
this session's remaining publish, the planning one, uses a rule it already
had. A build overlay naming `tinkerer-economy` now refuses; this instance
has none. Under a journaled `planning:` or `ideation:` dispatch,
`update --finish`, `update --publish` and core's `export --update` refuse
unless `--operator-request --capture <ignored intake file> --capture-hash
sha256:<digest>` names the operator's in-session words: this pass's publish
did so, the admission is journaled with the capture hash, and the finish ran
under v0.118.0's launchpad before the fast-forward. In a repository with a
process meter, a target order's records publication body carries the
record's criterion lines as its last block, written by the reviewer by hand;
WO-034's final review reads that from its role. A split change review is
recorded part by part (`npm run worker -- record --batch N`,
`--brief-sha256`), and the dry run prints the measured size, the ceiling and
the batch plan. Plan receipts filed from this release carry
`subject.separateTrack` (D4). Entropy receipts render the frozen copy as
`<tmp>/…` and screen private paths before filing. The release's derived line
also names `node scripts/siblings.mjs index`, which an instance without a
sibling declaration cannot run (§Requests to core, item 3).

### The operator's words

| Item | Aim read | Disposition | Planner's inference |
| --- | --- | --- | --- |
| the dispatch line (the upstream merge) | take the newer starter release in this session, then plan over what it changes | #64 opened by the kit's helper, merged by the operator, finished on `main`; the planning branch from the updated `main` (D1) | that the phrase asks for the update and the pass the operator record describes for it, not for a standard pass over the whole queue; the queue is read anyway (the feed, the conditions, the register) and nothing in it fired beyond the release's own rows |
| the mid-turn word (the update merged) | the update may finish | `update --finish` ran on clean `main` | none |

## Orders filed and amended

No order is filed: no reopening condition fired that an order answers, six
of the seven that fired are settled by the release itself, and the operator
gave no direction for one (§NoOps). One order is amended, bounded to what
the release makes observable:

- WO-034: the known-issues paragraph carries one observation for its final
  reviewer in the records step: since v0.119.0 `target-records` ends every
  filed record with a provenance footer naming the launchpad commit at
  filing and the record's path, the reviewer reads one filed record's footer
  and records in the order's decisions the commit it names, whether that
  commit is reachable on the launchpad's public repository and whether the
  link destinations exist there (D3; `FUP-575ebb5d3b7e46e0`). The pass's
  first draft made it a document edit in step 11 that rewrote the target's
  developer-reference row; the design and consistency reviews showed the
  footer claims the layout and not the destinations, and that a research
  order may file footered records first, so the edit was withdrawn before
  the refutation and step 11 reads as filed (§Validation). The title,
  objective, cost, criteria and non-goals are unchanged, so the receipt's
  judgment of WO-034 carries by hash; the three reviews read the changed
  text.

Not amended: WO-023 and WO-024 (the pair after WO-034), WO-035 to WO-038,
WO-016, WO-008, WO-017, WO-018 and the four research orders: the release
changes no base, no criterion and no step of theirs, and nothing landed on
the target since the previous pass. No existing order's criteria change.
The five defect classes were screened over the changed text: the carry-in
adds no criterion, reads a footer the kit writes at filing, names GitHub as
the thing observed with the decision record as the evidence whatever it
shows, and contradicts no non-goal. `npm run work-orders -- index --check` prints only the two
advisories the 2026-11-03 pass judged (WO-008 criterion 1, WO-016
criterion 5).

## Decisions

### D1. Take starter v0.119.0 first, on the operator's word in this session

The dispatch line is the operator's ask for the update (the operator
record's Starter updates item), and the release had been published two
minutes before. The one refresh commit was previewed from the detached
worktree (95 replaced, 3 added, 0 refused, no instance action), merged into
`chore/starter-update-v0.119.0` in one commit with no conflict, regenerated
and gated; the kit's helper opened #64 with the operator-request flags the
new release requires and no host prompt; the operator merged it; the finish
ran on clean `main`; the planning branch was opened from the updated `main`.
The release's Read before upgrading items are met as §What the release asks
an instance to read states; the one gate that is red on the update branch is
the kit's own grown subject (D4), which no instance file repairs and which
this pass's receipt closes.

Traps: goal substitution would count the update as the pass; the pass also
reads the feed, the conditions and the register and settles what the
release fired. The NoOp of staying on v0.118.0 was declined because the
operator asked, and because v0.119.0 carries the seven answers the fork's
rows waited on.

### D2. Six of the seven rows that waited on WO-257 are settled by the release; the seventh stays deferred

Each row whose reopening condition read "a starter carries core WO-257" was
read against the release on the updated `main`, not against the release
notes alone: the subject builder lists the four research orders (`npm run
plan -- subject`), the emitted settings carry the third allow rule, the
release reader counts every classification header (`scripts/release.mjs`
and its test), the criteria line renders in the regenerated history page,
bootstrap names a missing target clone (`missingTargetClones` in
`scripts/bootstrap.mjs`), the entropy receipt renders the placeholder and
screens its texts (`scripts/lib/entropy-review.mjs`), and `target-records`
appends the provenance footer (`scripts/lib/target-records.mjs`). Each is
settled with a reopening condition that names the behavior failing on a
record filed from this release (§Register). The record-links row
(`FUP-575ebb5d3b7e46e0`) was first settled on the footer; the reviews showed
the footer names the layout its links are read against and not a snapshot
that holds the destinations, so the row stays deferred with the footer's
observation given to WO-034 (D3) and the ask restated to core.

Traps: a settled row that only moved its wait from one release to the next,
and a row settled on more than the release gives, which the record-links
row was until the reviews read the kit's comment. Each disposition names
the file on the updated `main` that carries the behavior, and the one
unobserved piece (a footer on a filed record) is WO-034's observation. NoOp of leaving the rows
deferred until an order observes each behavior: declined, because the
conditions as written fired, and a deferred row whose condition has
occurred is the queue the 2026-10-02 and 2026-10-10 passes found rotting.

### D3. WO-034's final reviewer observes the first record footer; the record-links row stays deferred

The target's `docs/dev-reference/README.md` says, in its `docs/dotln` row,
that a filed record's links resolve at the `FinalReviewCompleted`
checkpoint, which may not be on GitHub (WO-027-D013's limit). Since
v0.119.0 `target-records` ends every filed record with a footer naming the
launchpad's HEAD when the filing began and the record's path there. The
pass's first draft read that as the route core chose for the fork's ask of
2026-11-06 and had WO-034 rewrite the row; the design and consistency
reviews read the kit's own comment (`scripts/lib/target-records.mjs`: the
footer claims the tree's layout, not that the record's bytes are committed
there) and WO-027's retained flow (the `FinalReviewCompleted` checkpoint
`ec306b22` holds the records; its parent `a33191a`, the HEAD the footer
would have named, lacks the record and evidence paths), so the footer tells
a reader what layout the links are read against and does not promise that
the destinations exist at that commit, let alone on GitHub. The row stays
deferred with that evidence, the ask to core is restated (§Requests to
core, item 4), and the one thing this fork can add is an observation:
WO-034's final reviewer, after `target-records`, reads one filed record's
footer and records in the order's decisions the commit it names, whether it
is reachable on the launchpad's public repository and whether the link
destinations exist there. The developer reference's row keeps its sentence
until a pass has that reading. The observation is a carry-in, not a
criterion, because its value is the record whatever it shows. The reviews
also showed the draft's "first order whose records carry the footer" was
wrong on its own terms: WO-029 and WO-030 may land before WO-034, so the
carry-in now says a research order filed first owes nothing and WO-034
records the observation whatever landed before it.

Rejected: the row edit as drafted (axis: it stated a guarantee the kit
does not make); an order of its own for the links (axis: the filing and the
checkpoint refs are the kit's, and the decision is core's); leaving the
footer unobserved until core answers (axis: the fork's own reading is the
evidence core's answer needs, and WO-034 is the next order whose records
are filed). NoOp of recording nothing in WO-034: declined, because the
next pass would otherwise re-read the row with no new fact. Reopen: the
observation shows the destinations reachable at the named commit, which
settles the row and gives the developer reference its sentence; or core
answers with a published snapshot.

### D4. The plan gate's grown subject: the update branch is red for one kit cause and this pass's receipt closes it

v0.119.0 builds the planning subject from the sequence and then the open
members of every `track: separate` workstream, so WO-029 to WO-032 now
follow the sequenced orders in `subject.orders` and `subject.separateTrack`
names them. Receipt 022 was filed on v0.118.0 over the sequence alone. The
kit rebuilds a receipt under the rule it was filed under
(`separateTrack: receipt.subject.separateTrack !== undefined` in
`scripts/lib/plan-receipts.mjs`), so receipt 022 still validates; but the
continuing-work check (`checkPlanContinuation` in
`scripts/lib/plan-continuation.mjs`) removes only the judged receipt's order
paths from the fixed inputs it compares, so the four research orders survive
as new inputs on the current side and the check reads `sequence, vision,
roles or order inventory changed`. Both document-gate tasks that run the
plan check fail on it (`plan`, `plan-refutation-current`); every other task
passes. The check and the subject builder are kit files, so no instance
file repairs this on the update branch, and the kit guide's true-fork path
is not taken. The route is this pass: its receipt judges the grown subject,
the four research orders included, which puts them inside the amend-order
horizon as core's WO-257 step 13 intended, and the planning pull request
turns the gate green; between the two merges `main`'s document gate reads
this one cause, no order activates in that window (orders activate only on
the updated `main`, and the next activation is the operator's), and #64's
body says so. Core is asked to compare under the judged receipt's rule or
to let the instance-history fixture carry a separate-track workstream
(§Requests to core, item 2).

Traps: shifting the burden would hold the update until core repairs the
check, leaving every other answer in the release unused; policy resistance
would edit the kit file. NoOp of filing no receipt and waiting: declined,
because a planning pass files one anyway and this one judges the subject
the kit now builds.

### D5. The standing sentences that said "until a starter carries WO-257" are replaced; no new rule is recorded

The operator record's review item carried the route until a starter carries
WO-257 step 12 (the reviews run over the orders before the pass document
grows, or the refusal is recorded); the starter carries it, so the item now
says what the kit does (bounds a round by its base, splits a brief past the
ceiling over more workers, merges the reports, prints the size and the plan
in the dry run). The Starter updates item gains the mechanism the release
adds to the rule it already carried (the publish and the finish refuse under
a journaled dispatch unless the operator's captured words are named), which
is how the rule is enforced, not a new rule. `docs/control/documents.json`'s
purpose sentence said the front page was declared until WO-257 made it a kit
default; it now says the kit's default arrived with v0.119.0 and the
declaration stays because a declared list replaces the defaults. The
profile's pre-activation classification check said the kit checks
recognized headers only at close; it now says the kit's reader refuses the
malformed duplicate wherever it reads the classification and keeps the two
counts as the quick read. Each is a replacement of a sentence that became
wrong, in the paragraph it lives in; no dated account is appended. The
`Rules recorded` block stays empty: the dispatch is a request the record
already names the route for, and no message of this session gives a
direction.

Traps: a rule recorded as the operator's that they did not give. Nothing
enters the record as a rule; the two items change in how the existing rules
are carried. NoOp of leaving the sentences: declined, because a role reading
the record would run a route the kit no longer needs.

### D6. The tags and the watcher: observed, not rules

The session repeated the previous pass's `--tags` fetch before it read the
guide's sentence that an explicit `--tags` overrides the remote option; the
39 tags were removed before any release command ran (§Entry observations).
The merge watcher, a background shell loop over `gh pr view`, was counted by
the hook as one unattributed worker use against the cap of twenty (§Process
cost); it is a shell command, not an agent, and the count is reported as the
hook observed it. Neither enters a standing document.

## Register

The register was synced before the dispositions (no public source had
changed) and the batch applied at revision `104cebac…`, leaving it at
`abced228…` (the batch is kept in ignored intake as
`docs/intake/followups-apply-2026-11-06-merge-upstream.json`; a second
batch, `-b.json`, re-disposes the record-links row as deferred at revision
`abced228…` on the reviews' evidence, leaving the register at the revision
§Validation names). Six rows were settled on the release and one was
re-deferred, leaving 39 pending rows, all deferred and none untriaged or
needing review; the other thirty-eight keep their state, read as this
pass's scope touched them.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| FUP-ac85b05ea08a1dce (WO-028-D043, the research orders in the judged subject) | **settled** — v0.119.0 (WO-257 step 13): the subject lists WO-029 to WO-032 after the sequence (`npm run plan -- subject` on the updated `main`); this pass's receipt judges them (D2, D4). | An authorized change to a research order is refused by `amend-order` or the planning check after a receipt that names it, or a separate-track member is missing from a receipt filed from v0.119.0. |
| FUP-2479f6d32b2396a8 (WO-004-D013, the publish rules) | **settled** — v0.119.0 (WO-257 step 17): `Bash(node scripts/worktree.mjs publish *)` is emitted beside the two WO-246 rules; no publication step needs a manual command (D2). | A publish helper is denied in a session that started after its rule was emitted, or an order's publication again needs a command by hand. |
| FUP-2232a29f1061494f (WO-012-D008, the classification parser) | **settled** — v0.119.0 (WO-257 step 10): every header is counted before the value is read and a malformed duplicate beside a valid header is refused naming both lines; the profile's check reworded (D5). | A target order with a valid header beside a malformed duplicate is admitted by `worktree start` or `release prepare`. |
| FUP-8c4dcd0be9399981 (ER-VER-01, the projection's unmet line) | **settled** — v0.119.0 (WO-257 step 8, `scripts/lib/criteria-status.mjs`): the index card and the projection show the executor's unmet ordinal beside the later judgment, never as the current state (the regenerated history page). | A page or the projection shows an executor-recorded unmet criterion as the current state beside a later passing verdict. |
| FUP-b948f8094f0419e5 (ER-MAINT-02, the fresh clone's diagnostic) | **settled** — v0.119.0 (WO-257 step 9): bootstrap names a registered target with no recorded clone, with the registration command, before its preparation steps. | A fresh clone's document gate or plan check refuses with `recorded target clone unavailable` and bootstrap said nothing. |
| FUP-290ea887a40dcd8e (ER-RUN-03, the receipt's confinement wording) | **settled** — v0.119.0 (WO-257 steps 5 and 8): the frozen copy renders as `<tmp>/…`, the uninstalled copy and the unobserved host coordination are named, and private paths are screened before filing. | A receipt filed from v0.119.0 claims confinement its inventories do not show, or a probe is misread as proof. |
| FUP-575ebb5d3b7e46e0 (WO-027-D013, the filed records' links) | **deferred** — first settled on the footer, then re-deferred on the reviews' evidence: the footer names the layout commit, not a snapshot that holds the destinations (the kit's comment; WO-027's checkpoint parent); WO-034's final reviewer observes the first footer (D3); the ask restated to core. | WO-034's decisions record the footer's commit reachable on the launchpad's public repository with the destinations present, or core answers with a published snapshot or a route. |

Rows read and left as they stand, their conditions not fired:
`FUP-4091de8ba4313b4c` (the three reviews as a kit step: WO-244 has not
shipped; core's queue after WO-257 is WO-242, WO-243, WO-244),
`FUP-038033632f4116e6` (the close's removal step: no close since the
previous pass), `FUP-3777717897701f29` (the fork's bound values; no stop
recorded), `FUP-2ed0c79e62b53dd7` and `FUP-35187266d29e00dc` (the pass
before WO-016 activates), `FUP-5538fd060f7a5e9c` and `FUP-223cde718a523e67`
(no title has failed and no fork pull request exists), `FUP-d97544c4254dadd4`
(the `check:scripts` scope), and the candidate rows of the earlier passes,
each read against its condition.

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-118-0-core-answers-2026-11-06.md",
  "tags": []
}
```

<!-- dotln-red-tags:end -->

The census after this pass's changes: no unbound standing document and no
red tag; the unread count stays a lower bound with Codex unobserved. No
document was removed.

## NoOps

Each declined candidate uses the NoOpIntent fields: kind, reason, evidence,
reevaluation and usefulWhen. No automatic schedule is created by this record.

| Candidate (kind: NoOp) | reason and evidence | reevaluation | usefulWhen |
| --- | --- | --- | --- |
| A fork repair of the plan continuation check, or holding the update until core repairs it | The check and the subject builder are kit files; editing one is the true-fork path the kit guide names, and holding the update leaves the seven answers unused. The receipt this pass files closes the gap (D4). Evidence: `scripts/lib/plan-continuation.mjs` (`fixedInputs` filters by the judged receipt's order paths); `npm run plan -- check` on the update branch. | Core answers item 2, or a later release grows the subject again without admitting the previous receipt. | The instance-history suite carries a separate-track workstream so the gap is caught before release. |
| An order for the filed records' links, or the developer reference's row rewritten now | The filing and the checkpoint refs are the kit's and the footer does not promise the destinations (D3); the row's sentence is still true. Evidence: `docs/dev-reference/README.md` line 71 in the target; `scripts/lib/target-records.mjs`; the consistency review's F1. | WO-034's observation shows the destinations reachable, or core answers. | Every filed record's links resolve through GitHub alone. |
| Re-basing WO-023 and WO-024, WO-035 to WO-038 or the research orders | Nothing landed on the target since the previous pass set the five bases at WO-027's merge; the pass before each of the rest activates sets its base (WS-001 §Bases). Evidence: `git -C ../DotLn-Angular log` (`d7d842d` unchanged); the index's integration column. | An order of that group is next to activate. | Every open order's base is current at every pass. |
| A standard pass over the whole queue | The dispatch asks for the upstream merge; the feed, the conditions and the register were read and nothing fired beyond the release's rows; no order closed since the previous pass four hours earlier. Evidence: `npm run plan -- failures` (0 items in the window); `npm run plan -- conditions` (0 holding). | An order closes, or the operator dispatches a standard pass. | The queue is re-read when it has moved. |
| Refilling the research track | Four research orders are queued and the refill rule is fewer than two (WS-002 rule 6). Evidence: WS-002's member table. | Two of the four close. | The Codex capacity has a next order waiting. |
| Running the reader score | Not due: no profile is declared and `plan start` reports no changed profile with three unscored releases. Evidence: the start report's `readerScores`. | The operator asks or a profile is declared. | A reader's score shows a surface drifting. |
| Recording the dispatch phrase as a rule | The phrase is a request the Starter updates item already names the route for; a request is not a standing direction. Evidence: the operator record's Starter updates item; this session's journal rows. | The operator says the phrase should mean something more. | Every phrase the operator uses has a recorded meaning. |
| Removing the profile's two-count classification check | The kit now refuses the case, but the two commands are a quick read before activation that costs nothing and the operator's rule is that a check stays while it is useful (WS-001 rule 26). Evidence: the profile's §Check the release classification before activation; the release notes. | The check misleads a role or the kit prints the same read at `worktree start`. | The kit's own read is the only one a role runs. |
| Re-running the merge watcher as an agent or asking the operator to say "merged" | A background shell loop observed the merge and the operator's word arrived at the same time; neither needs a rule. Evidence: the watcher's output; the capture. | The hook's worker count misleads a budget. | The hook distinguishes a shell loop from an agent. |
| Reopening an order on the "seeking the wrong goal" reopen candidate | Unchanged since the previous pass, no order having closed since; its NoOp stands. Evidence: the cost table's trap signals; the 2026-11-06 pass's NoOps. | The next closed order's delta worsens again. | The share falls because delivery orders closed. |

## Sequence

Unchanged: WO-034 first, alone; the WO-023/WO-024 pair; WO-035, WO-036,
WO-037 and WO-038 one at a time; WO-016, WO-008, WO-017 and WO-018 after
them. WS-002's members stay a separate track with no sequence entry, and
from this release they are in the judged subject after the sequence (D4):
WO-029 and WO-030 runnable now on Codex at WO-027's merge, WO-031 and
WO-032 after the pair. What the operator sees after each order lands is as
the previous pass wrote it; WO-034 additionally leaves, in its decisions,
the first reading of a filed record's footer against GitHub. The pass
before WO-016 activates still owes WO-016 its base and the receipt 012
known issues (`FUP-2ed0c79e62b53dd7`).

## Write-backs

- The operator record: §Updates, the lifecycle and records, the Starter
  updates item gains the release's operator-request mechanism; §Harness,
  the review item's route clause replaced by what the kit now does (D5).
  No rule is added.
- `docs/control/documents.json`: the purpose sentence (D5).
- `docs/repositories/dotln-angular.md`: §Check the release classification
  before activation (D5).
- WO-034: the known-issues paragraph (D3); step 11 reads as filed.
- The follow-up register (the batch above); the idea ledger's registration
  heading; the generated lineage index, work-order index and cost table.
- No budget, ceiling or baseline is raised; `docs/control/budgets.json` is
  unchanged.

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[]
```

<!-- dotln-rules-recorded:end -->

The block is empty: no message of this session gives a standing direction
(D5). The two operator-record edits change how existing rules are carried.

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.119.0

From DotLn-Enterprise-Starter's 2026-11-06 merge-upstream planning pass, docs/planning/passes/merge-upstream-v0-119-0-2026-11-06.md. These are the fork's findings, not new operator direction. Six of the seven register rows that waited on WO-257 are settled on the updated main: the research orders in the judged subject, the target publish's allow rule, the classification reader, the criteria line, bootstrap's clone diagnostic and the entropy receipt's wording; the record-links row stays deferred (item 4).

1. Starter v0.119.0 is taken (#64), on the operator's word in the dispatch of that session, which asked for the upstream merge. Preview 95 replaced, 3 added, 0 refused, no instance action; one merge, no conflict; harness emit 43 surfaces, no drift; harness check, launchpad verify and npm test green in 0 h 2 min with test:docs; update --publish admitted with --operator-request --capture --capture-hash on the first try and the admission journaled; update --finish ran under v0.118.0's launchpad before the fast-forward, so it needed no flags. Nothing asked.

2. Ask (a compatibility gap the release's own rule names): npm run test:docs fails on the update branch and on main between the update's merge and the planning pull request's, in the plan and plan-refutation-current tasks, with "sequence, vision, roles or order inventory changed". v0.119.0 lists the open separate-track members (the fork's WO-029 to WO-032) after the sequence in the subject; receipt 022 was filed on v0.118.0 over the sequence alone; plan-receipts.mjs rebuilds that receipt under its filed rule, but checkPlanContinuation in scripts/lib/plan-continuation.mjs removes only the judged receipt's order paths from the fixed inputs, so the four new order inputs survive the comparison and the check fails. No instance file can repair it. The fork's route is its own next receipt, filed by this pass over the grown subject. Decide whether the continuation check builds the current subject under the judged receipt's rule (separateTrack only when the receipt carries the key), or treats the separate-track members as order inputs, and whether the instance-history fixture should carry a track: separate workstream so WO-232's compatibility rule catches the case before release.

3. For your information: the release's derived Read before upgrading line names node scripts/siblings.mjs index, which refuses in an instance with no sibling declaration (docs/siblings/siblings.json); the two instance commands it names beside it ran. No kit change asked unless the derived line is meant to be instance-safe.

4. Ask (the fork's WO-027-D013 again, with the reviews' reading): the record footer names the launchpad HEAD when the filing began and the record's path, and target-records.mjs says it claims the tree's layout, not that the record's bytes are committed there. In the fork's WO-027 flow the FinalReviewCompleted checkpoint ec306b22 holds the records and its parent a33191a, the HEAD the footer would name, lacks the record and evidence paths, so a reader of the two public repositories who opens the named commit on GitHub finds the layout and not the destinations. The fork keeps the row deferred and has WO-034's final reviewer record what the first footer resolves to. Decide whether the footer should name a published snapshot that holds the destinations (the FinalReviewCompleted checkpoint pushed as a ref, or the records committed on the pushed order branch before the move), or state in the kit guide that the footer gives the layout only and the links are read in the target's docs/dotln tree.

5. For your information: the dispatch was sent as a message of its own and the hook read it on the first row with no host block before it, so the fork cannot yet say whether WO-257 step 11's reader skips a slash command's block in a live session; the next pass that dispatches after a slash command reports it. Nothing asked.
```

## Process cost

Model and effort: Fable 5.1 at `xhigh` (`CLAUDE_EFFORT`; operator-selected).
Usage: 93,996 tokens at the role's resolution (21:05:33Z); 5,416,045 total
tokens at the subject's drafting (21:23:14Z: 870 input, 5,104,782 cached,
248,465 cache-write, 61,928 output); 22,575,548 total tokens at the receipt
(22:05:43Z: 2,106 input, 22,015,867 cached, 406,755 cache-write, 150,820
output; reasoning and cost unavailable), source the transcript counter,
scope dispatch; dispatch standing 1 h 0 min of an unset bound at the
receipt; the exit reading is in the handoff.
Subagents: budget 20 (`subagentCap`); the plan stated before the first
spawn: three Codex review workers through `npm run worker -- review --host
codex --subject planning` (the criteria adversary with `--capture`, the
design improver, the consistency reviewer), one recheck round if a blocking
finding is repaired, and one background `dotln-worker` refuter through the
direct route, each launched once: four to five uses, no re-task, no
descendant; the hook had already counted the merge watcher (a background
shell loop) as one unattributed use, so the pass's ceiling for the plan is
six of twenty. Spent: §Validation.
Wall-clock of the pass's commands: the preview 222 ms; the update's four
gates 0 h 2 min; `update --finish` seconds; `plan start` 0 h 0 min with its
prune; the register sync and batch seconds; the reviews and the refuter in
§Validation. Against the NoOp of doing nothing: the update is on `main`
with its answers settled in the register, the standing documents say what
the kit does rather than what the fork did until it arrived, the next order
carries the one row the release makes true, and the subject the kit now
builds has a receipt.

## Validation

The dispatch capture's final digest is
`1011fac89303dadcba782730b088aba2759b4bce544187d900a0cfa6e2023309`: the
file grew twice after the update publish read it, with the merge word and
then with the two messages numbered as items and one sentence saying where
a criteria review's table goes (below); every digest the records name is
the file as it stood when that record read it.

**Independent order reviews.** The operator record's three reviews ran as
Codex workers (`gpt-6.1-sol` at `max`, pinned on the command line, no
readback) through `npm run worker -- review --kind <kind> --host codex
--subject planning` under the lane
`planning-2026-11-06-merge-upstream-v0-119-0` (keyed by the branch), round
1, over the change since `e32ce0c`; the brief measured 108,876 characters
by the helper's dry run, under the 400,000-character ceiling, one batch of
three inlined documents (the pass document, the work-order index and
WO-034) with the brief directing each worker at the whole branch diff by
`git diff` and listing the ten changed files, so the operator record, the
profile, the declaration, the ledger and the register were in every
worker's reach and in the design and consistency workers' files read. The
design improver and the consistency reviewer were launched together over
tree `94a6183` (the first committed subject): the design improver 0 h 4
min, 1,008,976 tokens, 2 findings (0 blocking, 1 should-fix, 1 note); the
consistency reviewer 0 h 11 min, 3,233,134 tokens, 2 findings (0 blocking,
2 should-fix), with its `Traced consumers` table of seventeen rows; both by
the codex-result-envelope, the effective effort unknown; each records the
checkout unchanged across its episode. The criteria adversary, launched
with the dispatch capture through `--capture`, was refused by the helper
three times (0 h 5 min, 0 h 5 min and 0 h 3 min; each returned 2 findings)
because its report carried no `## Items` table; the helper writes nothing
for a refused report and the worker runs ephemeral, so the three texts are
unobserved and the cause is unknown. The capture was given the two
messages as numbered items before the third launch and one sentence
saying the table sits directly under the heading before the fourth, which
ran over the corrected tree `cb1cdaa` after the design and consistency
findings were folded in: 0 h 4 min, 876,210 tokens, 2 findings (0
blocking, 2 should-fix), its `## Items` table answering both items as
acted on. Self-review: found 6 (6 distinct); fixed 6; recorded 0. No
recheck round ran: no finding was blocking and every repair is record or
order text, the precedent of the passes since 2026-11-03 for
documentation-only repairs, and the refuter judged the repaired text.

| Finding | Disposition |
| --- | --- |
| Design F1 (the footer's post-filing owner) | Fixed: WO-034's final reviewer records the footer observation in the records step; the row stays deferred (D3). |
| Design F2 and consistency F2 (WO-034 "first") | Fixed: the carry-in says a research order filed first owes nothing and WO-034 records the observation whatever landed before it. |
| Consistency F1 (the footer's guarantee) | Fixed: the settlement withdrawn by a second register batch; the row deferred on the kit's comment and WO-027's checkpoint parent; D2, D3, the register table, the NoOps, the sequence and item 4 to core corrected. |
| Criteria F1 (direct quotes of the operator's messages) | Fixed: the pass document and the ledger paraphrase the two messages and cite the capture's digests (the operator record's Direct quotes item). |
| Criteria F2 (seven settlements claimed after the re-deferral) | Fixed: six settlements and one deferral in the aim, D2's heading, the ledger heading and the block to core. |

**Independent refutation.** [Receipt 023](../refutations/2026-11-06-planning-2c2b36a3d2d53945-023.md)
is the fresh judgment through the direct route: one background Claude
`dotln-worker` (claude-opus-5-5 at xhigh by its generated definition, no
model override, effective readback unknown) with no inherited conversation,
reading the canonical prompt of `npm run plan -- refute` saved in ignored
intake and nothing else (its statement names the one file, its two reads
and that it ran no command and made no write): aligned-with-findings for
the plan and for the four orders the scope judged, WO-029, WO-030, WO-031
and WO-032, which v0.119.0 brought into the subject (D4) and which no
receipt had judged before; the eleven sequenced orders carry their
verdicts from receipt 022 by hash, WO-034 included (its judged text is
unchanged by the carry-in); zero holds; eighteen known issues with
reopening observations; 0 h 11 min dispatch to file (0 h 8 min from the
worker's launch to its hand-back, 147,225 tokens and 3 tool uses by the
host's usage line); the subject `sha256:a7a7f71e…` at `b0f25cd`; no
carried disposition. The receipt helper refused the first filing because
the worker's statement named the prompt file by its absolute path; the
same worker restated the one path as `<worktree>/…` on a re-task (8 s, 1
tool use) with no other word changed, and the pair filed. The eighteen
known issues are NoOps for this pass (kind NoOp; reason: none is an
observed failure and each names its reopening observation; evidence: the
receipt's findings; reevaluation: each finding's `reopenWhen`;
usefulWhen: that observation showing a repair would improve the stated
outcome); the ones the research orders' roles read before they run are
named here: criterion 3 of WO-029, WO-030 and WO-032 reaches the whole
work directory rather than the order's own records, so an earlier batch's
Illustrative or null-executable record can fail a later batch (WO-031's
clause is the model); criterion 5's regenerated baselines pass by
construction and the screenshots carry the visual judgment; criterion 2's
exact count refuses a batch with two unsupported candidates; WO-035's
fail-closed messages may reach the studies' on-screen text, which no
research Cost line names; the non-goals give the catalog's search to
WO-018, whose title names no search; WO-031's criterion 7 may carry an
unconfirmed embodiment into the architecture reference; WO-032's
criterion 1 and criterion 3 conflict if the relations family cannot step
levels; and each batch is the next point of the machinery-share series.
The pass before each research order activates reads these against the
order; WO-029 and WO-030 are runnable now, so their executors read them
from this record. The receipt's plan check printed the same advisories as
the previous pass's: WO-034's step 2 naming a launchpad record path a
draft publish body must not name, and the two standing criteria
advisories.

**Worker uses.** By the role's count: the merge watcher (a shell loop the
hook counted as an unattributed use), the review dry run, six review
launches (design, consistency, criteria four times), the refuter and its
one re-task: ten of twenty. The hook's own line reads launched 2 (claude 1,
unattributed 1), re-tasked 1, remaining 17: the six Codex review launches
and the dry run were spelled `npm run worker --silent -- review`, which
the hook's literal match did not count; the pass's count is the ten above
and the six Codex launches are in the lane's reports and the journal's
launch rows.

**Document gate.** `npm run test:docs` at the tree with the receipt and
this closing edit is named in the handoff with its result; the kit verifies
1,109 files at `62b0332a`.

Outcome against the dispatch: starter v0.119.0 is taken on the operator's
word and finished on `main`; six of the seven rows that waited on WO-257
are settled and the seventh is deferred on evidence the reviews found; the
standing documents say what the kit does; WO-034 carries the one
observation the release makes possible; the subject the kit now builds,
the four research orders included, has a receipt that turns the document
gate green again; and the three independent reviews and the refutation
judged the result. What the pass did wrong and corrected: the `--tags`
fetch (§Entry observations), a settlement that over-claimed (D3), the
quoted messages, and the stale count. This record creates no target
implementation or activation.
