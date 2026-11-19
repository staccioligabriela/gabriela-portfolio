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
      "Running content, marketing and events for a startup and tech community of 1,500+ members across two venues in central Oslo.",
    highlight: { value: "5x", label: "LinkedIn reach per post since 2024" },
    link: { label: "meshcommunity.com", url: "https://www.meshcommunity.com" },
    intro:
      "Mesh Oslo is one of Oslo's main hubs for startups, tech and the people around them: a community of 1,500+ members across two venues, Nationaltheatret and Youngstorget. I run content, marketing and event programming, from everything that goes out on LinkedIn, Instagram and the member newsletter to the events behind it.",
    results: [
      { value: "5x", label: "LinkedIn reach per post, from 424 to 2,262 impressions compared with 2024" },
      { value: "1,515", label: "new LinkedIn followers in 12 months, 99.4% organic" },
      { value: "3,366", label: "registrations for our three Oslo Innovation Week 2026 events" },
    ],
    sections: [
      {
        heading: "What I do",
        bullets: [
          "Plan and write all LinkedIn and Instagram content: event promos, bi-weekly roundups, recaps, carousels and Stories.",
          "Write the monthly member newsletter and campaign emails in Mailsuite, and run internal comms on Slack and the venue screens.",
          "Defined the Mesh Oslo brand voice and channel guidelines (honest, warm, informative) that the whole team now follows.",
          "Produce community events end to end, from concept, partners and speakers to promotion, on-site coordination and follow-up.",
          "Shoot event photo and video, edit short videos in CapCut and design social graphics in Figma and Canva.",
          "Track Instagram and LinkedIn against our yearly goals and report to stakeholders.",
        ],
      },
      {
        heading: "Oslo Innovation Week 2026",
        body: "Mesh was no longer the official Oslo Innovation Week headquarters, so I repositioned it as the place to be through content alone, working inside Oslo&Co's brand toolkit and with partners including DNB, deel. and TRY. I ran the campaign from September to November, with around 25 posts across LinkedIn, Instagram and the newsletter, and shot photo and video on site. Our three events drew 3,366 registrations from 2,108 unique people.",
        bullets: [
          "Opening Party, also the Mesh Hall of Fame induction: 1,359 registrations.",
          "AI Day, a new full-day format in the Atrium at Youngstorget, led by GritAI with deel. and TRY: 984 registrations and 387 people checked in.",
          "Official After Party with DNB NXT: 1,023 registrations.",
          "Campaign emails with open rates between 56% and 63%, including segmented follow-ups to attendees and no-shows.",
        ],
      },
      {
        heading: "Growing the channels",
        bullets: [
          "LinkedIn, over 12 months: 352,906 impressions, and more reactions (+116%) and comments (+309%) per post than in 2024, by posting less and better.",
          "Against Epicenter Oslo, we gained three times as many new LinkedIn followers and 84% more reactions.",
          "Instagram, January to mid-September 2026: 1,274 new followers and 818,858 views from 63 posts and 374 Stories.",
        ],
      },
      {
        heading: "Content that puts members first",
        bullets: [
          "Designed a member stories program with the sales and membership team: a shared list, a weekly 15 minute sync and two member features a month, plus a fixed newsletter block.",
          "Set up Mesh Ambassadors, where Mesh employees post about life at Mesh on their own profiles.",
          "Leading Knock Knock, Mesh, an advent calendar for December 2026 with one community member behind each of the 24 doors.",
        ],
      },
      {
        heading: "AI and analytics",
        bullets: [
          "Built the team's AI content system: Claude skills for every recurring format, a brand voice guide, a marketing manager agent and Zapier automations across LinkedIn, Instagram, Slack, Luma and Mailsuite.",
          "Built an interactive analytics dashboard in Python (Streamlit, hosted on Hugging Face) that brings our Instagram and LinkedIn data into one view, and used it to set our 2026 goals from real baselines.",
          "Built a content line around Mesh as Oslo's AI hub, from Claude Code and agent meetups to the AI for Marketers series with GritAI.",
        ],
      },
    ],
    tags: ["Content strategy", "Social media", "Events", "Newsletter", "Photo and video", "AI workflows"],
  },
  {
    slug: "women-in-marketing",
    title: "Women in Marketing",
    role: "Co-founder and host",
    place: "Oslo, Norway",
    period: "2026 to now",
    summary:
      "A community and event series for women working in marketing in Norway, which I run from concept to recap. Part of Oslo Innovation Week 2026.",
    cover: "/projects/women-in-marketing.jpg",
    coverAlt: "A room of people listening to a speaker at a Women in Marketing event about AI",
    link: { label: "womeninmarketing.no", url: "https://www.womeninmarketing.no" },
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
          "Workshop: Build Your Marketing System with Claude, at Mesh Nationaltheatret, November 2026",
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
      {
        heading: "Community and consulting",
        body: "Between events, members stay in touch in our Slack community and on Instagram. Barbara and I also offer hands-on consulting for brands and teams, covering brand and positioning, growth and campaigns, content and social, and AI and automation.",
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
  {
    slug: "save-the-posidonia",
    title: "Save the Posidonia",
    role: "Independent storytelling project",
    place: "Mallorca, Spain",
    period: "2023",
    summary:
      "A documentary video installation about how anchoring and mass tourism damage Posidonia seagrass in Mallorca.",
    intro:
      "Growing up on a small Mediterranean island, I watched an environmental problem grow with mass tourism: boat anchors damaging Posidonia, a seagrass that is critical to the health of the Mediterranean seabed. I wanted to turn a little-known issue into a story people could feel.",
    sections: [
      {
        heading: "The research",
        body: "To understand the problem beyond what I could see, I interviewed marine biologists and people who work every day to protect Posidonia, then filmed a series of underwater videos documenting the damage first-hand.",
      },
      {
        heading: "The output",
        body: "The result is a documentary video installation that blends reflection, data and art, built to make viewers stop and engage with a problem most tourists never notice. I did the research, photography and film myself.",
      },
      {
        heading: "The exhibition",
        body: "The installation was exhibited at the Lo Pardal gallery museum in Agramunt, Lleida, from July to October 2023.",
      },
    ],
    tags: ["Visual storytelling", "Documentary", "Underwater video", "Research"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
