import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function MethodologyPage() {
  const { t, lang, applyPath } = useLang();
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
          subtitle={m.intro}
          breadcrumbs={[{ label: t.nav[2].label }]}
        />

        {/* Six-stage path */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-light-green/30 via-ink-600 to-transparent lg:block" aria-hidden="true" />
              <div className="space-y-12">
                {m.stages.map((stage, i) => (
                  <div
                    key={i}
                    className={`flex flex-col lg:flex-row lg:items-center lg:gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="lg:w-1/2 animate-on-scroll">
                      <div className={`rounded-xl border border-ink-700/50 bg-ink-800/30 p-6 lg:p-8 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                        <span className="font-display text-4xl font-bold text-brand-light-green/30">{stage.num}</span>
                        <h2 className="mt-2 font-display text-xl text-white">{stage.title}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-ink-300">{stage.desc}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 lg:p-12 animate-on-scroll">
              <h2 className="font-display text-display-md text-white">
                {lang === 'en' ? 'Integration' : 'Integración'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200">{m.integration}</p>
            </div>
          </div>
        </section>

        {/* Biblical foundation */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{m.biblicalHeading}</h2>
            <div className="mt-6 space-y-4">
              {m.biblicalBody.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-200 animate-on-scroll">{para}</p>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={m.cta}
          buttonLabel={m.cta}
        />
      </article>
    </>
  );
}
