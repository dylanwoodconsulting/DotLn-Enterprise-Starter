# Entropy Reducer review — REVIEW-001

Subject: commit `06908c79ab3ba9eb95315be1c068875ad4c5557b`; subject hash `08baac7f6d7d30514f3d4bdc3ba73c4d07dfbfece9af39311ee54f1a539a1fa4`; frozen copy inventoried at 2525 path(s).

Reviewer: **entropy-reducer@1** — `claude-opus-5-5` at effort `xhigh` on `claude-code` 2.1.317; route `launched`; transport `claude-cli-print`; source `command-line-readback-and-invocation`. Effective model and effort: unknown.

This reviewer satisfies the compiled actor requirement by invocation readback. Substitution policy: different-reviewer-and-must-be-attested.

Episode `ep_entropy_08baac7f6d7d3051` ran 2026-11-03T16:37:55.682Z to 2026-11-03T16:58:39.829Z. Compiled semantic hash `fnv1a64:01bd55dd693e1dcb`; work order `wo_entropy_review_1`; authority `auth_entropy_reducer`. Execution boundary: operator-mediated-manual, no deferred Program kind.

Findings: 8 — 8 measured, 0 by inspection; 0 blocking, 4 major, 4 minor. Proposal packets: 4.

Subject binding: an explicitly named commit; bound by its tree object, with the working tree's own drift recorded rather than refused. Source repository: tracked-path status unchanged across the episode: **false**; untracked, non-ignored path listing unchanged: **false** (0 before, 1 after; recorded, never a refusal condition). Source refs unchanged: **false** (206 before, 207 after; refused for a HEAD subject, recorded for a named commit). Ignored paths and file contents are not observed. Frozen copy path-and-size inventory: 0 path(s) added, 0 removed, 0 resized. Episode temporary directory: 6618 path(s), 916000633 bytes. Installed dependencies: copied. Command execution: file tools confined to the frozen copy by --restricted; shell writes instructed to stay inside the copy or episode temporary directory, witnessed by copy and temporary inventories. Denied tool calls: 0.

Compiled review confinement (execution rule): lenses worked serially by the reviewer; no delegate grant or delegate resource limit. Checklist completion is not independently observed; worker result: completed.

**Process cost:** 13949011 tokens; source claude-result-envelope; observed episode wall clock 1244 s, 117 turns, USD 6.336179999999999

## Result envelope summary

Census: 2,525 tracked paths (1,086 kit-manifest files verified, 1,438 instance); docs/intake was not read. The four lenses were worked serially. Probes ran in TMPDIR scratch clones, and the subject's tracked status hash is unchanged. The evidenced constraint is the concept-study fan-out that WO-023 and WO-024 reuse next, which runs outside enforced budgets. Eight measured findings survived independent re-runs. Four are major: the fan-out token stop is prose-only and WO-022 passed it undeclared; the kit's Codex review route has no target-order mode, so workers ran through ad hoc launchers outside the subagent cap, the journal and the read-only sandbox; the planning subject reports no critical path while the purpose block declares one, and 9 of 17 receipts raise this; and docs/evidence is 88.5% of tracked bytes with no ceiling. Four are minor: the document and plan gates fail on fresh clones without the clone map; current.md keeps executor-unmet criteria on passed orders; the README overstates refuter independence; and gate host state lies outside episode roots. Follow-up re-deferral churn was refuted as legitimate evidence accumulation. Four non-authoritative proposal packets are offered. Awaiting operator disposition.

## Worker statement

{"schemaVersion":1,"findings":[{"findingId":"ER-RUN-01","criterion":"runtime-and-authority: a declared resource stop on an effect is enforced, or at least recorded, before the spend it bounds","severity":"major","evidenceLabel":"measured","observed":"WO-020's fan-out procedure is reused next by WO-023 and WO-024 as a lane pair. Its token stop exists only in order prose: stop with a recorded decision once worker totals plus the session's own reading pass WO-014's 117,733,609. Nothing executes this check, and budgets.json leaves executor tokens null. WO-020 summed to 269,706,640 after the operator lifted the stop (D012). WO-021 reached 64.6%. WO-022 never declared the rule (D023), read 277,506,825, and stopped at 384,899,604 only when the operator directed it (D028). The figure is mostly the root session's cached re-reads (272,071,981 of 277,506,825), so it barely registers worker spend.","expected":"The stop is declared before the first worker launch and checked at each launch from harness usage, with a recorded decision when crossed. The metered quantity separates worker spend from the root session's own context. The stop figure itself stays the operator's choice.","reproduction":{"kind":"command","command":"grep -n 'The stop rule is declared' docs/work-orders/WO-020-concept-studies-movement.md; grep -n \"WO-020's procedure\" docs/work-orders/WO-023-concept-studies-poeaa.md; grep -n '| Their sum\\|lifted that stop\\|not set before the spend\\|64.6 per cent\\|The session.s own, read at' docs/evidence/WO-020/fan-out.md docs/evidence/WO-021/fan-out.md docs/evidence/WO-022/fan-out.md; node -e 'console.log(require(\"./docs/control/budgets.json\").dispatches.executor.tokens)'"},"evidenceRefs":["docs/work-orders/WO-020-concept-studies-movement.md:257-260","docs/work-orders/WO-023-concept-studies-poeaa.md:135","docs/evidence/WO-020/fan-out.md:12-14","docs/evidence/WO-020/fan-out.md:231-235","docs/evidence/WO-021/fan-out.md:205-208","docs/evidence/WO-022/fan-out.md:515-528","docs/evidence/WO-022/handoff.md:28-30","docs/control/budgets.json:14"],"surface":"WO-020 fan-out procedure (reused by WO-023, WO-024); docs/control/budgets.json","altitude":8,"standardization":{"kind":"recurring","rung":"script","rationale":"Every concept-study batch runs this procedure, and two more are queued next. A tracked launcher/meter that requires the stop figure as an argument, reads harness usage before each launch, and refuses further launches with the decision line once the sum is crossed is cheaper than a hook. It also covers shell-launched Codex workers, which hooks do not observe (ER-RUN-02)."}},{"findingId":"ER-RUN-02","criterion":"runtime-and-authority: worker launches follow the compiled route the guide names, not an unaccounted path","severity":"major","evidenceLabel":"measured","observed":"The guide names `npm run worker -- review --host codex` as the route to a Codex worker from a Claude session: a read-only sandbox, a WorkerLaunched journal row, and reports in the review lane the verifier reads. Its resolveSubject resolves only launchpad order files, and it diffs the launchpad working tree (cwd root, merge-base HEAD main). review-worker.mjs has no target-order mode (0 matches for 'target'), so WS-001's target orders improvise. WO-020's fifteen Codex workers ran from a session-scratch launcher outside the subagent hook, which read 0 of 20; the cap held only by hand count. WO-022's three Codex reviewers ran under a workspace-write sandbox that 'confines writes but not reads', outside the subagent count, with briefs and reports left in ignored session scratch. The operator's Codex direction (D003, D007) is not at issue.","expected":"Codex workers on target orders launch through one tracked route that applies the read-only sandbox, records the launch, counts toward subagentCap, and retains reports where the verifier reads them. Failing that, the guide states that the route serves launchpad checkouts only.","reproduction":{"kind":"command","command

## Validated reviewer output

```json
{
  "schemaVersion": 1,
  "findings": [
    {
      "findingId": "ER-RUN-01",
      "criterion": "runtime-and-authority: a declared resource stop on an effect is enforced, or at least recorded, before the spend it bounds",
      "severity": "major",
      "observed": "WO-020's fan-out procedure is reused next by WO-023 and WO-024 as a lane pair. Its token stop exists only in order prose: stop with a recorded decision once worker totals plus the session's own reading pass WO-014's 117,733,609. Nothing executes this check, and budgets.json leaves executor tokens null. WO-020 summed to 269,706,640 after the operator lifted the stop (D012). WO-021 reached 64.6%. WO-022 never declared the rule (D023), read 277,506,825, and stopped at 384,899,604 only when the operator directed it (D028). The figure is mostly the root session's cached re-reads (272,071,981 of 277,506,825), so it barely registers worker spend.",
      "expected": "The stop is declared before the first worker launch and checked at each launch from harness usage, with a recorded decision when crossed. The metered quantity separates worker spend from the root session's own context. The stop figure itself stays the operator's choice.",
      "evidenceRefs": [
        "docs/work-orders/WO-020-concept-studies-movement.md:257-260",
        "docs/work-orders/WO-023-concept-studies-poeaa.md:135",
        "docs/evidence/WO-020/fan-out.md:12-14",
        "docs/evidence/WO-020/fan-out.md:231-235",
        "docs/evidence/WO-021/fan-out.md:205-208",
        "docs/evidence/WO-022/fan-out.md:515-528",
        "docs/evidence/WO-022/handoff.md:28-30",
        "docs/control/budgets.json:14"
      ],
      "surface": "WO-020 fan-out procedure (reused by WO-023, WO-024); docs/control/budgets.json",
      "altitude": 8,
      "standardization": {
        "kind": "recurring",
        "rung": "script",
        "rationale": "Every concept-study batch runs this procedure, and two more are queued next. A tracked launcher/meter that requires the stop figure as an argument, reads harness usage before each launch, and refuses further launches with the decision line once the sum is crossed is cheaper than a hook. It also covers shell-launched Codex workers, which hooks do not observe (ER-RUN-02)."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -n 'The stop rule is declared' docs/work-orders/WO-020-concept-studies-movement.md; grep -n \"WO-020's procedure\" docs/work-orders/WO-023-concept-studies-poeaa.md; grep -n '| Their sum\\|lifted that stop\\|not set before the spend\\|64.6 per cent\\|The session.s own, read at' docs/evidence/WO-020/fan-out.md docs/evidence/WO-021/fan-out.md docs/evidence/WO-022/fan-out.md; node -e 'console.log(require(\"./docs/control/budgets.json\").dispatches.executor.tokens)'"
      }
    },
    {
      "findingId": "ER-RUN-02",
      "criterion": "runtime-and-authority: worker launches follow the compiled route the guide names, not an unaccounted path",
      "severity": "major",
      "observed": "The guide names `npm run worker -- review --host codex` as the route to a Codex worker from a Claude session: a read-only sandbox, a WorkerLaunched journal row, and reports in the review lane the verifier reads. Its resolveSubject resolves only launchpad order files, and it diffs the launchpad working tree (cwd root, merge-base HEAD main). review-worker.mjs has no target-order mode (0 matches for 'target'), so WS-001's target orders improvise. WO-020's fifteen Codex workers ran from a session-scratch launcher outside the subagent hook, which read 0 of 20; the cap held only by hand count. WO-022's three Codex reviewers ran under a workspace-write sandbox that 'confines writes but not reads', outside the subagent count, with briefs and reports left in ignored session scratch. The operator's Codex direction (D003, D007) is not at issue.",
      "expected": "Codex workers on target orders launch through one tracked route that applies the read-only sandbox, records the launch, counts toward subagentCap, and retains reports where the verifier reads them. Failing that, the guide states that the route serves launchpad checkouts only.",
      "evidenceRefs": [
        "scripts/lib/review-worker.mjs:104-132",
        "scripts/lib/review-worker.mjs:519-539",
        "scripts/lib/review-worker.mjs:598",
        "docs/product/07-execution-guide.md:3144-3182",
        "docs/evidence/WO-020/handoff.md:30-34",
        "docs/evidence/WO-022/host-qualification.md:21-32",
        "docs/evidence/WO-022/review.md:145-151",
        "CLAUDE.md:63"
      ],
      "surface": "scripts/lib/review-worker.mjs (kit) and target-order executor practice under WS-001",
      "altitude": 5,
      "standardization": {
        "kind": "recurring",
        "rung": "script",
        "rationale": "WO-020 and WO-022 each rebuilt and re-qualified a launcher in session scratch, and WO-023 and WO-024 are next. One tracked launcher, or a target mode on the kit's review route, replaces that per-order qualification."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -c -i target scripts/lib/review-worker.mjs; grep -n 'cwd: root,\\|\"merge-base\", \"HEAD\", \"main\"' scripts/lib/review-worker.mjs; grep -n -i 'session-scratch launcher\\|launcher in the session\\|confines writes but not reads\\|outside the host.s subagent count\\|stay in the session.s ignored scratch' docs/evidence/WO-020/handoff.md docs/evidence/WO-022/host-qualification.md docs/evidence/WO-022/review.md"
      }
    },
    {
      "findingId": "ER-RUN-03",
      "criterion": "runtime-and-authority: an episode's declared writable roots can be satisfied by the repository's own documented checks",
      "severity": "minor",
      "observed": "This episode names the frozen copy and TMPDIR as its only writable roots. hostStateRoot() deliberately ignores TMPDIR and resolves to dotln-host-v1-<uid> under the system user temp directory, and the `npm test` runner imports host-lanes and host-resources, which write there. A reviewer or refuter that reproduces a finding through a gate therefore writes outside both roots. The receipt's confinement text ('shell writes instructed to stay inside … witnessed by copy and temporary inventories') does not say that such writes go unobserved.",
      "expected": "Either the review host states that gate-based probes write host coordination state outside the witnessed roots, or it gives such probes a host root inside the episode's temporary directory.",
      "evidenceRefs": [
        "scripts/lib/host-resources.mjs:87-99",
        "scripts/test-runner.mjs:26-45",
        "scripts/lib/entropy-review.mjs:1552-1558",
        "scripts/lib/entropy-review.mjs:1648-1651",
        "README.md:64-68"
      ],
      "surface": "scripts/lib/entropy-review.mjs confinement receipt; scripts/lib/host-resources.mjs (kit)",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "test",
        "rationale": "Every review and refutation episode inherits this mismatch. A fixture asserting that the confinement sentence names unobserved host-state writes whenever hostStateRoot lies outside TMPDIR keeps the receipt aligned with runtime behavior."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "node --input-type=module -e 'const m=await import(\"./scripts/lib/host-resources.mjs\");console.log(m.hostStateRoot().startsWith(process.env.TMPDIR??\"/none\"))'; grep -n 'TMPDIR is deliberately ignored' scripts/lib/host-resources.mjs; grep -n 'host-lanes.mjs\\|host-resources.mjs' scripts/test-runner.mjs; grep -n 'witnessed by copy and temporary inventories' scripts/lib/entropy-review.mjs"
      }
    },
    {
      "findingId": "ER-ARCH-01",
      "criterion": "architecture-and-semantics: durable product doctrine and the compiled planning subject agree",
      "severity": "major",
      "observed": "purpose.md's purpose block declares 'The critical path runs from registering that repository … to a foundation …'. The kit reads a critical-path declaration only from docs/planning/critical-path-2026-09-08.md, which this instance never filed. The compiled subject therefore carries the purpose's critical-path sentence in its goal standard while also reporting goalReview.criticalPath as 'unavailable … this instance has not declared a critical path'. Nine of 17 refutation receipts mention the undeclared path. Receipt 012 records 'the subject disagreeing with itself about whether a critical path is declared', and receipts 013 and 015 tie it to WO-008's position, which each pass then re-disposes.",
      "expected": "The subject reads a single declaration. The settled sequence (D11 of 2026-10-24, and the operator's direction of 2026-10-30 to run side members first) stays as it is; the declaration states dependency, not schedule.",
      "evidenceRefs": [
        "docs/product/purpose.md:25-30",
        "scripts/lib/plan-subject.mjs:635-646",
        "docs/KIT.md:399-402",
        "docs/planning/refutations/2026-10-28-planning-7f5e44638facd299-012.md:13",
        "docs/planning/refutations/2026-10-28-planning-79fa2937a6b5812e-013.md",
        "docs/planning/concept-batches-and-quality-passes-2026-10-30.md:798-803",
        "docs/planning/mining-run-orders-2026-10-24.md:299-312"
      ],
      "surface": "docs/product/purpose.md and the plan refutation subject (scripts/lib/plan-subject.mjs)",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "lint",
        "rationale": "The contradiction recurs in each pass's subject. A plan-check row that flags a purpose block naming a critical path while the declaration file is absent would stop the refuter from re-raising it."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "node scripts/refute-plan.mjs subject | node -e 'let s=\"\";process.stdin.on(\"data\",d=>s+=d).on(\"end\",()=>{const j=JSON.parse(s);console.log(j.goalReview.criticalPath);console.log(/The critical path runs/.test(JSON.stringify(j)))})'; grep -n 'critical-path-2026-09-08' scripts/lib/plan-subject.mjs; git ls-files docs/planning | grep -c critical-path; grep -l 'disagreeing with itself about whether a critical path\\|criticalPath field reports no declared critical path\\|declares no critical-path document\\|undeclared critical path' docs/planning/refutations/*.md | wc -l"
      }
    },
    {
      "findingId": "ER-VER-01",
      "criterion": "verification-and-evidence: a generated projection reconciles an executor-recorded unmet criterion with later passing judgments",
      "severity": "minor",
      "observed": "current.md shows WO-022 as 'Phase: closed' and 'Latest verdict: pass', yet also 'Unmet criteria: 1 (recorded unmet by the executor at ordinal 2)'. RECORDS-PR.md says all nine criteria are met. The cause is structural: WS-001 rule 24 assigns the use walkthrough to the verifier, so the executor's met/unmet ledger records criterion 1 as unmet. Seven orders (WO-015, 019, 020, 021, 022, 025, 026) recorded criterion 1 unmet at handoff and closed passing with no waive or defect route.",
      "expected": "The projection shows that a later passing verification judged the criterion, or the handoff grammar has a state for a criterion another role performs.",
      "evidenceRefs": [
        "docs/control/current.md:8",
        "docs/control/current.md:23",
        "docs/final-reviews/WO-022/RECORDS-PR.md:16",
        "docs/evidence/WO-022/handoff.md:14",
        "docs/evidence/WO-022/handoff.md:46-47",
        "scripts/resume.mjs:880-882",
        "docs/workstreams/WS-001-dotln-angular.md:364-376"
      ],
      "surface": "docs/control/current.md projection (scripts/resume.mjs, kit)",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "test",
        "rationale": "Every order under rule 24 repeats this. A status-projection fixture in which an unmet-at-handoff criterion is followed by a passing verification and final review should render the criterion as judged."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -n 'Phase: closed\\|Latest verdict\\|Unmet criteria' docs/control/current.md; grep -n 'none is waived' docs/final-reviews/WO-022/RECORDS-PR.md; node -e 'const fs=require(\"fs\");for(const f of fs.readdirSync(\"docs/control/orders\")){const ev=fs.readFileSync(\"docs/control/orders/\"+f,\"utf8\").trim().split(\"\\n\").map(JSON.parse);if(ev.some(e=>e.type===\"ImplementationReady\"&&(e.unmetCriteria||[]).includes(\"1\")))console.log(f,ev.some(e=>e.type===\"FinalReviewCompleted\"&&e.verdict===\"pass\"),ev.some(e=>/Waived|Defect/.test(e.type)))}'"
      }
    },
    {
      "findingId": "ER-VER-02",
      "criterion": "verification-and-evidence: a standing document claims no more than its cited receipts establish",
      "severity": "minor",
      "observed": "README.md says 'an independent refuter judges them before any can run.' All 17 refutation receipts record episode kind direct-session, model unknown, independence session-attested and contextIsolation not-enforced. The guide's procedure spawns a fresh, model-pinned worker, but no receipt attests that pin or the isolation.",
      "expected": "The README calls the refuter a fresh worker whose independence the receipt records as session-attested, or receipts carry the attested worker type and model.",
      "evidenceRefs": [
        "README.md:91-93",
        "docs/planning/refutations/2026-11-01-planning-f26bb956de3abb86-017.json",
        "docs/product/07-execution-guide.md:1681-1694"
      ],
      "surface": "README.md (instance)",
      "altitude": 6,
      "standardization": {
        "kind": "one-off"
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "sed -n 91,93p README.md; node -e 'const fs=require(\"fs\"),p=\"docs/planning/refutations/\";const t={};for(const f of fs.readdirSync(p).filter(f=>f.endsWith(\".json\"))){const e=JSON.parse(fs.readFileSync(p+f,\"utf8\")).episode;const k=[e.kind,e.model,e.independence,e.contextIsolation].join(\" \");t[k]=(t[k]||0)+1}console.log(t)'"
      }
    },
    {
      "findingId": "ER-MAINT-01",
      "criterion": "maintainability-and-friction: a repeated cost exported to later actors is measured and bounded",
      "severity": "major",
      "observed": "docs/evidence holds 211,539,410 of 238,939,913 tracked bytes (88.5%). Of that, 972 PNGs account for 196,952,831 bytes, and comparison-round directories alone for 134,843,858. Recent page orders added 85.4 MB (WO-019), 46.8 MB (WO-020), 36.1 MB (WO-021) and 33.0 MB (WO-022), and the pack is 173.62 MiB. Every order's worktree checks out the whole tree. doc-ceilings.json bounds only purpose.md and concept-study.md; nothing measures or bounds evidence bytes, and five more page orders are queued.",
      "expected": "Each order's evidence size is reported and bounded by a ceiling a planning pass sets. WS-001 rules 24 and 25, which keep screenshots under the order's evidence directory, are not reopened.",
      "evidenceRefs": [
        "docs/workstreams/WS-001-dotln-angular.md:364-404",
        "docs/control/doc-ceilings.json",
        "docs/evidence/WO-019/",
        "docs/evidence/WO-022/walkthrough/",
        "README.md:94"
      ],
      "surface": "docs/evidence/ and docs/control/doc-ceilings.json (instance)",
      "altitude": 8,
      "standardization": {
        "kind": "recurring",
        "rung": "lint",
        "rationale": "Under settled rules, every page order adds tens of MB. A document-gate row that compares each order's evidence bytes with a declared ceiling is the cheapest balancing loop."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "git ls-files -z | grep -zv '^docs/intake/' | xargs -0 stat -f '%z %N' | awk '{t+=$1} $2 ~ /^docs\\/evidence\\// {e+=$1} $2 ~ /^docs\\/evidence\\/.*\\.png$/ {p+=$1; n++} $2 ~ /^docs\\/evidence\\/.*\\/round-/ {r+=$1} END {printf \"tracked=%d evidence=%d (%.1f%%) png=%d files=%d rounds=%d\\n\", t, e, 100*e/t, p, n, r}'; for w in WO-019 WO-020 WO-021 WO-022; do git ls-files -z docs/evidence/$w | xargs -0 stat -f %z | awk -v w=$w '{s+=$1} END {print w, s}'; done; git count-objects -vH | grep size-pack; node -e 'console.log(Object.keys(require(\"./docs/control/doc-ceilings.json\").documents))'"
      }
    },
    {
      "findingId": "ER-MAINT-02",
      "criterion": "maintainability-and-friction: a later actor can run the documented gates from what the README states",
      "severity": "minor",
      "observed": "README.md ties the ignored clone map only to publishing. On a fresh clone at the base commit with dependencies installed, `node scripts/docs-check.mjs` and `node scripts/refute-plan.mjs check` both exit 1 with 'recorded target clone unavailable', because the moved-record readers need the map for the document and plan gates. The README's gate table does not mention this.",
      "expected": "The README's gate table names the clone map as a precondition of the document and plan gates, and bootstrap reports a missing map before the first gate runs.",
      "evidenceRefs": [
        "README.md:53-58",
        "README.md:70-72",
        "docs/KIT.md:895-900",
        "docs/product/07-execution-guide.md:835-840"
      ],
      "surface": "README.md gate table (instance); scripts/bootstrap.mjs preflight (kit)",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "script",
        "rationale": "Every fresh clone, new machine or review copy hits this. A bootstrap preflight line that names `npm run worktree -- clone dotln-angular <path>` costs a single check."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "S=$(mktemp -d) && git clone -q . \"$S/c\" && cp -R node_modules \"$S/c/\" && cd \"$S/c\" && { node scripts/docs-check.mjs >/dev/null 2>&1; echo \"docs-check exit $?\"; node scripts/refute-plan.mjs check 2>&1 | grep -c 'recorded target clone unavailable'; }"
      }
    }
  ],
  "proposalPackets": [
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/fan-out-spend-stop-meter/",
      "sourceEpisodeId": "ep_entropy_08baac7f6d7d3051",
      "provenance": [
        "Entropy Reducer review episode ep_entropy_08baac7f6d7d3051 at base 06908c79ab3ba9eb95315be1c068875ad4c5557b",
        "finding ER-RUN-01 (measured)"
      ],
      "corroboratingEvidenceRefs": [
        "docs/evidence/WO-022/handoff.md:28-30",
        "docs/evidence/WO-022/host-qualification.md:36-39"
      ],
      "dissentingEvidenceRefs": [
        "docs/evidence/WO-020/fan-out.md:12-14"
      ],
      "suggestion": {
        "suggestionId": "fan-out-spend-stop-meter",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2), claude-opus-5-5",
        "problemOrOpportunity": "The concept-study fan-out's token stop exists only in order prose and is checked by hand. WO-022 passed it without declaring it, and the figure it meters is mostly the root session's cached re-reads.",
        "scope": "Instance: a tracked launchpad script, or a planning-pass amendment of WO-023/WO-024's fan-out step, that requires the stop figure before the first worker launch, reads `node scripts/harness.mjs usage` at each launch, prints the recorded-decision line once the figure is crossed, and reports worker spend separately from the session's own reading. The stop figure itself is unchanged and remains the operator's.",
        "evidenceRefs": [
          "docs/work-orders/WO-020-concept-studies-movement.md:257-260",
          "docs/evidence/WO-022/fan-out.md:515-528",
          "docs/control/budgets.json:14"
        ],
        "affectedUsers": [
          "operator",
          "executor sessions on concept-study orders"
        ],
        "affectedSystems": [
          "WO-020 fan-out procedure",
          "WO-023",
          "WO-024",
          "harness usage readings"
        ],
        "expectedValue": "The next lane pair cannot pass its stop silently, and the operator sees worker spend against the figure instead of cached re-reads.",
        "altitude": 8,
        "uncertainty": "It is unclear whether harness usage can attribute Codex worker tokens without the launcher's own capture, and whether the operator wants a stop at all, given that they lifted it for WO-020 (D012).",
        "risks": [
          "A refusal mid-fan-out could strand half-authored records; the meter should stop new launches, not kill running workers.",
          "Setting budgets.json tokens would change a planning-owned setting; this suggestion does not."
        ],
        "alternatives": [
          "Have the activation decisions declare the stop, backed by a handoff checklist line (prose only: cheaper, weaker).",
          "Ask core for a kit-level fan-out meter."
        ],
        "duplicationHints": [
          "WO-022-D023 and WO-022-D028",
          "WO-020-D004 and WO-020-D012",
          "target-order-worker-route shares the launcher surface"
        ],
        "urgencyRationale": "WO-023 and WO-024 are next in the sequence as a lane pair, and both reuse WO-020's procedure."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/target-order-worker-route/",
      "sourceEpisodeId": "ep_entropy_08baac7f6d7d3051",
      "provenance": [
        "Entropy Reducer review episode ep_entropy_08baac7f6d7d3051 at base 06908c79ab3ba9eb95315be1c068875ad4c5557b",
        "finding ER-RUN-02 (measured)"
      ],
      "corroboratingEvidenceRefs": [
        "docs/evidence/WO-020/handoff.md:30-34",
        "docs/evidence/WO-022/review.md:145-151"
      ],
      "dissentingEvidenceRefs": [
        "docs/evidence/WO-021/self-review.md:3-6"
      ],
      "suggestion": {
        "suggestionId": "target-order-worker-route",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2), claude-opus-5-5",
        "problemOrOpportunity": "The kit's only Codex launch route reviews the launchpad checkout, so target orders launch Codex workers through ad hoc launchers. Those workers sit outside the subagent cap and the journal, run without the read-only sandbox, and leave no retained review reports.",
        "scope": "Route upstream: ask core for a target-worktree mode on `npm run worker -- review` that keeps its read-only sandbox, WorkerLaunched row and review lane. Interim instance option: one tracked launcher with the same pins that records each launch. The operator's Codex direction (D003, D007) is unchanged.",
        "evidenceRefs": [
          "scripts/lib/review-worker.mjs:104-132",
          "scripts/lib/review-worker.mjs:598",
          "docs/product/07-execution-guide.md:3144-3182",
          "docs/evidence/WO-022/host-qualification.md:21-32"
        ],
        "affectedUsers": [
          "operator",
          "executors on target orders",
          "verifiers reading review rounds"
        ],
        "affectedSystems": [
          "scripts/lib/review-worker.mjs (kit)",
          "subagentCap accounting",
          "docs/control/local/reviews lane"
        ],
        "expectedValue": "Codex reviewers on target orders run read-only, count toward the cap, and leave reports the verifier can read, with no per-order launcher qualification.",
        "altitude": 5,
        "uncertainty": "It is unknown whether core already plans a target mode, and whether authoring workers, which must write their own copies, fit a review route at all.",
        "risks": [
          "A tracked instance launcher forks behavior from the kit and must be retired once core ships a route.",
          "Read confinement for Codex is a sandbox property that a launcher cannot add."
        ],
        "alternatives": [
          "Use the hook-observed Agent-tool dotln-worker route for target-order reviewers, as WO-021 did.",
          "State in the repository profile that Codex workers on target orders are outside the cap and the journal."
        ],
        "duplicationHints": [
          "fan-out-spend-stop-meter shares the launcher",
          "WO-020-D003; WO-022-D007"
        ],
        "urgencyRationale": "The next two dispatches (WO-023, WO-024) reuse the fan-out that ran these launchers."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/declare-instance-critical-path/",
      "sourceEpisodeId": "ep_entropy_08baac7f6d7d3051",
      "provenance": [
        "Entropy Reducer review episode ep_entropy_08baac7f6d7d3051 at base 06908c79ab3ba9eb95315be1c068875ad4c5557b",
        "finding ER-ARCH-01 (measured)"
      ],
      "corroboratingEvidenceRefs": [
        "docs/planning/refutations/2026-10-28-planning-7f5e44638facd299-012.md:13",
        "docs/planning/concept-batches-and-quality-passes-2026-10-30.md:798-803"
      ],
      "dissentingEvidenceRefs": [
        "docs/planning/mining-run-orders-2026-10-24.md:299-312"
      ],
      "suggestion": {
        "suggestionId": "declare-instance-critical-path",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2), claude-opus-5-5",
        "problemOrOpportunity": "The purpose block states a critical path, but the planning subject reads only a dated declaration file this instance never filed. The subject contradicts itself, and 9 of 17 receipts spend judgment on the mismatch.",
        "scope": "A planning pass files docs/planning/critical-path-2026-09-08.md, the name the kit reads, with a 'The critical path' section restating the purpose's dependency chain and recording that the operator's road (D11; the direction of 2026-10-30) schedules side members first. Optionally, ask core to make the declaration path configurable.",
        "evidenceRefs": [
          "docs/product/purpose.md:25-30",
          "scripts/lib/plan-subject.mjs:635-646",
          "docs/KIT.md:399-402"
        ],
        "affectedUsers": [
          "operator",
          "planner sessions",
          "plan refuter"
        ],
        "affectedSystems": [
          "docs/product/purpose.md",
          "plan refutation subject"
        ],
        "expectedValue": "The refuter judges one consistent subject, and the recurring critical-path observation stops consuming each pass's dispositions.",
        "altitude": 6,
        "uncertainty": "A declaration naming WO-008 could trip receipt 015's reopen condition, so it must state dependency and not order. Upstream may also rename the core-dated filename.",
        "risks": [
          "The declaration could be read as reopening the settled sequence; it must not be.",
          "Format validation applies once the file is declared and may refuse a malformed section."
        ],
        "alternatives": [
          "Remove the critical-path sentence from the purpose block, which is a doctrine change requiring an operator decision.",
          "Ask core to read the critical path from the purpose block."
        ],
        "duplicationHints": [
          "receipt 012's finding on the self-disagreeing subject",
          "receipt 015, WO-020 item (a), reopen condition"
        ],
        "urgencyRationale": "The next planning pass judges the D001 amendments to WO-016, WO-008, WO-017 and WO-018, which will raise the mismatch again."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/evidence-byte-ceiling/",
      "sourceEpisodeId": "ep_entropy_08baac7f6d7d3051",
      "provenance": [
        "Entropy Reducer review episode ep_entropy_08baac7f6d7d3051 at base 06908c79ab3ba9eb95315be1c068875ad4c5557b",
        "finding ER-MAINT-01 (measured)"
      ],
      "corroboratingEvidenceRefs": [
        "docs/control/doc-ceilings.json"
      ],
      "dissentingEvidenceRefs": [
        "docs/workstreams/WS-001-dotln-angular.md:385-404"
      ],
      "suggestion": {
        "suggestionId": "evidence-byte-ceiling",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2), claude-opus-5-5",
        "problemOrOpportunity": "docs/evidence is 88.5% of tracked bytes and grows by 33–85 MB per page order, with no measurement or ceiling.",
        "scope": "A planning pass declares a per-order evidence byte ceiling beside doc-ceilings.json, and a document-gate row reports each order's evidence bytes against it. WS-001 rules 24 and 25 are unchanged. Storage form (for example Git LFS at the same paths) remains an operator choice that the measurement informs.",
        "evidenceRefs": [
          "docs/workstreams/WS-001-dotln-angular.md:364-404",
          "docs/control/doc-ceilings.json",
          "README.md:94"
        ],
        "affectedUsers": [
          "operator",
          "every session that creates an order worktree",
          "anyone cloning the launchpad"
        ],
        "affectedSystems": [
          "docs/evidence/",
          "docs/control/doc-ceilings.json",
          "the document gate"
        ],
        "expectedValue": "Growth becomes visible and bounded before WO-023, WO-024, WO-016, WO-017 and WO-018 add more.",
        "altitude": 8,
        "uncertainty": "The cost of worktree size on this host is unmeasured. Git deduplicates identical blobs (164 evidence paths share a blob), so pack growth trails working-tree growth.",
        "risks": [
          "A ceiling could push executors to drop evidence the rules require; the check should report and ask, never delete.",
          "The document check is kit-owned, so an instance-owned check may be needed instead."
        ],
        "alternatives": [
          "Record evidence bytes in each final review without setting a ceiling.",
          "Move comparison-round screenshots to the target repository with target-records (this would require amending rule 25's location)."
        ],
        "duplicationHints": [
          "WS-001 rules 24-25",
          "KIT.md §Owned cleanup and retention"
        ],
        "urgencyRationale": "Five queued orders will land pages under rules 24 and 25."
      }
    }
  ],
  "resultEnvelope": {
    "workOrderId": "wo_entropy_review_1",
    "episodeId": "ep_entropy_08baac7f6d7d3051",
    "status": "completed",
    "resultId": "res_entropy_08baac7f6d7d3051_1",
    "summary": "Census: 2,525 tracked paths (1,086 kit-manifest files verified, 1,438 instance); docs/intake was not read. The four lenses were worked serially. Probes ran in TMPDIR scratch clones, and the subject's tracked status hash is unchanged. The evidenced constraint is the concept-study fan-out that WO-023 and WO-024 reuse next, which runs outside enforced budgets. Eight measured findings survived independent re-runs. Four are major: the fan-out token stop is prose-only and WO-022 passed it undeclared; the kit's Codex review route has no target-order mode, so workers ran through ad hoc launchers outside the subagent cap, the journal and the read-only sandbox; the planning subject reports no critical path while the purpose block declares one, and 9 of 17 receipts raise this; and docs/evidence is 88.5% of tracked bytes with no ceiling. Four are minor: the document and plan gates fail on fresh clones without the clone map; current.md keeps executor-unmet criteria on passed orders; the README overstates refuter independence; and gate host state lies outside episode roots. Follow-up re-deferral churn was refuted as legitimate evidence accumulation. Four non-authoritative proposal packets are offered. Awaiting operator disposition.",
    "requiresHuman": true
  },
  "cleanRoom": {
    "status": "passed",
    "stopConditionsFound": false,
    "evidenceRefs": [
      "CLAUDE.md:11-29 clean-room and secrets floor read before review",
      "git ls-files census excluded docs/intake/** (1 tracked path, never opened); docs-check's own intake exclusion confirmed at scripts/docs-check.mjs:226-229",
      "docs/control/local/ absent from the frozen copy; no credentials, tokens, private hostnames or account identifiers incorporated",
      "host temporary root reported as the pattern dotln-host-v1-<uid>, not the literal user path",
      "git status --porcelain sha256 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 equals the dispatched trackedStatusSha256"
    ]
  }
}
```

## Disposition

```json
{
  "findingCount": 8,
  "proposalPacketCount": 4,
  "proposalFiling": "awaiting operator disposition; not filed",
  "nextStep": "Fresh blinded refutation before any disposition."
}
```

Findings never authorize a fix. Proposal filing and promotion to a work order remain separate operator acts, and this receipt stops at disposition. The JSON and this rendering are immutable; a later attempt files the next number.

Local-terms list: **present**. Receipt hash: `sha256:400c8cdc5a25d979f7f82399efe71f58f8baac6e0ae585ef2aef429ebf720494`.
