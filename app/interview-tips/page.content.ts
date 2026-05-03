import type { GuidePageContent } from "@/components/guide-page";

// Placeholder copy. Final wording will be supplied via Claude chat.
export const interviewTipsContent: GuidePageContent = {
  hero: {
    eyebrow: "Interview Tips",
    title: "Walk in prepared. Walk out memorable.",
    subtitle:
      "Senior interviews reward structure, signal, and self-awareness. Here's how to prepare without sounding rehearsed.",
  },
  sections: [
    {
      eyebrow: "Before the interview",
      title: "Prepare with intent",
      points: [
        {
          title: "Research beyond the about page",
          description:
            "Read recent news, listen to leadership podcasts, and study the team you'd join. Bring observations, not facts.",
        },
        {
          title: "Map the brief to your evidence",
          description:
            "Pick three to five outcomes that map directly to the role. Have numbers, names, and dates ready.",
        },
        {
          title: "Plan your questions",
          description:
            "Bring four questions: one about strategy, one about the team, one about success measures, one about the first 90 days.",
        },
        {
          title: "Logistics matter",
          description:
            "Confirm format, panel members, and tech setup. For video, test camera, lighting, and audio in advance.",
        },
      ],
    },
    {
      eyebrow: "During the interview",
      title: "Show signal, not slogans",
      points: [
        {
          title: "Lead with outcomes",
          description:
            "Frame answers around the impact, then the approach, then the lesson. Numbers beat adjectives.",
        },
        {
          title: "Listen for the actual question",
          description:
            "Pause, clarify if needed, and answer what was asked. Senior interviews reward precision over volume.",
        },
        {
          title: "Be honest about gaps",
          description:
            "Don't bluff. Acknowledge what you haven't done and how you'd approach it. Confidence with humility lands well.",
        },
        {
          title: "Match the room",
          description:
            "Read the energy. A formal panel and a working session need different tones. Adjust without losing yourself.",
        },
      ],
    },
    {
      eyebrow: "After the interview",
      title: "Close the loop",
      points: [
        {
          title: "Send a sharp follow-up",
          description:
            "Within 24 hours, thank them, reference one specific point from the conversation, and reaffirm your interest.",
        },
        {
          title: "Debrief honestly",
          description:
            "Note what landed and what didn't. Use it for the next round and the next conversation.",
        },
      ],
    },
  ],
  cta: {
    title: "Interviewing soon?",
    description:
      "P&C consultants prep candidates before every senior interview we run. Reach out and we'll talk through the brief.",
  },
};
