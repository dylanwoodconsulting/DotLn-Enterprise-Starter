// Capture every visible text node of every frame of the twenty enterprise pattern studies in a
// served production build, at 1440 and at 360 pixels wide. Adapted from WO-034's movement crawl:
// the studies come from studies-summary.json, the sixteen states drawings are stepped through
// their own step control to every moment, the four structural records are read once as text, and
// only rendered text counts, so the wide register is read at 1440 and the narrow one at 360. Each
// frame marks which of its text nodes are a register's state headings, the one admitted change.
// Usage: node crawl.mjs <target worktree> <production-browser-dir> <output.json>
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { openStudyDetails } from "./open-study-details.mjs";
import { enterpriseStudies, serveBuild } from "./serve-build.mjs";

const [target, dist, output] = process.argv.slice(2);
if (!target || !dist || !output)
  throw new Error(
    "usage: crawl.mjs <target> <production-browser-dir> <output.json>",
  );
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
const studies = enterpriseStudies(target);
const viewports = [
  { width: 1440, height: 900 },
  { width: 360, height: 800 },
];
const server = await serveBuild(dist);
const browser = await chromium.launch();
const errors = [];
const frames = [];

/** The study's rendered text in document order, with the register headings' positions marked. */
const snapshotOf = (study) =>
  study.evaluate((element) => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = [];
    const headings = [];
    while (walker.nextNode()) {
      const holder = walker.currentNode.parentElement;
      const text = walker.currentNode.textContent.trim();
      if (!text || !holder.checkVisibility()) continue;
      if (holder.matches("tools-study-states svg text.heading"))
        headings.push(nodes.length);
      nodes.push(text);
    }
    return {
      nodes,
      headings,
      labels: [...element.querySelectorAll("[aria-label]")]
        .filter((node) => node.checkVisibility())
        .map((node) => node.getAttribute("aria-label")),
    };
  });

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    page.on("pageerror", (error) =>
      errors.push(`${viewport.width}: ${String(error)}`),
    );
    for (const { id, slug, family } of studies) {
      await page.goto(`${server.base}/tools/catalog/${id}`);
      const study = page.locator("tools-study");
      await study.waitFor({ timeout: 20000 });
      await openStudyDetails(page, study);
      if (family !== "states") {
        frames.push({
          slug,
          viewport: viewport.width,
          step: null,
          ...(await snapshotOf(study)),
        });
        console.log(`${viewport.width} ${slug}: read as text`);
        continue;
      }
      const slider = study.getByRole("slider", { name: /^Step \d+ of \d+$/ });
      const last = Number(await slider.getAttribute("max"));
      for (let step = 0; step <= last; step++) {
        await slider.fill(String(step));
        await page.evaluate(
          () =>
            new Promise((ready) =>
              requestAnimationFrame(() => requestAnimationFrame(ready)),
            ),
        );
        frames.push({
          slug,
          viewport: viewport.width,
          step,
          ...(await snapshotOf(study)),
        });
      }
      console.log(`${viewport.width} ${slug}: ${last + 1} steps`);
    }
    await context.close();
  }
  const drawn = studies.filter(({ family }) => family === "states").length;
  const result = {
    capturedAt: new Date().toISOString(),
    studies: studies.length,
    statesStudies: drawn,
    viewports: viewports.map(({ width }) => width),
    frameCount: frames.length,
    errors,
    frames,
  };
  writeFileSync(output, `${JSON.stringify(result)}\n`);
  console.log(
    JSON.stringify({
      studies: result.studies,
      statesStudies: drawn,
      frames: frames.length,
      errors,
    }),
  );
  if (errors.length || studies.length !== 20 || drawn !== 16 || !frames.length)
    process.exitCode = 1;
} finally {
  await browser.close();
  server.close();
}
