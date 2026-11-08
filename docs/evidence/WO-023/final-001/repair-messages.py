import json, sys
root = sys.argv[1]
shipped = f"{root}/apps/dotln/public/i18n/studyPoeaa/en.json"
mirror = f"{root}/libs/features/tools/testing/src/lib/study-en.json"
R = [
 ("gateway.record.nearby.item0.why",
  "To test the store without the API: the back is where a stub stands in, and its study runs the board store's cases against one, with this gateway's translation unchanged.",
  "To test the store without the API: its study puts the stub where the API would answer, behind this gateway's back, and runs the board store's cases through the front and back unchanged."),
 ("service-stub.record.nearby.item0.why",
  "The stub needs a seam to stand behind; read it for where the gateway's front ends and the back a stub replaces begins. Its study follows one of these requests to the real API.",
  "The stub needs a seam to stand behind; read it for the front and the back that run unchanged in front of the stub, and for the translation these cases check. Its study follows one of these requests to the real API."),
 ("lazy-load.record.mechanism.steps.step1.text",
  "The first read of a study looks up its work in the summary and asks for that work's chunk, keeping the pending load under the work's name. A concept with no study answers none and loads nothing. Chunk requests so far: {requests}.",
  "The first read of a study looks up its work in the summary and asks for the chunk that holds the study: the work's chunk, as the app has it, or the study's own when every study has one. The pending load is kept under that chunk's name. A concept with no study answers none and loads nothing. Chunk requests so far: {requests}."),
 ("lazy-load.record.mechanism.steps.step2.text",
  "The chunk carries every study of the work, so one request fills them all, however few the reader opens. Splitting it per study would cost a request for every study read instead. Records in memory now: {records}.",
  "With one chunk for the work, as the app has it, one request fills every study of the work, however few the reader opens; with a chunk for each study, every study read costs a request of its own. Records in memory now: {records}."),
 ("lazy-load.record.mechanism.steps.step3.text",
  "A later read of any study of the work finds the kept load and waits on it, so it costs no request, and every reading receives the same record.",
  "A later read of a study whose chunk is already kept finds the kept load and waits on it, so it costs no request, and every reading receives the same record."),
 ("lazy-load.model.worked.eachOwn",
  "Each study still waits for a read of its own.",
  "A study not read yet still waits for a read of its own."),
 ("service-stub.record.example.description",
  "Four of the cases the board store's spec runs go through the board gateway, with the app's HTTP API replaced by a stub that answers in memory: the recorded board, a refusal with status {refusalStatus}, a dropped connection, and a timeout staged by holding the answer {stubDelayMs} ms against a case limit of {timeoutMs} ms. {stubKind} The stub's board is contract version {fixtureVersion}; at release one call goes to the live API, which serves version {liveVersion}.",
  "Four of the cases the board store's spec runs go through the board gateway, with the app's HTTP API replaced by a stub that answers in memory: the recorded board, a refusal with status {refusalStatus}, a dropped connection, and a timeout, which a stub that reads the scenario stages by holding the answer {stubDelayMs} ms against a case limit of {timeoutMs} ms. {stubKind} The stub's board is contract version {fixtureVersion}; at release one call goes to the live API, which serves version {liveVersion}."),
 ("service-stub.record.mechanism.steps.step2.text",
  "The gateway waits for the stub's answer and translates it exactly as it would the API's. The timeout case costs only its own limit, {timeoutMs} ms, because the stub holds its answer for {stubDelayMs} ms, longer than the case will wait.",
  "The gateway waits for the stub's answer and translates it exactly as it would the API's. A stub that reads the scenario holds the timeout case's answer for {stubDelayMs} ms, longer than the case's limit of {timeoutMs} ms, so that case costs only its own limit; a static stub answers it at once, with the board."),
 ("service-stub.record.limits.item2",
  "A staged timeout holds only while the stub outwaits the case. The timeout case passes because the stub holds its answer for {stubDelayMs} ms and the case stops waiting after {timeoutMs} ms; give the case a limit longer than the stub's delay and the board arrives in time, so the case fails. In this app the two numbers live in two files, the handler and the store's spec, and nothing ties them together.",
  "A staged timeout holds only while the stub outwaits the case. With a stub that reads the scenario, the timeout case passes because the stub holds its answer for {stubDelayMs} ms and the case stops waiting after {timeoutMs} ms; were the case's limit longer than the stub's delay, the board would arrive in time and the case would fail, as it does when a static stub answers at once. In this app the two numbers live in two files, the handler and the store's spec, and nothing ties them together."),
 ("unit-of-work.record.limits.item0",
  "A unit of work kept open for a long session holds the versions it read at the start. Set the saves by another tab to 1 and step to the commit: Hold the ridge is stored at a newer version than the one held here, so the whole save is refused, and the creation and the deletion are lost with the rename unless the operator makes them again.",
  "A unit of work kept open for a long session holds the versions it read at the start. With Hold the ridge renamed at least once, set the saves by another tab to 1 and step to the commit: Hold the ridge is stored at a newer version than the one held here, so the whole save is refused, and the creation and the deletion are lost with the rename unless the operator makes them again. A composition the session left unchanged is not checked, so with no rename the same save goes through."),
 ("pessimistic-offline-lock.record.limits.item0",
  "An abandoned lock keeps everyone out until it runs out. Set the saves by Tab A to 0: its tab is closed with the lock still taken, and Tab B, which only wants to start, waits for the timeout rather than for anyone's work. In the same case an optimistic lock lets Tab B save the moment it is done, so a pessimistic lock is the wrong choice where collisions are rare and tabs are often left open.",
  "An abandoned lock keeps everyone out until it runs out. Set the saves by Tab A to 0, with a lock that lasts longer than Tab A stays open, as the example's does: its tab is closed with the lock still taken, and Tab B, which only wants to start, waits for the timeout rather than for anyone's work. In the same case an optimistic lock lets Tab B save the moment it is done, so a pessimistic lock is the wrong choice where collisions are rare and tabs are often left open."),
 ("unit-of-work.record.example.description",
  "Two compositions are stored: Flank left at version {versionFlank} and Hold the ridge at version {versionRidge}. In one session the operator creates Night march, renames Hold the ridge {renames} times and deletes Flank left, then saves once. {rival}",
  "Two compositions are stored: Flank left at version {versionFlank} and Hold the ridge at version {versionRidge}. In one session the operator creates Night march and deletes Flank left, with renames of Hold the ridge in between: {renames}. Then the operator saves once. {rival}"),
 ("identity-map.model.comparison.reads",
  "By the last step the map has made {{reads}} reads for {{lookups}} lookups, {{hits}} of them hits.",
  "By the last step, store reads through the map: {{reads}}; lookups: {{lookups}}; hits among them: {{hits}}."),
 ("unit-of-work.record.implementations.item0.explanation",
  "The author's reading of the code, not a claim that it was designed as this pattern: the store changes its compositions in memory as events arrive, and withPersistedState writes the whole list to browser storage only when the save counter moves (writeOn: state.saves), so one save is one write. Just before it, SceneFacade.save re-reads the stored list, because another tab may have saved since, and appends the new composition. It keeps no registers and checks no versions; that is safe today only because a save adds a composition and never changes or removes one, which is where a unit of work, and the version check of an optimistic lock, would come in.",
  "The author's reading of the code, not a claim that it was designed as this pattern: the store changes its compositions in memory as events arrive, and withPersistedState writes the whole list to browser storage only when the save counter moves (writeOn: state.saves), so one save is one write. Just before it, SceneFacade.save re-reads the stored list, because another tab may have saved since, and appends the new composition. It keeps no registers and checks no versions; that is safe today only because a save adds a composition and never changes or removes a readable one, which is where a unit of work, and the version check of an optimistic lock, would come in. One removal does happen: a stored composition that could not be read is not in the list the save writes, so the save drops it, after the scene has warned that saving will replace it."),
 ("remote-facade.record.limits.item1",
  "Coarse cuts both ways. The board's one call brings all {totalRows} rows although the page shows one panel at a time, and a refresh reloads the whole board. A facade shaped for each screen grows a method for every new view; one shaped too broadly sends what nobody reads. Its operations should follow what clients do, not the objects behind them.",
  "Coarse cuts both ways. The board's one call brings every panel's rows, {totalRows} when every source answers, although the page shows one panel at a time, and a refresh reloads the whole board. A facade shaped for each screen grows a method for every new view; one shaped too broadly sends what nobody reads. Its operations should follow what clients do, not the objects behind them."),
 ("remote-facade.record.implementations.item0.relevance",
  "The board's data access is the one place the app fetches its data across a network, from the app's own API or the mock that stands in for it.",
  "The board's data access is the one place the app calls its own API across a network, or the mock that stands in for it; the only other fetch loads the message catalogs as static files."),
]
def setpath(obj, path, old, new):
    keys = path.split(".")
    node = obj
    for k in keys[:-1]:
        node = node[k]
    assert node[keys[-1]] == old, f"unexpected current value at {path}: {node[keys[-1]]!r}"
    node[keys[-1]] = new
a = json.load(open(shipped, encoding="utf-8"))
b = json.load(open(mirror, encoding="utf-8"))
for path, old, new in R:
    setpath(a, path, old, new)
    setpath(b["studyPoeaa"], path, old, new)
open(shipped, "w", encoding="utf-8").write(json.dumps(a, indent=2, ensure_ascii=False) + "\n")
open(mirror, "w", encoding="utf-8").write(json.dumps(b, indent=2, ensure_ascii=False) + "\n")
assert b["studyPoeaa"] == a
print(f"applied {len(R)} repairs to both catalogs")
