# WO-042 — The operator's ideas on the machinery view: a shelf of their own titled mechanism changes, select-then-apply onto an agent, the agent's card redrawn with the before as a ghost and the recorded beats moved or marked only where the six-field record supports it, a refused drop shown with its reason, the ideas kept in browser storage and appended to the checkout's ignored intake by a local sink

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `MechanismChange`, `IdeaCard`, `AppliedIdea` and `IdeaDrop`
to `libs/shared/models/src/lib/machinery.ts`; `apply-ideas.ts` with its
specs and `machinery-idea-drop-v0.schema.json` to `libs/shared/records`;
the idea shelf, the new-idea form, the use-case caption, the sandbox band
and the refusal notice to the machinery feature; `MachineryIdeasStore` and
two event groups; `tools/scripts/idea-sink.mjs`, `tools/idea-sink.test.mjs`,
`npm run idea-sink` and their `scripts.md` rows; `/docs/intake/` in
`.gitignore`; an optional `ideaSinkUrl` on `EnvironmentConfig` and its
development value; the e2e cases and two documents' sections; about 30
source files (the planner's estimate); adds no runtime dependency;
regenerates the `machinery-*.png` baselines; one launchpad configuration
line (`docs/intake` in the class's disposable output). Removes nothing.
Wall-clock: an estimate of 4 to 6 hours for the executor, with the design
rounds and the fixed cycle on top; unknown until run. Context bytes: WS-001 rules 8, 9, 15,
16, 22 to 26 and 29 and §The app and its sub-apps, WO-016's Design and the
target's `machinery.md` after it merges, the copies, the UI vision §4 and V7
read at the run's folder, the precedents named in the Cites line, this
order; about 150 KB for the executor. Commands added in the target:
`npm run idea-sink`. Tokens: unknown until run. Steps: 18. Re-mints: none.
Refutations paid: the 2026-11-09 pass's receipt (receipts 008 to 012 judged
this text while it was part of WO-016).
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
the machinery view shows an agent, a change to its gems, supports or
mechanisms dropped on it, and what changes in the example use case, so the
operator can tune the mechanisms until they run without them; select-then-
apply first, drag later; the ideas the operator drops are theirs and are
also saved to ignored intake. Design file this order builds from, read at
the run's folder on this machine (core's ignored intake, read-only; the
digest pins what was read): `out/process/ui-vision-see-the-agents.md` §4
(the idea card as data and how a drop changes an example without changing
the platform) and V7 (SHA-256
`d3bbf3a21e5b0892e117d71d604acd779e8fdbe08350f0cf3a9bd074f0fcedd2`); the
design file is the operator's own research and lies outside the clean room
(WS-001 rule 23 as corrected on 2026-10-26). Planner-synthesized by the
2026-10-24 planning pass as part of WO-016
([planning document](../planning/passes/mining-run-orders-2026-10-24.md) §6
D8 and §9) and split from WO-016 into this order by the 2026-11-09 pass
([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md)
D8), which also wrote the Design's table of what each idea kind shows from
what the record carries. Opaque identifier, not a priority.
**Depends on:** WO-016 merged (hard: the records library, the copies and the
role copy, the fold, the page, its facade and its store, which this order
extends).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-016",
    "relation": "hard",
    "reason": "the records library, the six-field copies and the role copy, the fold and the machinery page and store this order adds the operator's ideas to"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 8, 9, 15, 16, 18, 22 to 26 and 29; §The app and its sub-apps,
G2, G3, G6, §Design direction, operating rules I1 to I3);
`docs/operator/README.md` (§How the operator directs a session: design
comparisons; §The app and its subject); `docs/repositories/dotln-angular.md`
(§Run the app and its checks; §What close deletes, retains or refuses);
`docs/work-orders/WO-016-machinery-view.md` (its Design) and, after it
merges, the target's `docs/dev-reference/architecture/machinery.md`; the
target's `tools/scripts/prime-environment.mjs`, `.env.example`,
`libs/shared/core/src/lib/environment/environment-config.ts`,
`apps/dotln/src/environments/`, `libs/shared/data-access/src/lib/interceptors.ts`
and `with-persisted-state.ts`, `.gitignore` and `tools/board-count.test.mjs`
(temporary repositories in a tooling test); the platform's
`docs/product/02-domain-model.md` (§Mechanism hierarchy) at
`49d8c4c364dc5986e8c76b4ac27a0110c380206f`; the UI vision at the sections
named above.

**Objective:** (the operator's session, WS-001 rule 24) on `/machinery`,
with WO-221's beats, slots and agent cards in front of them (WO-016), the
operator writes an idea in the shelf: a title, a kind from a menu (remove or
add a gem or a support, narrow the knowledge to listed inputs, set a
mechanism's rung, add a wait with its cause, replace a prose section with
their own words), its parameters and the slots it applies to; the shelf
holds only ideas they wrote. They select the idea, then an agent, and watch
the agent's card redraw with the change and the before beside it as a ghost,
a band saying presentation only, nothing written, and a caption saying what
the change shows in the use case: a wait moves that agent's hand-back and
every later beat right by its minutes, the recorded positions ghosted; a
narrowed knowledge marks the beats at which an input the narrowing removes
existed by the record; any other kind leaves the beats as recorded, and the
caption says the record does not carry what that kind changes. An idea
dropped on an agent it does not apply to leaves the strip and the card as
they were and shows its reason on the idea's row. They reload and find their
shelf and applied ideas; with the sink running beside the development
server, each idea they drop is also a line in their checkout's ignored
intake. What the operator learns is which of their mechanism ideas touch the
recorded use case and where, and which the record cannot speak to; what they
decide is which ideas to keep, which to mark as did-not-stick, and which to
promote by filing a GitHub issue on the platform themselves.

**Observed gap (dated 2026-11-09 at `eb9d227`):** this order builds on
WO-016's merge, and at `eb9d227` neither WO-016's work nor this order's
exists: `/machinery` renders WO-013's arriving page, and the app has no idea
type, shelf, apply fold or sink. The six-field copies WO-016 commits carry,
per row, `ordinal`, `type`, `recordedAt`, `workOrderId`, `actor` (harness,
model, effort, and `mode` on one row; `role` on none) and `verdict`; no field
names a mechanism, a rung, an input read or a prose section, and no field of
the platform's full rows at
`49d8c4c364dc5986e8c76b4ac27a0110c380206f` names a mechanism id or a rung
either (checked by this pass over all 22 rows of the two segments). The role
copy WO-016 commits carries, per role, the Origin stamp's mechanism ids
without a gem or support kind, the targets of the skill's `Read:` lines and
its section keys; at the pin the executor's reads are `@work-order`,
`@citations`, `@subject-files`, `package.json` and `@failure-report`, the
verifier's `@work-order`, `@citations`, `@subject-files`, `package.json`, a
section of the execution guide and `@verification-reports`, the reviewer's
the verifier's with a section of the publication document added, and the
release close's `@work-order`, `@citations` and `@final-review`. In WO-221
the verifications hand back at beats 4 (fail), 8 and 14, the repairs at 6
and 12 (after the fails at 4 and 10), the final reviews at 10 (fail) and 16;
in WO-226 the verification at 4 and the final review at 6. At the target:
`tools/scripts/prime-environment.mjs` reads `.env`, throws on any `DOTLN_`
key outside its ten (`Unrecognized DOTLN_ setting`), and writes its values
into generated public client configuration, and `.env.example`'s first line
says its values become public browser configuration; `EnvironmentConfig`
has no sink field; `.gitignore` ignores `.env` files but not `docs/intake/`;
the HTTP error interceptor dispatches `errorEvents.httpFailed` for any
failed request, which the shell shows as one notice; `apps/dotln/project.json`'s
serve target sets no host or port, so the development server's origin is
Angular's default, `http://localhost:4200`; production and the `mocked`
build use their own environment files. In the launchpad, the class's
disposable output in `dotln.config.json` lists thirteen entries without
`docs/intake`, and an undeclared ignored file refuses a release close in
either checkout (the profile, §What close deletes, retains or refuses).

**Design:**

- **Types** (`libs/shared/models/src/lib/machinery.ts`): `MechanismChange`,
  a union by `kind`: `removeGem { id }`, `addGem { id }`, `removeSupport {
  id }`, `addSupport { id }`, `narrowKnowledge { inputs }`, `setRung { id,
  rung }` (`rung` 1 to 9, the platform's mechanism hierarchy, from a test,
  lint or script at 1 to globally loaded prose at 9), `addWait { minutes,
  cause }`, `replaceProse { sectionKey, text }`; `IdeaCard { id, title, by:
  'operator', change, appliesTo: SlotId[], createdAt, status: 'draft' |
  'applied' | 'did-not-stick', claims: 'presentation-only' }`; `AppliedIdea
  { ideaId, order, slot, ordinal, appliedAt }`, the agent being the slot's
  fill at that beat; `IdeaDrop`, the `machinery-idea-drop-v0` record the
  sink appends (`{ schema, idea, target: { order, slot, ordinal },
  droppedAt }`, its schema under `libs/shared/records/src/schema/` with
  `additionalProperties: false` and `idea.by` fixed to `operator`).
- **What each idea kind shows.** Nothing is simulated: the page never
  re-runs an agent or guesses what a changed agent would have done. A kind
  moves or marks beats only where a field of the six-field record supports
  it; otherwise it is card-only and the caption says what the record does
  not carry.

  | Idea kind | On the agent's card | On the beats | What the record carries for it |
  | --- | --- | --- | --- |
  | `removeGem(id)` | the id leaves the mechanism list, the before with the id as the ghost; the card names the operator's word, gem | unchanged; the caption says no row names a mechanism a beat ran with | nothing: card-only |
  | `addGem(id)` | the id joins the list, marked as the operator's | unchanged; the same caption | nothing: card-only |
  | `removeSupport(id)` | as `removeGem`, the operator's word being support | unchanged; the same caption | nothing: card-only |
  | `addSupport(id)` | as `addGem` | unchanged; the same caption | nothing: card-only |
  | `narrowKnowledge(inputs)` | the inputs list keeps only the listed inputs, the removed ones as the ghost | marks each beat of the agent's slot at which a removed input existed by the record: `@failure-report` at a hand-back whose latest earlier verdict is `fail`; `@verification-reports` at a hand-back after an earlier verification completion; `@final-review` at a hand-back after an earlier final-review completion; an input the record does not produce (`@work-order`, `@citations`, `@subject-files`, `package.json`, a document section) marks nothing, and the caption names it as present at every beat and not told apart by the record | `type` and `verdict` of the rows before each beat |
  | `setRung(id, rung)` | the id shows the rung the idea sets, beside the copy's "rung not recorded" | unchanged; the caption says no row records a rung | nothing: card-only |
  | `addWait(minutes, cause)` | what it waited on gains the operator's cause and minutes | the agent's hand-back and every later beat move right by the minutes, their recorded positions ghosted; earlier beats and gaps unchanged; the working total grows by the minutes | `recordedAt` |
  | `replaceProse(sectionKey, text)` | the section shows the operator's words under its key, the key's before as the ghost | unchanged; the caption says no row carries prose | nothing: card-only |

  The four gem and support kinds act alike on an id because the role copy
  lists mechanisms without a kind (WO-016); the operator's word for the id
  is the idea's and the card shows it as theirs. A mark says the input
  existed when the beat ran, never that the agent used it or what it would
  have done without it, and the caption says so. On WO-221, narrowing the
  verifier's knowledge away from `@verification-reports` marks beats 8 and
  14 and not 4; the reviewer's, beats 10 and 16; narrowing the repairer
  (the executor's entry) away from `@failure-report` marks beats 6 and 12;
  a wait on the verifier's beat-4 hand-back moves beats 4 to 16 and leaves
  1 to 3. Applied ideas fold in the order applied, per order; removing one
  recomputes from the copy.
- **The apply fold** (`libs/shared/records/src/lib/apply-ideas.ts`, pure):
  `applyIdeas(strip, roleMechanisms, applied, ideas)` folds the applied
  ideas over a copy of the strip and of the role copy per slot (the
  repairer's seeded from the executor's entry), with the input table above
  as a fixed map from an input to the row types and verdicts that produce it,
  and returns the redrawn view, the ghosts, the marks, the moves and one
  caption key per applied idea. It never mutates the copy. A drop is refused
  with a reason, and the strip and the card stay as they were, when the
  agent's slot is not in `appliesTo`, the target is an empty slot or the
  operator figure, a removed or re-ranked id is not on the agent's list, an
  added id is already there, a narrowing names an input the role does not
  read, a section key is not the role's, or a wait is not a positive whole
  number of minutes.
- **The ideas store** (`libs/features/machinery-data-access`):
  `MachineryIdeasStore` holds the shelf and the applied ideas per order,
  persisted with `withPersistedState({ key: 'machinery.ideas' })` under
  `dotln-angular.machinery.ideas`, apart from WO-016's page state, so a
  stored value that does not parse empties the shelf and leaves the page's
  order and anchor (I1); a `machineryIdeaEvents` group in the `ui` tier
  (created, selected, applied, refused, removed, marked did-not-stick) and an
  `ideaSinkEvents` group in the `data-access` tier (the post trinity, rule
  8). A drop is applied and persisted first, then, when
  `EnvironmentConfigToken`'s `ideaSinkUrl` is a string, posted as an
  `IdeaDrop` through the app's `HttpClient`; a failed post (the sink set but
  down) is the one `errorEvents.httpFailed` notice the error interceptor
  already dispatches, so nothing is lost and nothing blocks. The store
  imports no `records`; the facade composes them, as WO-016's does.
- **Feature** (`libs/features/machinery`): composites `idea-shelf` (the
  operator's cards as rows; the new-idea form with a title, a kind from a
  menu, its parameters, a mechanism id, input or section key chosen from the
  target role's own lists or typed, and the target slots; no generated
  cards), `use-case-caption`, `sandbox-band`, `refusal-notice` on the
  refused idea's row; the facade's `vm` adds `applyIdeas` over WO-016's
  fold; the ghosts drawn as WO-016's are. Select-then-apply with the
  keyboard and the pointer: pick a card, then an agent (a slot's occupant or
  a ghost); no drag. Every string on screen is a message (rule 9); the
  operator's own text (a title, a cause, replaced words, a typed id or
  input) is their input and is shown as typed inside a message frame, and
  ids, inputs and section keys are machine identifiers inside message
  frames (G3).
- **The idea sink** (`tools/scripts/idea-sink.mjs`, `npm run idea-sink`, a
  helper): a local Node process listening on `127.0.0.1`. Its settings are
  command-line flags and nothing else: `--port` (default 4310; 0 picks a
  free port, which it prints), `--dir` (default `docs/intake/ideas` in the
  checkout it runs from) and `--origin` (default `http://localhost:4200`).
  It accepts `POST /ideas` only when the request's `Origin` is the allowed
  origin and its `Host` is `127.0.0.1:<port>`; it answers the CORS preflight
  `OPTIONS /ideas` from that origin alone, allowing `POST` and
  `Content-Type`, and sets `Access-Control-Allow-Origin` to it on the post's
  response, because the development app at `localhost:4200` posting JSON to
  `127.0.0.1:4310` is a cross-origin request the browser preflights; any
  other origin or host is refused with 403 and another path with 404; it
  refuses a body over 16 KB with 413 and a body that is not a
  `machinery-idea-drop-v0` object with 400, never logs a body, and appends
  one JSON line per accepted drop to `ideas-YYYY-MM-DD.jsonl` (the UTC date)
  in the directory, creating it. It refuses to start when the directory lies
  outside the Git root of the checkout it runs from, the checkout is in no
  Git repository, the directory is not ignored (`git check-ignore -q <dir>`
  exits nonzero) or it lies under `docs/control/`, so an idea never lands in
  a tracked path, a control directory, another repository or the launchpad.
  `.gitignore` gains `/docs/intake/`.
- **Where the settings live.** The sink is a Node process, so none of its
  settings is browser configuration: they are flags, not environment
  variables, and nothing is added to `.env`, `.env.example` or
  `prime-environment.mjs`, which would throw on a new `DOTLN_` key in `.env`
  and whose values become public browser configuration. The browser needs
  only the sink's address: `EnvironmentConfig` gains an optional `readonly
  ideaSinkUrl?: string`, which `apps/dotln/src/environments/environment.ts`
  (the development server's) sets to `http://127.0.0.1:4310/ideas`;
  `environment.prod.ts`, `environment.mocked.ts` and the `local` profile
  `prime-environment.mjs` generates leave it absent, so production, the
  e2e's `mocked` build and the `local` profile never post, and the script
  and its generated file still satisfy `EnvironmentConfig` unchanged. A
  sink started with another `--port` or `--origin` is reached only by a
  development environment edited to match; a drop that cannot reach it is
  still applied and persisted.
- **Close and the intake file.** An undeclared ignored file refuses a
  release close in either checkout, so the launchpad write-back adds
  `docs/intake` to `classes.angular-nx-monorepo.disposable` in
  `dotln.config.json` (as WO-023 added `**/node_modules`): under the
  registration's `judge-only` base policy the operator's ideas in the base
  checkout are retained rather than refusing a close, and an order
  worktree's are deleted. The executor's and the verifier's live sink runs
  also remove the intake file they made after recording it, and record the
  removal, as the profile asks for generated local environment files.
- **Design brief** (WS-001 rule 25, for the region this order adds under
  §Design direction): the shelf as rows of the operator's own titles, each
  with its kind in words and its status; the caption as a sentence under the
  strip in the reading measure; the band as text, never a badge alone; a
  moved beat's recorded position as a ghost glyph, a marked beat as an
  outline in the phase palette with a text equivalent; nothing animated at
  rest (G2). The first pair: A, the shelf as a band of rows below the strip
  across the page's width; B, the shelf as a column beside the agent card it
  changes; one independent variable, where the shelf sits. Both built on the
  layout WO-016's rounds decided, rendered at about 2080 by 1460 and at 360
  during execution and read at 3840 by 1620 (rules 25 and 29), presented as
  A then B with the round named and both captions; the operator's preference
  makes the next pair, content and usability before polish, until the
  operator says the process is done; the decisions file records each round's
  pair and pick, the rejected implementation leaves the code when its round
  is decided with its screenshots and record under
  `docs/evidence/WO-042/design/`, and a decided choice is not relitigated.
  The operator may delay the rounds to the dedicated A/B testing pass: the
  order then records the first pair without a pick, ships A, and carries the
  rounds as a follow-up the planning pass filing that pass allocates.
- **Documents:** the target's `docs/dev-reference/architecture/machinery.md`
  gains the ideas: the table above with its input map, the refusals, the
  store's key, the sink, its flags and refusals, where its settings live and
  why, and the `machinery-idea-drop-v0` record; `docs/ai-reference/machinery-rules.md`
  gains: a drop changes a copy and claims presentation only; a beat moves or
  is marked only where a record field supports it; no generated cards;
  nothing writes a control record; the sink's settings are flags, never
  `.env`.

Rejected: the sink's port and directory as `DOTLN_` variables in
`.env.example` (axis: where a Node process's settings live;
`prime-environment.mjs` throws on an unlisted `DOTLN_` key in `.env` and its
values become public browser configuration); a non-`DOTLN_` variable in
`.env` (axis: that file is the browser configuration's by its header, and a
flag is visible where the command is run); moving or marking beats for every
kind (axis: honesty; no row field names a mechanism, a rung or prose, so a
mark would invent a link the record does not hold); simulating the order
under the change (axis: H5 and the non-goal; the twin's lane is where a
model of behavior lives, WO-017); generated idea cards from records (axis:
the operator's decision; the ideas are theirs); drag and drop now (axis:
select-then-apply first); the launchpad's intake as the sink's default
(axis: the app's process writes inside its own repository; the operator
points the sink elsewhere by one flag); posting before persisting (axis:
nothing is lost when the sink is down).

Live-run surfaces at the base: WO-016's page, copies and store once it
merges (none at `eb9d227`); WO-006's served production build; the
development server (`npx nx serve dotln`, run by every earlier executor);
WO-007's error notice.

**Deliverables:** the types and the drop schema; the apply fold and its
specs; the ideas store and its events; the shelf, form, caption, band and
refusal notice; the sink, its npm script and tooling test; the environment
field; the `.gitignore` line; the e2e and visual changes; the documents'
sections; the launchpad's disposable entry; `docs/evidence/WO-042/`.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-042: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, which contains
   WO-016's merge (`libs/shared/records/src/data/segments/order-221.json`
   exists; if it does not, stop: the hard dependency is unmet), and that
   integrated commit is the baseline of every later comparison; then the
   route guard and activation as WO-005 step 1. Check: the decisions carry
   the integrated commit.
2. `libs/shared/models/src/lib/machinery.ts` gains the Design's types;
   `libs/shared/records/src/schema/machinery-idea-drop-v0.schema.json`.
   Check: `npm run check:shared-types` exits 0; `npx nx test models` exits 0.
3. `libs/shared/records/src/lib/apply-ideas.ts` with the specs of criterion
   2, among them, on WO-221, a wait of 30 minutes on the verifier's beat-4
   hand-back that moves beats 4 to 16 and reads the gap before beat 4 as
   53.0 minutes and the span as 1,140.3. Check: `npx nx test records` exits 0.
4. `libs/features/machinery-data-access/src/lib/machinery-ideas-store.ts`
   with its two event groups in `libs/shared/events` and its testing kit.
   Check: `npx nx test machinery-data-access` exits 0; `npm run lint:hygiene`
   and `npm run check:kits` exit 0.
5. `libs/shared/core/src/lib/environment/environment-config.ts` gains the
   optional `ideaSinkUrl`; `apps/dotln/src/environments/environment.ts` sets
   it. Check: `npx nx test core` exits 0; `npm run typecheck:foundations`
   exits 0; `npm run test:tooling` exits 0 (the priming tests unchanged).
6. The feature: the shelf, the form, the caption, the band, the refusal
   notice, select-then-apply, the facade's `vm`; `machinery.*` keys in
   `apps/dotln/public/i18n/en.json` and the testing translations; stories
   `IdeaApplied`, `WaitAdded`, `KnowledgeNarrowed`, `CardOnly`, `IdeaRefused`
   and one per layout candidate while its round is open. Check: `npx nx test
   machinery` exits 0; `npm run lint:components`, `npm run i18n:check` and
   `npm run check:templates` exit 0.
7. The first pair (A the shelf below the strip, B beside the card) rendered
   at about 2080 by 1460 and 360 and read at 3840 by 1620; the rounds, or the
   operator's deferral to the A/B testing pass; the rejected implementation
   removed with its record. Check: `grep -c "Round"
   docs/evidence/WO-042/design/comparisons.md` is at least 1.
8. `tools/scripts/idea-sink.mjs`, the `idea-sink` script in `package.json`
   and `/docs/intake/` in `.gitignore`. Check: `node
   tools/scripts/idea-sink.mjs --port 0` from the worktree prints its port
   and stops on an interrupt.
9. `tools/idea-sink.test.mjs` with the tests of criterion 5, each sink run
   from a temporary Git repository on an ephemeral port. Check: `npm run
   test:tooling` exits 0.
10. `docs/dev-reference/workspace/scripts.md`: a Helpers row for `npm run
    idea-sink` naming `tools/scripts/idea-sink.mjs` (rule 26). Check:
    `npm run check:scripts` exits 0.
11. e2e: `apps/dotln-e2e/src/machinery.spec.ts` gains criterion 9's cases;
    `storybook.spec.ts` gains the new stories; the three `machinery-*.png`
    baselines regenerated with the reason named in the pull request. Check:
    `npx nx e2e dotln-e2e` and `npx nx e2e-visual dotln-e2e` exit 0;
    `npm run typecheck:e2e` exits 0.
12. Production: `npx nx build dotln --configuration=production`, then
    `grep -rl "127.0.0.1:4310" dist/apps/dotln/browser`; `npm run
    check:bundle`. Check: the build exits 0, the grep prints nothing,
    `check:bundle` passes.
13. The live sink run: from the target worktree, `npm run idea-sink` and
    `npx nx serve dotln` side by side; apply one idea; record in
    `docs/evidence/WO-042/sink-run.md` the line appended to
    `docs/intake/ideas/ideas-<UTC date>.jsonl` (its `idea.id` and `schema`)
    and `git status --porcelain --ignored docs/intake` before removal; stop
    the sink, apply a second idea and record that it stayed applied and one
    notice showed; remove `docs/intake/` and record the removal. Check: the
    evidence file exists and `ls docs/intake` fails.
14. The walkthrough: the executor performs the Objective's session in the
    served production build, saves one screenshot per step at 360, 768, 1440,
    about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-042/walkthrough/` and writes
    `docs/evidence/WO-042/walkthrough.md` with the dated steps and what the
    caption said at each drop. Check: the files exist.
15. Documents: the sections of `machinery.md` and `machinery-rules.md` the
    Design lists. Check: `grep -c "machinery-idea-drop-v0"
    docs/dev-reference/architecture/machinery.md` is at least 1.
16. Dependency check as WO-015 step 15. Check: prints nothing.
17. Gate plain and review. Check: passing rows, no tracked-byte mutation.
18. Launchpad write-backs: `dotln.config.json` adds `docs/intake` to
    `classes.angular-nx-monorepo.disposable`, and
    `docs/repositories/dotln-angular.md` §What close deletes, retains or
    refuses lists it with its reason and §Find the implementation's machinery
    subsection gains the ideas and the sink; WS-001 operating rule I2 names
    this order as the sink's, and §Delivery states and §What has landed and
    what lies ahead are updated by the final review. Check: `npm run
    test:docs`. Then the publish, review and records steps as WO-007 steps 15
    to 17, with the branch `feat/machinery-ideas`, the title `feat: let the
    operator try their own mechanism ideas on the machinery view`,
    `docs/evidence/WO-042/` and `docs/final-reviews/WO-042/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run lint:hygiene`, `npm run check:fixtures`, `npm run check:scripts`,
`npm run test:tooling`, `npm run i18n:check`, `npm run typecheck:e2e`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`, `npx nx e2e-visual
dotln-e2e`; in the launchpad order worktree `npm run test:docs`; then the
target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: open `/machinery` on WO-221; create four
   ideas in the shelf, one narrowing the verifier's knowledge away from
   `@verification-reports`, one adding a wait with a cause to the verifier
   at its first hand-back, one removing a mechanism from the reviewer and one
   replacing a section of the executor's prose; apply each to the agent it
   names and read the card's redraw with its ghost, the strip's marks or
   moves, the caption and the band; drop an idea on an agent its `appliesTo`
   excludes and read the reason; mark an idea did-not-stick; reload and find
   the shelf and the applied ideas; switch to WO-226 and apply the knowledge
   idea to its reviewer. The VER report carries a `## Walkthrough` section
   with the dated steps and names the screenshots at 360, 768, 1440, about
   2080 by 1460 and 3840 by 1620 under `docs/evidence/WO-042/walkthrough/`,
   and states in the verifier's own words what each applied idea showed in
   the use case and what the page said the record cannot support, as read
   from the page alone. Met only when every step completed and that
   statement is present; a UI issue at about 2080 by 1460 or 3840 by 1620
   fails this criterion, and one at another size is a boarded follow-up
   (rule 29).
2. `npx nx test records` exits 0 with `apply-ideas` specs asserting each row
   of the Design's table on the copies: on WO-221, narrowing the verifier
   away from `@verification-reports` marks beats 8 and 14 and not 4, the
   reviewer's marks 10 and 16, and the repairer's away from `@failure-report`
   marks 6 and 12, while narrowing away from `@work-order` marks none and
   its caption names the input; a wait on an agent's hand-back moves that
   beat and every later beat by the wait and no earlier beat, and the
   working total by the same; each of the six card-only kinds leaves every
   beat's position and marks as the fold gave them and returns the caption
   key that names what the record does not carry; on WO-226 the same
   reviewer narrowing marks beat 6 and the verifier's marks none; each
   refusal of the Design returns its reason and leaves the strip and the
   card equal to the unapplied ones; and the copy passed in is unchanged
   after every call.
3. A spec with empty storage asserts the shelf renders no card at first
   render; the form creates a card of each of the eight kinds, each with
   `by: 'operator'` and `claims: 'presentation-only'`; and a spec validating
   drops against `machinery-idea-drop-v0` sees a drop whose idea's `by` is
   anything but `operator` refused.
4. The ideas store's specs assert every key written starts with
   `dotln-angular.machinery.ideas` and no cookie is written; with
   `ideaSinkUrl` set, applying an idea persists it before exactly one `POST`
   to that URL whose body validates as `machinery-idea-drop-v0`, and with it
   absent no request is made (`HttpTestingController`); with the post
   failing, the idea stays applied and persisted and exactly one
   `errorEvents.httpFailed` is dispatched; and a spec seeding
   `dotln-angular.machinery.ideas` with a value that does not parse asserts
   the shelf renders empty while the strip and WO-016's persisted order and
   anchor render.
5. `npm run test:tooling` exits 0 with the sink's tests: one accepted post
   appends one JSON line to `ideas-<UTC date>.jsonl` in a temporary ignored
   directory; a body over the Design's size limit is refused with 413 and a
   body that is not a `machinery-idea-drop-v0` object with 400, each
   appending nothing; a
   request whose `Origin` is not the allowed origin or whose `Host` is not
   the loopback address and port is refused with 403; the preflight from
   the allowed origin is answered with the allow headers and from another
   origin refused; the sink refuses to start on a directory that is not
   ignored, that lies outside the Git root of the checkout it runs from, that
   lies under `docs/control/`, or from a directory in no Git repository; and
   neither its standard output nor its standard error carries a marker
   string placed in a posted body.
6. The sink's settings are not browser configuration: `git diff --exit-code
   <integrated base> -- .env.example tools/scripts/prime-environment.mjs`
   exits 0 on the candidate; `grep -c ideaSinkUrl
   apps/dotln/src/environments/environment.prod.ts
   apps/dotln/src/environments/environment.mocked.ts` prints 0 for each; and
   after `npx nx build dotln --configuration=production`, `grep -rl
   "127.0.0.1:4310" dist/apps/dotln/browser` prints nothing.
7. In the target worktree, `git check-ignore -q
   docs/intake/ideas/ideas-2026-01-01.jsonl` exits 0.
8. The live sink run: the verifier, from the target worktree, runs `npm run
   idea-sink` beside `npx nx serve dotln`, applies an idea, reads one new
   line in `docs/intake/ideas/ideas-<UTC date>.jsonl` that parses as
   `machinery-idea-drop-v0` and names that idea, and finds `git status
   --porcelain` printing nothing for `docs/intake/`; then stops the sink,
   applies another idea, sees one notice and finds the idea applied after a
   reload; then removes `docs/intake/` and records the removal. Where the
   verifier's host cannot run the development server or bind the loopback
   port, the verifier records the run untested with the reason and judges
   this criterion from criterion 5's tests and the executor's
   `docs/evidence/WO-042/sink-run.md`.
9. `npx nx e2e dotln-e2e` exits 0 and includes: an idea created in the form
   and applied to the verifier redraws its card with the ghost, the band and
   a caption; a wait idea moves the beat after its target right and leaves
   the earlier beats in place; a knowledge idea marks the eighth and
   fourteenth beats and not the fourth; a card-only idea leaves every beat
   where it was and its caption says why; a refused drop is visible on its
   row with its reason; the shelf and the applied ideas are present after a
   reload; no request leaves the page for the sink in the `mocked` build;
   the keyboard path across the shelf, the form and the agents; axe at the
   board spec's threshold; no horizontal overflow at 360, 768, 1440, about
   2080 by 1460 and 3840 by 1620; and `npx nx e2e-visual dotln-e2e` exits 0
   with the regenerated `machinery-*.png` baselines named in the pull request.
10. `npm run check:scripts` exits 0 with the `idea-sink` row; `npm run
    check:bundle` passes; `package.json`'s `dependencies` keys equal the
    integrated base's; and `grep -rlE "from 'node:|from \"node:|require\("
    libs/shared/records/src libs/features/machinery/src
    libs/features/machinery-data-access/src --include='*.ts' | grep -v spec`
    prints nothing.
11. `docs/evidence/WO-042/design/comparisons.md` records the first pair (A
    the shelf below the strip, B the shelf beside the card) rendered at about
    2080 by 1460 and 360, and either every later round with its pick and the
    operator's word that ended the rounds, with the decisions file naming the
    removed candidate's files and `ls` on each printing nothing, or the
    operator's deferral of the rounds to the dedicated A/B testing pass, the
    first pair without a pick, A shipped and the follow-up recorded in the
    decisions file (rule 25).
12. `node scripts/target-gate.mjs WO-042 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the Preflight
    line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-042/README.md`, `design/`, `sink-run.md`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-042/host-qualification.md`.

**Known issues and carry-ins:** This order activates after WO-016 merges;
its base is the 2026-11-09 pass's pin, and step 1 fast-forwards to the
target's `main`, whose WO-016 merge every comparison reads; the integrated
base is the one step 1 records. The table replaces the earlier rule that
only `addWait` moves the beats and every other change leaves them unchanged
(receipt 008, carried by the 2026-10-24 second pass): it keeps that rule for
the kinds no row field supports, and adds the marks a narrowed knowledge
earns from `type` and `verdict`; `machinery.md` carries the rule per kind,
receipt 010's item (d). Carried from WO-016's text: a drop while the sink is
down is applied and persisted before the post, and the sink refuses a
directory that is not ignored (receipt 009); the sink checks `Origin` and
`Host` (receipt 010 (a)), its default directory is DotLn-Angular's own
ignored tree and never the launchpad's intake (010 (b)), and a stored value
that fails to parse is covered by a spec (010 (e)); the sink refuses a
directory outside the Git root of the checkout it runs from (receipt 011
(a)). Corrected by the 2026-11-09 pass: the earlier text documented the
sink's port and directory as `DOTLN_` variables in `.env.example`, which
`prime-environment.mjs` refuses and whose values become browser
configuration; it omitted the CORS preflight a JSON post from the
development origin needs; its "never a control directory" had no rule that
refused `docs/control/local/`, which is ignored and inside the root; and its
fixture grep for the word generated read a directory no step created. The
role copy lists mechanisms without a gem or support kind, so the four gem
and support kinds act alike and the card shows the operator's word. A
"rung" is the platform's mechanism-hierarchy rung (its product document 02),
which no row records. The page's caption is the reading; the intake file is
the operator's own record; promotion is a GitHub issue the operator files
(candidate C4 is the graduation route). This order activates only on a
launchpad whose starter carries core WO-221's `--draft` form; the draft
pull request and its workflow runs are a final-review obligation read from
`docs/evidence/WO-042/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** simulating the order under a change, re-running an agent or
any beat effect beyond the table; drag; generated idea cards; promotion from
the app (candidate C4); the sink in production or in the `mocked` and
`local` builds; a sink setting in `.env` or `.env.example`; any write outside
browser storage and the local sink; writing a kit, role or control file; the
replay clock (WO-017).

**Operator-review assumptions:** the operator accepts that a change moves or
marks beats only where the record supports it and is otherwise card-only
with the caption saying so, runs the idea sink beside the development server
from their own checkout when they want ideas saved, judges the first pair at
their sizes and ends the rounds in their own words or defers them to the
A/B testing pass, and reads the one draft pull request before final review,
which the final publish reuses.
