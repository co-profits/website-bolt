/*
# Create blueprint_applications table (single-tenant, no auth)

1. Purpose
   - Stores Prophetic Business Blueprint application submissions from the website.
   - This is a no-auth public form: the frontend submits as the anon role.
   - No user accounts or sign-in required — founders submit an application directly.

2. New Tables
   - `blueprint_applications`
     - `id` (uuid, primary key, auto-generated)
     - `language` (text, 'en' or 'es' — which language the applicant used)
     - `status` (text, default 'pending' — application review status)
     - Company fields: `company_name`, `website`, `industry`, `employees`, `location`, `founder_structure`
     - Business stage: `business_stage_desc`
     - Profitability: `above_break_even`, `profitability_context`
     - Founder dependence: `founder_dependence_level`, `founder_involvement`, `bottlenecks`
     - Challenge: `primary_challenge`
     - Goals: `profit_goals`, `freedom_goals`, `growth_goals`, `other_goals`
     - Christian alignment: `christian_alignment`, `christian_alignment_context`
     - Integration: `integration_willingness`, `integration_context`
     - Contact: `full_name`, `email`, `phone`, `preferred_language`
     - `anything_else` (text, optional free-form)
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `blueprint_applications`.
   - INSERT only: anon and authenticated can insert new applications (public form).
   - No SELECT, UPDATE, or DELETE for anon — only insert. This protects submitted data.
   - Authenticated service-role access is handled by Supabase defaults (dashboard only).

4. Important Notes
   - This table is INSERT-ONLY for public users. They can submit but cannot read back data.
   - All fields except company_name, full_name, email are nullable to match optional form fields.
   - The `status` column defaults to 'pending' and is managed by the firm, not the applicant.
*/

CREATE TABLE IF NOT EXISTS blueprint_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  language text NOT NULL DEFAULT 'en',
  status text NOT NULL DEFAULT 'pending',

  company_name text,
  website text,
  industry text,
  employees text,
  location text,
  founder_structure text,

  business_stage_desc text,

  above_break_even text,
  profitability_context text,

  founder_dependence_level text,
  founder_involvement text,
  bottlenecks text,

  primary_challenge text,

  profit_goals text,
  freedom_goals text,
  growth_goals text,
  other_goals text,

  christian_alignment text,
  christian_alignment_context text,

  integration_willingness text,
  integration_context text,

  full_name text,
  email text,
  phone text,
  preferred_language text,

  anything_else text,

  created_at timestamptz DEFAULT now()
);

ALTER TABLE blueprint_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_applications" ON blueprint_applications;
CREATE POLICY "anon_insert_applications"
  ON blueprint_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
