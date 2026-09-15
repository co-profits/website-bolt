import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { programs, getProgramPath } from '@/data/programs';

export function ProgramsPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const p = t.programsPage;

  return (
    <>
      <SEO
        title={t.seo.programsTitle}
        description={t.seo.programsDesc}
        path={lang === 'en' ? '/en/programs' : '/es/programas'}
        alternates={{ en: '/en/programs', es: '/es/programas' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[3].label}
          title={p.title}
          subtitle={p.subtitle}
          breadcrumbs={[{ label: t.nav[3].label }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-ink-200 animate-on-scroll">{p.intro}</p>
              <p className="mt-6 text-sm leading-relaxed text-ink-400 animate-on-scroll border-l-2 border-brand-purple/40 pl-4">
                {p.diagnosisNote}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {programs.map((prog, i) => {
                const content = lang === 'en' ? prog.en : prog.es;
                const path = getProgramPath(prog, lang);
                return (
                  <Link
                    key={prog.slugEn}
                    to={path}
                    className="card-surface group p-8 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-xl text-white">{content.name}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-ink-300">{content.tagline}</p>
                      </div>
                      {prog.status === 'coming-soon' && (
                        <span className="flex-shrink-0 rounded-full bg-brand-purple/15 px-3 py-1 text-xs font-medium text-brand-purple">
                          {t.common.comingSoon}
                        </span>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-400">{content.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                      {p.viewDetails}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
