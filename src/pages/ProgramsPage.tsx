import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { programs, getProgramPath } from '@/data/programs';

export function ProgramsPage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const p = t.programsPage;

  const corePrograms = programs.filter((prog) => prog.category === 'core');
  const mentorship = programs.find((prog) => prog.category === 'mentorship');
  const future = programs.find((prog) => prog.category === 'future');

  const sectionLabels = lang === 'en'
    ? { core: 'Core intervention pathways', mentorship: 'Optional ongoing relationship', future: 'In development' }
    : { core: 'Vías de intervención principales', mentorship: 'Relación opcional y continua', future: 'En desarrollo' };

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
          subtitle={p.intro}
          breadcrumbs={[{ label: t.nav[3].label }]}
        />

        {/* Blueprint upstream block */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 lg:p-12 animate-on-scroll">
              <p className="text-base leading-relaxed text-ink-200">
                {lang === 'en'
                  ? 'Company of Profits does not begin by assigning a program from a menu. The Prophetic Business Blueprint diagnoses the business first. The next intervention follows the constraint or opportunity that matters most.'
                  : 'Company of Profits no comienza asignando un programa desde un menú de servicios. La Radiografía Empresarial Profética diagnostica primero la empresa. La siguiente intervención depende de la restricción u oportunidad más importante.'}
              </p>
              <div className="mt-6">
                <Link to={lang === 'en' ? '/en/blueprint' : '/es/radiografia'} className="btn-secondary">
                  {p.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core programs */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{sectionLabels.core}</h2>
            <div className="mt-12 space-y-8">
              {corePrograms.map((prog, i) => {
                const content = lang === 'en' ? prog.en : prog.es;
                const path = getProgramPath(prog, lang);
                return (
                  <Link
                    key={prog.slugEn}
                    to={path}
                    className="card-surface group block p-8 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="lg:max-w-2xl">
                        <h3 className="font-display text-xl text-white">{content.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-300">{content.whoFor}</p>
                      </div>
                      <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                        {p.viewDetails}
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mentorship */}
        {mentorship && (
          <section className="border-t border-ink-700/50 py-20 lg:py-28">
            <div className="container-wide">
              <h2 className="font-display text-display-md animate-on-scroll text-white">{sectionLabels.mentorship}</h2>
              <div className="mt-8">
                <Link
                  to={getProgramPath(mentorship, lang)}
                  className="card-surface group block p-8 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="lg:max-w-2xl">
                      <h3 className="font-display text-xl text-white">{lang === 'en' ? mentorship.en.name : mentorship.es.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-300">{lang === 'en' ? mentorship.en.whoFor : mentorship.es.whoFor}</p>
                    </div>
                    <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                      {p.viewDetails}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Future program */}
        {future && (
          <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
            <div className="container-wide">
              <h2 className="font-display text-display-md animate-on-scroll text-white">{sectionLabels.future}</h2>
              <div className="mt-8 rounded-xl border border-ink-700/50 bg-ink-800/20 p-8 animate-on-scroll">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl text-white">{lang === 'en' ? future.en.name : future.es.name}</h3>
                  <span className="rounded-full bg-brand-purple/15 px-3 py-1 text-xs font-medium text-brand-purple">
                    {t.common.inDevelopment}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{lang === 'en' ? future.en.hero : future.es.hero}</p>
              </div>
            </div>
          </section>
        )}

        <CTABlock title={p.cta} buttonLabel={p.cta} />
      </article>
    </>
  );
}
