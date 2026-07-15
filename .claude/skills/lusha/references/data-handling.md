# Data handling standards

Rules for every list that comes out of Lusha. The goal: clean, deduplicated, compliant data that lands in the right system with no loose copies.

## Candidate longlist schema

Export from Lusha, then map to these columns:

| Column | Notes |
|---|---|
| assignment_code | Short code per search, e.g. `DN-CFO` |
| capture_date | Date the contact was revealed |
| first_name, last_name | As shown on LinkedIn |
| current_title | Verbatim current title |
| current_company | Legal or trading name, consistent within the list |
| location | City, State |
| linkedin_url | Normalised: lowercase, no query string, no trailing slash |
| email_work, email_personal | Keep separate, never guess-fill |
| phone_mobile, phone_other | Mobile is the priority reveal |
| source | `lusha-search`, `lusha-extension`, or `lusha-enrich` |
| priority_band | A / B / C |
| status | new / approached / responded / screening / shortlist / declined |
| off_limits_flag | true when the person sits inside a protected client |
| notes | Free text, keep it professional, assume the person could read it |

## Client/BD list schema

| Column | Notes |
|---|---|
| company, company_domain | Domain is the dedupe key for accounts |
| industry, company_size | From Lusha company data |
| signal | Why now: hiring / funding / leadership-change / expansion |
| first_name, last_name, title | As revealed |
| persona | function_leader or talent_owner |
| linkedin_url, email_work, phone_mobile | Same normalisation rules as above |
| owner | Matt / Jack / Marie |
| next_action, next_action_date | Mandatory. No action, no row. |
| status, notes | Pipeline stage and context |

## Dedupe rules

Apply in this order, first match wins:

1. `linkedin_url` exact match after normalisation
2. Any email exact match (lowercased)
3. Fuzzy `first_name + last_name + company` (flag for manual review, do not auto-merge)

Dedupe against: the ATS/CRM, prior Lusha lists, and the off-limits register. Run dedupe before analysing a list and again before outreach starts.

## Credit discipline

- Decide reveal depth before revealing anything: email-only for the long tail, email + phone for the A-band.
- Check existing lists and the CRM before revealing; the contact may already be on file from a previous assignment.
- Track roughly credits-per-assignment. If a longlist of 100 burns materially more than 100 credits, the search filters are too loose.
- Plan allowances, rollover behaviour, and whether re-revealing a contact re-charges: confirm against the plan screen (see `platform-map.md`). Treat re-reveals as chargeable until confirmed otherwise.

## Data hygiene

- Contact data decays fast (roughly a quarter to a third of B2B records go stale per year). If a record is older than 60 days, re-verify title and company on LinkedIn before outreach.
- Hard bounces: mark the email dead in the list, do not retry, do not guess variants.
- Wrong numbers: record and stop using them. If a person asks not to be contacted, record it centrally and honour it everywhere, immediately.

## Australian compliance basics

Practical guardrails, not legal advice:

- **Spam Act 2003:** every commercial email or SMS must identify P&C Partners as the sender and contain a working unsubscribe. Keep outreach role-relevant to the person's published professional capacity. Honour every opt-out promptly and permanently.
- **Privacy Act / APPs:** record where data came from (Lusha, LinkedIn). If someone asks how you got their details, tell them plainly. Action any deletion or do-not-contact request across all systems, not just the list at hand.
- **Calls:** business landlines are usually fine; treat mobiles with care since they can be personal numbers. If someone says do not call, that is final.
- **Candidate care:** an approach is the first moment of the candidate experience. Be human, be specific about the opportunity, and never share a candidate's details onward without their consent.

## Storage rules

- Lists live in the ATS/CRM or the designated shared drive location. Nowhere else.
- Never commit CSVs containing personal contact data to any git repository, including this one and the local operating-system repo. Repos hold process and templates, not people's phone numbers.
- Delete working copies (Downloads folder, desktop, scratch exports) once the list is in its home system.
- Never paste an unredacted Lusha API key into a chat, a repo, or a document. Keys live in a password manager or keychain only.
