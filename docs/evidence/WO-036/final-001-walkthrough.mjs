// The final reviewer's performance of WO-036's Objective session in the served production build,
// in a Chromium this script launches from the target's Playwright installation.
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const [target, base, shots, phaseArg] = process.argv.slice(2);
const { chromium } = await import(
  pathToFileURL(join(target, "node_modules/playwright/index.mjs"))
);
mkdirSync(shots, { recursive: true });

const log = [];
const say = (step, detail) => {
  log.push({ step, ...detail });
  console.log(JSON.stringify({ step, ...detail }));
};
const shot = (page, name) =>
  page.screenshot({ path: join(shots, `final-001-${name}.png`) });

const tool = (page, id) => page.locator(`[data-tool-id="${id}"]`);
const transport = (page, name) =>
  page.locator(`[data-transport="${name}"] button`);
const figure = (page, id) => page.locator(`[data-metric="${id}"] .figure`);
const units = (page) => page.locator("scene-unit-list li");
const shapes = (page) => page.locator("scene-geometry-list li");
const text = async (locator) =>
  ((await locator.textContent()) ?? "").replace(/\s+/g, " ").trim();
const frameNo = (page) => text(page.locator("scene-instrument-strip .frame"));

async function fieldPoint(page, x, y) {
  const canvas = page.locator("scene-canvas canvas");
  await canvas.scrollIntoViewIfNeeded();
  const box = await canvas.boundingBox();
  const scale = Math.min(box.width / 120, box.height / 80);
  return {
    x: box.x + (box.width - 120 * scale) / 2 + x * scale,
    y: box.y + (box.height - 80 * scale) / 2 + y * scale,
  };
}
async function fieldTool(page, name) {
  const button = page.locator(`[data-field-tool="${name}"]`);
  if ((await button.getAttribute("aria-pressed")) !== "true")
    await button.click();
  await page.waitForFunction(
    (tool) =>
      document
        .querySelector(`[data-field-tool="${tool}"]`)
        ?.getAttribute("aria-pressed") === "true",
    name,
  );
}
async function dragOnField(page, from, to) {
  const start = await fieldPoint(page, ...from);
  const end = await fieldPoint(page, ...to);
  await page.mouse.move(start.x, start.y);
  await page.mouse.down();
  await page.mouse.move(end.x, end.y, { steps: 8 });
  await page.mouse.up();
}
async function drawWall(page, from, to) {
  await fieldTool(page, "wall");
  await dragOnField(page, from, to);
}
async function clickField(page, x, y, options = {}) {
  const point = await fieldPoint(page, x, y);
  await page.mouse.click(point.x, point.y, options);
}
async function stepFrames(page, count) {
  for (let index = 0; index < count; index += 1)
    await transport(page, "step").click();
}
const numeric = /^\d+\.\d$/;
async function waitFigure(page, id, test, timeout = 90_000) {
  const started = Date.now();
  for (;;) {
    const value = await text(figure(page, id));
    if (test(value)) return value;
    if (Date.now() - started > timeout)
      throw new Error(`figure ${id} stayed ${value}`);
    await page.waitForTimeout(100);
  }
}
const rowsWith = (page, words) =>
  page.locator("scene-unit-list li", { hasText: words }).count();
const figures = async (page) => {
  const out = {};
  for (const id of [
    "timeToObjective",
    "collisions",
    "stalledUnits",
    "pathLength",
    "replans",
    "blockedUnits",
  ])
    out[id] = await text(figure(page, id));
  return out;
};

const browser = await chromium.launch();
const problems = [];
async function fresh(width = 2080, height = 1460) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: "reduce",
    baseURL: base,
  });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type()))
      problems.push(`${message.type()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("requestfailed", (request) =>
    problems.push(`requestfailed: ${request.url()}`),
  );
  await page.goto("/scene");
  await tool(page, "aifg-a:145").waitFor();
  await page.waitForFunction(
    () => document.querySelectorAll("scene-unit-list li").length === 20,
  );
  return { context, page };
}

const phases = (phaseArg ?? "route,avoid,headon").split(",");

if (phases.includes("route")) {
  const { context, page } = await fresh();
  say("arrival", {
    url: page.url(),
    heading: await text(page.getByRole("heading", { level: 1 })),
    units: await units(page).count(),
    railGroups: await page
      .locator("scene-toolbox-rail h3, scene-toolbox-rail h2")
      .allTextContents(),
    waysTools: await page
      .locator('scene-toolbox-rail [data-tool-id^="aifg"]')
      .count(),
    coach: await text(page.locator("scene-coach-mapper")),
  });
  await shot(page, "01-arrival-2080");

  await drawWall(page, [70, 0.5], [70, 64]);
  await fieldTool(page, "obstacle");
  await clickField(page, 62, 74);
  await dragOnField(page, [82, 72], [85, 72]);
  say("wall and obstacles", {
    shapes: await shapes(page).count(),
    list: await text(page.locator("scene-geometry-list summary")),
    coachWhileDrawing: await text(page.locator("scene-coach-mapper")),
    log: await page.locator("scene-tool-log ol li").allTextContents(),
  });
  await shot(page, "02-wall-and-obstacles-2080");

  await fieldTool(page, "select");
  await dragOnField(page, [2, 2], [68, 68]);
  const squad = await page.locator("scene-unit-list input:checked").count();
  await tool(page, "aifg-a:222").click();
  await clickField(page, 100, 40);
  const beforeApply = await text(page.locator("[data-routes]"));
  await page.locator("[data-apply] button").click();
  await page.waitForFunction(() =>
    document
      .querySelector("[data-routes]")
      ?.textContent?.includes("With a route"),
  );
  say("A* applied", {
    squad,
    inspector: await text(page.locator("scene-unit-inspector h2")),
    objective: await text(page.locator("scene-unit-list legend")),
    routesBeforeApply: beforeApply,
    routes: await text(page.locator("[data-routes]")),
    figures: await figures(page),
  });
  await transport(page, "play").click();
  await page.waitForTimeout(1500);
  say("on the way", {
    frame: await frameNo(page),
    figures: await figures(page),
  });
  await shot(page, "03-route-2080");
  const arrivedAt = await waitFigure(page, "timeToObjective", (value) =>
    numeric.test(value),
  );
  await page.waitForTimeout(1500);
  say("arrival of the squad", {
    timeToObjective: arrivedAt,
    frame: await frameNo(page),
    arrivedRows: await rowsWith(page, "arrived"),
    figures: await figures(page),
  });
  await shot(page, "04-arrived-2080");

  // Again from the start, with the search shown, a second wall across the way and then the seal.
  if (await transport(page, "pause").count())
    await transport(page, "pause").click();
  await transport(page, "restart").click();
  await stepFrames(page, 6);
  await page.locator("[data-show-search]").check();
  say("show search", {
    frame: await frameNo(page),
    routes: await text(page.locator("[data-routes]")),
    shapes: await shapes(page).count(),
  });
  await shot(page, "05-show-search-2080");
  await transport(page, "play").click();
  await page.waitForTimeout(1200);
  await drawWall(page, [76, 58], [92, 44]);
  await page.waitForTimeout(150);
  say("second wall", {
    frame: await frameNo(page),
    replans: await text(figure(page, "replans")),
    replanningRows: await rowsWith(page, "replanning"),
    routes: await text(page.locator("[data-routes]")),
  });
  await shot(page, "06-replan-2080");
  await page.waitForTimeout(700);
  if (await transport(page, "pause").count())
    await transport(page, "pause").click();
  await transport(page, "fork").click();
  const forkedAt = await frameNo(page);
  await drawWall(page, [70, 60], [70, 79.5]);
  await page.locator("[data-no-route]").first().waitFor();
  await fieldTool(page, "select");
  await stepFrames(page, 90);
  say("sealed", {
    forkedAt,
    frame: await frameNo(page),
    notice: await page.locator("[data-no-route]").allTextContents(),
    stillBlockedRows: await rowsWith(page, "still · blocked · no route"),
    blockedRows: await rowsWith(page, "no route"),
    movingBlockedRows:
      (await rowsWith(page, "walking · blocked")) +
      (await rowsWith(page, "running · blocked")),
    figures: await figures(page),
    routes: await text(page.locator("[data-routes]")),
  });
  await shot(page, "07-no-route-2080");

  const sizes = [
    [360, 800],
    [768, 900],
    [1440, 900],
    [3840, 1620],
    [2080, 1460],
  ];
  for (const [width, height] of sizes) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const fits = await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    );
    await page.evaluate(() => window.scrollTo(0, 0));
    await shot(page, `08-blocked-${width}`);
    if (width < 1440) {
      await page.locator("[data-no-route]").first().scrollIntoViewIfNeeded();
      await shot(page, `08-notice-${width}`);
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    say("viewport", { width, height, fits });
  }

  await transport(page, "compare").click();
  await page.locator("[data-divergence]").waitFor();
  say("trial with and without the sealing wall", {
    divergence: await text(page.locator("[data-divergence]")),
    series: await page
      .locator("[data-series]")
      .evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute("data-series")),
      ),
    compare: (await text(page.locator("scene-trial-compare"))).slice(0, 600),
  });
  await shot(page, "09-trial-2080");
  await page.locator('[data-trial="keep"] button').click();
  say("trial kept", {
    log: (await text(page.locator("scene-tool-log"))).slice(0, 400),
  });

  await page.locator("[data-field-clear]").click();
  await page.waitForFunction(
    () => document.querySelectorAll("[data-no-route]").length === 0,
  );
  say("cleared", {
    shapes: await shapes(page).count(),
    replanningRows: await rowsWith(page, "replanning"),
    noRouteRows: await rowsWith(page, "no route"),
    figures: await figures(page),
  });
  await transport(page, "play").click();
  const again = await waitFigure(page, "timeToObjective", (value) =>
    numeric.test(value),
  );
  say("moving again and arrived", {
    timeToObjective: again,
    frame: await frameNo(page),
    arrivedRows: await rowsWith(page, "arrived"),
  });
  await shot(page, "10-cleared-arrived-2080");

  if (await transport(page, "pause").count())
    await transport(page, "pause").click();
  await transport(page, "save").click();
  await page.locator("[data-composition-id]").first().waitFor();
  const steps = await page.locator("scene-tool-log ol li").allTextContents();
  await page.reload();
  await tool(page, "aifg-a:145").waitFor();
  const afterReload = await shapes(page).count();
  await page.locator("[data-composition-id] button").first().click();
  await stepFrames(page, 1);
  say("saved, reloaded and opened", {
    stepsSaved: steps.map((line) => line.replace(/\s+/g, " ").trim()),
    shapesAfterReload: afterReload,
    shapesAfterOpenAndStep: await shapes(page).count(),
    firstWall: await shapes(page)
      .first()
      .locator('[data-value="x1"]')
      .inputValue(),
    frame: await frameNo(page),
    saved: (await text(page.locator("scene-tool-log"))).slice(0, 300),
  });
  await shot(page, "11-reopened-2080");
  await transport(page, "play").click();
  await page.waitForTimeout(3000);
  say("replayed", {
    frame: await frameNo(page),
    shapes: await shapes(page).count(),
    figures: await figures(page),
  });
  await shot(page, "12-replayed-2080");
  await context.close();
}

if (phases.includes("live")) {
  // The Objective's order without a restart: the tool stays on the squad, the search stays shown.
  const { context, page } = await fresh();
  await drawWall(page, [70, 0.5], [70, 64]);
  await fieldTool(page, "obstacle");
  await clickField(page, 62, 74);
  await clickField(page, 82, 72);
  await fieldTool(page, "select");
  await dragOnField(page, [2, 2], [68, 68]);
  await tool(page, "aifg-a:222").click();
  await clickField(page, 100, 40);
  await page.locator("[data-apply] button").click();
  await page.locator("[data-show-search]").check();
  await transport(page, "play").click();
  await page.waitForTimeout(1300);
  await drawWall(page, [76, 58], [92, 44]);
  await page.waitForTimeout(400);
  say("second wall while the tool is live", {
    frame: await frameNo(page),
    selected: await page.locator("scene-unit-list input:checked").count(),
    routes: await text(page.locator("[data-routes]")),
    replans: await text(figure(page, "replans")),
    replanningRows: await rowsWith(page, "replanning"),
  });
  await shot(page, "06b-replan-live-2080");
  await drawWall(page, [70, 60], [70, 79.5]);
  await page.locator("[data-no-route]").first().waitFor();
  await page.waitForTimeout(2500);
  say("sealed on the move, still playing", {
    frame: await frameNo(page),
    playing: await transport(page, "pause").count(),
    notice: await page.locator("[data-no-route]").allTextContents(),
    stillBlockedRows: await rowsWith(page, "still · blocked · no route"),
    blockedRows: await rowsWith(page, "no route"),
    routes: await text(page.locator("[data-routes]")),
    figures: await figures(page),
  });
  await shot(page, "07b-no-route-live-2080");
  await context.close();
}

if (phases.includes("avoid")) {
  const { context, page } = await fresh();
  await drawWall(page, [65, 15], [65, 65]);
  await fieldTool(page, "select");
  await dragOnField(page, [2, 20], [60, 62]);
  const squad = await page.locator("scene-unit-list input:checked").count();
  await tool(page, "aifg-a:137").click();
  const heading = await text(page.locator("scene-unit-inspector h2"));
  await page.locator("[data-apply] button").click();
  await clickField(page, 100, 40, { button: "right" });
  await transport(page, "play").click();
  await page.waitForTimeout(2600);
  say("avoidance feeling the wall", {
    squad,
    inspector: heading,
    hasRoutesSection: await page.locator("[data-routes]").count(),
    frame: await frameNo(page),
    log: (await page.locator("scene-tool-log ol li").allTextContents()).map(
      (line) => line.replace(/\s+/g, " ").trim(),
    ),
    figures: await figures(page),
  });
  await shot(page, "13-whiskers-2080");
  await page.waitForTimeout(5000);
  say("avoidance later", {
    frame: await frameNo(page),
    figures: await figures(page),
    rows: (await units(page).allTextContents())
      .map((line) => line.replace(/\s+/g, " ").trim())
      .slice(0, 20),
  });
  await shot(page, "14-whiskers-later-2080");
  await context.close();
}

if (phases.includes("headon")) {
  const { context, page } = await fresh();
  await page.locator('[data-unit-id="unit-02"] input').click();
  await page.locator('[data-unit-id="unit-04"] input').click();
  await tool(page, "aifg-a:134").click();
  await page.locator("[data-apply] button").click();
  await clickField(page, 61.05, 16.65, { button: "right" });
  await transport(page, "play").click();
  await page.waitForTimeout(1100);
  await shot(page, "15-head-on-approach-2080");
  const first = await waitFigure(page, "timeToObjective", (value) =>
    numeric.test(value),
  );
  const firstFigures = await figures(page);
  await shot(page, "16-head-on-parted-2080");
  const rows = async () =>
    Promise.all(
      ["unit-02", "unit-04"].map((id) =>
        text(page.locator(`[data-unit-id="${id}"]`)),
      ),
    );
  const firstRows = await rows();
  if (await transport(page, "pause").count())
    await transport(page, "pause").click();
  await transport(page, "restart").click();
  await transport(page, "play").click();
  const second = await waitFigure(page, "timeToObjective", (value) =>
    numeric.test(value),
  );
  say("head on", {
    first,
    second,
    firstFigures,
    secondFigures: await figures(page),
    firstRows,
    secondRows: await rows(),
  });
  await shot(page, "17-head-on-replayed-2080");
  await context.close();
}

say("console and network", { problems });
await browser.close();
