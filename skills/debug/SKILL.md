---
name: debug
description: Use on any bug, test failure, or unexpected behavior — including during the post-implementation feedback loop — before settling on a fix.
---

# debug

Find the real cause; don't thrash. But don't over-process simple issues either.

**Entry:** a standalone bug, or handed off from `implement`'s feedback loop.

## The gate is soft, not iron

If you have a strong hypothesis or a good direct reason, **propose a quick fix
first** — confirm with the user, then try it. If it fails, revert and fall back
to the full loop. Otherwise, go root-cause-first. This keeps debug useful for
both one-line typos and deep bugs.

## Phases — adaptive guidelines, not a rigid procedure

1. **Root cause.** Read errors/traces fully. Reproduce by **guiding the user** to
   replicate and copy logs back — no browser automation. Check recent changes.
   Instrument normally-invisible surfaces (APIs, internals not wired to the
   frontend) with throwaway scripts / debug logging. Trace the data flow backward
   to the source. See `reference/root-cause-tracing.md`.
2. **Pattern.** Find working examples; read the reference fully; list the
   differences.
3. **Hypothesis → test.** State one hypothesis. Pick a test form — throwaway
   script, logging, or user-driven repro (flexible). Test minimally; verify or
   form a new hypothesis (don't stack fixes).
4. **Fix.** Fix the root cause, not the symptom. Add validation proportionally
   where it's worth it — see `reference/defense-in-depth.md`. If 3+ fixes fail,
   stop and question the architecture with the user.

For flaky timing, prefer waiting on a real condition over an arbitrary sleep —
see `reference/condition-waiting.md`.

**Keep the user in the loop with context** so they can form their own hypothesis
and diagnosis too. Testing here is flexible: unit tests are for regression, not
the primary debug tool.
