import { Check, X, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { siteConfig } from '@/config/site';

export function BlueprintPage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const bp = t.blueprintPage;

  return (
    <>
      <SEO
        title={t.seo.blueprintTitle}
        description={t.seo.blueprintDesc}
        path={lang === 'en' ? '/en/blueprint' : '/es/radiografia'}
        alternates={{ en: '/en/blueprint', es: '/es/radiografia' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[1].label}
          title={bp.title}
          subtitle={bp.subtitle}
          breadcrumbs={[{ label: t.nav[1].label }]}
        />

        {/* Overview */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{bp.overviewTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-200 animate-on-scroll">{bp.overviewBody}</p>
          </div>
        </section>

        {/* What it includes */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <h2 className="font-display text-display-md text-white">{bp.whatItIsTitle}</h2>
                <p className="mt-6 text-base leading-relaxed text-ink-200">{bp.whatItIsBody}</p>
              </div>
              <div className="animate-on-scroll">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-400">{bp.elementsTitle}</h3>
                <ul className="mt-6 space-y-4">
                  {bp.elements.map((el, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light-green" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink-200">{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price */}
        <section className="border-t border-ink-700/50 py-16">
          <div className="container-prose text-center">
            <p className="section-eyebrow mb-4 animate-on-scroll">{bp.priceTitle}</p>
            <p className="font-display text-3xl text-white animate-on-scroll">{siteConfig.blueprintPrice}</p>
            <p className="mt-4 text-sm text-ink-400 animate-on-scroll">{bp.priceNote}</p>
          </div>
        </section>

        {/* Program logic */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{bp.programLogicTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{bp.programLogicBody}</p>
            <ul className="mt-8 space-y-3">
              {bp.programLogicItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 animate-on-scroll">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light-green" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Concurrency + Fit + Repetition */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="animate-on-scroll">
                <h2 className="font-display text-xl text-white">{bp.concurrencyTitle}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{bp.concurrencyBody}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="font-display text-xl text-white">{bp.fitTitle}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{bp.fitBody}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="font-display text-xl text-white">{bp.repetitionTitle}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{bp.repetitionBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What it is NOT */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{bp.notFramedAs}</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {bp.notFramedItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 animate-on-scroll">
                  <X className="h-4 w-4 flex-shrink-0 text-red-400" aria-hidden="true" />
                  <span className="text-sm text-ink-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Apply CTA */}
        <CTABlock
          title={bp.applyCtaTitle}
          subtitle={bp.applyCtaBody}
          buttonLabel={bp.applyCtaButton}
        />
      </article>
    </>
  );
}
