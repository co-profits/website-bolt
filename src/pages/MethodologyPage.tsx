import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function MethodologyPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const m = t.methodologyPage;

  return (
    <>
      <SEO
        title={t.seo.methodologyTitle}
        description={t.seo.methodologyDesc}
        path={lang === 'en' ? '/en/methodology' : '/es/metodologia'}
        alternates={{ en: '/en/methodology', es: '/es/metodologia' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[2].label}
          title={m.title}
          subtitle={m.subtitle}
          breadcrumbs={[{ label: t.nav[2].label }]}
        />

        {/* Steps */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16">
              {m.steps.map((step, i) => (
                <div
                  key={i}
                  className={`animate-on-scroll ${i % 2 === 1 ? 'lg:mt-16' : ''}`}
                >
                  <span className="font-display text-5xl font-bold text-brand-light-green/20">{step.num}</span>
                  <h2 className="mt-2 font-display text-xl text-white">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 lg:p-12 animate-on-scroll">
              <h2 className="font-display text-display-md text-white">{m.differentiatorTitle}</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200">{m.differentiatorBody}</p>
            </div>
          </div>
        </section>

        {/* Boundaries */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{m.boundariesTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{m.boundariesBody}</p>
          </div>
        </section>

        {/* Next step */}
        <CTABlock
          title={m.nextStepTitle}
          subtitle={m.nextStepBody}
        />
      </article>
    </>
  );
}
