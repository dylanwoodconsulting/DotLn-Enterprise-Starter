// VER-003's attack on the paths the migration adds: the lazily fetched catalog as an input that can
// be empty, malformed, partly failed, slow or stale, and a reader who moves on while it loads.
// In the target worktree, first: npx nx build dotln --configuration=production
// Then: node message-attack.mjs <target worktree> <results.json>
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [target, output] = process.argv.slice(2);
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
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const results = [];

const look = (page) =>
  page.evaluate(() => {
    const study = document.querySelector("tools-study");
    const text = study?.innerText ?? "";
    const alert = [...document.querySelectorAll('[role="alert"]')]
      .map((a) => a.innerText.trim())
      .filter(Boolean);
    return {
      study: !!study,
      figure: !!study?.querySelector('figure svg[role="img"]'),
      rawKeys: (text.match(/study[A-Z][A-Za-z]*\.[\w:.-]+/g) ?? []).length,
      firstKey: text.match(/study[A-Z][A-Za-z]*\.[\w:.-]+/)?.[0] ?? null,
      heading:
        document
          .querySelector("tools-study h3, tools-study h2")
          ?.textContent?.trim() ?? null,
      alert,
      retry: [...document.querySelectorAll("button")].some((b) =>
        /Try again/.test(b.textContent),
      ),
    };
  });

async function scenario(name, run) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const row = { name, pageErrors: [], requests: [] };
  page.on("pageerror", (e) => row.pageErrors.push(String(e).slice(0, 160)));
  page.on("request", (r) => {
    const m = r.url().match(/\/i18n\/(study[^/]+)\/en\.json$/);
    if (m) row.requests.push(m[1]);
  });
  try {
    await run(page, row);
  } catch (error) {
    row.error = String(error).slice(0, 240);
  }
  await context.close();
  results.push(row);
  console.log(JSON.stringify(row).slice(0, 700));
}

const settle = (page, ms = 900) => page.waitForTimeout(ms);
const flee = `${base}/tools/catalog/aifg-a:111`;

await scenario("an empty catalog served with 200", async (page, row) => {
  await page.route("**/i18n/studyAifg/en.json", (route) =>
    route.fulfill({ json: {} }),
  );
  await page.goto(flee);
  await settle(page);
  row.result = await look(page);
});
await scenario("a stale catalog that lacks this study", async (page, row) => {
  const whole = JSON.parse(
    readFileSync(join(root, "i18n/studyAifg/en.json"), "utf8"),
  );
  delete whole.flee;
  await page.route("**/i18n/studyAifg/en.json", (route) =>
    route.fulfill({ json: whole }),
  );
  await page.goto(flee);
  await settle(page);
  row.result = await look(page);
});
await scenario("malformed JSON served with 200", async (page, row) => {
  await page.route("**/i18n/studyAifg/en.json", (route) =>
    route.fulfill({ contentType: "application/json", body: "{not json" }),
  );
  await page.goto(flee);
  await settle(page);
  row.result = await look(page);
});
await scenario(
  "only the shared narration fails, then the reader retries",
  async (page, row) => {
    await page.route("**/i18n/studyCommon/en.json", (route) =>
      route.fulfill({ status: 500, body: "" }),
    );
    await page.goto(flee);
    await settle(page);
    row.failed = await look(page);
    await page.unroute("**/i18n/studyCommon/en.json");
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await settle(page);
    row.retried = await look(page);
  },
);
await scenario(
  "the reader moves to another work while the first catalog is slow",
  async (page, row) => {
    await page.route("**/i18n/studyAifg/en.json", async (route) => {
      await new Promise((done) => setTimeout(done, 1500));
      await route.continue();
    });
    await page.goto(flee);
    await page.waitForTimeout(150);
    await page.evaluate(() => {
      history.pushState({}, "", "/tools/catalog/eip:110");
      dispatchEvent(new PopStateEvent("popstate"));
    });
    await settle(page, 2600);
    row.result = await look(page);
    row.url = page.url().replace(base, "");
  },
);
await scenario(
  "a second reading in the same work fetches no catalog again, and back returns",
  async (page, row) => {
    await page.goto(flee);
    await settle(page);
    const first = await look(page);
    const fetched = row.requests.length;
    await page.locator(".nearby a").first().click();
    await settle(page);
    row.second = await look(page);
    row.fetchedOnSecond = row.requests.length - fetched;
    await page.goBack();
    await settle(page);
    row.back = await look(page);
    row.backMatches = row.back.heading === first.heading;
  },
);
await scenario(
  "every offered value of an input keeps the reading whole, and the example returns",
  async (page, row) => {
    await page.goto(flee);
    await settle(page);
    const study = page.locator("tools-study");
    await study
      .locator("summary")
      .filter({ hasText: "Try another value" })
      .first()
      .click();
    const sliders = study.getByRole("slider");
    const count = await sliders.count();
    const input = sliders.nth(count - 1);
    const min = Number(await input.getAttribute("min"));
    const max = Number(await input.getAttribute("max"));
    let bad = 0;
    for (let value = min; value <= max; value++) {
      await input.fill(String(value));
      const now = await look(page);
      if (now.rawKeys || !now.figure) bad++;
    }
    row.values = max - min + 1;
    row.bad = bad;
    const back = study.getByRole("button", { name: /Back to the example/ });
    if (await back.count()) await back.first().click();
    row.after = await look(page);
  },
);
await browser.close();
server.close();
writeFileSync(output, JSON.stringify(results, null, 1) + "\n");
