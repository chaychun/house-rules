---
name: hr-design
description: Default for most work before code — use when the user wants something built, added, changed, refactored, integrated, improved, or figured out; when they describe a goal, feature, or problem without an exact edit target; when scope, approach, or tradeoffs are open; when they ask how to do something or what the right approach is; or at the start of non-trivial feature work. Assess depth — simple cases stay in chat or hand off to hr-implement; suggest a write-up only when it would help, always ask first. Do NOT use for precise execution (named file, exact change, "change X to Y", single obvious fix); when design is already agreed and they want code now; when already inside hr-debug, hr-implement, code review, a review subagent, or another dedicated workflow; or when the user said "just do it" / "implement the plan".
---

# hr-design

Shape intent together. Dialogue is the point — don't rush to writing. Touches no
code unless handing off to hr-explore (scratch prototypes).

## Working context

Confirm what this builds on: user-pointed reference or obvious from history
(chat, files, canvas, artifact, prior docs). If unclear, ask once.

## Route (before design dialogue)

If request is precise execution or user said "just do it" → hand off to
hr-implement; don't run design loop.

If visual/UX is genuinely unknown (not routine UI tweaks) → propose hr-explore;
confirm before entering.

## Core principles

- **One question at a time, inline in chat.** Never the AskUserQuestion tool.
- **Zero ambiguity.** Never infer unstated intent. Verify against real code, API
  shapes, docs. When unsure, ask.
- **Don't auto-advance.** Stay on a topic until the user signals to move on.
- **Stay terse** (persona).
- **Pseudo code over exact shapes** when showing code.

## Depth

Gauge complexity each time:
- **Simple / in-the-moment** — resolve in chat; skip write-up unless user asks.
- **Non-trivial** — full design loop; **suggest** a doc at natural stop points if
  it would help. **Always ask before writing** — format, location, persist or not.
  Infer location from repo conventions; user must confirm. Not limited to one
  option — user may want several if they choose.
- Stamp **`created`** on anything new; **`updated`** when editing later.

Spec-level and plan-level depth can merge in one pass when the user wants a
single design doc or when architecture is already clear from dialogue. Offer a
deeper architecture pass only when it adds value — separate write-up, same rules.

## The loop

1. Explore surfaces + docs — verify real code/APIs.
2. Propose a light overview — don't write yet.
3. User approves the overview.
4. Drill into pieces — resolve forks live, one at a time.
5. All clear → ask if user wants a write-up; if yes, write in their chosen form.

Propose 2–3 approaches with tradeoffs + a recommendation before settling.
Throwaway visualizations mid-walkthrough are fine if they help.

## Self-review (after any draft, inline — not a subagent)

- Placeholder scan (TBD/TODO/vague) → fix.
- Internal consistency.
- Scope — one implement pass worth, or decompose.
- Ambiguity — readable two ways? **Ask. Never pick silently.**
- Inference audit — every statement traces to user input/approval.

## Gate + hand-off

Hard stop: present design; get approval before hr-implement.

Hand-off → hr-implement when design is agreed (with or without a written doc).
