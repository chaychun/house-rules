---
name: template
description: Use when building or rendering any house-rules doc (spec, plan, exploration, context). First run (during init) builds the Astro template; after that, reuse it to render docs.
---

# template

The HTML doc surface. Astro + React baseline, MDX out of the box. Docs authored
as `.mdx` (plain markdown to the agent, rich rendered web to the user — best of
both) and read by humans, so rich preview matters.

## Mode A — build (first run, called by init)

1. Copy the bundled Astro scaffold (this plugin's `template/`) into the
   house-rules folder (`.house-rules/`).
2. `npm install` (installs React + `motion` — both baseline, for `Island`).
3. Ensure `dist/` and `node_modules/` are gitignored (always — folderPolicy
   governs source only).

**Do not adapt `theme.css`.** The house style is frozen and ships as-is — one
curated look (warm-paper light + mirrored warm dark, serif headings, single
accent). Never restyle per repo.

Supports: prose, tables, Shiki highlighting, KaTeX math, Mermaid diagrams, and a
React `Island` for interactive exploration.

## Authoring contract (every spec / plan / context / exploration)

An agent may touch **only**:
- Plain markdown/MDX prose: headings, lists, tables, code, math, mermaid.
- The **locked component set** — compose them, pass children/props:
  - `Callout` — highlighted note/warning block.
  - `Steps` — timeline-like ordered sequence.
  - `Figure` — captioned figure/image.
  - `SideNote` — Tufte margin note, authored **in-flow** where it attaches;
    floats into the right gutter, auto-numbered.
  - `Island` — React carve-out for interactivity (`client:load`); the locked
    shell stays fixed, freedom lives inside.

**Forbidden:** inline styles, freehand CSS/HTML, editing `theme.css`, editing
component internals.

## Mode B — render (every doc after)

Reuse the existing template; never rebuild it. Author/edit docs as `.mdx`:
- per piece: `.house-rules/src/content/YYYY-MM-DD-<topic>/` → `spec.mdx`,
  `plan.mdx`, any extra mdx the piece needs, optional `exploration/`.
- repo-wide: global `.mdx` at the content root.

It's all routing structure. Pieces (folders) are the browse unit — reachable via
the ⌘K palette; the docs within a piece are tabs on the doc page. Nav labels =
leaf file name, not the frontmatter `title` (the doc header uses `title`).

## Server discipline — port is the lock

Fixed port **8111** (`docsPort` in config). The `dev`/`preview` scripts already
pass `--port 8111 --strictPort`.

Before starting, **HTTP-probe** `localhost:8111`:
- **up** → reuse it. Point the user at the URL. Spawn nothing.
- **down** → start `astro dev` in the background.

`--strictPort` never silently bumps — a foreign process on 8111 errors loudly
instead of spawning a duplicate elsewhere. No PID file: a responding port *is*
the running server. Restart = kill whoever holds the port first, then start;
never in parallel.

```
if http_ok("localhost:8111"): open(url); done
else:
  bg(`npm run dev`)          # = astro dev --port 8111 --strictPort
  wait_ready(); open(url)
# restart: kill $(lsof -ti :8111); then start
```

Teardown: ask before stopping at wrap-up. (This is the one exception to "never
run dev/build without confirmation" — it's the docs surface, not the app.)

Pseudo code over exact shapes in doc code blocks.
