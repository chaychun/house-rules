---
name: test-with-human
description: Run an interactive development manual test session in the main thread after implementation is ready for human exercise. Present one action with its immediate expected observation, collect feedback, and coordinate fixes without delegating the conversation. Not for realistic-data testing in beta, preview, or production.
---

# Test with human

The main agent owns this conversation. This guide is for development feature testing, not realistic-data testing in beta, preview, or production; do not use its seed workflow for those environments. Identify the affected behavior, existing automated evidence, required roles, device or external dependencies, and repository-specific development and data rules. Choose light, standard, or deep coverage based on impact, statefulness, reversibility, and existing confidence; avoid exhaustive theoretical edge cases. Give the human a short scenario overview, not all instructions at once.

## Prepare safely

Prefer existing safe state. If test data is needed, determine the precise target and whether any application, identity, or authentication data must be preserved. Before modifying shared or persistent development data, show what would be deleted, preserved, changed, and created, perform a read-only preview when effects are uncertain or required by repository rules, and obtain explicit confirmation. Never assume beta, preview, production, or shared identity data is disposable.

If temporary seed code is necessary, keep it feature-specific and uncommitted. After use or failure, remove it from both source and the deployed backend when applicable, and verify removal. If cleanup fails, stop and warn that temporary tooling may still be deployed. Follow the repository's approved deployment workflow. Do not begin dependent tests until seeding succeeded and cleanup was verified successful.

## Guide interactively

Present exactly one runnable step per turn, with a starting point and related actions. **Pair every action with what the human should observe immediately afterward**, including meaningful things that must not happen. For example:

1. Open the settings screen. **Expect:** the current preference is visible.
2. Change the preference. **Expect:** the new value appears, without changing other settings.

The example is a format illustration, not a default product requirement. Ask whether the current step passed and what differed; wait before giving the next step. Request screenshots, record IDs, or errors only when needed to resolve a mismatch. Track passed, failed, blocked, unclear, and not-run steps without claiming unseen behavior worked.

When a step fails, capture expected versus actual behavior and reproduction state. Distinguish product defects from setup failures and unclear expectations. Correct an erroneous guide openly and note invalidated results. Keep independent scenarios runnable; give a bounded `debug-and-fix` assignment to a worker when useful, and repeat affected steps after repair. Do not hand the interactive user conversation to a subagent.

At a checkpoint, briefly state what was exercised, unresolved issues, remaining scenarios, and test-data cleanup status. Manual testing is part of the route to shipping, not a declaration that implementation alone finished the work.
