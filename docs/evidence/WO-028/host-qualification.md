# WO-028 host qualification

Executor observation, 2026-11-04: Codex CLI 0.166.0, gpt-6-astra, xhigh, from codex-session-readback. Physical cwd and Git root were checked for both the launchpad and target. Canonical dispatch reserved the launchpad writer; the parent is the only writer of both worktrees. Native Codex tool calls are unhooked; no hook-level confinement is claimed.

Authors use native spawn_agent with fork_turns none, gpt-6.1-sol at max. Each gets a separate copy without Git metadata in session scratch, with only target source, public repository documentation, its rows and the author brief. No credentials, local control files or private configuration are copied. Authors start no gates, tests, installs or descendants. The executor copies the deliverables by assigned slug and runs their tests in the target. These are procedural limits under the host permissions, not a claimed sandbox boundary.

The session uses project browser tests and fresh browsers launched for the production walkthrough. No operator browser profile or desktop control is used.

`npm ci` completed against the existing lockfile. `release prepare --local` reported that the target order records no release and changed no files. No commit, push, pull request or publish invocation is part of this executor dispatch; the later lifecycle roles own those actions.

Worker counts and token-source boundaries are recorded in [fan-out.md](fan-out.md). The host's harness did not observe the first three native launches, so the explicit count is authoritative for admission and the smaller harness count is not spare capacity.
