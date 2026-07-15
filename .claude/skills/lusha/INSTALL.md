# Installing the Lusha skill in your local repo

This folder is a self-contained Claude Code skill. Copying it into a repo (or your global skills folder) teaches any Claude Code session there how P&C Partners uses Lusha.

## Where to put it

| Option | Path | Effect |
|---|---|---|
| Project skill (recommended) | `<your-os-repo>/.claude/skills/lusha/` | Available in sessions started inside that repo |
| Global skill | `~/.claude/skills/lusha/` | Available in every Claude Code session on the Mac |

## Copy commands, step by step

Do this on the Mac in a fresh Terminal window: press Cmd+Space, type Terminal, press Enter. A new window never disturbs Claude Code sessions running in other windows, and skills only load when a new session starts.

1. Point the terminal at the target repo: type `cd ` (with the trailing space), drag the repo folder from Finder onto the Terminal window so its path appears, then press Enter.
2. Paste this whole block (Cmd+V) and press Enter. It downloads the branch to a temporary folder, copies the skill into the repo you are standing in, cleans up, and shows the result:

```bash
git clone --depth 1 --branch claude/lusha-integration-docs-7htnm5 \
  https://github.com/matthewtaylor120578-sudo/Mztay.git /tmp/lusha-skill-tmp
mkdir -p .claude/skills
cp -R /tmp/lusha-skill-tmp/.claude/skills/lusha .claude/skills/
rm -rf /tmp/lusha-skill-tmp
ls .claude/skills/lusha
```

3. Success prints `INSTALL.md  SKILL.md  references`.

For a global install instead (every project on the Mac), skip step 1 and swap the `mkdir` and `cp` lines for:

```bash
mkdir -p ~/.claude/skills
cp -R /tmp/lusha-skill-tmp/.claude/skills/lusha ~/.claude/skills/
```

If the clone asks for a username or password the machine does not have, delegate instead: open a fresh Claude Code session inside the target repo and say: "Install the Lusha skill from the GitHub repo matthewtaylor120578-sudo/Mztay, branch claude/lusha-integration-docs-7htnm5. Copy .claude/skills/lusha from that branch into this repo, verify the files arrived, and commit them."

If this branch has been merged by the time you copy, clone `main` instead and the same steps apply.

## Verify it loaded

Start a new Claude Code session in the target repo and ask something like "build me a Lusha candidate longlist for a CFO search". Claude should reference this skill's playbooks.

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
