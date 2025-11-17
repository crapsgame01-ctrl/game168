# GAME168 — Deployment Checklist

Quick checklist before deploying to production (Vercel recommended):

- [ ] Create Supabase project and database table `campaigns` with columns: `id` (int, pk), `title` (text), `description` (text), `image` (text)
- [ ] Create storage bucket (e.g., `campaign-images`) and set to public or private depending on strategy
- [ ] Add Vercel Environment Variables (see `DEPLOY.md`)
- [ ] Use Vercel Secrets for `SUPABASE_SERVICE_ROLE_KEY` and `API_KEY`
- [ ] Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are present
- [ ] If using private bucket: update server code to use signed URLs (ask me to help)

Deploy steps

1. Connect repo to Vercel and enable automatic deployments.
2. Add env variables in Vercel (Production/Preview/Development as needed).
3. Push to `main` branch → Vercel will build and deploy automatically.

Rollback

- Use Vercel dashboard to rollback to previous deployment if needed.
