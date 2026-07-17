# defense in depth

Guideline, adapt to the problem — not a fixed number of layers.

After fixing a bug caused by bad data/state, consider adding a guard or two so
the same class of bug can't silently return. Validate where it's worth
validating — not everywhere by rote.

Candidate layers (pick what fits, don't add all four by default):
- Entry-point validation — reject obviously invalid input at the boundary.
- Business-logic check — ensure the data makes sense for this operation.
- Environment guard — refuse a dangerous operation in a context where it must
  never run.
- Debug instrumentation — leave a log that makes a future recurrence obvious.

Proportional: one good guard at the source often beats four ceremonial ones. Add
more only when the failure mode is genuinely costly or easy to reintroduce.
