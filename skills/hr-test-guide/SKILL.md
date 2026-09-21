---
name: hr-test-guide
description: >-
  Create and run an interactive manual-testing guide for an implementation.
  Inspect the real code, choose proportional test depth, prepare disposable
  development data when needed, give the human grouped steps with exact
  expected results, track their feedback, and route failures with evidence.
  Use when a user asks how to manually test, QA, exercise, or validate an
  implemented change. Do not use for automated test implementation, behavioral
  conformance review against a specification, or realistic-data testing in
  beta, preview, or production environments.
---

# hr-test-guide

Turn an implementation into a proportional, reproducible manual test session.
The human operates the UI. Own the guide, test-data preparation, result ledger,
and failure triage; do not automatically take ownership of fixes.

## Required context

Establish the implementation scope from the context: current branch changes,
PR, commit, named files, or feature area. Read any relevant confirmed plan or
acceptance criteria when available, but do not require a formal specification.
Ask one focused question if the implementation scope cannot be determined.

Before acting, read repository instructions and inspect the actual development,
deployment, authentication, schema, and data tooling. Never assume that a seed
or reset mechanism exists.

## 1. Inspect the implementation

Trace externally observable behavior through production code. Inspect existing
automated tests as supporting evidence and to avoid wasting the human's time on
checks better proven automatically. Identify:

- primary user flows and affected roles;
- preconditions, permissions, feature flags, and external dependencies;
- common variants and directly affected boundaries;
- empty, validation, error, persistence, and recovery states implicated by the
  change;
- high-impact regressions that manual interaction can reveal.

Do not generate an exhaustive inventory of theoretical edge cases. Include an
edge case only when it is reasonably likely, directly affected by the change,
high impact, or needed for confidence in a primary flow.

## 2. Choose test depth

Choose depth before enumerating scenarios:

- **Light** — localized, low-risk, and readily reversible. Cover one primary
  flow and the most likely regression.
- **Standard** — meaningful user-facing behavior. Cover primary flows, common
  variants, and directly affected boundaries.
- **Deep** — destructive, permission-sensitive, stateful, migration-related,
  difficult to reverse, broadly used, or otherwise high impact. Add relevant
  recovery, state-transition, and cross-role coverage.

Base depth on change size, affected users, reversibility, statefulness, failure
impact, and confidence from automated coverage—not on how many cases can be
imagined. State the selected depth and a short rationale. Let the user request
broader or narrower coverage.

## 3. Design disposable test data

Create the smallest deterministic dataset that supports the selected scenarios
and allows setup to be reused. Follow repository-specific preservation rules.
Before any write, present a seed manifest containing:

- the exact target environment or deployment;
- data that will be deleted, replaced, updated, and created;
- data and identity/authentication records that must be preserved;
- the resulting users, roles, relationships, and scenario states;
- known assumptions and possible partial-failure effects.

Development application data may be disposable, but never infer permission to
replace it. Ask the user to confirm the target and that the described data may
be replaced or left partially inconsistent. Refuse an ambiguous target. Never
infer that production, beta, preview, shared, or persistent identity and
authentication data is disposable.

### Temporary seed code

When repository-supported permanent seed tooling does not fit the scenarios,
create narrowly scoped, feature-specific temporary seed code. It exists only to
prepare this test session:

- do not commit it;
- do not create a reusable seed framework;
- do not retain it for later work;
- do not overwrite or remove unrelated working-tree changes;
- use only the repository's approved development and deployment workflow.

Assess whether a dry run is warranted based on target certainty, deletion
breadth, preservation requirements, reversibility, and data stakes. When it is
warranted, first run a read-only preview that reports what would be deleted,
preserved, changed, and created. Show the result and obtain confirmation before
applying it. A dry run is optional only when the target and effects are certain
and the affected data is clearly disposable and low risk.

After confirmation, deploy and invoke the temporary seed operation, then verify
the resulting state. Cleanup is unconditional, whether application succeeds or
fails:

1. Capture success or failure evidence and any partial data modifications.
2. Remove only the temporary seed code created for this session.
3. Redeploy its removal so the operation is absent from source and the active
   backend.
4. Verify and report cleanup. If cleanup fails, stop and warn the user that
   destructive tooling may remain deployed.

Do not begin manual testing until successful seeding and cleanup are confirmed.

## 4. Present the manual guide

Order scenarios to reuse setup and keep independent checks runnable after a
failure. Group related interactions sensibly; do not turn every click or field
entry into a separate verbose step.

For each scenario provide:

- **Purpose** — behavior and risk being checked.
- **Starting state** — actor, role, page, and required records.
- **Actions** — concise, ordered groups of user actions.
- **Expected result** — exact visible result and relevant persisted or
  cross-session effect.
- **Absence checks** — meaningful things that must not occur, such as duplicate
  records, stale state, extra notifications, or unauthorized access.
- **Failure evidence** — what the user should capture when actual behavior
  differs, such as visible text, record identity, timestamp, screenshot, or
  console/network error when relevant.

Do not claim that an unperformed scenario passed. End the initial guide with a
compact scenario checklist.

## 5. Run the feedback loop

As the user reports results, maintain a ledger with each scenario marked:

- **Passed**
- **Failed**
- **Blocked**
- **Unclear**
- **Not run**

For a failure, capture the scenario, expected result, actual result,
reproduction state, and evidence. Classify it as one of:

- likely product defect;
- test-data or environment setup problem;
- unclear expectation;
- inconclusive result.

Update blocked dependencies, then continue with independent scenarios. If the
setup or guide was wrong, correct it explicitly and explain which prior results
are invalidated. Ask one focused follow-up at a time when evidence is missing.

## 6. Route failures

Triage and preserve evidence; do not silently switch from testing to fixing.

- In a review subthread, report the finding to the parent or main agent and
  recommend that it delegate diagnosis or repair.
- In a main thread, offer to spawn a fixing subagent when delegation is
  appropriate.
- For deferred or cross-session work, ask whether to write a durable report and
  agree on its location before creating it.
- Fix directly only when the issue is small, the current agent owns the
  implementation, and the user approves the transition.

Whoever diagnoses an unexpected result must use `hr-debug`. Include the test
scenario and captured evidence in the handoff. Keep the guide usable while a
fix is pending, and rerun affected scenarios after the fix when requested.

## Completion

Conclude with:

- selected depth and scenarios run;
- pass, fail, blocked, unclear, and not-run counts;
- unresolved findings and where they were routed;
- test-data and temporary-seed cleanup status;
- limits of the manual session.
