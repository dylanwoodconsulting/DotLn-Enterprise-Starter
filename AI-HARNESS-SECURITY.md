# AI harness security baseline

Seeded once by the kit export and owned by this instance. This is the operator's
dated posture for each AI coding harness used with this launchpad. The repository
does not install or enforce these settings; the record is what a session and a
reviewer check against. Re-check vendor documentation and local behavior after
upgrades, because names, defaults, precedence and sandbox boundaries change.

**Current operating note:** 2026-10-30; Claude Code 2.1.314, Codex CLI 0.166.0 and
Copilot CLI 1.0.94 checked locally. No host sandbox confines a session here: the
confinement probe reports `inForce: false` under Claude Code, and Codex runs with
full access by the operator's configuration. The kit's hooks and role text, host
permission rules and each harness's approval mode are what bound a session. The
lock probe acquired and released the kernel lock twice.
[The environment truth's current readings](docs/discovery/environment.md#current-readings)
hold the values and its labels apply here; this file says what they mean for a
session's posture, and where a date here is older, the readings win.

## Invariant

Discovering a credential, host, open port, connector or capable tool is not
authority to use it. Repository exploration stays inside the requested project
unless the operator explicitly expands scope. Sandbox controls are a backstop
for that judgment rule, not a replacement for it.

## Harnesses in use

Roles are read from the control records' attestations.

| Harness | Provider | Version checked | Roles using it | Sandbox and approval mode |
| --- | --- | --- | --- | --- |
| Claude Code | Anthropic | 2.1.314 | every final review, and executors and verifiers alongside Codex | observed: `permissions.defaultMode` `auto` with deny rules in the user and project layers, and the generated hooks. User settings enable the sandbox; the probe finds it not in force. |
| Codex CLI | OpenAI | 0.166.0 | most executors, and some verifiers | observed: user config `approval_policy = "never"` and `sandbox_mode = "danger-full-access"`. Documented locally: the kit's 0.153.4 probe saw no project hook fire, so role text carries most duties (`CLAUDE.md`); untested at 0.166.0. |
| Copilot CLI | GitHub | 1.0.94 | none recorded | observed: installed, with no sandbox key in its user settings; its approval mode in a run here is untested. |

Model names are not additional harnesses; they inherit the permissions of the
harness that launches them. Browser, web-search, plugin, app, MCP and other
connectors can have separate permission and network boundaries that neither a
shell sandbox nor this record governs automatically.

## Settings locations

| Harness | User settings | Project settings | Local, ignored settings |
| --- | --- | --- | --- |
| Claude Code | `~/.claude/settings.json` | `.claude/settings.json` (generated) | `.claude/settings.local.json` (the main checkout only) |
| Codex CLI | `~/.codex/config.toml` | `.codex/config.toml`, `.codex/hooks.json` (generated) | `.codex/rules/`, written for an order that opts into literal host rules |
| Copilot CLI | `~/.copilot/settings.json` | reuses the Claude Code hook registration | none found |

Which layer each harness actually loaded, as observed:

- **Claude Code** loads all three layers: the project's hooks fire, the user layer
  sets the model, and in the main checkout the local layer holds 14 allow rules and
  `sandbox.enabled: false` against the user layer's `true`. Which layer wins that
  disagreement is ambiguous. The probe found the sandbox not in force in the main
  checkout, which matches local winning, but it finds the same in a linked worktree
  that has no local file, where only the user layer's `true` applies. The cause is
  unobserved.
- **Codex CLI** loads its user configuration; the project's `config.toml` holds one
  comment line. Its project hooks are untested at this version.
- **Copilot CLI** applied a persisted effort at the 2026-10-14 inspection; its
  user-versus-project precedence is untested.
- **No managed layer** was found for Claude Code or Codex at their documented
  locations, so nothing here overrides these layers. Copilot has no managed location
  documented locally.

## What stays out of this file

No credentials, hostnames, account identifiers, internal service names, or
policy text copied from an employer or a managed host. Describe the posture a
session runs under; do not describe infrastructure.

## Re-check log

| Date | Harness | Version | What was re-checked | Result |
| --- | --- | --- | --- | --- |
| 2026-10-14 | Claude Code, Codex CLI, Copilot CLI | 2.1.299, 0.162.1, 1.0.94 | WO-001's bounded inspection, in [the environment truth](docs/discovery/environment.md) | sandbox not in force; lock acquired |
| 2026-10-30 | Claude Code, Codex CLI, Copilot CLI | 2.1.314, 0.166.0, 1.0.94 | settings layers by key name, and the confinement and lock probes in a linked worktree (WO-025) | sandbox not in force; lock acquired and released twice; no managed layer found |
