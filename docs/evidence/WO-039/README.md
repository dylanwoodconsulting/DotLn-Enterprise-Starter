# WO-039 evidence

2026-11-08. The second standards pass (WS-001 rule 31) over the enterprise pattern batch WO-023
landed. The sixteen presentations read names, tokens and per-kind choices from tables the
compiler checks; the `states` builder infers a move's transition; the tools test kit has one
model-study loader; Foreign Key Mapping's read limit counts what it should; the narrow register's
headings are decided; and the token rule is written.

The base is the target's `main` at `f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3` (WO-023's merge),
which `origin/main` still was when this record was last checked, and the launchpad's `main` at
`7a8dcff2909b7b2384407d1656286b0119badb97`. The candidate is the target worktree's tree on branch
`wo-039`, uncommitted until final review. The executor ran Claude Code `2.1.319` with
`claude-opus-5-5` at effort `max`, read from `CLAUDE_EFFORT`. The decisions are in
[decisions.md](decisions.md), WO-039-D001 to D018. The target's records step moves them to the
target's `docs/dotln/evidence/WO-039/decisions.md`, where `catalog.md` links D011.

## Where each criterion's evidence is

| Criterion | Evidence |
| --- | --- |
| 1, the use | The verifier's `walkthrough.md` and `walkthrough/`; the executor does not perform it. |
| 2, the measure | [shape-audit-before.json](shape-audit-before.json), [shape-audit-after.json](shape-audit-after.json), [§The measure](#the-measure) and [§The sixteen presentations](#the-sixteen-presentations) |
| 3, every output unchanged | [model-outputs.json](model-outputs.json), [dom-diff.json](dom-diff.json), [comparator-control.json](comparator-control.json), [§Every output unchanged](#every-output-unchanged), and the review gate's browser and visual rows |
| 4, the builder, the unions and the loader | [§The shared pieces](#the-shared-pieces) |
| 5, Foreign Key Mapping | [fkm-control/](fkm-control/results.json) and [§Foreign Key Mapping's read limit](#foreign-key-mappings-read-limit) |
| 6, the narrow register | D011, the register measurements, [narrow-register/](narrow-register/), [reading-critic.md](reading-critic.md) and [§The narrow register](#the-narrow-register) |
| 7, the documents and the check | [§The documents and the check](#the-documents-and-the-check) |
| 8, the gates | The gate rows and [handoff.md](handoff.md) |

## The programs

Four programs come from WO-034's evidence in this launchpad, `docs/evidence/WO-034/`, copied at
launchpad commit `7a8dcff2909b7b2384407d1656286b0119badb97`, where each was last changed by
`a3459d63431cd40c1c7b5590c785313944403a82`. WO-034's copies and their pins are untouched.

| Program | Source SHA-256 | What this order changed |
| --- | --- | --- |
| [shape-audit.mjs](shape-audit.mjs) | `5b8c9c9cbf5f6a3cf26cc7dbf937243aadea5f5b651f171f9a55c2a02bc02b1d` | Adds the `poeaa` group's files, functions, functions over four positional parameters and at 70 counted lines or more, and the counts of `studyPoeaa/en.json`. |
| [crawl.mjs](crawl.mjs) | `0b824de96248998e3563d4a926feeb009f4f22cd53e01999517237b5395bc806` | Reads the twenty enterprise studies from `studies-summary.json` and asserts twenty, sixteen of them `states`. Steps each states drawing through its own `Step N of last` slider to every moment and reads the four structural records once. Captures at 1440 and 360, keeping only rendered text, and marks each frame's state-heading nodes. |
| [compare-dom.mjs](compare-dom.mjs) | `3ebfd1d8cc0130fd027da14e1e900de80f31b002fc6aa4cb8c37e0f01848afd9` | Takes the two captures and its output as arguments, reads `.gz`, and reports sequence differences. Admits only state-heading differences in the frames D011 names, with every other node of those frames equal, and exits non-zero on anything else. |
| [open-study-details.mjs](open-study-details.mjs) | `7b1ab88909e4c23072ed2698e375f2b3e41c96f90a1ea8d13d81727bb4004a1d` | Copied unchanged. |

New in this order:

| Program | What it does |
| --- | --- |
| [serve-build.mjs](serve-build.mjs) | The static server for a production build and the enterprise inventory, shared by every browser program. |
| [model-outputs.probe.ts](model-outputs.probe.ts) | A Vitest file that writes a digest of every drawn model's output. Each record's model runs at its own parameters, and each enterprise model over the grid of its declared inputs: 174 cases. |
| [compare-outputs.mjs](compare-outputs.mjs) | Compares two probe outputs case by case and exits non-zero on any difference. |
| [narrow-register.mjs](narrow-register.mjs) | Measures every states register with real glyphs at a given width and every step: each heading's drawn size and box against its column, and each name and note line's room before the first state's column. It also records the room the builder's per-character estimate gives. |
| [narrow-frames.mjs](narrow-frames.mjs) | Screenshots, at 360, the three registers D011 changes, from the base and the candidate builds, at the first step and a moving step. |
| [fkm-control.mjs](fkm-control.mjs) | Foreign Key Mapping's read-limit test on a fresh copy of the target, as it stands and carrying the base's simulation. |
| [comparator-control.mjs](comparator-control.mjs) | The comparator run over the base crawl and a copy with one unpermitted text node changed. |

### Invocations

`<target>` is the target worktree and `<scratch>` the session scratch directory. Each program ran
from the launchpad root, the browser programs under `node scripts/harness.mjs bounded --` one at a
time, in a fresh Chromium context launched from the target's Playwright installation against
serve-build.mjs's local server. Each output records its own time.

- **Base build.** `npm --prefix <target> ci --no-audit --no-fund`, then
  `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npm --prefix <target> run build -- --projects=dotln --skip-nx-cache`
  on the unchanged worktree at `f99580f`. Its `dist/apps/dotln/browser` was copied to
  `<scratch>/base-f99580f/browser` before any edit.
- **Candidate build.** The same build command on the candidate, into
  `<target>/dist/apps/dotln/browser`.
- **The audits.** `node docs/evidence/WO-039/shape-audit.mjs <target> docs/evidence/WO-039/shape-audit-before.json`
  at the base, and the same with `shape-audit-after.json` at the candidate.
- **The crawls.** `node docs/evidence/WO-039/crawl.mjs <target> <scratch>/base-f99580f/browser docs/evidence/WO-039/dom-before.json`,
  and the same over `<target>/dist/apps/dotln/browser` into `dom-after.json`. Each was then
  compressed with `gzip -9 -n` into [dom-before.json.gz](dom-before.json.gz) and
  [dom-after.json.gz](dom-after.json.gz). The comparator reads the compressed files and hashes
  their decompressed bytes.
- **The diff.** `node docs/evidence/WO-039/compare-dom.mjs docs/evidence/WO-039/dom-before.json.gz docs/evidence/WO-039/dom-after.json.gz docs/evidence/WO-039/dom-diff.json`.
  Run over the base crawl and itself, it reported 0 differing frames and exited 0.
- **The comparator's control.** `node docs/evidence/WO-039/comparator-control.mjs docs/evidence/WO-039/dom-before.json.gz <scratch>/comparator-control docs/evidence/WO-039/comparator-control.json`.
- **The output probe.** `model-outputs.probe.ts` was copied to
  `<target>/libs/features/tools/tests/model-outputs.probe.spec.ts`, then run with
  `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false WO039_PROBE_OUT=<scratch>/model-outputs-<stage>.json npm --prefix <target> run test -- --projects=tools --skip-nx-cache --output-style=static --testFiles=tests/model-outputs.probe.spec.ts`.
  The copy and its directory were removed after every run. It ran at the base, after the
  builder's change alone, after four, eight and sixteen presentations, before round 1's fixes and
  after them, at the candidate.
  `node docs/evidence/WO-039/compare-outputs.mjs <scratch>/model-outputs-base.json <scratch>/model-outputs-<stage>.json docs/evidence/WO-039/model-outputs.json`
  wrote the kept comparison from the last run; the staged comparisons stayed in scratch.
- **The register measurements.** `node docs/evidence/WO-039/narrow-register.mjs <target> <build> docs/evidence/WO-039/narrow-register-<before|after>.json 360`,
  and the same with `wide-register-<before|after>.json 1440`, over the base and the candidate
  builds.
- **The frames.** `node docs/evidence/WO-039/narrow-frames.mjs <target> <scratch>/base-f99580f/browser <target>/dist/apps/dotln/browser docs/evidence/WO-039/narrow-register`.
- **The Foreign Key Mapping control.** `node docs/evidence/WO-039/fkm-control.mjs <target> f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3 <scratch>/fkm-control-copy docs/evidence/WO-039/fkm-control`,
  on a scratch copy made fresh for the run. The logs replace the copy's and the target's paths
  with placeholders.

## The measure

At the base, the `poeaa` group has 48 files (the sixteen presentation, simulation and entry
modules) and 764 functions. None has more than four positional parameters, one has 70 or more
counted lines, and `studyPoeaa/en.json` holds 1,763 strings with no numbered placeholder: the
Observed gap's counts. At the candidate, the group has 48 files and 937 functions, with 0 over
four positional parameters and 1 at 70 or more lines. The catalog is unchanged at 1,763 strings
with no numbered placeholder: no message key or placeholder changed, so `en.json` and
`tools/i18n-copies.test.mjs` are untouched. The function count rises because every table entry is
a small function.

| Function at 70 counted lines or more | Lines | The executor's judgment |
| --- | --- | --- |
| `pessimistic-offline-lock.presentation.ts` `shapeOf` | 71 | It does one job and reads whole. It is the register's shape as one literal: four states, the two tabs and eight transitions, each a four-line object as in every study, which a reader checks against the states above them. Splitting it would scatter that check (D014). |

`grep -c "switch (" libs/features/tools/src/lib/studies/poeaa/*.presentation.ts` prints 0 for
each of the sixteen files. The base had 69 `switch` statements across them, every file with a
`default:` branch; no presentation has `default:` now.

## The sixteen presentations

Each lookup table is a `Record` keyed by the study's id union and checked with
`as const satisfies Record<Id, string>`, or a `Record` of one function per state, part or
operation; no table is partial, and Gateway's worked steps name every operation. Each choice by
an operation's kind goes through `matchKind` (`studies/match-kind.ts`), which gives each kind's
function its own member of the union. The builder joins every move and
placement sentence through `listOf`. The column below counts a presentation's own lists of
names; those with none join no list themselves: `grep` finds no `listSeparator` and no hand-made
join of names in any of them. Identity Field's one `.join` joins sentences with the sentence
separator, as the builder does. On/off inputs are booleans read by `booleanParameter`
(`studies/parameters.ts`) in the study's simulation; a counted input stays a number (D005).

| Study | Lookup tables | `matchKind` | `listOf` | On/off input |
| --- | --- | --- | --- | --- |
| Data Mapper | `names`, `tokens` | 2 | 1 | `eachRow` |
| Data Transfer Object | `names`, `ids`, `tokens`, `domainNotes`, `copiedNotes`, `assembleNotes`, `assembleLines` | 2 | none of its own | none: versions and a step count |
| Foreign Key Mapping | `names`, `tokens` | 2 | 2 | `identityMap` |
| Gateway | `failureNotes`, `failureOutcomes`, `failureTranslations`, keyed by `FailureKind`; its parts and two objects are named once in `shapeOf` and looked up nowhere | 3 | none of its own | none: times, a status and versions |
| Identity Field | `names`, `tokens`, `tabNames`, `tabPlaces` | 1 | 2 | `rereads` |
| Identity Map | `names`, `ids`, `tokens`, `callers` | 1 | 1 | none: `maps` and `revisits` are counts |
| Lazy Load | `names`, `readings`, `tokens` | 1 | none of its own | `chunkPerStudy`; `failFirst` is a count |
| Optimistic Offline Lock | `names`, `tokens` | 2 | none of its own | `tabASaves` |
| Pessimistic Offline Lock | `names`, `tokens` | 1 | none of its own | `tabASaves` |
| Plugin | `names`, `phrases`, `tokens`, `painters`, `draws` | 0 | none of its own | `productionStub` |
| Record Set | `names`, `tokens`, `columnNames`, `statements`, `accepted` | 1 | 2 | `continueOnError`; `rivalSaves` is a count |
| Registry | `pageNames`, `tokens`, `scopeNames`, `lookupsAgain` | 1 | none of its own | `perPage`; `returns` is a count |
| Remote Facade | `names`, `tokens` | 1 | none of its own | `buildsDown`, `reportsFailures` |
| Service Layer | `names`, `tokens`, `tabNames`, `clientNames` | 3 | 3 | `importBypasses`, `importForeign` |
| Service Stub | `names`, `scenarios`, `tokens`, `failures` | 2 | none of its own | `dynamicStub` |
| Unit of Work | `names`, `tokens` | 1 | 2 | `otherTabSaves` |

Plugin chooses by painter, not by an operation's kind, so its `painters` and `draws` tables carry
the choice. Three simulations took the same shapes: Optimistic Offline Lock's `perform` goes
through `matchKind`, and Record Set's `statementFor` and Service Stub's `expectationOf` and
`stubAnswer` are `Record`s. Gateway's `isSuccessStatus` (`gateway.simulation.ts`) is the one
2xx rule; `translate` uses it and Service Stub imports it. The comparison runs travel in the run
description: Foreign Key Mapping's `through` and `without`, and Lazy Load's `perWork` and
`perStudy`. The example's own run is whichever of the two it chose. Record Set's positional
`operation()` helper and its own `listOf` are gone, as is Service Layer's own `listOf` (D008).

## The shared pieces

**The builder** (`studies/states.ts`, D004). A move between two different states that its
snapshot does not name takes the one transition joining them, or none when no transition does.
Two that join them refuse the example when it builds:
`a moves from clean to dirty, which edit and touch each join; the snapshot must name one.`.
A named transition must join the move's states, an unchanged object moves only when a
transition back into its state is named, and a null placement or note is dropped. `states.spec.ts`
holds the specs "infers a move's transition when exactly one joins its states, and names none
where none does", "refuses an ambiguous move unless its snapshot names the transition it took"
and "leaves out an object placed nowhere and a note that says nothing". `moveSentence` joins
names with `listOf`.

**The state unions.**

| Function | At the base | At the candidate |
| --- | --- | --- |
| `registerOf`, `unit-of-work.simulation.ts` | `registerOf(unit: UnitOfWork, id: CompositionId): string \| null` | `registerOf(unit: UnitOfWork, id: CompositionId): Register \| null`, with `type Register = 'clean' \| 'new' \| 'dirty' \| 'removed'` |
| `placeOf`, `data-mapper.simulation.ts` | `placeOf(step: DataMapperStep, id: CompositionId, formatRead: number): string \| null` | `placeOf(step: DataMapperStep, id: CompositionId, formatRead: number): Place \| null`, with `type Place = 'stored' \| 'mapped' \| 'edited' \| 'unmapped'` |
| `placeOf`, `foreign-key-mapping.simulation.ts` | `placeOf(loader: Loader, row: RowId): string` | `placeOf(loader: Loader, row: RowId): RowPlace`, with `type RowPlace = 'stored' \| 'resolving' \| 'resolved'` |

**The loader** (D007). `libs/features/tools/testing/src/lib/tools-test-kits.ts` exports
`loadModelStudy(id, family)` over `ModelStudy<Family>`. It refuses a study that another family or
no model draws. `grep -c "loadStatesStudy\|loadFlowStudy"` over the file prints 0. All 37 flow and
states specs import the one loader: the twenty messaging specs and the RxJS localization spec with
`'flow'`, and the sixteen enterprise specs with `'states'`. No flow or states spec uses
`loadStudy`.

**The chart's x values** (D006). `TimelineModel<Axis>` holds them under `seconds`, `steps` or
`counts`, read from the table `TimelineAxes`; the default `seconds` keeps the forty movement
presentations unchanged. Foreign Key Mapping, Identity Map, Remote Facade and Unit of Work chart
`steps`, and Lazy Load charts `counts`. `xValuesOf` reads any of them for the timeline drawing and
composite. A model's comparison and the study view's are `StudyComparison<TimelineAxis>`; the
compiler refuses a comparison over steps or counts where one over seconds is wanted. The
`timeline-drawing.spec.ts` case "draws a chart over the steps or the counts of a run as it draws
the same values over seconds" pins the drawing for the other two axes.

**The helpers.** `matchKind` and `booleanParameter` have their own specs, `match-kind.spec.ts`
and `parameters.spec.ts`. The tools test kit's `tokensOf(states)` reads each object's token letter
for the twelve specs that read one (D009).

## Every output unchanged

- **The models.** [model-outputs.json](model-outputs.json) compares 174 cases at the base with 174
  at the candidate: 0 missing, 0 added and 0 differing. The staged runs, after the builder's
  change alone, after four, eight and sixteen presentations, and before round 1's fixes, each
  compared 0 differing.
- **The pages.** [dom-diff.json](dom-diff.json) compares 238 frames of the twenty studies at both
  widths, before and after, with no page error, missing frame or added frame. 25 frames differ,
  all permitted and none unexpected. The only differences are the six broken state headings of
  the narrow register at 360, listed as `headingChanges`. Every other node and label of those
  frames is equal, and every frame at 1440 and every other study's frame at 360 is equal.
- **The permitted frames**, at 360: Service Layer (`poeaa:226`) steps 0 to 9, Data Transfer
  Object (`poeaa:363`) steps 0 to 5, and Record Set (`poeaa:452`) steps 0 to 8.
- **The comparator's control.** [comparator-control.json](comparator-control.json) records a run
  over the base crawl and a copy of it in which one text node of Identity Map's first frame at
  1440, outside every permitted frame, has ` (changed)` appended:
  `node compare-dom.mjs <base crawl> <base crawl with one node changed> <diff>`.
  It exited 1, reporting 1 differing frame, 0 allowed and 1 unexpected, so the comparator refuses
  a difference it does not permit.
- **The specs.** The sixteen enterprise model specs, 116 tests, pass with their mechanism
  assertions. Each pins its record's stored parameters exactly, an on/off input as its 1 or 0,
  beside the reading (D005). None reads the register drawing:
  `grep -l "registerDrawing\|states-register"` over them finds nothing. Two drawing assertions
  that repeated the moves assertion above them were removed (D009). The whole tools suite passes,
  129 files and 1,116 tests.
- **The visual baselines.** No visual test draws a states register. `components.visual.spec.ts`
  captures the `ui-*` stories; `catalog.visual.spec.ts` captures the catalog, an RxJS marble
  study and a movement study. This order regenerates no baseline. The review target gate's
  `npx nx run-many -t e2e` and `npx nx e2e-visual dotln-e2e` passed with the baselines
  unchanged and no tracked byte changed.

## Foreign Key Mapping's read limit

The loader stops on its read limit only when the next key still to resolve needs a read. Without
an identity map every key needs one; through one, only a key whose row has no object yet does.
`nextKeyOf` finds the next key and the object the map already holds for it, which both the loop's
stop rule and `follow` read (D010). The test "stops at its read limit only when the next key still
to resolve needs a read", in `foreign-key-mapping.model.spec.ts`, pins every limit from one to the
example's six. At each limit, the run is the whole run cut just before the step that would read
past the limit, a follow that loads a row. A limit of three or more leaves the run whole; at
limits one and two it stops after that many reads. On the base the test fails at three, where the
base stopped before keys the map resolves.

| Arm | Simulation | Command | Exit |
| --- | --- | --- | --- |
| Candidate | the copy's own, SHA-256 `6d0029456438a78fc91ddcf294594df41434188389ec613894d68172a9e44923` | `node node_modules/vitest/vitest.mjs run --config libs/features/tools/vite.config.mts src/lib/studies/poeaa/foreign-key-mapping.model.spec.ts -t "stops at its read limit only when the next key still to resolve needs a read"` | 0, the test passing |
| Control | `f99580f`'s, SHA-256 `be970357ef973aceb53b23879d9ed1906f6c36eaa45c74e36368f23638ac13ee` | the same | 1, the test failing |

Both arms ran from the root of a fresh scratch copy of the target, the candidate arm as the copy
stands and the control arm carrying the base's simulation. The logs are
[candidate.log](fkm-control/candidate.log) and [control.log](fkm-control/control.log). The
study's default run is unchanged: its 16 frames are equal in `dom-diff.json`, and both probe
cases are equal, with the identity map off and on at a limit of six.

## The narrow register

D011 decides the rule. A state's name is drawn at the largest size at which it fits its column,
never below two thirds of the stylesheet's size. Below that, a word breaks with a hyphen into the
fewest parts that fit at two thirds, the longer part first, and its lines are drawn at the size
they then fit. A name with no words draws nothing. The wide register is unchanged.

| Study at 360 | Headings that break | Smallest heading, base | Smallest heading, candidate |
| --- | --- | --- | --- |
| Service Layer | Accepted, Announced, Refused | 6.16 px | 9.24 px |
| Data Transfer Object | Encoded, Refused | 7.92 px | 9.24 px |
| Record Set | Unchanged | 7.97 px | 8.97 px |

- [narrow-register-before.json](narrow-register-before.json) and
  [narrow-register-after.json](narrow-register-after.json) measure all sixteen registers at 360,
  every step, with no page error. Only these three changed.
  [wide-register-before.json](wide-register-before.json) and
  [wide-register-after.json](wide-register-after.json) measure them at 1440 and are equal in
  every field but the measurement time.
- **Gateway's narrow note.** Measured with real glyphs, its line nearest the first state's
  column, `/api/uifa-board-v1;` at step 3, ends 10.07 units short of it (0.9455 pixels per unit)
  in both builds. The builder's per-character estimate puts that line 9.4 units across the
  column, so the estimate is conservative there and the note needs no change.
- **Data Mapper's bold headings.** Mapped and Unmapped cross their 50-unit column by 0.15 and 0.17
  units (0.14 and 0.16 pixels) in both builds. This is under a pixel, overlaps no neighbour and is
  unchanged by this order; the A/B testing pass's glyph-measured fit is where it goes.
- **The frames.** [narrow-register/](narrow-register/) holds the three changed registers at 360,
  base and candidate, at the first step and a moving step: twelve images, listed in
  [frames.json](narrow-register/frames.json).
- **The specs.** `states-register.spec.ts` holds "keeps a long state name at two thirds of its
  size or more on a phone, breaking a word that would need less" and "draws no heading for a
  state whose name has no words, and nothing at size zero". The first drives Service Layer's five
  names at 40-unit columns; the second drives `columnsOf` with an empty and a blank label, which
  throw nothing and draw no heading. `drawn-text.spec.ts` covers `breakWord` with "breaks a word too
  long for its line into hyphenated parts, the longer parts first" and the property "breaks every
  word into the fewest parts that fit, losing no letter". The component's `states.spec.ts` holds
  "draws each state heading at the scale its column gives it, in both layouts", which reads each
  heading's `--states-scale` against the register's columns.
- **The reading critic.** [reading-critic.md](reading-critic.md): one read-only Claude
  `dotln-worker` launch judged the change. Its verdict is that the decided rendering reads better
  than the base and should stand as the interim rule; its findings are disposed in D015.

## The documents and the check

- **`docs/ai-reference/catalog-rules.md`.** The token rule: a drawing's token letters are symbols
  shown through `tools.study.symbol` with the translated name beside them, and are not
  translated. It also gains the lookup-table, `matchKind`, `listOf`, `booleanParameter` and
  run-description sentences, and the inferred transition in the states bullet.
  `grep -c "symbol"` over it prints 2 (D012).
- **`docs/dev-reference/architecture/catalog.md`.** §The models states the lookup-table shape,
  the inferred transition and its refusal, the null placement, the one loader, that model specs
  never read the register, and that a chart or comparison over one axis is never taken for one
  over another. §The families states the narrow register's rule, linking D011.
- **`libs/features/tools/testing/README.md`.** Names `loadModelStudy(id, family)` and
  `tokensOf(states)`.
- **`tools/scripts/catalog/check-studies.mjs`.** Holds the states drawing rule in
  `statesProblems` (`grep -c` prints 2), called beside `rxjsProblems` (D013).
  `npm run test:tooling` passes 94 of 94, among them "a states drawing of a model that runs reads
  that same module"; `npm run studies:check` reports 100 records and 0 problems.

## Write-backs

- **WS-001.** Its delivery-state rows read WO-039 as ready to verify, with this record, and its
  operator-view row says what changed on screen.
- **The profile.** `docs/repositories/dotln-angular.md` names neither the old loaders nor the
  tools test kit, so no implementation-map row changes.

## Limits

- The crawl reads each study at its record's parameters. The probe covers every declared input
  of the enterprise models, but not the pages at those inputs.
- The register measurements list headings at the first step; overflow and note room are the
  largest over every step.
- The probe's spec was the one file this order wrote into the target outside its deliverables.
  It was copied in for each run and removed after, with its directory.
- The browser suites and the visual suite run only in the review gate. No browser test of the
  narrow headings exists beyond the crawl, the measurements and the frames.
