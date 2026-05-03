import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Cta } from "@/components/cta";

export type GuidePoint = {
  title: string;
  description: string;
};

export type GuideSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  points?: GuidePoint[];
  body?: string[];
};

export type GuidePageContent = {
  hero: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  sections: GuideSection[];
  cta: {
    title: string;
    description?: string;
  };
};

export function GuidePage({ content }: { content: GuidePageContent }) {
  return (
    <>
      <Hero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />

      {content.sections.map((section, i) => (
        <Section
          key={`${section.title}-${i}`}
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        >
          {section.body && (
            <div className="space-y-4 text-base leading-relaxed text-pc-offWhite/85">
              {section.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
          {section.points && (
            <div className="grid gap-6 md:grid-cols-2">
              {section.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
                >
                  <h3 className="text-base font-medium uppercase tracking-wide text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pc-offWhite/75">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Cta title={content.cta.title} description={content.cta.description} />
    </>
  );
}
