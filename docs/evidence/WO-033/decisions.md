# WO-033 decisions

## WO-033-D001

```json
{
  "id": "WO-033-D001",
  "date": "2026-11-05",
  "dispatch": "resume: next — execute WO-033",
  "decision": "Move the nineteen dated planning documents without changing their bytes, record each move in the schema-1 map, and rewrite only the authorized standing references and ledger Record links. The existing record manifest is the preservation witness; the planning page follows the kit's document contract and this order's named reader tasks.",
  "evidence": [
    "WO-033 execution steps 1-5 and acceptance criteria 1-5",
    "scripts/lib/document-moves.mjs: referencePath resolves historical references from the original directory through the map; scripts/lib/document-kinds.mjs derives record and standing kinds",
    "Core DylanBWood/DotLn at 1823a9cd: docs/control/document-moves.json and WO-238 step 10, read from the local core checkout",
    "Before any move: ls docs/planning lists nineteen dated Markdown files; listings.md retains the full listing",
    "Before any move: bounded npm run plan -- documents reports standing 77, record 506, generated 10; unread 25; census 53 sessions, 33 observed and 20 unobserved, with Codex reads a lower bound",
    "capture-records.mjs captured 1923 tracked files in records-before.json before the moves; the new WO-033 evidence directory is excluded"
  ],
  "rejected": [
    "NoOp: leaving the dated records in the planning root does not deliver the operator-authorized layout",
    "A global replacement would rewrite immutable evidence and receipts; use the kinds, closed-order state and kit manifest to select the authorized standing files",
    "A hand-maintained list of dated passes would duplicate generated navigation and drift; explain the standing inputs and record directories instead"
  ],
  "reopenWhen": "A moved record differs from its activation digest, an old reference fails to resolve, or a planning consumer cannot read the moved declaration or pass."
}
```

The working directory and Git root were verified as the selected WO-033
worktree before Git operations. The root executor is Codex CLI 0.166.0,
GPT-6 Astra at max effort, from the session readback. Activation and dispatch
had already refreshed the current projection; the order's explicit owning
render will establish its repeatability rather than reproduce a warning
that is no longer present.

Entry usage: 35,303 total tokens from the Codex transcript counter, dispatch
scope, cutoff 2026-11-05T17:32:45.644Z; cost unknown. The dispatch allows
8 h 0 min and three complete runs. The independent review ladder has up to
seven worker uses planned (three initial reviews, up to three focused
rechecks and one combined final delta review) against the cap of twenty;
workers may not spawn descendants or run a gate.

## WO-033-D002

```json
{
  "id": "WO-033-D002",
  "date": "2026-11-05",
  "dispatch": "resume: next \u2014 execute WO-033",
  "decision": "Relocate the existing historical-link exception source key in doc-baseline.json to the moved pass. The href, reason, count and provenance note remain unchanged; no exception is added.",
  "evidence": [
    "The step-2/3/4 bounded docs-check runs identified the original pass link to the formerly named WO-012 file; the existing exception key was still its old source path.",
    "scripts/docs-check.mjs matches exceptions by physical file, href and reason, without the move map on the exception key.",
    "After the single-field repair, bounded docs-check passes with 45 historical link occurrences and zero failures, and compare-records reports unchanged 1923.",
    "adjacent-0001 was announced, checked at a message boundary, and completed with both required passing checks."
  ],
  "rejected": [
    "Rewriting the pass would violate its immutable bytes.",
    "Adding a second exception or increasing the count would broaden the historical allowance.",
    "NoOp leaves the same old exception unrecognized after the authorized move."
  ],
  "reopenWhen": "A baseline field other than its moved source key changes, or the existing historical occurrence no longer matches."
}
```

## WO-033-D003

```json
{
  "id": "WO-033-D003",
  "date": "2026-11-05",
  "dispatch": "resume: next \u2014 execute WO-033",
  "decision": "Bind the seven open orders\u2019 authorized reference relocations through plan amend-order, each with an order-local decision. WO-033 explicitly directs these rewrites; no scope, criterion, design or release classification is changed. The amendment records are necessary write-backs of that existing authority, not a new planning verdict.",
  "evidence": [
    "The operator dispatched resume: next for WO-033; its Cost and execution step 3 explicitly authorize rewriting links in open orders, and criterion 4 requires plan check to pass.",
    "Bounded npm run plan -- check after the relocation refused existing work-order bytes changed.",
    "scripts/lib/plan-continuation.mjs only recognizes an automatic citation relocation from a product section to a planning section; ordinary planning-file moves and the active order\u2019s quoted locator do not qualify.",
    "scripts/lib/plan-receipts.mjs amendPlanOrder binds the same-order decision and changed order hash while preserving all filed receipt bytes."
  ],
  "rejected": [
    "Undoing the authorized links would fail WO-033 and keep stale standing navigation.",
    "Changing kit continuation logic is outside this order and unnecessary when the amendment command already exists.",
    "Editing receipts would destroy their original subject bindings."
  ],
  "reopenWhen": "An amendment includes any byte change beyond the nineteen mapped reference destinations and the owning release command\u2019s separately admitted version label."
}
```

## WO-033-D004

```json
{
  "id": "WO-033-D004",
  "date": "2026-11-05",
  "dispatch": "resume: next \u2014 correct the path-amendment binding",
  "kind": "correction",
  "misread": "The six other open orders were assumed to lack decision files; they already contain immutable decisions. A subsequent amendment loop incorrectly selected their existing D001 records after the creation script refused.",
  "meant": "Each path-only amendment needs a relevant order-local decision. The original D001 records concern earlier scope corrections and cannot supply this decision. WO-033 also requires the entire original record digest unchanged.",
  "changed": "Withdrew the six incorrect amendments through plan amend-order --withdraw, preserving the log. Prepared a six-file append-only proposal in session scratch and asked the operator to choose between authorizing those appends with original-byte preservation or keeping those six orders\u2019 old mapped links. No existing decision file was edited. The WO-033-D003 amendment for this order remains valid.",
  "decision": "Preserve the original records and the withdrawn-event history while the operator resolves the incompatible obligations. Continue the independently authorized election, projection and document write-backs.",
  "evidence": [
    "The creation script refused on the existing docs/evidence/WO-008/decisions.md; readDecisions requires each order\u2019s exact decisions.md path.",
    "The six previous D001 records are dated 2026-11-01 and describe earlier unrelated order amendments.",
    "WO-033 criterion 3 requires equal record-file hashes; the installed planner rejects the authorized open-order reference changes without amendments."
  ],
  "rejected": [
    "Treating the unrelated D001 bindings as valid provenance merely because the command accepts them.",
    "Editing a kit file or relaxing the preservation check without operator direction."
  ],
  "reopenWhen": "The operator selects the bounded contract correction, or a supported route accepts the link-only changes while preserving the existing files exactly."
}
```

## WO-033-D005

```json
{
  "id": "WO-033-D005",
  "date": "2026-11-05",
  "dispatch": "resume: next; release prepare",
  "decision": "Assign application target v0.3.5, the next patch above the observed release baseline v0.3.4, to the heading and the README version claim.",
  "evidence": [
    "release baseline v0.3.4 (ancestral local release tags, excluding annotated starter refresh tags)",
    "patch classification declared in docs/work-orders/WO-033-documents-follow-the-contract.md"
  ],
  "rejected": [
    {
      "option": "An activation-completion paragraph in the roadmap",
      "reason": "The tag is the record and the roadmap's release history is generated from tags (WO-086); this decision keeps the base and the classification."
    }
  ],
  "reopenWhen": "The observed baseline or the classification changes before publication; a later collision is recorded as its own decision."
}
```

## WO-033-D006

```json
{
  "id": "WO-033-D006",
  "date": "2026-11-05",
  "dispatch": "resume: next \u2014 finish WO-033 election, projection and patch release",
  "decision": "Declare only desktop-control as false with the operator\u2019s recorded 2026-11-01 reason; retain the other elections and all repository registration keys. Regenerate the lifecycle projection with its exported owner. Assign the classified patch through release prepare after supplying the heading placeholder that the filed order omitted.",
  "evidence": [
    "npm run features -- check passes; readFeatureInventory reports desktop-control source dotln.config.json and the other three features.* sources default. Budget-controlled sources remain docs/control/budgets.json.",
    "The bounded refreshControlProjection call and a second render byte comparison pass; bounded npm run resume -- status prints no projection warning. projection.diff records the difference from HEAD; activation had already repaired the observed stale state.",
    "npm run release -- prepare --local initially refused a missing strict version or placeholder; adding the supported placeholder lets the owning command assign the existing patch classification.",
    "npm run plan -- subject passes against HEAD; an additional bounded buildPlanSubject call with workspace true reads the declaration in passes/ and finds WO-008 as the open foundation outcome. The CLI itself reads HEAD and cannot prove an uncommitted move."
  ],
  "rejected": [
    "Declaring defaults as operator elections would invent choices.",
    "Hand-editing current.md would bypass its owning fold.",
    "Changing kit code for the release-heading omission is unnecessary; the existing placeholder is the supported input."
  ],
  "reopenWhen": "A generated surface differs from its owning render, another registration key changes, or the patch classification no longer describes the deliverable."
}
```

Projection command:

```sh
node scripts/harness.mjs bounded -- node --input-type=module --eval 'import { refreshControlProjection } from "./scripts/resume.mjs"; refreshControlProjection(process.cwd());'
```

## WO-033-D007

```json
{
  "id": "WO-033-D007",
  "date": "2026-11-05",
  "dispatch": "resume: next — operator approves six append-only amendment decisions",
  "decision": "Apply the operator-approved exception to WO-033: append one path-only amendment decision to each of the existing decision files for WO-008, WO-016, WO-017, WO-018, WO-023 and WO-024. Preserve their complete original byte prefixes and verify their baseline digests plus the exact authorized suffix digests. Every other captured record, including all moved passes and all receipts, remains byte-identical. Amend WO-033’s preservation wording to describe this six-file exception, and bind the seven updated orders with plan amend-order.",
  "evidence": [
    "Operator approval captured in docs/intake/notes/2026-11-05-wo033-record-appends.md; SHA-256 720d6409a051825368575f38350fec3ee8292c7980340ebd811daf499421e066. The preceding question specifically described these six appends and checking all original bytes unchanged.",
    "records-before.json retains the original activation hashes; authorized-appends.json records the original lengths and exact new suffixes.",
    "Core WO-238-D012 at 1823a9cd explicitly left receipt-bound work-order links unchanged; WO-033 requires their relocation, so this is an instance-specific additional step."
  ],
  "rejected": [
    "Keeping the six old work-order links was offered but the operator approved appending the decisions.",
    "Rewriting any original record bytes, weakening receipt checks, or changing kit implementation is outside the approved exception."
  ],
  "reopenWhen": "Any original prefix digest differs, an appended suffix differs from its authorized manifest, another record is altered, or a bound order changes beyond the authorized reference relocation and WO-033 preservation wording."
}
```

## WO-033-D008

```json
{
  "id": "WO-033-D008",
  "date": "2026-11-05",
  "dispatch": "resume: next — validate the approved candidate and begin independent reviews",
  "decision": "The approved append-only route is implemented. Core parity applies to the move map and record preservation, while this order additionally rebases the receipt-bound open-order links. Use three fresh independent Claude review workers through the repository helper, with the pinned Opus 5.5 model at xhigh, for criteria, design and consistency; retain the bounded ladder before the complete run.",
  "evidence": [
    "compare-records reports unchanged 1917 and original bytes preserved 6; authorized appends 6. The six suffixes match the manifest.",
    "Bounded plan check passes: 21 receipts, 20 passes and seven authorized execution amendments. The full exported register has 204 rows, including three closed historical missing-source rows; all 45 pending sources are present. git diff --exit-code HEAD -- docs/planning/followups.json confirms the entire register is unchanged, with no new missing source.",
    "Core WO-238-D012 at 1823a9cd explicitly retains old work-order links because receipts bind their bytes; its D036/D037 and handoff criterion 10 preserve that distinction.",
    "The role supports a Claude print worker from Codex through npm run worker -- review --host claude. The root remains the sole repository writer; workers review only."
  ],
  "rejected": [
    "Claiming the six appends were core’s own implementation would contradict its recorded D012 decision.",
    "Starting a complete gate before the three independent reviews would violate the executor ladder."
  ],
  "reopenWhen": "A reviewer finds a concrete acceptance defect, the approved append manifests fail, or a complete gate names a repair."
}
```

## WO-033-D009

```json
{
  "id": "WO-033-D009",
  "date": "2026-11-05",
  "dispatch": "resume: next — resolve round-one review findings",
  "decision": "Fix the exact standing-path scan, remove whitespace from the saved projection diff, and correct the affected navigation and control documentation. Keep the record witnesses and the six approved suffixes unchanged. Complete the review ladder after these documentation-only fixes, then run the complete and document gates.",
  "evidence": [
    "Three independent read-only Claude reviews inspected tree c3991324a79f2701dabf6ed4b4bcd94f7d32c3b5 against a4af0bc51f2a495b36f5c909279cfeaceda1ae78. Their reports and every finding disposition are indexed in review-resolution.md.",
    "All three found the same two defects: the literal required scan still matched WS-001, and projection.diff had two trailing-space context lines. The corrected inventory uses the literal expression over 44 standing files plus the ledger: 48 baseline matches and zero current matches. links-scope.json makes the selection reproducible.",
    "Core document-moves.json at 1823a9cd maps the cited intake-mining-run-routing-2026-10-24.md to passes/. WS-001 is standing and is not an order-byte binding; the bounded plan check after its one-line correction passes with 21 receipts, 20 passes and the same seven authorized amendments.",
    "Bounded plan documents after the moves reports standing 78, record 514, generated 10, unread 26 and no red-tag rows. Its census covers 53 sessions, 33 observed and 20 unobserved; Codex reads remain a lower bound. This observation precedes the new review-resolution evidence file.",
    "scripts/resume.mjs uses project(render(...)) directly for lifecycle transitions; refreshControlProjection is the transition-free owner used by integration. The control README now says this accurately and drops the nonexistent doc-ceilings.json and the duplicate election sentence.",
    "The planning page names the historical critical-path input without introducing a dated filename. D007 at planning-log row 55 supersedes D003 at row 42 under currentAmendments latest-row-per-order semantics; only the six wrong unrelated D001 bindings were withdrawn.",
    "The operator asked what Codex reviewers would change. Both supported hosts use the same briefs, candidate and report contract; Codex pins GPT-6.1 Sol at max and Claude pins Opus 5.5 at xhigh. The earlier explanation confused worker record metadata with the supported worker review route. No evidence established a quality or speed advantage for Claude; the three already-running reviews were retained without relaunching them.",
    "Round-two review is skipped because all review fixes are documentation, formatting or generated output. Neither evidence script nor runtime source changes after the reviewed tree. Round three is therefore not required."
  ],
  "rejected": [
    "Waiving the remaining regex match would hide an in-scope stale standing citation whose correct destination is known.",
    "Changing the witness selection or replacing its tested kit map reader solely for hypothetical future compatibility would expand this document move. The manifest follows the explicit all-files-under-roots instruction and independently matches all 1,923 baseline Git blobs.",
    "Rewriting historical baseline notes or links inside records would weaken the original-byte contract. The map-based reader limitation is recorded explicitly.",
    "A new reviewer run for documentation-only fixes would add cost without being required by the bounded review ladder."
  ],
  "reopenWhen": "A complete or document gate names a defect, the literal standing scan matches an old path, any original record bytes differ, or a later lifecycle event reproduces a projection warning."
}
```

The owner-generated projection difference from the activation baseline is
recorded below with zero context, so blank context lines introduce no trailing
whitespace. It is also retained in [projection.diff](projection.diff).

```diff
diff --git a/docs/control/current.md b/docs/control/current.md
index 30751fb..e3420c6 100644
--- a/docs/control/current.md
+++ b/docs/control/current.md
@@ -2,0 +3,17 @@
+## WO-033
+
+- Work order: WO-033
+- Work-order path: docs/work-orders/WO-033-documents-follow-the-contract.md
+- Phase: active
+- Latest verification: none
+- Verification path: none
+- Latest verdict: none
+- Final review: none
+- Final-review path: none
+- Latest attestation: none
+- Effort drift: none
+- Latest recordedAt: 2026-11-05T17:32:06.352Z
+- Latest checkpoint: 4148b8587cc452086093924e6e7c835077f0e1f6 (restore: `git checkout refs/dotln/checkpoint/WO-033/1 -- .`)
+- Legal next actions: next, implementation-ready
+- Legal off-ramps: accept-overrun, withdraw, correct, override-record
+
```

## WO-033-D010

```json
{
  "id": "WO-033-D010",
  "date": "2026-11-05",
  "dispatch": "resume: verify — independently judge WO-033",
  "decision": "Retain the implementation and judge all eight criteria met, with the final document gate required before filing VER-001. Consume the intact executor complete row at the unchanged code identity. Use independent Git-baseline, real-link and focused behavior probes to challenge the material claims; no implementation repair or new follow-up is required.",
  "evidence": [
    "verification.md records the executed probes, their results, the private-review source boundary and corrected verifier-instrument errors.",
    "All 1923 captured records independently match their original Git blobs; 1917 complete current files and six original prefixes are unchanged, and the six authorized suffixes match exactly. The recorded approval capture digest agrees.",
    "The required nineteen moves, all 45 standing-scan inputs, 218 local standing links and 40 moved-document relative links pass. The current workspace compiler finds the moved critical-path declaration.",
    "The map-reader and desktop-refusal tests each pass. Feature inventory, planning checks, generated-index checks, repeated projection renders, implementation formatting and protected-input comparisons pass.",
    "The complete gate at 2026-11-05T18:05:39.748Z is intact at the current code identity with seven covered suites and no failed or missing task."
  ],
  "rejected": [
    "NoOp on verification would leave the implementation unjudged; the completed independent review supplies the required evidence.",
    "Rewriting historical links or adding browser redirects would change the accepted map-reader design and the record-preservation contract.",
    "Rerunning an already valid complete gate would repeat unchanged product evidence; targeted probes and the required final document gate address this phase's uncertainty.",
    "Treating every possible budget key as explicitly declared would invent an election; compare declared keys and retain defaults for absent ones."
  ],
  "reopenWhen": "A record or authorized suffix differs, a required standing link or planning input is lost, the explicit false election admits desktop control, the projection diverges, or the final document gate or later integration reproduces a failure."
}
```

## WO-033-D011

```json
{
  "id": "WO-033-D011",
  "date": "2026-11-05",
  "dispatch": "resume: final review — accept WO-033 and publish the wo-033 branch",
  "decision": "Accept WO-033 in FINAL-001 with all eight criteria met and record pass. Integrate main before judging: main had not moved past the activation base, the integration took in nothing, and the executor's complete review row at the unchanged code identity 2651683b2d2bc56af8eba84252a15f72fbb24b15363250953a7fde28f4ba0ebc is the row the completion consumes, so no complete run is owed. Reproduce every criterion's check from the candidate under the bounded wrapper rather than carry the executor's or the verifier's figures. Judge the order's four known issues and the refutation receipt's six from the candidate and reopen none. Leave the thirty follow-up rows the change matched textually as they are, because the change opened none of their seams and none of their conditions occurred. After the result, commit the reviewed state as four commits (the moves with their map, baseline key, rewritten links, appended decisions and planning-log bindings; the planning page and the directory READMEs; the election with its generated page; the order's records, control segment, projection, indexes and release claim) and publish the wo-033 branch with the reviewed PR body.",
  "evidence": [
    "npm run worktree -- integrate WO-033 with an intake backup in the DotLn session scratch (DotLn-Instance-wo033-intake-20261105T183208Z.zip, two files): Integration took in nothing: the worktree is not behind main; main, origin/main and HEAD all at a4af0bc51f2a495b36f5c909279cfeaceda1ae78.",
    "gateCodeIdentity of the working tree equals the complete npm test row's code identity (review selection, seven fresh suites, exit 0, recorded 2026-11-05T18:05:39.748Z, tree 07b4d277c0c02723f5b68424b7d86afa8a6aaa88).",
    "Bounded reproductions on 2026-11-05 from 18:29Z: docs-check PASS with 0 failures and 45 declared historical link occurrences; compare-records unchanged 1917, original bytes preserved 6, authorized appends 6; plan check exit 0; followups --sync exit 0 with no sourceMissing row and followups.json byte-identical; features check Features current; the owner render leaves current.md byte-identical; the workspace compiler reads the moved critical-path declaration and its text equals the HEAD read; plan documents reports no red tag; the desktop-refusal and map-reader focused tests pass 1 of 1 each.",
    "The literal criterion-3 grep over the 45 inputs of links-scope.json exits 1; git diff --check is clean; all 1,103 kit files match KIT-MANIFEST.json and none is in the change set; package.json, package-lock.json and CLAUDE.md are unchanged; status prints no projection warning after the verification and final-review dispatches.",
    "npm run plan -- followups --touching: 30 of 45 pending rows matched by the moved pass paths or the touched READMEs; each row's reopening condition names a merge, an operator ask or a core release that has not occurred.",
    "The private review lane docs/control/local/reviews/WO-033/ holds the three round-one reports and their JSON; the Secrets floor keeps their contents out of this record, and review-resolution.md's nineteen dispositions were judged by reproducing the claims they rest on."
  ],
  "rejected": [
    "Rerunning the complete review gate: the code identity says what was tested and no code byte moved since.",
    "Adding a link to the dated critical-path file from the planning page to satisfy the receipt's criterion-5 reopening wording: criterion 5 forbids naming a dated document, and the compiler finds the declaration without it.",
    "Disposing follow-up rows on a textual match alone: the register's rule is that a match is a pointer for judgment, never a verdict.",
    "Opening the private review reports to recount their findings: the published dispositions and the reproduced claims carry the judgment without copying the lane."
  ],
  "reopenWhen": "The publish refuses the committed body or title, a later lifecycle event reproduces the projection warning without a manual regeneration, a reader of a moved record cannot reach it through the map, or the next planning pass judges the critical-path declaration's kind differently."
}
```
