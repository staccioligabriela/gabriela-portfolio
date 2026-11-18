import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Gabriela Staccioli",
  role: "Marketing Manager",
  headline: "Content that gets people in the room.",
  intro:
    "I plan the content, run the events and look after the community at Mesh Oslo. I write in English and Spanish, and I shoot and edit a lot of it myself.",
  location: "Oslo, Norway",
  availability: "Open to marketing roles in Oslo and remote",
  email: "staccioligabriela@gmail.com",
  linkedIn: "https://www.linkedin.com/in/gabrielastaccioli",
  instagram: "https://www.instagram.com/gabrielastaccioli",
  photo: "/images/gabriela.jpg",
  photoAlt: "Portrait of Gabriela Staccioli smiling, wearing an olive green top",
  bio: [
    "I started in marketing at a small agency in Mallorca, then spent two seasons as the only social media person at a diving center, where I learned how far good organic content can go on almost no budget.",
    "Since 2024 I've been the Marketing Manager at Mesh Oslo, a professional community across two locations. I run content for LinkedIn, Instagram, Meta, Slack and the newsletter, cover our events with photo and video, and work with a network of freelancers and our ads agency to keep everything on brand.",
    "Alongside that I co-founded Women in Marketing, a community and event series for women working in marketing in Norway. I use AI tools like Claude every day to plan, write and edit faster.",
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "Catalan", level: "Native" },
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "B1" },
    { name: "Norwegian", level: "Basic" },
  ],
  skills: [
    {
      group: "Strategy and writing",
      items: [
        "Content strategy",
        "Copywriting in English and Spanish",
        "Storytelling",
        "Email marketing (Mailchimp, Mailsuite)",
      ],
    },
    {
      group: "Community and events",
      items: [
        "Event marketing and production",
        "Social media management (LinkedIn, Instagram, Meta)",
        "Community management and CRM",
        "Coordinating photographers, videographers and agencies",
      ],
    },
    {
      group: "Making things",
      items: [
        "Event and portrait photography",
        "Video editing (CapCut, Adobe Premiere)",
        "Adobe Creative Suite, Figma, Canva",
        "AI workflows (Claude, ChatGPT, CapCut AI)",
        "WordPress",
      ],
    },
  ],
};
