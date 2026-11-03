# Entropy Reducer refutation — REFUTATION-001

Challenges `REVIEW-001` (receipt hash `sha256:400c8cdc5a25d979f7f82399efe71f58f8baac6e0ae585ef2aef429ebf720494`) over subject hash `08baac7f6d7d30514f3d4bdc3ba73c4d07dfbfece9af39311ee54f1a539a1fa4` at commit `06908c79ab3ba9eb95315be1c068875ad4c5557b`.

Refuter: **entropy-reducer@1** — `claude-opus-5-5` at effort `xhigh` on `claude-code` 2.1.317; route `launched`; transport `claude-cli-print`; source `command-line-readback-and-invocation`. Effective model and effort: unknown.

This refuter satisfies the compiled actor requirement by invocation readback.

Blinding: the refuter received only the typed subjects the compiled selection rule chose — a reproduction command for each `measured` finding and steps for each selected `by inspection` finding. No reviewer narrative, observed-versus-expected conclusion, severity argument, proposal or target survival count crossed the boundary. Finding identifiers exist only for attribution.

Measured denominator: 8 (**selected**). By-inspection denominator: 0 (**not-applicable**); sample size 0. Rule: every measured finding and every by-inspection finding.

Survived: 8. Refuted: 0. Blocked: 0. Unselected: 0. Installed dependencies: copied. Command execution: file tools confined to the frozen copy by --restricted; shell writes instructed to stay inside the copy or episode temporary directory, witnessed by copy and temporary inventories. Denied tool calls: 0.

Subject binding: the commit the challenged review receipt names, re-frozen for this episode; the working tree's own drift is recorded rather than refused. Source repository: tracked-path status unchanged across the episode: **false**; untracked, non-ignored path listing unchanged: **false** (4 before, 5 after; recorded, never a refusal condition). Source refs unchanged: **true** (207 before, 207 after; refused for a HEAD subject, recorded for a named commit). Ignored paths and file contents are not observed. Frozen copy path-and-size inventory: 0 path(s) added, 0 removed, 0 resized. Episode temporary directory: 3324 path(s), 464572531 bytes. Frozen copy inventoried at 2525 path(s) before and 2525 after.

**Process cost:** 998577 tokens; source claude-result-envelope; observed episode wall clock 178 s, 37 turns, USD 0.9567504000000001

## Attempt reasons

- `ER-VER-02` survived: Reproduced at 06908c7. README.md:92 says without qualification that 'an independent refuter judges them'. All 17 refutation records in docs/planning/refutations/*.json have episode kind direct-session, model unknown, independence session-attested and contextIsolation not-enforced. So no recorded refutation has enforced independence or context isolation. Dissent: docs/product/07-execution-guide.md:1710 ('Independence remains session-attested') and docs/PLAYBOOK.md:39 do disclose this, so the gap is the README's unqualified wording, not a hidden fact. Evidence: README.md:91-93; docs/planning/refutations/2026-10-18-planning-afc1740dd0afc954-001.json:933-934; node tally output: { 'direct-session unknown session-attested not-enforced': 17 }; docs/product/07-execution-guide.md:1710; docs/PLAYBOOK.md:39.
- `ER-MAINT-02` survived: On darwin, the supplied bare `mktemp -d` resolved to the user temp dir, outside the episode roots. I deleted that stray clone and reran the identical steps under mktemp -d "$TMPDIR/maint02.XXXXXX". Results: docs-check exit 1, refute-plan check exit 1, and one line reading 'recorded target clone unavailable' for dotln-angular@04d1021:docs/dotln/evidence/WO-004/decisions.md. A fresh clone of the tracked tree fails the docs check because it depends on an ignored local target-clone mapping. No tracked .github workflow exists to exercise this. Evidence: TMPDIR/maint02.L6VXNi/docs-check.out: 'FAIL docs check: ... WO-004: recorded target clone unavailable'; TMPDIR/maint02.L6VXNi/refute.out:1; package.json:42; git ls-files .github -> empty.
- `ER-RUN-01` survived: WO-020 declares a token stop rule 'before the spend' (WO-020:257-260), and WO-023:135 reuses 'WO-020's procedure'. Evidence: WO-020's sum (269,706,640) passed the 117,733,609 figure only because the operator lifted the stop (D012). WO-022's sum (277,506,825) passed it, and the record says 'The rule was not set before the spend' (D023, then D028). WO-021 reached 64.6% before its reviewers ran. docs/control/budgets.json dispatches.executor.tokens is null. A grep of scripts/ for 'stop figure' finds nothing. The rule is prose-only and was overrun in 2 of 3 runs. Evidence: docs/work-orders/WO-020-concept-studies-movement.md:257-260; docs/work-orders/WO-023-concept-studies-poeaa.md:135; docs/evidence/WO-020/fan-out.md:231-235; docs/evidence/WO-021/fan-out.md:207; docs/evidence/WO-022/fan-out.md:522-527; docs/control/budgets.json dispatches.executor.tokens=null.
- `ER-VER-01` survived: docs/control/current.md shows WO-022 with Phase closed and Latest verdict pass, yet it still projects 'Unmet criteria: 1'. RECORDS-PR.md:16 says all nine criteria are met. Seven order segments (WO-015, 019, 020, 021, 022, 025, 026) record criterion 1 unmet at ImplementationReady, pass final review, and have no Waived or Defect event. control.mjs sets unmetCriteria only at ImplementationReady and RepairCompleted (434, 461), clears it only on HandoffReopened (693), and leaves it unchanged on a passing verification or final review. Dissent: the line is labelled 'recorded unmet by the executor at ordinal 2' (resume.mjs:882), so it is accurate as history but stale as current state. Evidence: docs/control/current.md:8,11,23; docs/final-reviews/WO-022/RECORDS-PR.md:16; scripts/lib/control.mjs:291,434,461,693; scripts/resume.mjs:882; node scan output: 7 orders 'true false'.
- `ER-MAINT-01` survived: Measured: tracked=238,939,913 bytes, of which docs/evidence=211,539,410 (88.5%). Evidence PNGs total 196,952,831 bytes across 972 files, and round- subtrees hold 134,843,858 bytes. Per order: WO-019 85.4MB, WO-020 46.8MB, WO-021 36.1MB, WO-022 33.0MB. Pack size is 173.62 MiB. doc-ceilings.json has ceilings for only concept-study.md and purpose.md. There is no .gitattributes or LFS, and no byte guard on evidence was found in scripts. Evidence: awk output: tracked=238939913 evidence=211539410 (88.5%) png=196952831 files=972 rounds=134843858; git count-objects: size-pack 173.62 MiB; docs/control/doc-ceilings.json:3-15; .gitattributes absent.
- `ER-ARCH-01` survived: The compiled plan subject contradicts itself. goalReview.criticalPath reads 'unavailable: docs/planning/critical-path-2026-09-08.md; this instance has not declared a critical path', while goalReview.goalStandard contains 'The critical path runs from registering that repository...'. plan-subject.mjs hard-codes the dated kit filename (570, 638), and no tracked docs/planning file matches critical-path (count 0). Nine refutation records flag the undeclared or contradictory critical path. Evidence: TMPDIR/arch01-subject.json $.goalReview.criticalPath; TMPDIR/arch01-subject.json $.goalReview.goalStandard; scripts/lib/plan-subject.mjs:570,635-645; git ls-files docs/planning | grep -c critical-path -> 0; grep -l over docs/planning/refutations/*.md -> 9.
- `ER-RUN-03` survived: hostStateRoot() resolved to /var/folders/.../T/dotln-host-v1-501. That path does not start with TMPDIR, by design: host-resources.mjs:87 says 'TMPDIR is deliberately ignored'. test-runner.mjs imports it and uses it as the default hostDirectory (1757, 3123), as do bounded-command.mjs and drive-session.mjs. entropy-review.mjs:1557/1932 nonetheless describes claude-cli-print writes as 'witnessed by copy and temporary inventories'. Writes to the host-state root fall outside both inventoried roots. My own run hit the same class: a bare mktemp -d landed outside TMPDIR. Evidence: hostStateRoot() -> <host-state-root> startsWith(TMPDIR)=false; scripts/lib/host-resources.mjs:87-99; scripts/test-runner.mjs:36,45,1757,3123; scripts/lib/bounded-command.mjs:24; scripts/lib/entropy-review.mjs:1557,1932.
- `ER-RUN-02` survived: scripts/lib/review-worker.mjs contains zero occurrences of 'target'. It launches with cwd: root (598) and diffs against runGit(root, merge-base HEAD main) (519, 840), so the kit change review only sees the launchpad checkout. The target-order evidence records improvised reviewers instead: a 'session-scratch launcher' (WO-020 handoff:31), and a 'launcher in the session's scratch' whose sandbox 'confines writes but not reads' and whose reviewers are 'outside the host's subagent count' (WO-022 host-qualification:22,26,32). Their briefs and reports 'stay in the session's ignored scratch' (review.md:150). Evidence: grep -c -i target scripts/lib/review-worker.mjs -> 0; scripts/lib/review-worker.mjs:519,598,840; docs/evidence/WO-020/handoff.md:31; docs/evidence/WO-022/host-qualification.md:22,26,32; docs/evidence/WO-022/review.md:150.

## Bound report

```json
{
  "schemaVersion": 1,
  "selection": {
    "measuredDenominator": 8,
    "measuredStatus": "selected",
    "inspectionDenominator": 0,
    "inspectionStatus": "not-applicable",
    "inspectionSampleSize": 0,
    "selectionRule": "every measured finding and every by-inspection finding",
    "measuredSubjects": [
      {
        "findingId": "ER-VER-02",
        "command": "sed -n 91,93p README.md; node -e 'const fs=require(\"fs\"),p=\"docs/planning/refutations/\";const t={};for(const f of fs.readdirSync(p).filter(f=>f.endsWith(\".json\"))){const e=JSON.parse(fs.readFileSync(p+f,\"utf8\")).episode;const k=[e.kind,e.model,e.independence,e.contextIsolation].join(\" \");t[k]=(t[k]||0)+1}console.log(t)'"
      },
      {
        "findingId": "ER-MAINT-02",
        "command": "S=$(mktemp -d) && git clone -q . \"$S/c\" && cp -R node_modules \"$S/c/\" && cd \"$S/c\" && { node scripts/docs-check.mjs >/dev/null 2>&1; echo \"docs-check exit $?\"; node scripts/refute-plan.mjs check 2>&1 | grep -c 'recorded target clone unavailable'; }"
      },
      {
        "findingId": "ER-RUN-01",
        "command": "grep -n 'The stop rule is declared' docs/work-orders/WO-020-concept-studies-movement.md; grep -n \"WO-020's procedure\" docs/work-orders/WO-023-concept-studies-poeaa.md; grep -n '| Their sum\\|lifted that stop\\|not set before the spend\\|64.6 per cent\\|The session.s own, read at' docs/evidence/WO-020/fan-out.md docs/evidence/WO-021/fan-out.md docs/evidence/WO-022/fan-out.md; node -e 'console.log(require(\"./docs/control/budgets.json\").dispatches.executor.tokens)'"
      },
      {
        "findingId": "ER-VER-01",
        "command": "grep -n 'Phase: closed\\|Latest verdict\\|Unmet criteria' docs/control/current.md; grep -n 'none is waived' docs/final-reviews/WO-022/RECORDS-PR.md; node -e 'const fs=require(\"fs\");for(const f of fs.readdirSync(\"docs/control/orders\")){const ev=fs.readFileSync(\"docs/control/orders/\"+f,\"utf8\").trim().split(\"\\n\").map(JSON.parse);if(ev.some(e=>e.type===\"ImplementationReady\"&&(e.unmetCriteria||[]).includes(\"1\")))console.log(f,ev.some(e=>e.type===\"FinalReviewCompleted\"&&e.verdict===\"pass\"),ev.some(e=>/Waived|Defect/.test(e.type)))}'"
      },
      {
        "findingId": "ER-MAINT-01",
        "command": "git ls-files -z | grep -zv '^docs/intake/' | xargs -0 stat -f '%z %N' | awk '{t+=$1} $2 ~ /^docs\\/evidence\\// {e+=$1} $2 ~ /^docs\\/evidence\\/.*\\.png$/ {p+=$1; n++} $2 ~ /^docs\\/evidence\\/.*\\/round-/ {r+=$1} END {printf \"tracked=%d evidence=%d (%.1f%%) png=%d files=%d rounds=%d\\n\", t, e, 100*e/t, p, n, r}'; for w in WO-019 WO-020 WO-021 WO-022; do git ls-files -z docs/evidence/$w | xargs -0 stat -f %z | awk -v w=$w '{s+=$1} END {print w, s}'; done; git count-objects -vH | grep size-pack; node -e 'console.log(Object.keys(require(\"./docs/control/doc-ceilings.json\").documents))'"
      },
      {
        "findingId": "ER-ARCH-01",
        "command": "node scripts/refute-plan.mjs subject | node -e 'let s=\"\";process.stdin.on(\"data\",d=>s+=d).on(\"end\",()=>{const j=JSON.parse(s);console.log(j.goalReview.criticalPath);console.log(/The critical path runs/.test(JSON.stringify(j)))})'; grep -n 'critical-path-2026-09-08' scripts/lib/plan-subject.mjs; git ls-files docs/planning | grep -c critical-path; grep -l 'disagreeing with itself about whether a critical path\\|criticalPath field reports no declared critical path\\|declares no critical-path document\\|undeclared critical path' docs/planning/refutations/*.md | wc -l"
      },
      {
        "findingId": "ER-RUN-03",
        "command": "node --input-type=module -e 'const m=await import(\"./scripts/lib/host-resources.mjs\");console.log(m.hostStateRoot().startsWith(process.env.TMPDIR??\"/none\"))'; grep -n 'TMPDIR is deliberately ignored' scripts/lib/host-resources.mjs; grep -n 'host-lanes.mjs\\|host-resources.mjs' scripts/test-runner.mjs; grep -n 'witnessed by copy and temporary inventories' scripts/lib/entropy-review.mjs"
      },
      {
        "findingId": "ER-RUN-02",
        "command": "grep -c -i target scripts/lib/review-worker.mjs; grep -n 'cwd: root,\\|\"merge-base\", \"HEAD\", \"main\"' scripts/lib/review-worker.mjs; grep -n -i 'session-scratch launcher\\|launcher in the session\\|confines writes but not reads\\|outside the host.s subagent count\\|stay in the session.s ignored scratch' docs/evidence/WO-020/handoff.md docs/evidence/WO-022/host-qualification.md docs/evidence/WO-022/review.md"
      }
    ],
    "inspectionSubjects": [],
    "selectedFindingIds": [
      "ER-VER-02",
      "ER-MAINT-02",
      "ER-RUN-01",
      "ER-VER-01",
      "ER-MAINT-01",
      "ER-ARCH-01",
      "ER-RUN-03",
      "ER-RUN-02"
    ]
  },
  "attempts": [
    {
      "findingId": "ER-VER-02",
      "result": "survived",
      "reason": "Reproduced at 06908c7. README.md:92 says without qualification that 'an independent refuter judges them'. All 17 refutation records in docs/planning/refutations/*.json have episode kind direct-session, model unknown, independence session-attested and contextIsolation not-enforced. So no recorded refutation has enforced independence or context isolation. Dissent: docs/product/07-execution-guide.md:1710 ('Independence remains session-attested') and docs/PLAYBOOK.md:39 do disclose this, so the gap is the README's unqualified wording, not a hidden fact.",
      "evidenceRefs": [
        "README.md:91-93",
        "docs/planning/refutations/2026-10-18-planning-afc1740dd0afc954-001.json:933-934",
        "node tally output: { 'direct-session unknown session-attested not-enforced': 17 }",
        "docs/product/07-execution-guide.md:1710",
        "docs/PLAYBOOK.md:39"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "README.md (instance)",
      "reproduction": {
        "kind": "command",
        "command": "sed -n 91,93p README.md; node -e 'const fs=require(\"fs\"),p=\"docs/planning/refutations/\";const t={};for(const f of fs.readdirSync(p).filter(f=>f.endsWith(\".json\"))){const e=JSON.parse(fs.readFileSync(p+f,\"utf8\")).episode;const k=[e.kind,e.model,e.independence,e.contextIsolation].join(\" \");t[k]=(t[k]||0)+1}console.log(t)'"
      }
    },
    {
      "findingId": "ER-MAINT-02",
      "result": "survived",
      "reason": "On darwin, the supplied bare `mktemp -d` resolved to the user temp dir, outside the episode roots. I deleted that stray clone and reran the identical steps under mktemp -d \"$TMPDIR/maint02.XXXXXX\". Results: docs-check exit 1, refute-plan check exit 1, and one line reading 'recorded target clone unavailable' for dotln-angular@04d1021:docs/dotln/evidence/WO-004/decisions.md. A fresh clone of the tracked tree fails the docs check because it depends on an ignored local target-clone mapping. No tracked .github workflow exists to exercise this.",
      "evidenceRefs": [
        "TMPDIR/maint02.L6VXNi/docs-check.out: 'FAIL docs check: ... WO-004: recorded target clone unavailable'",
        "TMPDIR/maint02.L6VXNi/refute.out:1",
        "package.json:42",
        "git ls-files .github -> empty"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "README.md gate table (instance); scripts/bootstrap.mjs preflight (kit)",
      "reproduction": {
        "kind": "command",
        "command": "S=$(mktemp -d) && git clone -q . \"$S/c\" && cp -R node_modules \"$S/c/\" && cd \"$S/c\" && { node scripts/docs-check.mjs >/dev/null 2>&1; echo \"docs-check exit $?\"; node scripts/refute-plan.mjs check 2>&1 | grep -c 'recorded target clone unavailable'; }"
      }
    },
    {
      "findingId": "ER-RUN-01",
      "result": "survived",
      "reason": "WO-020 declares a token stop rule 'before the spend' (WO-020:257-260), and WO-023:135 reuses 'WO-020's procedure'. Evidence: WO-020's sum (269,706,640) passed the 117,733,609 figure only because the operator lifted the stop (D012). WO-022's sum (277,506,825) passed it, and the record says 'The rule was not set before the spend' (D023, then D028). WO-021 reached 64.6% before its reviewers ran. docs/control/budgets.json dispatches.executor.tokens is null. A grep of scripts/ for 'stop figure' finds nothing. The rule is prose-only and was overrun in 2 of 3 runs.",
      "evidenceRefs": [
        "docs/work-orders/WO-020-concept-studies-movement.md:257-260",
        "docs/work-orders/WO-023-concept-studies-poeaa.md:135",
        "docs/evidence/WO-020/fan-out.md:231-235",
        "docs/evidence/WO-021/fan-out.md:207",
        "docs/evidence/WO-022/fan-out.md:522-527",
        "docs/control/budgets.json dispatches.executor.tokens=null"
      ],
      "evidenceLabel": "measured",
      "severity": "major",
      "surface": "WO-020 fan-out procedure (reused by WO-023, WO-024); docs/control/budgets.json",
      "reproduction": {
        "kind": "command",
        "command": "grep -n 'The stop rule is declared' docs/work-orders/WO-020-concept-studies-movement.md; grep -n \"WO-020's procedure\" docs/work-orders/WO-023-concept-studies-poeaa.md; grep -n '| Their sum\\|lifted that stop\\|not set before the spend\\|64.6 per cent\\|The session.s own, read at' docs/evidence/WO-020/fan-out.md docs/evidence/WO-021/fan-out.md docs/evidence/WO-022/fan-out.md; node -e 'console.log(require(\"./docs/control/budgets.json\").dispatches.executor.tokens)'"
      }
    },
    {
      "findingId": "ER-VER-01",
      "result": "survived",
      "reason": "docs/control/current.md shows WO-022 with Phase closed and Latest verdict pass, yet it still projects 'Unmet criteria: 1'. RECORDS-PR.md:16 says all nine criteria are met. Seven order segments (WO-015, 019, 020, 021, 022, 025, 026) record criterion 1 unmet at ImplementationReady, pass final review, and have no Waived or Defect event. control.mjs sets unmetCriteria only at ImplementationReady and RepairCompleted (434, 461), clears it only on HandoffReopened (693), and leaves it unchanged on a passing verification or final review. Dissent: the line is labelled 'recorded unmet by the executor at ordinal 2' (resume.mjs:882), so it is accurate as history but stale as current state.",
      "evidenceRefs": [
        "docs/control/current.md:8,11,23",
        "docs/final-reviews/WO-022/RECORDS-PR.md:16",
        "scripts/lib/control.mjs:291,434,461,693",
        "scripts/resume.mjs:882",
        "node scan output: 7 orders 'true false'"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "docs/control/current.md projection (scripts/resume.mjs, kit)",
      "reproduction": {
        "kind": "command",
        "command": "grep -n 'Phase: closed\\|Latest verdict\\|Unmet criteria' docs/control/current.md; grep -n 'none is waived' docs/final-reviews/WO-022/RECORDS-PR.md; node -e 'const fs=require(\"fs\");for(const f of fs.readdirSync(\"docs/control/orders\")){const ev=fs.readFileSync(\"docs/control/orders/\"+f,\"utf8\").trim().split(\"\\n\").map(JSON.parse);if(ev.some(e=>e.type===\"ImplementationReady\"&&(e.unmetCriteria||[]).includes(\"1\")))console.log(f,ev.some(e=>e.type===\"FinalReviewCompleted\"&&e.verdict===\"pass\"),ev.some(e=>/Waived|Defect/.test(e.type)))}'"
      }
    },
    {
      "findingId": "ER-MAINT-01",
      "result": "survived",
      "reason": "Measured: tracked=238,939,913 bytes, of which docs/evidence=211,539,410 (88.5%). Evidence PNGs total 196,952,831 bytes across 972 files, and round- subtrees hold 134,843,858 bytes. Per order: WO-019 85.4MB, WO-020 46.8MB, WO-021 36.1MB, WO-022 33.0MB. Pack size is 173.62 MiB. doc-ceilings.json has ceilings for only concept-study.md and purpose.md. There is no .gitattributes or LFS, and no byte guard on evidence was found in scripts.",
      "evidenceRefs": [
        "awk output: tracked=238939913 evidence=211539410 (88.5%) png=196952831 files=972 rounds=134843858",
        "git count-objects: size-pack 173.62 MiB",
        "docs/control/doc-ceilings.json:3-15",
        ".gitattributes absent"
      ],
      "evidenceLabel": "measured",
      "severity": "major",
      "surface": "docs/evidence/ and docs/control/doc-ceilings.json (instance)",
      "reproduction": {
        "kind": "command",
        "command": "git ls-files -z | grep -zv '^docs/intake/' | xargs -0 stat -f '%z %N' | awk '{t+=$1} $2 ~ /^docs\\/evidence\\// {e+=$1} $2 ~ /^docs\\/evidence\\/.*\\.png$/ {p+=$1; n++} $2 ~ /^docs\\/evidence\\/.*\\/round-/ {r+=$1} END {printf \"tracked=%d evidence=%d (%.1f%%) png=%d files=%d rounds=%d\\n\", t, e, 100*e/t, p, n, r}'; for w in WO-019 WO-020 WO-021 WO-022; do git ls-files -z docs/evidence/$w | xargs -0 stat -f %z | awk -v w=$w '{s+=$1} END {print w, s}'; done; git count-objects -vH | grep size-pack; node -e 'console.log(Object.keys(require(\"./docs/control/doc-ceilings.json\").documents))'"
      }
    },
    {
      "findingId": "ER-ARCH-01",
      "result": "survived",
      "reason": "The compiled plan subject contradicts itself. goalReview.criticalPath reads 'unavailable: docs/planning/critical-path-2026-09-08.md; this instance has not declared a critical path', while goalReview.goalStandard contains 'The critical path runs from registering that repository...'. plan-subject.mjs hard-codes the dated kit filename (570, 638), and no tracked docs/planning file matches critical-path (count 0). Nine refutation records flag the undeclared or contradictory critical path.",
      "evidenceRefs": [
        "TMPDIR/arch01-subject.json $.goalReview.criticalPath",
        "TMPDIR/arch01-subject.json $.goalReview.goalStandard",
        "scripts/lib/plan-subject.mjs:570,635-645",
        "git ls-files docs/planning | grep -c critical-path -> 0",
        "grep -l over docs/planning/refutations/*.md -> 9"
      ],
      "evidenceLabel": "measured",
      "severity": "major",
      "surface": "docs/product/purpose.md and the plan refutation subject (scripts/lib/plan-subject.mjs)",
      "reproduction": {
        "kind": "command",
        "command": "node scripts/refute-plan.mjs subject | node -e 'let s=\"\";process.stdin.on(\"data\",d=>s+=d).on(\"end\",()=>{const j=JSON.parse(s);console.log(j.goalReview.criticalPath);console.log(/The critical path runs/.test(JSON.stringify(j)))})'; grep -n 'critical-path-2026-09-08' scripts/lib/plan-subject.mjs; git ls-files docs/planning | grep -c critical-path; grep -l 'disagreeing with itself about whether a critical path\\|criticalPath field reports no declared critical path\\|declares no critical-path document\\|undeclared critical path' docs/planning/refutations/*.md | wc -l"
      }
    },
    {
      "findingId": "ER-RUN-03",
      "result": "survived",
      "reason": "hostStateRoot() resolved to /var/folders/.../T/dotln-host-v1-501. That path does not start with TMPDIR, by design: host-resources.mjs:87 says 'TMPDIR is deliberately ignored'. test-runner.mjs imports it and uses it as the default hostDirectory (1757, 3123), as do bounded-command.mjs and drive-session.mjs. entropy-review.mjs:1557/1932 nonetheless describes claude-cli-print writes as 'witnessed by copy and temporary inventories'. Writes to the host-state root fall outside both inventoried roots. My own run hit the same class: a bare mktemp -d landed outside TMPDIR.",
      "evidenceRefs": [
        "hostStateRoot() -> <host-state-root> startsWith(TMPDIR)=false",
        "scripts/lib/host-resources.mjs:87-99",
        "scripts/test-runner.mjs:36,45,1757,3123",
        "scripts/lib/bounded-command.mjs:24",
        "scripts/lib/entropy-review.mjs:1557,1932"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "scripts/lib/entropy-review.mjs confinement receipt; scripts/lib/host-resources.mjs (kit)",
      "reproduction": {
        "kind": "command",
        "command": "node --input-type=module -e 'const m=await import(\"./scripts/lib/host-resources.mjs\");console.log(m.hostStateRoot().startsWith(process.env.TMPDIR??\"/none\"))'; grep -n 'TMPDIR is deliberately ignored' scripts/lib/host-resources.mjs; grep -n 'host-lanes.mjs\\|host-resources.mjs' scripts/test-runner.mjs; grep -n 'witnessed by copy and temporary inventories' scripts/lib/entropy-review.mjs"
      }
    },
    {
      "findingId": "ER-RUN-02",
      "result": "survived",
      "reason": "scripts/lib/review-worker.mjs contains zero occurrences of 'target'. It launches with cwd: root (598) and diffs against runGit(root, merge-base HEAD main) (519, 840), so the kit change review only sees the launchpad checkout. The target-order evidence records improvised reviewers instead: a 'session-scratch launcher' (WO-020 handoff:31), and a 'launcher in the session's scratch' whose sandbox 'confines writes but not reads' and whose reviewers are 'outside the host's subagent count' (WO-022 host-qualification:22,26,32). Their briefs and reports 'stay in the session's ignored scratch' (review.md:150).",
      "evidenceRefs": [
        "grep -c -i target scripts/lib/review-worker.mjs -> 0",
        "scripts/lib/review-worker.mjs:519,598,840",
        "docs/evidence/WO-020/handoff.md:31",
        "docs/evidence/WO-022/host-qualification.md:22,26,32",
        "docs/evidence/WO-022/review.md:150"
      ],
      "evidenceLabel": "measured",
      "severity": "major",
      "surface": "scripts/lib/review-worker.mjs (kit) and target-order executor practice under WS-001",
      "reproduction": {
        "kind": "command",
        "command": "grep -c -i target scripts/lib/review-worker.mjs; grep -n 'cwd: root,\\|\"merge-base\", \"HEAD\", \"main\"' scripts/lib/review-worker.mjs; grep -n -i 'session-scratch launcher\\|launcher in the session\\|confines writes but not reads\\|outside the host.s subagent count\\|stay in the session.s ignored scratch' docs/evidence/WO-020/handoff.md docs/evidence/WO-022/host-qualification.md docs/evidence/WO-022/review.md"
      }
    }
  ],
  "promotedFindingIds": [
    "ER-VER-02",
    "ER-MAINT-02",
    "ER-RUN-01",
    "ER-VER-01",
    "ER-MAINT-01",
    "ER-ARCH-01",
    "ER-RUN-03",
    "ER-RUN-02"
  ],
  "refutedFindingIds": [],
  "blockedFindingIds": [],
  "unselectedFindingIds": []
}
```

A refuted finding leaves the promoted set and stays in this report with reviewer and refuter attribution. A blocked attempt stays blocked and an unselected finding stays unselected; neither is laundered into a pass or called refuted. There is no survival quota and no vote. This refutation does not replace a work order's independent lifecycle verification.

Local-terms list: **present**. Receipt hash: `sha256:58a01355a596d4c5b5c2eab429f604e91ec4976d8f028f8a3270b7a85289a119`.
