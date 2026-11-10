# WO-046 — The machinery view of what DotLn core has: its mechanisms, roles, hosts and installed surfaces at a pinned core commit, read by level, followed by relation, with the gaps core's own data shows

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/features/machinery-data-access`, `core-snapshot.ts` in
`libs/shared/models`, the page replacing WO-013's arriving page, the miner
`tools/scripts/core-snapshot.mjs` with its tooling test and `scripts.md`
row, `apps/dotln-e2e/src/machinery.spec.ts` and two documents; no runtime
dependency; removes the arriving page, its story and its deep-link test;
regenerates the `machinery-*.png` baselines. The miner reads 947,037 bytes
of core (measured at the pin). Source files, wall-clock, context bytes and
tokens: unknown until run. Commands added: none. Steps: 16. Re-mints: none.
Refutations paid: the 2026-11-09 pass's receipt.
**Nomination provenance:** the operator's direction to the 2026-11-09 pass
(journal row 2026-11-10T02:23:06Z, digest `db38861f…`), paraphrased: the
machinery view looks into what DotLn core has now, so the operator can
improve core and find its gaps: what exists, in what capacity, in what
organization and with what relations, no more and no less.
Planner-synthesized by that pass
([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md)
D12). Opaque identifier, not a priority.
**Depends on:** WO-013 merged (hard: the `/machinery` route and the
Machinery menu group; DotLn-Angular #6, in the base). WO-035
(reference-only, sequenced ahead: it lands the registration that puts mined
text through the message system, which this order uses for core's
statements).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-013",
    "relation": "hard",
    "reason": "the machinery route and menu group whose arriving page this order replaces; merged, and the base contains it"
  },
  {
    "workOrderId": "WO-035",
    "relation": "reference-only",
    "reason": "sequenced ahead: it lands the registration that puts mined text through the message system, which this order uses for core's statements"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(rules 9, 15, 18, 19, 22 to 26, 29; §The app and its sub-apps; G3, G6;
§Design direction; I1; the component taxonomy); `docs/repositories/dotln-angular.md`
(§Run the app and its checks); the target's
`libs/shared/catalog/src/lib/catalog-loader.ts`, `eslint.config.mjs`,
`docs/dotln/evidence/WO-026/decisions.md` (D012); core
(`DylanBWood/DotLn`) at `06c1ddc1a887032f066c58d7893d1bf39738bdca`, the
paths the Observed gap names.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
Machinery and reads core as it stands at the named commit: its loadout,
three host profiles, seven roles, its mechanisms and installed surfaces. They
open a role and read what it is for and the mechanisms it carries, each with
core's own one-line statement; follow a mechanism to the surfaces that
implement it and read, host by host, whether a hook enforces it, a hook only
advises, or only role text carries it, on which event and at which rung; and
from a surface read which mechanisms share it. They ask for the gaps and read
three lists: enforced on one host and text-only on another, enforced on no
host, and core's residue with its reasons. They learn what core has and
where it is thin, and decide what to improve in core. No label-value list.

**Observed gap (dated 2026-11-09 at `eb9d227`):** `/machinery` renders
WO-013's arriving page; the target holds no copy of core's harness data. Core
at `06c1ddc1a887032f066c58d7893d1bf39738bdca` (tag `v0.122.1`, core's `main`
on 2026-11-09), read by this pass with `git show`, publishes:
`.claude/harness-manifest.json` (SHA-256 `49815f9b69e7b87b0f7a59cec96039059c9df4071998d5097b8ab2b587738c04`)
with `profiles` (per host `profile.profileId`, `harness`, `observedVersion`,
`events` with `available` and `evidence`, `loadout`, `grants`,
`outsideWriteGrants` per role, `files`), `installed` (42 surfaces: `path`,
`rung`, `origin.ids`) and `residue` (ten items: `originId`, `reason`,
`missingCapabilities`); `.claude/settings.json` and `.codex/hooks.json`,
which register hook files on host events; each hook's `runHarnessHook`
configuration, JSON with `event`, `kind` and, for feedback hooks,
`policy.mechanisms` (`unitId`, `handler`, `kind`, `rung`, `enforcement`);
seven role skills with a `description`, an Origin stamp of ids, an `id:
statement` line per feedback unit and supports as `Name: statement` lines;
agent definitions in `.claude/agents/` and `.codex/agents/`; `CLAUDE.md`'s
`dotln-harness` block (the refusals and a residue line per host);
`packages/skeleton/src/loadouts/*.ts`, the only place pairing a support's
name with its id and declaring kinds (`promptSupport`, `supportFacetId`,
`activeMechanicId`); `packages/*/package.json` versions. Claude Code 2.1.263
and Copilot CLI 1.0.86 report `PreToolUse`, `PostToolUse`, `Stop` and
`UserPromptSubmit` available; Codex CLI 0.153.4 none. This pass's probe of
the Design's rule found four mechanisms enforced (`contributor.permissions`
among them) and three advised on Claude and Copilot, all text-only on Codex,
and the router served by neither the permission, writer, attribution nor
suppression hook and holding no outside-write grant. In the target, production
excludes the mocks and fixtures, and a `type:data-access` library imports
only `layer:shared-data-access`, events, models, core and util.

**Design:**

- **Snapshot** (`libs/features/machinery-data-access/src/data/core-snapshot.json`,
  schema `core-snapshot-v0`, `additionalProperties: false`): the fields above
  as `source` (repository, commit, tag, inputs with SHA-256), `versions`,
  `loadout`, `hosts`, `roles`, `mechanisms` (kind as core declares it, else
  `undeclared`; statement from the `id:` line, the paired `Name:` line or
  the role's `description`, else none), `surfaces` (a hook's event, `kind`,
  `policy.mechanisms`), `residue` and the refusals; no runtime hashes or
  code. Loaded as a lazy chunk by `import()`, as the catalog is.
- **Miner** (`tools/scripts/core-snapshot.mjs`, a helper): `--core <git dir>
  --commit <sha> --tag <name> [--out <file>]` reads by `git show`, never
  checking out; prints input digests and PASS or FAIL without values;
  refuses an absolute path or an e-mail shape; formats with the workspace's
  Prettier so a rerun reproduces the bytes. `--check`, in `check:fixtures`,
  validates the schema and that every id a role or surface names exists.
- **Reading** (`core-reading.ts`, pure): a mechanism's *capacity* on a host
  is `enforced` or `advised` when a hook in that host's `files` names it in
  `policy.mechanisms` below rung 7 with `hard` or `advisory`, or is the
  commit-message hook or a `permission`-kind hook naming it in its origin, on
  an event the profile reports available; otherwise `text` when a rung-7 or
  rung-8 surface among that host's `files` names it, whatever lower-rung
  surface also lists it in its origin (a registration file lists every unit
  and implements none, and a hook may carry a unit it does not enforce);
  else `absent`; the host's residue item beside it. Role
  ids are roles, served by the hooks whose origins name them. *Relations*:
  role to mechanisms, mechanism to roles and surfaces, surface to what it
  implements (origin less role ids) and the roles it serves, mechanisms
  sharing a surface. *Gaps*: text-only on a host while enforced or advised on
  another; enforced on no host; each residue item.
- **Store and page:** `CoreSnapshotStore` holds the snapshot with WO-007's
  call state and persists the selection under `dotln-angular.machinery.core`
  (I1). In `libs/features/machinery` the container reads one `vm` from
  `MachineryFacade`, which composes store and reading; composites for the
  levels, a role, a mechanism, a surface, the relation trail, the host
  comparison and the gaps; no injection below the container (R1). Roles and
  mechanisms read as prose with lists of names; the host comparison is a
  table (G6). Every string the app adds is a message under `machinery.*`
  in the translation files and none is hard-coded in the TypeScript;
  core's ids, paths and events are data shown as written; core's
  statements are mined text, registered with the translator from the
  loaded snapshot as WO-035 does for the catalog's.
- **Brief** (rule 25): reading measure, names as lists, the comparison as a
  table, nothing animated at rest. First pair, one variable, the primary
  organization: A by role, B by mechanism; rendered at about 2080 by 1460
  and 360, read at 3840 by 1620; A then B with the round named; the
  operator's preference makes the next pair until they end it; rounds and
  the rejected implementation's record under `docs/evidence/WO-046/design/`.
  If the operator delays the rounds, the pair is recorded unpicked and A
  ships.
- **Documents:** `docs/dev-reference/architecture/machinery.md` and
  `docs/ai-reference/machinery-rules.md`, linked from both READMEs; the
  WO-026-D012 places: `README.md`'s menu table, the developer README's first
  paragraph, `sub-apps.md`'s opening, table and smallest-form sentence,
  `storybook.md`'s visual list, `libs/features/machinery/README.md`.

Rejected: reading core live (axis: the app is not wired to core; a pinned
snapshot is reproducible); MSW (axis: production excludes it); capacity
computed by the miner (axis: the snapshot keeps core's fields; the judgment
lives in tested code); mining the launchpad's emitted copy (axis: the subject
is core, not a fork's emission).

Live-run surfaces at the base: WO-006's production build and Storybook,
WO-013's menu and arriving page; core at the pin, beside the launchpad and
on GitHub.

**Deliverables:** snapshot, schema, miner, reading, store, page, e2e and
visual changes, documents, `docs/evidence/WO-046/`.

**Execution plan:**

1. Base guard as WO-044 step 1 with this pin. Check: the decisions carry the
   integrated commit.
2. Generate `libs/features/machinery-data-access` (`scope:dotln,type:data-access`,
   testing entry), logged in `generator-log.md`, listed in
   `tools/scripts/check-foundation-types.mjs`. Check: `npm run
   typecheck:foundations`.
3. `libs/shared/models/src/lib/core-snapshot.ts`, the schema. Check: `npm
   run check:shared-types`.
4. The miner and `tools/core-snapshot.test.mjs` over a synthetic core in a
   temporary Git repository. Check: `npm run test:tooling`.
5. Mine from the core clone beside the launchpad if it holds the pin (`git
   cat-file -e <pin>^{commit}`), else a `--filter=blob:none` clone of
   `https://github.com/DylanBWood/DotLn` in the session scratch, else stop
   and record the blocker; record path, command, digests. Check: the
   manifest digest equals the Observed gap's; PASS.
6. `check:fixtures` runs `--check`; `scripts.md` row (rule 26). Check: `npm
   run check:fixtures`, `npm run check:scripts`.
7. `core-reading.ts`, the store, its events and kit. Check: `npx nx test
   machinery-data-access`, `npm run lint:hygiene`, `npm run check:kits`.
8. The page, messages, stories; the arriving page removed. Check: `npx nx
   test machinery`, `npm run lint:components`, `npm run i18n:check`, `npm
   run check:templates`.
9. The first pair and rounds, or the deferral. Check: criterion 9's file.
10. e2e: `machinery.spec.ts`; `sub-apps.spec.ts`'s `machinery` deep-link test
    removed, its axe and viewport tests moved, its keyboard test reading the
    new heading; `sub-apps.visual.spec.ts` and baselines; `storybook.spec.ts`'s
    arriving story replaced. Check: `npx nx e2e dotln-e2e`, `npx nx
    e2e-visual dotln-e2e`, `npm run typecheck:e2e`.
11. Production build. Check: criterion 7's commands.
12. Walkthrough in the served production build at the five sizes under
    `docs/evidence/WO-046/walkthrough/`. Check: files and `walkthrough.md`.
13. Documents, D012 places, library READMEs (rule 19). Check: criterion 8.
14. Dependency check as WO-015 step 15. Check: prints nothing.
15. Gate plain and review. Check: passing rows, no tracked-byte mutation.
16. Launchpad write-back: the profile's §Find the implementation; WS-001's
    delivery states by the final review. Check: `npm run test:docs`. Then
    WO-007 steps 15 to 17, branch `feat/machinery-core-view`, title
    `:sparkles: Show what DotLn core has in the machinery view`.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run lint:components`,
`npm run lint:hygiene`, `npm run check:fixtures`, `npm run check:scripts`,
`npm run test:tooling`, `npm run i18n:check`, `npm run typecheck:e2e`,
`npm run check:bundle`, `npx nx e2e dotln-e2e`, `npx nx e2e-visual
dotln-e2e`; in the launchpad order worktree `npm run test:docs`; then the
target gate plain and review once each.

**Acceptance criteria (all required)**

1. **Use (rule 24).** The verifier performs the Objective's session in the
   served production build: the loadout and hosts; the verifier role;
   `verify-app-before-done` followed to `finish.mjs` and its capacity per
   host; the mechanisms sharing `finish.mjs`; the three gap lists; a
   mechanism text-only on Codex with core's residue reason. The VER report's
   `## Walkthrough` has dated steps and screenshots at 360, 768, 1440, about
   2080 by 1460 and 3840 by 1620 under `docs/evidence/WO-046/walkthrough/`,
   and says in the verifier's words what core has and one gap they would
   improve, read from the page alone. Met only when every step completed and
   that statement is present; a UI issue at the two largest sizes fails it,
   elsewhere it is a boarded follow-up (rule 29).
2. `npm run check:fixtures` exits 0 with the snapshot check; `npm run
   test:tooling` exits 0 with tests that the miner reads by `git show`,
   refuses an absolute path and an e-mail shape, prints no value on failure,
   and that `--check` refuses a dangling id.
3. `node tools/scripts/core-snapshot.mjs --core <path> --commit
   06c1ddc1a887032f066c58d7893d1bf39738bdca --tag v0.122.1 --out <scratch>`
   prints PASS and `cmp` exits 0 against the committed snapshot, run from the
   clone beside the launchpad or a fresh GitHub clone; where neither is
   reachable the verifier records it untested with the reason and judges
   from the executor's recorded run.
4. `npx nx test machinery-data-access` exits 0 with specs on the committed
   snapshot: `concurrent-work-requires-worktrees` enforced on Claude and
   Copilot by its `PreToolUse` hook and text-only on Codex with core's
   residue reason; `verify-app-before-done` advised at `Stop`;
   `process-cost` `text` on every host and enforced on none, its rung-2
   registration notwithstanding; `anti-oscillation`, which `finish.mjs` also
   names, read by that hook's `policy.mechanisms` entry and `absent` on no
   host whose skills carry it; every residue item among the gaps;
   `finish.mjs` related to each unit its configuration names; a role's
   mechanisms equal to its stamp's ids; a stored selection that does not
   parse opening the first level.
5. `grep -rnE "dotln-key-value-list|<dl" libs/features/machinery/src` prints
   nothing; `npm run i18n:check` and `npm run check:templates` exit 0;
   `grep -rlE "from 'node:|from \"node:|require\(" libs/features/machinery/src
   libs/features/machinery-data-access/src --include='*.ts' | grep -v spec`
   prints nothing.
6. `npx nx e2e dotln-e2e` exits 0 with: every level reachable by keyboard; a
   role followed to a mechanism and a surface; the three gap lists; the
   Machinery menu link unchanged; axe at the board spec's threshold; no
   horizontal overflow at the five sizes; and `npx nx e2e-visual dotln-e2e`
   exits 0 with the regenerated baselines named in the pull request.
7. `npx nx build dotln --configuration=production` exits 0; `grep -rl
   "core-snapshot-v0" dist/apps/dotln/browser` then prints a file; `npm run
   check:bundle` passes; `package.json`'s `dependencies` keys equal the
   integrated base's.
8. Both documents exist and are linked from both READMEs; `grep -n -i
   placeholder` over the five WO-026-D012 files prints nothing.
9. `docs/evidence/WO-046/design/comparisons.md` records the first pair (A by
   role, B by mechanism) at about 2080 by 1460 and 360, and either every
   round with its pick and the operator's word that ended them, the removed
   candidate's files named in the decisions file and `ls` on each printing
   nothing, or the operator's deferral with the pair
   unpicked and A shipped (rule 25).
10. `node scripts/target-gate.mjs WO-046 --review` records a passing row for
    every declared command with no tracked-byte mutation, and
    `npm run test:docs` passes in the launchpad order worktree; the
    Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, `docs/evidence/WO-046/README.md`,
`design/`, `walkthrough.md` and its screenshots, `host-qualification.md`.

**Known issues and carry-ins:** WO-016 was written to replace the same
arriving page with a replay of a recorded order and names the same
`machinery-data-access` library, documents and e2e spec; the planning pass
before WO-016 activates places its replay beside this view and reconciles
those names; this order's storage key, `machinery.core`, stays clear of
WO-016's. Under rule 9 this order makes every string it adds a message
and puts core's mined statements through the message system by WO-035's
registration; if WO-035 has not landed at activation, the statements
render as data and the executor boards the registration with its
location (rule 21). The snapshot is
core at one commit; a later core needs a new run. A support the miner cannot
pair through core's loadout source shows no statement. WO-026-D012's
carry-in is step 13. This order activates only on a launchpad whose starter
carries core WO-221's `--draft` form; the draft pull request is a
final-review obligation read from `docs/evidence/WO-046/preview-pr.json`,
never a criterion. The target release headers follow WO-012's policy.

**Non-goals:** a replay of an order; agents in slots; ideas or changes
dropped on anything; simulation; an idea sink; a live connection to core;
core's feature elections or documents; editing core. The replay is WO-016's;
the rest is nobody's.

**Operator-review assumptions:** the operator accepts a committed snapshot of
core at a named commit as the page's source, judges the first pair or defers
the rounds, and reads the one draft pull request before final review.
