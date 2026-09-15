import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function WhyPage() {
  const { t, lang } = useLang();
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
          subtitle={w.subtitle}
          breadcrumbs={[{ label: t.nav[4].label }]}
        />

        {/* Themes */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {w.themes.map((theme, i) => (
                <div
                  key={i}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <h2 className="text-base font-semibold text-white">{theme.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{w.comparisonTitle}</h2>
            <p className="mt-4 text-lg text-ink-300 animate-on-scroll">{w.comparisonIntro}</p>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="animate-on-scroll">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-400">
                  {lang === 'en' ? 'Conventional approaches' : 'Enfoques convencionales'}
                </h3>
                <ul className="mt-6 space-y-4">
                  {w.conventionalItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-ink-700/40 pb-4">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-500" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light-green">
                  Company of Profits
                </h3>
                <ul className="mt-6 space-y-4">
                  {w.copItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-brand-light-green/20 pb-4">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light-green" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 max-w-3xl text-lg leading-relaxed text-white animate-on-scroll">
              {w.conclusion}
            </p>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
