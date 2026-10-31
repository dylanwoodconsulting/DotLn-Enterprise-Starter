# WO-026 self-review

Three fresh `dotln-worker` agents reviewed the finished candidate on 2026-10-31 with
disjoint briefs, read-only, and the same three were restarted on the current diff after
their findings were resolved. Each names `claude-opus-5-5` from its environment block,
one of them only when rechecking, and none has an effort readback. Findings are as each
reviewer numbered them; where two reviewers found one defect it is listed once, under the
first.

## Consistency review

| Finding | Outcome |
| --- | --- |
| F1 The decisions index was stale after D009, which would have failed `npm run test:docs` | fixed: `npm run meta` runs last |
| F2 The profile placed the zoneless, router and fetch providers in `app.config.ts` (also the adversary's 3) | fixed: the two rows corrected and D008's account corrected |
| F3 `scripts.md` said no gate runs the helpers while CI runs `boards` | fixed |
| F4 `/scene` also provides `CatalogStore` (also the adversary's 5 and the design review's 2) | fixed in `events-and-state.md`, `catalog.md` and `scene.md`; `state-rules.md` states the rule by example |
| F5 New text widened what `check:scripts` covers (also the adversary's 4 and the design review's 14) | fixed in the two documents and `scripts.md`; the coverage itself recorded (D011) |

## Criteria adversary

| Finding | Outcome |
| --- | --- |
| 1 Criterion 3's clause reached further than its grep over this census | fixed: the class name left `sub-apps.md`, and the operator's widening (D013) removed the one README line that was left |
| 2 `events-and-state.md`'s "only other writes" omitted the persistence feature's reports | fixed |
| 6 Two developer documents still said preflight and gate, and three carried order vocabulary (also the design review's 5) | fixed |
| 7 The README said all checks and omitted the bundle check and the visual suite (also the design review's 14) | fixed |
| 8 `conventions.md` said feature path enums, of which there are none | fixed: `ChildPaths` |
| 9 `scripts.md` said exported shared type names, and the check reads every declaration | fixed |
| 10 `conventions.md` rule 5 said nearly every injectable, while rule 10 says each | fixed, wrongly at first, as the recheck below records |
| 11 `sub-apps.md` called the board the fullest example (also the design review's 7) | fixed |
| Note: `scene.md`'s no-package claim and the specs' `node:` imports | fixed: the sentence says so |
| Note: 18 external links counted over the 21 documents, not the 54 | fixed: `https://nx.dev` checked and the record corrected |

## Design review

| Finding | Outcome |
| --- | --- |
| 1 Accretions left in `catalog.md` | fixed |
| 2 Orphans in `scene.md`, a bare rule reference and a store provided and not injected | fixed |
| 3 Counts a new work would break in ten places | fixed: one inventory sentence, which the add-a-work list now names (D010) |
| 4 Enumerations the pass widened, and no upkeep step for the new tables | fixed |
| 6 The tail of `events-and-state.md` duplicated the conventions | fixed: moved or removed, with `layer:shared-data-access` and the Nx 24 note kept in `conventions.md` |
| 7 A paragraph about layout left among the steps in `sub-apps.md` | fixed |
| 8 Narrowed rows and weak start files in the developer index | fixed; cutting the Checks list and `npm start` declined (D010) |
| 9 Four documents with no link across their pair | fixed |
| 10 Antecedents the pass removed from `concept-mapping.md` | fixed |
| 11 Rule documents: a constraint standing as a rule, a flag with no developer home, a misplaced bullet, a lost antecedent, a long bullet | fixed; the sentence in `sub-app-rules.md` declined (D010) |
| 12 Three senses of catalog in `storybook.md` | fixed, and the same word in `console.md`, `sub-apps.md` and `component-taxonomy.md` |
| 13 `scripts.md` copied `ci.yml` step by step | fixed |
| 14 Small wording | fixed, except replacing the operator in the README, declined (D010) |
| The evidence script could lose eight lines | declined (D010) |
| Follow-up: no future order runs the link check | recorded (D011), `FUP-d97544c4254dadd4` |
| Follow-up: WO-016 replaces the placeholder and names none of these documents | recorded (D012), `FUP-35187266d29e00dc` |
| Follow-up: WO-020 triggers the v0 reader's removal | no change: the order's Known issues already send those batches into the passed documents, and `catalog.md` states the rule |

## The recheck

The three rechecked the current diff after the fixes above. These are new findings; a
finding of the first round that was fixed and held is not repeated.

| Reviewer and finding | Outcome |
| --- | --- |
| Adversary 1, design 1: `events-and-state.md` stated the `sourcesFooter` flag backwards | fixed |
| Adversary 2: `conventions.md` rule 5 said every injectable and token, which the adversary's own first-round fix had suggested; `CatalogStore` has no kit of its own and the check does not read signal stores | fixed: the rule says what `check:kits` enforces and how a store's kit comes |
| Adversary 3: the profile and D003 still said `check:scripts` enforces every tool's status | fixed, and D008's account corrected again |
| Adversary 4, consistency L1, design 2: `scripts.md` said CI adds a suite the gate already runs | fixed |
| Adversary 5: the NgRx and toolkit version line went, and the census said it moved | fixed: the census says it was removed; `package.json` owns those versions and the profile states them |
| Adversary 6, consistency L2: "every tool file is named" was wider than the tree | fixed: the two lint rules named, D011 and its follow-up's reason corrected |
| Adversary 7: `host-qualification.md` still said 18 URLs | fixed |
| Adversary 8: this file overstated what the reviewers reported and repeated | fixed |
| Adversary 9, design 3 and 4: two sentences made false in `catalog.md` by moves, and a rule in `state-rules.md` turned into a claim | fixed |
| Adversary, question 1: D004 did not say one word carried two scopes | fixed: D004 said so, and D013 then ended the two scopes |
| Consistency L3: WS-001 rules 5 and 11 differ from the target's `conventions.md` | recorded in [the handoff](handoff.md), for the next planning pass; the target's side is true |
| Consistency L4: the profile used catalog for Storybook twice | fixed |
| Consistency note: D012's check could not see the machinery README | fixed: that README now says placeholder (D013) |
| Design 5: Toolkit lost its antecedent | fixed |
| Design 6, 10: the README's table row and its last paragraph read wrongly after the edits | fixed |
| Design 7, 8: `sub-apps.md`'s added step and a repetition left by a move | fixed |
| Design 9: `scripts.md`'s gate sentence stopped parsing | fixed |
| Design 11 to 15: wording in `scene.md`, `events-and-state.md` and `catalog.md` | fixed |
| Design 16: `catalog.md`'s first line had nothing pointing at the inventory | fixed |
| Design 17, 18: rows in the developer index and a garden path in `component-taxonomy.md` | fixed |
| Design: overlong raw lines | fixed where an edit reached them; left where rendering is unaffected |

A last narrow recheck of those edits found one more false statement, one misattribution
and small wording, all fixed; the same three then confirmed the replacements:

| Reviewer and finding | Outcome |
| --- | --- |
| Adversary 1: a moved sentence in `sub-apps.md` said every sub-app has its own data-access library, and Tools does not | fixed |
| Adversary 2: `watchState` is NgRx's, not the toolkit's | fixed |
| Adversary 3, consistency L1, design 2: three lines and a table cell kept the wording rule 5 had corrected | fixed: `@Injectable` class in all four |
| Adversary 4: D004 said the grep searches the 21, and it also reads the ledger | fixed |
| Design 1, 3, 4: two ambiguous words and a wrong pronoun | fixed, with the same pronoun in `docs/ai-reference/README.md` |
| Adversary 5: the row for consistency L3 named a handoff that did not exist yet | fixed: [the handoff](handoff.md) carries it |

## The widening

The same three reviewed the 33 library READMEs and the amended order after the operator's
direction (D013).

| Reviewer and finding | Outcome |
| --- | --- |
| Adversary 1: `libs/shared/models/README.md` said any library may read it, and `type:util` libraries may not | fixed |
| Adversary 2, consistency W2: "how it is tested" was claimed for 16 entry points that do not say it | fixed: the census, the evidence and the AI line say which 17 and which 16, and `ui/menu` says how it is tested (D014) |
| Adversary 3, design 1: the board's README never said what the library is | fixed |
| Adversary 4, design 11: `scene-engine/testing` named no export, against what the census said of it | fixed |
| Adversary 5: `scene/testing` said the kit returns the reduced-motion setting | fixed |
| Adversary 6: `core/testing` said its kit reads the base path from a document | fixed |
| Adversary 7: `data-access/testing` said a passed storage's writes are returned | fixed |
| Adversary 8, consistency W3: the URL counts still named the stubs | fixed |
| Adversary 9, consistency W1: the census did not account for the new convention lines, and no decision recorded them | fixed: both census rows, and D014 |
| Adversary 10, consistency W5: D002 pointed at text D004 no longer has | fixed |
| Adversary 11: the evidence's gate rows predate the widening | fixed: the gates reran on this tree |
| Consistency W4: WS-001 still names the three surfaces in its table of what lies ahead | recorded in [the handoff](handoff.md) for the final review |
| Design 2: the convention missed the route the next library takes | fixed: `sub-apps.md` and `sub-app-rules.md` carry it (D014) |
| Design 3: `scene` and `machinery` opened on their exports | fixed |
| Design 4, 7, 8: `catalog`, `tools` and `ui` read as lists, and `tools` linked the wrong rules | fixed |
| Design 5: no `testing` page said how to use a kit | fixed on the 13 with providers to spread |
| Design 6: three READMEs had a dead end or the wrong first link | fixed |
| Design 9: "the same kit" gave no reason for a second name | fixed |
| Design 10: `scene-data-access` repeated `scene.md`, and the `handlers` entry had no home in a document | fixed |
| Design: nothing stops the next stub but a convention | recorded in D014's follow-up |

The same three then confirmed those edits and found:

| Reviewer and finding | Outcome |
| --- | --- |
| Adversary 1: `catalog`'s README said features read through the token, and the Tools facade reads the store | fixed |
| Adversary 2, consistency R1: D007 still said `sub-app-rules.md` was left unchanged | fixed, and D010's reason with it |
| Adversary 3: D014 said `sub-app-rules.md` states the standard, and it only sends a session to it | fixed |
| Adversary 4, consistency R2: `FUP-83dc180d25c50ccc`'s reason inverted the order's non-goals | fixed |
| Adversary 6: the census said every library test ran afresh, and one read a cache filled after its README last changed | fixed |
| Design 1: the convention sat in step 1 of `sub-apps.md`, before the library has code or a document to name | fixed: step 5 carries it |
| Design 2: "both" in `sub-app-rules.md` had no antecedent | fixed |

## What the reviews could not see

Nothing here substitutes for the use criterion, which is the verifier's. The rule
documents' commands were run by the executor. The reviewers checked the table against
the documents and reran three of them.
