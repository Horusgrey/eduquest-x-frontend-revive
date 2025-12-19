# EduQuest Frontend

A lightweight React + Vite frontend for browsing EduQuest courses and jobs.

## Quick start
1. Install Node.js 18 or newer.
2. Install dependencies: `npm install`.
3. Run the dev server: `npm run dev` then open the printed URL (default http://localhost:5173).

## Plain-English handoff (copy/paste this for helpers)
1. This is a simple website built with React/Vite; the editable code is in `src/`.
2. To view it locally: `npm install`, then `npm run dev`, then open the link it prints.
3. To produce the files you upload: run `npm run build` (creates a `dist/` folder).
4. To put it on odin.it.com: upload everything **inside `dist/`** to your Odin web root. Keep the `public/_redirects` file so every page loads.
5. If you change anything: run `npm run build` again, then re-upload the fresh `dist/` contents.

## One-by-one odin.it.com deployment (non-coder version)
1. Install Node 18+ (or ask someone to do this once). 
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run build` (this fills the `dist/` folder with the site files).
5. Connect to your Odin hosting (SFTP/SSH or file manager).
6. Upload everything **inside** `dist/` to your Odin web root.
7. Make sure the `_redirects` file sits next to `index.html` on Odin.
8. Visit odin.it.com in your browser; if you don’t see changes, refresh and clear cache.

## Production build
1. Build optimized assets: `npm run build` (output goes to `dist/`).
2. Preview the build locally: `npm run preview`.

## Deploying to odin.it.com (static hosting)
1. Run `npm run build` to generate the `dist/` folder.
2. Upload the contents of `dist/` to your Odin web root (via SFTP/SSH or your provider’s file manager).
3. Point your odin.it.com site or subdomain at that directory.
4. Keep the `public/_redirects` rule so all routes serve `index.html`.
