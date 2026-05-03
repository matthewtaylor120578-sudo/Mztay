P&C Partners — Claude Code Instructions
This repository is used by P&C Partners, a Brisbane-based executive search and recruitment firm. All documents, emails, HTML files, and other deliverables created in this repo must conform to the P&C Partners brand guidelines below. Apply these guidelines by default on every output unless explicitly told otherwise.
---
Brand Identity
Company name: P&C Partners  
Website: p&cpartners.com.au  
Tagline / Voice: "We introduce great talent to great companies."
---
Typography
P&C Partners uses the Gilroy typeface family throughout all materials. Fall back to Avenir (Roman/Regular weight) for body text where Gilroy is unavailable.
Usage	Weight	Case
Main page titles / hero headings	Gilroy Bold	ALL CAPS
H2, H3, section headings, paragraph titles	Gilroy Medium	ALL CAPS
Body text	Gilroy Regular	Sentence case
Body highlights / emphasis	Gilroy Medium	Sentence case
Rules:
Headings and section titles are always uppercase
Body copy is always Gilroy Regular or Gilroy Medium — never bold in running text
When Gilroy is not available (e.g. web), use a system sans-serif or import via CDN (Gilroy is available through font services)
Do not use em dashes (—) in any written content
---
Colour Palette
Primary Colours
Name	RGB	Hex	Use
Bright Red / Pink	255, 77, 104	`#FF4D68`	Primary accent, CTAs, hero backgrounds
Vivid Cyan / Teal	0, 183, 169	`#00B7A9`	Secondary accent, highlights
Dull Pink / Purple	143, 67, 141	`#8F438D`	Gradient midpoint, secondary brand colour
Neutrals
Name	RGB	Hex	Use
Dark Gray (deep)	53, 53, 53	`#353535`	Primary text, dark backgrounds
Dark Gray (mid)	89, 89, 89	`#595959`	Secondary text, subheadings
Off-White	237, 237, 237	`#EDEDED`	Light backgrounds, reversed text panels
Gradient
The signature P&C gradient runs Pink → Purple → Teal:
```css
background: linear-gradient(135deg, #FF4D68 0%, #8F438D 50%, #00B7A9 100%);
```
Use this gradient on hero sections, cover pages, full-bleed headers, and accent panels.
---
Layout Principles
White/black split layouts are a core P&C visual motif — strong contrast between dark and light panels
Use generous white space; avoid cluttered layouts
The logo should appear on every document — use the dark version on light backgrounds, white version on dark/gradient backgrounds
Business card and document layouts use the gradient or solid brand colour on one face, white/light on the other
---
Logo
The P&C Partners logo consists of the interlocking p&c letterform above the word PARTNERS in Gilroy Medium.
On light backgrounds: use the dark version (RGB 53, 53, 53)
On dark or gradient backgrounds: use the white version
Never stretch, recolour, or modify the logo
Always maintain clear space around the logo equal to the height of the "P" letterform
---
Voice & Tone
Professional, confident, and human
Avoid jargon and overly corporate language
Write in active voice
Headings are punchy and direct
Body copy is warm but precise
Never use em dashes (—) in any content
---
File & Document Standards
HTML emails must be Outlook-compatible (table-based layout, inline CSS where required)
PDFs should use A4 page size unless specified otherwise
All documents should include the P&C logo in the header or cover
Font stack for web/HTML: `'Gilroy', 'Avenir', Arial, sans-serif`
Accent bar or gradient strip on document headers is standard
Candidate-facing documents use a clean white layout with gradient or pink accent elements
Client-facing documents may use darker, more executive layouts
---
Team
Name	Role
Matt Taylor	Search Director
Jack Gullo	Search Principal
Marie Eslick	Search Associate
---
These guidelines apply to all outputs generated in this repository. When in doubt, favour clean, high-contrast layouts using the Gilroy typeface and the P&C pink-purple-teal gradient palette.

---

# Career Guide Website — Project Plan

A career guide microsite for P&C Partners that hosts executive-search content for candidates: salary benchmarks, interview prep, negotiation, counter-offer guidance, and a leadership playbook.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Components: shadcn/ui
- Package manager: npm
- Fonts: Gilroy (CDN/font service) with Avenir, Arial, sans-serif fallbacks
- Theme: Dark, slate-950 background (matches existing sticky-scroll component)

## Pages (App Router)

| Route | Purpose |
| --- | --- |
| `/` | Home. Hero plus overview cards linking to each guide section. |
| `/salary-guide` | Salary benchmarks. Two lookup modes: by company size (revenue band) or by percentile (25th / 50th / 75th / 95th). |
| `/interview-tips` | Interview preparation guidance for executive candidates. |
| `/salary-negotiation` | How to negotiate offers professionally. |
| `/counter-offer-advice` | Handling counter-offers from current employers. |
| `/executive-playbook` | Leadership playbook for senior hires. |

Every page follows the same shape: hero section, content sections, CTA block.

## Salary Guide — Lookup Modes

The `/salary-guide` page offers two ways to review salaries. The user picks one via a tab/toggle at the top of the content area.

### Mode 1: By company size (revenue)

- User picks a job title (searchable select).
- User picks a company-size band by annual revenue. Proposed bands:
  - Under $10M
  - $10M–$50M
  - $50M–$250M
  - $250M–$1B
  - $1B+
- Result panel shows the salary range (low / mid / high) for that role at that company size, plus typical bonus/STI and any notes.

### Mode 2: By percentile

- User picks a job title (same searchable select).
- User picks a percentile: 25th, 50th, 75th, or 95th.
- Result panel shows the single salary figure at the chosen percentile, with a short explainer of what the percentile means (for example: 75th percentile is paid more than 75% of the market).

### Data shape (placeholder)

Salary data lives in a typed JSON file (e.g. `data/salaries.ts`) keyed by job title, with both shapes per role:

```ts
type SalaryRow = {
  title: string;
  bySize: Record<RevenueBand, { low: number; mid: number; high: number }>;
  byPercentile: Record<'p25' | 'p50' | 'p75' | 'p95', number>;
};
```

Real numbers to be supplied by P&C. The UI is built against the schema first; data is dropped in later.

### UI components

- `SalaryLookup` (client component): owns the tab state and selected filters.
- `JobTitleSelect`: searchable combobox (shadcn/ui Combobox).
- `RevenueBandSelect`: segmented control or select for the five bands.
- `PercentileSelect`: segmented control with four options.
- `SalaryResult`: displays the result panel for either mode.

## Shared Layout

- `app/layout.tsx`: root layout. Imports Gilroy, applies dark theme, renders `<Navbar />` and `<Footer />` around `{children}`.
- `components/navbar.tsx`: sticky top nav with the P&C logo (white version) on the left and links to all six pages on the right. Mobile: hamburger drawer.
- `components/footer.tsx`: contact, social, copyright, P&C tagline "We introduce great talent to great companies."
- `components/hero.tsx`: reusable hero with gradient or slate-950 background, title (Gilroy Bold, ALL CAPS), subtitle, optional CTA.
- `components/section.tsx`: content section wrapper with consistent padding and max-width.
- `components/cta.tsx`: reusable end-of-page CTA panel using the pink-purple-teal gradient.

## Design System

- Background: `bg-slate-950` site-wide.
- Body text: off-white (`#EDEDED`) on dark, mid-gray (`#595959`) for secondary copy on light panels.
- Accent: P&C pink `#FF4D68` for primary CTAs; teal `#00B7A9` for secondary highlights.
- Gradient: `linear-gradient(135deg, #FF4D68 0%, #8F438D 50%, #00B7A9 100%)` on heroes and CTA blocks.
- Headings: Gilroy Bold (h1) / Gilroy Medium (h2-h3), ALL CAPS.
- Body: Gilroy Regular, sentence case. Never bold in running text.
- Tailwind config extends colors with `pc.pink`, `pc.purple`, `pc.teal`, `pc.darkDeep`, `pc.darkMid`, `pc.offWhite`.
- Font stack registered in Tailwind: `'Gilroy', 'Avenir', Arial, sans-serif`.

## Responsiveness

- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- Navbar collapses to a hamburger drawer below `md`.
- Hero typography scales with `clamp()` or Tailwind responsive classes.
- Grid layouts on home overview cards: 1 col mobile, 2 col tablet, 3 col desktop.

## Proposed File Structure

```
app/
  layout.tsx
  page.tsx                    // Home
  salary-guide/page.tsx
  interview-tips/page.tsx
  salary-negotiation/page.tsx
  counter-offer-advice/page.tsx
  executive-playbook/page.tsx
  globals.css                 // Tailwind base + Gilroy import
components/
  navbar.tsx
  footer.tsx
  hero.tsx
  section.tsx
  cta.tsx
  ui/                         // shadcn/ui primitives
lib/
  utils.ts                    // cn() helper
public/
  pc_logo_white.svg
  pc_logo_black.svg
tailwind.config.ts
postcss.config.js
tsconfig.json
package.json
```

## Build Order

1. Scaffold Next.js 14 + TypeScript + Tailwind, install shadcn/ui, copy P&C logo assets into `/public`.
2. Tailwind config: extend colors, font family, register Gilroy in `globals.css`.
3. Build shared components: `Navbar`, `Footer`, `Hero`, `Section`, `Cta`. Wire them into `app/layout.tsx`.
4. Build Home (`/`) with hero + six overview cards linking out.
5. Build the five guide pages, each using `Hero` + `Section` blocks + `Cta`.
6. Mobile QA pass and accessibility check (focus states, color contrast, semantic landmarks).

## Voice Reminders

- No em dashes anywhere.
- Active voice, punchy headings, warm but precise body copy.
- Avoid corporate jargon.
