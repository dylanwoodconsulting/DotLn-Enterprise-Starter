# WO-036 implementation handoff

2026-11-15. Walls and ways are implemented in the target worktree, uncommitted until final
review:

- Walls and obstacles drawn on the soldier scene's field, kept as field steps of the
  composition and replayed at their frames, with a keyboard list of every shape.
- A tile graph the shapes block, A* and Dijkstra's algorithm with the catalog's heuristics,
  path smoothing and the cost functions as rail tools in a new Ways group.
- Path following that plans again when the field or the objective changes or the geometry
  stops a unit, and a blocked state the inspector, the unit rows and an instrument read out.
- Obstacle and wall avoidance, and a head-on policy beside collision avoidance, with `avoid`
  unchanged.
- The priority steering repair WO-015-D010 boarded.
- Three route instruments and an older-trial rule for saved scenes.

The integrated target base is `eb9d227483e30164105da077f50673789d1e5c9f`, the target's `main`
throughout. The candidate is the target's working tree `d0a6c4e21f2e0e0f22e8cb52165d88b8e526a199`.
That is review round 3's tree (`1697743d6e012462802bfb02aa955d530bea0954`) and the 32 lines
changed after it ([D016](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d016)). Neither main moved during the execution,
so nothing was integrated: the launchpad's is `562fb9146f458787d12edf9ee518a6252508858e` and
the target's is `eb9d227`. The decisions are [decisions.md](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md), WO-036-D001 to
D016; the evidence index is [README.md](README.md).

## Acceptance criteria

**Criterion 1:** unmet — later-phase. The verifier performs the Objective's session in the
served production build and writes the VER report's `## Walkthrough` section with its
captures. The executor's own run, at 2080 by 1460, 3840 by 1620, 1440, 768 and 360, is
[walkthrough.md](walkthrough.md); it neither performs nor stands in for the verifier's, and
this handoff records no waiver or defect.

**Criterion 2:** met — the engine's `known-outcome.spec.ts` asserts on
`walls-known-outcome.json` that in branch A every focus unit reads `arrived` by the last frame
with no frame placing a unit inside a wall or obstacle, that the `pathLength` and `replans`
series equal the fixture's, and that the hashes reproduce across two runs; in branch B every
unit reads `blocked` and `blockedUnits` is 12. `pathfinding.spec.ts` cuts the edge across a
thin wall between two cell centres, refuses a diagonal past a blocked corner and pins 80
expansions under the octile heuristic and 180 under zero. `path-following.spec.ts` has a unit
the geometry stops plan again within 60 frames. `trial-known-outcome.json` keeps every hash it
had at `eb9d227`, its regeneration adding only the three route series. The engine's suite
passes 189 ([README §Criterion 2](README.md#criterion-2-the-known-outcomes)).

**Criterion 3:** met — `steering.spec.ts` covers an exact head-on pair, a pair on one spot and
an ordinary offset crossing, each with its replay, asserting that the separation across the
policy's normal grows from the first frame after it fires, that no later frame overlaps and
that the sides repeat. Its block "a crowd under priority steering with Arrive" asserts that
four crowds of twelve come to rest and that three settled crowds re-targeted 12 to 14 units
reach the new objective no later than a plain Arrive. Both arms are recorded: exit 1 with all
seven failing on their assertions against the whole base engine, exit 0 on the candidate
([README §Criterion 3](README.md#criterion-3-the-priority-repair-failing-at-the-base-and-passing-after-it)).
The repair changes priority steering alone ([D003](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d003)). D003 records
the reviewers' measurements of near re-targets under both readings of "reaches" and leaves
both readings to the verifier. The tools project's tests pass, 129 files and 1,116 tests, at
one worker in the Preflight. `git diff --quiet eb9d227 -- libs/features/tools/src/lib/studies`
exits 0.

**Criterion 4:** met — `scene-store.spec.ts` (34) restores a stored value and imports an
export whose kept trial carries only the eight series of `eb9d227`, with the route series as
series of nulls and the restore complete; it still refuses a present series of words; and a
composition carrying field steps exports and imports as written. The facade spec replays field
steps at their frames and never records a field edit the store could not read back. The
browser test "a saved composition keeps its walls through a reload and replays them" passes.
`npm run check:fixtures` passes with `walls-known-outcome.json` among the files
`check-scene-fixtures.mjs` validates.

**Criterion 5:** met — the facade spec compares the rail's ids with `sceneTools('aifg')`
filtered by `isRunnable` (28), places the path kinds in Ways and both avoidance rows in Avoid,
and runs every offered tool at its defaults with every parameter read. `pathfinding.spec.ts`'s
cost cases raise the expansions under a travel weight above one with the route's cells
unchanged, the heuristic staying the unweighted distance. They leave route, length and
expansions unchanged under `aifg-b:48` and `aifg-b:50`, and the inspector says which in words.
`interpretedKinds` equals `sceneTransformKinds`; `npm run catalog:check` and the catalog's tests
pass; `aifg-a:247` still reads `status: background` with no `faces`
([README §Criteria 4, 5, 7 and 9](README.md#criteria-4-5-7-and-9-what-holds-them)).

**Criterion 6:** met — in the Preflight `npx nx e2e dotln-e2e` passed 180 with the step 15
cases, axe at the board spec's threshold and no horizontal overflow at 360, 768, 1440, 2080 by
1460 and 3840 by 1620, and `npx nx e2e-visual dotln-e2e` passed 50. The README lists each
regenerated baseline with what changed in it, all six `scene-*.png`
([README §Criterion 6](README.md#criterion-6-the-regenerated-visual-baselines)).

**Criterion 7:** met — `npm run i18n:check` exits 0 and `node --test
tools/i18n-copies.test.mjs` passes 3 of 3.

**Criterion 8:** met — [design/comparisons.md](design/comparisons.md) records the first pair, A
in the transport and B as a Field tab, and the operator's pick of A with the rounds ended
([D009](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d009)). B had no file of its own. Its parts lived in
`scene-page.html`, `scene-page.ts`, `en.json` and the scene testing copy, which stay as A's, so
criterion 8's `ls` has no file of B's to run on. D009 names those files and the greps showing
B's branch and messages gone from them.

**Criterion 9:** met — `npx nx build dotln --configuration=production` exits 0 with an initial
total of 406.92 kB and no budget warning. `npm run check:bundle` passes, and `package.json`
and `package-lock.json` have no diff against `eb9d227`.

**Criterion 10:** met — `node scripts/target-gate.mjs WO-036 --review` recorded a passing row
for every declared command at `eb9d227`: install, lint, typecheck, test, format, build, e2e
and visual, in 1 min 57 s ending at about 17:23:09Z. The plain gate had passed its five in
4 min 1 s just before. A target gate passes only when every command passes and the target's
tree and `HEAD` are as they were before each command, so neither changed a tracked byte. The
document gate passed 15 of 15 suites at 17:16:44Z and again at 17:28:00Z, after D013's last wording and the index it generates, its row recording the tree without this order's evidence too. The Preflight line ran between 17:06:32Z and 17:14:25Z, before the
first full gate ([README §The Preflight](README.md#the-preflight),
[§The gates](README.md#the-gates)).

## Review and disposition

self-review: found 50; fixed 35; recorded 15; rounds 3; unreviewed 32 lines (X1's brake for a
blocked unit and its spec, changed after round 3 and judged by the executor alone, D016)

**Round 1.** Three fresh reviewers (criteria, design and consistency) read the whole change
against `eb9d227`. They found 41 findings, 35 once shared ones are joined. 27 were fixed, two
of them later in the run (criterion 3's counts in round 2, the handoff link by this file), and
8 were recorded ([D013](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d013)).

**Round 2.** The same reviewers rechecked their findings and read the whole change again. Every
fix held. Of 13 new findings, 10 distinct, three were admitted and fixed: two files Prettier
refused; a blocked unit carrying velocity matching that cruised on; and criterion 3's base arm,
which had stopped reaching its assertions. Seven were recorded ([D015](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d015)).

**Round 3.** One combined worker read the change since round 2's tree. It found five findings,
one admitted (a squad sealed off on the move coasted about 20 units), all five fixed after it
([D016](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d016)).

Two executor errors are on the record:
- the executor told the operator a critic was right before giving the operator that critic's
  report ([D014](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d014));
- rounds 1 and 2 were recorded without `--target`, so their records name the launchpad's tree
  ([D016](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d016)).

Recorded and not fixed, for the verifier and later orders:
- near re-targets that arrive up to 3 frames after plain Arrive on the centre reading, and up
  to 6 on the stopwatch's (D003);
- the repair's slower first arrival (D003);
- a routed squad stacking at the objective, which is main's Arrive;
- no browser case exercising the head-on policy;
- toggleSearch's stale comment;
- `RouteFrame.search`, which nothing reads;
- the geometry list showing a coordinate the engine clamps or refuses;
- the profile row's "one clearance test";
- a path unit with a zero seek or arrive weight never taking its route;
- WO-045's ray cast import, carried by `FUP-49f382b208b36ff7`.

**The meta critic.** Separate from the ladder, a critic of the executor's conduct ran on
GPT-6 Astra at the operator's request, as core's WO-276 ran it ([D012](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d012)).
Critic 1 ran from 16:09Z to 16:27Z, and its five points were all accepted
([D014](https://github.com/DylanBWood/DotLn-Angular/blob/22c1c7e203234e6700421a0105d79b14e1e72440/docs/dotln/evidence/WO-036/decisions.md#wo-036-d014)). Its clock ended with the passing review gate at 17:23Z, a
minute before a second critic fell due, so none ran after it. Workers in all: seven
`dotln-worker` uses (four launches, three re-tasks) and the one critic launch, eight of a cap
of 40.

## Boundaries, release and attestation

The target release classification is minor with reviewed notes. `npm run release -- prepare
--local` reports that the target order records no release and changes no file, and `npm run
publication:check` reports no editions declared. This execution
has not committed, pushed, opened a pull request or published anything; the branch
`feat/scene-walls-and-ways`, its title and the records commit are the publishing roles'.

The outcome matches the order: a squad finds its way round walls and obstacles drawn on the
field, plans again when the field changes and says when there is no way. It parts head on
without touching and replays its composition with its walls. The criteria are met but the
first, which is the verifier's session.

Executor attestation: `claude-code` version `2.1.325`, model `claude-opus-5-5`, effort `max`
read from `CLAUDE_EFFORT`, source `claude-session-readback`. Usage at 17:23:51Z, from `node
scripts/harness.mjs usage`, source `claude-transcript-message-usage`, scope dispatch:
414,142,006 total tokens, almost all cached input (410,015,230), and 955,469 output tokens.
Reasoning tokens and cost are unavailable. The dispatch stood at 18 h 12 min of an unbounded
wall-clock allowance (D002's activation at 23:11Z on 2026-11-14, with the operator's overrun
authority), with 0 complete launchpad runs. The order's work ran from that dispatch to this
reading, through three review rounds, the critic and both target gates.

Current authored documents were read after editing. Generated and large evidence (the
captures, the fixtures, the decisions index) was checked by the commands that produced it
and by the comparisons recorded in the README.

`node scripts/terms.mjs branch` screened this branch's 15 changed files against the private
list at 17:15Z, before the first document gate, and again at completion. It listed no line in
either mode, so the executor read 0 lines beside the list. The screen reads files inside the
launchpad only, so the target's change was not screened against the list.

The first `implementation-ready` was refused by its `git diff --check`: lines 135, 140 and 172
of [design/round-1/b-field-tab.patch](design/round-1/b-field-tab.patch) each held a lone space,
a unified diff's empty context line. They are now empty lines, which `git apply` reads as the
same context: `git apply --numstat` gives the same two files, 99 lines added and 36 removed,
before and after. While checking, the executor ran `git add -N` on this evidence directory and
undid it at once with `git reset -q -- docs/evidence/WO-036`, which touches only the index,
against the rule that it never resets; `git status` reads as before, 8 files modified and 7
entries untracked.
