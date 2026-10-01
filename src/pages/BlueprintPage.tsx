import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function BlueprintPage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const bp = t.blueprintPage;

  const facts = lang === 'en'
    ? [
        { label: 'Price', value: 'USD $2,300' },
        { label: 'Format', value: '100% live, virtual and personalized' },
        { label: 'Sessions', value: 'At least seven live videoconference sessions' },
        { label: 'Team', value: 'Business consultant and prophet' },
        { label: 'Partners', value: 'Up to two founding partners included' },
      ]
    : [
        { label: 'Precio', value: 'USD $2.300' },
        { label: 'Formato', value: '100 % en vivo, virtual y personalizado' },
        { label: 'Sesiones', value: 'Mínimo siete sesiones por videoconferencia' },
        { label: 'Equipo', value: 'Consultor empresarial y profeta' },
        { label: 'Socios', value: 'Hasta dos socios fundadores incluidos' },
      ];

  const blueprintImageAlt = lang === 'en'
    ? 'Editorial still life representing an organized business diagnostic dossier.'
    : 'Bodegón editorial que representa un dossier organizado de diagnóstico empresarial.';

  const boundaryParagraphs = bp.applicationBoundary.split('\n\n');

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
          eyebrow={bp.eyebrow}
          title={bp.title}
          subtitle={bp.hero}
          breadcrumbs={[{ label: t.nav[1].label }]}
        />

        {/* Facts panel with image */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <div className="rounded-xl border border-ink-700/50 bg-ink-800/30 p-6 lg:p-8">
                  <dl className="space-y-4">
                    {facts.map((fact, i) => (
                      <div key={i} className="flex flex-col border-b border-ink-700/40 pb-4 last:border-0 last:pb-0">
                        <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light-green">{fact.label}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink-100">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-ink-300">{bp.scope}</p>
              </div>
              <div className="animate-on-scroll">
                <img
                  src="/assets/images/Editorial_still_life_representing_an_organized_business_diagnostic_dossier.png"
                  alt={blueprintImageAlt}
                  className="w-full rounded-xl border border-ink-700/50"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">
              {lang === 'en' ? 'What it is' : 'Qué es'}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{bp.whatItIs}</p>

            <h2 className="mt-12 font-display text-display-md animate-on-scroll text-white">
              {lang === 'en' ? 'Who it is for' : 'Para quién es'}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{bp.whoItIsFor}</p>
          </div>
        </section>

        {/* Business problem + Integrated discernment */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-on-scroll">
                <h2 className="font-display text-xl text-white">
                  {lang === 'en' ? 'The business problem' : 'El problema empresarial'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{bp.businessProblem}</p>
              </div>
              <div className="animate-on-scroll">
                <h2 className="font-display text-xl text-white">
                  {lang === 'en' ? 'Integrated discernment' : 'Discernimiento integrado'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{bp.integratedDiscernment}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Public process */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-16">
          <div className="container-prose text-center">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light-green animate-on-scroll">
              {lang === 'en' ? 'Public process' : 'Proceso público'}
            </h2>
            <p className="mt-4 font-display text-2xl text-white animate-on-scroll">{bp.publicProcess}</p>
          </div>
        </section>

        {/* After the Blueprint */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">
              {lang === 'en' ? 'After the Blueprint' : 'Después de la Radiografía'}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{bp.afterBlueprint}</p>
          </div>
        </section>

        {/* Application boundary */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <div className="rounded-xl border border-brand-light-green/20 bg-brand-light-green/5 p-8 lg:p-12 animate-on-scroll">
              <h2 className="font-display text-display-md text-white">
                {lang === 'en' ? 'The application boundary' : 'La frontera de la aplicación'}
              </h2>
              <div className="mt-6 space-y-4">
                {boundaryParagraphs.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-200">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock
          title={bp.cta}
          buttonLabel={bp.cta}
        />
      </article>
    </>
  );
}
