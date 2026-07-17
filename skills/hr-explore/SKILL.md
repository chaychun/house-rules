---
name: hr-explore
description: Use when visual or UX direction is genuinely uncertain — mock and compare interactive concepts in the real codebase before committing to a design. Only with user confirmation; not for routine UI tweaks or precise execution requests.
---

# hr-explore

Playing surface for "don't know what to build yet" visual/UX work. Routine UI
tweaks belong in hr-design, not here.

**Entry:** from hr-design (or user request), with explicit confirmation.

## Location — always confirm

Prototype in the **real codebase** — real components, styles, routing. Infer
where scratch work fits from repo conventions; propose a path; **user must
confirm** before writing. No default scratch directory. Stamp **`created`** in
a comment or header on scratch entry points; **`updated`** when revisiting.

Ask: keep, promote, or delete scratch when done.

## Stack

Use whatever the repo already uses. Confirm if unclear.

## Mode — user chooses

- (a) Single starting point → iterate on feedback.
- (b) N candidate directions → user picks → iterate on the winner.

Propose which fits; let the user choose.

## Candidates via subagents

1. Surface directions to the user first — settles count.
2. One subagent per direction; each builds a standalone variant in the confirmed
   scratch area.
3. Main agent lightly tweaks on return.

Only deliberate, user-confirmed fan-out — never automatic parallelism.

## Working

Pseudo code OK for UI/state structure. Agent never self-tests UI — user runs the
app. Chosen direction feeds back into hr-design (chat or optional write-up per
user).
