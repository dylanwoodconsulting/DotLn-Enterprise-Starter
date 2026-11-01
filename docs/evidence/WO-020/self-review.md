# WO-020 self-review

Three independent reviewers read the finished change on 2026-10-31, each on Codex (`gpt-6.1-sol`,
effort `max`, D003) in its own disposable copy of the target with the launchpad's records beside it,
and each with a brief that did not overlap the others: the criteria adversary, the design improver
and the consistency reviewer. The same three threads were resumed on the current diff after each
set of fixes, three times, the last pass ending with no findings from any of them. Effective effort has no independent readback; the selection is what was launched. The
reports stay in the session's ignored scratch, so what follows is their substance in the executor's
words.

| Reviewer | First pass | First recheck | Second recheck | Third recheck |
| --- | ---: | ---: | ---: | ---: |
| Criteria adversary | 6 | 1 | 0 | 0 |
| Design improver | 7 | 1 | 0 | 0 |
| Consistency reviewer | 2 | 1 | 1 | 0 |

Two findings were raised twice: the failed summary in the first pass and the over-tight tooling test
in the first recheck. Each is listed once, under the first reviewer who raised it, so the nineteen
reports are seventeen distinct findings: sixteen fixed and one recorded. D018 records the
dispositions.

## Criteria adversary

| Finding | Outcome |
| --- | --- |
| An allowed input clipped negative velocities out of Arrive's chart, whose range stayed fixed from zero | Fixed: the range and ticks follow the run, and the example's own range is unchanged; `arrive.model.spec.ts` |
| A failed summary removed the studied marks and reported none, with no error or retry (also the design improver's) | Fixed: `summaryFailed`, an alert and its own retry over a catalog that stays readable; `tools.facade.spec.ts`, `catalog-page.spec.ts` |
| Reduced motion was read once, so turning it on while reading left the example running and Play on offer | Fixed: the preference is followed, a run stops and the listener goes with the facade; `tools.facade.spec.ts` |
| One reviewer named twice passed the two-reviewer rule | Fixed: the check counts different names; `tools/studies.test.mjs` |
| The tooling tests would pass with no study records at all | Fixed: a test pins the order's twenty ids; `tools/studies.test.mjs` |
| The chunk check read imports and ignored the export, so a study could be advertised and never load | Fixed: imports and export are compared; `tools/studies.test.mjs` |
| On recheck, a commented-out export could satisfy that check | Fixed: `chunkContents` reads the chunk's syntax with the TypeScript parser, and a test covers it |

## Design improver

| Finding | Outcome |
| --- | --- |
| A model that threw made the whole catalog view throw | Fixed: the run is held in a pure result, so the study fails alone and the reading stays open; `tools.facade.spec.ts` |
| The check crashed on a malformed record before reporting it | Fixed: record problems return first and a file that does not parse is reported; nothing is written; `tools/studies.test.mjs` |
| Pruning history left a title beside a different surviving reading | Fixed: the title follows the newest surviving id; `reading.spec.ts`. D008's account is updated |
| A record naming a model the list lacked became a ready study without its drawing | Fixed: it fails that study; `tools.facade.spec.ts` |
| Every family requires motion frames, and the mapper ignores `visual.family` | Recorded: deferred to WO-021, which adds the first family without frames, as `FUP-4a1b75d959226303` (D018) |
| Models duplicated layout rules, and a comment hid that labels are dropped | Fixed: `studies/drawing.ts` holds the width, the two bounds and the label rule, with the difference between the two label priorities kept as an argument; `drawing.spec.ts` |
| On recheck, the twenty-id test and the output pin read every work, so a later batch would fail them (also the consistency reviewer's) | Fixed: the inventory reads the `aifg` work and the count follows the records |

## Consistency reviewer

| Finding | Outcome |
| --- | --- |
| `fan-out.md` still said the token stop applied | Fixed: it names D004 as the original figure and D012 as lifting it |
| D016 said thirteen null RxJS readings where the records hold fourteen | Fixed in D016 the same day |
| On the second recheck, a type-only JSON import satisfied the chunk check though TypeScript erases it | Fixed: `chunkContents` ignores it, and a record must now load from its own work's folder; `tools/studies.test.mjs` |

## What the reviewers did not search

Each says so in its report. The criteria adversary left prose, design, image baselines, external
references, real-browser accessibility and the full gate to others. The design improver left prose
and URL accuracy, criterion verdicts, browser, visual and performance results and adversarial
parameter combinations. The consistency reviewer did not reopen external URLs, run the browser or
visual suites or the full launchpad gate, inspect screenshots or reach remote CI, and did not re-read
study prose or model mathematics beyond the focused specs. Those surfaces are covered by the critics
([their findings](review.md)), the browser and visual suites and the target gate.
