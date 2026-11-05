# WO-033 implementation checks — 2026-11-05

Preflight checks of the implemented candidate, including the six append-only
decisions approved by the operator in WO-033-D007. Complete gate results and
review counts belong in the final handoff; this account does not claim them.

| Executed check | Result |
| --- | --- |
| `node docs/evidence/WO-033/capture-records.mjs`, under the bounded wrapper, before moving files | Captured 1,923 tracked files; the new order’s evidence excluded. |
| `node docs/evidence/WO-033/compare-records.mjs`, under the bounded wrapper after moves and formatting | `unchanged 1917`; original bytes preserved 6, authorized appends 6; no changed or missing file. The six suffixes are also checked for exact length and SHA-256. |
| Independent `git cat-file --batch` comparison of each captured path at `records-before.json`’s baseline commit | All 1,923 manifest hashes match the original Git blobs. |
| `node scripts/docs-check.mjs`, under the bounded wrapper after the baseline relocation | Pass: zero failures, 45 pre-existing historical-link occurrences. Before the key relocation it reported one missing historical link; D002 records the fix. |
| `npm run plan -- subject`, under the bounded wrapper | Pass against HEAD. The additional working-tree `buildPlanSubject` probe reads the moved critical-path declaration and retains WO-008’s foundation role. |
| `npm run plan -- followups --sync`, under the bounded wrapper | Pass; total 204, pending 45. The full `exportFollowups` projection has 201 present sources and three closed historical missing-source rows. All 45 pending sources are present. The entire register is byte-identical to HEAD; the moves introduce no missing source. |
| `npm run plan -- check`, under the bounded wrapper | Pass after the authorized amendments: 21 receipts, 20 passes, seven authorized execution amendments. The initial existing-work-order-bytes failure and six withdrawn incorrect bindings are recorded in D003/D004; D007 records the approved correction. |
| `node scripts/lineage.mjs index` | Regenerated successfully. |
| `npm run features -- check`, under the bounded wrapper | Features current. Inventory assertions confirm explicit false for desktop control, the other three feature defaults and unchanged budget sources. |
| Owning `refreshControlProjection` render, second-render byte comparison, and `npm run resume -- status`, each under the bounded wrapper | Identical on the second render; no projection warning. The command and baseline diff are retained in D006 and `projection.diff`. |
| `npm run release -- prepare --local` | Assigned v0.3.5 above v0.3.4 after the missing heading placeholder was supplied; D005 is the owning command’s release decision. No component bump or publication. |
| `npm run format`; `npm run sync` | Pass; sync refreshed meta, with all other generated surfaces current. |
| `node scripts/launchpad.mjs verify`, under the bounded wrapper | All 1,103 kit files verified at the manifest’s pinned core commit. |
| Configuration and protected-file comparison against HEAD | Only `features` added to configuration; package.json, package-lock.json and CLAUDE.md unchanged. |
| Main integration check; nested repository scan | `HEAD..main` count zero; no nested `.git`, only the worktree’s root Git file. |

All 1,923 original record byte sequences remain intact: 1,917 files are
identical, and six retain their original prefixes with only the approved
appendices. The six incorrect amendment bindings remain as withdrawn
append-only control history. Core’s WO-238-D012 left receipt-bound work-order
links unchanged; this instance’s order requires those links rewritten, so
the approved decision appendices are additional implementation work here.

After round-one review, the exact required standing scan now has 48 baseline
matching lines and zero current matches. `links-scope.json` records the 44
standing files plus the ledger. The saved projection diff uses zero context;
D009 includes it directly. The workspace plan check still passes after the
WS-001 citation correction. `plan documents` reports no red tags after the
moves (standing 78, record 514, generated 10, unread 26 at that observation).
D007 supersedes D003's intermediate WO-033 amendment; the canonical latest-row
rule retains the prior event without requiring withdrawal.
