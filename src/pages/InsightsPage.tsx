import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function InsightsPage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const ins = t.insightsPage;

  return (
    <>
      <SEO
        title={t.seo.insightsTitle}
        description={t.seo.insightsDesc}
        path={lang === 'en' ? '/en/insights' : '/es/insights'}
        alternates={{ en: '/en/insights', es: '/es/insights' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[6].label}
          title={ins.title}
          subtitle={ins.subtitle}
          breadcrumbs={[{ label: t.nav[6].label }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            {/* Empty state */}
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 bg-ink-800/40 animate-on-scroll">
                <FileText className="h-8 w-8 text-ink-400" aria-hidden="true" />
              </div>
              <h2 className="font-display text-display-md animate-on-scroll text-white">{ins.emptyTitle}</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{ins.emptyBody}</p>
            </div>

            {/* Themes */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
                {ins.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full border border-ink-600 bg-ink-800/30 px-4 py-2 text-xs font-medium text-ink-300"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA to Blueprint */}
            <div className="mt-16 text-center animate-on-scroll">
              <Link to={applyPath} className="btn-primary">
                {t.cta.applyBlueprint}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
