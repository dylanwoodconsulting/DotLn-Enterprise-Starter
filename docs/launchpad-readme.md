# DotLn launchpad

| Fact | Value |
| --- | --- |
| What this is | The operator's own DotLn instance, which plans and runs evidence-gated work orders across their repositories |
| Base branch | `main` |
| Kit | A DotLn starter release; [UPSTREAM.md](../UPSTREAM.md) names its tag and core commit |
| Workstream | [WS-001](workstreams/WS-001-dotln-angular.md), which builds DotLn-Angular |
| Registered repository | [`DylanBWood/DotLn-Angular`](https://github.com/DylanBWood/DotLn-Angular), with [its profile](repositories/dotln-angular.md) |
| Open work | [the work-order index](work-orders/README.md) and [the current page](control/current.md) |
| Releases | `Launchpad vX.Y.Z`, on the repository's Releases page |

This is the launchpad's own README. It lives here and not at the repository root
because the starter's updates rewrite the root `README.md` through Git merges, so a
fixed page there would conflict on every update. The root page stays the starter's,
and its directions for setting up and running a kit stay true. When the upstream kit
no longer causes merge issues with the root page, this page moves there and this
paragraph goes (`FUP-9958a2830a81ad0c`).

## What this repository is for

DotLn is an agentic platform. Its core publishes a starter kit, and a launchpad is one
instance of that kit in its own repository. This one belongs to one person, called
the operator throughout these documents, who is its sole user.

Work on the operator's repositories starts here as a work order: a bounded scope with
acceptance criteria and the evidence that proves them. It arrives as a pull request
they read before it merges. Each order runs in its own worktree, an independent
verifier judges it, and a final review decides whether it goes out. Planning passes
and starter updates, which change this repository itself, arrive as pull requests the
same way. [The purpose](product/purpose.md) states this in full.

The first workstream is DotLn-Angular, the operator's reference Angular workspace and
their sandbox app, where ideas are tried as toys before the ones that work are
promoted. This repository holds that workstream's plans, orders and registration;
the code and its order records live in DotLn-Angular.

The kit that enforces all of this belongs to DotLn core. It stays upstream and
reaches this fork only through starter updates. `KIT-MANIFEST.json` lists every kit
file with its SHA-256, and everything it does not list is this instance's own.

## Run it and its checks

The launchpad needs Node 26. After cloning:

```sh
node scripts/bootstrap.mjs
npm run resume -- status
```

Bootstrap runs `npm ci` and then the emit that installs the runtime the hooks import;
until it runs, the hooks report `snapshot-missing` and host permissions alone decide.
`status` names the selected order, its phase and the next legal action, and adding
`--json` gives the canonical record.

| Gate | Command | What it runs here |
| --- | --- | --- |
| Product | `npm test` | the structural checks and the kit's manifest |
| Review | `npm test -- --review` | the same selection here, as the complete run a handoff rests on |
| Document | `npm run test:docs` | those, then the document checks |
| Target | `node scripts/target-gate.mjs WO-NNN [--review]` | a registered repository's own commands in its worktree; [the profile](repositories/dotln-angular.md#registered-gate) lists them |

[The root page](../README.md#what-runs-here-and-what-does-not) lists each selection's
rows. `node scripts/harness.mjs check` confirms the generated surfaces are at their
pinned bytes, and `npm run sync` repairs a stale derived artifact.

The gate runner needs host access beyond the checkout: the shared Git metadata for
linked worktrees, sibling worktree destinations, the ignored local control and
`.runtime/` directories, and its private host coordination directory, where it
compiles native helpers and takes kernel locks. A user-level sandbox can prevent that.
[`AI-HARNESS-SECURITY.md`](../AI-HARNESS-SECURITY.md) records the posture here.

Publishing to a registered repository also needs the ignored local-terms list at
`docs/control/local/terms.txt` and the clone map that
`npm run worktree -- clone dotln-angular <absolute-path>` records.

## Find things

| You want | Read |
| --- | --- |
| How the operator works, and what they refuse | [the operator record](operator/README.md) |
| The rules every session works under | [`CLAUDE.md`](../CLAUDE.md), with `AGENTS.md` as its symlink |
| What runs next | [the sequence](planning/sequence.md) and [the work-order index](work-orders/README.md) |
| DotLn-Angular's outcome and house rules | [WS-001](workstreams/WS-001-dotln-angular.md) |
| How to work in DotLn-Angular | [its repository profile](repositories/dotln-angular.md) |
| What was decided and why | [the decisions index](lineage/decisions-index.md) and the [planning documents](planning/README.md) |
| Each order's evidence | [`docs/evidence/`](evidence/README.md), [`docs/verifications/`](verifications/README.md) and [`docs/final-reviews/`](final-reviews/README.md) |
| The machine and harnesses this runs on | [the environment truth](discovery/environment.md) |
| Every other document root | [the docs index](README.md) |
| The kit's operating guide | [the execution guide](product/07-execution-guide.md) and [the playbook](PLAYBOOK.md) |

## How a change lands

1. A planning pass, opened with `planning:` on clean `main`, files orders into the
   sequence, and an independent refuter judges them before any can run. The pass
   opens its own pull request.
2. `npm run worktree -- start WO-NNN docs/work-orders/<file>.md` from `main` creates
   the order's worktree and activates it.
3. A session in that worktree takes `resume: next` to build, `resume: verify` to
   verify independently and `resume: final review` to review and publish. A failure
   goes to `resume: fix` in the same worktree.
4. The operator reads the pull request and merges it with a merge commit.
5. A session on `main` takes `resume: release close`.

The operator runs steps 2 and 4 and opens each session; a session never pushes to
`main`, merges, or changes a repository setting. Commits are conventional and in the
present imperative. This repository's pull-request titles are a gitmoji and the
subject, with no conventional type.

`analysis:` pauses a session for diagnosis and direction, and `operator override:`
suspends the gates for authorized recovery. Either prefix plus `off` ends it, and
both work whatever state the repository is in.

## Close a release

An order that changes this repository declares a patch, minor or major
`Release classification`. `npm run release -- prepare --local` assigns the next
version above this instance's own tags, in the order's heading and in the root
`README.md`'s release block, which holds that one line and which the release surfaces
check. The operator merges, and `resume: release close` runs the helper that creates
the annotated tag and the GitHub Release. Releases are named `Launchpad vX.Y.Z`.

A target order records no release here. DotLn-Angular's own releases are named
`DotLn Angular vX.Y.Z`, and [its profile](repositories/dotln-angular.md#release-close)
describes them.

## Versions, provenance and recovery context

[`UPSTREAM.md`](../UPSTREAM.md) names the core commit and tag this kit came from, and
`KIT-MANIFEST.json` hashes every kit file. `node scripts/launchpad.mjs verify` checks
the kit against that manifest.

A planning pass takes the latest starter first, through an update pull request the
operator merges, and `node scripts/launchpad.mjs update --finish` completes it on
clean `main`. Editing a kit file is choosing to fork it: every later update refuses
that file while it differs from both its manifest hash and the incoming kit.

The root `README.md` is a kit seed, so an update merges into it. It changes here only
through the release line above, which keeps those merges clean.

## References

- The root [`README.md`](../README.md): the starter's directions, which cover first
  steps, planning, releases, what runs here, kit and instance files, taking updates,
  instance actions, cleanup and retention, and document quality.
- [`docs/product/08-publication-compiler.md`](product/08-publication-compiler.md): the
  publication contract the reviewer cites.
- `LICENSE`, `LICENSE-docs` and `NOTICE`: the license files the kit carries.
