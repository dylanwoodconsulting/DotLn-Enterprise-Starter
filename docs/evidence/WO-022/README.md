# WO-022 execution evidence

Enterprise Integration Patterns now has twenty studied concepts: the messaging patterns most
related to the rest of the work, each a study written for this app on one example. The shelf counts
them, a chosen work lists them, and each opens to the idea and a situation it serves; a flow the
reader steps message by message, with endpoints as boxes, channels as pipes and a text equivalent
naming what moves where; the ordinary pseudocode explained step by step on the example; an RxJS
reading whose comments name the pattern's parts; public implementations and references; limits with
a visible failure; nearby concepts and the next study. Eleven of the twenty run: their flows are
drawn from the marble example their specs run, and the reader can switch to that run's marble
diagram at the same step. The other nine are structures, protocols or kinds of message, and D024
gives each one's reason. Every example from the platform or this app is stated as an analogy, names
the public record it reads and cites it; the new rule in `docs/ai-reference/catalog-rules.md` says
so for every later batch.

The operator decided how a flow looks in [eight comparison rounds](design/comparisons.md), ended
them in their own words (D018) and found the reworked Aggregator followable (D016); they asked for
every streams reading to name the pattern's parts (D019). The workers were ten Claude authors and
two critics in session-scratch copies; the fan-out ran past WO-020's stop figure without the rule
having been declared, which D023 records ([the fan-out](fan-out.md) has the figures).

See the decisions in `decisions.md` beside this file, then [the fan-out](fan-out.md),
[the critics' findings and the analogies as checked](review.md), [the comparisons](design/comparisons.md),
[the rejected candidates](design/rejected-implementations.md), [the executor walkthrough](walkthrough.md)
with its screenshots under [walkthrough/](walkthrough/) and [host qualification](host-qualification.md).

## What the decisions settled

D001 binds the amendment the operator authorized before activation. D002 is the base, the target
worktree fast-forwarded to WO-021's merge `c0e5a36`, and D003 the publishing rule: the authors'
own words, no quotation of the book or its pages. D004 and D005 are the operator's directions on
when the comparison rounds ran; D006 the flow family's design; D007 the operator's direction that
the three reviewers run under Codex, with what the launcher's probe showed. D008 to D015 are rounds
1 to 8 and D018 the operator's word that ended them; D016 sent the Aggregator back to its author
when the operator could not follow it; D017 is the flow family's fixes from the reading critic's
first pass; D019 the annotated readings. D020 is the adjacent repair of the catalog's sticky
columns, which covered the reading history; D021 the empty capsule author-06 found in the family;
D022 the browser expectations this order changes, with the one visual baseline; D023 the fan-out's
stop rule, not declared and passed; D024 the nine records that do not run, each with its reason;
D025 how criterion 8's `ls` is met when no candidate had a file of its own.

## The checks, as they ran on the final tree

The order's Preflight line ran as one script in the target worktree on 2026-11-01 from 17:56:26Z to
18:00:18Z, after the last code change, each command in the order the line gives it, with the visual
suite added at the end; the gate rows below run on the same tree.

| Command | Result |
| --- | --- |
| `npx nx format:check` | exit 0, 1 s |
| `npx nx run-many -t lint test build` | exit 0, 78 s: 39 tasks over the twenty projects, 32 of them restored from Nx's cache of identical inputs; lint printed 5 Playwright `no-wait-for-timeout` warnings and no error; every project's Vitest passed, the tools library's 81 files and 703 tests among them (its run at 17:49Z on the same tree); the production build within its budgets |
| `npm run lint:fixtures` | exit 0, 4 s |
| `npm run lint:components` | exit 0 |
| `npm run lint:hygiene` | exit 0 |
| `npm run check:fixtures` | exit 0: the board and scene fixtures, the catalog and the study check |
| `npm run studies:check` | exit 0: `check-studies: 60 records; 0 problems`; `--write-summary` had rewritten `studies-summary.json` at 17:17Z after the records were set `checked` |
| `npm run test:tooling` | exit 0: 73 tests, the messaging batch's ids and its running stream patterns included |
| `npm run i18n:check` | exit 0 |
| `npm run check:bundle` | exit 0, 6 s: 405,832 initial bytes, no route code in the initial graph, the menu loaded with the Tools route |
| `npx nx e2e dotln-e2e` | exit 0, 115 s: all 144 tests, the step 7 cases, axe at the board's threshold and the three widths included |
| `npx nx run dotln-e2e:e2e-visual` | exit 0, 22 s: all 50 against every baseline, the catalog's 1440 baseline regenerated for the shelf's new line (D022) |
| `npm run studies:links` | 102 distinct URLs cited by the messaging studies, every one answering 200 (the table below) |
| `git diff --stat HEAD -- package.json package-lock.json` | prints nothing: the `dependencies` keys equal the base's |
| `node scripts/target-gate.mjs WO-022`, launchpad worktree | PASS at `c0e5a36` in 53 s: install, lint, typecheck, test, format |
| `node scripts/target-gate.mjs WO-022 --review`, launchpad worktree | PASS at `c0e5a36` in 76 s: install, lint, typecheck, test, format, build, e2e, visual; `test`, `build` and `e2e` restored from Nx's cache of the Preflight's passing runs, the rest ran |
| `npm run test:docs`, launchpad worktree | run once after the last document edit, as the last step before `implementation-ready`; the lifecycle's own document row records its result |

## The criteria' own commands

Each ran on 2026-11-01 on the final tree; the command is as the order writes it, the output as
printed.

| Criterion | Command, where | Output |
| --- | --- | --- |
| 1 | `ls docs/evidence/WO-022/walkthrough \| wc -l`, launchpad | `30`, the executor's; the verifier adds its own |
| 2 | `npm run studies:check`, target | `check-studies: 60 records; 0 problems`; the twenty ids are the order's, no substitution, each record `checked` with both critics in `reviewedBy` |
| 3 | the records with `pseudocode.executable` null | nine, each with its reason in D024, none of the seven stream patterns; every running record's spec runs its example through `expectMarbleExample`, and the seven open ones also to completion (D026) |
| 7 | `grep -c "analogy" docs/ai-reference/catalog-rules.md`, target | `4`; `catalog.md` §Studies' coverage table reads `Enterprise Integration Patterns \| twenty` |
| 8 | `grep -c "Round" docs/evidence/WO-022/design/comparisons.md`, launchpad | `8`; D018 records the operator's word that ended the rounds, and D025 why the removal greps stand in for `ls` |
| 6 | `node -e` comparing the `dependencies` keys with `git show c0e5a36:package.json`, target | `true`, fifteen keys |

## Sizes

From the production build of the final tree (`npm run check:bundle` at 18:03Z), beside WO-021's
final figures as the base. Raw and transfer are the build's own columns; the rows the build table
leaves unnamed are measured on the file with `gzip -9`, marked so.

| Chunk | Base, raw / transfer | Now, raw / transfer |
| --- | --- | --- |
| Initial total | 403.43 kB / 113.11 kB | 405.83 kB / 114.34 kB |
| Tools feature (`index`), now with the flow family | 184.62 kB / 39.12 kB | 203.97 kB / 43.56 kB |
| `eip`, all twenty records | none | 255.14 kB / 60.84 kB |
| `rxjs`, all twenty records | 187.03 kB / 42.03 kB | 187.03 kB / 42.03 kB |
| `aifg`, all twenty records | 164.38 kB / 40.02 kB | 164.38 kB / 40.02 kB |
| The flow builders, one lazy chunk shared by the twenty | none | 4,456 bytes / 1,958 bytes gzip |
| Each messaging model module, one lazy chunk per study | none | 3.1 to 6.5 kB raw, 1.3 to 2.3 kB gzip |
| The marble builder with `rxjs/testing` | 14,546 bytes / 5,081 bytes gzip | 14,588 bytes / 5,082 bytes gzip |
| `study-explanation` | 8,151 bytes / 2,762 bytes gzip | 8,269 bytes / 2,827 bytes gzip |
| `studies-summary-json` | 1,448 bytes | 2,081 bytes |
| `catalog-summary-json` | 23.47 kB / 4.60 kB | 23.47 kB / 4.60 kB |
| The tool chunks, `tools-eip-json` among them | unchanged | unchanged, 3,463 rows in their lazy chunks |

The build exited 0 within its declared budgets and printed no budget warning. The bundle check
reports 405,832 initial bytes with no catalog, study or Tools module in the initial graph
(`lazyCodeInInitial` is empty) and the menu loaded statically with the Tools route
(`menuAvailableWithTools`). The initial bundle is 2.40 kB
larger than WO-021's final figure; that figure was taken on WO-021's tree before its merge, no base
build of `c0e5a36` was measured, and the cause is not claimed here. The Tools feature chunk grew
19.35 kB raw for the flow family, its drawing in both directions and its styles; the twenty records
and each model module load only when a messaging study is read. `package.json` is unchanged from the
base, so its `dependencies` keys, fifteen of them, equal the base's.

## The link check

`npm run studies:links` opened every cited address once from the executor's session on 2026-11-01
at 17:13Z. The twenty messaging studies cite 102 distinct URLs and every one answers 200. The
factual critic opened each in both passes and, in its second, found each supporting its claim
([the review record](review.md)); no record cites a URL recorded as unreachable or a reference the
critic marked unsupported. The one address in the whole catalog that did not answer 200, a DOI of
AI for Games that answers 403 to an automated request, is cited by WO-020's movement studies and by
none of these. The two InformIT addresses are the same book page, one with `and` in its slug.

| URL | Status | Cited by |
| --- | --- | --- |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/Aggregator.html | 200 | aggregator |
| https://www.informit.com/store/enterprise-integration-patterns-designing-building-9780321200686 | 200 | aggregator, canonical-data-model, channel-adapter, command-message, competing-consumers, content-based-router, control-bus, correlation-identifier, event-message, guaranteed-delivery, message-dispatcher, message-expiration, message-store, message-translator, publish-subscribe-channel, recipient-list, request-reply, resequencer |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md#verification-review-and-attack | 200 | aggregator, content-based-router |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/03-architecture.md#the-agentic-communication-core | 200 | aggregator, publish-subscribe-channel, resequencer |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/groupBy.ts | 200 | aggregator, message-dispatcher |
| https://camel.apache.org/components/4.22.x/eips/aggregate-eip.html | 200 | aggregator |
| https://docs.spring.io/spring-integration/reference/7.1/aggregator.html | 200 | aggregator |
| https://nifi.apache.org/components/org.apache.nifi.processors.standard.MergeContent/ | 200 | aggregator |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/CanonicalDataModel.html | 200 | canonical-data-model |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/04-interfaces.md | 200 | canonical-data-model |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/10-ir-compatibility.md | 200 | canonical-data-model |
| https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md | 200 | canonical-data-model |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/ChannelAdapter.html | 200 | channel-adapter |
| https://github.com/DylanBWood/DotLn-Angular/blob/c0e5a36008828ec5b742d6e740efff619f3cedbe/docs/dev-reference/architecture/events-and-state.md | 200 | channel-adapter |
| https://github.com/DylanBWood/DotLn-Angular/blob/c0e5a36008828ec5b742d6e740efff619f3cedbe/libs/shared/data-access/src/lib/with-command.ts | 200 | channel-adapter |
| https://github.com/DylanBWood/DotLn-Angular/blob/c0e5a36008828ec5b742d6e740efff619f3cedbe/libs/features/board-data-access/src/lib/board-store.ts | 200 | channel-adapter |
| https://camel.apache.org/components/latest/eips/channel-adapter.html | 200 | channel-adapter |
| https://docs.spring.io/spring-integration/reference/channel-adapter.html | 200 | channel-adapter |
| https://debezium.io/documentation/reference/3.7/architecture.html | 200 | channel-adapter |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/CommandMessage.html | 200 | command-message |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/02-domain-model.md | 200 | command-message, correlation-identifier, event-message, request-reply, resequencer |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md | 200 | command-message, competing-consumers, event-message, message-dispatcher, message-expiration, process-manager |
| https://docs.spring.io/spring-integration/reference/control-bus.html | 200 | command-message, control-bus |
| https://docs.particular.net/nservicebus/messaging/messages-events-commands | 200 | command-message |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/CompetingConsumers.html | 200 | competing-consumers |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/observable/zip.ts | 200 | competing-consumers |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/docs_app/content/guide/testing/marble-testing.md | 200 | competing-consumers, publish-subscribe-channel |
| https://camel.apache.org/components/4.22.x/eips/competing-consumers.html | 200 | competing-consumers |
| https://docs.spring.io/spring-integration/reference/channel/implementations.html#channel-implementations-queuechannel | 200 | competing-consumers |
| https://www.rabbitmq.com/tutorials/tutorial-two-javascript | 200 | competing-consumers |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/ContentBasedRouter.html | 200 | content-based-router |
| https://camel.apache.org/components/4.22.x/eips/choice-eip.html | 200 | content-based-router |
| https://docs.spring.io/spring-integration/reference/router/implementations.html | 200 | content-based-router, recipient-list |
| https://kafka.apache.org/39/javadoc/org/apache/kafka/streams/kstream/BranchedKStream.html | 200 | content-based-router |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/ControlBus.html | 200 | control-bus |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md#operator-recovery-controls | 200 | control-bus |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md#discipline | 200 | control-bus |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md#operator-resume-phrases--how-you-get-dispatched | 200 | control-bus |
| https://camel.apache.org/components/latest/controlbus-component.html | 200 | control-bus |
| https://docs.spring.io/spring-cloud-bus/reference/spring-cloud-bus/bus-endpoints.html | 200 | control-bus |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html | 200 | correlation-identifier |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/03-architecture.md | 200 | correlation-identifier, guaranteed-delivery, message-translator, request-reply, transactional-client |
| https://camel.apache.org/components/latest/eips/correlation-identifier.html | 200 | correlation-identifier |
| https://docs.spring.io/spring-integration/reference/jms.html#gateway-reply-correlation | 200 | correlation-identifier |
| https://www.rabbitmq.com/tutorials/tutorial-six-javascript | 200 | correlation-identifier |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/EventMessage.html | 200 | event-message |
| https://camel.apache.org/components/latest/eips/event-message.html | 200 | event-message |
| https://docs.spring.io/spring-integration/reference/event.html | 200 | event-message |
| https://masstransit.io/documentation/concepts/messages | 200 | event-message |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/GuaranteedMessaging.html | 200 | guaranteed-delivery |
| https://camel.apache.org/components/latest/eips/guaranteed-delivery.html | 200 | guaranteed-delivery |
| https://docs.spring.io/spring-integration/reference/channel/configuration.html#persistent-queuechannel-configuration | 200 | guaranteed-delivery |
| https://www.rabbitmq.com/docs/confirms | 200 | guaranteed-delivery |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageDispatcher.html | 200 | message-dispatcher |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/concatMap.ts | 200 | message-dispatcher, message-expiration |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/mergeInternals.ts | 200 | message-dispatcher, message-expiration |
| https://camel.apache.org/components/latest/eips/message-dispatcher.html | 200 | message-dispatcher |
| https://docs.spring.io/spring-integration/reference/channel/implementations.html | 200 | message-dispatcher |
| https://pekko.apache.org/docs/pekko/1.1/typed/routers.html | 200 | message-dispatcher |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageExpiration.html | 200 | message-expiration |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/02-domain-model.md#beacon-perception-and-age | 200 | message-expiration |
| https://camel.apache.org/components/latest/eips/message-expiration.html | 200 | message-expiration |
| https://artemis.apache.org/components/artemis/documentation/latest/message-expiry.html | 200 | message-expiration |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageStore.html | 200 | message-store |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/02-domain-model.md#actors-and-episodes-the-edge | 200 | message-store |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/09-audit-resilience-privacy.md | 200 | message-store |
| https://docs.spring.io/spring-integration/reference/message-store.html | 200 | message-store |
| https://docs.particular.net/nservicebus/operations/auditing | 200 | message-store |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageTranslator.html | 200 | message-translator |
| https://github.com/DylanBWood/DotLn-Angular/blob/c0e5a36008828ec5b742d6e740efff619f3cedbe/libs/shared/catalog/src/lib/catalog-loader.ts | 200 | message-translator |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/08-publication-compiler.md | 200 | message-translator |
| https://camel.apache.org/components/latest/eips/message-translator.html | 200 | message-translator |
| https://docs.spring.io/spring-integration/reference/transformer.html | 200 | message-translator |
| https://kafka.apache.org/41/kafka-connect/user-guide/ | 200 | message-translator |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/ProcessManager.html | 200 | process-manager |
| https://www.informit.com/store/enterprise-integration-patterns-designing-building-and-9780321200686 | 200 | process-manager, transactional-client |
| https://camel.apache.org/components/latest/eips/dynamicRouter-eip.html | 200 | process-manager |
| https://camel.apache.org/components/latest/eips/process-manager.html | 200 | process-manager |
| https://docs.spring.io/spring-integration/reference/router/process-manager.html | 200 | process-manager |
| https://docs.particular.net/nservicebus/sagas/ | 200 | process-manager |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/PublishSubscribeChannel.html | 200 | publish-subscribe-channel |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/operators/share.ts | 200 | publish-subscribe-channel |
| https://github.com/ReactiveX/rxjs/blob/7.8.2/src/internal/Subject.ts | 200 | publish-subscribe-channel |
| https://camel.apache.org/components/4.22.x/eips/publish-subscribe-channel.html | 200 | publish-subscribe-channel |
| https://docs.spring.io/spring-integration/reference/channel/implementations.html#channel-implementations-publishsubscribechannel | 200 | publish-subscribe-channel |
| https://www.rabbitmq.com/tutorials/tutorial-three-javascript | 200 | publish-subscribe-channel |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/RecipientList.html | 200 | recipient-list |
| https://github.com/DylanBWood/DotLn/blob/9139d91eb0b2b5cdcb683f750e48684b43fb95b6/docs/product/07-execution-guide.md#workflow-closeout-and-releases | 200 | recipient-list |
| https://camel.apache.org/components/4.22.x/eips/recipientList-eip.html | 200 | recipient-list |
| https://github.com/apache/synapse/blob/Apache-Synapse-3.0.2/modules/core/src/main/java/org/apache/synapse/endpoints/RecipientListEndpoint.java | 200 | recipient-list |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/RequestReply.html | 200 | request-reply |
| https://camel.apache.org/components/latest/eips/requestReply-eip.html | 200 | request-reply |
| https://docs.spring.io/spring-integration/reference/gateway.html | 200 | request-reply |
| https://docs.nats.io/learn/core-nats/request-reply | 200 | request-reply |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/Resequencer.html | 200 | resequencer |
| https://camel.apache.org/components/4.22.x/eips/resequence-eip.html | 200 | resequencer |
| https://docs.spring.io/spring-integration/reference/7.1/resequencer.html | 200 | resequencer |
| https://nifi.apache.org/components/org.apache.nifi.processors.standard.EnforceOrder/ | 200 | resequencer |
| https://www.enterpriseintegrationpatterns.com/patterns/messaging/TransactionalClient.html | 200 | transactional-client |
| https://camel.apache.org/components/latest/eips/transactional-client.html | 200 | transactional-client |
| https://docs.spring.io/spring-integration/reference/transactions.html | 200 | transactional-client |
| https://docs.particular.net/transports/transactions | 200 | transactional-client |

## Where the records went

After the final review passed on 2026-11-01, `target-records` moved `decisions.md`, the
verification report and the final review into the target's `docs/dotln/` with its records commit
`5f7726370cae58c6ab1f0befdd67ebfc0fe3b117`, so the decisions this directory's records cite (D001 to
D034) are read there, and the verifier's one link to D031 points at that commit. The final review's
own session is under [walkthrough/reviewer/](walkthrough/reviewer/), beside the executor's and the
verifier's screenshots, and [preview-pr.json](preview-pr.json) records the draft and the final
publication of pull request 13.

