# WO-023 walkthrough

2026-11-07, 21:50Z to 21:51Z. The executor performed the Objective's session in the served
production build of the candidate (built from the target worktree after every critic correction
and review round 1's fixes, served on a local port from a copy of its output), in a Chromium
context this session launched, with reduced motion. A first session at 21:00Z, before round 1,
read the same accessible name at every step and size; of its screenshots only four at 360 differ,
where long state names now shrink to fit their columns ([D016](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d016)). Each
step was taken at 360 by 800, 768 by 1024 and 1440 by 900, and three of them also at the
operator's two full sizes, 2080 by 1460 and 3840 by 1620 (WS-001 rule 29). Every screenshot is in
[walkthrough/](walkthrough/), named `<step>-<width>.png`, and the drawing's accessible name at
each step is in [walkthrough-log.json](walkthrough-log.json). At every size the session raised no
page error and the page fitted its width. The verifier repeats the session independently for
criterion 1.

## The steps

1. Tools, Catalog, then Patterns of Enterprise Application Architecture on the shelf: the shelf
   reads 455 concepts and 20 studied, and the list beside the contents shows the twenty studied
   concepts (`01-poeaa-shelf`).
2. Unit of Work from that list. The study opens at its start; its drawing's text equivalent reads
   "Step 0: nothing moves. Where each composition stands: Clean: Flank left, Hold the ridge; New:
   none; Dirty: none; Removed: none. Store calls so far: 0." (`02-unit-of-work-start`).
3. The moment Removed, after stepping through New and Dirty: "Flank left moves from Clean to
   Removed by registerRemoved. Where each composition stands: Clean: none; New: Night march; Dirty:
   Hold the ridge; Removed: Flank left. Store calls so far: 0." (`03-unit-of-work-registers`, also
   at 2080 and 3840).
4. The moment Commit: "Flank left leaves Removed by commit; Hold the ridge moves from Dirty to Clean
   by commit; Night march moves from New to Clean by commit. … Store calls so far: 1."
   (`04-unit-of-work-commit`).
5. Follow the mechanism, with the executable model's disclosure open: the five blocks of ordinary
   pseudocode beside their steps, and the note that the TypeScript model ran in the test suite, in
   `libs/features/tools/src/lib/studies/poeaa/unit-of-work.model.spec.ts`
   (`05-unit-of-work-mechanism`).
6. Where this breaks down: the long-lived unit holding stale versions, the two units nothing
   coordinates, the change never registered, and the order of the commit's statements
   (`06-unit-of-work-limits`).
7. Identity Map, at its moments Miss and Hit: "The reading asks for poeaa:246: a miss, because this
   session's map holds nothing under that id, so the loader makes read 1 of the store …", then
   "The nearby list asks for poeaa:246: a hit, because its map already holds the object built by
   read 1, so nothing is read and that same object comes back." (`07-identity-map-miss`,
   `07-identity-map-hit`, the hit also at 2080 and 3840).
8. Optimistic Offline Lock and Pessimistic Offline Lock, each with its limits open: the same two
   tabs editing Hold the ridge, version 4, one refused at save and the other turned away at the
   start (`08-locks-optimistic`, `08-locks-pessimistic`, the pessimistic also at 2080 and 3840).
9. Data Transfer Object and Remote Facade, each with its limits open (`09-data-transfer-object`,
   `09-remote-facade`).

## What four studies explained, in the executor's words

**Unit of Work.** A unit of work is three lists kept beside the objects a session holds: what is
new, what changed and what is to be deleted. Registering costs nothing; the store sees nothing
until the commit, which writes every list in one call and refuses all of it if any row it updates
or deletes has a version other than the one the session read. Stepping it shows a second rename
leaving the registers as they were, so two edits still cost one update, and the comparison chart
shows the same session writing at once making four calls where the unit makes one. In this app the
nearest thing is `SceneStore` with `withPersistedState`, one write per save, which keeps no
registers and checks no versions, safe only because a save adds a composition and never changes
one.

**Identity Map.** An identity map keeps one object per stored row for a session, so a second lookup
of the same id is a hit that returns the very object the first built, and only a miss reads the
store. It prevents two copies of one row that drift apart, which the study shows by giving the
nearby list its own map: that second map misses, reads again and holds a copy that disagrees with
the reading's. The catalog loader's one cached load per work is the app's cousin, keyed by work,
not by concept.

**Optimistic and Pessimistic Offline Lock.** Both studies run one scenario, two tabs editing Hold
the ridge from version 4. The optimistic lock lets both work and checks the version only at save,
so the second tab to save loses all its work at the end; it is the wrong choice when collisions are
likely or the work is long, because the cost of a refusal grows with the work it throws away. The
pessimistic lock decides at the start, turning the second tab away before it works, but a tab
closed with the lock still taken keeps everyone out until the lock expires, and a timeout shorter
than the work takes the lock from a tab still using it. The app takes neither lock; its save
re-reads storage and appends, which is safe only because nothing it stores is ever changed in
place.

**Data Transfer Object and Remote Facade.** The pair exists because a call across the network is
expensive: the facade turns many fine-grained calls into one coarse call, and the transfer object
is the plain, serialisable shape that one call carries, with references flattened to ids and the
format's version on its face. In the app, `BoardApi` makes the one call and the `uifa-board-v1`
response is the transfer object, while the facade itself is still absent: the app's mocks answer
with a recorded board.
