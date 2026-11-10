# WO-036 decisions

## WO-036-D001

```json
{
  "id": "WO-036-D001",
  "date": "2026-11-09",
  "dispatch": "planning: the pass of 2026-11-09, on the operator's message of about 04:12Z on 2026-11-10 UTC, after receipt 028",
  "decision": "Amend this order after its planning judgment under the operator's direction of 2026-11-09 that a planning pass settles in itself what it is able to settle and treats nothing on an unmerged branch as fixed (session journal row 2026-11-10T04:12:34Z, message SHA-256 9acd06f09b68b19e8af161046c0179a911ba11e5c9d9aecfbc927e7bb59b5414; the operator record, One pass, not two), bounded to the defect that judgment recorded for it: criterion 2 says why the hashes hold (that fixture's one tool is steer.blend at eb9d227 and the engine's avoid is unchanged), criterion 3 holds the settling repair to priority steering alone, and the Cost line names the repair. Bind the resulting order bytes through plan amend-order.",
  "evidence": [
    "Receipt 2026-11-10-planning-80685a5e0fbc1a46-028: criterion 2 kept the earlier known outcome's hashes while criterion 3 required two steering changes, and the Cost line did not name the settling repair (criterion 2).",
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
