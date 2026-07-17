---
name: hr-debug
description: Use on any bug, test failure, or unexpected behavior — including during the post-implementation feedback loop — before settling on a fix. Do NOT use for open-ended feature design (hr-design) or greenfield implementation (hr-implement).
---

# hr-debug

Find real cause; don't thrash. Don't over-process simple issues either.

**Entry:** standalone bug, or handed off from hr-implement's feedback loop.

## The gate is soft, not iron

Strong hypothesis or obvious fix → **propose quick fix first** — confirm, try.
Fails → revert, full loop. Else root-cause-first. Works for typos and deep bugs.

## Phases — adaptive, not rigid

1. **Root cause.** Read errors/traces fully. Reproduce by **guiding the user** —
   no browser automation. Check recent changes. Instrument with throwaway scripts
   / logging. Trace backward. See `reference/root-cause-tracing.md`.
2. **Pattern.** Working examples; read reference; list differences.
3. **Hypothesis → test.** One hypothesis. Throwaway script, logging, or
   user-driven repro. Test minimally; verify or new hypothesis — don't stack fixes.
4. **Fix.** Root cause, not symptom. Validation proportional — see
   `reference/defense-in-depth.md`. 3+ failed fixes → stop, question architecture
   with user.

Flaky timing → wait on real condition, not arbitrary sleep — see
`reference/condition-waiting.md`.

Keep user in loop with context. Unit tests for regression, not primary debug tool.
