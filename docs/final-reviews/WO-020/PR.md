# Add concept studies for the movement tools and the study record

## Summary

A reader of AI for Games can now study its twenty movement concepts, the sixteen the soldier scene runs and four more from the same chapter, instead of reading their mined definitions alone. The shelf and the Tools home say the work has twenty studied concepts, Chapter 3's contents mark them, a chosen work lists them, and each reading has an address of its own, so Back and a shared link return to it and the home opens without loading any work's data.

Under each definition sits a study written for this app on one named example: the idea and a situation it serves, a drawing stepped by hand or played on command with a sentence that says what it shows, a chart of what changes over time behind a Movement and Chart switch, sliders that rerun the example with another input and a way back, ordinary pseudocode read top to bottom with the worked numbers of the selected moment, an RxJS reading labelled illustrative or executable from the record, public implementations introduced on their own terms, references with the claim each supports, the limits with a second run that shows a failure, the nearby concepts as links and the work's next study. Nothing moves until the reader asks, Play is withheld under reduced motion, and the drawing's full text is its accessible name.

What carries this, and what the next batches reuse:

- **The record.** One checked JSON file per study under `libs/shared/catalog/src/studies/aifg/` (one directory per work), validated by the closed `concept-study-v0` schema in `libs/shared/catalog/src/schema/`, loaded lazily per work beside the tool data so a regenerated join never touches a study, and summarised in `studies-summary.json` for the shelf, the contents and the home. A change to the record's shape is a new schema version.
- **The check.** `npm run studies:check`, inside `check:fixtures`, validates every record against the schema and the catalog, requires two different reviewers and a model with a spec beside it, matches each mechanism step to a block of pseudocode, keeps the summary current and refuses a work chunk that would not load a record. `npm run studies:report` prints coverage per work and `npm run studies:links` opens every cited address; the gates never reach the network.
- **The families.** `motion` draws bodies, vectors, zones, links and marks over frames; `timeline` draws series over time with the moment marked, or a still chart; a scrubber and an inputs block are shared. Geometry derives from the model in pure drawing modules with their own specs.
- **The models.** One pure function per drawn study from the record's parameters to the run, calling the scene engine's steering, blending, formation and slot-assignment functions where it has the behaviour, so the study explains what runs. The engine gains public exports and no behaviour change. Arrive keeps its study-local step and the numbers its spec always asserted.
- **The reading.** `catalog/:toolId` in the Tools routes, the catalog page bound to it, real addresses on every reading link, the `studied` facet, the studied marks and list, and a Tools home facade that reads the two summaries and the stored history.

Twenty records were written by ten authors, read by a factual critic who opened every one of the 31 cited addresses and a reading critic who read each study as the owner would, and reviewed by three independent reviewers whose seventeen findings were fixed or recorded. The hand-wired Arrive example is removed with its translations; its content is the Arrive record and model. No runtime dependency is added.

## Validation

The declared review gate (install, lint, e2e type check, unit tests, format, build, e2e and visual) passed on this tree with no tracked-byte mutation, after the Preflight commands. Its test, build and e2e rows read Nx's cache of the sequence that ran them on the same tree; lint, format and the visual suite ran live. CI ran the same tree from a clean checkout on the draft, and `checks`, `visual` and `title` passed. The production initial bundle is 399,297 bytes, 1.08 kB over the base, with the records, the models and the study code in lazy chunks.

An independent verifier performed the reading session in the served production build at 360, 768 and 1440 pixels, with 48 screenshots and no page error or overflow: the counts, the marks, Flocking stepped and played, its pseudocode and RxJS reading, a reference opened, a nearby concept followed and returned from, the scene link and Back, three more studies, and a shared link opened in a new tab. The verifier also ran all twenty models over 168 default, endpoint and combined-input cases, the Tools, Catalog and Core suites uncached, the 66 tooling tests with sixteen more malformed-record variations, the failure paths in the browser and axe at the board's threshold on the fully expanded Flocking study.

## Review

The final review read the whole diff, including the twenty records and the twenty model modules with their specs, compared Arrive's migrated assertions with the deleted spec line for line, reran the literal criterion commands and greps, confirmed the reviewed commit's tree is the gate's and the draft's, and read the pull request's checks and threads. It changed no byte of the target.

## Limits and follow-ups

None of these blocks the change, and each is recorded with its owner.

- The study model requires motion frames for every family, and the mapper ignores the record's family; the RxJS batch, which adds the first family without frames, discriminates the model by family first. All twenty records here use `motion` with `timeline` as the companion chart.
- Three small repairs are boarded for the first batch that edits their files: the study check reports a named file that does not parse with a raw JSON error rather than its own failure line; the explanation component holds an unused computed; the root README's menu table does not yet name the reading route and the studied concepts, which `docs/dev-reference/architecture/sub-apps.md` does.
- The book's DOI answers automated clients 403 behind the redirect from `doi.org`; a real browser reaches the publisher's page, and the citation stands as the canonical one. A reference that stops resolving after this merges is a content defect the next batch's link check reports.
- The reduced-motion preference withdraws Play and stops a running example; stepping, inputs and the chart remain. The three new study visual baselines and the three updated catalog baselines are the visual suite's captures on this tree, compared again by the gate and by CI.
