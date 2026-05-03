import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl md:mb-14">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-pc-pink">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-medium uppercase tracking-tight text-white md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-pc-offWhite/80 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
