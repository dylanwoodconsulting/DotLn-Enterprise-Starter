# The any-depth node_modules declaration

2026-11-07, in the launchpad order worktree `wo-023`, under `resume: next` (WO-023 step 12;
[D002](https://github.com/DylanBWood/DotLn-Angular/blob/a98d59c7c641a6bb50de2165b1694a4a954f9835/docs/dotln/evidence/WO-023/decisions.md#wo-023-d002) allocated `FUP-9a1ea6db27a8f371` to this write-back). Nothing was
deleted, and no target writer or close ran as part of it.

## The change

`classes.angular-nx-monorepo.disposable` in `dotln.config.json` loses its seventeen nested
`libs/*/*/node_modules` entries and its root `node_modules` entry, and gains `**/node_modules`, the
any-depth declaration the kit admits since starter v0.112.0. The other twelve declarations, the
registration's `baseDisposablePolicy` and every other field are unchanged. The diff, with no
context lines:

```diff
@@ -7,0 +8 @@
+        "**/node_modules",
@@ -15,18 +15,0 @@
-        "libs/dotln/shell/node_modules",
-        "libs/features/board-data-access/node_modules",
-        "libs/features/board/node_modules",
-        "libs/features/machinery/node_modules",
-        "libs/features/scene-data-access/node_modules",
-        "libs/features/scene/node_modules",
-        "libs/features/tools/node_modules",
-        "libs/shared/catalog/node_modules",
-        "libs/shared/core/node_modules",
-        "libs/shared/data-access/node_modules",
-        "libs/shared/events/node_modules",
-        "libs/shared/i18n/node_modules",
-        "libs/shared/models/node_modules",
-        "libs/shared/scene-engine/node_modules",
-        "libs/shared/state/node_modules",
-        "libs/shared/ui/node_modules",
-        "libs/shared/utils/node_modules",
-        "node_modules",
```

`loadConfig` now composes this effective policy for `dotln-angular`, read with
`node --input-type=module -e` from the worktree root:

```json
{
  "baseDisposablePolicy": "judge-only",
  "disposable": ["**/node_modules", ".angular", ".nx", ".runtime", "__screenshots__", "coverage", "dist", "docs/control/local", "out-tsc", "playwright-report", "test-output", "test-results", "tmp"]
}
```

## The probe

Criterion 10's non-deleting probe, run verbatim from the worktree root at 2026-11-07T19:47:14Z:

```sh
node scripts/harness.mjs bounded -- node --input-type=module --eval '
import assert from "node:assert/strict";
import { loadConfig } from "./scripts/lib/config.mjs";
import { disposableMatchRoot } from "./scripts/lib/target-worktree-close.mjs";
const policy = loadConfig(process.cwd()).repositories["dotln-angular"];
assert.equal(policy.baseDisposablePolicy, "judge-only");
assert.ok(policy.disposable.includes("**/node_modules"));
assert.equal(policy.disposable.some(p => p === "node_modules" || p.endsWith("/node_modules") && p !== "**/node_modules"), false);
for (const [path, expected] of [
  ["node_modules/package/index.js", "node_modules"],
  ["libs/future/deep/project/node_modules/.vite/results.json", "libs/future/deep/project/node_modules"],
  ["libs/future/deep/project/src/index.ts", null],
  ["libs/future/node_modules-backup/index.js", null],
]) assert.equal(disposableMatchRoot("**/node_modules", path), expected);
console.log("cleanup declaration matches dependencies and excludes source");
'
```

Its output, the wrapper's lines included:

```text
bounded-start {"budgetBytes":4294967296,"physicalBytes":51539607552,"deadlineMs":900000}
PROGRESS [bounded-probe] started
cleanup declaration matches dependencies and excludes source
bounded-result {"name":"bounded-probe","durationMs":71,"slowestCases":[{"name":"bounded-probe","durationMs":71,"exitCode":0,"granularity":"task"}],"peakFootprintBytes":1360280,"peakRssBytes":1802240,"memoryBudgetBytes":4294967296,"footprintSource":"proc_pid_rusage.ri_phys_footprint","droppedOutputBytes":0,"startedAt":"2026-11-07T19:47:14.501Z","finishedAt":"2026-11-07T19:47:14.572Z","exitCode":0,"executed":true}
```

The probe exited 0: the pattern matches a root and an arbitrarily nested `node_modules`
directory, and leaves a source path and a similarly named directory unmatched.

## What stays as it was

Ignored-only selection, the tracked-file and filesystem refusals, the judge-only base policy and
journal retention are untouched; the pattern changes only which ignored directories count as
disposable. The closed WO-021 and WO-022 evidence and its historical exact-root assertions are
records and keep their bytes. The profile's
[cleanup section](../../repositories/dotln-angular.md#what-close-deletes-retains-or-refuses) now
lists the thirteen entries and explains the one pattern beside the literal paths.
