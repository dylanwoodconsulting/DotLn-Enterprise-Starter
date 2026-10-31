# WO-025 self-review

Three fresh `dotln-worker` agents reviewed the order's complete diff before the
complete gate, with non-overlapping briefs. None wrote to either repository and none
spawned a descendant. [The repair](#the-repair-after-ver-001) had its own three, whose
counts stand apart from this table.

| Review | Brief | Findings | Fixed | Recorded |
| --- | --- | ---: | ---: | ---: |
| Criteria adversary | counterexamples and failed criteria | 28 | 28 | 0 |
| Design improver | structure, coupling, six-month maintainability | 42 | 40 | 2 |
| Consistency reviewer | write-backs, dependencies and versions | 13 | 13 | 0 |
| All | | 83 | 81 | 2 |

The counts are distinct findings across the rounds below. Where two reviews reached
the same defect, it counts once, under the first.

## Criteria adversary

The literal checks for criteria 2 to 5 and 7 held when rerun, the operator record
lost no rule, and WS-001's house rules kept their substance. The Objective's session
completed from the documents alone.

| Finding | Disposition |
| --- | --- |
| Criterion 6 names `README.md` and this order's path | fixed: D003 reported it, and the operator's amendment closed it (D013) |
| A changed clause in the operator record asserted a source that some items do not have | fixed: the base clause restored; D009 and the census aligned |
| The evidence denied a control-record change the diff holds | fixed: D012, the census and the README |
| Four house rules changed with no recorded decision | fixed: D011 |
| WS-001 said a filed successor carries the repository's only commit, and that each base is the predecessor's merge | fixed: both sentences |
| The profile said the 2026-10-26 pass added rules 23 to 25 | fixed: it rewrote rule 23 and added 24 and 25 |
| Short phrases in the profile stood close to the intake draft | fixed: reworded |
| Sass named by its transitive package | fixed: `sass-embedded` 1.105.2 |
| The profile said e2e serves production builds | fixed: the optimized `mocked` build |
| `/tools` placed in the menu, and npm's version attributed to the lockfile | fixed |
| The census script could not fail | fixed: `diff` |
| The profile's path count had no command | fixed: the command and its output are in the README |
| The security note claimed the gate runner's access worked before any gate ran | fixed: the clause dropped |

## Design improver

| Finding | Disposition |
| --- | --- |
| Nothing said how to read the profile's freshness | fixed: a paragraph under the table |
| Two start-of-work duties sat at the wrong stage, and in two documents | fixed: the profile's Run section owns them, and WS-001 links it |
| Step 4 of the route said the same command after a different command | fixed |
| The Current readings heading captured the inspection's introduction | fixed: the section moved below those paragraphs, needing no new heading |
| The security note's Codex cell overstated its label, and neither document said which to trust | fixed |
| WS-001 kept hand-written copies of generated state | fixed: the delivery line, the edge table and the filed rows now leave phases and blockers to the generated index |
| The link script could not fail | fixed: it uses the document check's own parser and exit code |
| Three small census defects | fixed |
| The workspace checks' list in the profile duplicates the target's `scripts.md` | recorded, kept: the operator's chosen shape carries it, a reader needs to know what lint covers, and the new freshness paragraph scopes it |
| §Versions had no sub-headings | fixed |
| Event history that explained no boundary | fixed |
| Two wording and placement faults in the profile | fixed |
| Two wording faults in WS-001 | fixed |
| Operator record: move items and split two | partly fixed: Research before asking and Requests to core moved, the naming and harness items split. Recorded, not moved: Pages they would use, both Depth items and Tools that earn their place stay under §What the operator wants, because WO-020 cites that section for depth and the four read together |
| Facts stated in two or more documents | fixed: the title how-to, the release headers, and a sentence tying rules 20 and 22 to 26 to the record |
| Two template conditionals in `docs/README.md` | fixed |
| Perishable negatives in two READMEs | fixed; `docs/observations/README.md` is back at its base bytes |
| The disposable list copies configuration; the digest bullet lacked its cause | fixed: the key is named and the list kept; the cause is in the census |

## Consistency reviewer

Every read-only check exited 0 and no write-back breaks a consumer a gate here runs.
The consumer table's unsearched boundaries included ignored intake,
`docs/control/local/` and host settings. The findings the other two reviews also reached are counted above.

| Finding | Disposition |
| --- | --- |
| Four open orders' write-backs name the profile's old section | fixed: one sentence in §Find the implementation, and a gap for the next pass |
| `environment.md` still cited a line number that had moved | fixed: it names the row |
| A bare `<slug>` in `docs/README.md` renders as nothing | fixed |
| D007 quoted a relative link one level short | fixed |
| The census said the follow-up carries a gap its text omitted | fixed: D009's follow-up names it |

## Rechecks

Each reviewer rechecked the corrected diff on its own brief. At that point the only
blocking finding left was criterion 6, which the operator's amendment later closed.
Each of the findings below was fixed.

| Review | Finding | Disposition |
| --- | --- | --- |
| Criteria adversary | The evidence said WO-005 holds no decision on rule 10 | fixed: WO-005-D005 is that decision; rule 10 and D011 cite it, and the gap is gone from D009 and the census |
| Criteria adversary | The sentence tying the record to the rules omitted rule 22 | fixed |
| Design improver | The profile tied rule 23 to acceptance and carried an account of how rules arrived | fixed: rules 24 and 25, and the account dropped |
| Design improver | The Before-building paragraph left its worktrees unclear and made running the app depend on it | fixed |
| Design improver | The README claimed the census check printed nothing else | fixed: it now names the `<` and `>` lines |
| Design improver | The profile's opening sentence said an order reads | fixed |
| Design improver | "This section" followed a sentence naming another section | fixed |
| Design improver | "Confirmed separately" lost its antecedent in the security note | fixed |
| Design improver | WS-001's new base sentence kept a hand-written copy of what the index prints | fixed |
| Design improver | The profile template omitted how far its facts hold | fixed |
| Design improver | D008 still placed Current readings at the page's top | fixed |
| Design improver | WS-001's base sentence did not say whose `main` | fixed |
| Consistency reviewer | WS-001 said §Delivery states is as of the last planning pass, though final reviews write it too | fixed |
| Consistency reviewer | This file listed the consumer table's boundaries as if complete | fixed |

## The widened work

The operator widened the order after the first handoff (D013), and all three reviewers
reviewed the amended order and everything since, on their own briefs. A separate
read-only worker read the 27 captures before 2026-10-26 for unrecorded directions. Its
findings are not counted here, and the executor read each one at its source.

| Review | Finding | Disposition |
| --- | --- | --- |
| Design improver | The gate change left the target's `scripts.md` calling `typecheck:e2e` a helper | fixed: the profile says so, and D015's follow-up carries the correction to WO-026 |
| Design improver | The census's operator row contradicted the widened work | fixed |
| Design improver | The new page never said what DotLn, a launchpad or the operator is | fixed |
| Design improver | The page's kit row held its fastest-staling fact | fixed |
| Design improver | The page hand-copied the kit's gate selections | fixed: it links the root page's list |
| Design improver | Four code items sat under what the operator wants | fixed: they have their own group |
| Design improver | The evidence README left out one settled row | fixed |
| Design improver | The evidence README did not name the two widest file changes | fixed |
| Design improver | "Left criterion 6" read two ways | fixed |
| Design improver | `The README:` was ambiguous where every root has one | fixed |
| Design improver | A grammar fault in `docs/discovery/README.md` | fixed |
| Design improver | "Harping on" sat close to the operator's own wording | fixed: the clause is gone |
| Criteria adversary | The evidence README misreported the plan check's update | fixed |
| Criteria adversary | The gaps item said more than its capture and collided with scope | fixed: narrowed to the capture |
| Criteria adversary | One recorded direction was an answer about one item | fixed: moved to the items left out |
| Criteria adversary | Committed files named a tone trait while explaining an omission | fixed |
| Criteria adversary | Step 10's title had no cited authority | fixed: D018 |
| Criteria adversary | The page said every change starts as a work order | fixed |
| Criteria adversary | The page said release close prints the helper | fixed |
| Criteria adversary | The page overstated when an update refuses a kit file | fixed |
| Criteria adversary | "A single newline" differed from the adopted reading | fixed |
| Criteria adversary | One new item reproduced a whole sentence of a capture | fixed |
| Criteria adversary | "Nothing in it is false" needed the purpose reading stated | fixed |
| Criteria adversary | Two sentences placed every capture in the main checkout | fixed |
| Criteria adversary | The Non-goals' configuration limit needed its reading stated | fixed: D018 |
| Consistency reviewer | No gate row stood at the changed code identity, and the handoff was the old one | fixed: the gates reran on the final tree |
| Consistency reviewer | This file still said criterion 6 was open | fixed |
| Consistency reviewer | The census said its scripts print the additions | fixed |
| Consistency reviewer | Superseded decisions carried no pointer | fixed: D015, D017 and D018 name them |
| Consistency reviewer | An undisclosed edit to a feedback source | fixed: D016 discloses it |
| Consistency reviewer | D009 still counted four headings, and nothing named the fifth | fixed: D017 names it |
| Design improver | "It" in the profile's new sentence read as the registration | fixed |
| Design improver | The evidence README left one open row unnamed | fixed |

## The repair after VER-001

Three fresh `dotln-worker` agents reviewed the repair across five rounds, from the same
order, VER-001 and diff against the verified state. The briefs held for three rounds. In
the fourth the adversary's and the design improver's narrowed to the script's three
later runs, and the fifth was a narrow confirmation of the last edits, so the quiet later
rounds are not full-breadth reviews. None wrote to the repository and none spawned a
descendant.

| Review | Findings | Fixed | Recorded |
| --- | ---: | ---: | ---: |
| Criteria adversary | 17 | 17 | 0 |
| Design improver | 13 | 13 | 0 |
| Consistency reviewer | 13 | 12 | 1 |
| All | 43 | 42 | 1 |

Each count is a distinct finding, under the first review to reach it. The rounds mattered:
three of the script's forms failed in turn, and the second of those was a reviewer's
tested closure, applied as written, that met a case its tests had not covered. The fourth round's
adversary was told to report only what a real phase of this order could reach, or what
made a stated sentence false, because the script serves three later runs and then
freezes at merge. It reported that it set aside three cases on that bound, and that
criterion 2 holds at every such tree, including repairs through `VER-003` and `FINAL-002`.

| Round | Review | Finding | Disposition |
| --- | --- | --- | --- |
| 1 | Criteria adversary | A tracked file deleted from the worktree left its row passing, because `git ls-files` reads the index | fixed; reached by the design improver too |
| 1 | Criteria adversary | The totals were not asserted though the census said so | fixed: asserted |
| 1 | Criteria adversary | The README called the census tracked-only and left D019's row out of its follow-ups | fixed |
| 1 | Criteria adversary | D020 said four reports moved out of the tables, and three did | fixed |
| 1 | Criteria adversary | "It" followed the wrong fence, and "neither writes this census" contradicted integration | fixed |
| 1 | Design improver | A reworded later bullet exited 0 at handoff and failed at filing | fixed: rows read from their section and shape-checked at once |
| 1 | Design improver | Nobody was told what a printed line meant | fixed: the legend |
| 1 | Design improver | The later-repair rule left the cutoff and the counts unclear | fixed |
| 1 | Design improver | The totals block broke up the assertion's result, and held dead code | fixed |
| 1 | Design improver | The text argued with the verifier | fixed |
| 1 | Design improver | The later reports sat ahead of the census's subject | fixed: at the end |
| 1 | Consistency reviewer | A failed final review needs two next numbers | fixed |
| 1 | Consistency reviewer | The host record's gate times called an old tree final | fixed |
| 1 | Consistency reviewer | Two rows said to stay open are `deferred` in the register | fixed |
| 1 | Consistency reviewer | Criterion 2 says rows, and the later reports were a list | fixed: a table of rows |
| 1 | Consistency reviewer | `docs/evidence/WO-025/meta.json` predates VER-001 | recorded, kept: a meter snapshot a later phase refreshes, as WO-012's reads `final-review` |
| 2 | Criteria adversary | The existence filter dropped any name Git quotes, so `docs/café.md` passed | fixed: Git's NUL-separated listing, in Node; reached by the design improver too |
| 2 | Criteria adversary | A tracked later report whose file was gone printed nothing | fixed |
| 2 | Criteria adversary | Malformed later rows passed until filing | fixed |
| 2 | Criteria adversary | D020's "literal" held at one tree of three | fixed: scoped to the reviewed tree |
| 2 | Criteria adversary | The settled follow-up described the rejected shape | fixed: a newer disposition |
| 2 | Design improver | The `>` legend misdirected for a path already listed | fixed |
| 2 | Design improver | The Counts sentence overclaimed | fixed |
| 2 | Consistency reviewer | A rejected option described what was done | fixed |
| 2 | Consistency reviewer | `record` and "the rows" had two meanings | fixed |
| 2 | Consistency reviewer | One present-tense "list" remained | fixed |
| 2 | Consistency reviewer | The repair's reviews were not in the host record | fixed |
| 3 | Criteria adversary | Moving to sets lost equality: a row for `package.json` and an unlisted dangling symlink both passed | fixed: the two sets must be equal; reached by all three |
| 3 | Criteria adversary | Indented rows, repeated rows and a second heading passed | fixed |
| 3 | Criteria adversary | A false Counts row, or an invented kind the table named, passed, and criterion 2 was misquoted | fixed: the Design's kinds named, Counts compared as exact lines |
| 3 | Criteria adversary | A blank standing account passed | fixed |
| 3 | Criteria adversary | D020's rejection reason did not fit the tested closure | fixed |
| 3 | Design improver | A `!` line did not say what was wrong | fixed: labelled |
| 3 | Design improver | The sentence before the script omitted the count line | fixed |
| 3 | Consistency reviewer | "Always counts" overclaimed | fixed |
| 4 | Criteria adversary | Integrating `main` needs the Counts and the cutoff sentence changed too | fixed |
| 4 | Design improver | The sentence on non-UTF-8 names was unnecessary and no longer true | fixed: deleted |
| 4 | Design improver | The legend omitted the final reviewer | fixed, with the integration named as the exception |
| 4 | Consistency reviewer | A case row overstated what prints when the Counts truly match | fixed: split, with its cases run |
| 4 | Consistency reviewer | The `!` definition omitted `none found` | fixed |
| 4 | Consistency reviewer | A script comment claimed more than the code | fixed |
| 5 | Criteria adversary | This section said the section-scoped read gave way, and the script reads later rows by section | fixed |
| 5 | Design improver | This section said every round ran on the same briefs | fixed |

Two proposals were weighed and answered differently. The adversary's tested shell closure
and the design improver's shell guard gave way to one Node script, which reads later rows
from their section and checks each one's shape (D020). The improver's view that Counts
needed no assertion was withdrawn once an assertion caught what it did.
