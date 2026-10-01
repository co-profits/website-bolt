import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function WhyPage() {
  const { t, lang, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const w = t.whyPage;

  return (
    <>
      <SEO
        title={t.seo.whyTitle}
        description={t.seo.whyDesc}
        path={lang === 'en' ? '/en/why-company-of-profits' : '/es/por-que-company-of-profits'}
        alternates={{ en: '/en/why-company-of-profits', es: '/es/por-que-company-of-profits' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[4].label}
          title={w.title}
          subtitle={w.intro}
          breadcrumbs={[{ label: t.nav[4].label }]}
        />

        {/* Themes */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {w.themes.map((theme, i) => (
                <div
                  key={i}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mb-3 h-px w-8 bg-brand-light-green/40" aria-hidden="true" />
                  <h2 className="text-base font-semibold text-white">{theme.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={w.cta}
          buttonLabel={w.cta}
          buttonTo={blueprintPath}
        />
      </article>
    </>
  );
}
