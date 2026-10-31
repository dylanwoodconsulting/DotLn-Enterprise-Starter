# Repository profiles

A registered target repository (`dotln.config.json` → `repositories.<id>`) may
declare one profile document here, `docs/repositories/<id>.md`, treated as
repo-native authority. The executor reads it on demand for an order's
`Repository:` id, never at cold start. Policy layers launchpad → class →
repository: the more specific layer adds to and narrows the wider one, and a
profile's conventions prevail over its class's where it states them. Keep a
profile to what a session needs in order to act in that repository; name no
credential, hostname or internal service.

The template below is the shape the operator chose on 2026-10-30, which
[dotln-angular.md](dotln-angular.md) demonstrates. The kit's own template is
`scripts/kit/repository-profile.template.md`, and a later starter update that
changes it reaches this file through a Git merge.

## Template

~~~markdown
# <repository id> — repository profile

| Fact | Value |
| --- | --- |
| Repository class | <repository class> |
| Base branch | <branch> |
| Application | <path> |
| Evidence root | <path in the target> |
| Workstream | <link to the workstream> |
| Last reviewed target source | <commit, its merge and date> |
| Latest target release | <release, or none> |

Which orders read this profile, where its authority comes from, and how far its
facts hold past the last reviewed source.

## What this repository is for

What the repository is for, what exists today and what does not.

## Run the app and its checks

How to run the application locally, what it needs and how to tell it is up. Then
the registered gate as a table of check, command, selection and notes.

## Find the implementation

The patterns the repository already demonstrates, as a table per area with one
path each, so a change follows them instead of introducing another.

## Publish a change

Branch naming, the base branch, required reviews and checks, the publication
route, and what a session may never do here (push to the base branch, merge, tag).

## Close a release and handle local files

The release policy, what close deletes, retains or refuses, and which local files
stay undeclared.

## Versions, provenance and recovery context

Versions and releases as tables, and history only where it explains a boundary or
a recovery route, each with its record linked.

## Upstream and copied-contract references

- `owner/repo@tag path#anchor` — one line on why this section matters here
~~~
