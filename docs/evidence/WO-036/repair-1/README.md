# The repair of VER-001, measured

2026-11-15. These files measure the repair of [VER-001](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/verifications/WO-036/VER-001.md)
recorded in [WO-036-D020](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d020) to
[D022](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d022), [D025](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d025) and
[D026](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d026). The probes read the target worktree's engine as it stands
and write nothing; run them from the launchpad worktree:

```sh
node scripts/harness.mjs bounded -- node docs/evidence/WO-036/repair-1/probe.mjs ../DotLn-Angular-wo036 crowd-probe.ts verifier
```

| Probe and arguments | What it prints | Result file |
| --- | --- | --- |
| `crowd-probe.ts verifier` | The seven offsets VER-001 quotes: frames for the crowd's centre and for plain Arrive's to come inside the target radius, and the frame the stopwatch credits each | `results/crowd-verifier.txt` |
| `crowd-probe.ts near 90` | Crowds of 17 sizes (2 to 16, 18 and 20) settled at three spots and sent to 51 distances from 1.005 to 4 units in 90 directions: how many objectives the crowd's centre reaches later than plain Arrive's, by how much and at which distances | `results/crowd-near-90.txt` |
| `crowd-probe.ts near 90 17,19` | The same scan for the two sizes it left out | `results/crowd-near-90-sizes-17-19.txt` |
| `crowd-probe.ts tunings` | Twelve units with Arrive retuned 25 ways, 108 objectives each | `results/crowd-tunings.txt` |
| `crowd-probe.ts settling` | 144 crowd tunings run 3,600 frames: how many come to rest, how many are credited with arriving, and the frames on which two units touch | `results/crowd-settling.txt` |
| `crowd-probe.ts pull 10 2`, `pull 3 2` | Frame by frame after a re-target of 2 units, the mean acceleration along the way to the objective: plain Arrive's units, the crowd, and what Arrive alone asks of the crowd's units | `results/crowd-pull-10-2.txt`, `results/crowd-pull-3-2.txt` |
| `blocked-probe.ts` | A unit sealed off on the move carrying each kind of steering beside its path tool, then a formation given after and before a path tool | `results/blocked.txt` |

The `judged-` files in `results/` are the same probes run against a copy of the engine with
`simulation.ts`, `steering.ts` and `interpreter.ts` as the tree VER-001 judged has them
(`d0a6c4e21f2e0e0f22e8cb52165d88b8e526a199`; each file compared equal to its blob there), the
near scan at 36 directions. Each result file keeps the bounded wrapper's own lines, which give
the run's start, finish and exit code.

[variants.md](variants.md) records the rules measured before the repair was chosen, the two
measured after it, and the code that ran them, on a scratch copy; it is not reproducible from
these files alone.
