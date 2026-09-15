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
          subtitle={a.subtitle}
          breadcrumbs={[{ label: t.nav[5].label }]}
        />

        {/* Founder */}
        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Portrait placeholder */}
              <div className="animate-on-scroll">
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-ink-700/50 bg-ink-800/30">
                  <div className="flex h-full items-center justify-center p-8 text-center">
                    <p className="text-sm text-ink-500">{a.portraitPlaceholder}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="font-display text-display-md animate-on-scroll text-white">{a.founderTitle}</h2>
                <div className="mt-6 space-y-4">
                  {a.founderBody.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-ink-200 animate-on-scroll">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional */}
        <section className="border-t border-ink-700/50 bg-ink-950 py-20 lg:py-28">
          <div className="container-prose">
            <h2 className="font-display text-display-md animate-on-scroll text-white">{a.institutionalTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-200 animate-on-scroll">{a.institutionalBody}</p>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
