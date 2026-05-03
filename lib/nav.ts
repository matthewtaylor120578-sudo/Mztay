export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/salary-guide", label: "Salary Guide" },
  { href: "/interview-tips", label: "Interview Tips" },
  { href: "/salary-negotiation", label: "Salary Negotiation" },
  { href: "/counter-offer-advice", label: "Counter-Offer Advice" },
  { href: "/executive-playbook", label: "Executive Playbook" },
];
