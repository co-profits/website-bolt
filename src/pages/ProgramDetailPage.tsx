import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';
import { getProgramBySlug } from '@/data/programs';
import { siteConfig } from '@/config/site';

export function ProgramDetailPage() {
  const { t, lang, applyPath, contactPath, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const params = useParams();
  const slug = params.slug || '';
  const program = getProgramBySlug(slug, lang);

  if (!program) return <Navigate to={lang === 'en' ? '/en/programs' : '/es/programas'} replace />;

  const content = lang === 'en' ? program.en : program.es;
  const programsPath = lang === 'en' ? '/en/programs' : '/es/programas';

  const isFuture = program.category === 'future';
  const isMentorship = program.category === 'mentorship';

  const sectionLabels = lang === 'en'
    ? { whoFor: 'Who it is for', problem: 'The problem', whatAddresses: 'What it addresses', howWorks: 'How it works', prophetic: 'Prophetic integration', whatChanges: 'What changes', blueprintRelation: 'Relationship to the Blueprint', availability: 'Availability' }
    : { whoFor: 'Para quién', problem: 'El problema', whatAddresses: 'Qué aborda', howWorks: 'Cómo funciona', prophetic: 'Discernimiento profético', whatChanges: 'Qué cambia', blueprintRelation: 'Relación con la Radiografía', availability: 'Disponibilidad' };

  return (
    <>
      <SEO
        title={`${content.name} — ${siteConfig.companyName}`}
        description={content.hero}
        path={lang === 'en' ? `/en/programs/${program.slugEn}` : `/es/programas/${program.slugEs}`}
        alternates={{
          en: `/en/programs/${program.slugEn}`,
          es: `/es/programas/${program.slugEs}`,
        }}
      />
      <article ref={ref}>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-ink-700/50 bg-ink-900 pt-28 lg:pt-36">
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
              {isFuture && (
                <span className="rounded-full bg-brand-purple/15 px-4 py-1.5 text-sm font-medium text-brand-purple">
                  {t.common.inDevelopment}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-300">{content.hero}</p>
          </div>
        </section>

        {isFuture ? (
          <section className="border-t border-ink-700/50 py-20 lg:py-28">
            <div className="container-prose">
              <p className="text-base leading-relaxed text-ink-300">{content.blueprintRelation}</p>
              <div className="mt-8">
                <Link to={blueprintPath} className="btn-secondary">
                  {t.cta.exploreBlueprint}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Who for + Problem */}
            <section className="border-t border-ink-700/50 py-20 lg:py-28">
              <div className="container-wide">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.whoFor}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.whoFor}</p>
                  </div>
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.problem}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.businessProblem}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* What it addresses + How it works */}
            <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
              <div className="container-wide">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.whatAddresses}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.whatItAddresses}</p>
                  </div>
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.howWorks}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.howItWorks}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prophetic integration + What changes */}
            <section className="border-t border-ink-700/50 py-20 lg:py-28">
              <div className="container-wide">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.prophetic}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.propheticIntegration}</p>
                  </div>
                  <div className="animate-on-scroll">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{sectionLabels.whatChanges}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">{content.whatChanges}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Blueprint relation + CTAs */}
            <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
              <div className="container-prose">
                <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 animate-on-scroll">
                  <h2 className="font-display text-xl text-white">{sectionLabels.blueprintRelation}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-200">{content.blueprintRelation}</p>
                </div>
                <div className="mt-8 flex flex-col gap-4 animate-on-scroll sm:flex-row">
                  {isMentorship ? (
                    <>
                      <Link to={contactPath} className="btn-primary">
                        {content.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link to={blueprintPath} className="btn-secondary">
                        {content.relatedCta}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={applyPath} className="btn-primary">
                        {content.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link to={blueprintPath} className="btn-secondary">
                        {content.relatedCta}
                      </Link>
                    </>
                  )}
                  <Link to={programsPath} className="btn-ghost">
                    {t.common.backToPrograms}
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </article>
    </>
  );
}
