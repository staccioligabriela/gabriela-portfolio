import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

// Runs at build time. Fails the build with a readable message if content is
// malformed, so a typo never reaches the live site.
export function validateContent() {
  const problems: string[] = [];

  const fileExists = (src: string) =>
    src.startsWith("/") && fs.existsSync(path.join(process.cwd(), "public", src));
  const isHttps = (url: string) => url.startsWith("https://");

  // Profile
  if (!fileExists(profile.photo)) {
    problems.push(`Profile: photo "${profile.photo}" not found in public/.`);
  }
  if (profile.cv && !fileExists(profile.cv)) {
    problems.push(`Profile: CV file "${profile.cv}" not found in public/.`);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
    problems.push(`Profile: email "${profile.email}" doesn't look like an email address.`);
  }
  if (!isHttps(profile.linkedIn)) problems.push("Profile: linkedIn must start with https://");
  if (profile.instagram && !isHttps(profile.instagram)) {
    problems.push("Profile: instagram must start with https://");
  }

  // Projects
  const seen = new Set<string>();
  for (const project of projects) {
    const label = `Project "${project.title}"`;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(project.slug)) {
      problems.push(`${label}: slug "${project.slug}" must be lowercase letters, numbers and dashes only.`);
    }
    if (seen.has(project.slug)) {
      problems.push(`${label}: slug "${project.slug}" is used by more than one project.`);
    }
    seen.add(project.slug);
    if (project.cover && !fileExists(project.cover)) {
      problems.push(`${label}: cover image "${project.cover}" not found in public/.`);
    }
    if (project.cover && !project.coverAlt) {
      problems.push(`${label}: add a coverAlt describing the cover image.`);
    }
    if (project.link && !isHttps(project.link.url)) {
      problems.push(`${label}: link url must start with https://`);
    }
  }

  // Experience
  for (const item of experience) {
    if (item.project && !seen.has(item.project)) {
      problems.push(
        `Experience "${item.organisation}": project "${item.project}" doesn't match any project slug.`,
      );
    }
  }

  if (problems.length > 0) {
    throw new Error(`Content check failed:\n- ${problems.join("\n- ")}`);
  }
}
