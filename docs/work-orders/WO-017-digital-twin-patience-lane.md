# WO-017 — The digital twin's first lane: the operator's patience after a hand-back as RxJS that runs on virtual time over the recorded WO-221, judged by the results of the order it would have run and never by agreement with the operator's beats, with every variant of the model kept as code and old versions never deleted

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/replay` (the virtual-time replay on RxJS's
`VirtualTimeScheduler`, moved here from WO-016 because this lane is its only
consumer), `libs/shared/twin-model` (the two variants as RxJS code, the
registry, the append-only digest manifest and the spec that checks it, the
results fold), the `twin` feature's page, lanes and lane scale, variant
picker, flip panel, result cell, export dialog, labels, mappers, facade and
store (`libs/features/twin`, `libs/features/twin-data-access`), the `twin:read`
entry in `routePermissions` and the claim on the mocked provider's default
user, the Machinery menu item, the `twin.*` messages, the twin's sources in
`check-bundle.mjs`'s route-only list with a case in `tools/bundle.test.mjs`,
the variants directory in `.prettierignore`, two documents and their pointers,
about 60 source files; adds no runtime dependency and no tool script. Removes
nothing. Wall-clock: unknown until run; the 2026-10-24 estimate, 6 to 9 hours
of executor work plus the fixed cycle, predates the replay library and the
lane drawing this order now carries. Context bytes: WS-001 §House rules, §The
app and its sub-apps and §The operator's model, design C §1.4, §2, §3, C1 and
§5.2 to §5.3 read at the run's folder, the records library and machinery
types WO-016 lands, the marble drawing and `check-bundle.mjs` at the base,
this order; unknown until run (the 2026-10-24 estimate was about 170 KB).
Commands added in the target: none. Tokens: unknown until run. Steps: 18.
Re-mints: none. Refutations paid: five (receipts 008 to 012, on the texts before the 2026-11-01 second pass's authorized amendment, WO-017-D001, which the next planning pass's refutation judges).
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
the operator's model lives in the UI first as a personality-fidelity digital
twin with variations and old versions kept, nothing held back from it, judged
by results only, the RxJS that describes the operator being the RxJS that
runs; its first lane is the patience lane over WO-221, after re-deriving its
data (eight operator rows; the 87.8-minute gap followed a hand-back with no
verdict). Design file this order builds from, read at the run's folder on
this machine (core's ignored intake, read-only; the digest pins what was
read): `out/angular/design-operator-model-testbed.md` §1.4 (WO-221 re-counted),
§2 (the decision dataset's field set), §3 (the patience class, the stream
catalogue, the controls), C1 (the lane) and §5.2 to §5.3 (the replay loader
and virtual time in the browser); SHA-256
`22ee568897d2f3d92b3b7119e34981f49939db3eefb96d13ab9f142dc17197ef`. The design file is the operator's own research and lies outside the clean room (WS-001 rule 23 as corrected on 2026-10-26). The design's fidelity cell (hits against the operator's recorded beats) is not
built: the operator decided the twin is judged by results, so this order
replaces that figure with the result fold below. Planner-synthesized by the
2026-10-24 planning pass ([planning document](../planning/passes/mining-run-orders-2026-10-24.md)
§4, §6 D9 and §9). Opaque identifier, not a priority. Amended by the
2026-10-24 second pass ([planning document](../planning/passes/standard-pass-v0-96-1-2026-10-24.md) §6 D3 and D4): the derived
fixture's name, the `routePermissions` entry and the signed-in e2e path, the
registry check's failure on an absent base, the base clause and receipt 008's
known issues. Amended by the 2026-10-25 pass ([planning document](../planning/passes/standard-pass-v0-99-0-2026-10-25.md)
§6 D4): receipt 009's known issues (readiness defined, the registry check's
message on an absent base and the variants as lazy chunks, one tick contract on the replay library). Amended by the 2026-10-26 pass ([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the result fold is the canonical computation of WO-221's figures and the derivation is its check (its item (a)); `BasePaths.Twin` requires `twin:read`, granted to the mocked provider's default user and withheld from its `denied` user, and the Cost line names both (b); a reload after sign-in rests on WO-008's reload row (c); the no-interpreter rule is asserted by a spec that every variant module exports `describe` as a function and by a grep for `new Function` and `eval(` (d); a stored value that fails to parse or names an unknown variant yields the first registry entry (f). Amended by the 2026-10-28 pass ([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the walkthrough runs on the served `mocked` configuration build (its item (a)) and criterion 8's grep names the two phrases that matter (c); `twin:check`'s absent-base message (b) was already in the text. Amended by the 2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D8): the base set to `eb9d227` in place of the empty scaffold commit and the observed gap re-dated there; the `replay` library moved in from WO-016 and trimmed to what the lane uses, on RxJS's `VirtualTimeScheduler`; the lanes drawn by the twin's own scale in the house marble diagrams' reading order, moving the shared marble drawing rejected as not contained; the quiet-period variant dropped and the check-in rebuilt on `sample`, because both reduced to a fixed delay; the register's fourth-result candidate read and found unsupported by the six-field copies, so the result cell shows the floor no patience beats and the operator-review assumptions state the limit; the result cell written as prose; the budget clause replaced by the twin's sources in `check:bundle`'s route-only list; the registry check's base-commit reading replaced by an append-only digest manifest a spec checks; `twin:derive` removed under rule 26; rules 9, 25 (with the deferral route) and 29 written into the criteria; the dependency keys compared with the integrated commit.
**Depends on:** WO-016 merged (hard: the `records` library with its
six-field WO-221 and WO-226 copies and the machinery types in
`libs/shared/models` that this lane reads; the `replay` library WO-016 once
carried is now this order's); WO-008 merged (hard: `routePermissions`, the
`canMatch` guard, the mocked provider's default and `denied` users and the
`/denied` route that gate `/twin`). Both are sequenced ahead of this order.
The base above is WO-039's merge on the target's `main`, which precedes both
merges; step 1 fast-forwards the target worktree to `main`, which holds them,
and since starter v0.96.1 (core WO-230) the target publish describes the
change from the merge base of the subject and the target's `main` and names
the activation base beside it.
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-016",
    "relation": "hard",
    "reason": "the records library with the six-field WO-221 and WO-226 copies and the machinery types this lane reads"
  },
  {
    "workOrderId": "WO-008",
    "relation": "hard",
    "reason": "routePermissions, the canMatch guard, the mocked provider's default and denied users and /denied, which gate /twin"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 1, 3, 4, 5, 7, 8, 9, 10, 12, 15, 22, 24, 25, 26, 29 and 30; §The
app and its sub-apps, including design rules G1 to G6 and the design
direction; §The operator's model); `docs/repositories/dotln-angular.md`;
`docs/operator/README.md` (§The app and its subject, the operator's model);
the target's `docs/ai-reference/machinery-rules.md` and
`docs/dev-reference/architecture/machinery.md` as WO-016 lands them; the
`records` library at the integrated commit; the target's
`libs/features/tools/src/lib/composites/study-visuals/marbles/marbles-drawing.ts`
(the reading order the lanes keep, and why they do not import it),
`tools/scripts/check-bundle.mjs` and `tools/bundle.test.mjs`; design C at the
sections named above; the 2026-10-24 planning document's §4 tables for
WO-221.

**Objective:** the operator signs in through the mocked provider, opens Twin
under Machinery and arrives at `/twin` on WO-221: one time axis with the
order's sixteen beats as glyphs; a lane of the hand-backs as the replay places
them, a band naming the chosen variant (the patience table, seeded from the
operator's own recorded gaps) and the twin's dispatches under it, read as the
house's marble diagrams are read; the recorded lane beneath, carrying the
operator's eight dispatches as reference marks; and the result cell, prose
that reads what the order would have cost under the twin: its virtual close,
its waiting minutes and its early fires, each beside the recorded 1,110.3
minutes, 226.9 minutes and none, and the floor, the 883.4 minutes the record
gives its phases from request to hand-back, under which no patience closes
this order. They pick each variant from a picker that lists every variant
ever written with its version and lineage (the patience table and an hourly
check-in, with the presence variant and the size multiplier shown locked and
why); flip a duration, the fails multiplier or the check-in period with a
stepper and watch the twin lane redraw at once over a near-transparent ghost
of its previous position while the recorded lane stays where it was and the
result cell recomputes; flip every duration to zero and watch the twin close
at the floor with nothing waited, which the floor sentence reads as the limit
of these figures: they price a patience policy for this order and cannot say
which policy is the operator's. They keep a flip by exporting its TypeScript
file, manifest row and registry line, because the RxJS that describes the
operator is the RxJS that runs; reload, sign in again (a reload ends the
session while the mock runs in the page, WO-008) and come back to `/twin`
by the page kept for after the sign-in, and find the variant and flips they
left; and switch to WO-226. They learn what each patience would have cost
this order and decide whether a flip is worth keeping as a new variant. No
agreement figure against the recorded lane is computed or shown.

**Observed gap (dated 2026-11-09 at `eb9d227`):** the app has no model of the
operator. `BasePaths` holds `Board`, `Scene`, `Machinery` and `Tools`
(`libs/shared/core/src/lib/paths/routes.ts`); no route is gated and no
`routePermissions` exists (WO-008 lands both); `/machinery` renders WO-013's
arriving page; `libs/shared` holds no `records`, `replay`, `twin-model` or
`auth` library. WO-016 lands the field-reduced WO-221 and WO-226 copies and
the machinery types but no stream that decides when to dispatch. The
re-derived WO-221 table (the 2026-10-24 planning document §4): 16 rows, 8
operator rows (the activation, three verification requests, two repair
requests, two final-review requests), seven gaps after a hand-back of 87.8
(after the implementation hand-back, no verdict), 109.9 (after the first
verification's fail), 1.7 (after a repair), 1.4 (after a verification pass),
2.1 (after the first final review's fail), 18.2 (after a repair) and 5.9
(after a verification pass) minutes, 226.9 waiting minutes in all (226.93295 by the stamps; the seven gaps are
shown to one decimal and their rounded forms sum to 227.0), a span of
1,110.3 minutes, so 883.4 minutes from request to hand-back; the worker
durations from each request to its completion are in the same rows. RxJS is
7.8.2 in the base's `package-lock.json`. In its published sources
`VirtualTimeScheduler`, exported from `rxjs`, defaults `maxFrames` to
`Infinity` and its `flush()` runs every queued action synchronously, while
`TestScheduler` (`rxjs/testing`) passes a 750-frame cap to it outside `run()`
and `run()` sets the static `frameTimeFactor` to 1; the base's only
production use of `rxjs/testing` is the static parsers
`TestScheduler.parseMarbles` and `parseMarblesAsSubscriptions` in
`libs/features/tools/src/lib/studies/rxjs/marbles.ts` (lines 124 to 176,
inside the lazy Tools chunk), and no production code constructs or runs a
scheduler. The marble drawing (`.../study-visuals/marbles/marbles-drawing.ts`)
spaces frames evenly across the 600-unit `drawingWidth`, numbers every 1, 2
or 5 frames (line 98) and floors a marble's radius at 6 (line 125); it draws
the twenty RxJS studies and the eleven messaging studies built with
`flowFromMarbles`. The production build declares two budgets, `initial` and
`anyComponentStyle` (`apps/dotln/project.json` lines 37 to 48), so no lazy
chunk has a budget; `npm run check:bundle` refuses the menu's, the catalog's
and the Tools feature's sources in the initial closure
(`tools/scripts/check-bundle.mjs` lines 68 to 75). The e2e serves the
optimized `mocked` build through `nx serve-static dotln`
(`apps/dotln-e2e/playwright.config.mts` line 21). `i18n:check` runs the keys
manager with `--emit-error-on-extra-keys` over the root catalog, finding keys
in templates and in `translateSignal` calls (`tools/scripts/check-i18n.mjs`).
The operator has decided: results only, variants kept, nothing held back.

**Design:**

- **The replay** (`libs/shared/replay`, `scope:shared`, `type:util`,
  `@dotln-angular/replay`; no testing entry point, because it exports no
  injectable or token): `replayScheduler({ resolution })` returns RxJS's
  `VirtualTimeScheduler` from `rxjs`, uncapped, at a resolution of one frame
  per recorded second by default; `framesOf` and `minutesOf` convert between
  recorded time and frames; `replayOn(events, scheduler, zero)` emits each
  event at its `recordedAt` offset. It takes a generic `{ recordedAt }` shape
  so it imports no models. The scheduler question is answered here:
  `VirtualTimeScheduler`, never `TestScheduler`, in production code;
  `TestScheduler` stays in specs. WO-016's `ReplayClock` (position, speed,
  `jumpTo`), `toAsciiMarble` and `frames` are not built: nothing on this page
  plays or scrubs time, and the lanes' text equivalent is translated
  sentences. WO-015's scene clock drives frames, this library drives recorded
  time, and the twin adds no third time abstraction.
- **The model as code** (`libs/shared/twin-model`, `scope:shared`,
  `type:util`, RxJS and `@dotln-angular/replay` only, `@dotln-angular/twin-model`
  and `/testing`): a `TwinVariant { id, version, since, supersedes?, family,
  describe: (handBacks$, scheduler, params) => Observable<TwinDispatch>,
  params: ParamSpec[] }`, with `family` and each parameter's `name` drawn
  from identifier unions the model declares and no display text in a
  variant (rule 9 is the feature's, below); a hand-back carries every field
  the copies carry (its ordinal, type, recorded time, order, actor and
  verdict), its phase kind, its replayed completion and the fails so far, so
  nothing is held back from a variant.
  `variants/v0-patience-table.ts`: one duration per hand-back kind, seeded
  with the mean of that kind's recorded gaps rounded to the minute (88, 110,
  4, 2 and 10 minutes after the implementation hand-back, a verification
  fail, a verification pass, a final-review fail and a repair), built on
  `delayWhen` with `timer(d, scheduler)`, with a fails multiplier that
  scales a duration once per fail so far (default 1, no effect) and a
  report-size multiplier shown locked because no copy carries a size. `variants/v0-check-in.ts`: the operator looks at the order
  every `period` minutes from the activation and dispatches the hand-back
  waiting, built on `sample(interval(period, scheduler))`, the period
  defaulting to 60 minutes (the planner's choice, an hourly check-in). A
  presence race is listed as locked because no presence source exists in
  the copies. Every parameter is a named value in the variant file with its
  default and stepper bounds; a flip is a runtime override of those values
  and a kept flip is exported as a new variant file the operator commits.
  `variants/index.ts` is the registry: one entry per id with
  `load: () => import('./<id>')`, so each variant is its own lazy chunk and
  the twin's chunk carries the index. `variants/variants.json` is the
  manifest, one row per variant `{ id, version, file, since, supersedes?,
  sha256 }`, append-only: a row once written never changes and is never
  removed, a new variant appends one, and lineage reads from `supersedes`, so
  an old row stays byte-identical when its successor lands. `.prettierignore`
  lists the variants directory, as it lists the pinned board schema, so no
  formatter rewrites a recorded variant's bytes.
- **The registry spec** (`variants/registry.spec.ts`, in `twin-model`'s test
  target, which the registered gate and CI's affected tests run): one check
  reads the variants directory and asserts that the registry's ids equal the
  manifest's, that each row's file exists and its SHA-256 equals the row's
  `sha256`, that every `.ts` file in the directory other than `index.ts` and
  the specs has a row, and that each module exports a `TwinVariant` whose
  `id`, `version`, `since` and `supersedes` equal its row's; the spec runs
  the check over the committed directory and over three altered temporary
  copies (a row removed; a recorded variant's bytes changed under its id and
  filename; a variant file with no row), each of which must fail while the
  unaltered copy passes. It reads the working tree alone, so it means the
  same thing in every order's gate and in CI (`nx affected` runs it whenever
  a change touches the variants directory). What it cannot see
  is a change that edits a variant and its row's digest together; the rules
  document forbids that edit and the pull request shows it.
- **The result fold** (`results.ts`, pure): replays the order on the replay
  scheduler with the twin deciding each dispatch moment and the recorded
  worker durations (completion minus request, per phase, from the copy)
  following each dispatch. A hand-back is ready when its phase completes in
  the replay: the replayed dispatch of that phase plus the phase's recorded
  duration. Waiting minutes count from that moment to the twin's next
  dispatch, and a dispatch before it is early. The replay ends at the order's
  close: every variant's stream is cut at the final hand-back, so a periodic
  variant cannot keep an uncapped flush running. The fold yields the virtual
  close time, the twin's total waiting minutes, the count of dispatches fired
  before the preceding hand-back existed (zero by construction for both
  variants, counted so a later variant that fires on a timer is judged), the
  same three figures for the recorded dispatches as the baseline, whose
  replay must reproduce the recorded close within one virtual second, and the
  floor: the sum of the recorded durations, the close of any variant that
  dispatches at every replayed completion. For a variant that never fires
  early the close is the floor plus the waiting minutes, so the three
  figures carry one number, and a variant with every duration at zero closes
  at the floor; the fold computes no figure such a variant pays, because the
  copies carry nothing a wait buys (§Known issues). The fold is the canonical
  computation of the WO-221 figures: its baseline spec asserts the re-derived
  table directly. No hit rate, no tolerance band, no agreement count against
  the operator's beats is computed anywhere in the feature.
- **The lanes** (`libs/features/twin/src/lib/composites/twin-lanes/`): the
  lanes keep the reading order of the house marble diagrams (an input above,
  the operator's name in a band, the output below): the replayed hand-backs
  above, the variant's name in the band, the twin's dispatches below, the
  ghost of the previous dispatches at reduced opacity, and the recorded lane
  beneath them for reference, so a reader of the RxJS studies reads the twin
  the same way. The twin draws them with its own pure modules.
  `lane-scale.ts` maps recorded time to x by a monotone piecewise-linear
  scale built from the recorded rows alone, each recorded interval at least a
  glyph's width wide, so the 1.4-, 1.7- and 2.1-minute gaps stay apart, plus a
  fixed tail after the recorded close for a twin that closes later; because
  the scale reads only the record, no flip moves a recorded mark.
  `lane-drawing.ts` lays the marks out for a width in CSS pixels that the
  composite reads from its element, so a glyph keeps its size at every width,
  and spreads twin marks that would overlap as the marble drawing spreads a
  frame's emissions. The lanes' text equivalent is a list of translated
  sentences, one per mark, naming its phase, its minute and its wait.
- **Feature** (`libs/features/twin`, `scope:dotln`, `type:feature`,
  `twinRoutes`; `BasePaths.Twin = 'twin'`, listed in the Machinery menu
  group, with its entry `twin:read` in WO-008's `routePermissions` adjacency
  list, whose coverage spec requires every `BasePaths` member, granted to the
  mocked provider's default user and withheld from its `denied` user, and a
  signed-in e2e path through WO-008's mocked provider): `twin-page`
  (container) over `TwinFacade` (signals for the order, the variant and the
  flips; one `vm` with the beat glyphs, the hand-back, twin, ghost and
  recorded lanes and the result cell); composites `twin-lanes` (above),
  `result-cell` (prose: one translated sentence per figure, its numeral set
  large as an instrument beside the recorded baseline and the difference,
  then the floor sentence; `unknown` admitted), `variant-picker` (registry
  entries with version and lineage; the locked entries with their reasons),
  `flip-panel` (steppers per parameter, no free text), `export-variant` (a
  dialog showing the generated TypeScript file, its manifest row with the
  SHA-256 the browser computes with `crypto.subtle.digest`, and its registry
  line, each with a copy button, and a download of the file); mappers
  `phases-mapper` (the copy's rows to the fold's phases, each request paired
  with the completion that follows it), `beat-glyph` (kind and verdict to a
  native emoji with a text equivalent), `lane-mapper`; a layout.
  `TwinStore` (`libs/features/twin-data-access`) persists the chosen variant
  and the current flips through `withPersistedState` under
  `dotln-angular.twin`. The fold runs on `@dotln-angular/replay`'s scheduler,
  flushed synchronously, so a flip redraws without a clock.
- **Strings** (WS-001 rule 9, G3): every string a reader sees reaches the
  screen through Transloco: the lanes' sentences, the result cell's prose and
  numerals, the beat glyphs and their text equivalents, the picker's names,
  lineage and locked reasons, the steppers' labels and the export dialog's
  labels. `twin-labels.ts` in the feature maps each variant family and
  parameter identifier to a message through `translateSignal`, in tables
  typed by the identifier unions, so `i18n:check` finds every key, a new
  family or parameter fails to compile until its label exists, and an
  exported flip, which keeps its parent's family and parameters, adds no
  message. The generated TypeScript in the export dialog is the executable
  file and is shown as it will be committed; its labels are messages.
- **Loading.** The production build's budgets are `initial` and
  `anyComponentStyle`; the twin's code stays out of the initial bundle. The
  twin feature's, `twin-model`'s and `replay`'s sources join the route-only
  list in `tools/scripts/check-bundle.mjs`, `tools/bundle.test.mjs` gains a
  case in which a variant's source in the initial closure fails the check,
  with the unaltered fixture as its control, and the paragraph on
  `check:bundle` in `docs/dev-reference/workspace/scripts.md` names them.
- **Design brief and the first pair** (WS-001 rules 25 and 29): the lanes as
  marble diagrams across the page's width in the reading order above, the
  recorded lane fixed beneath and the ghost at reduced opacity; the result
  cell as prose with its numerals set large beside their baselines and the
  difference legible at a glance, never a key-value or definition list; the
  variant picker as a list of names with version and lineage; the flip panel
  as labelled steppers; the catalog's type scale and measure; nothing
  animated at rest. The comparison runs as the operator's eye doctor test:
  the first pair is A, the result cell beside the lanes, against B, the
  result cell beneath them, one variable (where the result sits), built and
  rendered at about 2080 by 1460 and at 360 during execution and read at 3840
  by 1620, presented as A then B with the round named in the question and
  both captions; the operator's preference makes the next pair, content and
  usability before cosmetic polish, until the operator says the process is
  done, and a preferred candidate alone is not acceptance; the decisions file
  records each round's pair and pick, the rejected implementation leaves the
  code when its round is decided (its screenshots and an implementation
  record under `docs/evidence/WO-017/design/` are the history), and a decided
  choice is not relitigated for this order. The operator may delay the rounds
  to a dedicated A/B testing pass (rule 25): the order then records its first
  pair without a pick, ships A, and its decisions file carries the rounds as
  a follow-up that the planning pass filing that pass allocates to it.
- **Documents:** `docs/dev-reference/architecture/twin.md` (the twin as
  code, the variant lineage rule and the digest manifest, the result fold,
  its baseline spec, the floor and the identity between the close, the floor
  and the waiting minutes, the replay library and the scheduler answer, the
  lanes' scale, what the lane claims and does not) and
  `docs/ai-reference/twin-rules.md` (a variant is a TypeScript file and is
  never deleted; a manifest row is never changed or removed; the twin is
  judged by the order's results, never by agreement with recorded beats;
  nothing is held back from it; the recorded lane never moves; no free-text
  parameters; a variant carries no display text; nothing writes outside
  browser storage).

Rejected: a fidelity cell scoring hits against the operator's beats (axis:
the operator's decision, results only; there are many paths from a hand-back
to a close); a JSON model interpreted at runtime (axis: the operator's
decision, the RxJS that describes is the RxJS that runs); deleting or
overwriting a superseded variant (axis: old versions are kept to play with);
a live journal or presence source (axis: none exists in the copies; the kind
is shown locked); a fourth result priced by an assumed reading time or a
minimum wait (axis: the record: the copies carry no reading time, report
size, direction or presence, and such a charge only moves the trivial winner
to its threshold; the floor is shown instead); moving the marble drawing into
`libs/shared/ui` so that the tools feature and the twin both import it (axis:
containment: the drawing spaces frames evenly, numbers every 1, 2 or 5 frames
and floors a marble at radius 6, so WO-221's 1,110.3 minutes would print
hundreds of overlapping numbers and the 1.4-, 1.7- and 2.1-minute gaps would
overlap; serving the twin would put a record-only scale, a tail, glyph marks
and a ghost as options into a function that draws thirty-one studies whose
drawings must not change, and the move takes its input types or a structural
copy of them, `drawingWidth` and three specs with it; the twin keeps the
diagrams' reading order and draws its own lanes); `TestScheduler` in the
browser (axis: it is the testing subclass, capped at 750 frames outside
`run()`, whose `run()` rewrites a static; `VirtualTimeScheduler` is the
production export and uncapped); a registry check that reads the manifest at
the order's base commit (axis: the check runs in every later order's gate and
in CI, where this order's base is no input and names nothing; the digest
manifest reads the working tree alone); the derivation script and its
derived fixture (axis: rule 26: a second computation of figures the fold's
spec asserts from the re-derived table directly); a quiet-period variant on `debounceTime` and a
check-in on `auditTime` (axis: both reduce to a fixed delay after each
hand-back when the next hand-back exists only after the twin dispatches, so
the picker would list one shape three times).

Live-run surfaces: at the base, the optimized `mocked` build served by `nx
serve-static dotln`, which every e2e run serves; Storybook; WO-007's MSW
worker; and the Machinery menu group (`apps/dotln/src/app/app.ts` lines 32 to
40). After step 1's fast-forward: WO-016's records copies and WO-008's
sign-in through the mocked provider, its `denied` user and `/denied`, none of
which exists at the base or has run in this target until those orders merge.

**Deliverables:** the replay library; the twin-model library with two
variants, the registry, the digest manifest and its spec, and the result
fold; the twin feature with its lanes, result cell, picker, flip panel,
export and labels, and its data-access library, with kits; the route, the
permission entry, the mock's claim and the menu item; the bundle check's twin
sources and its case; the two documents and the pointer edits;
`docs/evidence/WO-017/` with `design/`, `walkthrough.md` and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-017: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; the integrated commit
   holds WO-016's and WO-008's merges (`ls -d libs/shared/records
   libs/shared/auth` lists both and `grep -rl routePermissions
   libs/shared/core/src` prints a file), or the order stops for a planning
   pass; then the route guard and activation as WO-005 step 1. Check: the
   decisions file records the integrated commit and both reads.
2. Generate `libs/shared/replay` (`scope:shared,type:util`),
   `libs/shared/twin-model` (`scope:shared,type:util`), `libs/features/twin`
   (`scope:dotln,type:feature`) and `libs/features/twin-data-access`
   (`scope:dotln,type:data-access`) with logged commands, a testing entry
   point where the library exports a kit or a fixture (rule 5). Check: `npx nx
   show projects` lists the four, and `generator-log.md` carries the four
   commands.
3. `libs/shared/replay/src/lib/replay.ts`: `replayScheduler`, `framesOf`,
   `minutesOf`, `replayOn`; specs. Check: `npx nx test replay` exits 0,
   including a spec that flushes a replay spanning 66,618 recorded seconds
   (WO-221's 1,110.3 minutes) at one frame per second and asserts every event
   emitted at its frame before `flush()` returns.
4. `libs/shared/twin-model/src/lib/types.ts` and `results.ts` with marble
   specs over synthetic phases: readiness, waiting and early fires counted
   from the replayed completion, a moved dispatch moving the following
   completion, the floor and the identity of close, floor and waiting
   minutes, the replay cut at the close. Check: `npx nx test twin-model`
   exits 0.
5. `variants/v0-patience-table.ts`, `variants/v0-check-in.ts`,
   `variants/index.ts`, `variants/variants.json` with each row's SHA-256, and
   the variants directory in `.prettierignore`; specs for the seeds, the
   fails multiplier, the check-in's `sample` semantics and its replay ending
   at the close. Check: `npx nx test twin-model` exits 0.
6. `variants/registry.spec.ts`: the check and its three altered copies.
   Check: `npx nx test twin-model` exits 0, and the check fails on each
   altered copy.
7. `libs/features/twin/src/lib/mappers/phases-mapper.ts` and the baseline
   spec over WO-016's WO-221 and WO-226 copies (the copies' entry point and
   file names are written as WO-016 lands them; step 1 confirms them).
   Check: `npx nx test twin` exits 0.
8. `TwinStore` with `withPersistedState` under `dotln-angular.twin`, with its
   kit. Check: the persisted-state spec over a fake storage asserts the key
   prefix and no other write.
9. `lane-scale.ts` and `lane-drawing.ts` with specs over WO-221. Check: `npx
   nx test twin` exits 0.
10. Composites, mappers, `twin-labels.ts`, layout, container, facade and its
    kit, the `twin.*` messages; stories `Wo221`, `Wo226`, `Flipped`,
    `AtTheFloor`, and one story per layout candidate while its round is
    open. Check: `npx nx test twin` exits 0; `npm run lint:components`,
    `npm run check:templates` and `npm run i18n:check` exit 0.
11. The variant export: the generated file for a kept flip, its manifest row
    and its registry line. Check: a spec writes the file to a temporary
    directory and type-checks it against `TwinVariant`, and compares the
    row's `sha256` with `node:crypto`'s SHA-256 of the file.
12. `BasePaths.Twin`, its `routePermissions` entry (`twin:read`) and the
    mock's default-user claim, the lazy route, the Machinery menu item in
    `apps/dotln/src/app/app.ts`. Check: `npm run i18n:check` exits 0; `npx nx
    test core` exits 0 with the `routePermissions` coverage spec; `npx nx
    build dotln --configuration=production` exits 0.
13. `tools/scripts/check-bundle.mjs`'s route-only list gains the twin
    feature's, `twin-model`'s and `replay`'s sources; `tools/bundle.test.mjs`
    gains the variant case beside its control; the `check:bundle` paragraph
    in `docs/dev-reference/workspace/scripts.md` names them. Check: `npm run
    test:tooling`, `npm run check:bundle` and `npm run check:scripts` exit 0.
14. The first rendered pair (A beside, B beneath) at about 2080 by 1460 and
    360, read at 3840 by 1620; the rounds, or the operator's delay of them to
    the A/B testing pass; the rejected implementation removed with its record.
    Check: `docs/evidence/WO-017/design/comparisons.md` records round 1.
15. e2e `apps/dotln-e2e/src/twin.spec.ts`: sign in through the mocked
    provider; the lanes, the result cell with the recorded baseline and the
    floor sentence; the variant picker lists the two variants and the locked
    presence entry, and the flip panel shows the size multiplier locked; a
    flip redraws the twin lane and leaves the recorded marks where they
    were; flipping every duration to zero brings the close to the floor;
    the export dialog shows the TypeScript and the manifest row; the chosen
    variant survives a reload; the keyboard path over every flip; axe at the
    board spec's threshold; no horizontal overflow at 360, 768, 1440, about
    2080 by 1460 and 3840 by 1620; then the walkthrough: the executor
    performs the Objective's session in the served `mocked` configuration
    build (the production build carries no provider, WO-008 criterion 5),
    saves one screenshot per step at those five sizes under
    `docs/evidence/WO-017/walkthrough/` and writes
    `docs/evidence/WO-017/walkthrough.md` with the dated steps and the figures
    before and after the flip. Check: `npx nx e2e dotln-e2e` exits 0 and the
    walkthrough files exist.
16. Documents: `twin.md`, `twin-rules.md`, the pointers in
    `docs/dev-reference/README.md` and `docs/ai-reference/README.md`,
    `conventions.md`. Check: the greps of criterion 10 print their counts.
17. Dependency check as WO-015 step 15; gate plain and review. Check: the
    dependency check prints nothing; passing rows, no tracked-byte mutation.
18. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation (the section earlier orders call Demonstrated
    architecture) gains the twin: the variants, the registry spec, the
    result fold and the replay library; WS-001's delivery states updated by
    the final review. Check: `npm run test:docs`. Then the publish, review
    and records steps as WO-007 steps 15 to 17, with the branch
    `feat/twin-patience-lane`, the title `feat: add the digital twin's
    patience lane`, `docs/evidence/WO-017/` and `docs/final-reviews/WO-017/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run typecheck:e2e`,
`npm run lint:fixtures`, `npm run lint:components`, `npm run lint:hygiene`,
`npm run check:templates`, `npm run check:fixtures`, `npm run test:tooling`,
`npm run i18n:check`, `npm run check:scripts`, `npm run check:bundle`,
`npx nx e2e dotln-e2e`; in the launchpad order worktree `npm run test:docs`;
then the target gate plain and review once each.

**Acceptance criteria (all required)**

1. `npx nx test twin` exits 0 with a spec that folds WO-016's WO-221 copy
   under the recorded dispatches and asserts 8 operator rows, and that the
   seven gaps after a hand-back, the waiting minutes, the close and the
   floor each equal, within one virtual second, the value the spec computes
   from the copy's own `recordedAt` stamps (a gap is the operator row's
   stamp less the stamp of the hand-back before it; the waiting minutes
   their sum; the close the last stamp less the first; the floor the close
   less the waiting minutes), whose one-decimal display forms are 87.8,
   109.9, 1.7, 1.4, 2.1, 18.2 and 5.9, then 226.9, 1,110.3 and 883.4
   minutes, with the first gap's hand-back carrying no verdict; that the patience table with every duration flipped
   to zero closes at the floor with zero waiting minutes and zero early
   fires; and that WO-226's copy folds to gaps equal to its own stamps
   within one virtual second, shown as 316.0 and 31.7 minutes.
2. `npx nx test twin-model` and `npx nx test replay` exit 0 with specs
   asserting that waiting minutes and early fires are counted from each
   hand-back's replayed completion (the replayed dispatch plus the phase's
   recorded duration); that a variant which moves a dispatch moves the
   following completion with it; that for a variant with no early fire the
   close equals the floor plus the waiting minutes; that the patience table's
   defaults are 88, 110, 4, 2 and 10 minutes after the implementation
   hand-back, a verification fail, a verification pass, a final-review fail
   and a repair; that the check-in dispatches each hand-back at the first
   check-in at or after its replayed completion and that its replay ends at
   the order's close; that a flip changes the twin's figures and dispatches
   and leaves the recorded dispatches and baseline unchanged; and that a
   replay spanning 66,618 recorded seconds on `replayScheduler()` emits every
   event at its frame before `flush()` returns.
3. `npx nx test twin` exits 0 with specs on `lane-scale.ts` and
   `lane-drawing.ts` asserting, over WO-221, that no two marks of one lane
   overlap at the lane width the 360 layout gives; that every recorded mark
   keeps its x across two flips, one of which moves the twin's close past
   the recorded close; and that the lanes' text equivalent names every mark
   through the translator.
4. `grep -rliE "hit ?rate|hits/n|tolerance band" libs/shared/twin-model/src libs/features/twin/src libs/features/twin-data-access/src --include='*.ts'`
   prints nothing, and the result cell's `vm` type has no field named `hits`
   (a spec asserts the field set: virtual close, waiting minutes and early
   fires, each with its recorded baseline, and the floor).
5. `npx nx test twin-model` exits 0 with the registry spec:
   `variants/variants.json` lists `v0-patience-table` and `v0-check-in`; the
   registry's ids equal the manifest's; each row's `sha256` equals the
   SHA-256 of its file; every `.ts` file in `variants/` other than `index.ts`
   and the specs has a row; and the same check fails on each of three
   temporary copies, one with a row removed, one with a recorded variant's
   bytes changed under its id and filename and one holding a variant file
   with no row, while the unaltered copy passes. `.prettierignore` lists
   `libs/shared/twin-model/src/lib/variants/`.
6. `grep -rlE "JSON.parse|new Function|eval\(" libs/shared/twin-model/src --include='*.ts' | grep -v spec` prints nothing, a spec asserts every registry entry's module exports `describe` as a function (no interpreted model), and the export spec type-checks a generated variant against `TwinVariant` and finds its manifest row's `sha256` equal to `node:crypto`'s SHA-256 of the generated file.
7. The persisted-state spec asserts every key written starts with `dotln-angular.twin` and no other storage, cookie or network write occurs, and a second spec seeds that key with a value that does not parse and with one naming an unknown variant and asserts the facade yields the first registry entry with no flips;
   `grep -rlE "from 'node:|from \"node:|require\(" libs/shared/replay/src libs/shared/twin-model/src libs/features/twin/src libs/features/twin-data-access/src --include='*.ts' | grep -v spec`
   prints nothing.
8. `npx nx e2e dotln-e2e` exits 0 and includes: a sign-in through WO-008's
   mocked provider, then the lanes and the result cell with the recorded
   baseline and the floor sentence on `/twin` (`routePermissions` maps `BasePaths.Twin` to `['twin:read']`, WO-008's coverage spec passes, and the `denied` user reaching `/twin` lands on `/denied`); the two variants and the locked presence entry in the picker, and the size multiplier locked in the flip panel;
   a flip redrawing the twin lane while every recorded mark's bounding box is
   unchanged; every duration flipped to zero bringing the virtual close to
   the floor; the export dialog showing the TypeScript and the manifest row;
   the chosen variant present after a reload and the sign-in it requires,
   no token having been kept at rest; the keyboard path over every
   flip; axe at the board spec's threshold; no horizontal overflow at 360,
   768, 1440, about 2080 by 1460 and 3840 by 1620.
9. `npm run i18n:check` and `npm run check:templates` exit 0 with the twin's
   templates and sources in their scope, and `twin-labels.ts` maps every
   member of the variant family and parameter identifier unions to a message
   through `translateSignal` in tables typed by those unions (`npx nx test
   twin` compiles them).
10. `docs/dev-reference/architecture/twin.md` records the scheduler
    (`VirtualTimeScheduler` from `rxjs`), readiness as the hand-back's
    replayed completion, the floor and that for a variant with no early fire
    the close is the floor plus the waiting minutes;
    `docs/ai-reference/twin-rules.md` states that a variant is never deleted,
    that a manifest row is never changed or removed and that the twin is
    judged by results only (`grep -c "judged by results" docs/ai-reference/twin-rules.md` and `grep -c "never by agreement" docs/ai-reference/twin-rules.md` are each at least 1);
    `grep -rl "rxjs/testing" libs/shared/replay/src libs/shared/twin-model/src libs/features/twin/src --include='*.ts' | grep -v spec`
    prints nothing; `package.json`'s `dependencies` keys equal those of the
    integrated commit step 1 records; `npm run check:bundle` exits 0 with the
    twin feature's, `twin-model`'s and `replay`'s sources in its route-only
    list, and `npm run test:tooling` exits 0 with a bundle case in which a
    `twin-model` variant's source in the initial closure fails the check
    while the unaltered fixture passes; `npm run check:scripts` exits 0.
11. `docs/evidence/WO-017/design/comparisons.md` records the first pair (A,
    the result cell beside the lanes; B, beneath them), each rendered at
    about 2080 by 1460 and at 360, and either every later round with its
    pick, the decisions file recording the operator's word that ended the
    rounds and naming the rejected candidate's files, which `ls` does not
    find; or, when the operator delays the rounds to a dedicated A/B testing
    pass, the decisions file recording that direction with its capture
    digest, the first pair without a pick, A as the candidate shipped and the
    rounds as a follow-up for the planning pass that files the A/B testing
    pass. When the operator has given neither by handoff, the executor
    records the open round in the decisions file and does not hand off.
12. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
    session in the served `mocked` configuration build (WO-008 keeps the mock
    out of the production build): sign in through the mocked provider; open
    Twin under Machinery on WO-221 and read the lanes and the result cell
    against the recorded baseline and the floor; pick each variant and read
    why the locked entries are locked; flip one parameter and watch the twin
    lane and the figures change while the recorded lane stays; flip every
    duration to zero and read the close at the floor; export the kept flip
    and read the TypeScript and its manifest row; reload, sign in again and
    return to `/twin` through the page kept for after the sign-in, and find
    the chosen
    variant; switch to WO-226. The VER report carries a `## Walkthrough`
    section with the dated steps and names, for every step, its screenshot
    at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-017/walkthrough/`, and states in the verifier's own
    words what the three figures were before and after the flip and what the
    floor told them. A UI issue at about 2080 by 1460 or at 3840 by 1620
    fails this criterion; an issue at another size is a boarded follow-up.
    The criterion is met only when every step completed and that statement is
    present.
13. `node scripts/target-gate.mjs WO-017 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs (with
`npm run check:bundle`'s), `docs/evidence/WO-017/README.md`, `design/`,
`docs/evidence/WO-017/walkthrough.md` and its screenshots, and
`docs/evidence/WO-017/host-qualification.md`.

**Known issues and carry-ins:** Carried from planning receipt 012 (2026-10-28), two known issues that still apply: the production configuration has no identity provider (WO-008 keeps the mock out of it), so the served production app cannot open the gated `/twin` and this order's walkthrough runs on the mocked configuration, reopened when the operator says the twin must open in production; and every variant is kept as code and none is deleted, so the registry and its lazy chunks only grow, reopened when the build's budget output names the twin or the operator directs a variant's removal. The 2026-11-09 pass set the base to
`eb9d227` (WO-039's merge, `DotLn Angular v0.11.1`) in place of `bc9133e`,
the scaffold commit whose tree is empty; the base precedes WO-016's and
WO-008's merges, step 1 fast-forwards the target worktree to `main`, which
holds both, and the merge-base publish of starter v0.96.1 (core WO-230)
describes the change from the merge base. What this order reads from WO-016
and WO-008 (the copies' entry point and file names, `routePermissions`, the
mocked users) is written against those orders' texts as filed and confirmed
at step 1 against the integrated `main`. Seven gaps in one order are a toy's
sample; the result cell prints the figures for this order and claims nothing
beyond it; the grid over a dozen orders and the operator's own blind replay
are later lanes (candidate C6). The record has no presence, so a variant that
waits for the operator's return is shown locked, and report sizes are not in
the six-field copies, so the patience table's size multiplier is shown locked
until a copy carries a size. Starter v0.96.1's plan gate no longer advises on this order's own launchpad record paths (core's answer of 2026-10-24, item 1); they stay as the kit names them and the publish command's body file must not name them.

What results can say. From receipt 008 (the 2026-10-24 pass's refutation),
carried into this text by the 2026-10-24 second pass: judged by results
alone, a variant with every patience duration at zero yields the best of the
three figures (a virtual close of about 883.4 minutes, zero waiting minutes,
zero early fires) while modelling no one, because the fold replays the
recorded worker durations after each dispatch and a patience table never
fires before a hand-back exists; receipt 009 and the 2026-11-01 reviews kept
that reading under readiness as the replayed completion. The second
2026-10-24 pass left a fourth result such a variant pays to the operator to
name (its candidate C4, register row `FUP-4ddf0151d707734a`). The 2026-11-09
pass read that row against the six fields the copies carry (`ordinal`,
`type`, `recordedAt`, `workOrderId`, `actor`, `verdict`) and found that the
record supports no such figure: the replay fixes every worker duration and
every verdict, so every figure the copies yield is a function of the twin's
seven waits alone and improves as they shrink; the copies carry no reading
time, report size, direction or presence, so nothing in them says what a wait
bought; and a figure that charged a short wait by an assumed reading time or
a minimum wait would only move the trivial winner to that threshold. This
order therefore shows the floor on the page, states the identity of close,
floor and waiting minutes in `twin.md`, and adds no fidelity figure: the
operator's rule stands, results only and never agreement with the recorded
beats. The fourth result stays the operator's to name, on a record that
carries what a wait buys.

The 2026-11-09 pass also found that the earlier text's quiet-period variant
on `debounceTime` and its check-in on `auditTime` each reduce to a fixed
delay after every hand-back, because the next hand-back exists only after the
twin dispatches; the quiet period is dropped and the check-in rebuilt on
`sample` over a periodic check-in. It replaced the registry check's reading
of the manifest at the order's base commit with the digest manifest and its
spec, because the check runs in every later order's gate and in CI, where
this order's base is no input; removed `twin:derive` and its
derived fixture under rule 26, because the fold's spec asserts the
re-derived table directly; and replaced the clause on the production build's
budget output, which judged nothing because no lazy chunk has a budget, with
the twin's sources in `check:bundle`'s route-only list.

Earlier receipts' items, as they stand after that pass. From receipt 008:
`BasePaths.Twin` carries its `routePermissions` entry and the e2e signs in
first. From receipt 009 (the second 2026-10-24 pass's refutation), carried
into this text by the 2026-10-25 pass: the variants are lazy chunks (now
checked by `check:bundle`), and the twin replays on the replay library's
scheduler and adds no third tick contract; its item on `twin:check`'s message
for an absent base no longer applies. From receipt 011 (the 2026-10-26
pass's refutation), carried into this text by the 2026-10-28 pass: the
walkthrough and the e2e run on the served `mocked` configuration build,
because the production build carries no provider (its item (a)); the
documents' grep names the two phrases that matter, "judged by results" and
"never by agreement" (c); the layout is chosen through the rounds of rule 25;
its item (b) on the absent base and the gate clone's depth no longer
applies. From the 2026-11-01 pass's three reviews (its adversary R1, R2 and
R7, its design improver R3 and R4), carried into this text by the 2026-11-01
second pass: step 1's base guard is an ancestor check and the fast-forward;
and readiness is the replayed completion, because the recorded `recordedAt`
alone disagrees with the completions a moved dispatch reschedules; its items
on the registry check reading the working tree's manifest at the base are
superseded by the digest manifest, which reads the working tree alone and
fails an old variant's file changed under its id.
This order activates only on a launchpad whose starter carries core WO-221's
`--draft` form; the draft pull request and its workflow runs are a
final-review obligation read from `docs/evidence/WO-017/preview-pr.json`,
never a criterion. `Target release classification: minor` and `Target
release notes: reviewed` were set by the 2026-10-24 pass under WO-012's
declared policy.

**Non-goals:** a fidelity or agreement figure against the operator's beats;
a fourth result the six-field copies cannot support; moving or changing the
studies' marble drawing; a replay clock that plays or scrubs time; the
dozen-order grid, the blind replay and the ring; a live route, journal
digests or presence; a wait policy shipped to the platform (a graduated idea
goes to core as a GitHub issue); any write outside browser storage.

**Operator-review assumptions:** the operator accepts that the three result
figures, read beside the recorded baseline and the floor, price a patience
policy for this one order and cannot tell a faithful twin from a trivial
one: the six-field copies carry no reading time, report size, direction or
presence, so nothing in them says what a wait bought, and a variant with
every duration at zero closes at the floor while modelling no one; a fourth
result such a variant pays needs a record that carries what a wait buys and
stays the operator's to name. The operator accepts the patience table seeded
from the per-kind means of their own recorded gaps and the hourly check-in as
the planner's defaults, and reads the one draft pull request before final
review, which the final publish reuses.
