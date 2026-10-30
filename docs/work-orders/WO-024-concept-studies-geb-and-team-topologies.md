# WO-024 — Concept studies V: levels, loops and teams, ten concepts from Gödel, Escher, Bach and ten from Team Topologies, each with a relations drawing, the two works whose vocabulary describes the platform itself

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh+; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 6268de9fc3cae84bf66091c1fbcc30d344411cd2
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/catalog/src/studies/geb/` (ten records) and
`libs/shared/catalog/src/studies/tt/` (ten records), the `relations` family
under `libs/features/tools/src/lib/composites/study-visuals/relations/`, the
executable TypeScript models and specs the records name under
`libs/features/tools/src/lib/studies/geb/` and `studies/tt/`, two coverage
rows and one rule, about 35 source files plus twenty data records; adds no
runtime dependency. Removes nothing. Wall-clock: about 6 to 10 hours of
executor work, of which the fan-out runs in parallel, plus the fixed cycle;
unknown until run. Context bytes: WO-020's record, check, families and rules
as it leaves them, `catalog.md` §Studies, the twenty catalog rows with their
hooks, this order, about 180 KB for the executor; each author reads two rows,
the contract and the public references it cites. Commands added: none.
Tokens: unknown until run; recorded per worker. Steps: 12. Re-mints: none.
Refutations paid: the 2026-10-30 second pass's receipt.
**Nomination provenance:** the operator's direction of 2026-10-30 (ignored
intake capture `docs/intake/notes/planning-2026-10-30-second.md`, SHA-256
`8e8cdbeb9b227932d9119b5a012a72086a1ebe349f368b42b0ff788d9060382e`); the
depth direction of 2026-10-26 (capture SHA-256
`5742f0a794ee937eba3573e29fa99c18df074f293a583b0fbbb2ab55826cade4`); the
`dotlnHooks` the GEB and Team Topologies rows carry toward the platform's
levels and roles (the catalog rule on traps and levels; `concept-mapping.md`);
register row `FUP-5f1cdfde5e860902` allocated to WO-020 to WO-024.
Planner-synthesized by the 2026-10-30 second planning pass
([planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md)
§Orders filed and amended, D4 and D5). Opaque identifier, not a priority.
**Depends on:** WO-020 merged (hard: the record, the check, the study
composite, the addressable route and the fan-out procedure; the base above is
provisional and publishes right under starter v0.96.1's merge-base publish; a
pass may set it to WO-020's merge commit).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-020",
    "relation": "hard",
    "reason": "the concept-study record, check, study composite, addressable route and fan-out procedure this batch reuses; the base line is provisional and publishes right under starter v0.96.1's merge-base publish"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 23, 24, 25, 26; §Design: the Tipping Point taxonomy, §The app
and its sub-apps, §Design direction); `docs/repositories/dotln-angular.md`;
`docs/product/concept-study.md`; `docs/control/budgets.json` (`subagentCap`);
the target's `catalog.md` §Studies and `catalog-rules.md` as WO-020 leaves
them, and `docs/dev-reference/architecture/concept-mapping.md` (traps,
levels and the five UIFA roles); WO-020's `fan-out.md`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Tools, Catalog, chooses Gödel, Escher, Bach and sees ten studied concepts;
they open Levels of description and read its study: the idea in plain words
(the same system is truly described at several levels, each with its own
vocabulary, and no level is the real one) and a situation it serves (a
planning pass, an order, a gate row and a hook refusal are four descriptions
of one afternoon's work), a relations drawing they step through level by
level with the text equivalent naming each level and what it sees of the
next, the ordinary pseudocode of a chunking procedure, an illustrative RxJS
reading where a stream of low-level events becomes a stream of higher-level
ones, public treatments of the idea introduced on their own terms, the
references, the limits (a sealed-off level hides what leaks through) and the
nearby concepts as links (Chunking, Sealed-off levels, Strange loop). They
open Strange loop and step the drawing until it returns to where it began;
they open Isomorphism and Gödel numbering and see one idea become the other's
mechanism, with a small executable encoder they can read the spec of. They
choose Team Topologies, open Collaboration mode, X-as-a-Service mode and
Facilitating mode and read, in one drawing per mode, how two teams exchange
work and where each mode should end; they open Conway's law and read the
homomorphism the drawing shows between a team graph and a system graph, with
the Reverse Conway manoeuvre as its nearby inverse. What the operator learns
is the vocabulary for the levels the platform's mechanisms live on and the
modes its five roles work in; what they decide is which loop or mode to make
visible in the machinery view or a toy next.

**Observed gap (dated 2026-10-30):** at `6268de9` the catalog carries 573
GEB rows (9 typed) and 637 Team Topologies rows (2 typed), most carrying
DotLn hooks, none studied; the Tipping Point taxonomy (WS-001 §Design) and
the five UIFA roles are the app's own levels and teams and no page connects
them to the books' vocabulary; no `relations` family exists.

**Design:**

- **The `relations` family** (`composites/study-visuals/relations/`): a small
  concept map laid out by the model (a stack of levels, a cycle through
  levels, a graph of teams and systems, two graphs with a mapping between
  them), with the stepped node or edge raised and named in the text
  equivalent; reduced motion steps without transition. First rendered pair
  (rule 25): A, a stack of levels with the loop drawn as an arrow returning
  to the bottom; B, a ring with the levels as stations and the loop as the
  ring itself; one variable, the geometry of a loop through levels; both at
  1440 and 360; the rounds continue until the operator says done.
- **Executable arm where it exists**: a study with a mechanism to run carries
  `executable: { kind: 'typescript', module }` with a spec: a Gödel
  numbering of a toy alphabet (encode and decode), a decision procedure over
  a toy rule system authored for the study (not the book's puzzle, in the
  author's words), a chunking of an event list into levels, a Conway mapping
  from a team graph to the system graph it tends to produce (illustrative in
  claim, executable in mechanism); the others mark `executable: null` with
  their reason. The `rxjs` field is illustrative where a stream clarifies
  (levels as a chain of `scan`s; organizational sensing as a feedback
  stream) and `null` otherwise. Missing material stays missing: a concept
  that has only prose keeps `visual: null` when no drawing explains it better
  than the words, recorded with its reason.
- **Situations from the platform and the app**: each study's situation is
  drawn from the platform's public records and the app's own structure (the
  levels of kernel, skeleton, compiler and harness; the planner, executor,
  verifier, reviewer and release-close roles; the taxonomy's Salesmen,
  Connectors and Mavens), stated as an analogy the row's hooks support,
  never as a claim about the book's intent or the platform's design (the
  analogy rule WO-022 adds).
- **Implementations and references**: public treatments and implementations
  (a public interpreter of a formal system, public essays on Gödel's theorems
  from a reference encyclopedia, the Team Topologies public pattern pages and
  the Team API template repository, Conway's original paper where public),
  each introduced on its own terms; the publishers' pages as references, each
  with `accessed` and `supports`. Own words; no passage of either book (rule
  23; the publishing decision at activation).
- **The twenty concepts**, by the pass's rule (the ten most-related rows of
  each work by resolved in-degree, ties toward typed rows then source order,
  with one recorded substitution for GEB: Strange loop for Completeness,
  because Consistency's study carries completeness as its nearby concept from
  the same chapter and the book's own subject would otherwise be absent):
  GEB `geb2:8` Levels of description, `geb2:9` Chunking, `geb1:107`
  Consistency, `geb1:228` Gödel numbering, `geb1:53` Decision procedure,
  `geb1:65` Isomorphism, `geb2:138` Sentence G, `geb1:51` Jumping out of the
  system, `geb2:61` Active symbols, `geb2:302` Strange loop; Team Topologies
  `tt3:8` X-as-a-Service mode, `tt3:7` Collaboration mode, `tt3:9`
  Facilitating mode, `tt1:92` Conway's law (1968), `tt1:138` Reverse Conway
  manoeuvre, `tt1:94` Homomorphic force, `tt1:151` Team-scoped flow,
  `tt2:90` Platform as a product, `tt3:47` Organizational sensing, `tt1:215`
  Seven-to-nine maximum effective team size. One further recorded
  substitution per work under the rule is admitted as in WO-020.
- **The fan-out**: WO-020's procedure, at most twelve workers (ten authors
  with two concepts each, one factual critic who also checks the analogy rule
  and that no study characterizes the operator or quotes the books, one
  reading critic).
- **Documents:** `catalog.md` §Studies gains the two coverage rows and the
  `relations` family; `catalog-rules.md` gains the rule that a study of an
  idea without a mechanism keeps its executable and visual fields absent with
  the reason recorded, rather than filled; WS-001's §Design gains, by the
  launchpad write-back, one sentence linking the taxonomy to the Levels of
  description and Team Topologies studies.

Rejected: twenty GEB concepts and Team Topologies later (axis: the two works
together describe the platform's levels and its roles, and the operator's
hundred is served by both appearing now); a formal-system interpreter as a
sub-app (axis: a toy of that size is a later member the operator picks from
the shelf, WO-018's route); drawings for every concept (axis:
`concept-study.md` keeps missing material missing).

Live-run surfaces at the base: the catalog with WO-020's studies and the
addressable readings.

**Deliverables:** the twenty records with their models and specs where
executable; the `relations` family with its stories and specs; the coverage
rows, the rule and the sentence; `docs/evidence/WO-024/` with the fan-out
record, the review record, the link check, the walkthrough and its
screenshots, and the design record.

**Execution plan:**

1. Base guard and activation as WO-005 step 1, for WO-024; fast-forward the
   target worktree to the target's `main` (WO-014-D001); read the harness
   usage and record the subagent remainder; record the publishing decision
   as WO-020 did.
2. The `relations` family with stories `StudyRelations` and a spec that
   renders a three-level stack with a loop to its text equivalent. Check:
   `npx nx test tools` exits 0; `npm run lint:components` exits 0.
3. The first rendered pair (A stack with a returning arrow, B ring) at 1440
   and 360; the rounds; the rejected implementation removed with its record.
   Check: `grep -c "Round" docs/evidence/WO-024/design/comparisons.md` is at
   least 1.
4. The authors' brief with the absent-material rule into `fan-out.md`;
   dispatch the ten authors; merge the twenty drafts. Check: `npx nx test
   tools` exits 0 over the models' specs.
5. Dispatch the two critics; dispose the findings; rewrite through the same
   authors; set `checked`. Check: `npm run studies:check` exits 0 over
   `studies/geb/` and `studies/tt/`.
6. The link check into `docs/evidence/WO-024/README.md`. Check: every URL has
   a status.
7. e2e `apps/dotln-e2e/src/catalog.spec.ts`: GEB shows ten studied and Team
   Topologies ten; Levels of description's study steps its drawing under
   reduced motion with the text equivalent naming the level; Strange loop's
   drawing returns to its start; the three interaction-mode studies open from
   the contents; Conway's law links to the Reverse Conway manoeuvre; axe; no
   overflow at 360, 768 and 1440. Check: `npx nx e2e dotln-e2e` exits 0.
8. The walkthrough as WO-020 step 11, under `docs/evidence/WO-024/`. Check:
   the files exist.
9. Documents: the coverage rows, the family and the rule. Check:
   `grep -c "absent" docs/ai-reference/catalog-rules.md` is at least 1.
10. Dependency check as WO-015 step 15; `npm run check:bundle`. Check: prints
    nothing; the chunk sizes recorded.
11. Gate plain and review. Check: passing rows, no tracked-byte mutation.
12. Launchpad write-back (WS-001 §Design's sentence; the profile's
    implementation map names the `relations` family; the delivery states by
    the final review); then the publish, review and records steps as WO-007
    steps 15 to 17, with the branch `feat/levels-loops-and-teams-studies`,
    the title `feat: add concept studies for levels, loops and teams`,
    `docs/evidence/WO-024/` and `docs/final-reviews/WO-024/`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:fixtures`,
`npm run lint:components`, `npm run lint:hygiene`, `npm run check:fixtures`,
`npm run studies:check`, `npm run test:tooling`, `npm run i18n:check`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session in
   the served production build: open Tools, Catalog; choose Gödel, Escher,
   Bach and read the studied count; open Levels of description and step its
   drawing, expand the pseudocode and the limits; open Strange loop and step
   it round; open Isomorphism and Gödel numbering and read the encoder's spec
   note; choose Team Topologies; open the three interaction modes; open
   Conway's law and follow the Reverse Conway link. The VER report carries a
   `## Walkthrough` section with the dated steps and the screenshots at 360,
   768 and 1440 under `docs/evidence/WO-024/walkthrough/`
   (`ls docs/evidence/WO-024/walkthrough | wc -l` prints at least 15), and
   states in the verifier's own words what a level of description is, what
   makes a loop strange, and when collaboration mode should end, as read from
   the studies alone. Met only when every step completed and that statement
   is present.
2. `npm run studies:check` exits 0 over `libs/shared/catalog/src/studies/geb/`
   and `studies/tt/` with exactly the twenty ids this order names (or one
   recorded substitution per work), every record `checked` with at least two
   reviewers, every reference complete, and `studies-summary.json` current.
3. Every record with `executable` names a module under
   `libs/features/tools/src/lib/studies/geb/` or `studies/tt/` with a spec
   beside it, every record with `executable: null` or `visual: null` carries
   its reason in the decisions file (the file names each), and `npx nx test
   tools` exits 0 with those specs.
4. `docs/evidence/WO-024/fan-out.md`, `review.md` and `README.md` as WO-020's
   criterion 4, the review record also confirming per study that no passage
   of either book is quoted and no sentence characterizes the operator.
5. `npx nx e2e dotln-e2e` exits 0 and includes the step 7 cases, axe at the
   board spec's threshold and no horizontal overflow at 360, 768 and 1440.
6. `npx nx build dotln --configuration=production` exits 0 within the
   declared budgets with the `relations` family and the records in lazy
   chunks, `npm run check:bundle` passes with the chunk sizes recorded, and
   `package.json`'s `dependencies` keys equal the base's.
7. `docs/dev-reference/architecture/catalog.md` §Studies lists Gödel, Escher,
   Bach and Team Topologies with ten studied each, and
   `docs/ai-reference/catalog-rules.md` states the absent-material rule
   (`grep -c "absent" docs/ai-reference/catalog-rules.md` is at least 1).
8. `docs/evidence/WO-024/design/comparisons.md` records the first pair (A
   stack, B ring) and every later round with its pick, and the decisions file
   records the operator's word that ended the rounds; the decisions file
   names the removed candidate's files and `ls` on each prints nothing.
9. `node scripts/target-gate.mjs WO-024 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs,
`docs/evidence/WO-024/README.md`, `fan-out.md`, `review.md`,
`walkthrough.md` and its screenshots, `design/`, and
`docs/evidence/WO-024/host-qualification.md`.

**Known issues and carry-ins:** The base line is provisional and publishes
right under starter v0.96.1's merge-base publish; a pass may set it to
WO-020's merge commit. This order and WO-023 are a lane pair: disjoint
surfaces, no edge, the second to publish integrates the target's `main` and
rewrites `studies-summary.json` before its publish; the operator may run them
one at a time. The remaining GEB and Team Topologies rows, the AI for Games
pathfinding and decision-making chapters, the RxJS patterns and the remaining
EIP and PoEAA patterns are the next batches' candidates (the filing pass's
C3), cut when the operator drains this queue. This order activates only on a
launchpad whose starter carries core WO-221's `--draft` form; the draft pull
request and its workflow runs are a final-review obligation read from
`docs/evidence/WO-024/preview-pr.json`, never a criterion. `Target release
classification: minor` and `Target release notes: reviewed` are set under
WO-012's declared policy.

**Non-goals:** a formal-system or team-topology sub-app or toy; studies of
the remaining rows; the general search controls (WO-018); the machinery view.

**Operator-review assumptions:** the operator accepts the in-degree selection
with the recorded substitution and the twenty concepts it names, accepts
situations drawn from the platform's public records and the app's structure
as analogies, judges the first pair and ends the rounds in their own words,
and reads the one draft pull request before final review, which the final
publish reuses.
