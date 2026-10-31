# WO-025

Every standing document of this launchpad now says what is so, and the DotLn-Angular profile reads in the shape the operator chose on 2026-10-30: a table of facts first, then what the repository is for, how to run it and its gate, where each house role is demonstrated, how a change is published, how a release closes, the versions and provenance, and the references. The pass ran the kit's `quality pass:` procedure over the 26 standing documents under a census of every Markdown file in the tree; 20 changed and 6 needed nothing. The operator record keeps every direction it had and gains ten it did not, each with its date and capture. The launchpad gets its own README at [`docs/launchpad-readme.md`](../../launchpad-readme.md), off the root page while the starter's updates rewrite that one. On the operator's direction of 2026-10-30 the pass also closed the gaps it found instead of listing them: `npm run typecheck:e2e` joins the `dotln-angular` registered gate, the discovery record names the installed harnesses, and an unused baseline row is gone. It is the patch release `v0.3.4` on starter v0.103.1; no kit file or grant changes.

## What to read first

- [The rewritten profile](../../repositories/dotln-angular.md) and the diff of [the operator record](../../operator/README.md). The order assumed both would be read in a pull request before final review; the kit opens a self order's pull request only at this publish, so that reading is here, before the merge.
- The ten directions added to the operator record on the operator's own words ([D017](../../evidence/WO-025/decisions.md#wo-025-d017)). Seven are dated before 2026-10-26 and have not been shown to the operator before: Central imports (2026-10-17), A UI to live in (2026-10-18), Code layout (2026-10-20), and from 2026-10-21 Above the records with the data in reach, Code for people to read, Lego blocks and Constant improvement. The three later ones are A deny list of words or a pattern check (2026-10-28), A list of gaps left open and The root README (both 2026-10-30). D017 names what was read and left out, and why; if an item is not the operator's, that decision reopens.
- [The census](../../evidence/WO-025/census.md): every Markdown file's kind, every standing document's outcome and unresolved facts, the operator record's digest and date lists before and after, and the gaps the pass closed.

## What a reviewer gets

- The profile: seven sections in the Design's order, every fact read at the target's `6268de9` (WO-015's merge) and `DotLn Angular v0.6.0`, the registered gate as a table, a `Release close` subsection so three immutable records still resolve, recovery context in place of event history, and no `Checked:` line. [D007](../../evidence/WO-025/decisions.md#wo-025-d007) records its sources and that the intake draft supplied shape, never text.
- [WS-001](../../workstreams/WS-001-dotln-angular.md): house rules 1 to 26 under their numbers with rules 8, 9, 10 and 13 updated in tense and fact only ([D011](../../evidence/WO-025/decisions.md#wo-025-d011)); the dependency plan led by what is so with a table of the open members' edges; the seven taxonomy kinds bulleted with their numbers kept ([D002](../../evidence/WO-025/decisions.md#wo-025-d002)); the `dotln-workstream` block byte-identical to `main`'s.
- The other standing documents: [the security note](../../../AI-HARNESS-SECURITY.md) filled in from the settings actually loaded, [the environment truth](../../discovery/environment.md) with a current-readings section, [the implementation guidance](../../operator/implementation-guidance.md), [the concept-study direction](../../product/concept-study.md), [the product README](../../product/README.md), one description line of the `CLAUDE.md` floor (its Clean Room and Secrets paragraphs are byte-identical), and eleven directory READMEs. `docs/product/purpose.md`, `docs/planning/sequence.md` and three READMEs were read and left unchanged.
- Configuration and data: [`dotln.config.json`](../../../dotln.config.json) adds the `typecheck` command to both gate selections ([D015](../../evidence/WO-025/decisions.md#wo-025-d015)); [`environment.json`](../../discovery/environment.json) records Claude Code 2.1.314, Codex CLI 0.166.0 and Copilot CLI 1.0.94; [`doc-baseline.json`](../../control/doc-baseline.json) loses the row for the link the pass fixed ([D016](../../evidence/WO-025/decisions.md#wo-025-d016)).
- Records: [the evidence README](../../evidence/WO-025/README.md) with the census assertion, the link check, the profile's path check and the target proof; [decisions](../../evidence/WO-025/decisions.md) D001 to D022; the [handoff](../../evidence/WO-025/handoff.md), [self-review](../../evidence/WO-025/self-review.md) and [host qualification](../../evidence/WO-025/host-qualification.md); [VER-001](../../verifications/WO-025/VER-001.md) (fail on criterion 2), [VER-002](../../verifications/WO-025/VER-002.md) (pass), [FINAL-001](FINAL-001.md) (pass, no finding) and the [release notes](RELEASE-NOTES.md) for `v0.3.4`.
- Control: the order's text carries the operator's amendment of 2026-10-30 ([D013](../../evidence/WO-025/decisions.md#wo-025-d013)), bound in the planning log, and its release label; `docs/control/orders/WO-015.jsonl` gains WO-015's override event, which `worktree start` carried into this worktree and nowhere else ([D012](../../evidence/WO-025/decisions.md#wo-025-d012)).

## Validation

- VER-001 failed criterion 2 alone: the census counted three reports that did not exist. The repair ([D020](../../evidence/WO-025/decisions.md#wo-025-d020)) made the census count exactly what Git lists, with a later-reports table that counts each report once it is filed, and asserted it in one script the evidence README carries with its tested cases. VER-002 reproduced the repair and passed all ten criteria.
- The final review reproduced the criteria on 2026-10-31 after integrating `main`, which had not moved: the census assertion printed `279 paths counted, 279 listed, 0 problems` with VER-002 filed; the link check over the 26 standing documents printed `0 unresolved`; the profile has seven `## ` headings in the Design's order and no `Checked:` line; the house rules count 26 with the numbers 1 to 26 in order and the workstream block's digest equal to `main`'s; the operator record's digest multiset went from 37 to 47 tokens and its date multiset from 47 to 57, with the diffs equal to the census's lists; `docs-check` reports 0 failures and no new operator-word advisory; `publication:check`, `harness check` (35 surfaces), both index pages and `plan check` (no advisory; one authorized amendment) pass; the changed paths name nothing criterion 6 excludes.
- Beyond the criteria: every version in the profile's tables equals the target's lockfile at `6268de9`, the workspace checks run in the order the profile lists, CI's steps and the root route match, and `gh release list` names `DotLn Angular v0.6.0` as the latest release. The registration's command is byte-identical to the one VER-001 ran on a fresh clone of the pinned target: exit 0 clean, exit 2 with `TS2322` after a mistyped spec line.
- Gates at the reviewed revision: `npm test -- --review` 7 passed, 0 failed, recorded by the repair at this branch's code identity, which the no-op integration left unchanged and the gate block below cites; `npm run test:docs` passed after the last document edit; `npm run release -- check-surfaces --local` passes; `npm run format:check` and `git diff --check` are clean; the local-terms check over every changed and new document matched nothing.

## Limits and follow-ups

- The profile dates its facts to `6268de9` and `DotLn Angular v0.6.0`; the next target order's write-back refreshes its table, and the profile says the target's own files win at a later commit.
- The target's `docs/dev-reference/workspace/scripts.md` still calls `typecheck:e2e` a helper; WO-026 corrects it (`FUP-f8216ece83a3e7a6`). The root `README.md` moves to `docs/launchpad-readme.md`'s text when the upstream kit stops conflicting with it (`FUP-9958a2830a81ad0c`).
- WS-001's rows for WO-025 read `active` until the next write-back; the generated index carries the phase.
- The kit's self publish pushes the order's own branch `wo-025` and opens the pull request from it; the branch name the order's step 10 carries is not a form the helper takes ([D022](../../evidence/WO-025/decisions.md#wo-025-d022)).
- Base: this branch starts at `main`'s current head, so the pull request carries only WO-025's own commits. After the merge, `resume: release close` in `main` publishes `Launchpad v0.3.4`.

<!-- dotln-process-meter:start -->

Observation cutoff: 2026-10-31T15:24:38.749Z; source: canonical control events and the recorded gate, usage and harness observations collected by npm run meta.

| Work | Phase / attempts | Gate | Read files / bytes | Observed tokens / USD | Declared prompt tokens | Corrections | Directions | Bound stops | Bound acceptances |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| WO-007 | 2 h 56 min / 5 |  |  /  |  /  |  |  | 1 | 0 | 0 |
| WO-013 | 2 h 43 min (Δ -0 h 13 min) / 9 |  |  /  |  /  |  |  | 3 (Δ 2) | 0 | 0 |
| WO-014 | 4 h 9 min (Δ 1 h 26 min) / 5 |  |  /  |  /  |  |  | 6 (Δ 3) | 0 | 0 |
| WO-019 | 57 h 25 min (Δ 53 h 16 min) / 3 |  |  /  |  /  |  |  | 5 (Δ -1) | 0 | 0 |
| WO-015 | 10 h 27 min (Δ -46 h 59 min) / 3 |  |  /  |  /  |  |  | 4 (Δ -1) | 0 | 2 |
| WO-025 | 2 h 32 min (Δ -7 h 54 min) / 4 | 0 h 1 min | 9 / 180,395 | 111,306,011 /  | 768 | 3 | 6 (Δ 2) | 0 | 0 |

| Dispatch | Wall (Δ) | Context bytes (Δ) | Commands (Δ) | Tokens (Δ) | Steps (Δ) | USD (Δ) / declared prompt tokens | Bound stops | Bound acceptances |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| WO-025/executor | 2 h 18 min (Δ -7 h 6 min) | 1,878,026 | 601 | 98,003,661 | 892 |  / 768 | 0 | 0 |
| WO-025/verifier | 0 h 14 min (Δ -0 h 16 min) |  |  | 12,871,836 | 84 |  /  | 0 | 0 |
| WO-025/reviewer | 0 h 1 min (Δ -0 h 31 min) |  | 90 | 430,514 | 91 |  /  | 0 | 0 |

80 unavailable observations omitted as blank cells or rows; unavailable is not zero; unset ceilings are not approvals of a future limit.

<!-- dotln-process-meter:end -->
