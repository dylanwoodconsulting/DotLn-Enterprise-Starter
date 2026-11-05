// FINAL-002's session: VER-003's steps unchanged so its text can be compared, plus one reading of the study this review edited. Performs the Objective in the
// served production build, in fresh Chromium contexts it launches, under reduced motion, and captures each step at the five widths.
// In the target worktree, first: npx nx build dotln --configuration=production
// Then: node session.mjs <target worktree> <screenshot directory> <results.json>
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const [target, shots, output] = process.argv.slice(2);
if (!target || !shots || !output)
  throw new Error(
    "usage: session.mjs <target worktree> <screenshot directory> <results.json>",
  );
const T = resolve(target);
const require = createRequire(join(T, "package.json"));
const { chromium } = require("@playwright/test");
const root = join(T, "dist/apps/dotln/browser");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const server = createServer(async (req, res) => {
  let file = join(
    root,
    normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)),
  );
  try {
    if (!(await stat(file)).isFile()) throw new Error("not a file");
  } catch {
    file = join(root, "index.html");
  }
  res.setHeader(
    "content-type",
    types[extname(file)] ?? "application/octet-stream",
  );
  res.end(await readFile(file));
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const base = `http://127.0.0.1:${server.address().port}`;
await mkdir(resolve(shots), { recursive: true });

const sizes = [
  [360, 900],
  [768, 900],
  [1440, 900],
  [2080, 1460],
  [3840, 1620],
];
const browser = await chromium.launch();
const results = [];
for (const [width, height] of sizes) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: width >= 2080 ? 4 / 3 : 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const log = {
    width,
    steps: [],
    pageErrors: [],
    consoleErrors: [],
    failed: [],
  };
  page.on("pageerror", (e) => log.pageErrors.push(String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") log.consoleErrors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400) log.failed.push(`${r.status()} ${r.url()}`);
  });
  // Which study catalogs load, and when: the shelf must fetch none, a reading only its own work's.
  log.catalogRequests = [];
  page.on("request", (r) => {
    const m = r.url().match(/\/i18n\/(study[^/]+)\/en\.json$/);
    if (m)
      log.catalogRequests.push({
        scope: m[1],
        at: page.url().replace(base, ""),
      });
  });
  const study = page.locator("tools-study");
  const time = () => study.getByRole("slider", { name: /^Time/ });
  const fits = () =>
    page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  const heading = () =>
    page
      .getByRole("region", { name: "Concept reading", exact: true })
      .getByRole("heading", { level: 2 })
      .textContent();
  const reading = async () =>
    (await study.getByTestId("study-reading").first().textContent())?.trim();
  const shot = async (name, extra = {}) => {
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(120);
    await page.screenshot({
      path: join(resolve(shots), `final002-${name}-${width}.png`),
    });
    log.steps.push({
      name,
      url: page.url().replace(base, ""),
      fits: await fits(),
      ...extra,
    });
  };
  const showFigure = async () => {
    await study.locator("figure").first().scrollIntoViewIfNeeded();
  };
  const open = async (text) => {
    const summary = study.locator("summary").filter({ hasText: text }).first();
    await summary.scrollIntoViewIfNeeded();
    await summary.press("Enter");
    await page.waitForTimeout(150);
  };
  const bySearch = async (text, id) => {
    await page.getByRole("searchbox", { name: "Find a concept" }).fill(text);
    await page.locator(`[data-result-id="${id}"]`).click();
    await page.locator(`[data-concept-id="${id}"]`).waitFor();
    await study.waitFor();
  };

  // Tools, Catalog, AI for Games.
  await page.goto(`${base}/`);
  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Catalog", exact: true })
    .click();
  const work = page
    .getByRole("navigation", { name: "The works" })
    .getByRole("button", { name: /AI for Games/ });
  const shelf = (await work.textContent()).replace(/\s+/g, " ").trim();
  await work.click();
  const list = page.locator(".studied-list");
  await list.getByRole("heading").waitFor();
  log.catalogRequestsOnShelf = log.catalogRequests.length;
  await shot("01-shelf", {
    shelf,
    listHeading: await list.getByRole("heading").textContent(),
    listLinks: await list.getByRole("link").count(),
  });

  // Collision avoidance: step, chart, mechanism, executable model, limits, elsewhere and nearby.
  await list
    .getByRole("link", { name: "Collision avoidance", exact: true })
    .click();
  await study.waitFor();
  const collisionTitle = await heading();
  const steps = [];
  await time().fill("0");
  await study.locator(".numbers summary").click();
  for (let i = 0; i < 4; i++) {
    steps.push({ value: await time().inputValue(), text: await reading() });
    await study
      .getByRole("button", { name: "Step forward", exact: true })
      .click();
  }
  const lastCollision = await time().getAttribute("max");
  await time().fill(lastCollision);
  steps.push({ value: lastCollision, text: await reading() });
  await time().fill("3");
  await showFigure();
  await shot("02-collision-step", {
    title: collisionTitle,
    play: await study
      .getByRole("button", { name: "Play", exact: true })
      .count(),
    steps,
  });
  await study.getByRole("button", { name: "Chart", exact: true }).click();
  await study.locator("tools-study-timeline").waitFor();
  await showFigure();
  await shot("03-collision-chart");
  await study.getByRole("button", { name: "Movement", exact: true }).click();
  await open("Follow the mechanism");
  await study
    .locator(".algorithm-guide > pre")
    .first()
    .scrollIntoViewIfNeeded();
  await shot("04-collision-pseudocode", {
    pseudocode: await study
      .locator(".algorithm-guide > pre")
      .first()
      .isVisible(),
  });
  await study.locator(".executable-model summary").click();
  await study.getByTestId("model-spec").scrollIntoViewIfNeeded();
  await shot("05-collision-executable", {
    module: await study.getByTestId("model-module").textContent(),
    spec: await study.getByTestId("model-spec").textContent(),
  });
  await open("Where this breaks down");
  await study.locator(".limits").scrollIntoViewIfNeeded();
  await shot("06-collision-limits", {
    limits: await study.locator(".limits").isVisible(),
  });
  await open("See it elsewhere");
  await study.locator(".implementations").scrollIntoViewIfNeeded();
  await shot("07-collision-elsewhere", {
    implementations: await study
      .locator(".implementations .implementation")
      .count(),
  });
  const nearby = await study.locator(".nearby a").allTextContents();

  // Flee from the contents.
  await page
    .getByRole("navigation", { name: "Contents", exact: true })
    .getByRole("link", { name: "Flee", exact: true })
    .click();
  await page.locator('[data-concept-id="aifg-a:111"]').waitFor();
  await study.waitFor();
  await time().fill("3");
  await showFigure();
  await shot("08-flee", {
    title: await heading(),
    nearbyFromCollision: nearby,
  });

  // Obstacle and wall avoidance: its rays, the repaired turn, then the Corner trap link.
  await bySearch("Obstacle and wall avoidance", "aifg-a:137");
  await time().fill("0");
  await study.locator(".numbers summary").click();
  const wall = [];
  for (const moment of [
    "Ray first hits",
    "Turning along the wall",
    "Smallest clearance",
    "End of run",
  ]) {
    await study.getByRole("button", { name: moment, exact: true }).click();
    await page.waitForTimeout(60);
    wall.push({
      moment,
      value: await time().inputValue(),
      text: await reading(),
    });
    await showFigure();
    await shot(`09-wall-${moment.toLowerCase().replaceAll(" ", "-")}`);
  }
  log.wall = wall;
  await time().fill("0");
  await study
    .getByRole("button", { name: "Step forward", exact: true })
    .click();
  log.wallStepped = await time().inputValue();
  await study.locator(".nearby a", { hasText: "Corner trap" }).click();
  await page.locator('[data-concept-id="aifg-a:139"]').waitFor();
  await study.waitFor();
  await showFigure();
  await shot("10-corner-trap", { title: await heading() });

  // Projectile trajectory to its landing, then The firing solution, its mechanism and limits.
  await bySearch("Projectile trajectory", "aifg-a:162");
  const last = await time().getAttribute("max");
  await time().fill(last);
  await study.locator(".numbers summary").click();
  await showFigure();
  await shot("11-projectile-landing", {
    title: await heading(),
    landing: await reading(),
  });
  await study.locator(".nearby a", { hasText: "The firing solution" }).click();
  await page.locator('[data-concept-id="aifg-a:163"]').waitFor();
  await study.waitFor();
  await showFigure();
  await shot("12-firing-solution", { title: await heading() });
  await open("Follow the mechanism");
  await open("Where this breaks down");
  await study.locator(".limits").scrollIntoViewIfNeeded();
  await shot("13-firing-limits", {
    limits: (await study.locator(".limits").innerText()).slice(0, 1200),
  });
  // Formation pattern interface, the one study this review edited: it opens, steps and shows no raw key.
  await bySearch("Formation pattern interface", "aifg-a:181");
  await study.locator(".numbers summary").click();
  await open("Follow the mechanism");
  await showFigure();
  const formationText = await study.innerText();
  await shot("14-formation-pattern", {
    title: await heading(),
    reading: await reading(),
    rawKeys: (formationText.match(/study[A-Z][A-Za-z]*\.[\w.-]+/g) ?? [])
      .length,
  });
  results.push(log);
  await context.close();
  console.log(
    `session ${width}: ${log.steps.length} captures; page errors ${log.pageErrors.length}; console errors ${log.consoleErrors.length}; failed responses ${log.failed.length}; all fit ${log.steps.every((s) => s.fits)}`,
  );
}
await browser.close();
server.close();
await writeFile(resolve(output), JSON.stringify(results, null, 1) + "\n");
