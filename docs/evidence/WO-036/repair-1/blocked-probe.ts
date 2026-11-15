// The repair of VER-001 F2, measured: a unit on the move whose route a second wall seals off,
// carrying each kind of steering beside its path tool. Then the adjacent repair: a formation
// given after a path tool.
//
//   probe.mjs <target> blocked-probe.ts
import {
  createTestScene,
  createTestStep,
  createTestUnit,
} from "./libs/shared/scene-engine/testing/src/lib/scene-builders";
import {
  applyStep,
  isSafeStep,
} from "./libs/shared/scene-engine/src/lib/interpreter";
import { measure } from "./libs/shared/scene-engine/src/lib/metrics";
import {
  advance,
  createSimulation,
  frameOf,
  isAtRest,
} from "./libs/shared/scene-engine/src/lib/simulation";
import { distance, length } from "./libs/shared/scene-engine/src/lib/vectors";

const apply = (state, kind, ids, params) => {
  const step = createTestStep(kind, ids, params, state.tick);
  if (!isSafeStep(step)) throw new Error(`unsafe ${kind}`);
  const result = applyStep(state, step);
  if (result.refusal !== null) throw new Error(`refused ${kind}`);
  return result.state;
};
const run = (state, frames) => {
  for (let frame = 0; frame < frames; frame += 1) state = advance(state);
  return state;
};
const row = (value) => console.log(JSON.stringify(value));
const wall = { x1: 60, y1: 0, x2: 60, y2: 50, thickness: 1, shape: 1 };
const seal = { x1: 60, y1: 40, x2: 60, y2: 80, thickness: 1, shape: 2 };

const carried = [
  { name: "nothing else", before: [], after: [] },
  {
    name: "Velocity matching",
    before: [["steer.blend", ["a"], { "velocity-match-weight": 1 }]],
    after: [],
  },
  {
    name: "Wander",
    before: [["steer.blend", ["a"], { "wander-weight": 1 }]],
    after: [],
  },
  {
    name: "cohesion with a unit that has a way",
    before: [["steer.blend", ["a", "mate"], { "cohesion-weight": 1 }]],
    after: [],
  },
  {
    name: "Equilibrium fallback (seek, then wander)",
    before: [],
    after: [
      [
        "steer.priority",
        ["a"],
        { "seek-priority": 1, "wander-priority": 2, epsilon: 0.1 },
      ],
    ],
  },
];

for (const { name, before, after } of carried) {
  let state = createSimulation(
    createTestScene([
      createTestUnit("a", { position: { x: 20, y: 20 } }),
      createTestUnit("mate", { position: { x: 20, y: 60 } }),
    ]),
  );
  state = apply(state, "field.wall", [], wall);
  state = apply(state, "objective.set", [], { x: 100, y: 20 });
  for (const [kind, ids, params] of before)
    state = apply(state, kind, ids, params);
  state = apply(state, "path.find", ["a"], { heuristic: 3 });
  for (const [kind, ids, params] of after)
    state = apply(state, kind, ids, params);
  state = run(state, 30);
  const movingSpeed = length(state.units[0].velocity);
  state = apply(state, "field.wall", [], seal);
  const from = state.units[0].position;
  state = run(state, 300);
  const stood = state.units[0].position;
  const later = run(state, 120);
  const cleared = run(apply(state, "field.clear", [], {}), 120);
  row({
    carrying: name,
    speedWhenSealed: Number(movingSpeed.toFixed(3)),
    activity: frameOf(state).units[0].activity,
    displacementSinceSeal: Number(distance(from, stood).toFixed(6)),
    speed: Number(length(state.units[0].velocity).toFixed(6)),
    unitAtRest: length(state.units[0].velocity) === 0,
    sceneAtRest: isAtRest(state),
    movedInTheNext120Frames: Number(
      distance(stood, later.units[0].position).toFixed(6),
    ),
    movedIn120FramesAfterClearing: Number(
      distance(stood, cleared.units[0].position).toFixed(3),
    ),
  });
}

// A formation given after a path tool, and a path tool given after a formation.
const squad = [
  createTestUnit("a", { position: { x: 20, y: 18 } }),
  createTestUnit("b", { position: { x: 20, y: 22 } }),
  createTestUnit("c", { position: { x: 16, y: 20 } }),
];
const ids = squad.map((unit) => unit.id);
for (const order of ["path then formation", "formation then path"]) {
  let state = createSimulation(createTestScene(squad));
  state = apply(state, "field.wall", [], wall);
  state = apply(state, "objective.set", [], { x: 100, y: 20 });
  if (order === "formation then path")
    state = apply(state, "formation.twoLevel", ids, { pattern: 0 });
  state = apply(state, "path.find", ids, { heuristic: 3 });
  if (order === "path then formation")
    state = apply(state, "formation.twoLevel", ids, { pattern: 0 });
  state = run(state, 1500);
  const frame = frameOf(state);
  row({
    order,
    formations: state.formations.length,
    activities: frame.units.map((unit) => unit.activity),
    routesDrawn: frame.routes.length,
    pathLength: measure(state).pathLength,
    at: state.units.map(
      (unit) => `${unit.position.x.toFixed(1)},${unit.position.y.toFixed(1)}`,
    ),
  });
}
