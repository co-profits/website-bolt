import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';

export function HomePage() {
  const { t, lang, applyPath, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const h = t.home;

  const processSteps = lang === 'en'
    ? ['Diagnose', 'Identify', 'Recommend', 'Execute', 'Reassess']
    : ['Diagnosticar', 'Identificar', 'Recomendar', 'Ejecutar', 'Reevaluar'];

  return (
    <>
      <SEO
        title={t.seo.homeTitle}
        description={t.seo.homeDesc}
        path={lang === 'en' ? '/en/' : '/es/'}
        alternates={{ en: '/en/', es: '/es/' }}
      />
      <article ref={ref}>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pt-24 lg:pt-32">
          <div className="bg-grid-faint absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
          <div className="container-wide relative pb-20 lg:pb-28">
            <div className="max-w-4xl">
              <p className="section-eyebrow mb-6 animate-on-scroll">{h.positioning}</p>
              <h1 className="font-display text-display-xl animate-on-scroll text-balance text-white">
                {h.heroH1}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300 animate-on-scroll lg:text-xl">
                {h.heroSub}
              </p>
              <div className="mt-10 flex flex-col gap-4 animate-on-scroll sm:flex-row sm:items-center">
                <Link to={applyPath} className="btn-primary">
                  {h.heroCtaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to={blueprintPath} className="btn-secondary">
                  {h.heroCtaSecondary}
                </Link>
              </div>
              <p className="mt-5 text-sm text-ink-400 animate-on-scroll">{h.microcopy}</p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.problemTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">{h.problemIntro}</p>
            </div>
            <div className="mt-12 max-w-3xl space-y-8">
              {h.problemItems.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-brand-light-green/30 pl-6 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.systemTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{h.systemBody}</p>
            </div>
            {/* System diagram */}
            <div className="mt-12 animate-on-scroll">
              <svg viewBox="0 0 400 280" className="mx-auto w-full max-w-2xl" role="img" aria-label={lang === 'en' ? 'System diagram showing interconnected business constraints' : 'Diagrama del sistema mostrando restricciones empresariales interconectadas'}>
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D77F" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#AEFC49" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {[
                  [80, 60, 200, 60],
                  [200, 60, 320, 140],
                  [320, 140, 200, 220],
                  [200, 220, 80, 140],
                  [80, 140, 80, 60],
                  [200, 60, 200, 220],
                  [80, 140, 320, 140],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                ))}
                {[
                  [80, 60, h.diagramLabels[0]],
                  [200, 60, h.diagramLabels[1]],
                  [320, 140, h.diagramLabels[2]],
                  [200, 220, h.diagramLabels[3]],
                  [80, 140, h.diagramLabels[4]],
                ].map(([cx, cy, label], i) => (
                  <g key={i}>
                    <circle cx={cx as number} cy={cy as number} r="7" fill="#00D77F" opacity="0.85" />
                    <text x={cx as number} y={(cy as number) - 16} textAnchor="middle" fill="#E0EDEF" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
                      {label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.methodTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{h.methodBody}</p>
            </div>
            <div className="mt-8 animate-on-scroll">
              <div className="flex flex-wrap items-center gap-2 text-sm text-ink-300">
                {processSteps.map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-ink-600 bg-ink-800/40 px-4 py-2 text-xs font-medium text-ink-100">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-ink-500" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 lg:p-12 animate-on-scroll">
              <h2 className="font-display text-display-md text-balance text-white">
                {h.integrationTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200">{h.integrationBody}</p>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.blueprintTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{h.blueprintBody}</p>
            </div>
            {/* Fact strip */}
            <div className="mt-10 animate-on-scroll">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl border border-ink-700/50 bg-ink-800/30 px-6 py-5 text-center">
                {h.factStrip.split(' · ').map((fact, i) => (
                  <span key={i} className="text-sm font-medium text-ink-100">
                    {fact}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 animate-on-scroll">
              <Link to={blueprintPath} className="btn-secondary">
                {h.blueprintCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Decision */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{h.decisionTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{h.decisionBody}</p>
          </div>
        </section>

        {/* Final CTA */}
        <CTABlock
          title={h.finalCtaCopy}
          buttonLabel={h.finalCtaButton}
        />
      </article>
    </>
  );
}
