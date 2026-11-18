export interface Stat {
  value: string; // The big number or word, e.g. "527%" or "€35"
  label: string; // What it means, in a few words
}

export interface Profile {
  name: string;
  role: string; // Shown under the name, e.g. "Marketing Manager"
  headline: string; // The big sentence at the top of the page
  intro: string; // One or two sentences under the headline
  location: string;
  availability: string; // e.g. "Open to roles in Oslo and remote"
  email: string;
  linkedIn: string;
  instagram?: string;
  cv?: string; // Optional path to a PDF in public/, e.g. "/cv/gabriela-staccioli-cv.pdf"
  photo: string; // Path in public/, e.g. "/images/gabriela.jpg"
  photoAlt: string;
  bio: string[]; // About section, one string per paragraph
  languages: { name: string; level: string }[];
  skills: { group: string; items: string[] }[];
}

export interface ProjectSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface Project {
  slug: string; // Used in the page address: /work/<slug>. Lowercase, dashes only.
  title: string; // Client or project name
  role: string; // Gabriela's role on it
  place: string; // City / country
  period: string; // e.g. "2020 to 2022"
  summary: string; // One sentence for the list on the home page
  highlight?: Stat; // One headline result shown in the list
  cover?: string; // Optional image in public/projects/
  coverAlt?: string;
  link?: { label: string; url: string }; // Optional external link
  intro: string; // Opening paragraph on the project page
  results?: Stat[];
  sections: ProjectSection[];
  quote?: { text: string; author: string };
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  organisation: string;
  place?: string; // Optional, e.g. left out for freelance work
  start: string; // e.g. "2024"
  end: string; // e.g. "Now" or "2022"
  summary: string;
  project?: string; // Optional slug of a related project
}

export interface EducationItem {
  title: string;
  school: string;
  place: string;
  years: string;
}
