# WO-017 — The digital twin's first lane: within one recorded stage of an order, whether RxJS variants of the operator would have made the operator's interventions, each matched, missed or extra by its place among the stage's events, every variant kept as code

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/twin-model`, `libs/features/twin`,
`libs/features/twin-data-access`, the stage exporter with `npm run
twin:export`, its tooling test and `scripts.md` row, an ignored stage
directory, `twin:read` in `routePermissions` with the mock's claim, a menu
item, `twin.*` messages, a `check-bundle.mjs` case, two documents; about 45
source files (the planner's estimate); no runtime dependency. Removes nothing.
Wall-clock, context bytes and tokens: unknown until run. Commands added in the
target: `npm run twin:export`. Steps: 14. Re-mints: none. Refutations paid:
five (receipts 008 to 012) on earlier texts of this order.
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
the operator's model lives in the app first as a digital twin, its variations
and old versions kept, nothing held back from it, the RxJS that describes the
operator being the RxJS that runs. The operator's restatement of 2026-11-09
(journal row 2026-11-10T02:23:06Z, capture SHA-256
`db38861f02be351b36015df349a4ecefe4d381dbe8d9d34f61eb874253b4225a`): the twin
shows whether it would have made the same interventions as the operator
within a stage; when a stage starts or runs, and any wait between stages,
make no difference to it. This replaces the patience lane over a replayed
order, built from the run's `out/angular/design-operator-model-testbed.md`,
which this order no longer reads. Planner-synthesized by the 2026-10-24 planning pass ([planning document](../planning/passes/mining-run-orders-2026-10-24.md)
§4, §6 D9 and §9). Opaque identifier, not a priority. Amended by the
2026-10-24 second pass ([planning document](../planning/passes/standard-pass-v0-96-1-2026-10-24.md) §6 D3 and D4): the derived
fixture's name, the `routePermissions` entry and the signed-in e2e path, the
registry check's failure on an absent base, the base clause and receipt 008's
known issues. Amended by the 2026-10-25 pass ([planning document](../planning/passes/standard-pass-v0-99-0-2026-10-25.md)
§6 D4): receipt 009's known issues (readiness defined, the registry check's
message on an absent base and the variants as lazy chunks, one tick contract on the replay library). Amended by the 2026-10-26 pass ([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the result fold is the canonical computation of WO-221's figures and the derivation is its check (its item (a)); `BasePaths.Twin` requires `twin:read`, granted to the mocked provider's default user and withheld from its `denied` user, and the Cost line names both (b); a reload after sign-in rests on WO-008's reload row (c); the no-interpreter rule is asserted by a spec that every variant module exports `describe` as a function and by a grep for `new Function` and `eval(` (d); a stored value that fails to parse or names an unknown variant yields the first registry entry (f). Amended by the 2026-10-28 pass ([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the walkthrough runs on the served `mocked` configuration build (its item (a)) and criterion 8's grep names the two phrases that matter (c); `twin:check`'s absent-base message (b) was already in the text. Amended by the 2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D14): rewritten to the operator's restatement, interventions within one stage matched by place, every figure about waits, close time or the time between stages removed; the input a stage exported from the launchpad's session journals into a Git-ignored directory, a synthetic stage for everything committed; three first variants as hypotheses; the edge on WO-016 dropped; the base `eb9d227` and the gap re-dated; the registry checked by a digest manifest; rules 9, 25 and 29 in the criteria.
**Depends on:** WO-008 merged (hard: `routePermissions`, the `canMatch`
guard, the mocked default and `denied` users and `/denied`, which gate
`/twin`). The base precedes WO-008's merge; step 1 fast-forwards to `main`,
and since starter v0.96.1 the target publish describes the change from the
merge base.
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-008",
    "relation": "hard",
    "reason": "routePermissions, the canMatch guard, the mocked provider's default and denied users and /denied, which gate /twin"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(rules 1, 3, 4, 5, 9, 15, 22, 23, 24, 25, 26, 29, 30; §The operator's model);
`docs/operator/README.md` (§The app and its subject);
`docs/repositories/dotln-angular.md`; for the journal rows, this launchpad's
`packages/skeleton/src/dispatch-journal.mjs`,
`packages/skeleton/dist/src/harness-host.js` (`record`,
`recordOperatorMessage`), `packages/compiler/dist/src/harness.js`
(`operatorMessageClass`, `harnessSessionPhase`) and
`scripts/lib/plan-failures.mjs` (`operationalFailures`).

**Objective:** the operator signs in, opens Twin under Machinery and picks a
recorded stage: one phase of one order as one session journaled it. They
read the stage's events in order (tool steps, judged effects, results, host
denials, attempts to stop) with their own interventions marked in the gaps
where they came and the twin's beside them, each of theirs matched or
missed, each of the twin's they did not make shown as extra. They pick a
variant (every variant ever written, with version and lineage), flip a
parameter and watch the twin's marks move over a faint ghost while theirs
stay, read in one sentence what it matched and added, and keep a flip by
exporting it as TypeScript. After a reload they sign in again (a reload ends
the session while the mock runs in the page, WO-008) and return by the page
kept for after the sign-in to their stage, variant and flips. They decide
whether the variant describes them. Nothing says when the stage ran.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `BasePaths` holds `Board`,
`Scene`, `Machinery` and `Tools`; no route is gated; `libs/shared` has no
`twin-model` or `auth`. A stage's events and the operator's interventions
exist only in this launchpad's session journals, private, local and ignored:
one `<64 hex>.jsonl` per session in `docs/control/local/harness/`, moved at
close to `docs/control/local/retained/<WO>/harness/` and pruned after a
window. Every row carries `recordedAt`, `event` (`PreToolUse`, `PostToolUse`,
`PermissionDenied`, `UserPromptSubmit`, `Stop`) and `tool` when there is one;
a step adds `toolStep` and `commandRun`; a permission row `effect` (such as
`repo.read`, `repo.write`, `shell.run`) and `allowed`; a result `workOrder`
and `phase`; a denial `typedEvent: "HostPermissionDenied"`; a stop
`finished` and `completionReady`; an operator message `typedEvent:
"OperatorMessageObserved"`, `workOrder`, `phase`, `source`, `route`,
`attribution`, `prefix`, `class` (read from the message's form) and the
text's SHA-256 `digest` and `bytes`, never the text. Phases are
`implementation`, `verification`, `repair`, `finalReview`. A failed call
leaves no result or failure row; gate results sit apart without an order.
(Sources and lines: the Cites' kit files.)

**Design:**

- **The stage.** `tools/scripts/twin/export-stage.mjs` (`npm run twin:export
  -- --journals <dir> --order WO-NNN --phase <phase>`; `--list` lists the
  stages) reads the `<64 hex>.jsonl` files of the directory given and writes
  one `twin-stage-v0` file per session and phase, with an `index.json`, into
  `apps/dotln/public/twin-stages/`, which `.gitignore` lists and the
  `production` and `configured` builds' assets ignore. A stage is the rows of
  one session file naming that order and phase, a row naming neither taking
  the nearest preceding row's. Rows keep journal order as `{ i, at, kind,
  tool?, commandRun?, effect?, allowed?, completionReady?, class?, prefix?,
  route? }`, `at` in milliseconds from the stage's first row, `kind` one of
  `step`, `effect`, `result`, `denial`, `finish`, `intervention`; an
  intervention is an operator message from a prompt hook, never the host's
  notification, a hand-back or the `resume:` dispatch that opened the stage.
  No path, digest, receipt, denial reason, advisory or text is copied. The
  tool is a helper run by hand (rule 26). Everything committed, every spec
  and the e2e use `libs/features/twin/src/lib/data/synthetic-stage.ts`.
- **The rule** (`libs/shared/twin-model`, `scope:shared`, `type:util`, RxJS
  only, its own types). Agent events are the rows other than interventions,
  numbered in order; gap `g` lies after agent event `g − 1` and before `g`.
  `stageStream(stage, scheduler)` emits each agent event at its `at` on an
  injected `VirtualTimeScheduler` from `rxjs`, flushed synchronously in specs
  and on the page. Events that share an `at` are delivered in journal order, each
  as its own scheduled action. An operator intervention's gap is the count
  of agent events before it; a twin intervention's gap is the count of agent
  events the stream has delivered when the variant emits it, so a variant
  that answers an event at once falls directly after that event and before
  the next, whatever their `at`, and a timer that runs out at an event's
  `at` falls after that event. In each gap the two sides pair in order: a paired operator
  intervention is matched, an unpaired one missed, an unpaired twin one
  extra. The class is shown and does not decide a match. Shifting every `at`
  by one constant changes no result.
- **The variants**, hypotheses about the operator with the planner's
  defaults: `v0-denial-step-in` (a `direction` after `after` host denials in
  a row, 1); `v0-silence-question` (a `question` once `minutes` pass with no
  `result`, 15, on `debounceTime`); `v0-unready-stop` (a `direction` after
  `count` stops with `completionReady: false`, 2). A `TwinVariant { id,
  version, since, supersedes?, family, describe(events$, scheduler, params),
  params }` reads every field of the agent events and never the operator's
  interventions, the reference. A flip overrides a named parameter; a kept
  flip is exported as a file, manifest row and registry line the operator
  commits. `variants/index.ts` loads each by `import('./<id>')`;
  `variants.json` is append-only with each file's `sha256`, and
  `.prettierignore` lists the directory. `registry.spec.ts` checks the
  working tree alone (ids, files, digests, exported lineage) and fails three
  altered copies (a row removed, a variant's bytes changed, a file with no
  row).
- **Feature** (`libs/features/twin`, `type:feature`; `BasePaths.Twin` in the
  Machinery menu group; `twin:read` granted to the mocked default user,
  withheld from `denied`; the Twin item renders for a session that holds
  `twin:read` and is absent for any other, the visitor who has not signed
  in included): `twin-page` over `TwinFacade`; `stage-lanes`
  (inline SVG by place, never by clock: events above, the variant's band,
  the twin's marks and their ghost, the operator's marks; translated
  sentences as the text equivalent), `stage-picker`, `variant-picker`,
  `flip-panel`, `match-summary` (prose), `export-variant`; `TwinStore`
  (`twin-data-access`) loads the index and stages from the app's own assets,
  lists an unreadable stage with its reason, and persists stage, variant and
  flips under `dotln-angular.twin`. Every string on screen is a message in
  `apps/dotln/public/i18n/en.json`; `twin-labels.ts` maps each family,
  parameter, kind and class through `translateSignal` in tables typed by
  those unions, so no display text sits in TypeScript (rule 9). The twin's
  sources join `check-bundle.mjs`'s route-only list.
- **Design brief and first pair** (rules 25 and 29): a marble diagram by
  place, the operator's marks fixed, the summary a sentence, nothing animated
  at rest. A: the operator's and the twin's marks on two lanes; B: one lane,
  a match drawn as a joined pair. Rendered at about 2080 by 1460 and 360,
  read at 3840 by 1620; A then B with the round named; rounds until the
  operator ends them, each recorded, the rejected implementation removed
  with its record under `docs/evidence/WO-017/design/`. The operator may
  delay the rounds: the first pair is recorded without a pick and A ships.
- **Documents:** `docs/dev-reference/architecture/twin.md` (the stage, the
  journal fields, the exporter, the rule, the variants) and
  `docs/ai-reference/twin-rules.md` (a variant is never deleted; a manifest
  row never changes; no journal-derived row is committed; no time between
  stages is computed).

Rejected: matching by clock time (axis: the restatement; places make the
rule deterministic); waits, close time or time between stages (axis: the
restatement); the operator's interventions in a variant's input (axis: they
are the reference); committing a real stage or reading journals from the app
(axis: the journals are private and the repository public); merging a
phase's sessions by clock (axis: only a file's append order is certain); a
registry check reading a base commit (axis: no later gate has this base).

Live-run surfaces: at the base, the `mocked` build served by `nx
serve-static dotln`, Storybook, MSW and the Machinery menu group
(`apps/dotln/src/app/app.ts` lines 32 to 40); after step 1, WO-008's sign-in
and `/denied`, not yet run here; the operator's journals, which no session
reads.

**Deliverables:** the three libraries with kits; the exporter, its script,
test and row; the ignored stage directory; the route, permission, claim and
menu item; the bundle case; two documents; `docs/evidence/WO-017/`.

**Execution plan:**

1. Base guard read with WO-014-D001: after `git fetch origin`, `git
   merge-base --is-ancestor eb9d227483e30164105da077f50673789d1e5c9f
   origin/main` exits 0; fast-forward to `main`, which must hold WO-008's
   merge (`ls -d libs/shared/auth`), else stop for a planning pass; then as
   WO-005 step 1. Check: the decisions file records the commit.
2. Generate the three libraries, logged. Check: `npx nx show projects`.
3. The exporter, its script and `scripts.md` row, `.gitignore`, the assets
   ignore in `apps/dotln/project.json`, `tools/twin-export.test.mjs`. Check:
   `npm run test:tooling`, `npm run check:scripts`.
4. `stage.ts`, `stage-stream.ts`, `match.ts`. Check: `npx nx test twin-model`.
5. The variants, `index.ts`, `variants.json`, `.prettierignore`, the
   registry spec. Check: `npx nx test twin-model`.
6. `TwinStore`. Check: `npx nx test twin-data-access`.
7. Synthetic stage, composites, labels, facade, container, messages,
   stories. Check: `npx nx test twin`, `npm run lint:components`, `npm run
   check:templates`, `npm run i18n:check`.
8. The export of a kept flip. Check: its spec.
9. Route, permission, claim, menu item. Check: `npx nx test core`; the
   production build.
10. `check-bundle.mjs` and its case. Check: `npm run check:bundle`.
11. The first pair and the rounds, or their delay. Check: `comparisons.md`.
12. e2e `apps/dotln-e2e/src/twin.spec.ts`; the executor's walkthrough on the
    synthetic stage at the five sizes; an exported stage is opened where one
    exists and nothing of it is recorded. Check: `npx nx
    e2e dotln-e2e` and `npx nx e2e-visual dotln-e2e`; the files exist.
13. Documents and pointers; dependency check as WO-015 step 15; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
14. Launchpad write-back to `docs/repositories/dotln-angular.md` §Find the
    implementation and WS-001's delivery states. Check: `npm run test:docs`.
    Then publish, review and records as WO-007 steps 15 to 17, branch
    `feat/twin-first-lane`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run typecheck:e2e`,
`npm run lint:components`, `npm run check:templates`, `npm run i18n:check`,
`npm run test:tooling`, `npm run check:scripts`, `npm run check:bundle`,
`npx nx e2e dotln-e2e`, `npx nx e2e-visual dotln-e2e`; in the launchpad
order worktree `npm run test:docs`;
then the target gate plain and review once each.

**Acceptance criteria (all required)**

1. `npm run test:tooling` exits 0 with exporter tests over a synthetic
   journal directory: one `twin-stage-v0` file per session and phase holding
   only the Design's keys in journal order; the preceding-row rule; the
   host's notification, a hand-back and the `resume:` dispatch kept out of
   the interventions; a path, digest, receipt, denial reason, advisory and
   message text, each seeded in the input, absent from the output. `git
   check-ignore -q apps/dotln/public/twin-stages/x.json` and `npm run
   check:scripts` exit 0.
2. With a file in `apps/dotln/public/twin-stages/`, `npx nx build dotln
   --configuration=production` and `--configuration=configured` each leave
   no `twin-stages` under `dist/apps/dotln/browser`.
3. `npx nx test twin-model` exits 0 with specs on the synthetic stage
   asserting every gap, match, miss and extra the Design's rule gives; a
   twin intervention emitted with an agent event falling after it; a stage
   whose denial, operator intervention and next step share one `at`, on
   which the denial variant's intervention falls in the operator's gap and
   is matched; equal results with every `at` shifted by one constant; a result of gaps,
   classes and verdicts with no time field; each variant's interventions at
   its defaults; a flip moving the twin's interventions and not the
   operator's; a stream carrying no intervention row; and the registry spec,
   `variants.json` listing the three variants, failing each altered copy.
4. `grep -rlE "JSON.parse|new Function|eval\(|rxjs/testing" libs/shared/twin-model/src libs/features/twin/src --include='*.ts' | grep -v spec`
   prints nothing; a spec asserts each registry entry exports `describe` as a
   function; the export spec type-checks a generated variant against
   `TwinVariant` and finds its row's `sha256` equal to `node:crypto`'s.
5. The persisted-state spec asserts every key starts with
   `dotln-angular.twin` and nothing else is written to storage, cookies or the
   network; an unparseable or unknown stored value yields the first variant
   with no flips; a stage failing `twin-stage-v0` is listed with its reason;
   `grep -rlE "from 'node:|from \"node:|require\(" libs/shared/twin-model/src libs/features/twin/src libs/features/twin-data-access/src --include='*.ts' | grep -v spec`
   prints nothing.
6. `npx nx e2e dotln-e2e` exits 0 and, on the synthetic stage, signs in
   through WO-008's mocked provider and shows on `/twin` the events, the
   operator's interventions matched or missed and the twin's extras
   (`routePermissions` maps `BasePaths.Twin` to `['twin:read']`, WO-008's
   coverage spec passes, the `denied` user lands on `/denied`); three
   variants in the picker; a flip moving the twin's marks while every
   operator mark's bounding box stays; the export dialog's TypeScript; stage
   and variant kept across a reload and its sign-in; the keyboard path over
   every flip; axe at the board spec's threshold; no horizontal overflow at
   360, 768, 1440, about 2080 by 1460 and 3840 by 1620; the Twin menu item
   present for the default user and absent for the `denied` user and before
   sign-in; and `npx nx e2e-visual dotln-e2e` exits 0, a whole-page baseline
   regenerated only where its session shows the item and named in the pull
   request with its reason.
7. `npm run i18n:check` and `npm run check:templates` exit 0, and
   `twin-labels.ts` maps every member of the family, parameter, kind and
   class unions through `translateSignal` in tables typed by them.
8. `docs/ai-reference/twin-rules.md` states that no journal-derived row is
   committed and no variant deleted (`grep -c "never committed"` and `grep -c
   "never deleted"` each at least 1); `twin.md` names the journal fields read
   and the rule; `package.json`'s `dependencies` keys equal step 1's commit's;
   `npm run check:bundle` exits 0 and the bundle case fails a variant's
   source in the initial closure while its control passes.
9. `docs/evidence/WO-017/design/comparisons.md` records the first pair (A two
   lanes, B one), each rendered at about 2080 by 1460 and 360, then either
   every round with its pick, the operator's word that ended them and the
   rejected candidate's files, which `ls` does not find; or the operator's
   delay of the rounds with its capture digest, the pair unpicked and A
   shipped. With neither by handoff, the
   executor records the open round and does not hand off.
10. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
    session in the served `mocked` build on the synthetic stage: sign in, open Twin, pick the stage, read its events and
    marks, pick each variant, flip a parameter, export the flip, reload, sign
    in and return. The VER report's `## Walkthrough` carries the dated steps
    and a screenshot per step at 360, 768, 1440, about 2080 by 1460 and 3840
    by 1620 under `docs/evidence/WO-017/walkthrough/`, and says in the
    verifier's words which interventions a variant matched and missed and
    what the flip changed. A UI issue at either full size fails it; one at
    another size is a boarded follow-up. No screenshot, row or figure of a
    stage exported from the journals enters the evidence, the report or a
    commit: where the operator has exported one on the machine, the verifier
    also performs the session on it, and the report says only that it did
    and whether the page read the stage; a stage the page refuses fails the
    criterion.
11. `node scripts/target-gate.mjs WO-017 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-017/README.md`, `design/`, `walkthrough.md` and its
screenshots, and `host-qualification.md`.

**Known issues and carry-ins:** The first lane's stream cannot see what the
agent wrote, ran or read beyond a tool's name and the judged effect, whether
a call failed, gate results, or the operator's words, which a row carries
only as a digest, a byte count and a class read from the message's form; a
variant is a hypothesis over these kinds, and a richer stream is a later
lane (candidate C6). The stage continues as the operator steered it, so a
twin's extra intervention changes nothing after it. A phase spread across
sessions exports as several stages, and one session that ran a phase twice
as one; a closed order's journals last as long as its retained lane. The operator runs the export; no session reads
`docs/control/local/` (CLAUDE.md §Secrets). A real stage is read on the
operator's machine alone: the evidence, the screenshots and the reports
show the synthetic stage. The `mocked`, `local` and `development` builds
serve the ignored stage directory on that machine, which is how the page
reads a stage; the repository publishes no build output (no workflow
uploads or deploys one at `eb9d227`). Production has no identity
provider (WO-008), so the walkthrough runs on the `mocked` build. Receipts
008 to 012 judged the patience lane; their items on the gated route, the
signed-in e2e, the `mocked` build and an unparseable stored value carry
here. The draft pull request is a final-review obligation read from
`docs/evidence/WO-017/preview-pr.json`, never a criterion; the release
headers follow WO-012's declared policy.

**Non-goals:** any figure about when a stage ran or what waited between
stages; a score across stages; the operator's words or the agent's text;
committing a real stage or serving one beyond the operator's machine;
reading journals from the app; the grid over several orders; any write
outside browser storage and the ignored stage directory.

**Operator-review assumptions:** the operator exports the stages they want
with `npm run twin:export` on their machine, takes the three first variants
as hypotheses to flip and replace, accepts matching by place within a gap
with the class shown and not required, and reads the one draft pull request
before final review, which the final publish reuses.
