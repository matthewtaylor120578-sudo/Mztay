import { GuidePage } from "@/components/guide-page";
import { executivePlaybookContent } from "./page.content";

export const metadata = { title: "Executive Playbook" };

export default function ExecutivePlaybookPage() {
  return <GuidePage content={executivePlaybookContent} />;
}
