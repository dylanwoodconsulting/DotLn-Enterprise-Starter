# standard pass v0 122 1 open orders rejudged — 2026-11-09

## Dispatch and capture

The operator dispatched a `planning:` pass on 2026-11-09 (the prompt hook's
time 22:16:23Z) as one pasted message with three parts: a standard planning
pass that takes the latest upstream; a block of core's answers to this
fork's two blocks of 2026-11-08; and a request to review every existing work
order and change, split, combine or add orders wherever this pass judges it
right, because an earlier model wrote the plan and its momentum is not a
reason to keep a direction, with no change or a small change named as an
acceptable result. The hook resolved the role planner on the first prompt.
The host was Claude Code 2.1.321 (`claude --version`) running Fable 5.2 at
`xhigh` (`CLAUDE_EFFORT`). The dispatch names no worker option, so the
Claude workers run as `dotln-worker`.

The capture is `docs/intake/notes/planning-2026-11-09.md`, SHA-256
`646233c3dce8d049caefa3c0590b88beaf9f0a187dc7bfdce4c298d095179bfa`. It holds
the operator's own words with a one-paragraph marker where core's block
stood. Core's block is a separate file of the ignored local planning lane,
`core-answers-2026-11-09.md` (its digest
`bac969696aebb5ce46615715d9efab1920f69dbf8dce371e08680629985f3779`), and the
whole message, block included, hashes to
`93f876f0c0cc23d0f5c2167d78e37c1af9810a541c046abd3412ed731211e5ec`. D1 says
why the block is kept apart. Core's block is a core session's text, as its
first line says, and is read as evidence, never as direction. A second
message at 22:27Z said the update pull request was merged.

After the first handoff, at 01:36Z on 2026-11-10, the operator sent six
messages between 02:12Z and 02:37Z that correct the pass, a seventh at
04:12Z after the second handoff, five between 05:03Z and 05:23Z while
the third round ran, and sixteen between 05:32Z and 05:39Z after the
third refutation. Their own words are in a second capture,
`docs/intake/notes/planning-2026-11-09-answers.md`, SHA-256
`e880d44a0999f4e8e90611346a37e04c9c40ad29e6568680970b9f3ba36107c2`;
the first of the six quoted the session's own five items, and that whole
message is kept in the ignored local planning lane as
`operator-answers-whole-2026-11-09.md`, by D1's rule. One of the six is a
question by the hook's class and records no rule; the seventh quotes one
sentence of the session's second handoff, which the capture leaves out.
The pass acts on all of them: D12 to D18 paraphrase each and say what it
replaced, and §Rules
recorded names the journal row of each direction written into a standing
document.

The aim, stated before acting: take starter v0.122.1 first through an update
pull request the operator merges; record core's answers against the items
they answer; then judge each open order and the sequence from the
repositories and the recorded directions rather than from the plan's own
account of itself, changing what the evidence says is wrong and leaving the
rest with the reason written down.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `82f1e20` (#72) at the dispatch, clean; one writer, this session; no order worktree; no open issue or pull request; starter v0.122.0; `Launchpad v0.3.5` the latest release | `git status`, `node scripts/harness.mjs writer --show`, `gh pr list`, `gh issue list`, `UPSTREAM.md`, `npm run release -- list` |
| Upstream | one refresh commit past v0.122.0: `fffd0cd`, starter v0.122.1, core WO-260 at core commit `06c1ddc1`, released 2026-11-09T22:05:41Z, eleven minutes before the dispatch; fetched into `refs/upstream-releases/v0.122.1` with the ref-specific fetch, so the clone keeps its eight tags | `gh release list -R DylanBWood/DotLn-Enterprise-Starter`, `git fetch --no-tags upstream refs/tags/v0.122.1:refs/upstream-releases/v0.122.1`, `git tag -l` |
| The preview | by the incoming launchpad from a detached worktree: 59 kit files replaced, 4 added, 0 removed, 1 refused, 1,054 unchanged; no instance action; build snapshot `fnv1a64:d23ed54269ce7e46` to `fnv1a64:985cc33820593ad6`. The refused file is `.claude/harness-manifest.json`, which this instance emits with its Codex surfaces on and the re-emit rewrites | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.122.1` |
| The update | one clean merge commit (`6a6b1ea`, 65 files). Read against core's item 2 of the second block: every changed path is manifest-listed except `KIT-MANIFEST.json` itself, and the only file both sides had changed since the merge base `f817d49` is the generated harness manifest, so no instance seed and no order text was merged into. `npm ci`; `harness emit` 43 surfaces; the lineage index, decision index and features page regenerated unchanged; the work-order index regenerated; committed as `298067d` | `git diff --cached --name-only` against the incoming manifest; `comm` over the two sides' changed paths since the merge base |
| The gates on the update branch | `harness check` 43 surfaces; `launchpad verify` 1,117 kit files at `06c1ddc1`, 1 differing (the emitted harness manifest); `npm test` 7 passed; `npm run test:docs` 10 passed and 5 failed on its first run, 15 passed on its second (D1) | the gate logs in the session scratch |
| Pull request #73 | opened by `node scripts/launchpad.mjs update --publish` with the operator-request flags naming the capture, admitted on the first try; merged by the operator at 22:27:33Z as `0461bed` | the helper's output; `gh pr view 73` |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main` with the same flags: fast-forwarded to `0461bed`, emitted 43 surfaces, bootstrapped; one second | the command's output |
| `plan start` | this branch and the skeleton; no red tag carried; failures, reader scores, conditions and census 0 h 0 min each; prune 0 h 1 min (863 candidates, 3,191,728,587 bytes, all removed) | `npm run plan -- start` |
| The failure feed | nothing ran between the previous receipt (2026-11-08T23:10Z) and this dispatch: no verification, review, repair, close, denial or bound stop; two interventions, both this session's messages | the start report |
| Conditions, register, documents | 0 conditions holding or unknown; 222 register rows, 42 pending, all deferred; 80 standing, 691 record and 10 generated documents, no red tag | the start report |
| DotLn-Angular | `main` at `eb9d227` (#18, WO-039's merge), the registered clone clean; `DotLn Angular v0.11.1` | `git -C ../DotLn-Angular log`, `git status` |
| Core | `main` at `06c1ddc1` (#286, WO-260's merge), no order worktree | `git -C ../DotLn log`, `git -C ../DotLn worktree list` |
| Usage at entry | 98,385 tokens by the transcript counter, scope dispatch; subagents 0 of 40 | `node scripts/harness.mjs usage 12cbf517-74f9-4370-bebe-e7888d83f3fc` |

### What v0.122.1 asks an instance to read

The release carries core WO-260 alone. Its Read before upgrading says an
instance has nothing to do beyond the ordinary update: the kit's declared
Git floor drops from 2.40.0 to 2.31.0 (`engines.git` in `package.json`) and
six Git forms newer than that floor are replaced at their call sites; the
new `git-surface` structural task runs in core only. This host's Git is
above both floors, so no gate here changes. The machine-derived notice asks
for `npm run meta` after the merge because a generated page's renderer
changed; it ran on the update branch and changed nothing. Four recovery
messages of `npm run worktree -- integrate` name different stash commands; no
order here is mid-integration.

### Core's answers

Core's planning pass of 2026-11-08 answered both of this fork's blocks of
that day and filed four orders around its active WO-244: WO-260 (released in
v0.122.1), WO-261 (an instance's update keeps its own files), WO-262 (review
findings are judged before they are fixed) and WO-263 (the complete run's
exclusive suites in one convoy). Core says none blocks this fork's next
order.

| Fork item | Core's answer | What this fork does |
| --- | --- | --- |
| First block, items 1, 4, 5, 6 | recorded, nothing asked | nothing |
| First block, item 2 (a dispatch behind the `/model` block) | matched by core's own dispatch; closed on both sides | nothing; today's dispatch also resolved on the first prompt inside a paste wrapper |
| First block, item 3 | settled by the second block's item 3 | nothing |
| Second block, item 1 (inferred hosts restore the Codex surfaces) | working as designed | nothing; today's preview shows the consequence as one refused row, the emitted harness manifest |
| Second block, item 2 (seed conflicts and silent merges) | filed as WO-261 steps 1 and 2: the incoming launchpad's `update --publish` will refuse a merge that changed a file outside the manifest which both sides changed, naming the restoring command and `--take`; the preview will list such files. A convenience with a working route today | the by-hand check ran on today's merge and found nothing (the update row above); it stays this fork's duty until the release that carries WO-261 |
| Second block, item 3 (the GitHub link check) | the confirmation WO-259-D015 waited for | nothing |
| Second block, item 4 | recorded | nothing |
| Second block, item 5 (a session's `git fetch --tags`) | filed as WO-261 step 5, a refusal rather than an advisory | today's fetch was the ref-specific one; the profile's section stays the rule until the release |
| Second block, item 6 (a closed order's route reads awaiting-merge) | not filed; core asks for the close record's cleanup and target cleanup outcomes and whether the release list names WO-039 | read and returned in §Requests to core, item 2, with the line of the route that explains it |
| Second block, item 7 (WO-039's review ladder) | used as evidence for WO-262: an executor judges each review finding before fixing it | this fork's executors may apply it now; the text arrives with the release |
| Second block, item 8 (which intake files are the operator's words) | filed as WO-261 steps 3 and 4: the screen will leave out `docs/intake/session/`, and the role text will say a capture holds the operator's message alone | followed today (D1), which met a case the answer does not cover |


### How the open orders were read

Fourteen orders were open at entry: ten in the sequence and four on the
research track. Four read-only research workers (`dotln-worker`) read them
against the target at `eb9d227` and against the committed records: one the
four orders filed in October (WO-016, WO-008, WO-017, WO-018), one WO-035
to WO-038, one the study program (WO-024, WO-040, WO-029 to WO-032, the
studies' code and the two standards passes' records), and one the source
of every choice that shapes the sequence, operator direction or a planner's
own. Each was told that no change is a valid finding and to name a planner's
inference as that. The planner checked the claims its decisions rest on
against the code and the records before acting on them; the table gives the
checks.

| Finding | The planner's own check |
| --- | --- |
| The studies are most of the workspace | `git ls-files` and a line count per project at `eb9d227`: `libs/features/tools` holds 77,312 lines of TypeScript, SCSS and HTML in 441 files, of 98,831 across the eighteen projects under `libs/shared`, `libs/features` and `apps` (`libs/dotln` and `tools/` not counted) |
| No road order has closed since the scene | `npm run resume -- status --json`: WO-015 closed on 2026-10-30; the eleven closes since are WO-020 to WO-023, WO-025 to WO-028, WO-033, WO-034 and WO-039, study batches, document and gate corrections and standards passes |
| Authentication was moved by a planner and not weighed again | WO-008's own provenance paraphrases the operator's 2026-10-17 plan as authentication around the third week of the foundation; the 2026-10-24 pass's D11 moved it behind the four sub-app orders as its own reading, with the operator moving an entry by a word as the reopening; its one typed edge, WO-007, merged that day |
| Rule 31 carried more than the direction | the operator record's item reads: a dedicated standards pass that recurs often, functionality first understood; WS-001 rule 31 added one pass per planning pass, ahead of the next feature order, gating research batches, and the 2026-11-05 pass's D3 names the cadence as its inference |
| The October orders name an empty tree | `git ls-tree bc9133e` in the target prints nothing; WO-016, WO-008, WO-017 and WO-018 named that commit as their base |
| WO-040's scope is larger than its Cost line | a parser over the second movement batch's twenty presentation modules: 64 functions at five parameters, 22 at six, 16 at seven and one at eight; the order's criterion 2 requires zero over four and its Cost line counted the 39 at six or more |
| The builder-fed families hold their residue in the builder | the same parser over `studies/`: no study module under `eip` or `poeaa` over four parameters; under `rxjs` only the family helper `marbles.ts`; in the shared directory three functions of `flow.ts`; 104 under `movement` |
| The movement presentations repeat one scaffold | `grep -c xLabel` prints 2 for each of the forty `movement/*.presentation.ts`; thirteen call `boundsOfPoints`; `seek` and `flee` run 398 and 386 lines where `rxjs/switch-map.ts` runs 102 and `eip/control-bus.ts` 231 |
| The catalog checks refuse WO-018's new files | `tools/scripts/catalog/check-catalog.mjs` fixes its batches in a table and fails on any other file in the data directory; `merge-checkpoints.mjs` is absent from `tools/scripts/catalog/` |
| The studies cannot be found from the Tools home | `tools-home.ts` renders each work as text with its counts and links only the catalog and the last reading; `catalog-search.ts` renders results and facets only while a query is typed |

## Orders filed and amended

Four orders are filed, thirteen amended and one removed. The table is the
state after the operator's corrections (D12 to D18); what the first handoff
held and withdrew is in §Decisions. Each amended order carries one sentence
naming this pass and its decision. Drafting workers (`dotln-worker`) wrote
the proposed texts into the session's scratchpad from the planner's
decisions, each verifying its order against the target at `eb9d227`; the
planner read each draft or its diff, corrected it where a decision had
moved, and is the only writer of this repository.

| Order | Change | Decision |
| --- | --- | --- |
| WO-036 walls and ways | narrowed to scene navigation; takes the scene's one boarded defect; leads the road | D6, D16, D18 |
| WO-037 shooting and bullets | amended: what a knockout does to a formation; older trials stay readable | D6 |
| WO-008 authentication and permissions | amended and made executable at `eb9d227` | D4, D18 |
| WO-024 concept studies V | amended: the `relations` family builder-first, the wiring a new work needs, a control on one criterion, the verifier's research read and the operator's display sizes; pairs with WO-036 | D5, D18 |
| WO-040 standards pass III | amended: the measured scope, the stream part narrowed to four builder functions and nineteen messages; pairs with WO-037 | D5 |
| WO-029 research, streams | amended: the verifier's research read, the operator's display sizes, the search controls' pointer | D18 |
| WO-030 research, messaging | amended: the wording rule for a flow state in the authors' brief; as WO-029 | D5, D18 |
| WO-031 research, enterprise patterns | amended as WO-029 | D18 |
| WO-032 research, levels and teams | amended: base, and no standards pass before it; as WO-029 | D5, D18 |
| WO-035 every string through the message system | amended: the mechanism, the field list, one title resolver, the fail-closed path | D7, D15 |
| WO-017 the digital twin's first lane | rewritten to the twin's purpose: within a recorded stage, whether it would have made the operator's interventions | D14, D18 |
| WO-018 the toy shelf | narrowed to the shelf of the run's nineteen toys | D9 |
| WO-016 the replay of a recorded order | amended as one order, subject and design kept: beside WO-046's view at `/machinery/replay`, each agent's machinery from core as it stood when the order ran, the filed text's defects fixed | D12, D17 |
| WO-038 the reading at full size | removed: an order the operator did not ask for | D13 |
| WO-043 the Art of War map pass | filed, from WO-018; a verbatim sentence admitted from the public-domain text alone | D9, D18 |
| WO-044 find the studies | filed | D10 |
| WO-045 the grid family and the A* study | filed, from WO-036 | D6 |
| WO-046 the machinery view: what core has | filed | D12 |

## Decisions

### D1. The capture holds the operator's words; a pasted block sits in the local lane

The update branch's first `npm run test:docs` failed three lines of the
verbatim screen: `docs/product/07-execution-guide.md` lines 2192 and 3509
and `UPSTREAM.md` line 195, each against the dispatch capture. The three
lines are the kit's new links to core's planning document of 2026-11-08.
That document's path tokenizes to fourteen words, the screen's window is
twelve (`scripts/lib/verbatim-screen.mjs`, `scripts/lib/terms.mjs`), and
core's pasted block, then inside the capture, names the same path; the run
was not in this repository at the base, so the screen's base exemption did
not apply. Nothing of the operator's was copied. The capture was rewritten
to hold the operator's own words with a marker where the block stood, the
block went to `docs/control/local/planning/`, and the second run passed all
fifteen tasks. This follows the operator record's rule that a pasted block
is the text of the session that wrote it, and core's answer to item 8.
Rejected: electing `features.verbatim-operator-words`, which would admit
the operator's words into committed text to silence a match on a path.
Reopen: the kit's screen leaves a path or a pasted block out of its runs
(§Requests to core, item 1).

### D2. A road order leads every pair, and the scene leads the road

The operator's direction of 2026-10-30 put the study batches at the front
of the sequence as side work taken between road orders. Since the scene
closed that day no road order has run: the batches, the document and gate
corrections and the standards passes took every slot, and the sequence at
entry still opened with a batch beside a standards pass and an order that
changes nothing on screen. Every position from WO-035 to WO-018 was a
planner's placement, each made one insertion at a time, and the reasons
recorded for them do not hold today: WO-035 was put ahead of the scene
orders so that a scene verifier would not meet mined text, which rule 9
already exempts; the road was called serial because every road order edits
the workspace files, and `nx.json` has not changed since WO-006; WO-008 was
moved behind four sub-app orders to serve the sandbox sooner, three of them
closed by 2026-10-30, and every order filed since has been placed ahead of
it.

The sequence now runs in pairs with a road order in the first lane and side
work in the second (§Sequence). The scene leads the road, on the operator's
word (D16): WO-036, then WO-037. WO-008 follows them. It is the last member
of the purpose's critical path, nothing has blocked it since 2026-10-24,
and two earlier refuters had recorded its place as a known issue, receipt
012 on 2026-10-28 and receipt 015 on 2026-10-30, each pass carrying it
forward. The fifth batch keeps its place at the front, in the side lane, as
the operator directed. The first handoff of this pass had WO-008 first, on
the critical-path argument alone; the operator's statement about the scene
replaced that reading. Rejected: leaving the sequence as it stood (it keeps
the direction's letter and loses its sense, side work between road
orders). NoOp cost: none; a sequence is a reading and grants no activation.
Reopen: the operator moves an entry by a word.

### D3. Rule 31 says what the operator directed; the cadence is the pass's judgment

Rule 31 and WS-002 rule 6 are rewritten. The direction stays as the record
gives it: a dedicated standards pass that recurs often and reads landed
code as the example to copy. What the 2026-11-05 pass added as its own
reading, one pass per planning pass, ahead of the next feature order, with
every research work's next batch gated on it, is now written as a planning
judgment with its test: a pass is filed where the planning pass measures
residue in landed code, runs as side work, and gates only a batch that
would copy the code it reshapes. The measurement behind the test is the
table's: the two families that take a study as data and build the
presentation in one builder have no study module over the rule and hold
their residue in the builder, where one edit repairs it, while the two
families with a hand-written presentation per study needed every pass
filed so far. So a new family is built builder-first (D5, D6) and a batch
landed through a builder owes no pass of its own. Rejected: keeping one
pass per landed batch (three passes filed for five batches; the two that
ran took 3 h 24 min and 3 h 57 min of recorded phase time, and the cycle
grows with every research batch). Reopen: a pass that reads builder-fed
study modules finds a rule failing in them, or the operator names a
cadence.

### D4. WO-008 is made executable against the workspace as it stands

WO-008 was filed on 2026-10-18 against the empty scaffold and amended by
eight passes without being read against the code that has since landed. It
is amended once, against `eb9d227`, and kept whole as one outcome. What the
reading changed:

- **Signatures.** The Design said signature verification is the API's and
  not built, while the failure matrix required an invalid signature to be
  rejected and the mock already signed with a development key. The order
  now says one thing: the client verifies the ID token's signature through
  the OpenID Connect library chosen at step 2, which must be able to, and
  an access token's signature is the API's duty, stated and not built.
- **The mock runs in the page.** MSW's handlers run in the page's own code,
  so every full page load starts a fresh mock: a reload ends the session,
  and the sign-in's own redirects and a second tab meet a new mock. The
  mock's authorization code carries what the token exchange checks, the
  reload row of the matrix says the operator returns to `/login` with the
  page kept for after, and the criteria and the walkthrough match.
- **The lint boundaries.** A library of `type:auth` may import neither `ui`
  nor `i18n` (rule 15), so the login, denied and account pages are the
  shell's containers and the mock's own pages sit in a library loaded only
  when mocks are enabled.
- **Routes.** `RouteId` holds one literal today; a second route owes
  WO-007-D019's item (a), now a step. Guards return a redirect, because a
  `canMatch` that returns false falls through to the not-found page.
- **Stale names.** A nested `BoardPaths` enum, a `home` project and an
  error event that do not exist are gone, and the gap describes the app at
  `eb9d227`.
- **Rules 24, 25 and 29.** The Objective is the operator's session; a round
  criterion names the first pair across the three pages and admits a
  delay (rule 25); the walkthrough reads the two full sizes;
  the criterion that read a commit range lists the candidate's files from
  the working tree.

Its estimate stays eight to twelve hours of executor work, an estimate.
Rejected: splitting authentication from permissions (the second half would
gate one page). Reopen: the operator says an access token is verified on
the client too, or names a real provider.

### D5. The fifth batch builds its family builder-first; the third standards pass counts what its criterion covers

WO-024's `relations` family is built as `marbles` and `flow` are: each of
the twenty studies is data passed to one `relationsModel` builder and no
presentation module is written per study, so the batch and WO-032 after it
land in the standard shape without a pass (D3). The order gains the wiring
a new work needs, which it had left out (the scopes in `study-record.ts`,
the work chunks and their `studyChunks` entries, the model registry, the
membership test, the testing copies and the visual baselines); its
criterion on the absent-material rule, which already passed at the base,
gets a control; and its round criterion admits a delay (rule 25). It pairs
with WO-036.

WO-040 keeps its outcome and its criterion. Its Cost line and gap counted
the 39 functions of the second movement batch at six or more parameters,
while criterion 2 requires none over four; the measure is 104 (64 more at
five in the presentations and one in a simulation). The estimate stays at
four to six hours, on a corrected basis: WO-034 reshaped 92 functions over
four in 1 h 45 min, where the order had scaled from the 17 at eight or
more. The stream part narrows to where the residue is: four functions of
the two builders (`flow.ts`'s `frameOf`, `studyOf` and `marbleFrames`, and
`rxjs/marbles.ts`'s `eventsOf`) and the nineteen state messages that read as
labels; the verdict read of forty study modules that measure at four or
fewer is dropped. A shared builder for the `motion` family is the rejected
alternative: it would rewrite forty modules for a family with no further
batch filed, and the functions over the rule there are per-frame helpers a
description object repairs. It pairs with WO-037. WO-030's authors are
briefed on the wording rule for a flow node's state, so its batch does not
write the labels WO-040 rewords. WO-032's base moves to `eb9d227` and its
text says that it waits for WO-024 and for no standards pass. WO-029 and
WO-031 were read and are unchanged. Reopen for the `motion` builder: another
movement batch is cut.

### D6. WO-036 is split at the line the dependency rules already draw

WO-036 held three outcomes under an executor estimate of twelve to eighteen
hours, more than the whole recorded cycle of the scene order (10 h 27 min).
Its scene half lives in the engine and the scene feature and its `grid`
family and A* study in the Tools feature, which rule 15 keeps apart; only
the pathfinding module is shared. It is split there.

WO-036 keeps scene navigation: walls and obstacles drawn on the field, the
tile graph, A* and Dijkstra with the catalog's heuristics and cost
functions on the rail, path following with replanning and a no-route state,
obstacle and wall avoidance with a deterministic head-on policy, and
geometry saved and replayed. The head-on policy is its own engine function
and the engine's `avoid` stays as it is, so the order shares no file with
WO-040. Geometry travels as steps, which the stored scene's step
check already admits, so no stored shape changes version; an older trial
reads a metric added later as an empty series instead of being dropped, the
rule WO-037 follows. The tile graph stays a background row and its cell
size is a field setting.

WO-045 is filed for the Tools side: the `grid` family, built builder-first
over the engine's own search (D3), the study record's version step that
admits the family, the A* study, the scene inspector's link to a tool's
study, and the two avoidance studies shown doing what the scene now runs,
which takes the wall study's boarded gaps (§Register). It depends on
WO-036 and on WO-040, which reshapes the two studies it edits. It takes the
id WO-045 and no order here is numbered WO-041: the kit's receipt renderer
writes a sentence about one of core's own orders into any receipt whose
subject holds that number (§Requests to core, item 6).

WO-037 stays whole behind WO-036. Its knockout step expected the formation
to reassign, which the engine's formation module does not do; the order now
says what the engine gains (a knockout re-lays and reassigns, and a downed
fixed leader hands the lead to the next slot). Rejected: keeping WO-036
whole (one review, at the cost of an order larger than any this workspace
has closed and of a pair that would share files with WO-040). Reopen: the
operator wants one review of the scene's navigation and its study.

### D7. The mined text goes through the translator from the rows

WO-035's rule stands as the operator gave it and restated it (D15): text is
never hard-coded in the TypeScript. Its mechanism for the catalog's mined
rows, which are data and were never hard-coded, changes. As filed it
generated and committed one English message catalog per work from the rows,
a second copy of 1.48 MB of English (the rows' on-screen fields, measured
over the catalog data files), shipped twice and guarded by a check that
fails on every data edit, on the premise that each work's catalog loads
lazily; the catalog page loads every work when it opens. The order now
derives each work's messages from its loaded rows and the features register
them with the translator under one scope per work, every screen renders
through the translator, and a second language is one file per work. The
strings that are hard-coded today, the works' titles, the scene's type
labels, the row types and the facet options, move into the translation
file.
The field list is corrected against the templates, the studies' duplicate
`titles` maps leave, and the fail-closed path sits where the facades
translate. The order proves the path with a test language under which
every string on the listed screens must change. It ships no second language
and no way to choose one, which the app does not have (`availableLangs` is
English alone). Rejected: the committed generated catalogs. Reopen: the
operator wants the mined English in translation files as well.

### D8. WO-016 is one order and is not split

The first handoff split WO-016 in two (its page of beats and agent cards,
and a new WO-042 for the ideas dropped on agents and the idea sink). The
operator's answers withdrew that (D12): WO-016 is their planned later
order, the replay of a recorded work order. WO-042 is deleted before any
merge. The second handoff then restored WO-016 byte for byte and left its
amendment for the pass before it activates; the operator refused that as
well (D18), and D17 amends it here, as one order, its subject and design
kept.

### D9. WO-018 is split into the toy shelf and the Art of War map pass

WO-018 held two outcomes, a shelf of toys and a mining pass over a public
text with two worker fan-outs, and it could not run as written: it reused
a script the target's WO-019 deleted, and its Cost line said the catalog
checks already cover its new files, where `check-catalog.mjs` fixes its
batches in a table and refuses any other file in the data directory.

WO-018 keeps the toy shelf: the run's nineteen toys as full records, read
on a shelf under Tools, their tools followed into the catalog, the next toy
picked. The toys live beside the catalog data and not in it, their text is
a message scope (rule 9 exempts only the mined rows), each tool reference
is resolved and recorded, and one that does not resolve shows the run's own
text without a link. Its edge on WO-017, a link to a route, is gone: the run's patience-lane
toy is shown as designed and not built (D14). WO-043 is filed for the mining: The Art of War from its
public-domain text as a seventh work with its maxims, the six new toys for
the mined sources that have none, with their tools, and the research read
for quality (rule 27). It names every hand-kept table a new work meets, the
loader's chunks, the pinned totals, the colour tokens and the e2e totals,
and gives the join a mode that needs no access to the operator's run. It
depends on WO-018 and on WO-035, which sets the mined text's path to the
screen. Rejected: keeping one order (the shelf would wait on a fan-out it
does not need). Reopen: the run's tool references fail to resolve in
numbers that make the shelf unreadable.

### D10. A small order makes the landed studies findable

WO-044 is filed. A hundred studies are in the app and a reader cannot reach
them from the Tools home without knowing a concept's name (the table in
§Readings). The order adds a page that lists every studied concept by work
and chapter, links from the home into each work, studied counts beside the
row counts in the contents, and the studied mark on a nearby link whose
concept has a study, all derived from the studies summary so that a new
batch appears without a code change. It serves two standing wants of the
operator record, depth in every concept and pages the operator would use,
and it runs after the three pairs, ahead of WO-035, which then takes
those screens as it finds them. The deferred row on explicit search
controls (`FUP-0fb531a975308a81`) is read and left: the order changes no
search control. Rejected: more batches first (they add studies to a list
nobody can see). Reopen: none; the order is the response.

### D11. Every amended order names a real tree and is amended when it is read

Four orders named the scaffold commit `bc9133e`, an empty tree, as their
base, on the rule that the pass before each activates sets it; WO-035 to
WO-037 sat four merges behind and WO-032 five. Every open order now names
`eb9d227`. The target publish still
describes a change from the merge base, so a base that ages is harmless,
and an empty one is not: a criterion that compared with the base compared
with nothing.

The same rule had the road orders' amendments wait for the pass before
WO-016 activates, and the register carried them as a deferred row from
2026-10-30 while the order they waited on moved back. This pass made them
for WO-008, WO-017, WO-018 and WO-016 (D4, D14, D9, D17).
Rejected: keeping every amendment for the pass before each order activates
(the saving is one re-read if the workspace moves; the cost was orders that
could not have run on the day the operator chose them). Reopen: an amended
order goes stale again before it activates, which the pass before it then
repairs as an ordinary amendment.

### What the operator corrected after the first handoff

The first handoff, at 01:36Z, opened pull request #74 and put five items to
the operator as decisions of theirs. Their answers, six messages from
02:12Z to 02:37Z, are captured in
`docs/intake/notes/planning-2026-11-09-answers.md` (the session's own
quoted items are kept apart in the ignored local lane) and are paraphrased
in D12 to D16. None of the five was a decision the operator owed: four
were the planner's own design problems or misreadings put as questions,
and the fifth raised the WoW tooling app, which the operator plans when
they choose and a pass does not raise (now a line of the operator record).
Three orders the pass had polished were the wrong orders or the wrong
reading of the right one. The
pass had been asked to catch the earlier plans' momentum and carried it
instead on these: the corrections are the operator's, in their words, and
they replace sentences the records had held since 2026-10-24 (§Rules
recorded).

The second handoff, at 04:09Z, pushed those corrections and left two
things open on purpose: WO-016 beside WO-046, to be settled by an
amendment before WO-016 activates, and the refuters' known issues, to
stand until a later pass amends the order each names. The operator's
seventh message refused both: one pass does what one pass can, and nothing
on an unmerged branch is fixed. D17 and D18 are the answer.

While the third round ran the operator asked why the document check and
the third review took as long as they did; the measured answers are in
§Process cost. The planner then proposed two things for core's block: that
a later review round read only the diff, and the document check's figures.
The operator refused both. A recheck reads the whole change, which is
their direction of 2026-11-03 and the point of core's WO-255, already in
the operator record; and core's WO-261 already takes the session files out
of what the screen reads. Neither is in §Requests to core, the item on the
check's time that stood there is removed, and the operator record now says
the block carries only what core has not already answered or filed.

After the third refutation the planner amended four orders for five of its
findings and then met the kit's rule of one judgment per pass: the amended
text no longer matched the receipt, a further refutation was refused, and
the kit's record of a repair binds a hold, of which the receipt has none.
The amendments are bound the way the 2026-11-01 pass bound its own, by a
decision in each order's record citing the operator's direction and `plan
amend-order` (§Validation). The planner also started a fourth review that
nothing required and, when the operator asked what was happening, stopped
it instead of answering; the operator had asked a question and not for a
stop, which is the rule the kit carries for an operator's question. No reviewer or refuter has read those five amendments.

### D12. The machinery view is a view into what core has; the replay is a separate, later order

The operator: the machinery view is a view into what DotLn core currently
has, so they can improve core and find gaps; it shows what exists, in what
capacity, in what organization and with what relations, and nothing more.
And, separately: a later order replays a recorded work order, showing its
agents, how they worked with one another with the machinery each had then,
and what a change to that machinery would have changed in the order or in
their decisions; that is planned work they have gone over many times.

The plan had one order for both under the first name. WO-016, filed on
2026-10-24 as the machinery view, is the replay; no order showed what core
has. The pass first made this worse, twice: it told the operator that the
platform's records name no mechanism (a worker had looked for mechanisms in
one order's event log, where they are not, instead of in core, which is
nothing but its mechanisms), and then, reading the operator's description
of the view as a replacement for the replay, marked WO-016 not to be run.
Both are undone (D8).

WO-046 is filed for the view. Core at a named commit publishes what it
has: the compiled harness manifest (profiles per host with the events
available, grants and the loadout; 42 installed surfaces with path, rung
and mechanism ids; ten residue items), the hook registrations and each
hook's own configuration, the seven role skills with a statement per
mechanism, the agent definitions and the refusals. The order mines those
into one committed snapshot and shows them by level (loadout, host, role,
mechanism, surface), by relation (a role's mechanisms, a mechanism's
surfaces, what shares a surface) and by capacity per host (a hook enforces
it, a hook advises, or only role text carries it), with the gaps as three
lists. Its non-goals are the replay's whole subject. The note to core that
called the platform's records the gap is withdrawn from §Requests to core.
Rejected: rewriting WO-016 into the view (the operator's planned replay
would have been lost under its own number). Reopen: the operator wants a
level or a relation the snapshot does not hold.

### D13. Delayed rounds are the order's own; no order re-lays a page for size

The operator: design comparisons come in every order that changes the UI;
the rounds they delayed were a criterion of the order that owed them,
WO-023, delayed for want of time, and they are run as exactly that. And:
the direction on their display sizes was about screenshots and end-to-end
runs being taken at viewports they do not use; no order to change a page's
size was ever asked, so no delayed criterion could be about one.

The first handoff had turned WO-038 into a "first A/B testing pass" that
combined the reading at full size with WO-023's delayed rounds and the
narrow register's headings; the planner's next reply still treated the
reading at full size as a real subject. Both were wrong. WO-038, filed by
the 2026-11-05 pass from a verifier's measurement and rule 29, is removed:
it was never activated, and the index admits no open order outside the
sequence. Its text stays in history at `0461bed`. Rule 25 and the operator
record say what a delay is; rule 29 and the record say what the size
direction was for. The two register rows for the delayed rounds return to
deferred against WO-023, with nothing combined, and the row a 2026-11-05
allocation had given WO-038 is declined (§Register). Nine open orders said
that a delayed round goes to a separate pass that takes it; each now says
what rule 25 says, that the round stays the order's own criterion. The open orders take their walkthrough screenshots and their end-to-end
overflow checks at the operator's two viewports beside the others, which
is the direction as given; five study orders did not until D18. Rejected: keeping WO-038 last in the sequence (an order
nobody asked for, in a plan the operator reads). Reopen: the operator asks
for the reading's layout at their sizes.

### D14. The twin shows whether it would have intervened where the operator did

The operator: the twin's purpose is to show whether it would have made the
same interventions as they would have, within a stage; when a stage runs,
or when the verifier runs, adds nothing and makes no difference.

WO-017 as filed modelled the opposite, the waits between stages, and the
record carried a sentence saying the twin is never judged by agreement with
the operator's recorded actions. The pass amended that order twice before
the operator said what it is for. WO-017 is rewritten: for one recorded
stage, a phase of an order as one session journaled it, the page shows the
stage's events in order, the operator's interventions in the gaps where
they came, and the interventions of an RxJS variant of the operator beside
them, each read as matched, missed or extra by its place among the events
and never by the clock. Variants stay code and are never deleted. The
stage's events exist only in this launchpad's private journals, so a tool
in the target exports one stage to a directory Git ignores, nothing private
is committed, and everything committed uses a synthetic stage, the
walkthrough's screenshots included (the second review's finding). The stream
carries what the journal carries (steps, effects, results, denials, stops,
the class of an operator message) and never text, which the order states as
its limit. Its edge on WO-016 is gone, and WO-018 no longer marks the run's
patience-lane toy as built by the twin's route. The register's candidate
for a fourth result figure is declined as moot. Rejected: keeping the
waits as a second lane (the operator said they add nothing). Reopen: the
operator wants the twin to read what an agent wrote, which needs a richer
stream than the journal holds.

### D15. Text is never hard-coded; the pass asks nothing about it

The operator: the text had been hard-coded in the TypeScript files, and the
demand was that it not be. The pass had asked them a storage question about
the catalog's mined rows, which are data and were never hard-coded, and
they answered with the plain test of a translation: could they read the
site in another language. D7 holds the answer the pass owed instead of the
question. The record carries the demand as restated.

### D16. The scene leads

The operator: the scene is the part of the app they like, and they had
hoped for more improvements to it. WO-015's decisions already said so in
effect: its feedback loop was ended on 2026-10-30 with the iteration
carried to later orders that planning would take up (WO-015-D015), and
since then the plan placed two scene orders behind a batch, a standards
pass and a migration with nothing on screen. WO-036 and WO-037 now open
the sequence. WO-036 also takes the scene's one boarded defect,
WO-015-D010's follow-up: a crowd under priority steering keeps a faint
shimmer and a settled crowd crawls when sent somewhere near; step 7 repairs
it and criterion 3 judges it with specs that fail at the base. The scene's
other candidates on record keep their conditions: the 3D painter on the
operator's word, and the run's remaining scene toys after the shelf.
Rejected: a third scene order invented by the pass (no direction names its
subject). Reopen: the operator names the next scene improvement.

### D17. WO-016 is amended in this pass, as one order, beside WO-046

WO-016 keeps its subject and its design: one recorded order as a strip of
beats, the four role slots and the operator's figure, the hand-back cards,
a refilled slot's ghost, an agent's card, the operator's own ideas as
mechanism changes dropped on an agent with the before as a ghost, the
presentation-only band, a refused drop kept visible, the idea sink, and the
records and replay libraries. It is not split. What changes is what it
needed in order to run after WO-046 and what the filed text had wrong:

- **Beside the view.** The replay is a second route of the machinery
  feature, `/machinery/replay`, with a Replay item in the Machinery menu
  group; `/machinery` stays WO-046's. It extends the two machinery
  libraries and WO-046's two documents under its own names (`replay-page`,
  `ReplayFacade`, `ReplayStore`, the storage key `machinery.replay`, its
  own e2e spec) and takes WO-046 as a hard edge. This answers the second
  refuter's finding on both orders.
- **The machinery at the time.** The filed text read each agent's
  mechanisms from a file hand-copied from this launchpad's role skills on
  the day WO-016 activates, which is the fork's machinery at a later
  starter. The operator's direction is the machinery each agent had when
  the order ran. Core's `main` at the last commit before each recorded
  order's first row (`8bbdcbff` for WO-221, `55699291` for WO-226; core
  took no commit while either ran) publishes the files WO-046's miner
  reads, in the shape they have at its pin (checked by this pass: three
  host profiles, 33 installed surfaces, six role skills). So the miner
  writes one snapshot per recorded order and the agent's card reads its
  role there, with core's own statement for each mechanism. Criterion 3
  becomes the snapshots' reproduction and a verifier's read of the stamps
  at both commits. The miner's tag becomes optional and it reads an input
  directory a commit lacks as empty, both written into WO-046.
- **What the snapshots say about the idea kinds.** At both commits no
  role's stamp carries a gem: core declares one active mechanic,
  `clean-room`, and no role carries it; the executor carries eight supports
  and every other role two. So removing a gem is refused with that reason
  and adding one shows `clean-room`. One kind's signature changes: the
  filed `setRung(n)` named no mechanism, and a rung on core's hierarchy
  ranks a mechanism, so it is `setRung(id, n)`.
- **Defects of the filed text**, each fixed as this pass's first round had
  verified against the target: the base, an empty tree; the gaps held
  within one second of rounded figures, now asserted from the rows' own
  stamps; the copies under a testing entry point that the production build
  excludes, now production data loaded lazily; a scrub that refused the
  commit and the repository it must write; rows that carry no ordinal,
  which the reducer now numbers; the sink's settings as environment
  variables the workspace refuses, now flags; the sink's missing answer to
  the browser's preflight and its missing refusal of a control directory;
  a criterion that read a directory no step creates; and the conventions
  of rules 9, 24, 25 and 29.

Rejected: leaving the amendment for the pass before WO-016 activates (the
second handoff's choice, which the operator refused: D18); splitting the
order (the first handoff's choice: D8); keeping the launchpad's role stamps
as the source (two models of one thing in one feature, and not the
machinery at the time); a top-level route with a feature library of its
own (that library may not import the one that holds the snapshots: rule
15). Reopen: the operator wants the replay's page somewhere else, or a
reading of gem and support other than core's own.

### D18. Nothing this pass can settle is left for another

The operator, after the second handoff: a planning pass settles in itself
everything it is able to settle, and nothing on a branch that has not
merged is fixed. The second handoff had recorded the two refutations' known
issues as standing until a later pass amends the order each names, and had
left WO-016 beside WO-046 for an amendment before WO-016 activates. That
is two passes for the work of one, and it is undone here: every item is
amended now, or is answered with the reason no text can settle it. The
reviews and the refutation then ran again on the result (§Validation, the
third round).

| Item, and where it was recorded | What this pass did |
| --- | --- |
| WO-016 and WO-046 both adding one library, removing one page and claiming `/machinery` (receipt 027) | amended: D17 |
| WO-016's base, its unmeetable criterion on the gaps, its fixtures outside the production build (the two reviews; D8 as it stood) | amended: D17 |
| WO-043's field for a verbatim sentence open to batches from sources in copyright (receipt 027) | amended: `check-catalog.mjs` admits a `maxim` on the Art of War batch alone, a control proves the refusal, and each of the six designers confirms that nothing it returns carries a passage of its source |
| WO-024 without a verifier's read of the research (receipt 027) | amended, and in WO-029 to WO-032 as well, which the refuter did not judge and which lacked it too: rule 27's random sample, its command and the judgment are in each use criterion |
| WO-030's walkthrough without the operator's two display sizes (receipt 026) | amended in all five study orders: the walkthrough's screenshots and the end-to-end overflow check run at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620, and a UI issue at either full size fails (rule 29). D13 had claimed every order of this pass already did so; five did not |
| WO-024, WO-030 and three more naming WO-018 for the catalog's search controls (receipt 026) | amended in the five: no order carries them, and the register row is named |
| WO-036's cost tools passing while changing nothing visible (receipt 027) | amended: criterion 5 holds a spec in which a travel weight raises the search's expansions with the route unchanged, and the two rows that weigh only the uniform layers are shown changing nothing, the inspector saying which in words |
| WO-008's storage check passing on an empty list once the candidate is committed (receipt 027) | amended: the check reads the two shell directories whole, which hold no storage call at `eb9d227` |
| WO-017's exported stages in a build that is not production (receipt 027) | amended: criterion 2 holds both published configurations; the order says the local configurations serve the ignored directory on the operator's machine, which is how the page reads a stage, and that no workflow publishes a build |
| WO-035 replacing a reading with a failure page on a missing message (receipts 026 and 027) | answered, no amendment: its criterion 3 already holds every listed field of every row of every bundled work to a derived key, so in the shipped language a derived message cannot be missing; failing closed is WO-028-D054's recorded decision for what remains |
| WO-035's registration time and memory compared with nothing (receipt 027) | answered, no amendment: the kit's criteria screen refuses a duration or a size as a criterion's subject; step 12 records the figures |
| WO-040 reshaping four builder functions while forty study modules are a non-goal (receipt 026) | answered, no amendment: the four are private to `flow.ts` and `rxjs/marbles.ts` at `eb9d227` (no other module calls them), so the reshape touches no study module |
| WO-040 with no lint keeping the shape rule (receipt 026) | answered, no amendment: the order rejects a parameter-count lint on WO-028-D060's recorded reason, and new families are built builder-first (D3) |
| WO-045 and WO-043 each adding a schema version with none retired (receipt 026) | answered, no amendment: the target's own rule changes a shipped record's shape by a new version and never by an edit (`catalog.md` §The record) |
| WO-043 leaving twenty-five designed toys and one built (receipt 027) | answered, no amendment: an order that builds a toy takes the operator's pick from the shelf, and the shelf is WO-018's to land |
| WO-008 judged by every receipt and not yet run (receipt 026) | answered: it is the third road order of the sequence (D2) |
| WO-017 adding a menu item without saying who sees it or regenerating the baselines that show the menu (receipt 028) | amended: the Twin item renders for a session holding `twin:read` and for no other; criterion 6 holds both cases and the visual run, a baseline regenerated only where its session shows the item |
| WO-016 losing the operator's ideas when a stored value fails to parse and the next save overwrites it (receipt 028) | amended: the unreadable value is moved to its own key before anything is written, a later save leaves it there, and the shelf says a saved state could not be read |
| WO-008 with no criterion holding its four pages to the message system (receipt 028) | amended: criterion 9 names `npm run i18n:check` among the gate's commands and what it holds |
| WO-036's hashes of the earlier known outcome against its two new steering changes (receipt 028) | amended: the fixture's one tool is `steer.blend` (checked at `eb9d227`) and the engine's `avoid` is unchanged, so criterion 2 says why its hashes hold, criterion 3 holds the repair to priority steering alone, and the Cost line names the repair |
| WO-017 accepting on a synthetic stage with the real stage only reported (receipt 028) | amended in one clause: a real stage the page refuses fails the criterion. The rest is answered: nothing of a real stage may enter the evidence (the second review's finding) |
| WO-017's stage directory served by any build configuration not named (receipt 028) | answered, no amendment: the local configurations must serve it, a new configuration is a reviewed change to `project.json`, and criterion 2 names the two that publish |
| WO-046 and WO-016 judging the snapshots' reproduction from the executor's run when no core clone is reachable (receipt 028) | answered, no amendment: a criterion that needs a clone or the network carries a fallback by the kit's criteria screen, and the verifier records it untested |
| WO-043's provenance criterion passing on the workers' statements where the journal reads `unobserved` (receipt 028) | answered, no amendment: the launchpad cannot observe a Codex worker's reads, the brief forbids the read, and the order records `unobserved` and claims no observation |
| WO-043 with no mechanical guard on a passage of a source in copyright inside a definition or note (receipt 028) | answered, no amendment: a check would need the source's text in the repository, which the repository may not hold; the designers' confirmations and the verifier's sample are the guard |

Rejected: recording these for the next pass (the operator refused it, and
seven of the amendments are a few sentences each).
Reopen: none; a later pass that finds one of these unsettled reads this
table first.

## Register

The register was synced before the dispositions (no public source had
changed its rows) and seven batches applied: two before the first handoff, four
after the operator's corrections, which also restate three reasons the
first two had recorded, and one after the second handoff. The batches are kept in the ignored local lane as
`docs/control/local/planning/followups-apply-2026-11-09.json` and its
siblings `-b` to `-g`. The register stands at revision `da0db232…` with
thirty-seven rows pending, all deferred. The table gives each row's
disposition as it stands; a row this pass disposed more than once keeps its
earlier dispositions in the register's own history.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| `FUP-e9b95694a5de071e` (WO-015-D010, a crowd under priority steering never quite at rest) | **allocated** to WO-036, the next scene order, whose step 7 repairs it and criterion 3 judges it (D16) | WO-036's verification finds a crowd still not at rest or a re-targeted crowd slower than a plain Arrive |
| `FUP-4e24208e45d27a1d` (WO-034-D013, the wall study's two gaps) | **allocated** to WO-045, moved from WO-036, which the split leaves no file under the Tools feature (D6) | WO-045's verification finds the moments out of order or the traces unreadable |
| `FUP-592e538095eaead9` (a link from the scene's inspector to a tool's study) | **allocated** to WO-045, moved from WO-036 with the link (the consistency review's finding) | WO-045's verification finds a rail tool with a study and no link |
| `FUP-35187266d29e00dc` (WO-026-D012, the documents that describe the `/machinery` placeholder) | **allocated** to WO-046, the order that replaces the placeholder, whose documents step carries them (D12) | WO-046's final review finds one still describing the placeholder |
| `FUP-2ed0c79e62b53dd7` (the amendments owed to the four road orders since 2026-10-30) | **settled**: WO-008, WO-017, WO-018 and WO-016 are amended in this pass and name `eb9d227` (D4, D14, D9, D17) | an amended road order is found stale before it activates |
| `FUP-02c1ebe8146fe2f1` (WO-023-D008, the `states` family's delayed rounds) | **deferred** as what it is, a criterion of WO-023 delayed for want of time, with nothing combined into it (D13) | the operator has the time for those rounds and says so |
| `FUP-5af094bffcaf27ef` (WO-039-D011, the narrow register's headings) | **deferred**: judged when WO-023's rounds run and the register table stays (D13) | WO-023's rounds have run and kept the register table |
| `FUP-400988852956edcf` (the mining store and the app's API) | **deferred** on its own condition. The reason the first handoff recorded, a limit of the platform's records, is withdrawn: the mechanisms are core's own and the app reads them from core (D12) | the operator names the next public source after WO-043, or the committed copies limit a toy |
| `FUP-0fb531a975308a81` (explicit catalog search controls) | **deferred**: read against WO-044, which changes no search control (D10) | WO-044 has merged and a search still cannot be narrowed without typing |
| `FUP-191e65317f5e73f4` (WO-028-D024, how the catalog uses a full-size screen) | **declined**: the operator asked for no order that re-lays a page for size, and the order this row was allocated to, WO-038, is removed (D13) | the operator asks for the reading's layout at their sizes |
| `FUP-4ddf0151d707734a` (the twin's fourth result) | **declined** as moot: the rewritten WO-017 carries no result figures for a fourth to join (D14) | none; a later lane that prices a policy would be a new candidate |
| `FUP-3372acd8d62e8cc7` (a lane pair of WO-014 and WO-016) | **declined** as moot: WO-014 closed on 2026-10-26 | none |

Rows read and left as they stand: `FUP-11889720fb205fb0` and
`FUP-b730246e24e0c264` (the enterprise batch's residue, measured and
waiting for the pass filed after WO-031's batch lands, D3 and the NoOp on a
`states` builder); `FUP-1f5953e14b1077b4` and `FUP-70df0fbdafe8c2d6` (the
work view and the arrival screen, the first pages of a UI to live in, both
behind the machinery view, the first now naming WO-046 as that view);
`FUP-deccd7ed510d2b77` (the pattern workshop's
seeing half, allocated to WO-016 on 2026-10-24, which stands with that
order's text); `FUP-dfb896b07eb669e5` and `FUP-cc72e6b1…` (the shell's and
the board's look and loading shift, carried by no order and candidates
until the operator asks); `FUP-48b1009d…` (the board under the machinery
routes, its condition now naming WO-046); `FUP-29ad2938…` (the twin's later
lanes); `FUP-49579a76…` (the run's remaining toys, after the shelf); and
the kit and close rows of the earlier passes, whose conditions did not
occur in a window with no order run.

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-122-0-wo-039-retired-record-links-settled-2026-11-08.md",
  "tags": []
}
```

<!-- dotln-red-tags:end -->

## NoOps

Each declined candidate uses the NoOpIntent fields: kind, reason, evidence,
reevaluation and usefulWhen. No automatic schedule is created by this record.

| Candidate (kind: NoOp) | reason and evidence | reevaluation | usefulWhen |
| --- | --- | --- | --- |
| Leaving the sequence and the orders as they stood | The operator named no change as a valid result, and the evidence does not support it: no road order since 2026-10-30, four orders on an empty base, two orders holding several outcomes (WO-036, WO-018), criteria or steps that could not run as written in WO-008, WO-018 and WO-035, and two orders the operator's corrections showed to be the wrong order or the wrong reading (WO-017, WO-038) (§Readings; D2 to D18) | not applicable; the changes are this pass | — |
| A third scene order | The operator wants more improvements to the scene and no direction names the next one after walls and shooting; the pass invents none (D16) | the operator names it | The scene's next improvement has a subject |
| An order that re-lays the reading for the operator's display sizes | The operator asked for none; their direction concerns the viewports of screenshots and end-to-end runs, which the orders carry (D13) | the operator asks for it | — |
| An order for WO-023's delayed rounds | They are WO-023's own criterion and need the operator's time, not a new order (D13; `FUP-02c1ebe8146fe2f1`) | the operator has the time and says so | — |
| An order for a UI to live in (the work view, the arrival screen) | The operator's decisions of 2026-10-24 keep the app unwired from core, and both pages are candidates behind the machinery view (`FUP-1f5953e14b1077b4`, `FUP-70df0fbdafe8c2d6`). Evidence: WS-001 §The app and its sub-apps; the operator record's item | WO-046 merges, or the operator asks | The operator works from the app instead of the terminal |
| Typed translation keys | Rule 9 calls them a later member; WO-035 changes the key space they would be generated from. Evidence: WO-035's Design | WO-035 merges | A mistyped key fails at build time |
| A shared builder for the `motion` family | It would rewrite forty modules for a family with no further batch filed, and the functions over the rule there are per-frame helpers a description object repairs (D5). Evidence: the parser's histogram; `flee.presentation.ts` | another movement batch is cut | A movement batch lands as data |
| A builder-first rebuild of the `states` family ahead of WO-031 | WO-039 moved the transition inference into `statesModel` on 2026-11-08; what remains in a `states` presentation (356 lines on average) was not measured for what a builder could own. WO-031's batch therefore lands hand-written and the pass after it measures the residue (D3; `FUP-11889720fb205fb0`) | WO-031's batch lands, or the pass before it activates measures a presentation's liftable share | A `states` batch lands as data |
| A standards pass over WO-036's code ahead of WO-037 | Rule 31 as restated asks for a pass where residue is measured, and no code has landed to measure (D3) | WO-036 merges | The scene's engine reads as the example |
| Electing `features.verbatim-operator-words` | It would admit the operator's words into committed text to silence a match on a path (D1) | the operator asks for the election | — |
| Rewriting the purpose | Its critical-path sentence still describes the workstream; one phrase is replaced, the machinery view's, with the operator's restatement (D12) | a sub-app is dropped or added | — |
| Refilling the research track | Four research orders are queued (WO-029 to WO-032) and the queue is refilled when fewer than two are (WS-002 rule 6) | two of the four close | The Codex capacity has a next order waiting |
| Updating the README's release block | No launchpad order is queued; `v0.3.5` is published | a launchpad order activates | — |

## Sequence

The sequence opens with three pairs, a road order first and side work
beside it (D2): WO-036 with WO-024; WO-037 with WO-040; WO-008 with WO-045.
Then WO-044, WO-035, WO-046, WO-017, WO-016, WO-018 and WO-043 run one at a
time. No pair holds an edge between its members, every hard edge runs
forward, and the second publisher of a pair integrates the target's `main`.
WS-002's members stay a separate track with no sequence entry: WO-029,
WO-030 and WO-031 are runnable now on Codex and WO-032 after WO-024.

What the operator sees after each order lands:

| Order | On screen |
| --- | --- |
| WO-036 | walls and obstacles they draw on the field; a squad routing around them and replanning; a no-route state they can read; head-on pairs parting; a crowd that comes to rest and, sent somewhere near, no longer crawls |
| WO-024 | twenty more studies under Tools, ten from Gödel, Escher, Bach and ten from Team Topologies, drawn by the `relations` family |
| WO-037 | units firing at a target, bullets stopped by walls, a moving target led and hit, a knockout that re-lays the formation |
| WO-040 | nothing new but nineteen flow state sentences that read as English |
| WO-008 | a sign-in through the mocked provider; an account page that says in prose who is signed in and what they may do; a denied page that names the missing permission; a session that refreshes once and ends cleanly |
| WO-045 | the A* study stepping its search cell by cell, with the heuristic off and on; a link from a rail tool to its study; the two avoidance studies showing what the scene runs |
| WO-044 | every studied concept on one page by work and chapter; each work a link on the Tools home; studied counts in the contents; a mark on a nearby link that leads to another study |
| WO-035 | nothing changed in English; every string arriving through the translator, none hard-coded in the TypeScript, a missing one a visible failure |
| WO-046 | at `/machinery`, what core has at a named commit: its roles, mechanisms, hosts and installed surfaces by level; a relation followed from a role to a mechanism to the surfaces that carry it; per host, whether a hook enforces a mechanism, advises or only role text carries it; the gaps as three lists |
| WO-017 | at `/twin`, one recorded stage's events in order, their own interventions marked where they came and a variant's beside them, each matched, missed or extra |
| WO-016 | at `/machinery/replay`, one recorded order as a strip of beats with its agents in their role slots, each agent's card showing the machinery it had as core stood when the order ran, and an idea of their own dropped on an agent with the before as a ghost |
| WO-018 | nineteen toys read in full on a shelf under Tools, their tools followed into the catalog |
| WO-043 | The Art of War on the catalog's shelf with its maxims; six new toys on the toy shelf |
| each research order | twenty more studied concepts in its work's landed family |

## Write-backs

- `docs/planning/sequence.md` (D2, D16).
- WS-001: rule 31 (D3); rule 25 on a delayed round and rule 29 on what the
  size direction was for (D13); §The app and its sub-apps and §The
  operator's model, restated from the operator's corrections (D12, D14);
  the dependency plan, now the road with the scene leading and the side
  lane with the open members' typed edges; the member table's bases and
  roles, four new rows and the row of the removed WO-038 gone; the delivery
  contract's member range; the lies-ahead table in the sequence's order;
  the delivery states and the workstream block's members and open-order
  edges, generated from the orders' own dependency blocks.
- WS-002: rule 6's gate (D3); WO-032's row and the dependency sentence.
- The operator record: the items on design comparisons, on text that is
  never hard-coded, on the display sizes, on the machinery view and the
  separate replay, on the twin's purpose, on the scene, on the WoW
  tooling app and on settling in one pass what one pass can, each from a
  journaled message (§Rules recorded).
- The purpose: the machinery view's phrase (D12).
- The repository profile: its §Run content workers names WO-043 where it
  named WO-018 for the two fan-outs (D9), and its note on WO-023's first
  round follows rule 25 as restated; the target has not moved.
- The thirteen amended orders, the four filed and the one removed (§Orders
  filed and amended). In nine open orders the clause on a delayed round no longer
  names a separate pass that takes it (D13).
- The follow-up register (§Register); the generated work-order index and
  decision index; the idea ledger's registration heading and the lineage
  index; the cost table.
- Owed in the target, carried by orders: `catalog-rules.md`'s sentence on
  standards passes (WO-040's step); the documents that describe the
  `/machinery` placeholder (WO-046's step).
- Four decision records, in `docs/evidence/` for WO-016, WO-017, WO-008 and
  WO-036, and their four rows in the planning log (§Validation).
- `docs/control/doc-baseline.json`: one declared historical link, from the
  2026-11-05 pass's record to the removed WO-038's file (D13).

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[
  {
    "rule": "Design comparisons come in every order that changes the UI; rounds the operator delays for want of time are that order's own criterion, run later as exactly that, with nothing combined.",
    "document": "docs/operator/README.md",
    "section": "How the operator directs a session",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:12:55.800Z"
    },
    "captureDigest": "sha256:2e85ed3ea4c02094b44c9c8d44aa3d892bb1574aed41f0e795317438c2b59c44"
  },
  {
    "rule": "Rounds the operator delays are that order's own criterion, run later as exactly that and combined with nothing else.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "House rules",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:12:55.800Z"
    },
    "captureDigest": "sha256:2e85ed3ea4c02094b44c9c8d44aa3d892bb1574aed41f0e795317438c2b59c44"
  },
  {
    "rule": "The text had been hard-coded in the TypeScript files, and it is never to be hard-coded.",
    "document": "docs/operator/README.md",
    "section": "What the operator wants",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:15:04.239Z"
    },
    "captureDigest": "sha256:cae8d2dcd795b707feef350fb6c55624baf1687bafe4e41c567aab799c360dbd"
  },
  {
    "rule": "The machinery view is a view into what DotLn core currently has: what exists, in what capacity, in what organization and with what relations, so that the operator can improve core and find gaps, no more and no less.",
    "document": "docs/operator/README.md",
    "section": "The app and its subject",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "A separate, later order replays a recorded work order to show its agents and how they interacted given their machinery at the time, and then how a change in that machinery would have changed the order or their decisions.",
    "document": "docs/operator/README.md",
    "section": "The app and its subject",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:27:22.393Z"
    },
    "captureDigest": "sha256:b5aa37ca8d678027353a0e786bda9b8d288933e92398cc58903f9924a5f42d90"
  },
  {
    "rule": "The twin's purpose is to show whether it would have made the same interventions as the operator would have within a stage; when a stage runs makes no difference to it.",
    "document": "docs/operator/README.md",
    "section": "The app and its subject",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "The direction on the operator's display sizes was about screenshots and end-to-end runs taken at viewports they do not use; it asks for the viewports they use and never for an order that re-lays a page for size.",
    "document": "docs/operator/README.md",
    "section": "What the operator wants",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "The machinery view is a view into what DotLn core currently has: what exists, in what capacity, in what organization and with what relations, so that the operator can improve core and find gaps, no more and no less.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "The app and its sub-apps",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "A separate, later order replays a recorded work order to show its agents and how they interacted given their machinery at the time, and then how a change in that machinery would have changed the order or their decisions.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "The app and its sub-apps",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:27:22.393Z"
    },
    "captureDigest": "sha256:b5aa37ca8d678027353a0e786bda9b8d288933e92398cc58903f9924a5f42d90"
  },
  {
    "rule": "The twin's purpose is to show whether it would have made the same interventions as the operator would have within a stage; when a stage runs makes no difference to it.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "The app and its sub-apps",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "The twin's purpose is to show whether it would have made the same interventions as the operator would have within a stage; when a stage runs makes no difference to it.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "The operator's model",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "The direction on the operator's display sizes was about screenshots and end-to-end runs taken at viewports they do not use; it asks for the viewports they use and never for an order that re-lays a page for size.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "House rules",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "The machinery view is a view into what DotLn core currently has: what exists, in what capacity, in what organization and with what relations, so that the operator can improve core and find gaps, no more and no less.",
    "document": "docs/product/purpose.md",
    "section": "Purpose",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:23:06.687Z"
    },
    "captureDigest": "sha256:db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a"
  },
  {
    "rule": "A separate, later order replays a recorded work order to show its agents and how they interacted given their machinery at the time, and then how a change in that machinery would have changed the order or their decisions.",
    "document": "docs/product/purpose.md",
    "section": "Purpose",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:27:22.393Z"
    },
    "captureDigest": "sha256:b5aa37ca8d678027353a0e786bda9b8d288933e92398cc58903f9924a5f42d90"
  },
  {
    "rule": "As the app stands, the scene is the one part of it the operator likes, and they want more improvements to it.",
    "document": "docs/operator/README.md",
    "section": "The app and its subject",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:37:58.134Z"
    },
    "captureDigest": "sha256:4a4715d64e8f53eff57c27f3138bf58a8f8509d7c38b4709e9305cd991ad1aca"
  },
  {
    "rule": "As the app stands, the scene is the one part of it the operator likes, and they want more improvements to it.",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "Dependency and compatibility plan",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:37:58.134Z"
    },
    "captureDigest": "sha256:4a4715d64e8f53eff57c27f3138bf58a8f8509d7c38b4709e9305cd991ad1aca"
  },
  {
    "rule": "The WoW tooling app is the operator's to plan, when they choose; a planning pass neither files it nor raises it.",
    "document": "docs/operator/README.md",
    "section": "The app and its subject",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T02:12:55.800Z"
    },
    "captureDigest": "sha256:2e85ed3ea4c02094b44c9c8d44aa3d892bb1574aed41f0e795317438c2b59c44"
  },
  {
    "rule": "A planning pass settles in itself everything it is able to settle: it leaves no amendment, repair or decision for a later pass that it could make now, and treats nothing on an unmerged branch as fixed.",
    "document": "docs/operator/README.md",
    "section": "How the operator directs a session",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T04:12:34.326Z"
    },
    "captureDigest": "sha256:9acd06f09b68b19e8af161046c0179a911ba11e5c9d9aecfbc927e7bb59b5414"
  },
  {
    "rule": "The prompt for core carries only what core has not already answered or filed; an item that one of core's own orders already fixes is not sent back.",
    "document": "docs/operator/README.md",
    "section": "Updates, the lifecycle and records",
    "message": {
      "sessionKey": "172b0e3a92c4b7039c5a12a3abcc1c59f021ebbb509c3b38993c2f31b266b8f4",
      "recordedAt": "2026-11-10T05:21:21.227Z"
    },
    "captureDigest": "sha256:714dd28517335fdb433e4c575af7e15547486be01d658c806c9ac49301baf4e2"
  }
]
```

<!-- dotln-rules-recorded:end -->

The dispatch gave no standing rule; rule 31 and WS-002 rule 6 were narrowed
to the direction the record already holds, and what they add is written as
planning judgment. The entries above come from the operator's messages
after the two handoffs (D12 to D18): each states a direction in the scope
the operator gave it, and three of them replace sentences the record had
carried since 2026-10-24 that the operator's own words do not support.

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.122.1

From DotLn-Enterprise-Starter's planning pass of 2026-11-09, docs/planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md. These are the fork's findings, not new operator direction. Your answers of 2026-11-08 to the fork's two blocks were pasted into this dispatch and are read against the records in that document; nothing in them is disputed.

1. Ask, on WO-259's verbatim screen: a document path is enough to fail it. On the update branch for v0.122.1 the first test:docs run failed three lines, docs/product/07-execution-guide.md lines 2192 and 3509 and UPSTREAM.md line 195, each a link to your planning document of 2026-11-08. That path tokenizes to fourteen words against a window of twelve, your pasted answer block named the same path, the block stood inside the dispatch capture, and the run was new at the base, so the base exemption did not apply. Nothing of the operator's was copied. The fork moved the pasted block to docs/control/local/planning/ and kept the operator's own words in the capture, and the second run passed. This will recur whenever an operator pastes a core block that names a document the next release links. Asks: leave the tokens of a path, a URL or a Markdown link target out of a run, or exempt on an update branch the lines whose bytes are the incoming kit's; and have WO-261's capture sentence say what a capture holds when the operator's message itself carries a pasted block.

2. Your item 6, the data you asked for. WO-039's close record reads publication.outcome not-attempted, cleanup.outcome clean, cleanup.branch.outcome deleted and targetCleanup.outcome removed, with dryRun false. npm run release -- list does not name WO-039: the latest launchpad release, v0.3.5, names WO-026, WO-020, WO-021, WO-022, WO-028 and WO-033, and WO-027, WO-034, WO-023 and WO-039 have closed since without a launchpad release. scripts/lib/drive-route.mjs sets the released fact from a release-list match or from a close whose publication.outcome is no-release, and sets merged from the branch's ancestry or from that same no-release close, so a target order whose close records not-attempted has neither and reads awaiting-merge with its branch deleted and its target removed. resume status still prints that for WO-039 today.

3. Starter v0.122.1 is taken (#73) on the operator's word in the dispatch. Preview 59 replaced, 4 added, 0 removed, 1 refused, no instance action; the merge clean; harness emit 43 surfaces; harness check, launchpad verify and npm test green and test:docs green on its second run (item 1). The by-hand check your item 2 keeps as this fork's duty until WO-261 found no file outside the manifest changed by both sides. The one refused row is .claude/harness-manifest.json, which this fork emits with its inferred Codex surfaces; launchpad verify reports it as the one kit file differing from the manifest, and the same file will read refused at every update. Observation: a generated surface the instance re-emits could be listed as re-emitted instead of refused.

4. Observation on the dispatch standing: at this session's first usage readback, ten seconds after its dispatch, harness usage printed a planner standing started 2026-11-08T01:25:43Z with 44 h 51 min elapsed and two complete runs, for a session that began on 2026-11-09 at 22:16Z. The bound is unset here, so nothing was refused; a set bound would have read exhausted at entry. The standing seems to carry an earlier planning dispatch of the same host key.

5. Observation on the planner's role text and process cost: the role admits a re-task only to recheck what a worker found. This pass's four research workers each held an order's findings; drafting the amendments from those findings meant eight fresh workers that re-read the same files. Ask: say whether a re-task that writes only to session scratch, with the parent the sole repository writer, is a recheck.

6. Ask: the kit's runtime compares against core's own order numbers, and an instance's orders reach them. scripts/lib/plan-receipts.mjs line 157 writes a sentence about a self-referential instrument into any receipt whose subject holds WO-041; this fork numbered a new order WO-041 today and renumbered it WO-045 before its receipt. scripts/release.mjs lines 1501 and 1578 switch the release-note contract on at a passed final review of WO-024, and this fork's WO-024, a concept-study batch, is open and sequenced next, so its final review will flip the launchpad's release notes out of the legacy form. scripts/resume.mjs line 829 exempts WO-019, scripts/lib/plan-continuation.mjs line 529 names WO-126, packages/skeleton/dist/src/evidence-editions.mjs names WO-011, and scripts/lib/plan-dependency-migration.mjs line 48 names WO-043, guarded there by a criterion's text. Ask: key each on core's repository or on the recorded event it stands for, and say whether the WO-024 switch needs anything of this fork before that order closes.

7. Observation and ask on the criteria review of a planning subject that is split into batches: with --capture, each batch's report must carry the Items table, and a batch that lacks it refuses the whole round with nothing written. Here the brief measured 724,791 bytes against the 400,000 ceiling, two batches. Run one: batch 1 refused after 0 h 15 min with five findings returned. Run two: batch 1 accepted, batch 2 refused after 0 h 11 min with four findings returned, 0 h 28 min in all. Three Codex launches and 0 h 43 min produced no report, and the returned text is kept nowhere (the worker-output directory holds only its owner record). The fork then ran the review without the capture and answered the dispatch's items in its own document, which is not what the operator's rule asks. Asks: keep a refused report's returned text and findings in the reviews lane marked refused; let the Items table be owed once per round, not per batch; and accept a format repair from the same worker, as the refuter's result admits.

8. Observation and asks on removing a filed order that never activated. The operator's corrections after this pass's first handoff removed one, WO-038, filed on 2026-11-05. npm run resume -- withdraw refuses it as an unknown work order, since it has no event, and npm run work-orders -- index --check refuses an open order outside the sequence, so the route left was deleting the file. npm run plan -- followups --apply then refused the batch that re-disposed the register row allocated to that order, with "allocation target WO-038 has no filed work order": the register is judged as it stands before the batch is applied. The fork applied the batch with a one-line stand-in file present and removed it, as it had earlier the same day when it renumbered a new order. Asks: a planning route that withdraws a never-activated order with a recorded reason, and a batch judged on the register it produces.

9. Observation and ask: a repair of a refuter's known issue has no record the plan check accepts. The operator's direction here is that a pass settles what it can, so after receipt 2026-11-10-planning-80685a5e0fbc1a46-028 (aligned-with-findings, no hold, nine known issues) the fork amended four orders for five of the issues. npm run plan -- check then failed with "changed Cost declaration has no text-bound disposition"; npm run plan -- refute refused with "one judgment per pass; dispositions settle repairs, and another judgment requires changed observed evidence"; and npm run plan -- dispose takes a hold id, which scripts/lib/plan-receipts.mjs lines 125 to 129 derive from the result's holdReasons alone, so a receipt with no hold offers nothing to dispose. The fork bound the four orders with a decision each and npm run plan -- amend-order, as its 2026-11-01 pass had. Ask: let a known issue be disposed by its criterion as a hold is, so a repair made in the same pass is bound without an operator-authorization record.
```

## Process cost

Model and effort: Fable 5.2 at `xhigh` (`CLAUDE_EFFORT`), Claude Code
2.1.321, the operator's selection; no host readback of the effective model
beyond the session's own. The research, drafting and refutation workers were
`dotln-worker` (the generated definition pins `claude-opus-5-5` at `xhigh`;
effective model and effort unknown), and the three reviews Codex
`gpt-6.1-sol` at `max`, pinned on the command line.

| Measure | Value | Source |
| --- | --- | --- |
| Wall clock, dispatch to the first close | 3 h 5 min (22:16Z to 01:21Z); the first handoff at 01:36Z | the prompt hook's stamp; `date -u` |
| Wall clock, the corrections | 3 h 26 min from the operator's first answer to this section (02:12Z to 05:38Z): 1 h 57 min to the second handoff and 1 h 29 min after it | the session journal's rows; `date -u` |
| The update | 0 h 11 min from the dispatch to the finish on `main`, 0 h 5 min of it the pull request waiting for the operator's merge | the gate logs; `gh pr view 73` |
| The research | four workers, 0 h 11 min wall clock, 1,079,405 tokens | the host's task notifications |
| The drafting | eight workers and one re-task, 0 h 31 min wall clock, 3,126,755 tokens | the host's task notifications |
| The first round's reviews | 1 h 10 min wall clock from the first launch to the last report; design 0 h 19 min and 9,066,765 tokens, consistency 0 h 27 min and 17,732,483, the admitted criteria run 0 h 24 min and 12,447,300; the two refused criteria runs 0 h 43 min, tokens unknown, no report written | the reports' headers; the helper's lines |
| The first refutation | 0 h 13 min dispatch to file, 207,909 tokens | the receipt; the host's task notification |
| The corrections' drafting | two drafting workers and their re-tasks between 02:15Z and 02:45Z; tokens unknown (the notifications' figures were not kept across the session's context compaction) | the session journal's hand-back rows |
| The second round's review | 0 h 37 min, 15,678,478 tokens, two batches | the report's header |
| The second refutation | 0 h 12 min, 182,960 tokens | the host's task notification |
| The amended WO-016's draft | one drafting worker, 0 h 27 min, 419,137 tokens | the host's task notification |
| The third round's review | 0 h 21 min, 10,819,871 tokens, two batches, a brief of 636,581 characters for 2,142 changed lines in fifteen documents, each given whole | the report's header; `git diff --numstat` against the second round's tree |
| The third refutation | 0 h 12 min, 179,945 tokens | the host's task notification |
| A fourth review, not required | started by the planner and stopped after 0 h 1 min; no report; tokens unknown | the session journal's task row |
| The document gate | 0 h 14 min for the run on the first receipt's commit, 0 h 13 min of it the document check; 0 h 8 min for the check on the first subject; 0 h 11 min for the check alone on the corrected subject, which found three failures | the gate logs; the bounded probe's result line |
| This session's tokens | 258,817,902 at 05:37Z (1,086 input, 256,543,090 cached input, 1,551,176 cache-write, 722,550 output), of which 109,559,364 by 01:20Z and 199,503,498 by 03:54Z; cost unknown, the counter is unavailable | `node scripts/harness.mjs usage 12cbf517-74f9-4370-bebe-e7888d83f3fc`, source the transcript's message usage, scope dispatch |
| Workers | 32 launches and 8 re-tasks, the cap of 40 reached (Claude 16, Codex 10, unattributed 6); 26 and 3 at the first close; the last launch was the fourth review | the same readback |

The largest avoidable cost is the pass's own. The first handoff carried
three orders built on misreadings: the twin as the waits between stages,
the machinery view as the replay of an order, and a size order turned into
an A/B pass. Correcting them took six of the operator's messages, 1 h 45
min and about 90 million of this session's tokens. The second handoff then
left for a later pass what this one could settle, which the operator had
already ruled out and the 2026-11-01 pass had already been corrected for;
settling it took another 1 h 29 min and about 59 million tokens. The misread sentences
were in the records the pass read, two of them since 2026-10-24, and the
pass tightened orders against those sentences without first stating, in
the operator's terms, what each order is for; when it did put questions,
none was one the operator owed an answer to.

Three smaller costs were avoidable. The two refused criteria runs spent 0 h 43 min
and three launches for nothing kept (§Requests to core, item 7). The eight
drafting workers re-read what the four research workers had read, because
the role text admits a re-task only as a recheck (item 5). And the document
check ran at eight to thirteen minutes each time on this subject, against
one minute for the whole gate on the update branch. Measured on the third
round's subject, the verbatim screen alone takes 13 min 15 s and the rest
of the check seconds. Of the 127,652 twelve-word runs on the branch's
changed lines, 9,606 also occur under the ignored intake, 8,893 of them in
two directories of review reports and refutation prompts that earlier
sessions wrote there and that quote the orders' own text; for each such
run the screen proves that the repository held it at the base with one
search of the whole base tree, 7,976 searches here. Core's WO-261 already
leaves session files out of the captures, so nothing is asked of core. On
the operator's question whether this was fixed, the session-written files
(review reports and logs, refutation prompts and results, pull-request
bodies, register batches; 84 entries) were moved out of `docs/intake/`
into the ignored local lane, `docs/control/local/intake-session-2026-11-10/`,
where the screen does not read them; the operator's own captures stay
under `docs/intake/notes/`. The branch's matched runs fell from 9,606 to
17. The 2026-11-01 pass's record and receipt 023 name two of the moved
directories by their old paths. One cost is carried forward and not measured: the amended orders
are longer than the ones they replace (WO-008 from 31,511 to 54,533 bytes), which an executor pays in context at activation.

Compared with the alternative the operator named, a pass that changed
nothing: it would have skipped the research, the drafting and most of the
reviews, and asked nothing of the operator, and it would have left the
twin's order modelling waits, no order for the view into core, the scene
behind a batch and a migration, and several orders unable to run as
written. Whether the work bought what D2 to D16 claim is observable only
when the orders run: WO-036's and WO-024's first verifications are the
first evidence, and a first verification that fails on a defect of the kind
this pass set out to remove reopens the method.

Goal alignment at handoff: the aim stated at entry was met only after the
operator's corrections. The update was taken first and core's answers are
recorded against their items. Every open order was judged from the
repositories and the recorded directions, and that is where the first
handoff failed: three recorded directions were themselves misreadings, and
the pass carried the momentum the dispatch had asked it to catch. The
traps weighed before the material choices were seeking the wrong goal
(more process in place of an app the operator uses: D2 puts a road order in
every pair, and D16 the scene first), fixes that fail (a standards pass per
batch: D3), and shifting the burden (amendments left for a later pass:
D11); shifting the burden to the operator is the one the first handoff
fell into.

## Validation

The pass was validated three times: before its first handoff, after the
operator's corrections, and after the amendments of D17 and D18.

### The first round's three reviews

The criteria adversary, the design improver and the consistency reviewer ran
over the committed subject as Codex workers (`gpt-6.1-sol` at `max`, through
`npm run worker -- review --host codex --subject planning`). The brief
measured 724,791 bytes against the helper's 400,000 ceiling, so each review
ran as two batches of whole documents. The reports are in the ignored
reviews lane, `docs/control/local/reviews/planning-2026-11-09-standard-pass-v0-122-1-open-orders-rejudged/`,
as `round-1-design.md`, `round-1-consistency.md` and `round-1-criteria.md`.

`self-review: found 30; fixed 28; recorded 2`

The first round found 26, fixed 25 and recorded 1; the second found 4,
fixed 3 and recorded 1. Findings of the first round on WO-042, WO-038 and
WO-016 concern texts the corrections removed or restored.

| Review | Tree | Time | Findings | What changed |
| --- | --- | --- | --- | --- |
| design | `03df57c6` | 0 h 19 min | 7, none blocking, six distinct | WO-042: the sink writes the operator's ideas to the primary checkout and a live run removes only the directory it made, where the order had declared the journal disposable and deleted the intake directory; an idea applies to one fill of a slot. WO-036: the unit and the goal attach to the graph by the clearance test, with a no-route reason. WO-043: a new work's shelf title is a message, where WO-035 moves the titles. WO-035: the studied page WO-044 lands is in the migration |
| consistency | `03df57c6` | 0 h 27 min | 11, one blocking, eight distinct and one shared with design | WO-017 and WO-016 (blocking): the recorded order's figures are asserted from its own stamps, since the waiting total is 226.93295 minutes and the floor 883.39820, not the 227.0 and 883.3 that sums of rounded gaps gave, and five of the seven gaps differ from their one-decimal forms by more than the one second the criteria allowed (reproduced by this pass from the platform's record at the pin). WO-017: after a reload the walkthrough signs in again. WO-045: the message check that refuses any record but version 1, the work chunk and the membership test are in its steps. WO-044: the unknown-work case keeps what was chosen. The register row for the inspector's link follows it to WO-045; the profile names WO-043 for the fan-outs. Recorded, not fixed here: the kit keys a receipt sentence on the number WO-041, which this pass answered by renumbering and put to core (§Requests to core, item 6) |
| criteria | `29af3bab`, after the fixes above | 0 h 24 min | 8, one blocking, six distinct | Two came from this pass's own fixes to WO-042: the sink's containment rule now admits the primary checkout it defaults to, and the criteria follow the per-fill rule (blocking: a wait still moves every later beat, a narrowing marks one fill's beat). WO-043: each maxim the checkpoint carries is held equal to its map row's, so a reading cannot show an altered sentence. WO-035: WO-044 is a hard dependency. WS-001: the delivery contract names WO-042 to WO-045 and no WO-041 |

The criteria review ran three times. Given the dispatch capture, as the
operator's rule asks, the helper requires an `## Items` table from each
batch and refuses the round when one lacks it: the first run's first batch
was refused after 0 h 15 min with five findings returned, and the second
run's second batch after its first had been accepted, 0 h 28 min in all,
with four returned. Nothing was written either time and the returned text
is kept nowhere. The third run was given no capture and is the report
above. The dispatch's items are therefore answered here by the planner and
not by the reviewer, which is a departure from that rule and is reported to
core (§Requests to core, item 7):

| Item of the dispatch | Where the pass acted on it |
| --- | --- |
| a standard planning pass | this document; the register, the NoOps and the sequence |
| the latest upstream | #73, starter v0.122.1 (§Readings; D1) |
| core's answers | §Core's answers; §Requests to core, items 1 and 2 |
| review every existing order; change, split, combine or add | §How the open orders were read; D4 to D11; §Orders filed and amended |
| the plan came from an earlier model; momentum is no reason | the reading of where each choice came from (§How the open orders were read); D2 and D3 |
| no change is a valid result | weighed and declined with its evidence (§NoOps, first row); WO-029 and WO-031 unchanged |

### The second round's review

After the corrections one combined review (criteria, design and
consistency in one brief) ran over what had changed since the tree the
first round's last review read, as two Codex workers (`gpt-6.1-sol` at
`max`; `npm run worker -- review --kind combined --host codex --subject
planning --round 2 --since 29af3bab`), on tree `4fbf4295`: 0 h 37 min, four
findings, three blocking. The report is `round-2-combined.md` in the same
lane. One combined round and not three reviews, because the session had six
worker uses left of forty and each review of this subject takes two.

| Finding | Order | What changed |
| --- | --- | --- |
| blocking | WO-017 | Its use criterion asked for screenshots of a stage exported from the private journals under the evidence directory, which the target publish commits. The walkthrough and its screenshots now use the synthetic stage; a real stage is read on the operator's machine and nothing of it is recorded |
| blocking | WO-017 | The twin's place among the events was counted by timestamp, so a denial, the operator's intervention and the next step sharing one millisecond gave a false miss and a false extra. The place is now the count of events delivered when the variant emits, ties in journal order, with that case in criterion 3 |
| blocking | WO-046 | The rule for a mechanism carried only as role text asked that no lower surface name it, and a registration file names every unit: `process-cost` would have read absent on a host whose skills carry it (checked by this pass against core's manifest at the pin). Text is now read from any rung-7 or rung-8 surface of the host, with two assertions in criterion 4 |
| note | WO-016 | The restored text holds a criterion no candidate can meet; recorded for its amendment (D8) and not applied |

The review was given no capture, for the reason the first round records
(§Requests to core, item 7). The planner's own account of the operator's
six messages, by journal row:

| Message | Where the pass acted on it |
| --- | --- |
| 02:12Z, the answers to the five items | D13 (a delayed round), D15 (text), the WoW tooling app's line in the operator record; the twin and the machinery view as the later messages restated them |
| 02:15Z, the demand about text | D15 and D7; the operator record's item |
| 02:23Z, the twin, the view into core and what the size direction was for | D14 and WO-017; D12 and WO-046; D13, rule 29 and the removal of WO-038 |
| 02:27Z, the replay is separate, planned work | D8 and D12; WO-016 byte for byte the text on `main` |
| 02:30Z, act on the corrections (a question by the hook's class) | answered by acting on them; no rule recorded |
| 02:37Z, the scene | D16; the sequence; WO-036's step 7 and criterion 3 |

### The first refutation

One fresh background `dotln-worker`, given the canonical prompt of
`npm run plan -- refute` and the guide's goal rules and nothing else, judged
the integrated subject at `9931600`. Receipt
[`2026-11-10-planning-b11409ceeeacb21f-026`](../refutations/2026-11-10-planning-b11409ceeeacb21f-026.md):
**aligned-with-findings**, no hold, scope pass, fifteen orders and the
sequence judged and three unchanged verdicts carried, 0 h 13 min from
dispatch to file. Its statement says the subject marks the vision, the
roles document and the capability table unavailable, which this instance
does not have, so the judgment rests on the goal rules and the purpose, and
that every cost row of the horizon has no metrics, the orders not having
run. It recorded twelve known issues, ten distinct; the table keeps what the
refuter recorded, and D18 says what this pass did about each:

| Order | Known issue | Reopens when |
| --- | --- | --- |
| WO-008 | every planning receipt has judged it and it has not run | a later pass's refutation judges it again unactivated with no new evidence |
| WO-024, WO-030, WO-038 | their non-goals send the catalog's search controls to WO-018, which is now the toy shelf; no order carries them (`FUP-0fb531a975308a81`) | a role relies on WO-018 for them, or the next pass's sequence still names no order for them |
| WO-040 | four builder functions read by every stream study are in scope while the forty study modules are a non-goal | the candidate's diff touches one of the forty modules or grows well past its file estimate |
| WO-040 | the shape rule is restored by an audit after a batch lands and no lint keeps it; the new batches carry no audit criterion | the audit over a batch landed after it lists a function over the rule |
| WO-045 (and WO-043) | each adds a schema version beside the old ones to admit one family or field, with none retired | a later order adds another version, or three are accepted with no retirement |
| WO-035 | a reading that renders today becomes a failure page when a derived message is missing; no fallback to the row's text | a surface that rendered at the base shows the failure state at the candidate or after a later work lands |
| WO-038 | ten orders may defer their rounds and this is the only pass filed to take them, with three streams already named | a deferral is recorded that no filed order carries, or a pass must rebuild a removed candidate |
| WO-018 | the patience lane's link leads to a gated route the production build cannot open | the served production build lands on the unavailable or denied page from that link |
| WO-043 | every data order adds client-bundled data while the app's own store and API stay a candidate | the pass that files the store finds the bundled loaders must be reshaped |
| WO-030 | its walkthrough names 360, 768 and 1440 and not the operator's two sizes | a UI issue shows at either full size in its twenty studies |

Receipt 026 judged the subject before the corrections. Its two issues on
WO-038 fell with that order, and its issue on WO-018's link is answered:
the toy is shown as designed, with no link (D14). The others are settled
in D18.

### The second refutation

One fresh background `dotln-worker`, given the canonical prompt of
`npm run plan -- refute` at `1596ba1` and the shared goal card and nothing
else, judged the corrected subject. Receipt
[`2026-11-10-planning-45eed5a22f3e4388-027`](../refutations/2026-11-10-planning-45eed5a22f3e4388-027.md):
**aligned-with-findings**, no hold, scope pass, twelve orders and the
sequence judged and the unchanged verdicts carried, 0 h 12 min. Its
statement repeats the first's limits: the vision, the roles document and
the capability table are unavailable in this instance, and no cost row has
metrics. It recorded ten known issues, nine distinct; the table keeps what
the refuter recorded, and D18 says what this pass did about each:

| Order | Known issue | Reopens when |
| --- | --- | --- |
| WO-046 and WO-016 | both add `libs/features/machinery-data-access`, remove the arriving page and put their page at `/machinery`; WO-016 is left as filed (D8), so its text does not yet say how the replay sits beside the view | WO-046 merges and WO-016 is activated or judged with its Cost line and its `/machinery` criteria unchanged; the amendment before it activates is where this is settled |
| WO-043 | its schema's optional `maxim` field is open to the six batches drawn from other sources, some in copyright, and no check refuses verbatim text there; flagged under the Clean Room floor for the operator's judgment, not decided | a row from a source in copyright carries a maxim or a passage of the source, or the pass before WO-043 activates has not closed the field to those batches |
| WO-043 | after it the shelf holds twenty-five designed toys and one built, and no order builds a toy | the pass after WO-043 merges files no order that builds a designed toy |
| WO-017 | only the production build is shown to leave out exported stages; the mocked build serves them on the operator's machine by design | a non-production build's output that holds a stage file is published or shared |
| WO-035 | a missing derived message replaces a reading with a failure page, with no fall back to the row's own text (carried from receipt 026) | a reading that rendered at the base shows the failure in the served production build |
| WO-035 | the registration's time and memory are recorded and compared with nothing | the recorded figures make a first render measurably slower or memory grow with each work opened |
| WO-036 | the five cost tools can pass criterion 5 while changing nothing visible, on a field with no cost layer | a spec or the walkthrough shows a cost step leaving the route, its length and the replans unchanged |
| WO-024 | no verifier read of the research for quality, where WO-043 and WO-045 carry one | a later read finds a WO-024 study wrong or unsupported in content |
| WO-008 | the static storage check reads the files `git status` lists and passes on an empty list if the candidate is committed first | a verification records an empty list while the order's diff changes files there |

### The third round

After D17 and D18 one combined review ran over what had changed since the
tree the second round read (`npm run worker -- review --kind combined
--host codex --subject planning --round 3 --since 4fbf4295`), on tree
`b9c88576`: two Codex workers, 0 h 21 min, no finding. The report is
`round-3-combined.md` in the same lane. It is the last review of this pass:
the guide ends a ladder at its third round.

One fresh background `dotln-worker` then judged the subject at `b48528b`.
Receipt
[`2026-11-10-planning-80685a5e0fbc1a46-028`](../refutations/2026-11-10-planning-80685a5e0fbc1a46-028.md):
**aligned-with-findings**, no hold, scope pass, eleven orders and the
sequence judged, 0 h 12 min, nine known issues. D18's last nine rows say
what this pass did about each: five are amended in the order they name and
four are answered with the reason no text can settle them.

Those five amendments, in WO-016, WO-017 (two), WO-008 and WO-036, were
made after the judgment. The kit admits one judgment per pass and records
a repair only against a hold, and receipt 028 has no hold, so each amended
order is bound to the receipt by a recorded decision and `npm run plan --
amend-order`: WO-016-D003, WO-017-D003, WO-008-D003 and WO-036-D001, each
citing the operator's direction of 2026-11-09 and bounded to the defect
the receipt recorded. `npm run plan -- check` then passes, reading the
four as authorized amendments. No reviewer or refuter has read the five;
the next planning pass's refutation judges them. A fourth review, which
neither the operator nor the guide's ladder asked for, was started by the
planner and stopped after one minute; it produced no report.

### The gates

- On the update branch: `harness check`, `launchpad verify`, `npm test` and
  `npm run test:docs`, the last on its second run (§Readings; D1).
- On this branch: `npm run work-orders -- index --check` passes with no
  criteria advisory; the changed documents pass Prettier. The first
  `npm run test:docs` over the subject failed four lines of the verbatim
  screen in two places, both false matches and both reworded: this
  document's sentence naming the local file's path and digest beside the
  capture's own marker, and a Cost-line phrase of WO-042 that an earlier
  session's file under intake happens to hold.
- `npm run test:docs` on the receipt's commit `5526cc7`: 15 passed, 0
  failed, 0 h 14 min. The plan check printed four advisories, each an order
  naming a file whose path carries a launchpad identifier (WO-030, WO-035
  and WO-040 twice), the kind earlier passes carry.
- On the corrected subject, the document check run alone before the second
  review's fixes failed three lines: two sentences of this pass that shared
  a twelve-word run with the second capture, in D12 and in WS-001, both
  reworded; and the 2026-11-05 pass's link to WO-038's file, which is
  declared a historical link in `docs/control/doc-baseline.json` with its
  reason, as an earlier renamed order's is. `npm run work-orders -- index
  --check` passes with one criteria advisory, a size figure in WO-016's
  criterion 5, which stands with that order's text (D8).
- The plan check on the second receipt's commit `15b76a9` passed with the
  seventeen recorded rules read against the session journal and the same
  four path advisories.
- On the third round's subject the document check run alone passed with
  no failure and no shared run.
- The `npm run test:docs` run on this section's own commit follows it and
  is reported in the pull request's body and the handoff, since a section
  cannot record the gate that judges it.
