---
name: init
description: Use when real work (brainstorm/plan/implement/debug) is about to start in a repo with no .house-rules/house-rules.config.json yet, or when the user asks to (re)initialize house-rules. Sets up the docs folder, commit policies, and the Astro doc template.
---

# init

One-time per-repo setup so the agent never has to guess. Other house-rules
skills check for `.house-rules/house-rules.config.json`; if it is missing when
real work starts, run this first, then continue the original work.

## Ask (one at a time, inline in chat — never the AskUserQuestion tool)

Apply zero-ambiguity: never assume an answer, ask. Stay terse (persona).

1. **Folder location** — where everything house-rules lives (config + template +
   specs + plans + exploration). Default `.house-rules/`.
2. **Folder policy** — commit the folder, or gitignore it. Specs, plans, and the
   template source ride this policy.
3. **Work-commit policy** — when work is done, may the agent commit the code
   pieces: `commit` / `dont` / `ask`.

## Template stack

Infer, then confirm:
- Repo already uses React → React is available.
- Else default to Astro + vanilla JS; escalate to React only for complex state
  or a react-specific need (e.g. Motion).

Confirm regardless of what you infer.

## Build the template

Invoke `template` (build mode): copy the bundled Astro scaffold into the folder,
`npm install`, adapt `theme.css` to the repo's styling. Always gitignore
`dist/` and `node_modules/` (independent of folderPolicy, which governs source).

## Optional

Offer to set up a repo `persona.md` (ship the caveman default; write that repo's
skills terse).

## Write config

`.house-rules/house-rules.config.json` (known filename = how skills detect init):

```json
{
  "folder": ".house-rules/",
  "folderPolicy": "commit",
  "workCommit": "ask"
}
```

Then resume the work that triggered init.
