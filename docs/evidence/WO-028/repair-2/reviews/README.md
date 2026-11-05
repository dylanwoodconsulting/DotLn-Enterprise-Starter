# Shared-migration repair reviews

Three fresh independent native Codex reviewers judged the finished round-1
candidate, requested as `gpt-6.1-sol` at `max`, with `fork_turns: none`. They read
both repositories without writing them and returned only scratch reports. None
ran a test, gate, probe, browser or descendant.

[The frozen candidate](round-1-candidate.json) binds target tree
`598d4b63c2d3f076a15777c103010956016b5872` against base
`55b59c9133056c1d6471274a9676a7d5649196ac`: all 402 changed or new target paths,
including the original order and both repairs. Its launchpad tree is
`d5dcc2a32651112a378266e979b4a76cd9ed878f`. Each report states its detailed reading
and sampling boundaries; a complete inventory is not claimed as a semantic
line-by-line reading of every file.

| Review | Finding | Required repair |
| --- | --- | --- |
| [Criteria](round-1-criteria.json) | F1 | Supply computed stream result/narration numbers through message parameters from model data; exercise changed values. |
| [Design](round-1-design.json) | F1 | Keep marble origins as stable stream IDs, allowing translated labels to coincide. |
| [Design](round-1-design.json) | F2 | Retain movement step calculations for presentation instead of discarding and repeating them. |
| [Consistency](round-1-consistency.json) | F1 | Update the developer entry point's current study schema from v0 to v1. |

The parent filed all three returned reports through `npm run worker -- record`.
The JSON files here preserve the returned bytes. D038 already records that the
Agent-record helper assigns Claude transport/model metadata and a launchpad tree
even for native Codex target review. Those generated fields are not effective
worker attestation or target identity: this record, the returned reports and the
frozen candidate name the actual requested host/model and reviewed target.

The consistency reviewer independently resolved all 80 v1 records against the
previous reviewed Git tree, finding zero differences except the schema version.
It also traced the record chunks, summary, registry, scope assets, fixture copies,
checker wiring and unchanged package/lockfile bytes. The design reviewer checked
all 402 target file hashes against the frozen tree and transferred the computed
number issue to the criteria reviewer, so it is counted once.

At the round-1 boundary there are four findings, all `should-fix`. The parent owns
stable-ID and documentation fixes. Two original implementation workers repair
computed narration and retained movement calculations in fresh private source
copies; the parent integrates their declared files. Root uses are thirteen:
three implementation launches, four earlier author coordination messages, three
review launches, one review transfer and two author re-tasks. No descendants are
admitted. Recheck capacity remains within the twenty-use cap.

Round-2 reports and final dispositions are appended after the corrections are
integrated and checked. A documentation-only correction needs no independent
recheck under the review ladder; code findings return only to their originating
reviewers. Complete target gates follow the finished ladder.


## Round-2 admission

The integrated fixes and their authored write-backs are complete. All four
round-1 findings have concrete repairs, with native lint, unit, build, bundle,
browser and formatting checks passing. The movement comparison matches 176 cases
on the final formatted source. D048 records integration and the audit boundaries.

One additional author direction about numeric count formatting brings the
pre-recheck use count to fourteen. Two bounded rechecks are admitted: the retained
criteria reviewer rechecks criteria.1.F1, and a fresh design worker carrying the
prior report rechecks design.1.F1 and design.1.F2 because the original design
worker is no longer available in the host inventory. They judge only those fixes.
This plan uses sixteen of twenty root uses, leaving four, with no descendants.
Consistency's schema-name correction is documentation only, so its round-2
recheck is skipped under the ladder.


## Round-2 outcome and final-round admission

[Criteria](round-2-criteria.json) holds criteria.1.F1, and
[design](round-2-design.json) holds design.1.F1 and design.1.F2. Neither returns a
new finding. Their original JSON reports are preserved byte-for-byte and filed
through the canonical helper. One vocabulary clarification ensured that `held`
means the fix holds; the returned design report uses that meaning consistently.
That coordination is root use seventeen.

The design report records related Arrive and Collision reuse notes. D049
dispositions these as remaining instances of the original F2 calculation-reuse
class under the repair briefing's class-closing duty. The parent changes only
those two presenters: the main Arrive run and desired velocity are reused, and
Collision reads its retained predictions. No new optimization sweep is admitted.
The changed models still match all 176 complete-output comparison cases; lint,
foundation types and production bundle checks pass.

One fresh combined round-3 worker will review only the delta from round-2 target
`50d5b30b4895fb3f997b793240b19e3193e5537d`, carrying criteria, design and consistency
briefs and the retained reports. This is the final review round. Its launch brings
the root count to eighteen of twenty, with no descendants; the parent judges any
later delta without another reviewer. D050 extends the order-scoped token stop
under D004's existing authorization while retaining the worker and dispatch caps.


## Final-round outcome

[The final combined report](round-3-combined.json) returns no findings. It reads
the complete two-presenter delta (nine insertions and twelve deletions), the
simulation producers, model entry points and existing specs. It independently
matches all 163 movement source hashes to the frozen final target and verifies
the 176 preserved comparison rows, with explicit limits on semantic reading and
execution. The reviewed target is
`15d0e4efcfd20c9d8159cc3cd06d8e0ba5de41a0`; the launchpad binding is
`a82181ea636197a529657195567c205976b41451`.

The original returned report is retained byte-for-byte and filed through the
canonical helper. Its `--since` names the frozen round-2 launchpad tree because
that helper is target-blind (D038); the returned report and candidate manifests
carry the actual target since/current identities. The three-round ladder is
finished: four findings fixed, zero unresolved, with the two related reuse notes
disposed in D049. Actual root uses are eighteen (eight launches and ten re-tasks
or coordination messages), no descendants. No further reviewer runs in this
repair. Complete target validation follows this boundary.
