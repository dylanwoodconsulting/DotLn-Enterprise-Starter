# Architecture review

Round 1 examined the complete target change against integrated main. The criteria, design and consistency reviewers each saw the same tree, `8f86a91095ac7fa9327f2bab6d4f5a7b06576257`. The requested design reviewer ran Claude Fable 5.2 at xhigh. The other two reviewers ran independently under Codex.

| Report and item | Input and judgment | Disposition |
| --- | --- | --- |
| Criteria 1 | Pressing Enter on “Back to the start” moved the range to zero. In the production browser the focused element then became the document body. Keyboard users lost their place. | Fixed. Restart returns focus to the range. The browser test activates the button with Enter and checks both the step and focus. |
| Criteria 2 and Consistency 2 | The operator ended the comparisons after seeing round 13 and made no selection for that round. The literal criterion 8 alternatives describe either a pick in every later round or deferral before the first pick. | Recorded once for both reviewers. The handoff marks that condition unmet and preserves the operator's decision. There is no pending design question. |
| Criteria 3 | A structurally valid TypeScript object can name both a node and an edge in one focus. The builder previously accepted the node and skipped validation of the edge. | Fixed. The builder rejects an ambiguous focus. Its regression supplies a real node alongside a missing edge. |
| Design 1 and 7 | Chunking produces one to five peer groups. A vertical stack gave every group its own apparent level. The model also copied the same width into every step. | Fixed. One column holds the peer chunks, between the event list and the summary. The run supplies its width to the builder once. The model spec checks peer alignment, distinct links and counts. |
| Design 2 and 3 | The mapping and network declarations selected the same coordinate calculation. The SVG and the curve calculation also declared the box size independently. | Fixed. Authored examples select levels or columns. The columns support both two-sided correspondences and a middle group of peers. The renderer and the curve calculation share the box dimensions. |
| Design 4 | Reordering Strange loop's references could put a different source next to the Print Gallery example. | Fixed. The example names the museum URL. The view takes its title and link from the matching catalog reference. A spec reverses the reference list. |
| Design 5 | A catalog writer could name different modules for the executable and its relations drawing while passing the generic record check. | Fixed. A focused fixture supplies two real module paths with specs. The validator rejects the disagreement for states and relations. |
| Design 6 and 14 | The four authored openings and the graph model currently serve this relationship family. The other families have their own example presentations. | Recorded. Moving all study families to a new opening or geometry interface would change consumers outside this order. The prediction now uses the existing disclosure state, like the rest of the study. |
| Design 8 | Step inputs and the generated reading share a value map. The builder writes its step, focus and note last. No shipped writer uses those names for a competing value. | Recorded. The generated reading keeps precedence. Adding another parameter language would require migration without changing a current result. |
| Design 9 and 10 | The sixteen illustrative entries expose a small model function beside their authored data. The word/code illustration and the running encoder share an example by design. | Recorded. Each record keeps its required independently loadable entry and spec. The encoder's executable tests check its arithmetic. The Isomorphism spec checks the correspondence shown to the reader. |
| Design 11 and 12 | Long reciprocal links could take the same outer route, and a hovered link offered its verb without naming either endpoint. | Fixed. Opposite long links have separate routes. Distinct authored verbs with identical same-direction endpoints would still share a curve. The current catalog has no such pair. A link's title and active reading use the same translated sentence with both endpoints. Its arrow remains unlabelled on the canvas. |
| Design 13 | The twenty records carry keyed reading templates for the work's English catalog. Their common grammar permits a future shared default. | Recorded. Each record's reading is required by the current schema and can be edited in its own work's catalog. |
| Consistency 1 | A work could reference a valid message in a different work's catalog. The global checker found the key, while a fresh route loads only the selected work and the shared messages. | Fixed. Runtime and tooling read the same work-to-catalog table. The record checker enforces the work boundary, and the message check enforces it for registered model entries. A regression gives a GEB drawing an existing Team Topologies message. |
| Consistency 3 and 4 | The pilot regression checked only the first number. The five-size checks waited for the limits but could measure the page before the deferred mechanism appeared. | Fixed. Tests read the pilot and triage parameters from their records and check the relevant mechanism steps. They wait for both expanded sections before measuring the page. |
| Consistency 5 and 6 | The loop regression could finish on the wrong node if its narration contained the start name. The service regression also coupled provenance and reading checks to fragments of English phrasing. | Fixed. The loop test checks the highlighted node. The service test checks the two ordered replies, provenance and reading from the English catalog and their placement before the figure. |
| Consistency 7 and 8 | The profile's dated target review predates the integrated scene release. The signed work order also assigns some evidence and release responsibilities to later stages. | Recorded. Integrated main has tag `v0.13.0`. The executor reports that base and the evidence it ran. The profile retains its dated audit, and the independently owned work remains with its designated role. |

Round 1 reported 25 findings counting the shared comparison finding in both reports. Fifteen received fixes and ten were recorded, including that duplicate. The reports are `round-1-criteria.md`, `round-1-design.md` and `round-1-consistency.md`.


## Round 2

All three reviewers examined target tree `bb3892bcfd3ee4906b3574cf728281167ea0f51e` after the first repairs. The design reviewer ran Fable 5.2 at xhigh. The reports were `round-2-criteria.md`, `round-2-design.md` and `round-2-consistency.md`.

| Report and item | Input and decision |
| --- | --- |
| Criteria 1 and Consistency 1 | Both identified the already recorded missing round 13 selection. The operator ended the activity. Criterion 8 remains unmet. |
| Criteria 2 | An illustrative guide recording can contain two blocked edits during one check. The ordinary listing used to look up the result once per edit, while the RxJS listing grouped by run. I corrected both to select blocked edits and read one saved result per affected run, one assignment per order and one plan per pass. Only the two displayed listings and their English testing copy changed. |
| Design 1, 2 and 3 | The graph uses named pixel dimensions and lane indices. A future three-column writer would have to choose lanes and respect their spacing. The shipped three-column writer assigns all lanes, and the five phone labels and the arrow endpoints were checked in the production application. The current view derives its height from the largest center plus the top margin. Recorded as maintenance observations. |
| Design 4 and 5 | A future author could remove the museum reference while leaving its URL in the model. The shipped record and reversed-order spec have the source. The architecture guide's detailed family description covers the third column, while an earlier overview focuses on the two-column examples. Recorded. |
| Consistency 2 | The organizational-sensing browser check includes a literal line from its illustrative stream example. A future editorial change could require updating this assertion. The current three pilot and triage parameter checks pass against their records. Recorded. |

The executor ran the two corrected published listings with the project's installed RxJS and synthetic records. Both performed the same lookups and retained the same refused edits. The check covered three cases.

| Recording | Refused edits | Gate rows | Assignments | Plans |
| --- | ---: | ---: | ---: | ---: |
| A saved guide with no blocked edit | 0 | 0 | 0 | 0 |
| Two refused edits in the same run, plus an ordinary save in another run | 2 | 1 | 1 | 1 |
| Three refused edits in three runs belonging to two assignments in one plan | 3 | 3 | 2 | 1 |

The reading critic's earlier judgments established the four record names and the rule that each higher-level fact comes from an existing written record. This correction changes how the displayed algorithms group the records. It leaves the source claims and the chosen opening intact. Round 2 reported nine findings. One received a fix and eight were recorded, including the shared comparison observation in both reports.

## Round 3

The combined reviewer examined the changes since round 2 on target tree `5123840469369a3186aaf4a2ee3bdbd81187dc94`. Those changes align the two published code listings and sort the imports in the study loader. The executor compared the final tree with all 1,459 target paths, file contents and modes.

The combined report identified one outstanding criterion. Only the operator can choose a design candidate, and they closed round 13 after reporting that the screenshots lacked context. Giving either candidate a recorded preference would misstate that input. Criterion 8 remains unmet. The service lesson now shows both requests and responses before the relationship drawing. The target needed no further edits. [Comparison record](design/comparisons.md#round-13--which-part-of-a-service-agreement-to-revisit) · [Decision](decisions.md#wo-024-d026)

The report was `round-3-combined.md`. One finding was recorded. Across the three rounds the reports contained 35 findings, with 16 fixed and 19 recorded. The repeated findings about the final comparison are counted in each report that raised them.
