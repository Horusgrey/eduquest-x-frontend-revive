# EduQuest Frontend

A lightweight React + Vite frontend for browsing EduQuest courses and jobs.

## Quick start (view it on your computer)
1. Install Node.js 18+.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the link it prints (usually http://localhost:5173).

## Odin.it.com upload checklist (copy/paste, one-by-one)
1) Open a terminal in this project folder.
2) Run `npm install`.
3) Run `npm run build` (this creates the `dist/` folder).
4) Log in to your Odin hosting (SFTP/SSH or file manager).
5) Upload everything **inside** `dist/` to your Odin web root.
6) Make sure `_redirects` sits next to `index.html` on Odin.
7) Visit odin.it.com. If you don’t see changes, hard-refresh/clear cache and reload.

## If you change anything
1) Run `npm run build` again.
2) Re-upload the new `dist/` contents.
