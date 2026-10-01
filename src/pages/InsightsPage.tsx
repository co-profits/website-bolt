import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { createClient } from '@sanity/client';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { siteConfig } from '@/config/site';

interface InsightSummary {
  _id: string;
  slug: { current: string };
  title: string;
  excerpt: string;
  publishedAt: string;
  category?: string[];
}

const sanityClient = createClient({
  projectId: siteConfig.sanityProjectId,
  dataset: siteConfig.sanityDataset,
  apiVersion: siteConfig.sanityApiVersion,
  useCdn: true,
});

export function InsightsPage() {
  const { t, lang, applyPath, blueprintPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const ins = t.insightsPage;

  const [articles, setArticles] = useState<InsightSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      slug,
      title,
      excerpt,
      publishedAt,
      category
    }`;
    sanityClient.fetch(query)
      .then((data: InsightSummary[]) => {
        setArticles(data || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const insightsBase = lang === 'en' ? '/en/insights' : '/es/insights';

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
            {loading && (
              <p className="text-center text-sm text-ink-400">{ins.loading}</p>
            )}

            {!loading && error && (
              <p className="text-center text-sm text-ink-400">{ins.error}</p>
            )}

            {!loading && !error && articles.length === 0 && (
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-ink-600 bg-ink-800/40 animate-on-scroll">
                  <FileText className="h-8 w-8 text-ink-400" aria-hidden="true" />
                </div>
                <h2 className="font-display text-display-md animate-on-scroll text-white">{ins.emptyTitle}</h2>
                <p className="mt-6 text-base leading-relaxed text-ink-300 animate-on-scroll">{ins.emptyBody}</p>
                <div className="mt-8 animate-on-scroll">
                  <Link to={blueprintPath} className="btn-secondary">
                    {ins.emptyCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}

            {!loading && !error && articles.length > 0 && (
              <div className="space-y-8">
                {articles.length >= 3 && (
                  <div className="animate-on-scroll">
                    <p className="section-eyebrow mb-4">{ins.featuredLabel}</p>
                    <Link
                      to={`${insightsBase}/${articles[0].slug.current}`}
                      className="card-surface group block p-8 transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                    >
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
                      to={`${insightsBase}/${article.slug.current}`}
                      className="card-surface group p-6 animate-on-scroll transition-all duration-200 hover:border-ink-500 hover:bg-ink-800/60"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <h3 className="text-base font-semibold text-white">{article.title}</h3>
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
