import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { FormField } from '@/components/FormField';
import { supabase } from '@/lib/supabase';

type FormState = Record<string, string>;

function getUtms(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
  };
}

function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

export function ApplyPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const a = t.applyPage;
  const f = a.fields;

  const [form, setForm] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'duplicate' | 'error'>('idle');
  const [requestId] = useState(() => generateRequestId());
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const utms = getUtms();
  const landingPage = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';

  const update = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0 && errorSummaryRef.current) {
      errorSummaryRef.current?.focus();
      const firstField = document.getElementById(`field-${Object.keys(errors)[0]}`);
      if (firstField) {
        firstField.focus();
        firstField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [errors]);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    const err = a.fieldError;
    const emailErr = a.emailError;
    const minErr = a.minLengthError;

    if (currentStep === 1) {
      if (!form.fullName || form.fullName.trim().length < 2) newErrors.fullName = err;
      if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = emailErr;
      if (!form.companyName || form.companyName.trim().length < 2) newErrors.companyName = err;
      if (!form.country) newErrors.country = err;
      if (!form.preferredLanguage) newErrors.preferredLanguage = err;
      if (!form.industry || form.industry.trim().length < 2) newErrors.industry = err;
      if (!form.employees) newErrors.employees = err;
      if (!form.founderCount || !/^\d+$/.test(form.founderCount) || parseInt(form.founderCount) < 1 || parseInt(form.founderCount) > 20) newErrors.founderCount = err;
    } else if (currentStep === 2) {
      if (!form.profitabilityContext) newErrors.profitabilityContext = err;
      if (!form.dependencyLevel) newErrors.dependencyLevel = err;
      if (!form.primaryConstraint || form.primaryConstraint.trim().length < 20) newErrors.primaryConstraint = minErr;
    } else if (currentStep === 3) {
      if (!form.desiredChange || form.desiredChange.trim().length < 20) newErrors.desiredChange = minErr;
      if (!form.christianAlignment) newErrors.christianAlignment = err;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    if (form.formTrap) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const payload = {
        full_name: form.fullName || null,
        email: (form.email || '').toLowerCase(),
        phone: form.phone || null,
        company_name: form.companyName || null,
        website: form.website || null,
        country: form.country || null,
        primary_market: form.primaryMarket || null,
        language: form.preferredLanguage || lang,
        industry_model: form.industry || null,
        employee_band: form.employees || null,
        founder_count: form.founderCount ? parseInt(form.founderCount) : null,
        profitability_context: form.profitabilityContext || null,
        dependency_level: form.dependencyLevel || null,
        primary_constraint: form.primaryConstraint || null,
        desired_change: form.desiredChange || null,
        christian_alignment: form.christianAlignment || null,
        source: form.source || null,
        source_detail: form.sourceDetail || null,
        additional_context: form.additionalContext || null,
        consent_insights: form.consentInsights === 'true',
        client_request_id: requestId,
        submitted_at_client: new Date().toISOString(),
        landing_page: landingPage || null,
        utm_source: utms.utm_source || null,
        utm_medium: utms.utm_medium || null,
        utm_campaign: utms.utm_campaign || null,
      };

      const { error } = await supabase.from('blueprint_applications').insert(payload);

      if (error) {
        if (error.code === '23505') {
          setStatus('duplicate');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('error');
    }
  };

  const privacyPath = lang === 'en' ? '/en/privacy-policy' : '/es/politica-de-privacidad';

  if (status === 'success' || status === 'duplicate') {
    return (
      <>
        <SEO
          title={t.seo.applyTitle}
          description={t.seo.applyDesc}
          path={lang === 'en' ? '/en/apply' : '/es/aplicar'}
          alternates={{ en: '/en/apply', es: '/es/aplicar' }}
        />
        <section className="flex min-h-[70vh] items-center justify-center bg-ink-900 pt-24">
          <div className="container-prose text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-brand-light-green animate-on-scroll" aria-hidden="true" />
            <h1 className="mt-8 font-display text-display-md text-white animate-on-scroll">
              {status === 'duplicate' ? a.duplicate : a.successTitle}
            </h1>
            {status === 'success' && (
              <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">{a.successBody}</p>
            )}
          </div>
        </section>
      </>
    );
  }

  const showFounderPricing = form.founderCount && parseInt(form.founderCount) > 2;
  const showPrimaryMarket = form.country && form.country !== '';
  const showPropheticQuestions = form.christianAlignment === 'questions' || form.christianAlignment === 'no';
  const showSourceDetail = form.source && form.source !== '';
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <>
      <SEO
        title={t.seo.applyTitle}
        description={t.seo.applyDesc}
        path={lang === 'en' ? '/en/apply' : '/es/aplicar'}
        alternates={{ en: '/en/apply', es: '/es/aplicar' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.navCta}
          title={a.title}
          subtitle={a.intro}
          breadcrumbs={[{ label: t.navCta }]}
        />

        {/* Helper section */}
        <section className="border-t border-ink-700/50 py-12">
          <div className="container-prose">
            <div className="rounded-xl border border-ink-700/50 bg-ink-800/30 p-6 animate-on-scroll">
              <h2 className="font-display text-lg text-white">{a.sectionHeading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{a.helper}</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            {/* Progress indicator */}
            <div className="mb-12 animate-on-scroll">
              <p className="text-sm font-medium text-ink-300">
                {a.stepLabels.step} {step} {a.stepLabels.of} 3
              </p>
              <div className="mt-3 flex gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      s <= step ? 'bg-brand-light-green' : 'bg-ink-700'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-3 font-display text-base text-white">
                {step === 1 ? a.stepLabels.step1 : step === 2 ? a.stepLabels.step2 : a.stepLabels.step3}
              </p>
            </div>

            {/* Error summary */}
            {hasErrors && (
              <div
                ref={errorSummaryRef}
                tabIndex={-1}
                role="alert"
                className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 focus:outline-none"
              >
                <p className="text-sm font-semibold text-red-300">{a.errorSummary}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-ink-300">
                  {Object.entries(errors).map(([field, msg]) => (
                    <li key={field}>
                      <a
                        href={`#field-${field}`}
                        className="text-ink-200 underline hover:text-white"
                      >
                        {msg}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-red-300">{a.errorTitle}</p>
                  <p className="mt-1 text-sm text-ink-300">{a.errorBody}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — visually hidden, must remain empty */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="field-formTrap">Leave this field empty</label>
                <input
                  id="field-formTrap"
                  name="formTrap"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.formTrap || ''}
                  onChange={(e) => update('formTrap', e.target.value)}
                />
              </div>

              {/* Step 1 — Founder and company */}
              {step === 1 && (
                <fieldset className="space-y-6 animate-on-scroll">
                  <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                    {a.stepLabels.step1}
                  </legend>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField label={f.fullName.label} name="fullName" required placeholder={f.fullName.placeholder} value={form.fullName || ''} onChange={(v) => update('fullName', v)} error={errors.fullName} />
                    <FormField label={f.email.label} name="email" type="email" required placeholder={f.email.placeholder} value={form.email || ''} onChange={(v) => update('email', v)} error={errors.email} />
                    <FormField label={f.companyName.label} name="companyName" required placeholder={f.companyName.placeholder} value={form.companyName || ''} onChange={(v) => update('companyName', v)} error={errors.companyName} />
                    <FormField label={f.website.label} name="website" placeholder={f.website.placeholder} value={form.website || ''} onChange={(v) => update('website', v)} />
                    <FormField label={f.country.label} name="country" type="select" required placeholder={f.country.placeholder} options={f.country.options} value={form.country || ''} onChange={(v) => update('country', v)} error={errors.country} />
                    <FormField label={f.preferredLanguage.label} name="preferredLanguage" type="select" required placeholder={f.preferredLanguage.placeholder} options={f.preferredLanguage.options} value={form.preferredLanguage || ''} onChange={(v) => update('preferredLanguage', v)} error={errors.preferredLanguage} />
                    <FormField label={f.industry.label} name="industry" required placeholder={f.industry.placeholder} value={form.industry || ''} onChange={(v) => update('industry', v)} error={errors.industry} />
                    <FormField label={f.employees.label} name="employees" type="select" required placeholder={f.employees.placeholder} options={f.employees.options} value={form.employees || ''} onChange={(v) => update('employees', v)} error={errors.employees} />
                    <FormField label={f.founderCount.label} name="founderCount" type="number" required placeholder={f.founderCount.placeholder} value={form.founderCount || ''} onChange={(v) => update('founderCount', v)} error={errors.founderCount} />
                  </div>

                  {showFounderPricing && (
                    <div className="flex items-start gap-3 rounded-lg border border-brand-light-yellow/30 bg-brand-light-yellow/5 p-4">
                      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light-yellow" aria-hidden="true" />
                      <p className="text-xs text-ink-200">{a.founderPricingNote}</p>
                    </div>
                  )}

                  {showPrimaryMarket && (
                    <FormField label={f.primaryMarket.label} name="primaryMarket" placeholder={f.primaryMarket.placeholder} value={form.primaryMarket || ''} onChange={(v) => update('primaryMarket', v)} />
                  )}

                  <div className="border-t border-ink-700/50 pt-6">
                    <button type="button" onClick={handleNext} className="btn-primary">
                      {a.next}
                    </button>
                  </div>
                </fieldset>
              )}

              {/* Step 2 — Business context */}
              {step === 2 && (
                <fieldset className="space-y-6 animate-on-scroll">
                  <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                    {a.stepLabels.step2}
                  </legend>
                  <FormField label={f.profitabilityContext.label} name="profitabilityContext" type="select" required placeholder={f.profitabilityContext.placeholder} options={f.profitabilityContext.options} value={form.profitabilityContext || ''} onChange={(v) => update('profitabilityContext', v)} error={errors.profitabilityContext} />
                  <FormField label={f.dependencyLevel.label} name="dependencyLevel" type="select" required placeholder={f.dependencyLevel.placeholder} options={f.dependencyLevel.options} value={form.dependencyLevel || ''} onChange={(v) => update('dependencyLevel', v)} error={errors.dependencyLevel} />
                  <FormField label={f.primaryConstraint.label} name="primaryConstraint" type="textarea" required placeholder={f.primaryConstraint.placeholder} value={form.primaryConstraint || ''} onChange={(v) => update('primaryConstraint', v)} error={errors.primaryConstraint} />

                  <div className="flex flex-col gap-3 border-t border-ink-700/50 pt-6 sm:flex-row">
                    <button type="button" onClick={handleBack} className="btn-secondary">
                      {a.back}
                    </button>
                    <button type="button" onClick={handleNext} className="btn-primary">
                      {a.next}
                    </button>
                  </div>
                </fieldset>
              )}

              {/* Step 3 — Challenge, outcome, and fit */}
              {step === 3 && (
                <fieldset className="space-y-6 animate-on-scroll">
                  <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                    {a.stepLabels.step3}
                  </legend>
                  <FormField label={f.desiredChange.label} name="desiredChange" type="textarea" required placeholder={f.desiredChange.placeholder} value={form.desiredChange || ''} onChange={(v) => update('desiredChange', v)} error={errors.desiredChange} />
                  <FormField label={f.christianAlignment.label} name="christianAlignment" type="select" required placeholder={f.christianAlignment.placeholder} options={f.christianAlignment.options} value={form.christianAlignment || ''} onChange={(v) => update('christianAlignment', v)} error={errors.christianAlignment} />

                  {/* Conditional: prophetic questions helper */}
                  {showPropheticQuestions && (
                    <div className="rounded-lg border border-ink-700/50 bg-ink-800/20 p-4">
                      <p className="text-xs leading-relaxed text-ink-300">{a.propheticQuestionsHelper}</p>
                    </div>
                  )}

                  <FormField label={f.phone.label} name="phone" placeholder={f.phone.placeholder} help={f.phone.help} value={form.phone || ''} onChange={(v) => update('phone', v)} />
                  <FormField label={f.source.label} name="source" type="select" placeholder={f.source.placeholder} options={f.source.options} value={form.source || ''} onChange={(v) => update('source', v)} />

                  {/* Conditional: source detail */}
                  {showSourceDetail && (
                    <FormField label={f.sourceDetail.label} name="sourceDetail" placeholder={f.sourceDetail.placeholder} help={f.sourceDetail.help} value={form.sourceDetail || ''} onChange={(v) => update('sourceDetail', v)} />
                  )}

                  <FormField label={f.additionalContext.label} name="additionalContext" type="textarea" placeholder={f.additionalContext.placeholder} help={f.additionalContext.help} value={form.additionalContext || ''} onChange={(v) => update('additionalContext', v)} />

                  {/* Optional Insights consent */}
                  <div className="rounded-lg border border-ink-700/50 bg-ink-800/20 p-4">
                    <FormField label={a.consentInsights} name="consentInsights" type="checkbox" checked={form.consentInsights === 'true'} onChange={(v) => update('consentInsights', v)} />
                  </div>

                  {/* Required consent */}
                  <div className="rounded-lg border border-ink-700/50 bg-ink-800/30 p-4">
                    <p className="text-xs leading-relaxed text-ink-300">
                      {a.consentRequired.split(lang === 'en' ? 'See our Privacy Policy.' : 'Consulta nuestra')[0]}
                      <Link to={privacyPath} className="text-brand-light-green underline hover:text-brand-light-yellow">
                        {t.footer.privacyPolicy}
                      </Link>
                      {lang === 'en' ? '.' : '.'}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-ink-700/50 pt-6 sm:flex-row">
                    <button type="button" onClick={handleBack} className="btn-secondary">
                      {a.back}
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary"
                    >
                      {status === 'submitting' ? a.submitting : a.submit}
                    </button>
                  </div>
                </fieldset>
              )}
            </form>
          </div>
        </section>
      </article>
    </>
  );
}
