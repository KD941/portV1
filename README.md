# PortV1 — Markdown-driven Portfolio (React + Vite)

A simple portfolio site where content is stored in **markdown files** and images live in `public/`.

- Framework: React + TypeScript
- Bundler/dev server: Vite
- Content: `public/data/*.md` (YAML frontmatter)
- Images: `public/data/images/`

## Quick start

```bash
npm install
npm run dev
```
Open the local URL printed in your terminal (usually http://localhost:5173).

## Edit your content

All editable content lives here:

- `public/data/profile.md`
- `public/data/projects.md`
- `public/data/skills.md`
- `public/data/achievements.md`
- `public/data/certifications.md`
- `public/data/interests.md`

Images go here:

- `public/data/images/`

To attach multiple images to an item, use:

```yaml
images:
  - images/example-1.png
  - images/example-2.png
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build locally
- `npm run sync:data` — initialize **missing** starter files into `public/data/`

### About `sync:data`

This project previously reset data on each start.
That behavior has been fixed.

- `sync:data` is now **safe by default** (copies missing files only).
- It will not delete/overwrite your `public/data` content unless you force it.

Force overwrite (dangerous):

```powershell
$env:FORCE_SYNC_DATA="1"; npm run sync:data
```

## More help

See **GUIDE.md** for:
- YAML formatting rules
- common errors ("All sequence items must start at the same column")
- image path conventions
- troubleshooting steps
