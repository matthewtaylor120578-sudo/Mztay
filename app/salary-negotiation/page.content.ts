import type { GuidePageContent } from "@/components/guide-page";

// Placeholder copy. Final wording will be supplied via Claude chat.
export const salaryNegotiationContent: GuidePageContent = {
  hero: {
    eyebrow: "Salary Negotiation",
    title: "Negotiate the offer. Protect the relationship.",
    subtitle:
      "The first conversation about money sets the tone for your first year. Make it confident, calm, and grounded in fact.",
  },
  sections: [
    {
      eyebrow: "Get the basics right",
      title: "Anchor on data, not feelings",
      body: [
        "Before you talk numbers, know the market. Use the Salary Guide to set a defensible range based on company size and percentile, then layer in the bits that matter to you: bonus, super, equity, leave, flexibility.",
        "When you respond to an offer, lead with enthusiasm for the role, then move to the package. Negotiation is a conversation, not a contest.",
      ],
    },
    {
      eyebrow: "How to ask",
      title: "Move the conversation forward",
      points: [
        {
          title: "Be specific",
          description:
            "Bring a number, not a range. Ranges invite the lower end. Numbers invite a real conversation.",
        },
        {
          title: "Justify with scope",
          description:
            "Tie your number to the responsibility and outcomes you'll own, not just to your last salary.",
        },
        {
          title: "Name the full package",
          description:
            "Bonus, super above SG, equity, sign-on, leave, learning budget, flexibility. There's more to negotiate than base.",
        },
        {
          title: "Hold a productive silence",
          description:
            "Make your ask, then stop. Let the recruiter or hiring manager respond. Silence is a tool, not awkwardness.",
        },
      ],
    },
    {
      eyebrow: "Avoid these traps",
      title: "Common mistakes",
      points: [
        {
          title: "Negotiating before you have an offer",
          description:
            "Wait for written terms. Negotiating against a verbal offer wastes leverage.",
        },
        {
          title: "Bluffing other offers",
          description:
            "If you have a competing offer, share the facts. If you don't, don't invent one.",
        },
        {
          title: "Forgetting the relationship",
          description:
            "Your hiring manager will be your hiring manager on day one. Negotiate accordingly.",
        },
      ],
    },
  ],
  cta: {
    title: "Got an offer in hand?",
    description:
      "We negotiate offers every day. Run the numbers past a P&C consultant before you respond.",
  },
};
