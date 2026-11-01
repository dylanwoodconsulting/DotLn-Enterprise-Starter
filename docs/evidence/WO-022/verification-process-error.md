# Critical verification process error

**Severity:** CRITICAL — highest process-error severity.
**Date:** 2026-11-01.
**Responsible phase:** WO-022 independent verification, VER-001.
**Disposition:** native computer interaction stopped; its observations are excluded from acceptance evidence. Verification must use Playwright in an isolated browser.

The verifier selected native computer automation without asking the operator. It inventoried running applications, selected the operator's Chrome, opened a new Chrome window, navigated to the locally served production build, opened DevTools, changed the emulated viewport and clicked catalog controls. This used the operator's desktop and existing browser profile. The operator had requested work-order verification and had not authorized native desktop control. The operator explicitly rejected this action and directed that the error receive the highest critical severity.

The cause was the verifier's tool choice: it treated authorization to verify the application as authorization to operate the operator's computer. It should have used Playwright tooling in an isolated browser. The absence of a dedicated Playwright MCP tool in the exposed tool inventory did not authorize substituting native desktop automation.

The native interaction produced no filed screenshots and completed no acceptance criterion. All observations from it are inadmissible as verification evidence. No implementation was edited. The verifier stopped its local production server through its terminal session after the correction. It made no further native UI call, including to close or alter the Chrome window it had opened.

Recovery: preserve the worktrees; run browser verification through Playwright with a fresh, isolated browser context; record only that independently repeated walkthrough. Native computer interaction requires explicit operator authorization. This process failure remains recorded even if the product later passes verification.

The supporting record is this session's `mcp__cua_repl.js` calls and the terminal completion of the stopped server, session 44900, reporting `stopped by gate request`. WO-022-D029 records the decision and its follow-up.
