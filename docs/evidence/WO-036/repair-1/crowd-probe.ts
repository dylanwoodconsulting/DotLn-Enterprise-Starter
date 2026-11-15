// The repair of VER-001 F1, measured: a crowd under priority steering with Arrive, settled and
// sent somewhere near, against the same units under a plain Arrive from the same places.
//
//   probe.mjs <target> crowd-probe.ts verifier          the seven offsets VER-001 quotes
//   probe.mjs <target> crowd-probe.ts near <directions> [sizes]  17 crowd sizes from 2 to 20, or
//                                                       those named; 51 distances to 4 units
//   probe.mjs <target> crowd-probe.ts tunings           Arrive retuned, twelve units
//   probe.mjs <target> crowd-probe.ts settling          144 crowd tunings: rest and arrival
//   probe.mjs <target> crowd-probe.ts pull <slow> <far> where the crowd's acceleration comes from
import {
  createScatteredUnits,
  createTestScene,
  createTestStep,
  createTestUnit,
} from "./libs/shared/scene-engine/testing/src/lib/scene-builders";
import { applyStep } from "./libs/shared/scene-engine/src/lib/interpreter";
import { measure } from "./libs/shared/scene-engine/src/lib/metrics";
import {
  accelerationsOf,
  advance,
  createSimulation,
  isAtRest,
} from "./libs/shared/scene-engine/src/lib/simulation";
import { arrive } from "./libs/shared/scene-engine/src/lib/steering";
import {
  add,
  centroid,
  distance,
  dot,
  normalize,
  subtract,
} from "./libs/shared/scene-engine/src/lib/vectors";

declare const PROBE_ARGS: string[];
const [mode, ...options] = PROBE_ARGS;

const priority = {
  "avoidance-priority": 1,
  "separation-priority": 2,
  "seek-priority": 3,
  epsilon: 0.1,
};
const plainArrive = { "arrive-weight": 1 };

const apply = (state, kind, ids, params) => {
  const result = applyStep(
    state,
    createTestStep(kind, ids, params, state.tick),
  );
  if (result.refusal !== null) throw new Error(`refused ${kind}`);
  return result.state;
};
const centreOf = (state) => centroid(state.units.map((unit) => unit.position));
const row = (value) => console.log(JSON.stringify(value));

function crowd(count, home, blend = plainArrive) {
  let state = createSimulation(createTestScene(createScatteredUnits(count)));
  const ids = state.units.map((unit) => unit.id);
  state = apply(state, "objective.set", [], home);
  state = apply(state, "steer.priority", ids, priority);
  return apply(state, "steer.blend", ids, blend);
}

function settled(count, home, blend = plainArrive, frames = 3600) {
  let state = crowd(count, home, blend);
  for (let frame = 0; frame < frames; frame += 1) state = advance(state);
  return state;
}

// The same units from the same places, at rest, under the blend alone.
function alone(state, objective, blend = plainArrive) {
  let plain = createSimulation(
    createTestScene(
      state.units.map((unit) =>
        createTestUnit(unit.id, { position: unit.position }),
      ),
    ),
  );
  const ids = plain.units.map((unit) => unit.id);
  plain = apply(plain, "objective.set", [], objective);
  return apply(plain, "steer.blend", ids, blend);
}

// The first frame on which the centre is inside the radius; 9999 when it never is.
function reach(start, objective, radius = 1, limit = 900) {
  let state = start;
  for (let frame = 1; frame <= limit; frame += 1) {
    state = advance(state);
    if (distance(centreOf(state), objective) <= radius) return frame;
  }
  return 9999;
}

function compare(state, objective, blend = plainArrive, radius = 1) {
  const sent = reach(
    apply(state, "objective.set", [], objective),
    objective,
    radius,
  );
  return {
    sent,
    plain: reach(alone(state, objective, blend), objective, radius),
  };
}

const around = (centre, far, turn, turns) => {
  const angle = (2 * Math.PI * (turn + 0.37)) / turns;
  return add(centre, { x: far * Math.cos(angle), y: far * Math.sin(angle) });
};

// The first frame the stopwatch credits the group with arriving; 9999 when it never does.
function credited(start, limit = 900) {
  let state = start;
  for (let frame = 1; frame <= limit; frame += 1) {
    state = advance(state);
    if (measure(state).timeToObjective !== null) return frame;
  }
  return 9999;
}

if (mode === "verifier") {
  const state = settled(12, { x: 60, y: 40 }, plainArrive, 2400);
  const centre = centreOf(state);
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
    // The criterion's reading is the centre coming inside the target radius; the stopwatch's
    // credit, which also waits for the group to slow, is printed beside it.
    row({
      offset,
      centre: compare(state, objective),
      stopwatch: {
        sent: credited(apply(state, "objective.set", [], objective)),
        plain: credited(alone(state, objective)),
      },
    });
  }
}

if (mode === "near") {
  const turns = Number(options[0] ?? 36);
  const distances = [];
  for (let far = 1.005; far < 1.5; far += 0.02)
    distances.push(Number(far.toFixed(3)));
  for (let far = 1.5; far <= 4.01; far += 0.1)
    distances.push(Number(far.toFixed(2)));
  // The scan filed first sampled these 17 sizes; a second argument names others, as `17,19`.
  const sizes = options[1]
    ? options[1].split(",").map(Number)
    : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20];
  for (const count of sizes)
    for (const home of [
      { x: 60, y: 40 },
      { x: 40, y: 30 },
      { x: 80, y: 50 },
    ]) {
      const state = settled(count, home);
      const centre = centreOf(state);
      let later = 0;
      let worst = 0;
      const where = [];
      for (const far of distances) {
        let here = 0;
        for (let turn = 0; turn < turns; turn += 1) {
          const { sent, plain } = compare(
            state,
            around(centre, far, turn, turns),
          );
          if (sent > plain) {
            here += 1;
            worst = Math.max(worst, sent - plain);
          }
        }
        later += here;
        if (here > 0) where.push(`${far}:${here}`);
      }
      row({
        count,
        home: `${home.x},${home.y}`,
        rest: isAtRest(state),
        compared: distances.length * turns,
        later,
        worstFrames: worst,
        where: where.join(" "),
      });
    }
}

if (mode === "tunings") {
  const tunings = [];
  for (const slow of [1, 2, 3, 4, 5, 7, 10, 15, 25, 50])
    tunings.push({ "slow-radius": slow });
  for (const time of [0.05, 0.1, 0.15, 0.5, 1, 2])
    tunings.push({ "time-to-target": time });
  for (const radius of [0.5, 2, 4]) tunings.push({ "target-radius": radius });
  for (const weight of [0.5, 2, 5]) tunings.push({ "arrive-weight": weight });
  for (const threshold of [2, 6]) tunings.push({ threshold });
  tunings.push({ falloff: 1 });
  for (const tuning of tunings) {
    const blend = { ...plainArrive, ...tuning };
    const state = settled(12, { x: 60, y: 40 }, blend);
    const radius = blend["target-radius"] ?? 1;
    const centre = centreOf(state);
    let later = 0;
    let worst = 0;
    let compared = 0;
    for (const beyond of [0.05, 0.25, 0.5, 1, 1.5, 2, 3, 5, 11])
      for (let turn = 0; turn < 12; turn += 1) {
        const objective = around(centre, radius + beyond, turn, 12);
        const { sent, plain } = compare(state, objective, blend, radius);
        compared += 1;
        if (sent > plain) {
          later += 1;
          worst = Math.max(worst, sent - plain);
        }
      }
    row({
      tuning: Object.entries(tuning)
        .map(([name, value]) => `${name}=${value}`)
        .join(","),
      rest: isAtRest(state),
      compared,
      later,
      worstFrames: worst,
    });
  }
}

if (mode === "settling") {
  let unrested = 0;
  let unarrived = 0;
  let cases = 0;
  let touching = 0;
  const failures = [];
  for (const count of [6, 12, 20])
    for (const slow of [1, 3, 10, 25])
      for (const time of [0.05, 0.25, 1])
        for (const threshold of [3, 6])
          for (const falloff of [1, 2]) {
            let state = crowd(
              count,
              { x: 60, y: 40 },
              {
                ...plainArrive,
                "slow-radius": slow,
                "time-to-target": time,
                threshold,
                falloff,
              },
            );
            let rest = null;
            let arrived = null;
            for (let frame = 1; frame <= 3600; frame += 1) {
              state = advance(state);
              if (measure(state).collisions > 0) touching += 1;
              if (arrived === null && measure(state).timeToObjective !== null)
                arrived = frame;
              if (isAtRest(state)) {
                rest = frame;
                break;
              }
            }
            cases += 1;
            if (rest === null) {
              unrested += 1;
              failures.push(`${count}/${slow}/${time}/${threshold}/${falloff}`);
            }
            if (arrived === null) unarrived += 1;
          }
  row({
    cases,
    unrested,
    unarrived,
    touchingFrames: touching,
    unrestedCases: failures.join(" "),
  });
}

if (mode === "pull") {
  const slow = Number(options[0] ?? 10);
  const far = Number(options[1] ?? 2);
  const blend = { ...plainArrive, "slow-radius": slow };
  const state = settled(12, { x: 60, y: 40 }, blend);
  const centre = centreOf(state);
  const objective = add(centre, { x: far, y: 0 });
  const way = normalize(subtract(objective, centre));
  let sent = apply(state, "objective.set", [], objective);
  let plain = alone(state, objective, blend);
  const along = (vectors) =>
    Number(
      (
        vectors.reduce((total, vector) => total + dot(vector, way), 0) /
        vectors.length
      ).toFixed(2),
    );
  for (let frame = 1; frame <= 12; frame += 1) {
    row({
      frame,
      // The mean acceleration along the way to the objective: the plain units', the crowd's, and
      // what Arrive alone asks of the crowd's units where they stand and as they move. The crowd's
      // equals its units' own when what its neighbours add cancels and nothing is clipped away.
      plain: along(accelerationsOf(plain)),
      crowd: along(accelerationsOf(sent)),
      crowdOwn: along(
        sent.units.map((unit) =>
          arrive(unit, objective, unit.behaviour.tuning),
        ),
      ),
    });
    sent = advance(sent);
    plain = advance(plain);
  }
}
