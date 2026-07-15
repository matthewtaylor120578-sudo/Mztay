# Connecting Lusha over MCP

Lusha runs a hosted MCP server at **`https://mcp.lusha.com/`** (shown in API Hub, MCP tab, "Your MCP URL"). MCP lets AI tools call Lusha directly for search and enrichment: no tab switching, no copy-paste, no code. This is the preferred integration for agent-driven list building.

## Connect from claude.ai (web, desktop, Cowork)

Lusha's own instruction for Claude: Settings, then Connectors, then Add custom connector.

1. Open claude.ai Settings > Connectors > Add custom connector
2. Name it Lusha, URL `https://mcp.lusha.com/`
3. Complete the sign-in and consent flow with the P&C Lusha account
4. Lusha tools then appear in new chats and in Claude Code web sessions

## Connect from Claude Code CLI on the Mac

One command, then authenticate inside a session:

```bash
claude mcp add --transport http lusha https://mcp.lusha.com/
```

Run `/mcp` inside a session to complete authentication if prompted. Add `--scope user` to make it available across every project on the machine instead of just the current one.

Config-file alternative for the operating-system repo (checked-in, applies to anyone who opens the repo): create or extend `.mcp.json` at the repo root:

```json
{
  "mcpServers": {
    "lusha": {
      "type": "http",
      "url": "https://mcp.lusha.com/"
    }
  }
}
```

Command shape is current as of July 2026; `claude mcp add --help` is the source of truth if it changes.

## Other clients (as listed on the MCP tab)

| Client | Setup path shown by Lusha |
|---|---|
| ChatGPT | Workspace Management > Apps & Connectors |
| n8n | AI Agent node > MCP Client tool |
| Cursor | Settings > MCP > Add new server |

Lusha also links "Review MCP documentation" from this tab (on docs.lusha.com) for deeper detail.

## Verify on first connect

Record the answers back into this file the first time the connection is live:

- [ ] Exact tool names the server exposes (expect contact search, contact enrichment, company enrichment, signal variants)
- [ ] Auth model: OAuth sign-in vs API key, and which Lusha seat the usage bills to
- [ ] Credit consumption: treat every MCP enrichment as a chargeable reveal (same as a dashboard reveal) until proven otherwise
- [ ] Rate limits and any bulk caps

## Ground rules for agent use

- Agents follow the credit discipline in `data-handling.md`: search wide, reveal narrow, phones for the A-band only.
- No bulk reveals beyond the agreed band without a human checking the list first.
- Contact data returned over MCP goes to the ATS/CRM or designated drive, never into a git repository.
