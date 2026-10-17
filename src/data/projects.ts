import type { Project } from "@/lib/types";

// The order here is the order on the home page.
export const projects: Project[] = [
  {
    slug: "mesh-oslo",
    title: "Mesh Oslo",
    role: "Marketing Manager",
    place: "Oslo, Norway",
    period: "2024 to now",
    summary:
      "Running content, events and community for a professional community across two locations in central Oslo.",
    highlight: { value: "+527%", label: "LinkedIn followers in one quarter" },
    link: { label: "meshcommunity.com", url: "https://www.meshcommunity.com" },
    intro:
      "Mesh Oslo is a coworking and professional community with two locations, Nationaltheatret and Youngstorget. I'm responsible for how the community shows up online and how people hear about what happens in the buildings.",
    results: [
      { value: "+527%", label: "LinkedIn follower growth in a single quarter" },
      { value: "21,000+", label: "people reached promoting Oslo Innovation Week" },
      { value: "5", label: "channels run day to day, from LinkedIn to the newsletter" },
    ],
    sections: [
      {
        heading: "What I do",
        bullets: [
          "Produce and publish content across LinkedIn, Instagram, Meta, Slack and the monthly newsletter, adapting format and tone to each audience.",
          "Own event photography and video from concept to final cut, and write recaps that bring people who weren't there into the moment.",
          "Use reach, impressions and follower data to adjust what we post and when.",
          "Coordinate freelance photographers and videographers, and work with the agency that runs our paid ads so campaigns match our content and brand.",
          "Design posters, digital signage and social templates, and keep the WordPress site up to date.",
        ],
      },
      {
        heading: "Oslo Innovation Week",
        body: "For Oslo Innovation Week I ran the Mesh Oslo campaign across our channels and helped reach more than 21,000 people.",
      },
    ],
    tags: ["Content strategy", "Social media", "Events", "Newsletter", "Photo and video"],
  },
  {
    slug: "women-in-marketing",
    title: "Women in Marketing",
    role: "Co-founder and host",
    place: "Oslo, Norway",
    period: "2026 to now",
    summary:
      "A community and event series for women working in marketing in Norway, which I run from concept to recap.",
    cover: "/projects/women-in-marketing.jpg",
    coverAlt: "A room of people listening to a speaker at a Women in Marketing event about AI",
    link: { label: "womeninmarketing.no", url: "https://womeninmarketing.no" },
    intro:
      "Together with Barbara Casique, I started Women in Marketing to give women in the industry a place to learn from each other, share what's working and build a network. I handle the concept, programming, content and hosting.",
    sections: [
      {
        heading: "Events so far",
        bullets: [
          "Spill the Beans",
          "Follow the Trend… or Don't",
          "AI for Marketers, with Grit AI",
          "The Human Algorithm: How to Get Found and Trusted in the Age of AI, part of Oslo Innovation Week",
          "Claude workshops for marketers",
        ],
      },
      {
        heading: "What I do",
        bullets: [
          "Shape each event's topic, format and speakers.",
          "Write and design the event pages, social posts and email invitations.",
          "Host on the night and produce the photo and video recaps afterwards.",
        ],
      },
    ],
    tags: ["Community building", "Event production", "Partnerships", "Hosting"],
  },
  {
    slug: "skualo-porto-cristo",
    title: "Skualo Porto Cristo",
    role: "Social Media Manager and Content Creator",
    place: "Mallorca, Spain",
    period: "2020 to 2022",
    summary:
      "Two seasons of growth for a diving center in Mallorca, almost entirely from organic content.",
    highlight: { value: "291,465", label: "organic reach on Facebook in 2022" },
    intro:
      "Skualo is a seasonal diving and water sports center in Porto Cristo, Mallorca. I joined as their only social media manager and built Facebook and Instagram from the ground up, with almost no paid budget.",
    results: [
      { value: "291,465", label: "organic Facebook reach in 2022, up 1,167.8% on the year before" },
      { value: "+113%", label: "Instagram follower growth in 2022" },
      { value: "€35", label: "total paid media spend for the whole year" },
    ],
    sections: [
      {
        heading: "Strategy",
        bullets: [
          "Built a buyer persona, \"Alicia\", to guide content and targeting.",
          "Set separate strategies for Facebook and Instagram, including hashtags, location tags and content mix.",
          "Posted in Spanish and English, because the audience split between locals and visitors from Germany, France and the UK.",
        ],
      },
      {
        heading: "Content",
        bullets: [
          "Planned monthly calendars and shot, edited and wrote everything myself.",
          "Published 27 feed posts, 6 Reels and 222 Stories in 2022.",
          "The 2022 season recap Reel reached 2,457 accounts and played 2,772 times without any paid push.",
        ],
      },
      {
        heading: "The whale post",
        body: "In March 2022 a humpback whale got caught in illegal fishing nets near Porto Cristo. I created a post documenting the rescue, and it became the best performing post of the year on both platforms: 8,566 people reached on Facebook, 388 reactions and 39 shares. Fast, local, emotional stories beat everything else for a small seasonal account.",
      },
      {
        heading: "A €35 campaign",
        body: "The one paid campaign of the year ran for four days to promote the Dive Camp. It reached 7,250 people and got 180 interactions.",
      },
    ],
    tags: ["Organic growth", "Photo and video", "Bilingual content", "CRM"],
  },
  {
    slug: "startup-extreme",
    title: "Startup Extreme",
    role: "Media Team Lead, volunteer",
    place: "Oslo, Norway",
    period: "2024",
    summary:
      "Led the volunteer media team for Startup Norway's event for founders and investors.",
    intro:
      "Startup Extreme, run by Startup Norway, is an event for founders and investors. I led its volunteer media team.",
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Matched volunteers to the event's marketing needs by skill, from content planning to on-site production.",
          "Wrote the event's Code of Conduct and published it on social and web, then acted as on-site contact if issues came up.",
          "Selected and organised content for distribution after the event, and reported back to leadership on how the team and event performed.",
        ],
      },
    ],
    quote: {
      text: "Excelled at coordinating our entire volunteer team with remarkable management skills.",
      author: "Barbara Casique, Head of Marketing, Startup Extreme",
    },
    tags: ["Team leadership", "Event content", "Volunteer coordination"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
