---
name: hr-implement
description: Use when design is agreed or the request is precise execution — build or change real code. Includes trivial one-shot edits with a clear target. Do NOT use for open-ended scoping (hr-design) or bugs/failures (hr-debug).
---

# hr-implement

Build from agreed context. Real code.

## Context

Design may live in chat, a user-pointed doc, canvas, artifact, or file. If
scope or approach is unclear → hr-design first. If bug/unexpected behavior →
hr-debug.

## Per-piece cycle

1. **Assess** the nature of the work.
2. **Decide how** — rigor mode (`direct` / `tdd` / mix).
3. **Confirm the approach with the user — once per piece.** Mix-and-match per
   task if needed. User confirms the *approach*, never the steps.
4. **Load** the chosen mode from `reference/` and implement.

Tasks are the visible surface. Implementation steps stay hidden.

## Rules

- **Grounded in real code.** Verify APIs, read docs. Never assume a shape.
- **UI:** design settled → implement, iterate on feedback. Never self-test UI.
  Never run the app's dev/build without explicit user confirmation.
- **Verification is proportional** — self-verify first round (except UI).
  Throwaway scripts/logging fine; unit tests for regression.
- **Iterate on feedback** on demand. Clean result → done.
- Bug or unexpected behavior → hr-debug.
- **Commits:** ask before committing anything (code or docs).

Subagent-driven mode intentionally deferred.
