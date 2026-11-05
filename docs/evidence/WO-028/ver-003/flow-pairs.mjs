// VER-003: the five flow drawings whose geometry changed, before and after, at the operator's window
// and the narrowest width, plus every frame's clipping and overlap in the new build.
// Usage: node flow-pairs.mjs <target worktree> <old dist> <new dist> <frames directory> <results.json>
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
const [target, oldDist, newDist, frames, output] = process.argv.slice(2);
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const serve = async (root) => {
  const server = createServer((req, res) => {
    let file = join(
      root,
      normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)),
    );
    try {
      if (!statSync(file).isFile()) throw new Error("no");
    } catch {
      file = join(root, "index.html");
    }
    res.setHeader(
      "content-type",
      types[extname(file)] ?? "application/octet-stream",
    );
    res.end(readFileSync(file));
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  return { server, base: `http://127.0.0.1:${server.address().port}` };
};
const studies = [
  ["command-message", "eip:78", [0, 8]],
  ["content-based-router", "eip:99", [0, 10]],
  ["publish-subscribe-channel", "eip:", [0]],
  ["recipient-list", "eip:", [3, 8]],
  ["transactional-client", "eip:", [0]],
];
const idOf = (slug) =>
  JSON.parse(
    readFileSync(
      join(
        resolve(target),
        "libs/shared/catalog/src/studies/eip",
        `${slug}.json`,
      ),
      "utf8",
    ),
  ).id;
const measure = () => {
  const svg = document.querySelector('tools-study figure svg[role="img"]');
  if (!svg) return { viewBox: null, clipped: [], overlaps: [] };
  const box = svg.getBoundingClientRect();
  const items = [...svg.querySelectorAll("text")]
    .filter((t) => t.textContent.trim())
    .map((t) => {
      const r = t.getBoundingClientRect();
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
    .filter(
      (i) =>
        i.left < box.left - 0.5 ||
        i.right > box.right + 0.5 ||
        i.top < box.top - 0.5 ||
        i.bottom > box.bottom + 0.5,
    )
    .map((i) => i.s);
  const overlaps = [];
  for (let i = 0; i < items.length; i++)
    for (let j = i + 1; j < items.length; j++) {
      const a = items[i],
        b = items[j];
      if (
        a.left < b.right &&
        b.left < a.right &&
        a.top < b.bottom &&
        b.top < a.bottom
      )
        overlaps.push(`${a.s} × ${b.s}`);
    }
  return { viewBox: svg.getAttribute("viewBox"), clipped, overlaps };
};
const browser = await chromium.launch();
const builds = {
  before: await serve(resolve(oldDist)),
  after: await serve(resolve(newDist)),
};
const results = [];
for (const [width, height] of [
  [2080, 1460],
  [360, 900],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  for (const [name, build] of Object.entries(builds)) {
    const page = await context.newPage();
    for (const [slug, , shots] of studies) {
      const id = idOf(slug);
      await page.goto(`${build.base}/tools/catalog/${id}`);
      const study = page.locator("tools-study");
      await study.waitFor();
      const figure = study.locator("figure").first();
      await figure.waitFor();
      const slider = study.getByRole("slider").first();
      const max = Number(await slider.getAttribute("max"));
      const row = {
        slug,
        width,
        build: name,
        frames: max + 1,
        viewBoxes: new Set(),
        clippedFrames: 0,
        overlapFrames: 0,
        clipped: new Set(),
        overlaps: new Set(),
      };
      for (let step = 0; step <= max; step++) {
        await slider.fill(String(step));
        const m = await page.evaluate(measure);
        row.viewBoxes.add(m.viewBox);
        if (m.clipped.length) row.clippedFrames++;
        if (m.overlaps.length) row.overlapFrames++;
        m.clipped.forEach((s) => row.clipped.add(s));
        m.overlaps.forEach((s) => row.overlaps.add(s));
        if (shots.includes(step)) {
          await figure.scrollIntoViewIfNeeded();
          await page.waitForTimeout(60);
          await figure.screenshot({
            path: join(frames, `${slug}-${step}-${width}-${name}.png`),
          });
        }
      }
      results.push({
        ...row,
        viewBoxes: [...row.viewBoxes],
        clipped: [...row.clipped],
        overlaps: [...row.overlaps],
      });
    }
    await page.close();
  }
  await context.close();
}
await browser.close();
Object.values(builds).forEach((b) => b.server.close());
writeFileSync(output, JSON.stringify(results, null, 1) + "\n");
for (const r of results)
  console.log(
    r.width,
    r.build.padEnd(6),
    r.slug.padEnd(27),
    "frames",
    r.frames,
    "clipped",
    r.clippedFrames,
    "overlap",
    r.overlapFrames,
    r.viewBoxes.join(" "),
    r.overlaps.slice(0, 2).join(" ; ").slice(0, 70),
  );
