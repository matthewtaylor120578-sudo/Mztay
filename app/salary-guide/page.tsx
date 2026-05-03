import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Cta } from "@/components/cta";
import { SalaryLookup } from "@/components/salary-lookup";
import { salaryGuideContent } from "./page.content";

export const metadata = { title: "Salary Guide" };

export default function SalaryGuidePage() {
  return (
    <>
      <Hero
        eyebrow={salaryGuideContent.hero.eyebrow}
        title={salaryGuideContent.hero.title}
        subtitle={salaryGuideContent.hero.subtitle}
      />

      <Section
        eyebrow={salaryGuideContent.lookup.eyebrow}
        title={salaryGuideContent.lookup.title}
        description={salaryGuideContent.lookup.description}
      >
        <SalaryLookup />
      </Section>

      <Section
        eyebrow={salaryGuideContent.howToRead.eyebrow}
        title={salaryGuideContent.howToRead.title}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {salaryGuideContent.howToRead.points.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-base font-medium uppercase tracking-wide text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pc-offWhite/75">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Cta
        title={salaryGuideContent.cta.title}
        description={salaryGuideContent.cta.description}
      />
    </>
  );
}
