// VER-003's end-to-end preservation probe. Serves two production builds, the tree VER-002 verified
// (git f0e7087, tree 80145e0) and the subject, walks every frame of every view of all eighty studies
// with every disclosure open, and compares the reader's text, the drawing's text and its geometry.
// It also records what a first reading of one study loads in each build, and how long it takes.
//
// Usage: node dom-diff.mjs <target worktree> <old dist browser dir> <new dist browser dir> <results.json>
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { gzipSync } from "node:zlib";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [target, oldDist, newDist, output] = process.argv.slice(2);
const T = resolve(target);
const { chromium } = createRequire(join(T, "package.json"))("@playwright/test");
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
      if (!statSync(file).isFile()) throw new Error("not a file");
    } catch {
      file = join(root, "index.html");
    }
    res.setHeader(
      "content-type",
      types[extname(file)] ?? "application/octet-stream",
    );
    res.end(readFileSync(file));
  });
  await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
  return { server, base: `http://127.0.0.1:${server.address().port}`, root };
};
const records = ["aifg", "rxjs", "eip"].flatMap((work) => {
  const dir = join(T, "libs/shared/catalog/src/studies", work);
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")));
});

const snapshot = () => {
  const study = document.querySelector("tools-study");
  const svg = study?.querySelector('figure svg[role="img"]');
  const geometry = svg
    ? [...svg.querySelectorAll("*")]
        .map((el) => {
          const attrs = [...el.attributes]
            .filter(
              ({ name }) =>
                !name.startsWith("_ng") &&
                !name.startsWith("ng-") &&
                name !== "class" &&
                name !== "style",
            )
            .map(({ name, value }) => `${name}=${value}`)
            .sort()
            .join(" ");
          const own = [...el.childNodes]
            .filter((n) => n.nodeType === 3)
            .map((n) => n.textContent.trim())
            .join("");
          return `${el.tagName}|${attrs}|${own}`;
        })
        .join("\n")
    : "";
  return {
    text: (study?.innerText ?? "").replace(/\s+/g, " ").trim(),
    label: svg?.getAttribute("aria-label") ?? "",
    geometry,
  };
};

const browser = await chromium.launch();

async function walk(build) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  const frames = new Map();
  for (const record of records) {
    await page.goto(`${build.base}/tools/catalog/${record.id}`);
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    for (const summary of await study.locator("summary").all()) {
      const open = await summary.evaluate((el) =>
        el.parentElement?.hasAttribute("open"),
      );
      if (!open) await summary.click().catch(() => {});
    }
    const slider = study.getByRole("slider").first();
    const max = Number((await slider.getAttribute("max")) ?? 0);
    const views = [];
    for (const b of await study.getByRole("button").all())
      if ((await b.getAttribute("aria-pressed")) !== null) views.push(b);
    let view = 0;
    for (const button of views.length ? views : [null]) {
      if (button) await button.click().catch(() => {});
      await page.waitForTimeout(25);
      for (let step = 0; step <= max; step++) {
        await slider.fill(String(step));
        frames.set(
          `${record.slug}|${view}|${step}`,
          await page.evaluate(snapshot),
        );
      }
      view++;
    }
  }
  await context.close();
  return { frames, errors };
}

/** A cold first reading: what loads, its size raw and gzipped, and the time to the drawing. */
async function firstReading(build, id, repeats = 7) {
  const times = [];
  let loaded = [];
  for (let i = 0; i < repeats; i++) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const urls = new Set();
    page.on("response", (r) => urls.add(new URL(r.url()).pathname));
    await page.goto(`${build.base}/tools/catalog`);
    await page.getByRole("searchbox", { name: "Find a concept" }).waitFor();
    await page.waitForLoadState("networkidle");
    urls.clear();
    const start = Date.now();
    await page.evaluate((path) => {
      history.pushState({}, "", path);
      dispatchEvent(new PopStateEvent("popstate"));
    }, `/tools/catalog/${id}`);
    await page
      .locator('tools-study figure svg[role="img"]')
      .first()
      .waitFor({ timeout: 20000 });
    times.push(Date.now() - start);
    await page.waitForLoadState("networkidle");
    loaded = [...urls];
    await context.close();
  }
  const files = loaded.map((path) => {
    const bytes = readFileSync(join(build.root, path));
    return { path, raw: bytes.length, gzip: gzipSync(bytes).length };
  });
  times.sort((a, b) => a - b);
  return {
    id,
    files,
    raw: files.reduce((s, f) => s + f.raw, 0),
    gzip: files.reduce((s, f) => s + f.gzip, 0),
    medianMs: times[Math.floor(times.length / 2)],
    fastestMs: times[0],
    slowestMs: times.at(-1),
  };
}

const before = await serve(resolve(oldDist));
const after = await serve(resolve(newDist));
const a = await walk(before);
const b = await walk(after);
const rows = [];
let same = 0;
const keys = new Set([...a.frames.keys(), ...b.frames.keys()]);
for (const key of keys) {
  const x = a.frames.get(key);
  const y = b.frames.get(key);
  if (!x || !y) {
    rows.push({ key, missing: x ? "after" : "before" });
    continue;
  }
  const kinds = ["text", "label", "geometry"].filter((k) => x[k] !== y[k]);
  if (!kinds.length) {
    same++;
    continue;
  }
  const row = { key, kinds };
  for (const kind of kinds) {
    const left = x[kind];
    const right = y[kind];
    let i = 0;
    while (i < left.length && left[i] === right[i]) i++;
    row[kind] = {
      before: left.slice(Math.max(0, i - 50), i + 70),
      after: right.slice(Math.max(0, i - 50), i + 70),
    };
  }
  rows.push(row);
}
const reading = [];
for (const id of ["aifg-a:111", "aifg-a:134", "rxjs:0"]) {
  if (!records.some((r) => r.id === id)) continue;
  reading.push({
    before: await firstReading(before, id),
    after: await firstReading(after, id),
  });
}
await browser.close();
before.server.close();
after.server.close();
const byStudy = {};
for (const row of rows) {
  const slug = row.key.split("|")[0];
  byStudy[slug] = byStudy[slug] ?? {
    frames: 0,
    text: 0,
    label: 0,
    geometry: 0,
    missing: 0,
  };
  byStudy[slug].frames++;
  for (const kind of row.kinds ?? []) byStudy[slug][kind]++;
  if (row.missing) byStudy[slug].missing++;
}
writeFileSync(
  output,
  JSON.stringify(
    {
      frames: keys.size,
      same,
      differing: rows.length,
      errors: { before: a.errors, after: b.errors },
      byStudy,
      reading,
      rows: rows.slice(0, 400),
    },
    null,
    1,
  ) + "\n",
);
console.log(
  JSON.stringify({
    frames: keys.size,
    same,
    differing: rows.length,
    errorsBefore: a.errors.length,
    errorsAfter: b.errors.length,
    studiesDiffering: Object.keys(byStudy).length,
  }),
);
