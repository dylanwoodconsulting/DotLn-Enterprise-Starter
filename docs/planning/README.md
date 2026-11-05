# Planning

Use this page to find the inputs to a planning pass and the records that explain
its decisions. The root holds the current planning inputs; dated accounts live
in the record directories.

| Task | Read | How it is maintained |
| --- | --- | --- |
| Choose the proposed order and lane pairs | [sequence.md](sequence.md) | The planner edits the sequence; it grants no activation authority. |
| Review unresolved work and its dispositions | [followups.json](followups.json) | `npm run plan -- followups` pages the register; `--sync` reconciles its public sources and `--apply` records dispositions. |
| Compare the recorded cost of orders and planning inputs | [cost-table.json](cost-table.json) | `npm run meta -- --plan-cost` refreshes this planning snapshot before refutation. |
| Find an order, its state and its activation command | [the work-order index](../work-orders/README.md) | `npm run work-orders -- index` generates it from the sequence and lifecycle records. |
| Read what a pass considered and decided | [passes/](passes/) | `npm run plan -- start <slug>` creates the dated pass document here. Filed pass documents are records and keep their bytes. |
| Inspect an independent planning judgment | [refutations/](refutations/) | Planning receipt commands file immutable judgments and their subject bindings. |
| Inspect an entropy review and its recorded dispositions | [entropy-reviews/](entropy-reviews/) | The entropy commands own these review records. |

To locate a particular pass document, follow its Record link in the
[idea ledger](../lineage/idea-ledger.md); the [lineage index](../lineage/README.md)
provides generated navigation through the passes and their ideas. New pass
documents are under `passes/`, using the date and slug printed by `plan start`.
The historical critical-path declaration used by `npm run plan -- subject`
also lives in `passes/`.

Standing documents describe the current state; records preserve the account
filed at the time; generated pages change through their commands. Historical
references to a moved pass resolve through the
[document move map](../control/document-moves.json), including relative links
written from its former directory. See the [kit's planning procedure](../KIT.md#planning-in-this-instance)
for the complete pass workflow and [document contract](../KIT.md#document-quality)
for the rules governing each kind.
