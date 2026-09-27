# House Rules

Nine skills for working with one main agent through a feature or fix, from design
and implementation to human testing and the next steps toward shipping. Install
through the Codex or Claude Code marketplace, or copy the skills into another
agent. The plugin packages skills only: no session hooks, persona, MCP servers,
or global instruction changes.

The main thread holds decisions and feedback; design documents and fixed phases
are not required. The human approves consequential direction, and the agent
chooses how much research, delegation, verification, or review the work needs.

## Skills

| Skill | Who uses it | When |
| --- | --- | --- |
| `main-thread` | Main agent | Own design, guided or delegated implementation, ongoing oversight, and the route to shipping |
| `architecture-research` | Research subagent | Investigate a bounded technical choice, read-only |
| `explore-directions` | Main agent | Coordinate distinct visual or interaction alternatives |
| `build-variant` | Variant subagent | Build one isolated design alternative |
| `implement-assignment` | Build subagent | Implement and verify a bounded outcome |
| `debug-and-fix` | Fix subagent | Diagnose and repair an observed failure |
| `review-behavior` | Main agent or reviewer | Compare code with human-confirmed behavior |
| `review-approach` | Main agent or reviewer | Find consequential shortcuts and fragile workarounds |
| `test-with-human` | Main agent | Guide an interactive, one-step-at-a-time manual test |

## Install

Codex and Claude Code marketplace installs are the primary paths. Both use the
same nine skills from this repository.

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

Clone or download this repository and copy the nine directories under `skills/`
into the agent's documented skills folder.

### Updating or migrating

Use your host's plugin manager to update a marketplace installation. If moving
from a manual install, first install the plugin, then back up and move the
manual House Rules copies out of folders that the same agent scans, such as
`~/.agents/skills`, `~/.codex/skills`, or `~/.claude/skills`. Keep one
installation per agent; leave unrelated skills alone.

Version 0.5.0 replaces the former `hr-*` skill set with new names and a
main-thread workflow. If you installed skills manually, remove the old
`hr-*` copies; otherwise both generations may be discovered. The plugin
retains its `house-rules@house-rules` identity.

## Usage

Restart your agent or start a new session after installation. Ask for a skill
by name, or let the agent select it from its description. Invocation syntax and
automatic discovery depend on the host.

Start with `main-thread` for end-to-end feature or fix work; it selects the
specialized skills when useful. In guided mode the main agent usually edits
directly. In agentic mode it can brief workers and inspect their changes as
they arrive. No session hook automatically routes requests, and no persona
changes your agent's voice.

## Structure

```text
plugin.json                       # Portable Agent Plugins manifest
.agents/plugins/marketplace.json  # Codex marketplace catalog
.claude-plugin/plugin.json        # Claude compatibility manifest
.claude-plugin/marketplace.json   # Claude marketplace catalog
skills/*/SKILL.md                  # Shared skill definitions
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
