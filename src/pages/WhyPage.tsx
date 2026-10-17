import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

const WHY_IMG_ALT_EN = 'Editorial material representing an integrated path from business strategy and prophetic discernment toward a practical decision.';
const WHY_IMG_ALT_ES = 'Material editorial que representa un camino integrado de estrategia empresarial y discernimiento profético hacia una decisión práctica.';
const WHY_IMG_SRC = '/assets/images/company-of-profits-prophetic-pathway-to-light-door.webp';
const WHY_IMG_DIM = { w: 2400, h: 1792 };

export function WhyPage() {
  const { t, lang, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const w = t.whyPage;

  return (
    <>
      <SEO
        title={t.seo.whyTitle}
        description={t.seo.whyDesc}
        path={lang === 'en' ? '/en/why-company-of-profits' : '/es/por-que-company-of-profits'}
        alternates={{ en: '/en/why-company-of-profits', es: '/es/por-que-company-of-profits' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[4].label}
          title={w.title}
          subtitle={w.intro}
          breadcrumbs={[{ label: t.nav[4].label }]}
        />

        {/* Themes */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {w.themes.map((theme, i) => (
                <div
                  key={i}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="mb-3 h-px w-8 bg-brand-light-green/40" aria-hidden="true" />
                  <h2 className="text-base font-semibold text-white">{theme.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prophetic integration with editorial image — COP-W2-IMG-02 */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="animate-on-scroll">
                <div className="relative w-full overflow-hidden rounded-xl border border-ink-700/50">
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
              <div className="animate-on-scroll">
                {w.themes.find((th) => th.title === 'Prophetic integration' || th.title === 'Discernimiento profético') && (
                  <>
                    <div className="mb-3 h-px w-8 bg-brand-light-green/40" aria-hidden="true" />
                    <h2 className="font-display text-display-sm text-balance text-white">
                      {w.themes.find((th) => th.title === 'Prophetic integration' || th.title === 'Discernimiento profético')!.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-200">
                      {w.themes.find((th) => th.title === 'Prophetic integration' || th.title === 'Discernimiento profético')!.desc}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <CTABlock
          title={w.cta}
          buttonLabel={w.cta}
          buttonTo={blueprintPath}
        />
      </article>
    </>
  );
}
