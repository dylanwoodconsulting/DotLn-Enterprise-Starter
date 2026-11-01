# WO-022 executor walkthrough

Observed on 2026-11-01 at 17:20Z in the production build of the target worktree, after the critics'
second pass and the executor's changes from it, and taken again at 18:01Z on the final tree, after
the reviewers' fixes: every screenshot came out byte for byte the same, and so did every reading
below. To reproduce: in the target worktree run
`npx nx build dotln --configuration=production`, copy `dist/apps/dotln/browser` anywhere outside the
worktree and serve it as static files with the single-page fallback to `index.html` on a local port
(the executor used a small Node server on 127.0.0.1:4304). Then open the addresses below in
Playwright's Chromium with `reducedMotion: 'reduce'` at viewports 1440 by 1100, 768 by 1100 and 360
by 1400. The screenshots are beside this file under [walkthrough/](walkthrough/), one per step and
width. At each width the session ended with no horizontal scroll on the page and no page error. The
independent verifier's walkthrough is a separate duty and starts from nothing here.

## The shelf and the twenty

From Tools, Catalog, the shelf lists Enterprise Integration Patterns with `288 concepts`,
`20 studied` and its unit `channels`
([1440](walkthrough/shelf-eip-1440.png), [768](walkthrough/shelf-eip-768.png),
[360](walkthrough/shelf-eip-360.png)). Choosing the work shows the heading `20 studied concepts`
with twenty links, in the book's order: Message Translator, Publish-Subscribe Channel, Guaranteed
Delivery, Channel Adapter, Command Message, Event Message, Request-Reply, Correlation Identifier,
Message Expiration, Content-Based Router, Recipient List, Aggregator, Resequencer, Process Manager,
Canonical Data Model, Transactional Client, Message Dispatcher, Competing Consumers, Control Bus and
Message Store ([1440](walkthrough/eip-twenty-1440.png), [768](walkthrough/eip-twenty-768.png),
[360](walkthrough/eip-twenty-360.png)).

## Aggregator, stepped

Aggregator opens at `/tools/catalog/eip:110` with its flow at the start: the slider reads
`Step 0 of 8`, and the note says the Criteria, Design and Consistency reviewers are each reviewing
orders 31 and 32, no report has been sent and the Aggregator holds nothing
([1440](walkthrough/aggregator-start-1440.png), [768](walkthrough/aggregator-start-768.png),
[360](walkthrough/aggregator-start-360.png)). On a wide screen the three reviewers stand left of the
Aggregator and the Next phase right of it; at 360 they run top to bottom.

Five presses of Step forward reach `Step 5 of 8`, the moment `Order 32 complete`
([1440](walkthrough/aggregator-step-5-1440.png), [768](walkthrough/aggregator-step-5-768.png),
[360](walkthrough/aggregator-step-5-360.png)). The note reads "Consistency sends C, its report on
order 32. Order 32's set now holds a report from all three reviewers, so it is complete." The
drawing's text equivalent names the message that moves, "C (order 32, from Consistency, findings 1)
moves from Consistency to Aggregator", and the Aggregator's box reads `31:a,c · 32:A,B,C`, holding
the reports it has filed. The token C is green on Consistency's line, and Consistency and the
Aggregator are outlined in green.

Follow the mechanism opens the ordinary pseudocode, which keeps a set per order and sends a set on
once it holds three reports, then explains each step on this example
([1440](walkthrough/aggregator-mechanism-1440.png), [768](walkthrough/aggregator-mechanism-768.png),
[360](walkthrough/aggregator-mechanism-360.png)). Where this breaks down opens the limits, the first
of which is the one the order names: "A lost report holds its set for ever. If Consistency's report
on order 32 never arrives, that set keeps A and B and never completes … Waiting for every reviewer
needs a time limit for each set beside it."
([1440](walkthrough/aggregator-limits-1440.png), [768](walkthrough/aggregator-limits-768.png),
[360](walkthrough/aggregator-limits-360.png)).

Read from the study alone: an aggregator files each message under the key it names and completes a
set when the completion condition holds, here a report from all three reviewers; a set that never
completes waits for ever unless a time limit sits beside the condition.

## Publish-Subscribe Channel and Competing Consumers

Both studies have the same planner, the same orders 31 to 34 and the same three sessions. At step 2
each channel delivers order 31.

- On the Order topic (`/tools/catalog/eip:65`) three tokens `a` move at once, one on each session's
  line, and the note reads "The Order topic gives a copy of order 31 to Session 1, Session 2 and
  Session 3, and keeps no copy itself."
  ([1440](walkthrough/publish-subscribe-step-2-1440.png),
  [768](walkthrough/publish-subscribe-step-2-768.png),
  [360](walkthrough/publish-subscribe-step-2-360.png))
- On the Order queue (`/tools/catalog/eip:211`) one token `a` moves, to Session 1, and the note
  reads "The Order queue gives order 31 to Session 1, the first free session in line. Only Session
  1 has it; Sessions 2 and 3 never see it."
  ([1440](walkthrough/competing-consumers-step-2-1440.png),
  [768](walkthrough/competing-consumers-step-2-768.png),
  [360](walkthrough/competing-consumers-step-2-360.png))

Read from the studies alone: a publish-subscribe channel gives every subscriber its own copy of
each message, while competing consumers on a point-to-point queue take each message once, by
whichever consumer is free.

## Request-Reply into Correlation Identifier

Request-Reply (`/tools/catalog/eip:83`) lists Correlation Identifier among its nearby concepts with
the reason "Reach for it as soon as more than one request can be outstanding. The request carries
an id and the reply copies it back, so each reply says which request it answers …"
([1440](walkthrough/request-reply-1440.png), [768](walkthrough/request-reply-768.png),
[360](walkthrough/request-reply-360.png)). Following the link opens `/tools/catalog/eip:87`, the
reading headed `Correlation Identifier`, with its flow
([1440](walkthrough/correlation-identifier-1440.png), [768](walkthrough/correlation-identifier-768.png),
[360](walkthrough/correlation-identifier-360.png)).

Read from the studies alone: a correlation identifier lets a requester match each reply to the
request it answers when several are outstanding on one reply channel, and recognise a late reply
whose request nobody awaits any more.
