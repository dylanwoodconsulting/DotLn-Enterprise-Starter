# WO-008 decisions

## WO-008-D001

```json
{
  "id": "WO-008-D001",
  "date": "2026-11-01",
  "dispatch": "planning: the second pass of 2026-11-01, on the operator's message of about 13:58Z",
  "decision": "Amend this order under the operator's authorization of 2026-11-01 (capture SHA-256 b756e11b06563563e23cd3005bf216dd96570c0e0b07810a026dfe82982aeadd), bounded to the recorded defects: step 1's base guard becomes an ancestor check and the fast-forward, keeping WO-005's route guard and activation; criterion 1 reads its file list from the working tree against the base; the Cost line counts this pass's refutation; the Known issues record the carry-in. The amendment adds no scope beyond those fixes and is bound with npm run plan -- amend-order against receipt 2026-11-01-planning-f26bb956de3abb86-017.",
  "evidence": [
    "The operator returned at about 13:58Z, quoted the two defects the pass had recorded and offered to them rather than fixed, and asked whether the job had been done; captured in ignored intake, SHA-256 b756e11b06563563e23cd3005bf216dd96570c0e0b07810a026dfe82982aeadd.",
    "The 2026-11-01 pass's criteria adversary R1: the inherited exact-tip guard stops an order whose pin is behind main.",
    "The 2026-11-01 second pass's C1: HEAD is the base until the final review commits, so the merge-base..HEAD list was empty at verification.",
    "docs/planning/criterion-9-phase-2026-11-01.md D4 and §Validation (the second round of the three reviews: 7 findings, 7 fixed)."
  ],
  "rejected": [
    {
      "option": "Record these defects again for a later pass",
      "reason": "The operator's message on return (capture SHA-256 b756e11b06563563e23cd3005bf216dd96570c0e0b07810a026dfe82982aeadd) asked for the recorded defects to be fixed; the operator record rules out a list of gaps left open."
    },
    {
      "option": "A second planning judgment of the amended text in the same pass",
      "reason": "npm run plan -- refute refuses with one judgment per pass, and another judgment requires changed observed evidence (requireChangedPlanEvidence in scripts/lib/plan-receipts.mjs); the cost evidence has not changed since receipt 2026-11-01-planning-f26bb956de3abb86-017. The amendment is reviewed by the three reviewers and the next planning pass's refutation judges it."
    }
  ],
  "reopenWhen": "The next planning pass's refutation judges this text, or a verifier or reviewer of this order reports a clause the amendment wrote as unjudgeable or wrong."
}
```
