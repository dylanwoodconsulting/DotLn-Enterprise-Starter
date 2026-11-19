// Verifier's independent probes over the engine sources as they stand in the target worktree.
import { patternSlotRoles, patternSlots, slotPosition } from "ENGINE/formation";
import { hashFrame } from "ENGINE/hash";
import { applyStep, interpretedKinds, isSafeStep } from "ENGINE/interpreter";
import { measure } from "ENGINE/metrics";
import { advance, createSimulation, frameOf } from "ENGINE/simulation";
import { assignSlots } from "ENGINE/slot-assignment";
import { runBranch } from "ENGINE/trial";
import type {
  CompositionStep,
  SceneDefinition,
  SimulationState,
} from "ENGINE/types";
import range from "FIXTURES/range-known-outcome.json";
import scene from "FIXTURES/scene-twenty.json";

const definition = scene as unknown as SceneDefinition;
const out: Record<string, unknown> = {};
const step = (
  at: number,
  kind: string,
  toolId: string,
  selection: string[],
  params: Record<string, number>,
): CompositionStep =>
  ({ at, kind, toolId, selection, params }) as CompositionStep;
const shooters = ["unit-03", "unit-08", "unit-13"];
const fire = (
  at: number,
  params: Record<string, number> = {},
  selection = shooters,
) =>
  step(at, "combat.fire", "aifg-a:161", selection, {
    target: 9,
    "bullet-speed": 36,
    rate: 3,
    range: 100,
    "hit-radius": 0.4,
    "knockout-hits": 0,
    ...params,
  });
const hashes = (states: readonly SimulationState[]) =>
  states.map((s) => hashFrame(frameOf(s)));
const impactsOf = (states: readonly SimulationState[]) =>
  states.flatMap((s) => s.impacts.filter((mark) => mark.at === s.tick));
const totalShots = (s: SimulationState) =>
  s.units.reduce((n, u) => n + u.shots, 0);

// --- Criterion 2: the range fixture, both branches, twice ---------------------------------
{
  const known = range as any;
  const runs = [0, 1].map(() =>
    [known.branchA, known.branchB].map((steps: CompositionStep[]) =>
      runBranch(definition, steps, known.frames),
    ),
  );
  const [a1, b1] = runs[0];
  const [a2, b2] = runs[1];
  const sampled = (states: readonly SimulationState[]) =>
    hashes(states).filter((_, i) => i % known.sampleEvery === 0);
  const firstHit = a1.findIndex((s) => s.units[8].hits > 0);
  const marksB = impactsOf(b1);
  out.rangeFixture = {
    hashesReproduceA: JSON.stringify(hashes(a1)) === JSON.stringify(hashes(a2)),
    hashesReproduceB: JSON.stringify(hashes(b1)) === JSON.stringify(hashes(b2)),
    hashesEqualFixtureA:
      JSON.stringify(sampled(a1)) === JSON.stringify(known.hashes.a),
    hashesEqualFixtureB:
      JSON.stringify(sampled(b1)) === JSON.stringify(known.hashes.b),
    framesWithBullets: a1.filter((s) => s.bullets.length > 0).length,
    bulletsChangeHash: a1.some(
      (s) =>
        s.bullets.length &&
        hashFrame(frameOf(s)) !== hashFrame({ ...frameOf(s), bullets: [] }),
    ),
    firstHitFrameA: firstHit,
    lastFrame: known.frames,
    eachShooterScoredA: a1
      .at(-1)!
      .units.filter((u) => shooters.includes(u.id))
      .map((u) => u.scored),
    targetHitsA: a1.at(-1)!.units[8].hits,
    shotsB: totalShots(b1.at(-1)!),
    wallMarksB: marksB.length,
    unitMarksB: marksB.filter((m) => m.unitId !== null).length,
    targetHitsEverB: Math.max(...b1.map((s) => s.units[8].hits)),
    bulletsLeftB: b1.at(-1)!.bullets.length,
    maxBulletXB: Math.max(
      ...b1.flatMap((s) => s.bullets.map((b) => b.position.x)),
    ),
    firstDivergence: hashes(a1).findIndex((h, i) => h !== hashes(b1)[i]),
  };
}

// --- Criterion 2, varied: fastest streak, thinnest wall the field step admits, zero radius ----
{
  const variants = [
    { thickness: 1, speed: 120, radius: 0 },
    { thickness: 0.2, speed: 120, radius: 0 },
    { thickness: 0.05, speed: 120, radius: 0 },
    { thickness: 1, speed: 4, radius: 2 },
  ].map(({ thickness, speed, radius }) => {
    const wall = step(0, "field.wall", "field.wall", [], {
      x1: 72,
      y1: 10,
      x2: 72,
      y2: 66,
      thickness,
      shape: 1,
    });
    const safe = isSafeStep(wall);
    const states = runBranch(
      definition,
      [
        wall,
        fire(0, { "bullet-speed": speed, "hit-radius": radius, rate: 12 }),
      ],
      300,
    );
    const marks = impactsOf(states);
    return {
      thickness,
      speed,
      radius,
      wallStepSafe: safe,
      walls: states.at(-1)!.geometry.walls.length,
      shots: totalShots(states.at(-1)!),
      targetHits: states.at(-1)!.units[8].hits,
      wallMarks: marks.filter((m) => m.unitId === null).length,
      unitMarks: marks.filter((m) => m.unitId !== null).length,
      pastWall: states.some((s) => s.bullets.some((b) => b.position.x > 73)),
    };
  });
  out.wallVariants = variants;
  const disc = runBranch(
    definition,
    [
      step(0, "field.obstacle", "field.obstacle", [], {
        x: 72,
        y: 34,
        radius: 3,
      }),
      fire(0, {}, ["unit-08"]),
    ],
    200,
  );
  out.obstacle = {
    shots: totalShots(disc.at(-1)!),
    targetHits: disc.at(-1)!.units[8].hits,
    marks: impactsOf(disc).filter((m) => m.unitId === null).length,
  };
}

// --- Criterion 2: the crossing piece on the stock board, each aim, several drags and tempos ---
{
  const crossing = (
    aim: "plain" | "cue" | "repeat",
    drag: number,
    speed = 36,
    iterations = 4,
  ) => {
    const steps: CompositionStep[] = [
      step(0, "objective.set", "objective.set", [], { x: 83.8, y: 79 }),
      step(0, "steer.blend", "aifg-a:112", ["unit-09"], {
        "arrive-weight": 1,
        "slow-radius": 5,
        "target-radius": 0.5,
        "time-to-target": 0.2,
      }),
      step(0, "combat.projectile", "aifg-a:162", shooters, {
        "bullet-speed": speed,
        drag,
      }),
      fire(24, { "bullet-speed": speed }),
    ];
    if (aim === "cue")
      steps.push(step(24, "combat.aim", "aifg-a:163", shooters, {}));
    if (aim === "repeat")
      steps.push(
        step(24, "combat.aim", "aifg-a:166", shooters, { iterations }),
      );
    const states = runBranch(definition, steps, 145);
    // hits taken only while the piece was still running
    const moving = states.filter(
      (s) => Math.hypot(s.units[8].velocity.x, s.units[8].velocity.y) > 1,
    );
    return {
      hits: states.at(-1)!.units[8].hits,
      shots: totalShots(states.at(-1)!),
      movingFrames: moving.length,
    };
  };
  out.crossing = {
    plain0: crossing("plain", 0),
    cue0: crossing("cue", 0),
    cue03: crossing("cue", 0.3),
    repeat03: crossing("repeat", 0.3),
    cue01: crossing("cue", 0.1),
    repeat01: crossing("repeat", 0.1),
    repeat03OneCue: crossing("repeat", 0.3, 36, 1),
    repeat10: crossing("repeat", 1.0),
    cue0Fast: crossing("cue", 0, 72),
    cue03Fast: crossing("cue", 0.3, 72),
    repeat03Fast: crossing("repeat", 0.3, 72),
    cue0Slow: crossing("cue", 0, 12),
    repeat03Slow: crossing("repeat", 0.3, 12),
    plain03: crossing("plain", 0.3),
  };
}

// --- Criterion 3: knockout at three, zero velocity after, restart, and knockout at zero -------
{
  const run = (knockout: number, extra: CompositionStep[] = []) =>
    runBranch(
      definition,
      [
        ...extra,
        fire(0, { "knockout-hits": knockout, "bullet-speed": 72, rate: 2 }, [
          "unit-08",
        ]),
      ],
      400,
    );
  const first = run(3);
  const at = first.findIndex((s) => s.units[8].down);
  const after = first.slice(at);
  const moving = run(3, [
    step(0, "objective.set", "objective.set", [], { x: 100, y: 36 }),
    step(0, "steer.blend", "aifg-a:112", ["unit-09"], { "arrive-weight": 1 }),
    step(0, "path.find", "aifg-a:222", ["unit-09"], {}),
  ]);
  const atMoving = moving.findIndex((s) => s.units[8].down);
  out.knockout = {
    downAt: at,
    hitsBefore: first[at - 1]?.units[8].hits,
    hitsAt: first[at]?.units[8].hits,
    activityAfter: [...new Set(after.map((s) => frameOf(s).units[8].activity))],
    velocityZeroAfter: after.every(
      (s) => s.units[8].velocity.x === 0 && s.units[8].velocity.y === 0,
    ),
    positionFixedAfter: new Set(
      after.map((s) => `${s.units[8].position.x},${s.units[8].position.y}`),
    ).size,
    hitsNeverRiseAfter: new Set(after.map((s) => s.units[8].hits)).size,
    shooterStopsFiring:
      first.at(-1)!.units[7].shots === first[at + 120]?.units[7].shots,
    restartSameFrame: run(3).findIndex((s) => s.units[8].down) === at,
    zeroNobodyDown: run(0).every((s) => s.units.every((u) => !u.down)),
    zeroHits: run(0).at(-1)!.units[8].hits,
    movingTargetDownAt: atMoving,
    movingVelocityZeroAfter: moving
      .slice(atMoving)
      .every((s) => s.units[8].velocity.x === 0 && s.units[8].velocity.y === 0),
    movingMetricsDown: measure(moving.at(-1)!).downUnits,
    movingFocusShooter: measure(moving.at(-1)!, ["unit-08"]).downUnits,
  };
}

// --- Criterion 3: the two-level squad re-laid and reassigned, slot error under 1 ---------------
{
  const squad = ["unit-04", "unit-09", "unit-10", "unit-14", "unit-19"];
  const cases = ([0, 1, 2] as const).map((pattern) => {
    const steps = [
      step(0, "formation.twoLevel", "aifg-a:151", squad, {
        pattern,
        "slot-spacing": 5,
      }),
      fire(500, { "knockout-hits": 3 }),
    ];
    const states = runBranch(definition, steps, 1500);
    const at = states.findIndex((s) => s.units[8].down);
    const then = states[at];
    const formed = then.formations[0];
    const standing = then.units.filter((u) => !u.down && squad.includes(u.id));
    const expectedSlots = patternSlots(
      formed.pattern,
      standing.length,
      formed.spacing,
    );
    const expectedAssignment = assignSlots(
      standing,
      patternSlotRoles(standing.length),
      formed.slotCosts,
    );
    const settle = states.findIndex(
      (s, i) =>
        i > at &&
        (measure(
          s,
          standing.map((u) => u.id),
        ).slotError ?? 9) < 1,
    );
    return {
      pattern: formed.pattern,
      downAt: at,
      members: formed.assignment.length,
      slotsMatch:
        JSON.stringify(formed.slots) === JSON.stringify(expectedSlots),
      assignmentMatch:
        JSON.stringify(formed.assignment) ===
        JSON.stringify(expectedAssignment),
      spacingKept: formed.spacing,
      slotErrorAtDown: measure(
        then,
        standing.map((u) => u.id),
      ).slotError,
      settledAfterFrames: settle - at,
      finalSlotError: measure(
        states.at(-1)!,
        standing.map((u) => u.id),
      ).slotError,
      downUnitInFormation: formed.assignment.some(
        (a) => a.unitId === "unit-09",
      ),
    };
  });
  out.twoLevel = cases;
}

// --- Criterion 3: the fixed squad, leader down, follower down, operator's own removal ----------
{
  const squad = ["unit-09", "unit-10", "unit-14"];
  const fixed = step(0, "formation.fixed", "aifg-a:149", squad, {});
  const leaderDown = runBranch(
    definition,
    [fixed, fire(60, { "knockout-hits": 3 })],
    600,
  );
  const at = leaderDown.findIndex((s) => s.units[8].down);
  const then = leaderDown[at];
  const next = leaderDown[at + 1];
  const before = leaderDown[at - 1].formations[0];
  const second = before.assignment.find((a) => a.slot === 1)!.unitId;
  const newLeader = next.units.find((u) => u.id === next.formations[0].leader)!;
  const followerDown = runBranch(
    definition,
    [fixed, fire(60, { "knockout-hits": 3, target: 10 })],
    600,
  );
  const fAt = followerDown.findIndex((s) => s.units[9].down);
  const removed = runBranch(
    definition,
    [
      fixed,
      step(60, "steer.blend", "aifg-a:125", ["unit-10"], {
        "wander-weight": 1,
      }),
    ],
    120,
  ).at(-1)!;
  out.fixed = {
    leaderBefore: before.leader,
    secondSlotBefore: second,
    leaderAfter: then.formations[0].leader,
    ledByNextSlot: then.formations[0].leader === second,
    anchorAtLeaderNextFrame:
      next.formations[0].anchor.x === newLeader.position.x &&
      next.formations[0].anchor.y === newLeader.position.y,
    assignmentAfter: then.formations[0].assignment.map(
      (a) => `${a.unitId}:${a.slot}`,
    ),
    followerDownAt: fAt,
    followerAssignmentBefore: followerDown[
      fAt - 1
    ].formations[0].assignment.map((a) => `${a.unitId}:${a.slot}`),
    followerAssignmentAfter: followerDown[fAt].formations[0].assignment.map(
      (a) => `${a.unitId}:${a.slot}`,
    ),
    followerLeader: followerDown[fAt].formations[0].leader,
    operatorRemovalKeepsSlots: removed.formations[0]?.assignment.map(
      (a) => `${a.unitId}:${a.slot}`,
    ),
    operatorRemovalSlotCount: removed.formations[0]?.slots.length,
  };
}

// --- A frame with nothing fired is untouched by the projectile pass ---------------------------
{
  const quiet = runBranch(
    definition,
    [step(0, "steer.blend", "aifg-a:125", ["unit-01"], { "wander-weight": 1 })],
    30,
  );
  out.quiet = {
    bullets: Math.max(...quiet.map((s) => s.bullets.length)),
    sameObjectWhenIdle: (() => {
      const s = createSimulation(definition);
      const a = advance(s);
      return a.bullets === s.bullets && a.impacts === s.impacts;
    })(),
  };
  out.kinds = interpretedKinds;
  out.safe = {
    rate0: isSafeStep(fire(0, { rate: 0 })),
    speed0: isSafeStep(fire(0, { "bullet-speed": 0 })),
    negativeTarget: isSafeStep(fire(0, { target: -1 })),
    target21: isSafeStep(fire(0, { target: 21 })),
    targetSelf: (() => {
      const s = runBranch(
        definition,
        [fire(0, { target: 8 }, ["unit-08"])],
        120,
      ).at(-1)!;
      return { shots: s.units[7].shots, hits: s.units[7].hits };
    })(),
    targetBeyondRoster: (() => {
      const s = runBranch(definition, [fire(0, { target: 21 })], 120).at(-1)!;
      return totalShots(s);
    })(),
    fractionalTarget: (() => {
      const s = runBranch(definition, [fire(0, { target: 8.6 })], 120).at(-1)!;
      return { hits09: s.units[8].hits, hits08: s.units[7].hits };
    })(),
  };
}

void slotPosition;
console.log(JSON.stringify(out, null, 1));
