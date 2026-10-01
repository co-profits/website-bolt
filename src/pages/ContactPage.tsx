import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { FormField } from '@/components/FormField';
import { supabase } from '@/lib/supabase';

export function ContactPage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const c = t.contactPage;

  const [form, setForm] = useState({ name: '', company: '', country: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    (['name', 'company', 'country', 'email', 'message'] as const).forEach((field) => {
      if (!form[field] || form[field].trim() === '') {
        newErrors[field] = c.fieldError;
      }
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = c.emailError;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        company: form.company,
        country: form.country,
        email: form.email,
        message: form.message,
        language: lang,
      });
      if (error) throw error;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <SEO
          title={t.seo.contactTitle}
          description={t.seo.contactDesc}
          path={lang === 'en' ? '/en/contact' : '/es/contacto'}
          alternates={{ en: '/en/contact', es: '/es/contacto' }}
        />
        <section className="flex min-h-[70vh] items-center justify-center bg-ink-900 pt-24">
          <div className="container-prose text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-brand-light-green animate-on-scroll" aria-hidden="true" />
            <p className="mt-8 text-lg leading-relaxed text-ink-200 animate-on-scroll">{c.success}</p>
            <div className="mt-8 animate-on-scroll">
              <Link to={applyPath} className="btn-secondary">
                {c.applyDistinction}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={t.seo.contactTitle}
        description={t.seo.contactDesc}
        path={lang === 'en' ? '/en/contact' : '/es/contacto'}
        alternates={{ en: '/en/contact', es: '/es/contacto' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[8].label}
          title={c.title}
          subtitle={c.intro}
          breadcrumbs={[{ label: t.nav[8].label }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            {status === 'error' && (
              <div className="mb-8 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 animate-on-scroll">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" aria-hidden="true" />
                <p className="text-sm text-ink-200">{c.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField label={c.fields.name} name="name" required value={form.name} onChange={(v) => update('name', v)} error={errors.name} />
                <FormField label={c.fields.company} name="company" required value={form.company} onChange={(v) => update('company', v)} error={errors.company} />
                <FormField label={c.fields.country} name="country" required value={form.country} onChange={(v) => update('country', v)} error={errors.country} />
                <FormField label={c.fields.email} name="email" type="email" required value={form.email} onChange={(v) => update('email', v)} error={errors.email} />
              </div>
              <FormField label={c.fields.message} name="message" type="textarea" required value={form.message} onChange={(v) => update('message', v)} error={errors.message} />

              <div className="border-t border-ink-700/50 pt-6">
                <p className="text-xs text-ink-400">{c.privacy}</p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-6 w-full sm:w-auto"
                >
                  {status === 'submitting' ? '...' : c.cta}
                </button>
              </div>
            </form>

            <div className="mt-12 rounded-lg border border-ink-700/50 bg-ink-800/20 p-4 animate-on-scroll">
              <p className="text-sm text-ink-300">{c.applyDistinction}</p>
              <Link to={applyPath} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-light-green transition-colors hover:text-brand-light-yellow">
                {t.cta.applyBlueprint}
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
