// VER-003's attack on FINAL-001's F9 in the served production build. Every value in the four study
// catalogs and the app's own catalog is wrapped in marks, then the reader walks all eighty studies:
// every frame of every view with every disclosure open. Any visible text with letters that no mark
// covers did not come through the message system. A second pass with the real catalogs looks for
// leaked keys, unfilled placeholders, NaN and undefined.
//
// In the target worktree, first: npx nx build dotln --configuration=production
// Then: node pseudo-crawl.mjs <target worktree> <results.json> [slug-filter]
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [target, output, only] = process.argv.slice(2);
const T = resolve(target);
const { chromium } = createRequire(join(T, "package.json"))("@playwright/test");
const root = join(T, "dist/apps/dotln/browser");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const OPEN = "⟦";
const CLOSE = "⟧";
const wrap = (value) =>
  typeof value === "string"
    ? `${OPEN}${value}${CLOSE}`
    : Array.isArray(value)
      ? value.map(wrap)
      : value && typeof value === "object"
        ? Object.fromEntries(
            Object.entries(value).map(([k, v]) => [k, wrap(v)]),
          )
        : value;
const serve = (pseudo) =>
  createServer((req, res) => {
    const path = normalize(
      decodeURIComponent(new URL(req.url, "http://x").pathname),
    );
    let file = join(root, path);
    try {
      if (!statSync(file).isFile()) throw new Error("not a file");
    } catch {
      file = join(root, "index.html");
    }
    res.setHeader(
      "content-type",
      types[extname(file)] ?? "application/octet-stream",
    );
    if (pseudo && /\/i18n\/(study[A-Za-z]+\/)?en\.json$/.test(path)) {
      res.end(JSON.stringify(wrap(JSON.parse(readFileSync(file, "utf8")))));
      return;
    }
    res.end(readFileSync(file));
  });

const records = ["aifg", "rxjs", "eip"].flatMap((work) => {
  const dir = join(T, "libs/shared/catalog/src/studies", work);
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")))
    .filter((r) => !only || r.slug.includes(only));
});

/** Runs in the page: visible text nodes and readable attributes of the study, with whether a mark covers each. */
const readTexts = (open, close) => {
  const out = [];
  const study = document.querySelector("tools-study");
  if (!study) return out;
  const walker = document.createTreeWalker(study, NodeFilter.SHOW_TEXT);
  // A node is covered when the marks around it are balanced open across its element's text.
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.textContent;
    if (!text.trim()) continue;
    const parent = node.parentElement;
    if (!parent || parent.closest("script,style")) continue;
    const tag = parent.tagName.toLowerCase();
    // Letters outside every mark are not from a message. A block split across nodes starts at the
    // depth its earlier text leaves, so a sentence broken over spans stays covered.
    const block = parent.closest(
      "p,li,pre,code,figcaption,summary,dd,dt,h1,h2,h3,h4,button,label,text,a,td,th,div",
    );
    const all = block?.textContent ?? "";
    const before = all.slice(0, Math.max(0, all.indexOf(text)));
    let depth = Math.max(
      0,
      [...before].reduce(
        (d, c) => d + (c === open ? 1 : c === close ? -1 : 0),
        0,
      ),
    );
    let leftover = "";
    for (const c of text) {
      if (c === open) depth++;
      else if (c === close) depth = Math.max(0, depth - 1);
      else if (depth === 0) leftover += c;
    }
    const covered = !/[A-Za-z]{2,}/.test(leftover);
    out.push({
      kind: "text",
      tag,
      text: text.trim().slice(0, 140),
      covered,
      cls: parent.getAttribute("class")?.slice(0, 40) ?? "",
      testid:
        parent.closest("[data-testid]")?.getAttribute("data-testid") ?? "",
    });
  }
  const outsideMarks = (value) => {
    let depth = 0;
    let left = "";
    for (const c of value) {
      if (c === open) depth++;
      else if (c === close) depth = Math.max(0, depth - 1);
      else if (depth === 0) left += c;
    }
    return left;
  };
  for (const el of study.querySelectorAll(
    "[aria-label],[title],[aria-valuetext],[alt],[placeholder]",
  )) {
    for (const name of [
      "aria-label",
      "title",
      "aria-valuetext",
      "alt",
      "placeholder",
    ]) {
      const text = el.getAttribute(name);
      if (text && text.trim())
        out.push({
          kind: name,
          tag: el.tagName.toLowerCase(),
          text: text.trim().slice(0, 140),
          covered: !/[A-Za-z]{2,}/.test(outsideMarks(text)),
          cls: el.getAttribute("class")?.slice(0, 40) ?? "",
          testid: "",
        });
    }
  }
  return out;
};

const browser = await chromium.launch();

async function crawl(pseudo) {
  const server = serve(pseudo);
  await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
  const base = `http://127.0.0.1:${server.address().port}`;
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror ${e}`));
  page.on(
    "console",
    (m) => m.type() === "error" && errors.push(`console ${m.text()}`),
  );
  page.on(
    "response",
    (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`),
  );
  const uncovered = new Map();
  const leaks = new Map();
  const perStudy = [];
  let frames = 0;
  const note = (map, key, value) => {
    const row = map.get(key) ?? { count: 0, ...value, studies: new Set() };
    row.count++;
    row.studies.add(value.study);
    map.set(key, row);
  };
  for (const record of records) {
    await page.goto(`${base}/tools/catalog/${record.id}`);
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    await page
      .locator("tools-study figure")
      .first()
      .waitFor({ timeout: 20000 })
      .catch(() => {});
    for (const summary of await study.locator("summary").all()) {
      const open = await summary.evaluate((el) =>
        el.parentElement?.hasAttribute("open"),
      );
      if (!open) await summary.click().catch(() => {});
    }
    const slider = study.getByRole("slider");
    const hasSlider = (await slider.count()) > 0;
    const max = hasSlider
      ? Number(await slider.first().getAttribute("max"))
      : 0;
    const min = hasSlider
      ? Number((await slider.first().getAttribute("min")) ?? 0)
      : 0;
    const viewNames = [];
    for (const b of await study.getByRole("button").all()) {
      const pressed = await b.getAttribute("aria-pressed");
      if (pressed !== null) viewNames.push(b);
    }
    const views = viewNames.length ? viewNames : [null];
    let studyFrames = 0;
    for (const view of views) {
      if (view) await view.click().catch(() => {});
      await page.waitForTimeout(30);
      for (let step = min; step <= max; step++) {
        if (hasSlider) await slider.first().fill(String(step));
        const rows = await page.evaluate(
          `(${readTexts.toString()})(${JSON.stringify(OPEN)},${JSON.stringify(CLOSE)})`,
        );
        studyFrames++;
        for (const row of rows) {
          const body = row.text;
          if (pseudo && !row.covered && /[A-Za-z]{2,}/.test(body))
            note(
              uncovered,
              `${row.kind}|${row.tag}|${row.testid}|${row.cls}|${body}`,
              { ...row, study: record.slug },
            );
          if (
            /study[A-Z][A-Za-z]*\.|\{\{|\}\}|\bNaN\b|\bundefined\b|\[object |\{[a-zA-Z][a-zA-Z0-9]*\}/.test(
              body,
            ) &&
            !pseudo
          )
            note(leaks, `${record.slug}|${row.kind}|${body}`, {
              ...row,
              study: record.slug,
            });
        }
      }
    }
    frames += studyFrames;
    perStudy.push({
      slug: record.slug,
      work: record.work,
      frames: studyFrames,
      views: views.length,
    });
  }
  await context.close();
  server.close();
  const plain = (map) =>
    [...map.values()]
      .map((r) => ({ ...r, studies: [...r.studies] }))
      .sort((a, b) => b.count - a.count);
  return {
    frames,
    studies: perStudy.length,
    errors: [...new Set(errors)],
    uncovered: plain(uncovered),
    leaks: plain(leaks),
    perStudy,
  };
}

const pseudo = await crawl(true);
const real = await crawl(false);
await browser.close();
// A pseudocode block or a wrapped state line can sit apart from its message's marks. It still came
// from a message when its words are in a catalog; anything else is printed as text outside the system.
const catalogText = ["studyAifg", "studyRxjs", "studyEip", "studyCommon"]
  .map((scope) => join(T, "apps/dotln/public/i18n", scope, "en.json"))
  .concat(join(T, "apps/dotln/public/i18n/en.json"))
  .flatMap((path) => {
    const values = [];
    const walk = (o) =>
      Object.values(o).forEach((v) =>
        typeof v === "string" ? values.push(v) : walk(v),
      );
    walk(JSON.parse(readFileSync(path, "utf8")));
    return values;
  })
  .join("\n")
  .replace(/\s+/g, " ");
const bare = (text) =>
  text.replaceAll(OPEN, "").replaceAll(CLOSE, "").replace(/\s+/g, " ").trim();
pseudo.outsideMessages = pseudo.uncovered.filter(
  (row) => !catalogText.includes(bare(row.text)),
);
writeFileSync(output, JSON.stringify({ pseudo, real }, null, 1) + "\n");
console.log(
  JSON.stringify({
    pseudo: {
      frames: pseudo.frames,
      studies: pseudo.studies,
      errors: pseudo.errors.length,
      splitFromMarks: pseudo.uncovered.length - pseudo.outsideMessages.length,
      outsideMessages: pseudo.outsideMessages.length,
    },
    real: {
      frames: real.frames,
      errors: real.errors.length,
      leaks: real.leaks.length,
    },
  }),
);
