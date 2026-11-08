// Screenshots of the states register at 360 pixels wide for the studies whose narrow headings the
// order's narrow-heading decision changes, from a base build and a candidate build, at the first
// step and at a step where an object moves, so the two renderings can be read side by side.
// Usage: node narrow-frames.mjs <target worktree> <base build> <candidate build> <output directory>
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { serveBuild } from "./serve-build.mjs";

const [target, baseDist, candidateDist, output] = process.argv.slice(2);
if (!target || !baseDist || !candidateDist || !output)
  throw new Error(
    "usage: narrow-frames.mjs <target> <base build> <candidate build> <output directory>",
  );
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
// Each changed study by its id, with the steps to capture: the start and a step that moves.
const studies = [
  { slug: "service-layer", id: "poeaa:226", steps: [0, 3] },
  { slug: "data-transfer-object", id: "poeaa:363", steps: [0, 4] },
  { slug: "record-set", id: "poeaa:452", steps: [0, 4] },
];
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const captured = [];
try {
  for (const [build, dist] of [
    ["base", baseDist],
    ["candidate", candidateDist],
  ]) {
    const server = await serveBuild(dist);
    const context = await browser.newContext({
      viewport: { width: 360, height: 800 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    for (const { slug, id, steps } of studies) {
      await page.goto(`${server.base}/tools/catalog/${id}`);
      const states = page.locator("tools-study-states");
      await states.waitFor({ timeout: 20000 });
      const slider = states.getByRole("slider", { name: /^Step \d+ of \d+$/ });
      for (const step of steps) {
        await slider.fill(String(step));
        await page.evaluate(() => document.fonts.ready);
        const file = `${slug}-step${step}-${build}.png`;
        await states
          .locator(".narrow svg")
          .screenshot({ path: join(output, file) });
        captured.push({ build, slug, id, step, file });
      }
    }
    await context.close();
    server.close();
  }
} finally {
  await browser.close();
}
writeFileSync(
  join(output, "frames.json"),
  `${JSON.stringify({ width: 360, captured }, null, 2)}\n`,
);
console.log(JSON.stringify({ frames: captured.length }));
