# WO-022 records

This branch files the instance records of WO-022, the third concept-study batch: twenty Enterprise Integration Patterns studies in DotLn-Angular, each a flow stepping messages through channels, eleven of them drawn from the marble example their specs run, with the `flow` family and its two builders. The change was reviewed and published to `DylanBWood/DotLn-Angular` as pull request 13 on `feat/eip-concept-studies`, for the operator to merge. This branch carries no launchpad code change: its code identity is `main`'s, so no launchpad complete run is owed, and the records are the whole of it.

## What a reviewer gets

- The order's [evidence](../../evidence/WO-022/README.md): the [fan-out](../../evidence/WO-022/fan-out.md) with every worker's statement and tokens and the stop rule set after the spend, the [critics' findings and the analogies as checked](../../evidence/WO-022/review.md) with the three independent reviewers' findings and their dispositions, the [eight comparison rounds](../../evidence/WO-022/design/comparisons.md) and the [rejected candidates](../../evidence/WO-022/design/rejected-implementations.md), the [executor's walkthrough](../../evidence/WO-022/walkthrough.md) with its screenshots beside the verifier's and the reviewer's, the [host-qualification record](../../evidence/WO-022/host-qualification.md), the verifier's [independent evidence](../../evidence/WO-022/verification.md) and [process-error record](../../evidence/WO-022/verification-process-error.md), and the [pull request record](../../evidence/WO-022/preview-pr.json).
- Decisions D001 to D034, filed in the target at `docs/dotln/evidence/WO-022/decisions.md` with the verification report and the final review. D029 is the verifier's critical process error and D030 the approved recovery; D031 is the Control Bus finding and D032 its repair in this review; D033 is the records this review left current and the clean-room correction of two evidence lines; D034 is the publication.
- The [repository profile](../../repositories/dotln-angular.md), whose implementation map names the `flow` family and the builders and whose header now reads WO-021's merge and `DotLn Angular v0.8.0`, and the [workstream](../../workstreams/WS-001-dotln-angular.md) delivery states, WO-021 merged and WO-022 final-reviewed.
- The control segment `docs/control/orders/WO-022.jsonl`, the current-state projection, the work-order index, the decisions index and the follow-up register, in which D031's row is settled.

## Validation

- The target's declared review gate passed at the reviewed tree `c68f036c2dd08db0f930195870475fc961602ac9` (commit `e71c34a5d4109ea01918f12781b74b818adc26ed`) with no tracked-byte mutation, after the Preflight line, and before that twice at the verified tree `183d357f6590893d98a049fa42a4251458a19185`, by the executor and the verifier. CI's `checks`, `visual` and `title` passed on the verified tree from a clean checkout on the draft, pull request 13, and run again on the reviewed head, which adds the Control Bus repair and the records commit.
- The verifier performed the Objective's session independently in the production build at three widths through an isolated browser, after the native-desktop interaction D029 records was stopped and excluded. VER-001 passes all nine criteria at the verified tree with one follow-up; the final review re-derived each criterion, repaired that follow-up in the order, reran the gate and performed the session again.
- All nine criteria are met and none is waived. Criterion 1, which the executor recorded unmet for the verifier to perform, is met by VER-001's walkthrough and this review's.
- Gates in this worktree: no launchpad code changed, so the branch's code identity is `main`'s and the records publish cites `main`'s row. `npm run test:docs` passed after the review's last record edit and again after the records moved.

## Limits and follow-ups

- **The verifier's first attempt used the operator's desktop.** D029 records it as a critical process error at the operator's direction; its observations were excluded, the walkthrough was repeated through an isolated browser, and D029's follow-up asks the next planning pass to carry the Playwright-only preference into standing guidance.
- **The fan-out's stop rule was set after the spend.** D023 records the omission and D028 the rule set on the operator's direction; the figures are in the fan-out record.
- **Two evidence lines quoted the operator's messages verbatim.** They are paraphrased with their digests (D033); whether criterion-8 ending words are quoted or paraphrased is left to a planning pass.
- **The repository profile and workstream rows predated WO-021's merge.** Brought current here (D033).
- After both merges, the operator fast-forwards `main` and dispatches `resume: release close` there. That closes the target worktree with the no-release outcome for the launchpad and cuts the target's minor release with the reviewed notes.
