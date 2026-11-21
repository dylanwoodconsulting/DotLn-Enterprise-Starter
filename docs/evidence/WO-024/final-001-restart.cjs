// Rechecks one reading of the reviewer's session: what "Back to the start" leaves on the
// Strange loop drawing once the page has settled, by keyboard and by pointer, and takes a
// close capture of the X-as-a-Service drawing. Usage:
//   node final-001-restart.cjs <target worktree> <output directory>
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const [target, out] = process.argv.slice(2);
const root = path.join(target, "dist/apps/dotln/browser");
const { chromium } = require(path.join(target, "node_modules/playwright"));

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
  const type = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".html": "text/html",
  }[path.extname(file)];
  response.writeHead(200, {
    "content-type": type ?? "application/octet-stream",
  });
  fs.createReadStream(file).pipe(response);
});

async function run() {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2080, height: 1460 },
  });
  const map = page.locator("tools-study-relations");
  const scrubber = map.locator("tools-study-scrubber input[type=range]");
  const results = {};

  for (const how of ["keyboard", "pointer"]) {
    await page.goto(`${base}/tools/catalog/geb2:302`);
    await map.locator("svg").waitFor();
    const last = Number(await scrubber.getAttribute("max"));
    for (let step = 1; step <= last; step++) {
      await map.getByRole("button", { name: "Step forward" }).click();
      await page.waitForFunction(
        (value) =>
          document.querySelector(
            "tools-study-relations tools-study-scrubber input[type=range]",
          )?.value === value,
        String(step),
      );
    }
    const atEnd = {
      value: await scrubber.inputValue(),
      active: (await map.locator(".node.active .name").innerText()).trim(),
    };
    const restart = map.getByRole("button", { name: "Back to the start" });
    if (how === "keyboard") {
      await restart.focus();
      await restart.press("Enter");
    } else {
      await restart.click();
    }
    const settled = await page
      .waitForFunction(
        () =>
          document.querySelector(
            "tools-study-relations tools-study-scrubber input[type=range]",
          )?.value === "0",
        null,
        { timeout: 5000 },
      )
      .then(
        () => true,
        () => false,
      );
    results[how] = {
      atEnd,
      settledAtZero: settled,
      value: await scrubber.inputValue(),
      active: (await map.locator(".node.active .name").innerText()).trim(),
      focusedIsScrubber: await page.evaluate(
        () =>
          document.activeElement ===
          document.querySelector(
            "tools-study-relations tools-study-scrubber input[type=range]",
          ),
      ),
      restartStillOffered: await restart.count(),
      reading: (await map.getByTestId("study-reading").innerText())
        .replace(/\s+/g, " ")
        .trim(),
    };
  }

  // The X-as-a-Service drawing alone, at each of its six steps, enlarged for reading.
  const close = await browser.newPage({
    viewport: { width: 2080, height: 1460 },
    deviceScaleFactor: 2,
  });
  await close.goto(`${base}/tools/catalog/tt3:8`);
  const drawing = close.locator("tools-study-relations svg");
  await drawing.waitFor();
  await close.evaluate(() => document.fonts.ready);
  for (let step = 0; step <= 5; step++) {
    if (step > 0) {
      await close
        .locator("tools-study-relations")
        .getByRole("button", { name: "Step forward" })
        .click();
      await close.waitForFunction(
        (value) =>
          document.querySelector(
            "tools-study-relations tools-study-scrubber input[type=range]",
          )?.value === value,
        String(step),
      );
    }
    await close.waitForTimeout(350);
    if (step === 3 || step === 5)
      await drawing.screenshot({
        path: path.join(
          out,
          `final-001-x-as-a-service-drawing-step-${step}.png`,
        ),
      });
  }
  results.edges = await close
    .locator("tools-study-relations svg .edge")
    .evaluateAll((groups) =>
      groups.map((group) => ({
        id: group.getAttribute("data-edge"),
        title: group.querySelector("title")?.textContent,
        d: group.querySelector("path")?.getAttribute("d"),
      })),
    );

  await browser.close();
  server.close();
  console.log(JSON.stringify(results, null, 2));
}

run().catch((error) => {
  console.error(error);
  server.close();
  process.exit(1);
});
