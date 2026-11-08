# WO-039 implementation handoff

2026-11-08. The second standards pass over the enterprise pattern batch is implemented in the
target worktree, uncommitted until final review:

- The sixteen presentations read names, tokens and per-kind choices from tables the compiler
  checks.
- The `states` builder infers a move's transition and refuses an ambiguous one.
- The tools test kit has one model-study loader.
- Foreign Key Mapping stops on its read limit only before a key that needs a read.
- The narrow register's headings keep two thirds of their size and break below it.
- The token rule is written.

Every other output is unchanged.

The integrated target base is `f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3`. The candidate is the
target's working tree `aa01296dfa364e9285fd1967283a9cee4cfa4e17`, which is the tree the review
ladder's second round read and both target gates ran on. Both registered mains were unchanged at
the last integration check, so nothing was integrated: the launchpad's is
`7a8dcff2909b7b2384407d1656286b0119badb97` and the target's is
`f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3`. The decisions are [decisions.md](https://github.com/DylanBWood/DotLn-Angular/blob/36bb77a62e75866b38e150061a44a6ade62b510b/docs/dotln/evidence/WO-039/decisions.md),
WO-039-D001 to D018; the evidence index is [README.md](README.md).

## Acceptance criteria

**Criterion 1:** unmet — later-phase. The verifier performs this reading on the candidate:
- three enterprise presentation modules chosen at random, read top to bottom;
- Foreign Key Mapping's and Service Layer's studies, opened in the served production build at 360
  and at the operator's sizes, and stepped.

It writes the VER report's `## Walkthrough` section and the frames under
`docs/evidence/WO-039/walkthrough/`. That independent act is the verifier's; this handoff neither
performs it nor substitutes for it, and records no waiver or defect.

**Criterion 2:** met — [shape-audit-before.json](shape-audit-before.json), from the integrated
base, records the Observed gap's counts for the `poeaa` group: 48 files and 764 functions, 0 over
four positional parameters, 1 at 70 or more counted lines, and 1,763 catalog strings.
[shape-audit-after.json](shape-audit-after.json), from the candidate, lists 937 functions with
0 over four positional parameters. Its one function at 70 or more lines is
`pessimistic-offline-lock.presentation.ts` `shapeOf`, at 71, which the README's
[§The measure](README.md#the-measure) and D014 judge to do one job and read whole.
`grep -c "switch (" libs/features/tools/src/lib/studies/poeaa/*.presentation.ts` prints 0 for
each of the sixteen. The README's [§The sixteen presentations](README.md#the-sixteen-presentations)
names each presentation's lookup tables, its `listOf` use and its on/off input with
`booleanParameter`.

**Criterion 3:** met — [dom-diff.json](dom-diff.json), from the adapted crawl and comparator,
covers the twenty enterprise studies' 238 frames at 1440 and 360 in both builds. It records no
page error, missing frame or added frame, and 25 differing frames, all of them the narrow-register
frames D011 names, with 0 unexpected; within those frames, only the six broken state headings
differ. All sixteen enterprise model specs (116 tests) pass with their mechanism assertions, and
none reads the register drawing (`grep -l "registerDrawing\|states-register"` finds none). The
comparator's control exits 1 on a single changed node outside the permitted frames
([comparator-control.json](comparator-control.json); command in the README). The review target
gate's browser suite (`npx nx run-many -t e2e`, which runs `dotln-e2e`'s e2e) passed in
3 min 1 s, and its visual suite (`npx nx e2e-visual dotln-e2e`) in 31 s. The visual baselines
were unchanged: no baseline was regenerated, and the gate found no tracked byte changed. No
sibling merged, so no sibling baseline arrived.

**Criterion 4:** met:
- `states.spec.ts` holds "infers a move's transition when exactly one joins its states, and
  names none where none does" and "refuses an ambiguous move unless its snapshot names the
  transition it took", both passing.
- `registerOf` returns `Register | null`, and Data Mapper's and Foreign Key Mapping's `placeOf`
  return `Place | null` and `RowPlace`. The README's
  [§The shared pieces](README.md#the-shared-pieces) records the signatures at the base and the
  candidate.
- `tools-test-kits.ts` exports `loadModelStudy(id, family)`.
  `grep -c "loadStatesStudy\|loadFlowStudy"` over it prints 0, and all 37 flow and states specs
  import the one loader.

**Criterion 5:** met — Foreign Key Mapping's test "stops at its read limit only when the next key
still to resolve needs a read" pins every limit from one to six, the order's one to three among
them. [fkm-control/results.json](fkm-control/results.json) records both arms on a fresh scratch
copy, each running only that test with `-t` (eight others skipped). It exits 0 as the copy stands
and 1 on the copy carrying the base's `foreign-key-mapping.simulation.ts`, failing at limit 3.
The README records both commands and exits. The study's default run is unchanged frame for frame
in `dom-diff.json`: its 16 frames are equal.

**Criterion 6:** met:
- D011 records the narrow register's decision, a floor size with a break below it, with its
  reasons and the rejected break-only, shrink-only and abbreviation options.
- `states.spec.ts`'s "draws each state heading at the scale its column gives it, in both
  layouts" asserts that the template applies each column's scale.
- `states-register.spec.ts`'s "draws no heading for a state whose name has no words, and nothing
  at size zero" drives `columnsOf` with empty and blank labels. It throws nothing and draws no
  heading.
- The README's [§The narrow register](README.md#the-narrow-register) records Gateway's narrow
  note measured with real glyphs: its nearest line ends 10.07 units short of the first state's
  column, where the per-character estimate gives −9.4.

**Criterion 7:** met:
- `docs/ai-reference/catalog-rules.md` states that a drawing's token letters are symbols shown
  through `tools.study.symbol` with the translated name beside them, and are not translated;
  `grep -c "symbol"` prints 2.
- `docs/dev-reference/architecture/catalog.md` §The models states the lookup-table shape, the
  inferred transition and the one loader.
- `tools/scripts/catalog/check-studies.mjs` holds the states drawing rule in `statesProblems`;
  `grep -c` prints 2.
- `npm run test:tooling` passes 94 of 94, among them the rule's own test.

**Criterion 8:** met:
- **Plain gate.** `node scripts/target-gate.mjs WO-039` passed all five declared commands
  between 18:45 and 18:49 UTC (0 h 3 min).
- **Review gate.** `node scripts/target-gate.mjs WO-039 --review` passed all eight between 18:49
  and 18:54 UTC (0 h 5 min). Neither changed a tracked byte or HEAD: the target's tree is still
  `aa01296dfa364e9285fd1967283a9cee4cfa4e17` on `f99580f`.
- **Document gate.** `npm run test:docs` passed 14 of 14 in this launchpad worktree at 18:45 UTC,
  before the gates. It passed again at 18:59 UTC, after the last edit outside this order's
  evidence directory: the follow-up register and the decisions index regenerated for D011's
  wording. That newest row also records the tree without this order's evidence directory, so this
  handoff's writes leave it standing.
- **Preflight.** The order's Preflight line ran on the candidate before the first full gate,
  between 18:35 and 18:40 UTC: `nx format:check`, `nx run-many -t lint` over 20 projects (with
  `i18n:check`, `studies:check` and `test:tooling` inside its workspace checks),
  `nx run-many -t test` over 18 projects and `check:bundle`. The document gate passed at 18:45,
  before the plain gate began.

## Review and disposition

self-review: found 23; fixed 15; recorded 8; rounds 2; unreviewed 0 lines (the target's working tree is the second round's reviewed tree; the launchpad records are outside the ladder's subject)

**Round 1.** Three fresh reviewers (criteria, design and consistency) read the whole change at
`f0afed010052727b7d0177f1441b142f86c722a4` and found 19 findings. Fifteen were fixed:
- the study view's comparison, typed over seconds while the model's runs over any axis, which
  all three found and the compiler had accepted;
- the chart's axis encoding that let it through, now a table of axes;
- Foreign Key Mapping's read rule written twice, and its weak read-limit spec;
- Gateway's partial table;
- headings computed twice;
- the helper's name, which clashed with a catalog filter;
- the doubled default run;
- a simulation choosing by kind by hand;
- the specs' three token idioms;
- thirteen specs without their record's raw pin;
- no chart drawn over steps or counts;
- the permitted frames, which D011 now lists by step.

Four were recorded unchanged:
- the catalog link to these decisions, which two reviewers found and which resolves when the
  records step files them in the target;
- the letter-count hyphenation, judged by the reading critic (D015);
- typing a states shape by the study's unions, deferred as `FUP-11889720fb205fb0`.

D016 records each finding and its disposition.

**Round 2.** Each reviewer, given its round-1 report, rechecked its fixes at the reviewed tree
and then reviewed the whole change again. Every fix held; the items not held are the four D016
recorded unchanged, plus the parts of fixed findings D016 names as kept. The four new notes break
no acceptance criterion and no behaviour `main` had, so none was fixed. D017 records them, and
the one with substance is deferred as `FUP-b730246e24e0c264`:
- Service Layer's draft-to-tab ternary, which stood at the base;
- a control command that already names its one test;
- a tooling test that the rule in fact has;
- a reviewer that could not run probes, whose compiles, lint and suites ran here.

Round 2 changed no code, so no third round ran. The reports are `round-1-criteria.md`,
`round-1-design.md`, `round-1-consistency.md` and their `round-2-` counterparts in the order's
review lane.

**Other reviews.** The reading critic of the narrow register is separate from the ladder
([reading-critic.md](reading-critic.md), D015). The adjacent-work queue is empty. Workers: one
Claude `dotln-worker` reading critic and six Claude print workers through `npm run worker -- review`,
seven launches and no re-task, against a cap of 40. None changed a repository or ran a gate.

## Boundaries, release and attestation

The outcome matches the order: the enterprise batch reads as the example the next
executable-model batch copies, and nothing on screen changed but the narrow register's headings
in the 25 frames D011 names. These are unchanged:
- the simulations' behaviour, the messages and the records;
- the routes and the dependencies (`package.json` and the lockfile are byte-equal to the base);
- the visual baselines.

No new page, family, route, composite or dependency was added. Three follow-ups wait in the
register as deferred: the narrow register's A/B items (`FUP-5af094bffcaf27ef`), shape typing
(`FUP-11889720fb205fb0`) and Service Layer's tab choice (`FUP-b730246e24e0c264`). The four rows
allocated to this order (`FUP-54793e1f600d5c5d`, `FUP-762c13bca9cf4a31`, `FUP-66323999ef4b69aa`
and `FUP-ddae97970891fbc1`) are discharged by D003 to D013 and are left for the final review to
settle. The profile names neither old loader, so its implementation map needs no change. WS-001's
delivery rows read this order as ready to verify, with this record.

The target release classification is patch with reviewed notes. `RELEASE-NOTES.md` and `PR.md`
are the final reviewer's. `npm run release -- prepare --local` reports that the target order
records no release and changes no file. `npm run publication:check` reports no declared
editions. This execution has not committed, pushed, opened a pull request or published anything.
Step 11's branch `refactor/enterprise-pattern-presentations` and its title are for the publishing
roles.

Executor attestation: `claude-code` version `2.1.319`, model `claude-opus-5-5`, effort `max` read
from `CLAUDE_EFFORT`, source `claude-session-readback`. Usage at 18:55 UTC, from
`node scripts/harness.mjs usage`, source `claude-transcript-message-usage`, scope dispatch:
303,518,695 total tokens, almost all cached input, and 683,181 output tokens. Reasoning tokens
and cost are unavailable. The dispatch stood at 2 h 57 min of its 8 h 0 min bound, with 0 of 3
complete launchpad runs. The order estimated 3 h 0 min to 5 h 0 min of executor work; this
execution took 2 h 57 min from dispatch to this reading, including two review rounds and four
document runs. The first two failed, on the evidence programs' formatting and then on a link to
this file before it existed. Both were repaired, and the next two passed.

Current authored documents were read after editing. Generated and large evidence was checked by
the commands that produced it and by the comparisons recorded in the README.
