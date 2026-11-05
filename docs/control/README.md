# docs/control

Control records of this instance. `orders/` holds one JSONL segment per order and `plan-refutations.jsonl` the planning log; the lifecycle and planning commands write them, and none is edited by hand. [current.md](current.md) is the lifecycle projection. `npm run resume -- status` reads the canonical fold and warns if the page disagrees. Lifecycle transitions regenerate the page from the fold. To refresh it without a transition, use `refreshControlProjection` exported by `scripts/resume.mjs`, as integration does.

`budgets.json`, `doc-baseline.json` and `outward-vocabulary.json` are this instance's own settings for dispatch bounds, the document check's declared history and the outward review words. A planning pass or an order changes them.

[documents.json](documents.json) declares reader entry points and document-kind overrides. The [document move map](document-moves.json) resolves historical planning references to their current files without rewriting records. [FEATURES.md](FEATURES.md) is the generated election inventory: edit the relevant setting in `dotln.config.json` or the named budget key, then run `npm run meta`.

`local/` (ignored) holds harness observations, usage and the private local-terms list.
