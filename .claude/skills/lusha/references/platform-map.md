# Lusha platform map

Mapped screen by screen from Matthew Taylor's live dashboard, July 2026. Facts below come from captured screens. Anything marked **(verify)** is inferred and needs confirmation in the product before you rely on it.

## Account snapshot (15 July 2026)

- Account: Matthew Taylor
- Credits available: **10,348**
- An Upgrade button shows next to the credit balance; plan name and renewal cadence not yet captured **(verify)**
- API access: **enabled**. The API Hub shows a Copy API key button and a Manage API Keys tab

## Global navigation (left sidebar)

| Item | What it is |
|---|---|
| + New table | Creates a new prospecting table; tables are the core working object in the current Lusha UI |
| Home | Dashboard landing |
| Prospecting | People and company search (filters: job title, seniority, industry, location and more) |
| All tables / Recents | Saved prospecting tables and recent work |
| AI recommendations | Lusha-suggested prospects **(verify what drives it)** |
| Website visitors (Beta) | Identifies companies visiting your website |
| API & connectors | The API Hub, mapped below |
| MCP (Claude, ChatGPT, n8n, ...) | First-party MCP integration surface. Highest-value integration for the local Claude Code setup. Details pending capture |
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

### APIs tab (captured)

"Explore endpoints by category. From search to enrichment. All your integrations, one place." Eight endpoint categories, each with a Try console: Search, Prospecting, Enrich, Signals, Lookalike, Search & Enrich, Website Visits, Decision Makers. Full catalogue, parameters, and playbook mapping: `api.md`.

### Webhooks tab

Pending capture.

### MCP tab (captured)

Headline: "Connect Lusha to your AI tools". Pitch: pull Lusha data directly into ChatGPT, Claude, or any AI tool with no tab switching, no copy-pasting, no code.

- **Your MCP URL:** `https://mcp.lusha.com/` (with copy button)
- Client setup cards, each with a Set up link: **Claude** (Settings > Connectors > Add custom connector), **ChatGPT** (Workspace Management > Apps & Connectors), **n8n** (AI Agent node > MCP Client tool), **Cursor** (Settings > MCP > Add new server)
- "Review MCP documentation" links to docs.lusha.com

Full connection guide, including Claude Code CLI setup for the Mac: `mcp.md`.

### Manage API Keys tab

Pending capture. Never paste an unredacted key anywhere, including this repo.

## How this maps to P&C work

- **Contact search** powers Playbook A (candidate longlists) and Playbook B (BD lists) in `list-building.md`.
- **Contact enrichment** and **CSV enrichment** power Playbook C (you have names, need details).
- **Company enrichment** qualifies BD target accounts (size, revenue, HQ).
- **Signal enrichment** (promotions, company growth) feeds the trigger-led BD approach: a promotion signal on a talent owner or function leader is a natural reason to call.
- **MCP** is the preferred integration for the Mac operating-system repo once captured and configured; connectors (Sheets, Zapier, Make, n8n) suit no-code automations for the wider team.

## Screens still to capture

- [ ] APIs tab
- [ ] MCP tab (priority)
- [ ] Webhooks tab
- [ ] Manage API Keys tab (redact key values)
- [ ] Plan / billing / credits detail (plan name, monthly allowance, rollover, seat sharing)
- [ ] Prospecting search with filter panel open
- [ ] Engagement surface
- [ ] CSV enrichment upload screen
