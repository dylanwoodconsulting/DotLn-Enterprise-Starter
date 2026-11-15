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
import { measure } from "./libs/shared/scene-engine/src/lib/metrics";
import {
  advance,
  createSimulation,
  frameOf,
  isAtRest,
} from "./libs/shared/scene-engine/src/lib/simulation";
import {
  add,
  centroid,
  distance,
  length,
} from "./libs/shared/scene-engine/src/lib/vectors";

const apply = (state, kind, ids, params) => {
  const step = createTestStep(kind, ids, params, state.tick);
  if (!isSafeStep(step)) throw new Error(`Unsafe probe step: ${kind}`);
  const result = applyStep(state, step);
  if (result.refusal !== null) throw new Error(`Refused probe step: ${kind}`);
  return result.state;
};
const run = (state, count) => {
  for (let frame = 0; frame < count; frame += 1) state = advance(state);
  return state;
};

let settled = createSimulation(createTestScene(createScatteredUnits(12)));
const ids = settled.units.map((unit) => unit.id);
settled = apply(settled, "objective.set", [], { x: 60, y: 40 });
settled = apply(settled, "steer.priority", ids, {
  "avoidance-priority": 1,
  "separation-priority": 2,
  "seek-priority": 3,
  epsilon: 0.1,
});
settled = apply(settled, "steer.blend", ids, { "arrive-weight": 1 });
settled = run(settled, 2400);
console.log(
  JSON.stringify({
    probe: "settled-12",
    rest: isAtRest(settled),
    maxSpeed: Math.max(...settled.units.map((unit) => length(unit.velocity))),
  }),
);

const centre = centroid(settled.units.map((unit) => unit.position));
function times(state, objective) {
  let centreFrame = null;
  let stopwatchFrame = null;
  for (let frame = 1; frame <= 600; frame += 1) {
    state = advance(state);
    if (
      centreFrame === null &&
      distance(centroid(state.units.map((unit) => unit.position)), objective) <=
        1
    ) {
      centreFrame = frame;
    }
    if (stopwatchFrame === null && measure(state).timeToObjective !== null) {
      stopwatchFrame = frame;
    }
    if (centreFrame !== null && stopwatchFrame !== null) break;
  }
  return { centreFrame, stopwatchFrame };
}

for (const offset of [
  { x: 2, y: 0 },
  { x: -2, y: 0 },
  { x: 0, y: 2 },
  { x: 4, y: 0 },
  { x: 10, y: 6 },
  { x: 0, y: -12 },
  { x: -14, y: 0 },
]) {
  const objective = add(centre, offset);
  const sent = apply(settled, "objective.set", [], objective);
  let plain = createSimulation(
    createTestScene(
      settled.units.map((unit) =>
        createTestUnit(unit.id, { position: unit.position }),
      ),
    ),
  );
  plain = apply(plain, "objective.set", [], objective);
  plain = apply(plain, "steer.blend", ids, { "arrive-weight": 1 });
  console.log(
    JSON.stringify({
      probe: "near-retarget",
      offset,
      objective,
      priority: times(sent, objective),
      plain: times(plain, objective),
    }),
  );
}

for (const extra of [null, "velocity-match-weight", "wander-weight"]) {
  let state = createSimulation(
    createTestScene([createTestUnit("a", { position: { x: 20, y: 20 } })]),
  );
  state = apply(state, "field.wall", [], {
    x1: 60,
    y1: 0,
    x2: 60,
    y2: 50,
    thickness: 1,
    shape: 1,
  });
  state = apply(state, "objective.set", [], { x: 100, y: 20 });
  if (extra) state = apply(state, "steer.blend", ["a"], { [extra]: 1 });
  state = apply(state, "path.find", ["a"], { heuristic: 3 });
  state = run(state, 30);
  state = apply(state, "field.wall", [], {
    x1: 60,
    y1: 40,
    x2: 60,
    y2: 80,
    thickness: 1,
    shape: 2,
  });
  const position = state.units[0].position;
  state = run(state, 300);
  console.log(
    JSON.stringify({
      probe: "moving-then-sealed",
      extra,
      activity: frameOf(state).units[0].activity,
      displacement: distance(position, state.units[0].position),
      speed: length(state.units[0].velocity),
      rest: isAtRest(state),
    }),
  );
}
