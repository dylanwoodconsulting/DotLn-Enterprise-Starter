# WO-016 — The machinery view: one recorded order's beats across the page, the agent that filled each role slot with its hand-back card and a refilled slot's earlier occupant as a ghost, and an agent's card reading what it was obliged to do, what it ran with and what it waited on, over scrubbed six-field copies of the platform's WO-221 and WO-226 records and the shared records library

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `machinery.ts` to `libs/shared/models`, `libs/shared/records`
(reader, fold, loader and store, the committed copies and their schemas,
the testing kit), the `machinery` feature's page, strip, slots, hand-back
and agent cards, facade and layout, `libs/features/machinery-data-access`
(the page's store), the reducer `tools/scripts/reduce-platform-records.mjs`
and the copy check `tools/scripts/check-record-copies.mjs` with their tooling
test and `scripts.md` rows, the lazy message scope of the role obligations,
`apps/dotln-e2e/src/machinery.spec.ts`, two documents and the edits
WO-026-D012 names; about 50 source files (the planner's estimate); adds no
runtime dependency. Removes the arriving page WO-013 shipped for
`/machinery`, its story, its spec and its deep-link e2e test, and
regenerates the three `machinery-*.png` baselines. Wall-clock: about 5 to 8
hours of executor work plus the design rounds and the fixed cycle; unknown
until run. Context bytes: WS-001 §The app and its sub-apps, rules 9, 15,
22 to 26 and 29, design A §1 and §1.6 read at the run's folder, the
precedents named in the Cites line, this order, about
200 KB for the executor; the platform's sources at the pin (about 125 KB)
are read by the reducer, not into context. Commands added in the target:
none (`check:fixtures` gains the copy check; the reducer is a helper run by
hand). Tokens: unknown until run. Steps: 18. Re-mints: none. Refutations paid: five (receipts 008 to 012, on the texts before the 2026-11-01 second pass's authorized amendment, WO-016-D001, which the next planning pass's refutation judges), and the 2026-11-09 pass's receipt.
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
the machinery view shows an agent, a change to its gems, supports or
mechanisms dropped on it, and what changes in the example use case, so the
operator can tune the mechanisms until they run without them and then see
agents working in concert; workers are metaphors, today separate agents in
their role slots; select-then-apply first, drag later; the ideas the operator
drops are theirs and are also saved to ignored intake; scrubbed copies of the
platform's WO-221 and WO-226 records are a stopgap. Design files this order
builds from, read at the run's folder on this machine (core's ignored intake,
read-only; digests pin what was read): `out/angular/design-agents-in-concert.md`
§1 (the concert strip) and §1.6 (its first buildable slice; SHA-256
`70d14655e88d5540b92e1700e56a385bb700b0e2a3152897882ecf0a74023676`);
`out/process/ui-vision-see-the-agents.md` §4 (the idea card as data and how
a drop changes an example without changing the platform) and V7 (SHA-256
`d3bbf3a21e5b0892e117d71d604acd779e8fdbe08350f0cf3a9bd074f0fcedd2`);
`out/angular/dotln-angular-forward.md` §2.0 (the shared substrate's lint
placement; SHA-256
`c05dea11b47547b5e6dd9e9880758539c3a36648cda1d281a7b9a54a1f8daaf8`). The design files are the operator's own research and lie outside the clean room (WS-001 rule 23 as corrected on 2026-10-26). Planner-synthesized by the 2026-10-24 planning pass
([planning document](../planning/passes/mining-run-orders-2026-10-24.md) §4 (the
re-derived WO-221 and WO-226 tables), §6 D8 and §9). Opaque identifier, not a
priority. Amended by the 2026-10-24 second pass ([planning document](../planning/passes/standard-pass-v0-96-1-2026-10-24.md)
§6 D3 and D4): the fixture file names, criterion 3's starter and counts, the
records types' name, the caption rule, the base clause and receipt 008's known
issues. Amended by the 2026-10-25 pass ([planning document](../planning/passes/standard-pass-v0-99-0-2026-10-25.md)
§6 D4): receipt 009's known issues (the `actor` composite and its scrub, the
repairer slot, the sink's directory rule and a drop while the sink is down). Amended by the 2026-10-26 pass ([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the sink checks `Origin` and `Host` (its item (a)), its default directory is DotLn-Angular's own ignored tree and never the launchpad's intake (b), criterion 3 reads the counts the executor recorded and names no starter's figures (c), `machinery.md` carries the rule per idea kind (d), a stored value that fails to parse is covered by a spec (e), the fixtures' `actor` values are the observed labels (f), the row counts are asserted by a spec rather than a line grep (g), and the copies' sources are the platform's public repositories (h). Amended by the 2026-10-28 pass ([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the sink refuses a directory outside the Git root of the checkout it runs from (its item (a)), the verifier recounts the stamp ids independently (b), a planner, refuter or release-close actor is an `unknown`-slot beat naming the role (c), and the reducer's scrub fails a run of 32 or more hexadecimal characters and a UUID shape (d). Amended by the 2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D8): split in two, this order keeping the types, the records library over the copies and the page of one recorded order's beats, slots, hand-backs, ghosts and agent cards, while the idea shelf, select-then-apply, the redraw, their persistence and the local idea sink moved to WO-042 and the replay clock to WO-017; the base set to `eb9d227`; the copies made production data loaded as lazy chunks; the platform commit pinned with its fallback and the source digests; the role copy read from the platform at that commit, six roles; the agent card made prose; the recount criterion replaced by a reproduction; the WO-026-D012 places, the e2e, Storybook and visual carry-ins; the rule 25 pair at the operator's sizes with the deferral route and the rule 29 walkthrough sizes.
**Depends on:** WO-013 merged (hard: the `/machinery` route and the Machinery
menu group; merged as DotLn-Angular #6, which the base contains).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-013",
    "relation": "hard",
    "reason": "the machinery route and menu group this order fills; merged, and the base eb9d227 contains it"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 3, 5, 8, 9, 12, 15, 18, 19, 22 to 26 and 29; §The app and its
sub-apps, G1 to G6, §Design direction, operating rules I1 to I3);
`docs/repositories/dotln-angular.md` (§Run the app and its checks);
`docs/operator/README.md` (§How the operator directs a session: design
comparisons); the target's `docs/ai-reference/*`,
`libs/shared/catalog/src/lib/catalog-loader.ts` (the lazy-chunk loading of
committed data), `tools/scripts/scrub-board-fixture.mjs` and
`check-board-fixtures.mjs` (the scrub and check this order's copy check
follows), `eslint.config.mjs` (the `type:data-access` constraint),
`docs/dotln/evidence/WO-026/decisions.md` (WO-026-D012) at the base; the
platform's public `docs/control/orders/WO-221.jsonl` and `WO-226.jsonl`,
`.claude/skills/dotln-*/SKILL.md`, `.claude/agents/dotln-worker.md` and
`scripts/lib/off-ramps.mjs` (`recordingSession`) at
`49d8c4c364dc5986e8c76b4ac27a0110c380206f`; design A at the sections named
above and `dotln-angular-forward.md` §2.0 (the UI vision's §4 and V7 are
WO-042's).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
`/machinery` and sees one recorded order, WO-221, as a strip of beats left
to right in recorded time, the distance between beats proportional to the
minutes between rows, each gap's minutes beside it and the strip's source
named; above it the four role slots (executor, verifier, repairer,
reviewer) and the operator as a figure at the edge. They step the anchor
along the beats with the keyboard or by pressing a beat and watch the slots
fill: each slot shows the agent that made the next hand-back, labelled by
harness, model and effort, with a hand-back card reading pass, fail or no
verdict, and a refilled slot keeps its earlier occupant as a ghost. They
open an agent and read its card: what it was obliged to do, the mechanisms,
inputs and prose sections its role file names (with the card saying the
record does not carry what this agent itself ran with), and what it waited
on, the request that dispatched it and the minutes since the previous
hand-back while nobody dispatched. They switch to WO-226 and compare. What
the operator learns is where the order's time went, which agents handed
back what, and where the long gaps sit; what they decide is which agent's
mechanisms they want to try changing first (WO-042 lets them try). Nothing
leaves the browser but the page's own state in browser storage.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `/machinery` renders
WO-013's arriving page
(`libs/features/machinery/src/lib/containers/machinery-arriving-page/`), an
empty state whose message names the order that replaces it and a link back
to the board; the app has no record reader, fold or copy of a control
segment (`git grep` finds no `ImplementationReady` or `control-event-lite`
outside `docs/dotln`), and `libs/shared/records` and
`libs/features/machinery-data-access` do not exist. The platform's public
segments at `49d8c4c364dc5986e8c76b4ac27a0110c380206f` (2026-10-23;
`git diff` to the platform's `main` at `06c1ddc1a` is empty for both files),
re-derived by this pass: WO-221 has 16 rows, 8 of them operator rows (the
activation, three verification requests, two repair requests, two
final-review requests, none carrying an actor), hand-backs at rows 2
(implementation, no verdict), 4 (verification, fail), 6 (repair), 8
(verification, pass), 10 (final review, fail), 12 (repair, `subagents`
mode), 14 (verification, pass) and 16 (final review, pass), seven gaps after
a hand-back of 87.8, 109.9, 1.7, 1.4, 2.1, 18.2 and 5.9 minutes, a span of
1,110.3 minutes, hand-backs by three models on two harnesses; WO-226 has 6
rows, 3 operator rows, hand-backs at rows 2, 4 (pass) and 6 (pass), no
repair, two gaps after a hand-back of 316.0 and 31.7 minutes and a span of
580.2 minutes. No row of either segment carries an `ordinal` (the platform
numbers a row by its line, `index + 1` in `scripts/lib/control.mjs` at the
pin) or a `recordingSession`, so `actor.role` is absent from every row of
both copies. The platform's role files at the pin are six role skills
(executor, planner, refuter, release-close, reviewer, verifier; the router
arrived later and the launchpad carries seven at starter v0.122.1), whose
Origin stamps carry 19 ids for the executor and 13 for each other role, and
the worker type with 6; each skill's `description` line states its
obligation, its `Read:` lines name its inputs, and it carries no Markdown
headings (its prose is numbered steps and single lines). The SHA-256 of the
inputs at the pin: `WO-221.jsonl`
`3fc912a0353145d51532d602af051eead4ce23f7f8bacd425a7fc99e0daef700`,
`WO-226.jsonl`
`80ee59928e50f061e47e6a278d370e36abd91c0073fb0c9063e17fca4221b726`,
`dotln-executor/SKILL.md`
`343e85e63ea1be3a1c8a8eb1ebf4b6b321af340630ef60c55dacda347b5c8252`,
`dotln-planner/SKILL.md`
`7f61afac312419fd9da367f45e64d0c33c39d691d20a4857ea12f4c00b5d98f7`,
`dotln-refuter/SKILL.md`
`1bb6162e0a616b5abb5c0c28ba595e40b14e2665a868f9368efedd5210d0058c`,
`dotln-release-close/SKILL.md`
`9b963151ec36593c6d1ab4d23aaed2fc4e389b0e6d74dc37580a1c05ad136432`,
`dotln-reviewer/SKILL.md`
`19d1333401d1e93e58df283813bca4434796fb1ed85e3c71906908f960d68566`,
`dotln-verifier/SKILL.md`
`f4aa1a2be5fe0f80350447f2bf6c6b8292ea45879df933c4f1c9fbdb6bb78f98`,
`.claude/agents/dotln-worker.md`
`0fe2f73e073b63950542d57ef7dca667afe89e86b501df378ad69cc50ffe915b`. At the
target: production excludes the mock worker and the fixtures (the profile,
§Run the app and its checks), and the catalog's committed data reaches
production as lazy chunks (`catalog-loader.ts`); a `type:data-access`
library may import only `layer:shared-data-access`, events, models, core
and util (`eslint.config.mjs`), so a feature's data-access library cannot
import another data-access library such as `records`; `DotLnRole` in
`libs/shared/models/src/lib/toolbox.ts` already names the eight roles;
`check:fixtures` chains the board, scene, catalog and study checks;
`check:scripts` requires a `scripts.md` row for each npm script and each
`.mjs` file directly under `tools/scripts`; `check-foundation-types.mjs`
lists each library it compiles by name. The arriving page is asserted by
`apps/dotln-e2e/src/sub-apps.spec.ts` (its deep-link, axe and viewport loop
over `machinery`, and the keyboard test's `/machinery` heading),
`sub-apps.visual.spec.ts` (the empty state and the baselines
`machinery-360.png`, `machinery-768.png`, `machinery-1440.png`) and
`storybook.spec.ts` (`machinery-arriving-page--default`), and described by
the five documents WO-026-D012 names.

**Design:**

- **Types** (`libs/shared/models/src/lib/machinery.ts`, `type:models`):
  `ControlEventLite { ordinal, type, recordedAt, workOrderId, actor?: {
  harness, model, effort, mode?, role? }, verdict?: 'pass' | 'fail' }` and
  nothing else, the operator's field list (`actor` is one composite object
  with exactly those keys, declared in the schema with
  `additionalProperties: false`; a slot label reads its three values as
  they are, and the reader never splits or derives them). `role` is
  `Exclude<DotLnRole, 'repairer'>`, reusing the existing union (rule 13):
  the six role skills the platform carried when it recorded these rows
  (executor, verifier, reviewer, planner, refuter, release-close) and
  `operator`. The copies are of rows recorded between 2026-10-18 and
  2026-10-22, before the router existed, so a row of the copies can carry no
  other role; `repairer` is a slot, never a recorded role. `role` is kept
  from `recordingSession.role` where a row records one, and absent where the
  row records none or records the kit's `unobserved` sentinel, which
  `recordingSession` in `scripts/lib/off-ramps.mjs` writes when no harness
  session was observed. `SlotId` (`executor`, `verifier`, `repairer`,
  `reviewer`); `Beat` (the row, its offset in minutes, its slot or `unknown`
  with the role it names, the colony flag); `Episode` (a request or the
  activation and the hand-back that follows); `SlotFill` (the agent that
  filled a slot at a beat); `OrderStrip` (beats, episodes, the fills of each
  slot, totals of waiting minutes, after a hand-back until the next request,
  and working minutes, from a request to its hand-back, and omissions; named
  a strip, not a scene, so that "scene" stays the scene engine's and the
  catalog's word); `RoleMechanisms { role, mechanisms: string[], reads:
  string[], proseSections: string[], obligationKey, source: { repository,
  commit, file, sha256 } }`.
- **Records** (`libs/shared/records`, `scope:shared`, `type:data-access`,
  `@dotln-angular/records` and `/testing`). The copies are production data,
  not test fixtures: `src/data/segments/order-221.json`,
  `src/data/segments/order-226.json` and `src/data/role-mechanisms.json`,
  each loaded as its own lazy chunk through `import()` the way
  `catalog-loader.ts` loads the catalog, so the production build, which
  excludes MSW and its fixtures, renders them and nothing fetches them over
  HTTP; the schemas `src/schema/control-event-lite-v0.schema.json` and
  `role-mechanisms-v0.schema.json`. `records-reader.ts` (a copy's rows to
  `ControlEventLite[]`, tolerant of an unknown `type`, which becomes an
  `unknown` beat and is never dropped); `order-fold.ts` (rows to
  `OrderStrip`: the slot for a row is a fixed table by `type`, the
  implementation hand-back to the executor, a verification completion to the
  verifier, a repair completion to the repairer, a final-review completion to
  the reviewer, every request and the activation to the operator, else
  `unknown`, and a row whose `actor.role` is `planner`, `refuter` or
  `release-close` is an `unknown`-slot beat that names the role, never
  dropped (the slot table reads `type` and the role reads `actor.role`, so
  two rows whose other actor labels match are told apart); gaps from
  `recordedAt` differences; every hand-back after a slot's first makes the
  slot's previous occupant a ghost, because each hand-back ends that agent's
  turn and the record carries no session identity to say two turns were one
  agent; a `mode: 'subagents'` actor flagged as a colony of unknown size;
  what each agent waited on, the request that dispatched it and the minutes
  from the previous hand-back to that request); `records-loader.ts` and
  `RecordsStore` (the loaded copies with WO-007's call state and the load
  trinity in a `recordsEvents` group of `@dotln-angular/events`'
  data-access tier, so WO-017 reads the same store); the `/testing` entry
  point's `provideRecordsTestKit()` and synthetic rows (an unknown `type`,
  and rows whose `actor.role` is `planner`, `refuter` or `release-close`).
  The two segment files are named by the platform order's number alone,
  never `WO-NNN`, because the target's outward lint refuses a launchpad
  identifier in any path the pull request's Change table lists (core's answer
  of 2026-10-24, item 1); the platform id stays inside each file as
  `source.order`.
- **The reducer** (`tools/scripts/reduce-platform-records.mjs --platform
  <git directory> --commit <sha> [--out <directory>]`, a helper run by
  hand): reads each input with `git -C <platform> show <commit>:<path>`,
  never checking anything out, and prints each input's SHA-256. From each
  segment it keeps exactly the fields of `ControlEventLite`, numbers
  `ordinal` from 1 by line, maps `recordingSession.role` to `actor.role`
  under the rule above, refuses any other role value, and writes `{ schema:
  'control-event-lite-v0', source: { repository: 'DylanBWood/DotLn', commit,
  order, sha256 }, rows }`. From each role skill and the worker type it
  writes a `RoleMechanisms` entry: the Origin stamp's `ids` in stamp order,
  the targets of its `Read:` lines, its section keys (`step-<n>` for a
  numbered step and `line-<n>` for each other non-empty line by position,
  the bare `Rules:` marker excepted; the rule is recorded in the file), and
  the key of its obligation, whose text, the skill's `description` line, it
  writes to the lazy message scope `apps/dotln/public/i18n/machineryRoles/en.json`
  (rule 9: a record field reaches the screen as a message, as the study
  scopes do); `role-mechanisms.json` maps the four slots to roles, the
  repairer to the executor's entry, because the repairer is the executor role
  at `resume: fix` (the executor skill's `description` at the pin). It runs
  the scrub over every value in `rows`: each `actor` value must read as a
  harness, model or effort label, or for `actor.role` as one of the role
  names the type lists, and a row value carrying `@`, a path separator, an
  absolute path (the board scrub's rule, imported from
  `scrub-board-fixture.mjs`), a dotted hostname, a run of 32 or more
  hexadecimal characters or a UUID shape fails. Over the role copy, whose
  `Read:` targets are repository-relative paths and `@` selectors by
  design, an absolute path, a run of 32 or more hexadecimal characters or a
  UUID shape fails. The `source` blocks are the reducer's own output from
  its arguments, validated by the schemas' patterns (a 40-character commit,
  a 64-character digest) and outside the scrub, which would otherwise refuse
  the commit they must name. It formats each file with the workspace's
  Prettier and its configuration before writing, so `nx format:check`
  passes on the bytes it wrote, prints PASS or FAIL without values, and
  with `--out` writes the same four files under that directory, so a second
  run reproduces the committed bytes. The
  copies carry the `actor` values the platform's rows recorded (harness,
  model and effort as observed labels, never a pin). The platform is a
  public repository (`DylanBWood/DotLn` on GitHub); on this machine a clone
  sits beside the launchpad.
- **The copy check** (`tools/scripts/check-record-copies.mjs`, in
  `check:fixtures`): Ajv 2020 over the two segment copies and the role copy
  against their schemas with `additionalProperties: false`, the
  reducer's scrub over the same values, and every `obligationKey` present
  in the `machineryRoles` scope; PASS or FAIL without values.
- **The page's store** (`libs/features/machinery-data-access`,
  `scope:dotln`, `type:data-access`): `MachineryStore` holds the selected
  order, the anchor and the opened agent, and persists the selected order and
  the anchor with WO-007's `withPersistedState({ key: 'machinery' })` under
  `dotln-angular.machinery` (I1); the strip derives from the copy and never
  persists. It imports no `records` (the `type:data-access` constraint);
  the feature's facade composes the two. Events in a `machineryPageEvents`
  group of the `ui` tier.
- **Feature** (`libs/features/machinery`, replacing the arriving page):
  `machinery-page` (container) over `MachineryFacade` (`vm = computed(() =>
  toView(fold(copy), roleMechanisms, anchor))`); composites `beat-strip`
  (beats as buttons with pressed state; gaps as inline SVG widths with a
  floor so a one-minute gap stays visible; a text equivalent per gap; the
  strip's source, the platform repository and the pin, named under it, G6),
  `slot-row` (four slots and the operator figure; ghosts as reduced-opacity
  figures with an earlier-occupant line), `hand-back-card` (pass, fail or no
  verdict), `agent-card` (below); mappers `beat-label` (a `type` to its
  message), `phase-glyph` (native emoji with a text equivalent, G5),
  `gap-scale`; a layout. Order switch WO-221 and WO-226. The anchor steps
  with the keyboard and by pressing a beat; an agent opens from its slot or
  its ghost. Every string on screen is a message (rule 9): beat types, slot
  and role names, the caption and the gap and total figures are keys under
  `machinery.*` in `apps/dotln/public/i18n/en.json`; the obligations come
  from the `machineryRoles` scope; harness, model and effort labels,
  mechanism ids, input targets and section keys are machine identifiers
  shown inside message frames (G3). The menu keeps its Machinery link and
  label; the testing translations equal the app catalog's `machinery` block,
  asserted beside the tools and scene blocks in `tools/i18n-copies.test.mjs`.
- **The agent card** is prose and structured reading in the catalog's
  measure, never a key-value list or a definition-list grid (WS-001 rule 24,
  G6 and §Design direction): a badge of harness, model and effort, and the
  colony flag where the actor ran subagents; a sentence of what it was
  obliged to do (the obligation message); what it ran with, as its role
  file reads at the pin, its mechanisms as a readable list of names, its
  inputs as a list of names and its prose sections by key, under the
  caption that the record does not carry what this agent itself ran with
  and the role file is the platform's at the pin, a day after WO-226's last
  row; and what it waited on, the request that dispatched it and the minutes
  since the previous hand-back, labelled nobody dispatched. The repairer's
  card says the repairer runs the executor role at `resume: fix`.
- **Design brief** (WS-001 rule 25): the strip is a timeline instrument
  across the page's width, the gaps drawn as distance with their minutes
  beside them, the beats as glyphs in one phase palette; the four slots as
  figures above it in the one role palette the scene and the catalog share, a
  ghost at reduced opacity; the agent card as prose in the catalog's measure
  as above; nothing animated at rest. The comparison is the operator's eye
  doctor test: the first pair is the slots above a horizontal strip (A)
  against the slots beside a vertical one (B), one independent variable, the
  strip's axis; both built and rendered at about 2080 by 1460 and at 360
  during execution and read at 3840 by 1620 (rules 25 and 29), presented as
  A then B with the round named in the question and both captions; the
  operator's preference makes the next pair, content and usability before
  cosmetic polish, until the operator says the process is done, and a
  preferred candidate alone is not acceptance; the decisions file records
  each round's pair and pick, the rejected implementation leaves the code
  when its round is decided (its screenshots and an implementation record
  under `docs/evidence/WO-016/design/` are the history), and a decided
  choice is not relitigated for this order. The operator may delay the
  rounds to the dedicated A/B testing pass: the order then records the first
  pair without a pick, ships A, and carries the rounds as a follow-up that
  the planning pass filing the A/B testing pass allocates.
- **Documents:** `docs/dev-reference/architecture/machinery.md` (the records
  library and its store, the copies, the reducer and its field list, the
  slot table, the ghost rule, the role copy's source and its section rule,
  what the view claims and does not) and `docs/ai-reference/machinery-rules.md`
  (copies carry the six fields and no path; the fold decides nothing and
  derives slots from the type table; an unknown type renders as unknown,
  never dropped; the copies are production data loaded as lazy chunks;
  nothing writes a control record), with pointers from
  `docs/dev-reference/README.md`'s table and `docs/ai-reference/README.md`;
  the places WO-026-D012 names, which describe the placeholder: `README.md`'s
  menu table, `docs/dev-reference/README.md`'s first paragraph,
  `docs/dev-reference/architecture/sub-apps.md`'s opening, its table and its
  sentence that `libs/features/machinery` is the smallest form,
  `docs/dev-reference/workspace/storybook.md`'s visual list and
  `libs/features/machinery/README.md`; the generated READMEs of the two new
  libraries and their testing entry points replaced as rule 19 directs.

Rejected: reading the platform's resident over its loopback (axis: the
operator's decision that the app is not wired to core; the stopgap is a
scrubbed copy, the store comes later); serving the copies through MSW as the
board's fixture is served (axis: production excludes the mock worker and its
fixtures, so the production page would render nothing; the catalog's lazy
chunks are the committed-data route that reaches production); reading the
role mechanisms from the launchpad's role files at activation (axis: what the
recorded agents ran with; the platform's files at the copies' own commit are
the nearest record of that, while the launchpad's are the fork's at a later
starter and carry a role, the router, that did not exist when the rows were
recorded); a ghost only where a refill changes the actor's labels (axis: the
record carries no session identity, so two hand-backs with the same labels
are still two turns); renaming the menu link to Agents (axis: every visual
baseline that shows the menu would change for a label); episodes as the unit
instead of slots (axis: the operator's words, separate agents in their role
slots today; the episode view is a later toggle).

Live-run surfaces at the base: WO-006's served production build and
Storybook; WO-007's MSW worker (the board's); WO-013's menu and the arriving
page at `/machinery`; WO-014 and WO-019's catalog; WO-015's scene; each
exists at the base and was run by the order that landed it. The platform's
public repository at the pin, on GitHub and in the clone beside the
launchpad.

**Deliverables:** the types; the records library with its copies, schemas,
store and kit; the reducer, the copy check and their tooling test; the
machinery feature and its data-access library; the e2e, Storybook and
visual changes; the two documents and the WO-026-D012 edits;
`docs/evidence/WO-016/`.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-016: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1. Check: the decisions carry the integrated
   commit.
2. Generate `libs/shared/records` (`scope:shared,type:data-access`) and
   `libs/features/machinery-data-access` (`scope:dotln,type:data-access`),
   each with a testing entry point, appending the commands to
   `docs/dev-reference/workspace/generator-log.md`; add `shared/records` and
   `features/machinery-data-access` to the list in
   `tools/scripts/check-foundation-types.mjs`. Check: `npx nx show projects`
   lists `records` and `machinery-data-access`; `npm run
   typecheck:foundations` exits 0.
3. `libs/shared/models/src/lib/machinery.ts` with the Design's types,
   exported through `public_api.ts`; the two schemas under
   `libs/shared/records/src/schema/`. Check: `npm run check:shared-types`
   exits 0; `npx nx test models` exits 0.
4. `tools/scripts/reduce-platform-records.mjs` and `tools/record-copies.test.mjs`:
   a tooling test, over small synthetic inputs in a temporary Git
   repository, that the reducer keeps exactly the six fields, numbers
   ordinals from 1, keeps `recordingSession.role` as `actor.role`, leaves it
   absent for `unobserved` and for a row with none, refuses any other role,
   refuses an absolute path, a run of 32 or more hexadecimal characters and a
   UUID shape in a row value while writing the commit in `source`, extracts
   stamp ids, `Read:` targets and section keys from a sample skill, writes the
   obligation to the scope catalog, and prints no input value on failure.
   Check: `npm run test:tooling` exits 0.
5. The copies: the platform is the clone beside the launchpad's main
   checkout (on this machine `../DotLn` from the launchpad root) when `git
   -C <clone> cat-file -e
   49d8c4c364dc5986e8c76b4ac27a0110c380206f^{commit}` exits 0; otherwise
   `git clone --filter=blob:none https://github.com/DylanBWood/DotLn` into
   the session scratch; if neither is reachable, stop and record the blocker
   in the decisions, because a copy is never invented. Run `node
   tools/scripts/reduce-platform-records.mjs --platform <that path> --commit
   49d8c4c364dc5986e8c76b4ac27a0110c380206f`, which writes
   `libs/shared/records/src/data/segments/order-221.json`, `order-226.json`,
   `libs/shared/records/src/data/role-mechanisms.json` and
   `apps/dotln/public/i18n/machineryRoles/en.json`; record in the decisions
   the platform path used, the command and the digests it printed. Check: the
   printed digests equal the nine in the Observed gap and the run prints PASS.
6. `tools/scripts/check-record-copies.mjs`, appended to `check:fixtures` in
   `package.json`. Check: `npm run check:fixtures` exits 0.
7. `docs/dev-reference/workspace/scripts.md`: a Helpers row for
   `tools/scripts/reduce-platform-records.mjs` and the `check:fixtures` row
   naming `check-record-copies.mjs` (rule 26). Check: `npm run check:scripts`
   exits 0.
8. `libs/shared/records/src/lib/`: `records-reader.ts`, `order-fold.ts`,
   `records-loader.ts` and `RecordsStore` with its `recordsEvents` group in
   `libs/shared/events`, and the testing kit, with the specs of criterion 4.
   Check: `npx nx test records` exits 0; `npm run lint:hygiene` exits 0.
9. `libs/features/machinery-data-access/src/lib/machinery-store.ts` with
   `machineryPageEvents` and its testing kit (rule 5). Check: `npx nx test
   machinery-data-access` exits 0 with the persisted-state specs of
   criterion 6; `npm run check:kits` exits 0.
10. The feature: replace `machineryRoutes`' arriving page with
    `machinery-page`, the facade, the composites, mappers and layout of the
    Design and both first-pair layouts; `machinery.*` keys in
    `apps/dotln/public/i18n/en.json` and the testing translations; stories
    `RecordedWO221`, `RecordedWO226`, `UnknownEventType`, `RepairerCard` and
    one per layout candidate while its round is open; remove the arriving
    page's directory. Check: `npx nx test machinery` exits 0;
    `npm run lint:components`, `npm run i18n:check` and `npm run
    check:templates` exit 0.
11. The first pair (A slots above a horizontal strip, B slots beside a
    vertical one) rendered at about 2080 by 1460 and 360 and read at 3840 by
    1620; the rounds, or the operator's deferral to the A/B testing pass; the
    rejected implementation removed with its record. Check: `grep -c "Round"
    docs/evidence/WO-016/design/comparisons.md` is at least 1.
12. e2e: `apps/dotln-e2e/src/machinery.spec.ts` with criterion 7's cases;
    in `sub-apps.spec.ts` the `machinery` loop's deep-link test removed and
    its axe and viewport tests moved into `machinery.spec.ts`, and the
    keyboard test's `/machinery` heading assertion reading the page's heading;
    `sub-apps.visual.spec.ts` waiting for the strip instead of the empty state,
    with the three `machinery-*.png` baselines regenerated and the reason named
    in the pull request; `storybook.spec.ts`'s arriving story replaced by the
    new stories. Check: `npx nx e2e dotln-e2e` and `npx nx e2e-visual
    dotln-e2e` exit 0; `npm run typecheck:e2e` exits 0.
13. Production: `npx nx build dotln --configuration=production`, then
    `grep -rl "control-event-lite-v0" dist/apps/dotln/browser`; `npm run
    check:bundle`. Check: the build exits 0, the grep prints at least one
    file, `check:bundle` passes.
14. The walkthrough: the executor performs the Objective's session in the
    served production build, saves one screenshot per step at 360, 768, 1440,
    about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-016/walkthrough/` and writes
    `docs/evidence/WO-016/walkthrough.md` with the dated steps and what each
    agent card read. Check: the files exist.
15. Documents: `docs/dev-reference/architecture/machinery.md`,
    `docs/ai-reference/machinery-rules.md`, their pointers, the WO-026-D012
    places and the four library READMEs, as the Design lists. Check: `grep -n
    -i placeholder README.md docs/dev-reference/README.md
    docs/dev-reference/architecture/sub-apps.md
    docs/dev-reference/workspace/storybook.md
    libs/features/machinery/README.md` prints nothing.
16. Dependency check as WO-015 step 15. Check: prints nothing.
17. Gate plain and review. Check: passing rows, no tracked-byte mutation.
18. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation gains a subsection for the machinery view (the records
    library and its copies, the reducer, the fold and the page); WS-001
    §Delivery states and §What has landed and what lies ahead are updated by
    the final review. Check: `npm run test:docs`. Then the publish, review and
    records steps as WO-007 steps 15 to 17, with the branch
    `feat/machinery-view`, the title `feat: add the machinery view over
    recorded orders`, `docs/evidence/WO-016/` and
    `docs/final-reviews/WO-016/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run check:scripts`, `npm run test:tooling`, `npm run i18n:check`,
`npm run typecheck:e2e`, `npm run check:bundle`, `npx nx e2e dotln-e2e`,
`npx nx e2e-visual dotln-e2e`; in the launchpad order worktree
`npm run test:docs`; then the target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: open `/machinery` on WO-221; step the
   anchor to the second beat and read the executor's card; step past the
   eighth and find the verifier's ghost; open the verifier and read its
   obligation, its mechanisms and inputs and what it waited on; open the
   repairer and read why it carries the executor's role; read a fail and a
   no-verdict hand-back card; switch to WO-226. The VER report carries a
   `## Walkthrough` section with the dated steps and names the screenshots
   at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620 under
   `docs/evidence/WO-016/walkthrough/`, and states in the verifier's own
   words where WO-221's time went and what the verifier's card said it waited
   on, as read from the page alone. Met only when every step completed and
   that statement is present; a UI issue at about 2080 by 1460 or 3840 by
   1620 fails this criterion, and one at another size is a boarded follow-up
   (rule 29).
2. `npm run check:fixtures` exits 0 over
   `libs/shared/records/src/data/segments/order-221.json`, `order-226.json`
   and `role-mechanisms.json` (the schemas with `additionalProperties: false`
   over the fields `ordinal`, `type`, `recordedAt`, `workOrderId`, `actor`,
   `verdict`, the scrub over every row and role value, every obligation key
   present in the `machineryRoles` scope); `npm run test:tooling` exits 0 with
   the reducer's tests of step 4, among them that a row value carrying a run
   of 32 or more hexadecimal characters or a UUID shape fails the scrub, that
   an `actor.role` outside executor, verifier, reviewer, planner, refuter,
   release-close and operator is refused and that `unobserved` leaves it
   absent; and `ls libs/shared/records/src/data/segments | grep -ciE '^wo-'`
   prints 0.
3. The copies reproduce: run against the platform at
   `49d8c4c364dc5986e8c76b4ac27a0110c380206f`, `node
   tools/scripts/reduce-platform-records.mjs --platform <path> --commit
   49d8c4c364dc5986e8c76b4ac27a0110c380206f --out <scratch>` prints the nine
   input digests the Observed gap names and PASS, and `cmp` exits 0 between
   each of its four outputs and the committed file. The verifier runs it
   against the platform clone beside the launchpad or a fresh clone from
   `https://github.com/DylanBWood/DotLn`; where neither is reachable at
   verification, the verifier records the reproduction untested with the
   reason and judges this criterion from the executor's recorded run in the
   decisions file (the path, the command, the printed digests).
4. `npx nx test records` exits 0 with specs asserting: the fold reproduces,
   from each copy, the rows, operator rows, hand-backs with their verdicts,
   gaps after a hand-back and span this order's Observed gap records, each
   gap within one second; the slot table maps each recorded `type` to its
   slot and an unknown `type` yields an `unknown` beat; two synthetic rows of
   one `type` whose harness, model, effort and mode match, one with
   `actor.role` `planner` and one with none, fold to an `unknown`-slot beat
   naming the planner and to the type's slot respectively, and a `refuter`
   row and a `release-close` row each yield an `unknown`-slot beat naming its
   role; at the anchor on WO-221's eighth beat the verifier slot holds that
   beat's agent and one ghost, the fourth beat's, and at the fourteenth two
   ghosts; the twelfth beat's actor is flagged a colony; and each agent's
   waited-on names the request before its hand-back and the minutes from the
   previous hand-back.
5. `role-mechanisms.json` has an entry for each of the executor, planner,
   refuter, release-close, reviewer and verifier skills and one for
   `.claude/agents/dotln-worker.md`, each naming its file, the pin and the
   file's SHA-256 (equal to the Observed gap's), its stamp ids in stamp
   order, its `Read:` targets and its section keys; the repairer slot
   reads the executor's entry and a spec asserts the repairer's card states
   that the repairer runs the executor role at `resume: fix`; a spec asserts
   the agent card renders the obligation through the `machineryRoles` scope;
   and `grep -rnE "dotln-key-value-list|<dl" libs/features/machinery/src`
   prints nothing.
6. The persisted-state spec asserts every key written starts with
   `dotln-angular.machinery` and no other storage, cookie or network write
   occurs; a spec seeding `dotln-angular.machinery` with a value that does
   not parse asserts the page opens WO-221 at its first beat; and
   `grep -rlE "from 'node:|from \"node:|require\(" libs/shared/records/src libs/features/machinery/src libs/features/machinery-data-access/src --include='*.ts' | grep -v spec`
   prints nothing.
7. `npx nx e2e dotln-e2e` exits 0 and includes: a beat button for every row
   of the copy (sixteen on WO-221, six on WO-226), four role slots and the
   operator figure on `/machinery`; the executor slot filled at the second
   beat; a ghost in the verifier slot after the eighth; the verifier's card
   with its obligation, mechanisms and waited-on; the keyboard path across the
   beats, the slots and the order switch; the menu's four links with
   Machinery unchanged; axe at the board spec's threshold; no horizontal
   overflow at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620; and
   `npx nx e2e-visual dotln-e2e` exits 0 with the regenerated `machinery-*.png`
   baselines named in the pull request.
8. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets, `grep -rl "control-event-lite-v0"
   dist/apps/dotln/browser` then prints at least one file, `npm run
   check:bundle` passes, and `package.json`'s `dependencies` keys equal the
   integrated base's.
9. `docs/dev-reference/architecture/machinery.md` and
   `docs/ai-reference/machinery-rules.md` exist and are linked from
   `docs/dev-reference/README.md` and `docs/ai-reference/README.md`; `grep -n
   -i placeholder` over the five files WO-026-D012 names prints nothing; and
   `npm run check:scripts` exits 0 with the reducer's and the copy check's
   rows.
10. `docs/evidence/WO-016/design/comparisons.md` records the first pair (A
    slots above a horizontal strip, B slots beside a vertical one) rendered at
    about 2080 by 1460 and 360, and either every later round with its pick and
    the operator's word that ended the rounds, with the decisions file naming
    the removed candidate's files and `ls` on each printing nothing, or the
    operator's deferral of the rounds to the dedicated A/B testing pass, the
    first pair without a pick, A shipped and the follow-up recorded in the
    decisions file (rule 25).
11. `node scripts/target-gate.mjs WO-016 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the Preflight
    line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs, `docs/evidence/WO-016/README.md`, `design/`, `docs/evidence/WO-016/walkthrough.md` and its screenshots, and `docs/evidence/WO-016/host-qualification.md`.

**Known issues and carry-ins:** Carried from planning receipt 012 (2026-10-28), a known issue that still applies: the scrub refuses absolute paths, long hexadecimal runs and UUID shapes and does not look for an e-mail address, a host name or an account name, and the kept fields include `actor`; the executor reads the two copies for all three before committing them and records the reading in the decisions file, and any such value found stops the copy for a planning pass. The base is `eb9d227`, WO-039's merge on the
target's `main`, set by the 2026-11-09 pass; the earlier pin, `bc9133e`, was
the empty initial commit, so a comparison with the base's files had nothing
to compare with; every such comparison here reads the integrated base step 1
records. The copies are a stopgap the operator named: when the mining store
exists (candidate C1), the copies become a route behind the same loader or
are deleted. The strip's axis is time, never cost, and a gap includes idle
time; the view labels a long gap as nobody dispatched, never as the operator
idle, because the record has no presence, which is why the totals are
waiting and working minutes and not operator and worker minutes. The role
copy is the platform's role files at the copies' commit, a day after
WO-226's last row and up to five days after WO-221's first; the rows do not
record which role file each agent ran under, and the card says so. The
Origin stamp names each mechanism without saying whether it is a gem or a
support, so the card lists mechanisms by id and makes no such split. No row
of either copy carries `actor.role`, so the role enum and the
`unknown`-slot beats are exercised by synthetic rows in the testing entry
point. WO-026-D012's carry-in (the five documents that describe the
placeholder) is step 15, with `sub-apps.md`'s smallest-form sentence, which
becomes false with this order. Starter v0.96.1's plan gate no longer advises
on this order's own launchpad record paths (core's answer of 2026-10-24, item
1); they stay as the kit names them and the publish command's body file must
not name them. From receipt 008, carried in by the 2026-10-24 second pass:
the records types are `OrderStrip`, not `ConcertScene`; its concern that a
starter's stamp counts change under the order is moot now that the role copy
is read at a fixed platform commit, whose counts the Observed gap records.
From
receipt 009, carried in by the 2026-10-25 pass: `actor` is one composite the
schema declares and the reducer's scrub screens each of its values (the
types, the reducer, criterion 2); the repairer slot reads the executor's
entry and its card says why, and the e2e counts four role slots and the
operator figure (criteria 5 and 7). From receipt 011, carried in by the
2026-10-28 pass: a planner, refuter or release-close actor is an
`unknown`-slot beat naming the role (criterion 4); the scrub fails a run of 32
or more hexadecimal characters and a UUID shape (criterion 2); the verifier's
independent recount of the stamp ids is now the reproduction of criterion 3,
which checks every copied value rather than a count; the layout is chosen
through the rounds of rule 25. From the 2026-11-01 pass's criteria adversary
(its R4), carried in by the 2026-11-01 second pass: `actor` keeps the row's
recorded session role as an enum, and the types, the reducer, step 4 and
criterion 2 change together. The same pass replaced the inherited exact-tip
base guard of step 1 with an ancestor check and the fast-forward (its R1).
Receipt 008's caption rule, receipt 009's and 010's sink items, receipt 010's
item (e) for the ideas' stored value and receipt 011's item (a) moved with the
idea shelf and the sink to WO-042; the replay clock moved to WO-017, which
reads this order's copies and `RecordsStore`. This order activates only on a
launchpad whose starter carries core WO-221's `--draft` form; the draft pull
request and its workflow runs are a final-review obligation read from
`docs/evidence/WO-016/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` were set by the
2026-10-24 pass under WO-012's declared policy.

**Non-goals:** a live connection to any resident or to core; the operator's
idea shelf, select-then-apply, the redraw of a change and the local idea sink
(WO-042); the replay clock, which is WO-017's, its only consumer; drag;
agents in concert beyond one order's slots (the fleet, the blackboard room and
the flow instruments of the run are later members, candidate C5); any write
outside browser storage; a token axis; a gem or support classification the
stamp does not carry.

**Operator-review assumptions:** the operator accepts the six-field copy as
the stopgap and the platform's role files at the copies' commit as what the
card reads, judges the first pair at their sizes and ends the rounds in their
own words or defers them to the A/B testing pass, and reads the one draft pull
request before final review, which the final publish reuses.
