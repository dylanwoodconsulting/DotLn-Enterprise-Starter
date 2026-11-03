# Entropy Reducer review — REVIEW-002

Subject: commit `55b59c9133056c1d6471274a9676a7d5649196ac`; subject hash `233ab1962fb9402553febb1fdb766ae6669fb42c92b21a307bfe2273e5629b55`; frozen copy inventoried at 1052 path(s).

Repository: `dotln-angular@55b59c9133056c1d6471274a9676a7d5649196ac`; frozen copy: `/private/var/folders/m1/v91jv25j7nl21fs2yxgjm3540000gn/T/dotln-entropy/7e7cf99f3ddc29d5/review-eUDpN5/repo`.

Launchpad tracked status unchanged across the episode: **true**; dirty at dispatch: **false** (recorded, never the target subject).

Reviewer: **entropy-reducer@1** — `claude-opus-5-5` at effort `xhigh` on `claude-code` 2.1.317; route `launched`; transport `claude-cli-print`; source `command-line-readback-and-invocation`. Effective model and effort: unknown.

This reviewer satisfies the compiled actor requirement by invocation readback. Substitution policy: different-reviewer-and-must-be-attested.

Episode `ep_entropy_233ab1962fb94025` ran 2026-11-03T18:25:53.116Z to 2026-11-03T18:43:40.786Z. Compiled semantic hash `fnv1a64:99f6e455be7c21ba`; work order `wo_entropy_review_1`; authority `auth_entropy_reducer`. Execution boundary: operator-mediated-manual, no deferred Program kind.

Findings: 10 — 10 measured, 0 by inspection; 0 blocking, 1 major, 9 minor. Proposal packets: 6.

Subject binding: an explicitly named commit; bound by its tree object, with the working tree's own drift recorded rather than refused. Source repository: tracked-path status unchanged across the episode: **true**; untracked, non-ignored path listing unchanged: **true** (0 before, 0 after; recorded, never a refusal condition). Source refs unchanged: **true** (12 before, 12 after; refused for a HEAD subject, recorded for a named commit). Ignored paths and file contents are not observed. Frozen copy path-and-size inventory: 0 path(s) added, 0 removed, 0 resized. Episode temporary directory: 236 path(s), 645402 bytes. Installed dependencies: absent. Command execution: file tools confined to the frozen copy by --restricted; shell writes instructed to stay inside the copy or episode temporary directory, witnessed by copy and temporary inventories. Denied tool calls: 0.

Compiled review confinement (execution rule): lenses worked serially by the reviewer; no delegate grant or delegate resource limit. Checklist completion is not independently observed; worker result: completed.

**Process cost:** 9742046 tokens; source claude-result-envelope; observed episode wall clock 1068 s, 88 turns, USD 5.162644600000001

## Result envelope summary

Census: 1052 tracked files, none under docs/intake; five lenses worked serially; ten findings (one major, nine minor) and six suggestion packets. Evidenced constraint: open defects and doctrine reach no executable or visible state. The CI board gauge reads 0 and cannot see tools/ or .github/, while 77 decision follow-ups carry no closure state and WO-004-D010 remains open. Doctrine drifts across hand-kept copies: barrel shape (three of four features), five command lists (sub-app rules omit typecheck:e2e), and a one-release tool-v0 shim shipped in five releases. check:scripts passes with a row deleted and a stale row added. Standing docs cite bare launchpad paths; filed receipts hold 322 unreachable relative links; the performance sampler omits the root scene. Runtime lens found no authority escapes. Boundary incidents, disclosed: a stray cp wrote /tmp/ignore, and two mktemp runs ignored TMPDIR and created directories under the parent temp folder; each held only public tracked bytes, was verified by hash or content, and was removed. Tracked tree unchanged. Dependencies were not installed, so probes used plain Node, git and stubs. Awaiting operator disposition.

## Worker statement

{"schemaVersion":1,"findings":[{"findingId":"ER-F1-board-gauge-blind","criterion":"Conventions rule 21 (docs/dev-reference/workspace/conventions.md:227-232), a settled house rule: an encountered defect is fixed or boarded visibly (a // BOARDED: marker, a skipped failing test, or a visible not-implemented surface), and CI prints the board count.","severity":"major","evidenceLabel":"measured","observed":"`npm run boards` prints 0. The tree has 0 skipped tests and no not-implemented surface. Meanwhile 77 decision records under docs/dotln/evidence carry a followup field, and none carries a closure state. Spot checks: five are fixed in code (WO-005-D010 title, WO-006-D024 anchors, WO-007-D008, D009 and D010). WO-004-D010 is still open: pr-title.yml:4 still triggers on pull_request, and pr-title.mjs still blames workflow permissions. tools/board-count.mjs:24-25 scans only apps/ and libs/. In a scratch drill, a BOARDED marker in tools/pr-title.mjs still counts 0, while a control marker in libs counts 1. Several decisions are titled 'Board …' (WO-004-D008 to D010), yet nothing they board reaches the gauge.","expected":"The count CI prints reflects open target defects wherever they live (tools/, .github/, configuration). A follow-up that boards a target defect leaves a countable marker, so open and closed follow-ups can be told apart without reading the records.","reproduction":{"kind":"command","command":"node tools/board-count.mjs | tail -1; S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD tools | tar -x -C $S && echo '// BOARDED: probe' >> $S/tools/pr-title.mjs && node $S/tools/board-count.mjs | tail -1; grep -n 'pull_request:' .github/workflows/pr-title.yml; grep -c '\"followup\"' docs/dotln/evidence/*/decisions.md | awk -F: '{s+=$2} END {print \"followup fields:\", s}'"},"evidenceRefs":["tools/board-count.mjs:24-25","docs/dev-reference/workspace/conventions.md:227-232","docs/dotln/evidence/WO-004/decisions.md#WO-004-D010",".github/workflows/pr-title.yml:3-5","tools/pr-title.mjs:54-57","libs/shared/state/src/lib/dotln-error-handler.ts:10-11","apps/dotln/src/index.html:5","probe:scratch drill-boards (tools marker 0, libs control 1)"],"surface":"tools/board-count.mjs; conventions rule 21; docs/dotln/evidence/*/decisions.md","altitude":6,"standardization":{"kind":"recurring","rung":"script","rationale":"Every follow-up that boards a defect outside apps/ or libs/, and every temporary shim, recurs as an invisible board; widening the existing board-count script's scope is the cheapest executable rung."}},{"findingId":"ER-F2-command-lists-drift","criterion":"Session command lists match what CI and the registered gate run. WO-015-D022 recorded that omitting typecheck:e2e let an error through every local check and broke CI on pull request 9.","severity":"minor","evidenceLabel":"measured","observed":"docs/ai-reference/sub-app-rules.md:25-27 omits `npm run typecheck:e2e`. ci.yml runs it, and sub-app work, which adds e2e specs, needs it. The same list re-runs lint:components, lint:hygiene, check:fixtures and i18n:check, which `run-many -t lint` already runs through tools/project.json. README.md:33, docs/ai-reference/README.md:20 and docs/dev-reference/README.md:81 list test:tooling separately, although tools/project.json:19 runs it inside lint. README.md:52 says pull requests run 'the checks above', while CI runs `nx affected`. Five hand-kept lists.","expected":"The lists are derived from one gate definition, or name one command, so a session can neither omit a gate command nor run one twice.","reproduction":{"kind":"command","command":"grep -c typecheck:e2e docs/ai-reference/sub-app-rules.md .github/workflows/ci.yml; grep -n 'test:tooling' tools/project.json README.md docs/ai-reference/README.md docs/dev-reference/README.md"},"evidenceRefs":["docs/ai-reference/sub-app-rules.md:25-27","tools/project.json:11-23",".github/workflows/ci.yml:41-48","README.md:26-34","README.md:52-54","docs/ai-reference/README.md:19-21","docs/dev-referenc

## Validated reviewer output

```json
{
  "schemaVersion": 1,
  "findings": [
    {
      "findingId": "ER-F1-board-gauge-blind",
      "criterion": "Conventions rule 21 (docs/dev-reference/workspace/conventions.md:227-232), a settled house rule: an encountered defect is fixed or boarded visibly (a // BOARDED: marker, a skipped failing test, or a visible not-implemented surface), and CI prints the board count.",
      "severity": "major",
      "observed": "`npm run boards` prints 0. The tree has 0 skipped tests and no not-implemented surface. Meanwhile 77 decision records under docs/dotln/evidence carry a followup field, and none carries a closure state. Spot checks: five are fixed in code (WO-005-D010 title, WO-006-D024 anchors, WO-007-D008, D009 and D010). WO-004-D010 is still open: pr-title.yml:4 still triggers on pull_request, and pr-title.mjs still blames workflow permissions. tools/board-count.mjs:24-25 scans only apps/ and libs/. In a scratch drill, a BOARDED marker in tools/pr-title.mjs still counts 0, while a control marker in libs counts 1. Several decisions are titled 'Board …' (WO-004-D008 to D010), yet nothing they board reaches the gauge.",
      "expected": "The count CI prints reflects open target defects wherever they live (tools/, .github/, configuration). A follow-up that boards a target defect leaves a countable marker, so open and closed follow-ups can be told apart without reading the records.",
      "evidenceRefs": [
        "tools/board-count.mjs:24-25",
        "docs/dev-reference/workspace/conventions.md:227-232",
        "docs/dotln/evidence/WO-004/decisions.md#WO-004-D010",
        ".github/workflows/pr-title.yml:3-5",
        "tools/pr-title.mjs:54-57",
        "libs/shared/state/src/lib/dotln-error-handler.ts:10-11",
        "apps/dotln/src/index.html:5",
        "probe:scratch drill-boards (tools marker 0, libs control 1)"
      ],
      "surface": "tools/board-count.mjs; conventions rule 21; docs/dotln/evidence/*/decisions.md",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "script",
        "rationale": "Every follow-up that boards a defect outside apps/ or libs/, and every temporary shim, recurs as an invisible board; widening the existing board-count script's scope is the cheapest executable rung."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "node tools/board-count.mjs | tail -1; S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD tools | tar -x -C $S && echo '// BOARDED: probe' >> $S/tools/pr-title.mjs && node $S/tools/board-count.mjs | tail -1; grep -n 'pull_request:' .github/workflows/pr-title.yml; grep -c '\"followup\"' docs/dotln/evidence/*/decisions.md | awk -F: '{s+=$2} END {print \"followup fields:\", s}'"
      }
    },
    {
      "findingId": "ER-F2-command-lists-drift",
      "criterion": "Session command lists match what CI and the registered gate run. WO-015-D022 recorded that omitting typecheck:e2e let an error through every local check and broke CI on pull request 9.",
      "severity": "minor",
      "observed": "docs/ai-reference/sub-app-rules.md:25-27 omits `npm run typecheck:e2e`. ci.yml runs it, and sub-app work, which adds e2e specs, needs it. The same list re-runs lint:components, lint:hygiene, check:fixtures and i18n:check, which `run-many -t lint` already runs through tools/project.json. README.md:33, docs/ai-reference/README.md:20 and docs/dev-reference/README.md:81 list test:tooling separately, although tools/project.json:19 runs it inside lint. README.md:52 says pull requests run 'the checks above', while CI runs `nx affected`. Five hand-kept lists.",
      "expected": "The lists are derived from one gate definition, or name one command, so a session can neither omit a gate command nor run one twice.",
      "evidenceRefs": [
        "docs/ai-reference/sub-app-rules.md:25-27",
        "tools/project.json:11-23",
        ".github/workflows/ci.yml:41-48",
        "README.md:26-34",
        "README.md:52-54",
        "docs/ai-reference/README.md:19-21",
        "docs/dev-reference/README.md:74-87",
        "docs/dotln/evidence/WO-015/decisions.md#WO-015-D022",
        "probe:scratch cmdlists.mjs"
      ],
      "surface": "docs/ai-reference/sub-app-rules.md; README.md; docs/ai-reference/README.md; docs/dev-reference/README.md",
      "altitude": 6,
      "standardization": {
        "kind": "recurring",
        "rung": "script",
        "rationale": "Each new command or gate change must be copied into five lists by hand; one named gate script referenced by every list removes the copying."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -c typecheck:e2e docs/ai-reference/sub-app-rules.md .github/workflows/ci.yml; grep -n 'test:tooling' tools/project.json README.md docs/ai-reference/README.md docs/dev-reference/README.md"
      }
    },
    {
      "findingId": "ER-F3-gate-checks-without-negative-control",
      "criterion": "docs/dev-reference/workspace/scripts.md:43 says test:tooling shows that 'the checks and helpers here behave as documented'. A gate check needs a negative control that runs where the check runs.",
      "severity": "minor",
      "observed": "No tools/*.test.mjs imports check-script-reference.mjs or check-foundation-types.mjs. The negative controls for check-component-order and check-shared-types exist only in tools/check-taxonomy-fixtures.mjs:143-153, which runs under the hand-run lint:fixtures. Scratch drill (typescript stubbed): the real check-script-reference.mjs still prints PASS with exit 0 after the `npm run boards` row is deleted and a row for a nonexistent script is added. Its substring match accepts a name that survives only in prose, and it never detects stale rows.",
      "expected": "Each gate check has an in-gate negative control, and check:scripts fails on a removed row or a stale row. This finding does not touch the scope question that WO-026-D011 holds open.",
      "evidenceRefs": [
        "tools/scripts/check-script-reference.mjs:3-12",
        "tools/check-taxonomy-fixtures.mjs:143-155",
        "docs/dev-reference/workspace/scripts.md:43",
        "docs/dev-reference/workspace/scripts.md:85",
        "probe:scratch drill-scripts (PASS, exit 0 after mutation)",
        "probe:script-to-test mapping (4 of 11 gate commands have no test:tooling witness)"
      ],
      "surface": "tools/scripts/check-script-reference.mjs; tools/*.test.mjs",
      "altitude": 8,
      "standardization": {
        "kind": "recurring",
        "rung": "test",
        "rationale": "A check with no negative control can go vacuous on any edit and still pass on the clean tree; a tools/*.test.mjs case is the cheapest guard and already runs in the gate."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD package.json tools/scripts docs/dev-reference/workspace/scripts.md | tar -x -C $S && mkdir -p $S/node_modules/typescript && echo '{\"name\":\"typescript\",\"type\":\"module\",\"main\":\"index.js\"}' > $S/node_modules/typescript/package.json && echo 'export default {};' > $S/node_modules/typescript/index.js && (cd $S && node -e \"const fs=require('fs'),p='docs/dev-reference/workspace/scripts.md';let d=fs.readFileSync(p,'utf8').replace(/^\\| \\`npm run boards\\`.*\\n/m,'');fs.writeFileSync(p,d+'\\n| \\`npm run removed:check\\` | gone |\\n')\" && node tools/scripts/check-script-reference.mjs; echo exit=$?); grep -l -E 'check-(script-reference|foundation-types)' tools/*.test.mjs | wc -l"
      }
    },
    {
      "findingId": "ER-F4-barrel-doctrine-split",
      "criterion": "Conventions rule 4 (conventions.md:55-58) and docs/ai-reference/foundation-rules.md:31: an importable library's index.ts contains only `export * from './public_api';`, and public_api.ts lists the exports.",
      "severity": "minor",
      "observed": "The board, machinery and scene index.ts files export their routes directly and have no public_api.ts; tools follows rule 4. docs/dev-reference/architecture/sub-apps.md:26-27 presents board's direct export as the exemplar layout. No check enforces either shape.",
      "expected": "Standing doctrine settles on one barrel shape, the documents agree, and a check refuses the other shape.",
      "evidenceRefs": [
        "libs/features/board/src/index.ts:1",
        "libs/features/machinery/src/index.ts:1",
        "libs/features/scene/src/index.ts:1",
        "libs/features/tools/src/index.ts:1",
        "docs/dev-reference/workspace/conventions.md:57-58",
        "docs/ai-reference/foundation-rules.md:31-32",
        "docs/dev-reference/architecture/sub-apps.md:26-27",
        "probe:scratch projects.mjs"
      ],
      "surface": "libs/features/*/src/index.ts; conventions rule 4; sub-apps.md",
      "altitude": 5,
      "standardization": {
        "kind": "recurring",
        "rung": "lint",
        "rationale": "Each new library copies whichever shape it finds first; a structural check in workspace-tools:lint makes the rule hold without review."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "for l in board machinery scene tools; do printf '%s: ' $l; tr '\\n' ' ' < libs/features/$l/src/index.ts; echo; done; sed -n 57,58p docs/dev-reference/workspace/conventions.md; sed -n 26,27p docs/dev-reference/architecture/sub-apps.md"
      }
    },
    {
      "findingId": "ER-F5-v0-shim-outlived-window",
      "criterion": "Conventions rule 23 (conventions.md:248-251): the loader accepts tool-v0 for one compatibility release. catalog-loader.ts:158-160 says to remove the reader when the next release adopts v1 only.",
      "severity": "minor",
      "observed": "The tool-v0 branch (6 references in catalog-loader.ts) shipped in v0.5.0, v0.6.0, v0.6.1, v0.7.0, v0.8.0 and HEAD. None of those tags ships v0 data; only a fake loader in a spec exercises the branch. Nothing marks or counts its expiry.",
      "expected": "The shim is removed after its one release, or its expiry is visible, through a BOARDED marker counted by CI or a test that fails once the window passes.",
      "evidenceRefs": [
        "libs/shared/catalog/src/lib/catalog-loader.ts:17",
        "libs/shared/catalog/src/lib/catalog-loader.ts:115-126",
        "libs/shared/catalog/src/lib/catalog-loader.ts:158-171",
        "libs/shared/catalog/src/lib/catalog-loader.spec.ts:49",
        "docs/dev-reference/workspace/conventions.md:248-251",
        "git tags v0.5.0..v0.8.0"
      ],
      "surface": "libs/shared/catalog/src/lib/catalog-loader.ts; conventions rule 23",
      "altitude": 5,
      "standardization": {
        "kind": "recurring",
        "rung": "guard",
        "rationale": "Temporary compatibility shims recur with each schema version; requiring a counted BOARDED marker that names the expiry makes every shim's window observable."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "for t in v0.5.0 v0.6.0 v0.6.1 v0.7.0 v0.8.0 HEAD; do printf '%s loader=%s data=%s\\n' \"$t\" \"$(git show \"${t}:libs/shared/catalog/src/lib/catalog-loader.ts\" | grep -c tool-v0)\" \"$(git grep -l tool-v0 \"${t}\" -- libs/shared/catalog/src/data | wc -l | tr -d ' ')\"; done; grep -n 'one compatibility release' docs/dev-reference/workspace/conventions.md"
      }
    },
    {
      "findingId": "ER-F6-standing-doc-unreachable-pointers",
      "criterion": "A standing document's pointers resolve for its reader, and the document states current state rather than process history.",
      "severity": "minor",
      "observed": "catalog.md:219-220 says the operator's direction for what a study is 'lives in the launchpad's docs/product/concept-study.md'. catalog.md:329-330 cites 'the launchpad's docs/evidence/WO-022/design/'. Both are bare paths with no repository or commit, and neither exists here. The same document narrates when the operator ended design rounds (:207-209, :329-330). Meanwhile 19 study records under libs/shared/catalog/src/studies cite the same platform repository through pinned github.com/DylanBWood/DotLn/blob/<sha>/ URLs.",
      "expected": "Standing pointers use the pinned-URL form the study records already use, or the current rule is stated here; the dated process history stays in the records.",
      "evidenceRefs": [
        "docs/dev-reference/architecture/catalog.md:205-211",
        "docs/dev-reference/architecture/catalog.md:217-220",
        "docs/dev-reference/architecture/catalog.md:329-330",
        "libs/shared/catalog/src/studies/eip/aggregator.json:93"
      ],
      "surface": "docs/dev-reference/architecture/catalog.md",
      "altitude": 6,
      "standardization": {
        "kind": "one-off"
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -n -E \"launchpad's|on 2026-1[01]-[0-9]{2}\" docs/dev-reference/architecture/catalog.md; git grep -l 'github.com/DylanBWood/DotLn/blob/' -- libs/shared/catalog/src/studies | wc -l"
      }
    },
    {
      "findingId": "ER-F7-records-cite-absent-evidence",
      "criterion": "A receipt filed in this repository cites evidence a reader of this repository can reach, or says where that evidence lives.",
      "severity": "minor",
      "observed": "322 relative links in docs/dotln resolve to nothing tracked; standing documents have 0. Each evidence directory files only decisions.md, so FINAL and VER verdicts cite walkthroughs, manifests and planning receipts that exist only in the launchpad (for example WO-022 FINAL-001 criteria 1, 4 and 8). docs/dev-reference/README.md:71 describes docs/dotln as 'Order and review records', with no note on where those links resolve.",
      "expected": "Without changing any record bytes (they are hash-bound and filed verbatim), the index row naming docs/dotln states that relative links resolve in the launchpad at the recorded commit, so a reader does not mistake an absent artifact for missing evidence.",
      "evidenceRefs": [
        "docs/dev-reference/README.md:71",
        "docs/dotln/final-reviews/WO-022/FINAL-001.md:55-69",
        ".prettierignore:18-19",
        "probe:scratch links.mjs (322 docs/dotln, 0 elsewhere)"
      ],
      "surface": "docs/dev-reference/README.md; docs/dotln/**",
      "altitude": 6,
      "standardization": {
        "kind": "one-off"
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "node -e \"const {execFileSync:x}=require('child_process'),fs=require('fs'),p=require('path');const t=new Set(x('git',['ls-files'],{encoding:'utf8'}).split('\\n'));const d=new Set([...t].flatMap(f=>f.split('/').slice(0,-1).map((_,i,a)=>a.slice(0,i+1).join('/'))));let n=0,s=0;for(const f of t)if(f.endsWith('.md'))for(const m of fs.readFileSync(f,'utf8').matchAll(/\\]\\(([^)\\s]+)\\)/g)){const h=m[1];if(/^[a-z]+:/i.test(h)||h.startsWith('#'))continue;const g=p.normalize(p.join(p.dirname(f),h.split('#')[0])).replace(/\\/$/,'');if(!t.has(g)&&!d.has(g)){if(f.startsWith('docs/dotln/'))n++;else s++}}console.log('unresolved relative links: docs/dotln',n,'; elsewhere',s)\""
      }
    },
    {
      "findingId": "ER-F8-live-rationale-in-dated-log",
      "criterion": "The rationale for a live shared setting sits in a standing document that a session reads before changing it. docs/dev-reference/README.md says to read the conventions before changing shared configuration.",
      "severity": "minor",
      "observed": "nx.json:79-82 disables the Angular CLI cache. Why it does, and what that costs (no dev-server Vite prebundling, plus a warning on every serve), is stated only in the dated generator log (generator-log.md:51-80); no other standing document mentions it. The log also records NX_ISOLATE_PLUGINS=false on every generator run, a practice no read list names or rules out.",
      "expected": "Conventions rule 2 (or foundation.md) states the current setting and its tradeoff; the log keeps the dated evidence.",
      "evidenceRefs": [
        "nx.json:79-83",
        "docs/dev-reference/workspace/generator-log.md:51-80",
        "docs/dev-reference/workspace/generator-log.md:27-30",
        "docs/dev-reference/workspace/conventions.md:35-44",
        "docs/dev-reference/README.md:94-95"
      ],
      "surface": "docs/dev-reference/workspace/conventions.md rule 2; docs/dev-reference/workspace/generator-log.md",
      "altitude": 6,
      "standardization": {
        "kind": "one-off"
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "git grep -c -E 'cli\\.cache|prebundl' -- docs/dev-reference docs/ai-reference README.md; grep -n -A3 '\"cli\"' nx.json"
      }
    },
    {
      "findingId": "ER-F9-perf-loop-omits-root-scene",
      "criterion": "The experience evidence in docs/dev-reference/architecture/performance.md covers the app's first-screen journey; the policy itself notes that 'the actual journey also loads its lazy first-screen route'.",
      "severity": "minor",
      "observed": "Since #9 (2026-10-30) the root has redirected to /scene (app.routes.ts:7). sample-performance.mjs was last changed on 2026-10-28 and samples only Board to Catalog, direct Catalog and warm Catalog. Neither the sampler nor performance.md mentions the scene (0 matches each), although the scene is a continuously running simulation.",
      "expected": "The performance policy and perf:sample include the root scene journey (cold load and steady-state frame work), or the policy states why the scene is excluded.",
      "evidenceRefs": [
        "apps/dotln/src/app/app.routes.ts:7",
        "tools/scripts/sample-performance.mjs:160-194",
        "docs/dev-reference/architecture/performance.md:12-26",
        "README.md:12"
      ],
      "surface": "tools/scripts/sample-performance.mjs; docs/dev-reference/architecture/performance.md",
      "altitude": 8,
      "standardization": {
        "kind": "one-off"
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "grep -c -i scene docs/dev-reference/architecture/performance.md tools/scripts/sample-performance.mjs; grep -n redirectTo apps/dotln/src/app/app.routes.ts; git log -1 --format='sampler last changed %ad' --date=short -- tools/scripts/sample-performance.mjs; git log -1 --format='%ad %s' --date=short 6268de9"
      }
    },
    {
      "findingId": "ER-F10-duplicated-parameters",
      "criterion": "Parameters that must change together have one source; performance.md asks that budgets be maintained in the same authorized change.",
      "severity": "minor",
      "observed": "apps/dotln/project.json repeats an identical budget block (the same 139-character JSON) in its production, mocked and configured configurations. Nine libraries carry a byte-identical 14-line test-setup.ts that duplicates the MSW Node server lifecycle.",
      "expected": "The budget blocks share one source, or a test asserts that they match; the MSW Node setup lives in one importable module beside @dotln-angular/testing-network.",
      "evidenceRefs": [
        "apps/dotln/project.json:37-48",
        "apps/dotln/project.json:88-99",
        "apps/dotln/project.json:111-122",
        "libs/shared/state/src/test-setup.ts:1-14",
        "tsconfig.base.json:43",
        "docs/dev-reference/architecture/performance.md:3-8"
      ],
      "surface": "apps/dotln/project.json; libs/**/src/test-setup.ts",
      "altitude": 10,
      "standardization": {
        "kind": "recurring",
        "rung": "test",
        "rationale": "Every budget revision and every new HTTP-bearing library repeats the copy; a tools test asserting that the budget blocks are equal is the cheapest rung that catches a missed copy."
      },
      "evidenceLabel": "measured",
      "reproduction": {
        "kind": "command",
        "command": "node -e \"const c=require('./apps/dotln/project.json').targets.build.configurations;for(const k of ['production','mocked','configured'])console.log(k,JSON.stringify(c[k].budgets).length,require('crypto').createHash('sha1').update(JSON.stringify(c[k].budgets)).digest('hex').slice(0,8))\"; for f in $(git ls-files 'libs/**/src/test-setup.ts'); do shasum < $f; done | sort | uniq -c | sort -rn | head -2"
      }
    }
  ],
  "proposalPackets": [
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/visible-open-target-follow-ups/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "subject 233ab1962fb9402553febb1fdb766ae6669fb42c92b21a307bfe2273e5629b55 at 55b59c9",
        "lens architecture-and-semantics",
        "findings ER-F1-board-gauge-blind, ER-F5-v0-shim-outlived-window"
      ],
      "corroboratingEvidenceRefs": [
        "probe:scratch drill-boards",
        "docs/dotln/evidence/WO-004/decisions.md#WO-004-D010"
      ],
      "dissentingEvidenceRefs": [
        "docs/dotln/evidence/WO-015/decisions.md#WO-015-D022 (a launchpad follow-up register exists outside this repository)"
      ],
      "suggestion": {
        "suggestionId": "visible-open-target-follow-ups",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "The broken-windows gauge that CI prints reads 0 while target follow-ups remain open. Follow-ups live only as decision JSON with no closure state, and the gauge cannot see tools/, .github/ or configuration.",
        "scope": "Widen tools/board-count.mjs to every tracked text file outside docs/, using comment syntax for YAML and MJS. Clarify in rule 21 that a follow-up which boards a target defect, or a temporary shim such as the tool-v0 reader, adds a marker at the defect's site. Record bytes stay unchanged.",
        "evidenceRefs": [
          "tools/board-count.mjs:24-25",
          "docs/dev-reference/workspace/conventions.md:227-232",
          "libs/shared/catalog/src/lib/catalog-loader.ts:158-160"
        ],
        "affectedUsers": [
          "operator",
          "coding sessions",
          "contributors reading CI output"
        ],
        "affectedSystems": [
          "tools/board-count.mjs",
          "CI checks job",
          "conventions rule 21"
        ],
        "expectedValue": "CI's board count becomes a true count of open target defects, and closure becomes observable as a marker's removal.",
        "altitude": 6,
        "uncertainty": "Only 6 of the 77 follow-ups were spot-checked. Many are launchpad-side planning items that should not be boarded in target code, and the launchpad register may already serve the operator.",
        "risks": [
          "Marker noise if planning items get boarded",
          "JSON files cannot carry comments"
        ],
        "alternatives": [
          "Generate an in-repo open-follow-up index from the launchpad register at filing",
          "Treat the launchpad register as the board and narrow rule 21's wording"
        ],
        "duplicationHints": [
          "WO-004-D010",
          "launchpad follow-up register named in WO-015-D022"
        ],
        "urgencyRationale": "This is the evidenced constraint: a settled rule's only gauge currently misleads, and each new boarded follow-up widens the gap."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/single-gate-entry-command/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "lens maintainability-and-friction",
        "finding ER-F2-command-lists-drift"
      ],
      "corroboratingEvidenceRefs": [
        "probe:scratch cmdlists.mjs",
        "docs/dotln/evidence/WO-015/decisions.md#WO-015-D022"
      ],
      "dissentingEvidenceRefs": [],
      "suggestion": {
        "suggestionId": "single-gate-entry-command",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "Five hand-kept command lists drift from CI: the sub-app rules omit typecheck:e2e, and three lists run test:tooling twice.",
        "scope": "Add one npm script that mirrors the registered gate's plain tier, and reference it from README.md, both reference READMEs and sub-app-rules.md. A tools test fails when a standing list names a gate subset. The gate itself is unchanged.",
        "evidenceRefs": [
          "docs/ai-reference/sub-app-rules.md:25-27",
          "tools/project.json:11-23",
          ".github/workflows/ci.yml:41-48"
        ],
        "affectedUsers": [
          "coding sessions",
          "contributors"
        ],
        "affectedSystems": [
          "package.json scripts",
          "docs/ai-reference",
          "README.md"
        ],
        "expectedValue": "No omitted e2e type check and no double runs; a gate change is made in one place.",
        "altitude": 6,
        "uncertainty": "The registered gate is declared in the launchpad registration, outside this repository, so a local mirror could itself drift.",
        "risks": [
          "One more script name to maintain"
        ],
        "alternatives": [
          "Patch only the sub-app-rules list",
          "Generate the lists from tools/project.json and ci.yml"
        ],
        "duplicationHints": [
          "WO-015-D022",
          "WO-013-D005"
        ],
        "urgencyRationale": "The same omission class already broke CI on pull request 9."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/negative-controls-for-gate-checks/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "lens verification-and-evidence",
        "finding ER-F3-gate-checks-without-negative-control"
      ],
      "corroboratingEvidenceRefs": [
        "probe:scratch drill-scripts"
      ],
      "dissentingEvidenceRefs": [
        "tools/check-taxonomy-fixtures.mjs:143-155 (controls exist under lint:fixtures)"
      ],
      "suggestion": {
        "suggestionId": "negative-controls-for-gate-checks",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "check:scripts and typecheck:foundations have no negative control anywhere, and check:scripts passes with a deleted row and a stale row.",
        "scope": "Add tools/*.test.mjs cases in which check:scripts fails on a removed row and on a stale row, and typecheck:foundations fails on a mistyped fixture. Optionally call the existing pure checkComponentOrder and checkSharedTypes fixtures from test:tooling; whether to do so is the operator's call under the 2026-10-28 tooling cuts.",
        "evidenceRefs": [
          "tools/scripts/check-script-reference.mjs:3-12",
          "docs/dev-reference/workspace/scripts.md:43"
        ],
        "affectedUsers": [
          "coding sessions",
          "operator"
        ],
        "affectedSystems": [
          "tools/*.test.mjs",
          "workspace-tools:lint"
        ],
        "expectedValue": "A check that silently goes vacuous fails in the gate instead of passing forever.",
        "altitude": 8,
        "uncertainty": "Stale-row detection needs table parsing, and a type-check negative control may be slow.",
        "risks": [
          "Longer test:tooling runtime",
          "May overlap the operator's decision to keep lint:fixtures a helper (WO-019-D027)"
        ],
        "alternatives": [
          "Run lint:fixtures in CI only",
          "Accept the risk"
        ],
        "duplicationHints": [
          "WO-026-D011 (check:scripts scope, a separate question)",
          "WO-005-D011"
        ],
        "urgencyRationale": "Low to moderate: no regression has been observed, but the failure mode is silent."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/one-barrel-shape/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "lens architecture-and-semantics",
        "finding ER-F4-barrel-doctrine-split"
      ],
      "corroboratingEvidenceRefs": [
        "probe:scratch projects.mjs"
      ],
      "dissentingEvidenceRefs": [
        "docs/dev-reference/architecture/sub-apps.md:26-27 (direct export may be the intended feature shape)"
      ],
      "suggestion": {
        "suggestionId": "one-barrel-shape",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "Two documented barrel shapes coexist: three feature libraries export routes directly, while rule 4 requires a public_api re-export.",
        "scope": "The operator picks one shape for feature entry points. Align conventions rule 4, foundation-rules.md and sub-apps.md, and add a structural check of each project's src/index.ts to workspace-tools:lint.",
        "evidenceRefs": [
          "docs/dev-reference/workspace/conventions.md:57-58",
          "libs/features/board/src/index.ts:1"
        ],
        "affectedUsers": [
          "coding sessions adding libraries"
        ],
        "affectedSystems": [
          "libs/features/*",
          "workspace-tools:lint"
        ],
        "expectedValue": "New libraries copy one enforced shape.",
        "altitude": 5,
        "uncertainty": "Features may intentionally be an exception; this may be purely a documentation reconciliation.",
        "risks": [
          "Churn in three libraries",
          "check-bundle.mjs keys on the tools index.ts entry point"
        ],
        "alternatives": [
          "Document a feature exception in rule 4"
        ],
        "duplicationHints": [],
        "urgencyRationale": "Low; the next sub-app will copy one of the two shapes."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/standing-docs-reachable-sources/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "lens documents-and-readers",
        "findings ER-F6-standing-doc-unreachable-pointers, ER-F7-records-cite-absent-evidence, ER-F8-live-rationale-in-dated-log"
      ],
      "corroboratingEvidenceRefs": [
        "probe:scratch links.mjs",
        "probe:scratch reach.mjs"
      ],
      "dissentingEvidenceRefs": [],
      "suggestion": {
        "suggestionId": "standing-docs-reachable-sources",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "Standing documents point to launchpad paths that cannot be reached from here, keep a live setting's rationale only in a dated log, and index the records without saying where their links resolve.",
        "scope": "Replace catalog.md's bare launchpad pointers with pinned URLs or the current rule stated inline. Move dated process narration into the records. Have the docs/dotln row say that relative links resolve in the launchpad. Have conventions rule 2 state the Angular cache tradeoff.",
        "evidenceRefs": [
          "docs/dev-reference/architecture/catalog.md:219-220",
          "docs/dev-reference/README.md:71",
          "nx.json:79-83"
        ],
        "affectedUsers": [
          "people reading the dev reference",
          "coding sessions"
        ],
        "affectedSystems": [
          "docs/dev-reference"
        ],
        "expectedValue": "Every standing pointer resolves, and a configuration change is preceded by its rationale.",
        "altitude": 6,
        "uncertainty": "Concept-study doctrine may deliberately live in the platform; pinning it could freeze a moving direction.",
        "risks": [
          "Pinned URLs go stale against platform edits"
        ],
        "alternatives": [
          "Inline a short summary of the study doctrine"
        ],
        "duplicationHints": [
          "WO-026-D011 (relative-link check)",
          "WO-005-D013",
          "WO-019-D032"
        ],
        "urgencyRationale": "Low; this is reader friction rather than defect risk."
      }
    },
    {
      "schemaVersion": 1,
      "kind": "ProductSuggestionPacket",
      "proposedPath": "docs/proposals/scene-in-performance-loop/",
      "sourceEpisodeId": "ep_entropy_233ab1962fb94025",
      "provenance": [
        "work order wo_entropy_review_1",
        "lens verification-and-evidence",
        "finding ER-F9-perf-loop-omits-root-scene"
      ],
      "corroboratingEvidenceRefs": [
        "apps/dotln/src/app/app.routes.ts:7"
      ],
      "dissentingEvidenceRefs": [
        "docs/ai-reference/scene-rules.md:5 (one signal write per frame bounds work structurally)"
      ],
      "suggestion": {
        "suggestionId": "scene-in-performance-loop",
        "submittedBy": "entropy-reducer@1 (planning-reviewer@2) via claude-opus-5-5",
        "problemOrOpportunity": "The app's root journey, the running scene, sits outside the performance policy and the sampler.",
        "scope": "Add a cold-root scene journey and steady-state frame and long-task sampling to sample-performance.mjs, plus a scene paragraph in performance.md.",
        "evidenceRefs": [
          "tools/scripts/sample-performance.mjs:160-194",
          "docs/dev-reference/architecture/performance.md:12-26"
        ],
        "affectedUsers": [
          "operator",
          "coding sessions changing the scene"
        ],
        "affectedSystems": [
          "perf:sample",
          "performance policy"
        ],
        "expectedValue": "Scene regressions become attributable with the same discipline as the catalog.",
        "altitude": 8,
        "uncertainty": "Local samples are diagnostic only, and the scene's structural rules may already bound the cost.",
        "risks": [
          "Noisy frame timings on shared machines"
        ],
        "alternatives": [
          "State in the policy that the scene is excluded and why"
        ],
        "duplicationHints": [],
        "urgencyRationale": "Low; diagnostic coverage for the default first screen."
      }
    }
  ],
  "resultEnvelope": {
    "workOrderId": "wo_entropy_review_1",
    "episodeId": "ep_entropy_233ab1962fb94025",
    "status": "completed",
    "resultId": "res_ep_entropy_233ab1962fb94025_01",
    "summary": "Census: 1052 tracked files, none under docs/intake; five lenses worked serially; ten findings (one major, nine minor) and six suggestion packets. Evidenced constraint: open defects and doctrine reach no executable or visible state. The CI board gauge reads 0 and cannot see tools/ or .github/, while 77 decision follow-ups carry no closure state and WO-004-D010 remains open. Doctrine drifts across hand-kept copies: barrel shape (three of four features), five command lists (sub-app rules omit typecheck:e2e), and a one-release tool-v0 shim shipped in five releases. check:scripts passes with a row deleted and a stale row added. Standing docs cite bare launchpad paths; filed receipts hold 322 unreachable relative links; the performance sampler omits the root scene. Runtime lens found no authority escapes. Boundary incidents, disclosed: a stray cp wrote /tmp/ignore, and two mktemp runs ignored TMPDIR and created directories under the parent temp folder; each held only public tracked bytes, was verified by hash or content, and was removed. Tracked tree unchanged. Dependencies were not installed, so probes used plain Node, git and stubs. Awaiting operator disposition.",
    "requiresHuman": true
  },
  "cleanRoom": {
    "status": "passed",
    "stopConditionsFound": false,
    "evidenceRefs": [
      "git ls-files | grep -c '^docs/intake/' -> 0; no docs/intake path was read",
      "Credential-pattern grep over tracked files (private keys, ghp_, AKIA, xox, password=) -> no hits",
      "Only public sources incorporated: .env.example holds public placeholders, and study records cite the public DylanBWood/DotLn repository named in conventions rule 22",
      "Intake capture paths and digests quoted inside docs/dotln records were neither opened nor reproduced in findings",
      "git status --porcelain --ignored -> empty at 55b59c9 after review"
    ]
  }
}
```

## Disposition

```json
{
  "findingCount": 10,
  "proposalPacketCount": 6,
  "proposalFiling": "awaiting operator disposition; not filed",
  "nextStep": "Fresh blinded refutation before any disposition."
}
```

Findings never authorize a fix. Proposal filing and promotion to a work order remain separate operator acts, and this receipt stops at disposition. The JSON and this rendering are immutable; a later attempt files the next number.

Local-terms list: **present**. Receipt hash: `sha256:d90b46f51ffd89ef282fccc23f4824ca901b509e1207a1d3a812626a18db9165`.
