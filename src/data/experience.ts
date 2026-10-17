import type { EducationItem, ExperienceItem } from "@/lib/types";

// Newest first.
export const experience: ExperienceItem[] = [
  {
    role: "Marketing Manager",
    organisation: "Mesh Oslo",
    place: "Oslo",
    start: "2024",
    end: "Now",
    summary:
      "Content, events and community for two locations. Social, newsletter, photo and video, agency and freelancer coordination.",
    project: "mesh-oslo",
  },
  {
    role: "Co-founder and host",
    organisation: "Women in Marketing",
    place: "Oslo",
    start: "2026",
    end: "Now",
    summary: "A community and event series for women in marketing in Norway.",
    project: "women-in-marketing",
  },
  {
    role: "Media Team Lead, volunteer",
    organisation: "Startup Extreme",
    place: "Norway",
    start: "2024",
    end: "2024",
    summary: "Led the volunteer media team from planning to on-site production.",
    project: "startup-extreme",
  },
  {
    role: "Social Media Manager and Content Creator",
    organisation: "Skualo Porto Cristo Diving Center",
    place: "Mallorca",
    start: "2020",
    end: "2022",
    summary: "Sole social media manager. Content, campaigns, email and CRM.",
    project: "skualo-porto-cristo",
  },
  {
    role: "Junior Content Creator",
    organisation: "Zink Possible",
    place: "Mallorca",
    start: "2019",
    end: "2019",
    summary: "Content strategy, social media and reputation management for agency clients.",
  },
];

export const education: EducationItem[] = [
  {
    title: "BA in Interaction Design and Technology",
    school: "NTNU Gjøvik",
    place: "Norway",
    years: "2022 to 2024",
  },
  {
    title: "BA in Interaction Design and Technology, first two years",
    school: "Universitat de Lleida",
    place: "Spain",
    years: "2020 to 2022",
  },
  {
    title: "Higher Education Certificate in Marketing and Advertising",
    school: "IES Manacor",
    place: "Spain",
    years: "2019",
  },
];
