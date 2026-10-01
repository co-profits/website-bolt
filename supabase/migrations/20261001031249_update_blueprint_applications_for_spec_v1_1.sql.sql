/*
# Update blueprint_applications to match Application Form Specification v1.1

1. Background
   The original table was created with preliminary column names. The approved
   Application Form Specification v1.1 defines a different set of fields with
   exact column names that the frontend payload must use. This migration adds
   the new columns to align the table with the spec without losing any existing
   data.

2. New Columns Added
   - country (text) — Country where the company primarily operates
   - primary_market (text) — Conditional/optional market clarification
   - industry_model (text) — Industry or business model
   - employee_band (text) — Serialized employee band code (1-9, 10-24, etc.)
   - founder_count (integer) — Number of active founding partners (1–20)
   - dependency_level (text) — Founder dependency level code
   - primary_constraint (text) — Most important business issue right now
   - desired_change (text) — What change would make the company more valuable
   - source (text) — How the applicant heard about Company of Profits
   - additional_context (text) — Optional additional context
   - consent_insights (boolean, default false) — Optional Insights consent

3. Notes
   - Existing columns are preserved for data safety (no DROP, no type changes).
   - New columns are nullable so existing rows are not affected.
   - The frontend now sends the new field names; old columns remain but are
     no longer written to by the updated form.
*/

ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS country text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS primary_market text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS industry_model text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS employee_band text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS founder_count integer;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS dependency_level text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS primary_constraint text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS desired_change text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS source text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS additional_context text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS consent_insights boolean NOT NULL DEFAULT false;
