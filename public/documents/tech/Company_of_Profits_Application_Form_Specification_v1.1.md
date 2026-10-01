# Company of Profits — Application Form Specification v1.1

## 1. Executive reconciliation summary

This is the authoritative functional and UX specification for the public Company of Profits application form at /apply. It is regenerated against Security Specification v1.1.

The form is the first qualification mechanism for the paid Prophetic Business Blueprint. It is not a contact form, generic lead form, sales-call request, Blueprint, diagnostic questionnaire, financial audit, theological questionnaire, or program recommendation engine.

The reconciliation confirms:

- 13 core required applicant fields;
- 5 optional applicant fields;
- 1 conditional visible clarification field;
- exact alignment with the Security v1.1 public allowlist;
- additional_context retained and mapped to the Applications tab;
- server-only fields excluded from browser payload;
- duplicate, timeout, retry, and response behavior aligned with Security v1.1;
- no new sensitive diagnostic data collected at /apply.

No strategic decision is reopened. The approved model remains the Christian founder ICP, generally 10+ employees, profitability as the primary axis, founder independence/freedom as a secondary axis, mandatory prophetic integration, paid Blueprint-first entry, USD $2,300 base price, up to two active founding partners, +$100 per additional partner from partner #3, selective application review, global/remote/live delivery, English and Latin American Spanish, and Cloudflare Pages → Apps Script → private Google Sheet.

## 2. Purpose, audience, and experience

### 2.1 Target applicant

An established Christian founder, CEO, or active founding partner generally leading a company with 10+ employees, meaningful operations, real market presence, and unrealized profitability or freedom potential. A profitable but founder-dependent company remains in scope.

### 2.2 Experience principles

The form should feel calm, selective, professional, respectful of confidentiality, explicit about Christian/prophetic fit, clear about next steps, and substantial without fatigue.

Target completion time is approximately 5–8 minutes.

Use exactly three steps:

1. Founder and company / Fundador y empresa
2. Business context / Contexto empresarial
3. Challenge, outcome, and fit / Reto, resultado y compatibilidad

Show accessible progress such as Step 1 of 3 / Paso 1 de 3. Allow Back. Never erase completed values while moving between steps. Preserve values through validation, network failure, and retry.

### 2.3 What the public form does not collect

Detailed financial figures, statements, cash flow, debt, taxes, working capital, customer lists, marketing spend, product catalogs, competitor research, marketing materials, org charts, strategic plans, software inventories, detailed processes, employee personal data, attachments, credentials, government IDs, spiritual history, prophetic disclosures, private prayer requests, the 28 organizational questions, and the 11 reserved questions belong to the later controlled Blueprint intake or internal work.

## 3. Complete applicant-facing field contract

Every field below has a stable ID, English and Spanish labels, purpose, type, required status, validation, limit, Sheet destination, and privacy classification.

| ID  | English label                                                                                                        | Spanish label                                                                                                                   | Purpose                                                              | Type                              | Status               | Validation and limit                                                                  | Sheet destination     | Privacy classification   |
| --- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------- | -------------------- | ------------------------------------------------------------------------------------- | --------------------- | ------------------------ |
| F01 | Full name                                                                                                            | Nombre completo                                                                                                                 | Identify the applicant for review communication.                     | Short text                        | Required             | 2–120 chars after trim; no control characters.                                        | full_name             | Personal data            |
| F02 | Work email                                                                                                           | Correo electrónico de trabajo                                                                                                   | Send review response and reference.                                  | Email                             | Required             | Practical valid syntax; max 254; lowercase storage; no mailbox verification claim.    | email                 | Personal/contact         |
| F03 | Company name                                                                                                         | Nombre de la empresa                                                                                                            | Identify the business under review.                                  | Short text                        | Required             | 2–160 chars; no control characters.                                                   | company_name          | Business confidential    |
| F04 | Company website                                                                                                      | Sitio web de la empresa                                                                                                         | Provide public context without documents.                            | URL                               | Optional             | http/https only; max 2,048; no credentials, javascript, or data schemes.              | website               | Business                 |
| F05 | Country where the company primarily operates                                                                         | País donde opera principalmente                                                                                                 | Establish operating-country context.                                 | Select plus short Other value     | Required             | Controlled localized list; final value max 100 chars.                                 | country               | Business/location        |
| F06 | Preferred language                                                                                                   | Idioma preferido                                                                                                                | Route communication and service language.                            | Select                            | Required             | Display English/Español; serialize en or es.                                          | language              | Preference               |
| F07 | Industry / business model                                                                                            | Industria / modelo de negocio                                                                                                   | Understand operating complexity and relevance.                       | Short text or accessible combobox | Required             | 2–160 chars; concise description only.                                                | industry_model        | Business                 |
| F08 | Approximate number of employees                                                                                      | Número aproximado de empleados                                                                                                  | Assess maturity and operational complexity.                          | Select                            | Required             | Display 1–9, 10–24, 25–49, 50–99, 100+; serialize 1-9, 10-24, 25-49, 50-99, 100-plus. | employee_band         | Business                 |
| F09 | Active founding partners                                                                                             | Socios fundadores activos                                                                                                       | Understand decision structure and Blueprint scope.                   | Integer select/input              | Required             | Integer 1–20; no decimals or negatives.                                               | founder_count         | Business/relationship    |
| F10 | Primary market, if different from country                                                                            | Mercado principal, si es diferente del país                                                                                     | Clarify the commercial market when country is insufficient.          | Short text                        | Conditional/optional | 2–120 chars when supplied; may remain blank.                                          | primary_market        | Business/market          |
| F11 | Current profitability context                                                                                        | Contexto actual de rentabilidad                                                                                                 | Understand broad commercial position without figures.                | Select                            | Required             | above-break-even, approximately-break-even, below-break-even, prefer-to-discuss.      | profitability_context | Business/financial       |
| F12 | How dependent is the company on its founders?                                                                        | ¿Qué tan dependiente es la empresa de sus fundadores?                                                                           | Capture founder-dependence signal.                                   | Select                            | Required             | extremely-high, high, moderate, low.                                                  | dependency_level      | Business/operational     |
| F13 | Most important business issue right now                                                                              | Reto empresarial más importante hoy                                                                                             | Capture the applicant’s priority and urgency.                        | Textarea                          | Required             | Plain text, 20–1,500 chars, line breaks allowed.                                      | primary_constraint    | Business confidential    |
| F14 | What change would make the company more valuable over the next 12–18 months?                                         | ¿Qué cambio haría más valiosa la empresa en los próximos 12–18 meses?                                                           | Understand desired transformation across profit, freedom, and value. | Textarea                          | Required             | Plain text, 20–1,500 chars.                                                           | desired_change        | Business confidential    |
| F15 | Do you identify as a Christian founder and are you open to integrating business strategy with prophetic discernment? | ¿Te identificas como empresario cristiano y estás abierto a integrar la estrategia empresarial con el discernimiento profético? | Confirm explicit Christian and prophetic fit.                        | Select                            | Required             | yes-both, questions, no.                                                              | christian_alignment   | Sensitive faith-related  |
| F16 | Phone                                                                                                                | Teléfono                                                                                                                        | Offer an optional alternative contact channel.                       | Short text                        | Optional             | Max 40 chars; store as text; no country inference.                                    | phone                 | Personal/contact         |
| F17 | How did you hear about Company of Profits?                                                                           | ¿Cómo conociste Company of Profits?                                                                                             | Measure broad attribution.                                           | Select plus optional short detail | Optional             | source max 80; source_detail max 160; no qualification meaning.                       | source, source_detail | Attribution              |
| F18 | Is there anything else you would like us to know at this stage?                                                      | ¿Hay algo más que quieras que sepamos en esta etapa?                                                                            | Allow concise clarification without expanding diagnosis.             | Textarea                          | Optional             | Plain text, max 1,500 chars.                                                          | additional_context    | Potentially confidential |
| F19 | I would like to receive Company of Profits Insights.                                                                 | Quiero recibir Insights de Company of Profits.                                                                                  | Record separate editorial/marketing consent.                         | Checkbox                          | Optional             | Boolean only; unchecked by default.                                                   | consent_insights      | Marketing preference     |

Helper text must state that no sensitive financial data or documents are required at this stage. F18 must instruct applicants not to include confidential documents or sensitive personal information. F15 must not ask for denomination, testimony, spiritual history, prophetic impressions, sins, wounds, or private prayer requests.

## 4. Technical payload contract

### 4.1 Client-sent technical fields

| ID  | Key                 | Purpose                                  | Client sends?    | Destination/rule                                                                      |
| --- | ------------------- | ---------------------------------------- | ----------------:| ------------------------------------------------------------------------------------- |
| T01 | client_request_id   | Idempotent retry and duplicate handling. | Yes              | Never in Applications; a non-reversible hash may appear in Audit Log. Reuse on retry. |
| T02 | submitted_at_client | Timestamp abuse heuristic.               | Optional         | Never authoritative and never used as submitted_at_utc.                               |
| T03 | landing_page        | Attribution.                             | Yes if available | Applications landing_page; max 2,048.                                                 |
| T04 | utm_source          | Attribution.                             | Yes if available | Applications utm_source; max 200.                                                     |
| T05 | utm_medium          | Attribution.                             | Yes if available | Applications utm_medium; max 200.                                                     |
| T06 | utm_campaign        | Attribution.                             | Yes if available | Applications utm_campaign; max 200.                                                   |
| T07 | form_trap           | Honeypot abuse control.                  | Yes              | Must be empty; never stored or echoed.                                                |
| T08 | endpoint_version    | Operational version.                     | No               | Server-generated from Script Properties.                                              |
| T09 | application_id      | Confirmation/reference.                  | No               | Server-generated only.                                                                |
| T10 | submitted_at_utc    | Authoritative timestamp.                 | No               | Server-generated ISO 8601 UTC.                                                        |
| T11 | received_at_local   | Business-local timestamp.                | No               | Server-generated using configured business timezone.                                  |

### 4.2 Exact frontend payload

The frontend may send only these keys:

    full_name, email, phone, company_name, website, country, primary_market,
    language, industry_model, employee_band, founder_count, profitability_context,
    dependency_level, primary_constraint, desired_change, christian_alignment,
    source, source_detail, additional_context, consent_insights,
    client_request_id, submitted_at_client, landing_page, utm_source, utm_medium,
    utm_campaign, form_trap

No application ID, server timestamp, status, internal note, retry count, endpoint version, Sheet field, credential, token, or arbitrary key may be sent by the browser.

## 5. Conditional behavior

### C01 — Primary market clarification

Show F10 only when the applicant indicates that the main commercial market differs from the operating country or wants to clarify it. Store the result in primary_market. If blank, leave it blank; never fabricate a market from country.

### C02 — Questions about prophetic dimension

If F15 is questions or no, use F18’s existing optional helper prompt:

English: If you have questions about the Christian or prophetic dimension, you may share them here. Please do not share sensitive spiritual or personal details.

Spanish: Si tienes preguntas sobre la dimensión cristiana o profética, puedes compartirlas aquí. No incluyas detalles espirituales o personales sensibles.

Do not add a new theological field.

### C03 — Additional founder pricing context

If founder_count is greater than 2, show information only:

English: The Blueprint base scope includes up to 2 active founding partners. Additional partners are priced at +USD $100 per partner from partner #3.

Spanish: El alcance base de la Radiografía incluye hasta 2 socios fundadores activos. Los socios adicionales tienen un costo de +USD $100 por socio a partir del tercero.

Do not create a new pricing field. Store only founder_count.

### C04 — Phone

Phone is always optional and never implies a guaranteed call.

### C05 — Insights consent

Never pre-check. A user must actively select it. Applying is not consent to marketing or editorial messages.

## 6. Qualification and internal review

### 6.1 Human review principle

The form supplies signals for human fit review. It does not calculate a diagnosis, auto-accept, auto-reject, or recommend a program.

Signals that may increase confidence include established operations, 10+ employees, meaningful founder dependence, a clear current issue, a desired change connected to profit/freedom/business value, decision-maker context, Christian identity and openness to both dimensions, and willingness to engage with a paid selective Blueprint.

Signals requiring clarification include fewer than 10 employees with unusual complexity, questions about the prophetic dimension, unclear governance or decision authority, vague business model, answers too short to establish fit, or a request for a free consultation rather than the paid Blueprint.

Do not automatically reject solely because of employee band, country, profitability context, or one faith-alignment answer.

### 6.2 Internal statuses

Initial defaults:

- qualification_status = new
- application_status = received

Allowed internal qualification statuses:

- new
- reviewing
- needs_clarification
- qualified
- not_fit

Allowed application lifecycle statuses:

- received
- contacted
- accepted
- declined
- withdrawn

These fields are server/internal only and are never returned to the applicant.

## 7. Blueprint and offer boundaries

The Blueprint is a paid, selective engagement priced at USD $2,300, with up to two active founding partners included and +$100 per additional founding partner from partner #3. The application must make clear that submission is not acceptance and does not guarantee a later program.

Keep the detailed Blueprint intake separate. The later intake may include the financial, commercial, organizational, process, and other materials defined in Blueprint_Contenido_Completo.md. None of those detailed requests belongs in this public form.

## 8. Submission, duplicate, and response contract

The frontend sends the exact approved payload. The Apps Script endpoint must:

1. enforce request size and exact allowlist;
2. reject forbidden internal fields;
3. apply honeypot and timestamp controls;
4. validate and normalize all fields server-side;
5. acquire LockService;
6. check the request-ID hash, then normalized email + company within 30 minutes;
7. generate application_id and both server timestamps;
8. set server-controlled defaults;
9. append one Applications row;
10. write a minimal safe Audit Log event;
11. release the lock;
12. return only the safe response envelope.

### 8.1 Accepted

Return ok true, code accepted, a short confirmation message, application_id, and retryable false.

### 8.2 Duplicate

Return ok true, code duplicate, a short already-received message, the existing application_id, and retryable false. Do not append another row.

### 8.3 Validation failure

Return ok false, code validation_failed, safe field-level errors, and retryable false. Preserve all browser values.

### 8.4 Suspicious/rate-limited

Return ok false, code request_not_accepted, a generic safe message, and retryable true. Do not reveal honeypot or anti-abuse details.

### 8.5 Server failure

Return ok false, code server_error, a generic retryable message, and retryable true. Never expose stack traces, Sheet errors, internal status, or configuration.

### 8.6 Timeout and retry

A timeout is an uncertain outcome, not proof that the write failed. Preserve all form values and the same client_request_id. Let the applicant retry. If the first request wrote, the backend must return duplicate rather than create another row.

On success or duplicate, show receipt, reference, human fit review, the approved response window once decided, and paid/selective Blueprint context. Do not show internal status or promise acceptance.

## 9. Internal Google Sheets mapping

### 9.1 Applications columns

The exact header order is:

    application_id, submitted_at_utc, received_at_local, full_name, email, phone,
    company_name, website, country, primary_market, language, industry_model,
    employee_band, founder_count, profitability_context, dependency_level,
    primary_constraint, desired_change, christian_alignment, source, source_detail,
    additional_context, landing_page, utm_source, utm_medium, utm_campaign,
    consent_insights, qualification_status, application_status, follow_up_owner,
    next_follow_up_at, notes_internal, retry_count, endpoint_version

### 9.2 Trust separation

| Category            | Fields                                                                                                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Applicant data      | full_name, email, phone, company_name, website, country, primary_market, language, industry_model, employee_band, founder_count, profitability_context, dependency_level, primary_constraint, desired_change, christian_alignment, source, source_detail, additional_context |
| Server metadata     | application_id, submitted_at_utc, received_at_local, retry_count, endpoint_version                                                                                                                                                                                           |
| Attribution/consent | landing_page, utm_source, utm_medium, utm_campaign, consent_insights                                                                                                                                                                                                         |
| Internal operations | qualification_status, application_status, follow_up_owner, next_follow_up_at, notes_internal                                                                                                                                                                                 |

Applications, Follow-up, Lists, and Audit Log remain separate tabs. Internal statuses use controlled values. Protected ranges cover headers, server metadata, formulas, Lists values, Audit Log structure, and internal columns.

## 10. Analytics

Minimum event set:

| Event                         | Allowed properties                          | PII rule                  |
| ----------------------------- | ------------------------------------------- | ------------------------- |
| application_page_viewed       | language, route, landing_page               | No name/email             |
| application_started           | language, route                             | No form values            |
| application_step_viewed       | language, step_number                       | No answers                |
| application_step_completed    | language, step_number                       | No answers                |
| application_abandoned         | language, last_step                         | No answers                |
| application_submit_attempted  | language, field_count, client-side validity | No payload                |
| application_submitted         | language, source, campaign, outcome code    | No name/email             |
| application_submission_failed | language, error category, retryable         | No stack trace or payload |
| application_duplicate         | language, outcome code                      | No application data       |

Never send names, email, company name, phone, faith answers, free text, or application payloads to analytics. Analytics is not a second storage system and must follow the eventual privacy/consent model.

The primary KPI is qualified Blueprint applications per month. An application submitted event is not a qualified application.

## 11. Privacy and legal dependencies

Application data is used for human fit evaluation and application communication. Submission is not acceptance. Detailed diagnosis happens later if the applicant proceeds.

Keep unresolved items explicitly marked:

- LEGAL COPY REQUIRED: privacy notice.
- LEGAL COPY REQUIRED: application evaluation and communication language.
- LEGAL COPY REQUIRED: Privacy Policy.
- LEGAL COPY REQUIRED: Terms.
- OPEN DECISION: retention and deletion periods by application category.
- OPEN DECISION: final applicant response window.
- OPEN DECISION: approved fallback contact route after repeated technical failure.

Do not invent legal approval or retention periods. Restrict access while those decisions remain open.

## 12. Mobile, accessibility, and visual requirements

- Single-column mobile-first layout with labels above controls.
- Large touch targets and no horizontal scrolling.
- Keyboard and screen-reader accessible labels, required state, progress, and errors.
- Error summary links to invalid fields and focuses the first invalid field.
- Preserve values across viewport changes and recoverable failures.
- No image is required to complete the form.
- Keep the application visually restrained: light background, dark teal text, green action color, restrained lime/purple accents, Manrope plus Inter, and no unnecessary decorative imagery.
- No visual treatment may imply automatic scoring or guaranteed acceptance.

## 13. Conversion and friction audit

Keep:

- three steps and visible progress;
- 13 core required fields;
- 5 optional fields that never block completion;
- only one conditional visible clarification;
- two narrative fields with mobile dictation;
- explicit explanation that no sensitive financial documents are requested at application stage;
- explicit paid/selective Blueprint context;
- separate optional Insights consent.

Do not add revenue, documents, attachments, a theology questionnaire, a financial audit, a long diagnostic branch, a call-booking requirement, or a program recommendation engine.

## 14. Application v1.0 → v1.1 changelog

| Area                | v1.0                                                                    | v1.1                                                                               | Reason                                                      |
| ------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Security dependency | Included a note that reconciliation was still pending                   | Uses Security Specification v1.1 as authoritative                                  | The technical contract is now closed before implementation. |
| additional_context  | Approved field but conditional security note remained                   | Fully approved, allowlisted, limited to 1,500 chars, and mapped to Applications    | Resolve the known inconsistency.                            |
| Optional count      | Section 3.4 said 4 optional fields while other sections defined 5       | All authoritative sections say 5 optional fields                                   | Correct internal count contradiction.                       |
| Payload             | Listed applicant and attribution keys but did not name the honeypot key | Exact payload includes form_trap as non-applicant-facing and non-stored            | Align abuse control with strict allowlist.                  |
| Market fields       | Country/market language could be read as one concept                    | country required; primary_market conditional/optional                              | Match the normalized backend model.                         |
| Employee enum       | Display 100+ was not explicitly tied to serialized code                 | Display 100+ maps to 100-plus                                                      | Prevent enum drift.                                         |
| Technical fields    | Hidden technical field count and behavior were less explicit            | T01–T11 include the honeypot and server/client boundary                            | Make the payload and Sheet contract auditable.              |
| Duplicate behavior  | Referenced a short security-defined window                              | Explicitly uses request-ID hash, email/company 30-minute fallback, and LockService | Align failure and retry behavior with Security v1.1.        |
| Sources             | Prior report filename could vary across workspace copies                | Uses the available equivalent Strategic Research Report V2 filename                | Keep references resolvable without changing strategy.       |

## 15. Final cross-document consistency matrix

| Contract                | Security v1.1                                                                             | Application v1.1                                        | Status  |
| ----------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------- |
| Public fields           | Exact allowlist includes all applicant, attribution, retry, timestamp, and form_trap keys | Exact payload repeats the same keys                     | Aligned |
| Required fields         | 13 specified required fields                                                              | F01–F03, F05–F09, F11–F15 = 13                          | Aligned |
| Optional fields         | website, phone, source/detail, additional_context, consent_insights                       | F04, F16–F19 = 5                                        | Aligned |
| Conditional field       | primary_market optional/conditional                                                       | F10 and C01                                             | Aligned |
| additional_context      | Allowlisted, max 1,500, Applications destination                                          | F18, max 1,500, Applications destination                | Aligned |
| Technical fields        | client_request_id, submitted_at_client, landing_page, UTM keys, form_trap                 | T01–T07 and exact payload                               | Aligned |
| Server-generated fields | application_id, submitted_at_utc, received_at_local, endpoint_version                     | T08–T11 and submission sequence                         | Aligned |
| Internal fields         | statuses, owner, follow-up, notes, retry_count never client-supplied                      | Internal mapping and status rules                       | Aligned |
| Applications columns    | Frozen ordered header includes additional_context                                         | Same ordered header                                     | Aligned |
| Validation              | Server validates required fields, enums, URLs, numbers, booleans, narratives              | Field table and submission contract refer to same rules | Aligned |
| Limits                  | 32 KB body and field limits                                                               | Field table and technical table use same limits         | Aligned |
| Duplicate handling      | Request-ID hash, then email/company within 30 minutes under LockService                   | Timeout and retry behavior uses same algorithm          | Aligned |
| Response states         | accepted, duplicate, validation_failed, request_not_accepted, server_error                | Same states and browser behavior                        | Aligned |
| Retry                   | Same client_request_id; preserve values; timeout uncertain                                | Same explicit contract                                  | Aligned |
| Analytics               | No PII/free text and small event set                                                      | Same canonical event names and properties               | Aligned |
| Privacy                 | Data minimization; no detailed Blueprint or sensitive disclosures                         | Same exclusions and helpers                             | Aligned |
| Insights consent        | Optional, separate, unchecked; no inferred marketing consent                              | F19 and C05                                             | Aligned |
| Language                | en/es canonical codes                                                                     | F06 display-to-code mapping                             | Aligned |
| Source attribution      | source/source_detail plus landing/UTM fields                                              | F17 and T03–T06                                         | Aligned |
| Legal                   | LEGAL COPY REQUIRED and retention OPEN DECISION                                           | Same unresolved items                                   | Aligned |

## 16. Final implementation readiness verdict

**READY FOR ORCHESTRATION**

No genuine technical or functional blockers remain in the reconciled contracts. Legal copy, retention/deletion, response-window, and fallback-contact decisions remain explicitly open and must be resolved before public launch, but they do not require changing the approved MVP data or security architecture.

## 17. Sources

1. Company of Profits, Company_of_Profits_Strategic_Research_Report_V2.md.
2. Company of Profits, Blueprint_Contenido_Completo.md.
3. Company of Profits, Company_of_Profits_Google_Sheets_MVP_Security_Specification_v1.1.md.
4. Company of Profits, Company_of_Profits_Application_Form_Specification_v1.0.md.
5. Company of Profits, Company_of_Profits_Final_Creative_Asset_Library_Reconciliation.md.
