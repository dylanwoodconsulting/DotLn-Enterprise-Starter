// Final review session for the levels, loops and teams studies.
// Serves the production build from a loopback static server with a deep-link fallback and
// drives it in a Chromium this script launches. Usage:
//   node final-001-session.cjs <target worktree> <output directory>
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const [target, out] = process.argv.slice(2);
const root = path.join(target, "dist/apps/dotln/browser");
const { chromium } = require(path.join(target, "node_modules/playwright"));

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(
    new URL(request.url, "http://127.0.0.1").pathname,
  );
  let file = path.join(root, pathname);
  if (
    !file.startsWith(root) ||
    !fs.existsSync(file) ||
    fs.statSync(file).isDirectory()
  )
    file = path.join(root, "index.html");
  response.writeHead(200, {
    "content-type": types[path.extname(file)] ?? "application/octet-stream",
  });
  fs.createReadStream(file).pipe(response);
});

const sizes = [
  { name: "2080", width: 2080, height: 1460 },
  { name: "3840", width: 3840, height: 1620 },
  { name: "360", width: 360, height: 800 },
];

async function run() {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const report = { base, startedAt: new Date().toISOString(), sizes: [] };

  for (const size of sizes) {
    const context = await browser.newContext({
      viewport: { width: size.width, height: size.height },
    });
    const page = await context.newPage();
    const log = {
      size: `${size.width}x${size.height}`,
      steps: [],
      consoleErrors: [],
      pageErrors: [],
      failedRequests: [],
      overflow: [],
    };
    page.on("console", (message) => {
      if (message.type() === "error" || message.type() === "warning")
        log.consoleErrors.push(`${message.type()}: ${message.text()}`);
    });
    page.on("pageerror", (error) => log.pageErrors.push(String(error)));
    page.on("requestfailed", (request) =>
      log.failedRequests.push(
        `${request.url()} ${request.failure()?.errorText}`,
      ),
    );
    page.on("response", (response) => {
      if (response.status() >= 400)
        log.failedRequests.push(`${response.url()} ${response.status()}`);
    });

    const study = page.locator("tools-study");
    const map = page.locator("tools-study-relations");
    const shelf = page.getByRole("navigation", { name: "The works" });
    const contents = page.locator(".studied-list");
    const heading = () =>
      page
        .getByRole("region", { name: "Concept reading", exact: true })
        .getByRole("heading", { level: 2 });
    const summary = (text) =>
      study.locator("summary").filter({ hasText: text });

    const settle = async () => {
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(350);
    };
    const note = async (name, extra = {}) => {
      await settle();
      const fits = await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      );
      if (!fits) log.overflow.push(name);
      log.steps.push({
        name,
        at: new Date().toISOString(),
        url: page.url().replace(base, ""),
        fits,
        ...extra,
      });
    };
    const shot = async (name, locator) => {
      if (locator) await locator.scrollIntoViewIfNeeded();
      await settle();
      await page.screenshot({
        path: path.join(out, `final-001-${name}-${size.name}.png`),
      });
    };
    const readingText = async () =>
      (await map.getByTestId("study-reading").innerText())
        .replace(/\s+/g, " ")
        .trim();
    const active = async () => {
      const node = map.locator(".node.active .name");
      const edge = map.locator(".edge.active");
      if (await node.count())
        return `node:${(await node.first().innerText()).trim()}`;
      if (await edge.count())
        return `edge:${await edge.first().getAttribute("data-edge")}`;
      return "none";
    };
    // Steps the drawing from its first step to its last and records what each step says.
    const scrubber = map.locator("tools-study-scrubber input[type=range]");
    const stepThrough = async () => {
      const slider = scrubber;
      const last = Number(await slider.getAttribute("max"));
      const readings = [];
      const first = Number(await slider.inputValue());
      if (first !== 0) {
        for (let back = first; back > 0; back--)
          await map.getByRole("button", { name: "Step back" }).click();
      }
      readings.push({
        step: 0,
        active: await active(),
        reading: await readingText(),
      });
      for (let step = 1; step <= last; step++) {
        await map.getByRole("button", { name: "Step forward" }).click();
        await page.waitForFunction(
          (value) =>
            document.querySelector(
              "tools-study-relations tools-study-scrubber input[type=range]",
            )?.value === value,
          String(step),
        );
        readings.push({
          step,
          active: await active(),
          reading: await readingText(),
        });
      }
      return readings;
    };
    const introText = async () =>
      (await study.locator(".intro").count())
        ? (await study.locator(".intro").first().textContent()).trim()
        : "";
    // A study has arrived when its heading names it, its own opening text replaced the
    // previous study's and its drawing stands at its first step.
    const arrive = async (title, previous) => {
      await heading().filter({ hasText: title }).waitFor();
      await page.waitForFunction((before) => {
        const intro = document.querySelector("tools-study .intro");
        const slider = document.querySelector(
          "tools-study-relations tools-study-scrubber input[type=range]",
        );
        return (
          !!intro &&
          intro.textContent.trim() !== before &&
          !!slider &&
          slider.value === "0"
        );
      }, previous);
    };
    const openFromContents = async (work, title) => {
      const previous = await introText();
      await shelf.getByRole("button", { name: work }).click();
      await contents.getByRole("link", { name: title, exact: true }).click();
      await arrive(title, previous);
    };
    const followNearby = async (title) => {
      const previous = await introText();
      await study
        .locator(".nearby")
        .getByRole("link", { name: title, exact: true })
        .click();
      await arrive(title, previous);
    };

    // 1. Tools and the catalog.
    await page.goto(`${base}/tools`);
    const enter = page.getByRole("link", {
      name: "Read the catalog",
      exact: true,
    });
    await enter.waitFor();
    await note("tools", {
      home: (await page.locator("main").innerText())
        .replace(/\s+/g, " ")
        .slice(0, 600),
    });
    await shot("01-tools");
    await enter.click();
    await shelf.waitFor();
    await note("catalog", {
      shelf: (await shelf.innerText()).replace(/\s+/g, " "),
    });

    // 2. Gödel, Escher, Bach and its studied count.
    const geb = shelf.getByRole("button", { name: /Gödel, Escher, Bach/ });
    await geb.click();
    await contents.getByRole("link").first().waitFor();
    await note("geb", {
      shelfEntry: (await geb.innerText()).replace(/\s+/g, " "),
      studiedLinks: await contents.getByRole("link").allInnerTexts(),
    });
    await shot("02-geb");

    // 3. Levels of description: read, step, expand the pseudocode and the limits.
    await contents
      .getByRole("link", { name: "Levels of description", exact: true })
      .click();
    await arrive("Levels of description", "");
    await note("levels-open", {
      heading: await heading().innerText(),
      intro: await study.locator(".intro").innerText(),
      specimen: (await study.locator(".specimen").innerText()).replace(
        /\s+/g,
        " ",
      ),
      worked: (await study.locator(".worked-example").innerText())
        .replace(/\s+/g, " ")
        .slice(0, 400),
      caption: await study.locator(".map-instructions").innerText(),
      accessibleName: await map.getByRole("img").getAttribute("aria-label"),
    });
    await shot("03-levels-open", study.locator(".specimen"));
    await study.locator(".specimen summary").click();
    await note("levels-prediction", {
      answer: await study.locator(".specimen details p").innerText(),
    });
    const levels = await stepThrough();
    await note("levels-stepped", { readings: levels });
    await shot("04-levels-top", map);
    await summary("Follow the mechanism").click();
    await study.locator(".algorithm-guide > pre").waitFor();
    await note("levels-pseudocode", {
      pseudocode: await study.locator(".algorithm-guide > pre").innerText(),
      steps: await study.locator(".code-explanations > li > p").allInnerTexts(),
    });
    await shot("05-levels-pseudocode", study.locator(".algorithm-guide"));
    await summary("Think in streams").click();
    await page.waitForTimeout(400);
    await note("levels-streams", {
      text: (
        await study
          .locator("details")
          .filter({ hasText: "Think in streams" })
          .innerText()
      )
        .replace(/\s+/g, " ")
        .slice(0, 500),
    });
    await summary("Where this breaks down").click();
    await study.locator(".limits").waitFor();
    await note("levels-limits", {
      limits: await study.locator(".limits li").allInnerTexts(),
    });
    await shot("06-levels-limits", study.locator(".limits"));
    await summary("See it elsewhere").click();
    await page.waitForTimeout(400);
    await note("levels-elsewhere", {
      links: await study
        .locator("details")
        .filter({ hasText: "See it elsewhere" })
        .locator("a")
        .evaluateAll((nodes) =>
          nodes.map(
            (a) => `${a.textContent.trim()} → ${a.getAttribute("href")}`,
          ),
        ),
      nearby: await study.locator(".nearby li").allInnerTexts(),
    });

    // 4. Strange loop from the nearby link, stepped round to its start, then restarted.
    await followNearby("Strange loop");
    await note("loop-open", {
      heading: await heading().innerText(),
      specimen: (await study.locator(".specimen").innerText()).replace(
        /\s+/g,
        " ",
      ),
      source: await study
        .locator(".worked-example a")
        .evaluateAll((nodes) =>
          nodes.map(
            (a) => `${a.textContent.trim()} → ${a.getAttribute("href")}`,
          ),
        ),
    });
    const loop = await stepThrough();
    await note("loop-stepped", {
      readings: loop,
      returned: loop[0].active === loop.at(-1).active,
    });
    await shot("07-loop-return", map);
    const restart = map.getByRole("button", { name: "Back to the start" });
    await restart.focus();
    await restart.press("Enter");
    await note("loop-restart", {
      slider: await scrubber.inputValue(),
      focused: await page.evaluate(() =>
        document.activeElement?.getAttribute("type"),
      ),
    });

    // 5. Isomorphism, then Gödel numbering and the encoder's spec note.
    await openFromContents(/Gödel, Escher, Bach/, "Isomorphism");
    await note("isomorphism", {
      heading: await heading().innerText(),
      worked: (await study.locator(".worked-example").innerText()).replace(
        /\s+/g,
        " ",
      ),
      readings: await stepThrough(),
    });
    await shot("08-isomorphism", map);
    await followNearby("Gödel numbering");
    const godel = await stepThrough();
    await summary("Follow the mechanism").click();
    await study.locator(".algorithm-guide > pre").waitFor();
    await study.locator("details.executable-model summary").click();
    await note("godel", {
      heading: await heading().innerText(),
      readings: godel,
      model: (
        await study.locator("details.executable-model").innerText()
      ).replace(/\s+/g, " "),
      specNote: await study.getByTestId("model-spec").innerText(),
    });
    await shot("09-godel-spec", study.getByTestId("model-spec"));
    // The encoder takes another candidate: 7 decodes to a word inside the image.
    await study
      .locator("summary")
      .filter({ hasText: "Try another value" })
      .click();
    const candidate = study
      .locator("label")
      .filter({ hasText: "Candidate number to decode" })
      .locator("input[type=range]");
    if (await candidate.count()) {
      await candidate.focus();
      for (let presses = 0; presses < 4; presses++)
        await candidate.press("ArrowRight");
      await page.waitForTimeout(400);
      await map
        .getByRole("button", { name: "Test a candidate", exact: true })
        .click();
      await note("godel-candidate-7", {
        reading: await readingText(),
        nodes: await map.locator(".node .name").allInnerTexts(),
      });
      await shot("10-godel-candidate", map);
    } else {
      await note("godel-candidate-7", { missing: "no candidate input found" });
    }

    // 6. Team Topologies and the three interaction modes.
    const tt = shelf.getByRole("button", { name: /Team Topologies/ });
    await tt.click();
    await contents.getByRole("link").first().waitFor();
    await note("teams", {
      shelfEntry: (await tt.innerText()).replace(/\s+/g, " "),
      studiedLinks: await contents.getByRole("link").allInnerTexts(),
    });
    await shot("11-teams");
    for (const [index, mode] of [
      "Collaboration mode",
      "X-as-a-Service mode",
      "Facilitating mode",
    ].entries()) {
      await openFromContents(/Team Topologies/, mode);
      const opening = {
        heading: await heading().innerText(),
        intro: await study.locator(".intro").innerText(),
        specimen: (await study.locator(".specimen").count())
          ? (await study.locator(".specimen").innerText()).replace(/\s+/g, " ")
          : null,
        caption: await study.locator(".map-instructions").innerText(),
      };
      const readings = await stepThrough();
      await note(`mode-${index + 1}`, { ...opening, readings });
      await shot(
        `${12 + index}-${mode.toLowerCase().replace(/[^a-z]+/g, "-")}-end`,
        map,
      );
    }

    // 7. Conway's law and the Reverse Conway link.
    await openFromContents(/Team Topologies/, "Conway's law (1968)");
    const conway = await stepThrough();
    await note("conway", {
      heading: await heading().innerText(),
      caption: await study.locator(".map-instructions").innerText(),
      readings: conway,
      nearby: await study.locator(".nearby li").allInnerTexts(),
    });
    await shot("15-conway", map);
    await followNearby("Reverse Conway manoeuvre");
    await note("reverse-conway", {
      heading: await heading().innerText(),
      worked: (await study.locator(".worked-example").innerText()).replace(
        /\s+/g,
        " ",
      ),
      readings: await stepThrough(),
    });
    await shot("16-reverse-conway", map);

    report.sizes.push(log);
    await context.close();
  }

  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(
    path.join(out, "final-001-session.json"),
    JSON.stringify(report, null, 2),
  );
  await browser.close();
  server.close();
  const summaryLine = report.sizes.map(
    (entry) =>
      `${entry.size}: ${entry.steps.length} steps, overflow ${entry.overflow.length}, console ${entry.consoleErrors.length}, page errors ${entry.pageErrors.length}, failed requests ${entry.failedRequests.length}`,
  );
  console.log(summaryLine.join("\n"));
}

run().catch((error) => {
  console.error(error);
  server.close();
  process.exit(1);
});
