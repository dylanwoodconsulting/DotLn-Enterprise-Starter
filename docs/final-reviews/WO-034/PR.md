# Reshape the first twenty movement studies' code into the example to copy

The first movement batch's twenty presentation modules were split to fit the 80-line function guard, and the variables their pieces shared became positional parameters: seventeen functions took eight to twelve of them, parameter types were written inline or borrowed from another function's return type, four modules spelled one number format at 256 call sites, and the batch's messages used placeholders named `value1`, `value2` and so on. This change reshapes those modules so a colleague can read any of them top to bottom and copy what they read, with every frame, word and number on screen unchanged except in Obstacle and wall avoidance, which now says what its default run shows. It also repairs three marks in the shared motion drawing, tightens the study guards, trims the work catalogs and rewords the stream messages that opened with a count.

## What changed

The six commits can be read one at a time, and each passes the Tools unit suite on its own.

- **The motion drawing.** A guide from a body to a displaced name ends where the line meets the name's box instead of running behind the text; a vector too short to carry an arrowhead is not drawn, so a stopped body shows no stray tick; and the room a name needs follows the font size the drawing's media query selects, so a wide drawing keeps a name that fits in its authored place. Three browser regressions, one per rule, fail on the previous drawing and pass here.
- **The reshape.** Each presentation module describes its run and its frames once, in named interfaces beside the functions that read them, and every function takes the translator, the example, one sample, a description or a selection: at most four parameters. `studies/number-format.ts` binds each study's authored precision, near-zero threshold and negative-zero handling once, replacing the hand-spelled formats. The batch's 1,251 messages nest by study and part (`studyAifg.<slug>.model.<part>.<name>`) with named placeholders. The 80-line ceiling still holds without a split made for it, and no lint rule was added or lowered; 23 functions of 70 lines or more were each read and judged to do one job. The catalog architecture and the catalog rules describe this shape as the one a presentation module has.
- **Obstacle and wall avoidance.** Its default ray reaches the wall on two of 81 frames and seeking the offset delivery does most of the turning. A bounded search of 945 parameter sets found no honest default in which the avoidance does the turning, so the study now says what its run shows: "Ray misses again" replaces "Turning along the wall", the comparison keeps the run and shortens the ray to one unit, which never hits and lets the body clip the wall's end by 0.08 units where the nine-unit ray clears it by 0.12, and the limits state the 0.74 units of overlap that offered rays of 10 to 12 reach. The simulation is unchanged, and the study's factual and reading critics reviewed the revision.
- **Catalogs and wording.** Each work's title catalog keeps only the titles that records and nearby links name, twelve messaging keys that only specs read move beside those specs, and an unread wander key goes; a first AI for Games reading's study assets fall from 185,788 to 178,607 bytes gzipped. In the RxJS and messaging studies, 29 messages that opened with a placeholder now open with a word. The marble test helper takes named `translate` and `descriptions` options, so a spec whose displayed words differ from the raw payloads says so, and a translator's identity no longer decides which assertions run.
- **The study guard.** The model test wraps every resolved message in brackets and fails on letters outside them, and on a string parameter with letters that did not come from the translator unless it is a declared machine value: a marble symbol in its message fields or the process manager's order id.
- **The workspace tools.** The board count, the script-reference check and the title helper gain JSDoc for what each function takes and returns. No statement changes.

## Validation

- The registered review gate (install, lint, e2e type check, unit tests, format, build, browser and visual tests) passed on the reviewed tree with no tracked-byte change, after the plain gate and the full preflight.
- A production crawl of every frame of the forty movement studies, 6,950 frame and view rows per build, found the rendered text and accessible labels identical at the base and at this tree, apart from the 162 rows of Obstacle and wall avoidance. An independent verification repeated that crawl on its own builds with the same result and compared all forty movement models over 302 default and boundary input cases: the other thirty-nine are identical in every field.
- The label sweep reads no clipped or overprinted name on any of 17,375 frames of both movement batches at 360, 768, 1440, 2080×1460 and 3840×1620.
- The model test fails on copies carrying a literal appended to a resolved message, one prepended, and a literal message parameter in each movement batch, and passes on this tree. `eslint --print-config` on a study source resolves the 80-line rule at error.
- The workspace tools' own tests, unchanged, pass 92 of 92.
- On the draft, CI's `checks` and `visual` jobs and the title workflow passed. The draft head's tree is the reviewed tree.

## Review

The final review read the whole diff, read two modules top to bottom, one of them drawn at random, and the three tools, and stepped Obstacle and wall avoidance through both runs in its own production build at five sizes, with the same frame data as the verification's walkthrough. It reproduced the shape audit, the lint resolution, the catalog checks and the tool tests, and ran the Tools unit suite on each commit. It made no source change. The draft had no review, comment or thread.

## Limits and follow-ups

None of these changes an output, and none blocks the change. Each is recorded for the next standards pass over the movement or stream code.

- Eleven placeholders in nine modules are named for a step count but carry seconds, such as `{{step}}` in "Nia's next update at {{step}} s".
- Formation pattern interface and Group movement build their drawing bounds inline instead of with the shared `motionPoints`.
- Obstacle and wall avoidance's comparison chart draws both clearance traces on one axis about twelve units tall, where the 0.2-unit difference reads as one line; the findings under it carry the numbers. With the delivery straight ahead, its moment buttons run out of time order.
- Nineteen messaging flow states now read as labels, such as `Records: 1`, and the text alternative composes them as "Work queue: Records: 1".
- The drawing reads its narrow-screen query from `globalThis.matchMedia` rather than the injected document the rest of the workspace uses, and repeats the chart text's breakpoint and font sizes; nine name keys join a word and an id (`names.escortNamelantern`); four value maps trim numbers by hand beside the formatter's trim option.
- Browser checks ran in Chromium only.
