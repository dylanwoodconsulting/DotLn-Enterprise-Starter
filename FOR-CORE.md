# For core

What this instance has learned that DotLn core should hear: what the kit
itself got wrong or made hard here. Each order's final review appends an entry
when it found anything during that order; each planning pass reads this file
at entry, appends its own entries and sets `answered` on those a release this
instance has taken answered. Nothing here leaves the instance on its own: the
operator paraphrases the entries they choose to a core planning pass, or sends
them.

An entry is appended, never rewritten; only its `answered` field changes, once.
Write it in generic words that name no private host, gateway, account,
repository or internal service: the local-terms and private-path screens judge
this file as they judge every document, and `node scripts/docs-check.mjs`
judges each entry's fields.

Every second-level heading below this text is an entry: the date, the order or
planning pass it came from, and one line. Directly under it is a `json` block
of three fields, then plain prose: what the kit did, what was expected, the
command and the message it printed, and the route used meanwhile.

- `kit`: the kit version the instance ran, `"vX.Y.Z"` as `UPSTREAM.md` names
  it.
- `stopsNextOrder`: `true` when it stops this instance's next order and no
  working route exists here, otherwise `false`.
- `answered`: `null`, or the version `"vX.Y.Z"` of the taken release that
  answered it.

For example:

````markdown
## 2026-11-09 — WO-002 — the update preview refused a path the kit had written

```json
{ "kit": "v0.123.0", "stopsNextOrder": false, "answered": null }
```

What the kit did, what was expected, the command and its message, and the
route used meanwhile.
````

## 2026-11-14 — planning pass standard-pass-v1-0-0 — an update's merge that takes the starter's harness manifest leaves the emit refusing the instance's Codex surfaces

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": "v1.0.1" }
```

On the update branch for v1.0.0 Git stopped on a conflict in
`.claude/harness-manifest.json`, which the starter and this instance had
both written. The preview had planned that file as `re-emitted`, and the
kit guide's update section says such a file is replaced and the closing
emit writes it again, so the conflict was resolved to the starter's side.
`node scripts/harness.mjs emit` then refused with `unowned Codex output
refuses replacement: .codex/config.toml`. The starter's manifest is a
Claude-only bundle's and lists no Codex surface as installed; this
instance has Codex on, by its own attestations, and the Codex surfaces
were still in the tree because the merge base holds none for the merge to
remove. Expected: the update steps say which side a Git merge keeps for
the generated manifest when the instance has a host the starter lacks, or
the emit on an update branch reads ownership from the manifest `main`
holds. Route used: `git checkout main -- .claude/harness-manifest.json`
before the emit, which then wrote 37 surfaces; `harness check` and
`launchpad verify` pass.

## 2026-11-14 — planning pass standard-pass-v1-0-0 — the new Markdown reader gives four register rows a new key and leaves their dispositions on rows that read missing

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": "v1.2.0" }
```

After the update `npm run sync` collected the follow-up register's
candidates again through v1.0.0's Markdown reader. Four candidate rows
whose bold title holds an asterisk (a starred name, a glob pattern, a bold
field name inside a code span) were read with a longer title than the
earlier line reader gave them, and a row's key is derived from that text.
The four existing rows, each settled or allocated by an earlier pass,
turned `needs-review` with their source missing, and four new rows with
the same text appeared untriaged; `npm run plan -- start` reported them as
`needs-review: 4` and `untriaged: 4` and printed no other message.
Expected: a release that changes the text a key is derived from carries
each row's dispositions to its new key, or says in its Read before
upgrading that rows may need carrying. Route used: the pass disposed each
old row as a duplicate of the row that now holds its text and wrote the
earlier disposition onto the new one by hand.

## 2026-11-14 — planning pass standard-pass-v1-0-0 — the executor's root names a flag for the run after a failed run that the target gate refuses

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

Read in the kit's text and code by this pass; no order here has met it yet,
and every order this instance has queued is a target order. The executor's
root and product 07 say that after a failed complete run the executor
starts a fresh one with `--keep-going`, so that one run names every suite
that still fails. A target order's complete run is `node
scripts/target-gate.mjs WO-NNN --review`, and that command admits `--review`
and nothing else: any other argument prints `usage: target-gate WO-NNN
[--review]` and exits 1. The target gate already runs every declared
command whatever failed before it, so the flag has nothing to add there.
Expected: the role text says the flag belongs to the kit's own runner, or
the target gate takes it and ignores it. Route used: this instance's
repository profile now says that the target gate takes no other argument
and that the run after a failed run is the same command.

## 2026-11-14 — planning pass standard-pass-v1-0-0 — the review helper refuses a criteria report whose Items table follows one sentence, as a report with no Items table

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

A criteria recheck of the planning subject, launched through `npm run
worker -- review` with the dispatch capture, the second round and the first
round's report to recheck, returned no finding and confirmed both earlier
fixes after 0 h 9 min. Its report holds an Items section whose table answers
both parts of the dispatch, with one sentence between the section's heading
and the table. The helper refused the report as one that has no Items
table and recorded no report for the round. The table reader takes only the
block directly after the heading (`tableUnder` in
`scripts/lib/review-worker.mjs`), so a lead-in sentence reads as no table.
The refused text was kept in the lane, as this release promises, so the
judgment was not lost; the round's record was. Expected: the reader takes
the first table of the section, or the refusal says that text stands
between the heading and the table; and a report refused for its form can be
restated by the worker the helper launched, as a session's own worker can.
Route used: the pass records the round as returned and refused, names the
kept file, and did not pay for the launch again.

## 2026-11-14 — planning pass standard-pass-v1-0-0 — a core-only suite run alone in an instance fails on an assertion and says nowhere that it is core's

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

A review worker the helper launched chose `scripts/test-lineage.mjs` for
its one bounded probe of the regenerated lineage index. Its sandbox stopped
the wrapper before the runner started, so the planner ran the same command:
`node scripts/harness.mjs bounded -- node --test --test-name-pattern
'^current index matches independently counted lead statuses and stays
outside the product gate$' scripts/test-lineage.mjs`. It exited 1 with
`ERR_ASSERTION` from a `strictEqual` over the index's line of links, which
the test renders with links to two lineage documents core has and this
instance does not. The test runner lists the file as `core-only: core idea
ledger` and keeps it out of an instance's gates, and the instance's own
check, `node scripts/lineage.mjs index --check`, passes. Nothing in the
file, its failure or a review brief says the suite cannot pass here, so a
worker whose sandbox lets the run start would hold a failing test against
a change that did not cause it. Expected: a core-only suite run in an
instance skips and gives its reason, or the review brief names the suites
an instance's gates run. Route used: the pass read the runner's entry for
the file and records the probe as one that cannot pass in an instance.

## 2026-11-15 — WO-036 — a verdict its verifier withdraws has no ordinary route to a later verification

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

A verifier filed a failing report that rested on one reading of a criterion,
then judged the reading wrong at the operator's direction. The correction
rule asks for a later report and never an edit of the filed one, but the
failed verdict had put the order in `needs-fix`, where the verify dispatch is
not legal: the order's decision record says the ordinary command requires
`ready-to-verify`, and it keeps no copy of the message printed. Expected: a
route by which the role that filed a verdict can file a superseding
verification of the same target tree when the judgment was wrong and the
product was not, without a repair completion being invented to reach the
phase. The route used was `operator override:`, with one override record
naming the single check it bypassed and the later report allocated under it.

## 2026-11-15 — WO-036 — the draft form of the target publish is refused once final review is dispatched

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

The passing verification above was recorded by a session that published
nothing, so the order reached final review with no draft pull request, and
this instance's orders make the draft's workflow runs and review threads a
final-review duty. `node scripts/worktree.mjs publish WO-036
--target-worktree --draft --branch <type>/<slug> --title <title> --body-file
<path>`, run by the final reviewer before recording a result, printed `error:
target publish refused: the draft form is legal at verified with a passing
verification; WO-036 is final-review`. Expected: the draft form admitted in
`final-review` until the result is recorded, so a reviewer who finds none can
open it, read what it draws and then publish over it. The route used: the
review recorded that no draft existed, judged on its own gates and published
the pull request ready, where the workflows run before the operator merges.

## 2026-11-15 — WO-036 — the document gate's formatting task ran out of its fixed thirty seconds on a busy host

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": "v1.3.0" }
```

A verification's `npm run test:docs` failed twice at its formatting task,
which `scripts/test-runner.mjs` gives `timeoutMs: 30000`, and skipped the
fourteen suites after it, so the order's document-gate criterion was judged
unmet on a tree whose formatting was clean. The session had served a
production build and driven a browser just before. The same check run alone
took 11.9 seconds and passed, and the whole gate passed once nothing else of
the session was running. Expected: a formatting task that times out reports
a timeout under load and how to run it again, or takes its deadline from the
host, and is not read as a failed formatting prerequisite. The route used:
the gate was run again with the host quiet.

## 2026-11-15 — WO-036 — a command the host guard stops at its memory budget ends with exit 1 and prints nothing

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

Outside the bounded wrapper the host guard gives a session's command three
gibibytes. Twelve of an executor's commands in a target worktree were
stopped there (the incident log's failure kind `memory-budget`), eleven of
them one project's unit tests at their configured worker count, and each
ended with exit 1 and no output, so several were rerun before the incident
log was read. The guard also refuses the bounded wrapper in a target
worktree, so the wrapper's larger budget was not to be had there. Expected:
the stopped command's output names the guard, the budget and the footprint
it measured. The route used: the tests ran at one worker outside the gate
and at their configured count inside the registered target gate, which has
its own budget for each command.

## 2026-11-15 — WO-036 — recording a target order's review without naming the target binds the launchpad as the tree reviewed

```json
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
```

`npm run worker -- record` for an order whose header names a registered
repository, run without `--target <id>`, filed six review reports whose
receipts name the launchpad's working tree as the tree reviewed, with no
refusal and no advisory. It came to light only when a later round's `--since
<tree>` named a tree the bound checkout did not hold and was refused.
Expected: the recorder takes the order's registered target by default, or
refuses a target order's record that names none. The route used: the later
rounds were recorded with `--target`, and the earlier receipts' identity is
corrected in the order's decisions, the report bytes left as filed.

## 2026-11-19 — WO-037 — the final reviewer's briefing says a defect in the order's surfaces is repaired in the order, where the execution guide says a reviewer never writes a behavioral fix it certifies

```json
{ "kit": "v1.4.0", "stopsNextOrder": false, "answered": null }
```

At `resume: final review` the briefing told the reviewer that a repairable
defect within the order's declared surfaces is repaired in the order through
Adjacent Repair, and the reviewer role text says to fix a met defect within
the Boy Scout bound or board it. Product 07's §Independent workflows and
integration says a reviewer never writes a behavioral fix and certifies it,
and §Verification review and attack routes a defect that breaks no criterion
to a follow-up. Read together, the briefing reads as a duty the reviewer
cannot discharge without breaking the guide's rule. Expected: the reviewer's
briefing says which rule binds the final reviewer. For example, a follow-up
in the declared surfaces stays boarded unless its fix is non-behavioral
cleanup, and a behavioral repair returns through `resume: fix` with fresh
verification. The route used: the reviewer wrote a small behavioral repair
in the order's surfaces with a regression case and withdrew it before
relying on any gate row. The verified tree stood, and the defect stayed a
follow-up with the repair's approach recorded on its decision.
