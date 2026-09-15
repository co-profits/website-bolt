import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';
import { getProgramBySlug } from '@/data/programs';

export function ProgramDetailPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const params = useParams();
  const slug = params.slug || '';
  const program = getProgramBySlug(slug, lang);

  if (!program) return <Navigate to={lang === 'en' ? '/en/programs' : '/es/programas'} replace />;

  const content = lang === 'en' ? program.en : program.es;
  const programsPath = lang === 'en' ? '/en/programs' : '/es/programas';
  const blueprintPath = lang === 'en' ? '/en/blueprint' : '/es/radiografia';

  return (
    <>
      <SEO
        title={`${content.name} — ${t.seo.programsTitle.replace(' — Company of Profits', '')}`}
        description={content.tagline}
        path={lang === 'en' ? `/en/programs/${program.slugEn}` : `/es/programas/${program.slugEs}`}
        alternates={{
          en: `/en/programs/${program.slugEn}`,
          es: `/es/programas/${program.slugEs}`,
        }}
      />
      <article ref={ref}>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-ink-700/50 bg-ink-900 pt-28 lg:pt-36">
          <div className="bg-grid-faint absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
          <div className="container-wide relative pb-16 lg:pb-20">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
                <li>
                  <Link to={t.nav[0].path} className="transition-colors hover:text-ink-200">
                    {t.common.breadcrumbHome}
                  </Link>
                </li>
                <li><ArrowRight className="h-3 w-3" aria-hidden="true" /></li>
                <li>
                  <Link to={programsPath} className="transition-colors hover:text-ink-200">
                    {t.nav[3].label}
                  </Link>
                </li>
                <li><ArrowRight className="h-3 w-3" aria-hidden="true" /></li>
                <li className="text-ink-200">{content.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-4">
              <h1 className="font-display text-display-lg text-balance text-white">{content.name}</h1>
              {program.status === 'coming-soon' && (
                <span className="rounded-full bg-brand-purple/15 px-4 py-1.5 text-sm font-medium text-brand-purple">
                  {t.common.comingSoon}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-300">{content.description}</p>
          </div>
        </section>

        {/* Who for + Problem + Outcome */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-12">
              <div className="animate-on-scroll">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light-green">
                  {lang === 'en' ? 'Who it is for' : 'Para quién es'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{content.whoFor}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light-green">
                  {lang === 'en' ? 'The business problem' : 'El problema empresarial'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{content.businessProblem}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light-green">
                  {lang === 'en' ? 'The desired outcome' : 'El resultado deseado'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{content.desiredOutcome}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters + Workstreams */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <h2 className="font-display text-display-md text-white">
                  {lang === 'en' ? 'Why it matters' : 'Por qué importa'}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-200">{content.whyItMatters}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-400">
                  {lang === 'en' ? 'Major workstreams' : 'Workstreams principales'}
                </h2>
                <ul className="mt-6 space-y-3">
                  {content.workstreams.map((ws, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light-green" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink-200">{ws}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prophetic integration + Deliverables */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <h2 className="font-display text-display-md text-white">
                  {lang === 'en' ? 'Prophetic discernment' : 'Discernimiento profético'}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-200">{content.propheticIntegration}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-400">
                  {lang === 'en' ? 'High-level deliverables' : 'Entregables de alto nivel'}
                </h2>
                <ul className="mt-6 space-y-3">
                  {content.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light-green" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink-200">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Does not promise */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">
              {lang === 'en' ? 'What this engagement does not promise' : 'Lo que este compromiso no promete'}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.doesNotPromise.map((item, i) => (
                <li key={i} className="flex items-start gap-3 animate-on-scroll">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" aria-hidden="true" />
                  <span className="text-sm text-ink-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Blueprint relation */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 animate-on-scroll">
              <h2 className="font-display text-xl text-white">
                {lang === 'en' ? 'How this relates to the Blueprint' : 'Cómo se relaciona con la Radiografía'}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-200">{content.blueprintRelation}</p>
            </div>
            <div className="mt-8 animate-on-scroll">
              <p className="text-base leading-relaxed text-ink-200">{content.nextStep}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link to={blueprintPath} className="btn-primary">
                  {t.cta.discoverNeeds}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to={programsPath} className="btn-secondary">
                  {t.common.backToPrograms}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
