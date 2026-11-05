# FINAL-002's probes and repairs

These reproduce what [FINAL-002](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/final-reviews/WO-028/FINAL-002.md) rests on beyond the verification sequence. All ran on 2026-11-05 in or against the target worktree at base `55b59c9133056c1d6471274a9676a7d5649196ac`. The review entered at tree `15d0e4efcfd20c9d8159cc3cd06d8e0ba5de41a0`, the tree VER-003 verified and draft pull request 14 carried at `5a6348005c2dbca5c2625b398f5453628a7a7a25`, and made three bounded repairs to it ([D061](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d061), [D062](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d062)).

## The shape of the presentation modules

[shape-audit.mjs](shape-audit.mjs) reads every study source with the TypeScript the target installs and the AI for Games message catalog; [shape-audit.json](shape-audit.json) holds the result. Run it with `node shape-audit.mjs <target worktree> [results.json]`.

| Group | Files | Functions | Six or more parameters | Eight or more | Most | 70 to 80 counted lines |
| --- | --- | --- | --- | --- | --- | --- |
| Movement, first batch (WO-020's twenty) | 60 | 917 | 46 | 17 | 12 | 38 |
| Movement, second batch (this order's twenty) | 60 | 728 | 40 | 1 | 8 | 11 |
| RxJS | 21 | 123 | 0 | 0 | 5 | 0 |
| Messaging | 20 | 96 | 0 | 0 | 3 | 0 |
| Shared study modules | 8 | 183 | 1 | 1 | 9 | 0 |

| Batch | Studies with a `valueN` placeholder | `valueN` placeholders | Flat model keys | Nested model keys |
| --- | --- | --- | --- | --- |
| First | 20 of 20 | 94 | 1,251 | 0 |
| Second | 1 of 20 | 2 | 21 | 957 |

What the numbers describe, read in the source: in the first batch's presentation modules a function that ran long was cut into pieces, and the variables the pieces had shared became positional parameters. `escortWorkedLines` in `two-level-formation-steering.presentation.ts` takes twelve and is 80 lines; `compareRuns` in `separation.presentation.ts` takes eleven; several take a value and the object it was read from side by side. Parameter types are written inline or as `ReturnType<typeof …>`, `decimal(value, 2, 0.005)` is spelled at each of hundreds of call sites, and the messages are keyed flat by words taken from the English (`workedEscortsChosenTargetsUncorrected`) with placeholders named `value1` to `value6`. The second batch's modules key their messages by frame part (`workedStep.steps.relativePositionR`), name every placeholder for its value and keep most functions to five or six parameters. The simulations in both batches are clean, and so are the stream studies, which are declarations.

The counted line is a nonblank line that does not open with a comment marker, which can differ from the lint rule's count by one. Nothing here measures runtime.

## The Objective's session

[session.mjs](session.mjs) is VER-003's script with its steps unchanged, plus one reading of Formation pattern interface, the study this review edited. It ran from 14:01:24Z to 14:02:06Z against a production build of the tree with the first two repairs, in fresh Chromium contexts it launched, under reduced motion, at 360, 768, 1440, 2080×1460 and 3840×1620. [session.json](session.json) holds each step.

- 17 captures at each width, with no page error, console error, failed response or horizontal overflow.
- All 80 step records it shares with VER-003's session are identical byte for byte; the five others are the added reading.
- No study catalog loads on the shelf, and a reading loads `studyCommon` and `studyAifg` only.
- Formation pattern interface opens, steps and shows no raw message key.

[walkthrough/](walkthrough/) holds the five captures read as images for the report: the shelf at 1440, Collision avoidance at 2080, the wall study's smallest clearance at 1440, The firing solution at 360 and Formation pattern interface at 2080. The other 80 stayed in session scratch.

## The slot readout and the lint glob (D061)

VER-003's F13 says Formation pattern interface shows the machine ids `lookout`, `port` and `starboard`. The value that carried them, the frame's `slotPositions`, is read by no placeholder in the record's prose, and VER-003's own [crawl](../ver-003/pseudo-crawl.json) finds `lookout` on the page once, in the authored pseudocode. So the ids never reached a reader; the value was wrong for any prose that would read it later. It now takes each escort's name from the display message the worked lines already use. The English is unchanged, since that message reads `lookout`. A new spec case marks those messages and fails on the old code:

```text
× names each escort in the slot readout through its display message, never by its machine id
AssertionError: expected [ 'lookout', 'port', 'starboard' ] to deeply equal [ '«lookout»', '«port»', '«starboard»' ]
```

F14: `eslint --print-config` on `flee.presentation.ts` listed no `max-lines-per-function` before the change and lists it after, at 80 lines with blank lines and comments skipped; a spec beside it, the facade and the AI for Games record chunk still do not get it. The rule's `files` glob is now `**/src/lib/studies/**/*.ts`, which matches from the workspace root and from the Tools project's own configuration. A direct `eslint` over the whole studies directory exits 0, and `npm run lint:fixtures` still refuses the 81-line fixture and admits the compact one.

## The hosted runner's timeout (D062)

The `checks` job of [run 42038514286](https://github.com/DylanBWood/DotLn-Angular/actions/runs/42038514286) failed on the draft's head, the tree VER-003 verified. One test of 962 timed out at Vitest's default of five seconds, in a first-batch spec this order's repair did not slow: [the lines](ci-checks-42038514286.txt), and [the timings](ci-timeout.json).

| Sweep | Local, before the migration | Local, reviewed tree | Hosted runner |
| --- | --- | --- | --- |
| Equilibrium fallback | 1,791 ms | 1,941 ms | stopped at 5,000 ms |
| Priority steering | 1,686 ms | 1,775 ms | 4,355 ms |
| Flocking | 1,723 ms | 1,655 ms | 3,858 ms |
| Seek | 1,342 ms | 1,256 ms | 3,687 ms |

The hosted runner takes 2.3 to 2.9 times the local time, so four sweeps that rerun whole models at every slider setting sit within a quarter of the default there. Ten earlier CI runs on heads holding these specs passed; this is the first failure, and `main` is exposed to the same one. The Tools project's Vitest configuration now sets `testTimeout` to 20 seconds with a comment naming the case. A six-second probe in a scratch copy fails under the old configuration with `Test timed out in 5000ms` and passes under the new one. The setting does not make the sweeps cheaper; that is part of [D060](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d060)'s follow-up.

## Limits

- The local timings are single runs on one workstation; they compare the two trees and say nothing exact about the runner.
- The final head's CI runs start when the publish pushes it, after this review's result is recorded.
- Chromium only, and English only, as in the verification sequence.
