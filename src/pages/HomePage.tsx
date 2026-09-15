import { Link } from 'react-router-dom';
import { ArrowRight, Flame, ShieldCheck, Eye, Stethoscope, Compass } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';
import { programs, getProgramPath } from '@/data/programs';

export function HomePage() {
  const { t, lang, applyPath, blueprintPath, programsPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();

  const h = t.home;

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
          {/* Flame motif */}
          <Flame
            className="absolute right-8 top-28 hidden h-48 w-48 text-brand-light-green/8 lg:block xl:right-16 xl:h-64 xl:w-64"
            aria-hidden="true"
          />
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
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-eyebrow mb-4 animate-on-scroll">{h.problemEyebrow}</p>
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.problemTitle}
              </h2>
              <p className="mt-4 text-lg text-ink-300 animate-on-scroll">{h.problemSubtitle}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {h.problemItems.map((item, i) => (
                <div
                  key={i}
                  className="card-surface p-6 animate-on-scroll"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reframe */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <p className="section-eyebrow mb-4">{h.reframeEyebrow}</p>
                <h2 className="font-display text-display-md text-balance text-white">
                  {h.reframeTitle}
                </h2>
                <p className="mt-4 text-lg text-ink-300">{h.reframeSubtitle}</p>
              </div>
              <div className="animate-on-scroll">
                <p className="text-base leading-relaxed text-ink-200">{h.reframeBody}</p>
                {/* System diagram */}
                <div className="mt-8 rounded-xl border border-ink-700/50 bg-ink-800/30 p-8">
                  <svg viewBox="0 0 400 200" className="w-full" role="img" aria-label="System diagram showing interconnected business constraints">
                    <defs>
                      <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D77F" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#AEFC49" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {[
                      [80, 50, 200, 50],
                      [200, 50, 320, 100],
                      [320, 100, 200, 150],
                      [200, 150, 80, 100],
                      [80, 100, 80, 50],
                      [200, 50, 200, 150],
                      [80, 100, 320, 100],
                    ].map(([x1, y1, x2, y2], i) => (
                      <line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="url(#line-grad)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.5"
                      />
                    ))}
                    {[
                      [80, 50, 'Strategy'],
                      [200, 50, 'Structure'],
                      [320, 100, 'Operations'],
                      [200, 150, 'Decisions'],
                      [80, 100, 'Dependencies'],
                    ].map(([cx, cy, label], i) => (
                      <g key={i}>
                        <circle cx={cx as number} cy={cy as number} r="6" fill="#00D77F" opacity="0.9" />
                        <text
                          x={cx as number}
                          y={(cy as number) - 14}
                          textAnchor="middle"
                          fill="#E0EDEF"
                          fontSize="11"
                          fontFamily="Inter, sans-serif"
                        >
                          {label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-eyebrow mb-4 animate-on-scroll flex items-center gap-2">
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
                {h.blueprintEyebrow}
              </p>
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.blueprintTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">
                {h.blueprintSubtitle}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {h.blueprintFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="card-surface p-6 animate-on-scroll"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h3 className="text-base font-semibold text-brand-light-green">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{feat.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-400 animate-on-scroll border-l-2 border-brand-purple/40 pl-4">
              {h.blueprintNote}
            </p>
            <div className="mt-10 animate-on-scroll">
              <Link to={blueprintPath} className="btn-secondary">
                {t.common.learnMore}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-eyebrow mb-4 animate-on-scroll flex items-center gap-2">
                <Eye className="h-4 w-4" aria-hidden="true" />
                {h.differenceEyebrow}
              </p>
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.differenceTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">
                {h.differenceSubtitle}
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">
                {h.differenceBody}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {h.differenceVsItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-ink-700/40 bg-ink-800/20 p-5 animate-on-scroll"
                >
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold text-brand-light-yellow animate-on-scroll">
              {h.differenceIntegration}
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-eyebrow mb-4 animate-on-scroll flex items-center gap-2">
                <Compass className="h-4 w-4" aria-hidden="true" />
                {h.programsEyebrow}
              </p>
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.programsTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">
                {h.programsSubtitle}
              </p>
            </div>

            {/* Diagnosis-driven pathway visual */}
            <div className="mt-12 animate-on-scroll">
              <div className="flex flex-wrap items-center gap-2 text-sm text-ink-300">
                {['Diagnose', 'Identify', 'Recommend', 'Execute', 'Reassess'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-ink-600 bg-ink-800/40 px-4 py-2 text-xs font-medium text-ink-100">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-ink-500" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p, i) => {
                const content = lang === 'en' ? p.en : p.es;
                const path = getProgramPath(p, lang);
                return (
                  <Link
                    key={p.slugEn}
                    to={path}
                    className="card-surface group p-6 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white">{content.name}</h3>
                      {p.status === 'coming-soon' && (
                        <span className="rounded-full bg-brand-purple/15 px-3 py-1 text-xs font-medium text-brand-purple">
                          {t.common.comingSoon}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{content.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                      {t.programsPage.viewDetails}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-400 animate-on-scroll border-l-2 border-brand-purple/40 pl-4">
              {h.programsNote}
            </p>
            <div className="mt-10 animate-on-scroll">
              <Link to={programsPath} className="btn-secondary">
                {t.programsPage.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-eyebrow mb-4 animate-on-scroll flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                {h.trustEyebrow}
              </p>
              <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
                {h.trustTitle}
              </h2>
              <p className="mt-4 text-lg text-ink-300 animate-on-scroll">{h.trustSubtitle}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {h.trustItems.map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTABlock
          eyebrow={h.finalCtaEyebrow}
          title={t.cta.finalCtaTitle}
          subtitle={t.cta.finalCtaSubtitle}
          buttonLabel={t.cta.finalCtaButton}
        />
      </article>
    </>
  );
}
