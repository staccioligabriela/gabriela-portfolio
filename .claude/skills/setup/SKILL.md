---
name: setup
description: First-time setup of the portfolio project on a new computer, or fixing a broken setup. Use when she says "set up", "get started", "first time", when npm/node is missing, when node_modules is missing, or when a git push is rejected for authentication/permission reasons.
---

# First-time setup

Gabriela is non-technical. Explain each step in one plain sentence. Run the checks yourself; only hand things to her that need her password, a browser login, or an installer.

## 1. Command line tools (git)

Run `git --version`. If macOS pops up a dialog asking to install "command line developer tools", tell her to click **Install** and wait for it to finish (5 to 10 min), then continue.

## 2. Node.js

Run `node -v`. Need version 20 or newer.
If missing or older: ask her to download and run the **LTS** installer from https://nodejs.org, then fully quit and reopen the Claude app, and come back. You cannot install it for her.

## 3. Project packages

If `node_modules/` does not exist, run `npm install`. Warnings are normal; only errors matter.

## 4. Git identity

Run `git config user.name` and `git config user.email`. If either is empty, ask her for her name and the email she uses on GitHub, then set them with `git config --global user.name "..."` and `git config --global user.email "..."`.

## 5. GitHub access (needed to publish)

1. Check `git remote -v`. If there is no `origin`, the GitHub repo hasn't been connected yet: tell her Mathias needs to finish that step (README, "For Mathias") and skip to step 6.
2. She needs a GitHub account with write access to the repo (she owns it, or Mathias added her as a collaborator). If she's not sure, tell her to ask Mathias.
3. Check `gh auth status`.
   - If `gh` is not installed: ask her to install GitHub CLI from https://cli.github.com (download the macOS installer), then reopen the Claude app.
   - If not logged in: ask her to open the Terminal app and run `gh auth login` (choose GitHub.com → HTTPS → Yes to authenticate Git → Login with a web browser), then `gh auth setup-git`. She must do this herself because it involves her login.
4. Verify with `git fetch origin` and `git push --dry-run origin HEAD:main`. "Everything up-to-date" or a list of refs means it works. "Permission denied" or 403 means she doesn't have access yet → ask Mathias.

## 6. Check it all works

Run `npm run build`. If it succeeds, start the preview (see CLAUDE.md "Preview") and tell her setup is complete, with a short list of things she can ask for: add a project, change her intro, swap her photo, add her CV, publish, undo.
