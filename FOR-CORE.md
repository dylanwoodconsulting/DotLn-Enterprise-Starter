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
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
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
{ "kit": "v1.0.0", "stopsNextOrder": false, "answered": null }
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
