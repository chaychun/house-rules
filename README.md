# House Rules

An opinionated, lean **design → build** loop for Claude Code. Born from a personal philosophy for working with coding agents:

- **You stay in control, every step of the way.** No parallel agents. No autonomous end-to-end driver. You own designs and decisions.
- **Agents can do the work right — make them do the right work.** Zero ambiguity. Never infer unstated intent; verify against real code; ask.
- **Rigidity is expensive.** With you at the helm, agents stay flexible. No hard end-to-end flows — everything adapts to the problem.
- **Readability matters.** Docs use whatever your harness supports (canvas, artifacts, HTML, markdown). Pseudo-code over exact snippets when designing.

## Main features

- **Session bootstrap routing.** A light hook on every session tells the agent how to route requests — most open-ended work starts with design; precise execution skips straight to implement.
- **Five small skills** (`hr-design`, `hr-explore`, `hr-implement`, `hr-debug`) that hand off softly. You drive depth — sometimes chat only, sometimes a written doc, sometimes straight to code.
- **Zero-ambiguity by design.** Design dialogue verifies real code and APIs before implementation.
- **Harness-native docs on demand.** When you want a write-up, you pick format and location at that moment. Nothing installed per repo.
- **Customizable persona.** Terse caveman wording built in; say `stop caveman` / `normal mode` to disable for the session.

## The loop

```
design → (explore?) → implement ⇄ debug → you integrate
```

| Skill | When |
| --- | --- |
| `hr-design` | most build/change work; shape intent before code |
| `hr-explore` | mock visual/UX unknowns in the real codebase |
| `hr-implement` | agreed design or precise execution |
| `hr-debug` | bug, failure, or unexpected behavior |

Routing guidance is injected every session via the SessionStart hook — no init step, no per-repo setup.

## Install

```bash
/plugin marketplace add chaychun/house-rules
/plugin install house-rules@house-rules
```

## Usage

Use Claude Code like normal. The bootstrap hook routes each request; skills activate when the work fits. Docs are optional and user-directed — ask format and location when you want something written down.

The persona is active by default. To opt out for the session: `stop caveman` / `normal mode`.

## Structure

```
.claude-plugin/plugin.json        # name + SessionStart hook
.claude-plugin/marketplace.json   # catalog
hooks/session-start               # injects bootstrap + persona
hooks/bootstrap.md                # routing map (thin entry)
persona.md                        # terse persona
skills/hr-*/SKILL.md              # design, explore, implement, debug
```

## Credits

Built on two prior works:

- **[superpowers](https://github.com/obra/superpowers)** by Jesse Vincent (obra) — the design → build loop, trimmed and adapted here.
- **[caveman](https://github.com/JuliusBrussee/caveman)** by Julius Brussee — the terse persona is adapted from caveman ultra.

MIT licensed.
