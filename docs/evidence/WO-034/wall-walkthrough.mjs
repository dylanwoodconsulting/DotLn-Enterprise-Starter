// Exercise the wall study in a fresh browser at the operator's two viewport sizes.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { extname, join, normalize, resolve } from "node:path";
import { openStudyDetails } from "./open-study-details.mjs";

const [targetArgument, outputArgument] = process.argv.slice(2);
assert(
  targetArgument && outputArgument,
  "usage: wall-walkthrough.mjs <target> <output>",
);
const target = resolve(targetArgument);
const output = resolve(outputArgument);
const root = join(target, "dist/apps/dotln/browser");
const { chromium, expect } = createRequire(join(target, "package.json"))(
  "@playwright/test",
);
const record = JSON.parse(
  readFileSync(
    join(
      target,
      "libs/shared/catalog/src/studies/aifg/obstacle-and-wall-avoidance.json",
    ),
    "utf8",
  ),
);
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const server = createServer((request, response) => {
  let file = join(
    root,
    normalize(
      decodeURIComponent(new URL(request.url, "http://localhost").pathname),
    ),
  );
  try {
    if (!statSync(file).isFile()) throw new Error("not a file");
  } catch {
    file = join(root, "index.html");
  }
  response.setHeader(
    "content-type",
    types[extname(file)] ?? "application/octet-stream",
  );
  response.end(readFileSync(file));
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const results = [];
try {
  for (const viewport of [
    { width: 2080, height: 1460 },
    { width: 3840, height: 1620 },
  ]) {
    const context = await browser.newContext({
      viewport,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors = [];
    const failures = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    page.on("requestfailed", (request) =>
      failures.push({
        path: new URL(request.url()).pathname,
        failure: request.failure()?.errorText,
      }),
    );
    page.on("response", (response) => {
      if (response.status() >= 400)
        failures.push({
          path: new URL(response.url()).pathname,
          status: response.status(),
        });
    });
    await page.goto(
      `http://127.0.0.1:${server.address().port}/tools/catalog/${record.id}`,
    );
    const study = page.locator("tools-study");
    const svg = study.locator("tools-study-motion svg");
    await expect(svg).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await openStudyDetails(page, study);
    await expect(study.locator(".comparison h4")).toHaveText(
      "Compare ray lengths",
    );
    const capture = async (name) => {
      const path = `${viewport.width}x${viewport.height}-${name}.png`;
      await page.screenshot({ path: join(output, path) });
      return {
        path,
        sha256: createHash("sha256")
          .update(readFileSync(join(output, path)))
          .digest("hex"),
      };
    };
    const moments = [];
    for (const [name, expected] of [
      ["Ray first hits", 5],
      ["Ray misses again", 7],
      ["Smallest clearance", null],
      ["End of run", 80],
    ]) {
      await study.getByRole("button", { name, exact: true }).click();
      if (expected !== null)
        await expect(svg).toHaveAttribute("data-step", String(expected));
      await page.evaluate(
        () =>
          new Promise((ready) =>
            requestAnimationFrame(() => requestAnimationFrame(ready)),
          ),
      );
      const step = Number(await svg.getAttribute("data-step"));
      await svg.scrollIntoViewIfNeeded();
      moments.push({
        name,
        step,
        text: await svg.getAttribute("aria-label"),
        screenshot: await capture(`selected-${step}`),
      });
    }
    const comparison = study.locator(".comparison");
    await comparison.scrollIntoViewIfNeeded();
    const comparisonText = await comparison.innerText();
    assert(
      comparisonText.includes("0.12") && comparisonText.includes("-0.08"),
      "comparison gives both minimum clearances",
    );
    const comparisonScreenshot = await capture("comparison");
    const input = study.getByRole("slider", { name: /^Forward ray length/ });
    await input.fill("1");
    await expect(comparison).toContainText("Both ray lengths are equal");
    await study
      .getByRole("button", { name: "Smallest clearance", exact: true })
      .click();
    await page.evaluate(
      () =>
        new Promise((ready) =>
          requestAnimationFrame(() => requestAnimationFrame(ready)),
        ),
    );
    await svg.scrollIntoViewIfNeeded();
    const shortRay = {
      step: Number(await svg.getAttribute("data-step")),
      text: await svg.getAttribute("aria-label"),
      screenshot: await capture("one-unit-ray"),
    };
    await input.fill("0.5");
    await expect(comparison.locator("h4")).toHaveText("Compare ray lengths");
    await expect(comparison).not.toContainText("Both ray lengths are equal");
    const halfUnitComparison = await comparison.innerText();
    await input.fill("10");
    await study
      .getByRole("button", { name: "Smallest clearance", exact: true })
      .click();
    await page.evaluate(
      () =>
        new Promise((ready) =>
          requestAnimationFrame(() => requestAnimationFrame(ready)),
        ),
    );
    const longRay = {
      step: Number(await svg.getAttribute("data-step")),
      text: await svg.getAttribute("aria-label"),
    };
    assert(
      (await study.innerText()).includes("0.74"),
      "the limits state the longer-ray overlap",
    );
    assert.deepEqual(errors, []);
    assert.deepEqual(failures, []);
    results.push({
      viewport,
      moments,
      comparisonText,
      comparisonScreenshot,
      shortRay,
      halfUnitComparison,
      longRay,
      errors,
      failures,
    });
    await context.close();
  }
  writeFileSync(
    join(output, "results.json"),
    JSON.stringify(
      { capturedAt: new Date().toISOString(), recordId: record.id, results },
      null,
      2,
    ) + "\n",
  );
  console.log(
    JSON.stringify({
      viewports: results.map(({ viewport }) => viewport),
      screenshots: results.reduce(
        (sum, row) => sum + row.moments.length + 2,
        0,
      ),
      errors: 0,
    }),
  );
} finally {
  await browser.close();
  server.close();
}
