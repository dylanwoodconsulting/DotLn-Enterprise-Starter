# WO-038 — The first dedicated A/B testing pass: one operator-attended sitting in which the operator's eye-doctor rounds choose how the catalog's reading and its drawing use a 3840 by 1620 screen and the 2080 by 1460 centre window, how the `states` family draws (WO-023's deferred rounds, the register table against the state machine) and how the narrow register's headings break (WO-039's deferred judgment)

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** edits the catalog page's layout (`containers/catalog-page/`,
`layouts/catalog-layout/`), the reading composite
(`composites/concept-reading/`), the study composite (`composites/study/`,
`study-explanation/`), the study-visual families' sizing
(`study-visuals/motion`, `timeline`, `marbles`, `flow`, `states`, and
`relations` and `grid` as they exist at activation), the `states` family's
drawing as stream (b)'s rounds decide (`study-visuals/states/`, with the
state machine rebuilt from the launchpad's
`docs/evidence/WO-023/design/round-01/pair-source/` while its round is open)
and the narrow register's headings as stream (c)'s rounds decide
(`states-register.ts`, `drawn-text.ts`'s `breakWord`), the width tokens in
`libs/shared/ui/src/styles/_tokens.scss`, the visual baselines at the
operator's sizes in `apps/dotln-e2e/src/catalog.visual.spec.ts`, the label
sweep helper and the design record under `docs/evidence/WO-038/`, and the
documents (`catalog.md` §Reading and studying and §The families, the
design direction's reading sentence in WS-001); about 20 source files; adds
no runtime dependency, no page and no route. Removes the decided-against
candidate after each round. Wall-clock: about 6 h 0 min to 9 h 0 min of
executor work plus the operator's sitting and the fixed cycle (the
planner's estimate); the sitting runs as long as the operator needs, under
the kit's `accept-overrun` route (WS-001 rule 25); unknown until run.
Context bytes: the catalog page, the layout, the reading and study
composites, the families and `drawn-text.ts` (162 KB measured at the base),
`catalog.md`, WS-001 §Design direction and rules 24, 25 and 29, WO-019's
and WO-023's design records, WO-023-D008, WO-039-D011 and D015,
WO-028-D024 and its two screenshots, this order; about 320 KB for the
executor. Commands added in the target: none. Tokens: unknown until run.
Steps: 12. Re-mints: none. Refutations paid: this pass's receipt.
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
(D6). Opaque identifier, not a priority. Amended by the 2026-11-09 pass
([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D7):
the base moves to `eb9d227`; the order becomes the first dedicated A/B
testing pass of WS-001 rule 25, one operator-attended sitting whose rounds
choose (a) the reading and its drawing at the operator's full size, (b) the
`states` family's representation, WO-023-D008's deferred rounds
(`FUP-02c1ebe8146fe2f1`, the operator's direction of 2026-11-07, capture
SHA-256 `8bf3461a1ae5324956ec7f45fc12f4753977998ddf5f59cbf678c526042efc68`),
and (c) the narrow register's headings, WO-039-D011 and D015's deferred
judgment (`FUP-5af094bffcaf27ef`), each from its recorded first pair, with
the `accept-overrun` route for the sitting and no deferral route for its
rounds; the width check aims at the `68ch` literal and the grid's tracks
rather than the ten responsive breakpoints; the visual suite is named as
`npx nx e2e-visual dotln-e2e`; the criterion that preset the layout, the
one that failed label defects at 360, 768 and 1440 and the one with a
count as its subject are rewritten; the screenshots are cited in the
launchpad, the study count is corrected, and WO-024 and WO-035 are added by
reference.
**Depends on:** WO-019 merged (hard: the reading surface the twenty-two
rounds settled at 1440, which this order extends to the operator's sizes
without relitigating a decided round). WO-023 merged (hard: the `states`
family, the register table that ships and round 1's pair, whose state
machine is kept as source). WO-039 merged (hard: the narrow register's
interim heading rule that stream (c) starts from). WO-024 (reference-only,
sequenced ahead: the `relations` family, a sixth drawing the reading must
also size). WO-035 (reference-only, sequenced ahead: the same reading
templates, whose text arrives through the message system once it lands).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-019",
    "relation": "hard",
    "reason": "the catalog's reading surface, settled over twenty-two rounds at 1440 and 360, that this order extends to the operator's sizes"
  },
  {
    "workOrderId": "WO-023",
    "relation": "hard",
    "reason": "the states family, the register table that ships and round 1's pair whose state machine is kept as source for stream (b)"
  },
  {
    "workOrderId": "WO-039",
    "relation": "hard",
    "reason": "the narrow register's interim heading rule (WO-039-D011) that stream (c) starts from"
  },
  {
    "workOrderId": "WO-024",
    "relation": "reference-only",
    "reason": "sequenced ahead: the relations family, a sixth drawing the reading must also size"
  },
  {
    "workOrderId": "WO-035",
    "relation": "reference-only",
    "reason": "sequenced ahead: the same reading templates, whose text comes through the message system once WO-035 lands"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 21, 24, 25 and 29; §Design direction; G4 and G6);
`docs/operator/README.md` (§How the operator directs a session: design
comparisons; §What the operator wants: pages they would use);
`docs/repositories/dotln-angular.md` (§Registered gate); the target's
`docs/dev-reference/architecture/catalog.md` §Reading and studying and §The
families; the launchpad's `docs/evidence/WO-019/design/` (the rounds and
their picks), `docs/evidence/WO-023/design/` (round 1 of the `states`
family and the machine's source) and `docs/evidence/WO-039/narrow-register/`;
WO-023-D008 and WO-039-D011 and D015 in the target's
`docs/dotln/evidence/WO-023/decisions.md` and
`docs/dotln/evidence/WO-039/decisions.md`, and the register rows
`FUP-02c1ebe8146fe2f1` and `FUP-5af094bffcaf27ef`
(`npm run plan -- followups --show <id>`); WO-028-D024's screenshots
`docs/evidence/WO-028/walkthrough/ver001-14-study-opening-3840.png` and
`ver001-14-study-opening-2080.png` in the launchpad.

**Objective:** (the operator's session, WS-001 rule 24) this order is
operator-attended by design: during execution the operator sits through
one session of paired comparisons in three streams and chooses the outcome
of each. After it lands, the operator opens a study on their full screen,
3840 by 1620, or in the centre window they mostly use, about 2080 by 1460,
and the page uses the space as they chose it: the text keeps a measure
they can read, the drawing is large enough to read its labels without
leaning in, and the two sit in the relation the rounds picked, beside each
other or the drawing above the text at its full width; the contents column
and the shelf keep their place; nothing is a 686-pixel strip floating
between two empty fields. They open Unit of Work's study and step it, and
the `states` drawing is the representation they picked, register table or
state machine; on a phone, at 360, they open Record Set's study and, if the
register table stayed, its state headings break the way they picked. At 1440 and below the reading
stays as the twenty-two rounds of WO-019 settled it, unless a round here
decided otherwise and the decision says so. What the operator learns is
that the catalog reads well on the display they actually use and that the
rounds they delayed have been run; what they decide is whether the scene
and the board need the same pass, and which delayed rounds a later A/B
testing pass takes.

**Observed gap (dated 2026-11-09 at `eb9d227`):** measured by VER-001 of
WO-028 in the served production build at `55b59c9` (D024): at 3840 by 1620
the study column is 686 pixels wide from x 2271 to x 2957, with about 830
pixels empty to its left and about 880 to its right, and the drawing stays
686 by 248; at the centre window of 2080 by 1460 the same layout is
comfortable. No commit from `55b59c9` to `eb9d227` touches
`catalog-layout.scss`, `concept-reading.scss`, `catalog-page.scss` or
`study.scss`, so the layout stands: the reading's article is bounded by
`max-inline-size: 68ch` (`concept-reading.scss` line 6) inside the third
track of a grid of `minmax(10rem, 15%) minmax(12rem, 21%) minmax(0, 1fr)`
(`catalog-layout.scss` line 11), and the drawing's size is bounded by the
article's. The ten `max-width` media queries under
`libs/features/tools/src` are the narrow layouts' breakpoints at 600 and
1000 pixels, not the reading's limit. WO-019's rounds judged the reading at
1440 and 360 only, the sizes rule 25 named before the operator's direction
of 2026-11-04. The `states` family's rounds were deferred by the operator
on 2026-11-07 (WO-023-D008): round 1's pair, A the register table and B the
state machine, was rendered at about 2080 by 1460 and 360 on Unit of Work's
study at steps 2 and 4 and recorded without a pick; the register table
ships, and the machine's source is kept in the launchpad's
`docs/evidence/WO-023/design/round-01/pair-source/`. WO-039-D011 decided
the narrow register's headings as an interim rule (the largest size that
fits, a floor of two thirds, a hyphenated break into the fewest parts with
the longer part first, so Record Set's Unchanged reads Uncha- and nged), and
D011's follow-up and D015 left a dictionary break, one size per header,
foot-aligned headings, scaled line spacing and a glyph-measured fit to the
A/B testing pass. The catalog carries a hundred studies, ninety-six of them
drawn: motion 40 (with its timeline view), marbles 20, flow 20 and states
16, and four structural Patterns of Enterprise Application Architecture
studies without a drawing. `catalog.visual.spec.ts` holds baselines at 360,
768 and 1440 only, at a 900-pixel height, for the catalog, a marbles study
and a motion study, none for a `states` study; `npx nx e2e dotln-e2e`
ignores `*.visual.spec.ts` (`apps/dotln-e2e/playwright.config.mts` line 9),
and the visual suite runs as `npx nx e2e-visual dotln-e2e`.

**Design:**

- **One sitting, three streams.** This order is the first dedicated A/B
  testing pass that WS-001 rule 25 describes for rounds the operator
  delays, distinct from the rule-31 standards passes. It runs (a), then
  (b), then (c), the planner's order: (a) sets the width at which the
  `states` drawing is judged. Each stream follows rule 25: the pair rendered
  at about 2080 by 1460 and at 360, presented as A then B with the round
  named in the question and both captions; one independent variable per
  pair; the operator's preference makes the next pair; the rounds continue
  until the operator says that stream is done; content, usability and
  usefulness before cosmetic polish; the decisions file records each
  round's pair and pick; the rejected implementation leaves the code when
  its round is decided, with its screenshots and an implementation record
  under `docs/evidence/WO-038/design/`; a decided choice is not
  relitigated, and no comparison switch remains in the application. This
  order is where deferred rounds land: it records no pair without a pick
  and defers no stream again. The sitting is operator-attended by design,
  and when the operator says in ordinary language that it runs as long as
  it needs, the executor captures the words in ignored intake and records
  `npm run resume -- accept-overrun` with `--ceiling unlimited` for both
  metrics ahead of the dispatch bound's stop (rule 25).
- **The brief** (WS-001 rule 25 under §Design direction): the subject is
  the page; the text sits in a readable measure; a drawing is the study's
  main representation and reads at the size it is given; figures watched
  are instruments; the contents column stays beside the reading; motion only
  when something moves.
- **(a) The reading at full size.** The first pair. A: the reading's
  measure widens with the viewport to about 90ch at 2080 and the drawing
  scales to the column, so the page is one wider column; B: the measure
  stays 65ch to 70ch and, at widths from about 2080 up, the drawing moves
  beside the text into a second column that takes the remaining width, the
  explanations staying under the text. One variable, where the drawing's
  extra width comes from. Both rendered at about 2080 by 1460 and at 3840
  by 1620 (rule 25 as amended; rule 29), with 360 rendered to show the
  narrow layout unchanged. The contents column's width, the shelf at full
  width and the drawing's maximum size are the likely later variables. The
  1440 and 360 layouts change only where a round here decides it and says
  so.
- **(b) The `states` family.** WO-023-D008's round 1 is this stream's first
  pair: A the register table that ships; B the state machine, rebuilt onto
  the integrated base from the kept source, with the messages it needs
  (`tools.study.states.keyed`, `tools.study.states.keyedNote`,
  `studyCommon.states.machineCaption`). One variable, the representation.
  Rendered on Unit of Work's study (`poeaa:246`) at steps 2 and 4, as round
  1 was, at about 2080 by 1460 in the layout (a) decided, and at 360; round
  1's renders in the launchpad's `docs/evidence/WO-023/design/round-01/`
  date from before WO-039 changed the register, so the pair is rendered
  again at the integrated base.
- **(c) The narrow register's headings.** The first pair, from
  WO-039-D011's follow-up and D015: A the interim rule that ships; B a
  dictionary break, Record Set's Unchanged as Un- and changed. One
  variable, where a word breaks. Rendered on Record Set's study
  (`poeaa:452`) at 360, and at about 2080 by 1460, where the wide register
  draws every name whole and does not change. The later variables D011
  names are one size for every heading of a header, headings aligned to
  the foot of the header, line spacing that scales with the drawn size,
  and a fit by measured glyphs or a margin, which would also keep Data
  Mapper's bold headings inside their columns. B's break points are
  carried for the headings it breaks, apart from the prose sentences that
  name the state (D011's reason for rejecting a soft hyphen in the state's
  message), and add no hyphenation dependency. If (b)'s pick removes the
  register table, (c) closes with it and the decisions file says so.
- **The families.** Each family's drawing takes its width from its
  container and keeps its aspect and its label placement rules (WO-028's
  shared label placement and WO-034's marks), so a wider drawing is the same
  drawing larger. A label sweep at every size is the check that nothing
  clips or overprints: a new evidence helper,
  `docs/evidence/WO-038/label-sweep.mjs`, enumerates the current study
  inventory from `studies-summary.json`, drives each family's own controls
  (the motion and timeline slider, the marbles and flow steps, the `states`
  steps, the `relations` steps where that family has landed) and asserts
  that it visited every study, because VER-001's `label-sweep.mjs` in the
  launchpad's `docs/evidence/WO-028/ver-001/` enumerates `studies/aifg/`
  only and drives one slider; the historical script stays as it is.
- **Tokens.** What limits the reading becomes tokens in
  `libs/shared/ui/src/styles/_tokens.scss`: the measure
  (`--dotln-reading-measure`, replacing the `68ch` literal of
  `concept-reading.scss` line 6) and the grid's track sizes
  (`--dotln-reading-columns`, replacing the literal of
  `catalog-layout.scss` line 11), with any width a decided round adds, read
  by the page and the composites, never a magic number in a component (G4).
  The responsive breakpoints stay.
- **Baselines.** `catalog.visual.spec.ts` gains baselines at about 2080 by
  1460 and 3840 by 1620 for the shelf, a contents page, a reading with a
  motion study and Unit of Work's study, and Record Set's study at 360; the
  existing 360, 768 and 1440 baselines are unchanged unless a round decided
  otherwise, in which case they are regenerated with the decision named in
  the pull request.

Rejected: a fixed maximum page width (axis: G6, no fixed page width; the
operator reads on an ultrawide display); deciding a layout, a
representation or a break in planning (axis: rule 25, the look is chosen by
the operator's rounds, never defaulted); folding this into WO-035 (axis: a
migration with no visible change should stay one, and a design round should
not ride inside it); folding this into the shell and board look (candidate
C1, axis: different surfaces, and the reading is where the operator spends
their time today); running (b) and (c) in a pass of their own or deferring
them again (axis: rule 25 sends delayed rounds to a dedicated A/B testing
pass and this is it; one sitting pays the fixed cycle once and judges the
`states` drawing at the width (a) decides); a hyphenation table for (c)'s B
(axis: a new dependency, which WO-039-D011 rejected).

Live-run surfaces at the base: the catalog's reading with a hundred
studies, ninety-six of them drawn in the motion (with its timeline view),
marbles, flow and `states` families, and the `states` register's narrow
layout at 360; each exists at the base and is exercised by
`npx nx e2e dotln-e2e` (`catalog.spec.ts`).

**Deliverables:** the decided reading layout at the operator's sizes with
its tokens; the families' sizing; the decided `states` representation and
narrow headings; the label sweep helper and its run; the baselines;
`docs/evidence/WO-038/` with the design record (`design/comparisons.md`,
one section per stream, the rounds' screenshots and the implementation
records), `walkthrough.md` and its screenshots; the documents.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-038: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor
   eb9d227483e30164105da077f50673789d1e5c9f origin/main` exits 0 (the pin is
   WO-039's merge; a `main` that does not contain it stops for a planning
   pass); the target worktree then fast-forwards to the target's `main`, and
   that integrated commit is the baseline of every later comparison; then
   the route guard and activation as WO-005 step 1. Check: the decisions
   carry the integrated commit.
2. `libs/shared/ui/src/styles/_tokens.scss` gains `--dotln-reading-measure`
   and `--dotln-reading-columns` at their base values (`68ch` and the
   grid's three tracks); `concept-reading.scss` and `catalog-layout.scss`
   read them; each family's drawing takes its width from its container.
   Check:
   `npx nx test tools` exits 0, `grep -n "68ch"
   libs/features/tools/src/lib/composites/concept-reading/concept-reading.scss`
   prints nothing, and `npx nx e2e-visual dotln-e2e` passes with every
   baseline unchanged.
3. Stream (a): the first rendered pair at about 2080 by 1460 and 3840 by
   1620, with 360 rendered; the rounds until the operator says (a) is done;
   each decided round's rejected implementation removed with its record.
   Check: `docs/evidence/WO-038/design/comparisons.md` has (a)'s section
   naming round 1's pair, and the decisions file records the operator's
   word that ended (a) and names the decided layout.
4. Stream (b): the state machine rebuilt onto the integrated base in
   `libs/features/tools/src/lib/composites/study-visuals/states/` from the
   kept source; round 1 rendered on Unit of Work's study; the rounds until
   the operator says (b) is done; the rejected representation's files
   removed with their record. Check: `comparisons.md` has (b)'s section,
   the decisions file records the operator's word, and `ls` on each removed
   file prints nothing.
5. Stream (c): where the register table remains, the first pair rendered
   on Record Set's study in `states-register.ts` and `drawn-text.ts`; the
   rounds until the operator says (c) is done; the rejected rule removed
   with its record. Check: `comparisons.md` has (c)'s section and the
   decisions file records the operator's word, or the decisions file
   records that (c) closed with the register.
6. `docs/evidence/WO-038/label-sweep.mjs` (new): the sweep of the Design
   over the served production build at 360, 768, 1440, about 2080 by 1460
   and 3840 by 1620. Check: it reports every study of
   `studies-summary.json` visited, and its record lists each cut or
   overprinted frame with its size.
7. `apps/dotln-e2e/src/catalog.visual.spec.ts`: the baselines at the
   operator's sizes and Record Set's at 360; the existing ones unchanged or
   regenerated with the decision named. Check: `npx nx e2e-visual
   dotln-e2e` exits 0.
8. The walkthrough as WO-020 step 11, under `docs/evidence/WO-038/`, with
   screenshots at 360, 768, 1440, about 2080 by 1460 and 3840 by 1620.
   Check: the files exist.
9. Documents: `catalog.md` §Reading and studying (the layout at the
   operator's sizes and its tokens) and §The families (the `states`
   drawing and its narrow headings as decided). Check: `grep -n "2080"
   docs/dev-reference/architecture/catalog.md` prints the line in §Reading
   and studying.
10. Dependency check as WO-015 step 15; `npm run check:bundle`; gate plain
    and review. Check: passing rows, no tracked-byte mutation.
11. Launchpad write-back: WS-001 §Design direction's reading sentence and
    the delivery states; the decisions that end (b) and (c) are what settle
    `FUP-02c1ebe8146fe2f1` and `FUP-5af094bffcaf27ef`. Check: `npm run
    test:docs` in the launchpad order worktree.
12. The publish, review and records steps as WO-007 steps 15 to 17, with
    the branch `feat/first-ab-testing-pass`, the title `feat: lay out the
    reading for the operator's full screen and settle the states drawing
    and its narrow headings`, `docs/evidence/WO-038/` and
    `docs/final-reviews/WO-038/`; the final reviewer commits the order's
    records on the order branch before `npm run resume -- target-records`
    (the profile's publish route, step 3). Check: `npm run test:docs` in
    the launchpad order worktree.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run typecheck:e2e`,
`npm run lint:components`, `npm run check:bundle`, `npx nx e2e dotln-e2e`,
`npx nx e2e-visual dotln-e2e`; in the launchpad order worktree
`npm run test:docs`; then the target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served production build at 3840 by 1620 and at about 2080 by
   1460: open the shelf, a contents page and three readings with studies in
   three different families, one of them Unit of Work's; read each study's
   text and drawing and step its drawing; then, at 360, open Record Set's
   study and step it. The VER report carries a `## Walkthrough` section
   with the dated steps and screenshots at 360, 768, 1440, about 2080 by
   1460 and 3840 by 1620 under `docs/evidence/WO-038/walkthrough/`, and
   states in the verifier's own words whether each drawing's labels read at
   the operator's sizes without leaning in, whether the page uses the
   screen, and how the `states` drawing and its narrow headings read. A UI
   issue at about 2080 by 1460 or 3840 by 1620 fails the order; one at 360,
   768 or 1440 is a boarded follow-up the report names (rule 29). Met only
   when every step completed and that statement is present.
2. `docs/evidence/WO-038/design/comparisons.md` records (a)'s first pair (A
   the wider column, B the drawing beside the text), each rendered at about
   2080 by 1460 and 3840 by 1620 with 360, and every later round with its
   pick; the decisions file records the operator's word that ended (a) and
   names the decided layout, and the evidence README records the reading
   column's, the gutters' and the drawing's measured widths at both sizes
   in that layout; the decisions file names each removed candidate's files
   and `ls` on each prints nothing; no decided round of WO-019 is reversed
   without a round here that says so.
3. `comparisons.md` records (b)'s round 1 (A the register table, B the
   state machine) rendered on Unit of Work's study at about 2080 by 1460 and
   360, and every later round with its pick; the decisions file records the
   operator's word that ended (b), names the removed representation's files,
   and `ls` on each prints nothing.
4. `comparisons.md` records (c)'s first pair (A WO-039-D011's interim rule,
   B a dictionary break for Record Set's Unchanged) rendered on Record Set's
   study at 360 and about 2080 by 1460, and every later round with its pick,
   and the decisions file records the operator's word that ended (c) and
   names the removed rule's files, `ls` on each printing nothing; or, where
   (b)'s pick removed the register table, the decisions file records that
   (c) closed with it.
5. The order's label sweep helper, enumerating every study of
   `studies-summary.json` and driving each family's controls, reports every
   study visited; no frame is cut or overprinted at about 2080 by 1460 or
   3840 by 1620; each cut or overprinted frame it reads at 360, 768 or 1440
   is named in the decisions file with its boarded follow-up (rule 29); the
   helper and its run are in `docs/evidence/WO-038/`.
6. `npx nx e2e-visual dotln-e2e` exits 0 with `catalog.visual.spec.ts`
   carrying baselines at about 2080 by 1460 and 3840 by 1620 for the shelf,
   a contents page, a reading with a motion study and Unit of Work's study,
   and Record Set's study at 360; the 360, 768 and 1440 baselines are
   unchanged from the integrated base, or changed with the round that
   decided it named in the decisions file and the pull request.
7. `grep -n "68ch"
   libs/features/tools/src/lib/composites/concept-reading/concept-reading.scss`
   prints nothing; `grep -n -- "--dotln-reading-measure"` prints a line in
   `libs/shared/ui/src/styles/_tokens.scss` and in `concept-reading.scss`,
   and `grep -n -- "--dotln-reading-columns"` prints a line in
   `_tokens.scss` and in
   `libs/features/tools/src/lib/layouts/catalog-layout/catalog-layout.scss`;
   `npm run check:bundle` passes and `package.json`'s `dependencies` keys
   equal the integrated base's.
8. `node scripts/target-gate.mjs WO-038 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight
   line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-038/README.md`,
`design/`, `label-sweep.mjs` and its run, `walkthrough.md` and its
screenshots, and `docs/evidence/WO-038/host-qualification.md`.

**Known issues and carry-ins:** The order is operator-attended by design:
the rounds are the operator's and no criterion is met without their word.
If a stream's rounds have not ended when the executor would hand off, the
executor does not hand off; it records the rounds so far in
`comparisons.md` and the decisions file and stops for the operator, and
the next dispatch resumes the sitting from the last round. This pass
allocates `FUP-02c1ebe8146fe2f1` and `FUP-5af094bffcaf27ef` to this order
(rule 25). It is sequenced after WO-024 and WO-035 and takes the reading,
its templates and the families as they stand at activation, `relations`
among them where WO-024 has landed it. WO-039-D011's 25 permitted frames at
360 belong to its interim rule; (c)'s pick replaces that rule. The shell
and the board adopt the design direction in the order that next touches
them (candidate C1 stands); this order is the reading's. The scene fills
the viewport already (WO-015's brief) and is judged at the operator's sizes
by its own orders. This order activates only on a launchpad whose starter
carries core WO-221's `--draft` form; the draft pull request and its
workflow runs are a final-review obligation read from
`docs/evidence/WO-038/preview-pr.json`, never a criterion. Before
`target-records`, the final reviewer commits the order's records on the
order branch so the launchpad commit the filed records' footer names holds
them (the profile's publish route, step 3; since starter v0.122.0 the
filing refuses a source that is uncommitted at the launchpad's `HEAD`).
`Target release classification: minor` and `Target release notes:
reviewed` are set under WO-012's declared policy.

**Non-goals:** the shell's and the board's look (candidate C1); the scene's
layout; the search controls (WO-018); a fixed page width; the studies'
content; the `relations` and `grid` families' representations (their own
orders' rounds); deferring a stream's rounds again.

**Operator-review assumptions:** the operator attends the sitting, judges
each stream's pairs at their sizes and ends each stream's rounds in their
own words; says in ordinary language whether the sitting runs as long as it
needs, which the executor records through the `accept-overrun` route;
accepts that the 1440 and 360 layouts change only where a round decides;
and reads the one draft pull request before final review, which the final
publish reuses.
