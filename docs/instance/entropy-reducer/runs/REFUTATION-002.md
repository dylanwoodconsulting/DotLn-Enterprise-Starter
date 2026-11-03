# Entropy Reducer refutation — REFUTATION-002

Challenges `REVIEW-002` (receipt hash `sha256:d90b46f51ffd89ef282fccc23f4824ca901b509e1207a1d3a812626a18db9165`) over subject hash `233ab1962fb9402553febb1fdb766ae6669fb42c92b21a307bfe2273e5629b55` at commit `55b59c9133056c1d6471274a9676a7d5649196ac`.

Repository: `dotln-angular@55b59c9133056c1d6471274a9676a7d5649196ac`; frozen copy: `/private/var/folders/m1/v91jv25j7nl21fs2yxgjm3540000gn/T/dotln-entropy/7e7cf99f3ddc29d5/review-hR7pQG/repo`.

Launchpad tracked status unchanged across the episode: **false**; dirty at dispatch: **true** (recorded, never the target subject).

Refuter: **entropy-reducer@1** — `claude-opus-5-5` at effort `xhigh` on `claude-code` 2.1.317; route `launched`; transport `claude-cli-print`; source `command-line-readback-and-invocation`. Effective model and effort: unknown.

This refuter satisfies the compiled actor requirement by invocation readback.

Blinding: the refuter received only the typed subjects the compiled selection rule chose — a reproduction command for each `measured` finding and steps for each selected `by inspection` finding. No reviewer narrative, observed-versus-expected conclusion, severity argument, proposal or target survival count crossed the boundary. Finding identifiers exist only for attribution.

Measured denominator: 10 (**selected**). By-inspection denominator: 0 (**not-applicable**); sample size 0. Rule: every measured finding and every by-inspection finding.

Survived: 10. Refuted: 0. Blocked: 0. Unselected: 0. Installed dependencies: absent. Command execution: file tools confined to the frozen copy by --restricted; shell writes instructed to stay inside the copy or episode temporary directory, witnessed by copy and temporary inventories. Denied tool calls: 0.

Subject binding: the commit the challenged review receipt names, re-frozen for this episode; the working tree's own drift is recorded rather than refused. Source repository: tracked-path status unchanged across the episode: **true**; untracked, non-ignored path listing unchanged: **true** (0 before, 0 after; recorded, never a refusal condition). Source refs unchanged: **true** (12 before, 12 after; refused for a HEAD subject, recorded for a named commit). Ignored paths and file contents are not observed. Frozen copy path-and-size inventory: 0 path(s) added, 0 removed, 0 resized. Episode temporary directory: 182 path(s), 497915 bytes. Frozen copy inventoried at 1052 path(s) before and 1052 after.

**Process cost:** 2166862 tokens; source claude-result-envelope; observed episode wall clock 325 s, 51 turns, USD 1.6086160000000003

## Attempt reasons

- `ER-F10-duplicated-parameters` survived: Reproduction output matches the claim. production, mocked and configured each carry the same 139-byte budgets array (sha1 72b8f823). build.options has no budgets, so nothing shares a single source. Of the 15 tracked libs/**/src/test-setup.ts files, 9 are byte-identical (47fc0980, 14 lines, including the MSW onUnhandledFrame:'error' parameter) and 5 more are identical (23aaa095). board-data-access is a tenth near-copy that repeats the same listen parameters. Evidence: apps/dotln/project.json targets.build.configurations.{production,mocked,configured}.budgets; libs/shared/core/src/test-setup.ts; libs/features/scene/src/test-setup.ts; libs/features/board-data-access/src/test-setup.ts:14.
- `ER-F2-command-lists-drift` survived: Four hand-kept command lists disagree. sub-app-rules.md:25-27 has no typecheck:e2e, but ci.yml:39 and the gate in scripts.md:13-14 both run it, and no Nx target covers it (it is a bare tsc in package.json). The lists in README.md:26-35, ai-reference/README.md:20-21 and dev-reference/README.md:76-90 each contain a different set of commands. test:tooling is listed separately in three docs and is also run by the workspace-tools lint target (tools/project.json:19). Evidence: docs/ai-reference/sub-app-rules.md:25-27; .github/workflows/ci.yml:39; docs/dev-reference/workspace/scripts.md:13-14; README.md:26-35; docs/ai-reference/README.md:20-21; docs/dev-reference/README.md:76-90; tools/project.json:19; package.json scripts.typecheck:e2e.
- `ER-F7-records-cite-absent-evidence` survived: Command printed 'docs/dotln 322; elsewhere 0'. The breakdown agrees: 203 links go to docs/dotln/evidence/*, 65 to final-reviews and 40 to planning. Only decisions.md is tracked under each evidence/WO-* directory. README.md, handoff.md, self-review.md and preview-pr.json are missing from the Git index and from disk, as are final-reviews/*/PR.md and the docs/dotln/planning/ and repositories/ targets. Example: docs/dotln/final-reviews/WO-004/FINAL-001.md:5-9. Mitigating context: dev-reference/README.md:71 says the launchpad populates docs/dotln, so these links may resolve in another repository. They do not resolve in this one. Evidence: docs/dotln/final-reviews/WO-004/FINAL-001.md:5-9; git ls-files docs/dotln/evidence (12 files, all decisions.md); docs/dev-reference/README.md:71.
- `ER-F6-standing-doc-unreachable-pointers` survived: Standing doc catalog.md:219-220 and :330 point to 'the launchpad's docs/product/concept-study.md' and 'docs/evidence/WO-022/design/' as bare paths, with no URL or commit. Nowhere in the standing docs is the launchpad given a location (conventions.md:211-212, scripts.md:13). By contrast, 19 study files under libs/shared/catalog/src/studies use pinned github.com/DylanBWood/DotLn/blob/9139d91… permalinks, so a followable form is already used in this repo. Remote reachability was not probed because remote.* is prohibited. Evidence: docs/dev-reference/architecture/catalog.md:219-220; docs/dev-reference/architecture/catalog.md:330; libs/shared/catalog/src/studies (19 files with pinned blob permalinks); docs/dev-reference/workspace/conventions.md:211-212.
- `ER-F8-live-rationale-in-dated-log` survived: Survives only in a narrower form. The grep is too narrow: foundation.md:146-154 and ai-reference/foundation-rules.md:40-42 already give the core reason for disabling nx.json cli.cache (portable worktree isolation) and a revisit condition, worded as 'CLI disk-cache'. However, the cost of the live setting appears only in the dated generator-log.md:73-80: Vite dependency prebundling is lost and every nx serve and e2e server prints a warning, plus the instruction to 'weigh the absolute-path alternative at that whole cost'. The tradeoff stated in foundation.md leaves that cost out. Evidence: nx.json:79-82; docs/dev-reference/workspace/generator-log.md:71-80; docs/dev-reference/architecture/foundation.md:146-154; docs/ai-reference/foundation-rules.md:40-42.
- `ER-F4-barrel-doctrine-split` survived: conventions.md:57-58 says an index.ts contains only `export * from './public_api'`. Feature libraries board, machinery and scene export their routes directly from index.ts, while tools follows the rule (its public_api.ts exports only toolsRoutes). So the 'routes only' rule at conventions.md:59 does not justify the split. sub-apps.md:26-27 holds up board's non-conforming shape as the model, and no lint or script mentions public_api, so nothing enforces either side. Evidence: docs/dev-reference/workspace/conventions.md:57-59; docs/dev-reference/architecture/sub-apps.md:26-27; libs/features/board/src/index.ts; libs/features/tools/src/public_api.ts; libs/features/tools/src/index.ts.
- `ER-F5-v0-shim-outlived-window` survived: The substance holds. Shim history: v0.4.0 has 8 data files using tool-v0. The v0 compatibility reader was added in v0.5.0 (261982f, 2026-10-28), when data moved to tool-v1. The shim (6 hits) is still in the loader at v0.6.0, v0.6.1, v0.7.0, v0.8.0 and HEAD, and no data file uses tool-v0 at any of those versions. The stated window is 'one compatibility release' (conventions.md:251-252, catalog.md:143, catalog-rules.md:53-54), and catalog-loader.ts:159-160 says to remove it at the next release. Defect in the reproduction: its final grep exits 1 with no output because the phrase wraps across lines 251-252, so the policy does not print. Evidence: libs/shared/catalog/src/lib/catalog-loader.ts:17; libs/shared/catalog/src/lib/catalog-loader.ts:159-160; docs/dev-reference/workspace/conventions.md:251-252; docs/dev-reference/architecture/catalog.md:143; docs/ai-reference/catalog-rules.md:53-54.
- `ER-F1-board-gauge-blind` survived: Count is 0 at HEAD, and a probe added to scratch tools/pr-title.mjs still gives 0. A positive control I added (a probe under scratch libs/x) gives 1, so the drill is valid. board-count.mjs:24-25 scans only apps and libs, but pr-title.mjs runs on pull_request (pr-title.yml:4), and conventions §21 (lines 228-231) applies boarding to any defect. Caveats: scripts.md:76 documents the apps/libs scope, and the 77 followup fields (all non-empty strings) have no status field, so the number of open follow-ups is unknown. Evidence: tools/board-count.mjs:24-25; .github/workflows/pr-title.yml:4; docs/dev-reference/workspace/conventions.md:228-231; docs/dev-reference/workspace/scripts.md:76; docs/dotln/evidence/*/decisions.md (77 followup fields).
- `ER-F3-gate-checks-without-negative-control` survived: Survives in a narrower form. The drill exits 0 and no tools/*.test.mjs references check-script-reference or check-foundation-types. Part of the drill is masked: removing the boards table row goes unnoticed only because scripts.md:18 still mentions `npm run boards` in prose. My control removed every mention and the check failed (exit 1), so the forward check does work. The stale row naming a nonexistent removed:check is genuinely never caught, because the check only looks one way (check-script-reference.mjs:7-10), and no test shows that either gate check can fail. Evidence: tools/scripts/check-script-reference.mjs:7-11; docs/dev-reference/workspace/scripts.md:18; tools/scripts/check-foundation-types.mjs; tools/foundation-checks.test.mjs:8-10.
- `ER-F9-perf-loop-omits-root-scene` survived: The root redirects to the scene (app.routes.ts:7). Commit 1eb6305 (2026-10-30) changed that redirect from Board to Scene. The sampler was last changed on 2026-10-28, and its journeys start only at /board or /tools/catalog (sample-performance.mjs:192, 334, 392). performance.md:23-26 lists the same three journeys, and neither file mentions the scene. The cold-Board journey used to be the landing route; the current landing route is not sampled. Evidence: apps/dotln/src/app/app.routes.ts:7; tools/scripts/sample-performance.mjs:192; tools/scripts/sample-performance.mjs:334; docs/dev-reference/architecture/performance.md:23-26; git show 1eb6305 -- apps/dotln/src/app/app.routes.ts.

## Bound report

```json
{
  "schemaVersion": 1,
  "selection": {
    "measuredDenominator": 10,
    "measuredStatus": "selected",
    "inspectionDenominator": 0,
    "inspectionStatus": "not-applicable",
    "inspectionSampleSize": 0,
    "selectionRule": "every measured finding and every by-inspection finding",
    "measuredSubjects": [
      {
        "findingId": "ER-F10-duplicated-parameters",
        "command": "node -e \"const c=require('./apps/dotln/project.json').targets.build.configurations;for(const k of ['production','mocked','configured'])console.log(k,JSON.stringify(c[k].budgets).length,require('crypto').createHash('sha1').update(JSON.stringify(c[k].budgets)).digest('hex').slice(0,8))\"; for f in $(git ls-files 'libs/**/src/test-setup.ts'); do shasum < $f; done | sort | uniq -c | sort -rn | head -2"
      },
      {
        "findingId": "ER-F2-command-lists-drift",
        "command": "grep -c typecheck:e2e docs/ai-reference/sub-app-rules.md .github/workflows/ci.yml; grep -n 'test:tooling' tools/project.json README.md docs/ai-reference/README.md docs/dev-reference/README.md"
      },
      {
        "findingId": "ER-F7-records-cite-absent-evidence",
        "command": "node -e \"const {execFileSync:x}=require('child_process'),fs=require('fs'),p=require('path');const t=new Set(x('git',['ls-files'],{encoding:'utf8'}).split('\\n'));const d=new Set([...t].flatMap(f=>f.split('/').slice(0,-1).map((_,i,a)=>a.slice(0,i+1).join('/'))));let n=0,s=0;for(const f of t)if(f.endsWith('.md'))for(const m of fs.readFileSync(f,'utf8').matchAll(/\\]\\(([^)\\s]+)\\)/g)){const h=m[1];if(/^[a-z]+:/i.test(h)||h.startsWith('#'))continue;const g=p.normalize(p.join(p.dirname(f),h.split('#')[0])).replace(/\\/$/,'');if(!t.has(g)&&!d.has(g)){if(f.startsWith('docs/dotln/'))n++;else s++}}console.log('unresolved relative links: docs/dotln',n,'; elsewhere',s)\""
      },
      {
        "findingId": "ER-F6-standing-doc-unreachable-pointers",
        "command": "grep -n -E \"launchpad's|on 2026-1[01]-[0-9]{2}\" docs/dev-reference/architecture/catalog.md; git grep -l 'github.com/DylanBWood/DotLn/blob/' -- libs/shared/catalog/src/studies | wc -l"
      },
      {
        "findingId": "ER-F8-live-rationale-in-dated-log",
        "command": "git grep -c -E 'cli\\.cache|prebundl' -- docs/dev-reference docs/ai-reference README.md; grep -n -A3 '\"cli\"' nx.json"
      },
      {
        "findingId": "ER-F4-barrel-doctrine-split",
        "command": "for l in board machinery scene tools; do printf '%s: ' $l; tr '\\n' ' ' < libs/features/$l/src/index.ts; echo; done; sed -n 57,58p docs/dev-reference/workspace/conventions.md; sed -n 26,27p docs/dev-reference/architecture/sub-apps.md"
      },
      {
        "findingId": "ER-F5-v0-shim-outlived-window",
        "command": "for t in v0.5.0 v0.6.0 v0.6.1 v0.7.0 v0.8.0 HEAD; do printf '%s loader=%s data=%s\\n' \"$t\" \"$(git show \"${t}:libs/shared/catalog/src/lib/catalog-loader.ts\" | grep -c tool-v0)\" \"$(git grep -l tool-v0 \"${t}\" -- libs/shared/catalog/src/data | wc -l | tr -d ' ')\"; done; grep -n 'one compatibility release' docs/dev-reference/workspace/conventions.md"
      },
      {
        "findingId": "ER-F1-board-gauge-blind",
        "command": "node tools/board-count.mjs | tail -1; S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD tools | tar -x -C $S && echo '// BOARDED: probe' >> $S/tools/pr-title.mjs && node $S/tools/board-count.mjs | tail -1; grep -n 'pull_request:' .github/workflows/pr-title.yml; grep -c '\"followup\"' docs/dotln/evidence/*/decisions.md | awk -F: '{s+=$2} END {print \"followup fields:\", s}'"
      },
      {
        "findingId": "ER-F3-gate-checks-without-negative-control",
        "command": "S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD package.json tools/scripts docs/dev-reference/workspace/scripts.md | tar -x -C $S && mkdir -p $S/node_modules/typescript && echo '{\"name\":\"typescript\",\"type\":\"module\",\"main\":\"index.js\"}' > $S/node_modules/typescript/package.json && echo 'export default {};' > $S/node_modules/typescript/index.js && (cd $S && node -e \"const fs=require('fs'),p='docs/dev-reference/workspace/scripts.md';let d=fs.readFileSync(p,'utf8').replace(/^\\| \\`npm run boards\\`.*\\n/m,'');fs.writeFileSync(p,d+'\\n| \\`npm run removed:check\\` | gone |\\n')\" && node tools/scripts/check-script-reference.mjs; echo exit=$?); grep -l -E 'check-(script-reference|foundation-types)' tools/*.test.mjs | wc -l"
      },
      {
        "findingId": "ER-F9-perf-loop-omits-root-scene",
        "command": "grep -c -i scene docs/dev-reference/architecture/performance.md tools/scripts/sample-performance.mjs; grep -n redirectTo apps/dotln/src/app/app.routes.ts; git log -1 --format='sampler last changed %ad' --date=short -- tools/scripts/sample-performance.mjs; git log -1 --format='%ad %s' --date=short 6268de9"
      }
    ],
    "inspectionSubjects": [],
    "selectedFindingIds": [
      "ER-F10-duplicated-parameters",
      "ER-F2-command-lists-drift",
      "ER-F7-records-cite-absent-evidence",
      "ER-F6-standing-doc-unreachable-pointers",
      "ER-F8-live-rationale-in-dated-log",
      "ER-F4-barrel-doctrine-split",
      "ER-F5-v0-shim-outlived-window",
      "ER-F1-board-gauge-blind",
      "ER-F3-gate-checks-without-negative-control",
      "ER-F9-perf-loop-omits-root-scene"
    ]
  },
  "attempts": [
    {
      "findingId": "ER-F10-duplicated-parameters",
      "result": "survived",
      "reason": "Reproduction output matches the claim. production, mocked and configured each carry the same 139-byte budgets array (sha1 72b8f823). build.options has no budgets, so nothing shares a single source. Of the 15 tracked libs/**/src/test-setup.ts files, 9 are byte-identical (47fc0980, 14 lines, including the MSW onUnhandledFrame:'error' parameter) and 5 more are identical (23aaa095). board-data-access is a tenth near-copy that repeats the same listen parameters.",
      "evidenceRefs": [
        "apps/dotln/project.json targets.build.configurations.{production,mocked,configured}.budgets",
        "libs/shared/core/src/test-setup.ts",
        "libs/features/scene/src/test-setup.ts",
        "libs/features/board-data-access/src/test-setup.ts:14"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "apps/dotln/project.json; libs/**/src/test-setup.ts",
      "reproduction": {
        "kind": "command",
        "command": "node -e \"const c=require('./apps/dotln/project.json').targets.build.configurations;for(const k of ['production','mocked','configured'])console.log(k,JSON.stringify(c[k].budgets).length,require('crypto').createHash('sha1').update(JSON.stringify(c[k].budgets)).digest('hex').slice(0,8))\"; for f in $(git ls-files 'libs/**/src/test-setup.ts'); do shasum < $f; done | sort | uniq -c | sort -rn | head -2"
      }
    },
    {
      "findingId": "ER-F2-command-lists-drift",
      "result": "survived",
      "reason": "Four hand-kept command lists disagree. sub-app-rules.md:25-27 has no typecheck:e2e, but ci.yml:39 and the gate in scripts.md:13-14 both run it, and no Nx target covers it (it is a bare tsc in package.json). The lists in README.md:26-35, ai-reference/README.md:20-21 and dev-reference/README.md:76-90 each contain a different set of commands. test:tooling is listed separately in three docs and is also run by the workspace-tools lint target (tools/project.json:19).",
      "evidenceRefs": [
        "docs/ai-reference/sub-app-rules.md:25-27",
        ".github/workflows/ci.yml:39",
        "docs/dev-reference/workspace/scripts.md:13-14",
        "README.md:26-35",
        "docs/ai-reference/README.md:20-21",
        "docs/dev-reference/README.md:76-90",
        "tools/project.json:19",
        "package.json scripts.typecheck:e2e"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "docs/ai-reference/sub-app-rules.md; README.md; docs/ai-reference/README.md; docs/dev-reference/README.md",
      "reproduction": {
        "kind": "command",
        "command": "grep -c typecheck:e2e docs/ai-reference/sub-app-rules.md .github/workflows/ci.yml; grep -n 'test:tooling' tools/project.json README.md docs/ai-reference/README.md docs/dev-reference/README.md"
      }
    },
    {
      "findingId": "ER-F7-records-cite-absent-evidence",
      "result": "survived",
      "reason": "Command printed 'docs/dotln 322; elsewhere 0'. The breakdown agrees: 203 links go to docs/dotln/evidence/*, 65 to final-reviews and 40 to planning. Only decisions.md is tracked under each evidence/WO-* directory. README.md, handoff.md, self-review.md and preview-pr.json are missing from the Git index and from disk, as are final-reviews/*/PR.md and the docs/dotln/planning/ and repositories/ targets. Example: docs/dotln/final-reviews/WO-004/FINAL-001.md:5-9. Mitigating context: dev-reference/README.md:71 says the launchpad populates docs/dotln, so these links may resolve in another repository. They do not resolve in this one.",
      "evidenceRefs": [
        "docs/dotln/final-reviews/WO-004/FINAL-001.md:5-9",
        "git ls-files docs/dotln/evidence (12 files, all decisions.md)",
        "docs/dev-reference/README.md:71"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "docs/dev-reference/README.md; docs/dotln/**",
      "reproduction": {
        "kind": "command",
        "command": "node -e \"const {execFileSync:x}=require('child_process'),fs=require('fs'),p=require('path');const t=new Set(x('git',['ls-files'],{encoding:'utf8'}).split('\\n'));const d=new Set([...t].flatMap(f=>f.split('/').slice(0,-1).map((_,i,a)=>a.slice(0,i+1).join('/'))));let n=0,s=0;for(const f of t)if(f.endsWith('.md'))for(const m of fs.readFileSync(f,'utf8').matchAll(/\\]\\(([^)\\s]+)\\)/g)){const h=m[1];if(/^[a-z]+:/i.test(h)||h.startsWith('#'))continue;const g=p.normalize(p.join(p.dirname(f),h.split('#')[0])).replace(/\\/$/,'');if(!t.has(g)&&!d.has(g)){if(f.startsWith('docs/dotln/'))n++;else s++}}console.log('unresolved relative links: docs/dotln',n,'; elsewhere',s)\""
      }
    },
    {
      "findingId": "ER-F6-standing-doc-unreachable-pointers",
      "result": "survived",
      "reason": "Standing doc catalog.md:219-220 and :330 point to 'the launchpad's docs/product/concept-study.md' and 'docs/evidence/WO-022/design/' as bare paths, with no URL or commit. Nowhere in the standing docs is the launchpad given a location (conventions.md:211-212, scripts.md:13). By contrast, 19 study files under libs/shared/catalog/src/studies use pinned github.com/DylanBWood/DotLn/blob/9139d91… permalinks, so a followable form is already used in this repo. Remote reachability was not probed because remote.* is prohibited.",
      "evidenceRefs": [
        "docs/dev-reference/architecture/catalog.md:219-220",
        "docs/dev-reference/architecture/catalog.md:330",
        "libs/shared/catalog/src/studies (19 files with pinned blob permalinks)",
        "docs/dev-reference/workspace/conventions.md:211-212"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "docs/dev-reference/architecture/catalog.md",
      "reproduction": {
        "kind": "command",
        "command": "grep -n -E \"launchpad's|on 2026-1[01]-[0-9]{2}\" docs/dev-reference/architecture/catalog.md; git grep -l 'github.com/DylanBWood/DotLn/blob/' -- libs/shared/catalog/src/studies | wc -l"
      }
    },
    {
      "findingId": "ER-F8-live-rationale-in-dated-log",
      "result": "survived",
      "reason": "Survives only in a narrower form. The grep is too narrow: foundation.md:146-154 and ai-reference/foundation-rules.md:40-42 already give the core reason for disabling nx.json cli.cache (portable worktree isolation) and a revisit condition, worded as 'CLI disk-cache'. However, the cost of the live setting appears only in the dated generator-log.md:73-80: Vite dependency prebundling is lost and every nx serve and e2e server prints a warning, plus the instruction to 'weigh the absolute-path alternative at that whole cost'. The tradeoff stated in foundation.md leaves that cost out.",
      "evidenceRefs": [
        "nx.json:79-82",
        "docs/dev-reference/workspace/generator-log.md:71-80",
        "docs/dev-reference/architecture/foundation.md:146-154",
        "docs/ai-reference/foundation-rules.md:40-42"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "docs/dev-reference/workspace/conventions.md rule 2; docs/dev-reference/workspace/generator-log.md",
      "reproduction": {
        "kind": "command",
        "command": "git grep -c -E 'cli\\.cache|prebundl' -- docs/dev-reference docs/ai-reference README.md; grep -n -A3 '\"cli\"' nx.json"
      }
    },
    {
      "findingId": "ER-F4-barrel-doctrine-split",
      "result": "survived",
      "reason": "conventions.md:57-58 says an index.ts contains only `export * from './public_api'`. Feature libraries board, machinery and scene export their routes directly from index.ts, while tools follows the rule (its public_api.ts exports only toolsRoutes). So the 'routes only' rule at conventions.md:59 does not justify the split. sub-apps.md:26-27 holds up board's non-conforming shape as the model, and no lint or script mentions public_api, so nothing enforces either side.",
      "evidenceRefs": [
        "docs/dev-reference/workspace/conventions.md:57-59",
        "docs/dev-reference/architecture/sub-apps.md:26-27",
        "libs/features/board/src/index.ts",
        "libs/features/tools/src/public_api.ts",
        "libs/features/tools/src/index.ts"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "libs/features/*/src/index.ts; conventions rule 4; sub-apps.md",
      "reproduction": {
        "kind": "command",
        "command": "for l in board machinery scene tools; do printf '%s: ' $l; tr '\\n' ' ' < libs/features/$l/src/index.ts; echo; done; sed -n 57,58p docs/dev-reference/workspace/conventions.md; sed -n 26,27p docs/dev-reference/architecture/sub-apps.md"
      }
    },
    {
      "findingId": "ER-F5-v0-shim-outlived-window",
      "result": "survived",
      "reason": "The substance holds. Shim history: v0.4.0 has 8 data files using tool-v0. The v0 compatibility reader was added in v0.5.0 (261982f, 2026-10-28), when data moved to tool-v1. The shim (6 hits) is still in the loader at v0.6.0, v0.6.1, v0.7.0, v0.8.0 and HEAD, and no data file uses tool-v0 at any of those versions. The stated window is 'one compatibility release' (conventions.md:251-252, catalog.md:143, catalog-rules.md:53-54), and catalog-loader.ts:159-160 says to remove it at the next release. Defect in the reproduction: its final grep exits 1 with no output because the phrase wraps across lines 251-252, so the policy does not print.",
      "evidenceRefs": [
        "libs/shared/catalog/src/lib/catalog-loader.ts:17",
        "libs/shared/catalog/src/lib/catalog-loader.ts:159-160",
        "docs/dev-reference/workspace/conventions.md:251-252",
        "docs/dev-reference/architecture/catalog.md:143",
        "docs/ai-reference/catalog-rules.md:53-54"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "libs/shared/catalog/src/lib/catalog-loader.ts; conventions rule 23",
      "reproduction": {
        "kind": "command",
        "command": "for t in v0.5.0 v0.6.0 v0.6.1 v0.7.0 v0.8.0 HEAD; do printf '%s loader=%s data=%s\\n' \"$t\" \"$(git show \"${t}:libs/shared/catalog/src/lib/catalog-loader.ts\" | grep -c tool-v0)\" \"$(git grep -l tool-v0 \"${t}\" -- libs/shared/catalog/src/data | wc -l | tr -d ' ')\"; done; grep -n 'one compatibility release' docs/dev-reference/workspace/conventions.md"
      }
    },
    {
      "findingId": "ER-F1-board-gauge-blind",
      "result": "survived",
      "reason": "Count is 0 at HEAD, and a probe added to scratch tools/pr-title.mjs still gives 0. A positive control I added (a probe under scratch libs/x) gives 1, so the drill is valid. board-count.mjs:24-25 scans only apps and libs, but pr-title.mjs runs on pull_request (pr-title.yml:4), and conventions §21 (lines 228-231) applies boarding to any defect. Caveats: scripts.md:76 documents the apps/libs scope, and the 77 followup fields (all non-empty strings) have no status field, so the number of open follow-ups is unknown.",
      "evidenceRefs": [
        "tools/board-count.mjs:24-25",
        ".github/workflows/pr-title.yml:4",
        "docs/dev-reference/workspace/conventions.md:228-231",
        "docs/dev-reference/workspace/scripts.md:76",
        "docs/dotln/evidence/*/decisions.md (77 followup fields)"
      ],
      "evidenceLabel": "measured",
      "severity": "major",
      "surface": "tools/board-count.mjs; conventions rule 21; docs/dotln/evidence/*/decisions.md",
      "reproduction": {
        "kind": "command",
        "command": "node tools/board-count.mjs | tail -1; S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD tools | tar -x -C $S && echo '// BOARDED: probe' >> $S/tools/pr-title.mjs && node $S/tools/board-count.mjs | tail -1; grep -n 'pull_request:' .github/workflows/pr-title.yml; grep -c '\"followup\"' docs/dotln/evidence/*/decisions.md | awk -F: '{s+=$2} END {print \"followup fields:\", s}'"
      }
    },
    {
      "findingId": "ER-F3-gate-checks-without-negative-control",
      "result": "survived",
      "reason": "Survives in a narrower form. The drill exits 0 and no tools/*.test.mjs references check-script-reference or check-foundation-types. Part of the drill is masked: removing the boards table row goes unnoticed only because scripts.md:18 still mentions `npm run boards` in prose. My control removed every mention and the check failed (exit 1), so the forward check does work. The stale row naming a nonexistent removed:check is genuinely never caught, because the check only looks one way (check-script-reference.mjs:7-10), and no test shows that either gate check can fail.",
      "evidenceRefs": [
        "tools/scripts/check-script-reference.mjs:7-11",
        "docs/dev-reference/workspace/scripts.md:18",
        "tools/scripts/check-foundation-types.mjs",
        "tools/foundation-checks.test.mjs:8-10"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "tools/scripts/check-script-reference.mjs; tools/*.test.mjs",
      "reproduction": {
        "kind": "command",
        "command": "S=$(mktemp -d \"$TMPDIR/drill.XXXXXX\") && git archive HEAD package.json tools/scripts docs/dev-reference/workspace/scripts.md | tar -x -C $S && mkdir -p $S/node_modules/typescript && echo '{\"name\":\"typescript\",\"type\":\"module\",\"main\":\"index.js\"}' > $S/node_modules/typescript/package.json && echo 'export default {};' > $S/node_modules/typescript/index.js && (cd $S && node -e \"const fs=require('fs'),p='docs/dev-reference/workspace/scripts.md';let d=fs.readFileSync(p,'utf8').replace(/^\\| \\`npm run boards\\`.*\\n/m,'');fs.writeFileSync(p,d+'\\n| \\`npm run removed:check\\` | gone |\\n')\" && node tools/scripts/check-script-reference.mjs; echo exit=$?); grep -l -E 'check-(script-reference|foundation-types)' tools/*.test.mjs | wc -l"
      }
    },
    {
      "findingId": "ER-F9-perf-loop-omits-root-scene",
      "result": "survived",
      "reason": "The root redirects to the scene (app.routes.ts:7). Commit 1eb6305 (2026-10-30) changed that redirect from Board to Scene. The sampler was last changed on 2026-10-28, and its journeys start only at /board or /tools/catalog (sample-performance.mjs:192, 334, 392). performance.md:23-26 lists the same three journeys, and neither file mentions the scene. The cold-Board journey used to be the landing route; the current landing route is not sampled.",
      "evidenceRefs": [
        "apps/dotln/src/app/app.routes.ts:7",
        "tools/scripts/sample-performance.mjs:192",
        "tools/scripts/sample-performance.mjs:334",
        "docs/dev-reference/architecture/performance.md:23-26",
        "git show 1eb6305 -- apps/dotln/src/app/app.routes.ts"
      ],
      "evidenceLabel": "measured",
      "severity": "minor",
      "surface": "tools/scripts/sample-performance.mjs; docs/dev-reference/architecture/performance.md",
      "reproduction": {
        "kind": "command",
        "command": "grep -c -i scene docs/dev-reference/architecture/performance.md tools/scripts/sample-performance.mjs; grep -n redirectTo apps/dotln/src/app/app.routes.ts; git log -1 --format='sampler last changed %ad' --date=short -- tools/scripts/sample-performance.mjs; git log -1 --format='%ad %s' --date=short 6268de9"
      }
    }
  ],
  "promotedFindingIds": [
    "ER-F10-duplicated-parameters",
    "ER-F2-command-lists-drift",
    "ER-F7-records-cite-absent-evidence",
    "ER-F6-standing-doc-unreachable-pointers",
    "ER-F8-live-rationale-in-dated-log",
    "ER-F4-barrel-doctrine-split",
    "ER-F5-v0-shim-outlived-window",
    "ER-F1-board-gauge-blind",
    "ER-F3-gate-checks-without-negative-control",
    "ER-F9-perf-loop-omits-root-scene"
  ],
  "refutedFindingIds": [],
  "blockedFindingIds": [],
  "unselectedFindingIds": []
}
```

A refuted finding leaves the promoted set and stays in this report with reviewer and refuter attribution. A blocked attempt stays blocked and an unselected finding stays unselected; neither is laundered into a pass or called refuted. There is no survival quota and no vote. This refutation does not replace a work order's independent lifecycle verification.

Local-terms list: **present**. Receipt hash: `sha256:5a9303c0e9102d3d19681b9b98e61a910b5222e521479f860a2a0e3b5bb0484d`.
