---
name: hr-verify-behavior
description: >-
  Verify that implemented code matches the behavior originally planned and
  confirmed by the human. Use after implementation when asked to verify,
  audit, review, or compare code against a plan, specification, acceptance
  criteria, design, or prior conversation. Report correct matches, incorrect
  matches, planned behavior missing from code, unplanned behavior present in
  code, and possible gaps absent from both plan and code.
---

# hr-verify-behavior

Compare the implementation with the **human-confirmed behavioral contract**.
This is a verification task, not an implementation task: do not change code
unless the human separately asks for fixes.

## Required inputs

You need both:

1. **Implementation scope** — the code to verify. Usually this is the current
   branch's changes against its merge base, but it may be a commit, diff, pull
   request, file set, or feature area.
2. **Behavior source** — where the original, human-confirmed behavior is
   documented. This may be attached context, a plan/spec, acceptance criteria,
   issue, design document, or prior conversation.

Use attached context when it identifies both inputs. Do not ask the human to
repeat information already present or readily available in the stated source.

If either input is absent, ask for it before reviewing. If the inputs are
present but ambiguous, ask only the unresolved question(s):

- “What code should I verify?”
- “Where is the original human-confirmed behavior documented?”

If several documents disagree, or it is unclear which parts were confirmed by
the human, stop and ask which source is authoritative. Do not silently promote
agent suggestions, drafts, inferred intent, or later implementation details
into the behavioral contract.

## Scope and materiality

Keep verification proportional to the current change, its stated scope, and the
purpose of the review. Start with the primary user flows and the behavior the
change is intended to introduce or alter. Follow adjacent code only as far as
needed to determine whether those behaviors work and whether the change creates
a glaring regression.

For a feature implementation pass, optimize for determining whether the feature
works as confirmed without obvious, material problems. Do not turn the review
into a general bug hunt, hardening exercise, architecture audit, or exhaustive
catalog of edge cases.

Report an edge, failure, or boundary scenario only when at least one of these is
true:

- the confirmed contract explicitly requires it;
- it is a common or reasonably likely part of normal use;
- the current change directly touches the risky boundary;
- failure would have high user, data, security, privacy, or operational impact;
- it blocks confidence in a primary flow.

Do not report specialized, contrived, or highly unlikely scenarios with low
impact. Do not surface unrelated pre-existing issues. When a relevant concern is
real but belongs to later robustness work rather than the current feature scope,
label it as optional hardening and keep it out of the conformance verdict unless
it prevents a confirmed behavior from working.

## Verification workflow

### 1. Establish the contract

Read the authoritative behavior source completely enough to preserve context.
Extract an atomic checklist of externally observable behaviors, including when
specified:

- triggers and preconditions;
- normal flows and expected outcomes;
- error, empty, boundary, and recovery flows;
- permissions, validation, state transitions, and side effects;
- persistence, ordering, idempotency, compatibility, and performance
  expectations;
- explicit non-goals and constraints.

Describe each behavior in concise, human-readable language and cite what the
original source says, using a short quote or close paraphrase with its location.
Do not invent behavior IDs. Keep implementation details out of this checklist
unless the plan explicitly makes them part of the required behavior.

### 2. Establish the implementation scope

Determine the exact diff or code surface under review. For branch work, inspect
repository status, branch history, and the diff from the appropriate merge
base; include relevant uncommitted changes unless the human excluded them.
Follow behavior through surrounding code when the diff delegates to or depends
on existing logic.

Record material code behavior that has no corresponding planned behavior. Do
not assume it is acceptable merely because tests cover it.

### 3. Gather evidence

Trace each planned behavior through production code. Inspect tests as
supporting evidence, not as a substitute for reading the implementation.
Run focused, non-destructive checks when practical and allowed by the project:
existing tests, type checks, linters, builds, or a minimal reproduction. You may
create and run a temporary probing script to target specific behavior that is
unclear from static inspection. Keep probes disposable and remove them after
use; do not add or modify long-lived tests as part of verification. Never claim
runtime verification from code inspection alone.

For every conclusion, cite concrete evidence:

- plan/spec section, quote, checklist item, or conversation decision;
- code file and line/symbol;
- test or command and result, when run.

Distinguish these evidence levels:

- **Verified** — directly demonstrated by code plus an appropriate passing
  check, or by decisive static evidence where runtime execution is irrelevant.
- **Implemented, not exercised** — code appears to match, but no suitable check
  demonstrated the behavior.
- **Mismatch** — implementation contradicts or only partially satisfies the
  confirmed behavior.
- **Missing** — no implementation for a planned behavior was found.
- **Unplanned** — implemented observable behavior has no basis in the confirmed
  plan.
- **Possible gap** — neither plan nor code addresses a credible scenario. This
  is a reviewer observation, not a confirmed requirement.
- **Unable to determine** — evidence is insufficient or conflicting. State
  exactly what would resolve it.

Do not infer correctness only from names, comments, test titles, or the
existence of a code path. Check conditions, outputs, state changes, side
effects, and failure handling.

### 4. Compare both directions

Perform both mappings explicitly:

1. **Plan → code:** account for every planned behavior. This finds incorrect,
   partial, and missing implementation.
2. **Code → plan:** account for every externally observable behavior introduced
   or changed by the implementation. This finds unplanned behavior and scope
   expansion.

Then inspect only the boundaries materially affected by the change. Consider
failure recovery, authorization, concurrency, retries, duplicate requests,
empty states, accessibility, observability, migration/rollback, or backward
compatibility when the contract, normal usage, changed code, or potential impact
makes them relevant. Do not produce a generic checklist or report theoretical,
low-severity concerns for specialized cases unlikely to occur.

## Reporting

Lead with the overall conformance result and the highest-impact discrepancies.
Use these sections, even when a section contains “None found”:

### Summary

State whether the implementation fully matches, partially matches, does not
match, or cannot yet be determined. Include the implementation scope, behavior
source, and checks performed.

### Behaviors followed correctly

For each item, briefly quote or closely paraphrase the expected behavior from
the original source, then include implementation evidence, verification
evidence, and confidence/evidence level.

### Behaviors followed incorrectly

Describe the expected behavior, actual behavior, user-visible consequence, and
plan/code evidence. Rank confirmed mismatches by severity.

### Planned behaviors absent from code

List every behavior in the contract for which no implementation was found, with
its plan citation and the code areas inspected.

### Behaviors in code but absent from the plan

List added or changed observable behavior that the confirmed plan does not
justify. Explain impact without automatically labeling it a defect; ask whether
it should be removed or added to the contract when product intent is needed.

### Possible gaps in both plan and code

List only concrete scenarios that are relevant to the changed behavior and are
reasonably likely, materially harmful, or confidence-blocking for a primary
flow. Explain the likelihood and impact, and clearly label each item as a
proposed question or risk rather than an agreed requirement. Omit theoretical,
low-severity, specialized edge cases. If a concern is merely worthwhile future
hardening, say so briefly without treating it as a conformance problem.

### Unable to determine

List unresolved items, missing evidence, and the smallest next step needed to
resolve each one. Omit this section when nothing is unresolved.

## Review rules

- Behavioral conformance within the current change scope is the priority.
  Mention style or architecture only when it changes in-scope behavior, creates
  a material verification risk, or prevents a planned behavior from being
  dependable.
- Weight findings by likelihood, severity, and relevance to the feature's
  primary flows. Lead with glaring issues; omit low-value edge-case noise.
- Do not broaden a feature implementation pass into exhaustive robustness work.
  Separate optional hardening from behavior required for the feature to work.
- Separate facts from inferences. Use precise language such as “the code does,”
  “the plan requires,” and “possible gap.”
- Absence of a failing test does not prove conformance. Absence of a test is not
  itself a behavior mismatch unless the confirmed plan requires that test or
  verification artifact.
- Do not treat unplanned behavior as automatically wrong. Surface it for human
  confirmation and explain its consequences.
- Do not expand the contract while reviewing. New ideas belong only under
  possible gaps.
- If no discrepancy is found, say so directly, but still identify any behavior
  that was not exercised and any limits of the review.
