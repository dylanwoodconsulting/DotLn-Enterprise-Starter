// Copied into the corresponding studies directory of the verifier's disposable target copy.
// These tests exercise supported state moves and the read limits named by the order.
import { loadModelStudy, studyTranslate } from "../../../testing/src";
import { statesModel, type StatesRun } from "./states";
import { foreignKeyRun } from "./poeaa/foreign-key-mapping.simulation";

const parts = { moments: [], legend: [], caption: "Verifier boundary probe" };
const shape: StatesRun["shape"] = {
  nodes: [
    { id: "ready", label: "Ready" },
    { id: "done", label: "Done" },
  ],
  objects: [{ id: "item", label: "Item", key: "I" }],
  transitions: [
    { id: "enter", from: null, to: "ready", label: "Enter" },
    { id: "finish", from: "ready", to: "done", label: "Finish" },
    { id: "again", from: "done", to: "done", label: "Again" },
    { id: "leave", from: "done", to: null, label: "Leave" },
  ],
};
const build = (snapshots: StatesRun["snapshots"], currentShape = shape) =>
  statesModel(
    { shape: currentShape, snapshots, text: [] },
    parts,
    studyTranslate,
  ).states;

it("infers entry, ordinary move, and exit but does not invent a self-loop", () => {
  const states = build([
    { at: { item: null } },
    { at: { item: "ready" } },
    { at: { item: "done" } },
    { at: { item: "done" } },
    { at: { item: "done" }, took: { item: "again" } },
    { at: { item: null } },
  ]);
  expect(
    states.frames.map(({ moves }) => moves.map(({ transition }) => transition)),
  ).toEqual([[], ["enter"], ["finish"], [], ["again"], ["leave"]]);
});

it("refuses ambiguous entry and exit and honors an explicit choice", () => {
  for (const transition of [shape.transitions[0], shape.transitions[3]]) {
    const ambiguous = {
      ...shape,
      transitions: [...shape.transitions, { ...transition, id: "other" }],
    };
    const snapshots = [
      { at: { item: transition.from } },
      { at: { item: transition.to } },
    ];
    expect(() => build(snapshots, ambiguous)).toThrow(/snapshot must name one/);
    expect(
      build(
        [snapshots[0], { ...snapshots[1], took: { item: "other" } }],
        ambiguous,
      ).frames[1].moves[0].transition,
    ).toBe("other");
  }
  expect(() =>
    build([
      { at: { item: "ready" } },
      { at: { item: "done" }, took: { item: "enter" } },
    ]),
  ).toThrow(/cannot take enter/);
});

it.each([1, 2, 3, 4, 5, 6])(
  "counts row reads separately from references at limit %i",
  (readLimit) => {
    for (const identityMap of [false, true]) {
      const steps = foreignKeyRun({
        lineDataMapper: 240,
        lineIdentityMap: 254,
        lineUnitOfWork: 246,
        identityMap,
        readLimit,
      });
      const last = steps.at(-1)!;
      expect(last.loader.reads).toBe(
        identityMap ? Math.min(3, readLimit) : readLimit,
      );
      expect(last.loader.objects).toHaveLength(last.loader.reads);
      expect(steps.every(({ loader }) => loader.reads <= readLimit)).toBe(true);
      for (const object of last.loader.objects)
        expect(
          object.references.every(
            (index) => index >= 0 && index < last.loader.objects.length,
          ),
        ).toBe(true);
      if (identityMap && readLimit >= 3) {
        expect(last.loader.pending).toEqual([]);
        expect(
          last.loader.objects.reduce(
            (total, object) => total + object.references.length,
            0,
          ),
        ).toBe(6);
        expect(steps).toHaveLength(8);
      } else {
        expect(last.operation.kind).toBe("stopped");
        expect(last.loader.pending.length).toBeGreaterThan(0);
      }
    }
  },
);

it("the unified loader accepts the states record and refuses a wrong family or structural record", async () => {
  expect((await loadModelStudy("poeaa:278", "states")).visual.family).toBe(
    "states",
  );
  await expect(loadModelStudy("poeaa:278", "flow")).rejects.toThrow(
    "No flow study",
  );
  await expect(loadModelStudy("poeaa:214", "states")).rejects.toThrow(
    "No states study",
  );
});
