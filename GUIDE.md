# PortV1 — Content & Customization Guide

This portfolio is **data-driven**.
Most of what you see on the site comes from markdown files in:

- `public/data/*.md`

Images referenced in those markdown files live in:

- `public/data/images/`

No database is required. If you edit the markdown and add images, the site updates on refresh.

---

## 1) Run the project

### Install
```bash
npm install
```

### Start dev server
```bash
npm run dev
```
Vite will print a local URL (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
npm run preview
```

---

## 2) Where your content lives

All editable content files are here:

- `public/data/profile.md`
- `public/data/projects.md`
- `public/data/skills.md`
- `public/data/achievements.md`
- `public/data/certifications.md`
- `public/data/interests.md`

Each file is **frontmatter YAML** wrapped by `---` at the top and bottom.

Example:
```yaml
---
intro: Hello
items:
  - title: Example
    description: Something
---
```

### Critical YAML rules (to avoid the “All sequence items must start at the same column” error)

1. Indentation matters. Use **spaces**, not tabs.
2. All list items under the same key must align:
   - good:
     ```yaml
     achievements:
       - title: A
       - title: B
     ```
   - bad:
     ```yaml
     achievements:
       - title: A
        - title: B
     ```
3. Keys like `images:` must either be an empty array `[]` **or** a properly-indented list.

---

## 3) Adding images (single / multiple)

### 3.1 Put image files in the images folder
Copy your files into:

- `public/data/images/`

Use simple filenames (recommended):
- `ROBOFEST1.jpeg`
- `project-1.png`

### 3.2 Reference images in markdown
In your `.md` file, reference images **relative to `public/data/`**.

So if the file path is:
- `public/data/images/ROBOFEST1.jpeg`

Then write:
```yaml
images:
  - images/ROBOFEST1.jpeg
```

### 3.3 Multiple images in the same section/item
Use multiple list entries:
```yaml
images:
  - images/ROBOFEST1.jpeg
  - images/ROBOFEST2.jpeg
  - images/ROBOFEST3.jpeg
```

### Common mistakes
- Don’t use Windows backslashes: `images\ROBOFEST1.jpeg` (bad)
- Do use forward slashes: `images/ROBOFEST1.jpeg` (good)
- Don’t write `-"..."` or `-'...'` (missing space). It must be `- "..."` or just `- ...`.

---

## 4) About `npm run sync:data` (template initializer)

This repo contains a data initializer script:

- `scripts/sync-data.mjs`

Purpose:
- It can **copy missing starter files** from the template data source into `public/data/`.

Important behavior:
- It **does not delete** or overwrite your existing `public/data` content by default.

Run it when:
- you pulled new changes and want to fill in any missing data files.

### Force overwrite (dangerous)
This will overwrite files from the template source:

**PowerShell:**
```powershell
$env:FORCE_SYNC_DATA="1"; npm run sync:data
```

---

## 5) Troubleshooting

### “Failed to load data from /data … check the markdown”
This is almost always a YAML formatting issue.

Checklist:
- YAML frontmatter starts with `---` and ends with `---`
- all indentation uses spaces
- lists align properly
- `images:` uses either `[]` or a correctly indented list

### Images not showing
Checklist:
- file exists in `public/data/images/`
- filename matches exactly (case-sensitive on some systems)
- referenced path starts with `images/...`

---

## 6) Suggested editing workflow

1. Start dev server: `npm run dev`
2. Edit a data file in `public/data/`
3. Save and refresh browser
4. Add images to `public/data/images/`
5. Reference them under `images:`

If you want a more “CMS-like” editing flow later (forms/UI), we can add one—but right now this is intentionally simple + file-based.
