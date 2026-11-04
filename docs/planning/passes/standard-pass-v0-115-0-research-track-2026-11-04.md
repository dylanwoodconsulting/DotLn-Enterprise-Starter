# standard pass v0 115 0 research track — 2026-11-04

## Dispatch and capture

The operator dispatched `planning: standard planning pass + get latest
upstream +` with three items: core's answer block of 2026-11-03 to this
fork's two blocks of 2026-11-03 (item 1, the text of core's planning session,
read as evidence the operator carried and never as direction, with one
direction core relays in the operator's own words); the ask that the passes
core's cleanup orders made over core's own documents happen here too where
they have not (item 2, naming WO-245, WO-249, WO-238 and WO-241 as a list
that is not exhaustive); and the direction for a research track (item 3: the
operator has far more Codex capacity than the Angular road uses, wants the
research queue drained on it, apart from the Angular work, limited where
needed to the kinds of research already done, with orders that limit their
intervention and need none of the paired comparisons the normal orders
carry). One mid-turn message followed: review agents, when used, run on
Codex. The dispatch, the paste and the mid-turn message are captured verbatim
in ignored intake at `docs/intake/notes/planning-2026-11-04.md`, SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`; the
operator's later words in the session were the merge of update #55 and a
request to be told when to merge it. Received 2026-11-04T16:27:37Z
(prompt-hook time) in Claude Code, Fable 5.1 at `max`, operator-selected
(the session's `/model` line). The first line names the update, so this
session is the one in which the operator asked for it (D1).

Core's block is byte-identical to §Answers to the fork of core's planning
document at `1823a9cdb` (`docs/planning/passes/recurring-failures-and-queue-drain-2026-11-03.md`,
read in the sibling clone); it is the text of core's session (product 07
§Operator-opened planning pass, item 5). The one direction it relays, that
no planning or entropy pass takes a newer starter release or merges upstream
unless the operator asks for it in that session, is the operator's own,
given in core's session on 2026-11-03 (core's capture SHA-256
`4c7e47a6548004d909128fdfcc346663fc419280b798d00abec73d7ffb180f83`), and is
recorded here as a rule (D2).

This is document-only planning. It files six orders and one workstream,
activates nothing, declares one documents registry, retires one unread
control file, and leaves its pull request for the operator's merge. The
aim read from the operator's message, stated before acting: take the update
on their word, record core's answers against the records they name, strike
the rule they never gave and say where it was, bring core's cleanup passes
here, and give them a research track they can run on spare Codex capacity
without being asked anything.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `20f4790` at the dispatch (#54, the DotLn-Angular Entropy Reducer pass, merged 2026-11-03), clean; one writer, this session; no order worktree and no `wo-*` branch; starter v0.113.0 (`UPSTREAM.md`) | `git status`, `node scripts/harness.mjs writer --show`, `UPSTREAM.md` |
| Upstream | two refresh commits past the v0.113.0 base in the starter repository: `ebd3b25` (v0.114.0, core WO-241, the features file, released 2026-11-03T22:42Z) and `31d0ebb` (v0.115.0, core WO-253, temporary roots leave with the gate that made them, released 2026-11-04T15:27Z); fetched into `refs/upstream-releases/` with no tags | `git fetch --no-tags upstream refs/tags/v0.114.0:… refs/tags/v0.115.0:…`, `gh release view -R DylanBWood/DotLn` |
| The preview | from the detached worktree at `refs/upstream-releases/v0.115.0`: 70 kit files replaced, 5 added (`scripts/features.mjs`, `scripts/lib/features.mjs`, `scripts/lib/build-overlay.mjs`, `scripts/test-features.mjs`, the WO-253 role baseline fixture), 0 removed, 0 refused, 1,025 unchanged; build snapshot `fnv1a64:196c3a460c1890c2` to `fnv1a64:e39a01accb1fdf5b`; no instance action declared; 256 ms under the bounded wrapper | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.115.0` |
| The update | one merge commit (76 files, 5,590 insertions, 1,192 deletions, no conflict); `npm ci`; `harness emit` 42 surfaces with no drift; the lineage index unchanged; the work-order index regenerated; `npm run meta` rendering `docs/control/FEATURES.md` for the first time; the regenerated pages committed as `0fa4b5f` | the merge, the commands on the branch |
| The gates on the update branch | `harness check` exit 0; `launchpad verify` 1,100 kit files at `1823a9cd`; `npm test` 7 passed; `npm run test:docs` 14 passed, with the four historical operator-word advisories only; 0 h 1 min for all four, and the gate's own cleanup removed its 34 fixture roots at the end (the first observation of WO-253's suite-end removal on this host) | the gate log |
| Pull request #55 | `:arrow_up: Take starter v0.115.0`, pushed and opened on the fork with `-R` named at 16:50Z; the plain `git push` was admitted on the first try (the 2026-11-03 passes met four refusals and the 2026-11-01 pass two); the operator merged it as `a44ca7dd` at about 16:54Z | `git push -u origin chore/starter-update-v0.115.0`, `gh pr create`, the monitor's event |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main`: fetched origin's `main`, fast-forwarded and bootstrapped in 7 s, with no stall and no manual route | the command's output |
| `plan start` | the branch `planning/2026-11-04-standard-pass-v0-115-0-research-track` and the ten-heading skeleton with the thirteen carried red tags, in 0 h 0 min 30 s on the first run of v0.115.0's bounded prune, against the 0 h 9 min the 2026-11-03 pass spent in the prune on v0.112.0 and core's 0 h 17 min of 2026-11-03 | `npm run plan -- start standard-pass-v0-115-0-research-track` |
| The failure feed | the window since receipt 019 (2026-11-03T19:24Z) holds nothing: 0 failed verifications, 0 failed final reviews, 0 repairs, 0 orders made ready, 0 off-ramps; the record holds 5 failed verifications, 2 failed final reviews, 7 repairs, 19 orders made ready and 8 off-ramps (2 corrections, 1 override record, 2 bound acceptances, 3 waivers); final-review escapes 6 of 12 recent reviews over 10 orders; 1 local shell diagnostic (an unmatched pattern, unassigned) | `npm run plan -- failures` |
| Conditions | 0 holding, 0 unknown; 387 decision conditions and 184 register rows not evaluated by the mechanical read (0.7 s); 16 logical CPUs, no lane held | `npm run plan -- conditions` |
| Register | 184 rows, 47 pending at entry (deferred and duplicate rows; no untriaged row); the nine rows core's answers and the research track touch are re-disposed in §Register | `npm run plan -- followups --export` |
| Documents | 66 standing, 379 record, 10 generated; the census window five releases since 2026-10-18, 42 sessions, 27 observed, 15 unobserved (Codex unobserved); 13 red tags carried from the pass before, 1 unbound (`docs/control/doc-ceilings.json`), 15 unread | `npm run plan -- documents` before this pass's changes |
| DotLn-Angular | `main` at `55b59c9` (#13, WO-022's merge, `DotLn Angular v0.9.0`), the registered clone clean at it; no `wo-*` worktree; the catalog's 3,463 rows across six works, 60 studied in three families (`motion`, `marbles`, `flow`) | `git -C ../DotLn-Angular status`, the catalog data and `studies-summary.json` |
| Core | `main` at `1823a9cdb` (#274, WO-253 closed and released as v0.115.0); core's queue after its 2026-11-03 pass: WO-253 (now closed), WO-254, WO-246, WO-255, WO-257, WO-242, WO-243, WO-244, then the rest; a `../DotLn-wo254` worktree exists, so WO-254 is in progress | `git -C ../DotLn log`, core's planning document of 2026-11-03, `ls ..` |
| Codex CLI | 0.166.0 on this host | `codex --version` |
| Usage | unknown at entry: `node scripts/harness.mjs usage` reports no session (`no-session`), and the prompt hook's facts list every token and cost counter unavailable | the command, the hook's facts |

### What the releases ask an instance to read

**v0.114.0 (core WO-241).** `npm run meta` renders `docs/control/FEATURES.md`
and `npm run test:docs` refuses a stale page: rendered and committed on the
update branch. The `features` section accepts four named elections; this
instance declares none, so every row reads its default (desktop control off,
as the operator directed on 2026-11-01); WO-033 declares the one the operator
decided (D7). No overlay equips `tinkerer-economy`, so no migration advisory
applies.

**v0.115.0 (core WO-253).** `prune.startBudgetMs` defaults to 0 h 30 min and
is left unset; release close prunes only the closed order's own roots, so the
host-wide remainder falls to `plan start`'s bounded step or `harness prune
--apply`; a passed suite removes its own fixture roots (observed: 34 roots at
the update's document gate); a `disposable` declaration's last segment must
hold a letter or digit, which every entry of this registration does, the
seventeen nested `node_modules` roots and `tmp` included.

### The operator's words

Three items and one mid-turn message, each read for its aim, with what this
pass did and what in it is the planner's inference rather than the
operator's words:

| Item | Aim read | Disposition | Planner's inference |
| --- | --- | --- | --- |
| the dispatch line | a standard pass that takes the latest upstream, asked for in this session | #55 opened first, merged by the operator, finished on `main`; the planning branch from the updated `main` (D1) | none |
| 1, core's block | read each answer against the record it names; strike the rule the operator never gave and say where it was recorded | the nineteen answers and two items of core's own read item by item (D3); the rule struck from the operator record and the README with the capture of the direction (D2); the two items of core's own recorded (D3, D8) | the reading of core's relay as the operator's direction; the operator's own typed words confirm the per-session ask |
| 2, core's cleanup passes here | the document passes core's orders made over core's own repository happen here too, where they have not | a parity table over core's orders since this fork's founding (D5); what this pass could do as document work done here (the registry, the red tags, the ceilings file); the rest filed as WO-033 (D7) | which core orders count as cleanup beyond the four named; the choice to file one order rather than do the moves in the pass |
| 3, the research track | drain the research queue on spare Codex capacity, apart from the Angular work, limited where needed to research of the kinds already done, with orders that need no intervention and no paired comparisons | WS-002, a separate track, with five orders (WO-028 to WO-032) by the most-related rule within what the landed families draw (D6) | that "the research queue" is the catalog's unstudied concepts and "the kinds already done" the concept studies in landed families; the batch size of twenty; five orders now and a refill rule |
| the mid-turn message | review agents, when used, run on Codex | the three independent reviews and the refuter launched as Codex workers (D4) | that the refuter counts as a review agent |

### Core's answers of 2026-11-03, read against the records

The nineteen answers (nine on the first block, ten on the second) and the
two items of core's own, each against the record it names here (D3 holds the
decision; §Register the dispositions):

| Core's item | The record here | What this pass did |
| --- | --- | --- |
| First block 1 (recorded, nothing asked) | the 2026-11-03 pass's D1 and D2 | nothing |
| 2 (the finish fetch's alternates stay WO-246 step 5; the by-hand finish stands) | `FUP-038033632f4116e6` | re-disposed deferred; today's finish ran in 7 s with no manual route |
| 3 (WO-253: the bounded prune, the close's scope, the suite-end removal) | the 2026-11-03 pass's item 3, no row | taken today in v0.115.0; `plan start` 0 h 0 min 30 s, the gate's 34 roots removed; recorded in §Entry observations |
| 4 (a launch-boundary meter declined with its condition) | the profile §Run content workers (the pair's by-hand rule) | nothing changes; the profile's rule stands; reopen as core says, on a second overrun of a declared stop |
| 5 (WO-255 step 5: the review helper's target form) | `FUP-f46cff6dba92f65a`; the profile §Run content workers | re-disposed deferred; the profile's last sentence now names WO-255 and the form it adds |
| 6 (WO-257 steps 5 and 8: the executor's unmet ordinal; the unobserved boundary) | `FUP-8c4dcd0be9399981`, `FUP-290ea887a40dcd8e` | both re-disposed deferred on WO-257 |
| 7 (WO-257 step 9: the bootstrap diagnostic) | `FUP-b948f8094f0419e5` | re-disposed deferred on WO-257 |
| 8 (WO-257 step 10: every classification declaration counted) | `FUP-2232a29f1061494f` (WO-012-D008) | re-disposed deferred on WO-257; the profile's two-count precheck stays |
| 9 (WO-257 step 5: the Markdown screen before immutability, the correction route) | the 2026-11-03 pass's D9 | recorded; nothing further here |
| Second block 1 (WO-257 step 4: the Read before upgrading names the index regeneration) | the 2026-11-03 DotLn-Angular pass's item 1 | recorded; this pass regenerated the index on the update branch itself |
| 2 (WO-246 amended with the allow rules for the helper's node spellings; the push by hand until then) | `FUP-2479f6d32b2396a8` | re-disposed deferred; today's push was admitted first time, recorded for core |
| 3 (recorded, nothing asked) | the finish of 2026-11-03 | nothing |
| 4 (README.md a kit default entry point in WO-257 step 3; declare it today) | the thirteen red tags; `docs/control/documents.json` | declared today (D4); the thirteen tags disposed |
| 5, 7, 8 (WO-257 step 5: the confinement sentence, the witness label, the `<tmp>` rendering and the screened summary) | `docs/control/doc-baseline.json`'s four historical lines | recorded; the four lines stay declared historical until the release that carries WO-257 |
| 6 (WO-257 step 6: a provenance footer per moved record; no rewrite of the 322 links) | WO-027 step 9 (the `docs/dotln/` index row) | recorded; WO-027's row stays the fork's statement until the footer ships |
| 9 (WO-255: the planning lane keyed by the branch slug; `--since <tree>`) | the 2026-11-03 DotLn-Angular pass's §Validation | recorded; today's lane `planning-2026-11-04` was fresh, so the three reviews ran under the planning subject (§Validation) |
| 10 (WO-257 step 7: product 00 optional in the continuation gate) | the 2026-11-03 pass's item 10 | recorded |
| Core's own: WO-254 (a zombie writer judged dead; the recovery commands admitted; a stopped Codex dispatch releases its writer; an unprefixed question answered and the session continues) | product 07 §Operator recovery controls (kit) | recorded here as the route until it lands: a stale writer is released by the operator's one line and the session ends its turn after saying so; this session met no stale writer |
| Core's own: the four-option worker rule of 2026-11-03 | the operator record §Harness, Models and effort | recorded as the rule with core's capture (D8) |

### Core's cleanup orders, read for parity

The operator asked for the passes core's cleanup orders made over core's own
documents to happen here (item 2 of the dispatch, capture SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`). Core's orders closed since this fork's
founding (2026-10-14), read in the sibling clone for what each did to core's
own instance documents beyond the kit it shipped, against this fork's state
at `a44ca7dd`:

| Core order | What it did to core's own documents | State here | Disposition |
| --- | --- | --- | --- |
| WO-235 (no artifact shaped by its predecessor; the profile template, the `plan start` skeleton) | rewrote core's profile and workstream shapes | done: WO-025 rewrote the profile in the operator's shape; the skeleton is the kit's | nothing |
| WO-237 (a closed order keeps its journals) | the 720-hour seed in core's budgets | done: `budgets.json` carries `closed-journal: 720` since v0.105.0 | nothing |
| WO-238 (a document says what is so) | `documents.json` and the entry points; 51 dated pass documents moved under `passes/` with a moves map and rewritten links; the planning README as the root's page; the map's record divider; product 07 split by reader; `doc-ceilings.json` retired; the first census | half done: the two passes of 2026-11-03 wrote under `passes/`; this pass declares `documents.json` with the front-page entry point, disposes the thirteen red tags and retires `doc-ceilings.json` (D4); the nineteen dated documents still at the planning root (eighteen passes and the critical-path declaration), the one-line planning README and the moves map are WO-033's (D7); the product 07 split and the map are the kit's | WO-033 |
| WO-241 (the features file) | the `features` section in core's configuration with its elections; `FEATURES.md` | half done: the page rendered on the update branch; no election declared | WO-033 declares `desktop-control` with the operator's 2026-11-01 direction and leaves the rest at defaults (D7) |
| WO-245 (the kit's guide is a kit file; the front page is the instance's) | core's README as the short front page; `docs/KIT.md` | done: #51 put the launchpad's introduction at the root and left `docs/launchpad-readme.md` as the old-path pointer (the 2026-11-03 pass, D2) | nothing; the pointer is classified a record today (D4) |
| WO-248 (the pull-request table says what its reader can use) | core's PR body renderer | kit; this fork's pull requests render it | nothing |
| WO-249 (criteria judge the product) | the lint over core's open orders; core's record of its five waivers | done: the lint runs here, its two advisories were judged in the 2026-11-03 pass (D3); this pass screened its six new orders against the five classes (D6, D7) | nothing |
| WO-250 (reviews converge and every worker counts) | core's profile paragraphs on worker accounting | done: the profile's §Run content workers carries the accounting rules (the 2026-11-03 pass, D9) | nothing |
| WO-251 (desktop control is opt-in) | core's election default | done: the operator record's browser-verification item of 2026-11-01; the election stays off | WO-033 declares it |
| WO-252 (release close owns what the kit wrote) | core's `**/node_modules` declaration | pending: WO-023's launchpad write-back replaces the seventeen nested declarations with `**/node_modules` | nothing further |
| WO-253 (temporary roots leave with the gate that made them) | the prune budget key; the role roots' sentences | kit; the budget key left at its default (D1) | nothing |
| WO-239, WO-240, WO-247 | kit mechanisms (the close's preparation, Node 24 beside 26, a driven Codex order) | kit | nothing |

### The research queue, read in the catalog

The research queue the operator names (capture SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`) has no
file of that name; the research this fork has done is the concept-study program (WO-019's Arrive study, WO-020 to
WO-022 merged, WO-023 and WO-024 filed), and the queue is the catalog's
unstudied rows: 3,463 rows across six works, 60 studied, 40 more in the
filed pair, 3,363 unstudied. The kinds of research already done are studies
drawn by the landed families: `motion` and `timeline` (the Movement chapter
of AI for Games), `marbles` (RxJS operators, creation functions and
subjects) and `flow` (the messaging patterns), with `states` (the enterprise
application patterns) and `relations` (Gödel, Escher, Bach and Team
Topologies) landing with the pair. The most-related rule of the 2026-10-30
second pass (D4) was run over the catalog's data at `55b59c9` by a script
kept in this session's scratch, restricted per work to the rows its landed
family draws: for AI for Games the Movement chapter (119 rows, 101
unstudied, 67 related to by other rows; the pathfinding and decision-making
chapters, 184 rows with 119 related to, need a grid or tree drawing no
family makes); for RxJS the rows whose example a `TestScheduler` run can
draw (722 unstudied, 183 related to; the test harness, the promise-returning
functions, a scheduler and the Angular interop set aside); for Enterprise
Integration Patterns the pattern catalog's chapters 3 to 11 (268 unstudied,
127 related to; the two integration styles set aside); for PoEAA every row
beyond WO-023's twenty (435 unstudied, 137 related to); for GEB and Team
Topologies every row beyond WO-024's twenty (563 and 627 unstudied, 185 and
382 related to). The lists and the next rows under the rule are in the five
orders.

## Orders filed and amended

- [WO-028](../../work-orders/WO-028-concept-research-movement.md): Concept
  research I, the Movement chapter's next twenty, drawn by `motion` and
  `timeline`. Depends on WO-020 (merged). Runnable now.
- [WO-029](../../work-orders/WO-029-concept-research-rxjs.md): Concept
  research II, twenty more RxJS operators and creation functions in
  `marbles`. Depends on WO-021 (merged). Runnable now.
- [WO-030](../../work-orders/WO-030-concept-research-eip.md): Concept
  research III, twenty more messaging patterns in `flow`. Depends on WO-022
  (merged). Runnable now.
- [WO-031](../../work-orders/WO-031-concept-research-poeaa.md): Concept
  research IV, twenty more enterprise application patterns in `states`.
  Depends on WO-023 (filed); its base is provisional until the pass after
  WO-023 merges.
- [WO-032](../../work-orders/WO-032-concept-research-geb-and-team-topologies.md):
  Concept research V, ten more GEB and ten more Team Topologies concepts in
  `relations`. Depends on WO-024 (filed); its base is provisional until the
  pass after WO-024 merges.
- [WS-002](../../workstreams/WS-002-concept-research.md): the research track,
  `track: separate`, with the five as members and its seven rules (D6).
- [WO-033](../../work-orders/WO-033-documents-follow-the-contract.md): the
  launchpad's documents follow the kit's contract as core's do (the moves
  under `passes/` with a moves map, the planning README, the declared
  election, the regenerated control projection). A self order, patch
  release, sequenced after the WO-023/WO-024 pair (D7).

No existing order's text changes. WS-001 loses its proposed-later-member
sentence about the next hundred and gains the sentence that the later
batches are WS-002's (D6). Each new order carries `Model:`, three-role
`Effort:`, `Cost:` with additions and removals, a dated observed gap at the
target's or the launchpad's current tip, a Design with rejected alternatives
and their axes, an execution plan naming a check per step, criteria whose
last names the declared gate and `npm run test:docs`, a Preflight line,
non-goals and operator-review assumptions. The five defect classes were
screened: no criterion's subject is a count or duration (the figures are in
Cost lines and in this document), none reads `HEAD` or a commit range (the
record-bytes criterion of WO-033 reads `plan check`'s hash match and the
record directories' status), each names where its input exists or which
step plants it, none requires a host behavior the order cannot produce, and
none contradicts a non-goal; `npm run work-orders -- index --check` prints
only the two advisories the 2026-11-03 pass judged (WO-008 criterion 1,
WO-016 criterion 5).

## Decisions

### D1. Take starter v0.115.0 first, on the operator's word in this session

The dispatch line asked for the latest upstream, so this is the session in
which the operator asked (the rule D2 records). The two refresh commits past
v0.113.0 were previewed from the detached worktree (§Entry observations: 70
replaced, 5 added, 0 refused, no instance action), merged into
`chore/starter-update-v0.115.0` in one commit with no conflict, regenerated
(the harness, the lineage index, the work-order index, the features page)
and gated (four gates green in 0 h 1 min). #55 was pushed, admitted on the
first try, and opened ready; the operator merged it; `update --finish` ran
in 7 s. The planning branch was opened from the updated `main`.

The two releases' Read before upgrading items are met as §What the releases
ask an instance to read states; the prune budget stays at its default
(reopen: a `plan start` or close stops at the budget with a remainder), and
no election is declared on the update branch, because an election is an
instance choice that an order records with its reason (WO-033).

Traps: naive interventionism would declare the four elections to make the
page look complete; goal substitution would count the update as the pass.
The NoOp of staying on v0.113.0 was declined because the operator asked for
the update in this session, and because WO-253's bounded prune is what every
`plan start` and close here pays for (observed: 0 h 0 min 30 s against 0 h 9
min).

### D2. Strike the update rule, and say where it was recorded

The operator says they never gave the rule that a planning pass takes the
latest starter first, and asks that it be struck and its places named
(their direction of 2026-11-03 in core's session, capture SHA-256
`4c7e47a6548004d909128fdfcc346663fc419280b798d00abec73d7ffb180f83`,
relayed in core's block pasted today, capture
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`). It
was recorded in two standing documents and acted on in records:

- `docs/operator/README.md` §Standing preferences, Updates, the lifecycle
  and records, the "Starter updates" item: "a planning pass takes the latest
  starter first, through an update pull request it opens ready…", dated
  2026-10-18 and 2026-10-21 with capture `9b1e3fe9…` and 2026-10-24. The
  three captures it cited are per-session asks (the dispatches of those
  days each asked for the latest upstream); the standing form was the
  planner's inference from the asks, the kind of rule the operator's
  correction of 2026-11-03 names. Rewritten today: no planning or entropy
  pass takes a newer starter release or merges upstream unless the operator
  asks for it in that session, with the direction's date and both captures
  (core's `4c7e47a6…` and today's `56c7d119…`), and with the mechanics of
  an asked-for update (the pull request opened ready, the operator's merge,
  the finish on clean `main`, the Read-before-upgrading repair on the update
  branch, `amend-order --withdraw`) kept as the procedure that applies when
  they ask.
- `README.md` §Versions, provenance and recovery context: "A planning pass
  takes the latest starter first…". Rewritten to the same rule.
- Acted on, not recorded as a rule, in the pass documents of 2026-11-03
  (the Entropy Reducer pass, D1, which took the update under the standing
  rule; the DotLn-Angular pass, D1, which applied the same rule four minutes
  after the release) and in the dispatch rows of the standard passes of 2026-10-28, 2026-10-30
  and 2026-11-01, each of which the operator had asked for in its own
  session. Records are not rewritten; this decision is their correction.

The generated planner skill carries no such rule; core's WO-257 writes the
kit's sentence so no instance records it again. Reopen: never on its own;
the operator's word changes it.

### D3. Core's answers, read against the records

Each of core's nineteen answers was read against the record it names and
disposed as §Core's answers of 2026-11-03 tabulates: nine register rows
re-disposed (§Register), the profile's last sentence on target review
rewritten to name WO-255, the README entry point declared today as core
invited (D4), and the rest recorded with nothing to do here until the
releases that carry WO-246, WO-255 and WO-257 land. Core's declines (the
launch-boundary meter, the rewrite of the 322 links) are taken as its
decisions with their conditions. Two items of core's own: the WO-254 route
for a stale writer is recorded in §Core's answers as the route until it
lands, and the four-option worker rule enters the operator record (D8).

Traps: shifting the burden would carry each unlanded item to core again;
each is on a filed core order and is asked for nothing more. NoOp for the
items core declined: none is a defect observed here since.

### D4. The thirteen red tags, the front page and the ceilings file

The pass before left thirteen red tags open (the root README and twelve
directory indexes it links, and the old-path pointer), because the kit's
parser reads no link in the instruction file's "How to start: README.md."
line. Core's answer invites the instance to declare README.md a front-page
entry point today. This pass declares `docs/control/documents.json` with the
kit's four default entry points and a fifth, `front-page`, naming
`README.md` under its heading, and one kind override: `docs/launchpad-readme.md`
is a record (the old-path pointer WO-025-D014 left for the filed WO-025
evidence and reports; it holds no current state). With the registry in
place the census reports no unbound standing document; the twelve indexes
are reached from the front page and keep their place as the directory
pages; the pointer leaves the standing census. One consequence: the front
page linked a decision record (WO-025-D014), and an entry point names
standing documents only, so the README now names the decision in words
beside the directory that holds it instead of linking it (reported to core
as an observation for WO-257's default). `docs/control/doc-ceilings.json`,
unread since v0.113.0 retired the byte ceilings and removed in core by
WO-238, is removed here; the records that mention it keep their bytes.

The thirteen dispositions are written in §Red tags. Traps: naive
interventionism would remove the twelve indexes as unread; they are the
pages a reader of each directory lands on, and the census's unread count is
a lower bound with Codex unobserved. NoOp of leaving the tags for WO-257's
release: declined, the kit refuses a tag older than one pass without a
disposition.

### D5. Parity with core's cleanup passes

Read in the sibling clone for what each core order did to core's own
documents (§Core's cleanup orders, read for parity): WO-245, WO-249, WO-250,
WO-251, WO-235 and WO-237 are done here already; WO-238 and WO-241 are half
done, and the half this pass could do as document work it did (D4), while
the eighteen moves, the planning page, the moves map, the declared election
and the control projection are WO-033 (D7). The operator's list was not
exhaustive, so the table reads every core order closed since this fork's
founding; the ones it names as kit mechanisms need nothing here.

Traps: goal substitution would count the kit's shipped mechanisms as the
passes the operator asked for; the table separates the two. NoOp of doing
the moves in this pass: declined (D7).

### D6. The research track: a separate workstream, five orders, Codex, no rounds

The operator's words (capture SHA-256
`56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`), read
for their aim: they have far more Codex capacity than the Angular road uses; they want the research queue drained on it,
apart from the Angular work, limited if need be to research of the kinds
already done; the orders should limit their intervention and need none of
the paired comparisons the normal orders carry, since those are what the
normal orders are for. The reading (the inferences are named in §The
operator's words): the research queue is the catalog's unstudied concepts;
the kinds already done are concept studies in the landed families; an
order's intervention is the operator's touchpoints inside it.

Decision: `WS-002` is filed as a separate track (`"track": "separate"`, the
kit's form the 2026-10-30 second pass declined when the operator wanted the
batches at the front of the list, and which `FUP-85de3e8d18bab62a` held for
the day the operator wanted them off it), with seven rules: no new page,
family or round; selection by the most-related rule within what the landed
family draws; WO-020's authoring and critic procedure as Codex `spawn_agent`
workers (or Claude `dotln-worker`) under the profile's admission and
accounting rules; the operator's touchpoints as the drive phrase, the merges
and the close, with routine questions resolved under authority and defective
criteria recorded by class; members apart from the road, in their own
worktrees beside any sequenced order, the second to publish integrating
`main`; a refill when fewer than two are queued; WS-001's record rules.
Five orders are its first members, one per work as the 2026-10-30 cut was:
WO-028, WO-029 and WO-030 runnable now against merged families; WO-031 and
WO-032 after the pair that lands `states` and `relations`. Each names the
twenty rows the rule gives and the next rows for the one substitution, the
Codex route (`drive: WO-0NN --host codex`), and the assumption the operator
reviews: that the critics' review and the verifier's walkthrough stand as
the reading of twenty records where the operator chooses not to read them.

Why twenty per order and five now: the critics' coverage and the verifier's
walkthrough are calibrated at twenty (the 2026-10-30 second pass, D4,
rejected fifty), the operator's own cadence is about a hundred in five, and
the register's C2 row asked for the next hundred; the refill rule keeps the
track from draining between passes. Why a separate workstream: the kit
lists its members apart from the serial order and needs no sequence entry,
which is what "separate from the actual angular work" asks; cross-workstream
dependencies are typed in each order's block. Why restrict the rule to what
the landed family draws: a concept that needs a grid, a tree or any new
drawing is a page the operator judges by rounds, which is the road's work
and the opposite of what the track is for. Why Codex: the operator's
capacity and words; the harness default (`gpt-6.1-sol` at `max`) is the
model the operator's rule of 2026-11-03 names, and the attended phrases on
either host stay admitted.

Rejected: forty or fifty concepts per order (axis: the verification by use
and the critics' coverage; the 2026-10-30 rejection stands); a second round
of three more orders now (axis: three runnable orders and two queued are a
pass's worth of Codex work, and the refill rule cuts the next when fewer
than two are queued); research orders inside WS-001 as lane pairs (axis: the
sequence is the road, and a pair binds a research order to a road order's
timing); a research track of another kind (research workers reading
corpora for planning, the mining run's designs) (axis: the operator limited
the track to the kinds already done; the only kind done here is the concept
study); the planner choosing concepts (axis: the rule is checkable against
the data). The NoOp of filing nothing and letting the pair drain first:
declined, the operator asked for the track now and has the capacity now.

Reopen: the operator says the track should run on another host, that a
batch should be larger, that the pathfinding chapter should come before its
family exists (then a road order lands the family first), or that they want
to read every record before a final review (then the orders' assumption
changes and the touchpoints gain one).

### D7. One parity order, sequenced after the pair

WO-033 carries what parity with WO-238 and WO-241 still needs and a planning
pass cannot do as document work in good order: nineteen `git mv`s with a
moves map, hundreds of link rewrites in standing documents (the inventory:
the dated documents are named in 10 to 45 files each), the planning README
rewritten, one election declared in the registration with the operator's
reason, and the control projection regenerated through its owner
(`refreshControlProjection` in `scripts/resume.mjs`, which status reads
and does not write). It is a self order with a patch release, sequenced
after the WO-023/WO-024 pair and before WO-027, so the operator takes it
between road orders; it may run beside the pair, since its surfaces are
the launchpad's and the pair's the target's.

Rejected: doing the moves in this pass (axis: a planning pass is
document-only but this change is verified by `followups --sync`, `plan
check`, the lineage index and the receipts' hashes, which an order's
verifier judges and a pass's refuter does not); two orders, one for the
documents and one for the election (axis: the fixed cycle twice for one
morning's work); declaring the four elections (axis: a rule nobody gave).
NoOp of leaving the dated documents in the root: declined, the operator
asked for core's pass here (capture `56c7d119…`) and the kit's layout has
moved. Reopen: the
operator takes WO-033 before the pair (then nothing changes; its surfaces
are disjoint).

### D8. Rules recorded, and words that are not rules

Two standing rules enter the operator record today, each in the scope the
operator gave it: the update rule (D2) and the four-option worker rule
(given in core's session on 2026-11-03, capture `589662ab…`; relayed in
core's block; it extends the record's Models item with the two Codex
options and the defaults). One item is rewritten in the scope the operator
widened it to: Depth in batches gains the research track (capture
`56c7d119…`). The mid-turn message (review agents on Codex) is this
session's direction and consistent with the standing rule of 2026-10-31
that a pass's three reviews run as Codex workers; it is applied (D4's
reviews and the refuter, §Validation) and recorded here, not as a new rule,
because the operator's correction of 2026-11-03 asks that a direction enter
the record in the scope and words given. The planner's reading that the
refuter is a review agent is named as an inference; reopen on the operator's
word, and the refuter returns to the Claude default.

## Register

The register was synced after the dispositions and the batch applied at
revision `b7df224a…`. Nine rows were re-disposed on core's answers and the
research track; the rest of the 184 rows keep their state, and the pass
reads a scoped set without claiming to have drained unrelated pages.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| FUP-85de3e8d18bab62a (C1, a separate workstream for the batches) | **settled** — fired by the operator's direction of 2026-11-04; WS-002 filed with `track: separate` and WO-028 to WO-032 as members (D6). | The operator wants the research orders back in the serial sequence, or the index misplaces a separate-track member. |
| FUP-862baf0e83c307d0 (C2, the next hundred concepts) | **allocated** to WO-028, WO-029, WO-030, WO-031 and WO-032 — the operator asked for the queue to be drained; the next hundred cut by the rule within what the landed families draw (D6). | Fewer than two research orders are queued, or the operator asks for the next cut. |
| FUP-2479f6d32b2396a8 (the push refusals; WO-246) | **deferred** — core amended WO-246 (the emitted allow rules), third in its queue; the push is the operator's by hand until then; today's push was admitted first time (D3). | A starter carries WO-246, or a hook-admitted launchpad publish is refused by the classifier. |
| FUP-2232a29f1061494f (WO-012-D008, the classification count) | **deferred** — allocated by core to WO-257 step 10 (D3). | A starter carries WO-257, or a target order contains a malformed duplicate. |
| FUP-038033632f4116e6 (the close's removal step; the finish) | **deferred** — WO-253 shipped in v0.115.0 and is taken; the finish's alternates stay WO-246 step 5; today's finish ran in 7 s (D1, D3). | The first target close on v0.115.0 records its removal step's time, a starter carries WO-246, or a finish stalls. |
| FUP-8c4dcd0be9399981 (ER-VER-01) | **deferred** — WO-257 step 8 (D3). | A starter carries WO-257, or a consumer treats the historical line as a current block. |
| FUP-b948f8094f0419e5 (ER-MAINT-02) | **deferred** — WO-257 step 9 (D3). | A starter carries WO-257, or the documented setup fails on a configured clone. |
| FUP-f46cff6dba92f65a (ER-RUN-02) | **deferred** — WO-255 step 5; the profile names it (D3). | A starter carries WO-255, or a required Codex target bridge cannot be qualified. |
| FUP-290ea887a40dcd8e (ER-RUN-03) | **deferred** — WO-257 steps 5 and 8 (D3). | A starter carries WO-257, or another probe is misread as proof of confinement. |

Rows read and left as they stand, their conditions not fired: `FUP-4091de8ba4313b4c`
(the three reviews as a kit step; WO-244 eighth in core's queue),
`FUP-f85ede7a356345c5` (the title workflow after WO-246),
`FUP-49dda4781fa64b25` (the `gh` default; every `gh` call today named `-R`),
`FUP-2ed0c79e62b53dd7` and `FUP-35187266d29e00dc` (the pass before WO-016
activates), `FUP-0fb531a975308a81` (the search controls; the pass before
WO-018).

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
  "tags": [
    {
      "path": "README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the instance's front page; declared the front-page reader entry point in docs/control/documents.json on core's answer of 2026-11-03 (item 4), so it is bound and every page it links is reached (D4)."
    },
    {
      "path": "docs/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the documentation root's index page; reached from the front page now that README.md is an entry point (D4)."
    },
    {
      "path": "docs/control/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the control root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/decisions/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the decisions root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/discovery/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the discovery root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/evidence/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the evidence root's index page; linked from the front page (D4)."
    },
    {
      "path": "docs/final-reviews/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the final-reviews root's index page; linked from the front page (D4)."
    },
    {
      "path": "docs/launchpad-readme.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept and classified a record in docs/control/documents.json: it is the old-path pointer WO-025-D014 left for the filed WO-025 evidence and reports, holds no current state and leaves the standing census (D4)."
    },
    {
      "path": "docs/observations/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the observations root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/product/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the product root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/publication/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the publication root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/releases/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the releases root's index page; reached from the front page through docs/README.md (D4)."
    },
    {
      "path": "docs/verifications/README.md",
      "since": "docs/planning/passes/entropy-reducer-dotln-angular-2026-11-03.md",
      "disposition": "Kept as the verifications root's index page; linked from the front page (D4)."
    }
  ]
}
```

<!-- dotln-red-tags:end -->

The census after the registry: 0 unbound standing documents, 13 tags with
their dispositions above, the unread count a lower bound with Codex
unobserved. No document was removed by this pass but the unread
`docs/control/doc-ceilings.json`, which v0.113.0 stopped reading (D4).

## NoOps

Each declined candidate uses the NoOpIntent fields: kind, reason, evidence,
reevaluation and usefulWhen. No automatic schedule is created by this record.

| Candidate (kind: NoOp) | reason and evidence | reevaluation | usefulWhen |
| --- | --- | --- | --- |
| A second round of research orders now (aifg, RxJS and messaging III) | Three runnable orders and two queued are a pass's worth of Codex work; the refill rule (WS-002 rule 6) cuts the next when fewer than two are queued. Evidence: WO-020 to WO-022 each took 4 h to 10 h of executor work. | Fewer than two research orders queued, or the operator asks for a deeper queue. | The operator's capacity outruns five orders between passes. |
| Research orders of forty or fifty concepts | The critics' coverage and the verifier's walkthrough are calibrated at twenty; the 2026-10-30 second pass rejected fifty for the same reason. Evidence: D4 of that pass; WO-022's fan-out of ten authors with two each. | A batch's verification by use proves cheap at twenty for three orders running. | A larger batch halves the merges the operator does per hundred concepts. |
| A research order for the pathfinding and decision-making chapters now | A grid or tree drawing is a new family, a page the operator judges by rounds; the track lands no page. Evidence: `FUP-862baf0e83c307d0`'s text named these chapters; the families at `55b59c9`. | A road order lands a family that draws a graph search or a tree, or the operator asks for the chapter before its family. | The chapter's 119 related rows become research work. |
| Research of other kinds (research workers over a corpus for planning; the mining run's remaining designs) | The operator limited the track to the kinds already done; the only kind done here is the concept study, and the mining run is core's intake the operator routes themselves. Evidence: the operator record's items on the research run. | The operator names another kind of research for the track. | A second kind has a procedure, a check and a reader as the studies do. |
| Declaring the four feature elections on the update branch or in this pass | An election is an instance choice an order records with its reason; declaring `plan-first`, `private-destination` or `tinkerer-economy` without the operator's word is a rule nobody gave. Evidence: `FEATURES.md`'s defaults; the operator record's 2026-11-01 direction on desktop control only. | The operator decides an election. | The page shows the operator's choice with its reason, as WO-033 does for desktop control. |
| Moving the nineteen dated planning documents in this pass | The moves are verified by `followups --sync`, `plan check`, the lineage index and the receipts' hashes, an order's verifier's work; a pass's refuter judges orders. Evidence: core did it as WO-238 step 10 with four checks. | Never on its own; WO-033 carries it. | The planning root holds its standing documents and record directories only. |
| Rewriting the records' links to the moved documents | A record is never rewritten; the moves map resolves old paths (core's design). Evidence: core's `document-moves.json`. | Core changes the moves contract. | A reader of a record finds a moved document from its old path. |
| A launch-boundary meter of the fork's own | Core declined it with a condition (its map, 2026-11-03, item 3); the pair's by-hand rule in the profile serves. Evidence: core's answer item 4. | A second instance order overruns a declared stop, or a host prints a counter a meter could read. | A meter reports unknown as unknown and never as zero. |
| Setting the `gh` default repository for this checkout | The operator's tool setting; every `gh` call today named `-R`. Evidence: `FUP-49dda4781fa64b25`. | The operator sets it, or a kit helper names the repository on every call. | A read without `-R` resolves to the fork. |
| Recording the mid-turn direction (review agents on Codex) as a standing rule | The operator's correction of 2026-11-03: a direction enters the record in the scope given; the standing 2026-10-31 rule already runs the three reviews on Codex. Evidence: D8. | The operator says it is standing, or names the refuter's host. | The record carries only what the operator said. |

## Sequence

WO-033 enters after the WO-023/WO-024 pair and before WO-027 as a single
entry; the pair and the road orders keep their relative order. WS-002's five
members are a separate track with no sequence entry; the index lists them in
its Workstreams grouping and their cards after the sequenced Open cards. What
the operator sees after each order lands: after WO-023 and WO-024, forty more
studies under Tools with the `states` and `relations` families; after WO-033,
nothing on screen, a planning root that holds its standing documents and
record directories, a features page that says desktop control is off by
their choice, and a status read without a warning; after WO-027, CI's board
count that counts a marker wherever a defect sits, a `check:scripts` that
fails on a missing or stale row, and reference documents whose command lists
match the gate and whose pointers resolve; after WO-016, the machinery view;
after WO-008, login and permissions; after WO-017, the twin's first lane;
after WO-018, the Art of War toys on the shelf. After each research order,
twenty more studied concepts under its work on the shelf and in the
contents, in the family the work already has: Movement (WO-028), RxJS
(WO-029), the messaging patterns (WO-030), the enterprise application
patterns (WO-031), and Gödel, Escher, Bach with Team Topologies (WO-032).

## Write-backs

- The operator record (captures SHA-256
  `4c7e47a6548004d909128fdfcc346663fc419280b798d00abec73d7ffb180f83`,
  `589662ab8d84e728340b6b22077bf72f4979d1e3a37821a00947b8c12b52326f` and
  `56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`): the
  Starter updates item rewritten to the rule the operator gave (D2); the
  Models and effort item extended with the four options and their defaults
  (D8); the Depth in batches item widened to the research track (D6, D8). Nothing else in the
  record changed today.
- `README.md`: the update sentence rewritten to the rule (D2); the decision
  record named in words instead of linked, because an entry point names
  standing documents only (D4).
- `docs/control/documents.json` (new): the five entry points and the one
  kind override (D4). `docs/control/doc-ceilings.json` removed (D4).
- `docs/repositories/dotln-angular.md` §Run content workers: the last
  sentence names WO-255 and the target form it adds (D3).
- WS-001: the proposed-later-member sentence on the next hundred removed;
  §The app and its sub-apps points the later batches at WS-002 (D6).
- WS-002 (new), WO-028 to WO-033 (new), the sequence (WO-033), the idea
  ledger's registration heading, the generated work-order index and history
  page, the follow-up register (the batch above).
- No budget, ceiling or baseline is raised; `docs/control/doc-baseline.json`
  keeps its four historical receipt lines until the release that carries
  WO-257 (D3).

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.115.0

From DotLn-Enterprise-Starter's 2026-11-04 planning pass, docs/planning/passes/standard-pass-v0-115-0-research-track-2026-11-04.md. These are the fork's findings, not new operator direction.

1. Starter v0.115.0 is taken (#55), on the operator's word in the dispatch of that session. Preview 70 replaced, 5 added, 0 refused, no instance action; one merge, no conflict; the four gates green in 0 h 1 min; the plain git push admitted first time; update --finish in 7 s. First observations of WO-253 on this host: plan start 0 h 0 min 30 s to its branch (against 0 h 9 min on v0.112.0), the document gate removed its 34 fixture roots at its end. Your 2026-11-03 answers are reconciled; nine register rows re-disposed on them. Nothing asked.

2. The update rule is struck, as the operator asked. It was recorded in docs/operator/README.md (§Standing preferences, Updates, the lifecycle and records, the "Starter updates" item, dated 2026-10-18, 2026-10-21 and 2026-10-24) and in README.md §Versions, provenance and recovery context, and acted on in the two pass documents of 2026-11-03 (records, unchanged). The three captures it cited were per-session asks; the standing form was the planner's inference. Both standing documents now carry the operator's rule with the capture of 2026-11-03 and the mechanics that apply when they ask. WO-257's kit sentence is welcome; nothing more asked.

3. For your information: README.md is declared a front-page entry point in documents.json as you invited, which cleared the thirteen red tags. One consequence for WO-257 step 3: the fork's front page linked a decision record (WO-025-D014), and the check that an entry point names standing documents only then reported record-named for the front page; the fork reworded the link. A front page that links a decision or evidence record will meet the same in any instance once README.md is a default; either admit record links from the front page or say so in that release's Read before upgrading.

4. For your information: the operator opened a research track here, WS-002 with "track": "separate", five concept-study orders run on spare Codex capacity apart from the Angular road; the kit's separate-track form served as documented and the index lists the members in the Workstreams grouping. The first driven research order on Codex (drive: WO-0NN --host codex, a target order) will be the fork's first use of the router; its outcome goes in the next block.

5. Observation on `npm run resume -- status`: every read prints `warning: docs/control/current.md disagrees with the canonical fold of control segments; status is read-only and did not rewrite the projection`, and neither the kit guide nor the operator reference names the command that regenerates the projection (refreshControlProjection in scripts/resume.mjs is called by integration and the lifecycle events). Ask: let status print the regenerating command with the warning, or offer `resume -- status --refresh`. Low priority; the fork's WO-033 regenerates it through the exported function.

6. Observation for WO-255 and the four-option rule: the fork's three independent reviews and its refuter ran on Codex today through the kit helper and the refute transport (the counts in the pass document's §Validation). <filled after the reviews>
```

## Process cost

Model and effort: Fable 5.1 at `max`, operator-selected (`CLAUDE_EFFORT=max`;
the session's `/model` line). Usage at entry and exit: unknown
(`node scripts/harness.mjs usage` reports no session; the prompt hook's facts
list every counter unavailable). Subagents: budget 20 (`subagentCap`); the
plan stated before the first spawn: three Codex review workers through
`npm run worker -- review --host codex` (one per brief, under the planning
subject), one recheck round if a blocking finding is repaired, and one
refuter through `npm run plan -- refute --transport codex-cli-exec` on the
operator's mid-turn direction, each launched once: four to six uses, no
re-task, no descendant. The counts actually spent are in §Validation.
Wall-clock of the pass's commands: the preview 256 ms; the update's four
gates 0 h 1 min; `update --finish` 7 s; `plan start` 0 h 0 min 30 s; the
catalog selection script under a second; the reviews and the refuter in
§Validation. Against the NoOp of doing nothing: the research track gives
the operator's Codex capacity three orders to spend on now and two more
behind the pair, and the update's bounded prune repays itself at every
`plan start` and close.

## Validation

Pending: the three Codex reviews, the refutation and the document gate are
recorded here when they have run.
