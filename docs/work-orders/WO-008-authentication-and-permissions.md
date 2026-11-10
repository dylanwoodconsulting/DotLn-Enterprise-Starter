# WO-008 — Authentication and permissions for DotLn-Angular, legitimate from the Angular side: `auth` with an OpenID Connect authorization-code-with-PKCE client behind a port, in-memory token handling with single-flight refresh, expiry and invalid-token paths, the auth and permission stores, route and feature permission checks from a declared adjacency list, the mocked identity provider through MSW, and the failure-case matrix in unit and e2e tests

**Model:** any capable model; state the model and effort actually run
(07-execution-guide.md §Model-specific notes).
**Effort:** executor xhigh; verifier xhigh; reviewer xhigh.
**Track:** delivery
**Release classification:** none; a target order records no launchpad release.
**Repository:** dotln-angular @ eb9d227483e30164105da077f50673789d1e5c9f
**Target release classification:** minor
**Target release notes:** reviewed
**Cost:** adds `libs/shared/auth` with its kit and, in its `testing` entry,
the mocked identity provider's MSW handlers (whose development signing key
pair is generated when the mock starts and is never committed);
`libs/dotln/mock-idp` for the mock's two development-only pages; the
`authHttpEvents` and `sessionEvents` groups and `errorEvents.security`;
guards, the permission directive and the header's account link; the
`/login`, `/auth/callback`, `/denied` and `/account` pages in the shell;
`routePermissions`, four `BasePaths` members and the `RouteId` map in
`NavigationStore` (WO-007-D019 item (a)); about 60 source files, an
estimate (WO-007, the order this extends, changed 175 files outside `docs/`
at its merge `2ab4f28`, 106 of them TypeScript); adds one OpenID Connect
client library to `dependencies` and `jose` (development signing in the
mock) to `devDependencies`.
Removes nothing. Wall-clock: about 8 to 12 hours of executor work plus the
design rounds and the fixed cycle, an estimate; unknown until run. Context
bytes: the cited launchpad documents measure about 210 KB at this pass
(WS-001 76 KB, the repository profile 49 KB, the operator record 30 KB,
this order 54 KB) and the target's `state-rules.md`, `component-rules.md`
and `events-and-state.md` 19 KB, plus the client library's documentation,
unknown until run. Commands added in the target: none. Tokens: unknown
until run. Steps: 19. Re-mints: none. Refutations paid: every planning
receipt from 001 to 025 names this order (`grep -l WO-008
docs/planning/refutations/*.md`), and this pass's receipt judges this
amendment.
**Nomination provenance:** the 2026-10-18 angular-workstream planning pass
([planning document](../planning/passes/angular-workstream-2026-10-18.md) §5 and §8),
on the operator's direction of 2026-10-17 (ignored intake capture, SHA-256
`4f14c6c09512576abfd701335f4dd8a347694ff23785724422cb8d943b5d67aa`),
paraphrased: permissions enforced by deterministic conventions (a state
machine or adjacency lists) over routes and features, security first; a
mocked token and identity provider with a legitimate Angular side; every
failure case covered (errors, timeouts, expired and invalid tokens, how tokens
are stored); and authentication around the third week of a ten-pull-request
foundation. Planner-synthesized. Opaque identifier, not a priority. Clean-room screen:
public standards (RFC 6749, RFC 7636, OpenID Connect Core) and public
packages. Amended by the 2026-10-18 main-rules planning pass
([planning document](../planning/passes/main-rules-and-platform-items-2026-10-18.md)
§6 D5, D7 and §8.1): the `--draft` route, the final-review obligation and
the repairs of receipt 001's known issues.
**Depends on:** WO-007 merged (hard: the event tiers, interceptors, stores and
MSW this order extends; merged on 2026-10-24 as DotLn-Angular #5, `2ab4f28`,
released as `DotLn Angular v0.2.0`). No other order is required: this order
follows the two scene orders in the sequence, in the first lane beside
WO-045, whose surface (`libs/features/tools`, the study catalogs and the
scene inspector's link to a study) this order does not touch. Amended by the 2026-10-21
UI planning pass ([planning document](../planning/passes/ui-planning-2026-10-21.md)
§6 D1 and D4): the release header, the node-spelled draft publish and the
board's path enum. Amended by the 2026-10-23 standard pass
([planning document](../planning/passes/standard-pass-v0-93-0-2026-10-23.md) §6
D4): the publication rules of starter v0.91.0, the reviewed release notes
and the plan-gate carry-in.
Amended by the 2026-10-24 standard pass
([planning document](../planning/passes/mining-run-orders-2026-10-24.md) §6 D4 and
§9): the plan-gate carry-in closed by starter v0.94.0 (update #23), the
record-path advisory of that starter, and the order's place in that day's
sequence. Amended by the 2026-10-24 second pass
([planning document](../planning/passes/standard-pass-v0-96-1-2026-10-24.md) §6 D4): the base line's reading under starter v0.96.1 (core WO-230), whose target publish describes the change from the merge base of the subject and the target's `main`; the record-path advisory
closed at v0.96.1; and receipt 008's known issues (the storage assertion over
issued tokens, the signing key never committed, the provider swap not
exercised). Amended by the 2026-10-25 pass ([planning document](../planning/passes/standard-pass-v0-99-0-2026-10-25.md)
§6 D4): receipt 009's known issues (the storage grep's scope, the public
sub-app routes and the gated `/account` page, a production build without a
provider, `jose` as a development dependency, the refutations paid) and the multi-project check form of WO-013-D005. Amended by the 2026-10-26 pass ([planning document](../planning/passes/acceptance-by-use-2026-10-26.md) §6 D9): rule 24's acceptance-by-use criterion (criterion 8) and the walkthrough, and receipt 010's items: the at-rest probe covers IndexedDB, Cache Storage and cookies as well as web storage (its item (b)), and the matrix gains a page reload during a session (c). Amended by the 2026-10-28 pass ([planning document](../planning/passes/standard-pass-v0-100-0-2026-10-28.md) §6 D6 and D14): receipt 011's items (the walkthrough and the e2e run on the served `mocked` configuration build while criterion 5's production grep stands, its item (a); criterion 5 greps the mock's one marker string and the key identifier rather than endpoint paths, (b)), the `/account` page as prose rather than a key-value list (WS-001 rule 24 and G6), and a one-line design brief under rule 25. Amended by the 2026-11-09 pass ([planning document](../planning/passes/standard-pass-v0-122-1-open-orders-rejudged-2026-11-09.md) D4): the base set to `eb9d227` with WO-007 the only dependency and the order first of the road orders; the observed gap re-read at that base; the client verifies the ID token's signature through the library chosen at step 2 and the API owns the access token's, everywhere in the text; the references the target does not bear out corrected (a nested `BoardPaths`, a `home` project, `navigate` with a `BasePaths` member under a one-member `RouteId`, now a step that takes WO-007-D019 item (a), the handlers' place, pages `type:auth` may not hold, and the app as it would be after WO-013 to WO-016); the reload row, criteria 1, 3, 4 and 8 and the walkthrough written for a mock that runs in the page; criterion 1's file list read with `git status`; the Objective as the operator's session (rule 24), the first pair for the three pages with the deferral route in a new criterion 7, the gate criterion now 9 (rule 25), and the walkthrough at the operator's sizes (rule 29).
**Workstream:** WS-001

<!-- dotln-dependencies:start -->
[
  {
    "workOrderId": "WO-007",
    "relation": "hard",
    "reason": "the events, interceptors, stores and MSW wiring this order extends; merged on 2026-10-24 as DotLn-Angular #5"
  }
]
<!-- dotln-dependencies:end -->

**Cites (read these sections):** `docs/workstreams/WS-001-dotln-angular.md`
(house rules 2, 5, 8, 9, 10, 11, 15, 16, 17, 19, 21, 24, 25 and 29; G2, G6
and §Design direction); `docs/repositories/dotln-angular.md`;
`docs/operator/README.md`; the target's `docs/ai-reference/state-rules.md`,
`component-rules.md` and `docs/dev-reference/architecture/events-and-state.md`;
the `depConstraints` of the target's root `eslint.config.mjs`; WO-007-D019 in
the target's `docs/dotln/evidence/WO-007/decisions.md`; the chosen client
library's documentation at the installed version; the OAuth 2.0 for
Browser-Based Apps best-current-practice draft (IETF) for the storage and
refresh rules this order applies.

**Objective:** (the operator's session, WS-001 rule 24) the operator opens
`/account` in the served app and arrives at `/login` instead, which says in
one sentence that the page needs a sign-in and offers one button. They press
it, meet the mocked provider's sign-in page, choose its default user and come
back to `/account`, which tells them in prose who is signed in, what they may
do, one sentence per permission, and when the session expires; the header now
carries a link to the page. They reload and are asked to sign in again,
because the session lived only in the page's memory, and the sign-in returns
them to `/account`. With the mock's lifetime knob set short, they watch the
account page name a later expiry without any sign-in: the client refreshed
the token once. They sign in in a second tab, sign out there, and watch the
first tab return to `/login`. Signed in again, they make the next refresh
fail and are returned to `/login`, the page they were on kept for after the
sign-in. They sign in as the provider's `denied` user: the header shows no
account link, and `/account` sends them to `/denied`, which names the
permission they lack and offers a way back. What they learn is what the app
knows about them and lets them do, and that expiry, refresh and failure are
handled with no token left in the browser; what they decide is whether this
permission model is the one WO-017's `/twin` and the later gated sub-apps
build on. Under the session: an OpenID Connect authorization-code flow with
PKCE against a mocked provider, tokens held only in memory, one single-flight
refresh when a request meets an expired token, sign-out when refresh fails or
an ID token fails verification, routes and features shown only as the
declared permission model grants, a passing test for every failure case in
the matrix below, and a provider swap that changes configuration and nothing
in the Angular code.

**Observed gap (dated 2026-11-09 at `eb9d227`):** the app has no identity,
no tokens, no guards and no permission model; no `libs/shared/auth` exists,
and `package.json` lists no OpenID Connect client and no `jose`. `BasePaths`
has four members, `Board`, `Scene`, `Machinery` and `Tools`, and
`ChildPaths` has `Root`, `Catalog` and `Reading`, both in
`libs/shared/core/src/lib/paths/routes.ts`, the only path enums;
`apps/dotln/src/app/app.routes.ts` redirects the root to `/scene`,
lazy-loads the four sub-app features with no guard, and ends with the
not-found wildcard, whose page is a container of the shell
(`libs/dotln/shell/src/lib/containers/not-found-page/`). The header holds the
brand and the edition (`apps/dotln/src/app/app.ts`). `EnvironmentConfig.auth`
is typed `unknown` (`libs/shared/core/src/lib/environment/environment-config.ts`,
WO-005); every committed environment (`environment.ts`,
`environment.mocked.ts`, `environment.prod.ts`) sets it to `null`, and
`npm run env:prime` writes it from `DOTLN_AUTH` (JSON, default `null`) into
the ignored `environment.local.ts` (`tools/scripts/prime-environment.mjs`).
MSW 3.0.3 runs in the page: `apps/dotln/src/main.ts` awaits
`startMocks(() => import('./mocks/browser'))` before bootstrap when the build
constant `DOTLN_MOCKS_ENABLED` (true in the build's options and so in the
development and `mocked` configurations, false in `production` and
`configured`) and `environment.mocks` both hold, and
`apps/dotln/src/mocks/browser.ts` starts `setupWorker`, whose handlers run in
the page's JavaScript, so every page load starts them afresh.
`apps/dotln/src/mocks/handlers.ts` re-exports one list, `boardHandlers`, from
`@dotln-angular/board-data-access/testing/handlers`
(`libs/features/board-data-access/testing/src/lib/board-handlers.ts`, which
answers `GET */api/uifa-board-v1` and reads the `x-dotln-test-scenario`
header the e2e sets with `setExtraHTTPHeaders`); each library's
`src/test-setup.ts` starts an MSW server through `setupServer` from
`msw/node`.
`provideDotlnHttp()` chains `baseUrlInterceptor`, `errorInterceptor` and
`timeoutInterceptor` in a list `withInterceptors` fixes
(`libs/shared/data-access/src/lib/provide-dotln-http.ts`).
`navigationEvents.navigate` carries a `NavigationIntent` whose `route` is
`RouteId`, the single literal `'board'`
(`libs/shared/models/src/lib/app-state.ts`), and `NavigationStore` builds the
board route for every payload (`libs/shared/state/src/lib/navigation-store.ts`),
the follow-up WO-007-D019 item (a) boarded for the order that adds a second
route. `errorEvents` declares `httpFailed` and `unhandled` only. The
`type:auth` constraint of the root `eslint.config.mjs` admits `data-access`,
`events`, `models`, `core` and `util` and neither `ui` nor `i18n`, so a page
with translated text cannot live in `auth`. The e2e specs at the base
(`board`, `catalog`, `movement-labels`, `scene`, `storybook`,
`study-messages`, `sub-apps` and the `*.visual.spec.ts` files) run without a
session. No identity provider exists for this project; the operator wants
none set up yet and the operator's later choice (a hosted provider) must drop
in through configuration. `routePermissions` therefore covers every
`BasePaths` member present at the base and each one this order adds; the
sub-app members (`Board`, `Scene`, `Machinery`, `Tools`) stay public with an
empty permission list so their e2e specs need no session, the first gated
surface is this order's own `/account` page, and WO-017's `/twin` is the
first gated sub-app when it lands.

**Design:**

- Port and adapter: `AuthClient` (an abstract class in `auth`) with
  `signIn(returnTo)`, `handleCallback()`, `refresh()`, `signOut()`,
  `getAccessToken()`; one adapter over an established OpenID Connect client
  library chosen at step 2: compatible with the installed Angular 22.2.3's
  peer ranges, MIT or Apache-2.0, with the authorization code and PKCE,
  refresh through the refresh-token grant with rotation, verification of
  the ID token's signature against the provider's published keys
  (`jwks_uri`) together with its issuer, audience, expiry under a
  configurable clock skew and nonce, and a token store the adapter can hold
  in memory while the library itself keeps the transient sign-in state
  across the authorize redirect; the decision records the choice, the
  alternatives, the license and how the library verifies the signature.
  `provideDotlnAuth(config)` reads `EnvironmentConfig.auth` (`issuer`,
  `clientId`, `scopes`, `redirectPath`, `postLogoutPath`), now typed
  `AuthConfig | null`; `null` means no provider is configured, the state of
  a production build until the operator supplies one; the development and
  `mocked` environments name the mock.
- Token handling (house rule 17; the browser-based-apps best practice):
  access and refresh tokens in memory only (the store's state), never in
  `localStorage`, `sessionStorage`, IndexedDB, Cache Storage or a cookie; the
  transient sign-in state the library keeps across the authorize redirect
  (the PKCE verifier, `state` and `nonce`) is no token, and the library holds
  and clears it without house code naming a browser store; refresh-token
  rotation honored; a preemptive refresh timer at `exp - skew`; a `401`
  triggers one single-flight refresh shared by concurrent requests, then
  replay, then `signOut` on a second `401`. The client, through the library,
  verifies every ID token it receives, at the code exchange and at each
  refresh that returns one: its signature against the provider's published
  keys (the mock's at this order), its `iss`, its `aud`, its `exp` and `nbf`
  where present under the configured skew, and its `nonce`; a token that
  fails is rejected, the session is signed out and `errorEvents.security`
  is dispatched. The access token's lifetime comes from the token response,
  and its claims, where it is a JWT, are read for presentation only;
  verifying its signature is the API's duty, stated in the security document
  and not built. A `BroadcastChannel` propagates sign-out to other tabs; the
  callback route strips the code from the URL after exchange; a
  redirect-loop guard stops after two consecutive callbacks without a token,
  its count travelling with the sign-in request because each callback is a
  fresh page load.
- Session state machine in `SessionStore` (`libs/shared/auth`, app tier,
  provided by `provideDotlnAuth`): states `anonymous`, `authenticating`,
  `authenticated`, `refreshing`, `expired`, `signedOut`; transitions as an
  exhaustive typed table (`Record<State, Partial<Record<EventType, State>>>`)
  tested for every cell; `sessionEvents` (app tier) and `authHttpEvents`
  (data-access tier: `exchange`, `exchangeSuccess`, `exchangeFailure`,
  `refresh`, `refreshSuccess`, `refreshFailure`) in `events`, where
  `errorEvents` (app tier) also gains `security`.
- Permissions: `PermissionsStore` derives `roles` and `permissions` from the
  verified ID token's claims and, where the access token is a JWT, its
  claims, which shape presentation only; `routePermissions` is a declared
  adjacency list in `core` (`Record<BasePaths, readonly Permission[]>`,
  beside the path enums in `libs/shared/core/src/lib/paths/routes.ts`, where
  `BasePaths` and `ChildPaths` are the only path enums (rule 11) and a child
  route takes its base path's list; an empty list means public, and at this
  order `Board`, `Scene`, `Machinery`, `Tools`, `Login`, `AuthCallback` and
  `Denied` are public while `Account` requires `account:read`, which the mock
  grants to its default user and withholds from its `denied` user);
  `canMatch` guards (`requirePermissions(...)`) read it and return the
  redirect a refusal needs, built from `buildRoute`: `/login` with
  `returnTo` for an anonymous visitor, `/denied` naming the missing
  permission for a signed-in one; `*dotlnHasPermission` structural directive
  (a knowing directive in `auth`) hides elements, first the header's link to
  `/account` in `apps/dotln/src/app/app.ts`, which an anonymous visitor and
  the `denied` user do not see; facades expose `can(permission)` for
  feature-level checks. Navigation outside the router (the session store's
  return to `/login` with `returnTo` on refresh failure, sign-out or a
  cross-tab sign-out) dispatches `navigationEvents.navigate({ route: 'login', query: { returnTo } })`,
  so `RouteId` gains `'login'` and `'denied'` and `NavigationStore` maps each
  `RouteId` to its `BasePaths` member instead of always the board (step 4;
  WO-007-D019 item (a)).
- Interceptors (extending WO-007's chain in `provideDotlnHttp()`:
  `baseUrlInterceptor`, `errorInterceptor` and `timeoutInterceptor`, a list
  `withInterceptors` fixes today; `data-access` may not import `auth`, so how
  the two join that list, such as an option on `provideDotlnHttp` the app
  passes, is the executor's, recorded in the decisions):
  `authTokenInterceptor` attaches the bearer token to requests whose
  resolved URL is under `apiBaseUrl` only (the app's own API, mocked until
  the mining store exists; WO-007 reads no other host);
  `authRefreshInterceptor` implements the single-flight refresh and replay,
  inside the error interceptor so a `401` the refresh recovers raises no
  error notice.
- Mocked provider. It runs in the page, as the board's mock does: each full
  page load (a reload, a second tab, each redirect of the sign-in) starts it
  afresh with a new key and an empty record. Its MSW handlers live in the
  auth library's testing entry (`libs/shared/auth/testing/src/lib/idp/`,
  exported for the app's worker and the test setups through
  `@dotln-angular/auth/testing/handlers`, as
  `@dotln-angular/board-data-access/testing/handlers` exports the board's),
  and `apps/dotln/src/mocks/handlers.ts` lists them beside `boardHandlers`.
  They implement discovery (`/.well-known/openid-configuration`), `token`
  (code exchange with PKCE verification, refresh with rotation, configurable
  lifetimes and failures), `jwks` and `userinfo`. The `authorize` and
  `end_session` steps are top-level navigations, which the mock gives no
  handler, so the worker passes them through and the served app renders them
  as its own development-only routes: `/mock-idp/authorize` renders the mock
  sign-in page with the default and `denied` users, checks the PKCE
  challenge's method and redirects back to `/auth/callback` with a code, and
  `/mock-idp/end-session` redirects to `postLogoutPath`. Their components
  live in `libs/dotln/mock-idp` (`scope:dotln,type:feature`, exporting only
  `mockIdpRoutes`, rule 4), because a page with translated text cannot live
  in `type:auth`, and `app.routes.ts` adds them only under
  `DOTLN_MOCKS_ENABLED`, so they are not `BasePaths` members and no
  production build carries them; Playwright drives the sign-in page
  directly, and no `page.route` handler is needed. Because the callback is a
  fresh page load, the code carries what the token exchange checks (the
  user, the PKCE challenge, the nonce, the client, the redirect URI and an
  expiry), encoded rather than remembered. Tokens are signed with a
  development RSA key pair generated at startup
  through `jose` under a fixed key identifier (`kid`) the bundle check in
  criterion 5 names; no key material is committed to the repository, so forge
  secret scanning has nothing to match (the `kid` is a label, not a key); the handlers expose knobs (`expiresInSeconds`,
  `failNextRefresh`, `invalidSignature`, `skewSeconds`) through a test-only
  request header, as the board's handlers read `x-dotln-test-scenario`, so
  e2e and the walkthrough set them with Playwright's `setExtraHTTPHeaders`
  and a knob holds across page loads because each request carries it; the
  handlers keep the tokens they issued in the page, behind a test-only knob
  the e2e reads. The mocked endpoint paths live in one
  constants file under `idp/`, and every module of the mock, its handlers
  and its pages, carries
  the one marker string `dotln-mock-idp`, so criterion 5's production grep
  targets that marker and the key identifier rather than endpoint paths a
  client library legitimately contains. The mock's on-screen strings go
  through Transloco (rule 9).
- Routes: `/login` (anonymous shell page with the sign-in button; with
  `auth` at `null` it shows the unavailable state naming the missing
  configuration instead of the button, and the public sub-apps stay
  reachable), `/auth/callback`, `/denied`, `/account` (what the signed-in
  operator reads about their session: who is signed in, what they may do,
  one sentence per permission, and when the session expires, as prose in
  the catalog's measure and never a label-value grid, because WS-001 rule 24
  fails a page of records rendered that way and G6 never defaults to it; the
  gated surface the matrix drives); `BasePaths` gains `Login`,
  `AuthCallback` (`auth/callback`), `Denied` and `Account`. The four pages
  are containers of the shell in `libs/dotln/shell/src/lib/containers/`,
  beside the not-found page, since `type:auth` may import neither `ui` nor
  `i18n` (the root ESLint constraints, rule 15); every string on them goes
  through Transloco (rule 9), one message per permission.
- **Design brief and the first pair** (WS-001 rule 25, at the operator's
  sizes, rule 29): the login, denied and account pages use the shell's type
  scale and the catalog's reading measure (§Design direction); the login
  page is one sentence and one button, the denied page one sentence naming
  the missing permission and a way back, the account page the prose above
  with sign-out last; nothing animated at rest (G2). The first pair varies
  one feature across the three pages, where the text sits: A, in the
  reading measure at the start of the shell's content area, as the
  catalog's reading sits; B, centred in the window as one block. Both are
  built and rendered for `/login`, `/denied` and `/account` at about 2080 by
  1460 and at 360 during execution and presented as A then B with the round
  named; the operator's preference makes the next pair, content and
  usability before polish, until the operator says the process is done; a
  preferred candidate alone is not acceptance; the decisions file records
  each round's pair and pick, the rejected implementation leaves the code
  when its round is decided (its screenshots and an implementation record
  under `docs/evidence/WO-008/design/` are the history), and a decided
  choice is not relitigated for this order. The operator may instead delay
  the rounds (rule 25): the order then
  records the first pair without a pick, ships candidate A and carries the
  rounds as a follow-up its decisions name.
- Failure matrix, each a unit spec and, where the UI changes, an e2e test:
  network timeout on token exchange; `exchangeFailure` with `invalid_grant`;
  expired access token on request (refresh once, replay); refresh failure
  (sign out, `/login` with `returnTo`); an ID token with an invalid signature
  or the wrong `aud` (reject, sign out, `errorEvents.security`); clock skew
  within and beyond tolerance; two concurrent `401`s (one refresh); callback
  without `state` match (reject); redirect loop (stop after two); sign-out
  in another tab; permission denied on route (redirect to `/denied`);
  permission revoked on refresh (element hidden on next render); a page
  reload during a session: the tokens were in memory and the mock, running
  in the page, restarts with a new key and no record of the session, so no
  silent path exists at this order, and the operator returns to `/login`
  with `returnTo` and signs in again, with no token at rest before or after
  the reload (a real provider's own session, which could re-establish the
  session silently, is a later member's).
- Documents: `docs/dev-reference/security/authentication.md` (flow diagrams
  in text, storage rules and why, the signature rule (the client verifies
  the ID token's signature through the library; the API verifies the access
  token's), the matrix, why a reload ends the session while the mock runs in
  the page, how to swap the provider, and
  the statement that the server enforces authorization while client checks
  shape presentation only) and `docs/ai-reference/auth-rules.md` (imperative
  rules: tokens in memory only, attach bearer only to API URLs, never log
  tokens, permission checks through the store, client checks never the
  security boundary, mock knobs only in development and tests).

Rejected: hand-rolled PKCE and token parsing (axis: an established client
library is the legitimate choice; the port keeps it swappable); tokens in web
storage (axis: the best-current-practice forbids it for this profile);
implicit flow (axis: deprecated); role checks spread across templates (axis:
one adjacency list and one store); the mock's key and record kept in browser
storage so a session survives a reload (axis: criterion 1's at-rest probe
would find the tokens it recorded; surviving a reload is a real provider's
session, a later member's); verifying the access token's signature in the
client (axis: the API is that token's audience and the one that enforces
it); a guard that dispatches `navigationEvents.navigate` and returns
`false` (axis: a `canMatch` that returns `false` hands the URL to the next
route, the not-found wildcard; a returned redirect is the router's own
form).

Live-run surfaces at the base: the served `mocked` build
(`npx nx serve-static dotln`, which builds `dotln:build:mocked`), which the
e2e suite runs; MSW answering the board's API in the page; and the four
public sub-apps. The sign-in, the mocked provider, the gated page and the
header link are this order's and do not exist at the base.

**Deliverables:** `libs/shared/auth` with `testing` (the kits and the mock's
handlers); `libs/dotln/mock-idp`; the events; the interceptors; the stores;
the guards and directive; `routePermissions` and the `RouteId` map; the
pages and the header link; the matrix tests; the two documents;
`docs/evidence/WO-008/` with `design/` and the walkthrough.

**Execution plan:**

1. Base guard read with WO-014-D001, for WO-008: in the target clone, after
   `git fetch origin`, `git merge-base --is-ancestor <the Repository pin>
   origin/main` exits 0 (a `main` that does not contain the pin stops for a
   planning pass); the target worktree then fast-forwards to the target's
   `main`, and that integrated commit is the baseline of every later
   comparison; then the route guard and activation as WO-005 step 1.
2. Choose and install the client library (`dependencies`) under the
   Design's constraints (the installed Angular's peer ranges, MIT or
   Apache-2.0, the code flow with PKCE, refresh with rotation, ID-token
   signature verification against `jwks_uri` with issuer, audience, expiry
   under a configurable skew and nonce, an in-memory token store beside the
   library's own transient sign-in state) and `jose` (`devDependencies`);
   record the decision with the alternatives, the license and how the
   library verifies the signature. Check: `npm ls` exits 0 and
   `node -e "const p=require('./package.json');if(p.dependencies.jose)throw new Error('jose')"`
   prints nothing.
3. Generate `auth` (`scope:shared,type:auth`) with its `testing` entry, the
   commands appended to `docs/dev-reference/workspace/generator-log.md`;
   `events` gains `sessionEvents`
   (`libs/shared/events/src/lib/app/session-events.ts`), `authHttpEvents`
   (`libs/shared/events/src/lib/data-access/auth-http-events.ts`) and
   `errorEvents.security` (`libs/shared/events/src/lib/app/error-events.ts`);
   `models` gains `AuthConfig`, `Permission` and `Claims`;
   `EnvironmentConfig.auth` in
   `libs/shared/core/src/lib/environment/environment-config.ts` becomes
   `AuthConfig | null`. Check: `npx nx run-many -t test -p events models core`
   exits 0 and `npm run lint:hygiene` exits 0.
4. Routes and navigation (WO-007-D019 item (a)):
   `libs/shared/core/src/lib/paths/routes.ts` gains the `BasePaths` members
   `Login` (`login`), `AuthCallback` (`auth/callback`), `Denied` (`denied`)
   and `Account` (`account`) and a `Record<RouteId, BasePaths>`; `RouteId` in
   `libs/shared/models/src/lib/app-state.ts` gains `'login'` and `'denied'`;
   the `navigate` handler of `libs/shared/state/src/lib/navigation-store.ts`
   builds the payload's route through that record rather than always the
   board. Check: `npx nx run-many -t test -p models core state` exits 0,
   with a spec in `libs/shared/state/src/lib/state.spec.ts` that dispatches
   `navigate` for each `RouteId` and asserts the router's URL.
5. The mocked provider's handlers in `libs/shared/auth/testing/src/lib/idp/`
   (the constants file with the endpoint paths, the `kid` and the marker;
   the key pair generated through `jose` when the mock starts; discovery,
   `token`, `jwks` and `userinfo`; the encoded code; the knobs by request
   header; the record of issued tokens), exported through
   `@dotln-angular/auth/testing/handlers` with its path in
   `tsconfig.base.json` beside the board's, and served by
   `libs/shared/auth/src/test-setup.ts`. Check: `npx nx test auth` exits 0
   with handler specs for a matching and a mismatched PKCE verifier (the
   second `invalid_grant`), rotation and each knob.
6. `AuthClient` port and its adapter over the library, and
   `provideDotlnAuth`, under `libs/shared/auth/src/lib/`. Check: the adapter
   spec against the step 5 handlers passes for an exchange, an ID token
   signed outside the published keys (the `invalidSignature` knob) and one
   with the wrong `aud`, both rejected, and skew within and beyond
   tolerance; `npx nx test auth` exits 0.
7. `SessionStore` with the transition table
   (`libs/shared/auth/src/lib/session/transitions.ts`) and its exhaustive
   spec. Check: `npx nx test auth` exits 0 and the spec covers every
   state × event cell.
8. Interceptors with single-flight refresh, joined to `provideDotlnHttp`'s
   chain inside `errorInterceptor` (the joining recorded in the decisions);
   specs for the concurrency case and for a request to another origin.
   Check: `npx nx run-many -t test -p data-access auth` exits 0.
9. `PermissionsStore`, `routePermissions` in
   `libs/shared/core/src/lib/paths/routes.ts`, the guards, the directive,
   facade `can()`. Check: `npx nx run-many -t test -p core auth` exits 0
   (the multi-project form Nx parses; `npx nx test a b` runs only the first
   project, WO-013-D005).
10. Pages and wiring: the containers `login-page/`, `auth-callback-page/`,
    `denied-page/` and `account-page/` in
    `libs/dotln/shell/src/lib/containers/`, their messages in
    `apps/dotln/public/i18n/en.json`; the header's account link in
    `apps/dotln/src/app/app.ts` under `*dotlnHasPermission`; the routes and
    their guards before the wildcard in `apps/dotln/src/app/app.routes.ts`;
    `provideDotlnAuth(environment.auth)` and the interceptors in
    `apps/dotln/src/app/app.config.ts`; `environment.ts` and
    `environment.mocked.ts` set `auth` to the mock's configuration and
    `environment.prod.ts` keeps `null`. Check:
    `npx nx run-many -t test -p dotln-shell dotln` exits 0, and
    `npm run i18n:check` and `npm run lint:components` exit 0.
11. The mock's pages: generate `libs/dotln/mock-idp` (`--name=mock-idp`,
    `--tags=scope:dotln,type:feature`) with the logged command; its
    `/mock-idp/authorize` and `/mock-idp/end-session` components, exported
    only as `mockIdpRoutes`, each module carrying the marker;
    `apps/dotln/src/app/app.routes.ts` adds them only under
    `DOTLN_MOCKS_ENABLED`; `apps/dotln/src/mocks/handlers.ts` lists the
    mock's handlers beside `boardHandlers`, and `apps/dotln/src/test-setup.ts`
    serves both. Check: `npx nx test mock-idp` exits 0, and with
    `npx nx serve-static dotln` running, a sign-in through the mock in a
    browser Playwright launches lands on `/account` (recorded in the
    decisions).
12. The production build. Check: `npx nx build dotln --configuration=production`
    exits 0, criterion 5's greps for the `kid` and `dotln-mock-idp` over
    `dist/apps/dotln/browser` print nothing, and `npm run check:bundle`
    passes.
13. The first pair (A, the text in the reading measure at the content's
    start; B, centred in the window) built and rendered for `/login`,
    `/denied` and `/account` at about 2080 by 1460 and 360 and presented as
    A then B with the round named; the rounds, or the operator's direction
    delaying them; the rejected implementation removed with its record.
    Check: `docs/evidence/WO-008/design/comparisons.md` records the pair and
    `ls` lists each render it names.
14. The e2e matrix in `apps/dotln-e2e/src/auth.spec.ts` using the knobs;
    then the walkthrough: the executor performs the Objective's session in
    the served `mocked` configuration build (WO-007's configuration for e2e
    and play; the production build, which criterion 5 keeps free of the
    mock, has no provider to sign in to) in a browser Playwright launches,
    saves one screenshot per step at 360, 768, 1440, about 2080 by 1460 and
    3840 by 1620 under `docs/evidence/WO-008/walkthrough/` and writes
    `docs/evidence/WO-008/walkthrough.md` with the dated steps. Check:
    `npx nx e2e dotln-e2e` and `npm run typecheck:e2e` exit 0,
    `git status --porcelain --untracked-files=all -- apps/dotln-e2e/src`
    lists only added files (`??` or `A`), and the walkthrough files exist.
15. Documents: `docs/dev-reference/security/authentication.md`,
    `docs/ai-reference/auth-rules.md`, `conventions.md` (house rule 17), the
    two new libraries' and the testing entry's READMEs (rule 19), and the
    two documents named in `docs/dev-reference/README.md` §Find a
    convention and in `docs/ai-reference/README.md`. Check: the files
    exist; criterion 6's grep prints at least 1; `npm run i18n:check`
    exits 0.
16. Gate plain and review. Check: passing rows, no mutation.
17. Launchpad write-back: `docs/repositories/dotln-angular.md` §Find the
    implementation gains the port, the stores, the guards and directive,
    the interceptors and the mock's handlers and pages, and its sentence in
    §What this repository is for that says no guard exists is brought
    current; WS-001's §Delivery states updated by the final review. Check:
    `npm run test:docs`.
18. Commit with messages that carry no launchpad identifier (`WO-008`,
    `FUP-…`, `VER-…`), because starter v0.91.0 refuses them in a target's
    branch, commits, title and body; `implementation-ready`; handoff per
    §Discipline. After the session that records `verification-result pass`
    has done so, that session runs, from the launchpad root, as a plain
    command with no pipe, redirect, directory change or variable prefix,
    `node scripts/worktree.mjs publish WO-008 --target-worktree --draft --branch feat/authentication-and-permissions --title "feat: add authentication and permissions" --body-file <reviewed path>`
    (the node spelling is the only form the kit admits for a registered
    target since starter v0.87.0), which commits from the tree without
    moving `HEAD`, pushes the branch and opens the draft pull request. A
    `vocabulary.review` refusal prints the composed body's digest: the
    session reads the flagged lines and re-runs the same command with
    `--confirm-terms sha256:<digest>`; a `refuse:` private term or a
    launchpad identifier is repaired, never confirmed. The session records
    the hook's admission row and the host's decision in
    `docs/evidence/WO-008/host-qualification.md`; if the host's classifier
    denies the admitted call, the operator's `!`-prefixed run of the same
    command is the recorded fallback.
19. At final review: read the draft's threads and workflow runs into
    `docs/evidence/WO-008/preview-pr.json` and route each item, write
    `docs/final-reviews/WO-008/RELEASE-NOTES.md` (the five sections the
    kit renders on the target Release), `target-records`, then the same
    publish command without `--draft`, which
    force-pushes with lease against the recorded draft head and reuses the
    branch and the pull request. No work-in-progress commit, no force-push
    by hand, no manual close.

**Preflight:** in the target worktree `npx nx format:check`,
`npx nx run-many -t lint test build`, `npm run typecheck:e2e`,
`npm run lint:fixtures`, `npm run lint:components`, `npm run lint:hygiene`,
`npm run i18n:check`, `npm run check:bundle`, `npx nx e2e dotln-e2e`; in the
launchpad order worktree `npm run test:docs`; then the target gate plain and
review once each.

**Acceptance criteria (all required)**

1. `grep -rlE "localStorage|sessionStorage" libs/shared/auth/src --include='*.ts' | grep -v spec`
   prints nothing, and
   `grep -rlE "localStorage|sessionStorage" apps/dotln/src libs/dotln --include='*.ts' | grep -v spec`
   prints nothing (it prints nothing at `eb9d227`, so a file it names is
   this order's, whether or not the candidate is committed); `grep -rc "console.log" libs/shared/auth/src --include='*.ts' | grep -v ":0"`
   prints nothing; and an e2e step after the sign-in, and again after a
   reload, reads every key of `localStorage` and `sessionStorage`, every
   object store of every IndexedDB database, every Cache Storage entry and
   every cookie, and asserts that no value holds a JWT (three dot-separated
   base64url segments whose first decodes to a JSON header naming `alg`)
   and that no value equals or contains any token the mocked provider issued
   in that session. The handlers keep the tokens they issued behind a
   test-only knob, which the e2e reads before the reload, since the reload
   restarts the mock with an empty record; the check covers opaque refresh
   tokens and the client library's own stores as well as house code, and
   admits the library's transient sign-in state, which holds no token.
2. `libs/shared/auth/src/lib/session/transitions.ts` declares the transition
   table for the six states and `transitions.spec.ts` asserts every state and
   event pair (the spec iterates the table and the event list, so an
   unhandled pair fails); `npx nx test auth` exits 0.
3. Unit specs exist and pass for each matrix row: timeout on exchange,
   `invalid_grant`, expired-then-refresh-then-replay, refresh failure to
   sign-out, an ID token with an invalid signature, an ID token with the
   wrong audience, skew within and beyond
   tolerance, two concurrent `401`s producing one refresh request (asserted
   through the MSW handler's call count), `state` mismatch, redirect loop
   stop, cross-tab sign-out, permission denied on a route (the guard's
   redirect to `/denied`), permission revoked on refresh (the directive's
   element gone on the next render), and a page reload during a session (a
   fresh start is `anonymous` with no token at rest, and the `/account`
   guard redirects to `/login` with `returnTo`);
   `npx nx run-many -t test -p auth core state` exits 0.
4. `core` exports `routePermissions` covering every `BasePaths` member
   (a spec asserts the record's keys equal the enum's values, that
   `Board`, `Scene`, `Machinery`, `Tools`, `Login`, `AuthCallback` and
   `Denied` map to an empty list and that `Account` maps to
   `account:read`), guards use it, `NavigationStore` navigates each
   `RouteId` to its own path (WO-007-D019 item (a)), the e2e specs present
   at the base run unchanged without a session
   (`git status --porcelain --untracked-files=all -- apps/dotln-e2e/src`
   lists only added files, each line's status `??` or `A`), and
   `npx nx e2e dotln-e2e` includes: sign in
   through the mocked provider and land on `returnTo` at `/account`;
   `/account` as the `denied` user redirecting to `/denied`; the header's
   account link, the element `*dotlnHasPermission` hides, shown to the
   default user and absent for the `denied` user; a reload at `/account`
   returning to `/login` with `returnTo`, and a sign-in from there landing
   back on `/account`; token expiry during use followed by a transparent
   refresh; refresh failure returning to `/login`.
5. The production build contains no mock provider code:
   `npx nx build dotln --configuration=production` exits 0, and for the
   development signing key's identifier (the `kid` constant) and for the
   mock's marker string `dotln-mock-idp` (both listed in the evidence
   README), `grep -rl "<value>" dist/apps/dotln/browser` prints nothing (the
   mock's endpoint paths are not grepped, because a client library
   legitimately contains such paths; every mock module carries the marker
   instead); the bearer token is attached only to requests under
   `apiBaseUrl` (a spec asserts a request to another origin carries no
   `Authorization` header); `jose` is listed under `devDependencies` and not
   under `dependencies` (the step 2 check prints nothing); and with `auth` at
   `null` the four sub-app routes' guards admit an anonymous visitor and the
   login page renders the unavailable state (two specs assert it).
6. `docs/dev-reference/security/authentication.md` states the storage rule,
   the refresh rule, the signature rule (the client verifies the ID token's
   signature through the library; the API verifies the access token's), the
   matrix, why a reload ends the session while the mock runs in the page,
   the provider swap and that the server
   enforces authorization while client checks shape presentation only
   (`grep -c "server enforces authorization" docs/dev-reference/security/authentication.md`
   is at least 1), and `docs/ai-reference/auth-rules.md` exists.
7. **Design (WS-001 rule 25).** `docs/evidence/WO-008/design/comparisons.md`
   records the first pair (A, the text of `/login`, `/denied` and `/account`
   in the reading measure at the start of the content area; B, centred in
   the window) with its renders of the three pages at about 2080 by 1460 and
   at 360 under `docs/evidence/WO-008/design/` (`ls` lists each file it
   names), and either every later round with its pick, the decisions file
   recording the operator's word that ended the rounds and naming the
   removed candidate's files, `ls` on each printing nothing; or the
   decisions file recording the operator's direction that delays the rounds, the pair standing without a pick, the
   shipped pages being candidate A, and the decisions file naming the
   follow-up that carries the rounds.
8. **Use (WS-001 rule 24).** The verifier performs the Objective's session
   in the served `mocked` configuration build (`npx nx serve-static dotln`;
   criterion 5 keeps the mock out of the production build, so the
   walkthrough runs on the configuration that carries it), in a browser
   Playwright launches, a script or the Playwright MCP, where the mock's
   knobs are set by request header as the e2e sets them: open `/account`
   anonymously and be sent to `/login`; sign in as the default user, land
   back on `/account`, read as prose who is signed in, what they may do and
   when the session expires, and find the header's account link
   (`grep -rlE "<dl|dotln-key-value-list" libs/dotln/shell/src libs/shared/auth/src apps/dotln/src`
   prints nothing); reload, be returned to `/login` with `returnTo`, sign in
   again and land on `/account`; with the lifetime knob set short, watch the
   account page name a later expiry with no sign-in; sign in in a second
   tab, sign out there and watch the first tab return to `/login`; sign in
   with the lifetime knob short and the refresh-failure knob set and, when
   the refresh runs, land on `/login` with `returnTo`; sign in as the
   `denied` user, find no account link in the header, open `/account` and
   land on `/denied`, which names the missing permission. The VER report carries a `## Walkthrough` section
   with the dated steps and names a screenshot of each step at 360, 768,
   1440, about 2080 by 1460 and 3840 by 1620 under
   `docs/evidence/WO-008/walkthrough/` (`ls` lists each named file), reads
   every page at about 2080 by 1460 and at 3840 by 1620, where a UI issue
   fails this criterion (rule 29; an issue at another size is a boarded
   follow-up), and states in the verifier's own words what each page said at
   each step. The criterion is met only when every step completed and that
   statement is present.
9. `node scripts/target-gate.mjs WO-008 --review` records a passing row for
   every declared command with no tracked-byte mutation, and
   `npm run test:docs` passes in the launchpad order worktree; the Preflight line ran before the first full gate.

**Evidence gate:** the gate rows, the recorded command outputs, `docs/evidence/WO-008/README.md` (naming the `kid` and the marker), `design/` with `comparisons.md` and the first pair's renders, `docs/evidence/WO-008/walkthrough.md` with its screenshots, and `docs/evidence/WO-008/host-qualification.md`.

**Known issues and carry-ins:** Carried from the 2026-10-30 pass's reading of planning receipt 014, its item (d): when the mocked provider errors the public sub-apps stay reachable, because their routes carry an empty permission list and need no session (criterion 4's unchanged e2e specs and criterion 5's `auth` at `null` show it); reopened if the failure matrix shows an ungated sub-app unreachable. Planning receipts 012 and 015 each recorded this order's place behind the sub-app orders and the batches as a known issue against the purpose's critical path; the 2026-11-09 pass answers it by moving this order ahead of everything but the scene orders (D2 and D16). The base is `eb9d227`, WO-039's merge; step 1's ancestor check and fast-forward admit a later `main`, such as the scene orders' merges or WO-045's from the lane beside this order. From the 2026-11-01 pass's criteria adversary (its R1) and the 2026-11-01 second pass's own reading, carried into this text by that second pass: step 1's base guard is an ancestor check and the fast-forward, because the inherited exact-tip guard stops an order whose pin is behind `main`; and criterion 1 reads its file list from the working tree, now with `git status --porcelain`, which names no revision, because `HEAD` is the base until the final review commits, so the earlier `merge-base..HEAD` list was empty at verification and its grep checked nothing. Starter v0.94.0 (update #23 of 2026-10-24) carries
core's fix for the plan gate's moved-record reader, so criterion 9's
`npm run test:docs` clause is judged as written and no waiver is carried.
Starter v0.96.1's plan gate no longer advises on this order's own launchpad record paths (core's answer of 2026-10-24, item 1); they stay as the kit names them and the publish command's body file must not name them. From receipt 008 (the 2026-10-24 pass's refutation), carried
into this text by the 2026-10-24 second pass: criterion 1's storage assertion
now covers opaque tokens through the mock's record of what it issued; the
development signing key pair is generated at the mock's start and never
committed; and the objective's provider swap is documented (criterion 6) but
not exercised by a second provider configuration, which a later member with a
real provider pays for. From receipt 009 (the second 2026-10-24 pass's
refutation), carried into this text by the 2026-10-25 pass: criterion 1's
app-side grep runs over the files this order changes, so a storage helper
an earlier member placed in the app is not this order's failure; the
sub-app routes stay public and `/account` is the gated surface, so no
earlier e2e spec gains a sign-in and WO-018's toy shelf under Tools stays
public (the design, criterion 4); a production build with no provider keeps
the public sub-apps and shows the unavailable state at `/login`, with `jose`
in `devDependencies` (criterion 5); a check over two projects uses the
`run-many` form. WO-007's
`StorageToken` binds the real `localStorage` inside
`libs/shared/data-access`, the one place at the base that names browser
storage, so criterion 1's grep over `libs/shared/auth/src` and the files
this order changes stays clean by construction. From receipt 011 (the
2026-10-26 pass's refutation), carried into this text by the 2026-10-28
pass: the walkthrough and the e2e run on the served `mocked` configuration
build while criterion 5's production grep stands (its item (a)); criterion 5
greps the mock's marker string and the key identifier, not endpoint paths
(b); eleven receipts have named this order before its activation, and its
text changes again only on a new observation, which these two clauses and
the account page's form are (c). The account page reads as prose because
rule 24 fails a page of label-value lists, and the order carries a one-line
brief under rule 25 (the 2026-10-28 pass, D14), now a brief and a first
pair for the three pages. The client library is
chosen at step 2 with a recorded decision; the client verifies the ID
token's signature through it, and verifying the access token's signature is
the API's duty, stated and not built; a real provider is a later member.
Which libraries meet step 2's constraints at Angular 22.2.3 is unknown until
run; one that verifies no ID-token signature, or that cannot hold its tokens
in memory while it keeps its transient sign-in state across the redirect,
does not qualify. The mock runs in the page (MSW's `setupWorker`), so a
reload, a second tab and each redirect of the sign-in start it afresh with
a new key and an empty record: its code carries what the exchange checks,
the e2e reads the issued tokens before a reload, a reload ends the session,
and the cross-tab step signs in the second tab on its own. Whether
`crypto.subtle` reaches `jose` and the library under the auth library's
jsdom test environment is unknown until run; if it does not, its test setup
binds Node's `webcrypto` as `vitest-network-setup.mjs` binds the web
streams. The client library's weight against the `initial` budgets in
`apps/dotln/project.json` (warning 500 kB, error 1 MB) is unknown until run;
`npm run check:bundle` reports it. The mock's few on-screen strings sit in
the root catalog `apps/dotln/public/i18n/en.json`, which the production
build ships, because `npm run i18n:check` reads template keys against that
file (`tools/scripts/check-i18n.mjs`); they carry neither the marker nor the
key identifier, so criterion 5's greps stand. WO-007-D019 item (a) is taken
here (step 4); its items (b) to (f) stay with the surfaces they name, which
this order does not change. This order
activates only on a launchpad whose starter carries core WO-221's `--draft`
form (WO-005 step 1's route guard); the draft pull request and its workflow
runs are a final-review obligation read from
`docs/evidence/WO-008/preview-pr.json`, never a criterion (main-rules
planning document §6 D5 and D7). The `Target release classification`
header was added by the UI planning pass of 2026-10-21 under WO-012's
declared policy (`DotLn Angular` releases; minor, a feature release); the
2026-11-09 pass, which set the base, confirms it. `Target release notes: reviewed` was
added by the 2026-10-23 pass under starter v0.91.0.

**Non-goals:** a real identity provider or API; a backend-for-frontend;
multi-factor flows; user management screens; social login; a session that
survives a reload (a real provider's session, a later member); verifying the
access token's signature on the client (the API's duty); a sign-in entry
for an anonymous visitor in the shell, whose anonymous pages and visual
baselines stay as they are.

**Operator-review assumptions:** the operator accepts an established OpenID
Connect client library behind the port rather than hand-rolled flows,
accepts the account page as prose, judges the first pair across the three
pages and ends the rounds in their own words or delays them (rule 25), accepts that a reload ends the session while the
provider is the in-page mock, and reads the one draft pull request before
final review, which the final publish reuses.
