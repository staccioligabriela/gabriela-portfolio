// Every image or file path from public/ must go through asset() so it still
// works when the site is served from a sub-path on GitHub Pages.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
