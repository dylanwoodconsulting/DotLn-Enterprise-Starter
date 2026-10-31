# docs/control

Control records of this instance. `orders/` holds one JSONL segment per order and `plan-refutations.jsonl` the planning log; the lifecycle and planning commands write them, `current.md` is their generated projection, and none is edited by hand.

`budgets.json`, `doc-ceilings.json`, `doc-baseline.json` and `outward-vocabulary.json` are this instance's own settings for dispatch bounds, product-document ceilings, the document check's declared history and the outward review words. A planning pass or an order changes them.

`local/` (ignored) holds harness observations, usage and the private local-terms list.
