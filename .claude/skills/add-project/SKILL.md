---
name: add-project
description: Add a new project or case study to the portfolio, or edit, reorder or remove an existing one. Use when Gabriela wants to add work, write up a campaign or event, update results or numbers on a project, change which projects are shown, or drops in a PDF, deck or screenshots from past work.
---

# Add or edit a project

Projects live in `src/data/projects.ts`. The fields are described in `src/lib/types.ts` (`Project`).

## 1. Gather the material

Ask, in one friendly message, for what's missing:
- Client or project name, her role, city/country, and when (e.g. "2023 to 2024")
- What it was, in a sentence or two
- What she did (rough notes are fine; you'll write them up)
- Results and numbers, with what they mean (reach, growth, attendees, sign-ups, budget…)
- A quote from a manager or client, if she has one
- A cover image (optional: ask her to drag it into the chat)

If she shares a PDF, deck, report or screenshots, read them and pre-fill as much as you can, then only ask for what's missing. Use only numbers that appear in her material or that she tells you. Never invent, estimate or round up a metric. If a result would help but isn't there, ask.

## 2. Write it up

- `slug`: the name in lowercase with dashes, e.g. `oslo-innovation-week`.
- `summary`: one sentence for the home page list.
- `highlight`: the single most impressive result, if there is one.
- `intro`: what the client/project is and what her job was.
- `results`: up to 3 numbers, each with a short label.
- `sections`: usually "What I did" plus one or two short stories (like "The whale post" in the Skualo project). Specific moments beat lists.
- `tags`: 3 to 5 skills.
- Follow the writing rules in CLAUDE.md: first person, plain verbs, no em dashes, no all caps.

## 3. Cover image

If she provides one:
- Shrink and convert it: `sips -s format jpeg -Z 1600 "<source path>" --out public/projects/<slug>.jpg`
- Set `cover: "/projects/<slug>.jpg"` and write a `coverAlt` describing what's in the picture.

Do not download images from the web without asking her first.

## 4. Confirm, then write it

Show her a plain-language summary (not code): title, role, dates, the headline result, and the story sections in a sentence each. Ask "Does this look right?" Once she says yes, add the entry to the `projects` array at the position she wants (ask if it's not obvious; newest or strongest work usually goes first). Match the formatting of the existing entries.

If the project should also appear on the experience timeline, add or update the entry in `src/data/experience.ts` and link it with `project: "<slug>"`.

**Editing:** change only the fields she asked about. **Reordering:** move entries in the array. **Removing:** delete the entry, any `project:` link to it in `experience.ts`, and its cover image.

## 5. Check and show

1. Run `npm run build`. If it fails, read the content check message, fix it, and rebuild.
2. Show the project in the preview right away: the home page list and the project page at `/work/<slug>/`. Look at both yourself with a screenshot, then tell her where to look.
3. Ask if she wants anything adjusted. When she seems finished, ask "Let me know if I should get this live." Only publish (with the `publish` skill) after she says yes.
