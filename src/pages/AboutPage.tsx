import { useLang } from '@/i18n/LangContext';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

const WHY_IMG_ALT_EN = 'Editorial material representing an integrated path from business strategy and prophetic discernment toward a practical decision.';
const WHY_IMG_ALT_ES = 'Material editorial que representa un camino integrado de estrategia empresarial y discernimiento profético hacia una decisión práctica.';
const WHY_IMG_SRC = '/assets/images/company-of-profits-prophetic-pathway-to-light-door.webp';
const WHY_IMG_DIM = { w: 2400, h: 1792 };

export function AboutPage() {
  const { t, lang, blueprintPath } = useLang();
  const a = t.aboutPage;
  const w = t.whyPage;

  const sections = lang === 'en'
    ? [
        { id: 'firm', label: 'The firm' },
        { id: 'origin', label: 'Origin' },
        { id: 'founder', label: 'Founder' },
        { id: 'approach', label: 'Our approach' },
        { id: 'integration', label: 'Prophetic integration' },
      ]
    : [
        { id: 'firm', label: 'La firma' },
        { id: 'origin', label: 'Origen' },
        { id: 'founder', label: 'Fundador' },
        { id: 'approach', label: 'Nuestro enfoque' },
        { id: 'integration', label: 'Discernimiento profético' },
      ];

  const propheticTheme = w.themes.find(
    (th) => th.title === 'Prophetic integration' || th.title === 'Discernimiento profético'
  );

  return (
    <>
      <SEO
        title={t.seo.aboutTitle}
        description={t.seo.aboutDesc}
        path={lang === 'en' ? '/en/about/' : '/es/nosotros/'}
        alternates={{ en: '/en/about/', es: '/es/nosotros/' }}
      />
      <article>
        <PageHeader
          eyebrow={t.nav[4].label}
          title={a.title}
          breadcrumbs={[{ label: t.nav[4].label }]}
        />

        {/* Section index — desktop sidebar / mobile scroller */}
        <nav
          aria-label={lang === 'en' ? 'Page sections' : 'Secciones de la página'}
          className="border-t border-semantic-rule-on-dark"
        >
          <div className="container-wide py-4">
            <ul className="flex gap-6 overflow-x-auto whitespace-nowrap text-sm text-ink-300 lg:justify-center">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="transition-colors hover:text-brand-light-green focus-visible-ring rounded"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Firm */}
        <section id="firm" className="surface-forest scroll-mt-20 py-20 lg:py-28">
          <div className="container-prose">
            <p className="text-lg leading-relaxed text-ink-on-dark">{a.firmOpening}</p>
            <p className="mt-6 text-base leading-relaxed text-ink-on-dark-muted">{a.purpose}</p>
          </div>
        </section>

        {/* Origin / naming story */}
        <section id="origin" className="surface-forest-deep border-t border-semantic-rule-on-dark py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-h2 text-balance text-white">{a.namingHeading}</h2>
            <div className="mt-6 space-y-4">
              {a.namingStory.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-on-dark">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Founder — no photograph */}
        <section id="founder" className="surface-forest border-t border-semantic-rule-on-dark py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light-green">{a.founderLabel}</p>
              <h2 className="mt-4 font-display text-h2 text-white">{a.founderName}</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-on-dark">{a.biography}</p>
              <p className="mt-6 text-base leading-relaxed text-ink-on-dark-muted">{a.callingStory}</p>
            </div>
          </div>
        </section>

        {/* Approach — merged from Why Us themes */}
        <section id="approach" className="surface-forest-deep border-t border-semantic-rule-on-dark py-20 lg:py-28">
          <div className="container-wide">
            <h2 className="font-display text-h2 mb-4 text-balance text-white">
              {lang === 'en' ? 'How we approach the work' : 'Cómo abordamos el trabajo'}
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-ink-on-dark-muted">{w.intro}</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {w.themes.map((theme) => (
                <div key={theme.title}>
                  <div className="mb-3 h-px w-8 bg-brand-light-green/40" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-white">{theme.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-on-dark-muted">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prophetic integration with editorial image */}
        <section id="integration" className="surface-forest border-t border-semantic-rule-on-dark py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <div className="relative w-full overflow-hidden rounded-xl border border-semantic-rule-on-dark">
                  <img
                    src={WHY_IMG_SRC}
                    alt={lang === 'en' ? WHY_IMG_ALT_EN : WHY_IMG_ALT_ES}
                    width={WHY_IMG_DIM.w}
                    height={WHY_IMG_DIM.h}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                    style={{ aspectRatio: '3 / 2' }}
                  />
                </div>
              </div>
              <div>
                {propheticTheme && (
                  <>
                    <div className="mb-3 h-px w-8 bg-brand-light-green/40" aria-hidden="true" />
                    <h2 className="font-display text-h2 text-balance text-white">
                      {propheticTheme.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-on-dark">
                      {propheticTheme.desc}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <CTABlock
          title={a.cta}
          buttonLabel={a.cta}
          buttonTo={blueprintPath}
        />
      </article>
    </>
  );
}
