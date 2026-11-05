# WO-038 — The reading at the operator's full size: how the catalog's reading, its study and its drawing use a 3840 by 1620 screen and the 2080 by 1460 centre window, chosen through the operator's paired comparisons with the measure, the drawing's width and the drawing's place beside or above the text as the variables

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ 48c7f8e6916692bca833c4985e2cf95978ab2c06
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** edits the catalog page's layout (`containers/catalog-page/`),
the reading composite (`composites/concept-reading/`), the study composite
(`composites/study/`, `study-explanation/`) and the study-visual families'
sizing (`study-visuals/motion`, `timeline`, `marbles`, `flow`, `states`,
`relations`, `grid` as they exist at activation), the shell's content
width tokens where the reading reads them (`libs/shared/ui/src/styles/`),
the visual baselines at the operator's sizes added to `catalog.visual.spec.ts`,
and the documents (`catalog.md` §Reading and studying, the design
direction's reading sentence in WS-001); about 15 source files; adds no
runtime dependency, no page and no route. Removes the decided-against
candidate after each round. Wall-clock: about 4 h 0 min to 6 h 0 min of
executor work plus the design rounds and the fixed cycle; unknown until
run. Context bytes: the catalog page, the reading and study composites and
the families (about 150 KB), `catalog.md`, WS-001 §Design direction and
rules 24, 25 and 29, WO-019's design record (the twenty-two rounds that
settled the reading at 1440), WO-028-D024 and its two screenshots, this
order; about 300 KB for the executor. Commands added in the target: none.
Tokens: unknown until run. Steps: 9. Re-mints: none. Refutations paid:
this pass's receipt.
**Nomination provenance:** WO-028-D024 and register row
`FUP-191e65317f5e73f4`: the verifier measured the reading at 3840 by 1620
in the served build, a 686-pixel study column between about 830 and 880
pixels of empty space with the drawing at 686 by 248, boarded it for road
planning as a UI issue at the operator's full size that a research order
could not decide; the operator's directions of 2026-11-04 (ignored capture
`docs/intake/notes/wo028-verifier-quality-sample-2026-11-04.md`, SHA-256
`01ddf8780c481f59f1758d8814ad1fd617ba5fa81f85dd81173ac1769cc0c7a1`;
WO-028-D020) that UI issues at their full size can fail an order, and
(capture `docs/intake/notes/wo028-verifier-eye-test-size-2026-11-04.md`,
SHA-256 `cc1746dc2f88f599e55de07d589955a63aeff8cf31f409babf87492a14e53898`;
WO-028-D021) that paired comparisons render at about 2080 by 1460; the
operator's dispatch of 2026-11-05 asking that the reminders be addressed.
Planner-synthesized by the
[2026-11-05 pass](../planning/passes/standard-pass-v0-117-0-scene-reminders-2026-11-05.md)
(D6). Opaque identifier, not a priority.
**Depends on:** WO-019 merged (hard: the reading surface the twenty-two
rounds settled at 1440, which this order extends to the operator's sizes
without relitigating a decided round). WO-035 (reference-only: the reading's text
arrives through the message system once WO-035 lands; whichever lands later
integrates the target's `main`).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-019",
    "relation": "hard",
    "reason": "the catalog's reading surface, settled over twenty-two rounds at 1440 and 360, that this order extends to the operator's sizes"
  },
  {
    "workOrderId": "WO-035",
    "relation": "reference-only",
    "reason": "the reading's text comes through the message system once WO-035 lands; the later of the two integrates the target's main"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 24, 25 and 29; §Design direction; G6); `docs/operator/README.md`
(§How the operator directs a session: design comparisons; §What the
operator wants: pages they would use); `docs/repositories/dotln-angular.md`;
the target's `docs/dev-reference/architecture/catalog.md` §Reading and
studying; `docs/evidence/WO-019/design/` (the rounds and their picks);
WO-028-D024's screenshots `docs/evidence/WO-028/walkthrough/ver001-14-study-opening-3840.png`
and `ver001-14-study-opening-2080.png` in the target's `docs/dotln/`.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
a study on their full screen, 3840 by 1620, or in the centre window they
mostly use, about 2080 by 1460, and the page uses the space: the text keeps
a measure they can read, the drawing is large enough to read its labels
without leaning in, and the two sit in a relation the operator chose
through the rounds, beside each other or the drawing above the text at its
full width; the contents column and the shelf keep their place; nothing is
a 686-pixel strip floating between two empty fields. At 1440 and below the
reading stays as the twenty-two rounds of WO-019 settled it, unless a round
here decided otherwise and the decision says so. What the operator learns
is that the catalog reads well on the display they actually use; what they
decide is whether the scene and the board need the same pass.

**Observed gap (dated 2026-11-05 at `48c7f8e`):** measured by VER-001 of
WO-028 in the served production build (D024): at 3840 by 1620 the study
column is 686 pixels wide from x 2271 to x 2957, with about 830 pixels
empty to its left and about 880 to its right, and the drawing stays 686 by
248; at the centre window of 2080 by 1460 the same layout is comfortable.
WO-019's rounds judged the reading at 1440 and 360 only, the sizes rule 25
named before the operator's direction of 2026-11-04; the drawing's size is
bounded by the column's.

**Design:**

- **The brief** (WS-001 rule 25 under §Design direction): the subject is
  the page; the text sits in a readable measure; a drawing is the study's
  main representation and reads at the size it is given; figures watched
  are instruments; the contents column stays beside the reading; motion only
  when something moves.
- **The first pair.** A: the reading's measure widens with the viewport to
  about 90ch at 2080 and the drawing scales to the column, so the page is
  one wider column; B: the measure stays 65ch to 70ch and, at widths from
  about 2080 up, the drawing moves beside the text into a second column
  that takes the remaining width, the explanations staying under the text.
  One variable, where the drawing's extra width comes from. Both rendered
  at about 2080 by 1460 and at 3840 by 1620 (rule 25 as amended; rule 29),
  with 360 rendered to show the narrow layout unchanged; A then B with the
  round named in the question and both captions; the operator's preference
  makes the next pair (the contents column's width, the shelf at full
  width, the drawing's maximum size are the likely later variables);
  content, usability and usefulness before cosmetic polish; the rounds
  continue until the operator says the process is done; the decisions file
  records each round's pair and pick; the rejected implementation leaves
  the code when its round is decided; a decided choice of WO-019 is not
  relitigated, and the 1440 and 360 layouts change only where a round here
  decides it and says so.
- **The families.** Each family's drawing takes its width from its
  container and keeps its aspect and its label placement rules (WO-028's
  shared label placement and WO-034's marks), so a wider drawing is the same
  drawing larger; VER-001's label sweep at the operator's sizes is the
  check that nothing clips or overprints.
- **Tokens.** The widths are tokens in `libs/shared/ui/src/styles/`
  (`--dotln-reading-measure`, `--dotln-reading-max`), read by the page and
  the composites, never a magic number in a template (G4).
- **Baselines.** `catalog.visual.spec.ts` gains baselines at about 2080 by
  1460 and 3840 by 1620 for the shelf, a contents page and a reading with a
  study; the existing 360, 768 and 1440 baselines are unchanged unless a
  round decided otherwise, in which case they are regenerated with the
  decision named in the pull request.

Rejected: a fixed maximum page width (axis: G6, no fixed page width; the
operator reads on an ultrawide display); deciding the layout in planning
(axis: rule 25, the look is chosen by the operator's rounds, never
defaulted); folding this into WO-035 (axis: a migration with no visible
change should stay one, and a design round should not ride inside it);
folding this into the shell and board look (candidate C1, axis: different
surfaces, and the reading is where the operator spends their time today).

Live-run surfaces at the base: the catalog's reading with eighty studies
in the five landed families.

**Deliverables:** the decided layout at the operator's sizes with its
tokens; the families' sizing; the baselines; `docs/evidence/WO-038/` with
the design record, `walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-038: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   48c7f8e6916692bca833c4985e2cf95978ab2c06 origin/main` exits 0 (a `main`
   that does not contain the pin stops for a planning pass); the target
   worktree then fast-forwards to the target's `main`, and that integrated
   commit is the baseline of every later comparison; then the route guard
   and activation as WO-005 step 1. Check: the decisions carry the
   integrated commit.
2. The width tokens and the families' container-driven sizing. Check:
   `npx nx test tools` exits 0; `grep -rn "max-width: [0-9]" libs/features/tools/src`
   prints nothing.
3. The first rendered pair (A the wider column, B the drawing beside the
   text) at about 2080 by 1460 and 3840 by 1620, with 360 rendered; the
   rounds; the rejected implementation removed with its record. Check:
   `grep -c "Round" docs/evidence/WO-038/design/comparisons.md` is at least 1.
4. The label sweep at the operator's sizes over every study (VER-001's
   script from `docs/evidence/WO-028/ver-001/`). Check: zero cut and zero
   overprinted frames.
5. The visual baselines at the operator's sizes; the existing ones
   unchanged or regenerated with the decision named. Check:
   `npx nx e2e dotln-e2e` exits 0 over `catalog.visual.spec.ts`.
6. The walkthrough as WO-020 step 11, under `docs/evidence/WO-038/`, with
   screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
   Check: the files exist.
7. Documents: `catalog.md` §Reading and studying (the layout at the
   operator's sizes and its tokens); the launchpad write-back names the
   reading sentence in WS-001 §Design direction. Check:
   `grep -c "2080" docs/dev-reference/architecture/catalog.md` is at least 1.
8. Dependency check as WO-015 step 15; `npm run check:bundle`; gate plain
   and review. Check: passing rows, no tracked-byte mutation.
9. Launchpad write-back (WS-001 §Design direction's reading sentence and
   delivery states), then the publish, review and records steps as WO-007
   steps 15 to 17, with the branch `feat/reading-at-full-size`, the title
   `feat: lay out the catalog's reading for the operator's full screen`,
   `docs/evidence/WO-038/` and `docs/final-reviews/WO-038/`. Check:
   `npm run test:docs` in the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`; in the launchpad order
worktree `npm run test:docs`; then the target gate plain and review once
each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build at 3840 by 1620 and at about 2080 by
   1460: open the shelf, a contents page and three readings with studies in
   three different families, read each study's text and drawing, step its
   drawing. The VER report carries a `## Walkthrough` section with the
   dated steps and screenshots at 360, 768, 1440, about 2080 by 1460 and
   3840 by 1620 under `docs/evidence/WO-038/walkthrough/`, and states in
   the verifier's own words whether each drawing's labels read at the
   operator's sizes without leaning in and whether the page uses the
   screen. Met only when every step completed and that statement is
   present.
2. At 3840 by 1620 and at about 2080 by 1460, measured in the served build
   on a reading with a study, each side gutter beside the reading's content
   (the text and the drawing together, with the contents column) is
   narrower than the reading's text measure, and the drawing is at least as
   wide as the text measure; the measurements are recorded in the evidence
   README with the decided layout's name.
3. VER-001's label sweep over every study reads zero cut and zero
   overprinted frames at 360, 768, 1440, about 2080 by 1460 and 3840 by
   1620.
4. `catalog.visual.spec.ts` passes with baselines at the operator's sizes,
   and the 360, 768 and 1440 baselines are unchanged from the integrated
   base, or changed with the round that decided it named in the decisions
   file and the pull request.
5. `docs/evidence/WO-038/design/comparisons.md` records the first pair (A
   the wider column, B the drawing beside the text) and every later round
   with its pick, and the decisions file records the operator's word that
   ended the rounds; the decisions file names the removed candidate's files
   and `ls` on each prints nothing; no decided round of WO-019 is reversed
   without a round here that says so.
6. `grep -rn "max-width: [0-9]" libs/features/tools/src` prints nothing and
   the width tokens exist in `libs/shared/ui/src/styles/`; `npm run
   check:bundle` passes and `package.json`'s `dependencies` keys equal the
   integrated base's.
7. `node scripts/target-gate.mjs WO-038 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-038/README.md`,
`design/`, `walkthrough.md` and its screenshots, and
`docs/evidence/WO-038/host-qualification.md`.

**Known issues and carry-ins:** The shell and the board adopt the design
direction in the order that next touches them (candidate C1 stands); this
order is the reading's. The scene fills the viewport already (WO-015's
brief) and is judged at the operator's sizes by its own orders. This order
activates only on a launchpad whose starter carries core WO-221's `--draft`
form; the draft pull request and its workflow runs are a final-review
obligation read from `docs/evidence/WO-038/preview-pr.json`, never a
criterion. `Target release classification: minor` and `Target release
notes: reviewed` are set under WO-012's declared policy.

**Non-goals:** the shell's and the board's look (candidate C1); the scene's
layout; the search controls (WO-018); a fixed page width; the studies'
content.

**Operator-review assumptions:** the operator judges the first pair at
their sizes and ends the rounds in their own words, accepts that the 1440
and 360 layouts change only where a round decides, and reads the one draft
pull request before final review, which the final publish reuses.
