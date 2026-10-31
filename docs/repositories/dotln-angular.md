# dotln-angular — repository profile

| Fact | Value |
| --- | --- |
| Repository class | `angular-nx-monorepo` |
| Base branch | `main` |
| Application | `apps/dotln`, with its browser tests in `apps/dotln-e2e` |
| Evidence root | `docs/dotln/` in the target |
| Workstream | [WS-001](../workstreams/WS-001-dotln-angular.md), which holds the outcome, the house rules and the component taxonomy |
| Last reviewed target source | `6268de9fc3cae84bf66091c1fbcc30d344411cd2`, WO-015's merge (#9), 2026-10-30 |
| Latest target release | `DotLn Angular v0.6.0`, published 2026-10-30 from that merge |

A session on an order whose `**Repository:**` line names `dotln-angular` reads this
profile. The profile is the repo-native convention authority for sessions acting in
`DylanBWood/DotLn-Angular`, and the launchpad that registers the repository owns
it. Authority comes from the registration in
[dotln.config.json](../../dotln.config.json) and the operator grant in
[grants.json](../../packages/skeleton/loadouts/grants.json); nothing written here
widens either.

Facts about the target are as of the last reviewed source above, except the rules
on `main`, which carry their own date. At a later commit the target's own files
win: a role that finds a difference follows the target and says so in its handoff,
so the next pass can bring this profile up to date.

## What this repository is for

DotLn-Angular does two jobs at once. It is the workspace a colleague should
recognize as the way the operator builds Angular, and it carries the operator's
sandbox, one app with sub-apps behind a menu. Every new idea lands there first as
a toy the operator plays with, and what works is promoted as a GitHub issue on the
platform's repository.

The menu has three groups today. **Scene** is the soldier scene at the root
route. **Machinery** holds the actor board at `/board` and a placeholder page at
`/machinery`. **Tools** links the catalog at `/tools/catalog`, six works read as a
shelf, contents and a reading; `/tools` is a home page above it.

The app owns its data and its API. The board keeps the `uifa-board-v1` response
shape as its own contract; the platform's resident and its token are not a data
source, and a copied, versioned contract does not make the launchpad a runtime
dependency. Until the mining store exists, committed data files are the stopgap
(rule 23).

WS-001 owns the delivery state. Read its rules 22 to 26 before changing a page or
a tool: sub-apps, the sandbox's data boundary, acceptance by use, how the operator
chooses the look through rendered comparisons, and what a tool script must earn.
Member orders keep the target's `docs/dev-reference/` and `docs/ai-reference/`
current. A green gate is required and is not acceptance: a page is accepted by use
(rule 24).

Guards belong to WO-008, the records and replay libraries and the machinery view
to WO-016, the twin model to WO-017 and the toy shelf to WO-018. None of them
exists at the reviewed source, so read those orders and WS-001 before assuming
otherwise.

## Run the app and its checks

Before building, an executor brings its two worktrees, the target's and the
launchpad's, up to date. A target worktree created on a provisional base
fast-forwards to the target's `main` before it builds on the predecessor's merge
(WO-014-D001). After a starter update merges, this launchpad's `main` is integrated
into the order's launchpad worktree and its harness re-emitted (WO-019-D022, D023).

To run the app, in the target worktree:

```sh
npm ci
npx nx serve dotln
```

`npm start` is the same command. Open the address Nx prints. The root redirects
to `/scene`, which shows **The soldier scene**; `/board` shows **The actor board**
through the app's mocked HTTP API. No environment file, external API or account
is required: MSW 3 answers the app's own API in development and in the optimized
`mocked` configuration, serving the unchanged `uifa-board-v1` fixture.

`.env.example`, `npm run env:prime` and the `local` serve configuration carry
public local settings for whoever wants them. Production excludes the mock worker
and the fixtures and reports HTTP unavailability when its configured API is
absent.

### Registered gate

Run `node scripts/target-gate.mjs WO-NNN` from the launchpad root for the plain
selection, and add `--review` for the review selection. It runs these commands in
the order's target worktree. The registration prefixes each with
`env NX_DAEMON=false NX_ISOLATE_PLUGINS=false`, which keeps plugin workers in
process, and binds it to the non-ignored bytes before and after, so a command that
changes a tracked file fails the gate.

| Check | Command | Selection | Notes |
| --- | --- | --- | --- |
| Install | `npm ci` | plain and review | Node version from `.node-version`; the operator uses fnm |
| Lint | `npx nx run-many -t lint` | plain and review | also runs the workspace checks below |
| E2e types | `npm run typecheck:e2e` | plain and review | `tsc` over the Playwright sources |
| Unit tests | `npx nx run-many -t test` | plain and review | Vitest, no watch |
| Format | `npx nx format:check` | plain and review | |
| Build | `npx nx run-many -t build` | review | |
| Browser tests | `npx nx run-many -t e2e` | review | Chromium; optimized mocked app, Storybook behavior and axe checks |
| Visual tests | `npx nx e2e-visual dotln-e2e` | review | tracked macOS pixel baselines |

The package scripts `lint`, `test`, `format:check`, `build` and `e2e` mirror those
Nx commands. Playwright starts its own server at `http://127.0.0.1:4200`, refuses
to reuse an existing process, and checks the heading, document title and absence
of page errors. The e2e target builds the local Storybook as a dependency.
Baselines under the e2e source tree are tracked inputs, not disposable output.

The `workspace-tools` project's uncached `lint` target runs, in this order,
`check:templates`, `check:tokens`, `check:kits`, `i18n:check`,
`typecheck:foundations`, `test:tooling`, `lint:components`, `check:shared-types`,
`check:fixtures` (the board and scene fixtures, then `catalog:check`),
`lint:hygiene` and `check:scripts`, so the registered gate exercises them through
its lint command.

Every tool script states its purpose and whether it runs in a gate, as a helper
or as a module in the target's `docs/dev-reference/workspace/scripts.md`, and
`check:scripts` refuses an npm script or a file directly under `tools/scripts` that the
document does not name (rule 26). These helpers run outside the gate:

| Helper | What it is for |
| --- | --- |
| `npm run check:bundle` | builds production, asserts route placement and reports package attribution; CI runs it |
| `npm run perf:sample` | records controlled local journeys; the target's performance guide separates these from field Core Web Vitals and leaves ordinary calibration to the implementing session |
| `npm run boards` | counts `// BOARDED:` comments; CI prints the count |
| `npm run lint:fixtures` | proves a forbidden dependency or role is rejected, when lint policy changes |
| `npm run env:prime`, `npm run build:configured` | validate public settings and build the `configured` profile |

CI is `.github/workflows/ci.yml`. Its `checks` job runs `nx format:check`, the
workspace checks once (`nx run workspace-tools:lint`), `typecheck:e2e`, `boards`,
`check:bundle` and the affected projects' lint, test, build and e2e. Its `visual`
job runs the visual suite on macOS.

The gate runs `typecheck:e2e` because ESLint does not type-check and Playwright
strips types, so a type error in an e2e spec would otherwise pass every other command
and fail only in CI, as it did on WO-015's pull request (the target's
`docs/dotln/evidence/WO-015/decisions.md`, D022). `check:bundle` and `boards` stay
CI's. The target's `docs/dev-reference/workspace/scripts.md` lists the same gate; the
registration lives in the launchpad, so a change to one is written back to the other.

### Why Angular's additional disk cache is disabled

Installed Angular 22.2.3's `node_modules/@angular/build/src/utils/normalize-cache.js`
resolves a relative CLI cache path through a linked worktree's common Git
directory to the clone's base checkout, so a worktree would share the base
checkout's cache. The target's `nx.json` therefore disables that cache
(WO-005-D013). Nx caching stays in `.nx/cache`, and Vite uses Angular's separate
local path inside the worktree.

`@angular/build` enables the dev server's dependency prebundling only while that
cache is enabled, so `nx serve` reports prebundling disabled and e2e serves the
optimized `mocked` build instead. An absolute cache path would keep both at the cost
of machine-specific configuration. Reopen this choice when Angular supports a
portable worktree-local cache setting or when dev-server rebuild time becomes a
concern.

## Find the implementation

Orders filed before this profile took its present shape call this section
Demonstrated architecture. Paths are relative to the target repository at the last
reviewed source. The taxonomy and its dependency rules live in WS-001. These are the
demonstrated places to read before adding the next one, not an outline to copy into
every feature. Where each area came from is under
[§Releases and where each area came from](#releases-and-where-each-area-came-from).

### App shell and shared foundations

| Responsibility | Source |
| --- | --- |
| Standalone bootstrap | `apps/dotln/src/main.ts` |
| App provider composition | `apps/dotln/src/app/app.config.ts` |
| Projected shell and lazy routes | `apps/dotln/src/app/app.ts`, `apps/dotln/src/app/app.routes.ts` |
| Zoneless, router and fetch HTTP providers | `libs/shared/core/src/lib/providers/provide-dotln-core.ts` |
| Typed environment and token | `libs/shared/core/src/lib/environment/environment-config.ts` |
| Route enums, builder and base-path token | `libs/shared/core/src/lib/paths/routes.ts`, `libs/shared/core/src/lib/paths/app-base-path.ts` |
| Reusable i18n | `libs/shared/i18n/src/lib/provide-i18n.ts` |
| Application i18n adapter | `libs/shared/core/src/lib/i18n/provide-dotln-i18n.ts` |
| House utility declarations | `libs/shared/utils/src/lib/ramda/filter.ts`, `libs/shared/utils/src/lib/ramda-adjunct/is-non-empty-string.ts` |
| Test kits | `libs/shared/core/testing/src/lib/core-test-kits.ts`, `libs/shared/i18n/testing/src/lib/i18n-test-kits.ts` |

Core depends on shared i18n; shared i18n stays independent of core. The test kits
are exported through each library's `testing` secondary entry point. The utility
declarations are backed by upstream-derived runtime examples and separate compiler
assertions, and the house R/RA entry points expose application-used functions only.

### House roles and navigation

| Role or responsibility | Demonstrated source |
| --- | --- |
| Fragment | `libs/shared/ui/src/lib/fragments/badge/badge.ts` |
| Template | `libs/shared/ui/src/lib/templates/button/button.ts` |
| Wrapper over a behavior library | `libs/shared/ui/src/lib/wrappers/tabs/tabs.ts` |
| Wrapper over a drawing API | `libs/features/scene/src/lib/wrappers/scene-canvas/scene-canvas.ts` |
| Composite | `libs/features/board/src/lib/composites/board-row/board-row.ts` |
| Layout | `libs/dotln/shell/src/lib/layouts/app-layout/app-layout.ts` |
| Mapper | `libs/features/board/src/lib/mappers/cell-value-mapper/cell-value-mapper.ts` |
| Container | `libs/features/board/src/lib/containers/board-page/board-page.ts` |
| Facade | `libs/features/board/src/lib/facades/board.facade.ts` |
| Store | `libs/features/board-data-access/src/lib/board-store.ts` |
| UI event group | `libs/shared/events/src/lib/ui/board-page-events.ts` |
| Sub-app menu | `libs/dotln/shell/src/lib/templates/sub-app-menu/sub-app-menu.ts`, `sub-app-menu-group.ts` beside it |
| Lazy sub-app routes | `libs/features/scene/src/lib/scene.routes.ts`, `libs/features/board/src/lib/board.routes.ts`, `libs/features/machinery/src/lib/machinery.routes.ts`, `libs/features/tools/src/lib/tools.routes.ts` |
| Shell notices | `libs/dotln/shell/src/lib/containers/shell-notices/shell-notices.ts` |
| Not-found page | `libs/dotln/shell/src/lib/containers/not-found-page/not-found-page.ts` |

The app projects the menu's groups and router links; the menu owns the navigation
landmark, and the group owns its list fallback. Machinery's placeholder container,
`MachineryArrivingPage`, composes the house empty-state template. The final wildcard renders a translated
not-found page with a link back to the scene. A wrapper may own a browser drawing
API, as the target's `docs/dev-reference/architecture/component-taxonomy.md`
records.

Storybook lives in `.storybook/` and component-local stories, and
`docs/dev-reference/workspace/storybook.md` describes it. `eslint.config.mjs`,
`tools/check-taxonomy-fixtures.mjs`, `tools/scripts/check-component-order.mjs` and
`tools/scripts/check-shared-types.mjs` enforce the roles and conventions, and
`tools/check-lint-fixtures.mjs` runs the isolated dependency fixtures.

### The soldier scene

`docs/dev-reference/architecture/scene.md` holds the scene's rules.

| Responsibility | Source |
| --- | --- |
| Pure engine, tagged `type:util` so every later scene reuses it | `libs/shared/scene-engine/src/lib/` |
| Reading a catalog tool through its parameter names, with no code per tool | `libs/shared/scene-engine/src/lib/interpreter.ts` |
| A live run and its replay, kept the same | `libs/shared/scene-engine/src/lib/run.ts` |
| Pinned frame hashes for a run | `libs/features/scene/src/testing/fixtures/trial-known-outcome.json` |
| Page, facade and mappers | `libs/features/scene/src/lib/containers/scene-page/scene-page.ts`, `libs/features/scene/src/lib/facades/scene.facade.ts`, `libs/features/scene/src/lib/mappers/` |
| Rail of the sixteen tools the engine runs | `libs/features/scene/src/lib/composites/toolbox-rail/toolbox-rail.ts`, `libs/features/scene/src/lib/mappers/rail-mapper.ts` |
| Renderer seam, with text and null painters beside it | `libs/features/scene/src/lib/renderers/scene-renderer.ts` |
| Canvas painter behind the drawing wrapper | `libs/features/scene/src/lib/wrappers/scene-canvas/canvas-scene-renderer.ts` |
| Scene store and persisted compositions | `libs/features/scene-data-access/src/lib/scene-store.ts`, `libs/features/scene-data-access/src/lib/stored-scene.ts` |
| Field skin | `libs/shared/ui/src/styles/_field-skin.scss` |

A run is a seed and a list of steps. The sixteen tools are the catalog's rows whose
transform kinds the interpreter runs: eight `steer.blend`, two `steer.priority`,
one `formation.fixed` and five `formation.twoLevel`. A later painter changes
neither the engine nor the feature. The field skin is a token layer under
`[data-skin='field']` over the plain skin, reaching the shell around the page
through `html:has()`; `[data-full-bleed]` in the app's styles is the one rule that
is not a token.

### Board data and state

The board reads the app's own `GET <apiBaseUrl>/uifa-board-v1` through the API, the
store, the facade and the container. MSW answers it in development and tests.
Production shows unavailable on HTTP failure.

| Responsibility | Source |
| --- | --- |
| Board API | `libs/features/board-data-access/src/lib/board-api.ts` |
| MSW handlers and the fixture | `libs/features/board-data-access/testing/src/lib/board-handlers.ts` |
| Interceptors | `libs/shared/data-access/src/lib/interceptors.ts` |
| Persisted state, and the browser binding beside it | `libs/shared/data-access/src/lib/with-persisted-state.ts`, `libs/shared/data-access/src/lib/storage-token.ts` |
| App stores | `libs/shared/state/src/lib/` |
| Unit and browser checks | `apps/dotln/src/app/app.spec.ts`, `apps/dotln-e2e/src/board.spec.ts`, `apps/dotln-e2e/src/storybook.spec.ts` and the `*.visual.spec.ts` files |

### Catalog and concept studies

The catalog is eight checkpoints supplying 3,463 definitions with source places,
relations, hooks and verification notes, across six works.

| Responsibility | Source |
| --- | --- |
| Contract | `libs/shared/models/src/lib/toolbox.ts`, the closed `tool-v1` schema in `libs/shared/catalog/src/schema/` |
| Data | `libs/shared/catalog/src/data/` |
| Join over the source maps | `tools/scripts/catalog/join-maps.mjs` |
| Loader and provider seam | `libs/shared/catalog/src/lib/catalog-loader.ts`, `libs/shared/catalog/src/lib/catalog-token.ts` |
| Reading state | `libs/shared/catalog/src/lib/catalog-store.ts` |
| Tools routes | `libs/features/tools/src/lib/tools.routes.ts` |
| Page and facade | `libs/features/tools/src/lib/containers/catalog-page/catalog-page.ts`, `libs/features/tools/src/lib/facades/tools.facade.ts` |
| Reading mapper | `libs/features/tools/src/lib/mappers/reading-mapper/` |
| The authored Arrive study | `libs/features/tools/src/lib/composites/arrive-study/`, `libs/features/tools/src/lib/arrive-example.ts` |
| Menu composition | `libs/shared/ui/menu/`, imported as `@dotln-angular/ui/menu` |

`join-maps.mjs` validates all eleven declared source digests before writing and
resolves only unique exact relation titles within a work; schema, inventory and
relation checks cover the generated data. The loader keeps a `tool-v0` compatibility
reader for one release and the explicit `CatalogToken` provider seam. `/tools`
shows the works and the last reading; `/tools/catalog` composes the shelf, contents,
reading, search facets and history through its event-backed facade. The last ten
readings and the chosen location persist; the search query and the back stack do
not. Reading mappers present the full source definition and application faces as
prose.

The Arrive study is authored separately from the source data. It adds a
time-scrubbed motion illustration, ordinary and RxJS pseudocode, limits and public
references. Standalone explanations use Angular `@defer` on first expansion:
closed sections create no explanation view, and visited sections keep theirs on
collapse. The design comparisons and their outcome are in the launchpad's
[`docs/evidence/WO-019/design/`](../evidence/WO-019/design/). Menu behavior and its
small controlled filter composite stay on the lazy Tools path, with overlay
providers supplied there instead of through the eager UI provider.

`docs/dev-reference/architecture/concept-mapping.md` records the UIFA engineer's
exploration purpose, cross-area metaphors, diagnostic mappings, RxJS modelling and
candidate graduation to platform behavior. A tool's typed status measures its
current toy contract, not its conceptual usefulness.

## Publish a change

Branches are `wo-NNN` while an order runs, which the launchpad creates, and
`<type>/<slug>` for the published change. Pull requests target `main` and merge
with a merge commit whose message is the pull-request title. A session never
pushes to `main` or merges, and repository settings change only where an order the
operator dispatched names the setting (WO-010). The registration permits
`repo.push`, `pr.open`, `pr.thread.resolve` and `release.close` through the
operator grant `operator.dotln-angular.publication`; package publication is
denied.

Commits are conventional and in the present imperative. Under rule 20 a member's
pull-request title carries both a type and a gitmoji for now: write
`type(scope)?: subject`, and `.github/workflows/pr-title.yml` runs
`tools/pr-title.mjs`, which validates that form and prepends the type's gitmoji
from `.github/gitmoji-map.json`.

The route, draft at verified, is:

1. The session that records `verification-result pass` runs the publish helper
   from the launchpad root with `--draft`:

   ```sh
   node scripts/worktree.mjs publish WO-NNN --target-worktree --draft --branch <type>/<slug> --title <title> --body-file <path>
   ```

   It commits from the tree, pushes the branch and opens a draft pull request for
   the operator and an automated reviewer.
2. Final review collects the pull request's threads into the order's
   `preview-pr.json` and gives each a route.
3. After `final-review-result pass`, `npm run resume -- target-records` moves the
   order's decisions and reports into the target's `docs/dotln/` as one records-only
   commit.
4. The publish helper of step 1, without `--draft`, then reuses the branch and the
   pull request and marks it ready. The launchpad's own records go up in their own
   pull request.

The kit admits only that `node` spelling for a registered target, run plainly from
the launchpad root at the phases that make the draft and closed forms legal. Raw
`git`, `gh` and `npm` forms, `npm run worktree -- publish` included, receive no
registered-target admission, and a helper hidden by a pipe, a redirect, a `cd` or
a variable prefix gets a near-miss advisory and no admission; both are left to
host permissions.

The admission compares only the registration's publication fields (`baseBranch`,
`authorityProfile`, `release`, the roots) and the grants file with `main`'s
committed bytes, so an order that edits its own gate command still publishes. The
publish describes the change from the merge base of the subject and the target's
`main`, and review lint reads the same range, so an order may activate on a
provisional base and publish right.

Each target order's host-qualification record names the exact publish invocation
it ran, the hook's decision and the host's. A prompt or a denial reopens the
literal-host-rules fallback through a self order.

### Public text and contribution checks

Launchpad identifiers (`WO-NNN`, `WO-NNN-DNNN`, `FUP-<16 hex>`, `VER-NNN`,
`FINAL-NNN`, `REVIEW-NNN`, `WS-NNN`) refuse in the branch, the commits, the title
and the composed body, so an order's commits name their change and not the order.
The launchpad's `docs/control/outward-vocabulary.json` lists `reviewTerms`, empty,
so `launchpad`, `gem` and `mask` are ordinary words here. Each private local-terms
line carries a `refuse:` or `review:` mode, and a review item refuses the publish
until the reviewer confirms the printed digest with
`--confirm-terms sha256:<digest>`.

The launchpad's `contributions.operatorAuthor` declares the public author identity
read from `git log --no-merges -1 --format='%an <%ae>' main`. The launchpad's
`worktree publish` helper compares every commit author in `origin/main..HEAD` with
that declaration: the operator's own commits need no sign-off, and every other
author needs a matching `Signed-off-by` trailer. Mutable Git configuration grants
no exemption, and the target publish route itself does not run that rule.

### Rules on `main`

As read back on 2026-10-20, the active ruleset targets the default branch with no
bypass actors. Its `pull_request` rule accepts merge commits only,
`required_status_checks` requires the `checks` run from GitHub Actions (app
15368), `non_fast_forward` refuses force pushes and `deletion` refuses branch
deletion. No approving review is required, and the repository deletes a pull
request's head branch on merge. The [active branch rules](../evidence/WO-010/readback-dotln-angular.json)
and [ruleset and repository-setting readbacks](../evidence/WO-010/README.md) record
the applied policy; neither is a fresh inspection of the account's settings.

## Close a release and handle local files

### Release close

The registration declares `release: { "policy": "declared", "displayName": "DotLn Angular" }`.
A target order's release close creates an annotated tag and a GitHub Release
titled `DotLn Angular <tag>`, whose annotation opens with the same title;
[§Releases and where each area came from](#releases-and-where-each-area-came-from)
lists them. The close is authorized to tag and publish the Release under the
operator's direction of 2026-10-19; merging, repository settings and package
publication remain with the operator.

The close reads the launchpad's merged `main` registration and grant, removes the
worktree and the branch, and keeps its retained record under the launchpad's
ignored control directory. Until core's WO-237 lands it removes the order's
session journals with the worktree (`FUP-64d1967b092ea18a`).
`**Target release notes:** reviewed` on the order makes the Release body the
order's reviewed `RELEASE-NOTES.md` at the merged revision, linted as a target's
text.

### Check the release classification before activation

Every `dotln-angular` order must carry exactly one
`**Target release classification:**` header naming `patch`, `minor` or `major` on
the same line. Run both counts; each must print 1:

```sh
grep -c '^\*\*Target release classification:\*\*' <order>
grep -cE '^\*\*Target release classification:\*\*[[:space:]]*(patch|minor|major)([^[:alnum:]_]|$)' <order>
```

Counting recognized values alone misses a second header with a malformed value.
The kit checks recognized headers only at close, so the before-start check also
rejects that malformed duplicate, which is boarded in
[WO-012-D008](../evidence/WO-012/decisions.md#wo-012-d008).

### What close deletes, retains or refuses

`baseDisposablePolicy: "judge-only"` keeps the clone's base-checkout output after
the same ignored-material and filesystem judgment. The target worktree's declared
disposable output is still deleted. `loadConfig` composes the class's declaration,
`classes.angular-nx-monorepo.disposable` in `dotln.config.json`, into this sorted
list:

```json
[".angular",".nx","__screenshots__","coverage","dist","docs/control/local/harness/memory-incidents.jsonl","node_modules","out-tsc","playwright-report","test-output","test-results","tmp"]
```

The entries are relative to each checkout, not directory-name globs:
`test-output/result.json` is covered, while
`apps/example/test-output/result.json` is not. The scaffold's build and the Nx
Playwright preset use paths under root `dist`; a later generator or configuration
that introduces nested output must identify its exact path before extending the
declaration. Never declare `apps/` or `libs/` as disposable. The preview and the
close receipt name the base policy and the retained output, and keeping
dependencies and caches avoids the base reinstall the default `delete` policy
requires.

The bounded probe wrapper can create
`docs/control/local/harness/memory-incidents.jsonl` in the target worktree. Treat
it as private: ignore it and exclude it from review packets. Only that exact
generated file is disposable, not the surrounding local-control directory.

These stay undeclared, and an undeclared ignored file refuses close in either
checkout:

- `.env` and `.env.*`
- `apps/dotln/src/environments/environment.local.ts`
- `apps/dotln/src/environments/public-config.local.ts`

A target order removes generated local environment files after the checks that
create them and records the removal; local material in the base checkout remains
the operator's responsibility.

`judge-only` also refuses when retained base output collides with a path the
fetched base tracks: `judge-only output collides with fetched tracked paths`. The
base merge uses `--no-overwrite-ignore`. Move the output outside the conflicting
paths before retrying; changing the registration back to `delete` is a separate
reviewed policy change, not an automatic cleanup fallback.

### Keep starter tags separate

The launchpad clone's shared Git configuration sets `remote.upstream.tagOpt` to
`--no-tags`. That setting is local to the clone and no pull request carries it, so
ordinary upstream fetches do not follow the starter's tags. Preview a named
starter release from a non-tag ref:

```sh
git fetch --no-tags upstream refs/tags/vX.Y.Z:refs/upstream-releases/vX.Y.Z
```

Use that ref for the detached preview worktree and `preview --from`; no local tag
is created or deleted. Keep starter and core tags off the fork's `origin`. The
original setting readbacks are in the [WO-011 evidence](../evidence/WO-011/README.md).

## Versions, provenance and recovery context

### Installed versions

Versions were read from the target's `package-lock.json` and `.node-version` at the
last reviewed source; Node's patch level and npm are this host's. They are
observations, not floating recommendations.

| Group | Versions |
| --- | --- |
| Runtime and workspace | Node 26 (`.node-version`; 26.9.0 observed), npm 11.19.1, Nx 23.3.0, TypeScript 6.0.3 |
| Angular | Angular 22.2.3, Angular Aria 22.2.3, CDK 22.2.3 |
| Tests and Storybook | Vitest 5.0.5 with aligned UI and coverage packages, Playwright 1.64.1, Storybook 10.6.3, axe-core for Playwright 4.14.0 |
| Foundations | Transloco 8.4.0, Ramda 0.32.0, Ramda Adjunct 6.1.0, AnalogJS 2.9.1 |
| State and mocks | NgRx Signals 22.0.1, Angular Architects NgRx toolkit 22.0.0, MSW 3.0.3, RxJS 7.8.2 |
| Other | Ajv 8.20.0, Inter variable font 5.3.0, sass-embedded 1.105.2, ESLint 10.13.0, Prettier 3.9.10 |

### Releases and where each area came from

Each order's merges, verifications and reviews live in its records (`docs/dotln/`
in the target; `docs/evidence/`, `docs/verifications/` and `docs/final-reviews/`
here) and in Git. Earlier versions of this profile are in
`git log -p -- docs/repositories/dotln-angular.md`.

| Target release | Order | Pull request | Merge commit | Published |
| --- | --- | --- | --- | --- |
| `DotLn Angular v0.1.0` | WO-006 | #4 | `90fa6e8d879cb499107ff79d1051c200d17c1cbc` | 2026-10-21T21:14:44Z |
| `DotLn Angular v0.2.0` | WO-007 | #5 | `2ab4f28501628cf95dd0102c42440fd7de9f8055` | 2026-10-24T16:26:54Z |
| `DotLn Angular v0.3.0` | WO-013 | #6 | `83184879358a30a60596aea983d587ed5681ea9d` | 2026-10-25T22:42:09Z |
| `DotLn Angular v0.4.0` | WO-014 | #7 | `1c3a4ff24e38d179d0fd1ad910bc6719c2740045` | 2026-10-26T12:34:52Z |
| `DotLn Angular v0.5.0` | WO-019 | #8 | `38f8afd6e1507483c58a662f2df7c3974dfd62b0` | 2026-10-29T00:47:51Z |
| `DotLn Angular v0.6.0` | WO-015 | #9 | `6268de9fc3cae84bf66091c1fbcc30d344411cd2` | 2026-10-30T21:49:17Z |

| Area | Order |
| --- | --- |
| Workspace, tooling and CI | WO-004 |
| Core, utils, i18n and the test kits | WO-005 |
| The taxonomy, the house `ui` library, the shell layout and the board | WO-006 |
| Events, stores, data access, MSW and persistence | WO-007 |
| The sub-app menu and the arriving routes | WO-013 |
| The catalog pipeline | WO-014 |
| The reading surface over the catalog and the Arrive study | WO-019 |
| The scene engine and the soldier scene | WO-015 |

### Recovery context

History stays here only where it explains a boundary or a recovery route:

- **The publication range.** WO-013's draft on a provisional base was refused
  because the kit described the activation-base range. Starter v0.96.1 moved the
  publish to the merge base and v0.97.1 moved review lint to the same range, which
  is the route §Publish a change describes. See the
  [WO-013 evidence](../evidence/WO-013/README.md) and the target's
  `docs/dotln/evidence/WO-013/decisions.md` (D008, D010, D015 to D019).
- **Bundle placement.** WO-014's first verification rejected avoidable initial
  bundle growth to 530.37 kB. Moving the menu stack to the lazy Tools path and
  curating the utility exports brought it to 376.91 kB and added `check:bundle`
  and `perf:sample`. See the [WO-014 evidence](../evidence/WO-014/README.md) and
  the target's `docs/dotln/evidence/WO-014/decisions.md` (D011, D016 to D028).
- **Acceptance by use.** Rules 24 and 25 are why a green gate does not accept a page.
  Read [acceptance by use](../planning/acceptance-by-use-2026-10-26.md) and
  [the v0.100.0 pass](../planning/standard-pass-v0-100-0-2026-10-28.md).
- **Target writes under Claude Code.** The kit refused WO-019's first Claude Code
  target write. Starter v0.101.0's executor-only `target-worktree` grant is the
  route. See [the v0.101.0 pass](../planning/standard-pass-v0-101-0-2026-10-28.md)
  and the target's `docs/dotln/evidence/WO-019/decisions.md` (D022, D023).
- **A defect after the final review passes.** The lifecycle has no repair phase
  there, and the closed-phase publish helper refuses a head that differs from the
  records commit. WO-015's CI failure was corrected under `operator override:`,
  pushed with Git over the same pull request and recorded in
  [its control segment](../control/orders/WO-015.jsonl) and the target's
  `docs/dotln/evidence/WO-015/decisions.md` (D022).
- **The dispatch bound.** The kit's sixth refusal stops a complete launchpad gate,
  a bounded probe or a worker launch past the bound in
  `docs/control/budgets.json`, and `next` and `fix` a redispatch; reads, listings
  and focused runs stay admitted. When the operator authorizes going on in ordinary
  language, the agent records `npm run resume -- accept-overrun`, as rule 25
  describes; [WO-015's control segment](../control/orders/WO-015.jsonl) holds a
  worked example.

## Upstream and copied-contract references

- `nrwl/nx@23.3.0 astro-docs/src/content/docs/technologies/angular/`: the
  generators every project is created with; the target's generator log records
  each invocation.
- `angular/angular@v22.2.3 adev/src/content/best-practices`: the style guide and
  performance guidance house rule 1 defers to.
- `ngrx/platform@22.0.1` (`@ngrx/signals` with the Events plugin) and
  `angular-architects/ngrx-toolkit@22.0.0` (`withCallState`, `withStorageSync`,
  `withDevtools`), installed by WO-007 (WO-007-D002), with MSW 3.0.3 answering the
  app's own API in development and tests; the versions are read from the installed
  declarations.
- `angular/components@v22.2.3 src/aria` and `src/cdk`: the behavior libraries
  WO-006 wraps (Angular Aria, stable since v22 and MIT; the CDK's overlay, a11y and
  dialog entry points). No vendor component library is installed (planning pass of
  2026-10-21, D2). PrimeNG 22.x ships under the PrimeUI License with a required
  key and its last MIT release peers Angular 21, so it is not a candidate.
- `DylanBWood/DotLn@a54f8d6520ed54d05e5209455c67541562716404`
  `packages/console/uifa-board-v1.schema.json`, `packages/console/README.md` and
  `docs/product/04-interfaces.md` (§Plural UI hosts, one projection contract;
  §Actor board v0; §Later console hosts; §Console parity contract v1): the view
  model the `board` feature renders and the host rules WS-001 restates. The schema's
  SHA-256 is `7d20e785c718b4b601f45a9c351461955666ea16d49f17ae6d8fde0676629cd3`.
  WO-006 pins its commit and digest in its decisions and the generator log; the pin
  is reported stale by `resume: status` and is never a live dependency, and the app
  keeps the shape as its own API's response contract.
- The launchpad carries the same bytes as a kit file,
  [`packages/console/uifa-board-v1.schema.json`](../../packages/console/uifa-board-v1.schema.json),
  beside
  [`packages/console/runtime-status-v1.schema.json`](../../packages/console/runtime-status-v1.schema.json)
  (SHA-256 `600bb73ab38b663a8356f305e6080729689b71f99bdd32665f634d7537b29bed`). The
  target keeps its committed copy, because it never depends on the launchpad.
- `DylanBWood/DotLn@c670e6288ecb221ef2416cef06f920006866bc5d`
  `packages/skeleton/src/console-loopback.ts` (core WO-225, starter v0.93.0): the
  resident's loopback serves `GET /uifa-board-v1` and `GET /runtime-status-v1` to a
  caller on `127.0.0.1` with the bound port in `Host`, a local `Origin` or none,
  and `Authorization: Bearer <token>` from the resident's
  `console-loopback-v1.json` descriptor, with `503` in the console refusal shape
  when a projection is unavailable. WO-007 retains only this response shape for the
  app's own API. Neither the resident nor its token is a data source for this app.
