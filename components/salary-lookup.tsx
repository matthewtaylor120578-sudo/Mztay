"use client";

import { useMemo, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn, formatAUD } from "@/lib/utils";
import {
  PERCENTILES,
  REVENUE_BANDS,
  SALARIES,
  SECTORS,
  type Percentile,
  type RevenueBand,
  type SalaryRow,
  type Sector,
} from "@/data/salaries";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SalaryLookup() {
  const [sector, setSector] = useState<Sector>("finance-accounting");
  const [title, setTitle] = useState<string | null>(null);
  const [band, setBand] = useState<RevenueBand>("50m-250m");
  const [percentile, setPercentile] = useState<Percentile>("p50");
  const [open, setOpen] = useState(false);

  const titlesForSector = useMemo(
    () => SALARIES.filter((row) => row.sector === sector),
    [sector]
  );

  const selectedRow = useMemo(
    () => titlesForSector.find((row) => row.title === title) ?? null,
    [titlesForSector, title]
  );

  const onSectorChange = (next: Sector) => {
    setSector(next);
    setTitle(null);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
          Sector
        </p>
        <div className="mt-3 inline-flex rounded-lg bg-slate-900 p-1">
          {SECTORS.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => onSectorChange(s.value)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                sector === s.value
                  ? "bg-pc-pink text-white"
                  : "text-pc-offWhite/70 hover:text-pc-offWhite"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
          Job Title
        </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="mt-3 w-full justify-between border-slate-700 bg-slate-900 normal-case tracking-normal"
            >
              <span className={cn(!title && "text-pc-offWhite/50")}>
                {title ?? "Search a job title…"}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
            <Command>
              <CommandInput placeholder="Search job titles…" />
              <CommandList>
                <CommandEmpty>No matching titles.</CommandEmpty>
                <CommandGroup>
                  {titlesForSector.map((row) => (
                    <CommandItem
                      key={row.title}
                      value={row.title}
                      onSelect={(value) => {
                        const match = titlesForSector.find(
                          (r) => r.title.toLowerCase() === value.toLowerCase()
                        );
                        setTitle(match?.title ?? null);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          title === row.title ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {row.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <Tabs defaultValue="size" className="mt-8">
        <TabsList>
          <TabsTrigger value="size">By company size</TabsTrigger>
          <TabsTrigger value="percentile">By percentile</TabsTrigger>
        </TabsList>

        <TabsContent value="size">
          <p className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
            Company revenue
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {REVENUE_BANDS.map((b) => (
              <button
                key={b.value}
                type="button"
                onClick={() => setBand(b.value)}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm transition-colors",
                  band === b.value
                    ? "border-pc-pink bg-pc-pink/10 text-white"
                    : "border-slate-700 text-pc-offWhite/80 hover:border-pc-offWhite/40"
                )}
              >
                {b.label}
              </button>
            ))}
          </div>

          <SizeResult row={selectedRow} band={band} />
        </TabsContent>

        <TabsContent value="percentile">
          <p className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
            Percentile
          </p>
          <div className="mt-3 inline-flex rounded-lg bg-slate-900 p-1">
            {PERCENTILES.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setPercentile(p.value)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                  percentile === p.value
                    ? "bg-pc-teal text-slate-950"
                    : "text-pc-offWhite/70 hover:text-pc-offWhite"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <PercentileResult row={selectedRow} percentile={percentile} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ResultShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-6">
      {children}
    </div>
  );
}

function EmptyState() {
  return (
    <ResultShell>
      <p className="text-sm text-pc-offWhite/60">
        Pick a job title to see salary data.
      </p>
    </ResultShell>
  );
}

function SizeResult({
  row,
  band,
}: {
  row: SalaryRow | null;
  band: RevenueBand;
}) {
  if (!row) return <EmptyState />;
  const figures = row.bySize[band];
  const bandLabel = REVENUE_BANDS.find((b) => b.value === band)?.label ?? band;

  return (
    <ResultShell>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium uppercase tracking-wide text-white">
          {row.title}
        </h3>
        <span className="text-xs uppercase tracking-widest text-pc-offWhite/60">
          {bandLabel}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Figure label="Low" value={figures.low} />
        <Figure label="Mid" value={figures.mid} accent />
        <Figure label="High" value={figures.high} />
      </div>

      {row.notes && (
        <p className="mt-6 text-xs leading-relaxed text-pc-offWhite/60">
          {row.notes}
        </p>
      )}
    </ResultShell>
  );
}

function PercentileResult({
  row,
  percentile,
}: {
  row: SalaryRow | null;
  percentile: Percentile;
}) {
  if (!row) return <EmptyState />;
  const value = row.byPercentile[percentile];
  const meta = PERCENTILES.find((p) => p.value === percentile)!;

  return (
    <ResultShell>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium uppercase tracking-wide text-white">
          {row.title}
        </h3>
        <span className="text-xs uppercase tracking-widest text-pc-offWhite/60">
          {meta.label} percentile
        </span>
      </div>

      <p className="mt-6 text-4xl font-bold text-white md:text-5xl">
        {formatAUD(value)}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-pc-offWhite/75">
        {meta.blurb}
      </p>
    </ResultShell>
  );
}

function Figure({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        accent
          ? "border-pc-pink/40 bg-pc-pink/5"
          : "border-slate-800 bg-slate-900/40"
      )}
    >
      <p className="text-xs uppercase tracking-widest text-pc-offWhite/60">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">
        {formatAUD(value)}
      </p>
    </div>
  );
}

