// Independent verifier walkthrough using the project's production-build server and Playwright.
// Records every step of Foreign Key Mapping and Service Layer at the five required sizes.
// Usage: node walkthrough.mjs <target> <production-browser-dir> <output-directory>
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { serveBuild } from "../serve-build.mjs";
import { openStudyDetails } from "../open-study-details.mjs";

const [target, dist, output] = process.argv.slice(2);
const { chromium, expect } = createRequire(
  join(resolve(target), "package.json"),
)("@playwright/test");
const viewports = [
  { width: 360, height: 800 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
  { width: 2080, height: 1460 },
  { width: 3840, height: 1620 },
];
const studies = [
  { slug: "foreign-key-mapping", id: "poeaa:278" },
  { slug: "service-layer", id: "poeaa:226" },
];
mkdirSync(output, { recursive: true });
const server = await serveBuild(dist);
const browser = await chromium.launch();
const result = {
  capturedAt: new Date().toISOString(),
  build: "fresh production build, cache skipped, at the verifier's candidate",
  viewports,
  errors: [],
  failedResponses: [],
  sessions: [],
};
try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    page.on("pageerror", (error) => result.errors.push(String(error)));
    page.on("response", (response) => {
      if (response.status() >= 400)
        result.failedResponses.push({
          path: new URL(response.url()).pathname,
          status: response.status(),
        });
    });
    for (const { slug, id } of studies) {
      await page.goto(`${server.base}/tools/catalog/${id}`);
      const study = page.locator("tools-study");
      const states = study.locator("tools-study-states");
      await states.waitFor({ timeout: 20000 });
      await openStudyDetails(page, study);
      await page.evaluate(() => document.fonts.ready);
      const slider = states.getByRole("slider", { name: /^Step \d+ of \d+$/ });
      const last = Number(await slider.getAttribute("max"));
      assert.equal(last, slug === "foreign-key-mapping" ? 7 : 9);
      const session = { slug, id, viewport, last, frames: [], screenshots: [] };
      // Exercise the named forward/back controls as well as every slider position.
      await slider.fill("0");
      await states
        .getByRole("button", { name: "Step forward", exact: true })
        .click();
      await expect(slider).toHaveValue("1");
      await states
        .getByRole("button", { name: "Step back", exact: true })
        .click();
      await expect(slider).toHaveValue("0");
      for (let step = 0; step <= last; step++) {
        await slider.fill(String(step));
        await page.evaluate(
          () =>
            new Promise((ready) =>
              requestAnimationFrame(() => requestAnimationFrame(ready)),
            ),
        );
        const observed = await states.evaluate((element) => {
          const svg = [...element.querySelectorAll("svg")].find((node) =>
            node.checkVisibility(),
          );
          const headings = [...svg.querySelectorAll("text.heading")].map(
            (node) => ({
              text: node.textContent.trim(),
              fontSize: getComputedStyle(node).fontSize,
              scale: node.style.getPropertyValue("--states-scale"),
            }),
          );
          return {
            label: svg.getAttribute("aria-label"),
            headings,
            text: element.innerText,
            documentOverflow: document.documentElement.scrollWidth - innerWidth,
          };
        });
        assert.equal(observed.documentOverflow, 0);
        assert(observed.headings.length > 0);
        assert(
          observed.headings.every(({ fontSize }) => parseFloat(fontSize) > 0),
        );
        session.frames.push({ step, ...observed });
        if ([0, 3, last].includes(step)) {
          await states.scrollIntoViewIfNeeded();
          const file = `${slug}-${viewport.width}-step${step}.png`;
          await page.screenshot({ path: join(output, file) });
          session.screenshots.push(file);
        }
      }
      session.accessibility = await states.ariaSnapshot();
      session.inputs = await study
        .locator("tools-study-inputs")
        .innerText()
        .catch(() => "");
      result.sessions.push(session);
      console.log(
        JSON.stringify({
          slug,
          width: viewport.width,
          steps: session.frames.length,
          screenshots: session.screenshots.length,
        }),
      );
    }
    await context.close();
  }
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.failedResponses, []);
} finally {
  await browser.close();
  server.close();
  writeFileSync(
    join(output, "walkthrough.json"),
    `${JSON.stringify(result, null, 2)}\n`,
  );
}
