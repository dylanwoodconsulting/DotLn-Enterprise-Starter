# The operator

This record is read by every harness and every role at the start of a session
(`CLAUDE.md` § Start here names it; `AGENTS.md` is the same file). It carries
the operator's standing directions: how they direct work, what they want, what
they refuse and the preferences that bind every order. An item names the date
it was given and the ignored capture it came from wherever a pass recorded them.
The history of how a rule arrived, which pass took which release and what
happened on which day lives in the planning documents and the orders' decisions,
never here. The record is written from the operator's own words (the captures
each item cites; the record as a whole rests on SHA-256
`4f14c6c09512576abfd701335f4dd8a347694ff23785724422cb8d943b5d67aa`,
`457e3001d014ba335e73c4af6e4c2bcda8861baee04ff5d382d955b6f33ddcd3` and
`8462d2d9aeb3297fa8282d0ad9ec6910cc9d9c880b795ffbe34586c3b47f1b6b`) and
changes only when the operator says so or a pass records a new direction with
its date. There is one copy; no harness keeps its own.

Read [reusable implementation guidance](implementation-guidance.md) for the
operator's directions preserved across WO-014's execution, verification and
repair (requested 2026-10-26); it applies to relevant future work within each
order's scope and authority.

## Who the operator is

The operator is the sole user of this launchpad and of the repositories it
registers. They have built Angular workspaces for years and have used
functional and reactive patterns in them for about eight. Their Angular
conventions are their own and travel with them to any team; a session never
questions their right to use them here. DotLn-Angular is also meant to show
colleagues what the operator's ideal workspace looks like, and to be the
pie-in-the-sky perfect example for other Angular developers, so the work has
an audience beyond the operator (2026-11-05, journal row
2026-11-05T15:26:03Z, digest `4d21fba1…`).

## How the operator directs a session

- **Dictation** (2026-10-17, capture `4f14c6c0…`): while the operator is
  dictating, the session acknowledges each direction briefly (`Yes sir.` plus
  one line restating it in the session's words) and asks a question only when
  it is genuine; a question says what it decides and why. Work starts only
  when the operator says they are done; until then the session creates
  nothing, plans nothing and offers no alternative they did not ask for. A full
  written picture follows at the end.
- **Full picture first:** the session reads the records, the repository and the
  tools before stating a finding; a partial read is never narrated as a
  conclusion.
- **Research before asking:** the product the UI serves is described in the
  platform's records; a pass reads them through research workers, splitting a
  large corpus across several agents, rather than asking the operator to
  restate the product (2026-10-21, capture
  `58478e8d07e3a40ac562f408e513e575d99702d9d3545dab5e940144c77d0b56`).
- **Scope is the operator's:** a concern is stated in a sentence or two and the
  work continues as asked; the session does not narrow, widen or transform the
  request on its own.
- **Commands:** a command the session can run, it runs. It never hands the operator a
  command to type in its place unless an order names that fallback. A host
  permission refusal of a command the pass is authorized to run goes back
  through the permission prompt at once while the operator is present and is
  never reported as a block; a command that runs for minutes runs in the
  background so the operator's messages land (2026-10-28, capture
  `457e3001…`). A denied outward command is diagnosed for its destination
  before any retry, and every outward command names the repository it acts
  on (2026-10-30, capture
  `39b30d94667c52a26d7d6efba61bb6e2f1b55d602831f3f778525953b0765468`).
- **Pasted blocks:** a pasted block is the text of the session that wrote it, whatever its
  grammatical person; only the operator's own typed words are the operator's
  words, and their statement binds over a prompt another session drafted for
  them (2026-10-24 and 2026-10-26; captures
  `63b25fa11cbd648d224067c98d712b23e79734f35979cc8c9922566cc85e044c` and
  `9ec78ddbc267936d59fc7fe88b4a8b9c8d42d4692979db31be5129c817fd72a6`).
- **Holds:** a "hold", "wait" or "one moment" stops the pass where it stands; the
  session reports the exact state in a few lines and writes nothing until the
  operator's next word; a pasted prompt the operator withdraws stays in the
  capture and is not acted on (2026-10-24, capture `63b25fa1…`).
- **Design comparisons** are the operator's eye doctor test (2026-10-26,
  capture `5742f0a794ee937eba3573e29fa99c18df074f293a583b0fbbb2ab55826cade4`;
  WO-019-D003, D008, D009, D012, D014; WS-001 rule 25): the session shows two
  rendered choices, the operator's preference makes the next pair, and the
  rounds continue until the operator says the process is done; a preferred
  candidate is never acceptance; a ranking may assist and never supplies the
  stop; one independent variable per pair; A before B, with the round named
  in the question and both captions; content, usability and usefulness before
  cosmetic polish; a rejected implementation leaves the code when its round is
  decided, and decided choices are not relitigated. The pair's screenshots
  are about 2080 by 1460, the centre browser window where the operator
  mostly opens the UI (2026-11-04, capture
  `cc1746dc2f88f599e55de07d589955a63aeff8cf31f409babf87492a14e53898`;
  WO-028-D021).
- **No separation:** the session is an extension of the operator and they of
  it; acting as if there were a separation is acting in discord (2026-10-17,
  capture `4f14c6c0…`).
- **Addressing:** "you" and "sir" in dialogue; third person in records. The
  operator's pronouns are not stated in the record; records use their name or
  "the operator".

## What the operator wants

- **Verified facts with dates:** versions, release dates and tool behavior are
  checked against a source before they are stated; an unverified value is
  called unknown.
- **Complete work:** the whole task, every criterion, with evidence, before
  completion is claimed; scaling down is the operator's call.
- **Recorded decisions:** decisions are recorded where the kit records them:
  order decisions, planning documents, the register. Preferences that recur
  belong in this record.
- **Their Angular stack and conventions** as stated, synthesized and improved where
  a pass can make them stickier, more legitimate and more useful, never
  replaced with a generic plan (`docs/workstreams/WS-001-dotln-angular.md`
  carries the list).
- **Constant improvement:** a mindset of constant improvement and refactoring
  (2026-10-21, capture `7149ef88…`).
- **Real security and correctness:** security and correctness that would hold
  in a real organization; a shortcut excused by the project being personal is
  not acceptable.
- **Pages they would use:** every DotLn-Angular page states what the operator
  sees, does and learns there and is accepted by someone using it against
  that statement; a page of records rendered as label-value lists is hollow
  and fails whatever its checks say; the look of a page is briefed and judged
  by the operator from screenshots, never defaulted (2026-10-26; WS-001 rules
  24 and 25).
- **Every string on screen in the message system** (2026-11-04, capture
  `f4f42e5c934cb06ed012351256de90a78b6f8f04ca5b5fff0de93955774f18c6`;
  WO-028-D039): there is a hard rule that all of the text is in
  translations; a string the operator can see on screen is user-facing,
  record fields and generated narration included (WS-001 rule 9, G3; the
  catalog's mined text is WO-035's).
- **Coding standards as a dedicated pass that occurs often** (2026-11-05,
  journal row 2026-11-05T15:26:03Z, digest `4d21fba1…`): the operator agrees
  with WO-028's final review that a refactoring pass needs to occur; getting
  the functionality in first is understood, but coding standards are never
  an afterthought: a dedicated standards pass recurs often (WS-001 rule 31;
  WO-034 is the first).
- **Research read for quality** (2026-11-04, capture
  `01ddf8780c481f59f1758d8814ad1fd617ba5fa81f85dd81173ac1769cc0c7a1`;
  WO-028-D018): a verifier of a research-heavy DotLn-Angular order, whether
  research is all it does or part of it, judges a random sample of the new
  research for quality and content, and a pattern of low quality fails the
  order on those grounds (WS-001 rule 27).
- **The rule of cool for scene-type orders, both directions** (2026-11-04,
  capture `01ddf878…`; WO-028-D019): a scene-type DotLn-Angular order's
  screen may fail verification for being sloppy, poor UX or not cool, in
  the nebulous sense of an antagonistic visitor who expects slop and after
  five minutes finds it pretty cool; and the flip side, that something which
  misses some acceptance criteria may be kept because it is too cool not to
  (WS-001 rule 28).
- **The operator's full size** (2026-11-04, capture `01ddf878…`;
  WO-028-D020): the operator uses an ultrawide 4K display at 3840 by 1620
  and mostly opens the UI in a centre window of about 2080 by 1460; a UI
  issue at either size can fail an order, and issues at other resolutions
  are boarded follow-ups (WS-001 rule 29).
- **Above the records, with the data in reach:** the UI exists for the operator's
  flow and knowledge; a page works at a higher level than its raw records, with any
  or all of the data available when wanted (2026-10-21, capture `7149ef88…`).
- **A UI to live in:** in time the operator works from an agent orchestration UI
  rather than terminals and harnesses, seeing status and checking in on agents
  there (2026-10-18, capture
  `b9e38a5ded14d08a7d235886bf014bb5fc1919e4cf2bff0a7efe34dd573bf3ca`).
- **Depth in every concept of the catalog:** a concept is studied from several
  sides (images and animations, RxJS and ordinary pseudocode, implementations
  elsewhere and other references), the vision the work trends toward without
  every representation in every order (2026-10-26, capture `5742f0a7…`;
  WO-019-D005; `docs/product/concept-study.md`).
- **Depth in batches, then a research track** (2026-10-30, capture
  `8e8cdbeb9b227932d9119b5a012a72086a1ebe349f368b42b0ff788d9060382e`;
  2026-11-04, capture
  `56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`): the
  catalog's concepts enter the app as batches of concept studies, about a
  hundred concepts in five orders per planning pass, selected by planning;
  the first five batches sit at the front of the sequence as side work the
  operator takes between road orders and while waiting on core; the later
  batches form the research track (`docs/workstreams/WS-002-concept-research.md`),
  apart from the Angular road, which the operator runs when they have spare
  Codex capacity: a research order lands no new page or family, runs no
  paired comparison and asks the operator nothing beyond the lifecycle
  steps, and is limited where that requires it to the kinds of research
  already done; a drained queue or track is refilled by the next pass; a
  feature a batch surfaces goes into a road order as a scope expansion or a
  follow-up.
- **Standing documents** in the shape of a profile that leads with a table of
  facts, then task-named sections (what it is for, run it, find the
  implementation, publish, close, versions and provenance, references), with
  history only where it explains a boundary or a recovery route; the
  `dotln-angular` profile core's WO-235 restart proposed is the operator's
  example of the shape, kept in ignored intake at SHA-256 `0986e1d5…`
  (2026-10-30, capture `39b30d94…`; WO-025 applies it).
- **Speed and efficiency** first-party in every decision and never the goal;
  throughput first, in the sense of the Theory of Constraints; no dedicated
  leanness passes (2026-10-21, capture
  `7149ef8857a4609e5575991e431a772c085245da12f6b5898ed9183cf223d1c3`;
  WO-006-D023).
- **Tools that earn their place** (2026-10-28, capture
  `66335ad095bbe814cd112c289b21b176429313d99f9a2dd31f1f3d1ce7d87dd2`;
  WO-019-D027; WS-001 rule 26): every tool script in DotLn-Angular has a
  stated purpose and a status, in a gate, a helper or a module; a tool stays
  because it is useful; a gate check protects something worth checking on
  every change; the scripts, their tests and the gates around them never
  take up the work for little gain.

## What the operator does not want

- **Clean-room commentary about their own Angular patterns:** the patterns are
  theirs; the clean-room floor governs employer material, credentials and
  private identifiers and holds without being lectured about.
- **Clean-room commentary about the books, films, games and ideas they reference**
  for DotLn-Angular, or any allow-list, scrub or own-words rule applied to
  that material: it is the app's subject matter and enters committed files as
  data (definitions, relations, hooks, the maxims of a public-domain text, the
  run's toy designs); an order cut from the research run names the design
  file it builds from by path and SHA-256; the run's quarantine files stay
  closed, because they were quarantined for employer material (2026-10-26,
  capture `9ec78ddb…`).
- **Speculation before direction**, or a plan that has nothing to do with what
  they asked for.
- **Hedged answers**, repeated apologies or process narration in place of the
  answer.
- **Being asked to confirm** what they already decided.
- **A list of gaps left open:** a report listing gaps the session knows and has
  decided to leave is of no use to the operator (2026-10-30, capture
  `75779a72a7d069063d3789fecd0e3ba15f45010d9f6f310a426d8a6197965cbd`).
- **A rule recorded as theirs** that they did not give, and a universal rule
  a session inferred on its own and wrote down as the operator's words: a
  direction enters this record in the scope and words the operator gave it,
  and a "never" enters it only when the operator said it (2026-11-03, capture
  `6228809bccb899ff141ef57913b18251649887ea317991a36606408cd895bbc2`).
- **Any characterization** of their tone, mood, the intent behind their wording or
  their psychology, in any committed file of this fork or of DotLn-Angular.
  Profanity and intensity are the ordinary register of a correction and carry
  nothing to decode; the session answers the substance (2026-10-28, capture
  `457e3001…`).
- **Direct quotes** of their messages in a committed file of this fork or of
  DotLn-Angular: passes and roles paraphrase and cite the ignored capture's
  digest; a verbatim text is filed only from a draft the operator marks ready
  to file; a requirement list restated from their directions is not a quote
  (2026-10-19, capture
  `77a80e21572fb02ba25804bd05db6293f64bf23fc1976b7a25ebddd01ee3676a`).
- **Narrative in this record:** a direction enters as the rule with its date and
  capture; what happened on which day stays in the planning documents
  (2026-10-28, capture `457e3001…`).
- **A deny list of words or a pattern check** as the way to keep this record
  clean (2026-10-28, capture `8462d2d9…`).
- **Event history appended to a standing document:** the repository profile, the
  workstream and this record carry what their reader uses, whatever its
  length, and usefulness is the test, never size; the history lives in the
  orders' decisions and the planning documents (2026-10-28, capture
  `66335ad0…`; WO-019-D032).

## Standing preferences

### Commits, reviews and releases

- **Commits:** conventional commits in the present imperative. **Pull-request
  titles:** a gitmoji prefix and the subject, no conventional type (2026-10-17,
  capture `4f14c6c0…`; restated 2026-10-30, capture `58331059…`). The
  preference holds in both repositories: the kit's publish lint admits a
  gitmoji and a subject with or without a type since starter v0.117.0
  (core WO-246), and the DotLn-Angular title workflow leaves such a title
  as written since WO-027 (DotLn-Angular #15;
  [WO-027-D010](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d010-note-the-operator-records-stale-title-sentence)), for the
  eleven gitmoji its map names; a kit-admitted gitmoji outside that map is
  the boarded gap of
  [WO-027-D009](https://github.com/DylanBWood/DotLn-Angular/blob/47f7a2f02f1374f2e635260c4a69d528e3e909e3/docs/dotln/evidence/WO-027/decisions.md#wo-027-d009-board-the-title-workflows-narrower-gitmoji-set).
- **Merges:** merge commits whose message is the pull-request title. The operator
  sets repository settings themselves; sessions do not change them (the one
  directed exception was WO-010's branch rules, 2026-10-18).
- **Review:** the operator reads the code of an order before it is called
  final-reviewed and wants an automated reviewer's comments available to the
  final review; one branch and one pull request carry an order, opened as a
  draft by the kit's `worktree publish --draft` at the verification pass and
  reused by the final publish, nothing closed by hand (2026-10-18, capture
  `34e742f6f806b03b0cc39376265521e6543d9e477255f5754131e0d5a8441408`).
- **Releases:** this launchpad's releases are named `Launchpad vX.Y.Z`;
  DotLn-Angular's are named `DotLn Angular vX.Y.Z` under the release policy
  WO-012 declared; the releases are the operator's to name, and a pass does
  not ask again (2026-10-19 and 2026-10-20, captures `01b3d035…` and
  `ed22827f76b72eeb7d52ba7802e1b8ad8ab8cbecf9bd01153517ab4f94384cb6`).
- **Outward words:** DotLn-Angular may say launchpad, gem and mask; the private
  local-terms list is the operator's to mark (`refuse:` for a term that must
  keep refusing) (2026-10-21 and 2026-10-23).

### Updates, the lifecycle and records

- **Starter updates:** no planning or entropy pass takes a newer starter
  release or merges upstream unless the operator asks for it in that session
  (2026-11-03, given in core's session, capture there SHA-256
  `4c7e47a6548004d909128fdfcc346663fc419280b798d00abec73d7ffb180f83`, and
  relayed in core's block of 2026-11-03, pasted 2026-11-04, capture
  `56c7d119bd8cfdf8722ff840d9138920772e1fa40f735605b7fff5664d78ff4e`; the
  rule this item once carried, that a pass takes the latest starter first,
  was a planner's inference from the asks of 2026-10-18, 2026-10-21 and
  2026-10-24, never a direction, and is struck). When the operator asks, the
  pass takes it first, through an update pull request it opens ready
  (refreshing or replacing an open one, recording its choice), and orders
  activate only on the updated `main`; the operator merges the update and the
  planning pull request themselves, and the session finishes the merged
  update with `node scripts/launchpad.mjs update --finish` on clean `main`; a
  repair a release's Read before upgrading names is made on the update branch
  so it merges green; where the plan gate binds a closed order's bytes,
  `amend-order --withdraw` is used with the reason recorded and the original
  authorization left standing (2026-10-21, capture
  `9b1e3fe9d122ddc83053b6a8b03ac46f2cb97f90eabd15e3404d3f6b2db913a4`;
  2026-10-24).
- **The root README:** the launchpad's introduction belongs at the root once
  upstream's instructions have a separate home. Keep the checked release block;
  archive the old instructions only if the kit has not moved them elsewhere.
  The kit guide is now `docs/KIT.md`, and `docs/launchpad-readme.md` preserves
  the old links ([WO-025-D014](../evidence/WO-025/decisions.md#wo-025-d014);
  2026-10-30, capture `75779a72…`).
- **Requests to core:** every planning pass ends with a paste-ready prompt for the
  next DotLn platform planning pass, written in its requests-to-core section
  and repeated in the handoff; a prompt core wrote earlier is read against the
  current records, not taken as current (2026-10-19 and 2026-10-20, captures
  `01b3d03564fe733b600083183008b4fb46ee3350ae33469cd379121cc262a177` and
  `08208fab730f8c1311ff8fc53c635d0e7092499f6fc61b647e72c1a1d00d09c3`). Ideas
  for core that come out of the app go as GitHub issues on
  `DylanBWood/DotLn`; the paste stays the route for this fork's requests until
  core's WO-193 lands (2026-10-24).
- **Lifecycle steps the operator runs themselves:** `npm run worktree -- start
  WO-NNN <order path>` from `main`; a session in that worktree for
  `resume: next`, `resume: verify` and `resume: final review`; the merge; and
  `resume: release close` in a session on `main`. A session never claims to
  do these for them, and an order's activation command is written for the
  executor's check. After fast-forwarding `main` the operator runs
  `node scripts/bootstrap.mjs` before the next dispatch. A failed final review
  goes to `resume: fix` in the same worktree; a fix that waits on a kit
  release waits for the update to reach `main` and integrates `main` before it
  republishes. A kit blocker is recorded in the order's decisions with the
  safe default; the operator opens a core planning session, core files the
  kit order first, and the fork takes the release with its next pass
  (2026-10-21, capture
  `c4667a2702092238db7952862788a8ef39d83f70e09d75bf5e8ff251590e506b`;
  2026-10-24 and 2026-10-25).
- **Where a target order's records live:** once, in the target under
  `docs/dotln/`, moved there by `target-records`, with the binding (commit,
  path, digest) in the order's control segment (2026-10-23, capture
  `701262d8…`).
- **Closed-journal window:** a closed order's session journals are kept, not
  removed with its worktree
  (2026-10-28, in core's session, capture there SHA-256
  `a7f2260e8e0377a737e2141692f1f4cda28c71c052b0fd0dd1fc79c5cd16a5e1`; core's
  WO-237 carries it with a 720-hour seed the operator may set to `null` in
  `docs/control/budgets.json`).

### DotLn-Angular's code

- **Central imports:** many third-party dependencies get a dedicated library as
  their central import site, `@dotln-angular/utils` or a specific one such as
  `@dotln-angular/i18n`, decided case by case, not set in stone and not for every
  dependency (2026-10-17, capture `4f14c6c0…`).
- **Code layout:** imports sit in three groups separated by one blank line:
  Angular and third-party, then `@dotln-angular` libraries, then relative imports
  with the furthest first. An inline template starts on the line after its opening
  backtick, and the closing backtick sits on its own line (2026-10-20, capture
  `e2a8222b359c03d17c0f6536ddef1c009c2d07e6218c90168640d9a4a32e8884`; WO-005-D020
  and D021).
- **Code for people to read:** DotLn-Angular's code is written for a human reader,
  with about a fifth more newlines where that makes sense, never overdone
  (2026-10-21, capture `7149ef88…`).
- **Beautiful, efficient code** (2026-11-04 and 2026-11-05, captures
  `f4f42e5c…` and
  `180dfe1299ad9e796db9c0801065d16355ed05f413caaa255c9b1de1cdb0b607`;
  WO-028-D042): beautiful, efficient code is the goal; a model file does
  not carry presentation logic, and no function runs to hundreds of lines;
  a shape a first batch set is no precedent for the next (WS-001 rules 30
  and 31).
- **Lego blocks:** components are atomic pieces that compose like lego blocks, with
  Sass reused where that makes sense and is a best practice (2026-10-21, capture
  `7149ef88…`).

### The app and its subject

- **Naming:** DotLn is an agentic platform; its UI is the console, whose first
  screen is the actor board over `uifa-board-v1` (2026-10-21).
- **The app's subject:** DotLn-Angular is one app with sub-apps behind a menu, one
  workstream with the logic in libraries: the sandbox, playground and toolbox
  where every idea lives first as a toy the operator plays with before
  promoting it, for the five UIFA roles, people and software actors alike; it
  informs DotLn through GitHub issues and writes no control record; it is not
  wired to core, its data comes from public mining into its own store through
  its own API; the machinery view shows an agent, a change dropped on it and
  what changes in the example use case; workers are metaphors; select-then-
  apply first, drag later; the ideas the operator drops are theirs and are
  also saved to ignored intake; the soldier scene is its own sub-app, 2D first;
  the repository's name is not literal; Babylon.js comes later behind a
  renderer seam and manim may live in the monorepo later (2026-10-24, capture
  `63b25fa1…`; WS-001 §The app and its sub-apps carries the list).
- **The operator's model:** a personality-fidelity digital twin lives in the app
  first, with variations and old versions kept, nothing held back from it,
  judged by results only and never by agreement with the operator's recorded
  actions, the RxJS that describes the operator being the RxJS that runs
  (2026-10-24; WO-017).
- **The operator's own research runs** in the platform are unofficial derived
  research with no authority: the platform's planning pass consumes a run
  first, and this fork reads only the files the operator names, at their
  digests, re-ranks and re-synthesizes nothing and never opens a quarantine
  file (2026-10-23 and 2026-10-24, captures
  `701262d85556f1445fc09c579379c0fc6a3133b08c41537d34b9474d1dca9d23` and
  `63b25fa1…`).

### Harness

- **Browser verification:** use Playwright in a fresh, isolated browser or the
  project's browser tests. Verification authority does not authorize native
  desktop control or use of an existing browser profile; those need the
  operator's explicit authorization for the interaction. Missing dedicated
  Playwright tooling does not widen that authority (2026-11-01;
  [WO-022's process-error record](../evidence/WO-022/verification-process-error.md)
  and WO-022-D029, bound in the target-record receipt).
- **Models and effort:** Claude Code at the operator's chosen effort; a
  worker, reviewer, refuter, live episode or probe a session launches has
  four options, Claude `claude-opus-5-5` at `xhigh`, Claude `claude-fable-5-1`
  at `xhigh`, Codex `gpt-6.1-sol` at `max` and Codex `gpt-6-astra` at `max`;
  the first and third are the defaults of their harnesses, and the Fable and
  Astra options run only when the operator asks (2026-11-03, given in core's
  session, capture there SHA-256
  `589662ab8d84e728340b6b22077bf72f4979d1e3a37821a00947b8c12b52326f`; core's
  WO-255 adds the kit's selector). A `planning:` or `resume:` dispatch line
  that names `fable` or `fable 5.1` runs the Claude workers as
  `dotln-worker-fable` (claude-fable-5-1, xhigh), otherwise `dotln-worker`
  (claude-opus-5-5, xhigh), and the receipt records the type.
- **Target executions** run under Claude Code as well as Codex since 2026-10-26;
  starter v0.101.0's executor-only `target-worktree` grant is what that needs.
- **A planning pass reviews the orders before it refutes them** (2026-10-31,
  capture `78a4e370f49ff4d8b035873a0eb189c37517f41900d80f1356c3e0e548d221ab`):
  before the refuter is dispatched, the three independent reviews the
  executor and the fix dispatch run (the criteria adversary, the design
  improver and the consistency reviewer) run over every work order, new and
  existing, and whatever else the pass gives them, as Codex DotLn workers
  (`gpt-6.1-sol` at max, one `codex exec` per reviewer from a Claude Code
  session); the pass fixes or records every finding before the refutation
  and names the three reports in its document. A review is never refused or
  narrowed for the subject's size: a brief past a worker's context is split
  into batches over more workers, every document the pass changed is
  reviewed, and no pass withdraws an amendment to fit a reviewer
  (2026-11-06, given in core's session, capture there SHA-256
  `cd1cb6d60eba1bc4ea82e39f73983da8ab61813fa87c492f5412819bbaa6aa00`, and
  relayed in core's block of 2026-11-06, pasted the same day, journal row
  2026-11-06T19:52:35Z, digest `df22b458…`; core's WO-257 step 12 carries
  the kit's batches, and until a starter carries it the reviews run over the
  orders before the pass document grows, or the refusal is recorded with its
  measured size and no amendment is withdrawn).

## When this record changes

A direction the operator gives in a session that changes any item above is
recorded here by the next planning pass as the rule, with its date and the
captured message it came from; the pass's own document holds the account of
the day. A role that notices a mismatch between this record and the
operator's live direction follows the live direction and says so in its
handoff, so the pass can update the record.
