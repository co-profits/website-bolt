import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { FormField } from '@/components/FormField';
import { supabase } from '@/lib/supabase';

type FormState = Record<string, string>;

export function ApplyPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const a = t.applyPage;
  const f = a.fields;

  const [form, setForm] = useState<FormState>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = (): boolean => {
    const required = ['companyName', 'fullName', 'email', 'christianAlignment', 'integrationWillingness'];
    const newErrors: Record<string, string> = {};
    for (const field of required) {
      if (!form[field] || form[field].trim() === '') {
        newErrors[field] = lang === 'en' ? 'This field is required.' : 'Este campo es requerido.';
      }
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = lang === 'en' ? 'Please enter a valid email address.' : 'Por favor ingresa un correo válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('blueprint_applications').insert({
        language: lang,
        company_name: form.companyName || null,
        website: form.website || null,
        industry: form.industry || null,
        employees: form.employees || null,
        location: form.location || null,
        founder_structure: form.founderStructure || null,
        business_stage_desc: form.businessStageDesc || null,
        above_break_even: form.aboveBreakEven || null,
        profitability_context: form.profitabilityContext || null,
        founder_dependence_level: form.founderDependenceLevel || null,
        founder_involvement: form.founderInvolvement || null,
        bottlenecks: form.bottlenecks || null,
        primary_challenge: form.primaryChallenge || null,
        profit_goals: form.profitGoals || null,
        freedom_goals: form.freedomGoals || null,
        growth_goals: form.growthGoals || null,
        other_goals: form.otherGoals || null,
        christian_alignment: form.christianAlignment || null,
        christian_alignment_context: form.christianAlignmentContext || null,
        integration_willingness: form.integrationWillingness || null,
        integration_context: form.integrationContext || null,
        full_name: form.fullName || null,
        email: form.email || null,
        phone: form.phone || null,
        preferred_language: form.preferredLanguage || null,
        anything_else: form.anythingElse || null,
      });

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
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
            <h1 className="mt-8 font-display text-display-md text-white animate-on-scroll">{a.successTitle}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">{a.successBody}</p>
          </div>
        </section>
      </>
    );
  }

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
          subtitle={a.subtitle}
          breadcrumbs={[{ label: t.navCta }]}
        />

        {/* Intro */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-ink-700/50 bg-ink-800/30 p-8 animate-on-scroll">
              <h2 className="font-display text-xl text-white">{a.introTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">{a.introBody}</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{a.formTitle}</h2>
            <p className="mt-3 text-sm text-ink-400 animate-on-scroll">{a.requiredNote}</p>

            {status === 'error' && (
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-red-300">{a.errorTitle}</p>
                  <p className="mt-1 text-sm text-ink-300">{a.errorBody}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-12" noValidate>
              {/* Company */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.company}
                </legend>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField label={f.companyName.label} name="companyName" required placeholder={f.companyName.placeholder} value={form.companyName || ''} onChange={(v) => update('companyName', v)} error={errors.companyName} />
                  <FormField label={f.website.label} name="website" placeholder={f.website.placeholder} value={form.website || ''} onChange={(v) => update('website', v)} />
                  <FormField label={f.industry.label} name="industry" placeholder={f.industry.placeholder} value={form.industry || ''} onChange={(v) => update('industry', v)} />
                  <FormField label={f.employees.label} name="employees" type="select" placeholder={f.employees.placeholder} options={f.employees.options} value={form.employees || ''} onChange={(v) => update('employees', v)} />
                  <FormField label={f.location.label} name="location" placeholder={f.location.placeholder} value={form.location || ''} onChange={(v) => update('location', v)} />
                  <FormField label={f.founderStructure.label} name="founderStructure" type="select" placeholder={f.founderStructure.placeholder} options={f.founderStructure.options} value={form.founderStructure || ''} onChange={(v) => update('founderStructure', v)} />
                </div>
              </fieldset>

              {/* Business Stage */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.businessStage}
                </legend>
                <FormField label={f.businessStageDesc.label} name="businessStageDesc" type="textarea" placeholder={f.businessStageDesc.placeholder} value={form.businessStageDesc || ''} onChange={(v) => update('businessStageDesc', v)} />
              </fieldset>

              {/* Profitability */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.profitability}
                </legend>
                <div className="grid grid-cols-1 gap-6">
                  <FormField label={f.aboveBreakEven.label} name="aboveBreakEven" type="select" placeholder="" options={f.aboveBreakEven.options} value={form.aboveBreakEven || ''} onChange={(v) => update('aboveBreakEven', v)} />
                  <FormField label={f.profitabilityContext.label} name="profitabilityContext" type="textarea" placeholder={f.profitabilityContext.placeholder} help={f.profitabilityContext.help} value={form.profitabilityContext || ''} onChange={(v) => update('profitabilityContext', v)} />
                </div>
              </fieldset>

              {/* Founder Dependence */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.founderDependence}
                </legend>
                <div className="grid grid-cols-1 gap-6">
                  <FormField label={f.founderDependenceLevel.label} name="founderDependenceLevel" type="select" placeholder="" options={f.founderDependenceLevel.options} value={form.founderDependenceLevel || ''} onChange={(v) => update('founderDependenceLevel', v)} />
                  <FormField label={f.founderInvolvement.label} name="founderInvolvement" type="textarea" placeholder={f.founderInvolvement.placeholder} value={form.founderInvolvement || ''} onChange={(v) => update('founderInvolvement', v)} />
                  <FormField label={f.bottlenecks.label} name="bottlenecks" type="textarea" placeholder={f.bottlenecks.placeholder} value={form.bottlenecks || ''} onChange={(v) => update('bottlenecks', v)} />
                </div>
              </fieldset>

              {/* Challenge */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.challenge}
                </legend>
                <FormField label={f.primaryChallenge.label} name="primaryChallenge" type="textarea" placeholder={f.primaryChallenge.placeholder} value={form.primaryChallenge || ''} onChange={(v) => update('primaryChallenge', v)} />
              </fieldset>

              {/* Goals */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.goals}
                </legend>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField label={f.profitGoals.label} name="profitGoals" type="textarea" placeholder={f.profitGoals.placeholder} value={form.profitGoals || ''} onChange={(v) => update('profitGoals', v)} />
                  <FormField label={f.freedomGoals.label} name="freedomGoals" type="textarea" placeholder={f.freedomGoals.placeholder} value={form.freedomGoals || ''} onChange={(v) => update('freedomGoals', v)} />
                  <FormField label={f.growthGoals.label} name="growthGoals" type="textarea" placeholder={f.growthGoals.placeholder} value={form.growthGoals || ''} onChange={(v) => update('growthGoals', v)} />
                  <FormField label={f.otherGoals.label} name="otherGoals" type="textarea" placeholder={f.otherGoals.placeholder} value={form.otherGoals || ''} onChange={(v) => update('otherGoals', v)} />
                </div>
              </fieldset>

              {/* Christian Alignment */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.christian}
                </legend>
                <div className="grid grid-cols-1 gap-6">
                  <FormField label={f.christianAlignment.label} name="christianAlignment" type="select" required placeholder="" options={f.christianAlignment.options} value={form.christianAlignment || ''} onChange={(v) => update('christianAlignment', v)} error={errors.christianAlignment} />
                  <FormField label={f.christianAlignmentContext.label} name="christianAlignmentContext" type="textarea" placeholder={f.christianAlignmentContext.placeholder} value={form.christianAlignmentContext || ''} onChange={(v) => update('christianAlignmentContext', v)} />
                </div>
              </fieldset>

              {/* Integration */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.integration}
                </legend>
                <div className="grid grid-cols-1 gap-6">
                  <FormField label={f.integrationWillingness.label} name="integrationWillingness" type="select" required placeholder="" options={f.integrationWillingness.options} value={form.integrationWillingness || ''} onChange={(v) => update('integrationWillingness', v)} error={errors.integrationWillingness} />
                  <FormField label={f.integrationContext.label} name="integrationContext" type="textarea" placeholder={f.integrationContext.placeholder} value={form.integrationContext || ''} onChange={(v) => update('integrationContext', v)} />
                </div>
              </fieldset>

              {/* Contact */}
              <fieldset className="animate-on-scroll">
                <legend className="mb-6 border-b border-ink-700/50 pb-3 font-display text-lg text-white">
                  {a.sections.contact}
                </legend>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField label={f.fullName.label} name="fullName" required placeholder={f.fullName.placeholder} value={form.fullName || ''} onChange={(v) => update('fullName', v)} error={errors.fullName} />
                  <FormField label={f.email.label} name="email" type="email" required placeholder={f.email.placeholder} value={form.email || ''} onChange={(v) => update('email', v)} error={errors.email} />
                  <FormField label={f.phone.label} name="phone" type="tel" placeholder={f.phone.placeholder} value={form.phone || ''} onChange={(v) => update('phone', v)} />
                  <FormField label={f.preferredLanguage.label} name="preferredLanguage" type="select" placeholder="" options={f.preferredLanguage.options} value={form.preferredLanguage || ''} onChange={(v) => update('preferredLanguage', v)} />
                </div>
                <div className="mt-6">
                  <FormField label={f.anythingElse.label} name="anythingElse" type="textarea" placeholder={f.anythingElse.placeholder} value={form.anythingElse || ''} onChange={(v) => update('anythingElse', v)} />
                </div>
              </fieldset>

              {/* Submit */}
              <div className="animate-on-scroll border-t border-ink-700/50 pt-8">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400" aria-hidden="true" />
                  <p className="text-xs text-ink-400">{a.spamNote}</p>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-6 w-full sm:w-auto"
                >
                  {status === 'submitting' ? a.submittingButton : a.submitButton}
                </button>
              </div>
            </form>
          </div>
        </section>
      </article>
    </>
  );
}
