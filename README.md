# House Rules

An opinionated, lean **brainstorm → plan → build** loop for Claude Code. This plugin is born from some of my personal philosophy for working with coding agents and generative AI:
- **You say in control, every step of the way**. No parallel agents. No autonomous end-to-end driver. You own all the designs and decisions, with full knowledge of everything being built. And prefer controlled iteration over agentic autonomy.
- **Agents can do the work right, make them do the right work**. Zero ambiguity. Never infer unstated intent; verify against real code; ask. Absolute clarity on every edge before touching code.
- **Rigidity is expensive and time-consuming**. With the user at the helm, agents can afford to be more flexible. No hard rules, strict end-to-end flows. Everything adapts to the problem.
- **Readability is key to understanding**. Agents write and read context in markdown, rendered to static HTML for human review. Pseudo-code over exact snippets.

## Main Features
- **A guided brainstorm → plan → build loop**. Seven small skills (`init`, `brainstorm`, `explore`, `plan`, `implement`, `debug`, `template`) that hand off to each other. You invoke each step deliberately — nothing runs end-to-end on its own.
- **Zero-ambiguity by design**. Skills shape an idea into a spec, then a spec into an architecture-in-code plan, asking before they assume. Intent is verified against real code, not inferred.
- **Architecture-in-code planning**. `plan` turns an approved spec into exact, reviewable architecture — a deeper, more rigorous pass than the spec — before any real code is written.
- **Per-repo setup, no guesswork**. `init` lays down `.house-rules/` with commit policies, doc config, and the Astro template, so every later skill knows where things live.
- **Rich, flexible MDX renderer**. Bundled Astro preset for rendering MDX to HTML. Customized to each repo.
- **Customizable persona**. Terse wording built-in, customize to your preferences.


## The loop

```
init → brainstorm → (explore?) → plan → implement ⇄ debug → you integrate
```

| Skill | When |
| --- | --- |
| `init` | no `.house-rules/` config yet, real work starting |
| `brainstorm` | shape an idea into a spec |
| `explore` | mock visual/UX unknowns, interactively |
| `plan` | spec ready → architecture-in-code plan |
| `implement` | build an approved plan |
| `debug` | a bug, failure, or unexpected behavior |
| `template` | write or render a doc |

## Install

```bash
/plugin marketplace add chaychun/house-rules
/plugin install house-rules@house-rules
```

## Usage

On first use, call the `/init` skill to set everything up. This will go over some conventions/customizations and set up the directory for storing everything related to this plugin. You can choose where this lives. The directory is an Astro project that renders specs/plans/explorations as MDX. Agents can write the docs and help you run the dev server to read them.

Otherwise, just use Claude Code like normal. Skills will auto-activate as you work on your project.

The persona is active by default, injected into every session. To opt out of the persona for the session, say something like `stop persona` / `normal mode`.

## Structure

```
.claude-plugin/plugin.json        # name + SessionStart hook
.claude-plugin/marketplace.json   # catalog: this repo as its own plugin
hooks/session-start          # injects bootstrap (loop map + persona)
hooks/bootstrap.md           # the injected loop map + skill guidance
persona.md                   # the terse persona (source of truth)
skills/<verb>/SKILL.md        # init, brainstorm, explore, plan, implement, debug, template
template/                    # bundled Astro doc scaffold (init copies into target repos)
```

## Credits

Built on two prior works:

- **[superpowers](https://github.com/obra/superpowers)** by Jesse Vincent (obra) — the brainstorm → plan → build loop, trimmed and adapted into the seven small skills here.
- **[caveman](https://github.com/JuliusBrussee/caveman)** by Julius Brussee — the terse persona is adapted from caveman ultra.

MIT licensed.
