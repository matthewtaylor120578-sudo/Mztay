import type { GuidePageContent } from "@/components/guide-page";

// Placeholder copy. Final wording will be supplied via Claude chat.
export const executivePlaybookContent: GuidePageContent = {
  hero: {
    eyebrow: "Executive Playbook",
    title: "First 100 days. Next ten years.",
    subtitle:
      "A leadership playbook for senior hires stepping into their next role. How to land, build trust, and earn the runway to lead.",
  },
  sections: [
    {
      eyebrow: "Land",
      title: "First 30 days",
      points: [
        {
          title: "Listen on the record",
          description:
            "Schedule one-on-ones with your team, peers, and key stakeholders. Ask the same questions across the board. Look for patterns.",
        },
        {
          title: "Map the operating reality",
          description:
            "Understand cadence, decision rights, and how work actually moves. Don't change anything before you understand it.",
        },
        {
          title: "Find the early win",
          description:
            "Identify one thing you can ship in 30 days that signals competence and momentum without being a vanity project.",
        },
        {
          title: "Calibrate up",
          description:
            "Get clear on what your CEO or board expects in the first quarter, half, and year. Write it down. Confirm it.",
        },
      ],
    },
    {
      eyebrow: "Build",
      title: "30 to 90 days",
      points: [
        {
          title: "Set the operating system",
          description:
            "Cadence, rituals, decision-making frameworks. Make the way you run the function visible and predictable.",
        },
        {
          title: "Move on the team",
          description:
            "Most senior hires wait too long on people calls. Make the obvious moves early. The team and the board will thank you.",
        },
        {
          title: "Pick your three",
          description:
            "Choose the three priorities that will define your first year. Communicate them relentlessly. Cut the rest.",
        },
        {
          title: "Earn trust through delivery",
          description:
            "Ship the early win. Communicate it crisply. Trust compounds when you do what you said you would.",
        },
      ],
    },
    {
      eyebrow: "Lead",
      title: "Beyond day 100",
      body: [
        "By day 100, the role is no longer new. The expectation shifts from observation to ownership. Your job now is to set direction, build the team that delivers it, and protect the conditions for great work.",
        "The best executives we place share three habits: they communicate the same priorities until they're sick of saying them, they invest in their leaders ahead of need, and they keep one foot outside the company so they don't lose perspective.",
      ],
    },
  ],
  cta: {
    title: "Stepping into a senior role?",
    description:
      "P&C Partners places executives across Australia. If you're moving into a leadership role, we'd like to meet.",
  },
};
