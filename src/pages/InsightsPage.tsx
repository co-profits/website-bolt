import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import sanityData from 'virtual:sanity-data';

export function InsightsPage() {
  const { t, lang, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const ins = t.insightsPage;

  const articles = sanityData.lists[lang] || [];
  const insightsBase = lang === 'en' ? '/en/insights' : '/es/insights';

  const emptyTitle = lang === 'en' ? 'We will publish insights soon' : 'Pronto publicaremos insights';
  const emptyBody = lang === 'en'
    ? 'Explore the latest published thinking here, or begin with the Prophetic Business Blueprint to examine your business in context.'
    : 'Explora aquí el último pensamiento publicado, o comienza con la Radiografía Empresarial Profética para examinar tu empresa en contexto.';

  return (
    <>
      <SEO
        title={t.seo.insightsTitle}
        description={t.seo.insightsDesc}
        path={insightsBase}
        alternates={{ en: '/en/insights', es: '/es/insights' }}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={t.nav[6].label}
          title={ins.title}
          subtitle={ins.intro}
          breadcrumbs={[{ label: t.nav[6].label }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-wide">
            {articles.length === 0 ? (
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 bg-ink-800/40 animate-on-scroll">
                  <FileText className="h-8 w-8 text-ink-400" aria-hidden="true" />
                </div>
                <h2 className="font-display text-display-md animate-on-scroll text-white">{emptyTitle}</h2>
                <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{emptyBody}</p>
                <div className="mt-8 animate-on-scroll">
                  <Link to={blueprintPath} className="btn-secondary">
                    {ins.emptyCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {articles.length >= 3 && (
                  <div className="animate-on-scroll">
                    <p className="section-eyebrow mb-4">{ins.featuredLabel}</p>
                    <Link
                      to={`${insightsBase}/${articles[0].slug}`}
                      className="card-surface group block p-8 transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                    >
                      {articles[0].coverImage && (
                        <div className="mb-6 overflow-hidden rounded-lg">
                          <img
                            src={articles[0].coverImage.url}
                            alt={articles[0].coverImage.alt || articles[0].title}
                            loading="eager"
                            decoding="async"
                            className="h-auto w-full"
                            style={{ aspectRatio: `${articles[0].coverImage.width} / ${articles[0].coverImage.height}` }}
                          />
                        </div>
                      )}
                      <h2 className="font-display text-display-md text-white">{articles[0].title}</h2>
                      <p className="mt-4 text-base leading-relaxed text-ink-300">{articles[0].excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                        {ins.cardCta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(articles.length >= 3 ? articles.slice(1) : articles).map((article, i) => (
                    <Link
                      key={article._id}
                      to={`${insightsBase}/${article.slug}`}
                      className="card-surface group p-6 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {article.coverImage && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img
                            src={article.coverImage.url}
                            alt={article.coverImage.alt || article.title}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full"
                            style={{ aspectRatio: `${article.coverImage.width} / ${article.coverImage.height}` }}
                          />
                        </div>
                      )}
                      <h3 className="text-base font-semibold text-white">{article.title}</h3>
                      {article.publishedAt && (
                        <time className="mt-1 block text-xs text-ink-500" dateTime={article.publishedAt}>
                          {new Date(article.publishedAt).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{article.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-light-green transition-colors group-hover:text-brand-light-yellow">
                        {ins.cardCta}
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <CTABlock title={t.cta.applyBlueprint} buttonLabel={t.cta.applyBlueprint} />
      </article>
    </>
  );
}
