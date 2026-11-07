// Capture every rendered text node of every movement frame in a served production build.
// Based on the previous verification crawl; each run retains its own complete snapshots.
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { openStudyDetails } from "./open-study-details.mjs";

const [target, dist, output] = process.argv.slice(2);
if (!target || !dist || !output)
  throw new Error(
    "usage: crawl.mjs <target> <production-browser-dir> <output.json>",
  );
const root = resolve(dist);
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
const mime = {
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
    mime[extname(file)] ?? "application/octet-stream",
  );
  response.end(readFileSync(file));
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const base = `http://127.0.0.1:${server.address().port}`;
const directory = join(target, "libs/shared/catalog/src/studies/aifg");
const records = readdirSync(directory)
  .filter((file) => file.endsWith(".json"))
  .map((file) => JSON.parse(readFileSync(join(directory, file), "utf8")));
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(String(error)));
const frames = [];
try {
  for (const record of records) {
    await page.goto(`${base}/tools/catalog/${record.id}`);
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    await openStudyDetails(page, study);
    const slider = study.getByRole("slider", { name: /^Time ·/ });
    const max = Number(await slider.getAttribute("max"));
    const views = [];
    for (const button of await study.getByRole("button").all())
      if ((await button.getAttribute("aria-pressed")) !== null)
        views.push(button);
    for (const [view, button] of (views.length ? views : [null]).entries()) {
      if (button) await button.click();
      for (let step = 0; step <= max; step++) {
        await slider.fill(String(step));
        await page.evaluate(
          () =>
            new Promise((ready) =>
              requestAnimationFrame(() => requestAnimationFrame(ready)),
            ),
        );
        const snapshot = await study.evaluate((element) => {
          const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
          );
          const nodes = [];
          while (walker.nextNode()) {
            const text = walker.currentNode.textContent.trim();
            if (text) nodes.push(text);
          }
          return {
            nodes,
            labels: [...element.querySelectorAll("[aria-label]")].map((node) =>
              node.getAttribute("aria-label"),
            ),
          };
        });
        frames.push({ slug: record.slug, view, step, ...snapshot });
      }
    }
    console.log(
      `${record.slug}: ${max + 1} steps, ${Math.max(1, views.length)} views`,
    );
  }
  await context.close();
  const cold = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const reading = await cold.newPage();
  const loaded = new Set();
  reading.on("response", (response) =>
    loaded.add(new URL(response.url()).pathname),
  );
  await reading.goto(`${base}/tools/catalog`);
  await reading.getByRole("searchbox", { name: "Find a concept" }).waitFor();
  await reading.waitForLoadState("networkidle");
  loaded.clear();
  await reading.evaluate(() => {
    history.pushState({}, "", "/tools/catalog/aifg-a:111");
    dispatchEvent(new PopStateEvent("popstate"));
  });
  await reading.locator('tools-study figure svg[role="img"]').first().waitFor();
  await reading.waitForLoadState("networkidle");
  const files = [...loaded].sort().map((path) => {
    const bytes = readFileSync(join(root, path));
    return {
      path,
      raw: bytes.length,
      gzip: gzipSync(bytes).length,
      sha256: createHash("sha256").update(bytes).digest("hex"),
    };
  });
  await cold.close();
  const result = {
    capturedAt: new Date().toISOString(),
    studies: records.length,
    frameCount: frames.length,
    errors,
    firstReading: {
      id: "aifg-a:111",
      measurement:
        "Cold reading after shelf; gzipSync of each observed response asset, not a network compression claim",
      files,
      raw: files.reduce((sum, file) => sum + file.raw, 0),
      gzip: files.reduce((sum, file) => sum + file.gzip, 0),
    },
    frames,
  };
  writeFileSync(output, JSON.stringify(result) + "\n");
  console.log(
    JSON.stringify({
      studies: result.studies,
      frames: frames.length,
      errors,
      firstReadingGzip: result.firstReading.gzip,
    }),
  );
  if (errors.length || records.length !== 40 || !frames.length)
    process.exitCode = 1;
} finally {
  await browser.close();
  server.close();
}
