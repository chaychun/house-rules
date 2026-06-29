---
name: brainstorm
description: Use when the user wants to build or change something and the idea is not yet a spec. Collaborative dialogue that shapes intent into a design spec. Touches no code.
---

# brainstorm

Shape an idea into a design spec, together. This dialogue is the point — don't
rush to writing. Touches no code.

**Dep check:** no `.house-rules/house-rules.config.json` → run `init` first.

## Core principles

- **One question at a time, inline in chat.** Never the AskUserQuestion tool.
- **Zero ambiguity.** Never infer unstated intent. Never make things up. Verify
  against reality — read real code, confirm real API shapes, read docs. When
  unsure, ask. (Inferring unstated scope → silent drift → unmaintainable code.)
- **Don't auto-advance.** Stay on a topic until the user signals to move on.
- **Stay terse** (persona) — caveman is the clear mode for design dialogue too.
- **Pseudo code over exact shapes** when showing code.

## The loop

1. **Explore** surfaces + docs — verify real code/APIs.
2. **Propose a light overview** — don't write the doc yet.
3. **User approves** the overview.
4. **Drill into pieces** — resolve decision forks live, one at a time.
5. **All clear → write the spec.**

Propose 2-3 approaches with tradeoffs + a recommendation before settling. Use
throwaway mdx visualizations mid-walkthrough if they help (may seed the final
doc). For high visual/UX uncertainty, propose `explore` — confirm before entering.

Spec = conceptual WHAT (plus architecture if it's an architecture-shaped piece).

## Self-review (after a draft, inline — not a subagent)

- Placeholder scan (TBD/TODO/vague) → fix.
- Internal consistency (sections don't contradict; architecture matches features).
- Scope — one plan's worth, or decompose.
- Ambiguity — readable two ways? **Ask the user. Never pick one silently.**
- Inference audit — every statement traces to something the user said/approved.
  Anything you introduced unprompted → flag + confirm, don't keep.

## Gate + output

Hard stop: present the design and get approval before writing the spec.

Write to `.house-rules/src/content/YYYY-MM-DD-<topic>/spec.mdx` via `template`,
then open it for the user (dev server). Commit per `folderPolicy`.

Hand-off → `plan`.
