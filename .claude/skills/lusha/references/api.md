# Lusha API reference (v3)

Captured from the API Hub APIs tab on Matthew Taylor's account, July 2026. The account has API access enabled (Copy API key button and Manage API Keys tab present). Full request and response schemas live behind View documentation (docs.lusha.com); this file records the surface and how P&C uses it.

Endpoints are shown in the dashboard as `v3/...` paths. Base URL is expected to be `https://api.lusha.com/` **(verify against the docs or a Try console before first call)**.

## Endpoint catalogue

| Category | Endpoints | Key inputs | What it does |
|---|---|---|---|
| Search | `v3/contacts/search`, `v3/companies/search` | email, linkedinUrl, name, company, domain | Find contacts or companies using known identifiers |
| Prospecting | `v3/contacts/prospecting`, `v3/companies/prospecting` | industry, location, company size, revenue, seniority | Search contacts or companies using filters |
| Enrich | `v3/contacts/enrich`, `v3/companies/enrich` | contactId, companyId | Retrieve full profile data for a known contact or company by ID |
| Signals | `v3/contacts/signals`, `v3/companies/signals` | contactId, companyId | Get buying signals and intent data for known contacts or companies |
| Lookalike | `v3/contacts/lookalike`, `v3/companies/lookalike` | contactId, companyId | Discover contacts or companies similar to a given seed profile |
| Search & Enrich | `v3/contacts/search-and-enrich`, `v3/companies/search-and-enrich` | email, linkedinUrl, company, domain | Discover and retrieve full contact or company data in a single call |
| Website Visits | `v3/companies/website-visits` | siteIds, startDate, endDate, limit, offset | Identify companies visiting your website and surface buying intent signals |
| Decision Makers | `v3/contacts/decision-makers` | domain, companyId | Identify the most relevant decision makers at any target company |

Every category has a Try console in the dashboard (the Try buttons on each card), which is the fastest way to confirm request shape, auth header, and credit cost per call.

## The two-step pattern

The catalogue splits discovery from data retrieval: prospecting and search find people and return identifiers, enrich turns an ID into full contact data. Treat the enrich step as the moment credits are spent, and the search step as free-to-cheap **(verify exact charging per endpoint in the Try console or docs)**. Search & Enrich collapses both into one call for when you already hold a strong identifier like a LinkedIn URL.

## Mapping endpoints to P&C playbooks

Playbooks live in `list-building.md`; this is which endpoint powers which step.

**Playbook A, candidate longlist:**
1. `v3/companies/prospecting` or a named target list builds the company universe
2. `v3/contacts/prospecting` with title, seniority, location filters finds the people
3. `v3/contacts/enrich` reveals contact data, in bands (email for all, phone for the A-band)
4. For candidates already identified on LinkedIn: `v3/contacts/search-and-enrich` with the linkedinUrl in one call

**Playbook B, client/BD list:**
1. `v3/companies/prospecting` qualifies accounts by industry, size, revenue, location
2. `v3/contacts/decision-makers` with the company domain surfaces the function leader and talent owner personas directly. This endpoint is purpose-built for BD list building
3. `v3/contacts/signals` and `v3/companies/signals` supply the reason-to-call (promotions, growth)

**Playbook C, enrich an existing list:**
- Loop `v3/contacts/search-and-enrich` keyed on linkedinUrl (strongest), else name + company or domain

**Longlist accelerator:**
- `v3/contacts/lookalike` seeded with the contactId of a standout candidate returns similar profiles. Use it after the first shortlist review to widen a thin longlist

**Website visitors (tied to the sidebar Beta feature):**
- `v3/companies/website-visits` turns p&cpartners site traffic into named companies. A company repeatedly visiting the site is a warm BD signal

## Authentication

API keys are issued under API Hub > Manage API Keys. Header name and format **(verify: capture the Manage API Keys tab or one Try console request)**. Keys live in the macOS keychain or password manager only, injected via environment variable in scripts. Never in a repo, chat, or document.

## Still to verify before production use

- [ ] Base URL and auth header format (one Try console screenshot settles both)
- [ ] Credit cost per endpoint, especially enrich vs search vs decision-makers
- [ ] Rate limits and bulk batch sizes
- [ ] Pagination shape on prospecting endpoints
- [ ] Webhooks tab contents (events for async jobs, job-change alerts)
- [ ] Whether MCP tool calls (see `mcp.md`) bill the same as direct API calls
