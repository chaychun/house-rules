---
name: review-behavior
description: Check an implementation against behavior actually confirmed by the human, either as the main agent's focused check or an independent review assignment. Find material matches, mismatches, omissions, and unplanned behavior without inventing requirements or changing code.
---

# Review behavior

Obtain the implementation scope and the confirmed behavior from the main thread, an accessible prior conversation, or an explicitly identified source. Do not promote an agent's suggestion, draft, test title, or later implementation choice into a human-approved requirement. Ask the main agent when a decision or scope is genuinely unavailable.

Trace primary flows and consequential constraints through production code. Compare both directions: what was agreed versus what exists, and observable changes without an agreed basis. Inspect affected boundaries and focused checks where they add evidence, but do not infer runtime success from static inspection or a mocked test. Keep the review proportional: prioritize likely, high-impact, or explicitly agreed cases over contrived edges or unrelated pre-existing issues.

Report material matches and gaps with citations to the agreement and code; distinguish demonstrated behavior, code that appears to match but was not exercised, mismatch, missing behavior, unplanned behavior, and credible questions neither plan nor code resolves. For a main agent, use findings to steer work continuously. For an independent reviewer, return findings to the main agent, not a rewritten product contract. Do not fix code as part of the review.
