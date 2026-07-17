# House Rules

An opinionated, lean **design → build** loop for Claude Code. This plugin is born from some of my personal philosophy for working with coding agents and generative AI:
- **You say in control, every step of the way**. No parallel agents. No autonomous end-to-end driver. You own all the designs and decisions, with full knowledge of everything being built. Prefer controlled iteration over agentic autonomy.
- **Agents can do the work right, make them do the right work**. Zero ambiguity. Never infer unstated intent; verify against real code; ask. Absolute clarity on every edge before touching code.
- **Rigidity is expensive and time-consuming**. With the user at the helm, agents can afford to be more flexible. No hard rules, strict end-to-end flows. Everything adapts to the problem.
- **Readability is key to understanding**. Docs use whatever your harness supports (canvas, artifacts, HTML, markdown). Pseudo-code over exact snippets.

## Main Features
- **A guided design → build loop**. Four small skills (`hr-design`, `hr-explore`, `hr-implement`, `hr-debug`) that hand off to each other. You invoke each step deliberately — nothing runs end-to-end on its own. A session bootstrap hook routes most open-ended work through design; precise execution skips straight to implement.
- **Zero-ambiguity by design**. Skills shape intent before code, asking before they assume. Intent is verified against real code, not inferred.
- **Harness-native docs on demand**. When you want a write-up, you pick format and location at that moment. Agent use native tools to write readable (and potentially interactive) docs when needed, or fallback to plain old markdown. 
- **Customizable persona**. Terse wording built-in, customize to your preferences.


## The loop

```
design → (explore?) → implement ⇄ debug → you integrate
```

| Skill | When |
| --- | --- |
| `hr-design` | most build/change work; shape intent before code |
| `hr-explore` | mock visual/UX unknowns in the real codebase |
| `hr-implement` | agreed design or precise execution |
| `hr-debug` | a bug, failure, or unexpected behavior |

## Install

```bash
/plugin marketplace add chaychun/house-rules
/plugin install house-rules@house-rules
```

## Usage

Just use Claude Code like normal. A bootstrap hook injected every session routes each request; skills auto-activate when the work fits. Docs are optional and user-directed — ask format and location when you want something written down.

The persona is active by default, injected into every session. To opt out of the persona for the session, say something like `stop persona` / `normal mode`.

## Structure

```
.claude-plugin/plugin.json        # name + SessionStart hook
.claude-plugin/marketplace.json   # catalog: this repo as its own plugin
hooks/session-start          # injects bootstrap (loop map + persona)
hooks/bootstrap.md           # the injected loop map + skill guidance
persona.md                   # the terse persona (source of truth)
skills/hr-*/SKILL.md        # design, explore, implement, debug
```

## Credits

Built on two prior works:

- **[superpowers](https://github.com/obra/superpowers)** by Jesse Vincent (obra) — the brainstorm → plan → build loop, trimmed and adapted into the skills here.
- **[caveman](https://github.com/JuliusBrussee/caveman)** by Julius Brussee — the terse persona is adapted from caveman ultra.

MIT licensed.
