# standard pass v0 117 0 scene reminders — 2026-11-05

## Dispatch and capture

The operator dispatched `planning: standard planning pass + get latest
upstream +` with two items: move WO-033 and WO-027 up in the queue (item 1),
and address their reminder follow-ups for updates to the scene and other
items (item 2). One mid-turn message followed at 15:26Z, while the update
branch's gates ran: they agree with the previous final review that a
refactoring pass needs to occur; the app is supposed to be the pie-in-the-sky
perfect example for other Angular developers; getting the functionality in
first is understood, but coding standards are never an afterthought but
always a dedicated pass that occurs often. Their later word in the session
was `merged`, for update #58. The dispatch, the mid-turn message and that
word are captured verbatim in ignored intake at
`docs/intake/notes/planning-2026-11-05.md`, SHA-256
`c64473498d1d5040fa937cf8a71aa1d8ec0a7c1d3a7c5d6aad3674711190c926`. Received 2026-11-05T15:11:57Z (prompt-hook
time) in Claude Code, Fable 5.1 at `max`, operator-selected (the session's
`/model` line). The first line names the update, so this session is the one
in which the operator asked for it (D1).

One host observation on the dispatch itself: the `/model` command's output
preceded the pasted block in the same message, so the prompt hook journaled
the dispatch unclassified with no prefix (row 2026-11-05T15:11:57.447Z,
digest `07c86451…`); the pass ran under the planner skill the session
loaded, while the harness's role stayed unknown, its outside-write grants
were absent (a scratchpad write was refused and the pass kept its scratch in
ignored intake) and `harness usage` could measure nothing. Recorded for
core (§Requests to core, item 5).

This is document-only planning. It takes starter v0.117.0 on the operator's
word, files five orders, amends four, records one standing rule from this
session's message and five from WO-028's sessions, disposes twenty-one
register rows, activates nothing and leaves its pull request for the
operator's merge. The aim read from the operator's message, stated before
acting: take the update on their word; put WO-033 and WO-027 first; turn the
reminders WO-028's sessions boarded into orders, rules and dispositions; and
record the standards direction as the rule it is, with the first standards
pass filed near the front of the road.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `53f8768` at the dispatch (#57, WO-028's review recorded), clean; one writer, this session; no order worktree; starter v0.115.0 | `git status`, `node scripts/harness.mjs writer --show`, `UPSTREAM.md` |
| Upstream | two refresh commits past v0.115.0 in the starter repository: `3739cf4` (v0.116.0, core WO-254, the hooks get out of the operator's way, released 2026-11-04T23:00Z) and `8fd3b33` (v0.117.0, core WO-246, a fork's own pull requests open on the fork, released 2026-11-05T15:01Z, ten minutes before the dispatch); fetched into `refs/upstream-releases/` with no tags | `git fetch --no-tags upstream refs/tags/…`, `gh release view -R DylanBWood/DotLn` |
| The preview | from the detached worktree at `refs/upstream-releases/v0.117.0`: 112 kit files replaced, 3 added (`scripts/lib/launchpad-publish.mjs`, the WO-246 and WO-254 role baselines), 0 removed, 0 refused, 988 unchanged; build snapshot `fnv1a64:e39a01accb1fdf5b` to `fnv1a64:78861e409ef45107`; no instance action declared; 268 ms under the bounded wrapper | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.117.0` |
| The update | one merge commit (`32787e1`, no conflict); `npm ci`; `harness emit` 42 surfaces with no drift; the lineage index unchanged; the work-order index and the features page regenerated (`0415011`); the Git merge also carried the starter's refresh of two instance seeds, `CLAUDE.md`'s generated block (nine refusals, which the re-emit reproduces byte for byte) and one paragraph of `AI-HARNESS-SECURITY.md` (a standing rule enters the record only from the operator's direction), with no hand-written line changed | the merge, the commands on the branch, `git diff main..HEAD` |
| The gates on the update branch | `harness check` 42 surfaces; `launchpad verify` 1,103 kit files at `ccfba0df`; `npm test` 7 passed; `npm run test:docs` 14 passed; 0 h 1 min for all four | the gate log |
| Pull request #58 | the kit's new helper (`node scripts/launchpad.mjs update --publish`) was denied by Claude Code's auto-mode classifier as an external write in this session, where the allow rule v0.117.0 emits was not yet loaded; the plain `git push` and `gh pr create -R` were admitted on the first try, as in the 2026-11-04 pass; opened at 15:33Z; the operator merged it at 15:37:18Z and said so | the helper's refusal, the push, the monitor's event, the operator's word |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main`: fetched `origin`, fast-forwarded `main` to `926270bb`, emitted 42 surfaces, bootstrapped; no stall and no manual route | the command's output |
| `plan start` | the branch `planning/2026-11-05-standard-pass-v0-117-0-scene-reminders` and the eleven-heading skeleton, with the v0.116.0 `Rules recorded` block and no red tag carried; the branch stood within 0 h 1 min of the finish | `npm run plan -- start standard-pass-v0-117-0-scene-reminders` |
| The failure feed | the window since receipt 020 (2026-11-04T17:53Z) holds WO-028's cycle: 1 failed verification (VER-001, labels cut at the operator's sizes), 1 failed final review (FINAL-001, on the operator's direction), 2 repairs, 1 order made ready, 0 off-ramps; the record holds 6 failed verifications, 3 failed final reviews, 9 repairs, 20 orders made ready and 8 off-ramps; final-review escapes 4 over WO-028's two reviews | `npm run plan -- failures` |
| Conditions | 0 holding, 0 unknown; 450 decision conditions and 204 register rows not evaluated by the mechanical read (0.97 s); 16 logical CPUs, no lane held | `npm run plan -- conditions` |
| Register | 204 rows, 61 pending at entry (47 deferred, 14 untriaged, the fourteen being WO-028's follow-ups); twenty-one rows disposed in §Register | `npm run plan -- followups --export` |
| Documents | no red tag; the unread list names the research orders and WO-033, unread since their filing on 2026-11-04 (the census is a lower bound) | `npm run plan -- documents` |
| Process health | the index prints 2 budget breaches, WO-028's 316,348,327 tokens under the operator's authorization (WO-028-D004, D033, D050), a first verification failed in 3 of the last 8 closed orders, and one reopen candidate: the trap "shifting the burden to the intervenor" worsened over three consecutive order deltas (operator corrections and directions per order) | `npm run work-orders -- index` |
| DotLn-Angular | `main` at `48c7f8e` (#14, WO-028's merge), released as `DotLn Angular v0.10.0` at 15:09:43Z by the operator's release close (the close session's journal row at 15:08:30Z); the registered clone clean at it; no `wo-*` worktree; the catalog's 3,463 rows, 80 studied in three families, every study's text in the message system; the v0.10.0 tag on the remote | `git -C ../DotLn-Angular status`, `gh release list -R DylanBWood/DotLn-Angular`, `studies-summary.json` |
| WO-028's records | 63 decisions in the target's `docs/dotln/evidence/WO-028/decisions.md`; the journals of its verify and final-review sessions in the retained lane `docs/control/local/retained/WO-028/harness/`, their operator rows matched to the ignored captures by digest (18 of 20 verbatim; two the capture transcribed loosely) | the decisions file, the retained journals, the captures' digests |
| Core | `main` at `ccfba0df` (#276, WO-246 closed and released as v0.117.0); a `../DotLn-wo255` worktree, so WO-255 is in progress; no answer block was pasted today, so nothing of core's is reconciled | `git -C ../DotLn log`, `ls ..` |
| Usage | unknown at entry and exit: the role was unknown to the harness (above), `node scripts/harness.mjs usage` reports no dispatch, and the prompt hook's facts list every counter unavailable | the command, the hook's facts |

### What the releases ask an instance to read

**v0.117.0 (core WO-246).** The emitted `.claude/settings.json` allows the
two launchpad publish helpers without a host prompt; merging #58 was the
operator's decision to admit that, and the first use in this session was
denied by the host's classifier because the rule was not loaded (observed,
§Entry observations; the by-hand route served). The hook refuses a `gh pr`
or `gh issue` command naming no repository in this clone, whose `origin` and
`upstream` differ: every call here names `-R`, and the row that asked for a
`gh` default is settled on that refusal (§Register). The attribution lint
judges a line past its leading gitmoji: nothing here opens with one. The
finish's fetch is bounded at ten minutes: today's took seconds.

**v0.116.0 (core WO-254).** A zombie writer is dead and the two recovery
commands run from the refused session (none met today). A stopped Codex
dispatch releases its writer; a denied `worktree start` leaves nothing. An
unprefixed question is answered, not obeyed (the operator's `merged` was a
word, not a question). `plan start` writes the `Rules recorded` block and
`plan check` reads each named message's journal row; this pass is the first
to use it (D7). Codex restores the operator's messages across a compaction.
The three shell advisories stay in the journal. The spawn cap reads the
configured control root. The desktop-skill denials cover every documented
name. The control fold runs before a transition is written.

### The operator's words

| Item | Aim read | Disposition | Planner's inference |
| --- | --- | --- | --- |
| the dispatch line | a standard pass that takes the latest upstream, asked for in this session | #58 opened first, merged by the operator, finished on `main`; the planning branch from the updated `main` (D1) | none |
| item 1, WO-033 and WO-027 up | both at the front of the queue | the two as the first lane pair; WO-027 re-based to WO-028's merge and freed from the pair it waited on, its gap re-read and the title workflow added (D2) | that "up" means ahead of the WO-023/WO-024 pair, which was first; that the two may run beside each other |
| item 2, the reminder follow-ups | the scene features and the other items WO-028's sessions boarded, turned into orders and rules so they are not forgotten | WO-036 and WO-037 for the scene (D5), WO-038 for the reading at full size (D6), WO-035 for the mined text (D4), WO-034 for the reshape and its siblings (D3), the five verification rules written (D7), the rest disposed (§Register, §NoOps) | which reminders count: every WO-028 decision with a planning follow-up and the fourteen untriaged rows; the split of the scene work into geometry first and shooting over it; the sequence positions |
| the mid-turn message | coding standards as a dedicated, recurring pass; the app as the example for other Angular developers; the reshape agreed | WS-001 rule 31 and the operator record (the rule and the widened audience), with the message's journal row in the block; WO-034 sequenced ahead of the pair (D3) | that "occurs often" means one standards pass per planning pass over what landed since the last, ahead of the next feature order; the operator sets another cadence with a word |
| `merged` | the update may finish | `update --finish` ran on clean `main` | none |

### The reminders, read against the records

Every WO-028 decision that asked something of planning, read in the
target's `docs/dotln/evidence/WO-028/decisions.md` against the records it
names:

| Reminder | Where it went |
| --- | --- |
| D005, D006, D009 and `FUP-2c1a53924446e9dd`: shooting and bullets; pathfinding, obstacles and walls; the exact head-on blind spot of `avoid` | WO-036 (walls, obstacles, the tile graph, A*, following, avoidance with the head-on policy, the `grid` family) and WO-037 (shooting and bullets over that geometry); the dependencies D006 asked for are the split (D5) |
| D018 and `FUP-4074e73fddc1a963`: the research quality sample | WS-001 rule 27 and the operator record (D7) |
| D019 and `FUP-0878f70cba928b9c`: the rule of cool, scene-type orders, both directions | WS-001 rule 28 and the operator record (D7) |
| D020 and `FUP-38a529604503d7df`: the operator's full size | WS-001 rule 29 and the operator record (D7) |
| D021 and `FUP-dd62a5660d894ef0`: the pair's screenshot size | WS-001 rule 25 and the operator record's design-comparisons item (D7) |
| D024 and `FUP-191e65317f5e73f4`: the catalog at 3840 by 1620 | WO-038 (D6) |
| D036, D037, D053, D060 and their rows: the wall study, the drawing's marks, the guards, the reshape | WO-034, the first standards pass (D3) |
| D038 and `FUP-9c3d801c73d041b9`: the kit's review helper records Claude's identity for every worker | a request to core (item 3); the row deferred |
| D039 to D041, D044 and `FUP-277d3741530b7979`: the hard rule, the standing records that contradicted it, the mined text's ownership | WS-001 rule 9 rewritten, rule 30 added, the operator record's item, WO-035 (D4) |
| D043 and `FUP-ac85b05ea08a1dce`: `amend-order` refused a separate-track member | a request to core (item 4, repeating the 2026-11-04 block's item 6 with D043's evidence); the row deferred |
| D054 and `FUP-86db793258214c51`: a missing message renders its key | WO-035 (D4) |
| D055 and `FUP-b2ca88c7d6462f27`: work-level narration loading, 186 kB against 102 kB gzipped on a first reading | the loading unit stays the work (§NoOps); the three cleanups go to WO-034; the row deferred with the surrogate measurement as its reopening |
| D056 and `FUP-84dd7018fe2c47a7`: digits leading sentences in 15 stream studies | WO-034, which already edits both stream catalogs for D055's cleanups: the 48 messages reworded, the English only (D3) |
| D057 and D058: the target publish denied by the host's classifier, run by the operator by hand | a request to core (item 2); `FUP-2479f6d32b2396a8` re-disposed |
| D013: the gate share at two thirds, 4 GiB per task, permanent | already in `docs/control/budgets.json` since #57; nothing further |
| D004: the operator's early approval of budget and cap increases for WO-028 | applied within WO-028 (D007, D013, D033, D050); not a standing rule (§Rules recorded) |

## Orders filed and amended

- [WO-034](../../work-orders/WO-034-standards-pass-movement-presentations.md):
  Standards pass I: the first movement batch's twenty presentation modules
  reshaped with every output unchanged, the study guards tightened, the
  motion drawing's marks tidied, the wall study shown doing its avoidance,
  the work catalogs trimmed. Depends on WO-028 (merged). Sequenced third,
  after the WO-033/WO-027 pair and before the WO-023/WO-024 pair (D3).
- [WO-035](../../work-orders/WO-035-catalog-text-through-messages.md):
  every string on screen through the message system: the catalog's mined
  text as generated per-work message catalogs, the reading, shelf,
  contents, search and scene inspector through the translator, a missing
  message failing closed. Depends on WO-028 (merged); references the pair.
  Sequenced after the pair (D4).
- [WO-036](../../work-orders/WO-036-scene-walls-and-ways.md): walls and
  ways: walls and obstacles drawn on the field, a tile graph, A* and
  Dijkstra with the catalog's heuristics and cost functions as rail tools,
  path following with replanning and a no-route state, obstacle and wall
  avoidance with a deterministic head-on policy, geometry saved and
  replayed, the `grid` family and the A* study. Depends on WO-015 (merged);
  references WO-035. Sequenced after WO-035 (D5).
- [WO-037](../../work-orders/WO-037-scene-shooting-and-bullets.md):
  shooting and bullets over WO-036's geometry: a fire tool, bullets that
  walls stop, the firing solution and iterative targeting as aims, hits
  counted and shown, a knockout option, the rail's `fight` group. Depends on
  WO-036 (hard). Sequenced after it (D5).
- [WO-038](../../work-orders/WO-038-reading-at-full-size.md): the reading
  at the operator's full size, chosen through the paired comparisons at
  2080 by 1460 and 3840 by 1620. Depends on WO-019 (merged); references
  WO-035. Sequenced after WO-037 (D6).

Amended, each change bounded to what the records changed since its filing:

- WO-027: the base to WO-028's merge; WO-028 a hard dependency and the pair
  reference-only, so it runs first; the observed gap re-read at `48c7f8e`
  with every count holding; the title workflow added as a step, a criterion
  and a Design bullet, with its own pull request titled with a gitmoji and a
  subject alone; the sequence sentence (D2).
- WO-033: the sentence naming which passes already live under `passes/`.
- WO-023 and WO-024: the base to WO-028's merge; WO-028 a hard dependency;
  the migrated record and code shape in the Design, the executable entry's
  form, the message scope per work, `i18n:check` and the corpus test in
  criterion 2, the known issues (D3, D4).

Not amended, and why: the pass drafted amendments to WO-029 to WO-032 (the
base to WO-028's merge and the `concept-study-v1` sentence in place of the
closed-v0 one in their known issues) and to WO-018 (one sentence naming
WO-035's catalogs), then withdrew them before review, because the kit's
change-review helper inlines every planning document the branch changed
since its merge base, whatever `--since` names, under a 400,000-character
ceiling, and the branch's documents then measured 426 KB; the five files
carried 129 KB of text for a few sentences of change. The four research
orders are bound by WS-002 rule 7, which the final review of WO-028 already
rewrote to the current contract and this pass extended with the model
shape, and their step 1 fast-forwards to the target's `main`, which holds
WO-028's merge; their closed-v0 sentence is superseded by that rule, and the
next pass amends the four as a change of its own size. WO-035's known issues
carry the sentence WO-018 would have. D056's rewording went to WO-034
instead of WO-029 and WO-030. The ceiling is reported to core
(§Requests to core, item 8).

No existing order's criteria weaken. Each new order carries `Model:`,
three-role `Effort:`, `Cost:` with additions and removals, a dated observed
gap at the target's tip, a Design with rejected alternatives and their
axes, an execution plan naming a check per step, criteria whose last names
the declared gate and `npm run test:docs`, a Preflight line, non-goals and
operator-review assumptions. The five defect classes were screened: no
criterion's subject is a count, ceiling, cost, duration or token figure
(the figures are in Cost lines and in this document; WO-034's criterion 2
judges the shape audit's zero counts as the candidate's state, not a cost);
none reads `HEAD` or a commit range; each names where its input exists or
which step plants it (WO-037's base guard names the pin the pass after
WO-036 sets); none requires a host behaviour the order cannot produce
(WO-027's workflow run is read from the pull request's checks); and none
contradicts a non-goal. `npm run work-orders -- index --check` prints only
the two advisories the 2026-11-03 pass judged (WO-008 criterion 1, WO-016
criterion 5).

## Decisions

### D1. Take starter v0.117.0 first, on the operator's word in this session

The dispatch line asked for the latest upstream, so this is the session in
which the operator asked (the operator record's Starter updates item). The
two refresh commits past v0.115.0 were previewed from the detached worktree
(112 replaced, 3 added, 0 refused, no instance action), merged into
`chore/starter-update-v0.117.0` in one commit with no conflict,
regenerated and gated (four gates green in 0 h 1 min). The kit's own
publish helper was denied by the host's classifier in this session, where
its allow rule was not yet loaded, so the pass took the by-hand route the
kit names (the plain push and `gh pr create -R`), both admitted first try;
#58 was opened ready, the operator merged it, and `update --finish` ran on
clean `main`. The planning branch was opened from the updated `main`.

The two releases' Read before upgrading items are met as §What the
releases ask an instance to read states. The Git merge's refresh of
`CLAUDE.md`'s generated block and the one paragraph of
`AI-HARNESS-SECURITY.md` are kept: the block is what `harness emit`
reproduces, and the paragraph is the kit's rule this pass applies (D7).

Traps: goal substitution would count the update as the pass. The NoOp of
staying on v0.115.0 was declined because the operator asked, and because
v0.116.0's `Rules recorded` block and v0.117.0's title lint are what this
pass's rules and WO-027's workflow change rest on.

### D2. WO-033 and WO-027 first, as a pair; WO-027 freed from the pair it waited on

The operator asked that the two move up. Both were behind the WO-023/WO-024
pair; WO-033 was runnable (a launchpad order on v0.115.0 or later), and
WO-027 waited on the pair as a hard dependency because the batches write
into the documents it corrects. Read today at `48c7f8e`: WO-028's
migration already rewrote `catalog.md`, `conventions.md`, `scripts.md`,
`foundation-rules.md` and `docs/dev-reference/README.md`, and every count of
WO-027's observed gap still holds, so the order corrects the documents as
they now stand and a batch that lands later integrates the corrections.
WO-027 therefore depends on WO-028 (merged) and references the pair, and
the two orders form the first lane pair: disjoint repositories, no edge
between them. Starter v0.117.0's lint admits a gitmoji and a subject with no
conventional type, which fires `FUP-f85ede7a356345c5` (the target's title
workflow once the kit admits one); WO-027, the order that makes the gate
tools say and check what is so, takes the workflow change as a step, a
criterion and its own pull request's title, and WS-001 rule 20 says so.

Traps: naive interventionism would also pull WO-034 into the pair; it is a
code order on the same repository as WO-027 and runs third. NoOp of leaving
WO-027 behind the pair: declined, the operator asked, and the dependency it
waited on is no longer the reason it was written.

### D3. The standards pass: the operator's direction as rule 31, and WO-034 as the first

The operator's mid-turn message (journal row 2026-11-05T15:26:03Z) agrees
with FINAL-002 that a refactoring pass needs to occur, names the app the
pie-in-the-sky example for other Angular developers, accepts getting the
functionality in first, and refuses coding standards as an afterthought:
always a dedicated pass that occurs often. The reading: a standards pass is
an order of its own, not a step inside a feature or research batch; "often"
is read as once per planning pass, over the code the orders since the
previous one landed, ahead of the next feature order, because planning
passes are the cadence this fork already has and the operator can name
another with a word (an inference, named in §The operator's words).

Decision: WS-001 rule 31 states the cadence; the operator record carries
the direction in its words with the message's journal row (§Rules
recorded); WO-034 is the first standards pass, sequenced after the
WO-033/WO-027 pair and before the WO-023/WO-024 pair, so the next batches
copy a reshaped example and not the first batch's split presentations
(the operator's message 8 of 2026-11-04: a shape that entered once was
copied by every later batch). WO-034 carries what WO-028's reviews boarded
against the Movement work: the reshape (D060, the operator's route choice
at FINAL-002), the guards (D053), the drawing's marks (D037), the wall
study's demonstration (D036), D055's three cleanups and D056's rewording of
the stream catalogs' count-led sentences; every movement output unchanged,
proven by the production crawl before and after, and every reworded stream
sentence listed. WS-002 rule 6
makes a work's next research batch wait for the standards pass boarded
against it, which is what "gates the next movement batch" asked.

Rejected: a research-track member for the reshape (axis: the operator's
direction makes standards road work, with the operator's read of the diff
before final review); a parameter-count lint instead of a pass (axis:
D060's reason, a count invites the next mechanical split); folding the
reshape into the next Movement batch (axis: never an afterthought inside a
feature batch); sequencing WO-034 after the pair (axis: the pair would copy
the shape the pass exists to replace). NoOp of recording the direction
without an order: declined, the operator agreed with the final review that
the pass needs to occur. Reopen: the operator names another cadence, or a
standards pass finds nothing to change.

### D4. The hard rule reaches the mined text: WO-035, rule 9 and the operator record

The operator's directions at FINAL-001 (capture `f4f42e5c…`): there is a
hard rule that all of the text is in translations, and a string they can
see on screen is user-facing. WO-028's shared migration put the eighty
authored studies through the message system and left the mined catalog
text for the pass that owns the rule (D044). Read today: 3,463 rows carry
about 1.1 MB of English a reader sees (definitions 549 KB, provenance notes
146 KB, analog clauses 116 KB, places 257 KB, titles 80 KB), rendered on the
shelf, the contents, the reading, the search results and the scene's
inspector, none of it through Transloco; a catalog answered 200 but missing
a study's keys renders the keys (D054).

Decision: the rule as the operator stated it reaches the mined text, and
WO-035 lands it as generated per-work message catalogs derived from the data
files (rule 23's data stays data; the generator keeps data and messages
equal and a check refuses a stale catalog), the work as the unit of loading
(D042), a missing message failing closed (D054), and the scene's inspector
reading the same catalog. WS-001 rule 9 is rewritten to the operator's
scope and names the mined text as WO-035's with the state until it lands
(an order is not judged on it, the precedent being VER-003 and FINAL-002,
which passed WO-028 with the mined rows outside); the operator record
carries the direction; the catalog architecture's untranslated-data line
is gone already (WO-028-D063). WO-035 runs after the pair, because a scene
order's verifier would otherwise meet the inspector's mined definition
under the hard rule, and before WO-036.

Rejected: a recorded exemption for mined text (axis: the operator's words);
translating at mining time into the data files (axis: rule 23); a second
language now (axis: the architecture is the deliverable; the language is
the operator's to ask for). NoOp of leaving D044 open: declined, the rule is
hard and the standing records contradicted it until today. Reopen: the
operator narrows the rule to authored text, or the catalogs' transfer on a
first reading is measured too slow on the constrained surrogate.

### D5. The scene: walls and ways first, shooting over them

The operator's follow-ups during WO-028 (captures `91de02f4…` and
`fcb33759…`): shooting and bullets, then pathfinding, obstacles and walls,
with planning to identify the navigation, geometry and combat dependencies
and split the road orders where useful (D006), and the engine's exact
head-on blind spot deferred to the navigation order (D009). Read against
the scene at `48c7f8e`: the field has no geometry, the engine no graph,
search or path following, `avoid` returns zero for coincident projected
centres, the catalog's pathfinding chapter has 76 rows and no family draws
a grid (the 2026-11-04 pass's NoOp on the chapter's research).

Decision: two orders. WO-036 lands the geometry (segments and discs, drawn
on the field and listed in the text layer, edits as steps so replay holds),
the tile graph those block, A* and Dijkstra with the catalog's heuristics
and `path.cost`, path following with replanning and a visible no-route
state, obstacle and wall avoidance by ray and whiskers, the head-on policy
(each body to its own side by unit id, anti-symmetric), the `scene-v1`
contract, nine typed rows in a `ways` rail group, the `grid` study family
with the A* study as its first use, and the inspector's "read the study"
line (`FUP-592e538095eaead9`, fired because the order touches the
inspector). WO-037 lands shooting over that geometry: bullets as entities
that walls stop, the fire tool, the closed-form and iterative aims calling
the three WO-028 studies' mechanisms, hits, a knockout option, the `fight`
group. Combat depends on geometry (a wall that stops a bullet is the
interesting case D006 named), so WO-037 depends hard on WO-036 and its base
is set by the pass after WO-036 merges. Both are scene-type orders under
rules 25, 28 and 29, with their first pairs rendered at the operator's
sizes. The `grid` family opens the pathfinding chapter to the research
track (WS-002 rule 6).

Why the shapes and the graph are decided here: D006 asked planning to
decide them rather than assume; segments and discs cover the book's ray
examples and keep the tests simple, and the tile graph is the chapter's
first representation at the field's size. Rejected alternatives are in each
order's Design. NoOp of leaving the reminders as register rows: declined,
the operator asked that they be addressed and not forgotten. Reopen: the
operator wants shooting before walls (then WO-037 loses its wall stop and
runs first), or a navigation mesh.

### D6. The reading at the operator's full size: WO-038

VER-001 measured the reading at 3840 by 1620: a 686-pixel column between
about 830 and 880 pixels of empty space, the drawing at 686 by 248 (D024),
boarded for road planning because a research order could not decide a
layout. Under rule 29 the operator's sizes now judge every order, and the
reading is where the operator spends their time. Decision: WO-038 chooses
the layout through the operator's rounds at 2080 by 1460 and 3840 by 1620,
with the measure, the drawing's width and the drawing's place as the
variables, without relitigating WO-019's twenty-two rounds at 1440 and 360.
Sequenced after the scene orders. Rejected: folding it into WO-035 (a
migration with no visible change) or into the shell and board look
(candidate C1, another surface). Reopen: the operator says the current
layout is fine at their size.

### D7. The verification rules from WO-028's sessions, and what the kit's block can name

Five directions the operator gave during WO-028's verification and final
review asked to become standing rules: the research quality sample (D018),
the rule of cool for scene-type orders in both directions (D019), the
operator's full size (D020), the pair's screenshot size (D021), and the
rule that every string on screen goes through the message system with
every role reading record content against the rules rather than a brief
(D039 to D041). Each is written today as the rule in the scope the operator
gave it: WS-001 rules 27, 28, 29 and 30, rule 25's size and rule 9's scope,
and the operator record's items, each citing the capture digest and the
decision. The operator record's §When this record changes requires exactly
this: a direction given in a session is recorded by the next planning pass
as the rule, with its date and the captured message.

Starter v0.116.0's `Rules recorded` block names a rule's operator message
by its journal row, and `plan check` reads that row from
`docs/control/local/harness/<sessionKey>.jsonl`. The five directions'
rows exist, verbatim, in WO-028's retained lane
(`docs/control/local/retained/WO-028/harness/`: the verify session
`66c62f42…`, rows 2026-11-04T20:25:12Z to 20:54:23Z; the final-review
session `c08298dc…`, rows 22:45:43Z to 22:52:32Z), which the check does not
read, so a block entry for any of them would be refused as naming no
message. The block therefore names the one rule given in this session
(D3), and this section names the five with their retained rows so the
operator can read every new rule in one place and strike one by removing
it; core is asked to let the check read a closed order's retained lane
(§Requests to core, item 6). Not asking the operator to restate the five is
deliberate: they asked for the rules, and being asked to confirm what they
decided is what they refuse.

Rule 30 is the one inference among the five: the operator's message 8
(a shape that happened once copied by everyone) and D041's finding that
every role judged conformance to a brief are read as the rule that a reused
shape is judged by the rules and never by its precedent; it is named as the
planner's reading in §The operator's words and reopens on the operator's
word.

### D8. The sequence

WO-033 and WO-027 as the first pair (D2); WO-034 (D3); the WO-023/WO-024
pair, amended to the migrated shape and the reshaped example; WO-035 (D4);
WO-036 and WO-037 (D5); WO-038 (D6); then WO-016, WO-008, WO-017 and WO-018
in the order the earlier passes set, unchanged. WS-002's members keep their
separate track; WO-029 and WO-030 are runnable now on Codex, WO-031 and
WO-032 after the pair; no refill, four research orders being queued. The
pass before WO-016 activates still owes WO-016 its base and the receipt
012 known issues (`FUP-2ed0c79e62b53dd7`).

Traps: the road has grown by five orders ahead of WO-016, WO-008, WO-017
and WO-018; the operator moves any order with a word, as they did today,
and each new order names why it sits where it does. NoOp of filing the
scene orders at the end of the road: declined, the operator's "in case I
forget" asks for them where they will run, and WO-036 unlocks a chapter for
the Codex capacity the operator wants drained.

### D9. Words that are not rules, and the kit's behaviours observed

The operator's early approval of budget and cap increases (capture
`b36b777a…`, WO-028-D004) was given in WO-028's executor session and applied
there (D007, D013, D033, D050); it enters no standing document, because its
scope was that execution and because its session was a Codex executor on
v0.115.0, which journaled no operator rows. The process-health reopen
candidate (the intervenor trap worsening over WO-026, WO-028 and the
deltas between) counts the operator's eight directions and two fails on
their word during WO-028: that is the operator directing their verifier and
reviewer, which the rules of D7 now carry so the next order needs fewer;
no order reopens on it (§NoOps). Four kit behaviours are recorded for core
(§Requests to core): the publish helper denied by the host where its rule
was not loaded, the dispatch prefix hidden by a `/model` line, the review
helper's record of the worker's identity (D038) and `amend-order`'s refusal
of a separate-track member (D043).

## Register

The register was synced before the dispositions and the batch applied at
revision `7fa2a3d3…`, then once more at `7e1ac1ed…` when D056's row moved
from the withdrawn research-order amendments to WO-034 (the batches are
kept in ignored intake as `docs/intake/followups-apply-2026-11-05.json` and
`-b.json`). Twenty-one rows were disposed on the reminders, the update and
the orders filed, leaving 45 pending rows and none untriaged; the forty
untouched rows keep their state, read as this pass's scope touched them.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| FUP-0878f70cba928b9c (WO-028-D019, the rule of cool) | **settled** — WS-001 rule 28 and the operator record (D7). | The operator widens or changes the rule, or names an order type beyond scene-type. |
| FUP-4074e73fddc1a963 (D018, the quality sample) | **settled** — WS-001 rule 27 and the operator record (D7). | The operator changes the rule. |
| FUP-38a529604503d7df (D020, the operator's full size) | **settled** — WS-001 rule 29 and the operator record (D7). | The operator reports another window size. |
| FUP-dd62a5660d894ef0 (D021, the pair's size) | **settled** — WS-001 rule 25 and the operator record's design-comparisons item (D7). | The operator gives another size. |
| FUP-2c1a53924446e9dd (D005, D006, D009, the scene features) | **allocated** to WO-036 and WO-037 (D5). | The operator reorders the two or asks for a navigation mesh. |
| FUP-191e65317f5e73f4 (D024, the catalog at full size) | **allocated** to WO-038 (D6). | The operator says the layout is fine at their size. |
| FUP-f2fe0f5b3ede6609 (D060, the reshape) | **allocated** to WO-034 (D3). | The operator sets a different bar for presentation code. |
| FUP-18196fce63f48718 (D053, the guards) | **allocated** to WO-034 (D3). | A batch lands before WO-034 and its corpus test must be rerun at integration. |
| FUP-ead16d35dae7cde7 (D037, the marks) | **allocated** to WO-034 (D3). | A batch changes `motion.html` or `motion-labels.ts` first. |
| FUP-fe64fadae3ba9bae (D036, the wall study) | **allocated** to WO-034 (D3). | A batch changes the default run first. |
| FUP-84dd7018fe2c47a7 (D056, digits leading sentences) | **allocated** to WO-034, which edits both stream catalogs already (D3). | The operator prefers the digits, or asks for the rewording sooner. |
| FUP-86db793258214c51 (D054, a missing message fails closed) | **allocated** to WO-035 (D4). | The message loader changes before WO-035. |
| FUP-b2ca88c7d6462f27 (D055, narration loading per work) | **deferred** — the work stays the unit of loading (D042; §NoOps); the three cleanups D055 names are WO-034's. | A measurement on the performance guide's constrained surrogate shows the first reading slow enough to matter, or a batch grows a catalog materially. |
| FUP-9c3d801c73d041b9 (D038, the review helper's record) | **deferred** — a request to core, item 3 (D9); the file is the kit's. | A starter carries a record form that names the worker's host, model and effort, or core declines with a route. |
| FUP-277d3741530b7979 (D044, the mined text's ownership) | **allocated** to WO-035; the operator record and WS-001 rule 9 carry the rule (D4). | The operator narrows the rule to authored text. |
| FUP-ac85b05ea08a1dce (D043, the amendment binding) | **deferred** — a request to core, item 4 (D9). | A starter admits an execution amendment for a separate-track member, or a pass's judged horizon includes them. |
| FUP-592e538095eaead9 (the inspector's "read the study" link) | **allocated** to WO-036, which touches the inspector (D5). | WO-036 is withdrawn, or an earlier order touches the inspector. |
| FUP-f85ede7a356345c5 (the title workflow without a type) | **allocated** to WO-027, fired by starter v0.117.0's lint (D2). | The workflow is changed by another order first. |
| FUP-2479f6d32b2396a8 (the push refusals; WO-246) | **deferred** — v0.117.0 carries WO-246's allow rules for the two launchpad helpers; the update helper was denied by the host in this session, where the rule was not yet loaded, and the by-hand route served; the target publish (`worktree publish --target-worktree`) has no rule and was denied in WO-028's verification (D057), run by the operator (D058); a request to core, item 2. | A fresh session's helper publish is admitted or refused, or a starter carries an allow rule for the target publish. |
| FUP-49dda4781fa64b25 (the `gh` default) | **settled** — v0.117.0's hook refuses a `gh pr` or `gh issue` command naming no repository in this clone, and the helpers name `origin`; the gap the row guarded is closed without the operator's tool setting; every call today named `-R`. | A `gh` call reaches the parent repository. |
| FUP-038033632f4116e6 (the close's removal step) | **deferred** — WO-028's close ran on v0.115.0 today in the operator's own session; its removal step's time is recorded nowhere this pass can read (the control segment ends at the records commit and the close session's journal holds no duration row). | A close prints its removal step's time where a pass can read it, or a finish stalls. |

Rows read and left as they stand, their conditions not fired:
`FUP-2ed0c79e62b53dd7` and `FUP-35187266d29e00dc` (the pass before WO-016
activates), `FUP-dfb896b07eb669e5` and `FUP-cc72e6b187cbb0ab` (the shell's
and the board's look; WO-038 is the reading's), `FUP-e9b95694a5de071e` (the
crowd's rest under priority steering; the operator's play has not said a
rule feels wrong), `FUP-b7e52566cc93f953` (Babylon.js), `FUP-0fb531a975308a81`
(the search controls; WO-018), `FUP-d97544c4254dadd4` (the scope of
`check:scripts`; WO-027 leaves it as filed), `FUP-4091de8ba4313b4c`,
`FUP-2232a29f1061494f`, `FUP-8c4dcd0be9399981`, `FUP-b948f8094f0419e5`,
`FUP-290ea887a40dcd8e` and `FUP-f46cff6dba92f65a` (core's WO-244, WO-255
and WO-257; v0.117.0 carries none), `FUP-3777717897701f29` (the fork's
dispatch-bound values; WO-028's breaches were authorized increases).

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-115-0-research-track-2026-11-04.md",
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
| Per-model narration loading (D055) | D042 made the work the unit of loading; the measured cost is 84 kB gzipped more on a work's first reading, about 0.4 s on the guide's constrained surrogate by arithmetic, once per work; nothing is observed slow. Evidence: `docs/evidence/WO-028/ver-003/README.md` §What a first reading loads. | A measurement on the constrained surrogate shows a first reading slow enough to matter, or a batch grows a catalog materially. | A reader opening one study pays only that study's narration. |
| A parameter-count lint or a lower line ceiling | D060 rejected both: a count invites the next mechanical split; the standards pass reads. Evidence: WO-028-D060's rejected options; FINAL-002 F18. | A standards pass finds the same split twice. | A rule catches a split before a pass reads it. |
| A research-track member for the reshape | The operator's direction makes standards road work read by them before final review. Evidence: the message of 2026-11-05 (journal row 15:26:03Z). | The operator asks for cleanups to run on Codex without their read. | Codex capacity absorbs the reshapes. |
| Shooting before walls, or one scene order for both | A wall that stops a bullet is the case D006 named, and one order of 24 hours of executor work is twice what the rounds admit. Evidence: WO-028-D006's reopening observation; the two orders' Cost lines. | The operator wants shooting first. | The operator plays with bullets before walls exist. |
| A navigation mesh or polygon obstacles | The tile graph is the chapter's first representation at the field's size; segments and discs cover the book's examples. Evidence: the catalog's Chapter 4 rows; `scene.md`. | A scene needs a mesh, or the operator asks. | The field has rooms and corridors a grid wastes cells on. |
| A pathfinding research batch now | WS-002 rule 1: no family draws a grid until WO-036 lands one. Evidence: the 2026-11-04 pass's NoOp; the chapter's 76 rows. | WO-036 merges (then the refill rule cuts the batch). | The chapter's 76 rows become research work. |
| The shell's and the board's look (candidate C1) with the reading's | Different surfaces; the shell and the board adopt the direction in the order that next touches them (WO-016). Evidence: `FUP-dfb896b07eb669e5`. | WO-016's pass, or the operator asks for the shell at their size. | One order carries every surface's look at the operator's sizes. |
| A second language in WO-035 | The architecture is the deliverable; the language is the operator's to ask for. Evidence: the operator's words name translations as the rule, not a language. | The operator names a language. | A second catalog proves the keys. |
| Recording the budget pre-approval as a standing rule | Given for WO-028's execution and applied there; its session journaled no operator rows, so no block entry could name it, and the operator's correction of 2026-11-03 asks that a direction enter the record in the scope given. Evidence: WO-028-D004; capture `b36b777a…`. | The operator says budget increases need no approval in general. | An executor raises a bound without asking. |
| Reopening an order on the intervenor trap's reopen candidate | The three worsening deltas are the operator's directions and fails during WO-028, now carried by rules 27 to 30 so the next order needs fewer; no order's text caused them. Evidence: `npm run work-orders -- index`'s process health; WO-028-D018 to D022, D039. | The next closed order's deltas worsen again under the new rules. | The count falls because the rules were read, not because the operator stopped directing. |
| Restating the five 2026-11-04 directions to the operator so the block could name them | Being asked to confirm what they decided is what the operator refuses; the directions, the decisions and the retained journal rows are the provenance (D7). Evidence: the operator record §What the operator does not want. | Core says a retained row is admissible, or the operator strikes a rule. | Every rule in the block has a checkable row. |
| Setting the `gh` default repository | The kit's refusal and the helpers close the gap (§Register). Evidence: v0.117.0's Read before upgrading. | A `gh` call reaches the parent. | A bare `gh pr` resolves to the fork. |

## Sequence

WO-033 and WO-027 enter as the first lane pair; WO-034 follows alone; the
WO-023/WO-024 pair keeps its place behind it; WO-035, WO-036, WO-037 and
WO-038 follow one at a time; WO-016, WO-008, WO-017 and WO-018 keep their
relative order after them. WS-002's members stay a separate track with no
sequence entry. What the operator sees after each order lands: after
WO-033, nothing on screen, a planning root that holds its standing
documents and record directories, a features page that says desktop
control is off by their choice, and a status read without a warning; after
WO-027, CI's board count that counts a marker wherever a defect sits, a
`check:scripts` that fails on a missing or stale row, a title workflow that
leaves a gitmoji-and-subject title as written, and reference documents
whose command lists match the gate; after WO-034, nothing new on screen,
the first movement batch's code reading as the example and the wall study
showing its avoidance; after WO-023 and WO-024, forty more studies under
Tools with the `states` and `relations` families; after WO-035, nothing
changed on screen, every string of the catalog arriving through the message
system and a missing one a visible failure; after WO-036, walls and
obstacles they draw on the field, a squad routing around them and
replanning, a no-route state they can read, and the A* study stepping its
search; after WO-037, units firing at a target, bullets stopped by walls, a
moving target led and hit, a knockout; after WO-038, the reading using
their full screen; after WO-016, the machinery view; after WO-008, login
and permissions; after WO-017, the twin's first lane; after WO-018, the Art
of War toys on the shelf. After each research order, twenty more studied
concepts in its work's landed family, and after WO-036 the pathfinding
chapter joins AI for Games' drawable rows.

## Write-backs

- The operator record: §Who the operator is widened to the pie-in-the-sky
  example for other Angular developers (journal row 15:26:03Z); §How the
  operator directs a session, the design-comparisons item, gains the pair's
  size (capture `cc1746dc…`); §What the operator wants gains five items
  (every string on screen in the message system, capture `f4f42e5c…`;
  coding standards as a dedicated pass, the journal row; research read for
  quality, the rule of cool and the operator's full size, capture
  `01ddf878…`); §DotLn-Angular's code gains beautiful, efficient code
  (captures `f4f42e5c…` and `180dfe12…`). Nothing else in the record
  changed today.
- WS-001: the house-rules preamble; rule 9 rewritten to the operator's
  scope with the mined text named as WO-035's; rule 20 under v0.117.0's
  lint; rule 25's pair size; rules 27 to 31 added; the outcome sentence;
  the member table (WO-023, WO-024 and WO-027's bases; WO-034 to WO-038);
  §The app and its sub-apps (WO-028 landed; the table's new rows); the
  delivery states; the workstream block's members and edges (the pair's
  edges to WO-027 reference-only).
- WS-002: rule 6 (a work's next batch waits for the standards pass boarded
  against it; the pathfinding chapter after WO-036); rule 7 (the model
  shape); the member table's note that the target's `main` holds WO-028's
  merge; WO-028's delivery row closed and released.
- `docs/repositories/dotln-angular.md`: the facts table (last reviewed
  source `48c7f8e`, #14, 2026-11-05; `DotLn Angular v0.10.0`), eighty
  studied concepts, the release table's v0.10.0 row.
- `docs/planning/sequence.md` (D8); the idea ledger's registration heading;
  the generated work-order index and history page; the follow-up register
  (the batch above).
- WO-034 to WO-038 filed; WO-027, WO-033, WO-023 and WO-024 amended
  (§Orders filed and amended).
- No budget, ceiling or baseline is raised; `docs/control/budgets.json` is
  unchanged (its gate share of two thirds arrived with #57).

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[
  {
    "rule": "Coding standards are a dedicated pass that occurs often: each planning pass files or sequences a standards pass over the code the orders since the previous one landed, ahead of the next feature order, reading it as the pie-in-the-sky example other Angular developers are meant to copy; getting the functionality in first is understood inside an order, never across the road (WS-001 rule 31; WO-034 is the first).",
    "document": "docs/workstreams/WS-001-dotln-angular.md",
    "section": "House rules",
    "message": {
      "sessionKey": "8f46027b79f68b47de71e398af8881b64b72fe3cc5458b183ef1b1f3a5976ef2",
      "recordedAt": "2026-11-05T15:26:03.216Z"
    },
    "captureDigest": "sha256:4d21fba1ced2decdbfa1a96d947c802d4090948955eb7e30130780eac3c5c532"
  },
  {
    "rule": "Coding standards as a dedicated pass that occurs often: the operator agrees with WO-028's final review that a refactoring pass needs to occur; functionality first is understood, but coding standards are never an afterthought.",
    "document": "docs/operator/README.md",
    "section": "What the operator wants",
    "message": {
      "sessionKey": "8f46027b79f68b47de71e398af8881b64b72fe3cc5458b183ef1b1f3a5976ef2",
      "recordedAt": "2026-11-05T15:26:03.216Z"
    },
    "captureDigest": "sha256:4d21fba1ced2decdbfa1a96d947c802d4090948955eb7e30130780eac3c5c532"
  },
  {
    "rule": "DotLn-Angular is meant to be the pie-in-the-sky perfect example for other Angular developers, so the work has an audience beyond the operator.",
    "document": "docs/operator/README.md",
    "section": "Who the operator is",
    "message": {
      "sessionKey": "8f46027b79f68b47de71e398af8881b64b72fe3cc5458b183ef1b1f3a5976ef2",
      "recordedAt": "2026-11-05T15:26:03.216Z"
    },
    "captureDigest": "sha256:4d21fba1ced2decdbfa1a96d947c802d4090948955eb7e30130780eac3c5c532"
  }
]
```

<!-- dotln-rules-recorded:end -->

The block names the three rules written from this session's message (D3).
Five more standing rules were written today from directions the operator
gave in WO-028's verify and final-review sessions, whose journal rows live
in the closed order's retained lane, outside the check's reach (D7); each is
listed here with its row so the operator reads every new rule in one place
and strikes one by removing it from its document:

| Rule | Document and section | The operator's message (retained lane `docs/control/local/retained/WO-028/harness/`) |
| --- | --- | --- |
| Research is read for quality (rule 27; the record's item) | WS-001 §House rules; the operator record §What the operator wants | session `66c62f42…`, rows 2026-11-04T20:25:12Z (digest `27072fdc…`), 20:29:43Z (`d77fbaf7…`) and 20:30:18Z (`dc5f0edf…`); capture `01ddf878…`; WO-028-D018 |
| The rule of cool, scene-type orders, both directions (rule 28; the item) | the same | session `66c62f42…`, rows 20:34:03Z (`bcc056cd…`), 20:37:13Z (`969d6d3f…`) and 20:38:57Z (`885cb1b4…`); capture `01ddf878…`; WO-028-D019 |
| The operator's full size (rule 29; the item) | the same | session `66c62f42…`, rows 20:46:11Z (`a199980f…`), 20:48:44Z (`d88a874b…`) and 20:50:18Z (`078b8bc5…`); capture `01ddf878…`; WO-028-D020 |
| The pair's screenshots at about 2080 by 1460 (rule 25; the design-comparisons item) | WS-001 §House rules; the operator record §How the operator directs a session | session `66c62f42…`, row 20:54:23Z (`d8e41286…`); capture `cc1746dc…`; WO-028-D021 |
| Every string on screen in the message system, and rules over precedent (rules 9 and 30; the item; beautiful, efficient code) | WS-001 §House rules; the operator record §What the operator wants and §DotLn-Angular's code | session `c08298dc…`, rows 2026-11-04T22:45:48Z (`3ea06bb8…`), 22:46:39Z (`e023f0e3…`), 22:47:37Z (`3e48fe9f…`), 22:49:02Z (`c22779a4…`), 22:50:42Z (`61bb10dc…`) and 22:51:48Z (`0137a60c…`); capture `f4f42e5c…`; WO-028-D039 to D042; the code direction of 2026-11-05 in the Codex repair session, capture `180dfe12…`, with no journal row |

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.117.0

From DotLn-Enterprise-Starter's 2026-11-05 planning pass, docs/planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md. These are the fork's findings, not new operator direction.

1. Starter v0.117.0 is taken (#58), on the operator's word in the dispatch of that session. Preview 112 replaced, 3 added, 0 refused, no instance action; one merge, no conflict; the four gates green in 0 h 1 min; update --finish in seconds. The Git merge also refreshed CLAUDE.md's generated block and the one AI-HARNESS-SECURITY.md paragraph, which the fork kept. Nothing asked.

2. Observation on WO-246's allow rules: in the session that took the update, node scripts/launchpad.mjs update --publish was denied by Claude Code's auto-mode classifier as an external write, because the emitted settings with the new rule are read at session start; the plain git push and gh pr create -R were admitted first try, as on 2026-11-04. Expected from your Read before upgrading; recorded so the first live observation exists. Ask: the target publish (node scripts/worktree.mjs publish WO-NNN --target-worktree --draft ...) has no allow rule and was denied by the same classifier in WO-028's verification (the fork's WO-028-D057; the operator ran it by hand, D058); consider a third rule for it, or say why not.

3. Ask (the fork's WO-028-D038): scripts/lib/review-worker.mjs recordAgentReview refuses --host, appends --host claude and takes its pins from the claude-cli-print transport, so a report returned by a Codex worker is filed naming Claude's host and model, and a target order's record binds the launchpad's working tree rather than the target tree the worker judged. Reproduction: run a non-Claude worker's returned report through npm run worker -- record and read the host, model and reviewed-tree lines. Rule asked: the record carries the worker's actual host, model and effort, or unknown when nobody supplied them, and a target order's record names the target tree.

4. Ask, repeating item 6 of the 2026-11-04 block with evidence (the fork's WO-028-D043): npm run plan -- amend-order refused an operator-authorized expansion of WO-028, a separate-track research order, because the latest judged horizon lists only the sequenced orders; the executor recorded the authorization in its decisions and proceeded under the ordinary planning check. Ask: include separate-track members in the judged subject, or provide a supported execution-amendment binding for an authorized active order outside that horizon.

5. Observation: when a /model command runs in the same prompt as a planning: dispatch, the prompt hook reads the command's output as the first content line and journals the dispatch unclassified with no prefix; the session then has no harness role (outside-write grants absent, usage unmeasurable). Ask: skip a local-command block when reading the dispatch line, or say the operator should dispatch in a message of its own.

6. Ask on WO-254's Rules recorded block: a standing rule given to a closed order's verifier or final reviewer has its OperatorMessageObserved row in that order's retained lane (docs/control/local/retained/WO-NNN/harness/<sessionKey>.jsonl), which checkRulesRecorded does not read, so the next pass cannot name it in the block without asking the operator to restate it. The fork wrote five such rules today from the captures and the decisions and listed their retained rows in prose beside the block. Ask: let the check read a retained lane when the entry names the order, or admit a decision reference as a rule's provenance.

7. For your information: the operator directed that coding standards are a dedicated pass that occurs often; the fork files one per planning pass (WS-001 rule 31) and the first, WO-034, reshapes what WO-028's final review boarded. No kit change asked.

8. Ask on the change-review helper (scripts/lib/review-worker.mjs, runChangeReview): with --subject planning the brief inlines every planning document and order the branch changed since its merge base with main, whatever --since names, under the 400,000-character ceiling of change-review-protocol (profile-refused: change review brief). A pass that files five orders and amends nine measured 426 KB of such documents and could not be reviewed until it withdrew small amendments to five orders (129 KB of inlined text for a few sentences). Ask: inline only the documents --since bounds, or the diff of a modified document rather than its whole text, or raise the ceiling; and let the refusal print the measured size.
```

## Process cost

Model and effort: Fable 5.1 at `max`, operator-selected (the session's
`/model` line). Usage at entry and exit: unknown (the harness's role was
unknown, `node scripts/harness.mjs usage` reports no dispatch, and the
prompt hook's facts list every counter unavailable). Subagents: budget 20
(`subagentCap`); the plan stated before the first spawn: three Codex review
workers through `npm run worker -- review --host codex` (one per brief,
under the planning subject), one recheck round if a blocking finding is
repaired, one background `dotln-worker` refuter through the direct route,
and one supplementary Codex goal review over the research orders this pass
amended and the sequence's new orders' assumptions, each launched once:
five to six uses, no re-task, no descendant. Spent: PROCESS_COST_PLACEHOLDER
Wall-clock of the pass's commands: the preview 268 ms; the update's four
gates 0 h 1 min; `update --finish` seconds; `plan start` under 0 h 1 min;
the index and the register sync seconds; the reviews and the refuter in
§Validation. Against the NoOp of doing nothing: the operator's two asks and
their reminders are orders and rules the next session can run, the update
is on `main`, and the first standards pass stands where the next batches
will copy it.

## Validation

**Independent order reviews.** The operator record's three reviews ran as
Codex workers (`gpt-6.1-sol` at `max`, pinned on the command line, no
readback) through `npm run worker -- review --kind <kind> --host codex
--subject planning --since 926270bb` under the lane `planning-2026-11-05`,
round 1, over the change since `926270bb` at tree `1c7f6cdc`, launched
together and retained in the ignored reviews lane: the criteria adversary
0 h 10 min, 2,630,250 tokens, 6 findings (2 blocking); the design improver
0 h 7 min, 1,615,692 tokens, 4 (0 blocking); the consistency reviewer
0 h 15 min, 3,959,158 tokens, 6 (1 blocking); all by the
codex-result-envelope, with the effective effort unknown. Self-review:
found 16 (10 distinct); fixed 10; recorded 0. No recheck round ran: every
repair is order text, the precedent of the 2026-11-03 and 2026-11-04 passes
for documentation-only repairs under product 07's ladder, and the refuter
judged the repaired text. Two launch rounds before these returned no
worker: the first because the planning brief, which inlines every planning
document the branch changed since its merge base, measured over the kit's
400,000-character ceiling (§Orders filed and amended; §Requests to core,
item 8), and the second because the helper reads a planning branch and the
checkout was detached at an intermediate commit; both are counted as uses.

| Finding | Disposition |
| --- | --- |
| Criteria F1 (blocking, WO-027 criterion 7) | Fixed: the criterion keeps the title workflow's three local test cases; the live workflow run over the order's gitmoji-and-subject title is the final reviewer's obligation read from `preview-pr.json`, because the draft opens after verification passes. |
| Criteria F2 and design F3 (blocking, WO-036 criterion 3) | Fixed: the head-on policy takes one normal in world coordinates (the perpendicular of the lower-to-higher id offset, or the world x-axis when the bodies coincide at rest) and the two corrections are opposite in world space; the regressions assert that the pair's separation grows and that no later frame overlaps. |
| Criteria F3 and design F4 (WO-036 criteria 1 and 2) | Fixed: one clearance contract for the graph, the smoothing and the physics (a swept-unit test on every edge and shortcut, no corner cutting, the same test for the stop and the rays), a replan when the geometry stops a unit on its path, and thin-wall and diagonal-corner regressions in step 3 and criterion 2. |
| Criteria F4, design F1 and consistency F2 (WO-037 criteria 4 and 9) | Fixed: both aims are new mechanisms of the engine's `aiming.ts`, which imports nothing outside the engine (rule 15, the module-boundary lint); criterion 4 greps for no feature import and names the lint and the spec. |
| Consistency F3 (WO-037 criterion 2) | Fixed with the same change: the three WO-028 studies' mechanisms (gravity arcs to a fixed point, an angle search under gravity, no target velocity) are named as what they are and left unchanged; the order no longer claims they implement the scene's intercept or lead. |
| Criteria F5 and design F2 (WO-034 criterion 2) | Fixed: the 70-line count is a diagnostic; functions at 70 lines or more carry the executor's recorded cohesion judgment, the positional-parameter and `valueN` counts go to zero, and the 80-line ceiling holds through the lint. |
| Criteria F6 and consistency F5 (WS-001 rule 25; WO-023 and WO-024) | Fixed: both orders' Design, step 3 and criterion 8 render the pair at about 2080 by 1460 and 360, and criterion 1's screenshots add the operator's sizes (rule 29). WO-016, WO-008, WO-017 and WO-018 keep their 1440 wording until the pass before each activates; rules 25 and 29 bind them meanwhile. |
| Consistency F1 (blocking, the generated index) | Fixed: `npm run work-orders -- index` regenerated after the research-order amendments were withdrawn; `index --check` passes with the two standing advisories. |
| Consistency F4 (WO-036 criterion 6) | Fixed: the `grid` family is a shape change to the closed v1 family enum, so WO-036 lands `concept-study-v2` (the enum extended and nothing else), the loader, `VisualFamily` and `check-studies.mjs` accepting v1 and v2, the negative control refusing a v1 record that names `grid`, and the eighty v1 records unchanged; named in the Cost, the Design, step 10, criterion 6 and the known issues. |
| Consistency F6 (WO-038 criterion 3) | Fixed: the sweep is a new inventory-driven evidence helper that drives each family's controls and asserts coverage, because VER-001's script enumerates `studies/aifg/` only; the historical script stays. |

**Independent refutation.** REFUTATION_PLACEHOLDER

**Document gate.** GATE_PLACEHOLDER

Outcome against the dispatch: OUTCOME_PLACEHOLDER
