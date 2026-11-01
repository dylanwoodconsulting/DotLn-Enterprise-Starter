# WO-022 critic findings and their dispositions

Two critics read the twenty merged drafts, each a Claude `dotln-worker` in its own copy of the target
with the batch in place ([the fan-out record](fan-out.md) gives their briefs). The reading critic
read every study as the operator would, from renders at 1440 and 360 pixels and from the records and
modules. The factual critic ran every spec and the record check, opened every URL and checked each
claim, analogy and reading against its source and its code. Each finding went to the author of its
study, or to the flow family where the cause was the family's, and the same author rewrote
([the rewrite round](fan-out.md#the-rewrite-round)); both critics then read the result again as the
same agents. "Resolved" below is the critic's own word in its second pass.

## Reading critic, first pass

At 16:15Z: twenty findings; Aggregator, Correlation Identifier and Competing Consumers read best.

| n | Study | Where | Finding | Disposition | Second pass |
| ---: | --- | --- | --- | --- | --- |
| 1 | Command Message | step 6 note | Says order 22; the example is order 41. | author-10: 'Order 41', and a spec that every note names only order 41 | resolved |
| 2 | Guaranteed Delivery | Host's state | 'c is on its disk' beside an Outbox that says it has let go. | author-05: the Host's state is 'send done; outbox let go' from the step the outbox deletes its copy | resolved |
| 3 | Resequencer | release steps | Events released together sit on one spot, one hiding another. | Family (D017): messages that cannot sit apart on a line share one capsule naming them all | resolved, from the family change and the caption |
| 4 | Canonical Data Model | link labels | Each view's 'decode' and 'encode' labels print over each other. | author-08: the six labels dropped; the caption says each view decodes on the way in and encodes on the way out | resolved |
| 5 | Canonical Data Model | situation | 230 words of platform detail before the pattern, and two cases the example never uses. | author-08: about 120 words leading with the pattern; a loadout explained; the closing sentence cut | resolved |
| 6 | Recipient List | drawing | Three identical 'main' labels overlap; boxes too narrow at 360. | author-04: the labels dropped, the states shortened, the Close record moved beside the list | resolved |
| 7 | Recipient List | situation | 190 words of procedure, a repeated limit and a second example. | author-04: both sentences cut | resolved |
| 8 | Content-Based Router | outgoing labels | Labels on the box edges; a reader cannot tell which line leads where. | author-04: the labels dropped; each destination's state starts with its route | resolved |
| 9 | Content-Based Router | tokens | Tokens a to e against F1 to F5 everywhere else, with no key. | author-04: tokens 1 to 5, keyed in the caption | resolved |
| 10 | Channel Adapter | caption | Eight tokens with no key. | author-09: a caption naming every token and box | resolved |
| 11 | Control Bus | work channel | The half the bus is contrasted with is an unlabelled line. | author-06: the work channel is its own pipe, 'Work queue', because a labelled line was crossed by the Executor's bus line on a phone | resolved |
| 12 | Transactional Client | Event log at 360 | 'CommandResult for 7' is wider than its box. | author-07: 'result for 7' | resolved |
| 13 | Message Store | copy line at 360 | The Executor's copy line runs behind the Verifier's box. | Family (D017): a line that skips a stage runs round the boxes | resolved |
| 14 | Event Message | legend and captions | 'Black' names a mark the drawing no longer has; the green outline is not explained. | Family (D017): the legend reworded; author-10: both captions name the pipe with the bold name | resolved |
| 15 | Message Dispatcher | precision note | A rounding note under values that are not numbers. | Family (D017): the note shows only where a worked step shows a decimal | resolved |
| 16 | Request-Reply | situation | A six-field envelope and a console the example never uses. | author-03: both cut | resolved |
| 17 | Request-Reply | step note and state | 'resumes the work it saved for completed' reads as a missing word. | author-03: 'for a completed result'; 'resumed on cmd_1's result' | resolved |
| 18 | Resequencer | third limit | A third platform case blurs the point. | author-01: the clause cut | resolved |
| 19 | Message Translator | second limit | Points at 'the spec's second run', which the page does not show. | author-08: says what would happen, in the example's letters | partly: see the second pass, n 6 |
| 20 | Event Message | situation | A storage detail to decode before the analogy. | author-10: 'a small record of the order's phase and latest verdict, stamped with the time of its last transition' | resolved |

## Factual critic, first pass

At 16:37Z: all twenty specs passed (137 tests) and every record check reported only the draft
state; all 101 URLs opened; every analogy was marked as one and nineteen were supported; sixteen
findings.

| n | Study | Field | Finding | Disposition |
| ---: | --- | --- | --- | --- |
| 1 | Command Message | step 6 note | Order 22 in an example of order 41. | author-10: 'Order 41' |
| 2 | Aggregator | Camel explanation | Every completion condition said to apply per key; the page says interval and batch completion close all current groups. | author-01: the conditions stated one by one, as the page gives them; it did not say batch completion closes every group, because the page does not |
| 3 | Channel Adapter | Camel relevance | Claims a Camel page for each of the book's patterns. | author-09: Camel has a page for this pattern |
| 4 | Channel Adapter | situation | Gives the wrong reason for the guide's claim about replacing the mock. | author-09: the guide's own reason, that the response shape stays uifa-board-v1 |
| 5 | Competing Consumers | Camel relevance | The same over-claim. | author-02: Camel expresses many of the book's patterns, this one among them |
| 6 | Publish-Subscribe Channel | Camel relevance | The same over-claim. | author-02: as n 5 |
| 7 | Message Dispatcher | Camel relevance | The same over-claim. | author-09: Camel has a page for this pattern |
| 8 | Process Manager | Camel explanation | Its mechanics come from the uncited Dynamic Router page. | author-07: cites the Dynamic Router page for them |
| 9 | Control Bus | two supports | Whole sentences of DotLn's execution guide. | author-06: restated |
| 10 | Message Dispatcher | situation, supports | The guide's drive-router sentence almost word for word. | author-09: restated |
| 11 | Process Manager | supports | The same router sentence. | author-07: restated |
| 12 | Message Store | supports | Two sentences of the domain model. | author-06: restated |
| 13 | Recipient List | situation, supports | A whole sentence and a clause of the guide. | author-04: restated |
| 14 | Publish-Subscribe Channel | situation, supports | The architecture document's clause on effects. | author-02: restated |
| 15 | Guaranteed Delivery | two supports | The pattern catalog clause by clause, and a sentence of DotLn's architecture. | author-05: restated |
| 16 | Transactional Client | supports | A verbatim sentence of DotLn's architecture. | author-07: 'it disclaims exactly-once effects on writes outside its store' |

## The critics' second pass

### Reading critic

At 17:08Z, from new renders of the merged batch at step 0 at both widths, and stepping through
every module: nineteen of its twenty findings resolved and n 19 partly resolved. Correlation
Identifier, Competing Consumers and Process Manager read best. It cut its tall renders into tiles in
a temporary folder inside its own copy and deleted it; it changed no file. It found six new things,
each small, and the executor applied each, in the critic's wording except where noted:

| n | Study | Finding | Applied |
| ---: | --- | --- | --- |
| 1 | Event Message | The caption called the Beacon pipe the part the pattern is about, while the pattern is the message kind and the study's own limit calls the beacon a polled channel. | 'The event messages, v and r, are what the pattern is about; Beacon, the pipe with the bold name, is the channel where their age is judged', keeping the words 'bold name' the legend and the spec use |
| 2 | Message Store | The reading's comments trailed their code, and at 1440 the wrapped half landed among the code. | Each comment on its own line above the code it names |
| 3 | Event Message | The same. | The same; the spec now requires each comment on its own line directly above its code |
| 4 | Message Store | At step 6 the lost copy is drawn reaching the log, whose state did not say it was lost. | The log's state at step 6 is 'down: 3 lost; 2 entries'; the spec's two assertions of it follow |
| 5 | Resequencer | The step 1 note said evt_1 goes on at once; the drawing holds it a step. | '…so it goes on in the next step' |
| 6 | Message Translator | 'between t and c … only T' does not hold with n between them. | 'had a row in tool-v2 arrived in place of n': the spec's run '-txc\|' puts the unreadable row where n was, the case the limit describes, so the limit names that run rather than the critic's 'between t and n'; the module's comment says the same |

These six changes were made after the critic's pass and were not read again by a critic; the
specs of the three studies, the study models' spec and the record check passed after them.

### Factual critic

At 17:16Z: all sixteen first-pass findings resolved; all twenty specs passed, 154 tests, each
record check reporting only the draft state; all 102 URLs opened and supported their claims, the
new Dynamic Router reference among them (some GitHub pages answered 429 first and 200 on a retry
after a pause); and the eleven running readings matched their modules with comments removed, every
new comment true to its code. It found nine things, eight of them passages that kept seven or more
consecutive words of a cited source, or a lightly altered sentence of one, and one analogy that gave
the platform's receipt to the wrong part. The executor applied each in the critic's restatement:

| n | Study | Field | Finding | Applied |
| ---: | --- | --- | --- | --- |
| 1 | Channel Adapter | situation, references[2] | The first pass's fix copied the guide's sentence; the supports kept two more of its clauses. | 'the API's reply keeps the uifa-board-v1 shape, pointing the board at the real API instead of the mock is a configuration change'; 'the board fetches its document … from the app's API'; 'a failed request empties the document' |
| 2 | Event Message | references[2] and [3] | Sentences of the domain model and the guide nearly verbatim. | 'a beacon's age never alters what an actor may do or which transitions are legal'; 'watchers that each tell their own story from one set of events'; 'every recorded state change rewrite[s] the order's beacon … sweeps with a twenty-minute age limit unless told otherwise' |
| 3 | Request-Reply | references[2] and [3] | The domain model's definition of a continuation and a clause of the outbox protocol. | 'the remaining program, stored as data so it can be resumed once the result is in'; 'a command whose result never arrives stays pending and can be recovered' |
| 4 | Resequencer | limits[2], references[2] | The domain model's replay clause. | 'replay holds on to the early result and finishes the command once its persist record turns up' |
| 5 | Correlation Identifier | references[2] | The same clause. | 'completes the command once that record arrives', as its own limit already says |
| 6 | Canonical Data Model | CloudEvents relevance | The specification's first sentence, lightly altered. | 'a specification, owned by no vendor, of the common attributes an event should carry' |
| 7 | Aggregator | references[3] | The architecture document's reducer sentence with three words changed. | 'has a reducer collect what its feedback effects produce, once all have answered or a time limit has passed, and pass the main session a short summary' |
| 8 | Message Dispatcher | Pekko explanation | The guide's consistent-hashing sentence with two words changed. | 'a message's key decides its routee, and that choice holds only while no routee joins or leaves' |
| 9 | Command Message | situation | Said the session answers with a receipt; in the domain model the receipt is the transport's acknowledgement of the dispatch. | 'the port first acknowledges the dispatch with a receipt, and the session's result later comes back naming that id' |

The executor then set every record `checked` with both critics in `reviewedBy` and rewrote
`studies-summary.json`; `npm run studies:check` reported 60 records and 0 problems, and the study
specs passed 587 of 587. These fifteen changes of the two second passes were made after them and
were not read again by a critic; the three independent reviewers below read the result.

## Each study's platform analogy, as checked

The factual critic's second pass checked that each study states its example as an analogy, names
the public record it reads and cites it, and says nothing of the platform or the app beyond that
record (the rule in `docs/ai-reference/catalog-rules.md`). All twenty are marked as analogies.
Nineteen were supported as written; Command Message's was not until its second-pass fix (n 9 above).

| Study | The analogy and the record it reads | Marked | Supported |
| --- | --- | --- | --- |
| Aggregator | Three reviewers' reports on two orders merged into one message per order before the full validation run; DotLn's execution guide (verification, review and attack) and architecture (the reducer of effect results) | yes | yes |
| Resequencer | A log's evt_n events put back in order for a projection after a shared bus loses their order; DotLn's domain model and architecture | yes | yes |
| Publish-Subscribe Channel | The planner's orders on a topic heard by three sessions, against feedback agents that listen on the event stream by their own triggers; DotLn's architecture | yes | yes |
| Competing Consumers | The same orders on one queue drawn by three sessions, against parallel worktrees and the one-writer lock; DotLn's execution guide | yes | yes |
| Correlation Identifier | Commands carry commandIds that results and receipts name, and a cohort of opinions shares a cohort id; DotLn's domain model and architecture | yes | yes |
| Request-Reply | The kernel's command, receipt, result and stored continuation over the outbox and the event log; DotLn's domain model and architecture | yes | yes |
| Content-Based Router | A verifier's findings routed to blocking, operator or follow-up; DotLn's execution guide (verification, review and attack) | yes | yes |
| Recipient List | A release close refreshing each declared export sibling and recording each refresh; DotLn's execution guide (closeout and releases) | yes | yes |
| Message Expiration | Requests to verify queued for one verifier and expiring to a dead letter channel; beacon age judged by its reader; DotLn's execution guide and domain model | yes | yes |
| Guaranteed Delivery | Write and sync before moving on, the command logged before the worker gets it, immutable receipts and crash recovery; DotLn's architecture | yes | yes |
| Control Bus | analysis: and operator override: as control messages beside the work, with writer --show and evidence --stop; DotLn's execution guide | yes | yes |
| Message Store | The per-order append-only control log and its folds as the store; DotLn's domain model and its audit document | yes | yes |
| Transactional Client | An outbox command, its receipt and result, with a lease standing in for a visibility timeout and no single commit; DotLn's architecture | yes | yes |
| Process Manager | drive: handing the manager's role to a router that reads status and dispatches the next phrase, with a three-failure stop; DotLn's execution guide | yes | yes |
| Message Translator | The catalog loader's tool-v0 compatibility reader as the translator; this app's catalog-loader.ts, with DotLn's architecture and publication compiler as wider analogies | yes | yes |
| Canonical Data Model | A loadout's three editable views translating through the normalised loadout graph; DotLn's interfaces and IR compatibility documents | yes | yes |
| Channel Adapter | The board loading uifa-board-v1 through withCommand and BoardApi; this app's events-and-state guide, with-command.ts and board-store.ts | yes | yes |
| Message Dispatcher | One dispatcher handing implement, fix, review and verify requests to their performers; DotLn's execution guide (the drive router and the role table) | yes | yes |
| Command Message | The kernel's Command with a fixed id handed through the dispatch port to a session; DotLn's domain model and execution guide | yes | after the fix |
| Event Message | Control-log entries and the control beacon as time-stamped announcements, the beacon judged stale at twenty minutes; DotLn's domain model and execution guide | yes | yes |

## The three independent reviewers

The three reviewers read the finished change from 17:26Z, each a Codex worker (`gpt-6.1-sol` at
`max`, D007) in its own copy of the target with the order, its evidence and the profile, under a
brief that did not overlap the others: the criteria adversary, the design improver and the
consistency reviewer. Each read only its copy, ran only the read-only checks its brief allowed and
removed its temporary files; each run exited 0 and left the operator's Codex configuration
unchanged. The briefs and reports stay in the session's ignored scratch; what follows is their
substance in the executor's words.

| Reviewer | Minutes | Findings | Tokens, input / cached / output |
| --- | ---: | --- | --- |
| Criteria adversary | 9 | 2 blocking | 2,978,154 / 2,824,064 / 18,592 |
| Design improver | 12 | 2 should, 2 could | 3,830,733 / 3,648,768 / 23,202 |
| Consistency reviewer | 12 | 4 should | 4,974,331 / 4,773,376 / 22,721 |

The criteria adversary judged criteria 2, 6, 7 and 8 met, 1, 5 and 9 not yet met because their
runs belong to later steps, and raised two blocking findings. Criterion 3: seven running examples
keep their channels open and never assert an output's completion; each spec now also runs the same
pipeline to an end and asserts the completion (D026). Criterion 4: the fan-out passed WO-014's
figure with no decision stopping it; D023 records the omission, and on the operator's direction
D028 then set the rule and stopped the fan-out.

The design improver found a moving message overlapping two boxes on a phone where a line joins
boxes side by side, and a capsule wider than its line; both are fixed in the layouts, and a new spec
holds every moving message clear of every box in all twenty studies both ways (D027). Its two
improvements, scaling a state word too long for its box and keeping each model's narrower return
type, were declined with their reasons in D027.

The consistency reviewer found that catalog.md promised a check `flowFromMarbles` did not make,
which now makes it; two spec variants drawn with the main run's holdings, which now hold what their
runs deliver; the study composite's flow fixtures carrying the movement fixture's prose, which now
carry their own; and the profile's count of forty studied concepts, now sixty (D027).

No recheck followed: every fix is held by a new or changed test, the tools library passed 703 of
703 tests after them, and the operator objected at about 17:49Z that the order was never ending
(ignored intake capture `docs/intake/notes/wo-022-operator-2026-11-01-never-ending.md`, SHA-256
`999d9e9fcdf458ac570e14135dd452ed7628b3acedaaa720ddd36e1f55def694`), so the executor dropped the
optional recheck it had offered and went to the final checks.
