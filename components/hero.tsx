import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "gradient" | "dark";
  children?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
  children,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "gradient" ? "bg-pc-gradient" : "bg-slate-950"
      )}
    >
      {variant === "dark" && (
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-pc-pink/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-pc-teal/20 blur-3xl" />
        </div>
      )}

      <div className="container relative py-20 md:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-pc-offWhite/70">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-pc-offWhite/85 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
