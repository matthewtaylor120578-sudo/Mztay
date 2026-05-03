import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Image
            src="/pc_logo_white.svg"
            alt="P&C Partners"
            width={140}
            height={48}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pc-offWhite/70">
            We introduce great talent to great companies.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
            Career Guide
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-pc-offWhite/80 hover:text-pc-offWhite"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-pc-offWhite/60">
            P&amp;C Partners
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-pc-offWhite/80">
            <li>Brisbane, Australia</li>
            <li>
              <a
                href="https://pcpartners.com.au"
                className="hover:text-pc-offWhite"
                target="_blank"
                rel="noreferrer"
              >
                pcpartners.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/60">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-pc-offWhite/50 md:flex-row md:items-center">
          <span>
            &copy; {new Date().getFullYear()} P&amp;C Partners. All rights reserved.
          </span>
          <span>Executive search and recruitment</span>
        </div>
      </div>
    </footer>
  );
}
