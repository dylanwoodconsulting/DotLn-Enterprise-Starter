# WS-001 — dotln-angular: the operator's reference Angular workspace, carrying the operator's sandbox app

**Outcome:** DotLn-Angular (`DylanBWood/DotLn-Angular`, public) is an Nx
integrated monorepo on the current Angular that a colleague can clone and
recognize as the way the operator builds Angular: slim apps, feature libraries,
signals everywhere, zoneless, functional first, events-driven state,
legitimate client-side security, every user-facing string through i18n, tests
at every layer, and documentation written once for people and once for AI
sessions. It carries one app, `apps/dotln`, with sub-apps behind a menu: a
scene for authoring game AI from a toolbox mined from the works the operator
reads, a view of DotLn's machinery, the operator's own digital twin, and side
utilities; the WoW tooling app and an example API join later as members of
this workstream. Its product purpose, in the operator's words of 2026-10-18
(capture SHA-256
`222fbf09d6f57d518b931dd54c59a5bc5d83d55a7552e2ee194b1774a2ee184d`), as the
operator corrected it on 2026-10-24 (capture SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9,
paraphrased in §The app and its sub-apps): the sandbox, playground and
toolbox where every new idea lives first as a toy the operator plays with
before promoting the ones that work, for the five UIFA roles, people and
software actors alike, so that the app improves the platform, the platform
the starter, the starter this fork, and the fork the app in turn.
**Acceptance contract:** each member order passes the repository's declared
gate in its target worktree (`node scripts/target-gate.mjs WO-NNN --review`),
its change reaches the operator as a pull request they read before it merges,
and its write-backs keep `docs/dev-reference` and `docs/ai-reference` in the
target current. The workstream is delivered when WO-004 to WO-008, WO-013 to WO-019, WO-020 to WO-027, WO-034 to WO-037, WO-039, WO-040 and WO-043 to WO-046 are merged and `apps/dotln` runs locally with the sub-app menu, the catalog as something to read with a hundred studied concepts, the soldier scene over it, the machinery view of what core has, the replay of a recorded order, the twin's first lane, the toy shelf, login, permissions and i18n, with the component taxonomy demonstrated in every sub-app and every page accepted by use (rule 24). The operator judges delivery by using the app and merging the last member's pull request.
**Delivery state:** active. [The generated index](../work-orders/README.md) carries each member's phase and what blocks it; §Delivery states links each member's record as of its last write-back.

## Member orders

| Order  | Repository    | Base                                       | Role in the outcome                                                                  |
| ------ | ------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| WO-003 | self          | this launchpad's `main` at activation      | registers `dotln-angular`, its class, authority profile, gate, grant and vocabulary |
| WO-004 | dotln-angular | `bc9133e932a00d33c15bc5289d683b8078f51ee4` | scaffolds the Nx and Angular workspace, tooling, CI and the two documentation roots  |
| WO-011 | self          | this launchpad's `main` at activation      | declares the class's disposable output and the tag guard the release close needs |
| WO-005 | dotln-angular | `651d76ff68e9b3a38fe770226deb634bca28b54c` | foundation libraries: core, utils, i18n, the test-kit convention |
| WO-012 | self          | this launchpad's `main` at activation      | declares the target release policy and the name `DotLn Angular`, the judge-only base checkout, the operator's commit identity and the operator grant naming `release.close` |
| WO-006 | dotln-angular | `5102783f5cf575a6b487e75ed9bb0c064d6dbd9c` | the component taxonomy, the house `ui` library with Angular Aria and the CDK behind wrappers, the shell layout, the `board` feature rendering the actor board from a recorded fixture |
| WO-007 | dotln-angular | `90fa6e8d879cb499107ff79d1051c200d17c1cbc` | events, signal stores, call state, data access, the board over HTTP from the app's own API in the `uifa-board-v1` shape answered by MSW, persisted UI state, navigation and flags |
| WO-013 | dotln-angular | `bc9133e932a00d33c15bc5289d683b8078f51ee4` (provisional; published from the merge base) | the sub-app menu in the shell, the `scene` and `machinery` routes with arriving pages, the sub-app grouping convention |
| WO-014 | dotln-angular | `bc9133e932a00d33c15bc5289d683b8078f51ee4` (provisional; the worktree fast-forwarded to WO-013's merge, WO-014-D001) | the toolbox catalog as the app's own data: the `Tool` schema, the run's 3,463 map rows typed by a checkpointed fan-out, the catalog browser under Tools |
| WO-019 | dotln-angular | `1c3a4ff24e38d179d0fd1ad910bc6719c2740045` (WO-014's merge) | the catalog as something to read: the run's definitions, relations and hooks as each tool's data, the allow-list and the scrub gone, the reading surface, one authored Arrive study (WO-019-D005), the scene's tools typed |
| WO-015 | dotln-angular | `bc9133e932a00d33c15bc5289d683b8078f51ee4` (provisional; the executor fast-forwarded the target worktree to `main`) | the soldier scene: the pure scene engine, twenty units on a 2D canvas behind a renderer seam, a rail of the tools the engine runs with their definitions, RTS selection, flock, arrive, formation, the first look, the root route |
| WO-016 | dotln-angular | provisional; the pass before WO-016 activates sets it (its text is as filed) | a later order: the replay of a recorded order, showing its agents and how they interacted given their machinery at the time and how a change in that machinery would have changed the order or their decisions, over scrubbed six-field copies of WO-221 and WO-226, with the records and replay libraries, the operator's ideas and the local idea sink |
| WO-008 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | authentication and permissions, legitimate from the Angular side; the first road order and the last member of the purpose's critical path |
| WO-017 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | the digital twin's first lane: for a recorded stage, whether the twin would have made the same interventions as the operator, its variants kept as code |
| WO-018 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | the toy shelf: the run's nineteen toys as full records read on a shelf under Tools, their tools followed into the catalog, the next toy picked |
| WO-025 | self          | this launchpad's `main` at activation      | a quality pass over this launchpad's standing documents under the kit's `quality pass:` procedure; the repository profile rewritten to the shape the operator chose |
| WO-026 | dotln-angular | `6268de9fc3cae84bf66091c1fbcc30d344411cd2` (WO-015's merge) | a quality pass over DotLn-Angular's standing documents under the same procedure |
| WO-020 | dotln-angular | `6268de9fc3cae84bf66091c1fbcc30d344411cd2` (WO-015's merge) | the concept-study program's pilot: the study record and its check, the `motion` and `timeline` families, addressable readings, the studied marks, and twenty movement studies |
| WO-021 | dotln-angular | `4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9` (WO-020's merge) | twenty RxJS studies with executable marble examples and the `marbles` family |
| WO-022 | dotln-angular | `4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9` (WO-020's merge) | twenty Enterprise Integration Patterns studies and the `flow` family |
| WO-023 | dotln-angular | `d7d842dc4fdbde03099695933a448d9632fa4335` (WO-027's merge, set by the 2026-11-06 pass) | twenty enterprise application pattern studies with executable models and the `states` family |
| WO-024 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the second 2026-11-08 pass) | ten Gödel, Escher, Bach and ten Team Topologies studies and the `relations` family, each study data passed to one builder |
| WO-027 | dotln-angular | `48c7f8e6916692bca833c4985e2cf95978ab2c06` (WO-028's merge, set by the 2026-11-05 pass) | the gate tools and standing documents corrected from the REVIEW-002 Entropy Reducer findings: the board gauge counts a marker wherever a defect is boarded, `check:scripts` fails on a missing or stale row, the title workflow admits a gitmoji and a subject alone, and the command lists, barrel rule, catalog pointers, cache rationale and scene paragraph say what is so |
| WO-034 | dotln-angular | `d7d842dc4fdbde03099695933a448d9632fa4335` (WO-027's merge, set by the 2026-11-06 pass) | the first standards pass (rule 31): the first movement batch's twenty presentation modules reshaped with every output unchanged, the study guards tightened, the motion drawing's marks tidied, the wall study shown doing its avoidance, the work catalogs trimmed |
| WO-035 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | every string on screen through the message system: the catalog's mined text registered with the translator from the loaded rows under one scope per work, every screen rendering through the translator, a missing message failing closed |
| WO-036 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | walls and ways in the scene: walls and obstacles drawn on the field, a tile graph, A* and Dijkstra with the catalog's heuristics and cost functions as rail tools, path following with replanning and a no-route state, obstacle and wall avoidance with a deterministic head-on policy, geometry saved and replayed |
| WO-037 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | shooting and bullets: a fire tool, bullets that walls stop, the firing solution and iterative targeting as aims, hits counted and shown, a knockout that re-lays the formation, the rail's `fight` group |
| WO-039 | dotln-angular | `f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3` (WO-023's merge, set by the 2026-11-08 pass) | the second standards pass (rule 31): the enterprise batch's sixteen presentations on compiler-checked lookup tables and shared helpers, the `states` builder inferring transitions, one executable-study loader, Foreign Key Mapping's read limit repaired, the narrow register's headings decided and the token rule written, every other output unchanged |
| WO-040 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the second 2026-11-08 pass) | the third standards pass (rule 31): the second movement batch's presentations reshaped to the first batch's rule, the first batch's boarded residue cleared, four functions of the two stream builders brought under the rule and nineteen flow state labels reworded, every other output unchanged |
| WO-045 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | the `grid` family, built builder-first over the engine's own search, the A* study, the scene inspector's link to a tool's study and the two avoidance studies shown doing what the scene runs |
| WO-046 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | the machinery view: what DotLn core currently has, what exists, in what capacity, in what organization and with what relations, mined from core's public repository at a recorded commit |
| WO-043 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | the first public mining: The Art of War mapped into the catalog from its public text with its maxims, and six new toys on the shelf |
| WO-044 | dotln-angular | `eb9d227483e30164105da077f50673789d1e5c9f` (WO-039's merge, set by the 2026-11-09 pass) | find the studies: a page listing every studied concept by work and chapter, links from the Tools home into each work, studied counts in the contents and the studied mark on nearby links |

Proposed later members, not yet filed (§The app and its sub-apps below and
the planning document of 2026-10-24 §10 record each with its reopening
condition): the mining store and the app's own HTTP API, replacing the
committed data and the stopgap copies; the Babylon.js painter behind the
scene's renderer seam; manim in the monorepo; the remaining toys of the
operator's 2026-10-22 run as later members, by their ids; the twin's later
lanes; typed translation keys; the WoW app and its
non-TypeScript libraries; the example API and a real identity provider behind
the auth port.

## Dependency and compatibility plan

**The road and the side lane.** The sequence runs in lane pairs. The first
entry of a pair is a road order, one that lands something the operator uses
in a sub-app or completes the foundation; the second is side work the
operator runs beside it: a concept-study batch, a standards pass, a family
and its study, a page that touches only the Tools feature, or a change with
nothing new on screen. The batches entered the sequence as side work taken
between road orders (the operator's direction of 2026-10-30; the operator
record §What the operator wants, Depth in batches), and a road order leads
every pair so that side work never runs alone at the front (the
[2026-11-09 pass](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md),
D2). The road's order is each planning pass's reading and the operator moves
an entry with a word. The scene leads: as the app stands it is the one
part of it the operator likes, and they want more improvements to it (the
operator on 2026-11-09, journal row 2026-11-10T02:37:58Z, digest
`4a4715d6…`; D16). WO-036 runs first, then WO-037. WO-008 follows, the last member of the purpose's critical path, whose one
dependency merged on 2026-10-24; then the machinery view of what core has,
WO-046; the twin's first lane, WO-017; the later replay of a recorded
order, WO-016; and the toy shelf WO-018 with the Art of War map pass
WO-043 behind it. Each road order builds on the target's `main` as it
finds it; an order amended by the 2026-11-09 pass names its base at
`eb9d227`, and WO-016 keeps its text as filed until the pass before it
activates.

Two road orders do not share a pair because each brings comparison rounds
the operator attends (rule 25), not because their files collide: `nx.json`
last changed with WO-006 and `tsconfig.base.json` with WO-015, and a new
library's lines there merge mechanically. The two members of a pair touch
disjoint surfaces and hold no edge between them; the second publisher
integrates the target's `main` and regenerates what both share before its
publish, and the operator may run any pair one at a time (the 2026-10-30
second pass, D9).

**Side work.** The side members are the concept-study batch WO-024, the
standards pass WO-040 (rule 31), the `grid` family with its A* study WO-045,
the studies' discovery WO-044 and the message-system order WO-035. A study
batch adds records, one visual family and its evidence and edits no
workspace configuration; a standards pass reads code that has landed and
changes no output; WO-044 and WO-035 change the Tools feature's pages and
text path and nothing in the scene or the machinery view. The research
track's batches (WS-002) run apart from both lanes on spare Codex capacity.

**The typed edges of the open members:**

| Member | Depends on |
| --- | --- |
| WO-008 | WO-007 (the interceptors and stores it extends; merged) |
| WO-024 | WO-020, WO-039 and WS-002's WO-028 (the study record, the reshaped enterprise batch its four executable models copy and the study message system; all merged) |
| WO-036 | WO-015 (the scene and its engine; merged); WO-035 by reference (the later of the two to land integrates the target's `main`) |
| WO-040 | WO-034, WO-039 and WS-002's WO-028 (the reshape rule, the one loader and the second movement batch it reshapes; all merged; the edge on WO-028 lives in the order's block and this table, since the kit admits a workstream edge only from a member) |
| WO-016 | WO-013 (the machinery route; merged), as filed |
| WO-045 | WO-036 (the pathfinding module the study steps and the head-on policy its avoidance studies show) and WO-040 (it reshapes the two avoidance studies this order edits) |
| WO-037 | WO-036 (walls stop bullets) |
| WO-044 | WO-019 (the reading surface; merged); WO-024 by reference (two more works' studies its lists must show) |
| WO-035 | WS-002's WO-028 (the study message system; merged) and WO-044 (the studied page it routes through the translator); WO-023 and WO-024 by reference (the scopes it finds) |
| WO-017 | WO-008 (the gated `/twin` route) |
| WO-018 | WO-014 and WO-019 (both merged) |
| WO-043 | WO-018 (the shelf and the toy record) and WO-035 (the mined text's path to the screen) |
| WO-046 | WO-013 (the machinery route; merged); WO-035 by reference (the registration its mined statements use) |
| WO-031 (WS-002) | WO-039 (the standards pass over its work's code, WS-002 rule 6; merged) |

[The generated index](../work-orders/README.md) says which of these still block.
The closed members' edges stay in the block at the end of this document, and each
order's `**Depends on:**` line gives the reason.

**Bases.** The kit creates a target worktree at the commit the order's
`**Repository:**` line names, so a filed successor carries a provisional base, a
commit already on the target's `main` that
[the generated index](../work-orders/README.md) prints. Since starter v0.96.1 (core WO-230) the target
publish describes the change from the merge base of the subject and the target's
`main` and names the activation base beside it, so an order may activate on its
provisional base and publish right (WO-013-D001, D008 and D015 record the refusals
that preceded this route; the planning pass of 2026-10-25, D3). The planning pass
that follows the predecessor's merge may set the line to the merge commit without
being required to (the second planning pass of 2026-10-24, D7). A base advance
event was declined by core by design; the merge-base publish is the route. An
executor's own duties on a provisional base are in
[the profile](../repositories/dotln-angular.md#run-the-app-and-its-checks).

**Self orders.** What a target order reads from this launchpad's `main` lands
there first, so a self order that changes it merges before the member that needs
it. WO-003, WO-011 and WO-012 preceded their dependents for that reason: activation
and publication read the registration from `main`, the release close reads the
class's declared disposable output and refuses an undeclared ignored base file
(starter v0.85.0; planning pass of 2026-10-19, D2), and starter v0.87.0 and later
read the target's release policy, display name, base-checkout policy and the
operator grant from `main` at the close (planning pass of 2026-10-20, D2 and D7).

**Target headers.** Every `dotln-angular` member carries exactly one
`Target release classification` header (minor for the feature members) and the
`Target release notes: reviewed` header before it activates;
[the profile](../repositories/dotln-angular.md#check-the-release-classification-before-activation)
holds the check and the reason.

**Stand-ins.** A member that needs something a later member delivers ships the
smallest honest stand-in and names the replacement in its known issues.

## House rules

Member orders cite these by number. A rule changes through a planning pass or
an order's recorded decision, never silently. Rules 9, 20 and 22 to 31
restate directions the operator record holds; a pass that changes one
changes the other.

1. **Stack.** The latest stable Angular (22.x at filing; each order records the
   exact version it installed), standalone components only, strict TypeScript,
   zoneless change detection, signals for state (`signal`, `computed`,
   `linkedSignal`, `input()`, `output()`, `model()`, `viewChild()`), RxJS where a
   stream is the honest model (HTTP, events over time) and converted at the
   boundary with `toSignal` and `toObservable`. Angular best practices and
   browser rendering speed win over any analogy or house preference.
2. **Workspace.** Nx integrated monorepo. `apps/` stay slim: bootstrap,
   providers, routes and environments. `libs/` carry everything else. Every
   project is created by an Nx generator and the exact command is appended to
   `docs/dev-reference/workspace/generator-log.md` with the Nx version. Before
   running generators from a second worktree, stop the daemon
   (`npx nx daemon --stop`); `npx nx reset` clears a confused cache.
3. **Libraries and import paths.** Shared libraries live under `libs/shared/`
   and import as `@dotln-angular/<name>` (`core`, `utils`, `i18n`, `ui`,
   `events`, `models`, `state`, `data-access`, `auth`, `catalog`, `records`,
   `replay`, `scene-engine`, `twin-model`). Features live under
   `libs/features/` as `<feature>` and `<feature>-data-access` (and
   `<feature>-models` when a feature's types are shared), importing as
   `@dotln-angular/<feature>` and `@dotln-angular/<feature>-data-access`.
   App-scoped libraries live under `libs/<app>/` and import as
   `@dotln-angular/<app>/<name>`. Test kits import as
   `@dotln-angular/<lib>/testing`. Nx tags: `scope:shared`, `scope:<app>` and
   `type:app|feature|ui|data-access|state|events|core|util|i18n|auth|models`;
   the dependency constraints in rule 15 are enforced by
   `@nx/enforce-module-boundaries`. The operator will refine tag names after
   seeing them; the constraints stand.
4. **Barrels.** An importable library's `index.ts` is one line,
   `export * from './public_api';`, and `public_api.ts` lists every export
   explicitly. A feature library exports only its routes from `index.ts`;
   inside a feature, files import each other by relative path, never through
   the alias, so no cycle forms.
5. **Testing.** Vitest for unit tests through Angular's and Nx's standard
   wiring; if that wiring fails on the installed versions, the AnalogJS Vitest
   plugin is the recorded fallback (the operator met that failure in June 2026
   on Angular 22.0 under Nx). Playwright for end-to-end tests, one project per
   app, with axe checks on key pages. MSW serves HTTP in development and in
   tests. Each `@Injectable` class and each injection token ships a test kit
   (`provide<Name>TestKit()`) in its library's `testing` entry point, so a
   spec provides a service and its dependencies in one call; the target's
   `check:kits` enforces it (WO-026-D016; the planning pass of 2026-11-01,
   D7).
6. **Style.** Sass (`.scss`), design tokens as CSS custom properties with a
   skin layer of token overrides over them (the plain skin first), no vendor
   component library: the house `ui` library owns every component's API,
   markup, styling and tests, and Angular Aria and the CDK supply behavior
   only, behind wrappers (rule 14; the operator's direction of 2026-10-20,
   WO-005-D006, settled by the UI planning pass of 2026-10-21, D2). Styles
   inline while a component is small and extracted first when it grows.
7. **Functional first.** Ramda and Ramda Adjunct through
   `import { R, RA } from '@dotln-angular/utils'`: re-exported namespaces whose
   types compose cleanly in this workspace, verified by specs ported from the
   libraries' public test suites for each function the workspace uses. Pure
   functions in `utils`; declarative templates; no class-side mutation where a
   signal or a pure function serves.
8. **State and events.** NgRx SignalStore with the Events plugin. Every event
   group is declared in `@dotln-angular/events`, organized by source tier (rule
   16). Stores are provided by `provide<Name>()` functions at the route or app
   level. Call state follows the trinity `action`, `actionSuccess`,
   `actionFailure` with the toolkit's `withCallState` feature, re-exported by
   `@dotln-angular/data-access` (WO-007-D002).
9. **i18n.** Transloco. Every string a reader can see on screen goes
   through it, templates, record fields and generated narration alike: a
   string the operator can see on screen is user-facing, and a stored
   record is no exemption (G3; the operator's direction of 2026-11-04,
   capture SHA-256 `f4f42e5c…`; WO-028-D039, D042). Templates use
   `'scope.key' | t`; authored study text lives as message keys in the
   work's lazy catalog under `apps/dotln/public/i18n/`. `npm run i18n:check`
   refuses a missing or extra translation key and an untranslated template
   literal, and the corpus test refuses a study literal; typed keys
   generated from a schema are a later member. The catalog's mined text
   (the 3,463 rows' titles, definitions, places, provenance notes and
   analog clauses) is the one surface still outside the message system and
   is WO-035's; until it lands an order is not judged on it (the 2026-11-05
   pass, D4).
10. **Dependency injection.** Providers for everything; nothing appears by
    magic. Each library exposes `provide<Name>()` and composes the providers it
    needs. Injection tokens are `PascalCaseToken` with a description string
    `dotln-angular.<scope>.<lib>.<name>` (for example
    `dotln-angular.shared.core.environment-config`). `providedIn: 'root'` is
    reserved for app-tier singletons listed in `core`, today only the app base
    path (WO-005-D005); the operator has not yet ruled on it, so this default
    stands.
11. **Routing.** Features are lazy. The `BasePaths` and `ChildPaths` enums
    live in `core` (the target's conventions and code name no `<Feature>Paths`
    enum; WO-026-D016); canonical route builders produce commands and query
    parameters from those enums so no feature spells a URL. `AppBasePathToken` reads
    `<base href>` at boot and is injected wherever a sub-path aware URL is
    built.
12. **Component conventions.** Decorator members in this order: `selector`,
    `changeDetection`, `template` or `templateUrl`, `styles` or `styleUrl`,
    `providers` (omitted when empty), `imports`. Inline template and styles
    while they are small. Selector prefixes come from a per-library allow list
    (`shared`, `app`, `dotln`, `dotln-angular`, `<feature>`); the operator
    settles the scheme after seeing implementations. ECMAScript `#private`
    over TypeScript `private`; `readonly` wherever a member is not reassigned.
    An inline template lays out one projected element per line, never the
    hugging form Prettier wrote before WO-006-D004 turned embedded
    formatting off. A template or style section stays inline while it is at
    most 40 lines; above that it moves to its own file, and one file stays
    the default for a component whose sections fit (the operator's notes of
    2026-10-21 on draft #4, WO-006-D021 (a) and (b); settled by the planning
    pass of 2026-10-23, D9). The house library's granularity and shared-Sass
    pass and the blank-line autofix rule are a recorded candidate (that
    pass's §10, C1).
13. **Lint and TypeScript.** ESLint flat config with angular-eslint, Prettier,
    `.editorconfig`. `no-unused-vars` warns, with an underscore prefix as the
    opt-out. TypeScript hacks and disabled lint or compiler settings are for
    extreme cases only and each carries a comment naming the case. Helper
    type aliases (`Predicate<T>`, `Guard<T>` and the like) are declared
    once per library, in a `types.ts` exported through `public_api.ts`
    where public, and promoted to `utils` when a second library needs one;
    `npm run check:shared-types`, in the `workspace-tools` project's lint
    target, refuses a type alias or interface name declared in more than one
    file under `libs/shared` (WO-005-D022; planning pass of 2026-10-20).
14. **Behavior and vendor libraries behind wrappers.** `@angular/aria`,
    `@angular/cdk` and any third-party UI library are imported only inside
    `wrappers/` directories (and the provider setup in `ui`); lint refuses
    them elsewhere. A wrapper standardizes the library's API to the house
    API and is swappable. Aria carries keyboard, focus and ARIA semantics
    for the patterns it ships (accordion, combobox, grid, listbox, menu,
    tabs, toolbar, tree at 22.2.3); the CDK carries overlay positioning,
    the focus trap, the live announcer and the unstyled dialog; the house
    library carries everything a user sees. A wrapper may also own a browser
    drawing API such as `<canvas>`, so a renderer sits behind one component
    and a painter can be swapped (the planning pass of 2026-10-24, D7).
15. **Dependency constraints.** `app` may depend on any `type`. `feature` may
    depend on everything except `app` and another `feature`. `data-access` on
    `events`, `models`, `core`, `util`. `state` on `events`, `models`, `core`,
    `util`. `ui` on `util`, `i18n`, `models`. `auth` on `data-access`,
    `events`, `models`, `core`, `util`. `events` on `models`, `util`. `core`
    on `i18n`, `util` and `models`; `i18n` on `util` and `models`, never
    on `core` (WO-005-D001: the application adapter `provideDotlnI18n()`
    lives in `core` and reads core's tokens, while reusable translation
    behavior stays in `i18n`). `util` on `util`. `models` on nothing.
    `scope:shared` is importable by every scope; `scope:<app>` only by that
    app and its own libraries. A pure engine, clock or model is `type:util`
    and carries its own types; a reader of shared record types is
    `type:data-access`.
16. **Action hygiene.** Tiers: `ui` (one group per screen, unique events),
    `data-access` (commands, reusable, trinity), `navigation` (commands,
    reusable), `app` (cross-cutting: flags, shell, errors). Mapping flows one
    way: `ui → data-access`, `ui → navigation`, `ui → app`,
    `data-access → navigation`, `data-access → app`, `app → navigation`.
    Nothing maps to an event of its own tier. An action's own `actionSuccess`
    and `actionFailure` (the trinity of rule 8) are that action's outcomes,
    not mappings, and the hygiene check does not count them (receipt 006;
    UI planning pass of 2026-10-21, D13). Every feature hooks the one event
    stream and therefore sees every event; by convention a feature reacts to
    its own `ui` events, the `data-access` events it owns and `app` events. An
    exception is written as `// hygiene-exception: <reason>` and CI counts and
    prints the exceptions; it does not refuse them.
17. **Security first.** Authentication and authorization are implemented the
    way a real organization would accept: token handling, expiry, refresh,
    invalid tokens, timeouts and permission checks all have code and tests.
    The identity provider is mocked (MSW) until an API exists; nothing else is
    pretend.
18. **Accessibility.** WCAG 2.2 AA to a reasonable extent: keyboard paths,
    focus visibility, labels, contrast through the theme, axe checks in e2e.
19. **Documentation.** `docs/dev-reference/` for people, `docs/ai-reference/`
    for sessions (short, rule-shaped, with the commands to run). DotLn's own
    records for target orders land under `docs/dotln/` so they stay apart from
    the reference material. A library's README says what the library is for,
    how it is imported and how it is tested, and names the document to read
    next; a testing entry point's README says what it exports and how it is
    used; a session that adds a library or an entry point replaces the
    generator's text with that, as the target's conventions direct
    (WO-026-D014; the planning pass of 2026-11-01, D7).
20. **Commits and pull requests.** Conventional commits in the present
    imperative. Pull-request titles are a gitmoji prefix and the subject, with
    no conventional type (the operator's rule of 2026-10-17, restated on
    2026-10-30). Since starter v0.117.0 (core WO-246) the kit's publish lint
    admits a gitmoji followed by a subject with or without a conventional
    type and lints a target title as a title only; the repository's title
    workflow preserves a supported gitmoji and subject as written and still
    decorates a conventional title with its type's gitmoji
    ([WO-027-D003](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d003-align-the-standing-instructions)).
    The launchpad's own pull requests carry the gitmoji and subject only. Merge commits
    carry the pull-request title (repository setting, operator-owned). The
    draft at verified is the kit's `--draft` form of `worktree publish`, run
    by the session that records the verification pass and reused by the final
    publish, so one branch and one pull request carry each member (planning
    pass of 2026-10-18, D5); WO-010 makes a pull request, a merge commit and a
    passing `checks` run the rules of `main`.
21. **Broken windows.** A defect found during an order is fixed in that order
    or boarded in the same pull request: a skipped failing test plus a
    `// BOARDED: <follow-up>` comment, or a visible "not implemented" surface.
    CI prints the board count.
22. **Sub-apps.** One app, `apps/dotln`, with sub-apps behind the shell's menu.
    A sub-app is a feature library under `libs/features/<sub-app>` tagged
    `scope:dotln, type:feature` that exports only its routes; its own data
    access is `libs/features/<sub-app>-data-access`; engines, models, readers
    and clocks every sub-app may read live under `libs/shared/`; `libs/dotln/`
    stays the shell's. The menu is the shell's template and the router links
    are the app's. Splitting a sub-app into its own app or workstream later
    is cheap because the logic is in libraries (the operator's decision of
    2026-10-24; WO-006-D005 settled; planning pass of 2026-10-24, D5).
23. **The sandbox, its data, and the clean room's scope.** Every new idea
    lands in the app first as a toy the operator plays with; promotion is a
    GitHub issue on the platform's repository, never a control record. The
    app's data comes from public mining into its own store, served to the UI
    through its own API; until that store exists, committed data files and
    scrubbed six-field copies of the platform's public WO-221 and WO-226
    records are the stopgap. The books, films, games and ideas the operator
    references, the run's maps of them and the designs cut from them are the
    app's subject matter and lie outside the clean room: an order carries
    their definitions, relations, hooks, toy designs and the maxims of a
    public-domain text as data, and no allow-list, scrub, overlap check or
    own-words rule is applied to them. Whether a verbatim passage of a work
    still in copyright is committed is an ordinary publishing question the
    order that wants one decides in its decisions file, not a clean-room
    one. The clean room keeps governing what it always governed: employer
    material, credentials, private identifiers and the operator's own raw
    message text, which is paraphrased and cited by digest; the reducer's
    scrub over the platform's control records stays for that reason, and the
    run's quarantine files stay closed because they were quarantined for
    that material. An order cut from the operator's research run names the
    design file it builds from by path and SHA-256, because the run is
    ignored intake that may change. (The operator's direction of
    2026-10-26, capture SHA-256
    `9ec78ddbc267936d59fc7fe88b4a8b9c8d42d4692979db31be5129c817fd72a6`;
    planning pass of 2026-10-26, D2 and D3.)
24. **Acceptance by use.** Every member order's Objective describes the
    operator's session on the page: what they see on arrival, what they do,
    what changes as they do it, and what they learn or decide. At least one
    acceptance criterion is judged by using the served page as that
    Objective describes: the verifier performs the session in the served
    production build, files a `## Walkthrough` section with the dated steps
    and screenshots at 360, 768 and 1440 under the order's evidence
    directory, and records the criterion met only when every step completed
    and the report states in the verifier's own words what was read or
    watched. The refuter's goal review asks of every judged order whether
    the operator would use the page for the stated purpose and whether it is
    the previous page with different fields. The final reviewer performs the
    session before recording pass. Grep, exit-code and count checks support
    criteria and never substitute for the use criterion. A page that renders
    records as label-value lists with nothing to read, do or learn fails the
    use criterion whatever its other checks say. Every planning pass states,
    in one table, what the operator will see on screen after each sequenced
    order lands. The operator's direction of 2026-10-26 (capture SHA-256
    `9ec78ddb…`; planning pass of 2026-10-26, D4); the kit's role text is
    core's, so this rule binds the roles through the order text, this
    workstream and the operator record.
25. **The look is briefed and judged, never defaulted.** Every member order
    that lands a page carries a design brief under the workstream's design
    direction (§Design direction) and names its first pair of candidate
    layouts or chromes. The comparison is the operator's eye doctor test:
    the executor builds and renders the pair at about 2080 by 1460, the
    operator's centre browser window (rule 29), and at 360 during
    execution, presents it as A then B with the round named in the question
    and both captions, varies one independent feature per pair, and uses
    the operator's preference to make the next pair; the rounds continue
    until the operator says the process is done, a preferred candidate alone
    is never acceptance, and a ranking may assist the comparisons and never
    supplies the stop. Content, usability and usefulness come before
    cosmetic polish. The decisions file records each round's pair and pick;
    the rejected implementation leaves the code when its round is decided,
    with its screenshots and an implementation record under the order's
    evidence directory as the history, and a decided choice is not
    relitigated for that order. The two candidates an order names are its
    first pair, not a limit of two designs or one round. The plain skin
    stays the token layer the brief is expressed in (G4); a scene may scope
    a second token set to its region. The look is part of what an order
    delivers (planning pass of 2026-10-26, D5). A comparison session runs
    under the kit's dispatch bound (starter v0.102.0), which counts elapsed
    wall clock from the executor's dispatch, attended or idle, and resolves
    from this fork's own phase medians (8 h 0 min for every phase at the
    2026-10-30 pass): when the operator says in ordinary language that the
    session runs as long as it needs, the executor captures the words in
    ignored intake and records `npm run resume -- accept-overrun` with
    `--ceiling unlimited` for both metrics ahead of the stop, as the kit's
    README describes (the 2026-10-30 pass, D4). The operator may delay an
    order's rounds when they have no time for them: the order records its
    first pair without a pick, ships its first-named candidate meanwhile
    and carries the rounds as a follow-up, and the delayed rounds are that
    order's own criterion, run later as exactly that and combined with
    nothing else (the operator's direction of 2026-11-07 in WO-023's
    execution, capture SHA-256 `8bf3461a…`; WO-023-D008; restated on
    2026-11-09, journal row 2026-11-10T02:12:55Z, digest `2e85ed3e…`; the
    2026-11-09 pass, D13). (The operator's correction
    of 2026-10-26 in WO-019, capture SHA-256 `5742f0a7…`, entry 1;
    WO-019-D003, D008, D009, D012 and D014; the 2026-10-28 pass, D4; the
    pair's size from the operator's direction of 2026-11-04, capture SHA-256
    `cc1746dc…`, WO-028-D021; the 2026-11-05 pass, D7.)
26. **Tools earn their place.** Every tool script in the target states its
    purpose and its status, in a gate, a helper or a module, in
    `docs/dev-reference/workspace/scripts.md`, and `npm run check:scripts`
    refuses a script without one. A tool stays because it is useful, never
    because it exists; a check runs in the gate only when it protects
    something worth checking on every change; CI runs the workspace checks
    once, through `nx run workspace-tools:lint`; and the scripts, their
    tests and the gates around them never take up the work for little gain
    (the operator's direction of 2026-10-28, capture SHA-256
    `66335ad095bbe814cd112c289b21b176429313d99f9a2dd31f1f3d1ce7d87dd2`;
    WO-019-D027).
27. **Research is read for quality.** The verifier of a research-heavy
    member, whether research is all it does or part of it, reads a random
    sample of the new research and judges its quality and content; it need
    not be perfect, but a pattern of low quality fails the order on those
    grounds, and the VER report names the sample, the command that drew it
    and the judgment (the operator's direction of 2026-11-04 in WO-028's
    verification, capture SHA-256
    `01ddf8780c481f59f1758d8814ad1fd617ba5fa81f85dd81173ac1769cc0c7a1`;
    WO-028-D018; the 2026-11-05 pass, D7).
28. **The rule of cool, scene-type orders only, in both directions.** The
    verifier of a scene-type member may fail a screen that is sloppy, poor
    UX or not cool, in the operator's nebulous sense: an antagonistic
    visitor who expects slop and after five minutes says that is pretty
    cool; the report says in the verifier's words what fell short. The flip
    side: work that misses some acceptance criterion but is too cool not to
    keep is recorded as such, the verifier naming the criterion and why,
    and the operator's waiver (`npm run resume -- waive`) carries the pass;
    a verifier waives nothing. The rule binds no research or document order
    (the operator's direction of 2026-11-04, capture `01ddf878…`;
    WO-028-D019; the 2026-11-05 pass, D7).
29. **The operator's full size.** A UI issue at the operator's full size
    fails an order; at other sizes it is a boarded follow-up. The full size
    is either 3840 by 1620, the ultrawide display at its high-DPI
    resolution, or the centre browser window of about 2080 by 1460 where the
    operator mostly opens the UI; a verifier reads the page at both beside
    rule 24's 360, 768 and 1440, and a pair (rule 25) renders at the centre
    window's size (the operator's directions of 2026-11-04, capture
    `01ddf878…`; WO-028-D020 and D021; the 2026-11-05 pass, D7). The
    direction's purpose, as the operator restated it: screenshots and
    end-to-end runs had been taken at viewports they do not use, which made
    those of little use though not worth removing; it asks for the
    viewports they use and never for an order that re-lays a page for size
    (2026-11-09, journal row 2026-11-10T02:23:06Z, digest `db38861f…`; the 2026-11-09 pass, D13).
30. **Rules over precedent.** A reused shape is judged by these rules and
    never by its precedent: "as WO-NNN did" names a procedure and exempts
    nothing; the authors', critics' and reviewers' briefs name the house
    rules, the verifier attacks the real corpus against them, and a defect a
    first batch set is a defect in every batch that copied it. The executor,
    the critics, the reviewers, the verifier and the final reviewer each read
    record content and model modules against the rules, not only against
    the brief (the operator's direction of 2026-11-04 in WO-028's final
    review, capture SHA-256 `f4f42e5c…`, message 8; WO-028-D041; the
    2026-11-05 pass, D7).
31. **Coding standards are a dedicated pass that occurs often.** Getting
    the functionality in first is understood inside an order, but coding
    standards are never an afterthought across the road: a dedicated
    standards pass recurs often and reads landed code as the pie-in-the-sky
    example other Angular developers are meant to copy, with every output
    unchanged and the shape it sets written into the next batches' briefs.
    WO-034 is the first (the operator's direction of 2026-11-05, journal row
    2026-11-05T15:26:03Z, digest `4d21fba1…`). When and where a pass is
    filed is each planning pass's judgment and no part of that direction:
    the planning pass reads the code that has landed since the previous one
    against these rules and files a standards pass where it measures
    residue; a standards pass is side work that runs in the lane beside a
    road order, and it gates only a batch that would copy the code it
    reshapes (WS-002 rule 6); and a family that takes a study as data and
    builds the presentation in one builder (`marbles`, `flow`) keeps its
    shape in that builder, so a batch landed through one owes no pass of its
    own, and a new family is built that way (the
    [2026-11-09 pass](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md),
    D3, replacing the 2026-11-05 pass's own reading, its D3, of one pass per
    planning pass ahead of the next feature order).

## Design: the Tipping Point taxonomy

Gladwell's three kinds of people who tip an epidemic name the three kinds of
component in a DotLn-Angular feature. The analogy stays because it answers the
one question a reader has when opening a component: **what is this allowed to
know?**

| Role      | Asks                   | Knows                        | May inject                                | Lives in                                                        |
| --------- | ---------------------- | ---------------------------- | ----------------------------------------- | --------------------------------------------------------------- |
| Salesman  | Does it look right?    | its own inputs               | nothing; a component that needs `ElementRef` or `DOCUMENT` is a wrapper, which may inject platform tokens (receipt 006; UI planning pass of 2026-10-21, D13) | `libs/shared/ui`, `libs/<app>/ui`                               |
| Connector | Does it fit together?  | other components             | nothing from the application              | `libs/shared/ui/composites`, `<feature>/composites`, `<feature>/layouts` |
| Maven     | What does it mean?     | the view model and the state | facades, stores, router, tokens           | `<feature>/mappers`, `<feature>/containers`                     |

**Knowledge flows down as inputs; intent flows up as outputs; only Mavens talk
to the outside world through injection.** Seven kinds, ordered by distance from
knowledge:

Salesmen, presentational, many and cheap:

- **1. Fragment.** Plain HTML, CSS and Angular's template syntax; one element's
  worth of UI (a badge, a label, an icon button). Their value scales
  logarithmically: the first ten matter, the next ninety are overhead, so
  compose instead of multiplying.
- **2. Template.** A Salesman that uses Angular features: content projection,
  `model()`, host bindings, directives, animations. Give it any content and it
  renders it.
- **3. Wrapper.** The only component that imports a behavior or vendor library
  (Angular Aria, the CDK, or a third-party UI library), or that owns a
  browser drawing API such as `<canvas>` (planning pass of 2026-10-24, D7).
  It maps the library's API to the house API, applies house defaults and is
  swappable; small tweaks only. Consultants, not family.

Connectors, composition:

- **4. Composite.** Composes Salesmen into one presentational unit with its own
  inputs and outputs (a card, a form section, a list row). Knows components,
  not data sources.
- **5. Layout.** Composes Composites into a region or a page through content
  projection and slots; knows what sits beside what and still nothing about
  state. (The germ gave this role a wrapper name; wrapper is reserved for
  vendor adapters.)

Mavens, knowledge:

- **6. Mapper.** Knows the view model's shapes and chooses the presentation for
  each (a discriminated union to `@switch` or `NgComponentOutlet`). Knows
  types, not stores.
- **7. Container.** The end of the proof (∎). Injects the facade, reads one `vm`
  signal, hands slices down, maps outputs to intents. One container per route
  or region; a container that needs a second screen of inputs is two
  containers.

Beside them, services: the **Facade** (`<Feature>Facade`) composes stores and
streams into one `vm: Signal<ViewModel>` and exposes intent methods that
dispatch events; it is the Container's only dependency. **Stores** live in
`-data-access` and `state`; **event groups** in `events`.

Rules that make the taxonomy legitimate, each enforced by a lint or a test,
not by memory:

- **R1 Knowledge down, intent up.** Salesmen and Connectors have inputs and
  outputs only. Lint refuses `inject(` under `fragments/`, `templates/`,
  `composites/` and `layouts/`; `wrappers/` may inject platform tokens.
- **R2 Two hops.** An output is forwarded at most twice before a Container
  handles it; a third hop means the container splits. Review checklist, no
  lint.
- **R3 Behavior and vendor libraries behind wrappers.** House rule 14,
  enforced by `no-restricted-imports` per path glob.
- **R4 Mavens stay thin.** A Container's class holds injection, the `vm` and
  intent mapping; logic lives in the facade, the stores and pure functions.
- **R5 Role by location.** The directory names the role, so a file in the
  wrong directory is a lint failure, not a review comment.
- **R6 The Law of the Few.** Tests concentrate where knowledge is: facades,
  stores, mappers and wrappers, the twenty percent that carry the risk.
  Salesmen get DOM tests only where they have behavior.
- **R7 Broken windows.** House rule 21.

Two contradictions in the germ, resolved: wrapper meant three things and now
means the vendor adapter only, with Layout the composition role and Mapper the
knowledge role; and the germ's mediator service without outputs is replaced by
outputs plus
the event stream, because presentational components stay pure and testable
without injection, the Container dispatches once, and the Events plugin's
stream is the mediator: visible to everyone, owned by no component. Keeping
the analogy is deliberate: it is sticky (people remember the book), teachable
in one table, and checkable (roles map to directories, directories map to
lint globs).

## The app and its sub-apps

DotLn is an agentic platform (the operator's words of 2026-09-05 in the
platform's intake). The app the workstream carries is what the operator
decided on 2026-10-24 (ignored intake capture
`docs/intake/notes/planning-2026-10-24.md`, SHA-256
`63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c`, entry 9;
core's record of the same decisions is
`docs/planning/passes/intake-mining-run-routing-2026-10-24.md` §10), paraphrased:

- One app with sub-apps behind a menu: a scene for authoring game AI, a view
  of DotLn's machinery, side utilities. One workstream for now; the logic in
  libraries so splitting later is cheap.
- The app is the sandbox: every new idea lives there first as a toy the
  operator plays with, then they promote what works. It serves all five UIFA
  roles, people and software actors alike, not agents alone.
- It informs DotLn through GitHub issues on the platform's repository, never
  by writing a control record.
- It is not wired to DotLn core. Its data comes from public mining into its
  own store, served to the UI through its own API. Scrubbed copies of the
  platform's public WO-221 and WO-226 records are a stopgap.
- The machinery view is a view into what DotLn core currently has: what
  exists, in what capacity, in what organization and with what relations,
  so that the operator can improve core and find gaps, no more and no less
  (the operator's restatement of 2026-11-09, journal row 2026-11-10T02:23:06Z, digest `db38861f…`; WO-046).
- A separate, later order replays a recorded work order: it shows its
  agents, how they worked with one another with the machinery each had
  then, and what a change to that machinery would have changed in the
  order or in their decisions (the operator's restatement of 2026-11-09, journal row 2026-11-10T02:27:22Z, digest `b5aa37ca…`; WO-016). Its purpose: tune the
  mechanisms until they run without the operator, then see agents working
  in concert.
- Workers are metaphors; today they are separate agents in their role slots.
  Select-then-apply first, drag later. The ideas the operator drops are
  theirs and are also saved to ignored intake.
- The soldier scene is its own sub-app, 2D first behind a renderer seam,
  Babylon.js later; manim may live in the monorepo later; the repository's
  name is not literal.
- The operator's model lives in the app first: a personality-fidelity digital
  twin with variations and old versions kept, nothing held back from it,
  the RxJS that describes the operator being the RxJS that runs. Its
  purpose is to show whether it would have made the same interventions as
  the operator would have within a stage; when a stage runs makes no
  difference to it (the operator's restatement of 2026-11-09, journal row 2026-11-10T02:23:06Z, digest `db38861f…`).
- Agents collaborate.

The designs the sub-apps build from are the operator's own research run of 2026-10-22 (core's ignored intake, read-only), the operator's own work and outside the clean room; each order names its design file by path and SHA-256 because the run may change, and carries the run's definitions, relations, hooks and toy designs as the app's data (rule 23 as corrected on 2026-10-26). The platform's records carry the contracts the board
still renders (DotLn `docs/product/04-interfaces.md` §Plural UI hosts, §Actor
board v0; `packages/console/uifa-board-v1.schema.json` as a kit file since
starter v0.93.0).

**The menu and the sub-apps (WO-013):** Scene (`/scene`), Machinery (the
actor board at `/board` and an arriving page at `/machinery`, where WO-046 puts
the view of what core has and WO-016's replay joins it later; the twin
joins at `/twin` with WO-017) and Tools (the catalog
under `/tools`, where the toy shelf joins it with WO-018). Rule 22 is the
grouping. The root route lands on the scene (WO-015; the 2026-10-26 pass, D10).

**A concept is a place to study an idea (WO-019; the operator's direction of
2026-10-26, capture SHA-256 `5742f0a7…`, entries 3 and 4; WO-019-D005):**
when the operator drills into a concept they want to know everything about
it from several sides: an intuitive explanation and a situation in which it
helps; a visual model of the important relationship, with change over time
inspectable through controlled steps; ordinary pseudocode and an RxJS
interpretation, the executable distinguished from the illustrative;
implementations in public projects and treatments in other references, with
attribution and each introduced on its own terms; limits, failure cases and
nearby concepts. The representations explain the same example where
practical; a definition from the run keeps its provenance and an authored
explanation is marked as authored; missing material stays missing rather
than filled. Not every representation is owed in every order: it is the
vision the work trends toward. WO-019 demonstrates it with one authored
Arrive study beside the joined definition, and the product document
`docs/product/concept-study.md` carries the direction; the catalog-wide program that extends it is the concept-study batches
(the 2026-10-30 second pass, D3 to D5): WO-020 lands the study record, its
check, the `motion` and `timeline` families, addressable readings, the
studied marks and twenty movement studies, and WO-021 to WO-024 land twenty
studies each for RxJS, the messaging patterns, the enterprise application
patterns, and Gödel, Escher, Bach with Team Topologies, a hundred concepts
selected by the most-related rule that pass recorded (D4), each batch landing
the visual family its ideas need. The later batches are the research track,
[WS-002](WS-002-concept-research.md): studies drawn by the families these
five land, with no new page, family or design round, run on the operator's
spare Codex capacity apart from this workstream's road and refilled by each
planning pass while the operator drains it (the operator's direction of
2026-11-04, capture SHA-256 `56c7d119…`; the 2026-11-04 pass, D6).

**The actor board (WO-006) and its data path (WO-007).**
The actor board, `uifa-board-v1`: five panels in the document's order
(Actors, Builds, Mechanisms, Work, Blueprint), each naming the UIFA roles it
serves and the question it answers, with sections, rows and evidence-linked
cells. The board renders a recorded, scrubbed board of this launchpad,
loaded through HTTP from the app's own API (`GET <apiBaseUrl>/uifa-board-v1`),
answered by MSW, with the versioned shape kept so the mining store's API
serves it later without a rewrite; the platform resident's loopback is not
read (the operator's decision of 2026-10-24). The data path is written in the target's
`docs/dev-reference/architecture/console.md`.

**Host rules** (from the platform's contract; each enforced by a spec or a
lint in WO-006; they govern the board):

- **H1 Version first.** The host checks `viewModelVersion` and shows the
  unavailable state, naming the version, when it is not the one it renders.
- **H2 Three cell states.** `known`, `unknown` and `unavailable` are
  rendered distinctly, each with a text equivalent; an unavailable source
  or section stays visible with its explanation, never an empty success.
- **H3 Label shown, key addressed.** `cell.label` is what a person reads;
  `cell.key` is the DOM and test identity.
- **H4 Local links only.** A link resolves to an id in the same board;
  the host never turns a link into a command or a URL.
- **H5 No second state machine.** The host derives no lifecycle legality
  from the table and dispatches nothing; a projection, never an authority.
  The same rule governs every sub-app: a scene, a strip or a lane decides
  nothing about the platform.

**Design rules** (from the platform's glyph grammar and the operator's
intake, read 2026-10-21; they govern every sub-app):

- **G1 Accessibility first.** House rule 18; keyboard paths through the
  behavior library, axe in e2e; a canvas is a projection of a frame the text
  layer also renders, and the text layer is the accessibility surface.
- **G2 Motion means transition.** A stable state is calm, idle actors are
  not animated, `prefers-reduced-motion` is honored (a scene does not
  autoplay under it; it steps on command), and every visual state has a
  text equivalent.
- **G3 Strings in the message system from the start.** House rule 9; the
  message system covers authored on-screen text, including record fields and
  generated study narration. A stored record is not a translation exemption;
  machine identifiers and executable inputs retain their meaning, with display
  labels supplied by messages ([WO-028-D042](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d042)).
- **G4 Skins over tokens.** Appearance is a token layer (`[data-skin]`);
  CSS never decides behavior, and no utility-class string lives in domain
  state. The plain skin ships first.
- **G5 Native emoji first for glyphs**, each with a text equivalent.
- **G6 Readable, fluid layout.** No fixed page width (the operator reads on an ultrawide display); the true value or `unknown`, never an invented number; a figure prints its sample size and its source; a record is shown in the form its reading needs, prose where it is read, an instrument where it is watched, a table where rows are compared, and a label-value list is never the default form of a page (the 2026-10-26 pass).

**Design direction** (rule 25, briefed by the 2026-10-26 pass from the
operator's judgment of that day; each order's brief specializes it): the
subject is the page. On a scene the field fills the viewport below the
header and the chrome recedes; on a reading surface the text sits in a
65ch to 70ch measure with a real type scale. One role palette colours the
units of the scene, the slots of the machinery view and the actors of the
board; one work palette colours a tool's provenance in the catalog, the
rail and the toy shelf. Figures that are watched read as instruments: a
large numeral, a small label, a sparkline. Relations, hooks, obligations
and mechanisms read as prose and lists of names, never as a definition-list
grid, and no page is a card grid of records. Motion only when something
moves, nothing animated at rest (G2). The shell and the board adopt the
direction in the order that next touches them (the 2026-10-26 pass, §10
C1). The look of each page is chosen through the operator's eye doctor test
(rule 25): rendered pairs, each preference making the next pair, until the
operator says the process is done; the catalog's reading surface was settled
that way over twenty-two rounds (`docs/evidence/WO-019/design/`).

**Operating rules** (from the platform's product 04 §Later console hosts,
WO-006-D022 and the operator's decisions of 2026-10-24; each enforced by
WO-007 and the members after it):

- **I1 Persistence.** State the operator makes while playing (the selected
  panel, compositions, dropped ideas, the chosen twin variant) persists in a
  store the app owns, apart from any control record: browser storage through
  one persisted-state feature now (WO-007), the mining store later.
- **I2 Isolation.** Using the app never writes a control record, moves a
  lifecycle phase or disturbs a worktree or a gate; the app writes only
  through browser storage, HTTP to its own API, and the local idea sink
  (WO-016), a Node process on the loopback that appends the operator's ideas
  to the repository's ignored intake. Promotion of an idea is a GitHub issue
  the operator files, never an effect the app performs.
- **I3 Versioned contracts.** The app's own data contracts are versioned
  (`tool-v1` and `scene-v0` today, `control-event-lite-v0` with WO-016 and
  `toy-v0` with WO-018) and the board keeps `uifa-board-v1` as its response
  shape, so a newer app reads older data and a later API serves the same shapes.

**The method:** toys first, accepted by use. Every idea lands as a toy the operator plays with; the operator's play is the judgment, and every page is accepted by someone using it against the session its order states (rule 24); what works is promoted as a GitHub issue on the platform's repository. Each page's look is chosen by the
operator's eye doctor test (rule 25) during the order that lands it, never as
a gate before a sub-app is built; the designs the orders build from are the
operator's own research run (planning pass of 2026-10-24, D2 and D13).

**What has landed and what lies ahead.** Landed so far: the shell's menu with Scene, Machinery and
Tools (WO-013); the actor board over the app's own API (WO-006, WO-007); the
catalog (WO-014) read as six works on a shelf, a chapter and its concepts, a
definition in a reading measure with its relations and hooks, the scene's
tools typed, and one authored Arrive study (WO-019); the soldier scene as the
root route, the pure engine, the rail of sixteen tools with their
definitions, flock, arrive and the formations, released as `DotLn Angular
v0.6.0` (WO-015); the research track's first batch, twenty more movement
studies, with the shared study message and model migration the operator
included in it, every study's text in the message system and every model
split into simulation, presentation and entry, released as `DotLn Angular
v0.10.0` (WS-002's WO-028); the gate tools and standing documents saying
and checking what is so, the board count reading a marker wherever a
defect is boarded, `check:scripts` failing on a missing or stale row and
the title workflow leaving a gitmoji-and-subject title as written, released as `DotLn Angular v0.10.1` (WO-027); the first standards pass, the first movement batch's twenty presentations reshaped with every output unchanged, the study guards tightened, the drawing's marks tidied and the wall study shown doing its avoidance, released as `DotLn Angular v0.10.2` (WO-034); twenty enterprise application pattern studies, sixteen stepped in `states` registers from small executable models and four structural, each naming where the app embodies it, released as `DotLn Angular v0.11.0` (WO-023); the second standards pass, the enterprise batch's sixteen presentations on compiler-checked lookup tables and shared helpers, the `states` builder inferring a move's transition, one model-study loader, Foreign Key Mapping's read limit repaired and the narrow register's headings decided, every other output unchanged, released as `DotLn Angular v0.11.1` (WO-039). What lies ahead, in the
sequence's order, then the later members with their reopening conditions
(the planning document of 2026-10-24 §10 carries the NoOp records):

| Member or candidate | What the operator sees or does | State or reopening condition |
| --- | --- | --- |
| WO-025 the launchpad's documents | nothing on screen; every standing document of this launchpad read as what is so, the profile in the shape the operator chose | merged; #43, `Launchpad v0.3.4` |
| WO-026 DotLn-Angular's documents | nothing on screen; the README, the developer reference, the AI reference and the library READMEs read as what is so | merged; DotLn-Angular #10, `DotLn Angular v0.6.1` |
| WO-020 the movement studies | twenty studied concepts in AI for Games, each a study with a stepped drawing, pseudocode, references, limits and nearby concepts; studied marks on the shelf and in the contents; readings that Back and a shared link return to | merged; DotLn-Angular #11, `DotLn Angular v0.7.0` |
| WO-021 the RxJS studies | twenty operators and subjects with marble drawings their tests share | merged; DotLn-Angular #12, `DotLn Angular v0.8.0` |
| WO-022 the messaging studies | twenty patterns with flows stepping messages through channels | merged; DotLn-Angular #13, `DotLn Angular v0.9.0` |
| WO-027 the workspace says and checks what is so | nothing on screen; CI's board count that counts a marker wherever a defect sits, a `check:scripts` that fails on a missing or stale row, a title workflow that leaves a gitmoji-and-subject title as written, reference documents whose command lists match the gate | merged; DotLn-Angular #15, `DotLn Angular v0.10.1` |
| WO-034 standards pass I | the first movement batch's code read as the example, the wall study explaining its brief clearance correction, the guards tightened | merged; DotLn-Angular #16, `DotLn Angular v0.10.2` |
| WO-023 the enterprise pattern studies | twenty patterns, sixteen stepped in state drawings from small executable models and four structural, each naming where the app embodies it | merged; DotLn-Angular #17, `DotLn Angular v0.11.0` |
| WO-039 standards pass II | nothing new on screen but the narrow register's state headings, which keep two thirds of their size at 360 and break a longer name across two lines; the enterprise batch's code read as the example an executable-model batch copies, Foreign Key Mapping's limit counting what it should | merged; DotLn-Angular #18, `DotLn Angular v0.11.1` |
| WO-036 walls and ways | walls and obstacles drawn on the field, a squad routing around them, replanning, a no-route state they can read, head-on pairs parting, a crowd that comes to rest | filed; the scene leads |
| WO-024 levels, loops and teams | ten Gödel, Escher, Bach and ten Team Topologies concepts with relations drawings | filed; beside WO-036 |
| WO-037 shooting and bullets | units firing at a target, bullets stopped by walls, a moving target led by the firing solution, hits counted, a knockout that re-lays the formation | filed |
| WO-040 standards pass III | nothing new on screen but nineteen flow state sentences that read as English; both movement batches reading as one example | filed; beside WO-037 |
| WO-008 authentication and permissions | sign-in through the mocked provider, an account page that says in prose who is signed in and what they may do, a denied page that names the missing permission, a session that refreshes once and ends cleanly | filed |
| WO-045 the grid family and the A* study | the A* search stepped cell by cell with its heuristic switched off and on; the inspector's link from a tool to its study; the two avoidance studies showing what the scene runs | filed; beside WO-008 |
| WO-044 find the studies | every studied concept on one page by work and chapter; each work a link on the Tools home; studied counts in the contents; a mark on a nearby link that leads to another study | filed |
| WO-035 every string on screen through the message system | nothing changed on screen; the catalog's mined text arriving through the message system, a missing message a visible failure | filed |
| WO-046 the machinery view | what DotLn core has at a named commit: its roles, mechanisms, hosts and installed surfaces by level, a relation followed from a role to a mechanism to the surfaces that implement it, and the gaps | filed |
| WO-017 the twin's first lane | a recorded stage's events with their own interventions marked and the twin's beside them, each read as matched, missed or extra | filed |
| WO-016 the replay of a recorded order | one order's agents and how they interacted given their machinery at the time; a change to that machinery and what it would have changed | filed; a later order, its text as filed |
| WO-018 the toy shelf | nineteen toys read in full on the shelf; their tools followed into the catalog; the next toy picked | filed |
| WO-043 the first public mining | The Art of War in the catalog with its maxims; six new toys on the shelf | filed |
| the mining store and the app's API | the committed data and the copies replaced by a store the app fills from public sources | after WO-043, when the operator names the next public source, or when the copies limit a toy (C1) |
| the Babylon.js painter | the scene in 3D behind the same renderer seam | the operator asks (C2) |
| manim in the monorepo | animations beside the toys | the operator's word (C3) |
| the graduation route | a toy's card becomes a GitHub issue on the platform's repository from the app | the first promotion (C4) |
| the run's remaining toys | the fleet, the blackboard, the flow instruments, the commander, the heat map, the fidelity board, the blind replay, the ring, the shelf, the did-not-stick table, the phrase shelf, the ladder replay, by their ids in the run | the operator picks one from the toy shelf after playing (C5) |
| the twin's later lanes | the grid over a dozen orders, the operator's own blind replay, the ring | WO-017 merged and the operator names the lane (C6) |

Core declined the console framework decision on 2026-10-21: the framework
is the fork's choice for its shell, and core keeps the contract as the
boundary. WO-006's bundle readings are the fork's own evidence, refined by
WO-006-D014's per-package attribution when a change to the providers or
the initial bundle reopens it.

## The operator's model

The twin's rules (WO-017 carries the first lane): the model lives in the
app first; it is RxJS code, a `TwinVariant` per file with named parameters,
never a configuration an interpreter reads; every variant ever written
stays in the registry and a check refuses a removed one; nothing in the
app's data is held back from a variant; a kept flip is exported as a new
variant the operator commits (the operator's decisions of 2026-10-24). The
twin is read by whether it would have made the same interventions as the
operator would have within a stage, and nothing about when a stage runs
enters that reading (the operator's restatement of 2026-11-09, journal row 2026-11-10T02:23:06Z, digest `db38861f…`).

## Delivery states

| Member | State    | Evidence                              |
| ------ | -------- | ------------------------------------- |
| WO-003 | merged   | [evidence](../evidence/WO-003/README.md) |
| WO-004 | merged   | [evidence](../evidence/WO-004/README.md) |
| WO-011 | merged   | #12, `Launchpad v0.3.2`; [evidence](../evidence/WO-011/README.md) |
| WO-005 | merged   | DotLn-Angular #3, its records #13; [evidence](../evidence/WO-005/README.md) |
| WO-012 | merged   | #18, `Launchpad v0.3.3`; [evidence](../evidence/WO-012/README.md) |
| WO-006 | merged   | DotLn-Angular #4, `DotLn Angular v0.1.0`, its records #20; [evidence](../evidence/WO-006/README.md) |
| WO-007 | merged   | DotLn-Angular #5, `DotLn Angular v0.2.0`, its records #25; its decisions, verification and final review in the target under `docs/dotln/`; [evidence](../evidence/WO-007/README.md) |
| WO-013 | merged   | DotLn-Angular #6, `DotLn Angular v0.3.0`, its records #30; [evidence](../evidence/WO-013/README.md) |
| WO-014 | merged   | DotLn-Angular #7, `DotLn Angular v0.4.0`, its records #31; [evidence](../evidence/WO-014/README.md) |
| WO-019 | merged   | DotLn-Angular #8, `DotLn Angular v0.5.0`, its records #37; [evidence](../evidence/WO-019/README.md) |
| WO-015 | merged   | DotLn-Angular #9, `DotLn Angular v0.6.0`, its records #40; [evidence](../evidence/WO-015/README.md) |
| WO-016 | filed    | [the order](../work-orders/WO-016-machinery-view.md) |
| WO-008 | filed    | [the order](../work-orders/WO-008-authentication-and-permissions.md) |
| WO-017 | filed    | [the order](../work-orders/WO-017-digital-twin-patience-lane.md) |
| WO-018 | filed    | [the order](../work-orders/WO-018-art-of-war-map-and-toys.md) |
| WO-025 | merged   | #43, `Launchpad v0.3.4`; [evidence](../evidence/WO-025/README.md) |
| WO-026 | merged   | DotLn-Angular #10, `DotLn Angular v0.6.1`, its records #44; [evidence](../evidence/WO-026/README.md) |
| WO-020 | merged   | DotLn-Angular #11, `DotLn Angular v0.7.0`, its records #45; [evidence](../evidence/WO-020/README.md) |
| WO-021 | merged   | DotLn-Angular #12, `DotLn Angular v0.8.0`, its records #48; [evidence](../evidence/WO-021/README.md) |
| WO-022 | merged | DotLn-Angular #13, `DotLn Angular v0.9.0`, its records #50; [evidence](../evidence/WO-022/README.md) |
| WO-023 | merged | DotLn-Angular #17, `DotLn Angular v0.11.0`, its records #67; [evidence](../evidence/WO-023/README.md) |
| WO-024 | filed    | [the order](../work-orders/WO-024-concept-studies-geb-and-team-topologies.md) |
| WO-027 | merged   | DotLn-Angular #15, `DotLn Angular v0.10.1`, its records #61; [evidence](../evidence/WO-027/README.md) |
| WO-034 | merged | DotLn-Angular #16, `DotLn Angular v0.10.2`, its records #66; [evidence](../evidence/WO-034/README.md) |
| WO-035 | filed    | [the order](../work-orders/WO-035-catalog-text-through-messages.md) |
| WO-036 | filed    | [the order](../work-orders/WO-036-scene-walls-and-ways.md) |
| WO-037 | filed    | [the order](../work-orders/WO-037-scene-shooting-and-bullets.md) |
| WO-039 | merged | DotLn-Angular #18, `DotLn Angular v0.11.1`, its records #70; [evidence](../evidence/WO-039/README.md) |
| WO-040 | filed    | [the order](../work-orders/WO-040-standards-pass-movement-second-batch.md) |
| WO-045 | filed    | [the order](../work-orders/WO-045-grid-family-and-a-star-study.md) |
| WO-046 | filed    | [the order](../work-orders/WO-046-machinery-view-what-core-has.md) |
| WO-043 | filed    | [the order](../work-orders/WO-043-art-of-war-map-pass.md) |
| WO-044 | filed    | [the order](../work-orders/WO-044-find-the-studies.md) |

<!-- dotln-workstream:start -->
{ "id": "WS-001", "members": [{ "workOrderId": "WO-003", "repositoryId": "self" }, { "workOrderId": "WO-004", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-011", "repositoryId": "self" }, { "workOrderId": "WO-005", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-012", "repositoryId": "self" }, { "workOrderId": "WO-006", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-007", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-013", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-014", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-019", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-015", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-016", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-008", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-017", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-018", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-025", "repositoryId": "self" }, { "workOrderId": "WO-026", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-020", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-021", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-022", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-023", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-024", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-027", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-034", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-035", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-036", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-037", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-039", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-040", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-045", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-043", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-044", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-046", "repositoryId": "dotln-angular" }], "edges": [{ "from": "WO-003", "to": "WO-004", "relation": "hard" }, { "from": "WO-004", "to": "WO-005", "relation": "hard" }, { "from": "WO-011", "to": "WO-005", "relation": "hard" }, { "from": "WO-005", "to": "WO-006", "relation": "hard" }, { "from": "WO-012", "to": "WO-006", "relation": "hard" }, { "from": "WO-006", "to": "WO-007", "relation": "hard" }, { "from": "WO-007", "to": "WO-013", "relation": "hard" }, { "from": "WO-013", "to": "WO-014", "relation": "hard" }, { "from": "WO-014", "to": "WO-019", "relation": "hard" }, { "from": "WO-019", "to": "WO-015", "relation": "hard" }, { "from": "WO-019", "to": "WO-020", "relation": "hard" }, { "from": "WO-015", "to": "WO-020", "relation": "hard" }, { "from": "WO-020", "to": "WO-021", "relation": "hard" }, { "from": "WO-020", "to": "WO-022", "relation": "hard" }, { "from": "WO-021", "to": "WO-022", "relation": "hard" }, { "from": "WO-020", "to": "WO-023", "relation": "hard" }, { "from": "WO-015", "to": "WO-026", "relation": "hard" }, { "from": "WO-023", "to": "WO-027", "relation": "reference-only" }, { "from": "WO-024", "to": "WO-027", "relation": "reference-only" }, { "from": "WO-023", "to": "WO-039", "relation": "hard" }, { "from": "WO-034", "to": "WO-039", "relation": "hard" }, { "from": "WO-007", "to": "WO-008", "relation": "hard" }, { "from": "WO-013", "to": "WO-016", "relation": "hard" }, { "from": "WO-008", "to": "WO-017", "relation": "hard" }, { "from": "WO-014", "to": "WO-018", "relation": "hard" }, { "from": "WO-019", "to": "WO-018", "relation": "hard" }, { "from": "WO-020", "to": "WO-024", "relation": "hard" }, { "from": "WO-039", "to": "WO-024", "relation": "hard" }, { "from": "WO-023", "to": "WO-035", "relation": "reference-only" }, { "from": "WO-024", "to": "WO-035", "relation": "reference-only" }, { "from": "WO-044", "to": "WO-035", "relation": "hard" }, { "from": "WO-015", "to": "WO-036", "relation": "hard" }, { "from": "WO-035", "to": "WO-036", "relation": "reference-only" }, { "from": "WO-036", "to": "WO-037", "relation": "hard" }, { "from": "WO-034", "to": "WO-040", "relation": "hard" }, { "from": "WO-039", "to": "WO-040", "relation": "hard" }, { "from": "WO-018", "to": "WO-043", "relation": "hard" }, { "from": "WO-035", "to": "WO-043", "relation": "hard" }, { "from": "WO-019", "to": "WO-044", "relation": "hard" }, { "from": "WO-024", "to": "WO-044", "relation": "reference-only" }, { "from": "WO-036", "to": "WO-045", "relation": "hard" }, { "from": "WO-040", "to": "WO-045", "relation": "hard" }, { "from": "WO-013", "to": "WO-046", "relation": "hard" }, { "from": "WO-035", "to": "WO-046", "relation": "reference-only" }] }
<!-- dotln-workstream:end -->
