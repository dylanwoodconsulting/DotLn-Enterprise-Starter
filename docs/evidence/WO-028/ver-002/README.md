# VER-002's probes

These reproduce the measurements [VER-002](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/verifications/WO-028/VER-002.md) rests on. All of them ran on 2026-11-04 against a production build made with `--skip-nx-cache`, with all 101 target files matching the [round-2 candidate](../repair-1/reviews/round-2-candidate.json).

## Run them

In the target worktree, first run `npx nx build dotln --configuration=production`. Then, from this directory, with a Playwright browser installed in the target:

```sh
node ../ver-001/label-sweep.mjs <target worktree> label-sweep.json
node label-attack.mjs <target worktree> label-attack.json
node session.mjs <target worktree> ../walkthrough session.json
python3 wall-recompute.py
```

`names-probe.ts` needs bundling against the target, using the esbuild the target already installs:

```sh
<target worktree>/node_modules/.bin/esbuild names-probe.ts --bundle --platform=node --format=esm --splitting --outdir=<scratch> --out-extension:.js=.mjs --tsconfig=<target worktree>/tsconfig.base.json --alias:@target=<target worktree> --banner:js="import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);"
node <scratch>/names-probe.mjs <target worktree>
```

## What they found

| Probe | Result |
| --- | --- |
| [VER-001's sweep, unchanged](../ver-001/label-sweep.mjs), [results](label-sweep.json) | Zero clipped and zero overprinted frames for both batches at 3840×1620, 2080×1460, 1440×900, 768×900 and 360×900: 17,375 frame observations. F1 and the narrow-width follow-up F2 hold. |
| [label-attack.mjs](label-attack.mjs), [results](label-attack.json), default runs at 2080×1460 and 360×900 | Zero labels cut at the drawing's top or bottom, which VER-001's sweep does not measure. |
| The same, at both ends of every offered input of the seventeen new studies that offer one | 120 runs over 6,328 frames across the two type sizes: zero clipped and zero overprinted. Blending versus arbitration, Corner trap and The firing solution offer no input. |
| [names-probe.ts](names-probe.ts), all motion studies, every value of every offered input | 1,030 runs, 95,934 frames, 264,240 supplied names, none lost. The placement's fallback that drops a name is never reached. |
| [wall-recompute.py](wall-recompute.py), [output](wall-recompute.txt), sharing no code with the model | Reproduces the wall study's printed numbers, and shows how little the ray changes the run ([D036](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d036)). |
| [session.mjs](session.mjs), [results](session.json) | The Objective's session at all five sizes, with 80 screenshots named `ver002-*` under [walkthrough/](../walkthrough/). No page error, console error, failed response or horizontal overflow. |

Drawing text comes in only two sizes, 24 drawing units at or below 600 pixels of viewport and 15 above, and placement works in drawing units. So 360 and 768 stand for the widths around them.

## Reading label-attack.json

Three of its columns are not rules, and none of them is a defect on its own:

- **`overShape`** counts a name touching a body or mark, usually the one it names. The new batch has 37 such hits on 990 frames at 2080, the first batch 20 on 2,485.
- **`guideThrough`** counts a guide passing behind another name. The guides paint before all the text, and each name has an outline, so it reads as in [steering-60.png](frames/steering-60.png).
- **`jumps`** counts a name moving more than 40 drawing units between frames. A name used twice in a frame, such as `marshal` and `delivery` in Blending versus arbitration, is counted falsely, because the probe keys names by their text. Otherwise the new batch's names hop on at most four frames per name, when crowding starts or ends.

## Frames

[frames/](frames/) holds the close-ups read for the report, at 2080×1460 with a device scale of 2. The two `ver002-wall-*` images are page captures at a device scale of 4/3.
