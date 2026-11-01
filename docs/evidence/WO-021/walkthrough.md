# WO-021 executor walkthrough

Observed on 2026-11-01 in the production build of the target worktree at its final state; the
screenshots and the recording were taken again at 06:59Z, after the last code change (D022, the
landing of the frame line when Play starts over, and the recheck's fixes). To reproduce: in the target worktree `npx nx build dotln --configuration=production`, copy
`dist/apps/dotln/browser` anywhere outside the worktree and serve it as static files with the
single-page fallback to `index.html` on a local port (the executor used a small Node server on
127.0.0.1:4301), then open the addresses below in Playwright's Chromium with `reducedMotion:
'reduce'` for the stills at viewports 360 by 1400, 768 by 1100 and 1440 by 1100, and without the
reduced-motion preference for the Play recording at 1440. The screenshots are beside this file under
[walkthrough/](walkthrough/); the independent verifier's walkthrough is a separate duty and starts
from nothing here.

## The shelf and the twenty

`/tools/catalog` lists RxJS on the shelf with `20 studied` and its unit `marbles`
([1440](walkthrough/shelf-rxjs-1440.png), [768](walkthrough/shelf-rxjs-768.png),
[360](walkthrough/shelf-rxjs-360.png)). Opening the work shows the heading `20 studied concepts`
with the twenty links in the order's order: Subject, BehaviorSubject, ReplaySubject, combineLatest,
concatMap, exhaustMap, mergeMap, switchMap, scan, startWith, share, shareReplay, catchError,
retry, materialize, observeOn, timeout, finalize, repeat and takeUntil, each at its own
`/tools/catalog/rxc:<id>` address.

## A study, as it opens

switchMap (`rxc:152`) opens on its last frame, the whole run
([1440](walkthrough/switch-map-last-frame-1440.png), [768](walkthrough/switch-map-last-frame-768.png),
[360](walkthrough/switch-map-last-frame-360.png)): the authored title and the byline, the idea and
the situation, the marble diagram with the input `query$` and the three `results(…)` lanes above
the operator's band and `shown$` below it, every frame numbered, the slider reading `Frame 14 of 14`, Step back, Step forward and the
four named moments, the frame's sentence, the two disclosures `Show the emissions` and `How to read
this drawing`, then the ways into the idea, the nearby concepts and the next study. At 360 the
drawing scales to the width and the moments wrap; nothing is clipped and no horizontal scroll
appears.

Under the reduced-motion preference the screenshots were taken with, Play is not offered, the
line of the frame does not glide and no value rides down: at a frame with an output value the value
is simply there on its lane, which the end-to-end suite asserts at switchMap's frame 4; the stepping
is the same.

## Stepping back: the output lane fills in

At the `bee cancels ant` moment, frame 5 ([1440](walkthrough/switch-map-frame-5-1440.png),
[768](walkthrough/switch-map-frame-5-768.png), [360](walkthrough/switch-map-frame-5-360.png)), the
inputs and the three `results(…)` lanes keep their whole plan, with `results(ant)` ending in its
small hollow ring and `results(bee)` just opened, while `shown$` carries only the `1` that has been
emitted by then: its `5` and `6` are not drawn before their frames (D019). The emission of the frame
is ringed, and the sentence beneath reads the frame.

## Play: the value rides down

With motion allowed, Play pressed on the last frame starts over: the line lands on frame 0 at
once and runs from there at 1.2 seconds a frame (an earlier build swept it backwards across the
diagram for the first frame; the design reviewer's doubt and a probe of the served build found it,
and the component now lays the line out on the new frame before it glides). The recording is
[play-play-1440.webm](walkthrough/play-play-1440.webm) and the stills catch frame 1
([1.3 s](walkthrough/play-play-1.3s-1440.png)), the line gliding towards frame 4 and the `1` of
`results(ant)` popping with its soft disc as the frame arrives
([4.95 s](walkthrough/play-play-4.95s-1440.png)), the `1` riding down through the operator's band in
the output lane's tone while `shown$` still shows nothing there
([5.2 s](walkthrough/play-play-5.2s-1440.png)), the value settled on `shown$` and popped
([5.5 s](walkthrough/play-play-5.5s-1440.png)), and frame 10 with `results(cat)`'s `5` arriving
([12.1 s](walkthrough/play-play-12.1s-1440.png)). The slider moves one step a frame and the counter
turns as the line arrives. Pressing Play again from the end starts over; a hand step stops it.

## Two more studies

share (`rxc:215`) at its last frame shows the poll and its two readers starting where each
subscribes, with the small ring where a reader left the page
([1440](walkthrough/share-1440.png), [768](walkthrough/share-768.png),
[360](walkthrough/share-360.png)). timeout (`rxc:234`) shows `report$` cut off by the small ring and
`pages$` failing with a cross on the same frame, the band reading `timeout({ first: 6, each: 4 })`
([1440](walkthrough/timeout-1440.png), [768](walkthrough/timeout-768.png),
[360](walkthrough/timeout-360.png)).

## What was not looked at here

The remaining seventeen studies were read through their records, modules and specs and the critics'
rounds rather than screenshotted; the end-to-end suite opens switchMap, exhaustMap, share and
shareReplay and checks the shelf's count, the studied facet and the three widths with axe. The
verifier chooses their own studies.
