# Add the second batch of movement concept studies

## Summary

AI for Games gains twenty more studied concepts from its Movement chapter, forty in all and eighty across the catalog: Steering behaviors, Projectile trajectory, Variable matching, Jump points, Motor control, Movement in the third dimension, Flee, Collision avoidance, Obstacle and wall avoidance, Corner trap, Blending versus arbitration, Actuator, The firing solution, Iterative targeting, Coordinated movement, Two-and-a-half dimensions, Steering output, Kinematic arrive, Satisfaction radius and Kinematic wander. Each explains one idea on one example: the idea and a situation it serves, a drawing the reader steps with a sentence for every moment, a chart where something changes over time, ordinary pseudocode, an executable model with a spec beside it, public implementations, the book as the reference, the limits with a visible failure, and the nearby concepts as links.

The change also moves every study's text into the message system, which the owner directed during review and included in this change. All eighty studies, these twenty and the sixty already merged, now hold message keys in a new `concept-study-v1` record, and their English lives in catalogs that load with the work a reader opens. The shipped `concept-study-v0` schema is unchanged. Each of the forty movement models is now a simulation that knows no language, a presentation that receives a translator, and an entry of a few lines that composes them.

The three commits follow that order: the twenty studies, the migration, and three small repairs from the final review.

What carries this:

- **The twenty studies.** Twelve call the scene engine for the behaviour they teach, among them `flee`, `avoid`, `seek`, `matchVelocity`, `blend`, `firstActive` and the formation functions, with a local step around it; eight are local, such as the projectile rows and the kinematic rows. Each record says which. All twenty name an executable TypeScript module, and its spec drives the model through the record's own example.
- **Names placed apart from points.** The shared `motion` drawing now places each name independently of its physical point: above its anchor when there is room, otherwise in the nearest clear row or gap with a thin guide back. Across both movement batches no label is cut or overprinted on any frame at 360, 768, 1440, 2080 or 3840 pixels.
- **Message catalogs.** `MessageCatalog`, new in the i18n library and provided at the Tools route, loads a scope on demand and returns a translator bound to the language it loaded. The shelf and the board load no study catalog; a reading loads the small shared catalog and its own work's. A failed load reaches the existing failure state with Try again, and a load a later reading overtook cannot replace it.
- **Models in three parts.** A movement simulation keeps each step's calculation with the state it produced, so labels, worked arithmetic and charts read the result that advanced the run. The translator is a presentation dependency only, and changing language cannot change physics or a stream's values. Stream studies keep their raw payloads and describe them with message descriptors; marble lanes resolve by stable id, so two lanes may translate to the same label.
- **Checks.** `npm run i18n:check` now reads the records and the model sources and refuses presentation text that is not a message. The model suite runs every model through a marking translator at its example and at both ends of every input, and fails on a visible string no message produced. ESLint caps a function in the study sources at 80 lines. `npm run studies:check` validates the v1 record, requires every key to resolve and reads the English for its semantic checks.
- **Documents.** The catalog architecture, the catalog and foundation rules, the conventions and the script reference describe the catalogs, the model's three parts and the checks. The author and critic guidance now says a reused example grants no exemption from the house rules.

No runtime dependency changes. The production initial bundle is 406,485 bytes, 653 more than before the migration, with no catalog, study or Tools module in the initial graph. The record chunks are 135,351 bytes for AI for Games, 87,341 for messaging and 76,230 for RxJS, and their prose is served as message assets beside them.

## Validation

The declared review gate (install, lint, e2e type check, unit tests, format, build, e2e and visual) passed on the reviewed tree with no tracked-byte mutation, and on the tree of each earlier commit in the series. The Tools suite passes uncached at 105 files and 963 tests. The record check reads 80 records with no problem.

An independent verifier performed the owner's reading session in the served production build at five widths through an isolated browser: AI for Games counted forty studied, Collision avoidance stepped with its time to closest approach named at each moment and its pseudocode, executable model and limits opened, Flee opened from the contents, Obstacle and wall avoidance stepped and its Corner trap link followed, Projectile trajectory stepped to its landing and The firing solution read to its limits. The final review repeated that session on the reviewed sources with the same text at every step.

The verifier also compared the migrated studies with the tree before the migration. Every one of the 962 movement model runs matches exactly, at the example and at every value of every input. In the browser, 7,378 of 7,523 frames across all eighty studies are identical in reader text, drawing text and geometry, all 6,950 AI for Games frames among them. The other 145 are stream frames that differ only in 48 narration messages, which now write a computed count as a digit. With every catalog value marked, no visible text with letters sits outside a message on any frame.

On the draft, CI's `visual` and `title` jobs passed and `checks` failed once: one model sweep from the first movement batch was stopped at Vitest's default of five seconds on the hosted runner. This change did not slow it. The same sweeps take 1.3 to 1.8 seconds before the migration and 1.3 to 1.9 seconds after on a workstation, and the runner takes about three times as long, so `main` was exposed to the same failure. The Tools project now sets a 20-second timeout with a comment naming the case, and the jobs run again on this head.

## Review

The final review read the message catalog, loader and translator, the record and model contracts, the facade and mapper, the schema, both new checks and the lint rule, the changed templates and every changed document, and read Formation pattern interface and Collision avoidance across their three parts. It measured every study source for function size, parameter count and message naming, and made three repairs:

- Formation pattern interface's slot readout named its escorts by machine id. No prose reads that value, so nothing reached the page, and it now takes each name from its display message, with a spec case that fails on the old code.
- The 80-line rule's file glob matched only from the workspace root, so an editor or a direct `eslint` run skipped it. It now matches from a project's own configuration too.
- The test timeout described above.

It found one thing it did not repair. In the first movement batch's twenty presentation modules, long functions were cut to fit the 80-line cap and the variables their pieces had shared became positional parameters: 17 functions take eight to twelve, 38 sit between 70 and 80 lines, and their messages are keyed flat with 94 placeholders named `value1`, `value2` and so on. The second batch's presentations, the simulations and the stream studies do not share this. Outputs are unchanged and the conventions this change adds already say the cap is not a target for splitting, so the owner chose to take this change as it is and have those twenty modules reshaped next, before another movement batch is authored.

The pull request had no threads or reviews.

## Limits and follow-ups

None of these blocks the change.

- The first batch's presentation modules need the reshape described above. The 176-case output comparison and the frame comparison made for this change are its acceptance instruments.
- A message catalog that answers but lacks a study's keys shows the raw keys with no failure state. Catalogs and code ship together and the app has no deployment with cached assets, so nothing reaches this today.
- A first AI for Games reading transfers about 186 kB gzipped where it transferred about 102 kB, because one catalog holds the narration of all forty models and all 768 of the work's titles. Later readings in the work fetch no catalog.
- In fifteen stream studies, 17 narration outputs now open a sentence or a label with a digit, such as a button reading `2 results`.
- The study guards pass two forms: a literal appended to a resolved message, and a literal passed as a message parameter.
- In Obstacle and wall avoidance the ray acts on two of 81 frames, so most of the visible turn is the pull to the delivery point; its caption overstates the avoidance.
- Only English exists. The marking translator proves the routing, and a second language's word order and longer labels are untested. Browser checks ran in Chromium only.
- The next batch to publish integrates `main` and rewrites `studies-summary.json` with `npm run studies:check -- --write-summary`.
