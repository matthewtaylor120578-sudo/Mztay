import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Career Guide | P&C Partners",
    template: "%s | P&C Partners",
  },
  description:
    "Career guidance from P&C Partners. Salary benchmarks, interview tips, negotiation, counter-offers, and the executive playbook.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
