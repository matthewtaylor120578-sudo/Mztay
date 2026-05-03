import { GuidePage } from "@/components/guide-page";
import { salaryNegotiationContent } from "./page.content";

export const metadata = { title: "Salary Negotiation" };

export default function SalaryNegotiationPage() {
  return <GuidePage content={salaryNegotiationContent} />;
}
