---
name: template
description: Use when building or rendering any house-rules doc (spec, plan, exploration, context). First run (during init) builds the Astro template; after that, reuse it to render docs.
---

# template

The HTML doc surface. Astro-only, MDX out of the box. Docs are authored as
`.mdx` (plain markdown to the agent, rich rendered web to the user — best of
both) and read by humans, so rich preview matters.

## Mode A — build (first run, called by init)

1. Copy the bundled Astro scaffold (this plugin's `template/`) into the
   house-rules folder (`.house-rules/`).
2. `npm install`.
3. Adapt `src/styles/theme.css` to the repo's styling (colors, fonts, tokens).
4. Ensure `dist/` and `node_modules/` are gitignored (always — folderPolicy
   governs source only).

Supports: prose, tables, Shiki syntax highlighting, KaTeX math, Mermaid
diagrams. React is on-demand — `npx astro add react` then `npm i motion` — for
interactive exploration. Do not bundle React up front.

## Mode B — render (every doc after)

Reuse the existing template; never rebuild it. Author/edit docs as `.mdx`:
- per piece: `.house-rules/src/content/YYYY-MM-DD-<topic>/` → `spec.mdx`,
  `plan.mdx`, any extra mdx the piece needs, optional `exploration/`.
- repo-wide: global `.mdx` at the content root.

It's all routing structure. The nav shell auto-derives from the content tree so
the user can switch between docs.

## Viewing

Dev server + HMR always — no static-build workflow. After writing any doc, run
`astro dev` and open it for the user once. Keep the server running until the work
wraps up, then ask before stopping. (This is the one exception to "never run
dev/build without confirmation" — it's the docs surface, not the app.)

Pseudo code over exact shapes in doc code blocks.
