# WO-027 VER-001 reproduction: the launchpad repository name

Observed on 2026-11-06 by the verifier of `resume: verify`, at target tree
`a0dd5f8e034b425fd1c0765ae50f12822e20bdf9` (base
`48c7f8e6916692bca833c4985e2cf95978ab2c06`). Each command ran once, by itself.
`<target worktree>` is the order's registered DotLn-Angular worktree and
`<launchpad worktree>` its launchpad order worktree.

## The two candidate sentences

```sh
git -C <target worktree> grep -n "DylanBWood/DotLn-Instance"
```

```text
docs/dev-reference/README.md:71:| `docs/dotln` | Order and review records filed verbatim at final review; their relative links resolve in the launchpad, `DylanBWood/DotLn-Instance`, at the recorded launchpad commit |
docs/dev-reference/architecture/catalog.md:365:`DylanBWood/DotLn-Instance`, `docs/evidence/WO-022/design/`. A flow whose example runs offers a switch between Flow and Marbles, ...
```

Neither name appears at the base. The executor's
[WO-027-D003](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d003-align-the-standing-instructions)
chose the name; its evidence lists no source for it.

## The named repository does not exist

```sh
gh api user --jq .login
gh repo view DylanBWood/DotLn-Instance --json nameWithOwner,visibility
```

```text
DylanBWood
GraphQL: Could not resolve to a Repository with the name 'DylanBWood/DotLn-Instance'. (repository)
```

The query ran as the account that would own that repository, so a private
repository of that name would have resolved.

## Where the launchpad and its design records are

The launchpad order worktree's `origin` remote names
`dylanwoodconsulting/DotLn-Enterprise-Starter`, and `upstream` names the kit.
[WO-010](../../work-orders/WO-010-protect-main-both-repositories.md), the order
that protected `main` in "both repositories", records the launchpad repository
by the same name.

```sh
gh repo view dylanwoodconsulting/DotLn-Enterprise-Starter --json nameWithOwner,visibility,isFork
gh api repos/dylanwoodconsulting/DotLn-Enterprise-Starter/contents/docs/evidence/WO-022/design --jq '.[].name'
```

```text
{"isFork":true,"nameWithOwner":"dylanwoodconsulting/DotLn-Enterprise-Starter","visibility":"PUBLIC"}
comparisons.md
rejected-implementations.md
round-01
```

The design-record path the catalog names exists in that repository. In this
session the operator stated that `DotLn-Instance` is only the name of their
local folder, chosen because an enterprise-starter checkout already existed
(paraphrased; the message is not quoted). The name in the two sentences was
therefore taken from a local directory, not from the repository.

The private local-terms list was checked against both repository names and
the design path; no line matched.

## What a reader meets

A reader of `catalog.md` who follows the design-record pointer, and a reader of
the developer reference who looks for where a filed record's relative links
resolve, are sent to a repository that does not exist. Every Markdown link in
`catalog.md` resolves (seven of seven, anchors included). The pointer is a
repository name in code text, so the order's grep and link checks cannot see it.
