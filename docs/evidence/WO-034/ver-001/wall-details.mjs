// VER-001: two details of the wall study, at base and candidate production builds, at 2080×1460.
// 1. Does the wall's line cross the courier's name where the courier rounds the wall's end?
// 2. In what order do the moment buttons run with the delivery straight ahead (height 0)?
// Usage: node wall-details.mjs <target worktree> <base browser dir> <candidate browser dir> <results.json>
import { readFileSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { extname, join, normalize, resolve } from "node:path";

const [target, baseDist, candidateDist, out] = process.argv
  .slice(2)
  .map((path) => resolve(path));
const { chromium } = createRequire(join(target, "package.json"))(
  "@playwright/test",
);
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
const serve = async (dist) => {
  const server = createServer((request, response) => {
    let file = join(
      dist,
      normalize(
        decodeURIComponent(new URL(request.url, "http://localhost").pathname),
      ),
    );
    try {
      if (!file.startsWith(dist) || !statSync(file).isFile())
        throw new Error("fallback");
    } catch {
      file = join(dist, "index.html");
    }
    response.setHeader(
      "content-type",
      mime[extname(file)] ?? "application/octet-stream",
    );
    response.end(readFileSync(file));
  });
  await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
  return server;
};
const settle = (page) =>
  page.evaluate(
    () =>
      new Promise((ready) =>
        requestAnimationFrame(() => requestAnimationFrame(ready)),
      ),
  );
const browser = await chromium.launch();
const results = [];
try {
  for (const [build, dist] of [
    ["base", baseDist],
    ["candidate", candidateDist],
  ]) {
    const server = await serve(dist);
    const page = await (
      await browser.newContext({
        viewport: { width: 2080, height: 1460 },
        reducedMotion: "reduce",
      })
    ).newPage();
    await page.goto(
      `http://127.0.0.1:${server.address().port}/tools/catalog/aifg-a:137`,
    );
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    await page.evaluate(() => document.fonts.ready);
    // One handle at a time: a lazily loaded section inserts further summaries.
    for (let round = 0; round < 40; round++) {
      const closed = study.locator("details:not([open]) > summary");
      if ((await closed.count()) === 0) {
        await page.waitForLoadState("networkidle");
        if ((await closed.count()) === 0) break;
        continue;
      }
      const handle = await closed.first().elementHandle();
      await handle.click();
      await page.waitForFunction(
        (element) => element.parentElement.open,
        handle,
      );
      await handle.dispose();
    }
    await page.waitForLoadState("networkidle");
    const svg = study.locator("tools-study-motion svg[role=img]");
    const time = study.getByRole("slider", { name: /^Time ·/ });
    const ray = study.getByRole("slider", { name: /^Forward ray length/ });
    const height = study.getByRole("slider", { name: /^Delivery height/ });
    const crossing = async () =>
      svg.evaluate((drawing) => {
        const name = [...drawing.querySelectorAll("text.label")].find(
          (node) => node.textContent.trim() === "Courier",
        );
        if (!name) return { name: null };
        const box = name.getBBox();
        const glyphs = {
          left: box.x,
          right: box.x + box.width,
          top: box.y + box.height * 0.22,
          bottom: box.y + box.height * 0.78,
        };
        const lines = [...drawing.querySelectorAll("line")].filter(
          (line) =>
            !line.classList.contains("label-guide") &&
            !line.classList.contains("vector"),
        );
        const through = lines.filter((line) => {
          const [x1, y1, x2, y2] = ["x1", "y1", "x2", "y2"].map(
            (k) => line[k].baseVal.value,
          );
          for (let part = 0; part <= 200; part++) {
            const x = x1 + ((x2 - x1) * part) / 200;
            const y = y1 + ((y2 - y1) * part) / 200;
            if (
              x > glyphs.left &&
              x < glyphs.right &&
              y > glyphs.top &&
              y < glyphs.bottom
            )
              return true;
          }
          return false;
        });
        return {
          name: {
            x: Math.round(box.x),
            y: Math.round(box.y),
            width: Math.round(box.width),
          },
          linesThroughName: through.map(
            (line) => line.getAttribute("class") ?? "line",
          ),
        };
      });
    const row = { build };
    await time.fill("29");
    await settle(page);
    row.defaultFrame29 = await crossing();
    await ray.fill("10");
    await time.fill("39");
    await settle(page);
    row.rayTenFrame39 = await crossing();
    await ray.fill("9");
    await height.fill("0");
    await settle(page);
    row.straightAheadMoments = [];
    for (const button of await study.locator(".moments button").all()) {
      const label = (await button.innerText()).trim();
      await button.click();
      await settle(page);
      row.straightAheadMoments.push({
        label,
        step: Number(await svg.getAttribute("data-step")),
      });
    }
    results.push(row);
    console.log(JSON.stringify(row));
    await page.context().close();
    server.close();
  }
} finally {
  await browser.close();
}
writeFileSync(
  out,
  `${JSON.stringify({ ranAt: new Date().toISOString(), viewport: "2080x1460", results }, null, 1)}\n`,
);
