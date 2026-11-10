# WO-043 — The Art of War map pass: The Art of War mapped from its public-domain text into catalog rows with its maxims and typed into tools as a seventh work, six new toys designed for the mined sources that have none (Meadows, Pirsig, Poincaré, Gladwell, Taleb and the 5S set) with their tools in the catalog and their records on the toy shelf, and the new research read for quality

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/catalog/src/maps/art-of-war.jsonl` (the map;
its row count unknown until run) with the public text it was read from,
`art-of-war-giles-1910.txt`, beside it, the checkpoint
`tools-artofwar.json` and six public-work checkpoints
(`tools-meadows.json`, `tools-pirsig.json`,
`tools-poincare.json`, `tools-gladwell.json`, `tools-taleb.json`,
`tools-fives.json`, up to five tools each), `tool-v2.schema.json` (`tool-v1`
with an optional `maxim` and a checkpoint that declares no map for a
public-work batch), the seven works in the loader's chunks, the shelf's
titles and scene types, the summary and the colour tokens, six toy records
and their messages in WO-018's `toys.json` and `toys` scope, the maxim in
the reading, a spec that holds the works' tables to each other, the e2e
totals and cases and the refreshed catalog baselines, and
`docs/evidence/WO-043/` with `sample-research.mjs`, the fan-out record and
the walkthrough; changes
`check-catalog.mjs` (the batch table's repository root and public-work
kind, each checkpoint checked against its declared version, an in-repo
map's digest and row count compared, the pinned totals), `join-maps.mjs`
(the repository root and a `--batch <name>` mode), `report.mjs` (each
work's typed rows by kind), their tooling tests and the documents
(`catalog.md`, `catalog-rules.md`, `scripts.md`); about 35 source files
plus the data; adds no runtime dependency. Removes nothing. Wall-clock:
about 6 h 0 min to 10 h 0 min of executor work, of which two fan-outs run
in parallel, plus the fixed cycle; unknown until run. Context bytes: WS-001
rules 9, 23, 24, 26, 27, 29 and 30 and §The app and its sub-apps;
`catalog.md` (44 KB) and `catalog-rules.md` (14 KB); `check-catalog.mjs`,
`join-maps.mjs`, their tooling tests, the loader, `reading.ts`, the
`tool-v1` schema and the data spec (about 61 KB at `eb9d227`); WO-035's
mechanism and WO-018's toy record as they land (unknown until run); the
maps README, the queue-and-rules items and the angular README at the
sections cited; the public text (unknown until run); this order; about
250 KB for the executor; the mappers read the public text. Commands added
in the target: none (`npm run catalog:join` gains `-- --batch <name>`).
Tokens: unknown until run; worker totals, the session total, the stop
comparison and the use count are recorded in `fan-out.md` and the
decisions under the profile as process controls, outside acceptance.
Steps: 16. Re-mints: none. Refutations paid: this pass's receipt.
**Nomination provenance:** the operator's decisions of 2026-10-24 (ignored
intake capture `docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9):
after the catalog pipeline, map The Art of War and design toys for the six
mined sources that have none; the app's data comes from public mining into
its own store. The operator's direction of 2026-10-26 (capture SHA-256
`9ec78ddbc267936d59fc7fe88b4a8b9c8d42d4692979db31be5129c817fd72a6`; WS-001
rule 23): the run's designs and the works they reference lie outside the
clean room, and a public-domain text's maxims enter as data. Design files
this order builds from, read at the run's folder on this machine (core's
ignored intake, read-only; digests pin what was read):
`digest/queue-and-rules.md` §1.2 items 15 and 17 (the map pass and the
six-source toy design, each sized under the twenty-agent rule; SHA-256
`b60a7607797cd781c94dc2b872e5e478ab1eb18b42964e967d1f45269e2beb31`),
`out/maps/README.md` (the row schema a map follows; SHA-256
`9b6c905f7a2772e5f4eb60d66f66527629467e0b549f586232870c16cc3ad5e0`) and
`out/angular/README.md` §Sources with no toy (SHA-256
`4810fd3337dc3fedaaf3e37f1fe2a0841e79a91bc73dd9db38833d104223762c`). The run
is the operator's own research and lies outside the clean room; the
quarantine files stay closed because they were quarantined for employer
material. Planner-synthesized by the 2026-11-09 pass
([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md)
D9) from WO-018's text as the 2026-10-24, 2026-10-26 and 2026-10-28 passes
left it: WO-018 keeps the toy shelf, and this order takes The Art of War's
map, the six new toys and their tools, both worker fan-outs and the
carry-ins of receipts 008 to 011 about them. Opaque identifier, not a
priority.
**Depends on:** WO-018 (hard: the toy shelf, the `toy-v0` record with its
`this-app` branch, the `toys` message scope and `toys:check`, to which this
order adds six records); WO-035 (hard: the mined text's path to the screen,
which the seven new works' rows and the `maxim` take). The classifier brief
is WO-014's and the join WO-019's, both merged and reached through WO-018.
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-018",
    "relation": "hard",
    "reason": "the toy shelf, the toy-v0 record with its this-app branch, the toys message scope and toys:check this order adds six records to"
  },
  {
    "workOrderId": "WO-035",
    "relation": "hard",
    "reason": "the mined text's path to the screen, which the seven new works' rows and the maxim take"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 3, 9, 15, 23, 24, 26, 27, 29 and 30; §The app and its
sub-apps, G3 and §Design direction); `docs/repositories/dotln-angular.md`
(§Run the app and its checks, §Run content workers, §Catalog and concept
studies); `docs/operator/README.md`; `docs/control/budgets.json`
(`subagentCap`); the launchpad's `docs/evidence/WO-014/fan-out.md`
§Classifier brief and §Sampling protocol; the target's
`docs/dev-reference/architecture/catalog.md` (§Data and provenance,
§Reproducible source join, §Loading and state, §Reading and studying, §Toys
as WO-018 leaves it), `docs/ai-reference/catalog-rules.md`,
`docs/dev-reference/workspace/scripts.md`,
`docs/dev-reference/workspace/storybook.md` (the baseline refresh), and
WO-035's decisions as it leaves them; the maps README, the queue-and-rules
items and the angular README at the sections named above.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog and sees The Art of War on the shelf beside the six mined
works, and Meadows, Pirsig, Poincaré, Gladwell, Taleb and the 5S set as
small works holding the tools designed for their toys. They open The Art of
War, read its thirteen chapters in the contents, open a chapter and read a
concept whose maxim is the concept: the sentence of the Giles translation
quoted above the mapper's reading of it, with the chapter it comes from; a
tactic typed for the commander scene to come reads its faces as one
sentence. They open Toys and find six new toys under their sources beside
the run's nineteen; they open the Meadows toy, leverage points as a scene,
and read its question, its scene type, its metric and the tools designed
for it, each a link into the catalog's reading of a Meadows tool with its
definition and the chapter or named concept it comes from. They filter the
shelf to designed toys and decide which to build next. What the operator
learns is what The Art of War offers the toolbox and what a toy for each of
the six sources would show; what they decide is the next toy to build.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `artofwar`, `meadows`,
`pirsig`, `poincare`, `gladwell`, `taleb` and `fives` are slugs in
`workSlugs` (`libs/shared/models/src/lib/toolbox.ts`) and in the `tool-v1`
schema's `work` enum with no rows; the run carries no Art of War rows and
its commander toy carries placeholders for it (the 2026-10-26 pass's
reading of the run, not re-read here). The catalog's six works are listed
by hand in several tables: `batches` in
`tools/scripts/catalog/check-catalog.mjs` (lines 9 to 34), whose
`checkSummary` pins 3,463 mapped rows (line 345), six works (line 354) and
Team Topologies' shortfall (line 372); `chunks` in
`libs/shared/catalog/src/lib/catalog-loader.ts` (lines 16 to 26); the
shelf's titles and scene types in `libs/shared/catalog/src/lib/reading.ts`
(lines 17 to 28); the summary's `works`; the `--dotln-work-<slug>` tokens in
`libs/shared/ui/src/styles/_tokens.scss` and `_field-skin.scss` and the
shelf's `@each` (`work-shelf.scss` line 56); `catalog-data.spec.ts` (eight
checkpoints, eleven maps, 3,463 rows, six works); and the e2e totals
(`catalog.spec.ts` lines 44, 61 and 63, `catalog.visual.spec.ts` line 7,
`study-messages.spec.ts` line 23) with the `catalog-360`, `catalog-768` and
`catalog-1440` baselines. The join (`join-maps.mjs`) reads every batch's
maps from `<run>/out/<folder>/` (line 54), carries a row's `concept`,
`definition`, `verified`, `related`, `dotlnHooks` and place fields (lines
86 to 111), writes every checkpoint as `tool-v1` (line 74) and carries no
maxim; the closed `tool-v1` schema has no field for one, names a map file
`<name>.jsonl`, and requires a checkpoint to declare at least one map,
while `checkCheckpoint` requires every row's `classifiedBy` to be
`classifier-<batch>` (lines 163 to 166): a checkpoint of public-work tools
alone is refused, and the join test's fixture builder reads `tool.map.file`
for every row (`tools/catalog-join.test.mjs` line 26).
`merge-checkpoints.mjs` is gone (the target's WO-019-D027);
`node tools/scripts/catalog/check-catalog.mjs <checkpoint>` validates one
classifier checkpoint's schema, provenance and line coverage, the job the
merge script's validation did. `report.mjs` lists a work's scene tools and
not its other typed rows. WO-014-D014's follow-up (derive the work filter
from the loader, and restore three `en.json` values' literal characters)
reopens when a work is added: at `eb9d227` the facet's options already come
from the loaded tools (`availableCatalogOptions` in
`libs/shared/catalog/src/lib/filters.ts`, read at `tools.facade.ts` line
119) and `en.json` carries no `\u` escape, so what still bites is the hand
kept tables above. A public-domain English translation of The Art of War is
available from Project Gutenberg (the 1910 Lionel Giles translation, ebook
132). How WO-035 brings a loaded work's text to the translator, and what
adding a work or a visible field to it takes, is unknown until it merges.

**Design:**

- **The public text.** The Giles translation is read once from Project
  Gutenberg (ebook 132). Fallback: if that host refuses or does not answer,
  a Project Gutenberg mirror's copy of the same ebook, then another public
  copy of the 1910 Giles translation; if none answers, the executor records
  the attempts and asks the operator in the session for a copy, read and
  pinned the same way, and with none the order stops before the mappers
  start, for a planning pass. The text read is committed unchanged beside
  the map, `libs/shared/catalog/src/maps/art-of-war-giles-1910.txt`, with
  its source, URL, retrieval date and SHA-256 in the evidence README and in
  `catalog.md` §Mining a new work, so the map's source travels with it and
  the mappers, the critic, the verifier and the reviewer read the same
  bytes without the network.
- **The run's files and their fallback** (rule 23). The three design files
  above are read at the run's folder and their SHA-256 compared with the
  pins. A file missing or at another digest is recorded (the digest, never
  the content), and the executor asks the operator in the session for the
  file at its pinned digest or their word to take it as it is, captured in
  ignored intake and cited by digest; with neither, the briefs are written
  from what this order states (the fields the join reads, the maxim rule,
  the toy pattern) and the decisions say so. No quarantine file is
  opened.
- **The map** (`libs/shared/catalog/src/maps/art-of-war.jsonl`, in its own
  directory because the catalog check refuses any other file in `data/`).
  Its rows follow the run's row schema (the maps README at its pinned
  digest) with the fields the join reads at `eb9d227` (`concept`,
  `definition`, `verified`, `related`, `dotlnHooks`, `part`, `chapter`,
  `section`, `subsection`) and `maxim?`: `definition` is the mapper's
  reading of the concept and `maxim` the sentence of the Giles text that
  states it, carried verbatim because the text is public domain and the
  maxim is the concept; `verified` names the chapter. Thirteen chapters;
  two mappers (chapters 1 to 6 and 7 to 13); the critic samples twenty rows
  against the text and returns the rows that misstate it, which the mapper
  rewrites. A tooling test in `tools/catalog.test.mjs` asserts that every
  `maxim` of a repository map occurs verbatim, whitespace aside, in the
  text committed beside it, so an edited maxim fails, and that every `maxim`
  the checkpoint `tools-artofwar.json` carries equals the maxim of the map
  row its id names, so the sentence a reading shows is the one the text
  holds. This is the
  first map the app owns: a work mined in public into the app's own store,
  the direction the operator gave. The batch is `artofwar`, its rows
  `aow:<line>`.
- **The record: `tool-v2`.** `tool-v1` is shipped, closed and the only
  schema the loader reads (`catalog-rules.md`), and the catalog changes a
  shipped record's shape by a new version, never an edit (`catalog.md`
  §The record, for the study record). `libs/shared/catalog/src/schema/tool-v2.schema.json` is
  `tool-v1` with an optional `maxim` on a tool and a checkpoint that may
  declare no map, for a batch the table declares public-work. `Tool` gains
  `maxim?` and `CatalogCheckpoint` the version; the loader and
  `check-catalog.mjs` accept both, checking each checkpoint against the
  version it declares; the eight existing checkpoints stay `tool-v1`,
  byte for byte; the join keeps each checkpoint's version.
- **Typing and joining.** One classifier with WO-014's brief (the
  launchpad's `docs/evidence/WO-014/fan-out.md` §Classifier brief) over the
  map's rows writes `tools-artofwar.json`; `node
  tools/scripts/catalog/check-catalog.mjs <checkpoint>` validates it before
  it enters `data/`. The batch table gains a root: a map batch reads its
  maps from the research run (`run`) or from
  `libs/shared/catalog/src/maps/` (`repository`), and `catalog:check` reads
  a repository map and compares its SHA-256 and row count with the
  checkpoint's, so the committed map and its checkpoint cannot drift.
  `join-maps.mjs` reads a repository batch's map in the repository and
  gains `--batch <name>`, which joins that batch alone against the other
  checkpoints as they are and reads no research run directory; the join of
  The Art of War needs none of the run's eleven maps. The join carries the
  definition, maxim, place, relations, hooks and note into the tools; the
  critic's sample covers the typed transforms as WO-014's checkers did; the
  summary's `maps` gains the map with its digest; `report.mjs` prints each
  work's typed rows by transform kind.
- **The six toys and their tools.** The toy designers' fan-out: six
  designers, one per source, one synthesizer and one critic. Each designer
  is given the toy pattern (a toy is a scene with units or stations, a
  selection, a transform from the closed enum or a proposal for one, an
  observable and a metric), the catalog's scene types and enums, WO-018's
  `this-app` branch of `toy-v0`, the house rules, and the run's files where
  its source was mined (the probes and lenses by path, each SHA-256
  recorded at read in `fan-out.md`; no quarantine file; a file missing at
  read is recorded and the designer works without it, its tools' notes
  then beginning `model-knowledge`). It returns one toy record (title,
  sources, scene type, question, what you would see, metrics, tool ids,
  status `designed`) with its messages for WO-018's `toys` scope, and up to
  five tools for its source as a public-work batch, `tools-<source>.json`:
  `provenance: 'public-work'` with `map: null` (the pairing WO-014's schema
  declares, outside the mapped-rows count), five faces, a definition in its
  own words from the work, a place, and a verification note naming the
  work and the chapter or named concept, its kind read from the note by the
  existing rule. The batch table declares the six as public-work batches
  with no map files and the label `designer-<source>`, which a row's
  `classifiedBy` must equal; the summary's `workers.classifiers` keeps
  listing the map batches' classifiers. Each source enters the catalog as a
  small work holding its designed tools, so the toy page's tools link into
  readings like any other row. The synthesizer orders the six toys by what
  the operator can play with soonest on the scene engine, with its reasons,
  in `fan-out.md`; the critic reads the six records and their tools and
  returns findings the executor disposes. A transform kind the enum lacks
  is recorded as `untyped` with the proposed kind in its reason; the enum
  grows only by a decision (WO-014's rule).
- **The fan-out.** Together with the map pass (two mappers, one critic, one
  classifier) the order starts twelve authoring and critic workers, each a
  `dotln-worker` or `dotln-worker-fable` on the operator's dispatch, whose
  briefs name the house rules (rule 30). Every launch and re-task consumes
  a use; reserve the independent review ladder under `subagentCap` before
  allocating corrections. Declare and check the stop, readings and
  remaining uses before every launch or re-task under the
  [profile's admission rules](../repositories/dotln-angular.md#run-content-workers).
  The parent may apply bounded critic corrections, recording who changed
  what; the required critic judgments must cover the current records.
  Preserve the declared twelve initial roles and both fan-outs; no prior
  order's exception travels to this order.
- **Seven works in the catalog's tables.** Each new work enters every table
  the catalog's §Reproducible source join lists: its batch, its loader
  chunk, its shelf title as a message in the root catalog, where WO-035
  moves the work titles (`apps/dotln/public/i18n/en.json` and its testing
  copy), its scene type in `reading.ts` (`units-on-terrain`
  for The Art of War, the field its commander toy would play on; each
  source's from its toy), its `works` entry seeded in
  `catalog-summary.json`, and a `--dotln-work-<slug>` token in both token
  files with the shelf's `@each`. The pinned totals in `check-catalog.mjs`
  and `catalog-data.spec.ts` move to the new inventory, the figures
  recorded in the decisions. WO-014-D014's follow-up is carried as the
  check that still bites: a spec asserts that the works the loader loads,
  the shelf's titled works and the summary's works are one set, and the
  tooling test that each has its two tokens and its shelf style, so a work
  added to one table and missed in another fails.
- **The text through the message system** (rule 9; WO-035). The seven works'
  rows and the `maxim` reach the screen through WO-035's mechanism as it
  lands; step 2 records how a work and a visible field join it, and the
  six toys' text goes through WO-018's `toys` scope.
- **The reading.** The concept reading shows a row's maxim as a quotation
  above the mapper's definition, with the chapter it comes from and a
  message naming the translation; a row without a maxim reads as today.
  The reading's layout is otherwise the integrated base's.
- **Documents:** `catalog.md` gains §Mining a new work (the public text and
  its record, the map in the repository with its maxim, the critic's
  sample, the typing, `tool-v2`, the repository root and `--batch` join,
  the public-work batch) and its inventory paragraph and new-work list say
  what is so; §Toys gains the `this-app` toys; `catalog-rules.md` gains the
  rules (a map row carries the mapper's definition and, where a maxim is the
  concept, the public text's maxim verbatim; a toy-source tool is
  public-work with its source in its note; the enum grows only by
  decision); `scripts.md` updates the `catalog:join`, `catalog:report` and
  `catalog:check` rows.

Rejected: mapping The Art of War from the run's placeholders (axis: a work
enters the catalog only through its own map pass); an overlap check of the
map's definitions against the text (axis: the text is public domain and the
maxim is the point); a single worker for both fan-outs (axis: the
checkpoint rule and the twelve-worker cap); an optional `maxim` added to
`tool-v1` (axis: a shipped closed schema changes shape only by a new
version); the maxim folded into the definition (axis: the reading shows the
text's own sentence apart from the mapper's reading of it); the toy-source
tools kept inside the toy records (axis: a toy's tools are read, typed and
later run from the catalog like every other tool); a separate map-check
script (axis: rule 26; `catalog:check` already reads every batch and now
compares the committed map with its checkpoint); fetching the text again at
each phase (axis: a host the order does not control, against the same
bytes committed for every reader); prose design documents for the six toys
instead of records (axis: the record is what the shelf shows and the
operator reads).

Live-run surfaces at the base: the catalog's shelf, contents and reading
at `eb9d227`; the toy shelf and the toy page once WO-018 merges, and the
mined text's path once WO-035 merges; neither has run at `eb9d227`.

**Deliverables:** the public text beside the map, and its record; the map
and the seven checkpoints; `tool-v2` with the loader, the check, the join
and the report reading it; the six toy records and their messages; the
seven works in the catalog's tables and the agreement spec; the maxim in
the reading; the e2e cases and the refreshed baselines; the documents;
`docs/evidence/WO-043/` with the README, the fan-out record,
`sample-research.mjs`, the walkthrough and its screenshots.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-043: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, which carries
   WO-018's and WO-035's merges, and that integrated commit is the baseline
   of every later comparison; then the route guard and activation as WO-005
   step 1; read `node scripts/harness.mjs usage <session>` and record the
   subagent remainder; record the token stop under the profile in the
   decisions and `docs/evidence/WO-043/fan-out.md`; record the operator's
   ruling of 2026-10-26 that the run's designs and the works they reference
   lie outside the clean room (WS-001 rule 23; capture SHA-256
   `9ec78ddb…`). Check: the decisions carry the integrated commit, the
   remainder, the stop and the ruling.
2. WO-035's mechanism, which cannot be written down until WO-035 merges:
   read its decisions and `catalog.md` §Loading and state as it leaves them,
   and record in the decisions how a loaded work's text reaches the
   translator, the files a new work and a new visible field (`maxim`)
   touch, and the check and e2e case that prove it. Check: the decisions
   name them.
3. The run's three design files read under the Design's fallback, each
   path and SHA-256 recorded in `docs/evidence/WO-043/README.md`; the public
   text under its fallback, committed unchanged as
   `libs/shared/catalog/src/maps/art-of-war-giles-1910.txt`, its source,
   URL, retrieval date and SHA-256 in the README. Check: `shasum -a 256`
   over the text prints the recorded digest.
4. The contract and the tools: `tool-v2.schema.json`; `Tool` and
   `CatalogCheckpoint` in `libs/shared/models/src/lib/toolbox.ts`; the
   loader's version check; in `check-catalog.mjs` the per-version
   validation, the batch table's root and public-work kind with its label,
   the repository map comparison; in `join-maps.mjs` the repository root,
   a row's `maxim` carried, each checkpoint's version kept, and
   `--batch <name>`; in `report.mjs`
   each work's typed rows by kind; tooling tests in `tools/catalog.test.mjs`
   and `tools/catalog-join.test.mjs` (a `tool-v1` row with `maxim` refused
   and a `tool-v2` one admitted; a public-work checkpoint with `maps: []`
   admitted and one holding a map row refused; a map batch with no maps
   refused; a repository map whose bytes differ from its checkpoint's digest
   refused; `--batch` reading no research run directory and leaving every
   other checkpoint's bytes unchanged; the fixture builder skipping
   public-work rows; every `maxim` of a repository map found verbatim in
   the text beside it, and a scratch copy with one maxim altered refused);
   the `scripts.md` rows. Check: `npm run test:tooling` and
   `npm run check:scripts` exit 0, and `npm run catalog:check` exits 0 over
   the unchanged eight.
5. The mapper brief in `fan-out.md` (the row schema, the maxim rule, the
   chapter split, the house rules); two mappers and the map critic
   dispatched; the sampled rows the critic names rewritten; the rows merged
   into `libs/shared/catalog/src/maps/art-of-war.jsonl`; the `artofwar`
   batch declared in the table (root `repository`, the map file, the prefix
   `aow`). Check: `npm run test:tooling` exits 0 with the verbatim test
   reading the map, `npm run catalog:check -- --partial` exits 0, and the
   README records the row count and the critic's sample with its
   disposition.
6. One classifier with WO-014's brief over the map; `tools-artofwar.json`
   (`tool-v2`) validated by `node tools/scripts/catalog/check-catalog.mjs
   <checkpoint>` and placed in `libs/shared/catalog/src/data/`; its `works`
   entry seeded in `catalog-summary.json`, its loader chunk, its shelf title
   and scene type
   in `reading.ts`, its two tokens and the shelf's `@each`, and the pinned
   totals in `check-catalog.mjs` and `catalog-data.spec.ts` moved for it;
   `npm run catalog:join -- --batch artofwar`; `npx prettier --write
   libs/shared/catalog/src/data`. Check: `npm run catalog:check` exits 0,
   `npx nx test catalog` exits 0, and `npm run catalog:report` lists
   `artofwar` with its typed rows by kind.
7. The designers' brief in `fan-out.md`; the six designers dispatched; each
   toy record and its messages merged into WO-018's
   `libs/shared/catalog/src/toys/toys.json` and
   `apps/dotln/public/i18n/toys/en.json`; each source's tools into
   `tools-<source>.json`, validated by `node
   tools/scripts/catalog/check-catalog.mjs <checkpoint>`, with its batch,
   `works` entry, loader chunk, shelf entry, tokens and `@each` entry, the
   pinned totals moved again, and `npm run catalog:join -- --batch
   <source>` rewriting the summary over it (a public-work batch reads no
   map). Check: `npm run catalog:check`, `npx nx test catalog` and
   `npm run toys:check` exit 0, the last over twenty-five records.
8. The synthesizer and the critic dispatched; findings disposed in the
   decisions; the synthesizer's order in `fan-out.md`;
   `docs/evidence/WO-043/sample-research.mjs`, run as `node
   docs/evidence/WO-043/sample-research.mjs <target worktree> <seed>` (a
   seeded hash ranking over the new map rows, the six toys and their tools,
   as WO-014's sampling protocol ranks). Check: the evidence README lists at most
   twelve workers with their statements and, beside each, the launchpad's
   own observation: the session's harness journal under
   `docs/control/local/harness/` searched for the quarantine directory's
   name, with the row count found (zero expected) or `unobserved` where the
   harness kept no journal rows for that worker.
9. The agreement (WO-014-D014): a spec in `libs/shared/catalog` asserting
   that the works the loader loads, the shelf's titled works and the
   summary's works are one set, and assertions in `tools/catalog.test.mjs`
   that each has its token in `_tokens.scss` and `_field-skin.scss` and an
   entry in the shelf's `@each`; the moved totals' figures in the
   decisions. Check: `npx nx test catalog` and `npm run test:tooling` exit
   0, and the spec fails on a scratch copy with `artofwar` removed from
   `reading.ts`, that run recorded in the README.
10. The seven works and `maxim` through WO-035's mechanism as step 2
    records it. Check: the check step 2 names exits 0 with the new works.
11. The maxim in the reading: the reading mapper and `concept-reading`, the
    translation's name as a `tools.reading.*` message, a component spec for
    a row with a maxim and one without. Check: `npx nx test tools` exits 0;
    `npm run i18n:check` exits 0.
12. e2e and baselines: the totals in `catalog.spec.ts`,
    `catalog.visual.spec.ts` and `study-messages.spec.ts` moved to the new
    inventory and the shelf's thirteen works; cases for The Art of War on
    the shelf with its thirteen chapters, a maxim's reading showing the
    maxim above the definition, the Meadows toy's page with its tools linked
    into readings, and a case that alters the text WO-035's mechanism
    serves (as step 2 records it, extending WO-035's own case where it has
    one) and finds the altered text on an Art of War reading's maxim and
    definition and a Meadows tool's definition; axe; no
    horizontal overflow at 360, 768, 1440, about 2080 by 1460 and 3840 by
    1620; the catalog baselines refreshed on macOS with the command
    `storybook.md` documents (`npx nx e2e-visual dotln-e2e --
    --update-snapshots=all`), each changed screenshot read before commit.
    Check: `npx nx e2e dotln-e2e` and `npx nx e2e-visual dotln-e2e` exit 0.
13. The walkthrough: the executor performs the Objective's session in the
    served production build, saves one screenshot per step at 360, 768,
    1440, about 2080 by 1460 and 3840 by 1620 under
    `docs/evidence/WO-043/walkthrough/` and writes
    `docs/evidence/WO-043/walkthrough.md` with the dated steps; the verifier
    repeats the session independently for criterion 1. Check: the files
    exist.
14. Documents: `catalog.md` §Mining a new work, its inventory and new-work
    list, §Toys; `catalog-rules.md`; `scripts.md`. Check: `grep -n "^##
    Mining a new work" docs/dev-reference/architecture/catalog.md` prints
    the heading and `grep -c "maxim" docs/ai-reference/catalog-rules.md` is
    at least 1.
15. Dependency check as WO-015 step 15; `npx nx build dotln
    --configuration=production` and `npm run check:bundle`, each new chunk's
    size recorded in the evidence README beside WO-019's figures; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
16. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation, §Catalog and concept studies (the inventory sentence,
    the maps directory, `tool-v2`, the `--batch` join) and §Run content
    workers, read against what the two fan-outs used; WS-001's delivery
    states updated by the final review. Check: `npm run test:docs`. Then
    the publish, review and records steps as WO-007 steps 15 to 17, with
    the branch `feat/art-of-war-and-new-toys`, the title `feat: map The Art
    of War and design six new toys`, `docs/evidence/WO-043/` and
    `docs/final-reviews/WO-043/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run check:fixtures`, `npm run catalog:check`, `npm run toys:check`,
`npm run test:tooling`, `npm run i18n:check`, `npm run check:scripts`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`, `npx nx e2e-visual
dotln-e2e`; in the launchpad order worktree `npm run test:docs`; then the
target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
   session in the served production build: open Tools, Catalog and find
   The Art of War and the six sources' works on the shelf; open The Art of
   War, read the contents and open a concept whose row carries a maxim;
   read a typed tactic's faces; open Toys and find the six new toys; open
   the Meadows toy and follow a tool into its reading; filter the shelf to
   designed toys. The VER report carries a `## Walkthrough` section with
   the dated steps and names the screenshots at 360, 768, 1440, about 2080
   by 1460 and 3840 by 1620 under `docs/evidence/WO-043/walkthrough/`, and
   states in the verifier's own words what the maxim's reading says and
   what the Meadows toy would show, as read from the page alone. Met only
   when every step completed and that statement is present; a UI issue at
   about 2080 by 1460 or at 3840 by 1620 fails the order, and one at
   another size is a boarded follow-up.
2. **The research read for quality (rule 27).** The VER report names a
   random sample of the new research spanning the map's rows and the six
   toys with their tools, the command that drew it (`node
   docs/evidence/WO-043/sample-research.mjs <target worktree> <seed>`, with
   the seed the verifier chose) and the verifier's judgment of each sampled item's
   quality and content, a map row against the committed text and a toy or
   tool against the work it names. An item need not be perfect; a pattern
   of low quality fails the order on those grounds.
3. **The map.** `npm run catalog:check` exits 0 with
   `libs/shared/catalog/src/maps/art-of-war.jsonl` and
   `tools-artofwar.json` (`tool-v2`) present and the map's SHA-256 and row
   count equal to the checkpoint's; the summary's `artofwar` entry lists
   the text's thirteen chapters; `npm run test:tooling` exits 0 with the
   test that finds every `maxim` of the map verbatim in
   `libs/shared/catalog/src/maps/art-of-war-giles-1910.txt`, holds every
   maxim of `tools-artofwar.json` equal to its map row's, and refuses both
   a scratch map with one maxim altered and a scratch checkpoint with one
   maxim altered beside the unchanged map; and `docs/evidence/WO-043/README.md`
   records the text's source, URL, retrieval date and SHA-256, equal to
   `shasum -a 256` over that file, and the critic's sampled rows with their
   disposition.
4. **Typing and the contract.** `npm run catalog:report` lists `artofwar`
   with its scene type and its typed rows by transform kind, each kind a
   member of `TransformKind`; `git diff --exit-code <the integrated base>
   -- libs/shared/catalog/src/data/tools-aifg-a.json
   libs/shared/catalog/src/data/tools-aifg-b.json
   libs/shared/catalog/src/data/tools-eip.json
   libs/shared/catalog/src/data/tools-poeaa.json
   libs/shared/catalog/src/data/tools-rxjs-core.json
   libs/shared/catalog/src/data/tools-rxjs-patterns.json
   libs/shared/catalog/src/data/tools-geb.json
   libs/shared/catalog/src/data/tools-tt.json
   libs/shared/catalog/src/schema/tool-v1.schema.json` exits 0 on the
   candidate; and step 4's tooling tests pass, so a `tool-v1` row with a
   `maxim`, a public-work checkpoint holding a map row, a map batch with no
   maps and a repository map that differs from its checkpoint are each
   refused, and `--batch artofwar` reads no research run directory.
5. **The six toys and their tools.** `npm run toys:check` exits 0 over the
   shelf's records, six of origin `this-app`, one for each of `meadows`,
   `pirsig`, `poincare`, `gladwell`, `taleb` and `fives`, each with a scene
   type, a question, metrics and tool ids the catalog has; and each
   source's `tools-<source>.json` passes `npm run catalog:check` as a
   public-work batch whose rows carry `map: null`, a definition, a place and
   a verification note naming the work and its chapter or named concept.
6. **Provenance excludes quarantined material.** `cat
   docs/evidence/WO-043/README.md` shows each map and toy worker's label and
   one-line statement that no quarantine file was read, beside the
   launchpad's read observation (the harness journal's row count for the
   quarantine path, or `unobserved` where that host kept no attributable
   rows). Worker totals, the stop comparison and subagent accounting remain
   process duties in the Cost line, Design and decisions, not acceptance
   measurements.
7. **Through the message system (rule 9).** The check step 2 names exits 0
   with the seven new works; step 12's e2e case, which alters the text
   WO-035's mechanism serves for a loaded work as step 2 records it, shows
   the altered text on an Art of War reading's maxim and definition and on
   a Meadows tool's definition; and `npm run toys:check`'s message checks
   pass over the six new records.
8. **The works agree.** Step 9's spec and tooling assertions pass, so the
   works the loader loads, the shelf's titled works and the summary's works
   are one set and each has its two tokens and its shelf style; the README
   records the run on a scratch copy with `artofwar` removed from
   `reading.ts` failing the spec.
9. **The pages.** `npx nx e2e dotln-e2e` exits 0 with step 12's cases, axe
   at the board spec's threshold and no horizontal overflow at 360, 768,
   1440, about 2080 by 1460 and 3840 by 1620; `npx nx e2e-visual dotln-e2e`
   exits 0 against the refreshed baselines.
10. **Build.** `npx nx build dotln --configuration=production` exits 0
    within the declared budgets with the new works' chunks lazy,
    `npm run check:bundle` passes, and `package.json`'s `dependencies` keys
    equal the integrated base's.
11. **Documents and scripts.** `docs/dev-reference/architecture/catalog.md`
    carries the heading `Mining a new work`;
    `docs/ai-reference/catalog-rules.md` states that a map row may carry
    the public text's maxim verbatim where the maxim is the concept;
    `docs/dev-reference/workspace/scripts.md` names the `--batch` join in
    the `catalog:join` row; `npm run check:scripts` exits 0.
12. `node scripts/target-gate.mjs WO-043 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-043/README.md`, `docs/evidence/WO-043/fan-out.md`,
`docs/evidence/WO-043/sample-research.mjs`,
`docs/evidence/WO-043/walkthrough.md` and its screenshots, and
`docs/evidence/WO-043/host-qualification.md`.

**Known issues and carry-ins:** WO-035, a hard dependency, moves the work titles out of `reading.ts` into the root message catalog; wherever this text names a shelf title, the executor adds it as a message beside the others at the integrated base, and `reading.ts` keeps the scene types. Carried from planning receipt 012 (2026-10-28), a known issue that still applies: the fan-out's stop has no degraded acceptance path, because the criteria require every chapter and all six toys, so a stop refuses the order instead of shipping part of the mining; a stop is recorded in the decisions file with what was mapped and returns to a planning pass. The base is DotLn-Angular's `main` at
`eb9d227` (WO-039's merge); WO-018 and WO-035 merge before this order
activates, and step 1 fast-forwards to `main` as it finds it. From receipts
008 and 009, kept: the map lives in its own directory, and the committed
map is held to its checkpoint by `catalog:check` rather than a script of its
own (rule 26); the toy-source tools carry `provenance: 'public-work'` with
`map: null` and the mapped-rows count rule does not count them; a worker's
no-quarantine statement is self-attested and the fan-out record puts the
launchpad's own read observation beside it. From receipt 010: the overlap
window (its item (a)) is moot with the check; the toy-source tools carry
definitions (its item (b)); "store" means the committed data here and the
deferred mining store in candidate C1 (its item (c)); the commands and
checks this order adds are recorded against its own rows (its item (d)).
From receipt 011: the fan-out's token ceiling is WO-014's recorded order
total, with a decision at the stop (the fan-out Design and the shared
profile; WO-018-D002 moved this process accounting out of acceptance); the
operator's ruling on the run's designs is recorded at activation (step 1);
the production build within the declared budgets is criterion 10's. The six
new toys are designed, not built; building one is a later member the
operator picks from the shelf (candidate C5). The commander-and-squad scene
the tactics serve is a later toy. A transform kind the enum lacks stays
`untyped` with the proposal in its reason until a decision grows the enum.
The maxims of a public-domain text are carried verbatim; a later map of a
work still in copyright carries the mapper's definition and no passage, an
ordinary publishing matter the order that maps it decides, not a
clean-room one. WO-014-D014's reopening condition, a work added, is met
here: its two items already hold at `eb9d227`, and the agreement spec
covers what still bites (criterion 8). WO-038 changes the reading's layout;
the maxim takes the reading's form at the integrated base, and the later
of the two to publish integrates the target's `main`. Starter v0.96.1's plan
gate no longer advises on this order's own launchpad record paths; they
stay as the kit names them and the publish command's body file must not
name them. This order activates only on a launchpad whose starter carries
core WO-221's `--draft` form; the draft pull request and its workflow runs
are a final-review obligation read from
`docs/evidence/WO-043/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set by the
2026-11-09 pass under WO-012's declared policy.

**Non-goals:** building any of the six toys; the commander scene; mining
Gladwell book by book or any further work; a live agent; the graduation
route's issue export (candidate C4); the toy shelf's form (WO-018's
rounds); the reading's layout (WO-038); the mining store and the app's API
(candidate C1).

**Operator-review assumptions:** the operator accepts the Giles translation
as the public text, committed in the evidence, with its maxims carried
verbatim; `tool-v2` as the record that carries a maxim; the six sources as
small works on the catalog's shelf holding their designed tools; and the
designers' toys as the shelf's records; and reads the one draft pull request
before final review, which the final publish reuses.
