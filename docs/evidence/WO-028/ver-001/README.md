# VER-001's label sweep

This reproduces finding F1 of [VER-001](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/verifications/WO-028/VER-001.md). It measures the labels of every AI for Games study's drawing, on every frame, in the served production build. A label counts as clipped when the drawing's edge cuts it by more than a pixel, and as overprinted when its glyph box overlaps another label's by more than two pixels each way. WO-020's twenty studies are the control.

## Run it

In the target worktree:

```sh
npx nx build dotln --configuration=production
```

Then, with a Playwright browser installed there, from this directory:

```sh
node label-sweep.mjs <target worktree> results.json
```

It serves the build itself, in fresh browser contexts with reduced motion, and takes about 5 minutes for the five sizes. A repair that holds F1's rule reads zero for the `WO-028` batch at `3840x1620` and `2080x1460`, with the `first` batch still at zero. [label-sweep.json](label-sweep.json) holds VER-001's complete results, measured on 2026-11-04 at the candidate that matches all 79 hashes of the [round-2 candidate](../reviews/round-2-candidate.json).

## Result at the operator's sizes

The drawing is 686 pixels wide at 3840×1620, 2080×1460 and 1440×900, so those three read alike. 228 of the new batch's 990 frames carry a defect (199 overprinted, 29 clipped). The first batch has none of its 2,485, though it draws up to ten labels in a frame.

| Study | Frames affected | Labels | As read in the images |
| --- | ---: | --- | --- |
| Motor control | 89 of 101 | Cart × Safety line | Garbled for most of the run, including the stop the study is about |
| Steering behaviors | 60 of 81 | Mara × Depot | Run together, still legible |
| Coordinated movement | 28 of 161 | Camera × Gate | Run together, still legible |
| Movement in the third dimension | 9 of 25 | Drone × Beacon, Drone × Ground projection | Overprinted late in the run |
| Two-and-a-half dimensions | 8 of 25 | Plan · x/z × Concourse target | Overprinted late in the run |
| The firing solution | 3 of 75 | Chosen low arc with Launcher, Beacon and Alternative high arc | Overprinted around launch and arrival |
| Jump points | 1 of 18 | Finch × Take-off | One frame |
| Projectile trajectory | 1 of 29 | Dock flare × Landing | One frame |
| Iterative targeting | 8 of 8 (clipped) | Harbour launcher | First letter cut on every frame |
| Blending versus arbitration | 21 of 21 (clipped) | delivery | At the edge; barely cut at these sizes |

No study overprints on its opening frame. The reading critic's images were opening frames and charts, so this class was seen only where a study opened on it or an author chose that moment.

## What the sweep does not see

It compares text with text and text with the drawing's edge. The read of the images adds three marks it cannot measure: in Blending versus arbitration an arrow strikes through the `priority` label, in Corner trap an arrow runs through `Rover`, and in Motor control a near-zero vector leaves a stray tick above the cart once it has stopped.

## Frames

[frames/](frames/) holds captures of the worst measured frames: Steering behaviors, Coordinated movement and Two-and-a-half dimensions at 1440, which draw as the operator's sizes do, and the 360-pixel captures of the boarded narrow-width defects ([WO-028-D023](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d023)). The walkthrough holds Motor control, Iterative targeting and Blending at the operator's sizes: [Motor control at 2080](../walkthrough/ver001-16-motor-control-figure-2080.png), [Iterative targeting at 2080](../walkthrough/ver001-17-iterative-figure-2080.png) and [Blending at 2080](../walkthrough/ver001-18-blending-figure-2080.png).
