# Deploying GAME168 to Vercel

Quick steps to deploy and required Secrets.

1. Create a new Vercel project (import from GitHub repository).
2. Add the following Environment Variables in Vercel (Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon public key
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service_role key (KEEP SECRET, use only in Server-Side)
   - `API_KEY` = optional simple API key for server endpoints (optional)
   - `SUPABASE_BUCKET` = `campaign-images` (or your bucket name)

Notes & Recommendations
- Do NOT commit `SUPABASE_SERVICE_ROLE_KEY` to source control.
- For production, prefer Supabase Auth for authorizing users rather than the `API_KEY` header.
- If using private storage bucket, update server code to use signed URLs when returning image links.

Deploy command: Vercel will automatically run the `build` script from `package.json`.

Local testing
1. Copy `.env.example` to `.env` and fill in values.
2. Run:
```bash
npm install
npm run dev
```

Creating Storage Bucket (optional)
- Use Supabase Console or run locally (requires `SUPABASE_SERVICE_ROLE_KEY` in `.env`):
```bash
node scripts/create_bucket.js
```
