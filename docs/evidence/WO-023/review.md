# WO-023 review record

2026-11-07. Two critics read the twenty drafts after integration, each a Claude `dotln-worker` (its definition pins `claude-opus-5-5` at effort `xhigh`) in its own read-only copy of the integrated candidate: the target's `main` at `9637f73539e387b46f65855db78f3c4b5285e561` with the batch's records, models and family as merged at 2026-11-07T20:21Z. Their briefs are in [fan-out.md](fan-out.md#the-critics-briefs). Both judged against the house rules rather than the worked example, Unit of Work included (rule 30). The executor applied every correction below in the parent and recorded each here; no author was re-tasked (D003). Every record is now `checked`, with both critics named as its reviewers.

## The factual critic

All sixteen executable specs passed in the critic's copy (115 tests), and every one of the 74 addresses the records cite opened with status 200 and supports what it is cited for; [the link check](README.md#link-check) repeats each status. Its seven findings and their dispositions:

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| remote-facade | presentation tokenKeys | Two-letter panel tokens ('Ac', 'Bu', ...) sit outside the single-character symbol exception WO-034 recorded. | Fixed by the executor: the panels' tokens are 1 to 5 in the board's order; Gateway's request and reply, which the executor had briefly made two letters, are 1 and 2 (D012, corrected by [D015](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d015)). |
| record-set | references.item0.supports | Reproduces the catalog page's statement nearly word for word. | Fixed by the executor: restated in the author's words. |
| page-controller | references.item0.supports | Reuses two of the catalog page's sentences nearly verbatim. | Fixed by the executor: restated in the author's words. |
| plugin | references.item0.supports | Repeats the catalog page's intent sentence verbatim. | Fixed by the executor: restated in the author's words. |
| domain-model | references.item0.supports | Repeats the catalog page's intent sentence with one verb swapped. | Fixed by the executor: restated in the author's words. |
| service-stub | example.description | Says the board store's spec runs four cases; it runs six. | Fixed by the executor: 'Four of the cases the board store's spec runs go through the board gateway'. |
| template-view | mechanism.steps.step3 | Cites study.html's states case, which the pinned link's commit lacks. | Fixed by the executor: step 3 says the states case arrives with this batch, after the commit the link pins. |

### Where each study says the app embodies its pattern

Each study's first implementation names one file of this app, pinned at the integrated base. The factual critic confirmed for every one that the file exists at `9637f73539e387b46f65855db78f3c4b5285e561` (checked against the base's file list and by opening the pinned URL, status 200), that the explanation is accurate about that code, and that it reads as the author's reading rather than a claim the app was designed as the pattern.

| Study | App file named | Exists at the base | Reads as the author's | Accurate |
| --- | --- | --- | --- | --- |
| data-mapper | `libs/features/scene-data-access/src/lib/stored-scene.ts` | yes | yes | yes |
| data-transfer-object | `libs/shared/models/src/lib/board.ts` | yes | yes | yes |
| domain-model | `libs/shared/scene-engine/src/lib/interpreter.ts` | yes | yes | yes |
| foreign-key-mapping | `tools/scripts/catalog/join-maps.mjs` | yes | yes | yes |
| gateway | `libs/features/board-data-access/src/lib/board-api.ts` | yes | yes | yes |
| identity-field | `libs/features/scene/src/lib/facades/scene.facade.ts` | yes | yes | yes |
| identity-map | `libs/shared/catalog/src/lib/catalog-loader.ts` | yes | yes | yes |
| lazy-load | `libs/shared/catalog/src/lib/catalog-loader.ts` | yes | yes | yes |
| optimistic-offline-lock | `libs/features/scene/src/lib/facades/scene.facade.ts` | yes | yes | yes |
| page-controller | `libs/features/tools/src/lib/containers/catalog-page/catalog-page.ts` | yes | yes | yes |
| pessimistic-offline-lock | `libs/features/scene/src/lib/facades/scene.facade.ts` | yes | yes | yes |
| plugin | `libs/features/scene/src/lib/wrappers/scene-canvas/scene-renderer-factory.ts` | yes | yes | yes |
| record-set | `libs/shared/models/src/lib/board.ts` | yes | yes | yes |
| registry | `libs/shared/catalog/src/lib/catalog-token.ts` | yes | yes | yes |
| remote-facade | `libs/features/board-data-access/src/lib/board-api.ts` | yes | yes | yes |
| service-layer | `libs/features/scene/src/lib/facades/scene.facade.ts` | yes | yes | yes |
| service-stub | `libs/features/board-data-access/testing/src/lib/board-handlers.ts` | yes | yes | yes |
| template-view | `libs/features/tools/src/lib/composites/study/study.html` | yes | yes | yes |
| transaction-script | `libs/features/scene/src/lib/facades/scene.facade.ts` | yes | yes | yes |
| unit-of-work | `libs/features/scene-data-access/src/lib/scene-store.ts` | yes | yes | yes |

### The specs the critic ran

Each from `libs/features/tools` with `npx vitest run src/lib/studies/poeaa/<slug>.model.spec.ts`, in groups of four:

| Study | Tests passed |
| --- | ---: |
| data-mapper | 7 |
| data-transfer-object | 8 |
| foreign-key-mapping | 8 |
| gateway | 6 |
| identity-field | 6 |
| identity-map | 8 |
| lazy-load | 8 |
| optimistic-offline-lock | 6 |
| pessimistic-offline-lock | 6 |
| plugin | 7 |
| record-set | 7 |
| registry | 7 |
| remote-facade | 8 |
| service-layer | 9 |
| service-stub | 7 |
| unit-of-work | 7 |

## The reading critic

It read all twenty from their rendered pages (one image of each whole study with every disclosure open, one of each drawing at its last step) with the records and models, and found the operator's four session points met: Unit of Work names all four places as objects step through new, dirty, clean and removed; Identity Map shows a miss and a hit; the two offline locks each give their failure case and say when an optimistic lock is the wrong choice; Data Transfer Object and Remote Facade say why they come as a pair. It named Identity Field, Record Set and Transaction Script the three that read best. Its findings and their dispositions:

| Study | Where | Finding | Disposition |
| --- | --- | --- | --- |
| unit-of-work | visual.textEquivalent | 'The registers:' calls Clean a register. | Fixed: 'Where each composition stands:'; spec and browser test updated. |
| unit-of-work | mechanism step 5 text | 'served 1 calls' reads badly at small counts. | Fixed: 'Store calls so far: {calls}; written at once: {immediateCalls}.' |
| all twenty | closing line | Draft pages read 'Reviewed by .' with no reviewers. | Resolved: every record is checked with both critics named. |
| all sixteen drawn | token letters | Token letters are English initials, not messages. | Declined with a follow-up (D012, FUP-ddae97970891fbc1): symbols stay symbols, as in the flow and marble families; the misleading letters changed. |
| all drawn | legend and tinted column | The tinted destination column is unexplained and its green heading hides the state's tone. | Fixed in the family: the shared caption names the tinted column, and the heading keeps its tone. |
| unit-of-work, identity-map, remote-facade | comparison y axis | Fractional ticks on whole-number counts. | Fixed: countTicks in the builder gives whole-number ticks; the three charts use it. |
| pessimistic-offline-lock and others | row-label notes | Notes wrap to a lone word. | Fixed in the family: the name column sizes to the longest name and to the longest note on two lines. |
| remote-facade | text equivalent | One sentence repeated for every panel that makes the same move. | Fixed in the builder: objects that take the same way at a step share one sentence; four specs' pinned sentences updated. |
| remote-facade | inputs.yesNo | The unit runs into the value. | Fixed: '(0 no, 1 yes)'. |
| remote-facade | mechanism step 2 text | 'made 1 local calls'. | Fixed: 'Local calls so far: {localCalls}; ...'. |
| remote-facade | operation names | readPanel and reportUnavailable do not appear in the pseudocode. | Fixed: comments name them on their lines. |
| service-stub | inputs.flag | The unit runs into the value. | Fixed: '(0 no, 1 yes)'. |
| service-stub | mechanism step 4 text | '1 cases have passed'. | Fixed: count-neutral wording. |
| service-stub | token letters | B and N do not match their rows. | Fixed: D for the recorded board, L for the lost connection. |
| identity-map | token letters | M where Foreign Key Mapping marks the same concept I. | Fixed: I. |
| identity-map | mechanism step 2 text | 'for 1 lookups'. | Fixed: 'Store reads so far: {reads}; lookups: {lookups}.' |
| gateway | token letters | Q and A do not match Request and Reply. | Fixed: 1 and 2, in the order they travel. |
| data-mapper | operations.saveAll | The drawing's saveAll is not in the pseudocode. | Fixed: the pseudocode carries saveAll(). |
| data-mapper | inputs.choice | '1 choice' says nothing. | Fixed: label 'Writing changes', unit '(1 each changed row, 0 the whole library)'. |
| foreign-key-mapping | operations find and resolve | The drawing's names disagree with the pseudocode's resolve. | Fixed: 'resolve: in the map' and 'last key followed'. |
| foreign-key-mapping | mechanism step 4 text | 'read 1 rows for 3 rows'. | Fixed: count-neutral wording. |
| foreign-key-mapping | limits.item0 | 'a real one at the end of its stack' is cryptic. | Fixed: 'a real loader stops only when its call stack overflows'. |
| foreign-key-mapping | limits.item4 | Repeats the mechanism and an implementation. | Fixed: removed. |
| foreign-key-mapping | inputs.choice | '1 choice'. | Fixed: label 'Resolving keys', unit '(1 through the identity map, 0 a read for every key)'. |
| optimistic-offline-lock | mechanism step 4 text | '1 saves have been refused'. | Fixed: count-neutral wording. |
| lazy-load | comparison.requests | Roundabout phrasing. | Fixed: 'Readings: … One chunk for the work: requests …'. |
| data-transfer-object | pseudocode | The drawing's assemble has no place in the code. | Fixed: the DTO is built under 'assemble(actor):'. |
| page-controller | mechanism step 5 text | Its last sentence repeats a limit. | Fixed: removed. |
| service-layer | mechanism step 2 text | 'it' is ambiguous. | Fixed: names composition-{flankId} and composition-{ridgeId}. |

## A finding from an author

author-03, reading the scene facade for the two lock studies, reported that Unit of Work's first draft said a later tab's save overwrites an earlier one. `SceneFacade.save` re-reads the stored list before it appends, so neither save is lost. The executor, who wrote that study, corrected the reading and the situation, which had also implied that the app can rename and delete saved compositions; it now says so only as a supposition.

## Checks after the corrections

In the target worktree after every correction: `npm run studies:check` reports 100 records and 0 problems; `npm run i18n:check` reports no missing keys; the Tools and catalog unit suites pass (126 and 4 test files, under the launchpad's bounded wrapper); the Tools library's type checks pass.
