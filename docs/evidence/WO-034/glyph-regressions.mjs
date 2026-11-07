// Run the same three browser regressions against the integrated base and the candidate.
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [target, baseline, scratch, output] = process.argv
  .slice(2)
  .map((path) => resolve(path));
if (!target || !baseline || !scratch || !output)
  throw new Error(
    "usage: glyph-regressions.mjs <target> <base browser> <scratch> <output>",
  );
mkdirSync(scratch, { recursive: true });
mkdirSync(output, { recursive: true });
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const results = [];
for (const [name, root] of [
  ["base", baseline],
  ["candidate", join(target, "dist/apps/dotln/browser")],
]) {
  const server = createServer((request, response) => {
    let file = join(
      root,
      normalize(
        decodeURIComponent(new URL(request.url, "http://localhost").pathname),
      ),
    );
    try {
      if (!statSync(file).isFile()) throw new Error("not a file");
    } catch {
      file = join(root, "index.html");
    }
    response.setHeader(
      "content-type",
      mime[extname(file)] ?? "application/octet-stream",
    );
    response.end(readFileSync(file));
  });
  await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
  try {
    const config = join(scratch, `${name}.config.cjs`);
    const report = join(output, `${name}.json`);
    writeFileSync(
      config,
      `module.exports = ${JSON.stringify(
        {
          testDir: join(target, "apps/dotln-e2e/src"),
          testMatch: "movement-labels.spec.ts",
          grep: undefined,
          timeout: 60000,
          workers: 1,
          retries: 0,
          outputDir: join(scratch, name),
          reporter: [["json", { outputFile: report }]],
          use: {
            baseURL: `http://127.0.0.1:${server.address().port}`,
            browserName: "chromium",
            reducedMotion: "reduce",
          },
        },
        null,
        2,
      )};\n`,
    );
    const args = [
      join(target, "node_modules/@playwright/test/cli.js"),
      "test",
      "--config",
      config,
      "--grep",
      "a displaced name|a stopped cart|a wide drawing",
    ];
    const child = spawn(process.execPath, args, {
      cwd: target,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let log = "";
    for (const stream of [child.stdout, child.stderr])
      stream.on("data", (data) => {
        log += data;
      });
    const exitCode = await new Promise((done) => child.on("close", done));
    writeFileSync(join(output, `${name}.log`), log);
    const parsed = JSON.parse(readFileSync(report, "utf8"));
    results.push({
      name,
      exitCode,
      stats: parsed.stats,
      report: `${name}.json`,
    });
    console.log(JSON.stringify(results.at(-1)));
  } finally {
    server.close();
  }
}
writeFileSync(
  join(output, "results.json"),
  JSON.stringify(results, null, 2) + "\n",
);
if (
  results[0].stats.unexpected !== 3 ||
  results[1].stats.expected !== 3 ||
  results[1].exitCode !== 0
)
  process.exitCode = 1;
