# direct mode

Just implement. The default when the change is well-understood and the plan is
clear.

- Build the thing per the plan, grounded in real code (verify APIs, read docs).
- Create visible tasks; keep implementation steps to yourself.
- Self-verify the first round proportionally — run it, exercise the path, a
  throwaway script or some logging is often enough. Skip self-testing UI.
- Don't gold-plate. No "while I'm here" refactors unless the plan called for it.
- Hand off, then iterate on the user's feedback.

Use `tdd` instead when the behavior is tricky to get right, easy to regress, or
the user wants a test to lock it in.
