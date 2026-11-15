// The final reviewer's reproductions of the verification sequence's blocking findings, on the
// real scene's units as well as the spec's. Mode `crowd` runs on any engine root, the base
// included; `blocked` and `headon` need the candidate's field and path steps.
import scene from "./libs/features/scene/src/testing/fixtures/scene-twenty.json";
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
  centroid,
  distance,
  length,
} from "./libs/shared/scene-engine/src/lib/vectors";

const mode = process.argv[4] ?? "crowd";

const apply = (state, kind, ids, params) => {
  const step = createTestStep(kind, ids, params, state.tick);
  if (!isSafeStep(step)) throw new Error(`Unsafe probe input: ${kind}`);
  const result = applyStep(state, step);
  if (result.refusal !== null)
    throw new Error(`Refused probe input: ${kind} ${result.refusal.code}`);
  return result.state;
};
const run = (state, frames) => {
  for (let i = 0; i < frames; i += 1) state = advance(state);
  return state;
};
const centre = (state) => centroid(state.units.map((unit) => unit.position));
const peak = (state) =>
  Math.max(...state.units.map((unit) => length(unit.velocity)));

// The catalog's defaults for Priority steering (aifg-a:149) and Arrive (aifg-a:112).
const priority = {
  "avoidance-priority": 1,
  "separation-priority": 2,
  "seek-priority": 3,
  epsilon: 0.1,
};
const arriveDefaults = {
  "arrive-weight": 1,
  "slow-radius": 10,
  "target-radius": 1,
  "time-to-target": 0.25,
};

function framesToReach(state, goal, limit = 1800) {
  for (let frame = 1; frame <= limit; frame += 1) {
    state = advance(state);
    if (distance(centre(state), goal) <= 1) return frame;
  }
  return null;
}
function framesToCredit(state, limit = 3600) {
  for (let frame = 1; frame <= limit; frame += 1) {
    state = advance(state);
    if (measure(state).timeToObjective !== null) return frame;
  }
  return null;
}
function framesToRest(state, limit = 3600) {
  for (let frame = 1; frame <= limit; frame += 1) {
    state = advance(state);
    if (isAtRest(state)) return frame;
  }
  return null;
}

// Twelve units of a population, under Priority steering and Arrive, sent to a home and then, once
// settled, to objectives at each distance in sixteen directions; against the same units at the
// same places under Arrive alone.
function crowdCase(name, units, home, arrival, order) {
  const definition = createTestScene(units);
  const ids = units.map((unit) => unit.id);
  let state = apply(createSimulation(definition), "objective.set", [], home);
  if (order === "priority-first") {
    state = apply(state, "steer.priority", ids, priority);
    state = apply(state, "steer.blend", ids, arrival);
  } else {
    state = apply(state, "steer.blend", ids, arrival);
    state = apply(state, "steer.priority", ids, priority);
  }
  const firstCredit = framesToCredit(state);
  const restedAt = framesToRest(state);
  const settled = run(state, 2400);
  const start = centre(settled);
  const distances = [1.05, 1.5, 2, 3, 5, 8, 12];
  const rows = distances.map((far) => {
    let later = 0;
    let never = 0;
    let worst = 0;
    let best = 0;
    for (let turn = 0; turn < 16; turn += 1) {
      const angle = ((turn + 0.25) * Math.PI) / 8;
      const goal = {
        x: start.x + far * Math.cos(angle),
        y: start.y + far * Math.sin(angle),
      };
      const sent = apply(settled, "objective.set", [], goal);
      let plain = createSimulation(
        createTestScene(
          settled.units.map((unit) => {
            const made = units.find((one) => one.id === unit.id);
            return {
              ...made,
              position: unit.position,
              velocity: { x: 0, y: 0 },
            };
          }),
        ),
      );
      plain = apply(plain, "objective.set", [], goal);
      plain = apply(plain, "steer.blend", ids, arrival);
      const crowd = framesToReach(sent, goal);
      const alone = framesToReach(plain, goal);
      if (crowd === null) never += 1;
      else if (alone !== null && crowd > alone) {
        later += 1;
        worst = Math.max(worst, crowd - alone);
      } else if (alone !== null) best = Math.max(best, alone - crowd);
    }
    return { far, later, never, worstLate: worst, mostAhead: best };
  });
  return {
    name,
    order,
    firstCredit,
    restedAt,
    restedAfter2400: isAtRest(settled),
    peakAfter2400: peak(settled),
    rows,
  };
}

if (mode === "crowd") {
  const spec = createScatteredUnits(12);
  const west = [...scene.units]
    .sort((a, b) => a.position.x - b.position.x)
    .slice(0, 12);
  const firstTwelve = scene.units.slice(0, 12);
  const home = { x: 60, y: 40 };
  const out = [
    crowdCase("spec twelve", spec, home, arriveDefaults, "priority-first"),
    crowdCase("spec twelve", spec, home, arriveDefaults, "arrive-first"),
    crowdCase(
      "scene west twelve",
      west,
      home,
      arriveDefaults,
      "priority-first",
    ),
    crowdCase(
      "scene first twelve",
      firstTwelve,
      { x: 40, y: 30 },
      arriveDefaults,
      "arrive-first",
    ),
    crowdCase(
      "spec twelve, slow radius 3",
      spec,
      home,
      { ...arriveDefaults, "slow-radius": 3 },
      "priority-first",
    ),
    crowdCase(
      "spec twelve, slow radius 1",
      spec,
      home,
      { ...arriveDefaults, "slow-radius": 1 },
      "priority-first",
    ),
  ];
  console.log(JSON.stringify(out, null, 2));
}

if (mode === "blocked") {
  const carried = [
    ["nothing else", null, null],
    ["Wander", "steer.blend", { "wander-weight": 1 }],
    ["Flee", "steer.blend", { "flee-weight": 1 }],
    [
      "Flocking",
      "steer.blend",
      {
        "separation-weight": 2,
        "cohesion-weight": 1,
        "velocity-match-weight": 1,
      },
    ],
    ["Collision avoidance", "steer.blend", { "avoidance-weight": 2 }],
    [
      "Obstacle and wall avoidance",
      "steer.blend",
      {
        "obstacle-avoidance-weight": 2,
        "look-ahead": 6,
        "whisker-angle": 30,
        "avoid-distance": 2,
      },
    ],
    ["Priority steering", "steer.priority", priority],
    [
      "Equilibrium fallback",
      "steer.priority",
      {
        "seek-priority": 1,
        "wander-priority": 2,
        epsilon: 0.1,
      },
    ],
  ];
  const squad = scene.units.filter((unit) => unit.position.x < 50).slice(0, 6);
  const ids = squad.map((unit) => unit.id);
  const out = carried.map(([name, kind, params]) => {
    let state = createSimulation(createTestScene(squad));
    if (kind !== null) state = apply(state, kind, ids, params);
    state = apply(state, "field.wall", [], {
      x1: 70,
      y1: 0,
      x2: 70,
      y2: 64,
      thickness: 1,
      shape: 1,
    });
    state = apply(state, "objective.set", [], { x: 100, y: 40 });
    state = run(apply(state, "path.find", ids, { heuristic: 3 }), 45);
    const speedBeforeSeal = peak(state);
    state = apply(state, "field.wall", [], {
      x1: 70,
      y1: 63,
      x2: 70,
      y2: 80,
      thickness: 1,
      shape: 2,
    });
    const sealed = run(state, 300);
    const later = run(sealed, 120);
    const cleared = run(apply(sealed, "field.clear", [], {}), 240);
    const moved = (a, b) =>
      Math.max(
        ...a.units.map((unit, index) =>
          distance(unit.position, b.units[index].position),
        ),
      );
    return {
      name,
      speedBeforeSeal,
      activities: [
        ...new Set(frameOf(sealed).units.map((unit) => unit.activity)),
      ],
      blockedUnits: measure(sealed).blockedUnits,
      atRest: isAtRest(sealed),
      peakSpeed: peak(sealed),
      movedInNext120: moved(sealed, later),
      movedAfterClear: moved(sealed, cleared),
      blockedAfterClear: measure(cleared).blockedUnits,
    };
  });
  console.log(JSON.stringify(out, null, 2));
}

if (mode === "headon") {
  // Two of the scene's units placed exactly head on, each given Collision avoidance and Arrive,
  // the objective at their midpoint; then the same pair again, for the same sides.
  const pairRun = () => {
    const units = [
      {
        ...scene.units[1],
        position: { x: 40, y: 40 },
        heading: { x: 1, y: 0 },
      },
      {
        ...scene.units[3],
        position: { x: 80, y: 40 },
        heading: { x: -1, y: 0 },
      },
    ];
    const ids = units.map((unit) => unit.id);
    let state = createSimulation(createTestScene(units));
    state = apply(state, "objective.set", [], { x: 60, y: 40 });
    state = apply(state, "steer.blend", ids, arriveDefaults);
    state = apply(state, "steer.blend", ids, { "avoidance-weight": 2 });
    let least = Infinity;
    let touching = 0;
    const sides = [];
    for (let frame = 0; frame < 900; frame += 1) {
      state = advance(state);
      const [a, b] = state.units;
      const gap = distance(a.position, b.position);
      least = Math.min(least, gap);
      if (gap < a.radius + b.radius) touching += 1;
      if (frame % 150 === 149)
        sides.push([
          Number(a.position.y.toFixed(4)),
          Number(b.position.y.toFixed(4)),
        ]);
    }
    return {
      least,
      touching,
      sides,
      collisions: measure(state).collisions,
      end: state.units.map((unit) => unit.position),
    };
  };
  const first = pairRun();
  const second = pairRun();
  console.log(
    JSON.stringify(
      { first, sameOnReplay: JSON.stringify(first) === JSON.stringify(second) },
      null,
      2,
    ),
  );
}
