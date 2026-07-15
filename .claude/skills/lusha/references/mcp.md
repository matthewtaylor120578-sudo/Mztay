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

## Verified live, 15 July 2026

The connector was added through claude.ai (Settings > Connectors > Add custom connector) with an OAuth sign-in and worked first try. Tools surface in Claude Code sessions as `mcp__Lusha__*`. The server exposes 24 tools:

| Group | Tools | Notes |
|---|---|---|
| Account | `account_usage`, `purchase_options` | Balance, plan, rate limits, per-action pricing; quick-buy credit packages. Free |
| Search | `contacts_search`, `companies_search` | Look up known people or companies by identifier |
| Prospecting | `prospecting_contact_search`, `prospecting_contact_filters`, `prospecting_contact_enrich`, and the three `prospecting_company_*` equivalents | Filter-based discovery. The `*_filters` tools resolve canonical filter values and are free; enrich spends credits |
| Decision makers | `decision_makers_search` | Key people at a target company (BD Playbook B) |
| Lookalike | `lookalike_contacts`, `lookalike_companies` | Similar profiles from a seed (longlist widening) |
| Recommendations | `recommendations_contacts`, `recommendations_companies`, plus `*_filters` for each | Lusha-suggested prospects |
| Signals | `signals_contacts_get`, `signals_contacts_search`, `signals_contact_filters`, and the three company equivalents | Job changes, promotions, hiring surges, news |
| Website visits | `website_visits_search` | Companies visiting tracked sites |

**Credit pricing** (from `account_usage`, P&C Premium plan): contact or company search 1 credit per 25 results; email reveal 1 credit; phone reveal 5 credits; company reveal 1 credit; lookalike 1 credit per 5 results; showing signals 1 credit per entity; recommendations reveal 1 credit each. All `*_filters` tools and `account_usage` are free.

**Rate limits:** 300 requests/minute, 1,800/hour, 18,000/day, shared with the REST API; HTTP 429 beyond. MCP usage draws on the same account credit pool as the dashboard.

**Signal taxonomy:** contact signals are `promotion`, `companyChange`, `allSignals`. Company signals include `surgeInHiring` plus by-department and by-location variants, headcount increase and decrease over 1, 3, 6 and 12 months, IT spend and website traffic shifts, and news categories (people, financial events, corporate strategy, commercial activity, risk, market intelligence, product activity).

## Ground rules for agent use

- Agents follow the credit discipline in `data-handling.md`: search wide, reveal narrow, phones for the A-band only.
- No bulk reveals beyond the agreed band without a human checking the list first.
- Contact data returned over MCP goes to the ATS/CRM or designated drive, never into a git repository.
