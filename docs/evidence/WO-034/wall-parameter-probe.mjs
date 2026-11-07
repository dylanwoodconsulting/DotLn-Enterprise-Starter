import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
const root = process.argv[2];
if (!root)
  throw new Error("usage: wall-parameter-probe.mjs <target> [--extended]");
const require = createRequire(`${root}/package.json`);
const result = require("esbuild").buildSync({
  entryPoints: [
    `${root}/libs/features/tools/src/lib/studies/movement/obstacle-and-wall-avoidance.simulation.ts`,
  ],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
  absWorkingDir: root,
});
const { wallAvoidanceSamples, readParameters } = await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`
);
const base = readParameters(
  JSON.parse(
    readFileSync(
      `${root}/libs/shared/catalog/src/studies/aifg/obstacle-and-wall-avoidance.json`,
    ),
  ).example.parameters,
);
function measure(parameters) {
  const run = wallAvoidanceSamples(parameters);
  const short = wallAvoidanceSamples(
    parameters,
    parameters.comparisonRayLength,
  );
  const hits = run.flatMap(({ calculation }, i) =>
    calculation.hit ? [i] : [],
  );
  const firstHit = hits[0] ?? -1;
  const turning = run.findIndex(
    ({ state, calculation }, i) =>
      i > firstHit &&
      calculation.hit &&
      Math.abs(state.velocity.y) > Math.abs(state.velocity.x),
  );
  let streak = 0,
    longest = 0;
  for (const { calculation } of run) {
    streak = calculation.hit ? streak + 1 : 0;
    longest = Math.max(streak, longest);
  }
  const headingGap = (a, b) => {
    const size =
      Math.hypot(a.velocity.x, a.velocity.y) *
      Math.hypot(b.velocity.x, b.velocity.y);
    return size === 0
      ? 0
      : (Math.acos(
          Math.max(
            -1,
            Math.min(
              1,
              (a.velocity.x * b.velocity.x + a.velocity.y * b.velocity.y) /
                size,
            ),
          ),
        ) *
          180) /
          Math.PI;
  };
  return {
    parameters,
    firstHit,
    turning,
    hits: hits.length,
    longest,
    minClearance: Math.min(...run.map((s) => s.calculation.clearance)),
    shortClearance: Math.min(...short.map((s) => s.calculation.clearance)),
    shortHits: short.filter((s) => s.calculation.hit).length,
    maxHeadingGap: Math.max(
      ...run.map(({ state }, i) => headingGap(state, short[i].state)),
    ),
    end: run.at(-1).state.position,
    firstState: run[firstHit]?.state,
    turningState: run[turning]?.state,
  };
}
const candidates = [];
const extended = process.argv.includes("--extended");
for (const goalY of [5, 6, 7, 8, 9, 10, 12, 15, 18])
  for (const rayLength of [6, 7, 8, 9, 10, 11, 12])
    for (const avoidDistance of extended ? [2, 4, 6, 8, 10] : [6])
      for (const velocityY of extended ? [0, 1, 2] : [0])
        candidates.push(
          measure({ ...base, goalY, rayLength, avoidDistance, velocityY }),
        );
const useful = candidates
  .filter(
    (r) =>
      r.hits >= 6 &&
      r.longest >= 4 &&
      r.turning > r.firstHit &&
      r.minClearance > 0 &&
      r.shortClearance < 0 &&
      r.maxHeadingGap > 15 &&
      r.end.x > base.wallX,
  )
  .sort((a, b) => b.longest - a.longest);
const data = {
  criteria: {
    minimumHits: 6,
    minimumConsecutiveHits: 4,
    tangentLaterThanFirstHit: true,
    positiveClearance: true,
    shortRayOverlaps: true,
    minimumHeadingGapDegrees: 15,
    endsBeyondWall: true,
  },
  base: measure(base),
  useful,
  candidates,
};
writeFileSync(
  `docs/evidence/WO-034/wall-parameter-probe-checked${extended ? "-extended" : ""}.json`,
  JSON.stringify(data, null, 2) + "\n",
);
console.log(
  JSON.stringify({ base: data.base, useful: useful.slice(0, 8) }, null, 2),
);
