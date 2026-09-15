# The Spell Forge

A static landing page listing tabletop-tool projects (SpellForge, Group Roller, and future tools). Plain HTML/CSS/JS, no build step.

See [CLAUDE.md](CLAUDE.md) for development/working notes.

## Running locally

Serve the folder with any static file server, e.g.:

```
npx serve .
```

## Deployment (Netlify)

Live at [thespellforge.com](https://thespellforge.com). No build step — `netlify.toml` just sets the publish directory to repo root.

**One-time setup:**
1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → GitHub → select `TheSpellForge`.
2. Build settings: leave build command empty, publish directory `.` (already set via `netlify.toml`, so Netlify should pick it up automatically).
3. Deploy. Netlify assigns a `*.netlify.app` subdomain first — confirm the site loads there.
4. **Site configuration → Domain management → Add a domain** → enter `thespellforge.com`.
5. Point DNS at Netlify — easiest option is to delegate the domain's nameservers to Netlify DNS (Netlify shows the exact nameservers to set at your registrar). Alternatively, keep your current DNS provider and add the records Netlify displays (typically an `A`/`ALIAS` record for the apex domain and a `CNAME` for `www`).
6. Netlify auto-provisions an HTTPS certificate once DNS resolves (can take a few minutes to a few hours).

After that, every push to `master` auto-deploys.
