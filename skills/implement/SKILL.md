---
name: implement
description: Use when a piece's plan exists or is approved and needs building. Real code now.
---

# implement

Build an approved plan. Real code.

**Dep check:** no `plan.mdx` for the piece → `plan`.

## Per-piece cycle

1. **Assess** the nature of the work.
2. **Decide how** — a rigor mode (`direct` / `tdd` / mix).
3. **Confirm the approach with the user — once per plan.** Mix-and-match per task
   if needed; it isn't locked. The user confirms the *approach*, never the steps.
4. **Load** the chosen mode from `reference/` and implement.

Create tasks — these are the visible surface; the user sees tasks and confirms
the approach. Implementation **steps stay hidden** — not the user's concern.

## Rules

- **Grounded in real code.** Verify APIs, read docs aggressively. Never assume a
  shape — check it.
- **UI:** the design is already settled in the spec/plan → just implement it, no
  hand-holding → iterate on feedback. Never self-test UI (no running,
  screenshotting, eyeballing). Never run the real app's dev/build without
  explicit user confirmation.
- **Verification is proportional and adaptive — not an iron law.** First round,
  self-verify (except UI). Testing is flexible (see `debug` and the testing
  approach): throwaway scripts/logging are fine; unit tests are for regression.
- **Iterate on feedback** after the first round — normal interactive flow, on
  demand. Clean result → done, no forced iteration.
- A bug or unexpected behavior → invoke `debug`.
- **Commits:** code per `workCommit` policy; docs per `folderPolicy`. Never commit
  unless the policy allows it.

Subagent-driven mode is intentionally deferred — add later after real use.
