# WO-044 — Find the studies: every studied concept two steps from the Tools home, through a link into each work and a list of the studied concepts by work and chapter, with studied counts beside the row counts in the contents and a mark on each nearby link whose concept has a study

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds one page, `/tools/studied` (`ChildPaths.Studied`), with its
container `containers/studied-page/`, its facade `facades/studied.facade.ts`,
its composite `composites/studied-list/`, the pure `studiedWorks` in
`libs/shared/catalog/src/lib/studied.ts` and the `studiedPageEvents` group
in `libs/shared/events`; edits the Tools home and its facade (a link into
each work, a link to the list), the catalog page (a `work` query it applies
once), `contentsFor` and `ToolsFacade` (studied counts per chapter and
section, the studied set handed to `mapStudy`), the contents list and the
study's nearby section (the counts and the mark), the catalog store's load
and summary handlers, `CatalogChapter`, `CatalogSection` and
`StudyView.nearby`, the `tools.` message keys in
`apps/dotln/public/i18n/en.json` and its testing copy, the specs, two
stories, the e2e and visual specs with the baselines the counts and marks
move, and the documents (`catalog.md` §Loading and state and §Reading and
studying, `catalog-rules.md`). The execution plan names 41 target files,
nine of them new, and two launchpad documents, besides the baselines and
the evidence; how many lines change is unknown until run. Adds no runtime
dependency, no study, no family and no tool script. Removes nothing from
the app but the decided-against candidate after each round. Wall-clock:
unknown until run, plus the design rounds and the fixed cycle. Context
bytes: the 32 target files the plan names that exist at `eb9d227`, with
`component-taxonomy.md`, measure 278,298 bytes (`wc -c`; the e2e spec
63,960 and `catalog.md` 44,399 of them); WS-001, `concept-study.md`, the
profile and the operator record measure 159,219 bytes; with this order, the
total an executor reads is unknown until run. Commands added in the target: none. Tokens: unknown
until run. Steps: 24. Re-mints: none. Refutations paid: this pass's
receipt.
**Nomination provenance:** the
[2026-11-09 pass](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md)
(D10), planner-synthesized from its review of the concept-study program:
the operator's dispatch of that day asked the pass to review every order
and to change, split, combine or add orders where the pass judged it right
(ignored capture `docs/intake/notes/planning-2026-11-09.md`, SHA-256
`646233c3dce8d049caefa3c0590b88beaf9f0a187dc7bfdce4c298d095179bfa`), and
the review found a hundred studies in the target that a reader cannot find
from the Tools home (the Observed gap). It serves two standing wants in
`docs/operator/README.md` §What the operator wants: depth in every concept
of the catalog, and pages they would use. Opaque identifier, not a
priority.
**Depends on:** WO-019 merged (hard: the catalog as something to read, the
shelf, the contents and the addressable reading this order makes findable;
merged as DotLn-Angular #8, released as `DotLn Angular v0.5.0`). WO-024
(reference-only: it adds the Gödel, Escher, Bach and Team Topologies
studies, which the studied list, the home's total and the contents' counts
show with no change here because they read the studies summary; whichever
lands later integrates the target's `main`).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-019",
    "relation": "hard",
    "reason": "the catalog as something to read: the shelf, the contents and the addressable reading this order makes findable"
  },
  {
    "workOrderId": "WO-024",
    "relation": "reference-only",
    "reason": "it adds two works' studies, which the studied list, the home's total and the contents' counts show with no change here because they read the studies summary; the later of the two to land integrates the target's main"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 9, 11, 16, 18, 24, 25 and 29; §Design: the Tipping Point
taxonomy; §The app and its sub-apps: §Design direction, G1, G3, G6);
`docs/operator/README.md` (§What the operator wants: depth in every concept
of the catalog; pages they would use); `docs/product/concept-study.md`
(§Several ways into the same idea: nearby concepts extend the reading);
`docs/repositories/dotln-angular.md` (§Run the app and its checks;
§Catalog and concept studies); the target's
`docs/dev-reference/architecture/catalog.md` §Loading and state and
§Reading and studying, `docs/dev-reference/architecture/component-taxonomy.md`
and `docs/ai-reference/catalog-rules.md`; the register row
`FUP-0fb531a975308a81` (`npm run plan -- followups --show FUP-0fb531a975308a81`).

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools from the menu, in the centre window or on the full screen. On arrival
they see the works, each a link with its concept count and its studied
count, and a link to the studied concepts that says how many there are.
They follow that link and see every studied concept on one page: one group
per work, each work's chapters in the book's order, the studied concepts
under each chapter as links. They open one, and its reading and study
open, two activations from the home. In the study they read the nearby
concepts and see which have a study of their own before they follow one.
Back at the home they follow a work, and the catalog opens with that work
chosen: beside each chapter's and section's row count the contents say how
many of its concepts are studied, where any are, and the reading area lists
the work's studied concepts. The concept links of the contents, the search results,
the studied list and a study's nearby concepts each say whether the concept
has a study. What the operator learns is where the studies sit across the
books and chapters and which nearby links lead to another study; what they
decide is which concept to read next and, from the counts, which chapters
the studies have not reached.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `studies-summary.json`
lists a hundred studies, forty in AI for Games and twenty each in
Enterprise Integration Patterns, Patterns of Enterprise Application
Architecture and RxJS; the filed batches (WO-024 in this workstream,
WO-029 to WO-032 on WS-002's research track) add more. A reader cannot
find them from the home (paths under `libs/features/tools/src/lib/` unless
written in full):

- The Tools home lists each work's title, row count and studied count as
  plain text (`libs/features/tools/src/lib/containers/tools-home/tools-home.ts`
  lines 18 to 28); its only links are the catalog (line 17) and the last
  reading (lines 33 and 35). No address names a work: `ChildPaths` has
  `Root`, `Catalog` and `Reading` (`libs/shared/core/src/lib/paths/routes.ts`
  lines 11 to 15), and a work is chosen only by the shelf's button
  (`composites/work-shelf/work-shelf.ts` line 15) into the stored reading
  state (`libs/shared/catalog/src/lib/catalog-store.ts` lines 75 to 86).
- The catalog search renders its results and its projected facets only
  while a query is typed (`composites/catalog-search/catalog-search.ts`
  line 16 wraps lines 17 to 32), and `searchReadings` returns nothing for
  an empty query and matches the title and the definition only
  (`libs/shared/catalog/src/lib/reading.ts` lines 106 and 116), so the
  studied facet (`facades/tools.facade.ts` line 111) lists nothing on its
  own.
- A chosen work's studied list sits in the reading area's invitation
  (`containers/catalog-page/catalog-page.html` lines 122 to 135), inside the
  `@else` at line 111 of `@if (state.selected; as tool)` at line 89, so it
  shows only while no concept is open.
- `contentsFor` gives each chapter `count: rows.length` (`reading.ts`
  line 98) and each section its tools; the contents list prints those
  (`composites/contents-list/contents-list.html` lines 17 and 34) and marks
  a studied concept only on its own row once its section is open (lines 48
  to 54). Neither count says how many rows are studied.
- A study's nearby concepts render as a link and a reason with no mark
  (`composites/study/study.html` lines 231 to 243; `mapStudy` carries the
  id, title and reason only, `mappers/study-mapper.ts` lines 129 to 132).
  Read against `studies-summary.json`, the hundred records name 472 nearby
  concepts, every one a row of the record's own work, and 243 of them have
  no study.

**Design:**

- **The brief** (WS-001 rule 25 under §Design direction): the subject is
  the studied concepts read as a table of contents across the books; works
  as groups in their work colour (`--dotln-work-<slug>`, the shelf's
  tokens); chapters in the book's order as small headings in the reading
  type; concepts as links, never a card grid or a label-value list (G6);
  counts as small labels beside what they count, as the shelf sets them;
  nothing animated (G2). At the operator's sizes the page uses the width
  rather than leaving a narrow strip between empty fields (rule 29); at 360
  it is one column.
- **The first pair.** A: the works side by side, one column per work at
  about 2080 and wider, wrapping to fewer columns as the width narrows and
  to one at 360. B: the works one after another in one column at the
  reading measure, each work a heading with its chapters beneath. One
  variable, whether the works sit side by side or one after another. Both
  rendered at about 2080 by 1460 and at 360 (rule 25), with 3840 by 1620
  rendered beside them (rule 29); A then B with the round named in the
  question and both captions; the operator's preference makes the next
  pair (whether a concept shows its section, and the form of a work's
  count, are the likely later variables); content, usability and
  usefulness before cosmetic polish; the rounds continue until the operator
  says the process is done, and the decisions file records each round's
  pair and pick; the rejected implementation leaves the code when its round
  is decided. The operator may delay the rounds to a dedicated A/B testing
  pass: the order then records its first pair without a pick, ships A and
  carries the rounds as a boarded follow-up for the planning pass that files
  that pass (rule 25). The home's links, the contents' counts and the nearby
  mark use the settled styles of the surfaces they join and run no pair;
  WO-019's decided rounds are not relitigated.
- **The studied page.** `/tools/studied` (`ChildPaths.Studied` in `core`,
  rule 11) under the Tools routes' shared catalog provider. The facade
  `StudiedFacade` composes the view model through the pure
  `studiedWorks(tools, summary)`: one entry per work in
  `summary.studies.works`, in that order, titled by `workTitle` (which falls
  back to the slug), its studied rows grouped by chapter in the order
  `contentsFor` gives. The works come from the summary `studies:check`
  writes from the records, never from a list of works, so a batch that
  adds a work's studies appears with no change here. The composite
  `studied-list` takes the works and `hrefFor` and emits `opened` on a
  plain click, as the contents list does, and injects nothing (R1); the
  container injects the facade and the router, renders the heading, the
  loading and failure states with Try again, and navigates to the reading
  on `opened` (R4). `studiedPageEvents` (`opened`, `retryRequested`) is the
  screen's own group in `@dotln-angular/events` (rule 16), heard by the
  catalog store's load and summary handlers, so the page shares the one
  store and its cached load with the catalog page.
- **The Tools home.** Each work's title is a link built with
  `buildRoute(BasePaths.Tools, { child: ChildPaths.Catalog, query: { work } })`,
  and a link to `ChildPaths.Studied` carries the summary's total. The home
  still reads only the two summaries and the stored history and requests no
  work's chunk. The catalog page binds `work` from the query and, once the
  catalog has loaded and no reading is addressed, chooses a work the
  catalog has through `ToolsFacade.chooseWork` and replaces the address
  with `/tools/catalog`, so Back returns to the home and the stored reading
  state stays the only owner of the chosen work; a slug the catalog does
  not have changes nothing, as the store's `workChosen` reducer already
  ignores it, and an addressed reading wins over the query.
- **The contents' counts.** `contentsFor(work, studied)` counts each
  chapter's and section's rows in the studied set (`CatalogChapter.studied`,
  `CatalogSection.studied`); the contents list shows the count beside the
  row count when it is above zero, as the shelf shows a work's.
- **The nearby mark.** `mapStudy` takes the studied set across every work
  and each nearby concept carries `studied`; the study renders the mark the
  contents and the search results already carry (`tools.contents.studiedGlyph`
  with `tools.contents.studied` as its text equivalent), and a concept with
  no study stays plain, so the glyph means one thing wherever it appears.
- **Strings.** Every string this order puts on screen is a `tools.` key in
  `apps/dotln/public/i18n/en.json` and its testing copy (rule 9); the work,
  chapter and concept titles render as the shelf and the contents render
  them today, the mined text rule 9 leaves to WO-035 until it lands.
- **The invitation's list** stays where it is: with a concept open, the
  contents' counts show where the studies are, and the studied page is one
  link from the home.

Rejected: the list on the Tools home itself (axis: what the home loads;
titles and chapters need the rows, while the home loads no work's chunk
(`ToolsHomeFacade`; `catalog.md` §Reading and studying) and an e2e case
asserts it, and a hundred links would bury the works); titles and places
copied into `studies-summary.json` so a list needs no rows (axis: one
source for the mined text; WO-035 puts the rows' text through the message
system from the catalog's own data, and a copy in the summary would be one
more surface outside it); results and facets shown with an empty query (axis:
scope; that is the explicit search controls of `FUP-0fb531a975308a81`,
deferred on the register since WO-019, and a list by work and chapter
answers finding the studies without changing search); the work as a path
segment the address owns (axis: the address model; today the address owns
the open reading and the stored state the chosen work, and moving the work
into the address changes Back and persistence for every shelf choice); a
second mark on an unstudied nearby concept (axis: one convention across
the contents, the search results and the nearby links).

Live-run surfaces at the base: the Tools home, the catalog page with its
shelf, contents, search and reading, and a hundred studies in four works,
all in the production build; `/tools/studied` does not exist at the base
and steps 9 to 11 create it.

**Deliverables:** the studied page with its route, facade, composite,
grouping function and event group; the home's links; the catalog page's
`work` query; the contents' studied counts; the nearby mark; the message
keys; the specs, stories, e2e cases and visual baselines;
`docs/evidence/WO-044/` with the design record, `walkthrough.md` and its
screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-044: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1. The decisions name the works the
   integrated `studies-summary.json` lists. Check: the decisions carry the
   integrated commit.
2. `libs/shared/models/src/lib/toolbox.ts`: `CatalogChapter` and
   `CatalogSection` gain `readonly studied: number`; new `StudiedChapter`
   and `StudiedWork` shapes, exported through `src/public_api.ts`. Check:
   `npx nx lint models` exits 0.
3. `libs/shared/catalog/src/lib/reading.ts`, `contentsFor`: a second
   argument, the studied set (empty by default), counted per chapter and
   section; `reading.spec.ts` gains the case. Check: `npx nx test catalog`
   exits 0.
4. New `libs/shared/catalog/src/lib/studied.ts`: `studiedWorks(tools,
   summary)` as the Design states, exported through `src/public_api.ts`;
   `studied.spec.ts` beside it, with a summary naming a work no code lists.
   Check: `npx nx test catalog` exits 0.
5. New `libs/shared/events/src/lib/ui/studied-page-events.ts`:
   `studiedPageEvents` (`opened`, `retryRequested`), exported through
   `src/public_api.ts`. Check: `npx nx test events` exits 0.
6. `libs/shared/catalog/src/lib/catalog-store.ts`: the reducer that clears
   the load failure, and in `withEventHandlers` the `load` and
   `summaryRequested` handlers, hear `studiedPageEvents.opened` and
   `studiedPageEvents.retryRequested` as they hear the catalog page's.
   Check: `npx nx test catalog` exits 0; `npm run lint:hygiene` exits 0.
7. `libs/shared/core/src/lib/paths/routes.ts`, `ChildPaths`: `Studied =
   'studied'`; `core.spec.ts` builds `/tools/studied`. Check:
   `npx nx test core` exits 0.
8. `apps/dotln/public/i18n/en.json` and its copy
   `libs/features/tools/testing/src/lib/tools-en.json`: the new `tools.`
   keys (the home's studied link, the studied page's heading and
   introduction, the contents' studied count), existing keys reused where
   they say the same thing. Check: `npm run test:tooling` exits 0.
9. New `libs/features/tools/src/lib/facades/studied.facade.ts`,
   `StudiedFacade`: dispatches `studiedPageEvents.opened()`, composes `vm`
   (the works from `studiedWorks`, the total, loading, failure) and
   `retry()`; `studied.facade.spec.ts` with a study of the fixture's Gödel,
   Escher, Bach row; `provideStudiedFacadeTestKit()` in
   `libs/features/tools/testing/src/lib/tools-test-kits.ts`, exported
   through the testing `public_api.ts`. Check: `npx nx test tools` exits 0;
   `npm run check:kits` exits 0.
10. New `libs/features/tools/src/lib/composites/studied-list/studied-list.ts`:
    inputs `works` and `hrefFor`, output `opened` on a plain click, no
    injection, candidate A's layout, with a story. Check:
    `npm run lint:components` exits 0; `grep -rn "inject("
    libs/features/tools/src/lib/composites/studied-list` prints nothing.
11. New `libs/features/tools/src/lib/containers/studied-page/studied-page.ts`
    with a story, routed by `libs/features/tools/src/lib/tools.routes.ts`
    (`{ path: ChildPaths.Studied, component: StudiedPage }`). Check:
    `npx nx test tools` exits 0; `npm run i18n:check` and
    `npm run check:templates` exit 0.
12. The first rendered pair (A side by side, B one after another) at about
    2080 by 1460 and 360 with 3840 by 1620 beside; the rounds, or the
    operator's direction to delay them; the rejected implementation removed
    with its record under `docs/evidence/WO-044/design/`. Check:
    `grep -c "Round" docs/evidence/WO-044/design/comparisons.md` is at
    least 1.
13. `libs/features/tools/src/lib/containers/tools-home/tools-home.ts`: each
    work's title a link with its `work` query, and the studied link with
    the total `ToolsHomeFacade.vm` (`facades/tools-home.facade.ts`) now
    carries; `tools-home.facade.spec.ts` asserts the total and that no work
    loads. Check: `npx nx test tools` exits 0.
14. `libs/features/tools/src/lib/containers/catalog-page/catalog-page.ts`:
    the `work` input and its one-time arrival as the Design states;
    `catalog-page.spec.ts` covers a known slug, an unknown one and an
    addressed reading. Check: `npx nx test tools` exits 0.
15. `libs/features/tools/src/lib/mappers/study-mapper.ts`, `mapStudy`: the
    studied set as a parameter and `studied` on each nearby concept
    (`StudyView.nearby` in `src/lib/types.ts`); `study-mapper.spec.ts` gains
    a studied, an unstudied and another work's concept. Check:
    `npx nx test tools` exits 0.
16. `libs/features/tools/src/lib/facades/tools.facade.ts`: `#contents`
    passes `#studied()` to `contentsFor`, and `#studyViewModel` passes it to
    `mapStudy`. Check: `npx nx test tools` exits 0.
17. `libs/features/tools/src/lib/composites/contents-list/contents-list.html`
    with its `.scss`: the studied count beside each chapter's and section's
    row count when it is above zero. Check: `npx nx test tools` exits 0.
18. `libs/features/tools/src/lib/composites/study/study.html`, with
    `DotlnIcon` in `study.ts`'s imports: the studied mark on a nearby link
    whose concept is studied; `study.spec.ts` asserts it. Check:
    `npx nx test tools` exits 0.
19. e2e `apps/dotln-e2e/src/catalog.spec.ts`: the cases of criteria 2, 4,
    5, 6 and 8, each reading its expectations from
    `libs/shared/catalog/src/studies/studies-summary.json`, the study
    records and the rows under `libs/shared/catalog/src/data/`. Check:
    `npm run typecheck:e2e` exits 0; `npx nx e2e dotln-e2e` exits 0.
20. `apps/dotln-e2e/src/catalog.visual.spec.ts`: the studied page at 360,
    768 and 1440; the baselines the counts and marks move regenerated, each
    named in the decisions with its reason. Check:
    `npx nx e2e-visual dotln-e2e` exits 0.
21. The walkthrough as WO-020 step 11, under `docs/evidence/WO-044/`, with
    screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
    Check: the files exist.
22. Documents: `docs/dev-reference/architecture/catalog.md` §Loading and
    state (the studied route, the `work` query, `studiedPageEvents`) and
    §Reading and studying (the home's links, the studied list and where its
    works come from, the contents' counts, the nearby mark, and the studied
    list as one more place the mined titles render for WO-035); and
    `docs/ai-reference/catalog-rules.md`, the Tools reading rule (the list
    from `studiedWorks` over the summary, never a list of works). Check:
    `grep -c "/tools/studied" docs/dev-reference/architecture/catalog.md`
    and `grep -c "studiedWorks" docs/ai-reference/catalog-rules.md` are
    each at least 1.
23. Dependency check as WO-015 step 15; `npm run check:bundle`; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
24. Launchpad write-back (`docs/repositories/dotln-angular.md` §Catalog and
    concept studies, the sentence that reads "`/tools` shows the works and
    the last reading" and the row "Page, facades and the addressable
    reading"; WS-001 §The app and its sub-apps, What has landed and what
    lies ahead, and §Delivery states by the final review), then the
    publish, review and records steps as WO-007 steps 15 to 17, with the
    branch `feat/find-the-studies`, the title `:sparkles: Make every
    studied concept two steps from the Tools home`,
    `docs/evidence/WO-044/` and `docs/final-reviews/WO-044/`. Check:
    `npm run test:docs` in the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run lint:hygiene`, `npm run check:kits`, `npm run i18n:check`,
`npm run check:templates`, `npm run test:tooling`, `npm run typecheck:e2e`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`,
`npx nx e2e-visual dotln-e2e`; in the launchpad order worktree
`npm run test:docs`; then the target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rules 24 and 29).** The verifier performs the Objective's
   session in the served production build at about 2080 by 1460 and at
   3840 by 1620: open Tools from the menu and read the works and the
   studied link; follow the studied link and, for each work the list
   shows, open one of its studied concepts and return to `/tools`, so each
   is reached in two activations from the home; in one study whose nearby
   concepts include both kinds, follow one marked and one unmarked nearby
   link and read what each opens; from the home follow a work with
   studies, read its chapter rows' studied counts, open a chapter and a
   section that hold a study and open that concept from the contents. The
   VER report carries a `## Walkthrough` section with the dated steps and
   screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620 under
   `docs/evidence/WO-044/walkthrough/`, and states in the verifier's own
   words which chapters of which works the studies cover, whether each
   nearby mark matched what its link opened, and whether any UI issue
   showed at either full size. Met only when every step completed, that
   statement is present and it names no UI issue at either full size.
2. **Two steps to every study.** `npx nx e2e dotln-e2e` runs a case that
   reads `libs/shared/catalog/src/studies/studies-summary.json` and asserts
   that `/tools` carries a link to `/tools/studied`; that `/tools/studied`
   shows one group per work the summary lists, in the summary's order, each
   headed by the work's title; that each group holds exactly one link per
   study id the summary lists for that work, ordered as the work's contents
   list them and set under its chapter's heading, each link's `href` the
   reading address `/tools/catalog/<id>`; and that following one opens that
   reading with its study. No step of the case types a query.
3. **The list comes from the study records.** `studied.facade.spec.ts`
   gives `StudiedFacade` a catalog test kit whose records include a study of
   the fixture's Gödel, Escher, Bach row (`sample:3`, a work with no study
   at the base) and asserts that `vm` lists that work with that concept
   under its chapter, and `tools-home.facade.spec.ts` asserts the home's
   total counts it, with the same kit;
   `grep -rnE --exclude='*.spec.ts' --exclude='*.stories.ts' "'(aifg|eip|poeaa|rxjs|geb|tt)'" libs/shared/catalog/src/lib/studied.ts libs/features/tools/src/lib/facades/studied.facade.ts libs/features/tools/src/lib/containers/studied-page libs/features/tools/src/lib/composites/studied-list`
   prints nothing; and criterion 2's case takes its works and ids from the
   summary alone, so a batch that lands first (WO-024's studies, if it
   merges before verification) is asserted by the same case.
4. **Each work links into it.** The e2e asserts that every work on `/tools`
   is a link; that following AI for Games' link opens the catalog page at
   `/tools/catalog` with AI for Games chosen on the shelf (`aria-current`),
   its contents shown and its studied concepts listed in the reading area;
   that the browser's Back then returns to `/tools`; that
   `/tools/catalog?work=` with a slug the catalog does not have changes
   nothing: opened with empty storage it shows no work chosen, and opened
   after AI for Games was chosen it keeps that choice; and that `/tools` still requests no work's
   chunk (the existing `tools-aifg` assertion holds).
5. **Studied counts in the contents.** `reading.spec.ts` asserts that
   `contentsFor` with a studied set gives each chapter and section the
   number of its rows in the set. The e2e, for each work the summary lists,
   asserts that every chapter row shows a studied count equal to the number
   of that chapter's rows whose ids the summary lists (computed in the case
   from the summary and the rows under `libs/shared/catalog/src/data/`),
   that a chapter with none shows no studied count, that every section row
   of one opened chapter with studies does the same, and that each row
   count still equals its number of rows.
6. **The nearby mark.** `study-mapper.spec.ts` asserts that a nearby
   concept in the studied set maps with `studied: true`, one outside it with
   `false`, and one in another work by the same set; the e2e opens a study
   whose record's `nearby` names both studied and unstudied concepts (chosen
   in the case from the records and the summary) and asserts that each
   nearby link whose concept the summary lists carries the studied mark with
   its text equivalent and each other carries none.
7. **Strings and roles.** `npm run i18n:check`, `npm run check:templates`
   and `npm run test:tooling` exit 0; every string this order puts on
   screen is a `tools.` key in `apps/dotln/public/i18n/en.json` and its
   testing copy, and the work, chapter and concept titles render as the
   shelf and the contents render them at the base (the mined text rule 9
   leaves to WO-035); `grep -rn "inject("
   libs/features/tools/src/lib/composites/studied-list` prints nothing; and
   `npm run lint:components`, `npm run lint:hygiene` and
   `npm run check:kits` exit 0.
8. **Keyboard and axe (rule 18).** The e2e asserts that Tab from the top of
   `/tools` reaches each work's link and the studied link; that on
   `/tools/studied` Tab reaches the concept links in the list's order and
   Enter on one opens its reading with focus in the reading region; and
   that axe at the board spec's threshold reports no serious or critical
   violation and the document does not overflow horizontally on `/tools`,
   `/tools/studied` and a contents page showing studied counts, at 360,
   768, 1440, about 2080 by 1460 and 3840 by 1620.
9. **The rounds (rule 25).** `docs/evidence/WO-044/design/comparisons.md`
   records the first pair (A the works side by side, B one after another),
   each rendered at about 2080 by 1460 and 360 with 3840 by 1620 beside,
   and then either every later round with its pick, the decisions file
   recording the operator's word that ended the rounds; or the operator's
   direction to delay the rounds to a dedicated A/B testing pass, captured
   in ignored intake and cited by digest in the decisions file, the first
   pair recorded without a pick, candidate A shipped and the rounds boarded
   in the decisions file for the planning pass that files that A/B testing
   pass. On either route the decisions file names each removed candidate's
   files and `ls` on each prints nothing.
10. **Baselines.** `npx nx e2e-visual dotln-e2e` exits 0 with baselines of
    `/tools/studied` at 360, 768 and 1440, and every baseline under
    `apps/dotln-e2e/src/visual-baselines/` that differs from the integrated
    base is named in the decisions file with the change that moved it (the
    contents' counts or the nearby mark).
11. **Weight.** `npm run check:bundle` passes and `package.json`'s
    `dependencies` keys equal the integrated base's.
12. **Documents.** `docs/dev-reference/architecture/catalog.md` §Loading and
    state names `ChildPaths.Studied`, the `work` query and
    `studiedPageEvents`, and §Reading and studying describes the home's
    links, the studied list and where its works come from, the contents'
    counts and the nearby mark (`grep -c "/tools/studied"
    docs/dev-reference/architecture/catalog.md` is at least 1);
    `docs/ai-reference/catalog-rules.md` states that the list comes from
    `studiedWorks` over the studies summary (`grep -c "studiedWorks"
    docs/ai-reference/catalog-rules.md` is at least 1).
13. `node scripts/target-gate.mjs WO-044 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-044/README.md`,
`design/`, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-044/host-qualification.md`.

**Known issues and carry-ins:** The register row `FUP-0fb531a975308a81`
(explicit catalog search controls: visible filtering and sorting, the
active filters shown and removable, result counts, an optional
current-book preset the reader keeps or removes, cross-book search kept)
was read by the filing pass; this order leaves it. It changes no search
control and no ranking or matching: the studied list answers finding the
studies without a query, and the row's own reopening conditions stand.
WO-024 adds the Gödel, Escher, Bach and Team Topologies studies; whichever
of the two lands first, the studied list, the home's total and the
contents' counts read them from the summary, and the e2e expectations come
from the summary the integrated base carries. WO-035, sequenced after this
order, routes the mined titles through the translator; the studied list
and the home's work links are two more places those titles render, and
step 22 names them in `catalog.md` §Reading and studying for its executor.
WO-038 edits the catalog page's layout, the study composite's sizing and
`catalog.visual.spec.ts`, and WO-018 adds `ChildPaths.Toys` and a Tools
home item; the later of each pair to land integrates the target's `main`
and regenerates the baselines the other moved. WO-037, beside this order
in the sequence, works in the scene and types five AI for Games rows in
`tools-aifg-a.json`; this order reads those rows' ids and places, not their
types, and the two otherwise meet at most in different blocks of
`apps/dotln/public/i18n/en.json` (rule 9 puts its new scene strings in the
scene block) and in different sections of the profile; the later to
publish integrates the target's `main`. The rounds need the
operator; their only other route is the operator's direction to delay
them (rule 25). This order activates only on a launchpad whose starter
carries core WO-221's `--draft` form; the draft pull request and its
workflow runs are a final-review obligation read from
`docs/evidence/WO-044/preview-pr.json`, never a criterion. Before
`target-records`, the final reviewer commits the order's records on the
order branch so the launchpad commit the filed records' footer names holds
them (the profile's publish route, step 3). `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** a study page's content and new studies; search ranking or
matching, and the explicit search controls of `FUP-0fb531a975308a81`,
results and facets without a query among them; the mined titles'
translation (WO-035); marks on the reading's related links, the reading
history and the home's last-reading link; the work as part of the
address; the shell's menu; the reading's and the shelf's look (WO-038).

**Operator-review assumptions:** the operator judges the first pair at the
centre window and ends the rounds in their own words, or delays them to a
dedicated A/B testing pass; accepts that the studied page loads the
catalog's rows as the catalog page does while the home still loads none;
accepts that the list's titles stay mined text until WO-035; and reads the
one draft pull request before final review, which the final publish
reuses.
