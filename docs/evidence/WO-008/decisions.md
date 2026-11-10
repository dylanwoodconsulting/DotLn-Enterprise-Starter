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

## WO-008-D002

```json
{
  "id": "WO-008-D002",
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

## WO-008-D003

```json
{
  "id": "WO-008-D003",
  "date": "2026-11-09",
  "dispatch": "planning: the pass of 2026-11-09, on the operator's message of about 04:12Z on 2026-11-10 UTC, after receipt 028",
  "decision": "Amend this order after its planning judgment under the operator's direction of 2026-11-09 that a planning pass settles in itself what it is able to settle and treats nothing on an unmerged branch as fixed (session journal row 2026-11-10T04:12:34Z, message SHA-256 9acd06f09b68b19e8af161046c0179a911ba11e5c9d9aecfbc927e7bb59b5414; the operator record, One pass, not two), bounded to the defect that judgment recorded for it: criterion 9 names npm run i18n:check among the gate's declared commands and what it holds, every string of the login, denied and account pages and of the mock's own pages as a message (rule 9). Bind the resulting order bytes through plan amend-order.",
  "evidence": [
    "Receipt 2026-11-10-planning-80685a5e0fbc1a46-028: no criterion held the order's four pages to the message system (criterion 9).",
    "docs/planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md D18, the rows for receipt 028.",
    "npm run plan -- refute refuses a further judgment in this pass (one judgment per pass; dispositions settle repairs, and another judgment requires changed observed evidence), and the receipt records no hold a disposition could bind.",
    "No reviewer or refuter has read this amendment: the review ladder of this pass ended at its third round, before the refutation that named the defect."
  ],
  "rejected": [
    {
      "option": "Record the defect for a later pass",
      "reason": "The operator refused that on 2026-11-09 (the journal row above)."
    },
    {
      "option": "A further planning judgment of the amended text in this pass",
      "reason": "npm run plan -- refute refuses it; the next planning pass's refutation judges this text."
    }
  ],
  "reopenWhen": "The next planning pass's refutation judges this text, or a verifier or reviewer of this order reports a clause the amendment wrote as unjudgeable or wrong."
}
```
