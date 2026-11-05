# Standing-link inventory — 2026-11-05

Selection: 44 instance-owned standing Markdown files selected from the kit's kinds, excluding closed work orders and manifest-listed kit files; plus the idea ledger's Record links, as WO-033 directs. [links-scope.json](links-scope.json) contains the exact 45 input paths. Generated indexes are refreshed through their owners. Immutable records retain historical references resolved by the move map.

The exact expression is `planning/[a-z0-9-]+-2026-[0-9]{2}-[0-9]{2}\.md`. Before, at the manifest's baseline commit: **48 matching lines**. After: **no output**, exit 1 (no match), from `grep -rn -E` over the same inputs. The before listing below omits only git grep's common commit prefix.

The original inventory incorrectly filtered for the nineteen moved names and omitted WS-001's citation of a core record. That citation is included here and now points to `docs/planning/passes/intake-mining-run-routing-2026-10-24.md`, confirmed by core's map at `1823a9cd`. It is not a twentieth instance move. The active order's locator and six other open orders' citations are covered by the amendments recorded in WO-033-D007.

## Reproduce

Run from this worktree's Git root. The baseline scan prints the 48 lines; the working-tree scan prints nothing.

```sh
python3 - <<'PYSCAN'
import json, subprocess
from pathlib import Path
scope = json.loads(Path("docs/evidence/WO-033/links-scope.json").read_text())
pattern = r"planning/[a-z0-9-]+-2026-[0-9]{2}-[0-9]{2}\.md"
baseline = json.loads(Path("docs/evidence/WO-033/records-before.json").read_text())["baselineCommit"]
subprocess.run(["git", "grep", "-n", "-E", pattern, baseline, "--", *scope], check=True)
result = subprocess.run(["grep", "-rn", "-E", pattern, "--", *scope])
assert result.returncode == 1, "standing references still match, or grep failed"
PYSCAN
```

## Before

```text
docs/lineage/idea-ledger.md:46:The [pass document](../planning/entropy-reducer-2026-11-03.md) records the frozen
docs/lineage/idea-ledger.md:57:record is [the planning document](../planning/criterion-9-phase-2026-11-01.md);
docs/lineage/idea-ledger.md:79:record is [the planning document](../planning/standard-pass-v0-105-0-2026-11-01.md);
docs/lineage/idea-ledger.md:98:record is [the planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md);
docs/lineage/idea-ledger.md:113:record is [the planning document](../planning/standard-pass-v0-103-0-2026-10-30.md);
docs/lineage/idea-ledger.md:126:record is [the planning document](../planning/standard-pass-v0-101-0-2026-10-28.md);
docs/lineage/idea-ledger.md:140:record is [the planning document](../planning/standard-pass-v0-100-0-2026-10-28.md);
docs/lineage/idea-ledger.md:181:record is [the planning document](../planning/acceptance-by-use-2026-10-26.md);
docs/lineage/idea-ledger.md:194:record is [the planning document](../planning/standard-pass-v0-99-0-2026-10-25.md);
docs/lineage/idea-ledger.md:206:record is [the planning document](../planning/standard-pass-v0-96-1-2026-10-24.md);
docs/lineage/idea-ledger.md:221:record is [the planning document](../planning/mining-run-orders-2026-10-24.md);
docs/lineage/idea-ledger.md:238:record is [the planning document](../planning/standard-pass-v0-93-0-2026-10-23.md);
docs/lineage/idea-ledger.md:254:record is [the planning document](../planning/ui-planning-2026-10-21.md);
docs/lineage/idea-ledger.md:266:record is [the planning document](../planning/latest-upstream-fixes-2026-10-21.md);
docs/lineage/idea-ledger.md:279:The record is [the planning document](../planning/latest-upstream-and-core-answers-2026-10-20.md);
docs/lineage/idea-ledger.md:292:record is [the planning document](../planning/latest-upstream-2026-10-19.md);
docs/lineage/idea-ledger.md:304:record is [the planning document](../planning/main-rules-and-platform-items-2026-10-18.md);
docs/lineage/idea-ledger.md:317:is [the planning document](../planning/angular-workstream-2026-10-18.md); this
docs/operator/implementation-guidance.md:63:(the [2026-10-26 pass](../planning/acceptance-by-use-2026-10-26.md), D4 and D12).
docs/operator/implementation-guidance.md:66:is core's deferred candidate 8; the [v0.101.0 pass](../planning/standard-pass-v0-101-0-2026-10-28.md)
docs/repositories/dotln-angular.md:168:[2026-11-03 planning pass](../planning/entropy-reducer-2026-11-03.md) records this
docs/repositories/dotln-angular.md:481:window. The [2026-11-03 pass](../planning/entropy-reducer-2026-11-03.md#d9-integrate-the-independent-reviews-and-repair-the-unpublished-receipt)
docs/repositories/dotln-angular.md:642:  Read [acceptance by use](../planning/acceptance-by-use-2026-10-26.md) and
docs/repositories/dotln-angular.md:643:  [the v0.100.0 pass](../planning/standard-pass-v0-100-0-2026-10-28.md).
docs/repositories/dotln-angular.md:646:  route. See [the v0.101.0 pass](../planning/standard-pass-v0-101-0-2026-10-28.md)
docs/work-orders/WO-008-authentication-and-permissions.md:24:([planning document](../planning/angular-workstream-2026-10-18.md) §5 and §8),
docs/work-orders/WO-008-authentication-and-permissions.md:35:([planning document](../planning/main-rules-and-platform-items-2026-10-18.md)
docs/work-orders/WO-008-authentication-and-permissions.md:42:UI planning pass ([planning document](../planning/ui-planning-2026-10-21.md)
docs/work-orders/WO-008-authentication-and-permissions.md:45:([planning document](../planning/standard-pass-v0-93-0-2026-10-23.md) §6
docs/work-orders/WO-008-authentication-and-permissions.md:49:([planning document](../planning/mining-run-orders-2026-10-24.md) §6 D4 and
docs/work-orders/WO-008-authentication-and-permissions.md:55:([planning document](../planning/standard-pass-v0-96-1-2026-10-24.md) §6 D4): the base above is provisional: since starter v0.96.1 (core WO-230) the target publish describes the change from the merge base of the subject and the target's `main` and names the activation base beside it, so activation on this base publishes right; the planning pass that runs after WO-016 merges may set it to that merge commit, and none is required to (the 2026-10-24 second pass, D4); the record-path advisory
docs/work-orders/WO-008-authentication-and-permissions.md:58:exercised). Amended by the 2026-10-25 pass ([planning document](../planning/standard-pass-v0-99-0-2026-10-25.md)
docs/work-orders/WO-008-authentication-and-permissions.md:61:provider, `jose` as a development dependency, the refutations paid) and the multi-project check form of WO-013-D005. Amended by the 2026-10-26 pass ([planning document](../planning/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 8) and the walkthrough, and receipt 010's items: the at-rest probe covers IndexedDB, Cache Storage and cookies as well as web storage (its item (b)), and the matrix gains a page reload during a session (c). Amended by the 2026-10-28 pass ([planning document](../planning/standard-pass-v0-100-0-2026-10-28.md) §6 D6 and D14): receipt 011's items (the walkthrough and the e2e run on the served `mocked` configuration build while criterion 5's production grep stands, its item (a); criterion 5 greps the mock's one marker string and the key identifier rather than endpoint paths, (b)), the `/account` page as prose rather than a key-value list (WS-001 rule 24 and G6), and a one-line design brief under rule 25.
docs/work-orders/WO-016-machinery-view.md:43:([planning document](../planning/mining-run-orders-2026-10-24.md) §4 (the
docs/work-orders/WO-016-machinery-view.md:45:priority. Amended by the 2026-10-24 second pass ([planning document](../planning/standard-pass-v0-96-1-2026-10-24.md)
docs/work-orders/WO-016-machinery-view.md:48:issues. Amended by the 2026-10-25 pass ([planning document](../planning/standard-pass-v0-99-0-2026-10-25.md)
docs/work-orders/WO-016-machinery-view.md:50:repairer slot, the sink's directory rule and a drop while the sink is down). Amended by the 2026-10-26 pass ([planning document](../planning/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the sink checks `Origin` and `Host` (its item (a)), its default directory is DotLn-Angular's own ignored tree and never the launchpad's intake (b), criterion 3 reads the counts the executor recorded and names no starter's figures (c), `machinery.md` carries the rule per idea kind (d), a stored value that fails to parse is covered by a spec (e), the fixtures' `actor` values are the observed labels (f), the row counts are asserted by a spec rather than a line grep (g), and the copies' sources are the platform's public repositories (h). Amended by the 2026-10-28 pass ([planning document](../planning/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the sink refuses a directory outside the Git root of the checkout it runs from (its item (a)), the verifier recounts the stamp ids independently (b), a planner, refuter or release-close actor is an `unknown`-slot beat naming the role (c), and the reducer's scrub fails a run of 32 or more hexadecimal characters and a UUID shape (d).
docs/work-orders/WO-017-digital-twin-patience-lane.md:38:2026-10-24 planning pass ([planning document](../planning/mining-run-orders-2026-10-24.md)
docs/work-orders/WO-017-digital-twin-patience-lane.md:40:2026-10-24 second pass ([planning document](../planning/standard-pass-v0-96-1-2026-10-24.md) §6 D3 and D4): the derived
docs/work-orders/WO-017-digital-twin-patience-lane.md:43:known issues. Amended by the 2026-10-25 pass ([planning document](../planning/standard-pass-v0-99-0-2026-10-25.md)
docs/work-orders/WO-017-digital-twin-patience-lane.md:45:message on an absent base and the variants as lazy chunks, one tick contract on the replay library). Amended by the 2026-10-26 pass ([planning document](../planning/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 10) and the walkthrough, the design brief of rule 25, and receipt 010's items: the result fold is the canonical computation of WO-221's figures and the derivation is its check (its item (a)); `BasePaths.Twin` requires `twin:read`, granted to the mocked provider's default user and withheld from its `denied` user, and the Cost line names both (b); a reload after sign-in rests on WO-008's reload row (c); the no-interpreter rule is asserted by a spec that every variant module exports `describe` as a function and by a grep for `new Function` and `eval(` (d); a stored value that fails to parse or names an unknown variant yields the first registry entry (f). Amended by the 2026-10-28 pass ([planning document](../planning/standard-pass-v0-100-0-2026-10-28.md) §6 D4 and D6): the design comparison reads as the operator corrected it in WO-019 (the two layouts are the first pair of an ongoing process the operator ends), and receipt 011's items are written in: the walkthrough runs on the served `mocked` configuration build (its item (a)) and criterion 8's grep names the two phrases that matter (c); `twin:check`'s absent-base message (b) was already in the text.
docs/work-orders/WO-018-art-of-war-map-and-toys.md:50:the 2026-10-24 planning pass ([planning document](../planning/mining-run-orders-2026-10-24.md)
docs/work-orders/WO-018-art-of-war-map-and-toys.md:53:([planning document](../planning/acceptance-by-use-2026-10-26.md) §6 D8) on
docs/work-orders/WO-018-art-of-war-map-and-toys.md:62:([planning document](../planning/standard-pass-v0-100-0-2026-10-28.md) §6
docs/work-orders/WO-023-concept-studies-poeaa.md:43:([planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md)
docs/work-orders/WO-024-concept-studies-geb-and-team-topologies.md:41:([planning document](../planning/concept-batches-and-quality-passes-2026-10-30.md)
docs/work-orders/WO-033-documents-follow-the-contract.md:270:- The critical-path declaration (`docs/planning/critical-path-2026-09-08.md`)
docs/workstreams/WS-001-dotln-angular.md:597:`docs/planning/intake-mining-run-routing-2026-10-24.md` §10), paraphrased:
```

## Files scanned

- `AGENTS.md`
- `AI-HARNESS-SECURITY.md`
- `CLAUDE.md`
- `README.md`
- `docs/README.md`
- `docs/control/README.md`
- `docs/decisions/README.md`
- `docs/discovery/README.md`
- `docs/discovery/environment.md`
- `docs/evidence/README.md`
- `docs/final-reviews/README.md`
- `docs/observations/README.md`
- `docs/operator/README.md`
- `docs/operator/implementation-guidance.md`
- `docs/planning/README.md`
- `docs/planning/sequence.md`
- `docs/product/README.md`
- `docs/product/concept-study.md`
- `docs/product/purpose.md`
- `docs/publication/README.md`
- `docs/releases/README.md`
- `docs/repositories/README.md`
- `docs/repositories/dotln-angular.md`
- `docs/verifications/README.md`
- `docs/work-orders/WO-008-authentication-and-permissions.md`
- `docs/work-orders/WO-016-machinery-view.md`
- `docs/work-orders/WO-017-digital-twin-patience-lane.md`
- `docs/work-orders/WO-018-art-of-war-map-and-toys.md`
- `docs/work-orders/WO-023-concept-studies-poeaa.md`
- `docs/work-orders/WO-024-concept-studies-geb-and-team-topologies.md`
- `docs/work-orders/WO-027-workspace-says-and-checks-what-is-so.md`
- `docs/work-orders/WO-029-concept-research-rxjs.md`
- `docs/work-orders/WO-030-concept-research-eip.md`
- `docs/work-orders/WO-031-concept-research-poeaa.md`
- `docs/work-orders/WO-032-concept-research-geb-and-team-topologies.md`
- `docs/work-orders/WO-033-documents-follow-the-contract.md`
- `docs/work-orders/WO-034-standards-pass-movement-presentations.md`
- `docs/work-orders/WO-035-catalog-text-through-messages.md`
- `docs/work-orders/WO-036-scene-walls-and-ways.md`
- `docs/work-orders/WO-037-scene-shooting-and-bullets.md`
- `docs/work-orders/WO-038-reading-at-full-size.md`
- `docs/workstreams/README.md`
- `docs/workstreams/WS-001-dotln-angular.md`
- `docs/workstreams/WS-002-concept-research.md`
- `docs/lineage/idea-ledger.md`

## Rewritten files

- `docs/lineage/idea-ledger.md`
- `docs/operator/implementation-guidance.md`
- `docs/repositories/dotln-angular.md`
- `docs/work-orders/WO-008-authentication-and-permissions.md`
- `docs/work-orders/WO-016-machinery-view.md`
- `docs/work-orders/WO-017-digital-twin-patience-lane.md`
- `docs/work-orders/WO-018-art-of-war-map-and-toys.md`
- `docs/work-orders/WO-023-concept-studies-poeaa.md`
- `docs/work-orders/WO-024-concept-studies-geb-and-team-topologies.md`
- `docs/work-orders/WO-033-documents-follow-the-contract.md`
- `docs/workstreams/WS-001-dotln-angular.md`
