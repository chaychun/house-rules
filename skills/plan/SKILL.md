---
name: plan
description: Use when a piece's spec exists or is approved and needs turning into an architecture-in-code plan before implementing. A deeper, more rigorous pass than the spec.
---

# plan

Turn a spec into exact architecture in code — a deeper version of the spec. The
user must understand exactly how it will turn out in real code (not line by
line), and stay in control of the design.

**Dep check:** no config → `init`; no `spec.mdx` for the piece → `brainstorm`.

## What a plan IS

- Surfaces / files / modules touched.
- Architectural pattern — verified against the repo's real conventions.
- Integration surfaces — how the pieces talk, the contracts/interfaces between them.
- Data flow, expected real-code shape.
- Important snippets / algorithms as **pseudo code** (readable, grounded, fast
  to review).

## What a plan is NOT

- Step-by-step implementation tasks.
- Line-by-line code.
- Rigor / TDD / commit steps.

Those are the implementing agent's call. The user never confirms implementation
steps — not their concern.

Spec ↔ plan depends on the piece: an architecture piece already did some
architecture in the spec (plan goes deeper/stricter); a design/feature piece
defers most architecture to the plan.

## The loop (same engine as brainstorm, run deeper)

1. Explore real code + docs — verify, never assume APIs.
2. Propose a light overview — don't write the doc yet.
3. User approves.
4. Drill into pieces — resolve forks live, one at a time.
5. All clear → write the plan.

Principles: one question at a time inline (never AskUserQuestion); zero
ambiguity (verify real code/APIs, read docs aggressively, never invent scope,
ask); don't auto-advance; stay terse. Throwaway mdx visualizations mid-walkthrough
are fine.

## Self-review

Same as brainstorm: placeholder · consistency · scope · ambiguity → **ask, don't
pick** · inference audit.

## Gate + output

Hard stop: the user walks and approves the whole plan before any implementing.

Write to the piece folder `plan.mdx` via `template`; open it for the user.
Commit per `folderPolicy`. Hand-off → `implement`.
