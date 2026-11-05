# Repair implementation reviews

The executor completed the repair and write-backs before three fresh independent native Codex reviews, all requested as gpt-6.1-sol/max with fork_turns none. Workers read the repositories and wrote scratch reports only; none ran a gate, test suite, browser task or descendant. The parent recorded each returned report through `worker record` and retains the same returned JSON here. These are the repair’s reviews, separate from the original implementation’s ladder.

| Round | Review | Findings | Disposition |
| --- | --- | --- | --- |
| 1 | [Criteria](round-1-criteria.json) | 0 | No counterexample found within stated coverage |
| 1 | [Design](round-1-design.json) | 1, DI-01 | D034 separates every guide from the final text layer; browser regression checks paint order |
| 1 | [Consistency](round-1-consistency.json) | 0 | Producer/consumer and evidence identity checks agree |
| 2 | [Design recheck](round-2-design.json) | DI-01 held, no new findings | Fix covers body and mark guides, preserving all positions and text |

[Round 1’s candidate](round-1-candidate.json) binds target tree `be84c53c033bbfcb3977e8933f87ba9531405b7d`; [round 2’s candidate](round-2-candidate.json) binds `80145e06fb39d5d5264e46377b1bae5b5cc2b7ab`. Both compare the entire order to target base `55b59c9133056c1d6471274a9676a7d5649196ac`, including all 101 changed/untracked paths. Round 2 judges only DI-01’s template, browser-regression and standing-document delta. Round 3 is unnecessary: round 2 required no further code change. No reviewer runs after the complete validation pass.

self-review: found 1; fixed 1; recorded 0; rounds 2; unreviewed 0 lines (round 1 covers the whole target diff and round 2 covers its only code correction).

Canonical reports were filed under `docs/control/local/reviews/WO-028/repair-1/round-1-criteria.md`, `round-1-design.md`, `round-1-consistency.md` and `round-2-design.md`. Their filing is not additional worker use. Repair totals are five launches and five re-tasks, ten uses of twenty, no descendants. Every worker’s cumulative token count remains unavailable; none is treated as zero. The plan retains the parent usage read before each admission.

The round-2 helper requires the earlier finding’s qualified id, `design.1.DI-01`. The worker returned its local `DI-01`; [the binding receipt](canonical-binding.json) records that identifier-only qualification for filing, with all judgment text unchanged and the original report preserved.

The final document gate rejected absolute local roots in the parent-authored candidate manifests. [The projection receipt](manifest-projection.json) binds the original private snapshots to the public manifests: only their two root-location fields become worktree placeholders; all reviewed Git trees, relative paths and file hashes remain unchanged. No source change or new reviewer follows this evidence-only correction.
