# Gabriela Staccioli, portfolio

Gabriela's personal portfolio website. You update it by talking to Claude; no coding needed.

## Everyday use

Open this folder in the **Code** tab of the Claude desktop app and just say what you want, in English or Spanish:

- "Add a new project": drop in your notes, a PDF or screenshots and Claude writes it up
- "Change my intro to …"
- "Update the Skualo numbers"
- "Add my CV as a download" (drag the PDF into the chat)
- "Replace my photo with this one"
- "Show me a preview"
- **"Publish"**: makes your changes live (takes about 2 minutes)
- **"Undo that"** / "Put the site back to how it was yesterday"

Claude always shows you a preview and asks before anything goes live.

## If something goes wrong

Nothing is ever lost. Every published version is saved, and Claude can undo any change. If Claude gets stuck or something looks broken, ask Mathias.

---

## For Mathias

Same stack as womeninmarketing.no: Next.js 16 + Tailwind v4 static export, GitHub Actions → GitHub Pages. Content is in `src/data/`; see [CLAUDE.md](CLAUDE.md) for structure and conventions.

Differences from the WiM repo:

- `basePath` is driven by `PAGES_BASE_PATH`, which the workflow fills from `actions/configure-pages`. So it works as a project site (`<user>.github.io/<repo>/`), a user site, or behind a custom domain with no code change.
- Use `asset()` from `src/lib/asset.ts` for anything in `public/`; `next/link` handles internal links.
- Font is self-hosted via `@fontsource-variable/bricolage-grotesque` instead of `next/font/google` (builds offline, no Google fetch at build time).
- `trailingSlash: true`, so project pages export as `/work/<slug>/index.html`.

### Connecting GitHub (one time)

```bash
# from this folder, after `npm install` (the local repo already has an initial commit on main)
gh repo create <owner>/gabriela-portfolio --private --source=. --remote=origin --push
# GitHub Pages on a free plan needs a public repo: use --public instead, or upgrade.
gh api -X POST "repos/<owner>/gabriela-portfolio/pages" -f build_type=workflow
```

Then check the first run with `gh run list --limit 1` and get the URL with `gh api repos/<owner>/gabriela-portfolio/pages --jq .html_url`. If Gabi should publish herself, either create the repo under her account or add her as a collaborator.

Custom domain later: add `public/CNAME`, set the domain in repo Settings → Pages, and point DNS at GitHub. The base path becomes empty automatically.
