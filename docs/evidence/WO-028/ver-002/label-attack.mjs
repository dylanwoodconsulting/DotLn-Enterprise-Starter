// VER-002's attack on the repaired labels: what VER-001's sweep does not measure. On every frame of
// every AI for Games study, at the wide (15-unit) and narrow (24-unit) type sizes: a label cut by the
// drawing's top or bottom edge, a label printed over a body or mark, a guide crossing another label,
// and a label that jumps between consecutive frames. For the twenty new studies, it also repeats the
// clip and overprint measure at both ends of every input a reader is offered.
// In the target worktree, first: npx nx build dotln --configuration=production
// Then: node label-attack.mjs <target worktree> <results.json>
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const [target, output] = process.argv.slice(2);
if (!target || !output)
  throw new Error("usage: label-attack.mjs <target worktree> <results.json>");
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
const dir = join(T, "libs/shared/catalog/src/studies/aifg");
const records = [];
for (const f of await readdir(dir))
  if (f.endsWith(".json"))
    records.push(JSON.parse(await readFile(join(dir, f), "utf8")));

const measure = () => {
  const svg = document.querySelector('tools-study figure svg[role="img"]');
  if (!svg) return null;
  const box = svg.getBoundingClientRect();
  const overlap = (a, b) =>
    Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 &&
    Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 2;
  const labels = [...svg.querySelectorAll("text")]
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
  const shapes = [...svg.querySelectorAll(".body, .dot, .ring, .cross")].map(
    (e) => e.getBoundingClientRect(),
  );
  const guides = [...svg.querySelectorAll(".label-guide")].map((g) => ({
    x1: Number(g.getAttribute("x1")),
    y1: Number(g.getAttribute("y1")),
    x2: Number(g.getAttribute("x2")),
    y2: Number(g.getAttribute("y2")),
  }));
  const ctm = svg.getScreenCTM();
  const toScreen = (x, y) => ({ x: ctm.a * x + ctm.e, y: ctm.d * y + ctm.f });
  const crosses = (g, l) => {
    const a = toScreen(g.x1, g.y1);
    const b = toScreen(g.x2, g.y2);
    for (let i = 1; i < 40; i++) {
      const x = a.x + ((b.x - a.x) * i) / 40;
      const y = a.y + ((b.y - a.y) * i) / 40;
      if (x > l.left && x < l.right && y > l.top && y < l.bottom) return true;
    }
    return false;
  };
  return {
    verticalClip: labels
      .filter((l) => l.top < box.top - 1 || l.bottom > box.bottom + 1)
      .map((l) => l.s),
    sideClip: labels
      .filter((l) => l.left < box.left - 1 || l.right > box.right + 1)
      .map((l) => l.s),
    overprint: labels.flatMap((a, i) =>
      labels
        .slice(i + 1)
        .filter((b) => overlap(a, b))
        .map((b) => `${a.s} × ${b.s}`),
    ),
    overShape: labels
      .filter((l) => shapes.some((s) => overlap(l, s)))
      .map((l) => l.s),
    guides: guides.length,
    guideThrough: labels
      .filter((l) =>
        guides.some((g) => {
          const a = toScreen(g.x2, g.y2);
          const own =
            a.x > l.left - 2 &&
            a.x < l.right + 2 &&
            a.y > l.top - 12 &&
            a.y < l.bottom + 12;
          return !own && crosses(g, l);
        }),
      )
      .map((l) => l.s),
    centres: labels.map((l) => [
      l.s,
      (l.left + l.right) / 2,
      (l.top + l.bottom) / 2,
    ]),
    count: labels.length,
    width: box.width,
  };
};
const bump = (map, key) => map.set(key, (map.get(key) ?? 0) + 1);
const browser = await chromium.launch();
const results = [];
for (const [width, height] of [
  [2080, 1460],
  [360, 900],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const r of records) {
    await page.goto(`${base}/tools/catalog/${r.id}`);
    await page.locator(`[data-concept-id="${r.id}"]`).waitFor();
    await page.locator("tools-study").waitFor();
    await page.waitForTimeout(100);
    const study = page.locator("tools-study");
    const time = study.getByRole("slider", { name: /^Time ·/ });
    const row = {
      slug: r.slug,
      batch: r.authored.on === "2026-11-04" ? "WO-028" : "first",
      viewport: `${width}x${height}`,
    };
    const sweep = async () => {
      const max = Number((await time.getAttribute("max")) ?? 0);
      const tally = {
        frames: max + 1,
        verticalClip: new Map(),
        sideClip: new Map(),
        overprint: new Map(),
        overShape: new Map(),
        guideThrough: new Map(),
        framesWithGuide: 0,
        jumps: new Map(),
        biggestJump: 0,
      };
      let previous = null;
      for (let i = 0; i <= max; i++) {
        await time.fill(String(i));
        await page.waitForTimeout(10);
        const m = await page.evaluate(measure);
        if (!m) continue;
        for (const k of [
          "verticalClip",
          "sideClip",
          "overprint",
          "overShape",
          "guideThrough",
        ])
          for (const s of m[k]) bump(tally[k], s);
        if (m.guides) tally.framesWithGuide++;
        if (previous)
          for (const [s, x, y] of m.centres) {
            const p = previous.get(s);
            if (!p) continue;
            const d = Math.hypot(x - p[0], y - p[1]) * (686 / m.width);
            if (d > tally.biggestJump) tally.biggestJump = Math.round(d);
            if (d > 40) bump(tally.jumps, s);
          }
        previous = new Map(m.centres.map(([s, x, y]) => [s, [x, y]]));
      }
      const plain = {};
      for (const [k, v] of Object.entries(tally))
        plain[k] = v instanceof Map ? Object.fromEntries(v) : v;
      return plain;
    };
    row.defaults = await sweep();
    if (row.batch === "WO-028") {
      row.inputs = [];
      const summary = study
        .locator("summary")
        .filter({ hasText: "Try another value" })
        .first();
      if (await summary.count()) {
        await summary.click();
        await page.waitForTimeout(100);
        const sliders = study
          .locator('input[type="range"]')
          .filter({ hasNot: page.locator("x") });
        const names = await sliders.evaluateAll((all) =>
          all.map((e, i) => ({
            i,
            name:
              e.getAttribute("aria-label") ||
              e.labels?.[0]?.textContent?.trim() ||
              `#${i}`,
            min: e.min,
            max: e.max,
          })),
        );
        for (const s of names) {
          if (s.i === 0) continue;
          for (const end of [s.min, s.max]) {
            await sliders.nth(s.i).fill(String(end));
            await page.waitForTimeout(80);
            const swept = await sweep();
            row.inputs.push({
              input: s.name,
              value: end,
              frames: swept.frames,
              sideClip: swept.sideClip,
              verticalClip: swept.verticalClip,
              overprint: swept.overprint,
            });
          }
          const reset = study.getByRole("button", {
            name: "Back to the example",
          });
          if (await reset.count()) await reset.click();
          await page.waitForTimeout(60);
        }
      }
    }
    results.push(row);
  }
  await context.close();
  console.log(`attacked ${width}x${height}`);
}
await browser.close();
server.close();
await writeFile(resolve(output), JSON.stringify(results, null, 1) + "\n");
const count = (o) => Object.values(o).reduce((a, b) => a + b, 0);
for (const viewport of ["2080x1460", "360x900"])
  for (const batch of ["WO-028", "first"]) {
    const rows = results.filter(
      (x) => x.viewport === viewport && x.batch === batch,
    );
    const sum = (k) => rows.reduce((a, x) => a + count(x.defaults[k]), 0);
    console.log(
      `${batch} ${viewport}: frames ${rows.reduce((a, x) => a + x.defaults.frames, 0)}; vertical clip ${sum("verticalClip")}; side clip ${sum("sideClip")}; overprint ${sum("overprint")}; label over a shape ${sum("overShape")}; guide through another label ${sum("guideThrough")}; label jumps over 40 units ${sum("jumps")}; frames with a guide ${rows.reduce((a, x) => a + x.defaults.framesWithGuide, 0)}`,
    );
  }
for (const x of results.filter((r) => r.batch === "WO-028"))
  for (const i of x.inputs ?? [])
    if (count(i.sideClip) + count(i.verticalClip) + count(i.overprint))
      console.log(
        `input ${x.viewport} ${x.slug} ${i.input}=${i.value}: frames ${i.frames}; side ${JSON.stringify(i.sideClip)}; vertical ${JSON.stringify(i.verticalClip)}; overprint ${JSON.stringify(i.overprint)}`,
      );
