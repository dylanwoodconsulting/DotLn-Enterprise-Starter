# WO-033 independent review dispositions

Round 1 reviewed `c3991324a79f2701dabf6ed4b4bcd94f7d32c3b5` against
`a4af0bc51f2a495b36f5c909279cfeaceda1ae78`. Three read-only workers used
`claude-cli-print` 2.1.318, Opus 5.5, selected effort xhigh; the host read
back the model but effective effort is unknown. No worker changed the checkout
or ran a gate. Their node probes were denied by their host; the root's executed
checks provide the executable evidence.

The reports are in the ignored review lane:

- `docs/control/local/reviews/WO-033/round-1-criteria.md`: 5 findings, 2 blocking; 0 h 9 min.
- `docs/control/local/reviews/WO-033/round-1-design.md`: 9 findings, 1 blocking and 1 should-fix; 0 h 5 min.
- `docs/control/local/reviews/WO-033/round-1-consistency.md`: 5 findings, 2 blocking; 0 h 11 min.

Counts retain all 19 report entries, including repeated findings. The two
shared defects are owned by criteria and use one fix each; they are not separate
implementation changes. The dispositions total 13 fixed entries and 6 recorded
notes. Gate and final-handoff evidence is completed after the ladder.

| Report finding | Disposition | Evidence or reason |
| --- | --- | --- |
| Criteria F1; design F2; consistency F1 | Fixed | WS-001 now cites core's confirmed `passes/` location. `links.md` uses the literal required regex with the 48-line baseline inventory and zero current matches; `links-scope.json` declares all 45 inputs. The canonical plan check still passes. |
| Criteria F2; design F1; consistency F2 | Fixed | `projection.diff` uses zero context; D009 also contains that diff as the execution step requests. The full candidate, including untracked evidence, receives a whitespace check before handoff. |
| Criteria F3 | Recorded | Historical Markdown links can still fail in GitHub or an editor; only kit readers apply the move map. The follow-up feed retains its stored old references. This is the order's accepted map-based resolution design, shared with core WO-238-D012/D036/D037, not a promise of browser redirects. No record bytes are changed. |
| Criteria F4 | Fixed | The control README distinguishes direct lifecycle rendering from the exported transition-free refresh. On this `wo-033` branch the preferred order is the same for both paths. A possible future warning on `main` after a lifecycle event is unproven here; reopen if reproduced. No kit code is changed. |
| Criteria F5 | Fixed | `plan documents` now ran after the moves and reported no red tags. D009 contains the projection diff. The complete gate and handoff are deliberately produced after review. `plan subject` reads HEAD; the separate workspace `buildPlanSubject` check proves the uncommitted declaration is found. A post-commit CLI check belongs to a later phase because this executor may not commit. |
| Design F3 | Recorded | The manifest intentionally follows step 1's explicit all-files-under-roots selection, which includes three standing directory READMEs. None needed editing. The separate standing-link selection uses kinds. Retain the broader 1,923-file preservation witness. |
| Design F4 | Recorded | The comparison uses the pinned kit's actual move semantics. Kit verification and the executed comparison establish its present contract. The independent six-order whitelist prevents an edited suffix manifest from authorizing another order. Both count labels are required by the approved order. Future API changes would require a new compatibility decision. |
| Design F5 | Recorded | Capture read the working files before any move. An independent `git cat-file --batch` comparison proved every captured hash equals the blob at the stated baseline commit. This is a retained witness for this execution, not a general capture API. |
| Design F6; consistency F4 | Recorded | The old paths in baseline notes retain the original provenance. Only the physical source key used by the exception matcher changed, as D002 directs. The existing allowance's href, count, reason and notes remain untouched. |
| Design F7 | Fixed | Removed the manually duplicated desktop election sentence. FEATURES.md remains the generated authority; the README states its edit and regeneration route. The projection owner is retained because the order requires a usable regeneration route. |
| Design F8 | Fixed | The planning README names the historical critical-path declaration as an input in `passes/` without listing a dated filename. |
| Design F9 | Fixed | D009 states explicitly that planning-log row 55/D007 supersedes row 42/D003; the older event remains intact under the log's latest-row rule. |
| Consistency F3 | Fixed | Removed the nonexistent `doc-ceilings.json` from the control directory description. |
| Consistency F5 | Fixed | An explicit `npm run meta -- --write docs/evidence/WO-033/meta.json` refreshes the order snapshot. Plain `npm run sync` refreshes generated indexes but does not imply that snapshot was rewritten. The snapshot retains its stated cutoff and available observations. |

All changes after round 1 are documentation, formatting or generated output;
round 2 is skipped under the executor's explicit documentation-only exception.
No round-2 code fix exists, so round 3 is not required. The evidence scripts are
unchanged from the reviewed tree. The three launches use 3 of the 20 available
worker uses; no descendants or rechecks were launched.

The consistency review traced the map through docs-check, document kinds and
census, planning follow-ups, the critical-path selector and launchpad fixture
copies. It traced the feature election through the inventory and compiled
harness, and checked the amended order bindings, package/lockfile, release,
indexes and output owners. It did not fully trace the historical proposal
packet or validate ordinary browser navigation; those boundaries are retained
here. Root plan and document gates judge the current candidate.
