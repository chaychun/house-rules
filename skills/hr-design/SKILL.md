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
- **Zero ambiguity.** Never infer unstated intent. Never make things up. Verify
  against reality — read real code, confirm real API shapes, read docs. When
  unsure, ask. (Inferring unstated scope → silent drift → unmaintainable code.)
- **Don't auto-advance.** Stay on a topic until the user signals to move on.
- **Stay terse** (persona).
- **Pseudo code over exact shapes** when showing code — see below.

## Depth — gauge every time

- **Simple / in-the-moment** — resolve in chat; skip write-up unless user asks.
- **Non-trivial** — full design loop; **suggest** a doc at natural stop points if
  it would help. **Always ask before writing** — format, location, persist or not.
  Infer location from repo conventions; user must confirm. Not limited to one
  option — user may want several if they choose.
- Stamp **`created`** on anything new; **`updated`** when editing later.

Two levels of design — same step, different depth. Merge in one pass when the
user wants a single doc or when architecture is already clear from dialogue.
Offer a deeper pass only when it adds value — separate write-up, same rules.

### Conceptual (spec-level)

Shape the **WHAT**: intent, scope, behavior, constraints, tradeoffs. Architecture
only when the piece is architecture-shaped. Enough for the user to approve
direction before code.

### Architecture-in-code (plan-level)

Go here when the user needs to see **how it lands in real code** — not line by
line, but concretely enough to stay in control. Same loop as conceptual, run
deeper: explore real code harder, drill integration surfaces, resolve forks
before writing.

**What this depth IS:**
- Surfaces / files / modules touched.
- Architectural pattern — verified against the repo's real conventions.
- Integration surfaces — how pieces talk; contracts/interfaces between them.
- Data flow, expected real-code shape.
- Important snippets / algorithms as **pseudo code** (readable, grounded, fast
  to review).

**What this depth is NOT:**
- Step-by-step implementation tasks.
- Line-by-line code.
- Rigor mode / TDD / commit steps.

Those are hr-implement's call. The user confirms the *approach*, never the
implementation steps.

**When to go architecture-in-code:** integration is non-obvious; many files or
modules; pattern choice matters; user asks "how will this actually work in the
codebase?"; or conceptual design is done but implement would still require big
assumptions. Skip when the change is localized and the shape is obvious from
conceptual design alone.

Conceptual ↔ architecture depth depends on the piece: an architecture-shaped
piece may already cover structure at conceptual level (architecture pass goes
deeper/stricter); a feature piece often defers most structure to the
architecture pass.

## Pseudo code

Default for any code shown during design — in chat or in a write-up.

**Use pseudo code for:**
- Algorithms and control flow the user must approve.
- Integration shapes (who calls whom, data passed, error paths).
- UI/state structure when not handing off to hr-explore.
- Anything in a written doc's code blocks.

**Rules:**
- Readable over compilable — names and structure grounded in the real repo, but
  not exact syntax, imports, or line-by-line implementation.
- Show shape and decisions, not a draft PR.
- Match repo vocabulary (real module/file/type names where known).
- Prefer short illustrative fragments over full files.

**Not pseudo code (wrong layer):**
- Copy-paste-ready implementation → that's hr-implement.
- Vague prose where structure matters → use pseudo code instead.

## The loop

1. **Explore** surfaces + docs — verify real code/APIs.
2. **Propose a light overview** — don't write yet.
3. **User approves** the overview.
4. **Drill into pieces** — resolve decision forks live, one at a time. At
   architecture-in-code depth, drill modules, interfaces, and data flow here.
5. **All clear** → ask if user wants a write-up; if yes, write in their chosen
   form at the depth you reached.

Propose 2–3 approaches with tradeoffs + a recommendation before settling.
Throwaway visualizations mid-walkthrough are fine if they help.

## Self-review (after any draft, inline — not a subagent)

- Placeholder scan (TBD/TODO/vague) → fix.
- Internal consistency (sections don't contradict; architecture matches features).
- Scope — one hr-implement pass worth, or decompose.
- Ambiguity — readable two ways? **Ask the user. Never pick one silently.**
- Inference audit — every statement traces to something the user said/approved.
  Anything you introduced unprompted → flag + confirm, don't keep.
- At architecture-in-code depth: every named surface/file/pattern traceable to
  real repo conventions; no invented APIs.

## Gate + hand-off

Hard stop: present design; get approval before hr-implement. At
architecture-in-code depth, the user should understand how it turns out in real
code — still not line by line.

Hand-off → hr-implement when design is agreed (with or without a written doc).
