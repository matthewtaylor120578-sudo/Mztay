import type { GuidePageContent } from "@/components/guide-page";

// Placeholder copy. Final wording will be supplied via Claude chat.
export const counterOfferContent: GuidePageContent = {
  hero: {
    eyebrow: "Counter-Offer Advice",
    title: "What a counter-offer really means.",
    subtitle:
      "A counter-offer feels like validation. It's usually a stalling tactic. Here's how to think clearly when one lands on the table.",
  },
  sections: [
    {
      eyebrow: "First principles",
      title: "Why you got the counter",
      body: [
        "When you resign, your current employer faces a problem. Replacing you costs time, money, and momentum. A counter-offer is the cheapest, fastest way to make that problem disappear, at least for now.",
        "It's rarely a reflection of how much they value you. It's a reflection of how inconvenient your departure is.",
      ],
    },
    {
      eyebrow: "Reality check",
      title: "Why most counter-offers fail",
      points: [
        {
          title: "The reasons you wanted to leave don't change",
          description:
            "Money is rarely the only reason people resign. The scope, manager, culture, and trajectory issues remain.",
        },
        {
          title: "Trust is now broken",
          description:
            "Your loyalty has been measured. Future promotions, projects, and headcount conversations may quietly factor it in.",
        },
        {
          title: "The market resets next year",
          description:
            "Most people who accept counter-offers leave within twelve months. The fix is short-term, the cost is long-term.",
        },
        {
          title: "It signals you needed leverage",
          description:
            "Asking for a raise should not require a resignation. If it did, that's the real problem.",
        },
      ],
    },
    {
      eyebrow: "Handle it well",
      title: "If a counter-offer lands",
      points: [
        {
          title: "Take a breath",
          description:
            "Don't accept or reject in the room. Thank them, take 24 to 48 hours, and revisit your reasons for leaving.",
        },
        {
          title: "Re-read your why",
          description:
            "Write down the reasons you started looking. Does the counter-offer actually fix any of them?",
        },
        {
          title: "Talk to someone independent",
          description:
            "A trusted mentor or recruiter can pressure-test the decision without the emotion of the moment.",
        },
        {
          title: "Decline professionally",
          description:
            "If you decide to leave, decline with grace. The industry is small, and the relationship outlasts the role.",
        },
      ],
    },
  ],
  cta: {
    title: "Facing a counter-offer right now?",
    description:
      "We've helped hundreds of senior candidates think this one through. Have a confidential conversation with P&C.",
  },
};
