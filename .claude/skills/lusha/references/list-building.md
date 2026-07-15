# Building lists with Lusha

P&C Partners builds two core list types: candidate longlists for live search assignments, and client/BD lists of hiring managers and decision makers. Both follow the same spine: define the target, build the company universe, find the people, enrich contacts, export clean data.

## Before you open Lusha: define the brief

Never start searching without a written spec. Capture it in this shape:

| Field | Candidate longlist | Client/BD list |
|---|---|---|
| Target person | Job titles + all synonyms, seniority level | Buyer personas (see Playbook B) |
| Industry | Where the talent works today | Sectors P&C is targeting |
| Geography | Candidate location(s), relocation appetite | Brisbane / SEQ / QLD / national |
| Company universe | Named targets, competitors, adjacents, size bands | Accounts showing hiring or growth signals |
| Exclusions | Off-limits clients, current client employees | Existing CRM contacts and live clients |
| Volume goal | 60 to 120 names is a typical longlist | 30 to 50 well-qualified beats 500 generic |
| Credit budget | Reveal depth: email only vs email + phone | Same decision, made before revealing |

Australian title synonyms matter. Search every variant: Chief People Officer / GM People and Culture / Head of HR; CFO / Finance Director / GM Finance; MD / CEO / General Manager. Lusha matches titles fairly literally, so one search per variant beats one broad search.

## Canonical Lusha filter values (verified over MCP, July 2026)

Use these exact values when driving Lusha through MCP or the API; the dashboard mirrors them.

- **Seniority:** founder, partner, c-suite, vice president, director, manager, senior, entry, intern, other. Default band for exec search: c-suite, vice president, director, plus partner and founder where relevant.
- **Departments:** Business Development, Consulting, Customer Service, Engineering & Technical, Finance, General Management, Health Care & Medical, Human Resources, Information Technology, Legal, Marketing, Operations, Other, Product, Research & Analytics, Sales.
- **Company size bands:** 1-10, 11-50, 51-200, 201-500, 501-1,000, 1,001-5,000, 5,001-10,000, 10,001-100,000, 100,001+.
- **Trigger signals for BD:** company signals `surgeInHiring`, `surgeInHiringByDepartment`, `surgeInHiringByLocation`, headcount increases over 3 or 6 months, `peopleNews`, `financialEventsNews`; contact signals `promotion` and `companyChange`. A promotion or company change on a known contact is a same-week reason to call.

## Playbook A: candidate longlist for a search assignment

1. **Build the company universe first.** Company-first beats people-first for exec search: list competitors, adjacent industries, and companies known for developing this function. Use Lusha company search filters (industry, size, location) or import a named target list.
2. **Run people searches inside that universe.** Filter on current job title (one synonym at a time), seniority, department, and location. Screen results against the brief before revealing anything.
3. **Cross-reference on LinkedIn.** For profiles that need judgement (scope of role, tenure, team size), open them on LinkedIn and use the Lusha extension to reveal contact details in place. This is the highest-precision path for exec search.
4. **Reveal in bands to conserve credits.** Reveal email for the full longlist. Reveal phone only for the A-band (priority candidates you will call first): a phone costs 5 credits against 1 for an email. See credit discipline in `data-handling.md`.
5. **Save to a named Lusha list per assignment.** Naming convention: `YYYY-MM code role`, for example `2026-07 DN-CFO longlist`. One assignment, one list. Never mix assignments.
6. **Export to CSV** and map to the longlist schema in `data-handling.md`.
7. **QA pass before the list is real:** dedupe against the ATS/CRM, run the off-limits check, flag stale records (person appears to have moved roles), verify a sample of emails.

## Playbook B: client/BD decision-maker list

1. **Lead with triggers, not directories.** Prioritise companies that are actively hiring (SEEK and LinkedIn postings, careers pages), newly funded or acquired, expanding into QLD, or going through leadership change. A signal-led list of 40 outperforms a cold directory of 400.
2. **Capture two personas per company.** The function leader who owns the vacancy (CFO for finance searches, COO for operations) and the talent owner (CPO, HR Director, Head of Talent Acquisition). BD conversations need both.
3. **Company search first:** industry, size band, and location filters. Save qualified accounts.
4. **Contact search within those accounts** using the persona title filters.
5. **Reveal and save** to a list named like `2026-07 BD mining-services QLD`.
6. **Export, then import to the CRM.** Dedupe, assign an owner (Matt, Jack, or Marie), and set a concrete next action and date for every row. A contact without a next action is not a BD list entry, it is clutter.

## Playbook C: enrich a list you already have

When names exist but contact data does not (conference delegates, an ATS export missing phones, a revived old longlist), use CSV enrichment instead of re-searching. Match rates improve sharply with better keys, in this order: LinkedIn URL (strongest), then full name + company domain, then full name + company name. Exact upload format and column mapping: see `platform-map.md`.

## Working with the LinkedIn extension

- The extension reveals contact details on the profile or search page you are viewing and can save people directly to a Lusha list.
- Work at a human pace. The extension reads pages you visit; it is not a bulk scraper, and hammering LinkedIn risks the account you depend on.
- Recruiter/Sales Navigator searches remain your precision tool. Use LinkedIn to decide who belongs on the list and Lusha to make them contactable.

## Quality gates before any list ships

- [ ] Every row passed the off-limits and dedupe checks
- [ ] Reveal depth matched the credit plan (no phone reveals outside the A-band without a reason)
- [ ] Names, titles, and companies spot-checked against LinkedIn for freshness
- [ ] List name follows the convention and the export landed in the right system
- [ ] No contact data left sitting in Downloads or on the desktop (see `data-handling.md` storage rules)
