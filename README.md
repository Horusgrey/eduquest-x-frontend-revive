# EduQuest Frontend

A lightweight React + Vite frontend for browsing EduQuest courses and jobs.

## Quick start
1. Install Node.js 18 or newer.
2. Install dependencies: `npm install`.
3. Run the dev server: `npm run dev` then open the printed URL (default http://localhost:5173).

## Copy/paste handoff (no jargon)
1) This site lives in the `src/` folder and is built with React/Vite.
2) To see it locally: run `npm install`, then `npm run dev`, then open the link it prints.
3) To prepare the files you upload: run `npm run build` (it fills the `dist/` folder).
4) To put it on odin.it.com: upload everything **inside `dist/`** to your Odin web root. Keep the `_redirects` file beside `index.html`.
5) If you change anything: run `npm run build` again and re-upload the fresh `dist/` contents.

## Odin.it.com upload checklist (one-by-one)
1) Install Node 18+ (ask a helper once if needed).
2) Open a terminal in this project folder.
3) Run `npm install`.
4) Run `npm run build` (creates the `dist/` folder).
5) Connect to Odin hosting (SFTP/SSH or file manager).
6) Upload everything **inside** `dist/` to your Odin web root.
7) Put `_redirects` next to `index.html` on Odin (keeps all routes working).
8) Open odin.it.com; if you don’t see updates, hard-refresh/clear cache and reload.

## Production build
1. Build optimized assets: `npm run build` (output goes to `dist/`).
2. Preview the build locally: `npm run preview`.

## Deploying to odin.it.com (static hosting)
1. Run `npm run build` to generate the `dist/` folder.
2. Upload the contents of `dist/` to your Odin web root (via SFTP/SSH or your provider’s file manager).
3. Point your odin.it.com site or subdomain at that directory.
4. Keep the `public/_redirects` rule so all routes serve `index.html`.
