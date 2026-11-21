# WO-024 executor host

The two registered `wo-024` worktrees each matched their physical Git root. Canonical status selected DotLn-Angular with its three hard dependencies met. The executor ran under Codex CLI 0.170.0, with `gpt-6.2-astra` at max reported by the active session. The executor reserved the writer through the lifecycle dispatch. Authors wrote to assigned session scratch. The executor integrated their files into the target.

The host ran Darwin arm64, Node 26.9.0 and npm 11.19.1. The target was fast-forwarded from its activation pin to `08b4a7f` before work began. The target's installed package-lock supplied Angular, Nx and Playwright. The comparison screenshots came from a Chromium session launched by Playwright. Rounds 1–5 used the app's actual relations component with a three-level card story. Round 6 used the served catalog.

The initial Tools suite was interrupted with exit 137. A run with a 768 MiB Node heap produced an explicit heap-limit error. A serial run with a 2,048 MiB heap executed all 1,347 tests present in 137 spec files and exited 0. The integrated study batch and the registered gates have separate evidence.

The complete Tools suite on the integrated batch passed all 1,364 tests in 151 files using one Vitest worker and a 2,048 MiB Node heap. Its corpus test exposed text-only example inputs entering translated frame values. The relationship builder now passes through numeric inputs and obtains authored words from the study messages. The foundation compiler also passed after four study specs adopted the declared index access for frame values.

The design rounds after the component stories used the catalog’s study route. The final-size walkthrough loads a copy of the optimized production browser output. Playwright’s end-to-end suite uses the repository’s separate mocked build and independently started application and Storybook servers.

The final walkthrough on 2026-11-20 completed all seventeen actions at each of the five sizes. One development-only static server reset a chunk request during an interim run. The same optimized files served with the target’s installed HTTP server passed the remaining viewport journeys. The production application and its error handling were unchanged by this host correction.

The first full browser preflight on November 20 stopped during Storybook chunk rendering with exit 137. The existing UI Storybook build succeeded in 9.3 seconds with one native worker. The ensuing full Playwright run passed 195 tests in four minutes. The target and registered gates use the installed project tools.

In the revised workspace run, the Tools runner reported 151 files and 1,365 tests. Its persisted transform cache still listed two tests for the relationship builder, although the source contained three. Running the project’s Vitest config with its filesystem module cache disabled executed all three, including the new opposite-direction arrow check. The old target-local transform cache was preserved in session scratch for subsequent full runs.

The first workspace preflight after the architecture repairs completed the unit tests and reported one Tools lint error for the import order in study-record.ts. The executor reordered those two imports and kept the rule enabled. This formatting change accompanies the two corrected lesson strings and their test fixture in the final comparison.

The Tools project also kept its own transform cache. After moving that ignored directory to session scratch, the normal runner executed all three relationship-builder tests. A workspace run with a fresh Nx cache then passed 1,366 Tools tests across 151 files. The three builder cases covered the return to the original level, invalid identifiers and the routing of long arrows in opposite directions.

## Final reviewer host

The 2026-11-21 UTC final review ran under Claude Code 2.1.330, model `claude-fable-5-2` at selected effort max, on the same macOS arm64 host with Node 26.9.0. The session started in the launchpad's `wo-024` worktree with the target's `wo-024` worktree beside it. Each physical working directory matched its Git root, and the dispatch reserved the writer. No worker was launched.

No Playwright MCP was attached. The reviewer's session used a headless Chromium launched through the target's Playwright package against a loopback static server over `dist/apps/dotln/browser`, the production build that `npm run check:bundle` replayed from the Nx cache at the verified tree. The operator's own browser was not used. The scripts ran from session scratch and are filed beside this record: [the session](final-001-session.cjs) with [its readings](final-001-session.json), [the restart recheck](final-001-restart.cjs) and [the record checks](final-001-records.cjs). The first run of the session script stopped where it read a drawing before the next study had replaced the previous one. The script now waits for each study's own opening text and first step, and the run after that completed at all three sizes.

Target commands ran from the launchpad worktree as `npm --prefix <target worktree> run <script>`, one to a line: `studies:check`, `i18n:check`, `check:bundle`, `test` with `--projects=tools --skip-nx-cache` and six `--testFiles`, and `e2e` with `--projects=dotln-e2e --skip-nx-cache`. `npm --prefix <target worktree> exec -- nx …` runs its command in the caller's directory and stopped with Nx's message that the directory is no workspace, so the package scripts were the route. Neither uncached run met the host guard's memory budget.

The review changed one comment in the target, and `node scripts/target-gate.mjs WO-024 --review` then passed at tree `f246a4d2924c831e8da16ec41cc0a9aee1f8d3a0` in 0 h 3 min. That tree was committed as five commits on `wo-024` ending at `edd0379ac1e6e0df1601dbdb55824f800d48137a` before the result was recorded.

## The draft that was not opened

The verification session opened no draft pull request. Before recording a result the final reviewer ran the profile's draft form plainly from the launchpad order worktree:

```sh
node scripts/worktree.mjs publish WO-024 --target-worktree --draft --branch feat/levels-loops-and-teams-studies --title "feat: add concept studies for levels, loops and teams" --body-file docs/final-reviews/WO-024/TARGET-PR.md
```

The hook admitted it, the host ran it, and the helper refused it before it read the target: `error: target publish refused: the draft form is legal at verified with a passing verification; WO-024 is final-review`. Nothing was pushed. [D031](https://github.com/DylanBWood/DotLn-Angular/blob/4e58f94f74b899bea774ce8a5c1b1216843c35ac/docs/dotln/evidence/WO-024/decisions.md#wo-024-d031), filed in the target with the order's other decisions, records the route taken instead.

## The ready publication

`final-review-result pass` was recorded at 04:08 UTC. `target-records` then added the records commit `4e58f94f74b899bea774ce8a5c1b1216843c35ac` over the five reviewed commits, and the reviewer ran the profile's ready form plainly from the launchpad order worktree:

```sh
node scripts/worktree.mjs publish WO-024 --target-worktree --branch feat/levels-loops-and-teams-studies --title ":sparkles: Add Gödel, Escher, Bach and Team Topologies studies, each a relationship map to step through" --body-file docs/final-reviews/WO-024/TARGET-PR.md
```

The hook admitted it and the host ran it, with no refusal or denial. The helper pushed `feat/levels-loops-and-teams-studies` at `4e58f94` and opened pull request #21 on `github.com/DylanBWood/DotLn-Angular` at 04:11 UTC. Read back with `gh pr view 21 --repo DylanBWood/DotLn-Angular`, it was open, not a draft, on base `main` at that head, mergeable, with the reviewed title and no review, comment or thread. The published body is the reviewed one with the gate's table of the eight passing commands after it.

These were the pull request's first workflow runs, since no draft preceded it. On head `4e58f94` the title run 44864885274 passed (04:11 to 04:12) and left the title as written, and CI run 44864885235 passed its `visual` job (04:11 to 04:15) and its `checks` job (04:11 to 04:27). Read back at 04:27, the pull request was open, not a draft, carried the reviewed title, merged clean and had no review, comment or thread. [preview-pr.json](preview-pr.json) holds the reading. No session merged, pushed `main` or published a release.
