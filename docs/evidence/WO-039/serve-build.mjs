// Serve a production browser build on a free loopback port, answering every unknown path with
// index.html so the app's own router resolves it. Taken out of WO-034's crawl so the crawl and the
// narrow-register measurement serve a build the same way.
import { createServer } from "node:http";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};

/** Starts the server; resolves to its base address and a close function. */
export async function serveBuild(dist) {
  const root = resolve(dist);
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
  return {
    base: `http://127.0.0.1:${server.address().port}`,
    close: () => server.close(),
  };
}

/** The twenty enterprise studies, in the summary's order, with each record's slug and family. */
export function enterpriseStudies(target) {
  const studies = join(target, "libs/shared/catalog/src/studies");
  const summary = JSON.parse(
    readFileSync(join(studies, "studies-summary.json"), "utf8"),
  );
  const work = summary.works.find(({ work }) => work === "poeaa");
  const records = new Map(
    readdirSync(join(studies, "poeaa"))
      .filter((file) => file.endsWith(".json"))
      .map((file) => {
        const record = JSON.parse(
          readFileSync(join(studies, "poeaa", file), "utf8"),
        );
        return [record.id, record];
      }),
  );
  return work.studies.map(({ id }) => {
    const record = records.get(id);
    if (!record)
      throw new Error(`The summary names ${id}, which has no record.`);
    return { id, slug: record.slug, family: record.visual?.family ?? null };
  });
}
