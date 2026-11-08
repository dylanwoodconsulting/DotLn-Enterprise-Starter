# standard pass v0 122 0 wo 039 retired record links settled — 2026-11-08

## Dispatch and capture

The operator dispatched a `planning:` pass asking for a standard planning
pass and the latest upstream, as one typed line behind the host's `/model`
command block. The line is captured in ignored intake at
`docs/intake/notes/planning-2026-11-08.md`, SHA-256
`2a83b92bf8aa1d2f124405495d931b34dfb4ff847c2363168c2ce18859556bf4` as the
update publish read it; the later digests, as the finish read the file and
with the operator's later words appended, are in §Validation. The hook
stamped it 2026-11-08T22:07:18Z, the afternoon of 2026-11-08 where the
operator sits; the host was Claude Code 2.1.319 (`claude --version`) running
Fable 5.1 at `max`, the operator's own selection on the `/model` line. The
prompt hook
read the dispatch on the first content line after the command block and
resolved the role planner on the first prompt (the hook's own context line
named the role, the session scratch and the usage readback). The dispatch
line names the update, so this session is the one in which the operator
asked for it (D1); it names no worker option, so the Claude workers run as
`dotln-worker`.

The aim read from the operator's line, stated before acting: a standard
planning pass that first takes the newer starter release in this session
through an update pull request, which the operator merges and the session
finishes on `main`, and then runs over what the release and the one order
that closed since the previous pass, WO-039, change in this fork's records.
Document-only planning: the pass takes starter v0.122.0 (core WO-258 and
WO-259 in two refresh commits), retires WO-039 as closed, re-bases the five
orders that can activate next on its merge, settles the record-links row on
the GitHub check core asked for, files no order, activates nothing, records
no new rule and leaves its pull request for the operator's merge.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `d0164fb` at the dispatch (#70, WO-039's records), clean; one writer, this session; no order worktree; starter v0.120.1; `Launchpad v0.3.5` the latest release | `git status`, `node scripts/harness.mjs writer --show`, `UPSTREAM.md`, `gh release list` |
| Upstream | two refresh commits past v0.120.1 in the starter repository: `9e296bb` (v0.121.0, core WO-258, an instance's first cycle meets the kit, released 2026-11-08T13:17:33Z) and `f817d49` (v0.122.0, core WO-259, committed words and filed records, released 2026-11-08T22:01:32Z, six minutes before the dispatch); the release's tag fetched into `refs/upstream-releases/v0.122.0` | `git fetch --no-tags upstream refs/tags/v0.122.0:refs/upstream-releases/v0.122.0`, `gh release view v0.121.0 -R DylanBWood/DotLn`, `gh release view v0.122.0 -R DylanBWood/DotLn` |
| The pass's own error | the session's first fetch was `git fetch upstream --tags`, which overrides the `--no-tags` option the clone sets on the remote and brought the starter's 43 tags (v0.85.0 to v0.122.0) into the clone, as the 2026-11-05 and 2026-11-06 passes' first fetches did; each was an ancestor of `upstream/main` and none on `origin`, whose eight tags are the launchpad's own, and all 43 were deleted before any release command ran; the clone holds its eight tags again (D7) | `git tag -l`, `git ls-remote --tags origin`, `git ls-remote --tags upstream`, `git merge-base --is-ancestor`, `git tag -d` |
| The preview | from the detached worktree at `refs/upstream-releases/v0.122.0`: 109 kit files replaced, 4 added (`scripts/lib/branch-changes.mjs`, `scripts/lib/branch-terms.mjs`, `scripts/lib/verbatim-screen.mjs`, the WO-259 role baseline), 11 removed (the seven Codex skill files under `.agents/skills/` and the four files under `.codex/`, which the starter exports with every other host off), 0 refused, 1,001 unchanged; build snapshot `fnv1a64:722c29f673a8aa6a` to `fnv1a64:d23ed54269ce7e46`; no instance action declared; 328 ms under the bounded wrapper | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.122.0` |
| The update | one merge commit (`1f783ec`, 127 files) with three add/add conflicts, all on instance seeds the v0.121.0 refresh added to or rewrote in the starter (`README.md`, `dotln.config.json`, `docs/lineage/README.md`), resolved to this instance's bytes, and two seeds Git merged on its own: `docs/control/budgets.json`, whose router cold-start ceiling took the kit template's 21,220 bytes, and the closed `WO-001`'s order text, restored to its filed bytes (D2); `npm ci`; `harness emit` 43 surfaces, re-creating the Codex surfaces the merge removed, because the host rows read inferred on (D3); the lineage index regenerated unchanged; `npm run meta` re-rendered the features inventory with the three new rows and reported no budget breach; `npm run features -- render`; the work-order index regenerated; `node scripts/siblings.mjs index` exits 0 naming the absent declaration, as core's WO-258 step 16 said it would; the regenerated bytes committed as `6f690bc` | the merge, the commands on the branch, `git diff --stat main..HEAD` |
| The gates on the update branch | `harness check` 43 surfaces; `launchpad verify` 1,113 kit files at `13e8d47e`; `npm test` 7 passed; `npm run test:docs` 15 passed, the new `terms` task among them, the verbatim screen reading 71 changed files against 260 captures with 0 shared runs, and five advisories on historical records' attributed speech, which the forward-only rule leaves as written; 0 h 2 min for all four (22:18:15Z to 22:20:12Z) | the gate logs in the session scratch; `node scripts/docs-check.mjs` |
| Pull request #71 | opened by `node scripts/launchpad.mjs update --publish` with `--operator-request --capture --capture-hash` naming the dispatch capture, admitted with no host prompt on the first try, the helper's own screen of the branch's committed change passing; the operator merged it at 22:30:31Z (`711f185`) and sent no word in the session; the session's watcher, a shell loop over `gh pr view`, read the merge at 22:30:48Z | the helper's output (`operator request recorded: … sha256:2a83b92b…`), `gh pr view 71` |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main` with the same flags, since this checkout ran v0.120.1's launchpad whose refusal applies under a journaled dispatch: fetched `origin`, fast-forwarded `main` to `711f185`, emitted 43 surfaces, bootstrapped (one preparation step); 2 s (22:33:04Z to 22:33:06Z) | the command's output |
| `plan start` | the branch `planning/2026-11-08-standard-pass-v0-122-0-wo-039-retired-record-links-settled` and the eleven-heading skeleton, with an empty `Rules recorded` block and no red tag carried; failures, reader scores, conditions, census and branch 0 h 0 min each; prune 0 h 1 min (629 candidates, 6,875,715,558 bytes, 629 removed, 1,118 retained, remaining 0; 568 of the candidates gate fixtures of 6.8 GB); 0 h 1 min in all (22:33:18Z to 22:34:30Z) | `npm run plan -- start …` |
| The failure feed | the window since receipt 024 (2026-11-08T02:48Z) holds WO-039's whole cycle: 0 failed verifications, 0 failed final reviews, 0 repairs, 1 order made ready, 0 off-ramps, 0 corrections, 0 amendments; WO-039's final review 0 escapes (2.1 per review over the recent ten orders); 3 failed local gate rows, all WO-039's (rows, not runs); 1 local release close (16 s; the slowest step the worktree removal at 11.1 s); 0 host denials over 63 journals; 19 interventions (WO-039 18: eleven in implementation, five in final review, one each in verification and release close; one this session's dispatch), 14 unclassified and 5 of class direction, the lifecycle phrases; 0 bound stops; 1 long phase (WO-039's implementation 3 h 4 min against a 1 h 23 min median); 0 repeated gate runs; the eight recent closes 7 delivery and 1 machinery; the record holds 7 failed verifications, 3 failed final reviews and 10 repairs, each routed by the pass that read it; nothing recurs in an open order; nothing to route | `npm run plan -- failures` |
| Conditions | 0 holding, 0 unknown; 532 decision conditions and 222 register rows not evaluated by the mechanical read (2.4 s); 16 logical CPUs, no lane held; the fired condition is read by hand in §Register | `npm run plan -- conditions` |
| Register | 222 rows, 43 pending at entry, all deferred and none untriaged; the four rows the previous pass allocated to WO-039 were settled by its final review on D019's evidence; one row settled in §Register, 42 pending after | `npm run plan -- followups --export` |
| Documents | 80 standing, 688 record, 10 generated; no red tag; 30 unread over the five-release window (43 of 75 sessions observed; a lower bound with Codex unobserved); reader scores not due and no profile declared (`docs/control/reader-profiles.json` absent) | `npm run plan -- documents`, the start report |
| Issues | no open issue and no open pull request on the fork's repository before #71 | `gh issue list -R dylanwoodconsulting/DotLn-Enterprise-Starter`, `gh pr list` |
| Process health | no observed budget breach, the router skill's two breach lines of every pass since 2026-11-01 gone with the template's ceiling (D2); WO-039's 353,985,809 tokens under an unset token limit; a first verification failed in 3 of the last 8 closed orders; 0 reopen candidates; the "seeking the wrong goal" machinery share 0.225 (Δ −0.008) | `npm run meta -- --plan-cost`, `npm run work-orders -- index` |
| DotLn-Angular | `main` at `eb9d227` (#18, WO-039's merge at 2026-11-08T21:10:29Z, 109 files, 3,649 additions and 2,232 deletions), released as `DotLn Angular v0.11.1` at 21:12:53Z; its launchpad records merged as #70 (`d0164fb`, 21:10:59Z); the registered clone clean at `eb9d227` after a fetch of its `origin`, which updated the clone's remote-tracking refs and nothing in its tree; no `wo-*` worktree. The merge changed 59 files under `studies/poeaa/`, seven shared study modules (`states.ts`, `study-model.ts`, `parameters.ts`, `match-kind.ts` and their specs), the states, timeline and drawn-text composites, the twenty messaging specs and the RxJS localization spec (the one loader's import), the tools test kit, `types.ts`, `check-studies.mjs` and the two reference documents; no movement file, no catalog data file, no message catalog and no `flow.ts` | `git -C ../DotLn-Angular log`, `git diff --name-only f99580f..eb9d227`, `gh pr view 18 -R DylanBWood/DotLn-Angular`, `gh release list -R DylanBWood/DotLn-Angular` |
| The filed records' links | the three WO-039 records in the target end with the footer naming launchpad commit `62c22c9`, an ancestor of `origin/main` that the GitHub API finds; VER-001's 21 and FINAL-001's 17 distinct relative link destinations all resolve on the launchpad's public repository at that commit through the contents API; `decisions.md` carries no relative link (D6) | the link-check script in the session scratch over `gh api repos/dylanwoodconsulting/DotLn-Enterprise-Starter/contents/<path>?ref=62c22c9…` |
| Core | `main` at `13e8d47` (#284, WO-259's merge, the commit v0.122.0 was exported from); WO-244 in execution (a `../DotLn-wo244` worktree on `wo-244`); no answer block was pasted, so none is read | `git -C ../DotLn log`, `git -C ../DotLn worktree list` |
| Usage | at the role's resolution (22:07:35Z): 96,616 tokens (4 input, 72,024 cached, 23,503 cache-write, 1,085 output) by the transcript counter, scope dispatch; subagents 0 of 40 | `node scripts/harness.mjs usage dafe1f3e-3c10-4aff-9547-4bbd99e0903e` |

### What the releases ask an instance to read

**v0.121.0 (core WO-258).** The features inventory, the features page and
the emit ran on the update branch, and the hooks the session runs read the
emitted code at each call; the emitted `.claude/settings.json` is
byte-identical to `main`'s, so the new session the release asks for would
read no rule this one lacks, and the planning publish uses one the session
had at its start. Host support is an election: `host-codex` reads inferred
on from the committed order attestations and the discovery record, and
`host-copilot` inferred on from the discovery record, so the emit wrote the
Codex surfaces the starter's refresh commit had removed and the bundle is
the one this fork had (D3); `dotln.config.json` elects neither host by hand.
`engines.git >=2.40.0` is met by Git 2.55.0. A `resume: release close`
typed before `main` is pulled is now journaled as pending and the merged
order's helper admitted under it, which changes nothing the operator record's
lifecycle item says they do. `features.auto-update-upstream`, the kit's
opt-out of the rule that a pass takes no newer starter unless the operator
asks in that session, is not elected: the rule is the operator's direction
of 2026-11-03 and the record carries it (D3). The refresh's seed additions
reached this fork as the merge conflicts D2 resolves. The router cold-start
ceiling the template raises to 21,220 bytes arrived through the same merge
(D2). An empty sequence is admitted, `plan check --timing` exists and the
siblings index is instance-safe; the last was observed on the branch.

**v0.122.0 (core WO-259).** The role text in both skill roots and the three
worker definitions now carry the rule that committed text paraphrases the
operator and cites the capture digest, and that a worker never reads or
prints the contents of `docs/control/local/` or a commit header; this pass
and its workers ran under both. `npm run test:docs` screens what a branch
adds against this checkout's ignored intake captures over a twelve-word
window and fails a record that attributes words to the operator without a
capture citation; on the update branch it read 71 changed files against 260
captures with no shared run, and the five advisories it printed are on
records written before the branch, which keep their bytes. On the planning branch it first failed seventeen lines, all shared with
files the session had written into intake, and passed with no shared run
once those left intake (D7). The document
selection's `terms` task passed with the present list. The three publish
helpers screen a branch's committed change before the first push; #71 went
through that screen. For a registered-target order the reviewer commits the
instance records before `npm run resume -- target-records`, which now
refuses an uncommitted source, and the launchpad publish form refuses until
the passing final review is in the committed control record: the profile's
publish route step 3 already had the first as this fork's route and now
states both as the kit's rule (D6). A background worker's hand-back arriving
through the prompt hook is journaled as the host's; `plan failures` counts
it apart. Discovery deduplicates versions. Nothing of this touches an active
order, because none is active. `features.verbatim-operator-words`, which
would turn the screen into advice, is not elected: the fork's records have
been written under the Direct quotes item since 2026-10-19 (D3).

### The operator's words

| Item | Aim read | Disposition | Planner's inference |
| --- | --- | --- | --- |
| the dispatch line | a standard pass that takes the latest upstream, asked for in this session | #71 opened first by the kit's helper, the operator merged it at 22:30:31Z (`711f185`) and sent no word in the session; the session's watcher, a shell loop over `gh pr view`, read the merge at 22:30:48Z-DISPOSITION; the planning branch from the updated `main` (D1) | none |

## Orders filed and amended

No order is filed: the one reopening condition that fired since the previous
pass settles a register row and asks for no order (D6), the standards pass
WS-001 rule 31 asks each pass to file or sequence is WO-040, already
sequenced ahead of the next feature order (D5), the research track holds
its four queued orders (WS-002 rule 6), and the operator gave no direction
beyond the dispatch line. Five orders are amended, each change bounded to
what WO-039's merge changed at the base they will activate on (D4):

- WO-024 and WO-040, the lane pair that activates next: the base moves
  from WO-023's merge (`f99580f`) to WO-039's (`eb9d227`, DotLn-Angular
  #18, `DotLn Angular v0.11.1`), the merge both hold a hard edge on; step
  1's guard reads the pin alone, since the pin is that merge; the known
  issues say WO-039 merged and what its merge put in the base. WO-040's
  observed gap is re-read at `eb9d227`: WO-039 changed no movement file,
  no `flow.ts`, no message catalog and no catalog data file, so every
  count stands, and the twenty messaging specs and the RxJS localization
  spec it edited carry only the one loader's import, which WO-040's
  reading inventory records at the integrated base as step 2 already says.
- WO-029, WO-030 and WO-031, the research orders that can activate now:
  the base moves to `eb9d227`; WO-031's wait on WO-039 is over, its guard
  reads the pin alone and its first carry-in says so; the three orders'
  live-run paragraphs name the enterprise batch as WO-039 leaves it and
  the one model-study loader their new specs import. Their observed gaps
  are re-read at `eb9d227`: the catalog's data files are unchanged since
  `55b59c9`, so every candidate list and count holds.

Not amended: WO-032 (it waits for WO-024 and keeps its provisional base),
WO-035, WO-037 and WO-038, whose bases the pass before each activates sets
(WS-001 §Bases), WO-036 (its base is WO-028's merge and its surfaces are the
scene's), and WO-016, WO-008, WO-017 and WO-018. No order's criteria change;
the kit hashes an order's title, objective, cost, criteria and non-goals, so
every amended order's verdict carries from receipts 023 and 024 by hash and
this pass's receipt judges the plan. The five defect classes were screened
over the changed text: a base line and a guard state no count, cost or
duration as a criterion's subject, read no `HEAD` or commit range, name
GitHub only where the order already did, and contradict no non-goal.
`npm run work-orders -- index --check` prints only the two advisories the
2026-11-03 pass judged (WO-008 criterion 1, WO-016 criterion 5).

## Decisions

### D1. Take starter v0.122.0 first, on the operator's word in this session

The dispatch line asked for the latest upstream, so this is the session in
which the operator asked (the operator record's Starter updates item). The
two refresh commits past v0.120.1 were previewed from the detached worktree
(109 replaced, 4 added, 11 removed, 0 refused, no instance action), merged
into `chore/starter-update-v0-122-0` with the three seed conflicts and two
seed auto-merges D2 resolves, regenerated and gated (four gates green in
0 h 2 min). The kit's helper opened #71 with the operator-request flags
and no host prompt, the operator merged it at 22:30:31Z (`711f185`), the watcher read the merge, and `update --finish` ran on clean `main` with the same flags, because the finishing launchpad was v0.120.1's (2 s). The planning branch was opened from the
updated `main`. The releases' Read before upgrading items are met as
§What the releases ask an instance to read states; none needed a repair on
the update branch.

Traps: goal substitution would count the update as the pass. The NoOp of
staying on v0.120.1 was declined because the operator asked, and because
v0.122.0 makes the route this fork's profile carried as an interim rule
(the records committed before `target-records`) the kit's own refusal.

### D2. The seeds a fork's merge meets, and how each was resolved

The v0.121.0 refresh added to the starter the seeds it lacked
(`dotln.config.json`, `docs/lineage/README.md`), rewrote its kit-rendered
`README.md`, changed the seeded first order's objective, checklist item 4
and criterion 3, and moved the budgets template's router cold-start ceiling
to 21,220 bytes. The refresh's own rule, that it never overwrites a present
seed, holds for the starter; a fork that takes the starter's history by
Git merge meets those changes as conflicts and auto-merges against its own
seeds. Decision, file by file: `README.md`, `dotln.config.json` and
`docs/lineage/README.md` keep this instance's bytes (the front page is the
instance's introduction with its release block, the configuration carries
the registered repository and the elections, and the lineage index is
regenerated from this ledger, which left it unchanged); the closed
`WO-001`'s text is restored to its filed bytes, because its criteria are
judged records and the refresh's own rule leaves an instance's `WO-001`
unrewritten; `docs/control/budgets.json` keeps the merged ceiling of
21,220 bytes, because 16,384 was the kit's seed value and never a figure
the operator set, the breach it produced refused nothing in any pass, and
the kit retired the figure in its own template; `CLAUDE.md`'s generated
block, which the merge had stripped of its Codex and Copilot lines, is the
emit's again.

Rejected: taking the starter's `README.md` (axis: an instance's front page
is its own; the kit's rendering would replace the introduction and the
release block the operator kept); keeping the router ceiling at 16,384
(axis: it carries two breach lines on a kit skill no fork edits, and the
NoOps of the four previous passes named a starter change as the
reevaluation); taking the refreshed `WO-001` text (axis: a closed order's
criteria are the record of what was judged). Reopen: the operator sets the
router ceiling, a later refresh changes a seed this instance customized, or
a kit check reads a seed this fork resolved differently from the starter.

### D3. The host rows inferred, and the two elections this fork does not make

v0.121.0 makes Codex and Copilot support elections, off for a new instance
and inferred on for an instance whose committed record shows the host. The
preview and the starter's refresh commit remove the Codex surfaces, since
the starter is exported with every other host off, and the merge deleted
them from this branch; the emit then read `host-codex` inferred on from
the order attestations under `docs/control/orders/` and the discovery
record, and `host-copilot` inferred on from the discovery record, and wrote
the seven Codex skill files and the four `.codex/` files again, so the
bundle is the one this fork had, with the worker definitions carrying the
release's new sentences. Decision: no election is written by hand, because
the inference reads the committed record this fork keeps and an explicit
row would restate it. Two elections stay unmade: `auto-update-upstream`,
because the rule it lifts is the operator's direction of 2026-11-03 and the
record carries it, and `verbatim-operator-words`, because the fork's
records have been written under the Direct quotes item since 2026-10-19
and the screen passed on its first run here. The operator record's Starter
updates item names the first election as not elected, so a planner reading
the rule sees the opt-out and that it is declined.

Rejected: writing `features.host-codex: true` (axis: a second source of the
same truth, which the inference would then ignore); electing
`auto-update-upstream` to spare the capture flags (axis: the rule is the
operator's, and the flags cost one line). Reopen: the inference turns off a
host the operator uses, the operator asks for either election, or a kit
release reads the host rows differently.

### D4. WO-039 leaves the sequence; the five orders that can activate next take its merge

WO-039 closed since the previous pass (DotLn-Angular #18, `DotLn Angular
v0.11.1`, its launchpad records #70, the release close 16 s), so it leaves
the sequence at this pass, as closed entries do; the generated history page
is its record. WO-024 and WO-040 are the lane pair that activates next and
both hold a hard edge on WO-039; WO-029, WO-030 and WO-031 are the research
orders that can activate now, WO-031's wait on WO-039 over under WS-002 rule
6. All five take WO-039's merge `eb9d227` as their base, as WS-001 §Bases
asks of the pass before an order activates, and their observed gaps were
re-read there: the merge changed 59 enterprise files, seven shared study
modules, the states, timeline and drawn-text composites, the twenty
messaging specs and the RxJS localization spec (the one loader's import
only), the tools test kit, the check and the two reference documents, and
no movement file, no `flow.ts`, no message catalog and no catalog data
file. So WO-040's measures (39 functions of six or more parameters, one of
eight, eleven at 70 lines or more, 21 flat keys, two numbered
placeholders, `frameOf` at nine) stand, the stream batches' modules stand
with their specs importing `loadModelStudy`, and the research orders'
candidate lists and counts hold. WO-032 waits for WO-024 and keeps its
base.

Traps: shifting the burden would re-base every open order every pass; the
rule is the pass before activation. NoOp of leaving the five at `f99580f`:
declined, because an executor would open a worktree one merge behind
`main` and a research batch's authors would copy specs that import a
loader the base no longer has.

### D5. Rule 31 is met by WO-040's place; WO-039's residue waits for the enterprise batch's next standards pass

WS-001 rule 31 has each planning pass file or sequence a standards pass
over the code the orders since the previous one landed, ahead of the next
feature order. Since the previous pass one order landed code, WO-039, a
standards pass itself: its audit reads the enterprise batch at zero
functions over four parameters and one at 70 lines or more with the
executor's judgment recorded, and its reviewers boarded two residue items
for the next standards pass over the enterprise batch or the `states`
family (D016's states shape typed by the study's own unions, D017's
Service Layer note reading its tab from one table). WO-040, the third
standards pass, is sequenced ahead of WO-035, the next feature order, so
the rule's sequencing clause is met. Decision: no fourth standards order
this pass. The two residue rows stay deferred for the standards pass that
follows WO-031's batch, which copies the reshaped enterprise shape (WS-002
rule 6's symmetry: the pass boarded against a work's code reads the batch
and the residue together), and the pass that files it allocates them.

Rejected: adding the two items to WO-040 (axis: WO-040's surfaces are the
movement and stream studies, disjoint from WO-024's; the `states` family
and the enterprise presentations are the files WO-031's authors copy and
may run beside, so the addition would put two worktrees on one module for
two typed items); a standards order over the enterprise batch now (axis:
one cycle for two items the executor judged below its own order's bar).
Reopen: WO-031 merges, or a reader finds a shape in the enterprise batch
the rule refuses before then.

### D6. The record-links row settles on the GitHub check; the profile states the kit's rule

The previous pass re-deferred `FUP-575ebb5d3b7e46e0` with the condition
that the first record filed under the commit-first route names a commit
whose link destinations resolve on the launchpad's public repository.
WO-039's reviewer committed the records before `target-records`, as the
profile's step 3 says, and the three filed records name `62c22c9`: the
GitHub API finds the commit, and every relative link destination of
VER-001 (21 distinct) and FINAL-001 (17 distinct) resolves at it through
the contents API, read by a script in the session scratch over the records
in the target; `decisions.md` has no relative link. The row settles, with
the condition that a filed record's link fails to resolve on GitHub as its
reopening. v0.122.0 makes the route the kit's: `target-records` refuses an
uncommitted source and the launchpad publish form refuses until the passing
final review is in the committed control record, so the profile's step 3
no longer calls the commit-first route core's interim route and states
both refusals. §Requests to core carries the result, the confirmation core's
WO-259-D015 said it could not run.

Traps: a pass that reports the check and leaves the row deferred would
shift the burden to the next pass for nothing. NoOp of leaving the row
deferred until a starter carries WO-259: declined, because this update is
that starter and the condition fired.

### D7. Observed, not rules: the tags, the clone's fetch, the hook's reading and the watcher

The session repeated the `--tags` fetch the 2026-11-05 and 2026-11-06
passes recorded, deleted the 43 tags before any release command and asks
core for an advisory (§Requests to core); the profile's §Keep starter tags
separate already says what to run. The session fetched the registered
clone's `origin` to read WO-039's merge, which updated the clone's
remote-tracking refs and tags and changed nothing in its tree; a read of
`origin/main` through `gh` would have done, and the remaining reads of the
clone were reads. The hook read the dispatch behind the host's `/model`
command block on the first prompt. The verbatim screen's first run over
this planning branch failed seventeen lines of this document and the
ledger's registration heading, every one against a file the session
itself had written: the update pull request's body and the register batch,
kept under `docs/intake/` as the previous passes kept theirs, and the
header prose of this dispatch's capture and the previous one's, in which
the session describes the time, host and model; the screen reads every text
file under the intake root as a capture of the operator's words. The two
drafts moved to `docs/control/local/planning/`, the ignored local control
lane, and the two header-echo lines were rephrased; the screen then read
14 changed files against 259 captures with no shared run. The earlier
passes' refute prompts, review logs and bodies stay in intake and did not
collide today; §Requests to core carries the ask. The merge watcher, a shell loop over
`gh pr view`, was not counted by the hook as a worker use this time (the usage line read launched 0 after it ended), where the 2026-11-06 and first 2026-11-08 passes saw it counted as one unattributed use; the count is reported as observed. None enters a standing document.

## Register

The register was synced before the dispositions (no public source had
changed) and the batch applied at revision `874ce3f8…`, leaving it at
`a86f0111…` (the batch is kept in
the ignored local control lane as
`docs/control/local/planning/followups-apply-2026-11-08-second.json`, not
in intake, for the reason D7 records).
One row was settled on the GitHub check, leaving 42 pending rows, all
deferred and none untriaged or needing review; the other forty-two keep
their state, read as this pass's scope touched them.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| FUP-575ebb5d3b7e46e0 (WO-027-D013, the filed records' links) | **settled** — WO-039's three records, filed after the reviewer committed them, name launchpad commit `62c22c9`, which GitHub finds; VER-001's 21 and FINAL-001's 17 distinct relative link destinations all resolve there through the GitHub contents API (D6). v0.122.0 makes the route the kit's refusal. | A filed record names a launchpad commit that GitHub does not find, or a relative link of a filed record does not resolve at the commit its footer names. |

Rows read and left as they stand, their conditions not fired:
`FUP-5af094bffcaf27ef`, `FUP-11889720fb205fb0` and `FUP-b730246e24e0c264`
(WO-039's own deferrals: the A/B testing pass's hyphenation and the two
residue items for the enterprise batch's next standards pass, D5),
`FUP-02c1ebe8146fe2f1` (WO-023-D008, the deferred rounds: no A/B testing
pass is filed and the operator named no time), `FUP-4091de8ba4313b4c` (the
three reviews as a kit step: core's WO-244 is in execution),
`FUP-b2ca88c7d6462f27` (WO-028-D055, the loading unit: no regression is
measured), `FUP-038033632f4116e6` (the close's removal step: WO-039's
removal took 11.1 s of a 16 s close, below the row's 58 s to 3 min 28 s),
`FUP-3777717897701f29` (the fork's bound values; no stop recorded),
`FUP-2ed0c79e62b53dd7` and `FUP-35187266d29e00dc` (the pass before WO-016
activates), `FUP-5538fd060f7a5e9c` and `FUP-223cde718a523e67` (no title
has failed and no fork pull request exists), `FUP-c85b18619ccecfcf` (the
hook latency under the grant), and the candidate rows of the earlier
passes, each read against its condition.

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-120-1-standards-orders-core-answers-2026-11-08.md",
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
| A fourth standards order now, over WO-039's residue | The code that landed since the previous pass is WO-039's own reshape, measured clean, and its two residue items live in the files WO-031's authors copy; WO-040 is the sequenced standards pass rule 31 asks for (D5). Evidence: WO-039's `shape-audit-after.json`; `FUP-11889720fb205fb0`, `FUP-b730246e24e0c264`; WS-002 rule 6. | WO-031 merges, which makes the enterprise batch's next standards pass due. | Every typed shape in the enterprise batch is checked by the compiler against the study's own unions. |
| Adding WO-039's two residue items to WO-040 | WO-040's surfaces are the movement and stream studies; the `states` family is the file WO-031 may run beside (D5). Evidence: WO-040's Cost line; WS-002's member table. | WO-031 closes before WO-040 activates. | One worktree at a time touches the `states` builder. |
| A dedicated A/B testing order now, for the states family's rounds and the narrow register's hyphenation | The operator delayed the rounds and named no time; WO-039-D011 and D015 send the heading cases to the same pass. Evidence: `FUP-02c1ebe8146fe2f1`, `FUP-5af094bffcaf27ef`. | The operator asks for the rounds or names the pass. | The states register's pair and its headings are judged by the operator's eye. |
| Electing `features.host-codex` and `features.host-copilot` by hand | The inference reads the committed record this fork keeps and turned both on (D3). Evidence: `npm run features -- list`; the re-emitted surfaces. | The inference turns a used host off, or the operator asks. | The configuration says once what the record already shows. |
| Electing `features.auto-update-upstream` | The rule it lifts is the operator's direction of 2026-11-03; the capture flags cost one line per update (D3). Evidence: the operator record's Starter updates item; #71's admission. | The operator asks for the election. | A pass takes a release without recording the operator's words. |
| Electing `features.verbatim-operator-words` | The fork's records have paraphrased and cited digests since 2026-10-19, and the screen passed on its first run (D3). Evidence: the update branch's `test:docs`. | The screen fails a line whose run is not the operator's words. | Committed text never carries the operator's words. |
| Keeping the router cold-start ceiling at 16,384 | The figure was the kit's seed value, the breach refused nothing and the template retired it (D2). Evidence: the previous passes' breach lines; the merge diff. | The operator sets the ceiling. | A breach line means a ceiling someone chose. |
| Taking the refreshed `WO-001` text or the starter's `README.md` | A closed order's criteria are judged records; the front page is the instance's (D2). Evidence: the merge's auto-merge and conflict. | A later refresh changes a seed this instance customized. | Every seed the fork keeps is the fork's choice. |
| Re-basing WO-032, WO-035, WO-037 and WO-038 now | The pass before each activates sets its base (WS-001 §Bases); a base set today would be stale by then. Evidence: the index's integration column; D4. | An order of that group is next to activate. | Every open order's base is current at every pass. |
| Refilling the research track | Four research orders are queued (WO-029 to WO-032) and the queue is refilled when fewer than two are (WS-002 rule 6). Evidence: WS-002's member table. | Two of the four close. | The Codex capacity has a next order waiting. |
| A fork order or write-back for the hook's `--tags` advisory | The fetch is the kit's hook's to advise on and the profile already says what to run; the ask goes to core (D7). Evidence: three passes' entry observations. | Core declines and the error recurs. | A session's first fetch brings no starter tag in. |
| Recording the clone's fetch as a rule | One session's step; the profile's reads are reads and the judge-only clone installs nothing. Evidence: D7. | A fetch changes the registered clone's tree or a hook refuses it. | Every read of the target is a read. |
| Updating the README's release block | The block names the release the next launchpad order prepares; `v0.3.5` is published and no self order is queued. Evidence: `README.md` §Close a release. | A launchpad order activates. | The block is never stale between orders. |
| Reopening an order on the machinery-share signal | The share is 0.225 (Δ −0.008) and no reopen candidate prints. Evidence: `npm run meta -- --plan-cost`. | The next closed order's delta worsens with a delivery order closed. | The share falls because delivery orders closed. |

## Sequence

WO-039 leaves as closed. WO-024 and WO-040 are the lane pair at the front
(disjoint surfaces, no edge between them, the second publisher integrating
the target's `main`), both on WO-039's merge; WO-035, WO-036, WO-037 and
WO-038 follow one at a time; WO-016, WO-008, WO-017 and WO-018 keep their
relative order after them. WS-002's members stay a separate track with no
sequence entry: WO-029, WO-030 and WO-031 are runnable now on Codex at
WO-039's merge, WO-032 after WO-024; no refill, four research orders being
queued. What the operator sees after each order lands: after WO-024, twenty
more studies under Tools with the `relations` family; after WO-040, nothing
new on screen but nineteen flow state sentences that read as English, both
movement batches reading as one example; after WO-035, nothing changed on
screen, every string of the catalog arriving through the message system and
a missing one a visible failure; after WO-036, walls and obstacles they
draw on the field, a squad routing around them and replanning, a no-route
state they can read, and the A* study stepping its search; after WO-037,
units firing at a target, bullets stopped by walls, a moving target led and
hit, a knockout; after WO-038, the reading using their full screen; after
WO-016, the machinery view; after WO-008, login and permissions; after
WO-017, the twin's first lane; after WO-018, the Art of War toys on the
shelf. After each research order, twenty more studied concepts in its
work's landed family, and after WO-036 the pathfinding chapter joins AI for
Games' drawable rows. The pass before WO-016 activates still owes WO-016 its
base and the receipt 012 known issues (`FUP-2ed0c79e62b53dd7`).

## Write-backs

- The operator record: §Standing preferences, the Starter updates item
  names the kit's `features.auto-update-upstream` election as the opt-out
  this fork does not make (D3). Nothing else in the record changed today;
  WO-039's cycle recorded no operator direction in its decisions.
- WS-001: the member table's bases for WO-024 and WO-040; the landed
  paragraph (WO-039 as `v0.11.1`); the lies-ahead table (WO-039 merged);
  the delivery states (WO-039 merged with its records #70).
- WS-002: the member table's bases for WO-029, WO-030 and WO-031 and
  WO-031's wait over; the dependency paragraph (WO-039 merged on
  2026-11-08 as DotLn-Angular #18).
- `docs/repositories/dotln-angular.md`: the facts table (last reviewed
  source `eb9d227`, #18, 2026-11-08; `DotLn Angular v0.11.1`); the release
  table's v0.11.1 row; the areas table (WO-039: the enterprise batch's
  lookup tables, the inferred transition, the one model-study loader, the
  chart axes and the narrow register's rule); the publish route's step 3
  (the kit's two refusals in place of the interim route) (D6).
- `docs/planning/sequence.md` (D4); the idea ledger's registration heading
  and the regenerated lineage index; the generated work-order index and
  history page; the follow-up register (the batch above); the cost table.
- WO-024, WO-040, WO-029, WO-030 and WO-031 amended (§Orders filed and
  amended).
- No budget, ceiling or baseline is raised by this pass; the router
  cold-start ceiling moved to the kit template's 21,220 bytes in the
  update (#71), not here (D2).

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[]
```

<!-- dotln-rules-recorded:end -->

No operator direction entered a standing document this pass: the dispatch
line asked for the pass and the update and gave no rule, and WO-039's
executor, verifier and reviewer recorded none in the order's decisions,
verification or final review. The block stays as `plan start` wrote it.

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.122.0

From DotLn-Enterprise-Starter's 2026-11-08 planning pass (its second that day), docs/planning/passes/standard-pass-v0-122-0-wo-039-retired-record-links-settled-2026-11-08.md. These are the fork's findings, not new operator direction. No answer block of yours was pasted into this dispatch, so none is read; your items of 2026-11-07 were reconciled by the fork's first pass of 2026-11-08.

1. Starter v0.122.0 is taken (#71), on the operator's word in the dispatch of that session, two refresh commits at once (v0.121.0 and v0.122.0). Preview 109 replaced, 4 added, 11 removed (the Codex surfaces the starter exports with every other host off), 0 refused, no instance action; harness emit 43 surfaces; the four gates green in 0 h 2 min; update --publish and update --finish admitted with --operator-request --capture --capture-hash on the first try. The host rows read host-codex inferred on from the order attestations and the discovery record and host-copilot inferred on from the discovery record, so the emit re-created the Codex surfaces the merge had deleted; the fork elects neither by hand. Nothing asked.

2. Observation on WO-258's starter refresh, for the kit guide §Taking upstream updates: a fork that takes the starter's history by Git merge meets the refresh's seed additions and rewrites as conflicts and auto-merges against its own seeds. This update produced three add/add conflicts (README.md, dotln.config.json, docs/lineage/README.md) and two silent auto-merges: the seeded first order's refreshed objective, checklist item 4 and criterion 3 merged into the fork's closed WO-001, and the budgets template's router ceiling (21,220) merged into the fork's budgets. The fork kept its own bytes for the three conflicts, restored the closed order's filed text and kept the ceiling. Ask: one sentence in the guide's update section saying that a fork resolves seed conflicts to its own bytes and restores a closed order's text, or a refresh that writes a seed only where the starter's copy equals the export's, so a fork's merge sees no change to a seed it already had.

3. The GitHub check WO-259-D015 waits for: WO-039's three records, filed after the reviewer committed them under the fork's commit-first route, name launchpad commit 62c22c96685902ea42e4a65e0d7c53b3fd850af0; the GitHub API finds it, and every relative link destination of VER-001 (21 distinct) and FINAL-001 (17 distinct) resolves at that commit through the contents API; decisions.md carries no relative link. The fork's row FUP-575ebb5d3b7e46e0 is settled. Nothing asked.

4. Observation on WO-259's screen: the first run in the fork, on the update branch, read 71 changed files against 260 captures over the twelve-word window with no shared run, and printed five advisories on records written before the branch (attributed speech without a capture digest), which the forward-only rule leaves as written; the terms task passed with the present list, and update --publish passed its own screen. Nothing asked.

5. Ask: a near-miss advisory when a session runs git fetch <remote> --tags against a remote whose tagOpt is --no-tags. The fork's planner made that error for the third time (2026-11-05, 2026-11-06 and today), each time deleting the starter's tags before any release command ran; the profile's §Keep starter tags separate already names the right fetch, and the error is a reading failure a hook could catch at the command.

6. Observation on resume status for a closed order: after WO-039's release close, npm run resume -- status --json prints phase closed with route.stop.reason awaiting-merge and a next step that names the operator's merge and the drive phrase, while legalNextActions reads release-close, next and activate; a closed order's route could say closed. Nothing asked beyond noting it.

8. Observation and ask on WO-259's screen: its capture set is every text file under docs/intake, and this fork's intake holds files the session wrote and the operator never did, the update pull request's body, the register batch, the refute prompt and result, review logs and the captures' own header prose describing the time, host and model. The planning document's first gate run failed seventeen lines, all against those files; the pass moved its two drafts to docs/control/local/planning/ and rephrased the two lines that echoed the capture headers, and the screen then passed with no shared run. The earlier passes' refute prompts under intake carry whole planning subjects, so a later pass that reuses an earlier document's sentence may collide with them. Ask: a way to tell the screen which files are the operator's words (a marker in the capture, a sub-root such as docs/intake/notes/ and docs/intake/chats/, or an ignored list of session-written paths), or a kit convention for where a session keeps its own drafts.

7. Observation on an order's cycle under v0.120.1: WO-039 ran 3 h 4 min in implementation against this fork's 1 h 23 min median, with a review ladder of two rounds and nineteen findings in round 1, 0 escapes at final review and a 16 s release close. Nothing asked.
```

## Process cost

Model and effort: Fable 5.1 at `max`, operator-selected (the session's
`/model` line). Usage: 96,616 tokens at the role's resolution (22:07:35Z: 4
input, 72,024 cached, 23,503 cache-write, 1,085 output); TBD-FINAL-USAGE,
source the transcript counter, scope dispatch; dispatch standing TBD-STANDING
of an unset bound at that reading.
Subagents: budget 40 (`subagentCap`); the plan stated before the first
spawn: three Codex review workers through `npm run worker -- review --host
codex --subject planning` (the criteria adversary with `--capture`, the
design improver, the consistency reviewer), one recheck round only if a
blocking finding is repaired, and one background `dotln-worker` refuter
through the direct route, each launched once: four to six uses, no
descendant; the merge watcher, a shell loop over `gh pr view`, was not counted by the hook this time (D7). Spent: TBD-SPENT.
Wall-clock of the pass's commands: the preview 328 ms; the update's four
gates 0 h 2 min; `update --finish` `node scripts/launchpad.mjs update --finish` on clean `main` with the same flags, since this checkout ran v0.120.1's launchpad whose refusal applies under a journaled dispatch: fetched `origin`, fast-forwarded `main` to `711f185`, emitted 43 surfaces, bootstrapped (one preparation step); 2 s (22:33:04Z to 22:33:06Z)-TIME; the link check over the
three records seconds; the document check 0 h 1 min a run, three runs on
the planning branch; the register batch, the index and the cost table
seconds each; the reviews and the refuter in §Validation. Against the NoOp
of doing nothing: the update is on `main`, the five orders that can
activate next are current at WO-039's merge, the record-links row is
settled on the evidence core asked for, and the profile states the kit's
rule.

## Validation

TBD-VALIDATION
