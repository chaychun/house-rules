# House Rules

Six standalone skills for a human-directed **design → build → verify** loop.
Install through the Codex or Claude Code marketplace, or copy the skills into
another agent. The plugin packages skills only: no session hooks, persona,
MCP servers, or global instruction changes.

You own the designs and decisions. Skills adapt to the problem, verify against
real code, and ask before assuming. Nothing runs end-to-end on its own.

## Skills

| Skill | When |
| --- | --- |
| `hr-design` | Shape intent before open-ended build/change work |
| `hr-explore` | Compare visual/UX directions in the real codebase |
| `hr-implement` | Build an agreed design or execute a precise change |
| `hr-debug` | Diagnose a bug, failure, or unexpected behavior |
| `hr-verify-behavior` | Compare implementation with human-confirmed behavior |
| `hr-test-guide` | Guide a human through proportional manual testing |

## Install

Codex and Claude Code marketplace installs are the primary paths. Both use the
same six skills from this repository.

### Codex CLI

Register the marketplace from your terminal:

```sh
codex plugin marketplace add chaychun/house-rules
codex plugin add house-rules@house-rules
```

Alternatively, after registering the marketplace, enter `/plugins` in Codex
and install **house-rules** from the **house-rules** marketplace. Start a new
session after installation. Use a current Codex CLI with plugin support.

### Claude Code

Run inside Claude Code:

```text
/plugin marketplace add chaychun/house-rules
/plugin install house-rules@house-rules
```

### Other agents — manual

Clone or download this repository and copy the six `skills/hr-*` directories,
including their `reference/` subdirectories, into the agent's documented skills
folder.

### Updating or migrating

Use your host's plugin manager to update a marketplace installation. If moving
from a manual install, first install the plugin, then back up and move the
manual House Rules copies out of folders that the same agent scans, such as
`~/.agents/skills`, `~/.codex/skills`, or `~/.claude/skills`. Keep one
installation per agent; leave unrelated skills alone.

The former `verify-behavior` and `test-guide` skills are now named
`hr-verify-behavior` and `hr-test-guide`. Retire the old names after installing
the replacements.

The Claude plugin keeps its existing `house-rules@house-rules` identity.
Version 0.4.0 replaces the old routing/persona package with skills only; update
the plugin and start a new session to stop loading the old hook.

## Usage

Restart your agent or start a new session after installation. Ask for a skill
by name, or let the agent select it from its description. Invocation syntax and
automatic discovery depend on the host.

Skills are independent: use design, exploration, implementation, debugging,
behavioral verification, or manual testing when needed. No session hook
automatically routes requests, and no persona changes your agent's voice.

## Structure

```text
plugin.json                       # Portable Agent Plugins manifest
.agents/plugins/marketplace.json  # Codex marketplace catalog
.claude-plugin/plugin.json        # Claude compatibility manifest
.claude-plugin/marketplace.json   # Claude marketplace catalog
skills/hr-*/SKILL.md               # Shared skill definitions
skills/hr-*/reference/             # Supporting guidance, where needed
```

The portable [Agent Plugins](https://agent-plugins.org/) package discovers
skills in `skills/`. The marketplace catalogs point at the repository root,
not separate copies. Claude's compatibility manifest mirrors the portable
package identity and version; keep them in sync when releasing.

For local development, register this checkout instead of the GitHub source:
`codex plugin marketplace add /absolute/path/to/house-rules` or
`/plugin marketplace add /absolute/path/to/house-rules` in Claude Code. Then
install `house-rules@house-rules` through the corresponding plugin manager.

## Credits

Built on **[superpowers](https://github.com/obra/superpowers)** by Jesse Vincent
(obra) — the brainstorm → plan → build loop, trimmed and adapted here.

MIT licensed.
