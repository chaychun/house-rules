---
name: explore-directions
description: Use in the main thread when distinct visual or interaction directions should be made tangible for the human to compare. Frame the question, delegate separate variants with build-variant, and discuss their merits; use before or during design or guided iteration, not for routine UI tweaks.
---

# Explore directions

Keep discovery in the main thread to small, bounded reads. Narrow paths, symbols, fields, and result counts before requesting code, searches, logs, history, documentation, or API output; delegate large or unbounded inspection to a small research/scout subagent. Require workers to narrow reads too, broaden only when needed, and return concise findings with locations rather than dumps. Keep the main context for comparison and decisions, not bulk discovery.

Use when the human benefits from seeing alternatives in the real product surface, not merely different wording for the same design. Agree on the question being explored, the candidate directions, and the scratch location before changes are made. Respect the repository's rules for development-only UI and do not start a build, server, or device workflow without the required permission.

Brief each worker on one distinguishable direction and ask it to use `build-variant`. Isolate variants so they can be compared without overwriting each other or shipping accidentally. Fan out only when alternatives are independent; otherwise iterate with the human in the main thread. Bring back the actual variants, what each tests, and their tradeoffs. Let the human select a direction, combine elements, or reject all of them. Then ask whether scratch should be kept, promoted, or removed; never silently ship a prototype.

This skill coordinates exploration, not the feature's entire implementation. The main agent remains responsible for the conversation and any later design decision.
