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

```sh
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

Eight existing orders were amended. The pass filed no new order. Every revised target header names the observed WO-036 merge. The second publisher in a pair integrates the current target before publishing.

| Orders | What changes for the executor |
| --- | --- |
| WO-037 and WO-024 | The first pair can start from the merged geometry and the existing study infrastructure. WO-037 also owns a bounded correction to the inspector after Restart. Both orders account for the app catalog and the Tools testing copy. |
| WO-008 and WO-040 | The next pair separates the authentication feature from the study standards pass. Each retains its integrated-base checks. |
| WO-045 | The graph and search API exists. The wall study needs two public exports, the corresponding Corner trap messages, and an honest comparison of the two runs. WO-040 still has to merge first. |
| WO-044 and WO-035 | Study discovery reads the summary at integration. The translation order now measures 136 typed, 1,900 untyped and 1,427 background rows and covers the scene’s Ways group. |
| WO-046 | Criterion 3 reproduces the snapshot at core v1.4.0. The observed manifest and the costs are current. |

The review horizon also includes WO-017, WO-016, WO-018 and WO-043 in the sequence, and WO-029 through WO-032 on WS-002. The later replay keeps its historical inputs, the twin awaits authentication, and the research refill condition has not fired. The three runnable research orders integrate current target `main` by their existing step 1. The fourth waits on WO-024.

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

| Candidate | Decision and evidence | Reopen when |
| --- | --- | --- |
| A new order for the route readout or the wall-study helpers | Existing orders already change those exact consumers. Giving each a criterion keeps the fixes verifiable without another activation. | An owning order is withdrawn or verified without the repair. |
| New queue entries for formation routing or non-default crowd tuning | The released scope and known outcomes are recorded above. A new order would decide a gameplay preference in advance of play. | The operator observes the relevant behavior in use or requests group routing. |
| Changing stop levels, timing scale or host elections | The update exposed defaults and the new deadline. The updated branch passed every document task. | An observed failure or a new operator direction justifies a setting change. |
| A new research batch | WS-002 already has four filed orders. Its refill point is fewer than two queued orders. | The research queue falls below that point. |

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

Three read-only default workers researched the target close, the core pin and the release answers. Their findings were checked against the committed sources. The initial budget reserved three independent review roles and one fresh refuter, with room for the helper’s document batches and focused rechecks under the 40-use cap. The parent was the sole repository writer. The harness reported no session token counter, scope or cutoff at entry. The updated release branch’s document gate took 0 h 1 min.

## Validation

The update branch passed kit verification, the harness check, lineage and the document gate. The planning reviews cover all sixteen open orders named above, including WS-002, the two standing profiles affected by the changes and every document in the branch diff. The planning judgment is filed after the reviews.
