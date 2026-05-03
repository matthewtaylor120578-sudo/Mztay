import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaProps = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Cta({
  title,
  description,
  primaryHref = "https://pcpartners.com.au/contact",
  primaryLabel = "Talk to P&C Partners",
  secondaryHref,
  secondaryLabel,
}: CtaProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-pc-gradient p-8 md:p-14">
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="default" className="bg-slate-950 text-white hover:bg-slate-900">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>
              {secondaryHref && secondaryLabel && (
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
