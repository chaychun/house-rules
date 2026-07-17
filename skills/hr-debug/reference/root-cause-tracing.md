# root-cause tracing

Guideline, adapt to the problem — not a fixed procedure.

A bug often shows up far from where it starts. Fixing where the error appears
treats a symptom. Trace backward to where the bad value/state originates, fix
there.

- From the symptom, find the immediate cause — what code directly does this?
- Ask what called it, and with what value. Keep stepping up the chain.
- Stop when you reach the real source, fix there.

When you can't trace by reading, **instrument**: log the suspect value and a
stack capture just before the dangerous operation, run once, read the evidence.
Prefer throwaway scripts/logging on invisible surfaces (APIs, internals not wired
to the frontend), and have the user replicate the action and copy the log back —
it keeps them in the loop to reason alongside you.

Don't over-trace a one-liner. If the source is obvious, fix it and move on.
