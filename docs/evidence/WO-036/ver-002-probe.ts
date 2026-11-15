// Independent re-verification of the two product findings in VER-001.
import {
  createScatteredUnits,
  createTestScene,
  createTestStep,
  createTestUnit,
} from "./libs/shared/scene-engine/testing/src/lib/scene-builders";
import {
  applyStep,
  isSafeStep,
} from "./libs/shared/scene-engine/src/lib/interpreter";
import {
  advance,
  createSimulation,
  frameOf,
  isAtRest,
} from "./libs/shared/scene-engine/src/lib/simulation";
import {
  centroid,
  distance,
  length,
} from "./libs/shared/scene-engine/src/lib/vectors";

const apply = (state, kind, ids, params) => {
  const step = createTestStep(kind, ids, params, state.tick);
  if (!isSafeStep(step)) throw new Error(`Unsafe probe input: ${kind}`);
  const result = applyStep(state, step);
  if (result.refusal !== null) throw new Error(`Refused probe input: ${kind}`);
  return result.state;
};
const run = (state, frames) => {
  for (let i = 0; i < frames; i += 1) state = advance(state);
  return state;
};
const centre = (state) => centroid(state.units.map((unit) => unit.position));
function firstReach(state, goal) {
  for (let frame = 1; frame <= 1200; frame += 1) {
    state = advance(state);
    if (distance(centre(state), goal) <= 1) return frame;
  }
  return null;
}
const crowd = [];
for (const slowRadius of [10, 3, 1, 20]) {
  const arrival = { "arrive-weight": 1, "slow-radius": slowRadius };
  let settled = createSimulation(createTestScene(createScatteredUnits(12)));
  const ids = settled.units.map((unit) => unit.id);
  settled = apply(settled, "objective.set", [], { x: 60, y: 40 });
  settled = apply(settled, "steer.priority", ids, {
    "avoidance-priority": 1,
    "separation-priority": 2,
    "seek-priority": 3,
    epsilon: 0.1,
  });
  settled = run(apply(settled, "steer.blend", ids, arrival), 2400);
  const start = centre(settled);
  const rows = [];
  for (const [dx, dy] of [
    [2, 0],
    [-2, 0],
    [0, 2],
    [0, -2],
    [3, 0],
    [-3, 0],
    [0, 3],
    [0, -3],
  ]) {
    const goal = { x: start.x + dx, y: start.y + dy };
    const sent = apply(settled, "objective.set", [], goal);
    let plain = createSimulation(
      createTestScene(
        settled.units.map((unit) =>
          createTestUnit(unit.id, { position: unit.position }),
        ),
      ),
    );
    plain = apply(plain, "objective.set", [], goal);
    plain = apply(plain, "steer.blend", ids, arrival);
    const priorityFrames = firstReach(sent, goal);
    const plainFrames = firstReach(plain, goal);
    rows.push({
      offset: [dx, dy],
      priorityFrames,
      plainFrames,
      noLater:
        priorityFrames !== null &&
        plainFrames !== null &&
        priorityFrames <= plainFrames,
    });
  }
  crowd.push({
    slowRadius,
    rested: isAtRest(settled),
    peakSpeed: Math.max(...settled.units.map((unit) => length(unit.velocity))),
    rows,
  });
}

const blocked = [];
for (const [name, kind, params] of [
  ["Wander", "steer.blend", { "wander-weight": 1 }],
  ["Velocity matching", "steer.blend", { "velocity-match-weight": 1 }],
  [
    "Priority wander",
    "steer.priority",
    { "wander-priority": 1, "seek-priority": 2, epsilon: 0.1 },
  ],
]) {
  let state = createSimulation(
    createTestScene([createTestUnit("a", { position: { x: 20, y: 20 } })]),
  );
  state = apply(state, kind, ["a"], params);
  state = apply(state, "field.wall", [], {
    x1: 60,
    y1: 0,
    x2: 60,
    y2: 50,
    thickness: 1,
    shape: 1,
  });
  state = apply(state, "objective.set", [], { x: 100, y: 20 });
  state = run(apply(state, "path.find", ["a"], { heuristic: 3 }), 30);
  const speedBeforeSeal = length(state.units[0].velocity);
  state = apply(state, "field.wall", [], {
    x1: 60,
    y1: 40,
    x2: 60,
    y2: 80,
    thickness: 1,
    shape: 2,
  });
  state = run(state, 300);
  const later = run(state, 120);
  const cleared = run(apply(state, "field.clear", [], {}), 120);
  blocked.push({
    name,
    speedBeforeSeal,
    activity: frameOf(state).units[0].activity,
    rested: isAtRest(state),
    speed: length(state.units[0].velocity),
    laterDisplacement: distance(
      state.units[0].position,
      later.units[0].position,
    ),
    clearedDisplacement: distance(
      state.units[0].position,
      cleared.units[0].position,
    ),
    retained:
      JSON.stringify(state.units[0].behaviour) ===
      JSON.stringify(cleared.units[0].behaviour),
  });
}
console.log(JSON.stringify({ crowd, blocked }, null, 2));
