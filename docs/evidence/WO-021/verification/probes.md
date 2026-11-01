# VER-001 independent probe evidence

Observed on 2026-11-01 in the registered launchpad and target worktrees. The verifier made no target implementation edit. Its probes ran one at a time through `node scripts/harness.mjs bounded -- …`, outside the complete gate. The local production servers and Chromium contexts were closed by their owning scripts before handoff. No worker or monitor was started.

The [machine results](results.json) retain the current review identity, all twenty independently observed output streams, the browser steps and screenshot inventory, the animation probes and the post-gate residue/status counts. Scratch contains the full command output and probe source; the durable results here contain selected public evidence, not private harness-log contents.

## Application and contract probes

| Check | Observed result |
| --- | --- |
| `npm run studies:check`, in the registered target worktree | Exit 0; 40 records, 0 problems. |
| Independent record/model inventory | Exact twenty declared ids, no substitution; checked state, two distinct reviewers, complete reference fields; twenty matching executable and drawing modules; no motion payload on any marble model; every example opens on its last frame. |
| Independent TestScheduler subscriptions | All twenty pipelines run. Separate hard-coded expectations confirm switchMap's ant page 1 at frame 4 and cat pages at 10 and 13; share's chart receives 102 at 9 and 106 at 13; shareReplay additionally receives 104 immediately at 7; Subject's late listener gets no prior press; BehaviorSubject's late panel receives current state and its repeated value; ReplaySubject's auditor receives the last two reports and completion. |
| Invalid record variations | Draft state, duplicate reviewers, unknown concept id, different drawing module and wrong displayed pipeline are each rejected. |
| Named malformed JSON | Exit 1 with `FAIL check-studies: … at /: schema type`, without a SyntaxError. The existing `tools/studies.test.mjs` suite passes 25 tests, including its regression case. |
| Target format check | Local `nx format:check` exits 0. |
| Uncached Tools tests | `nx test tools --skip-nx-cache --output-style=static` exits 0: 58 files and 515 tests. All twenty executable-example specs are individually listed, summing to 196 tests; the marble helper/model/component specs also pass. |
| Production bundle | `npm run check:bundle` exits 0, initialBytes 403427, lazyCodeInInitial empty. The target package's dependency keys equal the activation base's. |
| Carry-in checks | Exactly one `/.runtime/` ignore; unused computed absent; README includes `/tools/catalog/<tool id>`; the no-motion render/scrub case is in the passing facade spec. |
| Rejected candidate identifiers | The D021 expression over the family, study composite, RxJS studies and shared model returns no match. Inline variations have been removed; no separate candidate files were created. |

The uncached static test output lists these example-spec counts: repeat 15, observe-on 12, replay-subject 9, subject 11, finalize 11, take-until 10, retry 8, concat-map 12, share-replay 10, timeout 8, share 11, behavior-subject 7, materialize 10, scan 11, combine-latest 10, exhaust-map 9, merge-map 12, start-with 10, catch-error 7 and switch-map 4.

## Complete gate and post-gate judgment

The verifier ran `node scripts/target-gate.mjs WO-021 --review` from the launchpad. Install, lint, typecheck, test, format, build, e2e and visual all passed, with no tracked-byte mutation. Its row is `target-gate:c61b4b39-1d52-4c67-8927-bd30f5fc5aa7`, candidate tree `18e79e8409e334c35c7e1d9eec7a97e19dee556a`, recorded at 2026-11-01T07:17:20.310Z, about 0 h 1 min. Test/build/e2e may use Nx's same-input cache; this pass separately ran Tools uncached and used a production build in the browser.

The post-gate filter reads `git ls-files -z --others --ignored --exclude-standard`, admits each path equal to or beneath one of the thirty `classes.angular-nx-monorepo.disposable` roots, and admits each exact `installed[].path` in `.claude/target-worker-manifest.json`. There were 46,047 paths and seven installed-manifest entries; the remainder was `[]`.

The separate `git status --porcelain --untracked-files=all` printed 129 lines, all other than a `.DS_Store`. Examples are `.gitignore`, README, the browser specs and translations; the full listing also includes the new studies, modules and baselines. This is criterion 9's unmet clause, preserved in D025. The base checkout's release-close judgment was not performed or claimed.

The profile's residue JSON block has twelve roots, whereas the current declaration has thirty. D026 boards that standing-document mismatch.

## Production use and playback

The snapshot came from the optimized production build produced by `check:bundle`; it has no mock service worker. The verifier opened Tools, Catalog, RxJS, switchMap and exhaustMap, compared share/shareReplay in separate pages via the nearby link, and read the three subjects plus catchError/retry at 360, 768 and 1440 pixels. Each width produced twelve [screenshots](../walkthrough/), zero page errors and no horizontal overflow. Serious/critical axe violations on the final retry reading were zero at each width. VER-001 supplies the dated steps and the verifier's own reading of the behavior.

Separate playback probes passed: no autoplay without reduced motion; Play from the last frame resets to 0 and lands near the beginning (observed cursor x 29.6206 rather than sweeping back from the last frame); a hand step pauses; Play from the middle continues; changing the preference to reduced motion stops playback and removes Play; at frame 4 the courier is hidden and the delivered output marble remains visible. Two additional screenshots bring the verifier's total to thirty-eight.

## Probe corrections and evidence limits

The first wrapper used the obsolete `node_modules/nx/bin/nx.js` path and its format/unit commands exited 1 with MODULE_NOT_FOUND before executing the checks. The corrected local-bin invocation passed; static output was then requested because Nx's default successful summary hid the individual spec counts. Those were instrument errors, not target failures.

The first post-gate probe incorrectly expected the query stream to complete at frame 13. Its observed result was 14, as the record says; the corrected assertion for query and output completion at 14 passes. The provisional prose-defect suspicion was withdrawn. D027 records both corrections durably.

The first launchpad document gate failed its docs check because the command row in this evidence contained an absolute home path. The row now records the target-local command and its working-directory context. The gate is rerun after this correction and the accompanying decision/report edits; this was a verifier-authored record defect, not a target implementation failure.

The network evidence consumed is the executor's 99-URL status table and critic dispositions. The three review accounts consumed are the filed adversary/design/consistency accounts and rechecks in `self-review.md`; their original Agent return bodies are not linked and were not located by the filename search of granted DotLn system scratch. The verifier does not claim to have read those unavailable originals. The verdict rests on the executed reproductions, direct source review, production use and current gate, with no delegated verdict.
