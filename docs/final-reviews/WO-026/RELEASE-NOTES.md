## Release overview

This patch changes documents only. A colleague or a coding session reading DotLn-Angular gets a README that says in one screen what the app is, how to run it and which checks to run, a developer reference that goes from a question to one document and the file that demonstrates it, an AI reference whose commands all run as written, and a page for every library that says what it is for, how it is imported and how it is tested. Nothing in the app changes.

## Read before upgrading

Nothing to do. No code, route, script, configuration, dependency, stored data or translation changes, so there is no migration and the app behaves as `DotLn Angular v0.6.0` does. The `/machinery` page is a placeholder and the documents now say so; its class and file keep their old name because this release touches no code.

## Substantive changes

- **The README.** It leads with what the app is, the menu's three groups with their routes, how to run it and the main checks, and links the developer reference, the AI reference, the scripts reference, the conventions and the generator log.
- **The developer reference.** A table goes from a question to a document and a starting file. `sub-apps.md` gains how a feature library is laid out, `events-and-state.md` opens on where state lives, and `scene.md` says what keeps the engine pure and what does not. `catalog.md` and `scene.md` read as single accounts rather than the additions of four changes in the order they arrived. `scripts.md` matches the registered gate and CI, with `typecheck:e2e` in the gate.
- **The AI reference.** Every command is written in the form that runs. The scene's regeneration rule gains its Prettier step, because running it as written exited 0 and left the tree failing the format check. The catalog join is named by its file with a link to its full command, because it needs a directory outside the repository.
- **The library READMEs.** All 33 now say what the library or entry point holds and how to use it, replacing nineteen generator stubs and correcting a claim that the models library has no test runner.
- **The conventions.** Rule 19 states what a library's README says, rule 26 joins the list, rule 20 says the final publish reuses the draft, and rule 5 says what `npm run check:kits` enforces. A new sub-app's steps now carry the upkeep of the menu table, the store table and its READMEs.

Corrected along the way: the taxonomy said the board has no store or HTTP, `foundation.md` gave translations a home page that no longer exists, and the shell's menu, routes and providers are described as they are.

## Progressive polish

Order identifiers a colleague could not resolve left current-state sentences. File references became full paths, and each developer document links its rule document. Catalog counts that a new work would have broken in ten places moved to one inventory sentence. Storybook, the translations and the tool catalog each have one word now, where "catalog" had meant all three.

## Evidence and compatibility

- Source: two reviewed commits over the base `6268de9`, the merge of `DotLn Angular v0.6.0`, ending at `01e7b6e` with tree `7156c5b`, followed by the records commit.
- Compatibility: unchanged, with Node 26 and npm as before.
- Verification: an independent reader walked the session from the README to the running app, found how a feature library is laid out, where state lives, how the scene engine stays pure and how the catalog is joined, and ran every command in the AI reference.
- Gates: the declared review gate (install, lint, e2e type check, unit tests, format, build, e2e and visual) passed with no tracked-byte mutation. Its test, build and e2e rows read Nx's cache of the sequence that ran them on this same tree. CI's checks, visual and title jobs passed on the same tree from a clean checkout.
- Document checks: every command a rule document or library README names exits 0 (39 and 41 commands); every name (492) and repository link (122) in the 54 standing documents resolves.
- Known limitations: `npm run check:scripts` covers npm scripts and files directly under `tools/scripts`, not the rest of `tools/`; the relative-link check was run for this release and is not committed; nothing refuses an Angular import in the scene engine or generated text in a library README, and the documents say so; the concept-study changes that follow write into `catalog.md`, `catalog-rules.md` and `events-and-state.md` and must integrate what they add.
