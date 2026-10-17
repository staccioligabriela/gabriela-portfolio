---
name: publish
description: Publish changes to the live portfolio website (commit and push to main, then confirm the deploy). Use when Gabriela says publish, go live, deploy, push, save to the website, "make it live", or "publícalo".
---

# Publish the portfolio

Pushing to `main` on GitHub deploys the live site automatically in about 2 minutes. Never publish a broken build and never force-push.

## 1. What is being published?

Run `git status` and `git diff --stat`. If nothing has changed, tell her there's nothing new to publish and stop.

Normally only content is published: files in `src/data/`, `src/components/`, `src/app/`, `public/images/`, `public/projects/`, `public/cv/`, and similar. If anything else changed (`package.json`, `.github/`, `next.config.ts`, `.claude/`, CLAUDE.md, or files you don't recognise), stop and ask whether she meant to change it. If she's unsure, leave those files out of the commit.

Never commit `node_modules/`, `.next/`, `out/`, `.env*`, or `.DS_Store`.

## 2. Build

Run `npm run build`. If it fails, fix the problem first and explain it in one plain sentence. Do not continue until the build passes.

## 3. Confirm with her

Summarise the changes in plain language (e.g. "Adds the Oslo Innovation Week project with its cover photo; updates the LinkedIn growth number on Mesh Oslo") and ask: **"Ready to publish this to your website?"** Wait for a clear yes.

If she has just said yes to "Let me know if I should get this live" after seeing a summary of these same changes, that counts as the confirmation. Don't ask again. If she hasn't seen the changes in the preview yet, show them first.

## 4. Commit

Stage the specific files (`git add <paths>`, not `git add -A`), then commit with a short, descriptive message, e.g. `Add Oslo Innovation Week project`.

## 5. Get up to date with the live version

Someone else (e.g. Mathias) may have published since this session started.

- If no remote is set (`git remote -v` is empty), stop: the GitHub repo hasn't been connected yet. Tell her Mathias needs to finish the GitHub setup (see README, "For Mathias").
- Run `git fetch origin main`.
- If the session is in a worktree the Claude app created, use the app's sync-with-base-branch tool. Otherwise run `git merge origin/main` (if on a branch) or `git pull --no-rebase origin main` (if on `main`).
- **If there is a merge conflict:** if it is simple (e.g. two projects added at the same place in `projects.ts`), keep both sides and tell her what you did. Otherwise stop, explain in plain words, and suggest she contacts Mathias. Never discard someone else's changes.
- If anything came in, run `npm run build` again.

## 6. Push

- On `main`: `git push origin main`
- On any other branch (e.g. a `claude/...` worktree branch): `git push origin HEAD:main`

If the push is rejected:
- "non-fast-forward" / "fetch first" → go back to step 5.
- Authentication / 403 / permission denied → run the `setup` skill's GitHub access step.
- Never use `--force`.

## 7. Confirm it went live

Run `gh run list --branch main --limit 3`, then `gh run watch <id>` on the newest "Deploy to GitHub Pages" run. If `gh` is unavailable, wait about 2 minutes instead.

- Success → find the address with `gh api "repos/{owner}/{repo}/pages" --jq .html_url` and tell her it's live there. She may need to hard-refresh (Cmd+Shift+R) to see it.
- Failure → run `gh run view <id> --log-failed`, explain simply, fix and publish again, or suggest contacting Mathias if it's not a content problem.
