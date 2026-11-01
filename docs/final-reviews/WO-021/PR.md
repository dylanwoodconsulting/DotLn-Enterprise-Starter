# Add RxJS concept studies with executable marble examples

## Summary

A reader of the RxJS work can now study twenty of its operators and subjects, the ones most related to the rest of the work, instead of reading their mined definitions alone: switchMap, concatMap, mergeMap, exhaustMap, scan, combineLatest, startWith, share, shareReplay, Subject, BehaviorSubject, ReplaySubject, catchError, retry, repeat, timeout, finalize, takeUntil, materialize and observeOn. The shelf and the Tools home count them, a chosen work lists them, and each has an address of its own.

Each study explains one concept on one worked example: the idea and a situation it serves, a marble diagram stepped frame by frame or played on command, a text equivalent that names each emission, ordinary pseudocode with the worked frames, the code, where the app uses the operator if it does, public uses, references, the limits and the nearby operators as links. share and shareReplay run the same streams, so the two can be opened side by side and differ at one frame. Subject, BehaviorSubject and ReplaySubject read as three memories, and catchError and retry as two answers to an error.

The code a study shows is the code that ran. Each study's module exports its marble strings and its pipeline; a spec beside it runs them under the TestScheduler; the drawing is built from the same module. A study labels its code executable and names that spec, and no study needed the illustrative exception the rule allows.

What carries this:

- **The `marbles` family.** Input streams and the streams an operator opens above the operator's band, outputs below, time left to right with every frame numbered and every frame a step. A cut-off lane ends in a small hollow ring, a cross is an error, and what nothing received is not drawn. A diagram opens on its last frame, the whole run, and an output lane shows only what has been emitted by the selected frame, so stepping back or pressing Play watches each value arrive. Under a reduced-motion preference nothing glides or animates, Play is not offered and the stepping is the same. The owner chose the look over fifteen rendered comparisons.
- **The shared module and its helper.** `studies/rxjs/marbles.ts` builds the drawing's model from an example with the TestScheduler's own parser, so a frame in the drawing is a frame in the test. `expectMarbleExample` asserts every output's marbles and subscriptions, then holds what the model draws as delivered on each output to what the run delivered, frame for frame.
- **The study model, discriminated by family.** `study-model.ts` separates what every family shares from the drawing payload, and the mapper, playback and the study composite read the shared moments through `ticksOf`. The twenty movement models take `family: 'motion'` and a type rename, with no change to their arithmetic. The next family without motion frames needs no change here.
- **The record check.** For an executable RxJS reading, `check-studies` requires the shown code to be in the module, comments aside, the spec to call the helper and a marble drawing to read that module. In the RxJS work a reading either runs or begins with `// Illustrative:` and its reason.
- **Small repairs.** A file named to `check-studies` that does not parse is now a `FAIL check-studies` line rather than a raw error. An unused computed left the explanation component. The README's menu table names the reading route. `.gitignore` gains `/.runtime/`, so a local tool's temporary root cannot fail a clean check.

No runtime dependency changes. `rxjs/testing` now reaches production, in a 14.5 kB lazy chunk that loads with the first marble study; the Tools feature chunk does not carry it. The records were written by ten authors around one worked example, read by a factual critic who ran every spec and opened all 99 cited addresses and by a reading critic, and reviewed by three independent reviewers.

## Validation

The declared review gate (install, lint, e2e type check, unit tests, format, build, e2e and visual) passed on this tree with no tracked-byte mutation, after the Preflight commands. Its test, build and e2e rows read Nx's cache of the run that passed them on the same tree; lint, format and the visual suite ran live. CI ran the same tree from a clean checkout on the draft, and `checks`, `visual` and `title` passed. The Tools suite passes uncached: 58 files and 515 tests, twenty of the files being the example specs. The production initial bundle is 403,427 bytes, 4.13 kB over the base, with no catalog, study or Tools module in the initial graph.

An independent verifier performed the owner's reading session in the served production build at 360, 768 and 1440 pixels, with screenshots and no page error or overflow: the shelf's count, switchMap stepped through its cancellations, its code, spec and limits, the nearby link to exhaustMap, share and shareReplay compared at frame 7, the three subjects, and catchError and retry. Axe found no serious or critical violation at any width. Separate probes confirmed no autoplay, Play restarting from the last frame without a backward sweep, a hand step pausing, and a reduced-motion preference stopping playback.

## Review

The final review read the source side of the diff and all twenty records and modules, checked each study's claims against RxJS 7.8.2's behaviour and each named app file at the base, confirmed from the modules' syntax trees that no expected marble is computed, reran every acceptance command and a fresh link check, and confirmed that the reviewed commit's tree is the gate's, the verifier's and CI's. It changed no byte of this tree. The pull request had no threads or reviews.

This branch's first commit predates the final review on the owner's direction, and the review rests on that commit's tree.

## Limits and follow-ups

None of these blocks the change.

- Nine studies name a file in this app, and eleven name none because the app does not use those operators. `repeat` also cites no public use, since none could be opened and pinned.
- The drawing has three known limits that none of the twenty examples reaches: a cold input declaring a late subscription would still be drawn from frame 0, `origins` is keyed by frame alone, and the courier finds its lane by label, so the builder refuses a repeated label.
- The browser suite opens switchMap, exhaustMap, share and shareReplay. The other sixteen studies are covered by their specs, the record check and the critics' reading.
- The next batch to publish integrates `main` and rewrites `studies-summary.json` with `npm run studies:check -- --write-summary`.
- The movement batch's book DOI still answers automated clients with a 403, as before. A reference that stops resolving after this merges is the next batch's link check to report.
