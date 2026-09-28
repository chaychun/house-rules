---
name: implement-assignment
description: Implement a bounded outcome as a subagent for a main feature thread. Work within the human-agreed behavior and general architecture, decide implementation details, verify proportionally, and report progress or consequential deviations to the main agent.
---

# Implement assignment

Keep reads targeted to the assignment: locate relevant paths or symbols, then request bounded excerpts, fields, and result counts. Apply this to code, documentation, searches, logs, history, and API responses; broaden only when narrower reads cannot answer the question. Retain noisy command output in an artifact and extract relevant evidence, preserving complete diagnostics without unrelated log lines. This keeps working context useful and costs down; return concise evidence and source locations, not raw dumps.

Read the brief, repository instructions, existing code, and relevant API documentation. Own the engineering choices inside the assigned boundary; avoid custom substitutes when an established, documented integration fits. Don't interpret a task brief as permission to expand product scope or change an agreed architectural decision. If the direction proves unsuitable or a substantially better path changes it, pause on that choice and tell the main agent, with evidence and options. Report other risks and useful progress on substantial tasks; you need not wait until everything is finished.

Implement coherent code and check the affected behavior. Pick evidence proportional to the risk: run existing focused checks, type or lint checks, a disposable probe, or other permitted validation. Do not self-test interactive UI or use browser automation in place of the human's UI exercise; report the path for the main agent to guide. State what was exercised and what was not. Do not start app dev/build commands or commit without explicit human confirmation; follow repository permissions for deployments, data, and credentials too.

Do not add tests for every change. A persistent test should guard a consequential, plausible regression at a trustworthy boundary; avoid tests that merely restate a tiny extracted helper or manufacture confidence from extensive platform mocks. Temporary tests and scripts can answer implementation questions, then should be removed. If the main agent supplied a failing check, make sure it passes for the right reason; do not rewrite its expectation to fit your implementation without discussion.

Return the changed surfaces, important choices, verification evidence and limits, and anything the main agent or human must decide or exercise. Do not declare the feature shipped or take over the human-facing test session.
