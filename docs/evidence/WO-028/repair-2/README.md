# Shared study messages and model composition — 2026-11-05

The operator expanded WO-028 to repair the shared corpus in D042. The goal is
beautiful, efficient code. This candidate addresses FINAL-001 F9/F10 and the
check/guidance follow-ups F11/F12 within that approved scope.

## Rules the repair establishes

- All 80 authored study records use `concept-study-v1` message keys. The shipped
  v0 schema is preserved. IDs, URLs, dates, module paths and machine parameters
  retain their meaning. English prose is retained exactly in lazy work catalogs.
- The presentation receives a translator explicitly. Movement simulation and
  raw stream execution remain independent of language; small model entry points
  compose mechanism and presentation. Shared number/vector formatting and drawing
  helpers preserve the earlier numeric behavior.
- Work messages load with the selected reading, together with shared narration,
  through the house `MessageCatalog` service at the lazy Tools route. Superseded
  loads cannot replace current content, and failed message loads remain retryable.
- The i18n check inspects record and model message consumers; the model suite
  checks actual presentation strings through an alternate translator. The model
  function ceiling is 80 nonblank, noncomment lines. Neither a reused example nor
  a green size check replaces a readability/efficiency review.

## Evidence collected during implementation

`record-roundtrip.json` records an executed semantic round-trip for all 80 records:
resolving every message restores the original record exactly, apart from its
explicit schema version. There are zero differences. The source is the private
pre-migration copy, not an altered golden file.

`npm run studies:check` on the migrated records exits 0: 80 records, 0 problems.
Private worker test results are intermediate evidence only. The integrated native
preflight is retained in [validation.json](validation.json); complete target gate
rows follow the independent review ladder.

The second movement worker checked 119 English model outputs against the original
and found zero differences, then audited 5,717 displayed fields. The stream worker
passed 410 private tests and compared raw values and 76 mechanism declarations
across its forty modules. The first movement worker checked all 1,304 translation
calls for missing keys and parameters and typechecked its sources and specs.
The executor integrated only the workers' declared owned files, excluding their
private adapters, and preserved the record/title entries while merging messages.

One worker reported creating a temporary audit script in the active target while
inspecting its lint configuration. It removed that exact helper immediately; the
executor verified its absence. It changed no product file there. All product
integration remained with the executor, and no worker started a target gate.

The first integrated native preflight passed 36 of 39 tasks, including the build.
The remaining failures exposed import ordering, two specs reading a message key as
prose, and the template check's requirement to mark already-resolved content.
Those consumers were repaired without changing their assertions. Existing
`translate="no"` browser markers remain on resolved study text; they prevent a
browser's automatic second translation and do not exempt the upstream records or
models from the message checks. Symbols, numeric ticks and module paths also use
house message templates at their display sites. Both the template and i18n checks
then passed. A subsequent combined run ended with exit 137 and no cause in its
log; the executor stopped its Nx daemon and reran with one task at a time.

The measured bounded native runs then passed lint, the full unit selection and
the production build. Tools has 104 passing files and 954 passing cases, including
the translated-output corpus audit and both stale-language/request regressions.
The tooling selection passes 77 cases. The lint fixture now proves that a compact
study function passes and an oversized function is refused by the intended rule,
with both fixtures in a covering temporary TypeScript project.

The full browser selection passes all 161 cases. The two new message cases check
that board and shelf visits fetch no study catalogs, the selected reading fetches
only its work and common messages, an overridden translation reaches the DOM,
and a 503 response yields a visible failure that recovers on retry. The initial
page-only interception missed service-worker-owned requests; D046 records the
trace evidence and the context-route correction. Existing journey, label,
accessibility and responsive checks remain in that passing selection.

[The production bundle receipt](bundle.json) records 406,485 initial bytes,
653 more than the previous repaired candidate. No lazy feature code enters the
initial closure. AI for Games records occupy a 135,351-byte lazy chunk, messaging
87,341 bytes and RxJS 76,230 bytes; their prose is served in separate work message
assets. The browser check proves those assets remain lazy. This moves prose out
of JavaScript rather than claiming that localization eliminates its transfer
cost. Runtime dependency keys are unchanged from the target base.

## Authority and compatibility

D042 records the explicit scope expansion and D043 the kit’s inability to bind
this separately tracked order through amend-order: the latest judged horizon
omits it. The ordinary planning check passes. No receipt was fabricated and no
kit code was changed. The current contract is a versioned replacement; the
published v0 schema bytes and the original source catalog remain intact.

The model function adds an explicit translator argument. Every registry consumer,
model spec, shared drawing builder and test fixture must migrate with it. Record
checks dereference messages before checking pseudocode against executable modules,
mechanism step counts and distinct reviewers. Translation test copies must match
the served catalogs exactly.


## Corrections from the independent reviews

The three round-1 reviewers returned four findings. Marble courier origins now
use stable stream IDs, with a regression that gives distinct lanes the same
translated label and checks their geometry. The developer entry point names the
current v1 contract. The remaining corrections improve calculation ownership.

The movement audit covers all forty studies. Thirty-one now retain calculations,
readings or solved results for presentation; nine already retained the relevant
work. The public state-only helpers remain useful adapters. Three focused cases
check known results and continuity, then verify that presenting retained flock,
pipeline and creature samples calls none of the observed mechanism entry points.
The complete-output comparison in [comparison/results.json](comparison/results.json)
compares all forty models at defaults and every offered input boundary: 176 cases,
zero differences. It establishes output preservation, not a latency improvement.

The stream audit covers all forty RxJS and messaging studies; twenty-two needed
changes. Computed counts, amounts, balances, percentages and intervals now enter
messages from raw values or one numeric model source. Changed-input regressions
check that both executable results and translated narration follow those values.
[The audit](comparison/stream-audit.json) records the exact 48 default narration
changes where a computed cardinal is now written as a numeric parameter. The
meaning, event timing and all eighty authored record prose objects are preserved.
D047 records this choice; no count-word formatter was added.

The parent integrated only each worker's declared files and checked their hashes.
Native integration caught three mistaken state-array helper signatures in two
movement presenters, an overly open Scan input type and a test's index-signature
access. Each was corrected without changing an expected mechanism result. The
bounded reviewer rechecks and complete gates judge the integrated candidate.


[The integrated correction checks](review-fix-validation.json) pass lint, all unit
projects (Tools: 105 files and 962 cases), production build, bundle, all 161 browser
cases and formatting. [The final movement comparison](comparison/final-results.json)
again matches all 176 cases and binds the formatted source hashes.
[The current bundle receipt](review-fix-bundle.json) retains 406,485 initial bytes
and the same three lazy record-chunk sizes. Runtime dependency keys remain equal
to the base. These are native preflight results; complete target rows follow the
finished review ladder.


The bounded round-2 reports hold all three code fixes. D049 closes the remaining
related reuse notes in Arrive and Collision with a two-presenter correction.
[The last comparison](comparison/round-3-results.json) again matches all 176 cases;
[the final-delta native checks](round-3-validation.json) pass lint/types and the
production bundle check, retaining 406,485 initial bytes and lazy feature loading.
The single combined round-3 review judges this small delta before complete gates.


## Complete validation

The last combined review returned zero findings. The final reviewed target is
`15d0e4efcfd20c9d8159cc3cd06d8e0ba5de41a0`. The plain target gate passes all five
declared commands, and the review gate passes all eight, including production
build, browser and visual selections. [The run receipt](gates.json) and canonical
[plain](canonical-target-plain.json)/[review](canonical-target-review.json) readbacks
bind both passing runs to that exact tree with no candidate-byte or HEAD mutation.
No code or reviewer follows the passing review gate.

The final executor handoff preserves the eight criterion judgments and leaves the
new production walkthrough to the independent verifier. The final launchpad
document gate follows the handoff's last edit; repair completion consumes its
passing row. This repair makes no commit, push or publication.
