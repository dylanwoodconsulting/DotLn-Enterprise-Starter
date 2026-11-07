## Release overview

The first twenty movement studies in AI for Games now have code a colleague can read top to bottom and copy. Each study's presentation describes its example's run and frames once, in named types, and every function takes the translator, the example, a sample or one of those descriptions: at most four parameters, where the longest took twelve. One shared formatter keeps each study's authored rounding, and the studies' 1,251 messages nest by study and part, with named placeholders instead of `value1`, `value2` and so on. A reader sees the same frames, words and numbers as before, except in Obstacle and wall avoidance, which now says what its default run shows.

## Read before upgrading

Nothing needs doing: no route, dependency, configuration, stored record or public interface changes, and the movement simulations and stream payloads are unchanged. Two things read differently. Obstacle and wall avoidance has a new caption, moments, comparison and limits (below). In the RxJS and messaging studies, 29 messages that opened with a computed count or a placeholder now open with a word, so a button that read `2 results` reads `Results: 2`.

## Substantive changes

**The motion drawing.** A guide from a body to a displaced name now ends at the edge of the name instead of running behind the text. A vector too short to carry an arrowhead is no longer drawn, so a stopped body shows no stray tick. The room a name needs follows the font size in use, so a wide drawing keeps a name that fits in its authored place. Across both movement batches no name is cut or overprinted on any frame at 360, 768, 1440, 2080×1460 or 3840×1620.

**Obstacle and wall avoidance.** Its default ray reaches the wall on two of 81 frames, and seeking the offset delivery does most of the turning, so the study now says so. "Ray misses again" replaces "Turning along the wall". The comparison keeps the run and shortens the ray to one unit: that ray never hits, and the body clips the wall's end by 0.08 units where the nine-unit ray clears it by 0.12. The limits state the 0.74 units of overlap that offered rays of 10 to 12 reach. The simulation is unchanged.

**The study guards.** The model test now refuses a word written next to a translated message and a literal word passed into one as a parameter, apart from declared machine values such as a marble symbol.

**Catalogs and wording.** Each work's title catalog keeps only the titles that records and nearby links name: 89 of 768 for AI for Games, 66 of 288 for the messaging patterns and 89 of 742 for RxJS. Messaging text that only tests read moves into those tests. A first AI for Games reading's study assets fall from 185,788 to 178,607 bytes gzipped. In the RxJS and messaging studies, the 29 messages that led with a count or another placeholder now lead with a word, for example "There are now 3 photos waiting".

## Progressive polish

The marble test helper names its translation and description options instead of switching on which translator it was given. The workspace's board count, script-reference check and pull-request title helper gain JSDoc saying what each function takes and returns; their behavior and tests are unchanged.

## Evidence and compatibility

Built on `v0.10.1` (`d7d842d`) with no dependency, Node or Angular change. A production crawl of every frame of the forty movement studies, 6,950 frame and view rows per build, finds the text at the base and at this release identical outside Obstacle and wall avoidance. A comparison of all forty movement models over 302 default and boundary input cases finds the other thirty-nine identical in every field. The three drawing regressions fail on the base and pass here, and four literal injections fail the model test. The registered review gate (install, lint, type check, unit tests, format, build, browser and visual tests) passed on the reviewed tree, and CI's checks, visual and title jobs passed on it. Known limits: Obstacle and wall avoidance's comparison chart draws both clearance traces on one tall axis, where they read as one line, and with the delivery straight ahead its moment buttons run out of time order; eleven placeholders named for a step carry seconds; and the messaging studies' text alternative reads a relabelled state as, for example, "Work queue: Records: 1". Browser checks ran in Chromium only.
