# tdd mode

Test first — but lightly. TDD here is a tool, not a ritual.

- Write a test that fails for the right reason, then make it pass, then clean up.
- "Test" is flexible: a proper unit test when the behavior is worth locking in
  for regression, or a throwaway script / targeted logging when you just need to
  prove the thing works. Don't force a persisted unit test when a script proves
  the point faster.
- One behavior at a time. Verify the failure before implementing, so the test is
  real.
- Unit tests earn their keep as regression guards — keep the ones that protect
  behavior likely to break as the code grows; drop the throwaway ones.

Reach for proper unit tests when: the logic is subtle, the surface is reused, or
the user asks to keep things from breaking later. Otherwise `direct` is fine.
