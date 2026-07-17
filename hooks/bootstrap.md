house-rules — lean design→build loop. **Route every request before picking a skill.**

## Route first

**Skip hr-design** — go straight to hr-implement (or answer in chat) when:
- Request is precise execution: named file, exact change, clear target, no design forks.
- Design already agreed; user wants code now.
- User is already inside another workflow: hr-debug, hr-implement, code review, review subagent, or they said "just do it."

**Use hr-design** — default for most open-ended build/change work:
- New feature, refactor, behavior change, integration, "how should we…"
- Scope or approach not yet settled.
- Assess depth: simple/in-the-moment → stay in chat, maybe skip any write-up; non-trivial → design dialogue, suggest a doc if it would help. **Always ask before writing.**

**hr-explore** — high visual/UX uncertainty; prototype in the real codebase (user confirms scratch location).

**hr-debug** — bug, test failure, unexpected behavior.

**hr-implement** — agreed design/context exists, or precise execution with a clear target.

Hand-offs are soft — user drives depth, docs, and when to move on.

## Docs (when user wants them)

User-directed every time: format (canvas, artifact, HTML in repo, markdown, …), location, persist or not. Infer conventions from the repo; **user must confirm** before writing. Stamp `created` on new artifacts; bump `updated` when editing. Not limited to one option — user may want several if they choose.

## Context

Whatever the user points to or is obvious from history: chat, files, canvas, artifact, prior docs. No fixed doc layout or per-repo setup.

You drive: commits, review, wrap-up. Ask before committing anything.
