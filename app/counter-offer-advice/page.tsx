import { GuidePage } from "@/components/guide-page";
import { counterOfferContent } from "./page.content";

export const metadata = { title: "Counter-Offer Advice" };

export default function CounterOfferPage() {
  return <GuidePage content={counterOfferContent} />;
}
