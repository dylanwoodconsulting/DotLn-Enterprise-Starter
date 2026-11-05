# FINAL-001 reproduction: on-screen study text outside the message system, and the shape of the model modules

Measured 2026-11-04 by the final review on the reviewed target tree `80145e06fb39d5d5264e46377b1bae5b5cc2b7ab` (base `55b59c9133056c1d6471274a9676a7d5649196ac`; the working tree of the `wo-028` target worktree, byte for byte the tree of draft pull request 14's head `f0e70879efc6c7b757e0e378efbb97d88f03d7fc`). The figures come from [measure.mjs](measure.mjs), run from the target root as `node <launchpad>/docs/evidence/WO-028/final-001/measure.mjs`, with its output in [measure.json](measure.json). The operator's words that set the rule are in the ignored capture `docs/intake/notes/wo028-final-review-translations-2026-11-04.md`, SHA-256 `f4f42e5c934cb06ed012351256de90a78b6f8f04ca5b5fff0de93955774f18c6`.

## The rule and where the text renders

WS-001 house rule 9: every user-facing string goes through Transloco, and templates use `'scope.key' | t`. The operator's direction during this review: a string the reader can see on screen is user-facing, so the rule reaches all of it, with no exemption for record fields. The study composite renders, straight from the record and the model with `translate="no"`: the example name, the intuition and the situation (`study.html` lines 4 to 8), the example description, the limits and the nearby reasons; the drawing's body and mark names and its note (`motion.html`); the mechanism step titles and texts, the pseudocode and the worked lines (`study-explanation.html`); the legend and the caption in the figcaption; and the moment names as the scrubber's buttons. VER-002's screenshot [ver002-02-collision-step-2080.png](../walkthrough/ver002-02-collision-step-2080.png) shows them on the operator's screen.

## What the measurement found

| Measure | WO-028's twenty | Already on `main` |
| --- | --- | --- |
| AI for Games records, prose strings over twenty characters outside the message system | 597 strings, 118,274 characters in 20 records | 621 strings, 130,885 characters in 20 records; the RxJS and EIP works add 40 records more |
| Movement model modules, literal label, caption, note and title lines | 381 lines in 20 modules | 415 lines in 20 modules; the RxJS and EIP works add 42 modules more |
| Exported `model` function length, lines | 65 to 208 (wall avoidance 208, steering behaviours 199, collision avoidance 190) | 61 to 267 (priority steering 267, equilibrium fallback 260) |
| Movement modules that define their own `fixed` helper | 38 of 40 | |
| Movement modules that recompute the same bounds-from-points block | 12 of 40 | |

The record-prose count skips identifiers, URLs, paths, dates, state fields and the example parameters; it counts every other string longer than twenty characters, which is the prose the page renders. The literal-line count takes a module's `label:`, `caption:`, `note:`, `title:` and `intro:` lines plus any line that is one quoted string of twenty characters or more, so the worked-step lines, which are template literals assembled inside array expressions, are counted only where they stand on their own line; the true figure is higher.

## What the checks cover

`tools/scripts/check-i18n.mjs` reads the templates and the `translateSignal` call sites and compares their keys with the translation files; it opens no record and no model module, so `npm run i18n:check` passes on this tree with the text above untranslated. The target's ESLint configuration carries no `max-lines`, `max-statements` or `complexity` rule, so no gate bounds a function. The three independent reviews (criteria, design, consistency) and the two content critics judge the candidate against the order and WO-020's author brief, which prescribes one pure `model` function per study that computes the frames, values, worked lines, legend, caption, comparison and inputs; none of their briefs names house rule 9 or a size rule, and none raised either.

## Reproduce

From the target root:

```sh
node <launchpad>/docs/evidence/WO-028/final-001/measure.mjs
grep -c 'translate="no"' libs/features/tools/src/lib/composites/study/study.html libs/features/tools/src/lib/composites/study-visuals/motion/motion.html
grep -l '^const fixed = ' libs/features/tools/src/lib/studies/movement/*.model.ts | wc -l
npm run i18n:check
```

The first prints the JSON above; the second prints 7 and 3; the third prints 38; the fourth passes, which is the gap.
