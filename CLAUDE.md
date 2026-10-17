# CLAUDE.md

This repo is **Gabriela Staccioli's personal portfolio website**, a static site hosted on GitHub Pages. She uses it when applying for Marketing Manager roles in Oslo and remote.

## Who you're working with

The person you're talking to is most likely **Gabriela** herself. She is a marketer, not a developer. She knows the content (projects, results, photos, copy) but not code, git, or the terminal.

- She may write in Spanish or English. Reply in the language she uses. Site copy stays in English unless she asks otherwise.
- Speak in plain language. Say "the website", "publish", "undo", not "commit", "push", "revert", "build". Don't show code or diffs unless she asks; describe changes in words instead.
- Do the technical work yourself. Only ask her for decisions and content.
- Always confirm before anything goes live, with a short plain-language summary of what will change.
- Keep changes small and limited to what she asked for. Don't refactor, restyle, upgrade packages, or "improve" things she didn't mention.
- If something looks technical or risky (build config, deployment, dependencies, anything outside content), stop and suggest she contacts **Mathias**, who set the site up. Reassure her nothing is lost: all published versions are in git history.
- She's a strong copywriter. When she asks for help with wording, offer a version or two in her voice, but her words win.

If the person says they are Mathias, you can drop the plain-language rules and talk like you would to a developer.

## Start of every session

1. If `node_modules/` is missing or `node`/`npm` isn't found, use the `setup` skill.
2. Run `git status`. If there are leftover changes from a previous session, tell her what they are and ask whether to publish or discard them before starting something new.
3. If a remote is set (`git remote -v`), run `git fetch origin main` and bring the local copy up to date (see the `publish` skill, step 5) so you're editing the latest version.

## Skills (in `.claude/skills/`)

| Skill         | Use when she wants to…                                             |
|---------------|--------------------------------------------------------------------|
| `setup`       | set up on a new computer, or when node/git/GitHub access fails     |
| `add-project` | add, edit, reorder or remove a project / case study                |
| `publish`     | make changes live on the website                                   |
| `undo`        | revert a change, published or not                                  |

## Commands

- `npm run dev`: local preview at http://localhost:3000
- `npm run build`: production build (static export to `out/`); also runs the content check
- `npm run lint`: ESLint
- `npm run setup`: install dependencies and start the preview

## Preview

In the Claude desktop app, start the `website` preview from `.claude/launch.json` so she sees the site in the browser pane. Otherwise run `npm run dev` in the background and tell her to open http://localhost:3000.

## How every change works: preview first, publish when she's done

Whenever she asks for a change (a project, text, a photo, a link, anything), follow this loop. Never publish straight after an edit.

1. **Make the change** on this computer only.
2. **Check it** with `npm run build`. If it fails, fix it before showing anything.
3. **Show it.** Start the `website` preview if it isn't running (reuse it if it is), go to the page or section you changed, and look at it yourself with a screenshot to make sure it looks right, on a phone-width view too if the change affects layout. Then tell her in one or two plain sentences what changed and where to look.
4. **Keep going.** Ask if she wants anything adjusted. Repeat steps 1 to 3 for each tweak. Changes pile up on this computer; nothing goes live yet.
5. **When she seems finished** (she says it looks good, "perfect", "that's it", or stops asking for tweaks), give a short plain-language summary of everything that's changed since the last publish and ask: **"Let me know if I should get this live."**
6. **Only when she says yes**, use the `publish` skill. Her yes to step 5 counts as the publish confirmation, so don't ask a second time.

If she asks to publish before seeing a preview, show the preview first anyway and ask once more.

## Safety rules

- **Always run `npm run build` before publishing.** Never publish if it fails.
- **Never** force-push, `git reset --hard`, `git rebase`, `git clean`, delete branches, or rewrite history. Undo by making a new change on top (`git revert`).
- Only edit content files (see below) unless she explicitly asks for something else. Don't touch `.github/`, `package.json`, `package-lock.json`, `next.config.ts`, or `.claude/` without flagging that this is a technical change.
- Don't run `npm update`, `npm audit fix`, or install new packages.
- Publishing goes straight to the live site. There is no staging, so the confirmation step matters.
- Never put her phone number, home address or other private details on the site. Email, LinkedIn and Instagram are fine.
- Only state results and numbers she has given you or that are already in the content. Never invent or round up metrics. If a number is missing, ask her for it.

## Content: almost everything lives in `src/data/`

The pages are built from three data files. Most requests are edits to one of these. Field descriptions are in `src/lib/types.ts`.

| What                                   | File                     |
|----------------------------------------|--------------------------|
| Name, headline, intro, bio, contact links, languages, skills, CV download | `src/data/profile.ts` |
| Projects / case studies (home page list and `/work/<slug>` pages) | `src/data/projects.ts` |
| Experience timeline and education      | `src/data/experience.ts` |

- The order of `projects` is the order on the home page.
- A project's `highlight` is the one big result shown in the home page list. Without it, the list shows "Read the story".
- `results` are the big numbers on the project page. Keep them to 3 so the row stays balanced.
- To offer a CV download: put the PDF in `public/cv/` (e.g. `public/cv/gabriela-staccioli-cv.pdf`) and set `cv: "/cv/gabriela-staccioli-cv.pdf"` in `profile.ts`. A "Download my CV" button appears in the contact section.

Page layout lives in `src/components/` (one file per home page section) and `src/app/work/[slug]/page.tsx` (project pages). Only touch these when she asks for layout or design changes, and when editing copy there, change only the text, not `className` or structure.

### Images

- **Her portrait** → `public/images/`, referenced as `/images/gabriela.jpg`
- **Project covers** → `public/projects/`, referenced as `/projects/<slug>.jpg`. Always add a `coverAlt` that describes the image.
- File names: lowercase, dashes, no spaces.
- Always shrink before adding: `sips -s format jpeg -Z 1600 "<source>" --out public/<folder>/<name>.jpg`. Phone photos can be 5 to 10 MB, which makes the site slow.
- **Always use the `asset()` helper** from `src/lib/asset.ts` for any `src` or `href` that points into `public/` (e.g. `src={asset(profile.photo)}`). The site may be served from a sub-path on GitHub Pages and plain `/images/...` paths will break there. Internal page links should use `next/link`, which handles this automatically.

## Content check

`src/lib/validateContent.ts` runs during the build and fails it with a readable message if an image or CV file is missing from `public/`, a link doesn't start with `https://`, a project slug is invalid or duplicated, or an experience entry points at a project that doesn't exist. If the build fails with "Content check failed", fix the listed items.

## Design rules

The look is "the Oslo fjord meets the Mallorca coast". Colors are Tailwind tokens defined in `src/app/globals.css`:

- `spray` (#EEF4F2): page background
- `foam` (#FFFFFF): raised sections
- `fjord` (#12343B): text and dark sections
- `seagrass` (#2F6B4F): secondary accent, links, numbers
- `sunlit` (#F2C14E): the one bright accent; use sparingly (contact section, focus rings, small highlights)
- `mist` (#4A666C): muted text

Typography: Bricolage Grotesque (self-hosted via `@fontsource-variable`), one family for everything. Big headings use the `display` class. The signature element is her photo in the arch shape (`arch` class) in the hero; don't repeat the arch elsewhere.

Writing rules:
- Never use em dashes (—) in site copy. Use a comma, a full stop, or "to" for ranges ("2020 to 2022").
- No all-caps labels, no arrows (→) in link text, no "A · B · C" strings.
- Warm, confident, specific. Plain verbs, first person, sentence case.

## Tech stack and architecture

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, same stack as womeninmarketing.no
- Static export (`output: "export"`, `trailingSlash: true`): no database, no backend
- Home page: Header → Hero → Selected work → About → Experience → Contact → Footer
- Project pages: `/work/<slug>/`, generated from `projects.ts` via `generateStaticParams`
- `basePath` comes from the `PAGES_BASE_PATH` env var (empty locally). The deploy workflow fills it from `actions/configure-pages`, so the site works at `username.github.io/<repo>/`, at `username.github.io`, or on a custom domain without code changes.

**Deployment:** Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds the static export → deploys to GitHub Pages (about 2 minutes). Check status with `gh run list --branch main --limit 3`. Find the live address with `gh api "repos/{owner}/{repo}/pages" --jq .html_url`.
