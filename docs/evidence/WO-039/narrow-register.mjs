// Measure the states register's narrow layout with real glyphs in a served production build: for
// every enterprise study with a states drawing and every step, each column heading's rendered size
// and box against its column, and each row's name and note against the name column.
// Usage: node narrow-register.mjs <target worktree> <production-browser-dir> <output.json> [width]
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { enterpriseStudies, serveBuild } from "./serve-build.mjs";

const [target, dist, output, widthArgument] = process.argv.slice(2);
if (!target || !dist || !output)
  throw new Error(
    "usage: narrow-register.mjs <target> <production-browser-dir> <output.json> [width]",
  );
const width = Number(widthArgument ?? 360);
const { chromium } = createRequire(join(resolve(target), "package.json"))(
  "@playwright/test",
);
const studies = enterpriseStudies(target).filter(
  ({ family }) => family === "states",
);
const server = await serveBuild(dist);
const browser = await chromium.launch();
const errors = [];
const results = [];
try {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(String(error)));
  for (const { id, slug } of studies) {
    await page.goto(`${server.base}/tools/catalog/${id}`);
    const study = page.locator("tools-study");
    await study.waitFor({ timeout: 20000 });
    const slider = study.getByRole("slider", { name: /^Step \d+ of \d+$/ });
    const last = Number(await slider.getAttribute("max"));
    const steps = [];
    for (let step = 0; step <= last; step++) {
      await slider.fill(String(step));
      await page.evaluate(
        () =>
          new Promise((ready) =>
            requestAnimationFrame(() => requestAnimationFrame(ready)),
          ),
      );
      steps.push(
        await study.evaluate((element) => {
          const svg = [
            ...element.querySelectorAll("tools-study-states svg"),
          ].find((candidate) => candidate.checkVisibility());
          const units = Number(svg.getAttribute("viewBox").split(" ")[2]);
          const pixelsPerUnit = svg.getBoundingClientRect().width / units;
          const columns = [...svg.querySelectorAll("rect.column")].map(
            (rect) => ({
              x: Number(rect.getAttribute("x")),
              width: Number(rect.getAttribute("width")),
            }),
          );
          const nameColumn = columns[0]?.x ?? units;
          const box = (text) => {
            const { x, width } = text.getBBox();
            return { x, right: x + width };
          };
          const headings = [...svg.querySelectorAll("text.heading")].map(
            (text) => {
              const centre = Number(text.getAttribute("x"));
              const column = columns.find(
                ({ x, width }) => centre >= x && centre <= x + width,
              );
              const { x, right } = box(text);
              const size = parseFloat(getComputedStyle(text).fontSize);
              return {
                text: text.textContent.trim(),
                sizeUnits: Number(size.toFixed(2)),
                sizePixels: Number((size * pixelsPerUnit).toFixed(2)),
                columnWidth: Number(column.width.toFixed(2)),
                overflow: Number(
                  Math.max(
                    0,
                    column.x - x,
                    right - (column.x + column.width),
                  ).toFixed(2),
                ),
              };
            },
          );
          // A name or note line against the name column: the room its real glyphs leave before the
          // first state's column, negative when they cross it, beside the room the builder's own
          // per-character estimate leaves (14 or 12 units at 0.56 or 0.55 of the size per character).
          const estimate = { "text.name": 14 * 0.56, "text.detail": 12 * 0.55 };
          const past = (selector) =>
            [...svg.querySelectorAll(selector)].map((text) => {
              const content = text.textContent.trim();
              const room = nameColumn - box(text).right;
              const estimated =
                nameColumn -
                (Number(text.getAttribute("x")) +
                  content.length * estimate[selector]);
              return {
                text: content,
                overflow: Number(Math.max(0, -room).toFixed(2)),
                room: Number(room.toFixed(2)),
                estimatedRoom: Number(estimated.toFixed(2)),
              };
            });
          const transitions = [...svg.querySelectorAll("text.transition")].map(
            (text) => {
              const { x, right } = box(text);
              return {
                text: text.textContent.trim(),
                overflow: Number(Math.max(0, -x, right - units).toFixed(2)),
              };
            },
          );
          return {
            units,
            pixelsPerUnit: Number(pixelsPerUnit.toFixed(4)),
            nameColumn,
            headings,
            names: past("text.name"),
            notes: past("text.detail"),
            transitions,
          };
        }),
      );
    }
    const [first] = steps;
    const notes = steps.flatMap(({ notes }, step) =>
      notes.map((note) => ({ step, ...note })),
    );
    // The note line that leaves the least room before the first state's column, by real glyphs.
    const widestNote = notes.reduce(
      (widest, note) =>
        note.room < (widest?.room ?? Infinity) ? note : widest,
      null,
    );
    results.push({
      id,
      slug,
      steps: steps.length,
      pixelsPerUnit: first.pixelsPerUnit,
      nameColumn: first.nameColumn,
      headings: first.headings,
      smallestHeadingPixels: Math.min(
        ...first.headings.map(({ sizePixels }) => sizePixels),
      ),
      headingOverflow: Math.max(
        ...steps.flatMap(({ headings }) =>
          headings.map(({ overflow }) => overflow),
        ),
      ),
      nameOverflow: Math.max(
        0,
        ...steps.flatMap(({ names }) => names.map(({ overflow }) => overflow)),
      ),
      noteOverflow: widestNote?.overflow ?? 0,
      noteRoom: widestNote?.room ?? null,
      leastEstimatedNoteRoom: Math.min(
        ...notes.map(({ estimatedRoom }) => estimatedRoom),
      ),
      widestNote,
      transitionOverflow: Math.max(
        0,
        ...steps.flatMap(({ transitions }) =>
          transitions.map(({ overflow }) => overflow),
        ),
      ),
    });
    const row = results.at(-1);
    console.log(
      `${slug}: ${steps.length} steps, smallest heading ${row.smallestHeadingPixels}px, heading overflow ${row.headingOverflow}, note room ${row.noteRoom} by glyphs, ${row.leastEstimatedNoteRoom} by the estimate`,
    );
  }
  await context.close();
  writeFileSync(
    output,
    `${JSON.stringify({ measuredAt: new Date().toISOString(), width, errors, studies: results }, null, 2)}\n`,
  );
  if (errors.length || results.length !== 16) process.exitCode = 1;
} finally {
  await browser.close();
  server.close();
}
