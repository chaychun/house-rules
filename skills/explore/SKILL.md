---
name: explore
description: Use during brainstorming when there is high visual/UX uncertainty — you need to mock and compare interactive concepts before committing them to a spec. Invoked with the user's confirmation. Not for routine UI tweaks.
---

# explore

A playing surface for genuine "don't even know what to build yet" visual/UX
work. Routine UI tweaks belong in brainstorm/plan, not here.

**Entry:** only via `brainstorm`, with explicit user confirmation.

## Stack — ask, don't default to React

- Repo already uses React → React is fine.
- Else Astro + vanilla JS for simple stuff (keep the docs infra lean).
- React only for a complex state machine or a react-specific need (e.g. Motion).
- **Confirm the stack regardless.** React is on-demand: `npx astro add react`
  then `npm i motion`.

## Mode — adaptive, user chooses

- (a) Single starting point → iterate alongside the user's feedback.
- (b) N candidate directions → user picks → iterate on the liked one.

Propose which fits; let the user choose.

## Candidates via subagents

1. Point out the directions to the user first — this also settles how many.
2. One subagent per direction (give it context); each builds a standalone
   component.
3. Main agent tweaks slightly on return, assembles all into one `.mdx` page.

This is the only place house-rules fans out to subagents: deliberate,
user-confirmed — never automatic parallelism.

## Working

Pseudo code is welcome for showing UI/state structure. View via `astro dev`
(HMR); the agent never self-tests UI — open it for the user. Explorations are
kept in the piece folder under `exploration/`, tracked per `folderPolicy`.

Output: the chosen direction(s) feed back into `brainstorm` → spec.
