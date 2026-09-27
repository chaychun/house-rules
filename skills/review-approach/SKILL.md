---
name: review-approach
description: Inspect implementation choices for consequential shortcuts, loopholes, and brittle workarounds as the main agent or an independent reviewer. Compare with repository conventions and reliable documented paths; report actionable risks, not style preferences.
---

# Review approach

Read the agreed direction and the changed code, then follow consequential paths far enough to understand why each choice was made. Check whether the implementation bypasses a documented capability, duplicates a framework or platform contract, relies on fragile timing or mocks, or creates hidden costs that a more established path would avoid. Verify alternatives against current documentation and this repository rather than invoking vague "best practices."

For each actionable finding, explain the concrete code path, failure mode or maintenance cost, likelihood and impact, and an applicable better path. Distinguish an agreed intentional tradeoff from an unauthorized shortcut. Do not demand abstraction, refactoring, or hardening merely because a solution is custom or unfamiliar. If the choice depends on an unresolved product decision, ask the main agent rather than treating your preference as the contract.

The main agent may apply this lens while workers are active or ask an independent reviewer to do a deeper pass. Return findings to the main agent; this is a read-only review, not permission to rewrite the implementation.
