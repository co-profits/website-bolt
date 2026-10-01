import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';

export function AboutPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const a = t.aboutPage;

  return (
    <>
      <SEO
        title={t.seo.aboutTitle}
        description={t.seo.aboutDesc}
        path={lang === 'en' ? '/en/about' : '/es/nosotros'}
        alternates={{ en: '/en/about', es: '/es/nosotros' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[5].label}
          title={a.title}
          breadcrumbs={[{ label: t.nav[5].label }]}
        />

        {/* Firm */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <p className="text-lg leading-relaxed text-ink-200 animate-on-scroll">{a.firmOpening}</p>
            <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{a.purpose}</p>
          </div>
        </section>

        {/* Naming story */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{a.namingHeading}</h2>
            <div className="mt-6 space-y-4">
              {a.namingStory.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-200 animate-on-scroll">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light-green animate-on-scroll">{a.founderLabel}</p>
              <h2 className="mt-4 font-display text-display-md animate-on-scroll text-white">{a.founderName}</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{a.biography}</p>
              <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{a.callingStory}</p>
            </div>
          </div>
        </section>

        <CTABlock title={a.cta} buttonLabel={a.cta} />
      </article>
    </>
  );
}
