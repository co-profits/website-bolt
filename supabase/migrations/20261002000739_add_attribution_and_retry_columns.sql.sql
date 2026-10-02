/*
# Add source_detail, attribution, and retry fields to blueprint_applications

1. Background
   The Application Form Specification v1.1 defines additional fields that
   the frontend payload now sends: source_detail, client_request_id,
   submitted_at_client, landing_page, utm_source, utm_medium, utm_campaign.
   These columns need to exist on the table for the inserts to succeed.

2. New Columns Added
   - source_detail (text) — Optional detail accompanying the source select
   - client_request_id (text) — Idempotent retry key generated client-side
   - submitted_at_client (text) — Client-side ISO timestamp (not authoritative)
   - landing_page (text) — The page URL the applicant landed on
   - utm_source (text) — UTM attribution parameter
   - utm_medium (text) — UTM attribution parameter
   - utm_campaign (text) — UTM attribution parameter

3. Notes
   - All new columns are nullable so existing rows are unaffected.
   - No existing columns are modified or dropped.
*/

ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS source_detail text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS client_request_id text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS submitted_at_client text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS landing_page text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS utm_source text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS utm_medium text;
ALTER TABLE blueprint_applications ADD COLUMN IF NOT EXISTS utm_campaign text;
