// VER-001: the verifier's own walkthrough of Obstacle and wall avoidance in a served production build.
// Usage: node wall-walkthrough.mjs <target worktree> <production browser directory> <output directory>
// A fresh Chromium the session launches; no existing browser profile. It reads every frame of the
// default run and of the same run with the one-unit comparison ray, then captures the named frames
// at rule 24's sizes and rule 29's two operator sizes.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { extname, join, normalize, resolve } from "node:path";

const [target, dist, outputArgument] = process.argv.slice(2);
if (!target || !dist || !outputArgument)
  throw new Error(
    "usage: wall-walkthrough.mjs <target> <browser dist> <output>",
  );
const output = resolve(outputArgument);
mkdirSync(output, { recursive: true });
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
const root = resolve(dist);
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
const server = createServer((request, response) => {
  let file = join(
    root,
    normalize(
      decodeURIComponent(new URL(request.url, "http://localhost").pathname),
    ),
  );
  try {
    if (!file.startsWith(root) || !statSync(file).isFile())
      throw new Error("fallback");
  } catch {
    file = join(root, "index.html");
  }
  response.setHeader(
    "content-type",
    mime[extname(file)] ?? "application/octet-stream",
  );
  response.end(readFileSync(file));
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const address = `http://127.0.0.1:${server.address().port}/tools/catalog/aifg-a:137`;

const settle = (page) =>
  page.evaluate(
    () =>
      new Promise((ready) =>
        requestAnimationFrame(() => requestAnimationFrame(ready)),
      ),
  );

async function openAll(page, study) {
  // Element handles, one at a time: a lazily loaded section inserts further summaries.
  for (let round = 0; round < 40; round++) {
    const closed = study.locator("details:not([open]) > summary");
    if ((await closed.count()) === 0) {
      await page.waitForLoadState("networkidle");
      if ((await closed.count()) === 0) return;
      continue;
    }
    const handle = await closed.first().elementHandle();
    await handle.click();
    await page.waitForFunction((element) => element.parentElement.open, handle);
    await handle.dispose();
  }
  throw new Error("disclosures did not settle");
}

async function setRange(page, locator, value) {
  await locator.fill(String(value));
  await settle(page);
}

async function frameAt(page, study, step) {
  await setRange(page, study.getByRole("slider", { name: /^Time ·/ }), step);
  const svg = study.locator("tools-study-motion svg[role=img]");
  return {
    step: Number(await svg.getAttribute("data-step")),
    label: await svg.getAttribute("aria-label"),
  };
}

async function shot(page, name, locator) {
  if (locator) await locator.scrollIntoViewIfNeeded();
  await settle(page);
  const path = `${name}.png`;
  await page.screenshot({ path: join(output, path) });
  return {
    path,
    sha256: createHash("sha256")
      .update(readFileSync(join(output, path)))
      .digest("hex"),
  };
}

const sizes = [
  { width: 360, height: 800 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
  { width: 2080, height: 1460 },
  { width: 3840, height: 1620 },
];
const operatorSize = ({ width }) => width >= 2080;
const browser = await chromium.launch();
const results = {
  startedAt: new Date().toISOString(),
  address: "/tools/catalog/aifg-a:137",
  sizes: [],
};
try {
  for (const viewport of sizes) {
    const context = await browser.newContext({
      viewport,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors = [];
    const failures = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    page.on(
      "console",
      (message) =>
        message.type() === "error" && errors.push(`console: ${message.text()}`),
    );
    page.on("requestfailed", (request) =>
      failures.push(new URL(request.url()).pathname),
    );
    page.on(
      "response",
      (response) =>
        response.status() >= 400 &&
        failures.push(
          `${response.status()} ${new URL(response.url()).pathname}`,
        ),
    );
    const size = `${viewport.width}x${viewport.height}`;
    const row = { viewport, screenshots: {}, errors, failures };
    await page.goto(address);
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    const svg = study.locator("tools-study-motion svg[role=img]");
    row.arrivalStep = Number(await svg.getAttribute("data-step"));
    row.screenshots.arrival = await shot(page, `${size}-arrival`, svg);
    await openAll(page, study);
    row.momentButtons = await study
      .locator("button")
      .evaluateAll((buttons) =>
        buttons.map((button) => button.textContent.trim()).filter(Boolean),
      );
    // The moments: each button's frame.
    row.moments = [];
    for (const name of [
      "Ray first hits",
      "Ray misses again",
      "Smallest clearance",
      "End of run",
    ]) {
      await study.getByRole("button", { name, exact: true }).click();
      await settle(page);
      const step = Number(await svg.getAttribute("data-step"));
      const moment = {
        name,
        step,
        label: await svg.getAttribute("aria-label"),
      };
      if (operatorSize(viewport) || name === "Ray first hits")
        moment.screenshot = await shot(page, `${size}-moment-${step}`, svg);
      row.moments.push(moment);
    }
    const comparison = study.locator(".comparison");
    row.comparisonText = await comparison.innerText();
    row.screenshots.comparison = await shot(
      page,
      `${size}-comparison`,
      comparison,
    );
    if (viewport.width === 2080) {
      // Every frame of the default run, then of the same run with the comparison ray.
      row.defaultRun = [];
      for (let step = 0; step <= 80; step++)
        row.defaultRun.push(await frameAt(page, study, step));
      const ray = study.getByRole("slider", { name: /^Forward ray length/ });
      await setRange(page, ray, 1);
      row.oneUnitComparisonText = await comparison.innerText();
      row.oneUnitRun = [];
      for (let step = 0; step <= 80; step++)
        row.oneUnitRun.push(await frameAt(page, study, step));
      await setRange(page, ray, 9);
      row.studyText = await study.innerText();
    }
    if (operatorSize(viewport)) {
      const ray = study.getByRole("slider", { name: /^Forward ray length/ });
      await setRange(page, ray, 1);
      await study
        .getByRole("button", { name: "Smallest clearance", exact: true })
        .click();
      await settle(page);
      row.oneUnitSmallest = {
        step: Number(await svg.getAttribute("data-step")),
        label: await svg.getAttribute("aria-label"),
      };
      row.screenshots.oneUnitSmallest = await shot(
        page,
        `${size}-one-unit-ray-smallest`,
        svg,
      );
      await setRange(page, ray, 10);
      await study
        .getByRole("button", { name: "Smallest clearance", exact: true })
        .click();
      await settle(page);
      row.tenUnitSmallest = {
        step: Number(await svg.getAttribute("data-step")),
        label: await svg.getAttribute("aria-label"),
      };
      row.tenUnitLimits = (await study.innerText())
        .split("\n")
        .filter((line) => /longer ray/i.test(line));
      row.screenshots.tenUnitSmallest = await shot(
        page,
        `${size}-ten-unit-ray-smallest`,
        svg,
      );
      await setRange(page, ray, 9);
    }
    results.sizes.push(row);
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}
results.finishedAt = new Date().toISOString();
writeFileSync(
  join(output, "results.json"),
  `${JSON.stringify(results, null, 1)}\n`,
);
const problems = results.sizes.flatMap((row) => [
  ...row.errors,
  ...row.failures,
]);
console.log(
  JSON.stringify({
    sizes: results.sizes.length,
    problems,
    moments: results.sizes.map((row) =>
      row.moments.map(({ name, step }) => `${name}@${step}`),
    ),
  }),
);
if (problems.length) process.exitCode = 1;
