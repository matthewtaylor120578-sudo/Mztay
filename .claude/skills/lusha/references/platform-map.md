# Lusha platform map

Mapped screen by screen from Matthew Taylor's live dashboard, July 2026. Facts below come from captured screens. Anything marked **(verify)** is inferred and needs confirmation in the product before you rely on it.

## Account snapshot (15 July 2026)

- Account: Matthew Taylor
- Plan: **Premium**, annual, current period 18 July 2025 to 18 July 2026 (verified live over MCP)
- Credits: **10,348 remaining** of 17,008 (6,660 used). The plan year ends 18 July 2026: confirm whether unused credits roll over before renewal
- Rate limits: 300 requests/minute, 1,800/hour, 18,000/day
- API access: **enabled** (Copy API key button, Manage API Keys tab), and the hosted MCP server is connected and verified from Claude

## Global navigation (left sidebar)

| Item | What it is |
|---|---|
| + New table | Creates a new prospecting table; tables are the core working object in the current Lusha UI |
| Home | Dashboard landing |
| Prospecting | People and company search (filters: job title, seniority, industry, location and more) |
| All tables / Recents | Saved prospecting tables and recent work |
| AI recommendations | Lusha-suggested prospects; exposed over MCP as the `recommendations_*` tools (see `mcp.md`). Ranking logic not documented |
| Website visitors (Beta) | Identifies companies visiting your website |
| API & connectors | The API Hub, mapped below |
| MCP (Claude, ChatGPT, n8n, ...) | First-party MCP integration surface, captured and verified live: see the MCP tab below and `mcp.md` |
| Engagement | Outreach/sequences surface **(verify scope)** |
| CSV enrichment | Upload a CSV of names/companies, get contact data back (Playbook C in `list-building.md`) |
| Resources | Help and learning content |

## API Hub (`dashboard.lusha.com/api/connectors`)

Header: **API Hub**. Top-right actions: **Copy API key**, **View documentation** (links to docs.lusha.com).

Tabs across the top: **APIs | Connectors | Webhooks | MCP | Manage API Keys**

### Connectors tab (captured)

Search box ("What workflow are you looking for?") with two filters: All connectors, All use cases.

**Use-case cards** (carousel, more may exist off-screen):

| Use case | Description shown |
|---|---|
| Contact enrichment | Retrieve contact data for business professionals using name, email, phone number, or LinkedIn URL |
| Contact search | Find new leads using advanced filters like job title, seniority, industry, and location to build targeted prospect lists |
| Company enrichment | Access comprehensive company information including industry, size, revenue, and headquarters data |
| Signal enrichment | Enrich contacts and companies with signals like promotions and company growth to uncover new sales opportunities |

**Connectors** (no-code: "Start fast with no code search, enrich, and sync in minutes"): Zapier, Make, Google Sheets, n8n, Pipedream, Workato. Carousel arrows suggest possibly more; a Request connector button exists for missing ones.

**Templates** (pre-built workflows, carousel): Auto-search & enrich leads (Google Sheets), Contact enrichment automation (Google Sheets), Auto-enrich HubSpot contacts (Make). Each has a Try it link, some have walkthrough videos.

Where to find templates: API Hub > Connectors tab, scroll below the connector row; the View templates link on each use-case card filters the gallery to that use case. P&C fit: templates are the zero-code path for always-on automations, for example the Google Sheets auto-search and enrich template as a self-refreshing list feeder the whole team can read. For ad hoc work, the MCP connection now covers the same ground through Claude directly.

### APIs tab (captured)

"Explore endpoints by category. From search to enrichment. All your integrations, one place." Eight endpoint categories, each with a Try console: Search, Prospecting, Enrich, Signals, Lookalike, Search & Enrich, Website Visits, Decision Makers. Full catalogue, parameters, and playbook mapping: `api.md`.

### Webhooks tab (captured)

"Webhook Subscriptions: create and manage webhook subscriptions for company and contact signals", with a Create Webhook button. Subscription table columns: Name, Entity count, Type, Event type, Last updated, Status, Actions.

State at capture: none created yet ("No Webhook created").

What this enables for P&C: subscribe a watched set of contacts (past candidates, BD targets, placed candidates' managers) or companies to signal events, and Lusha pushes the event to your endpoint. A job change or promotion signal arriving as a push is a same-day reason to call, instead of a quarterly list refresh discovering it months later. Pair with a connector (n8n, Make, Zapier) to turn the push into a CRM task or alert. Exact event types offered appear in the Create Webhook flow **(verify when first configuring one; likely the signal taxonomy verified in `mcp.md`)**.

### MCP tab (captured)

Headline: "Connect Lusha to your AI tools". Pitch: pull Lusha data directly into ChatGPT, Claude, or any AI tool with no tab switching, no copy-pasting, no code.

- **Your MCP URL:** `https://mcp.lusha.com/` (with copy button)
- Client setup cards, each with a Set up link: **Claude** (Settings > Connectors > Add custom connector), **ChatGPT** (Workspace Management > Apps & Connectors), **n8n** (AI Agent node > MCP Client tool), **Cursor** (Settings > MCP > Add new server)
- "Review MCP documentation" links to docs.lusha.com

Full connection guide, including Claude Code CLI setup for the Mac: `mcp.md`.

### Manage API Keys tab (captured)

"Create and manage account API keys" with a Create new Key button. Keys are account-level, listed with: Name, masked key value (reveal and copy controls), Created date, Created by, Last used, and per-key Credit usage with a **Set limit** control.

State at capture (15 July 2026): a single unnamed key, created 27.02.2023, last used 19.05.2026, 15 credits used through it, no limit set. Something used it as recently as May 2026, so identify what depends on it before rotating or deleting.

Key governance for P&C:

- One named key per integration (for example `claude-mac`, `n8n-lists`), never shared across tools
- Set a credit limit on every key so a runaway automation cannot drain the account balance
- Key values live in the password manager or macOS keychain only; never in repos, chats, or documents

## How this maps to P&C work

- **Contact search** powers Playbook A (candidate longlists) and Playbook B (BD lists) in `list-building.md`.
- **Contact enrichment** and **CSV enrichment** power Playbook C (you have names, need details).
- **Company enrichment** qualifies BD target accounts (size, revenue, HQ).
- **Signal enrichment** (promotions, company growth) feeds the trigger-led BD approach: a promotion signal on a talent owner or function leader is a natural reason to call.
- **MCP** is the preferred integration for the Mac operating-system repo once captured and configured; connectors (Sheets, Zapier, Make, n8n) suit no-code automations for the wider team.

## Screens still to capture

- [ ] One Try console request from the APIs tab (settles REST base URL and auth header; the MCP path needs neither)
- [ ] Engagement surface
- [ ] CSV enrichment upload screen
- [ ] Optional: Prospecting search UI (canonical filter values already verified over MCP, listed in `list-building.md`)

Captured so far: all five API Hub tabs (APIs, Connectors, Webhooks, MCP, Manage API Keys). Plan, credits, pricing, rate limits, filter taxonomies and signal types verified live over the MCP connection on 15 July 2026.
