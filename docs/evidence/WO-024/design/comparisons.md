# WO-024 design comparisons

## Round 1 · Loop geometry

Both candidates render the same self-referential card at its final step. Starting with its printed marks, the reader forms a sentence, interprets its meaning, and follows that meaning back to the original marks. Only the geometry changes. The operator chose A on 2026-11-19.

| Candidate | Geometry | Centre window | Phone |
| --- | --- | --- | --- |
| Round 1 A | Three levels rise from the marks to the meaning. A return arrow descends outside the stack. | [2080 × 1460](round-1-stack-2080.png) | [360 × 800](round-1-stack-360.png) |
| Round 1 B | Three stations sit around a ring. Its last arc returns to the first station. | [2080 × 1460](round-1-ring-2080.png) | [360 × 800](round-1-ring-360.png) |

Both were rendered in the Angular component with its scrubber and accessible text. The ring candidate supplied three circularly arranged nodes and three trimmed arcs to that same component in the temporary story `comparison-round-one.stories.ts`. The first pair's rendered images preserve it.

## Round 2 · Marking the selected relationship

| Candidate | Treatment | Centre window | Phone |
| --- | --- | --- | --- |
| Round 2 A | Only the selected return arrow gets the heavier stroke. | [2080 × 1460](round-2-arrow-2080.png) | [360 × 800](round-2-arrow-360.png) |
| Round 2 B | The same stroke also outlines the source and destination. | [2080 × 1460](round-2-endpoints-2080.png) | [360 × 800](round-2-endpoints-360.png) |

The operator chose A. The comparison story and the temporary endpoint marking were removed. Directly inspecting a node still highlights that node.

## Round 3 · Reading a step

| Candidate | Placement of the same sentence | Centre window | Phone |
| --- | --- | --- | --- |
| Round 3 A | Between the diagram and the controls | [2080 × 1460](round-3-above-2080.png) | [360 × 800](round-3-above-360.png) |
| Round 3 B | Immediately below the controls | [2080 × 1460](round-3-below-2080.png) | [360 × 800](round-3-below-360.png) |

The operator chose B. The component now places the sentence after the scrubber in both reading and visual order.

## Round 4 · Naming the arrow

| Candidate | Return arrow | Centre window | Phone |
| --- | --- | --- | --- |
| Round 4 A | Plain stroke with the verb in the reading below | [2080 × 1460](round-4-plain-2080.png) | [360 × 800](round-4-plain-360.png) |
| Round 4 B | The same reading plus the verb on the stroke | [2080 × 1460](round-4-verb-2080.png) | [360 × 800](round-4-verb-360.png) |

The operator chose A. The alternative placed the verb at the midpoint of the selected curve with a surface-colored outline. That labeling code was removed.

## Round 5 · Retracing the loop

| Candidate | Controls at the last step | Centre window | Phone |
| --- | --- | --- | --- |
| Round 5 A | Step buttons, slider and named moments | [2080 × 1460](round-5-controls-2080.png) | [360 × 800](round-5-controls-360.png) |
| Round 5 B | Also offer a direct return to the first step | [2080 × 1460](round-5-shortcut-2080.png) | [360 × 800](round-5-shortcut-360.png) |

The operator chose B. The final-step button emits step zero through the same controls as the slider.

## Round 6 · Locating the selected moment

The two candidates show the catalog's Levels of description study at its gate row, reached by selecting Link check.

| Candidate | Named shortcuts | Centre window | Phone |
| --- | --- | --- | --- |
| Round 6 A | All shortcuts retain their neutral treatment | [2080 × 1460](round-6-neutral-2080.png) | [360 × 800](round-6-neutral-360.png) |
| Round 6 B | The current shortcut receives a keyline, a tinted fill and an accessible current-step state | [2080 × 1460](round-6-marked-2080.png) | [360 × 800](round-6-marked-360.png) |

The operator chose B. The current state follows the selected step whether the reader uses a shortcut, step button or slider.

## Round 7 · Names on the level shortcuts

| Candidate | Names in the guide-revision example | Centre window | Phone |
| --- | --- | --- | --- |
| Round 7 A | Attempted edit, Link check, Guide revision, Tutorial dependency | [2080 × 1460](round-7-activity-2080.png) | [360 × 800](round-7-activity-360.png) |
| Round 7 B | Hook refusal, Gate row, Work order, Planning pass | [2080 × 1460](round-7-level-2080.png) | [360 × 800](round-7-level-360.png) |

The operator chose the names of levels and continued the comparisons. Their reading feedback identified a more fundamental problem. The screenshots introduced labels before the reader knew which event they described or what the example could teach. The next comparison shows the entire worked example.

## Round 8 · How the reader learns where the words come from

Both versions tell the same afternoon’s story and name all four records before the diagram. Its caption explains how to follow an arrow. The relation to the public kit appears after the drawing. [Both earlier examples, with their wording and conclusions](worked-examples.md)

| Candidate | Organization of the explanation | Centre window | Phone |
| --- | --- | --- | --- |
| Round 8 A | Start with what each record says, identify it and interpret its evidence. | [2080 × 1460](round-8-evidence-2080.png) | [360 × 800](round-8-evidence-360.png) |
| Round 8 B | Start with four questions a reader has a reason to ask and find each answer in the corresponding record. | [2080 × 1460](round-8-questions-2080.png) | [360 × 800](round-8-questions-360.png) |

The reader found neither version explanatory. The two candidates have been replaced. Opus 5.5 identified that a hook, a check result, an assignment and a plan are four sources. A first example needs to show what changes when someone reads one observable thing at another level.

## Round 9 · Start with something the reader can inspect

Both candidates first show one object, identify where its words come from and let a reader predict an outcome before revealing it. They then use the same four sample DotLn entries to explain how a broader question leads to a different source. Each screenshot was taken with the prediction open.

| Candidate | First object | Centre window | Phone |
| --- | --- | --- | --- |
| Round 9 A | An actual test result. Its two links have targets. An outdated paragraph would leave the test passing. | [2080 × 1460](round-9-output-2080.png) | [360 × 800](round-9-output-360.png) |
| Round 9 B | A sign made for the lesson. Printing the two words in lowercase changes the lettering and keeps the warning. | [2080 × 1460](round-9-sign-2080.png) | [360 × 800](round-9-sign-360.png) |

The operator chose the observed test result and continued the comparisons. The bench-sign alternative was removed from the study. The guide example identifies the writer of the test name and the source of the verdict. Its worked records then introduce the saved guide, the attempted edit, the assignment and the earlier planning decision.

## Round 10 · How a sentence can lead back to itself

| Candidate | Opening of the Strange loop study | Centre window | Phone |
| --- | --- | --- | --- |
| Round 10 A | Carry out one instruction and follow its meaning back to the marks on its own card. | [2080 × 1460](round-10-single-2080.png) | [360 × 800](round-10-single-360.png) |
| Round 10 B | Try two cards. The first sends the reader to the windows in the room. The second sends the reader back to its own letters. | [2080 × 1460](round-10-pair-2080.png) | [360 × 800](round-10-pair-360.png) |

The operator chose the pair and continued with Team Topologies. Both content critics accepted either reading. The reader can try both cards before opening the explanation or tracing the route in Escher’s gallery.

## Round 11 · When two teams can end their joint trial

Checkout supplies a passing and a failing build. Release Platform brings a preview service. The teams have ten working days to establish how a preview is requested, how failures are diagnosed and who handles cleanup. Both openings use notes written for this example.

| Candidate | How the trial is organized | Centre window | Phone |
| --- | --- | --- | --- |
| Round 11 A | Read what the teams did together, then what a new engineer could do at the handoff. | [2080 × 1460](round-11-timeline-2080.png) | [360 × 800](round-11-timeline-360.png) |
| Round 11 B | Follow Checkout’s contributions and Release Platform’s contributions separately. | [2080 × 1460](round-11-owners-2080.png) | [360 × 800](round-11-owners-360.png) |

The operator chose the chronological account. The selected copy says both teams agreed when a link was ready and explicitly names the independent creation, diagnosis and removal check. The separate owner-by-owner alternative was removed.

## Round 12 · Recognizing the end of coaching

The runbook and the two teams were introduced in the study’s rollback exercise. Both drawings show the same independent attempt. Reliability has stepped back and a second Returns engineer must restore and check the release without coaching.

| Candidate | Highlight at the independent attempt | Centre window | Phone |
| --- | --- | --- | --- |
| Round 12 A | The Rollback drill node identifies the task being tested. | [2080 × 1460](round-12-drill-2080.png) | [360 × 800](round-12-drill-360.png) |
| Round 12 B | The arrow from Returns team to Rollback drill identifies the team performing the test. | [2080 × 1460](round-12-learner-2080.png) | [360 × 800](round-12-learner-360.png) |

The operator chose B and asked to continue. The selected relation names the team that demonstrated the skill after Reliability stepped back.

## Round 13 · Which part of a service agreement to revisit

Checkout uses a temporary copy of its app to test a change. In this fictional example, Release Platform runs the Preview API and publishes instructions that cover one app per request. Checkout can keep using those instructions while both teams work out how to preview a checkout app and a payments app together. Both versions keep all six steps. Each provides a different fourth shortcut beside using the preview, reporting the gap and using the revised service.

| Candidate | Additional shortcut and the question it answers | Centre window | Phone |
| --- | --- | --- | --- |
| Round 13 A | “Set expectations” shows who publishes the instructions Checkout can follow alone. | [2080 × 1460](round-13-publish-2080.png) | [360 × 800](round-13-publish-360.png) |
| Round 13 B | “Try the two-app rules” shows what both teams must agree on when a request falls outside those instructions. | [2080 × 1460](round-13-discover-2080.png) | [360 × 800](round-13-discover-360.png) |

The operator reported that neither image explained what they were looking at, then ended A/B testing for now on 2026-11-20. Neither shortcut received a pick. The trial shortcut was removed, and the pre-round navigation was restored. Criterion 8 describes a pick in every later round or a deferral at round 1. The final round ended without a pick, as the operator directed.

### The revised explanation

An engineer wants to try a new Pay button before shoppers see it. Checkout builds the shop app. Release Platform runs the tool that makes private test copies. Checkout can obtain one copy by following the published instructions. Testing a declined payment takes a second app to simulate the decline, and the tool currently supports only one app. That missing capability gives the teams a reason to work together. Once another engineer can start and remove the two-app preview from the revised instructions, Checkout can use the service on its own again.

The two requests and replies were written for this fictional shop. The study now says so before the reader encounters the diagram. The same explanation is shown here at reading size. [Worked example](preview-service-explained-desktop.png) · [Phone](preview-service-explained-phone.png)
