---
name: debug-and-fix
description: Diagnose and repair an observed bug, test failure, or unexpected result as a bounded subagent assignment. Trace the cause, make a focused fix, check the affected path, and return evidence to the main agent; not for speculative feature work.
---

# Debug and fix

Bound investigation output before reading: select the relevant failure, paths, symbols, time window, fields, or result count across code, searches, logs, history, documentation, and API responses. Preserve the complete relevant diagnostic, not the entire surrounding log. Retain noisy output in an artifact and extract evidence; broaden only when targeted reads cannot establish the cause. Return concise findings with locations rather than transferring the dump to the main agent, keeping both contexts useful and costs down.

Start from the reported symptom and reproduction state. Read the full error and the relevant path; reproduce non-UI failures when safe and permitted. For interactive UI failures, ask the main agent to guide the human through reproduction rather than automating the browser or device yourself. Trace from the visible failure toward the source of bad state rather than patching only the presentation of the error. An obvious cause can justify a quick focused fix; if the hypothesis fails, reassess rather than stacking patches.

Compare working paths and documented behavior before introducing a workaround. Use minimal instrumentation or a disposable probe when reading alone cannot establish the cause; clean it up afterward. For timing failures, wait on an observable condition rather than guessing a delay. Add guards at the right boundary only when they prevent a real recurrence; don't layer checks everywhere by rote.

Verify the repair and relevant regression proportionally, leaving UI exercise to the human. Do not start app dev/build commands or commit without explicit human confirmation. A retained test is useful when it protects behavior likely to regress, not simply because a failure occurred. Escalate if the root cause requires a change to agreed behavior or architecture, a risky operation, or unresolved human interaction. Return the cause, fix, evidence, remaining uncertainty, and whether the main agent should repeat a manual test step. Do not silently broaden the assignment.
