# WO-035 — Every string on screen through the message system: the catalog's mined text, 3,463 rows' titles, definitions, places, provenance notes, hook clauses, untyped reasons and typed faces, registered with the translator from the loaded rows under one scope per work, the catalog's own words for works, scenes, row types, kinds and statuses, the Tools home, the shelf, the contents, the reading, the search and the scene's rail, inspector, log and saved list rendering through the translator, a missing message failing closed, and the checks that refuse the next exception

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds a pure derivation of a work's on-screen messages from its
rows, `libs/shared/catalog/src/lib/catalog-messages.ts`, with its spec over
every bundled row; a run-time registration of a scope's messages and a
translator that fails closed in `MessageCatalog`
(`libs/shared/i18n/src/lib/message-catalog.ts`); the translating read path
in `ToolsFacade`, `ToolsHomeFacade` and `SceneFacade` (the scene's route
gains `provideMessageCatalog()`); the reading mapper, the composites
`concept-reading`, `contents-list`, `work-shelf`, `catalog-search` and
`reading-history`, the catalog page and the Tools home, and the scene's
rail, inspector and log mappers rendering translated view models; the
catalog's own words (work titles, scene labels, row types, kinds and
statuses) as messages in `apps/dotln/public/i18n/en.json`; specs under a
prefixed test language; two e2e cases for WO-028-D054; the crawl helper and
its records under `docs/evidence/WO-035/`; and the documents (`catalog.md`
§Data and provenance, §Loading and state and §Reading and studying,
`catalog-rules.md`, conventions §9); about 30 source files; adds no runtime
dependency, no npm script, no committed message catalog, no page, no family
and no round. Removes the `titles` maps from the study catalogs
(`studyAifg`, `studyEip`, `studyPoeaa`, `studyRxjs`, and WO-024's
`studyGeb` and `studyTt` where that order has landed them) with their
requirement in `tools/scripts/catalog/check-study-messages.mjs`, the
English work titles from `libs/shared/catalog/src/lib/reading.ts`, and the
persisted English title as the source of the Tools home's last-reading
link. Wall-clock: about 6 h 0 min to 8 h 0 min of executor work plus the
fixed cycle (the planner's estimate); unknown until run. Registration time
and memory per work in the served build: unknown until run, measured in
step 12. Context bytes: the loader, the store, `reading.ts`, the three
facades, the reading mapper, the composites, `MessageCatalog` and the
scene's mappers and templates (102 KB measured at the base), `catalog.md`
and `catalog-rules.md` (58 KB), the i18n conventions, WS-001 rules 9 and 21
and G3, WO-028-D042, D044 and D054, this order; about 300 KB for the
executor. Commands added in the target: none. Tokens: unknown until run.
Steps: 16. Re-mints: none. Refutations paid: this pass's receipt.
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
(D4). Opaque identifier, not a priority. Amended by the 2026-11-09 pass
([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D7):
the base moves to `eb9d227`; the committed generated catalogs give way to
registering each work's on-screen text with the translator from its loaded
rows, with a second language as a `catalog<Work>/<lang>.json` file; the
field list is corrected against the templates (hook clauses, untyped
reasons, the typed rows' faces, the persisted last-read title, the work
titles and the catalog's other own words added; `analog.clause`, which no
template renders, removed), and the criterion tests the same list; the
studies' `titles` maps give way to the one resolver; failing closed moves
to the translator the facades use; search is placed in `reading.ts`, the
attack script is cited in the launchpad, a criterion that passed at the
base gains a control, `studyPoeaa` and the counts are corrected; the order
is sequenced after WO-024 and WO-044.
**Depends on:** WO-028 merged (hard: the `MessageCatalog` route, the
`StudyTranslate` boundary and the work-level study catalogs this order
extends to the mined rows). WO-023 merged (reference-only: it removed the
`tool-v0` reader from `catalog-loader.ts` and added the `studyPoeaa`
scope). WO-024 (reference-only, sequenced ahead: it adds the `studyGeb` and
`studyTt` scopes with their `titles` maps and edits `catalog-loader.ts`'s
study chunks). WO-044 (hard: it lands `/tools/studied` and its `StudiedFacade`, which
steps 5 and 10 route through the translator, with the links from the Tools
home into each work, the studied counts on chapter rows and the marks on
nearby links).
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
    "reason": "merged: it removed the tool-v0 reader from catalog-loader.ts and added the studyPoeaa scope whose titles map this order removes"
  },
  {
    "workOrderId": "WO-024",
    "relation": "reference-only",
    "reason": "sequenced ahead: it adds the studyGeb and studyTt scopes with their titles maps and edits catalog-loader.ts's study chunks"
  },
  {
    "workOrderId": "WO-044",
    "relation": "hard",
    "reason": "it lands the studied page and its StudiedFacade, which steps 5 and 10 route through the translator, and changes the Tools home, the contents and the study's nearby links"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 9, 15, 21, 23, 24, 25, 26, 29 and 30; §The app and its
sub-apps, G3); `docs/operator/README.md` (§What the operator wants: every
string on screen in the message system); `docs/repositories/dotln-angular.md`
(§Run the app and its checks, §Registered gate); the target's
`docs/dev-reference/architecture/catalog.md` (§Data and provenance, §Loading
and state, §Reading and studying, §The record),
`docs/ai-reference/catalog-rules.md`,
`docs/dev-reference/workspace/conventions.md` §9 and §23, and
`eslint.config.mjs`'s `depConstraints`; WO-028-D042, D044 and D054 in the
target's `docs/dotln/evidence/WO-028/decisions.md`; the launchpad's
`docs/evidence/WO-028/ver-003/message-attack.mjs` and
`message-attack.json`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools and sees their last reading named; they open the catalog and read the
shelf, a contents page and readings exactly as before: the same titles,
definitions, places and provenance notes, the same suggested connections,
the same reason an untyped concept has no experiment yet, the same faces
sentence and starting values; they search for a word in a definition and
find the row; they follow a study's nearby link; they open the scene, choose
a tool on the rail and read its definition and parameters in the
inspector, and see the log and a saved composition named. Nothing on screen
has changed, and that is the point: every one of those strings now arrives
through the message system, so that a second language is one file per work
away and a missing message is a visible failure with Try again rather than
a key on the page. What the operator learns is that the hard rule now
covers the last text that was outside it; what they decide is when a second
language is worth adding.

**Observed gap (dated 2026-11-09 at `eb9d227`):** the catalog's 3,463 rows
(AI for Games 768, RxJS 742, Team Topologies 637, Gödel, Escher, Bach 573,
Patterns of Enterprise Application Architecture 455, Enterprise
Integration Patterns 288) carry about 1.48 MB of English a reader sees
(UTF-8, measured by this pass over
`libs/shared/catalog/src/data/tools-*.json`: `definition` 549 KB, the four
`place` parts 341 KB, `verified.note` 165 KB, the 1,907 untyped rows'
`faces.transform.reason` 157 KB, `hooks[].clause` 117 KB, `title` 104 KB,
the titles of relations with no id 30 KB, and the 129 typed rows'
observables, metrics, parameter names and units 20 KB), none of it through
Transloco. The templates bind the fields directly (`concept-reading.html`
lines 4, 15, 23, 48, 96 and 104 to 108, under `translate="no"`;
`contents-list.html` lines 13, 30 and 46; `catalog-search.ts` lines 23 and
27; `reading-history.ts` line 17; `catalog-page.html` line 130; the scene's
`unit-inspector.html` lines 4 and 5 and `toolbox-rail.html` line 26), the
mappers make labels of the typed rows' faces with `readable()`
(`reading-mapper.ts` lines 29 to 40; `inspector-mapper.ts` lines 56 to 58,
106 and 111), and the scene names log steps, request notices and a saved
composition from row titles (`scene.facade.ts` lines 438, 441, 457 to 459
and 726 to 733; `log-mapper.ts` line 46, which shows the title stored with
the composition). The catalog's own words are app literals or raw values:
the work titles (`reading.ts` lines 18 to 27), the shelf's scene label
(`work-shelf.ts` lines 37 to 39), the row type in the place line
(`concept-reading.html` line 3) and the kind and status facet options
(`tools.facade.ts` lines 113 to 117). The Tools home names the last reading
from an English title persisted in browser storage (`catalog-store.ts`
lines 37, 62 to 70 and 120; `tools-home.ts` line 33). `analog.clause`
(116 KB) is rendered by no template. The study catalogs (`studyAifg`,
`studyEip`, `studyPoeaa`, `studyRxjs` and `studyCommon`) carry the hundred
authored studies' text since WO-028 and WO-023, and the four work catalogs
repeat 291 mined titles in a `titles` map keyed by row id, each equal to its
row's title at the base, read by one resolver (`tools.facade.ts` line 99)
and required by `check-study-messages.mjs` lines 129 to 131. The catalog
page loads every work when it opens (`catalog-store.ts` line 146, `load()`
with no work), so no work's text is lazy on that page. A message missing
from a loaded catalog renders its key: the `t` pipe's handler and
`MessageCatalog`'s translator both answer with the key in production
(`missing-translation-handler.ts` line 14; `message-catalog.ts` line 27),
and WO-028's VER-003 recorded 19 raw keys on an empty study catalog and 14
on one without the study (D054). `i18n:check` reads templates;
`catalog.md` §Reading and studying says a record field is not an exemption
while the mined rows still are one.

**Design:**

- **Data stays data** (rule 23). `tools-*.json` remain the mined record
  with its provenance and the one place the English lives. No message
  catalog is generated from them and none is committed.
- **The list.** These are the strings this order routes through the
  translator; the derivation, the specs and criteria 2 and 3 use this list.
  A row's text, per row, in its work's scope: `title`; `definition`;
  `place.part`, `place.chapter`, `place.section` and `place.subsection`;
  `verified.note`; each `hooks[].clause`; an untyped row's
  `faces.transform.reason`; the `title` of a `related` entry whose `id` is
  null (one with an id reads the other row's title message); and a typed
  row's `faces.observable` entries, `faces.toyMetric` entries and each
  parameter's `name` and `unit`, whose English is today's `readable()` form
  so nothing on screen changes. The catalog's own words, in
  `apps/dotln/public/i18n/en.json`: the work titles, the scene type labels
  (the shelf's and the faces'), the row types, and the kind and status facet
  options. Where they show: the Tools home's last reading, the shelf, the
  contents, the reading, the search results, the history, the studied list,
  the study's nearby and next links, the facets, and the scene's rail,
  inspector, log, request notices and saved list. `analog.clause` is not on
  the list: no template renders it, and it stays data until an order shows
  it. Text the operator types (a composition's note) is theirs and stays as
  typed.
- **Registration.** `catalog-messages.ts` derives a work's messages from its
  rows, keyed `catalog<Work>.<row id>.<field path>` with the row id as the
  study catalogs' `titles` keys already write it
  (`catalogAifg.aifg-a:111.definition`). `@dotln-angular/catalog` is
  `type:data-access` and may not import `type:i18n` (rule 15;
  `eslint.config.mjs` `depConstraints`), so the derivation is the catalog
  library's and the registration the features': when a facade has a work's
  rows (`ToolsFacade` from the store, `SceneFacade` from its load), it
  registers that work's messages for the default language through a new
  `MessageCatalog` method built on the installed Transloco's own API for
  setting a scope's translation at run time (`@jsverse/transloco` 8.4.0,
  `TranslocoService.setTranslation` with the scoped language
  `catalog<Work>/en`; verify at step 1, with whether a registered scope is
  then fetched). A registered scope is never fetched in the default
  language. The catalog page registers every work, since it loads them all;
  the scene registers AI for Games, and every work when it loads the whole
  catalog to name a request notice.
- **A second language** is `apps/dotln/public/i18n/catalog<Work>/<lang>.json`,
  loaded through the `MessageCatalog` route the study scopes use; it
  supplies that work's text in that language in place of the registered
  English, and a key it lacks is a missing message. No such file is added
  here.
- **Rendering.** Every screen renders the list's text through the facades'
  translator: the facades build view models whose strings are translated,
  and the composites render those strings. No template binds a row field,
  and no row key goes through the `t` pipe, whose handler answers with the
  key in production. The place line's and the faces' joins use messages
  (`tools.reading.separator` exists) rather than the literal separators of
  `reading-mapper.ts` lines 23, 29, 34 and 35. Resolved row text keeps
  `translate="no"`, as `catalog.md` §The record already has resolved study
  content keep it, so a browser does not translate it again.
- **Search.** `searchReadings` (`reading.ts` lines 104 to 118) matches the
  translated title and definition its caller supplies, so a search finds
  the active language's text; it covers every work because the page has
  loaded them all.
- **The Tools home** names the last reading through the translator: it
  loads that reading's work through the loader, which caches it, registers
  it and reads its title; the untitled link shows while it loads and when
  the load fails. The persisted `lastTitle` is no longer what the home
  shows.
- **The scene's saved list** names a composition from its steps' titles
  through the translator; the `title` stored in the composition stays in
  the record as written.
- **One resolver for a row's title.** The study's nearby and next titles
  (`tools.facade.ts` line 99, the only reader of a `study<Work>.titles.<id>`
  key at the base) read the row's `title` message in its catalog scope; the
  `titles` maps leave the study catalogs, and `check-study-messages.mjs`
  stops requiring them.
- **Fail closed** (D054). `MessageCatalog`'s translator raises on a key that
  its language's loaded messages lack, under the production configuration
  as under development, apart from the global missing handler; the
  facades' failure paths catch it. A study message missing reaches the
  study's failure state with Try again (`tools.study.failed`); a row message
  missing reaches the catalog page's failure alert with Try again; in the
  scene, the rail's failed state with its retry. The reader never sees a
  key. D054's two cases, an empty study catalog and one without the opened
  study, each answered 200, become e2e cases; the launchpad's
  `docs/evidence/WO-028/ver-003/message-attack.mjs` reproduces them at the
  base.
- **Checks.** The derivation's spec runs over every row of every bundled
  work and asserts that every listed field present on a row has its key. A
  prefix spec renders the catalog page, the Tools home and the scene page
  under a test language in which every message of the root, study and
  catalog scopes carries a visible prefix, and asserts that every visible
  text node of the listed surfaces carries the prefix, apart from numerals,
  punctuation and text the operator typed; at the integrated base it fails,
  because row text renders raw. The test language lives in the specs and
  ships nowhere. `npm run i18n:check` keeps covering the templates and the
  root and study catalogs.
- **Documents.** `catalog.md` §Data and provenance states that the data
  files are the one source of the English and the registered scopes their
  messages; §Loading and state and §Reading and studying describe the
  registration, the fail-closed rule, the search and the Tools home's last
  reading; `catalog-rules.md` and conventions §9 state that every string on
  screen, mined or authored, is a message, with no exemption.

Rejected: committed message catalogs generated per work from the data
(axis: where the English lives and what it costs; about 1.7 MB compact to
2.1 MB indented of tracked generated JSON by this pass's measurement over
the old field list, the English shipped twice, and a staleness check that
fails on every data edit; reopens if the operator says the mined text must
live in translation files); hand-authored catalogs (axis: 3,463 rows change
by mining); rewriting the data files into message form (axis: rule 23, the
mined record keeps its provenance as data); a recorded exemption for mined
text (axis: the operator's rule, if they can see it on screen it is
user-facing); the Tools home keeping the title persisted when the reading
was opened (axis: a stored string shown later outside the translator, in
the language it was stored in); adding a second language here (axis: the
architecture is the deliverable; a language is a later order the operator
asks for).

Live-run surfaces at the base: the Tools home, the catalog's shelf,
contents, reading, search and history, and the scene's rail, inspector, log
and saved list; each exists at the base and is exercised by `npx nx e2e
dotln-e2e` (`catalog.spec.ts`, `scene.spec.ts`).

**Deliverables:** the derivation and its spec; the registration and the
fail-closed translator; the translating read path in the three facades, the
mappers and the composites; the catalog's own words as messages; the one
title resolver; the prefix specs and the e2e cases; `docs/evidence/WO-035/`
with `crawl.mjs`, `crawl-before.json`, `crawl-after.json`,
`controls.json`, the transfer and registration measurements,
`walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-035: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1. Read the installed Transloco's API for
   setting a scope's translation at run time and whether a registered scope
   is then fetched. Check: the decisions carry the integrated commit and
   the API as read.
2. `docs/evidence/WO-035/crawl.mjs` (new): over the served production build
   of the integrated base, the Tools home with a stored last reading, the
   shelf, every work's contents, ten readings per work chosen by a recorded
   seed, a search by a definition word, the scene's rail, its inspector with
   a tool chosen, its log and a saved composition, writing each surface's
   visible text to `crawl-before.json`; and D054's two cases run at the base
   with the launchpad's `docs/evidence/WO-028/ver-003/message-attack.mjs`,
   their outcome and exit code written to `controls.json`. Check: both files
   name the integrated commit.
3. `libs/shared/catalog/src/lib/catalog-messages.ts` (new, exported through
   `public_api.ts`): the derivation over the Design's list and the scope
   name of each work; its spec over every row of every bundled work. Check:
   `npx nx test catalog` exits 0.
4. `libs/shared/i18n/src/lib/message-catalog.ts`, `MessageCatalog`: the
   registration of a scope for the default language, never fetched in that
   language, and the translator that raises on a missing key under the
   production configuration as under development; `message-catalog.spec.ts`
   covers both. Check: `npx nx test i18n` exits 0.
5. `libs/features/tools/src/lib/facades/tools.facade.ts`, `ToolsFacade`:
   registers each loaded work through a registration and title resolver it
   shares with `StudiedFacade` (`facades/studied.facade.ts`, the
   `/tools/studied` page WO-044 lands, which registers the works it loads
   and builds its list from translated titles, so a direct visit renders no
   raw row text and a missing title reaches that page's failure state with
   Try again); builds the shelf, contents, reading, search
   results, history, studied list and facets from translated strings; the
   study's nearby and next titles read the row's title message; a missing
   message reaches the catalog page's failure alert or the study's failure
   state with Try again. Check: `npx nx test tools` exits 0.
6. The reading mapper and the composites (`reading-mapper.ts`,
   `concept-reading.html`, `contents-list.html`, `work-shelf.ts`,
   `catalog-search.ts`, `reading-history.ts`, `catalog-page.html`) render the
   translated view; `apps/dotln/public/i18n/en.json` gains the work titles,
   scene labels, row types, kinds and statuses; `reading.ts` keeps each
   work's scene type and no title, and `searchReadings` matches the text its
   caller supplies. Check: `npx nx test tools`, `npx nx test catalog` and
   `npm run i18n:check` exit 0.
7. `libs/features/tools/src/lib/facades/tools-home.facade.ts`,
   `ToolsHomeFacade`: names the last reading through the translator after
   loading its work, with the untitled link meanwhile and on a failure;
   `tools-home.facade.spec.ts` covers the three. Check: `npx nx test tools`
   exits 0.
8. The study catalogs under `apps/dotln/public/i18n/study*/en.json` lose
   their `titles` maps; `tools/scripts/catalog/check-study-messages.mjs`,
   `checkStudyMessages`, stops requiring them; the tools test kit's
   fixtures follow. Check: `npm run i18n:check` exits 0 and `node -e "const
   fs = require('fs'); const d = 'apps/dotln/public/i18n'; for (const s of
   fs.readdirSync(d).filter((n) => n.startsWith('study'))) if
   (JSON.parse(fs.readFileSync(d + '/' + s + '/en.json', 'utf8')).titles)
   process.exit(1)"` exits 0.
9. The scene: `provide-scene-feature.ts` provides `MessageCatalog`;
   `scene.facade.ts`, `SceneFacade`, registers the works it loads and names
   log steps, request notices and saved compositions through the
   translator; `rail-mapper.ts`, `inspector-mapper.ts` and `log-mapper.ts`
   take translated text; a missing message reaches the rail's failed state.
   Check: `npx nx test scene` exits 0 and `git diff --exit-code --
   libs/features/scene/src/testing/fixtures/trial-known-outcome.json` exits
   0.
10. The prefix specs: `catalog-page.spec.ts`, `studied-page.spec.ts`
    beside WO-044's page, a new `tools-home.spec.ts` beside `tools-home.ts`,
    and `scene-page.spec.ts` gain the test language
    of the Design, built in the spec from `en.json`, the study catalogs and
    the derived catalog messages; the cases of criteria 2, 4 (the row
    message) and 5. Check: `npx nx test tools` and `npx nx test scene` exit
    0, and the same cases run at the integrated base fail, both arms' exit
    codes written to `controls.json`.
11. `apps/dotln-e2e/src/study-messages.spec.ts` gains D054's two cases.
    Check: `npx nx e2e dotln-e2e` exits 0, the candidate arm written to
    `controls.json`.
12. `crawl.mjs` at the candidate writes `crawl-after.json` and compares it
    with `crawl-before.json`; the initial bundle's bytes, the transfer of
    the Tools home with a last reading, the first shelf and the first
    reading of each work, gzipped, before and after, and the registration
    time and memory per work in the served build, into
    `docs/evidence/WO-035/README.md`. Check: the
    comparison exits 0, `npm run check:bundle` passes, and `npx nx
    e2e-visual dotln-e2e` passes with no baseline changed.
13. Documents: `catalog.md` §Data and provenance, §Loading and state and
    §Reading and studying, `catalog-rules.md` and conventions §9 as the
    Design says. Check: `grep -n "catalogAifg" docs/dev-reference/architecture/catalog.md`
    prints the line that names the scope form, and `npx nx format:check`
    exits 0.
14. The walkthrough as WO-020 step 11, under
    `docs/evidence/WO-035/walkthrough/`, with screenshots at 360, 768, 1440,
    about 2080 by 1460 and 3840 by 1620. Check: the files exist.
15. Dependency check as WO-015 step 15; gate plain and review. Check:
    passing rows, no tracked-byte mutation.
16. Launchpad write-back (WS-001 rule 9's last sentence retired; the
    profile's §Catalog and concept studies gains the derivation and the
    registration), then the publish, review and records steps as WO-007
    steps 15 to 17, with the branch `feat/catalog-messages`, the title
    `feat: serve the catalog's mined text through the message system`,
    `docs/evidence/WO-035/` and `docs/final-reviews/WO-035/`; the final
    reviewer commits the order's records on the order branch before
    `npm run resume -- target-records` (the profile's publish route, step
    3). Check: `npm run test:docs` in the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test`, `npm run typecheck:e2e`,
`npm run i18n:check`, `npm run check:fixtures`, `npm run check:bundle`,
`npx nx e2e dotln-e2e`, `npx nx e2e-visual dotln-e2e`; in the launchpad
order worktree `npm run test:docs`; then the target gate plain and review
once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build: the Tools home with a last reading, the
   shelf, a contents page, a typed row's reading with its faces, an untyped
   row's reading with its reason, a reading with hook clauses and an
   unlinked relation, a search by a definition word, a study's nearby link,
   and the scene's rail, inspector, log and a saved composition; then the
   reading of a study with `studyAifg/en.json` intercepted empty. The VER
   report carries a `## Walkthrough` section with the dated steps and
   screenshots at 360, 768, 1440 and the operator's sizes (rule 29) under
   `docs/evidence/WO-035/walkthrough/`, and states in the verifier's own
   words whether any of those strings read differently from the integrated
   base and what the reader saw with the empty catalog. A UI issue at about
   2080 by 1460 or 3840 by 1620 fails the order; one at another size is a
   boarded follow-up the report names. Met only when every step completed
   and that statement is present.
2. Under step 10's test language, every visible text node of the Tools
   home, the shelf, the contents, a typed row's reading, an untyped row's
   reading, a reading with hook clauses and an unlinked relation, a study's
   nearby and next links, the search results, the history, the studied
   list, the facets, and the scene's rail, inspector, log and saved list
   carries the prefix, apart from numerals, punctuation and text the
   operator typed; the surfaces between them show every field of the
   Design's list (title, definition, the four place parts, provenance note,
   hook clause, untyped reason, unlinked relation title, a typed row's
   observables, metrics, parameter names and units, and the work titles,
   scene labels, row types, kinds and statuses). The case passes at the
   candidate and fails at the integrated base, both arms' exit codes in
   `docs/evidence/WO-035/controls.json`.
3. The spec of `catalog-messages.ts` derives the messages of every row of
   every bundled work and asserts that every field of the Design's list
   present on a row has its key, and `npx nx test catalog` exits 0.
4. With `studyAifg/en.json` answered 200 empty, and answered 200 without the
   opened study, the reading reaches the study's failure state with Try
   again and no raw key is visible (`npx nx e2e dotln-e2e`); under the test
   language with the opened row's definition removed from its catalog
   scope, the reading reaches the catalog page's failure alert with Try
   again and no raw key is visible (`npx nx test tools`); `MessageCatalog`'s
   spec shows the translator raising on a missing key under the production
   configuration. The two e2e cases fail at the integrated base, both arms
   in `controls.json`.
5. Under the test language, a search for a word that occurs only in one
   row's translated definition returns that row; the same case at the
   integrated base returns nothing; both arms in `controls.json`.
6. `crawl-after.json` equals `crawl-before.json` in every surface's visible
   text (the comparison of step 12 exits 0), and `npx nx e2e-visual
   dotln-e2e` passes with every baseline unchanged from the integrated
   base.
7. The step 8 `node -e` check exits 0, so no study catalog carries a
   top-level `titles` map, and `npm run i18n:check` exits 0.
8. `ls apps/dotln/public/i18n` lists no `catalog` entry;
   `npm run check:bundle` passes, so no catalog source has entered the
   initial bundle; `package.json`'s `dependencies` keys equal the integrated base's;
   and `docs/evidence/WO-035/README.md` records the initial bundle, transfer
   and registration figures of step 12.
9. `node scripts/target-gate.mjs WO-035 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-035/README.md`,
`crawl.mjs`, `crawl-before.json`, `crawl-after.json`, `controls.json`,
`walkthrough.md` and its screenshots, and
`docs/evidence/WO-035/host-qualification.md`.

**Known issues and carry-ins:** This order settles WO-028-D044
(`FUP-277d3741530b7979`) and D054 (`FUP-86db793258214c51`): the hard rule
reaches the mined text, and until this order lands an order is not judged
on the mined rows (WS-001 rule 9). It is sequenced after WO-024 and
WO-044, and it takes the screens as they stand at activation: the
before-crawl runs at the integrated base, the list's fields cover what
those orders show, and WO-024's `studyGeb` and `studyTt` `titles` maps leave
with the others. WO-043 adds mined Art of War rows; their text registers
like every work's, and that order adds its work's title, scene label and any
new row type as messages. `readable()` turns a typed row's observable
sentence's full stop and hyphens into spaces (`reading-mapper.ts` line 34;
`inspector-mapper.ts` line 57); the registered English keeps today's
rendering so nothing on screen changes, and the executor boards the
wording with its location (rule 21). The Tools home loads one work when a
last reading exists, where today it loads none; the transfer is recorded in
step 12. A second language is a later order on the operator's word. No page
changes, so no paired comparison runs (rule 25). This order activates only
on a launchpad whose starter carries core WO-221's `--draft` form; the draft
pull request and its workflow runs are a final-review obligation read from
`docs/evidence/WO-035/preview-pr.json`, never a criterion. Before
`target-records`, the final reviewer commits the order's records on the
order branch so the launchpad commit the filed records' footer names holds
them (the profile's publish route, step 3; since starter v0.122.0 the
filing refuses a source that is uncommitted at the launchpad's `HEAD`).
`Target release classification: minor` and `Target release notes:
reviewed` are set under WO-012's declared policy.

**Non-goals:** a second language or a way to choose one; translating the
data files; rendering `analog.clause`; changing the reading's layout
(WO-038); the studies' authored messages (WO-028's); rewording the typed
rows' observables; the mining store and the app's API (candidate C1).

**Operator-review assumptions:** the operator accepts the rows as the one
source of the English, registered at run time with no committed catalog;
the work as the unit of registration; the fail-closed rule for a missing
message; the Tools home loading the last reading's work to name it; and
reads the one draft pull request before final review, which the final
publish reuses.
