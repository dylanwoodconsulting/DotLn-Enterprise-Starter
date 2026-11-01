# WO-021 execution evidence

RxJS now has twenty studied concepts: the operators and subjects most related to the rest of the
work, nine of which the app itself uses, each with an executable marble example that the study's
drawing and its test share. The shelf counts them, a
chosen work lists them, and each opens to a study written for this app on one example: the idea and
a situation it serves, a marble diagram the reader steps by hand or plays, with a text equivalent,
the ordinary pseudocode with the worked frames, the RxJS reading whose code is the module the spec
runs, public implementations and references, limits with a visible failure, nearby concepts and the
next study. The diagram opens on its last frame, the whole run; stepping back or pressing Play
watches the output lane fill in, each value riding down from the emission it comes from.

The operator made every choice about how a marble diagram looks and moves in
[fifteen comparison rounds](design/comparisons.md) and three directions, then ended them with round
15's answer (D019); the gliding line, the pulse and the riding value are theirs. The workers were
Claude `dotln-worker` agents in session-scratch copies (D003); summed with the session's own
reading, as D004 counts, the fan-out stood at 64.6 per cent of its stop figure before the reviews
([the fan-out](fan-out.md) has the figures, the handoff the final reading).

See the decisions, filed in the target at `docs/dotln/evidence/WO-021/decisions.md` with the
verification reports and the final review, then [the fan-out](fan-out.md), [the critics' findings](review.md),
[the comparisons](design/comparisons.md), [the rejected candidates](design/rejected-implementations.md),
[the executor walkthrough](walkthrough.md) with its screenshots under [walkthrough/](walkthrough/),
[the self-review](self-review.md), [host qualification](host-qualification.md), [the handoff](handoff.md)
and [the pull request record](preview-pr.json). The independent verifier's walkthrough is in the
verification reports, with its probes under [verification/](verification/).

## What the decisions settled

D001 is the base, D002 the publishing rule, D003 the Claude workers in scratch copies, D004 the
fan-out's stop figure and D005 how switchMap became the executor's worked example and nineteen
concepts fell to ten authors. D006 to D010, D012 to D016 and D018 are the comparison rounds; D011
and D017 are directions the operator gave between them (every frame is a step; the line glides and
an emission is animated), and D019 is round 15's pick with its two directions (an output lane shows
nothing before its frame; the example opens on its last frame) and the end of the rounds. D020 is
the one bundle decision: the per-frame duration moved to the model module so the Tools feature chunk
no longer carries the marble parser. D021 records that no comparison candidate had a file of its
own and gives the grep that stands in for criterion 8's `ls`; D022 the cut-off ring and the courier's
named origin, the two family changes the critics and reviewers caused; D023 why `repeat` cites no
public implementation; D024 the end of the review rounds and the three deferrals. D025 to D028 are
the verification: the blocker the first report raised, the residue section it boarded, its probe
corrections, and the operator-directed recovery, whose commit met criterion 9 and whose waiver was
retracted. D029 to D031 are the final review: the acceptance, and the two follow-ups it boarded.

## The checks, as they ran on the final tree

The order's Preflight line ran as one script in the target worktree on 2026-11-01 from 06:59:08Z
to 07:02:43Z, after the last code change, each command in the order the line gives it; the visual
suite ran at 06:46Z on the tree before the recheck's fixes, which changed no rendering (specs,
fixtures, a guard in the builder and documentation), and the gate runs it again. Earlier attempts
of the line are in [host qualification](host-qualification.md).

| Command | Result |
| --- | --- |
| `npx nx format:check` | exit 0, 1 s |
| `npx nx run-many -t lint test build` | exit 0, 97 s: 20 projects lint (4 Playwright `no-wait-for-timeout` warnings, 0 errors), every project's Vitest passes (the tools library 58 files, 515 tests), the production build within its budgets |
| `npm run lint:fixtures` | exit 0, 3 s |
| `npm run lint:components` | exit 0 |
| `npm run lint:hygiene` | exit 0 |
| `npm run check:fixtures` | exit 0: the board and scene fixtures, the catalog (8 checkpoints, 3,463 tools) and the study check |
| `npm run studies:check` | exit 0: 40 records, 0 problems; `--write-summary` had rewritten `studies-summary.json` |
| `npm run test:tooling` | exit 0: 71 tests, the named-file parse case, the RxJS rules and batch ids included |
| `npm run i18n:check` | exit 0 |
| `npm run check:bundle` | exit 0, 6 s: 403,427 initial bytes, no route code in the initial graph, the menu available without Tools |
| `npx nx e2e dotln-e2e` | exit 0, 103 s: 132 passed, the step 9 cases, axe and the three widths included |
| `npx nx run dotln-e2e:e2e-visual` | exit 0: 50 passed in 21.3 s against every baseline, the three marbles baselines included |
| `npm run studies:links` | 99 distinct RxJS URLs, every one answering 200 (the table below) |
| `git diff --stat HEAD -- package.json package-lock.json` | prints nothing: the dependencies keys equal the base's |
| `node scripts/target-gate.mjs WO-021`, launchpad worktree | PASS at `4c21c58` in 51 s: install, lint, typecheck, test, format |
| `node scripts/target-gate.mjs WO-021 --review`, launchpad worktree | PASS at `4c21c58` in 75 s: install, lint, typecheck, test, format, build, e2e, visual; `test`, `build` and `e2e` restored from Nx's cache of the Preflight's passing runs, the rest ran |
| `npm run test:docs`, launchpad worktree | run once after the last document edit, as the last step before `implementation-ready`; the lifecycle's own document row records its result, since no document written before the run can |

## The criteria' own commands

Each ran on 2026-11-01 on the final tree; the command is as the order writes it, the output as
printed.

| Criterion | Command, where | Output |
| --- | --- | --- |
| 9 | the step 2 one-liner over `dotln.config.json`, launchpad worktree | `30 true true 17` |
| 9 | `grep -c '^/\.runtime/$' .gitignore`, target | `1` |
| 9 | `git ls-files --others --ignored --exclude-standard` filtered by the thirty declared roots, target | 7 paths remain, all installed by the target harness bundle's manifest: `.claude/hooks/concurrent-work-requires-worktrees.mjs`, `.claude/hooks/no-attribution.mjs`, `.claude/hooks/permissions.mjs`, `.claude/hooks/presence-pretooluse.mjs`, `.claude/settings.json`, `.claude/target-worker-manifest.json`, `CLAUDE.local.md` |
| 10 | `node tools/scripts/catalog/check-studies.mjs <a file holding the text { not json>`, target | `FAIL check-studies: <the file>: at /: schema type`, exit 1; the case is `tools/studies.test.mjs`, "a named file that does not parse" |
| 10 | `grep -c 'readonly step = computed' libs/features/tools/src/lib/composites/study-explanation/study-explanation.ts` | `0` |
| 10 | `grep -c '/tools/catalog/<tool id>' README.md` | `1` |
| 10 | the spec with a record whose family has no motion frames | `tools.facade.spec.ts`, "draws a study whose family has no motion frames, and scrubs it by frame", counted in `npx nx test tools` |
| 7 | `grep -c "marble" docs/ai-reference/catalog-rules.md` | `2`; `catalog.md` §Studies' coverage table reads `RxJS \| twenty` |
| 3 | records marking `rxjs` illustrative | none: 20 of 20 are executable, so neither admitted exception (observeOn, materialize) was taken |
| 2 | the twenty ids under `libs/shared/catalog/src/studies/rxjs/` | the order's twenty, no substitution; every record `checked` with the two critics in `reviewedBy` |
| 6 | `git diff --stat HEAD -- package.json package-lock.json` | nothing: the dependencies keys equal the base's |

## Sizes

From the production build of the final tree, beside WO-020's final figures as the base. Raw and
transfer are the build's own columns; the rows the build table leaves unnamed are measured on the
file (`gzip -9`), marked so.

| Chunk | Base, raw / transfer | Now, raw / transfer |
| --- | --- | --- |
| Initial total | 399.30 kB / 111.38 kB | 403.43 kB / 113.11 kB |
| Tools feature (`index`) | 166.94 kB / 36.07 kB | 184.62 kB / 39.12 kB |
| `rxjs`, all twenty records | none | 187.03 kB / 42.03 kB |
| `aifg`, all twenty records | 164.38 kB / 40.0 kB | 164.38 kB / 40.02 kB |
| The marble builder with `rxjs/testing`, one lazy chunk shared by the twenty | none | 14,546 bytes / 5,081 bytes gzip |
| Each RxJS example module | none | 1.2 to 2.4 kB raw, 0.6 to 1.1 kB gzip |
| `study-explanation` | 7.80 kB / 2.3 kB | 8,151 bytes / 2,762 bytes gzip |
| `studies-summary-json` | 808 bytes | 1,448 bytes |
| `catalog-summary-json` | 23.47 kB / 4.6 kB | 23.47 kB / 4.60 kB |
| The eight tool chunks | unchanged | unchanged, 3,463 rows in eight lazy chunks |

The figures are the production build of the final tree (the build's own table for the named rows;
`gzip -9` of the file in `dist/apps/dotln/browser` for the rows the table leaves unnamed). The final
review measured the unnamed rows again on that build: the builder's row had been taken at 06:42Z,
before the recheck's label guard added 125 bytes, and is corrected above; the others stand. The initial bundle grew 4.13 kB raw. The bundle check's report puts no catalog,
study or Tools module in the initial graph (`lazyCodeInInitial` is empty) and attributes the
entry's bytes to the shell, the shared libraries and the framework; which of those grew was not
measured against a base build, so the cause is not claimed here. The Tools feature chunk grew 17.68
kB raw for the marbles composite, its drawing module and styles; it had grown 31.5 kB before D020
moved the per-frame constant out of the builder.

## The link check

`npm run studies:links` opened every cited address once from the executor's session on 2026-11-01.
The RxJS twenty cite 99 distinct URLs and every one answers 200; the factual critic opened each as
well and marked none unsupported (one clause on switchMap's API page was reworded, review.md). The
movement batch's DOI still answers 403 at the publisher, as WO-020 recorded.

| Status | URL | Cited by |
| --- | --- | --- |
| 200 | https://rxjs.dev/api/index/class/BehaviorSubject | behavior-subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/BehaviorSubject.ts | behavior-subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/docs_app/content/guide/subject.md | behavior-subject, subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/docs_app/content/guide/testing/marble-testing.md | behavior-subject, subject |
| 200 | https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/libs/features/scene/src/lib/clock/scene-clock.ts | behavior-subject, subject, switch-map |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/router/src/router_state.ts | behavior-subject |
| 200 | https://rxjs.dev/api/index/function/catchError | catch-error |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/catchError.ts | catch-error |
| 200 | https://angular.dev/guide/http/making-requests | catch-error, retry, share-replay, share, timeout |
| 200 | https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/libs/shared/data-access/src/lib/with-command.ts | catch-error |
| 200 | https://github.com/angular/angular/blob/v22.2.3/packages/router/src/router_preloader.ts | catch-error |
| 200 | https://github.com/ngrx/platform/blob/22.0.1/modules/effects/src/effects_error_handler.ts | catch-error |
| 200 | https://rxjs.dev/api/index/function/combineLatest | combine-latest |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/observable/combineLatest.ts | combine-latest |
| 200 | https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest | combine-latest |
| 200 | https://rxjs.dev/guide/testing/marble-testing | combine-latest, concat-map, exhaust-map, materialize, merge-map, observe-on, repeat, replay-subject, retry, scan, share-replay, share, start-with, switch-map, take-until, timeout |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/router/src/operators/prioritized_guard_value.ts | combine-latest |
| 200 | https://rxjs.dev/api/index/function/concatMap | concat-map |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/concatMap.ts | concat-map |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/mergeInternals.ts | concat-map, merge-map |
| 200 | https://rxjs.dev/guide/higher-order-observables | concat-map, merge-map |
| 200 | https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/libs/shared/state/src/lib/navigation-store.ts | concat-map |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/router/src/operators/check_guards.ts | concat-map, merge-map |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/router/src/operators/resolve_data.ts | concat-map, merge-map |
| 200 | https://rxjs.dev/api/index/function/exhaustMap | exhaust-map |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/exhaustMap.ts | exhaust-map |
| 200 | https://github.com/ngrx/platform/blob/4b310dd1e73d7335483e919d8ac909bf2638a8f9/projects/example-app/src/app/auth/effects/auth.effects.ts | exhaust-map |
| 200 | https://rxjs.dev/api/index/function/finalize | finalize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/finalize.ts | finalize |
| 200 | https://rxjs.dev/guide/glossary-and-semantics | finalize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/Subscription.ts | finalize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/Subscriber.ts | finalize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/CHANGELOG.md | finalize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/tap.ts | finalize |
| 200 | https://github.com/angular/angular/blob/d9514bbe66f86f4799cbeadac896c39488bf7cae/packages/core/src/pending_tasks.ts | finalize |
| 200 | https://github.com/angular/angular/blob/d9514bbe66f86f4799cbeadac896c39488bf7cae/packages/common/http/src/backend.ts | finalize, timeout |
| 200 | https://github.com/angular/angular/blob/d9514bbe66f86f4799cbeadac896c39488bf7cae/packages/router/src/navigation_transition.ts | finalize |
| 200 | https://rxjs.dev/api/index/function/materialize | materialize |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/materialize.ts | materialize |
| 200 | https://rxjs.dev/api/index/class/Notification | materialize |
| 200 | https://github.com/ngrx/platform/blob/19.0.0/modules/effects/src/effect_sources.ts | materialize |
| 200 | https://github.com/ngrx/platform/blob/19.0.0/modules/effects/src/effects_resolver.ts | materialize |
| 200 | https://rxjs.dev/api/index/function/mergeMap | merge-map |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/mergeMap.ts | merge-map |
| 200 | https://rxjs.dev/api/index/function/observeOn | observe-on |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/observeOn.ts | observe-on |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/scheduler/AnimationFrameAction.ts | observe-on |
| 200 | https://rxjs.dev/api/index/const/animationFrameScheduler | observe-on |
| 200 | https://rxjs.dev/guide/scheduler | observe-on |
| 200 | https://rxjs.dev/api/index/const/queueScheduler | observe-on |
| 200 | https://github.com/ngrx/platform/blob/22.0.1/modules/store/src/state.ts | observe-on |
| 200 | https://rxjs.dev/api/index/function/repeat | repeat |
| 200 | https://rxjs.dev/api/index/interface/RepeatConfig | repeat |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/repeat.ts | repeat |
| 200 | https://rxjs.dev/api/index/class/ReplaySubject | replay-subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/ReplaySubject.ts | replay-subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/Subject.ts | replay-subject, subject |
| 200 | https://rxjs.dev/guide/subject | replay-subject |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/shareReplay.ts | replay-subject, share-replay, share |
| 200 | https://github.com/angular/angular/blob/v22.2.3/packages/core/rxjs-interop/src/to_observable.ts | replay-subject |
| 200 | https://rxjs.dev/api/index/function/retry | retry |
| 200 | https://rxjs.dev/api/index/interface/RetryConfig | retry |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/retry.ts | retry |
| 200 | https://github.com/angular/angular-cli/blob/v22.2.3/packages/angular_devkit/architect/testing/test-project-host.ts | retry |
| 200 | https://rxjs.dev/api/index/function/scan | scan |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/scan.ts | scan |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/scanInternals.ts | scan |
| 200 | https://rxjs.dev/guide/overview | scan |
| 200 | https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/libs/features/scene/src/lib/facades/scene.facade.ts | scan, start-with, take-until |
| 200 | https://github.com/ngrx/platform/blob/19.0.0/modules/store/src/state.ts | scan |
| 200 | https://rxjs.dev/api/index/function/shareReplay | share-replay |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/share.ts | share-replay, share |
| 200 | https://rxjs.dev/deprecations/multicasting | share-replay, share |
| 200 | https://github.com/ngrx/platform/blob/22.0.1/modules/component-store/src/component-store.ts | share-replay |
| 200 | https://github.com/ngrx/platform/blob/22.0.1/modules/data/src/dispatchers/entity-dispatcher-factory.ts | share-replay |
| 200 | https://rxjs.dev/api/index/function/share | share |
| 200 | https://github.com/ngrx/platform/blob/22.0.1/modules/store-devtools/src/extension.ts | share |
| 200 | https://rxjs.dev/api/index/function/startWith | start-with |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/startWith.ts | start-with |
| 200 | https://angular.dev/ecosystem/rxjs-interop | start-with |
| 200 | https://github.com/angular/angular/blob/v22.2.3/packages/core/rxjs-interop/src/to_signal.ts | start-with |
| 200 | https://github.com/angular/angular/blob/v22.2.3/packages/router/src/operators/prioritized_guard_value.ts | start-with |
| 200 | https://github.com/angular/components/blob/v22.2.3/src/cdk/layout/breakpoints-observer.ts | start-with |
| 200 | https://rxjs.dev/api/index/class/Subject | subject |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/core/src/event_emitter.ts | subject |
| 200 | https://rxjs.dev/api/index/function/switchMap | switch-map |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/switchMap.ts | switch-map |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/router/src/navigation_transition.ts | switch-map |
| 200 | https://rxjs.dev/api/index/function/takeUntil | take-until |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/takeUntil.ts | take-until |
| 200 | https://github.com/cartant/eslint-plugin-rxjs/blob/e3e8fedb676f9d0f1a11a6d2c4d3ad72994d07e8/docs/rules/no-unsafe-takeuntil.md | take-until |
| 200 | https://github.com/angular/angular/blob/4742af1435957d4a325c338255e0dbed8c4b0298/packages/core/rxjs-interop/src/take_until_destroyed.ts | take-until |
| 200 | https://rxjs.dev/api/index/function/timeout | timeout |
| 200 | https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/timeout.ts | timeout |
| 200 | https://github.com/ReactiveX/rxjs/issues/7324 | timeout |
| 200 | https://github.com/angular/angular/blob/d9514bbe66f86f4799cbeadac896c39488bf7cae/packages/common/http/src/fetch.ts | timeout |
| 200 | https://github.com/angular/angular/blob/d9514bbe66f86f4799cbeadac896c39488bf7cae/packages/common/http/src/client.ts | timeout |
| 200 | https://github.com/DylanBWood/DotLn-Angular/blob/4c21c586634ac8a5ab5dba9852cd7da81c6d6ee9/libs/shared/data-access/src/lib/interceptors.ts | timeout |
| 200 | https://github.com/ngrx/platform/blob/a4995391ef631f1bd60d539f436a1aa5c23c4fe5/modules/data/src/dataservices/default-data.service.ts | timeout |
