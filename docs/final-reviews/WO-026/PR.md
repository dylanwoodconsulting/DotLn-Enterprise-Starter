# Pass the reference documents for usefulness and currency

## Summary

A colleague who clones this repository now learns from the README's first screen what the app is, how to run it and which checks to run, then goes from a question to one document and the file that demonstrates it. A coding session finds rule documents whose commands all run as written, and every library has a page that says what it is for, how it is imported and how it is tested. Documents only: 54 Markdown files change, and no code, route, script, configuration or dependency does.

- **The README** leads with what the app is, the menu's three groups with their routes, how to run it and the main checks, and links the developer reference, the AI reference, the scripts reference, the conventions and the generator log.
- **The developer reference** opens on a table from a question to a document and a starting file. `sub-apps.md` gains how a feature library is laid out, and `events-and-state.md` opens on where state lives, with every store, its provider and what persists. `scene.md` says what keeps the engine pure and what does not, and `catalog.md` and `scene.md` now read as single accounts, with the additions of four changes moved into the paragraphs they belong to.
- **The AI reference** writes every command in the form that runs. The scene's regeneration rule gains its Prettier step, because running it as written exited 0 and left the tree failing the format check. The catalog rules name the join by its file and link its full command, because it needs a directory outside the repository.
- **The library READMEs** lose all nineteen generator stubs. `libs/shared/models/README.md` no longer says the library has no test runner. Rule 19, `sub-apps.md` and the AI reference now tell the next library to do the same, so the stubs do not come back with it.

Facts that had gone stale are corrected: the taxonomy said the board has no store or HTTP, `foundation.md` gave translations a home page that no longer exists, `conventions.md` said the final publish supersedes the draft it reuses, `scripts.md` left `typecheck:e2e` out of the gate, and `sub-apps.md` called the `/machinery` page by a name it had outgrown; it is a placeholder, and the documents now say so.

The two commits can be read apart: the README and the two references first, then the 33 library pages.

## Validation

The declared review gate (install, lint, e2e type check, unit tests, format, build, e2e and visual) passed with no tracked-byte mutation. Its test, build and e2e rows read Nx's cache of the sequence that ran them on this same tree; lint and the visual suite ran live. CI ran the same tree from a clean checkout on the draft, and `checks`, `visual` and `title` all passed.

Every command a rule document or a library README names exits 0 (39 and 41 commands), and running them is what found the regeneration defect. A check of every route, alias, script and path the 54 standing documents name (492 names) and every repository link (122) found none missing, and a search for the removed surfaces finds nothing.

An independent reader walked the session the change is for: from the README alone they installed, started the app, reached the scene at the root in Chromium with no page errors and ran the checks. Through the developer reference they found how a feature library is laid out, where state lives, how the scene engine stays pure and how the catalog is joined, each with its demonstrating file. Then they ran every command in the AI reference.

## Review

The final review read the whole diff, read `scene.md` and `catalog.md` end to end, reran the name and link check at the reviewed commit, extracted the commands independently and found exactly the recorded set, and checked all 83 identifiers the library READMEs name against the code. It traced the newer factual claims to source, among them what writes to a store, what pins the catalog's counts, what CI runs and that a note removed from `events-and-state.md` survives in the conventions. It found no defect in the documents and changed none of their bytes: the head of these two commits has the tree the draft carried.

## Limits and follow-ups

None of these blocks the change, and each is recorded with its owner.

- The `/machinery` page's class and file keep their old name, because this change touches no code. The documents describing the placeholder are listed for the change that replaces it.
- `npm run check:scripts` covers npm scripts and files directly under `tools/scripts`, not `tools/*.mjs` or `tools/scripts/catalog/`, and the relative-link check was run for this change rather than committed. The documents say what the check covers; whether either should grow is a later decision.
- Two things are conventions rather than checks, and the documents say so: nothing refuses an Angular import in the scene engine, and nothing refuses generated text in a library README.
- The concept-study changes that follow write into `catalog.md`, `catalog-rules.md` and `events-and-state.md`, so those files stay integrated only if each change integrates what it adds.
