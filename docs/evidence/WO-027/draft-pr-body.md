Corrects the workspace's gate tools and reference documents so that they say and check what is so.

- `npm run boards` counts leading `BOARDED:` comment markers in tracked scripts, styles, HTML and workflow YAML outside `docs/` and `node_modules`, so a defect boarded in `tools/` or `.github/` is counted. Strings and inline mentions are not.
- `npm run check:scripts` reads the script reference's tables. A missing row, or a row naming a script or direct module that does not exist, fails. The tooling suite carries negative controls for both.
- The title workflow leaves a supported gitmoji and subject as written, still decorates a conventional title with its type's gitmoji, and refuses a bare subject.
- The AI and developer references list the registered gate's commands once each. They explain the feature barrel exception, the disabled Angular CLI cache and the scene's performance coverage, state the study doctrine inline, and say where the filed records' links resolve.

Application code, libraries, runtime dependencies and filed records are unchanged.
