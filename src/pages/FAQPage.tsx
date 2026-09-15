import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { FAQItem } from '@/components/FAQItem';

export function FAQPage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const f = t.faqPage;

  return (
    <>
      <SEO
        title={t.seo.faqTitle}
        description={t.seo.faqDesc}
        path={lang === 'en' ? '/en/faq' : '/es/preguntas-frecuentes'}
        alternates={{ en: '/en/faq', es: '/es/preguntas-frecuentes' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[7].label}
          title={f.title}
          subtitle={f.subtitle}
          breadcrumbs={[{ label: t.nav[7].label }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div className="animate-on-scroll">
              {f.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CTABlock title={t.cta.finalCtaTitle} subtitle={t.cta.finalCtaSubtitle} />
      </article>
    </>
  );
}
