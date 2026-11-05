# VER-003's probes

These reproduce the measurements [VER-003](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/verifications/WO-028/VER-003.md) rests on. All of them ran on 2026-11-05 against the target worktree at tree `15d0e4efcfd20c9d8159cc3cd06d8e0ba5de41a0`, with all 405 changed paths matching the [round-3 candidate](../repair-2/reviews/round-3-candidate.json), and both `main` branches unmoved. The "before" side is draft commit `f0e70879efc6c7b757e0e378efbb97d88f03d7fc`, tree `80145e06fb39d5d5264e46377b1bae5b5cc2b7ab`: the tree VER-002 verified, holding the original records and models. The repair's own comparison baseline was its round-1 tree, so comparing with this one is a stronger test.

## Run them

The browser probes serve a production build made with `npx nx build dotln --configuration=production`. Extract the old tree with `git archive f0e7087 | tar -x -C <old>`, link `node_modules` into it and build it the same way. The TypeScript probes bundle with the esbuild the target installs:

```sh
NODE_PATH=<target>/node_modules <target>/node_modules/.bin/esbuild model-compare.ts --bundle --platform=node --format=esm --splitting --outdir=<scratch> --out-extension:.js=.mjs --tsconfig=<target>/tsconfig.base.json --alias:@target=<target> --alias:@old=<old> --banner:js="import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);"
node <scratch>/model-compare.mjs <target> <old> model-compare.json
```

`message-flow.ts` bundles the same way and takes `<target> <results.json>`. The rest run directly with the arguments their first lines state.

## What they found

| Probe | Result |
| --- | --- |
| [model-compare.ts](model-compare.ts), [results](model-compare.json) | All 80 models against the originals, at the example and every value of every offered input: 1,002 runs, 90,201 frames. All 40 movement studies match on all 962 runs, with no difference. No numeric field differs in any study. 19 stream studies differ at their example: 22 marble `from` fields now hold stable ids, as D047 says, and 111 narration fields changed words to digits. All 71 distinct narration outputs are the 48 messages the repair's [audit](../repair-2/comparison/stream-audit.json) lists, or summaries composed from them. |
| [dom-diff.mjs](dom-diff.mjs), [results](dom-diff.json) | Both production builds, every frame of every view of all 80 studies with every disclosure open: 7,523 frames, 7,378 identical in reader text, drawing text and geometry. All 6,950 AI for Games frames are identical. 145 frames differ, in 15 stream studies, all from the same narration changes. |
| [flow-pairs.mjs](flow-pairs.mjs), [results](flow-pairs.json), [frames/](frames/) | The dom-diff's five flow drawings with changed SVG output, at 2080 and 360 in both builds. Four changed only the words. In Command Message the Event store box loses a wrapped line. No label is clipped or overprinted on any frame, and every drawing keeps its view box. |
| [pseudo-crawl.mjs](pseudo-crawl.mjs), [results](pseudo-crawl.json) | Wraps every catalog value in marks, then walks the same 7,523 frames in the production build. No visible text with letters sits outside a message. The 467 rows without a mark are pseudocode blocks and wrapped state lines split from their message's marks: 454 whose words are in the catalogs as written, and 13 that also hold a parameter's value. With the real catalogs: no leaked key, unfilled placeholder or `NaN`, no page error. The three flagged rows are authored pseudocode (`undefined`, `${entry}`). |
| [message-flow.ts](message-flow.ts), [results](message-flow.json) | Marks every message across 1,070 model runs and lists strings that bypass the marks. Output fields: only machine fields (tones, ids, roles, marble syntax). Message parameters: marble symbols, order id `WO-031`, and one real instance: Formation pattern interface shows its ids `lookout`, `port` and `starboard` through `{{id}}` ([D053](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d053)). |
| [record-audit.mjs](record-audit.mjs), [results](record-audit.json) | Shares no code with the target's checks. All 80 records resolve through the served catalogs to the original record with no difference apart from the schema name. The forty AI for Games ids are exact, all `checked`, each with two distinct reviewers and complete references; the summary lists exactly those forty. The order's twenty each name a TypeScript module with a spec beside it that imports it, calls `model` and reads the record's example parameters. |
| [engine-imports.mjs](engine-imports.mjs) | For each of the twenty, the engine functions imported across model, simulation and presentation equal those the original model imported: none lost, none gained. So the mechanism table in `review.md` still describes what runs. |
| [source-audit.mjs](source-audit.mjs), [results](source-audit.json) | 171 source files, 2,057 functions, none over 80 lines; 18 between 76 and 80, 1,349 of 10 or fewer. The largest `model` entry is 4 lines. One `fixed` helper remains, in the shared `presentation.ts`. No simulation imports or calls a translator. |
| [literal-check-attack.mjs](literal-check-attack.mjs) | The static check refuses a literal, a template, a literal through a const, a conditional and an array, and admits a concatenation, `??`, parentheses, a cast, `.join`, a helper call and fields outside its list. Injection in a private copy shows what the gate does with them: see below. |
| [message-attack.mjs](message-attack.mjs), [results](message-attack.json) | A failed or malformed catalog shows the alert and retries. A slow catalog overtaken by navigation leaves the later reading intact. A second reading in the work fetches no catalog. An empty or stale catalog shows raw keys with no failure ([D054](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d054)). |
| [session.mjs](session.mjs), [results](session.json) | The Objective's session at five sizes, with 80 screenshots named `ver003-*` under [walkthrough/](../walkthrough/). 75 of its 80 step records match VER-002's byte for byte. The other five are the executable-model step at each width, where the module path's DOM text gains surrounding spaces and reads the same. No catalog loads on the shelf, and a reading loads only `studyCommon` and `studyAifg`. |
| [VER-001's sweep, unchanged](../ver-001/label-sweep.mjs), [results](label-sweep.json) | Zero clipped and zero overprinted frames for both batches at all five sizes: 17,375 frame observations. |

## Injection in a private copy

These ran in a copy of the target under session scratch, never the target itself.

| Injected into a study | `i18n:check` | Tools tests | Nx lint |
| --- | --- | --- | --- |
| A 98-line function | — | — | Refused: `max-lines-per-function` |
| `label: 'Hello there'` | Refused | — | — |
| `label: 'Pip ' + String(1)` in a legend | Passes | Refused by the corpus test | — |
| `label: t(key) + ' the runner, in plain English'` | Passes | Passes | — |
| A message parameter set to `'twenty plain English units'` | Passes | Passes | — |

The same 98-line function passes a direct `eslint <file>`, and `eslint --print-config` on a study file does not list the rule: under direct lookup the nested project configuration resolves the root-anchored `files` glob against its own directory. The gate's Nx lint is unaffected.

A record holding prose instead of a key, a key with no message and a `concept-study-v0` record each fail `npm run studies:check`.

## What a first reading loads

Measured by [dom-diff.mjs](dom-diff.mjs) from the catalog shelf with nothing of the work loaded, sizes from the served files, gzip at the default level. Time to the drawing is too coarse on localhost to tell the builds apart (median 79 ms in both, close to the browser driver's polling), so it establishes nothing about latency.

| Reading | Before: raw, gzip | After: raw, gzip |
| --- | --- | --- |
| Flee | 341,981, 101,734 | 758,492, 185,788 |
| Collision avoidance | 343,401, 102,019 | 760,850, 186,170 |

The AI for Games record chunk falls from 314,637 to 135,351 bytes, and its gzip from 91,321 to 12,792, because the prose moved to `studyAifg/en.json`: 590,447 raw and 161,466 gzip. That catalog holds narration for all forty models (about 207 kB) and all 768 of the work's titles (about 29 kB), of which records and nearby links name 89. A later reading in the same work fetches no catalog. See [D055](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d055).

## Links

`npm run studies:links` covers 251 addresses across the eighty studies; 247 return 200. Of the 33 this order's twenty cite, 31 return 200, the DOI returns the publisher's 403 its table records, and `https://www.red3d.com/cwr/steer/gdc99/` returns 500 to the link check. That site filters clients: the same address returns 403 to bare curl and 200 with its title *Steering Behaviors For Autonomous Characters* to a browser user agent, which fits the table's record of curl 403 and a readable article.

## Frames

[frames/](frames/) holds the flow-drawing pairs, named `<study>-<step>-<width>-<before|after>.png`.
