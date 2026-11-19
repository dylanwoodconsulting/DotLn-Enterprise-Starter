# standard pass v1 4 0 — 2026-11-19

## Dispatch and capture

The operator requested a standard planning pass and the latest starter on November 18 in New York. The kit registered the pass on November 19 UTC. The 54-byte dispatch is in ignored intake at `docs/intake/notes/planning-2026-11-18-upstream.md`, SHA-256 `ff9c3db3880e2ab9f4b07b5e909ee48e28a94fe5d1a33f5ed14ce9a836242098`. The separate merge confirmation has digest `3f8f09c8e09f712b362183db69f4f061bd948d7a61e7663b585d723602c559b1`.

The instance began on clean `main` at `20e16cd`. Its latest order, WO-036, was closed. The operator merged the update before the planning branch opened. No order was activated.

## Readings

### The starter update

The starter’s published tag and fetched `upstream/main` both resolved to `58e83e1`, the export of core `bc761ad9`. There was no open update PR. The incoming launchpad preview showed 139 replacements, 12 additions, 962 unchanged kit files and zero refusals. The merge kept this instance’s four documents where both sides changed them and its manifest for the re-emit. The hand-written operating floor matches the pre-update commit. The update supplied 37 emitted surfaces, verified all 1,113 files, and passed all 15 document checks. The operator merged [update #78](https://github.com/dylanwoodconsulting/DotLn-Enterprise-Starter/pull/78) at `d1eb331`. The finish helper fast-forwarded `main` and bootstrapped it. The target had only its base checkout.

| Release | Consequence for this instance |
| --- | --- |
| v1.0.1 and v1.1.0 | The commands page specifies which manifest to keep in an update conflict. The revised kit guide preserves its section links. This fork kept its own front page and documentation map. |
| v1.2.0 | Emit recognizes an intact Codex surface from the manifest on `main`. A sync carries a uniquely matched candidate’s dispositions when its source text stays the same and its key changes in that sync. The four previously repaired register rows keep their recorded decisions. |
| v1.3.0 | `docs/control/time-limits.json` makes the formatting deadline configurable. The default is now 0 h 5 min. A timeout gives the applicable limit and still fails. |
| v1.4.0 | The stop inventory distinguishes advisories for records, host limits and budgets from refusals protecting the work. A gate reports each advised task separately. The worker table now selects Sol 6.2 for default Codex launches. This pass accepted the release defaults and made no configuration election. |

### The closed order

The target’s `main` contains [DotLn-Angular #19](https://github.com/DylanBWood/DotLn-Angular/pull/19) at `6eef542987ab2183817baba329a64373cb61b157`. GitHub records the release of [DotLn Angular v0.12.0](https://github.com/DylanBWood/DotLn-Angular/releases/tag/v0.12.0) on November 15. Its geometry, route search and route-following code are in the build. The scene has 28 rail tools, of which 18 have studies. The study summary still holds 100 records.

`plan failures` returned nine events in the window, including two failed verifications of WO-036, one repair and one final review with two findings. VER-001 identified a crowd that failed to settle, a unit that kept moving under earlier steering when its new route was blocked, and a document run that timed out. The repair and passing checks are recorded in the target. VER-002 applied the comparison with plain Arrive across all tunings. VER-003 superseded that reading on the same product after the operator clarified the default-setting comparison. The wider tuning behavior and the two final findings are addressed in the register below. The two bound acceptances preceded the work. No recorded bound stop interrupted it. [WO-036 verification records](https://github.com/DylanBWood/DotLn-Angular/tree/6eef542987ab2183817baba329a64373cb61b157/docs/dotln/verifications/WO-036) · [Final review](https://github.com/DylanBWood/DotLn-Angular/blob/6eef542987ab2183817baba329a64373cb61b157/docs/dotln/final-reviews/WO-036/FINAL-001.md)

### The machinery view

The prior pass’s D7 reopens when core releases before WO-046 activates. Its new source is core v1.4.0 at `bc761ad9ce1008c72c647e9b0de63b09117ba822`. The input selection below reproduces 1,098,407 bytes at v1.0.0 and 1,109,768 at v1.4.0, 44 files in each. It counts one copy of each role skill. The new manifest digest is `ae59ca211f37c8d5163949fbb50f14c6fc5f22f41b5067db47dd4a9f92173e6a`.

```bash
git -C ../DotLn ls-tree -r -l v1.4.0 -- \
  .claude/harness-manifest.json .claude/settings.json .codex/hooks.json \
  .claude/hooks/ .codex/hooks/ .claude/skills/ .claude/agents/ .codex/agents/ \
  CLAUDE.md packages/skeleton/src/loadouts/ \
  packages/{beacons,browser-evidence,compiler,console,kernel,skeleton}/package.json |
  awk '$2 == "blob" { bytes += $4; paths++ } END { print paths, bytes }'
```

Reading the manifest and hook configurations at the pin gives three host profiles, 36 installed surfaces and ten residue items. Of the 20 mechanisms, four have an enforcing hook and three an advisory hook on Claude and Copilot. Codex carries the 20 in role text under the order’s reading rule. The router still has no outside-write grant. These figures describe the committed core configuration. A fresh release before activation reopens the pin. WO-016 uses its two historical snapshots to replay a recorded order.

The local failure and condition reports, the 235-row register, the previous pass, the open orders, both workstreams, the operator record and `FOR-CORE.md` supplied the remaining inputs. The launchpad and target issue lists and the target PR list were empty. The numeric conditions command found zero holding and zero unknown. Lifecycle and register triggers were read separately.

## Orders filed and amended

The first draft amended eight existing orders and refreshed their target headers to the WO-036 merge. Review added bounded corrections to the other eight open orders. Their earlier minimum target revisions and integrated-base checks remain valid. The pass filed no new order. After either sibling merges, the remaining branch integrates the current target and repeats affected checks before it lands. Either can open a verified draft first.

| Orders | What changes for the executor |
| --- | --- |
| WO-037 and WO-024 | The first pair can start from the merged geometry and the existing study infrastructure. WO-037 also owns a bounded correction to the inspector after Restart. Both orders account for the app catalog and the Tools testing copy. |
| WO-008 and WO-040 | The next pair separates the authentication feature from the study standards pass. Each retains its integrated-base checks. |
| WO-045 | The graph and search API exists. The wall study needs two public exports, the corresponding Corner trap messages, and an honest comparison of the two runs. WO-040 still has to merge first. |
| WO-044 and WO-035 | Study discovery reads the summary at integration. The translation order now measures 136 typed, 1,900 untyped and 1,427 background rows and covers the scene’s Ways group. |
| WO-046 | Criterion 3 reproduces the snapshot at core v1.4.0. The observed manifest and the costs are current. |

WO-016 and WO-017 now specify which replay state survives a reload, how recorded events are ordered and how a real stage stays private. WO-018 and WO-043 tie the displayed catalog rows to their sources. WO-029 through WO-032 cover the existing fixture copies, the first summary generation and the named walkthrough examples. The later replay keeps its historical inputs, the twin awaits authentication, and the research refill condition has not fired. The three runnable research orders integrate current target `main` by their existing step 1. The fourth waits on WO-024.

## Register

Six WO-036 entries arrived without a disposition. A seventh, previously settled, reopened when WO-036 added engine wall avoidance. The [register](../followups.json) binds each decision to its source revision.

| Source | Disposition | Evidence and reopening |
| --- | --- | --- |
| WO-036-D013 | Allocate to WO-045 | `castRay` and `avoidWalls` are implemented internally. WO-045 owns the public imports and the Corner trap text in both catalogs. Reopen if either consumer still describes a missing public helper. |
| WO-036-D020 and D026 | Defer D020. File D026 as its correction and duplicate. | The default settling case passes. The first explanation of the lag at other tunings did not survive the follow-up measurement. Four of 108 zero-radius cases missed the scratch scan’s tolerance. Reopen on operator play, a regression at defaults or a wider requested guarantee. |
| WO-036-D022 | Defer | A routed formation needs its own anchor route, slot clearance and blocked state. Reopen on an explicit use for group navigation. |
| WO-036-D030 | Allocate to WO-037 | The recorded path step can replay while the inspector and Show search still use preview state. Step 10 and criterion 5 cover the reading before and after replay. Reopen on a failing replay or withdrawal of the order. |
| WO-036-D031 | Defer | The five first-arrival comparisons measure a different effect from D020’s post-settling re-targets. Reopen if initial arrival feels slow in use. |
| WO-028-D036 | Allocate to WO-045 | Its second-implementation trigger fired. Keep the existing description of a brief correction until a controlled comparison demonstrates a larger effect. Reopen if the study caption overstates what the recorded runs show. |

The study link and clearance-chart entries already belong to WO-045. The budget entry remains deferred because the two advance allowances accompanied no observed stop. No untriaged row remains.

## Red tags

The document census found 84 standing documents, 716 records and 13 generated documents. No previous or current red tag calls for a removal or fold.

<!-- dotln-red-tags:start -->

```json
{
  "after": "docs/planning/passes/standard-pass-v1-0-0-2026-11-14.md",
  "tags": []
}
```

<!-- dotln-red-tags:end -->

## NoOps

| Candidate (kind) | Reason and evidence | Reevaluate when | Useful when |
| --- | --- | --- | --- |
| A separate route-readout or wall-study order (NoOp) | WO-037 and WO-045 already change the relevant consumers. The two repairs now have verifiable outcomes in those orders. | An owning order is withdrawn or verified without its repair. | A repair needs to ship independently. |
| Formation routing or non-default crowd tuning (NoOp) | The released defaults pass. Each proposal would settle a gameplay preference in advance of play. | The operator observes the behavior in use or requests group routing. | A concrete scene shows the outcome the operator wants. |
| Stop levels, timing scale or host elections (NoOp) | The release supplies the new defaults. All document tasks passed with them. | An observed failure or operator direction calls for a change. | A setting can be tied to a specific operating problem. |
| Another research batch (NoOp) | WS-002 already has four filed orders. Its refill point is fewer than two queued. | The queue drops below two. | Another batch can use the freed research capacity. |

## Sequence

WO-037 runs beside WO-024, then WO-008 beside WO-040. Closing WO-036 frees the first road slot. Keeping WO-024 there preserves the side order that was already next. WO-045 follows WO-040 serially, then WO-044, WO-035, WO-046, WO-017, WO-016, WO-018 and WO-043. The separate research track can run on spare capacity. A dependency merge or a change of operator priority reopens the lane choices. [Current sequence](../sequence.md)

## Write-backs

WS-001 and the target profile now identify DotLn Angular v0.12.0, its delivery record and the new lane partners. The profile identifies the target flag for manual review recording and the verified window for opening a draft. Both documents describe the dispatch bound at the level this instance actually uses.

Three existing entries in `FOR-CORE.md` have release answers. The v1.0.1 commands page documented which manifest to keep, and v1.2.0 also repaired the emit. The same v1.2.0 release carries matching follow-up dispositions. The v1.3.0 release provides the configurable formatting deadline and diagnostic. The remaining seven retain their reproductions and working routes. No new operator rule was recorded.

## Rules recorded

<!-- dotln-rules-recorded:start -->

```json
[]
```

<!-- dotln-rules-recorded:end -->

## Process cost

Three read-only default workers researched the target close, the core pin and the release answers. Six default Codex review launches covered the changed branch and the otherwise unchanged orders. One fresh default refuter brought the total to ten worker uses against the cap of 40. The parent was the sole repository writer. Review receipts reported 23,626,552 tokens in aggregate across the six external sessions. They did not print a host model readback. The parent’s session token total, source and cutoff were unavailable. The update branch’s document gate took 0 h 1 min.

## Validation

The starter update passed kit verification, the harness check, lineage and all 15 document tasks. The planning reviews below returned 65 entries covering 50 distinct findings. Each disposition in the tables refers to the applicable report’s finding number. The helper ran one batch per role in each set. The first set took 13, 10 and 22 minutes for criteria, design and consistency. The second took 12, 10 and 18 minutes.

`self-review: found 50; fixed 50; recorded 0`

### Reviews of the changed documents

All three reports judged commit `98338ec` against its merge base. The report names are `round-1-criteria.md`, `round-1-design.md` and `round-1-consistency.md` in this branch’s ignored review lane. The criteria report locates both parts of the operator’s dispatch. Its evidence for the update is the merge of #78 and the finish on main.

| Subject | Review findings | Decision and executable check |
| --- | --- | --- |
| Recording a target review | criteria 1 | Give the worker the helper’s named target tree and pass that same tree to the recorder. The recorder compares the report’s declared tree with the explicit argument. |
| Route readout following Restart | criteria 2, design 3, consistency 5 | Use the same route for the inspector and Show search. Test playback, pause without editing, then an unapplied edit while paused. The unit keeps following its recorded route and the edit leaves the composition untouched. |
| Translated interpolations | criteria 3 | A translated sentence can still contain raw English. Assert distinct translated values for the row type and populated breadcrumbs rendered in that sentence. |
| Wall-study comparison | criteria 4 | The study’s two authored goals differ. Compare the displayed traces with same-goal, same-start runs that vary only the sensor length. |
| Machinery capacity | criteria 5 | The pinned hook calls anti-oscillation a rung-7 prose entry. Assert text capacity for each of the three hosts. |
| Surface implementation and role membership | criteria 6 and 7 | Prove that the registration surface implements zero mechanisms. Remove role ids before comparing the verifier’s mechanism list with its skill’s origin. Test the two relations separately. |
| Stop schema | design 1 | Read the current stop levels, the desktop election and the older refusal lists through one snapshot shape. The historic replay can use the same reader. |
| Sibling integration | design 2 | The remaining branch integrates after the first sibling merges, even if both drafts are already open. The message-copy test runs on their combined changes. |
| Stale bases and partners | design 4, consistency 8 | Correct the operative statements in WO-008, WO-024, WO-040 and WS-001. The dated dependency records still explain why WO-039 matters. |
| Capture counts | design 5, criteria 8 | The cost generator counts distinct intake paths in the ledger section. Name the dispatch and merge confirmation there and regenerate the cost row. |
| Scene fixture migration | consistency 1 | The writer already emits the trial and walls fixtures. Format and check those plus the new fixture, preserve both existing hash arrays and verify a normal run leaves all three files stable. |
| Study message copy | consistency 2 | Change the testing copy with the published EIP messages. Retain the Control Bus queue assertions and run the target’s byte-equivalence test. |
| Missing-message controls | consistency 3 | The older browser probe logs outcomes. Run the actual retry-state and visible-key assertions on the base and candidate, with a separate result for each response. |
| Grid study reader | consistency 4 | Trace the new model through ticks, drawing mapping, the standalone component and the reader controls. Step through a v2 study in the normal reader. |
| Inspector’s study link | consistency 6 | Load studied ids through the catalog and pass membership to the mapper. Test a listed and an unlisted tool through the facade. |
| Grid arithmetic | consistency 7 | The search records cell membership today. Carry the actual cost, estimate and priority in each expansion and check the displayed values against a weighted engine run. |

### Reviews of the other eight open orders

The helper normally inlines changed orders. An additional one-batch run for each role presented WO-016, WO-017, WO-018, WO-029, WO-030, WO-031, WO-032 and WO-043 in full. Its comparison tree `5275fdfd` was made from the reviewed commit with just those eight paths omitted in a temporary Git index. This selected their existing text for review. The real index and branch were untouched. Each report has the same basename as its first counterpart in the lane `since-5275fdfd3181`. The isolated batch’s criteria table cannot locate the dispatch or update in those eight orders. The branch criteria report, the two captures and merged update supply that evidence.

| Subject | Review findings | Decision and executable check |
| --- | --- | --- |
| Private stage input and retention | design 1 and 9, criteria 6 and 10 | Real exports use an operator-selected private directory outside the checkout. A signed-in file picker opens the reduced data locally. Synthetic fixtures exercise the guard, builds and file picker, and worktree cleanup has no claim on the operator’s files. |
| Required research examples | design 2, criteria 13 | Reserve examples opened by the walkthrough or e2e when a batch substitutes another candidate. All four research orders follow the same rule. |
| Map and checkpoint field parity | design 3, criteria 14 | Compare presence and value in both directions for each row. The check rejects a removed, added or altered field. |
| Asynchronous order switches | design 4 | Only show a record and its machinery snapshot when both loads match the selected order. Exercise a late response, failure and retry. |
| Persisted replay applications | design 5, criteria 2 | Persist the idea’s target order, occupant and beat. Verify the original ghost, caption and timing after reload and an order switch. |
| Local sink ports | design 6 | Document the fixed development endpoint and reserve custom ports for standalone tooling tests. |
| Silence at the start and end of a stage | design 7, criteria 9 | Start the timer at opening, reset it on a result and cancel it at the last recorded event. Check an interval with no result and a timer that would otherwise fire after the stage. |
| Earlier twin variants | design 8, criteria 8 | Keep the ordinary registry test independent of Git. At integration, compare existing ids, digests and entries with the saved target base. Test a coordinated rewrite. |
| Authored toy records | design 10 | Render a locally authored toy’s catalog ids, scene type and metrics. Imported run records retain their source-specific fields. |
| Resolved toy links | design 11, criteria 11 | Bind each source value, key and resolved id to one entry. Recheck the association against the original values and detect two valid ids exchanged between tools. |
| First study integration | design 12 | Each research order runs the existing summary writer after integrating its own records and again when integrating a concurrent merge. |
| Bounded display of an unbounded loop | design 13 | Each frame runs one FlooP transition. Test an unfinished input at the end of the displayed prefix. |
| Map review timing | design 14 | Run the critic after classification and joining so the sampled source, map and typed output can be checked together. |
| Work inventory agreement | design 15 | Test loader keys, translated titles, the scene-type mapping and the styles against the summary’s work keys. |
| Public replay segment projection | criteria 1 | Independently compare every retained field of both public source segments, including the observed failure verdict at WO-221 beat 4. |
| Sink destination and payload | criteria 3 and 4 | Validate the actual output file on each append. At the form, check the whole serialized payload before applying an idea. Assert that an oversized entry remains editable. |
| Offline historical source | criteria 5 | Run local schema and relationship assertions. Where the source clone is unavailable, identify the executor’s per-pin evidence and the checks the verifier could not independently repeat. |
| Decreasing journal timestamps | criteria 7 | Keep append order, clamp backward offsets for scheduling, and test a regression with a backward clock adjustment. |
| Toy scene paragraphs | criteria 12 | Compare each rendered paragraph with its pinned design anchor. Swapping two valid paragraphs fails the comparison. |
| Source chapter and source-specific links | criteria 15 and 16 | Reject a passage attributed to the wrong chapter. Verify that a toy’s designed-tool links belong to its own source batch, including a valid id from another work as a negative control. |

| Additional consistency findings | Decision and check |
| --- | --- |
| 1 and 2, all English message copies | WO-018 updates the Tools testing copy. WO-029 through WO-032 update the corresponding work scopes in the study testing copy. Each names the fixture-copy test. |
| 3, marble study | Preserve the drawn family’s executable requirement. Use the permitted substitution if a non-reserved candidate cannot supply a runnable model. |
| 4, catalog fixture roots | The fixture builder gives historical maps, the new repository map and the six map-free works the storage each reader actually uses. |
| 5, work inventory controls | Exercise missing translated-title and scene-type mappings independently. Each mutation must fail the relevant membership assertion. |
| 6, 7, 8 and 13 | These corroborate field parity, variant history, private stage retention and independent tool resolution respectively. Tests include field deletion, a coordinated variant removal or rewrite, a private export and two known ids exchanged. |
| 9, journal observations | The installed writer can emit a tool result and a separate timing entry. A synthetic paired fixture must produce one result and preserve the next gap. |
| 10, existing PoEAA count | Update the Unit of Work browser assertion along with the new study while the tooling check continues to verify exact membership. |
| 11, formal-system interpreter | WO-018 owns a reading shelf. Remove the stale assignment of an interpreter sub-app. |
| 12, versioned loader documentation | Replace the two v1-only statements where the target documents the loader. Retain the original schema and test both versions. |

### Independent refutation

[Receipt 030](../refutations/2026-11-19-planning-5d6b2f1d60db9d0f-030.md) records **aligned-with-findings** and zero holds. The fresh worker read the canonical pass-scope prompt. Nine goal or criteria projections and the sequence were judged. Seven verdicts carried forward by matching hash. The interval from dispatch to filing was 7 min 28 s. The prompt marked the vision and UIFA role passages unavailable. The judgment uses the standards and observations present in this instance.

The receipt contains ten new known issues and two carried on WO-040. All twelve have criterion-bound dispositions in the planning control record.

| Order and criterion | Disposition |
| --- | --- |
| WO-037 §5 | The roster is created in definition order and maintains its entries through updates. The replay concern reopens if a future editor can remove or reorder an entry, or a restore changes its identity. |
| WO-008 §3 | Settle an outstanding mock refresh after a cross-tab sign-out and verify both sessions stay signed out. |
| WO-040 §2, two carried issues | The four changed functions are internal to the two builder modules. Individual study changes or measured recurrence of the audited shape defects reopen these issues. |
| WO-045 §6 | Exercise a disconnected grid through the normal reader and verify the accessible terminal state. |
| WO-035 §§4 and 8 | Open a healthy work and the Scene after a translation failure. Revisit already loaded works, verify the key set stays stable and record repeated-visit memory behavior. |
| WO-046 §2 | A missing required manifest fails. The historical optional directory can be absent. |
| WO-017 §5 | An imported event marker stays out of browser storage, including the persistence keys that store configuration. |
| WO-016 §3 | The replay identifies the timestamp-selected public source and distinguishes it from evidence of what a particular actor loaded. |
| WO-018 §1 | Open three distinct toys even when all tool links resolve. |
| WO-043 §4 | A new work’s unavailable chunk leaves a healthy v1 work readable through the same loader. |

The terms screen found zero lines requiring contextual reading. The planning checks also verified the two pairs, every forward hard dependency, the four separate research orders, and dispositions for all 235 register entries.
