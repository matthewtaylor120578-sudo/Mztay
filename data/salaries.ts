// Salary data for the /salary-guide lookup.
// All figures are AUD, stored as plain integers. The UI formats them at render time.
// Real numbers will be supplied by P&C and dropped into the rows below.

export type Sector = "finance-accounting" | "technology";

export const SECTORS: { value: Sector; label: string }[] = [
  { value: "finance-accounting", label: "Finance & Accounting" },
  { value: "technology", label: "Technology" },
];

export type RevenueBand =
  | "under-10m"
  | "10m-50m"
  | "50m-250m"
  | "250m-1b"
  | "1b-plus";

export const REVENUE_BANDS: { value: RevenueBand; label: string }[] = [
  { value: "under-10m", label: "Under A$10M" },
  { value: "10m-50m", label: "A$10M – A$50M" },
  { value: "50m-250m", label: "A$50M – A$250M" },
  { value: "250m-1b", label: "A$250M – A$1B" },
  { value: "1b-plus", label: "A$1B+" },
];

export type Percentile = "p25" | "p50" | "p75" | "p95";

export const PERCENTILES: { value: Percentile; label: string; blurb: string }[] = [
  {
    value: "p25",
    label: "25th",
    blurb:
      "The lower quartile. Typically reflects entry into the role or smaller, less complex environments.",
  },
  {
    value: "p50",
    label: "50th",
    blurb:
      "The median. A solid market reference for someone delivering to expectations in the role.",
  },
  {
    value: "p75",
    label: "75th",
    blurb:
      "Upper quartile. Paid more than 75% of the market. Typically strong performers in larger or more complex remits.",
  },
  {
    value: "p95",
    label: "95th",
    blurb:
      "Top of market. Reserved for standout performers in scaled, high-stakes environments.",
  },
];

export type SalaryRow = {
  sector: Sector;
  title: string;
  bySize: Record<RevenueBand, { low: number; mid: number; high: number }>;
  byPercentile: Record<Percentile, number>;
  notes?: string;
};

// Placeholder rows. Replace with the real numbers from P&C.
export const SALARIES: SalaryRow[] = [
  {
    sector: "finance-accounting",
    title: "Chief Financial Officer",
    bySize: {
      "under-10m": { low: 180000, mid: 210000, high: 240000 },
      "10m-50m": { low: 220000, mid: 260000, high: 300000 },
      "50m-250m": { low: 280000, mid: 340000, high: 400000 },
      "250m-1b": { low: 350000, mid: 430000, high: 520000 },
      "1b-plus": { low: 450000, mid: 600000, high: 800000 },
    },
    byPercentile: { p25: 260000, p50: 340000, p75: 460000, p95: 650000 },
    notes: "Excludes STI/LTI. Add 20% to 60% for total package depending on size.",
  },
  {
    sector: "finance-accounting",
    title: "Financial Controller",
    bySize: {
      "under-10m": { low: 130000, mid: 150000, high: 170000 },
      "10m-50m": { low: 150000, mid: 175000, high: 200000 },
      "50m-250m": { low: 180000, mid: 210000, high: 240000 },
      "250m-1b": { low: 210000, mid: 245000, high: 280000 },
      "1b-plus": { low: 240000, mid: 285000, high: 330000 },
    },
    byPercentile: { p25: 165000, p50: 200000, p75: 245000, p95: 310000 },
  },
  {
    sector: "finance-accounting",
    title: "Senior Financial Accountant",
    bySize: {
      "under-10m": { low: 100000, mid: 115000, high: 130000 },
      "10m-50m": { low: 110000, mid: 125000, high: 140000 },
      "50m-250m": { low: 120000, mid: 135000, high: 150000 },
      "250m-1b": { low: 130000, mid: 145000, high: 160000 },
      "1b-plus": { low: 140000, mid: 155000, high: 170000 },
    },
    byPercentile: { p25: 115000, p50: 135000, p75: 155000, p95: 175000 },
  },
  {
    sector: "technology",
    title: "Chief Technology Officer",
    bySize: {
      "under-10m": { low: 200000, mid: 240000, high: 280000 },
      "10m-50m": { low: 250000, mid: 300000, high: 350000 },
      "50m-250m": { low: 320000, mid: 380000, high: 440000 },
      "250m-1b": { low: 400000, mid: 480000, high: 560000 },
      "1b-plus": { low: 500000, mid: 650000, high: 850000 },
    },
    byPercentile: { p25: 290000, p50: 380000, p75: 510000, p95: 720000 },
    notes: "Excludes equity. Equity component varies materially with stage.",
  },
  {
    sector: "technology",
    title: "Engineering Manager",
    bySize: {
      "under-10m": { low: 160000, mid: 185000, high: 210000 },
      "10m-50m": { low: 180000, mid: 205000, high: 230000 },
      "50m-250m": { low: 200000, mid: 225000, high: 250000 },
      "250m-1b": { low: 220000, mid: 250000, high: 280000 },
      "1b-plus": { low: 240000, mid: 280000, high: 320000 },
    },
    byPercentile: { p25: 195000, p50: 230000, p75: 270000, p95: 320000 },
  },
  {
    sector: "technology",
    title: "Senior Software Engineer",
    bySize: {
      "under-10m": { low: 130000, mid: 150000, high: 170000 },
      "10m-50m": { low: 140000, mid: 160000, high: 180000 },
      "50m-250m": { low: 150000, mid: 170000, high: 190000 },
      "250m-1b": { low: 160000, mid: 180000, high: 200000 },
      "1b-plus": { low: 170000, mid: 195000, high: 220000 },
    },
    byPercentile: { p25: 150000, p50: 175000, p75: 200000, p95: 235000 },
  },
];
