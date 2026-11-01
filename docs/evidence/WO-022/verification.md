# WO-022 independent verification evidence

Observed on 2026-11-01 for VER-001. The subject is the uncommitted target change over integrated
baseline `c0e5a36008828ec5b742d6e740efff619f3cedbe`. The passing target review row binds tree
`183d357f6590893d98a049fa42a4251458a19185`. No implementation file was edited by the verifier.

## Production use

The Playwright MCP used a newly isolated context, `wo022-ver001`, against a loopback server of
the production output restored by `npm run check:bundle`. This was the production configuration,
with mocks disabled. The server read only `dist/apps/dotln/browser`; it and the isolated browser
page were stopped after the walkthrough. The prior native-desktop interaction remains CRITICAL
in [verification-process-error.md](verification-process-error.md); none of it supplies evidence here.

The verifier performed the Objective at 360, 768 and 1440 pixels with reduced motion: Catalog,
Enterprise Integration Patterns, its twenty studied links, Aggregator's entire eight-step run,
ordinary pseudocode, executable reading, limits and implementations, the two channel patterns
opened through Contents, and Request-Reply's nearby link to Correlation Identifier. Flow and
Marbles retained step 8 when switched. The screenshot manifest records the 36 new images under
[walkthrough/verifier/](walkthrough/verifier/), twelve at each width.

At step 5 Aggregator completed order 32's set; at step 6 it sent that set onward, while order 31
still waited for Design; at step 8 it sent order 31's set. At step 2 Publish-Subscribe showed three
moving copies of `a`, one to each session; Competing Consumers showed one, to Session 1. The nearby
link opened `/tools/catalog/eip:87` and explained matching out-of-order results by the request id
copied into each result.

Additional Playwright probes loaded every one of the twenty studies and stepped every frame at
each width: 200 frames per width, 600 observations, no document horizontal overflow and no SVG
text bounding box outside its viewBox. These checks establish containment, not every possible
typographic quality. The three representative Aggregator frame-5 images were visually inspected.
Expanded Aggregator passed the board's serious/critical axe threshold at all three widths, using
the installed axe-core and the same WCAG tags as the e2e suite. Browser console messages reported
zero errors and zero warnings.

## Executed checks

All focused terminal probes ran sequentially under the harness bounded wrapper. Complete gate
commands ran through the registered target gate. No repository file was written while it ran.

| Check | Observed result |
| --- | --- |
| Target `npm run format:check`, with both Nx process-isolation variables disabled as the profile specifies | Exit 0 |
| Target `npm run check:bundle`, with the same environment | Exit 0; 405,832 initial bytes, `lazyCodeInInitial: []`, `menuAvailableWithTools: true` |
| Target `npm run studies:check` | Exit 0; 60 records, 0 problems |
| Independent study-contract probe | Exit 0; exact twenty ids, all checked, current summary, eleven executable and nine null records, unchanged fifteen production dependency keys |
| Ten negative contract cases | All rejected: missing module/spec, mismatched flow module, duplicate reviewer, draft, missing access date, missing support statement, unresolved nearby id, unmarked illustration, displayed-code drift, duplicate collection id |
| Executable-spec linkage | All eleven specs import their named module and call `expectMarbleExample`; the helper constructs `TestScheduler` and asserts outputs and completion notifications through `expectObservable` |
| Removed comparison branches | The eight temporary switch names and the removed swim-lane selectors are absent; D025's source-removal evidence holds |
| Target `git diff --check` | Exit 0 |
| `node scripts/release.mjs prepare --local` | Target order records no launchpad release; no files changed |
| `node scripts/target-gate.mjs WO-022 --review` | All eight commands pass: install, lint, typecheck, test, format, build, e2e, visual; no tracked-byte mutation |

The independent review gate completed at 18:31:53Z, evidence reference
`target-gate:9499fe28-2764-484d-a6ed-1848ce5a711d`. It consumed cached task results where the
declared inputs matched; visual checks ran again. The executor's identical-subject Preflight and
plain/review rows remain usable; its README records the 81 tools spec files and 703 tests, 144 e2e
tests and 50 visual tests. The verifier does not claim that a cached test task executed anew.
The executor's Preflight ran before its first registered full target gate. The launchpad document
gate is run after the final verification-document edit and consumed by the result transition.

An initial bundle probe omitted the profile's Nx environment variables. Its product command
exited 0, but the bounded wrapper correctly failed on two surviving Nx processes. Both were gone
when checked by PID; rerunning with `NX_DAEMON=false NX_ISOLATE_PLUGINS=false` passed without
survivors. This was a verification setup failure, not a product failure. The production server's
bounded run ended nonzero when deliberately terminated after use; it is not presented as a test.
One screenshot attempt raced a route's deferred study replacement; it was repeated after the
destination heading and network settled. Only completed captures enter the manifest.

## Implementation and source review

The review covered the new flow builders and drawing geometry, all twenty model modules, their
record/module/spec connections, the loader and registry, mapping and view switching, disclosures,
scrubber labels, shared tones, fixtures, changed unit/tooling/browser tests, layout repair and the
coverage and authoring rules. Correctness, operator flow, coupling and maintainability were the
relevant lenses. The discriminator and existing lazy loader are reused; the two builders keep
scripted protocols distinct from executable examples without adding a runtime dependency.

The three execution reviewers' findings and dispositions were read from `review.md`, the filed
record of their substance. It explicitly says the raw reports remain in ignored execution scratch
and provides no raw-report paths; no claim is made to have read those unavailable originals.
The completion fixes, clearance fixes and holdings fixes were checked against current source,
the registered tests and the 600 production observations. D027's narrower return-type improvement
remains optional. No worker was launched, preserving D028's stop.

The factual critic's all-URL evidence is retained: 102 EIP URLs, each recorded reachable and
supported. The verifier independently opened the official public pattern pages for
[Aggregator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Aggregator.html),
[Publish-Subscribe Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/PublishSubscribeChannel.html),
[Competing Consumers](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CompetingConsumers.html)
and [Correlation Identifier](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html).
Their core definitions agree with the walkthrough. This spot check is not a second audit of every
implementation page; criterion 4's full link and critic record remains the evidence for that set.

No authentication, external control writes or live messaging transport was introduced, so forged
credentials and remote authority attacks are outside this change's surfaces. Relevant variations
were absent paths, stale/mismatched records, repeated identities, incomplete references, empty
delivery steps, lost/duplicate reports, delayed consumers, out-of-order replies, view switching,
narrow screens and every real flow record. The existing specimens disclose the intended limits
instead of presenting them as production messaging guarantees.

## Finding F1

**Route:** follow-up. **Class:** content correctness. **Severity:** low.

Control Bus sends `s` to the executor at step 5, while its step-10 note, ordinary pseudocode and
second limit claim the executor never sees the bus. An independent probe bundled the actual module
with the installed esbuild, ran `model` with the record parameters, and confirmed both the status
hop and the contradictory note. It also checked the record limit. The probe exited 0 because the
contradiction was reproduced.

Expected: distinguish the verifier-directed pause from status messages sent to both roles. Repair
the four passages together, retaining the executor's status exchange and ongoing work. No original
criterion is broken and there is no baseline behavior to regress: the study is new. The named
follow-up and reopening condition are [WO-022-D031](decisions.md#wo-022-d031).
