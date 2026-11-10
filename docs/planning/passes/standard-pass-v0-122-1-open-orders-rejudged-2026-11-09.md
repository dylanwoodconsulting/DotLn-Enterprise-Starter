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

Four orders are filed and twelve amended; WO-029 and WO-031 were read and
are unchanged. Each amended order carries one sentence naming this pass and
its decision. Eight drafting workers (`dotln-worker`) wrote the proposed
texts into the session's scratchpad from the planner's decisions, each
verifying its order against the target at `eb9d227`; the planner read each
draft or its diff, corrected it where a decision had moved, and is the only
writer of this repository.

| Order | Change | Decision |
| --- | --- | --- |
| WO-008 authentication and permissions | amended and made executable at `eb9d227`; first road order | D2, D4 |
| WO-016 the machinery view | narrowed to the records library and the page of beats, slots and agent cards; the replay clock leaves | D8 |
| WO-017 the twin's patience lane | amended: takes the replay library, two variants, the floor and the stated limit of its figures, no check that reads a base commit | D8 |
| WO-018 the toy shelf | narrowed to the shelf of the run's nineteen toys | D9 |
| WO-024 concept studies V | amended: the `relations` family builder-first, the wiring a new work needs, a control on one criterion; pairs with WO-008 | D5 |
| WO-030 research, messaging | amended: the wording rule for a flow state in the authors' brief | D5 |
| WO-032 research, levels and teams | amended: base, and no standards pass before it | D5 |
| WO-035 every string through the message system | amended: the mechanism, the field list, one title resolver, the fail-closed path | D7 |
| WO-036 walls and ways | narrowed to scene navigation | D6 |
| WO-037 shooting and bullets | amended: what a knockout does to a formation; older trials stay readable | D6 |
| WO-038 A/B testing pass I | retitled and widened to the delayed rounds; its checks repaired | D7 |
| WO-040 standards pass III | amended: the measured scope, the stream part narrowed to four builder functions and nineteen messages; pairs with WO-036 | D5 |
| WO-045 the grid family and the A* study | filed, from WO-036 | D6 |
| WO-042 the machinery view's ideas and the idea sink | filed, from WO-016 | D8 |
| WO-043 the Art of War map pass | filed, from WO-018 | D9 |
| WO-044 find the studies | filed | D10 |

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

### D2. A road order leads every pair; authentication runs first

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
work in the second (§Sequence). WO-008 leads: it is the last member of the
purpose's critical path, the workstream's outcome names legitimate
client-side security, and nothing has blocked it since 2026-10-24. The
scene and the machinery view then take turns, so neither sub-app waits
behind the other's whole line. The fifth batch keeps its place at the front,
in the side lane, as the operator directed. Rejected: leaving the sequence
as it stood (it keeps the direction's letter and loses its sense, side work
between road orders); WO-016 first (the founding picture, but it is split
by D8 and its second half needs the design D8 gives it, while WO-008 is
ready); the scene first (the freshest ask, but the critical path's last
member has waited longest and gates the twin). NoOp cost: none; a sequence
is a reading and grants no activation. Two earlier refuters had recorded
WO-008's place as a known issue against the purpose's critical path,
receipt 012 on 2026-10-28 and receipt 015 on 2026-10-30, and each pass
carried it. Reopen: the operator moves an entry by a word.

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
  criterion names the first pair across the three pages and admits the
  delay to the A/B testing pass; the walkthrough reads the two full sizes;
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
gets a control; and its round criterion admits the delay to the A/B testing
pass. It pairs with WO-008.

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
description object repairs. It pairs with WO-036. WO-030's authors are
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
WO-040 beside it. Geometry travels as steps, which the stored scene's step
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
subject holds that number (§Requests to core, item 7).

WO-037 stays whole behind WO-036. Its knockout step expected the formation
to reassign, which the engine's formation module does not do; the order now
says what the engine gains (a knockout re-lays and reassigns, and a downed
fixed leader hands the lead to the next slot). Rejected: keeping WO-036
whole (one review, at the cost of an order larger than any this workspace
has closed and of a pair that would share files with WO-040). Reopen: the
operator wants one review of the scene's navigation and its study.

### D7. The mined text goes through the translator from the rows; the full-size order becomes the first A/B testing pass

WO-035's rule stands as the operator gave it. Its mechanism changes. As
filed it generated and committed one English message catalog per work from
the mined rows, a second copy of 1.48 MB of English (the rows' on-screen
fields, measured over the catalog data files), shipped twice and guarded by
a check that fails on every data edit, on the premise that each work's
catalog loads lazily; the catalog page loads every work when it opens. The
order now derives each work's messages from its loaded rows and the
features register them with the translator under one scope per work, every
screen renders through the translator, and a second language is one file
per work. The field list is corrected against the templates (hook clauses,
the reasons shown for untyped rows, the labels the mappers build, the work
titles and the last-read title were missing; a field no template renders
was on it), the studies' duplicate `titles` maps leave, and the fail-closed
path sits where the facades translate. The consequential assumption: the
rule is met when the text reaches the screen through the message system,
with the data files as the one home of the English. Rejected: the committed
generated catalogs. Reopen: the operator says the mined text must live in
translation files.

WO-038 was a paired-comparison session with a small code change. It becomes
the first dedicated A/B testing pass, the pass rule 25 describes for rounds
the operator delays: one attended sitting that chooses the reading at the
operator's full size, the `states` family's representation (the rounds the
operator delayed on 2026-11-07, WO-023-D008) and the narrow register's
headings (WO-039-D011 and D015). The two register rows that held those
rounds are allocated to it (§Register). Its broken checks are repaired: the
width check aims at the `68ch` measure and the grid tracks instead of
every `max-width`, the visual suite is named by its own project, the
criterion that preset the layout the rounds choose is gone, and a label
defect fails the order only at the operator's two sizes. Rejected: a
separate A/B order beside WO-038 (two attended sittings and two cycles for
rounds one sitting can run). Reopen: the operator wants the delayed rounds
apart from the reading's.

### D8. The machinery view is split, and it and the twin say what the record cannot show

WO-016 held three outcomes, about seventy-five files with three new
libraries, a Node process and two scripts, and its base was the empty
scaffold. It is split. WO-016 keeps the machinery types, the `records`
library over scrubbed six-field copies of the platform's WO-221 and WO-226
records, and `/machinery` showing one recorded order's beats, the agent
that filled each role slot, the hand-back cards and an agent's card. The
copies are production data in the library, since production excludes the
mock and its fixtures; the platform commit the figures were derived at is
pinned and the derivation reproduced row by row, with the local clone and
GitHub as its sources. WO-042 is filed for the operator's ideas: the shelf,
select-then-apply on an agent, the before as a ghost, a refused drop, and
the local sink, whose settings are command-line flags and which answers the
browser's preflight, without which no idea would have arrived. The replay
clock moves to WO-017, its only consumer.

Reading the platform's rows for WO-042 and WO-017 found one limit under
both. None of the twenty-two fields of WO-221's sixteen rows names a
mechanism, a rung, or what a wait bought. So of the eight kinds of idea, one moves the recorded
beats (an added wait), one marks the beats where a removed input existed,
and six change the agent's card alone; WO-042 says so in a table, kind by
kind, and its captions say when the beats are unchanged. And the twin's
replay replays every duration and verdict as recorded, so each figure
improves as the twin's waits shrink and a variant with no patience closes
at the floor: WO-017 now shows that floor, 883.4 minutes, and states that
its figures price a patience policy for this order and cannot tell a
faithful twin from a trivial one. Its three variants were two in this
replay (a debounce and an audit of a single hand-back are both a fixed
delay), so it carries a patience table and a periodic check-in. The
deferred fourth result stays deferred with that reason (§Register).

The limit is the record's, and it is the app telling the platform
something: the request to core carries it (§Requests to core, item 3).
Both orders stay in the sequence because each still lands what its page
can honestly show, the agents in their slots and the cost of a wait.
Rejected: holding WO-042 and WO-017 until a richer record exists (the
machinery page and the lane are how the operator would see what the record
lacks); simulating a mechanism's effect (a non-goal of both orders since
2026-10-24: presentation only, nothing written). Reopen: the operator
names what an early dispatch costs them or what a mechanism change should
show, or the platform's records carry it.

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
text without a link. Its edge on WO-017 was a link to a route and is now by
reference. WO-043 is filed for the mining: The Art of War from its
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
and it runs in the side lane beside WO-037, ahead of WO-035, which then
takes those screens as it finds them. The deferred row on explicit search
controls (`FUP-0fb531a975308a81`) is read and left: the order changes no
search control. Rejected: more batches first (they add studies to a list
nobody can see). Reopen: none; the order is the response.

### D11. Every open order names a real tree and is amended when it is read, not when it is next

Four orders named the scaffold commit `bc9133e`, an empty tree, as their
base, on the rule that the pass before each activates sets it; WO-035 to
WO-038 sat four merges behind and WO-032 five. Every open order now names
`eb9d227`. The
target publish still describes a change from the merge base, so a base that
ages is harmless, and an empty one is not: a criterion that compared with
the base compared with nothing.

The same rule had the road orders' amendments wait for the pass before
WO-016 activates, and the register carried them as a deferred row from
2026-10-30 while the order they waited on moved back. This pass made them
(D4, D8, D9); the row is settled (§Register). Rejected: keeping the
amendments for the pass before each order activates (the saving is one
re-read if the workspace moves; the cost was orders that could not have run
on the day the operator chose them). Reopen: an amended order goes stale
again before it activates, which the pass before it then repairs as an
ordinary amendment.

## Register

The register was synced before the dispositions (no public source had
changed its rows) and two batches applied, nine rows at revision
`a86f0111…` and, after the reviews, two more, leaving it at `f4a9f920…`;
the batches are kept in the ignored local lane as
`docs/control/local/planning/followups-apply-2026-11-09.json` and
`followups-apply-2026-11-09-b.json`. Thirty-seven rows stay pending, all
deferred.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| `FUP-2ed0c79e62b53dd7` (the amendments owed to the four road orders since 2026-10-30) | **settled** — every open order names `eb9d227` and the four were re-read and amended (D4, D8, D9, D11). Receipt 012's known issues that still apply are written into WO-016, WO-017 and WO-043, receipt 014's item (d) into WO-008 and (f) into WO-017; the others are answered by the amendments or by D2 | an amended road order is found stale before it activates |
| `FUP-35187266d29e00dc` (WO-026-D012, the documents that describe the `/machinery` placeholder) | **allocated** to WO-016, whose documents step carries them | WO-016's final review finds one still describing the placeholder |
| `FUP-02c1ebe8146fe2f1` (WO-023-D008, the `states` family's delayed rounds) | **allocated** to WO-038, stream (b) | the operator wants those rounds apart from the reading's |
| `FUP-5af094bffcaf27ef` (WO-039-D011, the narrow register's headings) | **allocated** to WO-038, stream (c) | stream (b)'s pick removes the register table |
| `FUP-4e24208e45d27a1d` (WO-034-D013, the wall study's two gaps) | **allocated** to WO-045, moved from WO-036, which the split leaves no file under the Tools feature | WO-045's verification finds the moments out of order or the traces unreadable |
| `FUP-592e538095eaead9` (a link from the scene's inspector to a tool's study) | **allocated** to WO-045, moved from WO-036 with the link (the consistency review's finding) | WO-045's verification finds a rail tool with a study and no link |
| `FUP-4ddf0151d707734a` (the twin's fourth result) | **deferred**, with its reason replaced: the copies carry nothing that says what a wait bought, so no figure a zero-patience variant pays can be derived (D8) | the operator names what an early dispatch costs, or a record carries it |
| `FUP-400988852956edcf` (the mining store and the app's API) | **deferred** — its condition, the copies limiting a toy, was met in planning, and a store over the same records would not lift the limit; the ask goes to core (D8) | the platform's records carry the mechanisms a session ran with, or the operator names the next public source after WO-043 |
| `FUP-0fb531a975308a81` (explicit catalog search controls) | **deferred** — read against WO-044, which changes no search control (D10) | WO-044 has merged and a search still cannot be narrowed without typing |
| `FUP-3372acd8d62e8cc7` (a lane pair of WO-014 and WO-016) | **declined** — moot since WO-014 closed on 2026-10-26; WO-016 pairs with WO-045 | none |

Rows read and left as they stand: `FUP-11889720fb205fb0` and
`FUP-b730246e24e0c264` (the enterprise batch's residue, measured and
waiting for the pass filed after WO-031's batch lands, D3 and the NoOp on a
`states` builder); `FUP-1f5953e14b1077b4` and `FUP-70df0fbdafe8c2d6` (the
work view and the arrival screen, the first pages of a UI to live in, both
behind the machinery view, which now sits fifth in the sequence instead of
seventh); `FUP-dfb896b07eb669e5` and `FUP-cc72e6b1…` (the shell's and the
board's look and loading shift: WO-016's text does not carry them and no
order does; they stay candidates until the operator asks or WO-016's rounds
reach the shell); `FUP-48b1009d…` (the board under the machinery routes,
after WO-016); `FUP-29ad2938…` (the twin's later lanes); `FUP-49579a76…`
(the run's remaining toys, after the shelf); and the kit and close rows of
the earlier passes, whose conditions did not occur in a window with no
order run.

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
| Leaving the sequence and the orders as they stood | The operator named no change as a valid result, and the evidence does not support it: no road order since 2026-10-30, four orders on an empty base, three orders holding several outcomes, and criteria or steps that could not run as written in WO-008, WO-018, WO-035 and WO-038 (§Readings; D2 to D11) | not applicable; the changes are this pass | — |
| An order for a UI to live in (the work view, the arrival screen) | The operator's decisions of 2026-10-24 keep the app unwired from core, and both pages are candidates behind the machinery view (`FUP-1f5953e14b1077b4`, `FUP-70df0fbdafe8c2d6`). Evidence: WS-001 §The app and its sub-apps; the operator record's item | WO-016 merges, or the operator asks | The operator works from the app instead of the terminal |
| The WoW tooling app | A later member since 2026-10-18 whose candidate condition, WO-006 merged, occurred on 2026-10-21 and was carried forward unchanged; four sub-app orders are unbuilt ahead of it and the operator has not named it since | the operator names it, or the toy shelf has landed | A side utility joins the menu |
| Typed translation keys | Rule 9 calls them a later member; WO-035 changes the key space they would be generated from. Evidence: WO-035's Design | WO-035 merges | A mistyped key fails at build time |
| A shared builder for the `motion` family | It would rewrite forty modules for a family with no further batch filed, and the functions over the rule there are per-frame helpers a description object repairs (D5). Evidence: the parser's histogram; `flee.presentation.ts` | another movement batch is cut | A movement batch lands as data |
| A builder-first rebuild of the `states` family ahead of WO-031 | WO-039 moved the transition inference into `statesModel` on 2026-11-08; what remains in a `states` presentation (356 lines on average) was not measured for what a builder could own. WO-031's batch therefore lands hand-written and the pass after it measures the residue (D3; `FUP-11889720fb205fb0`) | WO-031's batch lands, or the pass before it activates measures a presentation's liftable share | A `states` batch lands as data |
| A standards pass over WO-036's code ahead of WO-037 | Rule 31 as restated asks for a pass where residue is measured, and no code has landed to measure (D3) | WO-036 merges | The scene's engine reads as the example |
| A separate A/B testing order beside WO-038 | One attended sitting can run the three streams (D7) | the operator wants the delayed rounds apart | Each delayed round has a sitting |
| Electing `features.verbatim-operator-words` | It would admit the operator's words into committed text to silence a match on a path (D1) | the operator asks for the election | — |
| Recording today's dispatch as a standing rule | The operator asked this pass to re-judge the plan; the dispatch gave no standing rule, and the record takes a rule only in the scope and words given | the operator states it as standing | — |
| Rewriting the purpose | Its critical-path sentence is what D2 acts on and still describes the workstream | a sub-app is dropped or added | — |
| Refilling the research track | Four research orders are queued (WO-029 to WO-032) and the queue is refilled when fewer than two are (WS-002 rule 6) | two of the four close | The Codex capacity has a next order waiting |
| Filing an issue on the platform's repository for the records' limit | An outward effect this dispatch does not name; the paste is the fork's route until core's WO-193 (the operator record, Requests to core) | the operator asks for the issue | The platform tracks the ask as an issue |
| Updating the README's release block | No launchpad order is queued; `v0.3.5` is published | a launchpad order activates | — |

## Sequence

The sequence runs in pairs, a road order first and side work beside it
(D2): WO-008 with WO-024; WO-036 with WO-040; WO-016 with WO-045; WO-037
with WO-044; WO-042 with WO-035; then WO-038, WO-017, WO-018 and WO-043 one
at a time. No pair holds an edge between its members, every hard edge runs
forward, and the second publisher of a pair integrates the target's `main`.
WS-002's members stay a separate track with no sequence entry: WO-029,
WO-030 and WO-031 are runnable now on Codex and WO-032 after WO-024.

What the operator sees after each order lands:

| Order | On screen |
| --- | --- |
| WO-008 | a sign-in through the mocked provider; an account page that says in prose who is signed in and what they may do; a denied page that names the missing permission; a session that refreshes once and ends cleanly |
| WO-024 | twenty more studies under Tools, ten from Gödel, Escher, Bach and ten from Team Topologies, drawn by the `relations` family |
| WO-036 | walls and obstacles they draw on the field; a squad routing around them and replanning; a no-route state they can read; head-on pairs parting |
| WO-040 | nothing new but nineteen flow state sentences that read as English |
| WO-016 | at `/machinery`, one recorded order's beats, the agent in each role slot, the hand-back cards and an agent's card |
| WO-045 | the A* study stepping its search cell by cell, with the heuristic off and on; a link from a rail tool to its study; the two avoidance studies showing what the scene runs |
| WO-037 | units firing at a target, bullets stopped by walls, a moving target led and hit, a knockout that re-lays the formation |
| WO-044 | every studied concept on one page by work and chapter; each work a link on the Tools home; studied counts in the contents; a mark on a nearby link that leads to another study |
| WO-042 | their own ideas on a shelf; an idea applied to an agent, with the before as a ghost and the beats marked where the record supports it |
| WO-035 | nothing changed; every string of the catalog arriving through the message system, a missing one a visible failure |
| WO-038 | the reading and its drawing using their full screen as they chose; the `states` drawing and the narrow headings as they picked |
| WO-017 | at `/twin`, patience variants replayed over WO-221, each read by what it would have cost beside the record and the floor |
| WO-018 | nineteen toys read in full on a shelf under Tools, their tools followed into the catalog |
| WO-043 | The Art of War on the catalog's shelf with its maxims; six new toys on the toy shelf |
| each research order | twenty more studied concepts in its work's landed family |

## Write-backs

- `docs/planning/sequence.md` (D2).
- WS-001: rule 31 (D3); the dependency plan, now the road and the side lane
  with the open members' typed edges; the member table's bases and roles
  and the four new rows; the delivery contract's member range; the
  lies-ahead table in the sequence's order; the delivery states and the
  workstream block's members and open-order edges, generated from the
  orders' own dependency blocks.
- WS-002: rule 6's gate (D3); WO-032's row and the dependency sentence.
- The twelve amended orders and the four filed (§Orders filed and amended).
- The follow-up register (§Register); the generated work-order index and
  decision index; the idea ledger's registration heading and the lineage
  index; the cost table.
- The operator record is unchanged: no direction of today's is standing
  (§Rules recorded), and the record's item on standards passes already
  reads as the direction was given. The repository profile is unchanged:
  the target has not moved, except that its §Run content workers names
  WO-043 where it named WO-018 for the two fan-outs (D9).
- Owed in the target, carried by orders: `catalog-rules.md`'s sentence on
  standards passes (WO-040's step); the documents that describe the
  `/machinery` placeholder (WO-016's step).

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[]
```

<!-- dotln-rules-recorded:end -->

No operator direction entered a standing document this pass. The dispatch
asked for the pass, the update and the review of the orders and gave no
standing rule; rule 31 and WS-002 rule 6 were narrowed to the direction the
record already holds, and what they add is written as planning judgment.
The block stays as `plan start` wrote it.

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.122.1

From DotLn-Enterprise-Starter's planning pass of 2026-11-09, docs/planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md. These are the fork's findings, not new operator direction. Your answers of 2026-11-08 to the fork's two blocks were pasted into this dispatch and are read against the records in that document; nothing in them is disputed.

1. Ask, on WO-259's verbatim screen: a document path is enough to fail it. On the update branch for v0.122.1 the first test:docs run failed three lines, docs/product/07-execution-guide.md lines 2192 and 3509 and UPSTREAM.md line 195, each a link to your planning document of 2026-11-08. That path tokenizes to fourteen words against a window of twelve, your pasted answer block named the same path, the block stood inside the dispatch capture, and the run was new at the base, so the base exemption did not apply. Nothing of the operator's was copied. The fork moved the pasted block to docs/control/local/planning/ and kept the operator's own words in the capture, and the second run passed. This will recur whenever an operator pastes a core block that names a document the next release links. Asks: leave the tokens of a path, a URL or a Markdown link target out of a run, or exempt on an update branch the lines whose bytes are the incoming kit's; and have WO-261's capture sentence say what a capture holds when the operator's message itself carries a pasted block.

2. Your item 6, the data you asked for. WO-039's close record reads publication.outcome not-attempted, cleanup.outcome clean, cleanup.branch.outcome deleted and targetCleanup.outcome removed, with dryRun false. npm run release -- list does not name WO-039: the latest launchpad release, v0.3.5, names WO-026, WO-020, WO-021, WO-022, WO-028 and WO-033, and WO-027, WO-034, WO-023 and WO-039 have closed since without a launchpad release. scripts/lib/drive-route.mjs sets the released fact from a release-list match or from a close whose publication.outcome is no-release, and sets merged from the branch's ancestry or from that same no-release close, so a target order whose close records not-attempted has neither and reads awaiting-merge with its branch deleted and its target removed. resume status still prints that for WO-039 today.

3. Observation from the app, for your idea intake: the platform's public records cannot yet answer the machinery view's question. The fork read the sixteen control rows of core's WO-221 at core commit 49d8c4c3 while amending its machinery and twin orders. None of their twenty-two fields names the mechanisms a session ran with (its gems or supports), a rung, or what a wait before a dispatch bought. So the app can show a consequence in the recorded use case for two of eight kinds of mechanism change (an added wait moves beats; narrowed knowledge marks the beats whose input is gone) and can only redraw the agent's card for the other six, and its twin lane can price what a wait costs and not what it buys. A session's attestation naming its active mechanisms, and a dispatch recording what it waited on and why, would make both answerable from the record. Nothing asked beyond routing it.

4. Starter v0.122.1 is taken (#73) on the operator's word in the dispatch. Preview 59 replaced, 4 added, 0 removed, 1 refused, no instance action; the merge clean; harness emit 43 surfaces; harness check, launchpad verify and npm test green and test:docs green on its second run (item 1). The by-hand check your item 2 keeps as this fork's duty until WO-261 found no file outside the manifest changed by both sides. The one refused row is .claude/harness-manifest.json, which this fork emits with its inferred Codex surfaces; launchpad verify reports it as the one kit file differing from the manifest, and the same file will read refused at every update. Observation: a generated surface the instance re-emits could be listed as re-emitted instead of refused.

5. Observation on the dispatch standing: at this session's first usage readback, ten seconds after its dispatch, harness usage printed a planner standing started 2026-11-08T01:25:43Z with 44 h 51 min elapsed and two complete runs, for a session that began on 2026-11-09 at 22:16Z. The bound is unset here, so nothing was refused; a set bound would have read exhausted at entry. The standing seems to carry an earlier planning dispatch of the same host key.

6. Observation on the planner's role text and process cost: the role admits a re-task only to recheck what a worker found. This pass's four research workers each held an order's findings; drafting the amendments from those findings meant eight fresh workers that re-read the same files. Ask: say whether a re-task that writes only to session scratch, with the parent the sole repository writer, is a recheck.

7. Ask: the kit's runtime compares against core's own order numbers, and an instance's orders reach them. scripts/lib/plan-receipts.mjs line 157 writes a sentence about a self-referential instrument into any receipt whose subject holds WO-041; this fork numbered a new order WO-041 today and renumbered it WO-045 before its receipt. scripts/release.mjs lines 1501 and 1578 switch the release-note contract on at a passed final review of WO-024, and this fork's WO-024, a concept-study batch, is open and sequenced next, so its final review will flip the launchpad's release notes out of the legacy form. scripts/resume.mjs line 829 exempts WO-019, scripts/lib/plan-continuation.mjs line 529 names WO-126, packages/skeleton/dist/src/evidence-editions.mjs names WO-011, and scripts/lib/plan-dependency-migration.mjs line 48 names WO-043, guarded there by a criterion's text. Ask: key each on core's repository or on the recorded event it stands for, and say whether the WO-024 switch needs anything of this fork before that order closes.

8. Observation and ask on the criteria review of a planning subject that is split into batches: with --capture, each batch's report must carry the Items table, and a batch that lacks it refuses the whole round with nothing written. Here the brief measured 724,791 bytes against the 400,000 ceiling, two batches. Run one: batch 1 refused after 0 h 15 min with five findings returned. Run two: batch 1 accepted, batch 2 refused after 0 h 11 min with four findings returned, 0 h 28 min in all. Three Codex launches and 0 h 43 min produced no report, and the returned text is kept nowhere (the worker-output directory holds only its owner record). The fork then ran the review without the capture and answered the dispatch's items in its own document, which is not what the operator's rule asks. Asks: keep a refused report's returned text and findings in the reviews lane marked refused; let the Items table be owed once per round, not per batch; and accept a format repair from the same worker, as the refuter's result admits.

9. Observation on the document check's time: on the planning subject (23 changed files against 260 captures) the docs-check task of test:docs, which holds the verbatim screen, ran 0 h 8 min; on the update branch the whole of test:docs had run in 0 h 1 min. Nothing asked beyond noting it for the screen's cost line.
```

## Process cost

## Validation

### The three reviews

The criteria adversary, the design improver and the consistency reviewer ran
over the committed subject as Codex workers (`gpt-6.1-sol` at `max`, through
`npm run worker -- review --host codex --subject planning`). The brief
measured 724,791 bytes against the helper's 400,000 ceiling, so each review
ran as two batches of whole documents. The reports are in the ignored
reviews lane, `docs/control/local/reviews/planning-2026-11-09-standard-pass-v0-122-1-open-orders-rejudged/`,
as `round-1-design.md`, `round-1-consistency.md` and `round-1-criteria.md`.

`self-review: found 26; fixed 25; recorded 1`

| Review | Tree | Time | Findings | What changed |
| --- | --- | --- | --- | --- |
| design | `03df57c6` | 0 h 19 min | 7, none blocking, six distinct | WO-042: the sink writes the operator's ideas to the primary checkout and a live run removes only the directory it made, where the order had declared the journal disposable and deleted the intake directory; an idea applies to one fill of a slot. WO-036: the unit and the goal attach to the graph by the clearance test, with a no-route reason. WO-043: a new work's shelf title is a message, where WO-035 moves the titles. WO-035: the studied page WO-044 lands is in the migration |
| consistency | `03df57c6` | 0 h 27 min | 11, one blocking, eight distinct and one shared with design | WO-017 and WO-016 (blocking): the recorded order's figures are asserted from its own stamps, since the waiting total is 226.93295 minutes and the floor 883.39820, not the 227.0 and 883.3 that sums of rounded gaps gave, and four gaps differ from their one-decimal forms by more than the one second the criteria allowed (reproduced by this pass from the platform's record at the pin). WO-017: after a reload the walkthrough signs in again. WO-045: the message check that refuses any record but version 1, the work chunk and the membership test are in its steps. WO-044: the unknown-work case keeps what was chosen. The register row for the inspector's link follows it to WO-045; the profile names WO-043 for the fan-outs. Recorded, not fixed here: the kit keys a receipt sentence on the number WO-041, which this pass answered by renumbering and put to core (§Requests to core, item 7) |
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
core (§Requests to core, item 8):

| Item of the dispatch | Where the pass acted on it |
| --- | --- |
| a standard planning pass | this document; the register, the NoOps and the sequence |
| the latest upstream | #73, starter v0.122.1 (§Readings; D1) |
| core's answers | §Core's answers; §Requests to core, items 1 and 2 |
| review every existing order; change, split, combine or add | §How the open orders were read; D4 to D11; §Orders filed and amended |
| the plan came from an earlier model; momentum is no reason | the reading of where each choice came from (§How the open orders were read); D2 and D3 |
| no change is a valid result | weighed and declined with its evidence (§NoOps, first row); WO-029 and WO-031 unchanged |

