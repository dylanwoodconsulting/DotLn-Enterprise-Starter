# WO-025 decisions

## WO-025-D001

```json
{
  "id": "WO-025-D001",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Run the pass under the quality pass: paragraph of the generated role text at starter v0.103.1, with this order as the authority for the edits. The phrase names the procedure and is not a dispatch, so no separate quality pass: prompt is needed and no lifecycle event follows from it.",
  "evidence": [
    "UPSTREAM.md: kit commit 4090d70dc908dbc69e0cd3601a982d40aecb4b6c, tag v0.103.1. The paragraph opening quality pass: <target> is byte-identical in the six .claude/skills role files.",
    "npm run resume -- status --json read WO-025 active at checkpoint 45a0f6f77acaeef445a41eed359ee162c80c685d, with this worktree and main both at 346941584b1ed29236756963c44110e6a002fa58, so no integration was owed at entry.",
    "The order's step 1 reads as WO-003 step 1, but that step writes the registration and carries no base guard; the guard of that shape is WO-012 step 1. The operator had already activated the order, so the executor read the resulting state rather than repeating activation. The pre-activation document run on main is unobserved."
  ],
  "rejected": [
    {
      "option": "Repeat activation or the pre-activation gate to manufacture the guard's observation",
      "reason": "A second activation is illegal and proves nothing about the state before the first."
    }
  ],
  "reopenWhen": "A starter update changes the quality pass: paragraph before this order closes."
}
```

## WO-025-D002

```json
{
  "id": "WO-025-D002",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Make criterion 5's literal count true by changing the seven taxonomy kinds in WS-001 from a numbered list to a bulleted list that keeps each number in its bold lead (1. Fragment to 7. Container). The house rules stay as the only numbered bold items in the document. Disclose it here and in the census.",
  "evidence": [
    "At base, grep -c \"^[0-9]*\\. \\*\\*\" docs/workstreams/WS-001-dotln-angular.md printed 33, not the 26 the order's step 5 and criterion 5 expect, because the seven kinds share the house rules' shape. Scoped to the House rules section the same grep printed 26.",
    "No committed planning document, order, profile or operator text cites a taxonomy kind by number (grep over those roots for kind or taxonomy followed by a digit printed nothing).",
    "After the edit the literal grep prints 26, the numbers read 1 to 26 consecutively, and the dotln-workstream block's digest equals the base's. Every kind keeps its number, its wording and its place."
  ],
  "rejected": [
    {
      "option": "Leave the list and judge criterion 5 unmet",
      "reason": "The house rules are intact and the fix is a harmless markup change inside this order's authority; an unmet line would spend an operator waiver on a check the document can honestly satisfy."
    },
    {
      "option": "Judge criterion 5 met on the scoped grep while the literal grep prints 33",
      "reason": "That rewrites the criterion in prose. A criterion changes only through amend-order with the operator's authorization."
    },
    {
      "option": "Turn the kinds into a table",
      "reason": "Each kind holds several sentences of prose that read worse in cells, and the wider rewrite is not needed to fix the defect."
    }
  ],
  "reopenWhen": "A reader or a later order needs to cite the kinds as list numbers, or the operator prefers the numbered form and the order's check is restated."
}
```

## WO-025-D003

```json
{
  "id": "WO-025-D003",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Run npm run release -- prepare --local as the role directs, which assigns this order's patch version in its heading and rewrites README.md's generated claim line, and judge criterion 6 unmet for exactly that reason rather than met. Criteria 6 and 8 cannot both hold as written: the pass itself edits neither path, the two writes are the release command's, and the verifier and the operator see the conflict plainly and decide it through the waiver route.",
  "evidence": [
    "Criterion 6 requires git diff --name-only <base> HEAD to name no file under docs/work-orders/WO-*.md or README.md. The order's Non-goals repeat the exclusion, while its header classifies a patch release and its heading carries the (version assigned at activation) placeholder.",
    "scripts/lib/release-preparation.mjs replaces that placeholder in the heading and rewrites the README claim, and refuses to run without both. Product 07 §Documentation freshness and ownership says the release block between its markers holds only the version line release prepare writes.",
    "npm run release -- check-surfaces --local exits with work-order heading must contain exactly one strict vX.Y.Z version while the placeholder stands. scripts/test-runner.mjs declares release-surfaces as a preflight of the document selection, and scripts/lib/generated-artifacts.mjs includes the same check in the generated structural check every selection runs, so npm test and npm run test:docs both fail until the version is assigned. Criterion 8 requires both to pass.",
    "scripts/lib/plan-continuation.mjs admits exactly this heading change as a release assignment, so npm run plan -- check stays clean and no judged criterion text changes."
  ],
  "rejected": [
    {
      "option": "Skip release preparation so criterion 6 holds literally",
      "reason": "Every gate then fails, criterion 8 is lost, and release close cannot read a version; the order could not close."
    },
    {
      "option": "Judge criterion 6 met because the writes are generated",
      "reason": "That waives the criterion in prose. The role forbids it, and a waiver is the operator's."
    },
    {
      "option": "Stop and ask the operator to amend the criterion",
      "reason": "The role directs that a phase decides and records its safe default and does not ask the operator to change criteria; the waiver route stays open at verification with nothing lost."
    }
  ],
  "reopenWhen": "The operator authorizes an amendment of criterion 6, or waives it, or a kit release stops writing either path.",
  "followup": "Keep a self order's path exclusions compatible with release prepare: an order that classifies a release and excludes README.md or docs/work-orders/WO-*.md must carve out the generated claim line and its own heading label. Touches docs/planning and the next self order's criteria; check by reading each filed self order's exclusions against scripts/lib/release-preparation.mjs."
}
```

## WO-025-D004

```json
{
  "id": "WO-025-D004",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Leave docs/product/purpose.md unchanged. Its purpose block is bound by the latest planning receipt, so a currency edit there belongs to a planning pass; nothing outside the block is wrong. Name the block's forward-looking sentences as unresolved facts in the census, and state the binding once in docs/product/README.md so the next editor does not meet it by surprise.",
  "evidence": [
    "scripts/lib/plan-subject.mjs composes the purpose block into the goal standard, and scripts/lib/plan-continuation.mjs requires the judged and current goal standard to be the same.",
    "A one-word probe inside the block made npm run plan -- check print planning pass needs a receipt matching the current subject: observed evidence or goal standard changed. A one-word probe outside the block left the workspace subject equal to the judged subject with no advisory. The file was restored after each probe and git status shows it unchanged.",
    "The order asks for sentences true of the app as it is and also requires plan check to report no advisory from this order; the block's mining store, machinery view and twin are stated as purpose, not as present features."
  ],
  "rejected": [
    {
      "option": "Edit the block for currency anyway",
      "reason": "npm run plan -- check and the document gate would fail, losing criteria 7 and 8, and no refutation has judged a new standard."
    },
    {
      "option": "Add a status sentence outside the block",
      "reason": "The block is a statement of purpose and is not false; the workstream and the profile already state what exists today."
    }
  ],
  "reopenWhen": "A planning pass restates the purpose under its own refutation.",
  "followup": "The next planning pass rereads the purpose block against the app: the critical-path sentence describes a path mostly run, and the data sentence states the mining store as purpose. Touches docs/product/purpose.md under a new receipt; check with npm run plan -- check."
}
```

## WO-025-D005

```json
{
  "id": "WO-025-D005",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Flag step 10's pull-request title for the final review instead of following it silently: the order prescribes docs: pass the launchpad's standing documents for usefulness and currency, while the operator's rule and WS-001 rule 20 give the launchpad's own pull requests a gitmoji and the subject with no conventional type. The title is the reviewer's step and this executor publishes nothing, so it records the conflict and the reading: a live direction binds over an order's text, which suggests :memo: Pass the launchpad's standing documents for usefulness and currency.",
  "evidence": [
    "docs/operator/README.md §Commits, reviews and releases and WS-001 rule 20 (the launchpad's own pull requests carry the gitmoji and the subject only), restated by the operator on 2026-10-30, capture SHA-256 58331059e353d8c7c5ea2dc167312bf4cec97fa978d533324e4128d4719a4d65.",
    "The launchpad's merged titles follow it: #42 reads :memo: Plan the concept-study batches and the document quality passes.",
    "The order was filed before that restatement took effect in WS-001; its text is judged and this order may not edit it."
  ],
  "rejected": [
    {
      "option": "Amend the order's title line",
      "reason": "Judged order text changes only through amend-order with the operator's authorization, and the title is decided at publish."
    }
  ],
  "reopenWhen": "The kit's self-order publish lint requires a conventional type, which the final review reports."
}
```

## WO-025-D006

```json
{
  "id": "WO-025-D006",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Edit the seeded files the order names as standing where they are wrong, knowing a later starter change to the same lines arrives as a Git merge conflict the update session resolves. docs/repositories/README.md takes the operator's chosen profile shape and loses its stale claim that no script reads a profile; AI-HARNESS-SECURITY.md is filled in; the floor's description of the operator record stops promising a reading of their tone; docs/workstreams/README.md stays unchanged because it is byte-identical to the kit's template at this release and nothing in it is wrong.",
  "evidence": [
    "scripts/lib/starter-seeds.mjs lists README.md, CLAUDE.md, AI-HARNESS-SECURITY.md and the workstream and repository README files as seeds. The order excludes only README.md and names the others as standing.",
    "The executor role's text and product 07 §Where the control plane finds its documents say the executor reads a profile on demand, so the README's sentence that the scripts do not yet read it was false; the operator record gives the table-led shape as their preference for standing documents.",
    "AI-HARNESS-SECURITY.md still held the template's placeholders; README §First steps requires the settings actually loaded to be recorded there. No test or generated surface reads its sections, and the kit's CLAUDE.md floor template does not hold the Read[all roles] line, so harness check is unaffected: 35 surfaces, exit 0.",
    "The Clean Room paragraphs and the Secrets paragraph are unchanged; the only CLAUDE.md change is the one description line."
  ],
  "rejected": [
    {
      "option": "Leave every seed alone until core's WO-207 lands",
      "reason": "The order names them as standing, and they would go on stating false things to every reader in the meantime."
    },
    {
      "option": "Keep the kit's template in docs/repositories/README.md and only fix the sentence",
      "reason": "A second profile written from it would follow the shape the operator moved away from and carry the Checked field the order drops."
    }
  ],
  "reopenWhen": "A starter update conflicts in docs/repositories/README.md, as core's WO-238 is expected to; the update keeps this instance's template unless the operator says otherwise."
}
```

## WO-025-D007

```json
{
  "id": "WO-025-D007",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Rewrite the profile in the seven sections from the committed profile, the target at 6268de9 and the launchpad's records, using the intake draft for its shape only. Open with the table, drop the Checked field, keep a Release close subsection so three immutable records' anchor still resolves, and keep the exact grep commands and the upstream pins the draft thinned. Add two recovery items the draft could not know: the gate gap CI found on WO-015 and the dispatch bound.",
  "evidence": [
    "The draft is core's session's text, not a draft the operator marked ready to file, so CLAUDE.md's floor forbids copying its wording. The order calls it a shape to follow, never text to copy. It also carries superseded facts: DotLn Angular v0.4.0, the root at /board, WO-019 as active, tool-v0, and lint:fixtures in the lint target, which tools/project.json does not run.",
    "docs/evidence/WO-011/README.md, docs/final-reviews/WO-011/PR.md and docs/final-reviews/WO-012/PR.md link ../../repositories/dotln-angular.md#release-close; node scripts/docs-check.mjs failed on all three until the subsection existed. The heading is a level three, so grep -c \"^## \" still prints 7.",
    "The path check in the evidence README resolved 101 of the profile's 124 path-shaped spans at 6268de9 and in this tree; the other 23 are repository names, upstream references, import aliases, routes, ignored local files and worked examples, read one by one. Releases and merges came from gh release list and gh pr list naming DylanBWood/DotLn-Angular; the clone's local tags stop at v0.4.0, so they could not supply v0.5.0 or v0.6.0.",
    "The target's scripts, CI and the WO-015 decision show typecheck:e2e runs in CI and not in the registered gate; no filed order's Preflight names it."
  ],
  "rejected": [
    {
      "option": "Copy the draft and correct the stale facts",
      "reason": "Forbidden by the Clean Room floor and by the order."
    },
    {
      "option": "Add an HTML anchor for release-close",
      "reason": "A heading is the same fix in the document's own form, and it labels the passage the records point at."
    }
  ],
  "reopenWhen": "The target's next merge changes the reviewed source or a release, or the registered gate gains typecheck:e2e."
}
```

## WO-025-D008

```json
{
  "id": "WO-025-D008",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Keep the environment truth as the dated inspection it is and add a Current readings section after its introduction, re-read today, rather than rewriting its findings. Leave docs/discovery/environment.json untouched: it is not Markdown, this pass writes no control or configuration record, and the attestation advisory it causes is informational.",
  "evidence": [
    "The page's probes and labels are a bounded inspection with its own commands; re-running every one would be a new inspection, not a document pass. Node, npm, Git and the OS are unchanged; Claude Code moved from 2.1.299 to 2.1.314, Codex CLI from 0.162.1 to 0.166.0, and generated surfaces from 34 to 35.",
    "The confinement probe in this linked worktree printed inForce false and the lock probe acquired twice; .claude/settings.local.json exists only in the main checkout.",
    "README §Attestations says an unmatched version or effort is recorded as supplied with an advisory and never refused."
  ],
  "rejected": [
    {
      "option": "Run npm run discover and rewrite environment.json",
      "reason": "The order's Cost and Non-goals keep it to documents, and the record carries hand-labelled rows a rerun would not reproduce."
    }
  ],
  "reopenWhen": "A session needs an attestation with no discovery advisory, or a harness change makes the inspection misleading.",
  "followup": "Refresh docs/discovery/environment.json for the installed harness versions so attestations stop printing the discovery advisory. Touches docs/discovery/environment.json under an order that owns it; check with npm run discover and one attestation."
}
```

## WO-025-D009

```json
{
  "id": "WO-025-D009",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Pass the operator record with no rule added, removed or changed in substance. Give every item a bold lead, group the standing preferences under four headings, move two items to better places, split two items so each date governs its own text, merge the one direction carried twice, correct three stale phrases and drop a phrase that called a paraphrase the operator's words. Name the digests that do not resolve and the directions no pass recorded as gaps for the next pass; write none of them as rules.",
  "evidence": [
    "The digest and date multisets before and after are equal (37 digest tokens, 47 dates; both diffs empty, recorded in the census). The bullets go from 46 to 47: the short-acknowledgement line joins the dictation item, and the naming and harness items each split in two.",
    "The three phrases: the record said the history lives in the planning documents and the repository profile, while its own later item and product 07 name the orders' decisions and the profile no longer carries that history; it said every item names its date and capture, which is not so for undated items; and it placed one capture in WO-019's worktree, which release close removed, while that digest resolves at docs/intake/notes/WO-019-expanded-ideation-2026-10-26.md.",
    "All digests in the record resolve against ignored intake except 39b30d94, which names docs/intake/notes/planning-2026-10-30-second-messages.md before later messages were appended (that file now hashes to 58331059), and a7f2260e, which resolves in core's intake as the record says.",
    "The captures from 2026-10-26 onward were read against the record; that boundary is the search's. The gaps are listed in the census."
  ],
  "rejected": [
    {
      "option": "Re-cite 39b30d94 to the file's current digest",
      "reason": "Criterion 4 requires the digest multiset to stay equal, and the older digest is what the pass recorded."
    },
    {
      "option": "Write the unrecorded session directions into the record",
      "reason": "The order leaves them as gaps for the next pass; whether each is standing is the operator's."
    }
  ],
  "reopenWhen": "The operator says a rule was lost or changed in the diff.",
  "followup": "The next planning pass reads the census's gaps with the operator: the session directions no pass recorded, WO-015-D022's follow-up absent from the register, the unused implementation-guidance row in docs/control/doc-baseline.json, the digest 39b30d94 that no longer resolves, and the write-backs of WO-008, WO-016, WO-017 and WO-018 that still name the profile's old Demonstrated architecture section. Touches docs/operator/README.md, docs/planning/followups.json, docs/control/doc-baseline.json and those orders through amend-order; check with node scripts/docs-check.mjs and npm run plan -- check."
}
```

## WO-025-D010

```json
{
  "id": "WO-025-D010",
  "date": "2026-10-31",
  "dispatch": "resume: next; release prepare",
  "decision": "Assign application target v0.3.4, the next patch above the observed release baseline v0.3.3, to the heading and the README version claim.",
  "evidence": [
    "release baseline v0.3.3 (ancestral local release tags, excluding annotated starter refresh tags)",
    "patch classification declared in docs/work-orders/WO-025-quality-pass-launchpad-documents.md"
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

## WO-025-D011

```json
{
  "id": "WO-025-D011",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Update house rules 8, 9, 10 and 13 in tense and fact only, keeping each rule's number and substance. Rule 8 names the call-state feature WO-007 chose, rule 9 names the check that now refuses translation drift, rule 10 says the default stands and where it applies today, and rule 13 names the shared-types check that landed. WS-001 says a rule changes through a planning pass or an order's recorded decision, so this is that record.",
  "evidence": [
    "Rule 8: the target's libs/shared/data-access/src/public_api.ts re-exports the toolkit's withCallState, as WO-007-D002 chose; the rule still read WO-007 decides.",
    "Rule 9: the target's docs/dev-reference/workspace/scripts.md describes npm run i18n:check as refusing missing or extra keys; typed keys remain a later member, as the proposed members list says.",
    "Rule 10: libs/shared/core/src/lib/paths/app-base-path.ts is the target's only non-spec providedIn: 'root', the sole exception WO-005-D005 records pending the operator's ruling, so the rule keeps the default and cites that decision.",
    "Rule 13: tools/scripts/check-shared-types.mjs exists, runs in the workspace-tools lint target and exits nonzero on a finding; the rule still said the check lands with a later order.",
    "git diff 3469415 on the other 22 rules shows no change, and the numbers read 1 to 26."
  ],
  "rejected": [
    {
      "option": "Leave the four rules as they read",
      "reason": "Each stated as future something that has happened, and the order asks WS-001 to say what is so."
    }
  ],
  "reopenWhen": "The operator reads one of the four edits as a change of substance."
}
```

## WO-025-D012

```json
{
  "id": "WO-025-D012",
  "date": "2026-10-30",
  "dispatch": "resume: next",
  "decision": "Keep the one line docs/control/orders/WO-015.jsonl gains in this order's diff and land it with the order. This pass did not write it: the kit's worktree start carried WO-015's pending OperatorOverrideRecorded event into the new worktree and removed the pending file. The order's statement that no control record changes holds for the pass's own edits, and the evidence now says so plainly rather than denying the line.",
  "evidence": [
    "git status at the dispatch's first command already showed the file modified, before any write of this order.",
    "scripts/worktree.mjs calls carryPendingOverrides from scripts/lib/pending-overrides.mjs at start. The event is dated 2026-10-30T21:47:08Z, before this order's activation at 2026-10-31T01:04:11Z.",
    "The main checkout's copy has 9 lines and this worktree's has 10, so this worktree holds the only copy. docs/control/current.md and docs/work-orders/HISTORY.md project it, and the profile's recovery context cites it."
  ],
  "rejected": [
    {
      "option": "Revert the line to keep the diff free of control records",
      "reason": "It would destroy the only copy of WO-015's override record."
    }
  ],
  "reopenWhen": "A later kit release carries pending overrides differently."
}
```

## WO-025-D013

```json
{
  "id": "WO-025-D013",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Widen the order on the operator's direction and amend its text. The exclusion of README.md comes out of criterion 6; the root README.md stays the starter's, changed only by its release line, and the launchpad's fixed page lives at docs/launchpad-readme.md off the main page. The pass closes the gaps it found rather than listing them for a later pass, and records the operator's unrecorded standing directions. Step 10's title takes the gitmoji form. Work continues in this writer's session, every gate runs again on the final tree and the handoff is rewritten, because the kit has no route from ready-to-verify back to the executor.",
  "evidence": [
    "Operator direction captured in docs/intake/notes/wo-025-session-2026-10-30.md, SHA-256 75779a72a7d069063d3789fecd0e3ba15f45010d9f6f310a426d8a6197965cbd, entries 1 to 6: the README should be edited if need be; a report that lists gaps the session knows and has decided to leave is of no use; the README is fully in play for this launchpad; a temporary README should hold the fixed version off the main page if the root page would cause trouble in upstream merges; a follow-up replaces the root page once that trouble ends; and the old page need not be archived if the kit moves its instruction text elsewhere.",
    "git log -- README.md shows 32 commits touching the root page, 9 of them merges of starter updates, so a rewritten root page would conflict on updates.",
    "resume.mjs gives ready-to-verify the one legal action verify. fix is refused with no failure source, and implementation-ready is illegal there. An ImplementationReady event at checkpoint refs/dotln/checkpoint/WO-025/2 therefore predates this work, and its ledger of 6 met and 2 unmet predates this amendment.",
    "Product 07 §Operator-opened planning pass gives this route for an operator-authorized scope change: the decision records the authorization and amend-order binds the approved text. It is not a fresh planning verdict."
  ],
  "rejected": [
    {
      "option": "Rewrite the root README.md",
      "reason": "The operator's direction keeps it off the main page while upstream merges would conflict."
    },
    {
      "option": "Leave criterion 6 unmet for an operator waiver",
      "reason": "The operator's words remove the exclusion the criterion carried, so the text changes rather than the verdict."
    },
    {
      "option": "Record the work after the handoff as an operator override",
      "reason": "No operator override session happened, and that event would say one did."
    }
  ],
  "reopenWhen": "Verification or final review finds this work needed another route, or the kit gains a route from ready-to-verify back to the executor."
}
```

## WO-025-D014

```json
{
  "id": "WO-025-D014",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Hold the launchpad's own README at docs/launchpad-readme.md, written in the operator's table-first shape, with nothing else at the root changing. The page says why it is not at the root and what moves it there. It carries no release block, because the release surfaces read only the root page's.",
  "evidence": [
    "Operator direction in docs/intake/notes/wo-025-session-2026-10-30.md, SHA-256 75779a72a7d069063d3789fecd0e3ba15f45010d9f6f310a426d8a6197965cbd, entries 3 to 6.",
    "scripts/lib/release-preparation.mjs and scripts/release.mjs read the release block from the root README.md only, and scripts/docs-check.mjs holds no front-page control here because docs/control/front-page.json does not exist.",
    "The kit's generated block in CLAUDE.md names README.md as how to start, and the root page goes on saying so."
  ],
  "rejected": [
    {
      "option": "Add an instance section at the top of the root page",
      "reason": "It keeps the conflict the direction exists to avoid, on the lines every reader sees first."
    },
    {
      "option": "Archive the root page now",
      "reason": "It stays in place, so there is nothing to archive yet."
    }
  ],
  "reopenWhen": "The upstream kit no longer causes merge issues with the main README.",
  "followup": "Replace the root README.md with docs/launchpad-readme.md, keeping the release block the kit reads, and archive the old page unless the kit has moved its instruction text to another location, in which case that location is the reference and no archive is needed. Touches README.md and docs/launchpad-readme.md; check with npm run release -- check-surfaces --local and node scripts/docs-check.mjs."
}
```

## WO-025-D015

```json
{
  "id": "WO-025-D015",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Add npm run typecheck:e2e to the dotln-angular registered gate in both selections, which closes the gap WO-015-D022 named through the registration route it offered, and update the profile to say so. No filed order's Preflight needs a change, because each target order's gate reads the registration.",
  "evidence": [
    "In a throwaway clone of the target at 6268de9, npm ci exited 0, the gate's command exited 0 on the clean tree and exited 2 after a mistyped line was added to apps/dotln-e2e/src/scene.spec.ts, with error TS2322. The registered clone stayed at 6268de9 with no status lines.",
    "scripts/lib/config.mjs validates the new command, and loadConfig reads plain as install, lint, typecheck, test, format and review as install, lint, typecheck, test, format, build, e2e, visual.",
    "Target-worktree publication compares only the registration's publication fields, so the gate's new command changes no admission.",
    "Operator direction in docs/intake/notes/wo-025-session-2026-10-30.md, SHA-256 75779a72a7d069063d3789fecd0e3ba15f45010d9f6f310a426d8a6197965cbd, entry 2."
  ],
  "rejected": [
    {
      "option": "Add the check to the target's workspace-tools lint target",
      "reason": "That is a target change, which a self order does not make. This change also meets D007's reopening condition, and the profile is updated for it."
    },
    {
      "option": "Write the command into each open order's Preflight line",
      "reason": "It takes an amendment per order and misses every later order."
    }
  ],
  "reopenWhen": "The target moves the check into its own lint target, when the registered command becomes redundant.",
  "followup": "WO-026 moves typecheck:e2e from the helpers to the registered gate in the target's docs/dev-reference/workspace/scripts.md, which still lists it as a helper because the registration lives in the launchpad. Touches that file; check with npm run check:scripts."
}
```

## WO-025-D016

```json
{
  "id": "WO-025-D016",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Close the remaining gaps from the census and settle their follow-up rows. Refresh docs/discovery/environment.json for the installed harnesses, reversing D008's choice. Remove the unused implementation-guidance row from docs/control/doc-baseline.json. Treat the digest 39b30d94 as verified. Settle the purpose block as true, and read the four open orders' old section name as answered by the profile.",
  "evidence": [
    "npm run discover -- harness ran for all three harnesses under the bounded wrapper and added Claude Code 2.1.314, Codex CLI 0.166.0 and Copilot CLI 1.0.94 to the record.",
    "The first 965 bytes of docs/intake/notes/planning-2026-10-30-second-messages.md, which end after message 5, hash to 39b30d94667c52a26d7d6efba61bb6e2f1b55d602831f3f778525953b0765468, so that citation is sound: it names the file before later messages were appended.",
    "docs/product/purpose.md's block states purpose throughout: its data sentence names the store the app is meant to have, which does not exist yet. No sentence is false of that purpose. D004's follow-up asked a pass to reread it, and rereading it finds no defect. Editing the block fails npm run plan -- check, so a change of purpose stays a planning pass's.",
    "The profile's §Find the implementation says orders filed earlier call it Demonstrated architecture, so WO-008, WO-016, WO-017 and WO-018 still reach the right section. Their text is judged and needs no amendment for this.",
    "Correction of D008, the same day: it said the discovery record causes an advisory on attestations. implementation-ready printed none, because scripts/resume.mjs matches a recorded version line, and Claude Code's 2.1 line was recorded. Only Codex CLI 0.166.0, outside its recorded 0.162 line, would have printed it, and the refresh covers that.",
    "environment.json is a feedback source under scripts/lib/evidence-sources.mjs, which the order's Cost line says no edit touches. That line is unchanged because the plan binds it, no gate here reads that list, and this decision discloses the edit."
  ],
  "rejected": [
    {
      "option": "Leave these for the next planning pass",
      "reason": "Each could be closed here, and the operator directed that they be."
    }
  ],
  "reopenWhen": "A harness moves to a version line the discovery record does not hold."
}
```

## WO-025-D017

```json
{
  "id": "WO-025-D017",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Close the search for unrecorded directions and write what it found into the operator record: ten new items, each with its date and capture. Every item was read in the operator's own typed words first. Items an order or session scoped to itself stay out, and so does anything not in the operator's words. D009's equal multisets held for its own edits, and these ten change them under criterion 4 as amended; four of them form a fifth heading under the standing preferences, DotLn-Angular's code, beside the four D009 named. Rule substance stays unchanged in WS-001: the record binds every role at the start of a session, and a house rule changes in its own right.",
  "evidence": [
    "The executor searched the captures from 2026-10-26 onward, and a read-only dotln-worker read all 27 Markdown captures before that date, 111,987 bytes. Each item recorded was then read at its source by the executor.",
    "Recorded from 2026-10-17 to 2026-10-21: central imports (capture 4f14c6c0, entries 19:40:07Z and 19:41:32Z); a UI to live in (b9e38a5d); import groups and template backticks (e2a8222b, items 1 and 2); and from capture 7149ef88 the page above its records with the data in reach (item 6), components as lego blocks (item 4), code for people to read (item 9) and constant improvement (item 10).",
    "Recorded from 2026-10-28 and 2026-10-30: the deny list the operator rejected (8462d2d9), a list of gaps left open and the root README's location (75779a72).",
    "Left out, with the reason: WO-015's working loop, its bar and its quality pass, each given for that order and held in WO-015-D003, D014 and D015; the three reviewers, already the role's; an answer about one to-do item in WO-003 (d94d69aa), given once about that item; a reading of tone, which left with the tone section under the operator's ban of 2026-10-28 (457e3001), so only their word brings it back; the Storybook note, which is a session's account and not their words; many workstreams, already in the purpose; a note about past architecture, offered as a note and carried by their conventions; and one correction of a session's reference."
  ],
  "rejected": [
    {
      "option": "Write the order-scoped directions as standing rules",
      "reason": "The record refuses a rule recorded as theirs that they did not give."
    },
    {
      "option": "Write the new code conventions into WS-001's house rules as well",
      "reason": "The order keeps every house rule's substance unchanged, and the record already binds every role."
    }
  ],
  "reopenWhen": "The operator says an item here is not theirs, or that one left out is standing."
}
```

## WO-025-D018

```json
{
  "id": "WO-025-D018",
  "date": "2026-10-30",
  "dispatch": "resume: next; operator direction after the handoff",
  "decision": "Name the authority for the two amended points the operator's messages of the day do not state, and supersede D005. Step 10's title takes the gitmoji form on the operator's standing rule for this repository's pull requests. The Non-goals' limit on configuration is read as covering dotln.config.json, with the baseline row and the discovery refresh being the Design's own amended items. D012's statement that no control record changes held until this widening; D016 now changes one.",
  "evidence": [
    "The operator's rule that a pull-request title is a gitmoji and the subject was restated on 2026-10-30, capture SHA-256 58331059e353d8c7c5ea2dc167312bf4cec97fa978d533324e4128d4719a4d65, and WS-001 rule 20 says the launchpad's own pull requests carry the gitmoji and the subject only. Merged titles #12, #18 and #42 follow it.",
    "A self order's publish lints its title only for AI attribution, so the gitmoji form is admitted and D005's reopening condition does not occur.",
    "D005 rejected amending the line because no amendment was open and the title is decided at publish. D013's amendment was open for the operator's direction, so the line moved with it. D013 stays unedited because PlanExecutionAmended binds its hash."
  ],
  "rejected": [
    {
      "option": "Leave the conventional title for final review to correct",
      "reason": "The order would go on stating a title the operator's rule refuses."
    }
  ],
  "reopenWhen": "A kit release lints a self order's title for a conventional type."
}
```

## WO-025-D019

```json
{
  "id": "WO-025-D019",
  "date": "2026-10-31",
  "dispatch": "resume: verify",
  "decision": "Judge criterion 2 unmet in VER-001 and return its census repair to this order. The asserted inventory must equal the reviewed candidate's files, including new untracked Markdown, without counting absent future reports. Keep prospective outputs outside the asserted inventory until they exist, update the kind totals at the same cutoff and preserve every real document's classification and standing outcome. The verifier leaves the implementation unchanged. Remove the duplicated explanatory sentence in the census as adjacent cleanup during that repair; it is a follow-up and does not independently block a criterion.",
  "evidence": [
    "An independent bounded census probe found 281 unique rows, 270 tracked Markdown files and 7 new untracked Markdown files, with no missing real path, duplicate row, invalid kind or missing standing outcome. Four listed reports did not exist: VER-001 and the three final-review files FINAL-001.md, PR.md and RELEASE-NOTES.md. Filing the allocated VER-001 supplies that row, but supplies none of the final-review files.",
    "The equality command in docs/evidence/WO-025/README.md uses diff over the census rows and the tracked plus untracked Markdown paths. Its three final-review-only lines remain at verification; declaring those files in advance does not make the equality claim true.",
    "The paragraph under The operator record's digests and dates repeats its sentence about the amended lists verbatim. It changes no observed fact and breaks no criterion; removing the duplicate belongs with the census repair.",
    "The independent walkthrough completed. The 26 standing documents have zero relative-link failures; house rules are consecutively numbered 1 through 26; the workstream block, sequence and locked floor match the base. Formatting, docs-check, publication, harness, index and planning checks pass. The registered e2e type command exits 0 on a fresh target clone at 6268de9 and exits 2 with TS2322 after a deliberately mistyped spec line; the registered source clone is unchanged."
  ],
  "rejected": [
    {
      "option": "Treat prospective final-review files as present or record criterion 2 met because the ordinary document gate passes",
      "reason": "The criterion expressly requires the file list and census rows to agree. The ordinary document gate does not execute this order's ad hoc equality assertion."
    },
    {
      "option": "Edit the census in the verifier session or create empty future reports",
      "reason": "The verifier must judge the submitted implementation independently. Future reports belong to their own phase and must contain that phase's actual findings."
    }
  ],
  "reopenWhen": "A repair makes the asserted inventory equal the reviewed candidate and a fresh verification reproduces that result.",
  "followup": "WO-025 census repair, VER-001 F1 and F2: separate prospective phase outputs from the current file inventory, update its kind totals and equality evidence, and remove the repeated explanatory sentence. Touches docs/evidence/WO-025/census.md and README.md; reproduce with their documented diff command, requiring exit 0 at the reviewed candidate without hiding a real tracked or untracked Markdown file."
}
```

## WO-025-D020

```json
{
  "id": "WO-025-D020",
  "date": "2026-10-31",
  "dispatch": "resume: fix; VER-001 findings F1 and F2",
  "decision": "Repair criterion 2 under one rule: every path the census counts names a file that exists and Git lists, and every Markdown path Git lists is counted once. Move the three unfiled reports out of the census's inventory tables into a Later reports table, which also names VER-002.md. A later row stays outside the asserted inventory until Git lists its file, as VER-001's repair order says, so the next verification and the final review file their reports without writing the census. At the reviewed tree, where all four exist, every census row names a file and the file list equals the rows. Assert the rule, with the kinds, reasons and standing outcomes criterion 2 names and the kind totals VER-001 requires, in one Node script in the evidence README, which reads Git's NUL-separated listing so that a file's name cannot take it out of the comparison. Set the kind totals at the same cutoff, 183 records and 278 files, correct VER-001's own row now that the report exists, and remove the repeated sentence F2 named. VER-001 is unedited.",
  "evidence": [
    "VER-001's command exited 1 at entry with its three < lines, reproducing F1; the census held 281 rows against 270 tracked and 8 untracked Markdown paths.",
    "Every self order's final-review directory holds exactly FINAL-001.md, PR.md and RELEASE-NOTES.md (git ls-files for WO-009 to WO-012), so those and the next verification's VER-002.md are the reports still to come; no self order's later phase adds Markdown elsewhere.",
    "The case VER-001 did not quote is its own successor. A scratch clone with VER-002.md filed exits 0 under the repaired script and exits 1 with that file's > line under VER-001's command, whose form would have failed the next verification with no census row and no way for the verifier to add one.",
    "The repaired script run from the README's own fence in a scratch clone, under bash and zsh: the cases the evidence README records, including exit 0 at a real commit of the clone with all four reports filed.",
    "Three forms failed under review before this one. The first read the index, so a tracked file deleted from the worktree left its row passing: it exited 0 with docs/product/purpose.md removed, reproduced on the published fence. The second added an existence test to the tree side, which dropped any name git ls-files quotes, so an unlisted docs/stráy.md exited 0, and it lost a tracked later report whose file was gone. The third, the first Node form, tested each direction apart, so a row for package.json and an unlisted dangling symlink both exited 0; this form requires the two sets equal."
  ],
  "rejected": [
    {
      "option": "Delete the three rows and keep VER-001's command",
      "reason": "It exits 0 today and 1 once the next verification files VER-002.md, and D019 keeps the verifier out of the census, so the same criterion would fail one report later."
    },
    {
      "option": "Give VER-002.md a backticked row ahead of its filing",
      "reason": "That is the defect F1 names, one report later: the census would count a file that does not exist at this handoff, and VER-001's command would print it."
    },
    {
      "option": "Exclude this order's verification and final-review directories from the tree side",
      "reason": "VER-001 forbids filtering real documents, and an unlisted VER-003.md would pass unseen. Listing exact paths makes it fail."
    },
    {
      "option": "Keep the later reports as a bullet list",
      "reason": "A bullet is not one of the census's rows, which criterion 2 names, and the census's other tables are its established shape."
    },
    {
      "option": "Extend the shell fences with a NUL listing, a tracked-path test and a separate shape guard",
      "reason": "A reviewer tested this form and it closes the same cases. It adds helper functions and a separate shape guard on top of the totals fence, and each shell form so far had opened the next escape. One Node script reads the same listing, uses the form the README's link check already has, and asserts the kinds, reasons and outcomes the shell left unasserted."
    },
    {
      "option": "Require each later phase to add its own row",
      "reason": "The verifier judges the submitted implementation and D019 rejects its editing the census; a rule every later phase must remember is the one that drifted here."
    }
  ],
  "reopenWhen": "A later phase files Markdown the Later reports table does not name, or a fresh verification finds the census's assertion disagrees with the tree."
}
```

## WO-025-D021

```json
{
  "id": "WO-025-D021",
  "date": "2026-10-31",
  "dispatch": "resume: verify",
  "decision": "Accept the census repair in VER-002 after independent reproduction of VER-001's findings and a fresh reader walkthrough. The live inventory equals the real tracked and untracked Markdown files. Prospective report rows count only once Git lists their files, so filing the allocated VER-002 requires no implementation edit. Preserve the submitted documents and consume the executor's standing complete product row at the unchanged code identity; run the document gate after the verification records and generated indexes are complete. No new defect or operator decision packet was found.",
  "evidence": [
    "The exact census script extracted from the evidence README exited 0 on the live candidate: 278 paths counted, 278 listed, 0 problems. Seventeen independent scratch cases all returned their expected status: VER-002 and the four declared later reports pass; unlisted VER-003, FINAL-002 and a Unicode filename, missing counted files, duplicate rows, invalid kinds, malformed later rows, missing standing outcomes and false totals fail. Staging every Markdown file preserves the passing result.",
    "Direct byte comparisons with checkpoint 5 show all 26 standing documents, dotln.config.json, environment.json, doc-baseline.json and VER-001 unchanged since the first verification. The fresh profile, operator-record and WS-001 walkthrough completed every required step. Base comparisons preserve the locked floor, the workstream block, the purpose and the sequence. The census's digest/date multisets and deltas match the actual files, all 26 standing documents have resolving links, and the duplicate sentence VER-001 named is gone.",
    "The complete npm test row recorded at 2026-10-31T10:40:27.228Z stands at code identity 5fdb34d2127b0110c698ffebb7f7fde361d6b1adc4720b5014bdaee54e4d069a and the current instance input digest. The preceding document row is recorded at 2026-10-31T10:40:09.221Z. Formatting, docs-check, publication, harness, index and planning checks independently pass, with no new operator-record or planning advisory. The unchanged target typecheck claim carries VER-001's independent clean and deliberately mistyped-spec evidence.",
    "Scratch probe corrections were resolved before judgment: compare AGENTS.md as symlink text rather than dereferenced contents; hash the marked workstream lines including their final newline; compare an untracked report's bytes with git show rather than a working-tree git diff; and run the citation probe from a file after the bounded wrapper produced no stdin-script output. The corrected probes pass. Oversized source reads were replaced by bounded passages and selected-field reads; no conclusion uses truncated output."
  ],
  "rejected": [
    {
      "option": "Repeat the full product gate or the unchanged target installation and typecheck experiment",
      "reason": "The passing product row still stands at this identity, and the prior independent target proof judges identical inputs. Fresh census mutations and post-authoring document validation test the changed surfaces without paying those costs again."
    },
    {
      "option": "Edit the census or create empty final-review reports to make the verification pass",
      "reason": "The submitted repair already handles actual later files. The verifier preserves the implementation and files only its allocated report and decision evidence."
    }
  ],
  "reopenWhen": "A later integration changes a judged surface or Markdown inventory, an unlisted report is filed, or the census assertion disagrees with the real candidate."
}
```

## WO-025-D022

```json
{
  "id": "WO-025-D022",
  "date": "2026-10-31",
  "dispatch": "resume: final review",
  "decision": "Pass the final review on the reproduced criteria, publish the reviewed state as the kit's self publish does it, and name here what the order's step 10 and its operator-review assumption could not have as written. Integration took in nothing: main, origin/main and this worktree all stand at 346941584b1ed29236756963c44110e6a002fa58, so the code identity 5fdb34d2127b0110c698ffebb7f7fde361d6b1adc4720b5014bdaee54e4d069a is unchanged and the repair's passing complete review row at that identity is the row the completion consumes; no fresh complete run is owed. The pull request's title is the amended step 10's. The kit's self publish pushes the order's own branch wo-025 and opens the pull request from it, so the branch name step 10 carries is not a form the helper takes and raw Git is not the route; WO-012 published the same way. A self order has no draft publish at verification, so the operator's reading of the profile and the record's diff, which the order's assumption placed before final review, happens in this pull request before the merge; the body names the ten added directions, the seven dated before 2026-10-26 first. The reviewed state goes up as three commits: the standing documents with the document check's baseline row, the registered gate with the discovery refresh, and the order's records with the carried WO-015 event, the amendment binding and the release claim.",
  "evidence": [
    "git fetch origin, then git rev-parse main origin/main HEAD: all 346941584b1ed29236756963c44110e6a002fa58; npm run worktree -- integrate WO-025 --intake-backup <scratch archive> printed Integration took in nothing: the worktree is not behind main. The intake backup of this worktree's one capture went to the DotLn session scratch and the intake was left in place.",
    "Gate rows read through scripts/lib/gate-reuse.mjs at the current code identity: two passing complete npm test rows, the newest recorded 2026-10-31T10:40:27.228Z with seven required suites, exit 0, 14,543 ms, instance input digest sha256:15a5f0a260a8a13c74a8b75ffa34a800d76d588abc1dba95895de61cb1827453; six passing document rows, the newest VER-002's at 2026-10-31T15:05:14.874Z, which this review's reports displace, so one npm run test:docs runs after the last edit here.",
    "Reproduced on 2026-10-31 from 15:15Z, each outside a gate and the census and link scripts under the bounded wrapper from the evidence README's own fences: the census assertion printed 279 paths counted, 279 listed, 0 problems with VER-002 filed; the link check printed 26 documents, 0 unresolved; grep -c '^## ' on the profile printed 7 in the Design's order and no Checked line; the house-rule grep printed 26 with the numbers 1 to 26 in order and the dotln-workstream block at SHA-256 e3b1c8d2486caebf233f28a4baba0763c09832bef1e86ba836598754a3f08f05 at base and now; the operator record's digest multiset went 37 to 47 tokens and its date multiset 47 to 57, with the diffs equal to the census's lists; docs-check 0 failures and its three operator-word advisories on older records; publication: no editions declared; harness check: 35 generated surfaces; both index pages current; plan check advisories [] with the one authorized-execution-amendment bound to D013; format:check, git diff --check and release check-surfaces --local clean; the local-terms check over every changed and new document matched nothing.",
    "Criterion 6's paths: the changed and new files name nothing under scripts/, packages/, .claude/, .agents/, .codex/, docs/planning/*-20*.md, docs/planning/refutations/, docs/evidence/WO-0[01]*/ or KIT-MANIFEST.json, and WO-025's file is the only work order; the Clean Room and Secrets sections of CLAUDE.md hash equal to main's; docs/planning/sequence.md and docs/product/purpose.md are unchanged; README.md differs by its one release line.",
    "The profile's facts against the registered clone at 6268de9fc3cae84bf66091c1fbcc30d344411cd2 (read only): every version in §Installed versions equals package-lock.json's, .node-version reads 26, nx.json sets cli.cache.enabled false, tools/project.json runs the eleven workspace checks in the order the profile lists with cache false, ci.yml's checks job runs the steps the profile names, the root route redirects to the scene, typecheck:e2e is the target's tsc over apps/dotln-e2e, and 23 of the 124 path-shaped spans are not paths, as the evidence README lists them. gh release list for DylanBWood/DotLn-Angular names DotLn Angular v0.6.0 as the latest release. The registration's typecheck command is byte-identical to the bytes VER-001 proved on the pinned target, so that proof is carried.",
    "VER-001's finding F1 reproduced at its own command, which now prints only VER-002's line, the case D020 records; the repaired assertion is the one criterion 2 rests on. F2's repeated sentence is gone.",
    "The kit's self publish (scripts/worktree.mjs, publish without --target) pushes the worktree's branch wo-NNN and has no --draft form; WO-012's FINAL-001 records the same route."
  ],
  "rejected": [
    {
      "option": "Start a fresh complete run after the no-op integration",
      "reason": "The identity says what was tested; nothing moved a code byte since the repair's row, and the role reuses the passing complete row at the integrated identity."
    },
    {
      "option": "Push a branch named docs/quality-pass-launchpad-documents by hand",
      "reason": "The helper is the only publish route the kit admits for this repository's state, and it names the branch itself."
    },
    {
      "option": "Rerun the pinned target's typecheck proof",
      "reason": "The registration bytes are unchanged since VER-001's independent clean and mistyped-spec runs, and the clone at the reviewed commit shows the same command; another install buys nothing the identity does not already give."
    }
  ],
  "reopenWhen": "The committed tree's paths differ from the preview this review records, the publish helper refuses the title or the body, or the operator reads one of the ten added directions as not theirs."
}
```
