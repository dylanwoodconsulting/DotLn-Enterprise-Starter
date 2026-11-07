# WO-034 independent code reviews

2026-11-06. Three fresh `codex-spawn-agent` workers, each configured as
`gpt-6.1-sol` at `max`, reviewed the complete target change against
`d7d842dc4fdbde03099695933a448d9632fa4335`. Their first-round tree was
`1e3054f994361c7f8e0e9ebc0b1691d9ba3c0b02`. The target-aware canonical briefs
were rendered through `worker review --dry-run`; returned reports were filed
through `worker record`. The executor was the sole repository writer.

## Round 1

| Review | Finding | Disposition |
| --- | --- | --- |
| Criteria F1 | The comparison note claimed a clearance change even at ray lengths 1 and 0.5, where the compared traces are equal. | Qualified the sentence to the default example. Existing boundary tests and the reviewer's independent numerical reproduction cover the unchanged behavior. |
| Design F1 | Translator spies implicitly bypassed the marble helper's description check through function identity. | Replaced that switch with named translation and description-mode options, updated every caller, and added two behavioral regression cases. |
| Design F2 | Retained vectors still declared a nullable head and the template checked an impossible state. | Narrowed the head to a string and rendered it directly; the existing short-vector filter remains the source of the guarantee. |
| Consistency F1 | The architecture reference described fixed large-font spacing after the implementation switched to active-font spacing. | Corrected the paragraph to match the implementation and browser regression. |

Round-one counts: found 4, fixed 4, recorded without a fix 0. The fixes and
their alternatives are recorded in [D008](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d008). Tools
lint and all 974 tests pass in [the repair check](checks/review-fixes-tools-final.json).
The first attempt's two failures concerned missing messages in the new test
fixture; all 972 pre-existing tests passed in that attempt.

The criteria reviewer independently compared the full model results of all
twenty reshaped studies over 172 input cases and verified the archive, catalog,
shape and label-sweep artifacts. The consistency reviewer traced 324 Tools
TypeScript files to 105 consuming specs and supplied the required generated-page
and fixture-manifest rows. The design reviewer read all twenty presentations
and found their descriptions and retained long functions coherent apart from
the two named findings. Their reports distinguish direct executions from the
executor's retained evidence and disclose the boundaries they did not search.

Canonical first-round report names are `round-1-criteria.md`,
`round-1-design.md` and `round-1-consistency.md` in the order's private review
lane. No worker ran a test-runner gate or changed a repository file. Their
independent token counters and effective-session model readbacks were
unavailable; the configured model and effort above come from the actual
parent launch calls.

The recheck follows the completed repairs and refreshed evidence. Full gates
have not yet run at this point in the record.

## Round 2

The same three independent reviewers rechecked their findings and the whole
current change against the activation base. The reviewed target tree was
`d554030f09eb631952b8b6f1c2396b6938f20398`. All four fixes held; no reviewer
returned a new finding or an additional observation requiring a follow-up.

| Review | Recheck | New findings |
| --- | --- | ---: |
| Criteria | The default-example qualification holds at both original counterexamples. A fresh bounded probe again matched all twenty models over 172 input cases and validated the refreshed evidence. | 0 |
| Design | The named description mode preserves scheduler and delivery checks; the non-null vector contract matches the existing filter and template. | 0 |
| Consistency | Active-font documentation matches the implementation. All 63 target files match the reviewed tree; the trace covers 325 TypeScript files and 106 consuming specs, catalogs, fixtures, archives, generated pages and operational write-backs. | 0 |

Canonical second-round reports are `round-2-criteria.md`, `round-2-design.md`
and `round-2-consistency.md` in the same review lane, recorded through
`worker record`. The criteria worker ran one bounded test; the design and
consistency workers used read-only checks. None ran a gate or changed either
repository. Their independent token counters remain unavailable.

Totals: found 4; fixed 4; recorded without a fix 0; rounds 2; unreviewed source
lines 0. Round 3 is unnecessary because round 2 required no code change. The
ladder ends here, before the complete target gates. Later evidence and handoff
write-backs do not start another review round.

The document preflight subsequently found host-specific paths in captured
evidence. [D009](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d009) records their replacement with
portable locations and preservation of the raw originals. That documentation
repair changes no target source, test result, capture archive or screenshot;
the role's documentation-only exception skips another review round.
The same exception covers [D010's console-log whitespace repair](https://github.com/DylanBWood/DotLn-Angular/blob/c6f0fb2f6d62cc885866fbad95c2cb37899390b1/docs/dotln/evidence/WO-034/decisions.md#wo-034-d010).
