# WS-002 — concept-research: the catalog's concepts studied in the landed visual families as a research track apart from the Angular road, run on the operator's spare Codex capacity, with the operator's touchpoints limited to the lifecycle steps

**Outcome:** every concept of DotLn-Angular's catalog that a landed visual
family can draw has a checked study, authored and criticized by workers,
read by a verifier in the served build and landed in the app as data,
without a new page, family or design round and without the operator's
attention beyond the dispatch, the merges and the close of each order.
**Acceptance contract:** each member order is accepted by use (WS-001 rule
24: the verifier's walkthrough of named studies in the served production
build) and by the record check (`npm run studies:check` over the work's
directory), with the critics' dispositions and the link check in its
evidence; the track is delivered when the operator says the catalog is
studied enough, or when no landed family has a row left to draw.
**Delivery state:** in progress

## Rules

Each rule as it stands, with the decision that set it; the member orders and
their decisions hold the history.

1. **No new page, family or round.** A research order lands records drawn
   by a family a road order has landed (`motion` and `timeline` with
   WO-020, `marbles` with WO-021, `flow` with WO-022, `states` with WO-023,
   `relations` with WO-024); it adds no composite, route or page, so WS-001
   rule 25 (the operator's paired comparisons) is not engaged and no
   question is asked of the operator. A concept whose study needs a drawing
   no landed family makes waits for the road order that lands one. (The
   operator's direction of 2026-11-04, ignored intake capture
   `docs/intake/notes/planning-2026-11-04.md`, SHA-256
   `56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`; the
   [2026-11-04 pass](../planning/passes/standard-pass-v0-115-0-research-track-2026-11-04.md),
   D6.)
2. **Selection by rule.** Within a work, among the rows the landed family
   draws, the most-related unstudied rows that no filed or active order of
   the track has already taken, by resolved in-degree, ties toward typed
   rows then source order, twenty per order (ten from each
   work where an order carries two), with one recorded substitution per
   work; the filing pass runs the rule by script over the catalog's data at
   the order's base and records the list and its next rows in the order.
   (The 2026-10-30 second pass, D4, narrowed to what the families draw; the
   2026-11-04 pass, D6.)
3. **The workers.** WO-020's authoring and critic procedure: ten authors
   with two concepts each, one factual critic who opens every reference and
   runs each executable, one reading critic who reads as the operator would;
   twelve launches under `subagentCap`, with the
   [profile's worker-admission and accounting rules](../repositories/dotln-angular.md#run-content-workers)
   declared before the first launch. Under Codex each worker is a
   `spawn_agent` with `fork_turns: none` on `gpt-6.1-sol` at `max`; under
   Claude each is a `dotln-worker`. A worker writes only in its private copy
   of the target, spawns nothing and starts no gate; the executor stays the
   one writer of both worktrees, and its three independent reviews run as
   its role root requires. Authors and critics read the current house rules and
   inspect message coverage and mechanism/presentation separation independently
   of any earlier worked example (WO-028-D042). (WO-020's `fan-out.md`; product 07
   §Model-specific notes; the 2026-11-04 pass, D6.)
4. **The operator's touchpoints.** `drive: WO-NNN --host codex` from the
   launchpad's main checkout (the attended lifecycle phrases on either host
   stay admitted); the merges of the target's pull request and of the
   launchpad's records pull request when the drive stops at awaiting-merge;
   the drive phrase again for the release close. Nothing else is asked of
   the operator: a routine question is resolved under the executor's
   authority and recorded in the decisions; a criterion no candidate can
   meet as written is recorded unmet with its defect class for the verifier
   (product 07 §Operator-opened planning pass; core WO-249's route); a host
   denial of an admitted command goes back through the permission prompt
   once, and a second denial names the fallback once in the handoff. (The
   operator's direction of 2026-11-04; the 2026-11-04 pass, D6.)
5. **Apart from the road.** This workstream is a separate track: its
   members have no sequence entry, appear in the generated index's
   Workstreams grouping and run whenever the operator has Codex capacity to
   spend, each in its own worktree beside any sequenced order. A research
   order's surfaces are its work's study directory, its model directory,
   `studies-summary.json`, one coverage row and its e2e cases, disjoint
   from the road's; a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it. (The operator's direction of 2026-11-04; the
   2026-11-04 pass, D6.)
6. **Refill.** When fewer than two research orders are queued, or the
   operator asks, the next planning pass cuts the next orders by rule 2, one
   per work whose landed family still has rows to draw; a work with fewer
   than twenty drawable rows left (ten in a paired order) gets a smaller
   final batch, its author count scaled to pairs of rows and recorded in the
   order; a work whose drawable rows are exhausted leaves the track until a
   road order lands the family its remaining rows need; a work's next batch
   is cut only after a standards pass boarded against that work's code has
   merged (WS-001 rule 31; WO-034 gates the next Movement batch); and the
   pathfinding chapter's 76 rows join AI for Games' drawable rows once
   WO-036 lands the `grid` family. (The operator record §What the operator
   wants, Depth in batches; the 2026-11-04 pass, D6; the 2026-11-05 pass,
   D3 and D5.)
7. **The records.** WS-001's house rules bind a research order's records as
   they bind a batch's (rules 7, 8, 15, 17, 23, 24 and 26; the target's
   `catalog-rules.md` and `catalog.md` §Studies): a study is in its author's
   own words, every reference is opened before it is cited, a representation
   an idea does not need stays absent, and every record is `checked` by two
   reviewers before it ships; the current record contract is `concept-study-v1`, whose authored text fields
   are keys in lazily loaded work catalogs, and the model shape is the one
   WS-001 rules 30 and 31 and WO-034 set (a language-free simulation, a
   presentation taking the translator, an entry of a few lines, nested keys,
   named placeholders, a description object in place of loose parameters, no
   split made to fit the size ceiling). A changed shape requires a new version;
   the shipped v0 schema remains immutable. Shared infrastructure belongs to a
   road order unless the operator includes it in a batch (WO-028-D042). (WS-001
   rules 23 and 26; the 2026-10-30 second pass, D5.)

## Member orders

| Order  | Repository    | Base                                       | Role in the outcome |
| ------ | ------------- | ------------------------------------------ | ------------------- |
| WO-028 | dotln-angular | `55b59c9133056c1d6471274a9676a7d5649196ac` (WO-022's merge; step 1 integrates the target's `main`) | twenty more Movement-chapter studies from AI for Games, drawn by `motion` and `timeline` |
| WO-029 | dotln-angular | `55b59c9133056c1d6471274a9676a7d5649196ac` (step 1 integrates the target's `main`, which holds WO-028's merge) | twenty more RxJS operators and creation functions, each with an executable marble example drawn by `marbles` |
| WO-030 | dotln-angular | `55b59c9133056c1d6471274a9676a7d5649196ac` (step 1 integrates the target's `main`, which holds WO-028's merge) | twenty more messaging patterns from Enterprise Integration Patterns, each a `flow` |
| WO-031 | dotln-angular | provisional at `55b59c9133056c1d6471274a9676a7d5649196ac`; the pass after WO-023 merges may set it | twenty more enterprise application patterns, drawn by `states` with executable models |
| WO-032 | dotln-angular | provisional at `55b59c9133056c1d6471274a9676a7d5649196ac`; the pass after WO-024 merges may set it | ten more Gödel, Escher, Bach and ten more Team Topologies concepts, drawn by `relations` |

## Dependency and compatibility plan

WO-028 depends on WO-020, WO-029 on WO-021 and WO-030 on WO-022, all merged:
the three can run now, in any order or beside one another. WO-031 depends on
WO-023 and WO-032 on WO-024, the lane pair at the front of WS-001's sequence:
each activates after the family it draws with has merged, and the pass after
that merge sets its base. Every member shares `studies-summary.json` and the
coverage table in `catalog.md` §Studies with every other batch, so a batch whose target `main` has moved since its base integrates `main` before its handoff and again before its final publish (core WO-233's rule), regenerating `studies-summary.json`, reconciling the work's record chunk and the shared `study-models.ts` registry, and rerunning `studies:check`, `test:tooling`, the affected suites and the e2e count case, and a pull request that stops merging cleanly after a sibling's merge returns to `resume: fix` to integrate it. The members hold no edge among
themselves; each depends only on the road order that landed its family, and
WS-001's members owe this track nothing. The edges in the block below run
from the member to the order it depends on, because the kit admits an edge
only from a member (`scripts/lib/work-order-workstream.mjs`, the edge
validation) and the prerequisites here are WS-001's; each order's typed
dependency block is the contract, and WS-001's own edges, between members,
run the other way.

## Delivery states

| Member | State | Evidence |
| ------ | ----- | -------- |
| WO-028 | closed: merged as DotLn-Angular #14 (`48c7f8e`) with the shared study message and model migration the operator included, its records #57, released as `DotLn Angular v0.10.0` on 2026-11-05 | [the order](../work-orders/WO-028-concept-research-movement.md), [FINAL-002](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/final-reviews/WO-028/FINAL-002.md), [WO-028-D042](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d042), [WO-028-D060](https://github.com/DylanBWood/DotLn-Angular/blob/51bf26df57e66564b35406942368068ac1d6f5f6/docs/dotln/evidence/WO-028/decisions.md#wo-028-d060) |
| WO-029 | filed | [the order](../work-orders/WO-029-concept-research-rxjs.md) |
| WO-030 | filed | [the order](../work-orders/WO-030-concept-research-eip.md) |
| WO-031 | filed | [the order](../work-orders/WO-031-concept-research-poeaa.md) |
| WO-032 | filed | [the order](../work-orders/WO-032-concept-research-geb-and-team-topologies.md) |

<!-- dotln-workstream:start -->
{ "id": "WS-002", "track": "separate", "members": [{ "workOrderId": "WO-028", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-029", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-030", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-031", "repositoryId": "dotln-angular" }, { "workOrderId": "WO-032", "repositoryId": "dotln-angular" }], "edges": [{ "from": "WO-028", "to": "WO-020", "relation": "hard" }, { "from": "WO-029", "to": "WO-021", "relation": "hard" }, { "from": "WO-030", "to": "WO-022", "relation": "hard" }, { "from": "WO-031", "to": "WO-023", "relation": "hard" }, { "from": "WO-032", "to": "WO-024", "relation": "hard" }] }
<!-- dotln-workstream:end -->
