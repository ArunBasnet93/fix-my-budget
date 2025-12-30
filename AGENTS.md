# Fix-My-Budget — Codex instructions

## Repo layout
- Repo root: infrastructure + docs.
- Web app lives in: `apps/web` (Next.js + TypeScript + Tailwind).
- Local Postgres: `compose.yml` at repo root.

## How to run
### Web app (run from `apps/web`)
- Dev: `npm run dev`
- Lint: `npm run lint`

### Database (run from repo root)
- Up: `docker compose up -d`
- Down: `docker compose down`

## Conventions
- Prefer small, reviewable changes.
- When modifying UI, keep components simple and readable.
- Don’t introduce new libraries unless explicitly requested.
- Avoid touching `compose.yml` unless the task is database-related.

## Guidance for changes
- If you need to add a new file, explain why.
- When you change behavior, update any relevant docs/comments.
