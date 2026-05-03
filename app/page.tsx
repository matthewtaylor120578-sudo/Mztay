import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Cta } from "@/components/cta";
import { homeContent } from "./page.content";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        variant="dark"
      />

      <Section
        eyebrow={homeContent.overview.eyebrow}
        title={homeContent.overview.title}
        description={homeContent.overview.description}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-pc-pink/60 hover:bg-slate-900"
            >
              <h3 className="text-lg font-medium uppercase tracking-wide text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pc-offWhite/75">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-pc-pink">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Cta
        title={homeContent.cta.title}
        description={homeContent.cta.description}
      />
    </>
  );
}
