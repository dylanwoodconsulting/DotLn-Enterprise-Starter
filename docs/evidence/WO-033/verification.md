# WO-033 verification evidence — 2026-11-05

This is the independent verifier's evidence for [VER-001](../../verifications/WO-033/VER-001.md).
The subject is the uncommitted WO-033 implementation over
`a4af0bc51f2a495b36f5c909279cfeaceda1ae78`. The verifier changed no implementation
file. The authorized six-append contract is the current order, bound by
WO-033-D007; its recorded capture digest was independently checked and agrees.

## Executed checks

Every probe below ran serially under `node scripts/harness.mjs bounded --`.
The data audit and operational assertions ran from session scratch. They used
the real candidate and the immutable Git baseline, not a copied executor result.

| Check | Observed result |
| --- | --- |
| `npm run format:check` | Pass; all matched implementation files use Prettier style. |
| `node scripts/docs-check.mjs` | Pass; zero failures, 45 declared historical link occurrences, no standing document without a reader binding. The five existing operator-word advisories remain advisory. |
| `node docs/evidence/WO-033/compare-records.mjs` | `unchanged 1917`; `original bytes preserved 6; authorized appends 6`; no changed or missing file. |
| Independent baseline reconstruction | Enumerated the baseline's tracked paths under all six required record roots plus the nineteen dated planning files. The resulting set equals all 1,923 manifest paths, without duplicates or omissions. Streamed `git cat-file --batch` and independently matched every blob's SHA-256 to the capture. |
| Independent current-record comparison | All 1,917 complete files match the verified baseline hashes. Each of the six permitted files has the original Git blob length and digest as its prefix, exactly one appended JSON decision with the declared ID, and the manifest's exact suffix length and digest. |
| Independent move inventory | Exactly nineteen unique source and destination pairs, each naming WO-033 and preserving the baseline bytes; every old path absent. The planning root contains exactly the four named files and three directories. |
| Standing-reference audit | Independently derived the 44 instance-owned standing Markdown inputs, excluding kit files and closed orders, and added the ledger. This agrees with `links-scope.json`. The literal required `grep -rn -E` expression returns exit 1 with no matches; the same baseline inputs contain 48 matching lines. |
| Relative-link audit | Parsed 218 local standing-document links and resolved them without the move map: none points to an old moved path. This also checks bare sibling references that the literal grep would miss. Independently reconstructed original-directory resolution for 40 local links inside moved documents; every kit resolution agrees. |
| Path-only diff audit | The ledger, implementation guidance, repository profile and six affected open orders equal their baseline bytes after only the nineteen authorized path substitutions. The other substantive document and configuration diffs were read directly. |
| Planning page and compiler | All seven required links are present and no dated Markdown filename is listed. `buildPlanSubject(root, 'HEAD', { workspace: true, goalReview: true })` finds the moved critical-path declaration and retains WO-008 as the foundation outcome. |
| `npm run plan -- followups --sync` | Pass; no missing source reported. The complete register remains byte-identical. |
| `npm run plan -- check` | Pass; 21 receipts, 20 passes and seven authorized execution amendments. Original planning-log bytes are an unchanged prefix. |
| `node scripts/lineage.mjs index` | Pass; generated lineage page byte-identical. |
| `npm run features -- check` and inventory assertions | Pass. Desktop control is Boolean false from `dotln.config.json`; its note names the 2026-11-01 direction. The three other feature choices remain defaults. Each budget key actually declared retains the budget-file source; unset keys retain their defaults. |
| Two `refreshControlProjection(root)` calls followed by canonical status | Both owner renders preserve the existing projection bytes. Status selects WO-033 in verifying phase without a projection warning. |
| `npm run work-orders -- index --check` | Pass. |
| Protected inputs | All 1,103 kit files match their manifest hashes. `package.json`, `package-lock.json` and all of `CLAUDE.md` match the baseline. Configuration differs only by the explicit desktop-control election. |
| `git diff --check` against the baseline | Pass. The result transition also checks current untracked authored evidence through its canonical whitespace check. |

The two focused existing tests were also run independently:

```sh
node scripts/harness.mjs bounded -- node --test --test-name-pattern='desktop control refuses by default and reads the live election with one advisory' scripts/test-harness.mjs
node scripts/harness.mjs bounded -- node --test --test-name-pattern='a reference names one document for every reader' scripts/test-docs-check.mjs
```

Each ran one test and passed, with no failure, cancellation or skip. The first
exercises an explicit `{ on: false, note }` election, invalid inputs and the
desktop refusal; it does not control a desktop or browser. The second exercises
historical relative links, reader bindings, entry points, red tags, the census
and refusal to reuse an old moved path.

## Gate evidence

The executor's complete `npm test` row at
`2026-11-05T18:05:39.748Z` remains valid at current code identity
`2651683b2d2bc56af8eba84252a15f72fbb24b15363250953a7fde28f4ba0ebc`.
Its tree is `07b4d277c0c02723f5b68424b7d86afa8a6aaa88`; its seven required
suites are kit verification, format, configuration root, registrations,
declarations, generated outputs and host. The gate reader confirms an intact
execution, no missing suite, no failed task, and unchanged code and build
identities. Verification consumes this row rather than rerunning it.

After the final authored report and index updates, `npm run test:docs` must pass
at the candidate before `verification-result pass` may be recorded. The
VerificationCompleted event's document-gate reference is the authoritative
receipt for that final run; no anticipated result or count is asserted here.

## Interpretation and limits

The reviewed [resolution matrix](review-resolution.md) covers all nineteen
findings from the criteria, design and consistency workers. Metadata confirms
three round-one reports and no later round. The private reports' raw prose was
not loaded into this review: the launchpad's Secrets floor prohibits emitting
the contents of `docs/control/local/`. The verifier instead assessed every
published disposition and independently reproduced the consequential claims.
No worker was launched and the verdict was not delegated.

The admitted design resolves historical links in kit readers. It does not add
redirects to GitHub or an editor. The critical-path compiler was checked against
working files because the ordinary subject CLI reads HEAD. The planning page
locates that declaration's directory without naming a dated file, as the order
requires. Future integration behavior beyond this worktree was not simulated;
the actual verification dispatch and repeated owner renders preserve a quiet
status here. These boundaries are the existing design, not undisposed defects.

The verifier's first scratch audit exhausted its own 128 MiB output buffer while
collecting baseline blobs. It was changed to stream and hash the blobs. Its next
attempt incorrectly required every possible budget key to be explicitly set;
the assertion was corrected to the criterion's distinction between declared
and unset keys. The complete corrected audit passed. Both were verifier
instrument errors, changed no subject bytes and establish no product failure.

The schema-1 move design and step 10 were also read from core's WO-238 at
`1823a9cd`. The installed map reader, kinds classifier, Markdown link checker,
planning selector, feature readers, desktop hook and their relevant tests were
reviewed. The lifecycle and gate machinery that recorded this verification
were used as evidence instruments; none was changed by WO-033.
