# Showcase Operations Master

Internal knowledge base for the Showcase Tech Ops team. Built with Docusaurus, hosted on GitHub Pages.

**Live site:** https://showcase-msga.github.io/showcase-operations-master/

---

## Status

🟡 **Setup phase.** Site is live with placeholder data only. Real client data will be added after auth is in place.

---

## Stack

- **Docusaurus 3** (static site generator, Markdown to HTML)
- **GitHub Pages** (hosting, free)
- **GitHub Actions** (auto-deploy on push to `main`)
- **Obsidian** (where Jordan edits content)

---

## How it works

```
┌──────────────┐    ┌─────────┐    ┌────────────────┐    ┌──────────────┐
│   Obsidian   │ →  │   Git   │ →  │ GitHub Action  │ →  │ GitHub Pages │
│  (edit MD)   │    │  push   │    │   (build)      │    │   (live URL) │
└──────────────┘    └─────────┘    └────────────────┘    └──────────────┘
```

1. Jordan edits Markdown in Obsidian (vault points at `docs/`)
2. Obsidian Git plugin auto-commits and pushes to GitHub
3. GitHub Action runs, builds the site, deploys to `gh-pages` branch
4. Site updates at the live URL within 60 to 90 seconds

---

## First-time setup

### 1. Install Node.js

Required version: **20 LTS** or higher.

Download from https://nodejs.org. Confirm with:

```bash
node -v
```

### 2. Clone the repo

```bash
git clone https://github.com/showcase-msga/showcase-operations-master.git
cd showcase-operations-master
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run locally

```bash
npm start
```

Site opens at `http://localhost:3000`. Live reload on file save.

### 5. Build for production (test before deploy)

```bash
npm run build
npm run serve
```

Checks for broken links and build errors. Run this before pushing if you've made structural changes.

---

## Adding a new project

1. Copy `docs/templates/project-template.md`
2. Save as `docs/projects/[project-id].md` (e.g. `shc-2026-014.md`)
3. Update the frontmatter:
   ```yaml
   ---
   id: shc-2026-014
   title: SHC-2026-014 — Project Name
   sidebar_label: SHC-2026-014
   lifecycle_stage: Sales
   state: NSW
   go_live_date: 2026-XX-XX
   ---
   ```
4. Fill in the sections
5. Commit and push (or let Obsidian Git plugin do it)
6. Site updates in ~60 seconds

---

## GitHub Pages setup (one-time, in repo settings)

After the first push to `main`, the GitHub Action will create a `gh-pages` branch.

Then in the repo:

1. Go to **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `(root)`
4. Save

URL will be live within a few minutes.

---

## Connecting Obsidian

1. Open Obsidian → **Open another vault** → **Open folder as vault**
2. Point at the `docs/` folder of this repo
3. Install the **Obsidian Git** community plugin
4. Configure:
   - Auto-commit interval: every 5 minutes (or manual)
   - Auto-push after commit: enabled
   - Pull on startup: enabled

You can now edit Markdown files in Obsidian, and they sync to GitHub automatically.

---

## ⚠️ Data sensitivity rules

**Until auth is added, this site is publicly accessible.**

**Do not put on the site:**
- Real client or developer names
- Real IP addresses, MAC addresses, serial numbers
- Sales agreement contents or links to private Drive folders
- Site contact phone numbers or emails
- Network diagrams with real internal addresses

**Use placeholders instead** (see `docs/projects/shc-demo-001.md` for examples).

When auth is added (Cloudflare Access or similar), real data can be migrated in.

---

## Troubleshooting

### Build fails with "broken link"

Check `onBrokenLinks: 'warn'` in `docusaurus.config.js`. To enforce, change to `'throw'`. To find the broken link, check the build log.

### Site doesn't update after push

- Check the **Actions** tab in GitHub. The deploy workflow should have run.
- If it failed, click in to see the error.
- If it succeeded but the site looks old, hard-refresh the browser (`Ctrl+Shift+R` / `Cmd+Shift+R`).

### Sidebar doesn't show new project

Restart `npm start`. Docusaurus auto-generates the sidebar from the `docs/projects/` folder, but doesn't always pick up new files until restart.

---

## Future work (not now)

- Add Cloudflare Access for auth before real data goes in
- Migrate to `ops.showcase.space` subdomain
- Consider Decap CMS overlay if Boston needs to edit
- Add search filters by lifecycle stage, state, etc. (currently full-text only)
