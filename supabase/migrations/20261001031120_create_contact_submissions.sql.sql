/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`: Stores general Contact form submissions (partnerships, media, speaking, etc.)
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `company` (text, not null) — submitter's company
  - `country` (text, not null) — submitter's country
  - `email` (text, not null) — submitter's email for response
  - `message` (text, not null) — the inquiry message
  - `language` (text, not null) — 'en' or 'es', determines which locale form was used
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form, no read access from client).
- No SELECT, UPDATE, or DELETE from the client — data is managed server-side only.

3. Important Notes
- This table is separate from `blueprint_applications` — Contact submissions are general inquiries, not Blueprint applications.
- `language` is constrained to 'en' or 'es'.
- No PII beyond what the contact form collects (name, company, country, email, message).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  country text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  language text NOT NULL CHECK (language IN ('en', 'es')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);
