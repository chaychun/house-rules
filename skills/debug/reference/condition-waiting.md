# condition-based waiting

Guideline, adapt to the problem.

Flaky behavior often comes from guessing at timing with an arbitrary
`sleep`/`setTimeout`. Wait for the actual condition you care about instead.

- Poll the real thing — state is ready, event arrived, file exists, count
  reached — with a sane interval and a timeout that errors clearly.
- Don't cache the value before the loop; read it fresh each check.

Arbitrary timeouts are fine when you're genuinely testing timed behavior
(debounce/throttle) — wait for the triggering condition first, then the known
interval, and comment why. Reach for this only when timing flakiness actually
bites; most fixes don't need it.
