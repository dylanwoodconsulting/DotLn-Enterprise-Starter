// VER-001's reproduction: measures the labels of every AI for Games study's drawing, on every frame.
// A label is clipped when the SVG's edge cuts it, and overprinted when its glyph box overlaps another
// label's. WO-020's first batch is the control. Serve nothing else; this serves the production build.
//
// In the target worktree, first: npx nx build dotln --configuration=production
// Then: node label-sweep.mjs <target worktree> <results.json> [WIDTHxHEIGHT ...]
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const [target, output, ...requested] = process.argv.slice(2);
if (!target || !output)
  throw new Error(
    "usage: label-sweep.mjs <target worktree> <results.json> [WIDTHxHEIGHT ...]",
  );
const T = resolve(target);
// The operator's sizes come first: full screen (a 5120×2160 panel at 133% scaling lays out at
// 3840×1620) and the centre browser window they mostly use, about 2080×1460 of page viewport.
const sizes = (
  requested.length
    ? requested
    : ["3840x1620", "2080x1460", "1440x900", "768x900", "360x900"]
).map((s) => s.split("x").map(Number));
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

const dir = join(T, "libs/shared/catalog/src/studies/aifg");
const records = [];
for (const f of await readdir(dir))
  if (f.endsWith(".json"))
    records.push(JSON.parse(await readFile(join(dir, f), "utf8")));

const measure = () => {
  const svg = document.querySelector('tools-study figure svg[role="img"]');
  if (!svg) return { clipped: [], overlaps: [], svgWidth: 0 };
  const box = svg.getBoundingClientRect();
  const items = [...svg.querySelectorAll("text")]
    .filter((t) => t.textContent.trim())
    .map((t) => {
      const r = t.getBoundingClientRect();
      // Trim the line box to the glyphs, so that labels stacked one above the other do not count.
      const trim = r.height * 0.22;
      return {
        s: t.textContent.trim(),
        left: r.left,
        right: r.right,
        top: r.top + trim,
        bottom: r.bottom - trim,
      };
    });
  const clipped = items
    .filter((i) => i.left < box.left - 1 || i.right > box.right + 1)
    .map((i) => i.s);
  const overlaps = [];
  for (let a = 0; a < items.length; a++)
    for (let b = a + 1; b < items.length; b++) {
      const w =
        Math.min(items[a].right, items[b].right) -
        Math.max(items[a].left, items[b].left);
      const h =
        Math.min(items[a].bottom, items[b].bottom) -
        Math.max(items[a].top, items[b].top);
      if (w > 2 && h > 2) overlaps.push(`${items[a].s} × ${items[b].s}`);
    }
  return { clipped, overlaps, svgWidth: Math.round(box.width) };
};

const browser = await chromium.launch();
const results = [];
for (const [width, height] of sizes) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: width >= 2080 ? 4 / 3 : 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const r of records) {
    await page.goto(`${base}/tools/catalog/${r.id}`);
    await page.locator(`[data-concept-id="${r.id}"]`).waitFor();
    await page.locator("tools-study").waitFor();
    await page.waitForTimeout(120);
    const opening = await page.evaluate(measure);
    const time = page
      .locator("tools-study")
      .getByRole("slider", { name: /^Time/ });
    const max = Number((await time.getAttribute("max")) ?? 0);
    let clippedFrames = 0;
    let overlapFrames = 0;
    const clipped = new Map();
    const overlaps = new Map();
    for (let i = 0; i <= max; i++) {
      await time.fill(String(i));
      await page.waitForTimeout(12);
      const m = await page.evaluate(measure);
      if (m.clipped.length) clippedFrames++;
      if (m.overlaps.length) overlapFrames++;
      for (const c of m.clipped) clipped.set(c, (clipped.get(c) ?? 0) + 1);
      for (const c of m.overlaps) overlaps.set(c, (overlaps.get(c) ?? 0) + 1);
    }
    results.push({
      slug: r.slug,
      batch: r.authored.on === "2026-11-04" ? "WO-028" : "first",
      viewport: `${width}x${height}`,
      svgWidth: opening.svgWidth,
      frames: max + 1,
      clippedFrames,
      overlapFrames,
      openingClipped: opening.clipped,
      openingOverlaps: opening.overlaps,
      clipped: [...clipped],
      overlaps: [...overlaps],
    });
  }
  await context.close();
  console.log(`measured ${width}x${height}`);
}
await browser.close();
server.close();
await writeFile(resolve(output), JSON.stringify(results, null, 1) + "\n");

const share = (a, b) => `${b ? ((100 * a) / b).toFixed(1) : "0.0"}%`;
for (const batch of ["WO-028", "first"])
  for (const [width, height] of sizes) {
    const rows = results.filter(
      (x) => x.batch === batch && x.viewport === `${width}x${height}`,
    );
    const frames = rows.reduce((a, x) => a + x.frames, 0);
    const c = rows.reduce((a, x) => a + x.clippedFrames, 0);
    const o = rows.reduce((a, x) => a + x.overlapFrames, 0);
    console.log(
      `${batch} ${width}x${height}: drawing ${Math.max(...rows.map((x) => x.svgWidth))}px wide; frames ${frames}; clipped ${c} (${share(c, frames)}) in ${rows.filter((x) => x.clippedFrames).length} studies; overprinted ${o} (${share(o, frames)}) in ${rows.filter((x) => x.overlapFrames).length} studies`,
    );
  }
for (const [width, height] of sizes) {
  const viewport = `${width}x${height}`;
  console.log(`\n${viewport}, by study:`);
  for (const x of results.filter(
    (r) => r.viewport === viewport && (r.clippedFrames || r.overlapFrames),
  ))
    console.log(
      `${x.batch} ${x.slug}: clipped ${x.clippedFrames}/${x.frames} ${JSON.stringify(x.clipped)}; overprinted ${x.overlapFrames}/${x.frames} ${JSON.stringify(x.overlaps)}`,
    );
}
