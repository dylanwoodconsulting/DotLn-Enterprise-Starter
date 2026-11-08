# VER-001 independent evidence

2026-11-08. The subject is the target's working tree
`aa01296dfa364e9285fd1967283a9cee4cfa4e17`, based on
`f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3`. The verifier changed no target source.
The [report](../../../verifications/WO-039/VER-001.md) judges the eight criteria.

## Executed probes

All probe commands ran from the launchpad under `node scripts/harness.mjs bounded --`.
`TARGET` below denotes the registered target worktree; `SCRATCH` denotes this dispatch's
scratch directory. Those are path labels, not committed environment values.

| Probe | Invocation after the bounded wrapper | Result |
| --- | --- | --- |
| Format | `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npm --prefix TARGET run format:check` | Exit 0. |
| Fresh production build | `env NX_DAEMON=false NX_ISOLATE_PLUGINS=false npm --prefix TARGET run build -- --projects=dotln --configuration=production --skip-nx-cache` | Exit 0, cache explicitly skipped. |
| Random reading | `node docs/evidence/WO-039/verify-001/select-reading.mjs TARGET docs/evidence/WO-039/verify-001/reading-selection.json` | Three files sampled without replacement; [selection](reading-selection.json). Read top to bottom. |
| Production walkthrough | `node docs/evidence/WO-039/verify-001/walkthrough.mjs TARGET TARGET/dist/apps/dotln/browser docs/evidence/WO-039/walkthrough` | Ten study/viewport sessions, 90 frames, 30 screenshots; no page errors, failed responses or document overflow. [Walkthrough](../walkthrough.md). |
| Foreign Key Mapping control | `node docs/evidence/WO-039/fkm-control.mjs TARGET f99580f10803bfaa5abae7cd8b0af3b6eeaf8ed3 SCRATCH/verify-001-fkm docs/evidence/WO-039/verify-001/fkm-control` | Candidate 0; base simulation 1. Each arm ran the one named limit test, with eight skipped. [Results](fkm-control/results.json). |
| Independent boundaries | `node docs/evidence/WO-039/verify-001/run-boundaries.mjs SCRATCH/verify-001-fkm docs/evidence/WO-039/verify-001` | Nine tests passed in the disposable copy; [source](boundaries.probe.ts), [log](boundaries.log), [result](boundaries.json). |
| Fresh full crawl | `node docs/evidence/WO-039/crawl.mjs TARGET TARGET/dist/apps/dotln/browser docs/evidence/WO-039/verify-001/dom-candidate.json` | Twenty studies, sixteen states studies, 238 frames, no page errors. [Lossless capture](dom-candidate.json.gz). |
| Evidence controls | `node docs/evidence/WO-039/verify-001/check-evidence.mjs TARGET SCRATCH/verify-001-controls` | Eight expected exits; [checks](checks.json). |
| Real-glyph measurement | `node docs/evidence/WO-039/narrow-register.mjs TARGET TARGET/dist/apps/dotln/browser docs/evidence/WO-039/verify-001/narrow-register.json` | All sixteen studies match the executor's measurements exactly, excluding the timestamp; [measurement](narrow-register.json). |

The independent boundary tests cover entry and exit transitions through null, ordinary inference,
an unchanged state with and without an explicit self-loop, ambiguous entry and exit, an explicit
choice, a mismatched transition, both identity-map settings at every read limit from one to six,
reference indices, and the unified loader's rejection of the wrong family and a structural record.
Only the disposable target copy received the additional spec.

The [fresh comparison](dom-diff.json) has 25 differing frames, all allowed, and zero missing,
added or unexpected frames. The [replay against the executor's candidate](dom-replay.json) has
zero differences. The independent inventory check also verifies all twenty records at both
widths, unique frame keys and continuous step numbers. The comparator rejects each of four
additional controls: body text inside an otherwise permitted heading frame, an accessibility
label inside that frame, a missing frame, and a browser error. Each comparison exits 1.
The declared unrelated-text control also exits 1; its wrapper exits 0 because refusal is expected.

The static checks confirm sixteen zero-switch presentations, twenty flow-spec changes that are
only the loader rename and family argument after ignoring whitespace, no changed visual baseline,
and no added lint or type suppression. The fresh shape audit equals the filed candidate audit.
The compressed capture was decompressed and compared byte for byte before its expanded duplicate
was removed; `checks.json` records its expanded digest and byte counts. To rerun the controls,
first rerun the crawl to recreate that expanded input.

## Gate and limits

`node scripts/target-gate.mjs WO-039 --review` passed all eight declared commands at the same
subject, finishing at 19:19 UTC (0 h 2 min). [Gate summary](gate-summary.json) retains selected
row fields, without the private gate logs. It records no changed target bytes or HEAD and no new
untracked writes in the base checkout. Nx reused cached results for several unchanged inputs;
the production build, browser captures and boundary probes above ran freshly. The executor's
earlier plain and review rows bind this same tree. Its Preflight chronology is recorded in
[the implementation handoff](../handoff.md#acceptance-criteria).

Two initial verifier probe attempts failed before establishing a product result: a slider read
before rendering settled, and a launcher passing the wrong arguments to `path.resolve`.
[Probe development](probe-development.json) records the corrections; both corrected probes passed.
Neither failure led to a target edit. No worker was launched.

The walkthrough used a fresh isolated Chromium and the project's Playwright dependency. Ten
representative screenshots, covering both studies at every width, were visually read; all ninety
walkthrough frames also have recorded structured state. The full crawl covers default parameters;
the executor's separate 174-case model-output comparison covers the declared input grids. This
verification adds explicit read-limit cases beyond the page's exposed input. It does not claim
another browser engine, a new A/B choice, or new translation-language coverage.

The six private review reports were counted without emitting their bodies. Their public findings
and dispositions in D016 and D017, and the public reading-critic report, supplied the review input
under the repository's prohibition on printing the local control directory. Consequential claims
were checked against the implementation, controls, fresh captures and current gate. The
`statesProblems` check participates in the gate it helps judge; its real call site and existing
wrong-module rejection fixture were also inspected.
