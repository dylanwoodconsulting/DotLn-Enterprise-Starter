# standard pass v0 118 0 core answers — 2026-11-06

## Dispatch and capture

The operator dispatched `planning: standard planning pass + get latest
upstream +` with one item, `1) core response:`, followed by the answer block
core's planning pass of 2026-11-06 drafted for them to paste (core's answers
to this fork's blocks of 2026-11-04 and 2026-11-05). Two words followed
mid-turn: a bare `planning:` at 19:59:28Z, while the session read the
records, and `merged` at about 20:10Z, after the session said update #62 was
open. The dispatch, the block and the two words are captured verbatim in
ignored intake at `docs/intake/notes/planning-2026-11-06.md`, SHA-256
`5b9d2c6311d59fb6bc59d416b330e3be052333fff55abce82a6d345c1a3207cc`. Received 2026-11-06T19:52:35Z (prompt-hook time) in Claude
Code 2.1.319, Fable 5.1 at `max`, operator-selected (the session's `/model`
line). The dispatch line names the update, so this session is the one in
which the operator asked for it (D1); it names no worker option, so the
Claude workers run as `dotln-worker`.

The host observation of 2026-11-05 repeated: the `/model` command's output
preceded the pasted block in the same prompt, so the prompt hook journaled
the dispatch unclassified with no prefix (row 2026-11-06T19:52:35.218Z,
digest `df22b458…`, 4,307 bytes including the host's command block) and the
session had no harness role, no outside-write grant and no usage standing
until the operator's bare `planning:` at 19:59:28Z, which the hook read as
the dispatch and resolved the role planner, as core's answer (block of
2026-11-05, item 5) says it would until WO-257 step 11 lands. The pasted
block is core's session's text and not the operator's words; only the
dispatch line, the item label and the two later words are the operator's.

This is document-only planning. It takes starter v0.118.0 on the operator's
word, reads core's fourteen answers against the records they name, retires
WO-033 and WO-027 from the sequence as closed, re-bases the five orders that
can activate next on WO-027's merge, extends the first standards pass to the
code that landed since the previous pass, records one standing direction the
operator gave in core's session, corrects one stale sentence of the operator
record, disposes ten register rows, files no order, activates nothing and
leaves its pull request for the operator's merge. The aim read from the
operator's message, stated before acting: take the update; reconcile core's
answers so the fork's records say what stands and what waits for WO-257;
and run the ordinary standard pass over what closed since 2026-11-05.

## Readings

### Entry observations

| Subject | Observation | Source |
| --- | --- | --- |
| Launchpad | `main` at `91fc092` at the dispatch (#61, WO-027's records), clean; one writer, this session; no order worktree; starter v0.117.0; `Launchpad v0.3.5` published 2026-11-05T18:57:50Z by WO-033's close | `git status`, `node scripts/harness.mjs writer --show`, `UPSTREAM.md`, `gh release list -R dylanwoodconsulting/DotLn-Enterprise-Starter` |
| Upstream | one refresh commit past v0.117.0 in the starter repository: `e15cf02` (v0.118.0, core WO-255, reviews find what the complete run finds, released 2026-11-06T01:41:58Z); fetched into `refs/upstream-releases/v0.118.0` with no tags | `git fetch --no-tags upstream refs/tags/v0.118.0:refs/upstream-releases/v0.118.0`, `gh release view v0.118.0 -R DylanBWood/DotLn` |
| The pass's own error | the session's first fetch was `git fetch upstream --tags`, which brought the starter's 38 tags (v0.85.0 to v0.118.0) into the clone's tag namespace; the kit guide says to fetch plain or into a non-tag ref because the starter's tags are not this instance's release baseline; the 38 were deleted before any release command ran (`git tag -d`, each an ancestor of `upstream/main` and none on `origin`, whose 16 tags are the launchpad's own) and `remote.upstream.tagOpt --no-tags` is now set as the guide instructs | `git tag -l`, `git ls-remote --tags origin`, `docs/KIT.md` §Taking upstream updates |
| The preview | from the detached worktree at `refs/upstream-releases/v0.118.0`: 67 kit files replaced, 3 added (`.codex/agents/dotln-worker-astra.toml` and the two WO-255 role baselines), 0 removed, 0 refused, 1,036 unchanged; build snapshot `fnv1a64:78861e409ef45107` to `fnv1a64:4b2f168bcfab3e2f`; no instance action declared; 326 ms under the bounded wrapper | `node .runtime/upstream-preview/scripts/launchpad.mjs preview --from refs/upstream-releases/v0.118.0` |
| The update | one merge commit (`a61f313`, no conflict); `npm ci`; `harness emit` 43 surfaces (one more than v0.117.0's 42: the Codex Astra agent) with no drift; the lineage index and the features page unchanged; the work-order index regenerated (`c1e2580`); no instance seed changed (`CLAUDE.md`, `AI-HARNESS-SECURITY.md`, `README.md`, `.gitignore`, `dotln.config.json` as `main` had them) | the merge, the commands on the branch, `git diff --stat main..HEAD` |
| The gates on the update branch | `harness check` 43 surfaces; `launchpad verify` 1,106 kit files at `772979ea`; `npm test` 7 passed; `npm run test:docs` 14 passed; 0 h 1 min for all four (20:04:48Z to 20:05:58Z) | the gate log in the session scratch |
| Pull request #62 | opened by the kit's helper, `node scripts/launchpad.mjs update --publish`, admitted with no host prompt on the first try: this session started after v0.117.0's rules were emitted, which settles the 2026-11-05 observation that the rules are read at session start; the operator merged it at 20:10:05Z (`eb34636`) and said so | the helper's output, the merge watcher, the operator's word |
| The finish | `node scripts/launchpad.mjs update --finish` on clean `main`: fetched `origin`, fast-forwarded `main` to `eb34636`, emitted 43 surfaces, bootstrapped (one preparation step); no stall and no manual route | the command's output |
| `plan start` | the branch `planning/2026-11-06-standard-pass-v0-118-0-core-answers` and the eleven-heading skeleton, with an empty `Rules recorded` block and no red tag carried; failures 0 h 0 min, reader scores 0 h 0 min, conditions 0 h 0 min, census 0 h 0 min, prune 0 h 1 min (803 candidates, 4,021,383,451 bytes, 803 removed, 656 retained, remaining 0), branch 0 h 0 min | `npm run plan -- start standard-pass-v0-118-0-core-answers` |
| The failure feed | the window since receipt 021 (2026-11-05T16:57Z) holds WO-027's cycle: 1 failed verification (VER-001, two documents named a launchpad repository that does not exist), 0 failed final reviews, 1 repair (the one long phase, 0 h 27 min), 2 orders made ready, 1 correction, 14 amendments with 6 withdrawn (the 2026-11-05 pass's research-order round), 0 off-ramps, 0 host denials, 2 local release closes (WO-033, WO-027); final-review escapes 10 over 11 reviews; the record holds 7 failed verifications, 3 failed final reviews and 10 repairs; each failed report's cause is in its closed order's record and none recurs in an open order: nothing to route | `npm run plan -- failures` |
| Conditions | 0 holding, 0 unknown; 482 decision conditions and 209 register rows not evaluated by the mechanical read (1.0 s); 16 logical CPUs, no lane held; none fired by an order's lifecycle event | `npm run plan -- conditions` |
| Register | 209 rows, 50 pending at entry (44 deferred, 2 needs-review, 4 untriaged, the four being WO-027's follow-ups); ten rows disposed in §Register | `npm run plan -- followups --export` |
| Documents | 78 standing, 530 record, 10 generated; no red tag; 28 unread over the five-release window (34 of 59 sessions observed; a lower bound with Codex unobserved); reader scores not due and no profile declared | `npm run plan -- documents`, the start report |
| Issues | no open issue on the fork's repository | `gh issue list -R dylanwoodconsulting/DotLn-Enterprise-Starter` |
| Process health | the index prints 2 budget breaches, both the kit's router skill at 17,024 bytes against the fork's 16,384-byte cold-start ceiling (`.claude/skills` and `.agents/skills`, unchanged edition to edition; core's v0.118.0 notes board six such roots as its own follow-up), WO-027's 97,154,668 tokens under an unset token limit, a first verification failed in 4 of the last 8 closed orders, and one reopen candidate: the trap "seeking the wrong goal", a machinery share of 0.663 that rose 0.127 over three consecutive order deltas (§NoOps) | `npm run meta -- --plan-cost`, `npm run work-orders -- index` |
| DotLn-Angular | `main` at `d7d842d` (#15, WO-027's merge at 19:42:06Z), released as `DotLn Angular v0.10.1` at 19:44:24Z by the operator's release close (the close session's journal, dispatch 19:42:58Z, stop 19:44:27Z); the registered clone clean at it; no `wo-*` worktree; the merge changed twenty-one files, none under `apps/` or `libs/` | `git -C ../DotLn-Angular log`, `gh release list -R DylanBWood/DotLn-Angular`, `git diff --name-only 48c7f8e..d7d842d` |
| Core | `main` at `be6519308` (#278, the 2026-11-06 pass whose answers were pasted); WO-257 in execution (a `../DotLn-wo257` worktree on `wo-257`) | `git -C ../DotLn log`, `git -C ../DotLn-wo257 branch --show-current` |
| Usage | at the role's resolution (20:00:20Z): 419,456 tokens (34 input, 384,655 cached, 29,100 cache-write, 5,667 output) by the transcript counter, scope dispatch; subagents 0 of 20; nothing measurable before 19:59:28Z | `node scripts/harness.mjs usage ad1f20c1-cf48-4c01-8e46-15809b7fd545` |

### What the release asks an instance to read

**v0.118.0 (core WO-255).** `npm run worker -- record` declares mixed text
with `--format prose|json` and takes `--host`, `--model`, `--effort` and
`--tree` for what ran and what it reviewed (the usage line on the updated
`main` names them), which is what the fork asked for on 2026-11-05 and what
WO-027-D007 boarded (§Register). A consistency review is recorded only with
its `Traced consumers` table and a capture review only with its `## Items`
table; this pass's consistency and criteria workers are briefed with that
(§Validation). A planning subject's review lane is keyed by the branch's
name, so this pass's lane is its own. The Codex installation emits
`.codex/agents/dotln-worker-astra.toml`, `npm run plan -- refute` takes
`--model opus|fable|sol|astra`, and a `fable` or `astra` word closing a
dispatch line selects that host's non-default worker; today's line names
none, so the defaults run.

### The operator's words

| Item | Aim read | Disposition | Planner's inference |
| --- | --- | --- | --- |
| the dispatch line | a standard pass that takes the latest upstream, asked for in this session | #62 opened first by the kit's helper, merged by the operator, finished on `main`; the planning branch from the updated `main` (D1) | none |
| `1) core response:` and the block | core's answers read against the records they name, the fork's requests reconciled | each of the fourteen read, the rows re-disposed, the routes recorded until WO-257 lands (D2; §Core's answers) | that the block carries no operator direction beyond the one the fork reads from core's session (D5) |
| `planning:` (19:59:28Z) | the session's role resolved mid-turn, core's workaround | the hook named the planner role, the session scratch and the usage readback; nothing recorded as a rule | none |
| `merged` | the update may finish | `update --finish` ran on clean `main` | none |

### Core's answers, read against the records

Each item of core's block, read against the record it names; what this pass
did with it; and what the fork does until the release that carries WO-257.
Core's WO-257 is in execution (§Entry observations), so the routes below are
expected to be short-lived.

| Block, item | Core's answer | Read against | What this pass did |
| --- | --- | --- | --- |
| 2026-11-04, 1 | recorded; core's own `plan start` 0 h 1 min on v0.118.0 | this pass's `plan start` under 0 h 2 min with its prune | nothing |
| 2026-11-04, 2 | recorded | the operator record's Starter updates item, unchanged | nothing |
| 2026-11-04, 3 | WO-257 step 16: the front page may link a record; the four session entry points stay standing-only | `README.md`'s reworded link stands; `test:docs` passes | nothing until then; the link stays reworded |
| 2026-11-04, 4 | recorded; core reads the first driven Codex research order's outcome in the next block | WO-029 and WO-030 runnable, re-based today (D3); no drive has run yet | the next block carries the outcome when one has run |
| 2026-11-04, 5 | WO-257 step 15: the warning names `npm run resume -- status --refresh` | `npm run resume -- status` on v0.118.0 still prints the projection warning; WO-033's regeneration route stands | nothing until then |
| 2026-11-04, 6 and 2026-11-05, 4 | WO-257 step 13: the judged subject lists the sequence's orders and then the open members of every separate-track workstream; no `--workstream` flag | `FUP-ac85b05ea08a1dce`; WO-028-D043's never-judged route | the row re-disposed with the route and the condition that a starter carries WO-257 (§Register) |
| 2026-11-05, 1 | recorded | nothing | nothing |
| 2026-11-05, 2 | WO-257 step 17: `Bash(node scripts/worktree.mjs publish *)` joins the two rules; a release that changes the settings says to start a new session | `FUP-2479f6d32b2396a8`; this session's first helper publish admitted with no prompt (§Entry observations) | the row re-disposed with the observation and the route: the target publish by hand when the classifier denies it, until then |
| 2026-11-05, 3 | landed in v0.118.0 (WO-255-D006): `record` takes `--host`, `--model`, `--effort` and `--tree`; a target order's record binds the target worktree | the command's usage line on the updated `main`; `FUP-9c3d801c73d041b9` and `FUP-aa144bbe9a1b6ec9` | both rows settled (§Register); the next order's reviews record through the flags |
| 2026-11-05, 5 | WO-257 step 11: the reader skips the host's command block; until then dispatch alone or send a bare `planning:` after it | this session reproduced the defect and the workaround (§Dispatch and capture) | recorded; nothing further asked |
| 2026-11-05, 6 | WO-257 step 14: `checkRulesRecorded` reads the retained lanes and an entry may name `order`; a decision reference as provenance declined | the five rules of 2026-11-05 stay recorded in prose beside that pass's block | nothing until then; this pass's one rule has a live row |
| 2026-11-05, 7 | recorded | WS-001 rule 31; WO-034 first in the sequence | WO-034 extended to the code that landed since (D4) |
| 2026-11-05, 8 | WO-257 step 12 with the operator's rule: a round's documents are those changed since its base, a brief past the ceiling is split into batches over more workers with one merged report, the measured size printed; until then run the review before the map and the pass document grow, or withdraw nothing and record the refusal with its size | core's pass document §The review helper's ceiling (the brief is the sum of documents under the per-document cap; the map and the history page already render as pointers) | the operator's direction recorded in the operator record (D5); this pass's reviews measured first and ran as §Validation records |

## Orders filed and amended

No order is filed: no reopening condition fired that an order answers, and
the operator gave no direction for one (§NoOps). Six orders are amended,
each change bounded to what the records changed since its filing:

- WO-034: the base to WO-027's merge (`d7d842d`, #15); the observed gap
  re-read there (the merge changed no file under `apps/` or `libs/`, so
  every count holds); WO-027's three tools and their tests added as what
  rule 31 gives this pass to read, as a step, a criterion, a Cost line
  addition, an Objective sentence and a known issue (D4); step 1's pin.
- WO-023 and WO-024: the base to WO-027's merge; the known-issues sentence
  that names which pass set it and why the counts hold (D3).
- WO-029 and WO-030: the base to WO-027's merge in the Repository line, the
  dependency sentence and the known issues (D3); WS-002's rule that step 1
  integrates the target's `main` is unchanged.
- WO-018: the one sentence the 2026-11-05 pass could not add after its
  receipt bound the text: the work's generated message catalog (WO-035's)
  is regenerated for the rows the map adds and the pass before WO-018
  activates writes the command into its steps.

WO-033's append-only link amendments of 2026-11-05 (planning control log rows
52 to 54, WO-033-D007's approval) bound the bytes of WO-018, WO-023 and
WO-024, so the plan check named each as unmatched once this pass changed
them; each is withdrawn explicitly with the reason recorded (rows 56 to
58), the authorization standing and this pass's receipt judging the
current text, the route product 07 gives a bound order a later pass amends.

Not amended: WO-035, WO-036, WO-037 and WO-038, whose bases the pass before
each activates sets (WS-001 §Bases), and WO-031 and WO-032, provisional
after the pair. No existing order's criteria weaken. The five defect classes
were screened over the changed text: WO-034's new criterion judges the
candidate by a named command (`node --test tools/` and a name-only diff),
reads data that exists at the base (the three tools), depends on no host
and contradicts no non-goal; it names no count, ceiling, cost or duration
as its subject and no commit range before the final review's commit. `npm
run work-orders -- index --check` prints only the two advisories the
2026-11-03 pass judged (WO-008 criterion 1, WO-016 criterion 5).

## Decisions

### D1. Take starter v0.118.0 first, on the operator's word in this session

The dispatch line asked for the latest upstream, so this is the session in
which the operator asked (the operator record's Starter updates item). The
one refresh commit past v0.117.0 was previewed from the detached worktree
(67 replaced, 3 added, 0 refused, no instance action), merged into
`chore/starter-update-v0.118.0` in one commit with no conflict,
regenerated and gated (four gates green in 0 h 1 min). The kit's helper
opened #62 with no host prompt, the operator merged it, and `update
--finish` ran on clean `main`. The planning branch was opened from the
updated `main`. The release's Read before upgrading items are met as §What
the release asks an instance to read states; none needed a repair on the
update branch.

Traps: goal substitution would count the update as the pass. The NoOp of
staying on v0.117.0 was declined because the operator asked, and because
v0.118.0 carries the record flags the fork asked for and the review lane
this pass's reviews run under.

### D2. Core's fourteen answers, reconciled into the records

Every item was read against the record core names and against this fork's
own (§Core's answers). Three things changed hands today: the record flags
landed (two rows settled, the usage line on the updated `main` as the
evidence); the amendment binding, the allow rule and the links question are
WO-257's (three rows re-disposed with core's route and the condition that a
starter carries WO-257, and one deferred row for WO-027-D013 asked of core
in §Requests to core); and the operator's review rule, given in core's
session, enters this fork's operator record (D5). Nothing core answered
blocks the next order: WO-034 activates on v0.118.0 as filed, and the
routes until WO-257 are the ones the fork already runs (the never-judged
amendment route, the target publish by hand on a denial, the bare
`planning:` after a slash command).

Traps: naive interventionism would file a fork order for the hook defect or
the brief ceiling; both are kit files, WO-257 carries them and it is in
execution. NoOp of leaving the rows as the 2026-11-05 pass disposed them:
declined, because two conditions fired (a starter carries WO-255) and the
others now name a filed order.

### D3. WO-033 and WO-027 leave the sequence; the next five orders take WO-027's merge as their base

Both closed since the previous pass (WO-033 as `Launchpad v0.3.5`, WO-027 as
`DotLn Angular v0.10.1`), so they leave the sequence at this pass, as closed
entries do; the generated history page is their record. WO-034 is first,
alone; the WO-023/WO-024 pair follows; WO-035 to WO-038, then WO-016,
WO-008, WO-017 and WO-018 keep their order. The five orders that can
activate next (WO-034 and the pair on the road; WO-029 and WO-030 on the
research track, runnable now on Codex) take WO-027's merge `d7d842d` as
their base, as WS-001 §Bases asks of the pass before an order activates.
Their observed gaps were re-read there: WO-027's merge changed twenty-one
files, under `docs/`, `tools/` and the root README and none under `apps/`
or `libs/`, so every count the gaps state holds; the research orders'
candidate lists, computed over the catalog's data at `55b59c9`, are
unchanged because the catalog's data files did not change. WO-035 to
WO-038 and the provisional WO-031 and WO-032 keep their bases for the pass
before each.

Traps: shifting the burden would re-base every open order every pass; the
rule is the pass before activation, and the index shows the rest as behind
until then. NoOp of leaving the five at `48c7f8e`: declined, because an
executor would open a worktree one merge behind `main` and integrate first,
and the pass that read the merge is the one to say what it changed.

### D4. The first standards pass reads the code that landed since the previous pass

WS-001 rule 31 says each planning pass files or sequences a standards pass
over the code the orders since the previous one landed, ahead of the next
feature order. Since the 2026-11-05 pass one order landed code on the
target: WO-027's three tool scripts (`tools/board-count.mjs`,
`tools/scripts/check-script-reference.mjs`, `tools/pr-title.mjs`) and
their tests, about 2,000 added lines. WO-034 is sequenced first and is the
standards pass; it reads the movement batch, which landed before the
previous pass. Decision: WO-034 also reads WO-027's three tools and their
tests under rules 26, 30 and 31 and the operator's code directions, with
the Design's reshape rule applied where a function fails it and every test
unchanged as the oracle, recorded per file in the evidence README; a step,
a criterion, a Cost line addition and an Objective sentence carry it. The
reading is bounded (three files and their tests) and the final review's
own reading of them is evidence they may be left as written, which the
criterion admits.

Rejected: a second standards order for the tools (axis: one order pays the
cycle once; the reading is an hour inside an order already first); leaving
the tools out because they are workspace tooling rather than Angular code
(axis: the profile says the workspace is what a colleague should recognize
as the operator's way, and rule 31 names the code that landed, not a
directory); a parameter-count lint over `tools/` (axis: D060's reason). NoOp
of recording nothing: declined, because the rule as recorded names what a
pass does each time and a pass that skips it once makes the next skip
cheap. Reopen: the operator narrows rule 31 to the app's code, or WO-034's
reading finds the tools need no change and the next standards pass measures
the reading's cost against that.

### D5. The review rule from core's session enters the operator record; the title sentence is corrected

Core's pass of 2026-11-06 records the operator's direction, given in that
session, that a planning review never leaves orders out of its subject for
a reviewer's context and that the remedy is to split the work over more
reviewers; the subject was this fork's pass of 2026-11-05, which withdrew
five amendments to be reviewed at all (its item 8). The direction binds
this fork's passes, so the operator record's review item carries it as the
rule with its provenance: given in core's session (capture there SHA-256
`cd1cb6d6…`), relayed in core's block pasted today (journal row
2026-11-06T19:52:35Z, digest `df22b458…`), with the route until a starter
carries WO-257 step 12: the reviews run over the orders before the pass
document grows, or the refusal is recorded with its measured size and no
amendment is withdrawn. The `Rules recorded` block names today's message
row, which the hook classed unclassified because of the host's command
block, so the entry carries no `class`; the wording is the planner's
synthesis of core's account of the operator's words and is named here so
the operator can strike it by removing the entry.

WO-027-D010 boarded a stale sentence: the operator record's pull-request
title item still named the kit's publish lint and the DotLn-Angular title
workflow as lints that require a conventional type. Since starter v0.117.0
the kit's lint admits a gitmoji and a subject, and since WO-027 (#15) the
workflow leaves such a title as written, so the sentence now says the
preference holds in both repositories and links the decision; this is a
correction of a standing document, not a new rule, and the block does not
name it.

Traps: a rule recorded as the operator's that they did not give. The
direction is core's record of the operator's own words in core's session,
and the provenance names both captures; the relay is the same route the
Starter updates item took on 2026-11-04. NoOp of leaving the rule to arrive
with WO-257's product 07: declined, because this pass's own reviews are
governed by it today (§Validation) and the operator record is where this
fork's passes read their review duty.

### D6. The dispatch, the role and the tags: observed, not rules

The hook journaled the dispatch unclassified again (§Dispatch and capture);
the operator's bare `planning:` resolved the role, core's route until
WO-257 step 11. Nothing enters a standing document: the route is the kit's
to carry and core's WO-257 is in execution. The session's own error, the
`--tags` fetch, was corrected before any release command ran and the
remote's tag option is set as the kit guide says; it is recorded in §Entry
observations and not asked of core, because the guide already says it.

## Register

The register was synced before the dispositions and the batch applied at
revision `e96bb926…`, leaving it at `3a577f4f…` (the batch is kept in ignored intake as
`docs/intake/followups-apply-2026-11-06.json`). Ten rows were disposed on
the update, core's answers and the two closes, leaving 45 pending rows and
none untriaged or needing review; the thirty-five untouched rows keep their
state, read as this pass's scope touched them.

| Row | Disposition and evidence | Reopening condition |
| --- | --- | --- |
| FUP-aa144bbe9a1b6ec9 (WO-027-D007, the record's host and model) | **settled** — starter v0.118.0 (WO-255-D006): `npm run worker -- record` takes `--host`, `--model`, `--effort` and `--tree`, read from the command's usage line on the updated `main` (D2). | A record filed through the flags names a host, model, effort or tree other than the worker's. |
| FUP-9c3d801c73d041b9 (WO-028-D038, the same ask) | **settled** — the same release; core's answer names WO-255-D006 (D2). | The same. |
| FUP-f46cff6dba92f65a (ER-RUN-02, the worker launch route) | **settled** — its condition fired: v0.118.0 carries WO-255's `--target <id> --order WO-NNN` form; core records a live `--target` launch as untested, so the fork's first use is observed by the order that runs it. | A target review through the helper reads a tree other than the order's worktree. |
| FUP-5d0c7879f6a5bd1d (WO-027-D015, the lies-ahead table) | **settled** — WS-001 carries WO-027 as merged in the landed paragraph, the lies-ahead table and the delivery row (§Write-backs). | A sequence member is missing from the table again. |
| FUP-f02f3bea111d8864 (WO-027-D010, the title sentence) | **settled** — the operator record's item corrected (D5). | A lint in either repository requires a conventional type again. |
| FUP-ac85b05ea08a1dce (WO-028-D043, the amendment binding) | **deferred** — core's WO-257 step 13; the never-judged route until a starter carries it (D2). | A starter carries core WO-257, or an authorized change to a research order is refused by the ordinary planning check. |
| FUP-2479f6d32b2396a8 (the publish refusals) | **deferred** — the two v0.117.0 rules observed admitted on the first try in this session; the target publish's rule is WO-257 step 17; by hand on a denial until then (D2). | A starter carries core WO-257, or a publish helper is denied in a session that started after its rule was emitted. |
| FUP-575ebb5d3b7e46e0 (WO-027-D013, the filed records' links) | **deferred** — the filing and the checkpoint refs are the kit's; asked of core in §Requests to core, item 3; the developer reference's row states the limit meanwhile. | Core answers with a route or a release, someone without the operator's launchpad clone needs to follow a filed record's links, or the kit's record filing changes. |
| FUP-5538fd060f7a5e9c (WO-027-D009, the title map) | **deferred** — no kit-published title has failed the workflow and the final review declined the widening as new scope; the order that next edits `tools/pr-title.mjs` takes D009's case list (§NoOps). | A kit-published title fails the target's workflow, or an order next edits the tool or the kit's lint. |
| FUP-223cde718a523e67 (WO-004-D010, fork titles) | **deferred** — read at its third source revision (WO-027 made the limitation a visible marker); no fork pull request exists and the operator is the only contributor. | A pull request from a fork is opened against DotLn-Angular, or an order changes the privileged workflow route. |

Rows read and left as they stand, their conditions not fired:
`FUP-038033632f4116e6` (the close's removal step: WO-033's and WO-027's
closes ran today on v0.117.0 in the operator's own sessions, and WO-027's
close journal holds four rows and no step duration), `FUP-4091de8ba4313b4c`
(the three reviews as a kit step; WO-244 has not landed, though v0.118.0's
`--capture` carries the criteria review's dispatch reading),
`FUP-2232a29f1061494f`, `FUP-8c4dcd0be9399981`, `FUP-b948f8094f0419e5` and
`FUP-290ea887a40dcd8e` (core's WO-257, in execution), `FUP-3777717897701f29`
(the fork's bound values; no stop recorded), `FUP-2ed0c79e62b53dd7` and
`FUP-35187266d29e00dc` (the pass before WO-016 activates),
`FUP-d97544c4254dadd4` (the `check:scripts` scope; WO-027 left it closed and
its condition did not occur), and the candidate rows of the earlier passes
(`FUP-0fb531a975308a81`, `FUP-dfb896b07eb669e5`, `FUP-cc72e6b187cbb0ab`,
`FUP-e9b95694a5de071e`, `FUP-b7e52566cc93f953`, `FUP-b2ca88c7d6462f27` and
the rest), each read against its condition.

## Red tags

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md",
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
| A fork order for the hook's dispatch reader or the review brief's ceiling | Both are kit files WO-257 carries, and WO-257 is in execution in core; the fork's routes until then are recorded. Evidence: core's answers, items 5 and 8 of 2026-11-05; `../DotLn-wo257`. | A starter release arrives without them, or a second pass loses its role with no workaround. | The next pass dispatches with a slash command in the prompt and keeps its role. |
| A second standards order for WO-027's tools | One order pays the cycle once; WO-034 is first and the reading is bounded (D4). Evidence: product 07's order-size rule; WO-034's Cost line. | WO-034's reading finds the tools need a change larger than an hour. | A standards pass over tooling runs on its own cadence. |
| Leaving WO-027's tools out of the standards pass | Rule 31 names the code that landed, and the workspace is what a colleague recognizes as the operator's way (D4). Evidence: WS-001 rule 31; the profile's §What this repository is for. | The operator narrows the rule to the app's code. | The rule's reading stops costing an hour for nothing. |
| Re-basing WO-035 to WO-038 and the provisional research orders now | The pass before each activates sets its base (WS-001 §Bases); a base set today would be stale by then. Evidence: the index's integration column; D3. | An order of that group is next to activate. | Every open order's base is current at every pass. |
| An order for WO-027-D009's title-map alignment | No kit-published title has failed the target's workflow; the final review declined the widening as new scope under rule 26; a standard pass files only on a fired condition or a direction. Evidence: WO-027-D009; FINAL-001's rejected options. | D009's condition fires. | A shared case list ties the two checks. |
| An order for WO-027-D013's record links | The record filing and the checkpoint refs are the kit's; the decision is core's and is asked in §Requests to core. Evidence: WO-027-D013's evidence (HTTP 404 and 422 for the checkpoints on GitHub). | Core answers, or a reader without the launchpad clone needs the links. | A colleague follows a filed record's links on GitHub alone. |
| Recording core's answers as fork rules | An item in core's block is core's session's text; only the one direction the operator gave in core's session enters the record, with its two captures (D5). Evidence: the operator record's Pasted blocks item; product 07 §Operator-opened planning pass, item 5. | The operator says a core answer binds the fork as a rule. | Every route in the block has a standing home. |
| Refilling the research track | Four research orders are queued (WO-029 to WO-032) and the queue is refilled when drained (the operator's direction of 2026-11-04). Evidence: WS-002's member table. | Two of the four close. | The Codex capacity has a next order waiting. |
| Updating the README's release block | The block names the release the next launchpad order prepares; `v0.3.5` is published and the next self order's `release prepare` assigns `v0.3.6`. Evidence: `README.md` §Close a release. | A launchpad order activates. | The block is never stale between orders. |
| Asking the operator to restate the review rule in this fork's session | Being asked to confirm what they decided is what they refuse; the relay and core's capture are the provenance, and the entry names a live row (D5). Evidence: the operator record §What the operator does not want. | The operator strikes the entry. | Every rule in the block was typed in this fork's sessions. |
| Raising the router skill's cold-start ceiling or trimming the kit's skill | The skill is the kit's (`dotln-router`, emitted by `harness emit`) and its 17,024 bytes are core's to trim; the ceiling in `docs/control/budgets.json` is the operator's, and a breach of a cold-start ceiling refuses nothing here. Evidence: the cost table's breach lines; core's v0.118.0 release notes (six role roots over their ceilings, boarded there). | A starter trims the skill, or the operator sets the ceiling. | The router's cold start is under the ceiling the operator set. |
| Reopening an order on the "seeking the wrong goal" reopen candidate | The machinery share rose because the two orders closed since the last pass, WO-033 (the launchpad's documents) and WO-027 (the target's gate tools and reference documents), are the ones the operator moved to the front on 2026-11-05; the road ahead is WO-034 and then six delivery orders, so the share falls as they close. Evidence: the cost table's trap signals (machineryShare 0.663, Δ 0.127); the 2026-11-05 pass D2; the sequence. | The next closed order's delta worsens again with a delivery order closed. | The share falls because delivery orders closed, not because the signal was silenced. |

## Sequence

WO-033 and WO-027 leave as closed. WO-034 is first, alone; the
WO-023/WO-024 pair keeps its place behind it; WO-035, WO-036, WO-037 and
WO-038 follow one at a time; WO-016, WO-008, WO-017 and WO-018 keep their
relative order after them. WS-002's members stay a separate track with no
sequence entry: WO-029 and WO-030 are runnable now on Codex at WO-027's
merge, WO-031 and WO-032 after the pair; no refill, four research orders
being queued. What the operator sees after each order lands: after WO-034,
nothing new on screen, the first movement batch's code and WO-027's three
tools reading as the example and the wall study showing its avoidance;
after WO-023 and WO-024, forty more studies under Tools with the `states`
and `relations` families; after WO-035, nothing changed on screen, every
string of the catalog arriving through the message system and a missing one
a visible failure; after WO-036, walls and obstacles they draw on the field,
a squad routing around them and replanning, a no-route state they can read,
and the A* study stepping its search; after WO-037, units firing at a
target, bullets stopped by walls, a moving target led and hit, a knockout;
after WO-038, the reading using their full screen; after WO-016, the
machinery view; after WO-008, login and permissions; after WO-017, the
twin's first lane; after WO-018, the Art of War toys on the shelf. After
each research order, twenty more studied concepts in its work's landed
family, and after WO-036 the pathfinding chapter joins AI for Games'
drawable rows. The pass before WO-016 activates still owes WO-016 its base
and the receipt 012 known issues (`FUP-2ed0c79e62b53dd7`).

## Write-backs

- The operator record: §Standing preferences, Commits, reviews and
  releases, the pull-request titles item corrected (WO-027-D010; D5);
  §Harness, the review item gains the operator's direction of 2026-11-06
  with its two captures (D5). Nothing else in the record changed today.
- WS-001: the member table's bases for WO-023, WO-024 and WO-034; the
  side-members paragraph (WO-027 merged ahead of the pair); WO-027's row in
  the typed-edges table; the landed paragraph and the lies-ahead table
  (WO-027 merged as DotLn-Angular #15, `DotLn Angular v0.10.1`); the
  delivery row (merged, its records #61).
- WS-002: the member table's bases for WO-029 and WO-030.
- `docs/repositories/dotln-angular.md`: the facts table (last reviewed
  source `d7d842d`, #15, 2026-11-06; `DotLn Angular v0.10.1`) and the
  release table's v0.10.1 row.
- `docs/planning/sequence.md` (D3); the idea ledger's registration heading;
  the generated work-order index and history page; the follow-up register
  (the batch above); the cost table.
- WO-034, WO-023, WO-024, WO-029, WO-030 and WO-018 amended (§Orders filed
  and amended).
- No budget, ceiling or baseline is raised; `docs/control/budgets.json` is
  unchanged.

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[
  {
    "rule": "A planning review is never refused or narrowed for the subject's size: a brief past a worker's context is split into batches over more workers, every document the pass changed is reviewed, and no pass withdraws an amendment to fit a reviewer (the operator's direction of 2026-11-06, given in core's session and relayed in core's block of that day; until a starter carries core's WO-257 step 12, the reviews run over the orders before the pass document grows, or the refusal is recorded with its measured size and no amendment is withdrawn).",
    "document": "docs/operator/README.md",
    "section": "Harness",
    "message": {
      "sessionKey": "8cf93f822509bd10fefdc9644054bc9fa70fa05f9a6929a9673ea8f0a1076b85",
      "recordedAt": "2026-11-06T19:52:35.218Z"
    },
    "captureDigest": "sha256:df22b458437e432bd03305cf3adf595da12a744aae9ed689a4e44c0da2a51250"
  }
]
```

<!-- dotln-rules-recorded:end -->

The entry names the dispatch message's journal row, which the hook classed
unclassified because of the host's command block (§Dispatch and capture),
so it carries no `class`; the message is the paste that relayed core's
record of the operator's direction, and the direction's own capture is
core's (`cd1cb6d6…`), both named in the record's item (D5). The operator
strikes the rule by removing the entry.

## Requests to core

The following is the fork's evidence and requests, not new operator direction.
It is repeated in the handoff after this pass's checks.

```text
planning: fork observations after starter v0.118.0

From DotLn-Enterprise-Starter's 2026-11-06 planning pass, docs/planning/passes/standard-pass-v0-118-0-core-answers-2026-11-06.md. These are the fork's findings, not new operator direction. Your answers of 2026-11-06 are reconciled: the record flags settled two rows, the WO-257 items re-disposed three with the routes you named, and the operator's review rule is in the fork's operator record with both captures.

1. Starter v0.118.0 is taken (#62), on the operator's word in the dispatch of that session. Preview 67 replaced, 3 added, 0 refused, no instance action; one merge, no conflict; harness emit 43 surfaces, no drift; the four gates green in 0 h 1 min; update --finish in seconds. First observation of WO-246's rules in a session that started after they were emitted: node scripts/launchpad.mjs update --publish opened the pull request with no host prompt on the first try. Nothing asked.

2. Observation on your item 5 of 2026-11-05: the host's command block preceded the dispatch again in this session (journaled unclassified, role unknown); the operator's bare planning: sent mid-turn resolved the role at 19:59Z, as you said. Nothing asked; WO-257 step 11 is the fix.

3. Ask (the fork's WO-027-D013): a filed target record's relative links resolve only at the order's FinalReviewCompleted checkpoint, which is a local ref absent from GitHub (HTTP 404 and 422 for two checkpoints), and a target order's records are moved off the launchpad's main by target-records, so a colleague reading the two public repositories cannot follow a filed record's links. Decide in a core pass how they become resolvable: publish each order's checkpoint as a ref on the launchpad's remote at release close, or record beside docs/dotln/ a public launchpad commit at which every filed record and its link destinations exist. Check by resolving every relative link in the target's docs/dotln/ records through GitHub alone.

4. For your information: the fork's 2026-11-05 pass's withdrawn amendments were five orders of 129 KB; today's pass amended six orders and measured its brief before launching (§Validation of the pass document names the size and what ran). WS-001 rule 31's first standards pass (WO-034) now also reads the three tool scripts WO-027 landed, the code that landed between the two passes. No kit change asked.

5. For your information: v0.118.0's record flags are what WO-027-D007 and WO-028-D038 asked; the next order's reviews record through them, and the fork's first --target review through the helper will be observed by that order. Nothing asked.
```

## Process cost

Model and effort: Fable 5.1 at `max`, operator-selected (the session's
`/model` line). Usage: unknown before 19:59:28Z (no role); 419,456 tokens
at the role's resolution (20:00:20Z); the exit reading is in the handoff.
Subagents: budget 20 (`subagentCap`); the plan stated before the first
spawn: three Codex review workers through `npm run worker -- review --host
codex --subject planning` (the criteria adversary with `--capture`, the
design improver, the consistency reviewer), one recheck round if a blocking
finding is repaired, and one background `dotln-worker` refuter through the
direct route, each launched once: four to five uses, no re-task, no
descendant. Spent: VALIDATION_SPENT.
Wall-clock of the pass's commands: the preview 326 ms; the update's four
gates 0 h 1 min; `update --finish` seconds; `plan start` 0 h 1 min with its
prune; the index, the register sync and the cost table seconds each; the
document gate 0 h 1 min a run; the reviews and the refuter in §Validation.
Against the NoOp of doing nothing: the update is on `main`, every answer of
core's has a home in the records, the five orders that can activate next
are current at WO-027's merge, and the first standards pass reads what
landed since the last pass.

## Validation

The three independent reviews, the refutation and the document gate are
recorded here when they have run; until then this section is the
placeholder the subject commit carries, and the reviewers read it as such.
