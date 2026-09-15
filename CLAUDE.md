# CLAUDE.md

Working notes for Claude Code in this repo. See [README.md](README.md) for the human-facing project description. Global git/commit/response-style conventions live in the user's `~/.claude/CLAUDE.md` and apply here too.

## Stack

Plain HTML/CSS/JS, no build tooling, no framework, no backend. Deliberately kept simple since this is just a landing page linking out to other projects.

Start the preview with the Browser tool's `preview_start` using name `the-spell-forge` (config in `.claude/launch.json`), not Bash/PowerShell.

## Adding a project to the hub

Append an object to the `PROJECTS` array in [projects.js](projects.js) — `app.js` renders whatever is in that array, no other code changes needed. Fields: `name`, `tagline`, `stack` (or `null`), `status` (`"active"` or `"planned"`), `link` (GitHub repo URL, or `null` for a placeholder card).

## Where things live

- `index.html` — page shell only, no content.
- `projects.js` — the project catalog (data).
- `app.js` — renders cards from `PROJECTS` into `#projects`.
- `styles.css` — dark/ember theme.
