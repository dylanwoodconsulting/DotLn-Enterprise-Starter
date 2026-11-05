# WO-035 — Every string on screen through the message system: the catalog's mined text, 3,463 rows' titles, definitions, places, provenance notes and analog clauses, served as per-work message catalogs generated from the data files, the shelf, the contents, the reading, the search and the scene's inspector rendering through the translator, a missing message failing closed, and the checks that refuse the next exception

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 48c7f8e6916692bca833c4985e2cf95978ab2c06
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds a generator `tools/scripts/catalog/catalog-messages.mjs` and
its check, seven generated message catalogs under
`apps/dotln/public/i18n/catalog<Work>/en.json` (about 1.1 MB of English raw
across the works, loaded one work at a time; `--check` mode in the
`workspace-tools` lint target), a translating read path in the catalog
loader and `ToolsFacade` (the work's catalog scope loaded with the work,
through the `MessageCatalog` route the studies use), the fail-closed rule
for a missing study or catalog message (D054), the composites
`concept-reading`, `work-shelf`, `contents-list`, `catalog-search` and the
scene's `unit-inspector` and `toolbox-rail` reading row text through the
translator, the search index built from the loaded catalogs, e2e cases
with an intercepted alternate catalog, and the documents (`catalog.md`
§Loading and state and §Reading and studying, `catalog-rules.md`,
conventions §9, `scripts.md`); about 25 source files plus the seven
catalogs; adds no runtime dependency, no page, no family and no round.
Removes the `translate="no"` attributes on the definition paragraphs and
the standing sentence that source text is untranslated data wherever a
document still carries it. Wall-clock: about 6 h 0 min to 8 h 0 min of
executor work plus the fixed cycle; unknown until run. Context bytes: the
loader, the store, the facade and the five composites (about 120 KB), the
`MessageCatalog` and `StudyTranslate` modules, `catalog.md`, the i18n
conventions, WS-001 rule 9 and G3, WO-028-D042, D044 and D054, this order;
about 350 KB for the executor. Commands added in the target: one
(`npm run catalog:messages`, with `-- --check`). Tokens: unknown until run.
Steps: 12. Re-mints: none. Refutations paid: this pass's receipt.
**Nomination provenance:** the operator's direction of 2026-11-04 at
WO-028's first final review (ignored capture
`docs/intake/notes/wo028-final-review-translations-2026-11-04.md`, SHA-256
`f4f42e5c934cb06ed012351256de90a78b6f8f04ca5b5fff0de93955774f18c6`;
WO-028-D039 to D041): there is a hard rule that all of the text is in
translations, and a string the operator can see on screen is user-facing;
WO-028-D044 and register row `FUP-277d3741530b7979`, which asked the next
planning pass to settle translation ownership for the mined catalog
definitions; WO-028-D054 and `FUP-86db793258214c51`, the missing message
that renders its key; the operator's rule 23 (the works' material enters
committed files as data), which this order keeps. Planner-synthesized by
the [2026-11-05 pass](../planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md)
(D4). Opaque identifier, not a priority.
**Depends on:** WO-028 merged (hard: the `MessageCatalog` route, the
`StudyTranslate` boundary and the work-level catalogs this order extends
to the mined rows). WO-023 and WO-024 (reference-only: the pair edits
`catalog-loader.ts` for the `tool-v0` reader's removal and the study
directories; whichever lands later integrates the target's `main`).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-028",
    "relation": "hard",
    "reason": "the MessageCatalog route, the StudyTranslate boundary and the work-level message catalogs this order extends from the authored studies to the mined rows"
  },
  {
    "workOrderId": "WO-023",
    "relation": "reference-only",
    "reason": "the pair removes the tool-v0 reader from catalog-loader.ts and adds study directories; the later of the two to land integrates the target's main"
  },
  {
    "workOrderId": "WO-024",
    "relation": "reference-only",
    "reason": "the second of the pair; the later of the two to land integrates the target's main"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 9, 23, 24, 26 and 30; §The app and its sub-apps, G3);
`docs/operator/README.md` (§What the operator wants: every string on screen
in the message system); `docs/repositories/dotln-angular.md` (§Run the app
and its checks); the target's `docs/dev-reference/architecture/catalog.md`
(§Data and provenance, §Loading and state, §Reading and studying, §The
record), `docs/ai-reference/catalog-rules.md`, `docs/dev-reference/workspace/conventions.md`
§9 and §23; WO-028-D042, D044 and D054 in the target's `docs/dotln/`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, and reads the shelf, a contents page and a reading exactly
as before: the same titles, definitions, places and provenance notes; they
search for a word in a definition and find the row; they open the scene and
read a tool's definition in the inspector. Nothing on screen has changed,
and that is the point: every one of those strings now arrives through the
message system, so that a second language is a catalog away and a missing
message is a visible failure with Try again rather than a key on the page.
What the operator learns is that the hard rule now covers the last text
that was outside it; what they decide is when a second language is worth
adding.

**Observed gap (dated 2026-11-05 at `48c7f8e`):** the catalog's 3,463 rows
carry about 1.1 MB of English a reader sees (by field: `definition`
549 KB, `verified.note` 146 KB, `analog.clause` 116 KB, `place.part`,
`place.chapter`, `place.section` and `place.subsection` 257 KB, `title`
80 KB, measured over `libs/shared/catalog/src/data/tools-*.json`), rendered
by `concept-reading.html` (`{{ vm.tool.definition }}` under
`translate="no"`), the shelf, the contents, the search results and the
scene's `unit-inspector.html` (`{{ view.definition }}`), none of it through
Transloco; `i18n:check` reads templates, and `catalog.md` §Reading and
studying says a record field is not an exemption while the mined rows still
are one. WO-028 moved the eighty authored studies into work-level message
catalogs (`studyAifg/`, `studyRxjs/`, `studyEip/`, `studyCommon/`) and left
the mined rows for the pass that owns the rule (D044); a catalog answered
200 but missing a study's keys renders the keys to the reader with no
failure state (D054: 19 raw keys on an empty catalog).

**Design:**

- **Data stays data** (rule 23). `tools-*.json` remain the mined record
  with its provenance. `tools/scripts/catalog/catalog-messages.mjs` derives
  one catalog per work, `apps/dotln/public/i18n/catalog<Work>/en.json`
  (`catalogAifg`, `catalogRxjs`, `catalogEip`, `catalogPoeaa`, `catalogGeb`,
  `catalogTt`), from the rows' visible string fields: `title`, `definition`,
  each `place` part, `verified.note`, `analog.clause`, and the title of a
  `related` entry whose `id` is null (one with an id reads the other row's
  title message). Ids, URLs, kinds, parameters, hook ids and map provenance
  stay data. The key form is `catalog<Work>.<rowKey>.<field>` with the row
  id's `:` written `_` (`aifg-a:111` reads `catalogAifg.aifg-a_111.definition`).
  The catalogs are committed and `npm run catalog:messages -- --check`
  refuses a stale one, in the `workspace-tools` lint target (rule 26: it
  protects the hard rule on every change to the data).
- **Loading.** A work's catalog scope loads with the work, through the
  same `MessageCatalog` route as `studyAifg/` (the work is the unit of
  loading, D042); a loading failure reaches the existing alert with Try
  again. The shelf and Tools home, which load no work's chunk today, keep
  reading `catalog-summary.json` for counts and read titles from a small
  `catalogTitles/en.json` the generator also writes (work and chapter
  titles only), so the home still loads nothing heavy.
- **Fail closed** (D054). A loaded catalog that lacks a key a record, a
  study or a model asks for reaches the reading's failure state with Try
  again; the reader never sees a key. The translator bound in
  `MessageCatalog` and `StudyTranslate` raises on a missing key, and the
  facade's failure paths catch it; `docs/evidence/WO-028/ver-003/message-attack.mjs`
  is the reproduction and becomes the regression (an empty catalog, a
  catalog without the study, a 503 and malformed JSON all reach the alert).
- **Search.** `filters.ts` indexes the loaded catalogs' titles and
  definitions; a search over works not yet loaded loads their catalogs
  (about 300 KB gzipped for all six), with the loading state shown and
  the cost recorded.
- **The scene.** The inspector's definition and the rail's names read the
  AI for Games catalog, loaded with the scene; the scene's own strings were
  already in the message system.
- **Checks.** `npm run i18n:check` covers the generated catalogs (every key
  a row maps to exists, no extra key); the corpus test's rule for study
  literals extends to the reading composites' templates (a literal next to
  a translated field fails).
- **Documents.** `catalog.md` §Data and provenance states that the data
  files are the source and the catalogs their derived messages; §Loading
  and state and §Reading and studying describe the catalog scope, the
  fail-closed rule and the search index; `catalog-rules.md` and conventions
  §9 state that every string on screen, mined or authored, is a message,
  with no exemption; `scripts.md` gains the generator's row.

Rejected: hand-authored catalogs (axis: 3,463 rows change by mining and the
generator keeps data and messages equal); rewriting the data files into
message form (axis: rule 23, the mined record keeps its provenance as data);
a recorded exemption for mined text (axis: the operator's rule, if they can
see it on screen it is user-facing); one catalog for every work (axis: 1.1
MB on the first reading against the work as the unit of loading); adding a
second language here (axis: the architecture is the deliverable; a language
is a later order the operator asks for).

Live-run surfaces at the base: the catalog's shelf, contents, reading and
search, the scene's rail and inspector.

**Deliverables:** the generator and its check; the seven catalogs; the
translating read path, the fail-closed rule and its regression; the five
composites and the two scene composites through the translator; the search
index; the e2e cases; `docs/evidence/WO-035/` with the crawl record, the
transfer measurements, `walkthrough.md` and its screenshots; the four
documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-035: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   48c7f8e6916692bca833c4985e2cf95978ab2c06 origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1. Check: the decisions carry the
   integrated commit.
2. The generator, the key form and the seven catalogs committed; the
   `--check` mode wired into the `workspace-tools` lint target; `scripts.md`
   row. Check: `npm run catalog:messages -- --check` exits 0 at the
   candidate and 1 on a scratch copy with one definition edited.
3. The loader's catalog scope per work through `MessageCatalog`; the small
   titles catalog for the home and the shelf. Check: `npx nx test catalog`
   exits 0.
4. Fail closed: the translator raises on a missing key, the facade's
   failure paths catch it; the regression from `message-attack.mjs`. Check:
   the regression passes on the candidate and fails on the base.
5. The reading, the contents and the shelf through the translator;
   `translate="no"` removed. Check: `npm run i18n:check` exits 0.
6. The search index over loaded catalogs with the loading state. Check:
   `npx nx test tools` exits 0.
7. The scene's inspector and rail. Check: `npx nx test scene` exits 0.
8. e2e: an intercepted alternate catalog whose every value carries a
   visible prefix shows the prefix on the shelf, a contents page, a reading,
   a search result and the scene's inspector; an empty catalog reaches the
   failure state with Try again and no raw key; a 503 recovers on retry.
   Check: `npx nx e2e dotln-e2e` exits 0.
9. The crawl: the served production build over the shelf, every work's
   contents and ten readings per work, recording every visible text node of
   a row field as from the catalog or not. Check: zero nodes not from the
   catalog.
10. Transfer: the first shelf, the first reading of each work and a search
    over all works measured gzipped before and after; `npm run check:bundle`.
    Check: the initial bundle unchanged; the numbers recorded.
11. Documents; dependency check as WO-015 step 15; gate plain and review.
    Check: passing rows, no tracked-byte mutation.
12. Launchpad write-back (WS-001 rule 9's last sentence retired; the
    profile's implementation map row for the catalogs), then the publish,
    review and records steps as WO-007 steps 15 to 17, with the branch
    `feat/catalog-messages`, the title `feat: serve the catalog's mined text
    through the message system`, `docs/evidence/WO-035/` and
    `docs/final-reviews/WO-035/`. Check: `npm run test:docs` in the
    launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test`, `npm run i18n:check`,
`npm run catalog:messages -- --check`, `npm run check:fixtures`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: the shelf, a contents page, a reading,
   a search by a definition word, the scene's inspector; then the same
   session with the alternate catalog intercepted and reads the prefix on
   every one of those surfaces. The VER report carries a `## Walkthrough`
   section with the dated steps and screenshots at 360, 768, 1440 and the
   operator's sizes (rule 29) under `docs/evidence/WO-035/walkthrough/`, and
   states in the verifier's own words which strings they saw change under
   the alternate catalog and whether any visible row text did not. Met only
   when every step completed and that statement is present.
2. `docs/evidence/WO-035/crawl.json`, the production crawl of step 9,
   records zero visible text nodes of a row field that did not come from a
   catalog, over the shelf, every work's contents and ten readings per work.
3. With an empty catalog, a catalog missing the opened row's keys, a 503 and
   malformed JSON, the reading reaches the failure state with Try again and
   no raw key is visible; the regression derived from
   `docs/evidence/WO-028/ver-003/message-attack.mjs` passes on the candidate
   and its recorded run on the integrated base fails for the first two.
4. `npm run catalog:messages -- --check` and `npm run i18n:check` exit 0 at
   the candidate; on a scratch copy with one row's definition edited and the
   catalog not regenerated, the first exits 1; on a scratch copy with one
   generated key deleted, the second exits 1; the three runs are recorded in
   the evidence README.
5. A search for a word that occurs only in a definition returns that row
   after the catalogs load, and the loading state is shown while they do.
6. The scene's inspector definition and the rail's names show the alternate
   prefix under the intercepted catalog, and the scene's known-outcome
   fixture is unchanged.
7. `npm run check:bundle` passes with the initial bundle unchanged from the
   integrated base, the catalogs in lazy assets, and the evidence records
   the gzipped transfer of the first shelf, the first reading per work and
   an all-works search before and after.
8. `node scripts/target-gate.mjs WO-035 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-035/README.md`,
`crawl.json`, the transfer record, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-035/host-qualification.md`.

**Known issues and carry-ins:** This order settles WO-028-D044: the hard
rule reaches the mined text, and until this order lands an order is not
judged on the mined rows (WS-001 rule 9). WO-018 adds mined Art of War rows
and regenerates the catalogs when it does; the pass before WO-018 activates
writes that into its text. The
generated catalogs are tracked files of about 1.1 MB that change with
mining; the check keeps them equal to the data. A second language is a later
order on the operator's word. The search over all works loads every catalog
on first use; the cost is recorded and a lighter index is a candidate if
it matters. This order activates only on a launchpad whose starter carries
core WO-221's `--draft` form; the draft pull request and its workflow runs
are a final-review obligation read from
`docs/evidence/WO-035/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** a second language; translating the data files; changing the
reading's layout (WO-038); the studies' catalogs (WO-028's); the mining
store and the app's API (candidate C1).

**Operator-review assumptions:** the operator accepts the generator as the
way data and messages stay equal, the work as the unit of loading, the
fail-closed rule for a missing message, and the all-works search loading
every catalog; and reads the one draft pull request before final review,
which the final publish reuses.
