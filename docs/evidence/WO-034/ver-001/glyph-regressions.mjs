// VER-001: run the candidate's three D037 browser regressions against two production builds the
// verifier made itself, the integrated base's and the candidate's.
// Usage: node glyph-regressions.mjs <target worktree> <base browser dir> <candidate browser dir> <scratch> <output dir>
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [target, baseDist, candidateDist, scratch, output] = process.argv
  .slice(2)
  .map((path) => resolve(path));
if (!output)
  throw new Error(
    "usage: glyph-regressions.mjs <target> <base dist> <candidate dist> <scratch> <output>",
  );
mkdirSync(scratch, { recursive: true });
mkdirSync(output, { recursive: true });
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
const tests = {
  "the guide's end": "a displaced name guide stops before entering its glyphs",
  "the unread vector": "a stopped cart leaves no unreadable vector tick",
  "the room by font size":
    "a wide drawing keeps a fitting trolley name at its authored offset",
};
const results = [];
for (const [build, dist] of [
  ["base", baseDist],
  ["candidate", candidateDist],
]) {
  const server = createServer((request, response) => {
    let file = join(
      dist,
      normalize(
        decodeURIComponent(new URL(request.url, "http://localhost").pathname),
      ),
    );
    try {
      if (!file.startsWith(dist) || !statSync(file).isFile())
        throw new Error("fallback");
    } catch {
      file = join(dist, "index.html");
    }
    response.setHeader(
      "content-type",
      mime[extname(file)] ?? "application/octet-stream",
    );
    response.end(readFileSync(file));
  });
  await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
  try {
    const report = join(scratch, `${build}-report.json`);
    const config = join(scratch, `${build}.config.cjs`);
    writeFileSync(
      config,
      `module.exports = ${JSON.stringify(
        {
          testDir: join(target, "apps/dotln-e2e/src"),
          testMatch: "movement-labels.spec.ts",
          timeout: 120000,
          workers: 1,
          retries: 0,
          outputDir: join(scratch, build),
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
    const grep = Object.values(tests)
      .map((title) => title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    // Asynchronous, so this process keeps serving the build while the browser tests run.
    const child = spawn(
      process.execPath,
      [
        join(target, "node_modules/@playwright/test/cli.js"),
        "test",
        "--config",
        config,
        "--grep",
        grep,
      ],
      {
        cwd: target,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let log = "";
    for (const stream of [child.stdout, child.stderr])
      stream.on("data", (data) => (log += data));
    const run = {
      status: await new Promise((done) => child.on("close", done)),
    };
    writeFileSync(join(scratch, `${build}.log`), log);
    const parsed = JSON.parse(readFileSync(report, "utf8"));
    const outcomes = {};
    const walk = (suite) => {
      for (const spec of suite.specs ?? [])
        outcomes[spec.title] = spec.tests
          .map((test) => test.results.at(-1)?.status ?? "missing")
          .join(",");
      for (const child of suite.suites ?? []) walk(child);
    };
    for (const suite of parsed.suites ?? []) walk(suite);
    const byRule = Object.fromEntries(
      Object.entries(tests).map(([rule, title]) => [
        rule,
        outcomes[title] ?? "not run",
      ]),
    );
    results.push({ build, exitCode: run.status, stats: parsed.stats, byRule });
    console.log(JSON.stringify(results.at(-1)));
  } finally {
    server.close();
  }
}
const [base, candidate] = results;
const verdict = Object.keys(tests).map((rule) => ({
  rule,
  base: base.byRule[rule],
  candidate: candidate.byRule[rule],
  holds: base.byRule[rule] === "failed" && candidate.byRule[rule] === "passed",
}));
writeFileSync(
  join(output, "results.json"),
  `${JSON.stringify({ ranAt: new Date().toISOString(), results, verdict }, null, 1)}\n`,
);
console.log(JSON.stringify(verdict));
if (!verdict.every(({ holds }) => holds)) process.exitCode = 1;
