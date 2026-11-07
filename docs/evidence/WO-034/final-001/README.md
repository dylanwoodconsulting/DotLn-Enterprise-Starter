# WO-034 final review evidence

2026-11-06, the operator's local date (times are UTC, 2026-11-07). The final reviewer's reproductions, its own session with the reshaped code and the wall study, and the commit series it made in the target. The verdict and its reasoning are in the final review report; the decisions are [D014 to D016](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d014).

## The reviewed commits

Neither `main` had moved: the target's `origin/main` is still the base `d7d842dc4fdbde03099695933a448d9632fa4335`, and `worktree integrate` took nothing into the launchpad order worktree. The candidate is the tree VER-001 verified. It is committed on the target's `wo-034` branch as six commits, each a whole change a reader can take on its own:

| Commit | Subject | Files | Tools unit suite on its own export |
| --- | --- | ---: | --- |
| `4228e01` | fix: end label guides at their names and omit unreadable vectors | 10 | 105 files, 965 tests, passed |
| `9ea00ba` | refactor: reshape the first movement batch's presentations | 30 | 106 files, 968 tests, passed |
| `c1f2157` | fix: say what the wall study's default run shows | 4 | 106 files, 970 tests, passed |
| `9d7e77c` | refactor: trim the study catalogs and reword count-led messages | 21 | 107 files, 972 tests, passed |
| `86ca9c3` | test: refuse literals outside resolved study messages | 1 | 107 files, 974 tests, passed |
| `0ac470e` | docs: describe the workspace tools' parameters and returns | 3 | 107 files, 974 tests, passed |

The last commit's tree is `d554030f09eb631952b8b6f1c2396b6938f20398`, the tree of the review gate row and of the draft pull request's head, and the target worktree was clean after it. Three files carry parts of more than one change and were committed in stages: the AI for Games catalog and the testing copy of the study catalogs, split by top-level study subtree, and the catalog architecture document, split by hunk. [stage-builder.mjs](stage-builder.mjs) builds those stages from the base and the candidate and refuses unless the last stage reproduces the candidate's bytes; every other file enters one commit whole. At each commit, the testing copy equals the lazy catalogs, the check `tools/i18n-copies.test.mjs` makes. [test-commit.mjs](test-commit.mjs) ran the Tools unit suite on a `git archive` export of each commit, sharing the target's unchanged `node_modules`; the last row is the candidate's own 974 tests, uncached. These are probes run under the launchpad's bounded wrapper, not gate rows; the review gate row at the final tree supports the criteria.

## Reproductions

- Criterion 2: the evidence directory's `shape-audit.mjs`, rerun over the candidate, writes `shape-audit-after.json` byte for byte: across the first batch's sixty model files (927 functions, the twenty presentation modules among them) no function takes more than four parameters, its messages hold no numbered placeholder and 1,251 nested model keys against no flat one, and 23 functions have 70 counted lines or more.
- Criterion 4: `npx eslint --print-config` on `arrive.presentation.ts` resolves `max-lines-per-function` to `[2, {"max": 80, "skipBlankLines": true, "skipComments": true}]`.
- Criterion 7: `studyEip/en.json` holds none of the twelve spec-only keys; `studyAifg/en.json` holds no `wander.record.parameters.drawPairs`; no model message among 1,022 EIP and 486 RxJS ones begins with a placeholder. The AI for Games catalog's one remaining numbered placeholder (`{{value2}}`, `{{value3}}` in Movement in the third dimension's volume text) belongs to the second batch, outside this order.
- Criterion 8: `node --test tools/` in the target worktree passes 92 of 92, and `git diff --name-only d7d842d -- tools/board-count.test.mjs tools/check-script-reference.test.mjs tools/pr-title.test.mjs` prints nothing; all three paths are tracked at the base.

## The session

**The code.** `two-level-formation-steering.presentation.ts`, the Objective's example, read whole: each function takes the translator and one `EscortFrame` or the run's `EscortDescription`, or a sample, its step and the example; nothing takes more than three parameters, and the worked lines read named values through named placeholders. One more module was drawn at random from the sixteen that neither VER-001 nor this review had read, with `node:crypto`'s `randomInt` at 2026-11-07T02:28:17Z, and drew `scalable-formations.presentation.ts`, read whole: its run description carries the bounds, the moment the patrol fills and the lane's edges once, and every frame function takes the translator, that description and one sample. The three tools WO-027 landed were read whole: each function has one job and at most two parameters, and the added JSDoc describes what each takes and returns.

**The wall study.** This review built the candidate's production bundle itself ([build-candidate.mjs](build-candidate.mjs), configuration `production`, output in session scratch, no mock worker in it) and ran VER-001's [walkthrough program](../ver-001/wall-walkthrough.mjs) against it in a fresh Chromium at 360×800, 768×1024, 1440×900, 2080×1460 and 3840×1620. Its [results](wall-results.json) equal [VER-001's](../ver-001/wall/results.json) apart from timestamps and image digests: every frame description of the default run and of the one-unit-ray run, the comparison text and the moments (Ray first hits at 5, Ray misses again at 7, Smallest clearance at 29, End of run at 80) at every size, with no page error, console error or failed request. The frames at both operator sizes were read as images.

In this reviewer's words: the nine-unit ray reaches the wall on frames 5 and 6 only. For those two frames the courier seeks a point six units back out from the wall instead of the delivery, which swings it a few degrees further towards the wall's top end; from frame 7 it seeks the delivery again. Seeking does most of the turning. What avoidance adds is the margin: rounding the wall's end at 2.9 s the courier clears it by 0.12 units, where the same run with a one-unit ray, which never hits, carries the body 0.08 units into the wall. The page says that in its caption and findings. The comparison chart is the one place the difference does not show, because both traces share an axis twelve units tall (D013).

## The draft pull request

[preview-pr.json](../preview-pr.json) records pull request 16 as read from the forge at 02:47:57Z: open, draft, mergeable, head `76f8bcee`, no review, comment or thread, and CI's `checks` and `visual` jobs and the title workflow passed on that head. The title workflow had decorated the conventional title to `:recycle: refactor: …`; the final publish sets a gitmoji-and-subject title under WS-001 rule 20.

## After the filing

`target-records` filed the order, the decisions, VER-001 and FINAL-001 into the target as its records commit `c6f0fb2f6d62cc885866fbad95c2cb37899390b1`, whose single parent is the reviewed commit `0ac470e`, and removed the moved sources from the launchpad. The filed VER-001 ends with the footer [D016](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d016) records, word for word: "Filed from the launchpad Launchpad (its tree at commit 527eb8ceb044216cf2e02904fee23c8fb989d3df); this record's launchpad path was docs/verifications/WO-034/VER-001.md, and its relative links resolve against that path there, not in this repository." The filed decisions name the same commit. That commit is the `main` of the launchpad's public repository, and none of VER-001's 35 relative link destinations exists at it. The launchpad links that pointed at the moved decisions now point at the same anchors in the target at the records commit; no wording changed.
