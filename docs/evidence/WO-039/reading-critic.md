# WO-039 reading critic: the narrow register's headings

2026-11-08. One Claude `dotln-worker` launch (`claude-opus-5-5`, `xhigh`), read-only, judged the
rendering the narrow-heading decision changes, as the order's step 7 asks where a rendering
changes. It read the twelve frames in [narrow-register/](narrow-register/) (base and candidate
builds of Service Layer, Data Transfer Object and Record Set at 360 pixels, at the first step and at
a step where an object moves), the real-glyph measurements
[narrow-register-before.json](narrow-register-before.json) and
[narrow-register-after.json](narrow-register-after.json), and the drawing code
(`states-register.ts`, `drawn-text.ts`, `states-drawing.ts`, `states.scss`). It edited nothing and
ran no test or gate. Its report follows, with absolute local paths shortened to repository paths,
then the executor's disposition of each finding.

## The critic's report

**Verdict.** Yes: the decided rendering reads better than the base at 360 and should stand as the
interim rule. In the base, "Announced" (6.16 px) and "Accepted" (6.93 px) are below the size a phone
can read, and "Refused", "Encoded" and "Unchanged" (about 7.9 px) take effort. In the candidate every
changed name can be read at a glance, at 9.24 to 11.95 px, with no real-glyph overflow and no other
study touched. Nothing found blocks the decision.

1. **Record Set's "Uncha-" / "nged"** (`record-set-step0-candidate.png`, `record-set-step4-candidate.png`;
   worth changing in this order). The break falls inside the root "change", so "nged" is an
   unpronounceable fragment the reader has to rebuild. The prefix break "Un-" / "changed" fits the
   column at the floor and would draw at about 10.25 px. Proposed: break at the dictionary point
   when its parts fit, else the even split, longest part first, through a soft hyphen in the
   state's message or hyphenation patterns; if the order does not take on per-word break points,
   move it to the A/B pass.
2. **The other four breaks** ("Annou-/nced", "Acce-/pted", "Refu-/sed", "Enco-/ded"; a note for the
   A/B pass). Each reads as its word and none as another; "Annou-/nced" cannot do better in a
   40-unit column, and the dictionary breaks of the others read no clearer. Keep them.
3. **Mixed sizes in one header** (a note for the A/B pass). A broken word drawn at the largest size
   that fits sits beside an unbroken neighbour just above the floor ("Acce-/pted" at 11.08 px beside
   "Stored" at 9.24 px). Drawing broken words at the floor instead would make them the smallest text
   in their headers to cure an inconsistency a reader cannot see; sizes already vary column by
   column in the base and in untouched studies. Keep the largest size that fits; one size per header
   is the A/B redraw's question.
4. **Header growth and line spacing** (a note for the A/B pass). Service Layer's and Record Set's
   headers gain one line; rows, tokens, arrows and labels move down together and nothing collides.
   Single-line headings stay top-aligned, leaving a band below them, and line spacing stays at 19
   units at every size, so a small broken word's two lines sit loosely. Proposed for the A/B pass:
   bottom-align headings and scale the line spacing with the drawn size.
5. **Crowding** (a note for the A/B pass). "Uncha-" at 11.95 px nearly fills its column; the fit uses
   the per-character estimate, which already lets Data Mapper's bold "Mapped" and "Unmapped" cross
   their rules by 0.15 and 0.17 units in both builds, not caused by this change. Proposed for the A/B
   pass: fit by measured glyphs or keep a margin.

**Question 5, whether any other study changed at 360.** No. Both measurement files hold sixteen
studies at 360 with no page errors; only Service Layer (poeaa:226), Data Transfer Object (poeaa:363)
and Record Set (poeaa:452) changed their headings, and the other thirteen match in every field but
the measurement time. In the three, the smallest heading moved from 6.16 to 9.24 px, 7.92 to
9.24 px and 7.97 to 8.97 px, and Service Layer's note room by a 0.01-unit rounding difference. The
critic noted two limits: the heading lists are read at the first step only while overflow is the
largest over every step, and the files do not measure the wide layout.

## Dispositions

| Finding | Disposition |
| --- | --- |
| 1, "Uncha-/nged" | Moved to the dedicated A/B testing pass that redraws the states family (`FUP-02c1ebe8146fe2f1`), as the critic allows. A dictionary break needs either authored break points, a soft hyphen in the state's message that every prose sentence naming the state would then carry (changing text nodes outside the narrow-register frames, which criterion 3 forbids), or a hyphenation table, a new dependency the order's cost excludes. Recorded in the narrow-heading decision. |
| 2, the other four breaks | Kept, as the critic advises. |
| 3, mixed sizes | Kept at the largest size that fits, as the critic advises; one size per header goes to the A/B pass with finding 1. |
| 4, header growth and spacing | Noted for the A/B pass. |
| 5, crowding | Noted for the A/B pass; Data Mapper's sub-pixel crossing is unchanged by this order and recorded in the evidence README. |
| Question 5's limits | The wide layout is now measured on both builds at 1440 ([before](wide-register-before.json), [after](wide-register-after.json)): every field of all sixteen studies is equal. The production crawl ([dom-diff.json](dom-diff.json)) compares every frame's text at 1440 and 360, every step. |
