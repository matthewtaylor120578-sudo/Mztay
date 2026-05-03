import { GuidePage } from "@/components/guide-page";
import { interviewTipsContent } from "./page.content";

export const metadata = { title: "Interview Tips" };

export default function InterviewTipsPage() {
  return <GuidePage content={interviewTipsContent} />;
}
