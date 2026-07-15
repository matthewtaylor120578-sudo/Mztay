---
name: lusha
description: Use for anything involving Lusha or sourcing contact data: prospecting searches, revealing emails and phone numbers, contact enrichment, the Lusha extension on LinkedIn, Lusha API usage, credits and plan limits, or building candidate longlists and client/BD lists for P&C Partners. Triggers include Lusha, enrich contacts, find email or phone, longlist, BD list, prospecting, recruiter list.
---

# Lusha

Lusha is the B2B contact data platform P&C Partners uses to turn identified people into contactable people: work emails, direct dials and mobiles, plus company firmographics. It is used through three surfaces: the web dashboard, the browser extension on LinkedIn, and the API.

P&C Partners context: executive search firm in Brisbane. Lists serve two purposes, candidate longlists for live search assignments and client/BD lists of hiring managers and decision makers. Matt Taylor (Search Director), Jack Gullo (Search Principal) and Marie Eslick (Search Associate) are the operators.

## Decision gate

1. **Lusha MCP tools available in this session?** Use them directly; ground rules and setup in `references/mcp.md`. Lusha hosts an MCP server at `https://mcp.lusha.com/` with first-class Claude support.
2. **Repeatable or bulk task, scripted?** Use the v3 REST API: read `references/api.md`.
3. **Ad hoc sourcing, judgement-heavy, or neither of the above configured?** Use the dashboard and extension path: read `references/platform-map.md` for where everything lives.
4. **Building any list, whichever path:** read `references/list-building.md` for the playbook and `references/data-handling.md` for schemas, dedupe, credits and compliance.

## What to read when

| Situation | Read |
|---|---|
| Where is X in the Lusha dashboard, what does this screen do | `references/platform-map.md` |
| Connecting Claude, Claude Code, or other agents to Lusha | `references/mcp.md` |
| Automating lookups or enrichment, endpoints, auth, limits | `references/api.md` |
| New search assignment needs a longlist | `references/list-building.md` Playbook A |
| BD push into a sector or region | `references/list-building.md` Playbook B |
| Have names, need contact details | `references/list-building.md` Playbook C |
| Export formats, dedupe, credit budgeting, AU compliance | `references/data-handling.md` |
| Installing this skill on another machine or repo | `INSTALL.md` |

## Ground rules

- Never commit contact data (CSVs, phone numbers, emails) or API keys to any repository.
- Decide credit spend before revealing: email-only for the long tail, phone reveals for priority candidates only.
- Dedupe against the ATS/CRM and the off-limits register before outreach, every time.
- Honour opt-outs immediately and permanently.

<!-- TODO(pending dashboard screenshots): capture Manage API Keys and Webhooks tabs, plan/billing detail, and one Try console request (base URL + auth header + credit cost), then clear the verify lists in api.md and mcp.md and remove this note. -->
