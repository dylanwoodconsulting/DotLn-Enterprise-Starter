# WO-017 decisions

## WO-017-D001

```json
{
  "id": "WO-017-D001",
  "date": "2026-11-01",
  "dispatch": "planning: the second pass of 2026-11-01, on the operator's message of about 13:58Z",
  "decision": "Amend this order under the operator's authorization of 2026-11-01 (capture SHA-256 b756e11b06563563e23cd3005bf216dd96570c0e0b07810a026dfe82982aeadd), bounded to the recorded defects: step 1's base guard as WO-008's; the registry check reads the working tree's manifest, admits a base holding no manifest as the introducing order's case and fails an old variant's file changed under its id (step 4, criterion 4); readiness is the replayed completion (the result fold, step 6, criteria 2 and 8); the Cost line and the Known issues. The amendment adds no scope beyond those fixes and is bound with npm run plan -- amend-order against receipt 2026-11-01-planning-f26bb956de3abb86-017.",
  "evidence": [
    "The operator returned at about 13:58Z, quoted the two defects the pass had recorded and offered to them rather than fixed, and asked whether the job had been done; captured in ignored intake, SHA-256 b756e11b06563563e23cd3005bf216dd96570c0e0b07810a026dfe82982aeadd.",
    "The 2026-11-01 pass's criteria adversary R1, R2 and R7 and its design improver R3 and R4.",
    "The 2026-11-01 second pass's C1: the manifest at HEAD is the base's until the final review commits.",
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

## WO-017-D002

```json
{
  "id": "WO-017-D002",
  "date": "2026-11-05",
  "dispatch": "resume: next — WO-033 planning-reference relocation",
  "decision": "Relocate this open order’s references to the nineteen planning documents moved by WO-033; bind the resulting order bytes through plan amend-order. This changes reference destinations only and preserves this order’s scope and criteria.",
  "evidence": [
    "WO-033 execution step 3 authorizes rewriting open-order references; its operator dispatch was resume: next.",
    "The operator approved six append-only decisions on 2026-11-05; WO-033-D007 records the bounded authorization and capture SHA-256 720d6409a051825368575f38350fec3ee8292c7980340ebd811daf499421e066.",
    "docs/control/document-moves.json and docs/evidence/WO-033/links.md identify the relocations.",
    "WO-033-D003 records why the installed planner requires an amendment for these path-only changes."
  ],
  "rejected": [
    "Changing kit continuation logic would exceed WO-033.",
    "Keeping the old standing references does not deliver the specified link rewrite."
  ],
  "reopenWhen": "The order differs beyond the authorized reference destinations, or a cited record’s original bytes change."
}
```
