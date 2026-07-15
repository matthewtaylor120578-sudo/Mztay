# Installing the Lusha skill in your local repo

This folder is a self-contained Claude Code skill. Copying it into a repo (or your global skills folder) teaches any Claude Code session there how P&C Partners uses Lusha.

## Where to put it

| Option | Path | Effect |
|---|---|---|
| Project skill (recommended) | `<your-os-repo>/.claude/skills/lusha/` | Available in sessions started inside that repo |
| Global skill | `~/.claude/skills/lusha/` | Available in every Claude Code session on the Mac |

## Copy commands

Run these in any terminal on the Mac. They do not touch running Claude Code sessions, so the tasks already in flight keep working; new sessions pick the skill up automatically.

```bash
cd /tmp
git clone --depth 1 --branch claude/lusha-integration-docs-7htnm5 \
  https://github.com/matthewtaylor120578-sudo/Mztay.git lusha-skill-tmp

# Project install: replace the path with your operating-system repo
mkdir -p /path/to/your-os-repo/.claude/skills
cp -R lusha-skill-tmp/.claude/skills/lusha /path/to/your-os-repo/.claude/skills/

rm -rf /tmp/lusha-skill-tmp
```

For a global install, swap the two `cp` target lines for:

```bash
mkdir -p ~/.claude/skills
cp -R lusha-skill-tmp/.claude/skills/lusha ~/.claude/skills/
```

If this branch has been merged by the time you copy, clone `main` instead and the same paths apply.

## Verify it loaded

Start a new Claude Code session in the target repo and ask something like "build me a Lusha candidate longlist for a CFO search". Claude should reference this skill's playbooks. You can also confirm the files landed with:

```bash
ls /path/to/your-os-repo/.claude/skills/lusha
```

## Contents

```
SKILL.md                      Entry point: when to use, decision gate, ground rules
references/platform-map.md    The Lusha dashboard mapped screen by screen
references/api.md             The v3 REST API catalogue mapped to P&C playbooks
references/mcp.md             Hosted MCP server setup for Claude and other clients
references/list-building.md   Candidate longlist and client/BD list playbooks
references/data-handling.md   CSV schemas, dedupe, credits, AU compliance, storage
INSTALL.md                    This file
```
