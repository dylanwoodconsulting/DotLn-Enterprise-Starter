# Executor host

The 2026-11-19 UTC execution used the order's two registered worktrees on macOS arm64, Node 26.9.0 and Chromium under Playwright MCP. Each physical working directory matched its Git root. The launchpad and target both used the wo-037 branch. Canonical status named the order and the dispatch reserved its writer. The target's HEAD, main and fetched origin/main matched the pinned WO-036 merge at the opening base check.

The session readback identified Codex CLI 0.170.0, gpt-6.2-astra, selected effort max and source codex-session-readback. The persistent browser context belongs to this session. The development server and a copy of the optimized production build listened on loopback. The production copy let the same browser continue running through dependency installation and the separate test servers.

The scripted browser checks own fresh Chromium contexts. The published composition format, visible controls and fixed clock drove the walkthrough. Reduced motion held each photographed frame during resize. The screenshots contain the actual app. Transient captions used for the live demonstrations stay outside the shipped application. [Walkthrough](walkthrough.md)

## Verifier host and the draft at verified

The 2026-11-19 UTC verification ran under Claude Code 2.1.328 on the same macOS arm64 host with Node 26.9.0, in the order's two registered worktrees on `wo-037`. No Playwright MCP was attached to the session. The browser session used a headless Chromium launched through the target's Playwright 1.64.1 package against a loopback static server over the production output, and the operator's own browser was not used. Probes that needed code ran from session scratch against the target's sources, and the target tree was read again at `27e2390c6eb19f8e988e54d6545a4a0bb563ce9e` after them.

After `verification-result pass` placed the order in `verified`, the verifier ran the profile's draft form plainly from the launchpad order worktree:

```sh
node scripts/worktree.mjs publish WO-037 --target-worktree --draft --branch feat/scene-shooting --title "feat: add shooting and bullets to the soldier scene" --body-file docs/evidence/WO-037/DRAFT-PR.md
```

The hook admitted it and the host ran it. No refusal or denial reached the session. The helper pushed `feat/scene-shooting` at `58e4e9b55772cf833c919efd427260c3da030b7e` and opened draft pull request #20 on `github.com/DylanBWood/DotLn-Angular`, leaving the target worktree's HEAD and index unchanged. A read-back with `gh pr view 20 --repo DylanBWood/DotLn-Angular` showed it open, draft, on base `main` at that head. Its threads and workflow runs are the final review's to collect. No session merged, pushed `main` or published a release.
