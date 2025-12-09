# EduQuest Frontend

A lightweight React + Vite frontend for browsing EduQuest courses and jobs.

## Quick start
1. Install Node.js 18 or newer.
2. Install dependencies: `npm install`.
3. Run the dev server: `npm run dev` then open the printed URL (default http://localhost:5173).

## Plain-English handoff (give this to anyone helping you)
1. The site is a React single-page app built with Vite. All code lives in `src/`.
2. To see it locally, run `npm install` then `npm run dev` and open the link it prints.
3. To make the production files, run `npm run build` (this creates a `dist/` folder).
4. For odin.it.com, upload everything inside `dist/` to your Odin web root and keep the `public/_redirects` file so all routes work.
5. If something breaks, run `npm run build` again after any changes and re-upload the new `dist/` contents.

## Production build
1. Build optimized assets: `npm run build` (output goes to `dist/`).
2. Preview the build locally: `npm run preview`.

## Deploying to odin.it.com (static hosting)
1. Run `npm run build` to generate the `dist/` folder.
2. Upload the contents of `dist/` to your Odin web root (via SFTP/SSH or your provider’s file manager).
3. Point your odin.it.com site or subdomain at that directory.
4. Keep the `public/_redirects` rule so all routes serve `index.html`.
