# standard pass v1 0 0 — 2026-11-14

## Dispatch and capture

The operator dispatched a `planning:` pass on 2026-11-14 (the prompt hook's
time 19:47:37Z) as one typed line with two parts: a standard planning pass,
and the latest upstream. The hook resolved the role planner on the first
prompt, behind the host's own block for a model selection. The host was
Claude Code 2.1.325 (`claude --version`) running Fable 5.2 at `max`
(`CLAUDE_EFFORT`), the operator's selection. The line names no worker, so
the workers this pass launches are the instance's `default`.

The capture is `docs/intake/notes/planning-2026-11-14.md`, 54 bytes, SHA-256
`ff9c3db3880e2ab9f4b07b5e909ee48e28a94fe5d1a33f5ed14ce9a836242098`. It holds
the operator's line and nothing else, and its digest is the digest the
session journal recorded for the message (row 2026-11-14T19:47:37.247Z).
The operator sent no other word before the first handoff.

The aim, stated before acting: take starter v1.0.0 first, through an update
pull request the operator merges, since the dispatch asks for it; then run
the standard pass on the updated `main`, which for this pass means reading
what a release of that size changes for this instance's records, orders and
register, and changing only what the evidence says is now wrong.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `52a0ae7` (#74) at the dispatch, clean; one writer, this session; no order worktree; no open issue or pull request; starter v0.122.1; `Launchpad v0.3.5` the latest release | `git status`, `node scripts/harness.mjs writer --show`, `gh pr list` and `gh issue list` with the repository named, `UPSTREAM.md`, `npm run release -- list` |
| Upstream | one refresh commit past v0.122.1: `cd8ea69`, starter v1.0.0, core WO-276 at core commit `ed66a822`, released 2026-11-14T19:35:50Z, twelve minutes before the dispatch; fetched into `refs/upstream-releases/v1.0.0` with the ref-specific fetch, so the clone keeps its eight tags | `gh release list` on the starter, `git fetch --no-tags upstream refs/tags/v1.0.0:refs/upstream-releases/v1.0.0`, `git tag -l` |
| The preview | by the incoming launchpad from a detached worktree: 298 kit files replaced, 53 added, 70 removed, 0 refused, 750 unchanged; no instance action; build snapshot `fnv1a64:985cc33820593ad6` to `fnv1a64:1c29526f5e6dd390`. Above the kit rows it lists five instance files both sides changed since the merge base `fffd0cd`, to be kept at this instance's bytes, and it plans the emitted harness manifest as `re-emitted` where the previous update's preview read it refused | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v1.0.0` |
| The update | merge commit `8c7a090`, with conflicts in three of the five instance files and in the generated harness manifest; the five resolved to this instance's bytes (D1); `npm ci`; `harness emit` 37 surfaces on its second run (D2); the lineage index; `npm run sync`, which regenerated the features page, the order index with its two new records and the follow-up register (D4); committed as `93ef205` | `git diff --cached --quiet main -- <path>` for each of the five; the commands on the branch |
| The checks on the update branch | `node scripts/doctor.mjs` 0 unmet of 10 rows; `harness check` 37 surfaces; `lineage index --check`; `launchpad verify` 1,101 kit files at `ed66a822`, the one surface this instance's emit writes accepted; `work-orders index --check`; `plan check` with 28 receipts and the four amendments of the previous pass read as before; `npm test` 7 passed, 0 h 1 min; `npm run test:docs` 15 passed, 0 h 1 min, with five advisories on operator-attributed words in records filed before this release; `node scripts/terms.mjs branch` 367 changed files, no line in either mode | the logs in the session's scratchpad |
| Pull request #75 | opened by `node scripts/launchpad.mjs update --publish --from refs/upstream-releases/v1.0.0` with the operator-request flags naming the capture, admitted on the first try; merged by the operator at 20:08:53Z as `b11ad86` | the helper's output; `gh pr view 75` |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main` with the same flags: fast-forwarded to `b11ad86`, emitted 37 surfaces, bootstrapped | the command's output |
| `plan start` | this branch and the document's skeleton; no red tag carried; failures, reader scores, conditions, census, prune and branch 0 h 0 min each; the prune removed 152 candidates of 16,729,559 bytes and left none | `npm run plan -- start standard-pass-v1-0-0` |
| The failure feed | nothing ran between the previous receipt (2026-11-10T05:28Z) and this dispatch: no verification, review, repair, close, denial or bound stop; the four rows it lists are the previous pass's own amendments | the start report; `npm run plan -- failures` |
| Conditions, register, documents | 0 conditions holding or unknown; 226 register rows, 45 pending (37 deferred, 4 whose source reads missing and 4 untriaged, D4); 83 standing, 700 record and 13 generated documents, no red tag | the start report |
| DotLn-Angular | `main` at `eb9d227` (#18, WO-039's merge), the registered clone clean; `DotLn Angular v0.11.1`; no open issue or pull request; nothing merged since the previous pass | `git -C ../DotLn-Angular log`, `git status`, `gh pr list`, `gh issue list`, `gh release list` |
| Core | `main` at `ed66a822` (#289, WO-276's merge, v1.0.0); no open issue | `git -C ../DotLn log`, `gh issue list` |
| Usage at entry | 95,103 tokens by the transcript counter, scope dispatch; workers 0 of 40. The dispatch standing read a start of 2026-11-08T22:07Z, an earlier planning dispatch's, as the previous pass reported; core filed that as a part of WO-276, and a standing begun before the update does not show whether it holds | `node scripts/harness.mjs usage ea774e0b-ba63-49ba-967a-e4e3f0b845fb` |

### What v1.0.0 asks an instance to read

The release carries core WO-276 alone, an order of eighteen parts that
lands a queue of fifteen filed orders with this fork's asks among them. Its
Read before upgrading is the longest this fork has taken. Each item, read
against this instance:

| The release says | Here | What the pass did |
| --- | --- | --- |
| Sort the private list first: an entry with no marker becomes a context entry, which stops no gate, publish or export | the list held no entry under `refuse:`, counted by the kit's own parser with nothing printed; before v1.0.0 a match of any entry refused in this repository's gates and its planning publish | told the operator in the update pull request's first section and in the session, since the list is theirs to mark; the list stood unchanged at the merge. The pass holds its own text to the earlier rule (D3) |
| Elect the hosts you use: a host only a discovery record showed is off | Codex reads inferred on from the committed control log's order attestations; Copilot, which only the discovery record showed, reads off | no election made (D1); the emit dropped the Copilot profile and its line of the instruction file's generated block |
| A seeded first order that has not run keeps its old text | WO-001 closed on 2026-10-15 | kept at its filed bytes through the merge |
| Emit, lineage index and sync on the update branch; the index's two new records; then `plan check`, which refuses an earlier receipt whose order holds a bold paragraph after its criteria or non-goals | this instance has no roadmap that carries the release-history block, so the index command wrote `docs/control/release-history.json` and `docs/control/workstream-observations.json`; `plan check` passed with all 28 receipts | committed the regenerated bytes on the update branch |
| How orders are read: header fields from the leading header alone; a criteria list the parser reads shorter than written is refused; elsewhere a wrapped line that opens a block is read differently and nothing refuses | `work-orders index --check` refuses no order. A scan with the kit's parser of the 42 orders and of 365 decisions, reports, planning documents, workstreams, profiles and the operator record found no block that opens straight after a line of text except the kit's own closing markers. Seven inline HTML nodes stand in two closed orders (WO-009 and WO-020) and open no block; one wrapped line of the 2026-10-26 pass document opens with a number and a parenthesis, in prose no reader acts on | nothing to repair and nothing to report under this item |
| A resident is started with its launcher | this instance runs none | nothing |
| Files that arrive or leave | `.gitattributes` arrived and a renormalize staged nothing; `FOR-CORE.md`, `docs/OPERATOR.md`, `THIRD_PARTY_NOTICES` and the carried Markdown parser arrived; `docs/workstreams/README.md`, which this instance had not changed, took the starter's text; the emit removed the four presence hook files and the two per-model worker definitions | D5 and D6 take up what the new file for core and the worker table change in this instance's own records |
| Configuration that is now judged | no `dotln.models.json`, no `workers` or `extensions` section and no `spend.daily`; `repositories.dotln-angular.records` is undeclared, which reads `target`, where the operator's direction of 2026-10-23 put the records | nothing |
| Refusals added | the file-events daemon measured about 20 MiB at the two gates against the 1 GiB refusal; the update's publish judged the merge and admitted it with nothing taken | nothing |
| An update of v0.121.0 or v0.122.0 taken by merge | the second 2026-11-08 pass had restored WO-001 to its filed bytes and recorded the one merged budgets value, the router's cold-start ceiling, as its decision; `git diff` of the two files across #71 and #73 shows that value and nothing else | nothing |
| Interfaces a tool may rely on | `npm run resume -- status --json` prints `schemaVersion` first; the release-note switch that the kit keyed on the number WO-024 is keyed on core's own root (`scripts/release.mjs`, the `isCoreRoot` test) | this fork's WO-024 keeps its number |

The machine-derived notices ask for the regenerated pages, which the sync
wrote, and for a new session after the re-emit, since a host reads its
hook registrations when a session starts. This session started before the
update, so it holds the earlier registrations, four of which name the
removed presence files; the sessions the operator starts next read the new
ones.

### Core's answers to the previous pass's asks

The operator pasted no block from core into this dispatch. Core's planning
pass of 2026-11-10 wrote its answers to this fork's blocks of 2026-11-09
into its own planning document, which the pass read in the core clone
beside the launchpad at `ed66a822`. They are a core session's text, read
as evidence. Every item it answers as filed is a part of WO-276, so the
release this pass took carries them, and the pass checked each against the
kit now in the tree:

| Subject | Core's answer | Observed on v1.0.0 |
| --- | --- | --- |
| The verbatim screen failing on a document's path | filed: a link target, a URL, a code span and a path each count as one word | the update branch's first `npm run test:docs` passed, where the previous update's first run failed three lines on a document's path |
| WO-039's route reading awaiting-merge after its close | filed: a close that records its target published or current, with the cleanup clean, counts as settled | `npm run resume -- status --json` on `main` reads `released` for WO-039 |
| The emitted harness manifest refused at each update | filed: a generated surface the instance's emit wrote is planned as re-emitted where its harness check passes | the preview's row reads `re-emitted` and `launchpad verify` accepts the surface; D2 records what the merge route still leaves to the session |
| The planner's standing that began before its session | filed | not observable in a session whose standing began before the update; the next pass's first readback shows it |
| Re-tasking a research worker | filed: a re-task that carries on a worker's research from what it has read is admitted and is one use | the planner's root says so |
| Core's order numbers compared in the kit's code | filed: each site asks whether the root is core's first | read at the release-note switch and the receipt renderer; WO-024 keeps its number |
| The split criteria review that kept nothing | filed: the Items table is owed once, by the merged report, and a refused report is kept in its lane | product 07 §Review helper and round reports says so; this pass's criteria review is its first run here (§Validation) |
| The document check's time | filed with the screen's change | the document gate ran in 0 h 1 min on the update branch |
| Removing a filed order that never activated; a register batch judged on the state it produces | filed | the register's batch reader judges allocation targets on the state the whole batch leaves (`scripts/lib/planning-followups.mjs`); no order is removed in this pass |
| A repaired known issue | filed: `plan dispose` takes a known issue's identifier as it takes a hold's | product 07 says so; §Validation uses it if the refuter names one this pass repairs |
| The app's observation on attestations and waits | recorded as a candidate in core, not filed | nothing; no order here is stopped for it |

Core's note asked for two things once the release was taken: the index
refresh, which the update branch made, and a resident started through its
launcher, which this instance does not run.

### How this instance's own records were read

Nothing ran in either repository since the previous pass, so the question
for the plan was what the release makes wrong in it. Three read-only
research workers (`dotln-worker`, the instance's `default`) read: WO-046 and
WO-016 against core at `ed66a822` beside the earlier pin; this instance's
standing documents against the kit's guides before and after the update;
and the kit-facing text of the seventeen open orders (lifecycle steps,
review rounds, worker launches, record paths, header fields, notes that
wait on a release) with the closed orders' steps they borrow. Each was told
that no change is a valid finding. The planner checked each claim it acted
on:

| Finding | The planner's own check |
| --- | --- |
| WO-046 at core's v1.0.0: another manifest digest, 36 installed surfaces, five agent definitions and no `.codex/agents/` | `git -C ../DotLn show ed66a822:.claude/harness-manifest.json` hashed and counted; `git ls-tree` of the two agent directories |
| WO-046's reading rule gives the same capacities at both commits | the worker's probe run again at `ed66a822`; its two outputs differ only by the four removed presence hooks and the two removed worker definitions |
| The bytes of the inputs the Observed gap names | `git ls-tree -r -l` at `ed66a822`: 1,093,952 and 4,455 for the six package manifests |
| GitHub serves the new pin | `gh api` on the commit and on the `v1.0.0` tag ref of core's repository |
| The review helper's `--target` mode arrived with starter v0.118.0 | `git log -S` over product 07; `scripts/lib/review-worker.mjs` |
| A dispatch bound counts worked time | the kit guide's paragraph on `wallClockMs` |
| The emitted hook registration is in the form observed on Claude Code alone | the matchers of `.claude/settings.json`; the kit guide's §Hooks |
| The briefing looks for a heading `Rules` in a workstream document | `scripts/resume.mjs`, a reading the previous kit did not have |
| The target gate admits `--review` alone and runs every declared command | `scripts/target-gate.mjs` and `scripts/lib/target-gate.mjs` |
| The instance's worker cap is forty | `docs/control/budgets.json`; WO-023-D014 in the target's records |
| WO-014's order total is still printed | `npm run meta -- --usage` prints 117,733,609 for WO-014 |
| No order loses a path to the update | a script over the seventeen orders' path-like names against the launchpad tree before and after the update and the target at `eb9d227`: the one name the update removes, `.codex/agents/`, is a path of core's that two orders name. In the seven amended orders every other name that matches no file is one its order creates, an ignored capture that exists, a branch name or a placeholder |
| How the new reader takes the orders | the worker loaded the kit's own readers: every header ends at its Objective, no criteria or plan list is refused, no bold paragraph follows a criteria list and no preflight advisory prints |

## Orders filed and amended

No order is filed and none removed. Seven are amended, each with one
sentence in its provenance naming this pass and its decision. The ten other
open orders are unchanged and carry their verdicts by hash: WO-036, WO-037,
WO-040, WO-008, WO-045, WO-044, WO-035, WO-017, WO-016 and WO-018.

| Order | Change | Decision |
| --- | --- | --- |
| WO-046 the machinery view | amended: the pin moves from core's v0.122.1 to its v1.0.0, and the statements that depend on it are read again there (the manifest's digest, 36 installed surfaces, the agent definitions, the byte measure, criterion 3's command) | D7 |
| WO-024 concept studies V | amended: the fan-out names its workers from the instance's worker table, where it reached a removed worker definition through WO-020's procedure | D6 |
| WO-043 the Art of War map pass | amended: the fan-out names its workers from the worker table, where it named the removed definition | D6 |
| WO-029, WO-030, WO-031, WO-032 research | amended: the Model line and the fan-out name the `default` worker in place of a model id, and the fan-out no longer states the cap's earlier figure | D6 |

## Decisions

### D1. The update keeps this instance's bytes in five files and elects no host

The preview named five instance files that this fork and the starter had
both changed since v0.122.1: `AI-HARNESS-SECURITY.md`, `CLAUDE.md`,
`docs/control/budgets.json`, `docs/repositories/README.md` and the closed
`docs/work-orders/WO-001-environment-truth.md`. Git stopped on three of
them and merged `CLAUDE.md` and the budgets file in silence. All five were
set back to `main`'s bytes in the merge commit, the kit's rule for an
update from v1.0.0 on, and the publish judged that commit and admitted it
with no `--take`. What the starter's side would have brought, and why each
is left: a restated Secrets paragraph in the instruction file, whose
hand-written part is this instance's and still says nothing false (a match
is reported by file and line and the list's entries are never printed); a
`spend.daily` block of two nulls in the budgets, which an absent key reads
the same as; the seeded repository-profile page and security page, where
the fork's own text stands; and the first order's new text, which a closed
order never takes.

Hosts: the features table reads `host-codex` on, inferred from the order
attestations in the committed control log, and `host-copilot` off, since
v1.0.0 lets a discovery record turn no host on and no phase here was
attested under Copilot. Neither is elected by hand. Rejected: electing
Copilot to keep the bundle as it was (the record shows no session on it,
and one line of configuration and a re-emit bring it back). Traps weighed:
counting the update as the pass, which the rest of this document answers;
and shifting to the operator what a session can settle, which left one
item with them, the private list (D3). NoOp: staying on v0.122.1, declined
because the dispatch asks for the release. Reopen: the operator runs a
phase under Copilot or asks for its surfaces; a later release's preview
lists a sixth file.

### D2. The generated harness manifest stays this instance's own through the merge

Git also stopped on `.claude/harness-manifest.json`, a kit file both sides
write. The preview plans that file as `re-emitted`, and the kit guide says
of such a file that it is replaced and that the closing emit writes it
again, so the conflict was first resolved to the starter's side. `node
scripts/harness.mjs emit` then refused with `unowned Codex output refuses
replacement: .codex/config.toml`: the starter's manifest is a Claude-only
bundle's, it lists no Codex surface as installed, and the emit will not
overwrite a surface that the manifest in the tree does not own. With this
instance's manifest restored from `main` the emit wrote 37 surfaces, and
`harness check` and `launchpad verify` pass. The guide's update steps do not
say which side a merge keeps for that file where the instance has a host
the starter lacks; the entry is in `FOR-CORE.md`, with the route.
Rejected: deleting the Codex surfaces and letting the emit write them
fresh (it works, and it removes files to satisfy a bookkeeping check).
Reopen: none for this fork; the route is one command.

### D3. The private list is the operator's to sort; this pass holds its own text to the earlier rule

Until this release every entry of the private list refused a match in this
repository's gates and in its planning publish, whatever its mode. From
v1.0.0 only an entry under `refuse:` does, and the list has none: counted
through the kit's parser with nothing printed, every entry reads as
context. Which entries must never appear is the operator's to say (the
operator record's item on outward words), so the pass sorted nothing. It
put the fact first in the update pull request and in the session before
the merge, and the operator merged with the list as it was.

For its own writing the pass keeps the stricter reading: a line the screen
lists in context mode is read beside the entry and reworded unless it is
plainly the ordinary word, and the count is in §Validation. Rejected:
marking every entry `refuse:` to keep the earlier behavior (a `refuse:`
entry also refuses outright in a target's publication, where an unmarked
one is the reviewer's to confirm, so the marking changes more than this
repository's gates, and the list is theirs); holding the update until the
list was sorted (the release is taken at the operator's merge, which is
where they decide). Reopen: the operator marks an entry, after which the
screen refuses it everywhere and no judgment of a session's is involved.

### D4. Four register rows the new reader re-keyed carry their dispositions, and three rows whose conditions the release met are disposed

The sync on the update branch collected the register's candidates through
v1.0.0's Markdown reader, which reads a bold title whole where the earlier
line reader ended it at an asterisk inside it. A row's key is derived from
that text, so four candidates got a new key: the four rows they had, each
settled or allocated by an earlier pass, read `needs-review` with their
source missing, and four rows with the same text appeared untriaged. Each
old row is disposed as a duplicate of the row that now holds its text, and
each new row carries the earlier disposition with its status, targets and
reopening condition unchanged (§Register). The entry is in `FOR-CORE.md`.

Three deferred rows named a release or a readable figure as their
condition, and each has occurred: core's follow-up on the permission hook's
cost, which is Part Q of WO-276; the extension contract, which is the kit
guide's new section; and a close's step times, which the failure feed
prints. They are settled, declined and settled (§Register). The other
thirty-four deferred rows wait on a merge, a measurement or the operator's
word, and none of those occurred in a window with no order run. Rejected:
leaving the re-keyed rows for the feed to show as untriaged (the next pass
would triage four candidates that earlier passes had already decided).
Reopen: a later release changes again the text a key is derived from.

### D5. What core should hear is written in FOR-CORE.md, and the operator record's item says so

The operator record's item on requests to core had every pass end with a
paste-ready prompt for core, written in the pass document and repeated in
the handoff. The kit this instance now runs carries a later direction of
the operator's, given in core's session on 2026-11-09 and cited by product
07 with its capture digest: an instance keeps what core should hear in one
file at its root, each final review and planning pass appends to it, a pass
writes no block for core in its document, and nothing leaves the instance
unless the operator carries it. The planner's root says the same, and the
pass follows it. `FOR-CORE.md` gains four entries, none of which stops the
next order: the harness manifest in an update's merge (D2); the re-keyed
register rows (D4); a flag that the executor's root names for the run
after a failed run and that the target gate refuses, read in the kit's code
and answered here by a sentence in the profile; and a review report the
helper refused for the form of its Items table (§Validation). The record's item is
rewritten to state the kit's route, where the kit says it came from and
what it replaced. What the item said about reading core's earlier text
against the current records, about ideas from the app going as issues, and
about writing only what core has not already answered stands.

The rewrite states what the kit does; it records no rule as given in this
session. The journal of this instance holds one message of the operator's
in this pass, the dispatch, and that message gives neither this direction
nor the one of D6, so §Rules recorded is empty. The first draft of this
document named both there against the dispatch's row, and the criteria
review refused that as provenance the message does not carry (§Validation).
The operator restates either direction here, or strikes the alignment, by a
word in a later session. Rejected: writing a block in this document as well
(against the role text, and two routes for one thing); leaving the record's
item as it was (every role reads it at the start of a session and would be
told of a route the kit no longer has); asking the operator to say again
here what the kit's own documents record them as having said.
Not entered for core: the generated operator page's sentence that a release
is never taken in a planning pass, beside a planner's root that admits it on
the operator's recorded request, since it made nothing hard here and the
operator record's item governs how this fork takes one; and the dispatch
standing's early start, which a session begun before the update cannot
show under the new kit. Reopen: the operator says the paste stays.

### D6. Workers are names in the instance's table

v1.0.0 removed the two per-model worker definitions and made a worker a
name in a table that `npm run worker -- list` prints: `default`, which here
runs Opus 5.5 at `xhigh` on Claude and Sol at `max` on Codex, and
`advanced`, each provider's stronger model. Core's WO-276-D077 records it
as the operator's direction of 2026-11-11 in core's session: nothing in the
kit names a model, since models change faster than releases. Four things in
this instance named what the release removed or will outdate:

- The operator record's item on models and effort described the selection
  by a word of the dispatch line and by the removed definition. Its
  direction of 2026-11-03 stands as given, the default options and the
  stronger ones only when the operator asks; the mechanism is restated as
  the kit's table. The record's rule on reviewing orders before a
  refutation named the Codex reviewers' model, where the direction it
  records asks for Codex workers and names none; it now names the `default`
  worker for Codex (the design review's finding).
- WO-043 named the removed definition for its twelve workers, and WO-024
  reached it through WO-020's authoring and critic procedure, which a
  closed order's text keeps. Both now name the `default` worker unless the
  operator names another. WO-024 is first in the side lane.
- The four research orders and WS-002 rule 3 named the Codex default by its
  model id. They were right today and would be wrong at the table's next
  change, so they name the `default` worker and the command that prints its
  launch. The four orders also set twelve launches against a cap of 20; the
  instance's cap has been forty since the operator's direction of
  2026-11-07 (WO-023-D014), and the sentence now names the cap without a
  figure, as WS-002 does.
- The profile told a session to review target code through the host's own
  worker route, with a pinned model, until a starter carried the review
  helper's target mode. Starter v0.118.0 carried it; the passage now gives
  the helper's command and says how a worker is named.

This pass's own workers are the `default`: `dotln-worker` in the session,
and Sol at `max` through the review helper. Rejected: leaving the research
orders' model ids (the saving is four orders this pass's reviews need not
read; the cost is four orders wrong at the next change of a default and
found by whoever runs them). Reopen: the operator binds another default or
another worker in this instance's configuration.

### D7. WO-046 is pinned to core's v1.0.0

The machinery view shows what core has now, by the operator's direction of
2026-11-09, and WO-046 pinned core at v0.122.1, core's `main` on the day the
order was filed. Five days later core's `main` is v1.0.0. Read at
`ed66a822`, the order's design holds: the manifest keeps its shape, its
three host profiles and its ten residue items; the hooks keep their
configuration fields; the seven role skills keep their stamps and their
statement lines; and the reading rule gives every capacity that criterion 4
names, and the Observed gap's probe, the same result at both commits. Seven
statements depend on the pin and are restated: the commit and tag in the
Cites, the Observed gap and criterion 3; the manifest's digest; 36
installed surfaces where v0.122.1 had 42, the four presence hooks and the
two per-model worker definitions being gone; the agent definitions, five
under `.claude/agents/` and no `.codex/agents/`; the miner's remark on
which commits lack that directory; and the byte measure, now the sum over
every path the gap names with its command, where the earlier figure's
method was recorded nowhere. WO-016 is unchanged: what it says of core it
says of its two historical commits, which is deliberate, and the release
makes nothing in it wrong.

The view's levels stay as the previous pass's D12 set them from the
operator's correction. Core at v1.0.0 holds two kinds of machinery data
those levels do not show, the table of workers and models and the
thirty-three rule records that its contributor loadout binds to roles; D12's
reopening, the operator wanting a level or a relation the snapshot does not
hold, is where they would enter.

Rejected: leaving the pin (the order would build a view of a core that has
since dropped six of the surfaces the order counts, and the previous pass's
D11 has an order amended when it is read, not when it activates); a pin the
executor takes at activation (criterion 4's named capacities are the
order's oracle, read by a planning pass at a named commit, and a commit not
yet made cannot be read). Trap weighed: a fix that fails, since the pin
goes stale at core's next release whatever this pass writes. D11's answer
stands, that an order stale again is repaired as an ordinary amendment, and
this one cost one worker's 0 h 11 min and seven sentences. Reopen: core
releases again before WO-046 activates.

### D8. The workstream's rules stand under the heading the briefing reads

v1.0.0's briefing tells a member order's role where its workstream's rules
are, and it looks for a second-level heading `Rules`. WS-001's rules stood
under `House rules`, so each of its thirteen open orders would have been
briefed that the workstream has no Rules section. The heading is now
`Rules`, and its first sentence keeps the name by which the orders cite the
rules. No document links the old anchor: a search of the launchpad and of
the target's documents finds none. Records that name the section by its old
heading are records and stay. WS-002 already had the heading. Rejected: a
second heading above the first (two headings for one section). Reopen:
none.

### D9. No order's review ladder is set, and the sequence stands

v1.0.0 lets an order's header size its first review round: `full`, three
reviewers, which an order without the line also runs; `combined`, one
worker with the three briefs; and `paired`, both on one tree, which the kit
asks of each order a pass files until fifteen such rounds have been read
and a pass sets the default. This pass files no order. The seventeen open
orders have no line and run `full`, the round they were written and judged
for and the one the operator record's item on reviews describes. Writing
`paired` into them would add a fourth worker to each first round here, to
gather a comparison that core's own orders gather, and would put seventeen
orders back through this pass's reviews for one header line. Reopen: a pass
files an order, which then carries `paired` as the kit says; or the
operator wants this fork's queue to gather the comparison.

The sequence is unchanged (§Sequence). Nothing closed, so no entry leaves;
no order's edge changed; and the reasons the previous pass gave for the
order of the road and of the side lane were read against a window in which
nothing ran, and still hold.

## Register

The register was current at entry, the update branch's sync having written
it, and one batch of eleven requests was applied, kept in the ignored local
lane as `docs/control/local/planning/followups-apply-2026-11-14.json`. The
register stands at revision `5591211a…` with 226 rows: 131 settled, 38
allocated, 15 declined, 8 duplicates and 34 deferred, the last being all
that is pending.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| `FUP-800ab3aa46035087` (the entropy review's finding on a feature library's index) | **allocated** to WO-027, carried from `FUP-524229f3c08b6be8`, which is now its duplicate (D4) | WO-027's final review is found to have recorded that criterion unmet |
| `FUP-2bde48d927709781` (the next hundred concepts) | **allocated** to WO-028 to WO-032, carried from `FUP-862baf0e83c307d0`, now its duplicate | fewer than two research orders are queued, or the operator asks for the next cut |
| `FUP-3087b05ec38a34d3` (the registration's declaration matching at any depth) | **allocated** to WO-023, carried from `FUP-9a1ea6db27a8f371`, now its duplicate | a match probe fails, a later close exposes output outside `node_modules`, or the kit changes matching semantics |
| `FUP-8f5ec45689570f70` (the workstream field against the plan gate) | **settled**, carried from `FUP-d1dadda4ed57029c`, now its duplicate; v1.0.0's index check and plan check pass with WO-011 and WO-012 as they are | a later update refuses either order on that field again |
| `FUP-c85b18619ccecfcf` (the hook latency under the target-worktree grant) | **settled**: its condition was a release that carries core's follow-up, and v1.0.0 carries it as Part Q of WO-276, in which a tool call starts only the hooks that judge it and core measured 400 hook processes before and 210 after over fifty calls. What one judged write costs an executor here is not measured | an executor records the hooks' cost in its decisions or usage readback |
| `FUP-038033632f4116e6` (the worktree-removal step's time at a close, and the finish's fetch) | **settled**: a close's step times are readable through `npm run plan -- failures`. The eight closes since 2026-11-01 took a median of 16 s, and the slowest step among them is the removal at 12 s in WO-023's close, against 58 s to 3 min 28 s on 2026-10-31; this pass's finish did not stall | a removal step runs past five minutes, or a finish stalls |
| `FUP-6855f3bdf797428a` (a self order for an instance-owned duty of acceptance by use) | **declined**: v1.0.0's kit guide says where an instance's own rule goes, the instruction file outside the generated block, where this fork's line binding every role to the operator record already stands, and rule 24 and each order's use criterion carry the duty to the verifier | a verifier records a use criterion met with no walkthrough |

Rows read and left as they stand: the thirty-four deferred rows. Four of
them name orders this pass amends, `FUP-1f5953e14b1077b4`,
`FUP-48b1009d908e251d` and `FUP-4fde2cb5fc229dc2`, which wait on the merge
of WO-046 or WO-016, and `FUP-400988852956edcf`, which waits on the source
after WO-043; the amendments change none of their conditions.
`FUP-4091de8ba4313b4c` (the three reviews as a kit step of a planning pass)
waits on core's WO-244, which v1.0.0 still lists as queued.
`FUP-3777717897701f29` (this fork's own dispatch-bound values) has no stop
to weigh, and from v1.0.0 the bound counts the time a phase worked.

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md",
  "tags": []
}
```

<!-- dotln-red-tags:end -->

`plan start` carried no red tag from the previous pass and wrote none. Its
documents report lists twenty-nine standing documents that no session read
in the census window; a tag needs a document that is unbound as well, and
none of them is.

## NoOps

Each declined candidate uses the NoOpIntent fields: kind, reason, evidence,
reevaluation and usefulWhen. No automatic schedule is created by this
record. The previous pass's NoOps were not weighed again where nothing
they rest on has changed.

| Candidate (kind: NoOp) | reason and evidence | reevaluation | usefulWhen |
| --- | --- | --- | --- |
| Staying on starter v0.122.1 | The dispatch asks for the latest upstream (D1) | not applicable; the update is this pass | — |
| Electing `features.host-copilot` | The committed control log attests no phase under Copilot, and v1.0.0 lets a discovery record turn no host on (D1). Evidence: `npm run features -- list` | the operator runs a phase under Copilot or asks for its surfaces | Copilot is a host of this fork |
| Taking the starter's side of the five instance files, or any one with `--take` | Each holds this fork's own text and none says anything false after the update (D1). Evidence: the publish admitted the merge with nothing taken | the operator wants a seed's new text, such as the restated Secrets paragraph or the `spend.daily` block | — |
| Marking the private list's entries `refuse:` | The list is the operator's to mark (D3) | the operator marks it | — |
| A `Review ladder` line on the seventeen open orders | The kit asks `paired` of an order a pass files, and none is filed; an order without the line runs the full ladder it was judged for (D9). Evidence: product 07 §Verification review and attack | a pass files an order, or the operator wants this queue to gather the comparison | A first round can be sized by what the comparison showed |
| New levels in WO-046 for core's worker table and rule records | The view's levels are the operator's correction of 2026-11-09 (D7; the previous pass's D12) | the operator wants a level or a relation the snapshot does not hold | The view answers which worker runs which model, or which rule binds which role |
| A pin for WO-046 that the executor takes at activation | The order's named capacities would lose the reading a planning pass made at a named commit (D7) | core releases twice more with the order unactivated | The order needs no amendment when core moves |
| A Layout section for WS-001 | The kit asks one of a pass handed an initiative, and this dispatch describes none; the workstream's dependency plan and its table of what lies ahead say what a layout would. Evidence: product 07 §Operator-opened planning pass | the operator hands a pass an initiative | Planned work that is not yet an order has one place |
| Area notes beside the target's profile | The kit's briefing would print them for the paths an order touches; the profile's §Find the implementation is the map today, and no executor's record names a wrong turn it failed to prevent | an executor's decisions record time lost to a stale or missing map | A target order's briefing names what is true of its paths and at which commit |
| Declaring `spend.daily` | The allowance is the operator's to name, and no record asks for one | the operator names a day's allowance | A session is told when to finish its step and stop |
| Aligning the research orders' Effort lines with the Codex default's effort | The header states the order's expectation and the attestation states what ran; the kit records a difference as drift and refuses nothing. Evidence: `npm run resume -- status --json` lists drift on closed orders | the kit refuses a completion for drift | — |
| Re-checking the security page's host posture at the hosts' new versions | A re-check is an inspection with probes, which a document-only pass does not run; two cells were corrected from the features table and nothing else was claimed | the next order that inspects the hosts, or the operator asks | The page's operating note names the versions in use |
| Refilling the research track | Four research orders are queued and the queue is refilled when fewer than two are (WS-002 rule 6) | two of the four close | — |
| Entering the previous pass's asks in `FOR-CORE.md` | v1.0.0 files each of them (§Readings), and the file takes what a pass or a final review meets | none | — |

## Sequence

The sequence is as the previous pass left it. Three pairs open it, a road
order first and side work beside it: WO-036 with WO-024, WO-037 with
WO-040, WO-008 with WO-045. Then WO-044, WO-035, WO-046, WO-017, WO-016,
WO-018 and WO-043 run one at a time. WS-002's members stay a separate track
with no sequence entry: WO-029, WO-030 and WO-031 are runnable now and
WO-032 after WO-024. No pair holds an edge between its members and every
hard edge runs forward (`npm run work-orders -- index --check`).

What the operator sees after each order lands is what the previous pass's
table says, with one difference: WO-046's page shows core as it stands at
v1.0.0. The first pair is ready to start on the updated `main`: WO-036 is
untouched, and WO-024's fan-out now names workers the new kit has.

## Write-backs

- The operator record: the item on requests to core, restated to the root
  file and the operator's choice of what is carried (D5); the item on models
  and effort, its mechanism restated as the kit's worker table (D6); the item
  on starter updates, with what the publish does from v1.0.0 (the merged
  revision named, the instance's bytes kept, a second starter revision on
  one branch refused); and, in the rule on reviewing orders before a
  refutation, the clause that named the fix dispatch among the runners of
  the three reviews, which v1.0.0 ended, and the reviewers' model, now the
  `default` worker for Codex.
- `docs/operator/implementation-guidance.md`: the extension contract, which
  the kit guide now holds, and the worker cap's present figure.
- WS-001: the heading `Rules` (D8), and in rule 25 what the dispatch bound
  counts from v1.0.0, with the kit guide named where the kit's README was.
- WS-002: rule 3's workers named from the worker table (D6).
- The repository profile: the review of target code through the helper's
  target mode (D6); the private list's two classes; where the kit reads the
  release classification header, above the Objective; what the target gate
  runs and that it takes no other argument (D5); and where the token stop's
  figure is printed.
- `docs/repositories/README.md`: how the kit's template reaches the page,
  which an update no longer does by merging.
- `AI-HARNESS-SECURITY.md`: the two cells that recorded Copilot as reading
  this launchpad's generated registration, now that it is not elected.
- `FOR-CORE.md`: four entries (D5).
- The seven amended orders (§Orders filed and amended).
- The follow-up register (§Register); the generated work-order index and
  its record of workstream observations; the idea ledger's registration
  heading and the lineage index; the cost table.

On the update branch, and so already on `main`: the regenerated harness
surfaces, features page, order index with its two new records, and the
register as the new reader collected it.

## Rules recorded

No rule is recorded from this session: the operator's one message was the
dispatch, which gives no standing direction. Two items of the operator
record were aligned with the kit this instance now runs, each stating the
kit's mechanism and the direction of the operator's, given in a session of
core's, that the kit's own documents cite for it (D5, D6). They are
alignments and not entries here, since the journal of this instance holds
no message that gives either.

<!-- dotln-rules-recorded:start -->

```json
[]
```

<!-- dotln-rules-recorded:end -->

## Process cost

PROCESS-COST-PENDING

## Validation

### The three reviews

The criteria adversary, the design improver and the consistency reviewer
ran over the committed subject at `63e7038` (tree `c9b8a655`) as Codex
workers, the instance's `default` for Codex (`gpt-6.1-sol` at `max` as the
helper launched it; the host printed no readback), through `npm run worker
-- review --host codex --subject planning`, the three launched together.
The brief measured 295,141 characters against the helper's ceiling of
400,000, so each review was one batch: the pass document, the order index
and the seven amended orders inlined, and the whole branch diff in reach.
The reports are in the ignored reviews lane,
`docs/control/local/reviews/planning-2026-11-14-standard-pass-v1-0-0/`, as
`round-1-design.md`, `round-1-criteria.md` and `round-1-consistency.md`.

`self-review: found 3; fixed 3; recorded 0`

| Review | Time | Tokens | Findings | What changed |
| --- | --- | --- | --- | --- |
| design | 0 h 5 min | 1,290,059 | 1, a note | The operator record's rule on reviewing orders before a refutation named the reviewers' model; it names the `default` worker for Codex (D6) |
| criteria, given the dispatch capture | 0 h 10 min | 2,850,589 | 2, one blocking | Blocking: the two entries this document's §Rules recorded held named the dispatch's journal row for directions the dispatch does not give. The block is empty, and the operator record's two items state the kit's mechanism and the source the kit cites for it (D5). Should-fix: the profile's command for a target-code review lacked its kind and its host; it is runnable as written. The report's Items table answers both parts of the dispatch as acted on |
| consistency | 0 h 13 min | 6,420,435 | none | Seventeen traced consumers confirmed, among them the register's eleven changes and its totals, the order index's four regenerated Model descriptions, the briefing's reading of the `Rules` heading, the target gate's arguments, the entries for core as the document check reads them, and WO-046's pin, digest, counts and byte inventory read in core's clone |

The ten unchanged orders were not inlined. They stand as the previous
pass's three review rounds left them, against a target that has not moved,
and what this pass owed them, a reading of their kit-facing text against
the new kit, is the third research worker's (§Readings).

### The recheck

The criteria reviewer rechecked the fixed subject at `4a59b6d` (tree
`559f66e6`), given the capture and its first report: 0 h 9 min, no finding,
both earlier findings held, and a table answering both parts of the
dispatch as acted on. The helper refused the report for its form. One
sentence stands between the report's Items heading and its table, and the
helper reads only the block directly after that heading, so it took the
report as having no table. The round records no report; the returned text
is kept in the lane as `round-2-criteria.refused.md`, and the launch was not
paid for a second time (the entry is in `FOR-CORE.md`). The reviewer tried
one bounded probe, which stopped before the test runner started on a host
error reading the temporary directory, and it claims no test.

VALIDATION-PENDING
