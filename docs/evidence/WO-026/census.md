# WO-026 census

Every Markdown file Git tracks in the target at the base
`6268de9fc3cae84bf66091c1fbcc30d344411cd2`, from `git ls-files '*.md' '**/*.md'`, with
its kind and reason. The kinds are the four the order's Design names. Rows are in the
order the pass took them: the root page, the pairs, the other documents, the two
indexes, the library READMEs, then what the pass read but did not edit.

The Design's list was checked against the tree at activation and corrected here: the tree
holds 94 files, and the first list did not name the 33 READMEs under `libs/`. They are
standing documents, and on the operator's direction after the first handoff the order was
amended to pass them with the rest (WO-026-D013).

## Counts

| Kind | Files |
| --- | ---: |
| standing, the first list | 21 |
| standing, a library README | 33 |
| ledger | 1 |
| licence text | 1 |
| record | 38 |
| all | 94 |

## Standing documents, the first list

| Document | Kind | Reason | Outcome | Unresolved facts |
| --- | --- | --- | --- | --- |
| `README.md` | standing | the root page; a colleague opens it first | changed: leads with what the app is, the menu's three groups and their routes, the scene as the root, the board and the catalog; says the main checks rather than all; links the developer reference, the AI reference, the scripts reference and the two other pages in one list | none |
| `docs/dev-reference/architecture/foundation.md` | standing | the foundation libraries, for people; paired with its rule document | changed: opens on all six providers; names the mocked environment and `public-config.local.ts`; says what `en.json` owns, not a home heading; gives the utils files full paths; names the libraries without AnalogJS; drops the stale Vitest 4; links its rule document | none |
| `docs/ai-reference/foundation-rules.md` | standing | the foundation rules, for sessions; paired with its developer document | changed: its commands in the form that runs; one twelve-line bullet split into three | none |
| `docs/dev-reference/architecture/component-taxonomy.md` | standing | the component roles, for people; paired with its rule document | changed: wrappers join the Salesmen as WS-001 has them; the facade paragraph no longer says the board has no store or HTTP; selector prefixes stated for every feature; `scene-canvas` by path; links its rule document | none |
| `docs/ai-reference/component-rules.md` | standing | the component rules, for sessions; paired with its developer document | changed: stores in R6 and boarding in R7, as the workstream has them; the closing line names commands | none |
| `docs/dev-reference/architecture/events-and-state.md` | standing | events, stores and HTTP, for people; paired with its rule document | changed: opens on where state lives, with every store, its library, its provider and what persists; every event group by path; each storage key stated once; the Nx note and the layer tag moved to the conventions, and version statements `package.json` owns removed; the `sourcesFooter` flag and the mock handlers' entry named | none |
| `docs/ai-reference/state-rules.md` | standing | the state rules, for sessions; paired with its developer document | changed: where a feature store goes, by rule and example; `npm run lint:hygiene`; the closing lines name commands, say how a baseline changes and link the developer document | none |
| `docs/dev-reference/architecture/sub-apps.md` | standing | the one app and its features, for people; paired with its rule document | changed: the `/machinery` page described as a placeholder (WO-026-D004); a new section on how a feature library is laid out, with the board's files; the Catalog link and `/tools` stated; a new sub-app's upkeep of the two tables and of its READMEs, and real commands, in the steps | none |
| `docs/ai-reference/sub-app-rules.md` | standing | the sub-app rules, for sessions; paired with its developer document | changed: one line, to replace the generated READMEs (WO-026-D014); every other rule was true at the base and every command runs | none |
| `docs/dev-reference/architecture/scene.md` | standing | the soldier scene, for people; paired with its rule document | changed: says what keeps the engine pure and what does not; orphaned sentences folded in, and the objective's two rules split; a section on the page around the engine, which takes the mappers sentence out of the store's section; the fixture and the store by path; rule G4 linked; why the route provides a store it does not inject | none |
| `docs/ai-reference/scene-rules.md` | standing | the scene rules, for sessions; paired with its developer document | changed: the regeneration rule gains its Prettier step, found by running it (WO-026-D009), and says where to record why; one reference to the launchpad's workstream replaced by a link to rule G6 | none |
| `docs/dev-reference/architecture/catalog.md` | standing | the catalog, for people; paired with the mapping method and its rule document | changed: the shelf, contents, search and design paragraphs separated and their sentences moved where they belong; the Arrive study integrated under its own heading with its files; the join led by its file; the data, loader, store and facade by path; `sceneTransformKinds` stated; RxJS core and patterns corrected; one inventory sentence carries the counts (WO-026-D010); links its rule document | none |
| `docs/dev-reference/architecture/concept-mapping.md` | standing | how a concept is applied elsewhere, for people; paired with the catalog | changed: order identifiers in current-state sentences replaced by what is so, the one naming an order absent from the target included; the antecedent of two sentences restored; sound passages unchanged | none |
| `docs/ai-reference/catalog-rules.md` | standing | the catalog rules, for sessions; paired with its two developer documents | changed: the join named by its file with a link to its command (WO-026-D005); the five-faces bullet moved to the transform rules; the closing line names commands | none |
| `docs/dev-reference/architecture/console.md` | standing | the actor board | changed: one phrase, so the document shares the word Storybook; every path, digest and behavior was true at the base | none |
| `docs/dev-reference/architecture/performance.md` | standing | the performance policy | changed: one sentence, which called a past change the current repair | none |
| `docs/dev-reference/workspace/conventions.md` | standing | the house rules as they apply in this workspace | changed: the skipped numbers explained and rule 26 added; rule 19 states what a library's README says (WO-026-D014); `auth` out of the library list, noted as a type with no project; selector prefixes for every feature; rule 20 says the final publish reuses the draft; `ChildPaths` in rule 11, what `check:kits` enforces in rule 5; Prettier's paragraph moved from rule 21 to rule 13; the Nx 24 note and the layer tag moved in from the state document | none |
| `docs/dev-reference/workspace/scripts.md` | standing | every tool script with its purpose and status (rule 26) | changed: `typecheck:e2e` moved to the gate, settling `FUP-f8216ece83a3e7a6`; the gate and CI sentences match the registration and `ci.yml`, and the term is defined; what `parallel: 1` does; what `check:shared-types` and `check:scripts` cover; the purpose of `typecheck:foundations`; `tools/board-count.mjs` and the two lint rules named; the helpers' line says what CI runs | none |
| `docs/dev-reference/workspace/storybook.md` | standing | Storybook and the visual suite | changed: what the stories cover, with the toast as the exception and the sub-app pages added; what the visual suite covers; one word each for Storybook, the translations and the tool catalog | none |
| `docs/dev-reference/README.md` | standing | the developer reference index | changed: says what the workspace holds today; a table from a question to its document and a file; every library family in the table of paths; the app's providers and shell as they are; how unit tests run | none |
| `docs/ai-reference/README.md` | standing | the AI reference index | changed: a rule-26 line with what `npm run check:scripts` covers, and a line on replacing a new library's generated README (WO-026-D014); the rest was sound | none |

## Standing documents, the library READMEs

Each is a library's public page, passed against its library's public API (WO-026-D013). The
17 library READMEs say what the library is for, how it is imported and how it is tested. The
16 entry points say what they export and how they are imported, and `ui/menu` also says how
it is tested (WO-026-D014). Every command one names is
[in its own table](#commands-the-library-readmes-name).

| Document | Kind | Reason | Outcome | Unresolved facts |
| --- | --- | --- | --- | --- |
| `libs/dotln/shell/README.md` | standing | a library's own README | changed: names the menu, notices and not-found page beside the layout, its testing entry, its reference and lint | none |
| `libs/dotln/shell/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/features/board-data-access/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, what persists, its imports, its reference and lint | none |
| `libs/features/board-data-access/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/features/board/README.md` | standing | a library's own README | changed: opens on what the page is; its reference linked; facade kits, not token kits; lint added | none |
| `libs/features/board/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/features/machinery/README.md` | standing | a library's own README | changed: opens on the placeholder (WO-026-D004) rather than its exports; its entry points named | none |
| `libs/features/machinery/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/features/scene-data-access/README.md` | standing | a library's own README | changed: its imports, provider and export functions and a link to the store's section added; what `scene.md` holds no longer repeated | none |
| `libs/features/scene-data-access/testing/README.md` | standing | a library's own README | changed: how to use the kit added | none |
| `libs/features/scene/README.md` | standing | a library's own README | changed: opens on what the page is rather than its exports; its entry points named | none |
| `libs/features/scene/testing/README.md` | standing | a library's own README | changed: what the facade kit returns corrected; its other kits and how to use one added | none |
| `libs/features/tools/README.md` | standing | a library's own README | changed: opens on what the pages are; its entry points, the catalog rules and its commands added | none |
| `libs/features/tools/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/catalog/README.md` | standing | a library's own README | changed: opens on what it is; `CatalogToken` and `provideCatalog()` named; its commands added | none |
| `libs/shared/catalog/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/core/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its imports, its reference and lint | none |
| `libs/shared/core/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/data-access/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its imports, its reference and lint | none |
| `libs/shared/data-access/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/events/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its import, its references and its checks | none |
| `libs/shared/i18n/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its imports, its reference and its checks | none |
| `libs/shared/i18n/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/models/README.md` | standing | a library's own README | changed: the false statement corrected: the library has a test target, and it holds the catalog contract and app-state types as well as the board types; its references linked | none |
| `libs/shared/scene-engine/README.md` | standing | a library's own README | changed: its imports added | none |
| `libs/shared/scene-engine/testing/README.md` | standing | a library's own README | changed: names the builders it exports | none |
| `libs/shared/state/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its imports, its reference and lint | none |
| `libs/shared/state/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/ui/README.md` | standing | a library's own README | changed: opens on what it is rather than a list; the skins and the menu entry named, its references linked; a build command in place of a server that does not exit | none |
| `libs/shared/ui/menu/README.md` | standing | a library's own README | changed: how it is tested and its reference added | none |
| `libs/shared/ui/testing/README.md` | standing | a library's own README | changed: generator text replaced by the kits it exports and how to use one | none |
| `libs/shared/utils/README.md` | standing | a library's own README | changed: generator text replaced by what it holds, its imports, its reference and its checks | none |
| `libs/shared/utils/testing/README.md` | standing | a library's own README | changed: generator text replaced by what it returns | none |

## Ledger and licence text

| Document | Kind | Reason |
| --- | --- | --- |
| `docs/dev-reference/workspace/generator-log.md` | ledger | the append-only record of generator invocations rule 2 names; read for a broken link only |
| `THIRD-PARTY-NOTICES.md` | licence text | its notices are the licensors' words |

## Records

Each is an order's filed record, immutable, moved here by the launchpad's
`target-records`.

| Document | Kind | Reason |
| --- | --- | --- |
| `docs/dotln/evidence/WO-004/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-005/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-006/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-007/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-013/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-014/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-015/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/evidence/WO-019/decisions.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-004/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-005/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-006/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-007/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-013/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-013/FINAL-002.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-013/FINAL-003.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-014/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-015/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/final-reviews/WO-019/FINAL-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-004/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-005/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-006/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-007/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-007/VER-002.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-013/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-013/VER-002.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-013/VER-003.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-014/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-014/VER-002.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-015/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/verifications/WO-019/VER-001.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-004-scaffold-dotln-angular-workspace.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-005-foundation-libraries.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-006-component-taxonomy-shell-home.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-007-events-stores-data-access.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-013-sub-app-shell-and-menu.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-014-toolbox-catalog-pipeline.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-015-soldier-scene.md` | record | an order's filed record under `docs/dotln/` |
| `docs/dotln/work-orders/WO-019-catalog-as-content.md` | record | an order's filed record under `docs/dotln/` |

## The names the standing documents use

[The README's script](README.md#the-census-the-names-and-the-links) is the extraction and
the check for criterion 3. It takes every route, library alias, npm script,
`tools/scripts/*` file and other repository path out of the 54 standing documents and
looks each one up in the tree. Its last run printed:

```text
census: 94 tracked, 94 rows
names: 54 documents, 492 names
links: 122 repository links
0 problems
```

`grep -rlE "provideSceneTestKit|arriving page|tool-list" README.md docs/dev-reference docs/ai-reference`
prints nothing, the same pattern over the files `git ls-files 'libs/**/README.md'` prints finds
nothing, and the same search for `filter row` over all 54 documents finds nothing.

## Commands the rule documents name

Every command a document under `docs/ai-reference/` names, in the order they ran on the
final tree, one at a time from the target worktree on 2026-10-31, with a hash of
`git status` and `git diff` taken before and after each. The tree's hash was the same before
the first row and after the last. The order's Preflight lint runs with them. The commands that
follow `npm test` and `npm run e2e` for the same target read Nx's cache of that run, as
they would for a person running them second, and each target ran uncached once here.
`npm run catalog:join` is not in this table because no rule document names it as a
command: it needs a directory outside the repository (WO-026-D005).

| Command | Named by | Exit code | Tracked bytes |
| --- | --- | ---: | --- |
| `npm ci` | `README.md` | 0 | unchanged |
| `npx playwright install --with-deps chromium` | `README.md` | 0 | unchanged |
| `npx nx format:check` | `sub-app-rules.md` | 0 | unchanged |
| `npm run check:scripts` | `README.md` | 0 | unchanged |
| `npm run i18n:check` | `foundation-rules.md`, `sub-app-rules.md` | 0 | unchanged |
| `npx nx run-many -t lint` | the order's Preflight line | 0 | unchanged |
| `npm run lint` | `README.md`, `component-rules.md` | 0 | unchanged |
| `npm test` | `README.md`, `component-rules.md` | 0 | unchanged |
| `npm run build` | `README.md` | 0 | unchanged |
| `npm run format:check` | `README.md` | 0 | unchanged |
| `npm run test:tooling` | `README.md`, `catalog-rules.md` | 0 | unchanged |
| `npm run typecheck:e2e` | `README.md` | 0 | unchanged |
| `npm run lint:fixtures` | `README.md`, `component-rules.md`, `foundation-rules.md` | 0 | unchanged |
| `npm run check:templates` | `foundation-rules.md` | 0 | unchanged |
| `npm run check:tokens` | `foundation-rules.md` | 0 | unchanged |
| `npm run check:kits` | `foundation-rules.md` | 0 | unchanged |
| `npm run typecheck:foundations` | `foundation-rules.md` | 0 | unchanged |
| `npx nx run workspace-tools:lint` | `foundation-rules.md` | 0 | unchanged |
| `npm run lint:components` | `component-rules.md`, `sub-app-rules.md` | 0 | unchanged |
| `npm run lint:hygiene` | `state-rules.md`, `sub-app-rules.md` | 0 | unchanged |
| `npm run check:fixtures` | `sub-app-rules.md` | 0 | unchanged |
| `npx nx run-many -t lint test build` | `sub-app-rules.md` | 0 | unchanged |
| `npm run catalog:check` | `catalog-rules.md` | 0 | unchanged |
| `npm run catalog:report` | `catalog-rules.md` | 0 | unchanged |
| `npx prettier --write libs/shared/catalog/src/data` | `catalog-rules.md` | 0 | unchanged |
| `npx nx test catalog` | `catalog-rules.md` | 0 | unchanged |
| `npx nx test tools` | `catalog-rules.md` | 0 | unchanged |
| `npx nx test scene-engine` | `scene-rules.md` | 0 | unchanged |
| `npx nx test scene` | `scene-rules.md` | 0 | unchanged |
| `npx nx test scene-data-access` | `scene-rules.md` | 0 | unchanged |
| `WRITE_SCENE_FIXTURES=1 npx nx test scene-engine --skip-nx-cache` | `scene-rules.md` | 0 | the fixture reformatted; the next row restores it |
| `npx prettier --write libs/features/scene/src/testing/fixtures/trial-known-outcome.json` | `scene-rules.md` | 0 | restored, byte-identical to the base |
| `npx nx test events` | `state-rules.md` | 0 | unchanged |
| `npx nx test data-access` | `state-rules.md` | 0 | unchanged |
| `npx nx test state` | `state-rules.md` | 0 | unchanged |
| `npx nx test board-data-access` | `state-rules.md` | 0 | unchanged |
| `npm run check:bundle` | `component-rules.md`, `sub-app-rules.md` | 0 | unchanged |
| `npm run e2e` | `README.md`, `component-rules.md` | 0 | unchanged |
| `npx nx e2e dotln-e2e` | `scene-rules.md`, `sub-app-rules.md` | 0 | unchanged |
| `npx nx e2e-visual dotln-e2e` | `component-rules.md` | 0 | unchanged |

## Commands the library READMEs name

Every command a README under `libs/` names, run the same way on 2026-10-31 after the READMEs
were written. Nx reads a project's README as an input, so each test target ran afresh after
its README last changed rather than from the cache of the table above.

| Command | Exit code | Tracked bytes |
| --- | ---: | --- |
| `npm run catalog:check` | 0 | unchanged |
| `npm run check:fixtures` | 0 | unchanged |
| `npm run i18n:check` | 0 | unchanged |
| `npm run lint:hygiene` | 0 | unchanged |
| `npm run typecheck:foundations` | 0 | unchanged |
| `npx nx build-storybook ui` | 0 | unchanged |
| `npx nx e2e dotln-e2e` | 0 | unchanged |
| `npx nx lint board` | 0 | unchanged |
| `npx nx lint board-data-access` | 0 | unchanged |
| `npx nx lint catalog` | 0 | unchanged |
| `npx nx lint core` | 0 | unchanged |
| `npx nx lint data-access` | 0 | unchanged |
| `npx nx lint dotln-shell` | 0 | unchanged |
| `npx nx lint events` | 0 | unchanged |
| `npx nx lint i18n` | 0 | unchanged |
| `npx nx lint machinery` | 0 | unchanged |
| `npx nx lint models` | 0 | unchanged |
| `npx nx lint scene` | 0 | unchanged |
| `npx nx lint scene-data-access` | 0 | unchanged |
| `npx nx lint scene-engine` | 0 | unchanged |
| `npx nx lint state` | 0 | unchanged |
| `npx nx lint tools` | 0 | unchanged |
| `npx nx lint ui` | 0 | unchanged |
| `npx nx lint utils` | 0 | unchanged |
| `npx nx test board` | 0 | unchanged |
| `npx nx test board-data-access` | 0 | unchanged |
| `npx nx test catalog` | 0 | unchanged |
| `npx nx test core` | 0 | unchanged |
| `npx nx test data-access` | 0 | unchanged |
| `npx nx test dotln-shell` | 0 | unchanged |
| `npx nx test events` | 0 | unchanged |
| `npx nx test i18n` | 0 | unchanged |
| `npx nx test machinery` | 0 | unchanged |
| `npx nx test models` | 0 | unchanged |
| `npx nx test scene` | 0 | unchanged |
| `npx nx test scene-data-access` | 0 | unchanged |
| `npx nx test scene-engine` | 0 | unchanged |
| `npx nx test state` | 0 | unchanged |
| `npx nx test tools` | 0 | unchanged |
| `npx nx test ui` | 0 | unchanged |
| `npx nx test utils` | 0 | unchanged |
