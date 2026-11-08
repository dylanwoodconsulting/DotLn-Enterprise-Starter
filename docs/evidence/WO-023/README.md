# WO-023 evidence

2026-11-07. The executor's evidence for the twenty concept studies of Patterns of Enterprise
Application Architecture, the `states` family that draws them, the documents the order names and
the launchpad's cleanup write-back. The target worktree `wo-023` was fast-forwarded to the
target's `main` at `9637f73539e387b46f65855db78f3c4b5285e561`, the first standards pass's merge,
which is the baseline of every comparison here ([D006](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d006)).

| Record | What it holds |
| --- | --- |
| [handoff.md](handoff.md) | the executor's judgment of each criterion, the review ladder, the Preflight and gates, and the attestation |
| [decisions.md](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md) | the order's decisions, D001 to D005 from planning and D006 onwards from this execution |
| [fan-out.md](fan-out.md) | the authors' and critics' briefs, assignments, the token stop and the accounting |
| [review.md](review.md) | both critics' findings with their dispositions, and where each study says the app embodies its pattern |
| [design/comparisons.md](design/comparisons.md) | the first rendered pair, deferred by the operator to a dedicated A/B testing pass |
| [walkthrough.md](walkthrough.md) | the Objective's session in the production build, with [screenshots](walkthrough/) |
| [cleanup-declaration.md](cleanup-declaration.md) | the launchpad's any-depth `node_modules` declaration and its probe |
| [host-qualification.md](host-qualification.md) | how commands, workers and browsers ran in this session |

## What changed in the target

- `libs/shared/catalog/src/studies/poeaa/`: twenty `concept-study-v1` records, the work's lazy
  chunk `poeaa.ts` and its entry in the loader's `studyChunks`; `studies-summary.json` now lists
  them, every one `checked` with both critics as reviewers.
- `apps/dotln/public/i18n/studyPoeaa/en.json`: every authored on-screen string of the twenty
  studies and their models, with the shared states narration in `studyCommon/en.json`.
- `libs/features/tools/src/lib/studies/states.ts`: `statesModel`, which reads a simulation's
  snapshots into the steps the family draws and gives every states study the family's legend and
  caption, and `listOf`, which joins names in its sentences. `countTicks`, for the count charts,
  joined the other drawing helpers in `studies/drawing.ts`.
- `libs/features/tools/src/lib/composites/study-visuals/states/`: the `states` family, a register
  of objects in rows and states in columns, with its specs and `StudyStates` stories. The text
  primitives it shares with the `flow` family moved to `study-visuals/drawn-text.ts`.
- Guards and corpus tests: `tools/scripts/catalog/check-studies.mjs` requires a states drawing of a
  model that runs to read that model's module and holds the PoEAA work's RxJS readings to the
  illustrative mark, with two tests in `tools/studies.test.mjs` (one also pins the batch's twenty
  ids, its four structural records and its sixteen running models);
  `libs/features/tools/src/lib/studies/study-models.spec.ts` checks every states model for
  one-character tokens, and for headings inside their columns and transition names inside the
  drawing at every input boundary in both layouts; the study mapper's and composite's specs carry
  a states case.
- `libs/features/tools/src/lib/studies/poeaa/`: sixteen executable models, each a language-free
  simulation, a presentation and an entry, with a spec that drives the mechanism through the
  study's example; the four structural records carry no model ([D011](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d011)).
- The `tool-v0` compatibility reader and every standing promise of it are gone
  ([D010](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d010)).
- `docs/dev-reference/architecture/catalog.md` §Studies (the record, the models, the `states`
  family, the PoEAA coverage row and the embodiment duty of a batch),
  `docs/ai-reference/catalog-rules.md` (the embodiment rule and the states rule) and
  `docs/dev-reference/architecture/events-and-state.md` (the patterns the stores carry, linked to
  their studies).
- Browser tests: the PoEAA reading session, Unit of Work's registers with the text equivalent at a
  step and no glide under reduced motion, Identity Map's miss and hit, the two locks from the
  contents, and fit and axe at 360, 768 and 1440 in
  `apps/dotln-e2e/src/catalog.spec.ts`; the two `StudyStates` stories in the Storybook suite. Three
  visual baselines changed because the shelf now shows PoEAA's twenty studied: `catalog-768`,
  `catalog-1440` and `study-360`, whose page moved down by the shelf's extra line. The same suite
  passes on an untouched copy of the base on this machine, so the change is the order's own, and
  the new images were read before they were accepted.

## Chunk sizes

From `npm run check:bundle` (exit 0) and the production build of the candidate after review
round 1's fixes (2026-11-07, 21:49Z): the initial bundle is 406,523 bytes, against 406,485 at the
base as WO-034 recorded it, with no lazy code in it. The twenty PoEAA records load as one lazy
chunk of 74,526 bytes, the `states` family loads inside the lazy Tools chunk (223,213 bytes), and
each model loads with its own study (Identity Map's is 8,943 bytes). Before round 1 the same three
were 74,168, 223,377 and 9,197 bytes: the records gained Unit of Work's fourth implementation, and
the models lost their copies of the family's legend and caption. `package.json`'s `dependencies`
keys equal the base's, and neither `package.json` nor the lockfile changed.

## Link check

`node tools/scripts/catalog/check-studies.mjs --links` (`npm run studies:links`) opened every
address the catalog's studies cite on 2026-11-07 from 20:22Z, and again after review round 1 gave
Unit of Work a fourth implementation, in a run that ended at 21:38Z. In the second run all 326
addresses answered 200, the 75 the PoEAA studies cite among them; in the first, the AI for Games
book's DOI answered 403 to an automated client, as earlier batches recorded. The factual critic
opened each of the first 74 PoEAA addresses and found it supports what it is cited for
([review.md](review.md)); the executor read Hibernate's `ActionQueue` at that tag for the fourth:
it holds the session's pending insertions, updates and deletions and executes them in order at
flush ([D016](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d016)).

| Status | Cited as | Address | Studies |
| --- | --- | --- | --- |
| 200 | reference | <https://martinfowler.com/eaaCatalog/dataMapper.html> | data-mapper |
| 200 | reference | <https://www.informit.com/store/patterns-of-enterprise-application-architecture-9780321127426> | data-mapper, data-transfer-object, domain-model, foreign-key-mapping, gateway, identity-field, identity-map, lazy-load, optimistic-offline-lock, page-controller, pessimistic-offline-lock, plugin, record-set, registry, remote-facade, service-layer, service-stub, template-view, transaction-script, unit-of-work |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/scene-data-access/src/lib/stored-scene.ts> | data-mapper |
| 200 | implementation | <https://github.com/doctrine/orm/blob/3.7.6/src/Persisters/Entity/BasicEntityPersister.php> | data-mapper |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/entity/EntityFactory.ts> | data-mapper |
| 200 | reference | <https://martinfowler.com/eaaCatalog/dataTransferObject.html> | data-transfer-object |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/shared/models/src/lib/board.ts> | data-transfer-object, record-set |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/serialization/EntitySerializer.ts> | data-transfer-object |
| 200 | implementation | <https://learn.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5> | data-transfer-object |
| 200 | reference | <https://martinfowler.com/eaaCatalog/domainModel.html> | domain-model |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/shared/scene-engine/src/lib/interpreter.ts> | domain-model |
| 200 | implementation | <https://github.com/doctrine/orm/blob/3.7.6/docs/en/tutorials/getting-started.rst> | domain-model |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/docs/docs/inheritance-mapping.md> | domain-model |
| 200 | reference | <https://martinfowler.com/eaaCatalog/foreignKeyMapping.html> | foreign-key-mapping |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/tools/scripts/catalog/join-maps.mjs> | foreign-key-mapping |
| 200 | implementation | <https://github.com/hibernate/hibernate-orm/blob/6.6.59/documentation/src/main/asciidoc/userguide/chapters/domain/associations.adoc> | foreign-key-mapping |
| 200 | implementation | <https://github.com/spring-projects/spring-data-relational/blob/4.1.2/src/main/antora/modules/ROOT/pages/jdbc/mapping.adoc> | foreign-key-mapping |
| 200 | reference | <https://martinfowler.com/eaaCatalog/gateway.html> | gateway |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/board-data-access/src/lib/board-api.ts> | gateway, remote-facade |
| 200 | implementation | <https://github.com/angular/angular/blob/v22.2.3/packages/common/http/src/backend.ts> | gateway |
| 200 | implementation | <https://github.com/spring-projects/spring-framework/blob/v7.0.10/spring-jdbc/src/main/java/org/springframework/jdbc/core/JdbcTemplate.java> | gateway |
| 200 | reference | <https://martinfowler.com/eaaCatalog/identityField.html> | identity-field |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/scene/src/lib/facades/scene.facade.ts> | identity-field, optimistic-offline-lock, pessimistic-offline-lock, service-layer, transaction-script |
| 200 | implementation | <https://github.com/jakartaee/persistence/blob/3.2-3.2.0-RELEASE/api/src/main/java/jakarta/persistence/GenerationType.java> | identity-field |
| 200 | implementation | <https://github.com/typeorm/typeorm/blob/1.1.2/packages/typeorm/src/decorator/columns/PrimaryGeneratedColumn.ts> | identity-field |
| 200 | reference | <https://martinfowler.com/eaaCatalog/identityMap.html> | identity-map |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/shared/catalog/src/lib/catalog-loader.ts> | identity-map, lazy-load |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/unit-of-work/IdentityMap.ts> | identity-map |
| 200 | implementation | <https://github.com/hibernate/hibernate-orm/blob/7.1.9/hibernate-core/src/main/java/org/hibernate/engine/internal/StatefulPersistenceContext.java> | identity-map |
| 200 | reference | <https://martinfowler.com/eaaCatalog/lazyLoad.html> | lazy-load |
| 200 | implementation | <https://github.com/typeorm/typeorm/blob/1.1.2/packages/typeorm/src/query-builder/RelationLoader.ts> | lazy-load |
| 200 | implementation | <https://github.com/hibernate/hibernate-orm/blob/7.4.15/documentation/src/main/asciidoc/userguide/chapters/fetching/Fetching.adoc> | lazy-load |
| 200 | reference | <https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html> | optimistic-offline-lock |
| 200 | implementation | <https://github.com/rails/rails/blob/v8.1.4/activerecord/lib/active_record/locking/optimistic.rb> | optimistic-offline-lock |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/unit-of-work/ChangeSetPersister.ts> | optimistic-offline-lock |
| 200 | reference | <https://martinfowler.com/eaaCatalog/pageController.html> | page-controller |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/tools/src/lib/containers/catalog-page/catalog-page.ts> | page-controller |
| 200 | implementation | <https://github.com/dotnet-architecture/eShopOnWeb/blob/4da8212117e87d808d4bbc7da6286fd2147ce606/src/Web/Pages/Basket/Index.cshtml.cs> | page-controller |
| 200 | implementation | <https://svelte.dev/docs/kit/routing> | page-controller |
| 200 | reference | <https://martinfowler.com/eaaCatalog/pessimisticOfflineLock.html> | pessimistic-offline-lock |
| 200 | implementation | <https://github.com/WordPress/wordpress-develop/blob/7.1.4/src/wp-admin/includes/post.php> | pessimistic-offline-lock |
| 200 | implementation | <https://github.com/spring-projects/spring-integration/blob/v7.1.2/spring-integration-jdbc/src/main/java/org/springframework/integration/jdbc/lock/DefaultLockRepository.java> | pessimistic-offline-lock |
| 200 | reference | <https://martinfowler.com/eaaCatalog/plugin.html> | plugin |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/scene/src/lib/wrappers/scene-canvas/scene-renderer-factory.ts> | plugin |
| 200 | implementation | <https://github.com/rails/rails/blob/v8.1.4.1/activejob/lib/active_job/queue_adapter.rb> | plugin |
| 200 | implementation | <https://github.com/spring-projects/spring-framework/blob/v7.0.10/spring-core/src/main/java/org/springframework/core/io/support/SpringFactoriesLoader.java> | plugin |
| 200 | reference | <https://martinfowler.com/eaaCatalog/recordSet.html> | record-set |
| 200 | implementation | <https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/updating-data-sources-with-dataadapters> | record-set |
| 200 | implementation | <https://github.com/spring-projects/spring-framework/blob/v7.0.10/spring-jdbc/src/main/java/org/springframework/jdbc/support/rowset/SqlRowSet.java> | record-set |
| 200 | reference | <https://martinfowler.com/eaaCatalog/registry.html> | registry |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/shared/catalog/src/lib/catalog-token.ts> | registry |
| 200 | implementation | <https://github.com/spring-projects/spring-framework/blob/v7.0.10/spring-tx/src/main/java/org/springframework/transaction/support/TransactionSynchronizationManager.java> | registry |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/utils/RequestContext.ts> | registry |
| 200 | reference | <https://martinfowler.com/eaaCatalog/remoteFacade.html> | remote-facade |
| 200 | implementation | <https://github.com/dotnet-architecture/eShopOnContainers/blob/6.0.0/src/ApiGateways/Web.Bff.Shopping/aggregator/Controllers/BasketController.cs> | remote-facade |
| 200 | implementation | <https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation> | remote-facade |
| 200 | reference | <https://martinfowler.com/eaaCatalog/serviceLayer.html> | service-layer |
| 200 | implementation | <https://github.com/spring-petclinic/spring-framework-petclinic/blob/v7.0.3/src/main/java/org/springframework/samples/petclinic/service/ClinicServiceImpl.java> | service-layer |
| 200 | implementation | <https://github.com/dotnet-architecture/eShopOnWeb/blob/4da8212117e87d808d4bbc7da6286fd2147ce606/src/ApplicationCore/Services/OrderService.cs> | service-layer |
| 200 | reference | <https://martinfowler.com/eaaCatalog/serviceStub.html> | service-stub |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/board-data-access/testing/src/lib/board-handlers.ts> | service-stub |
| 200 | implementation | <https://github.com/angular/angular/blob/v22.2.3/packages/common/http/testing/src/backend.ts> | service-stub |
| 200 | implementation | <https://github.com/rails/rails/blob/v8.1.4.1/actionmailer/lib/action_mailer/delivery_methods.rb> | service-stub |
| 200 | reference | <https://martinfowler.com/eaaCatalog/templateView.html> | template-view |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/tools/src/lib/composites/study/study.html> | template-view |
| 200 | implementation | <https://github.com/rails/rails/blob/v8.1.4.1/actionview/lib/action_view/base.rb> | template-view |
| 200 | implementation | <https://github.com/thymeleaf/thymeleaf/blob/thymeleaf-3.1.5.RELEASE/lib/thymeleaf/src/main/java/org/thymeleaf/standard/processor/StandardTextTagProcessor.java> | template-view |
| 200 | reference | <https://martinfowler.com/eaaCatalog/transactionScript.html> | transaction-script |
| 200 | implementation | <https://github.com/spring-projects/spring-framework/blob/v6.2.12/spring-tx/src/main/java/org/springframework/transaction/support/TransactionTemplate.java> | transaction-script |
| 200 | implementation | <https://github.com/doctrine/dbal/blob/4.3.4/src/Connection.php> | transaction-script |
| 200 | reference | <https://martinfowler.com/eaaCatalog/unitOfWork.html> | unit-of-work |
| 200 | implementation | <https://github.com/DylanBWood/DotLn-Angular/blob/9637f73539e387b46f65855db78f3c4b5285e561/libs/features/scene-data-access/src/lib/scene-store.ts> | unit-of-work |
| 200 | implementation | <https://github.com/doctrine/orm/blob/3.7.6/src/UnitOfWork.php> | unit-of-work |
| 200 | implementation | <https://github.com/mikro-orm/mikro-orm/blob/v7.2.8/packages/core/src/unit-of-work/UnitOfWork.ts> | unit-of-work |
| 200 | implementation | <https://github.com/hibernate/hibernate-orm/blob/7.1.9/hibernate-core/src/main/java/org/hibernate/engine/spi/ActionQueue.java> | unit-of-work |
