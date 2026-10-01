import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@sanity/client';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';
import { siteConfig } from '@/config/site';

interface InsightArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: unknown[];
  publishedAt: string;
  category?: string[];
  author?: { name: string };
  faqs?: { question: string; answer: string }[];
}

const sanityClient = createClient({
  projectId: siteConfig.sanityProjectId,
  dataset: siteConfig.sanityDataset,
  apiVersion: siteConfig.sanityApiVersion,
  useCdn: true,
});

function renderBlockContent(blocks: unknown[]): string {
  if (!Array.isArray(blocks)) return '';
  return blocks.map((block: unknown) => {
    const b = block as { _type: string; children?: { text: string }[]; style?: string };
    if (b._type === 'block') {
      const text = (b.children || []).map((c: { text: string }) => c.text).join('');
      if (b.style === 'h2') return `<h2 class="mt-10 mb-4 font-display text-xl text-white">${text}</h2>`;
      if (b.style === 'h3') return `<h3 class="mt-8 mb-3 font-display text-lg text-white">${text}</h3>`;
      return `<p class="text-base leading-relaxed text-ink-200">${text}</p>`;
    }
    return '';
  }).join('\n');
}

export function InsightArticlePage() {
  const { t, lang, applyPath } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const params = useParams();
  const slug = params.slug || '';

  const [article, setArticle] = useState<InsightArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, body, publishedAt, category,
      author->{name},
      faqs[]{question, answer}
    }`;
    sanityClient.fetch(query, { slug })
      .then((data: InsightArticle | null) => {
        if (!data) {
          setNotFound(true);
        } else {
          setArticle(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (notFound) {
    return <Navigate to={lang === 'en' ? '/en/insights' : '/es/insights'} replace />;
  }

  const insightsBase = lang === 'en' ? '/en/insights' : '/es/insights';
  const articlePath = `${insightsBase}/${slug}`;

  return (
    <>
      <SEO
        title={article ? `${article.title} — Company of Profits` : t.seo.insightsTitle}
        description={article?.excerpt || t.seo.insightsDesc}
        path={articlePath}
        alternates={{ en: `/en/insights/${slug}`, es: `/es/insights/${slug}` }}
      />
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt,
            author: article.author ? { '@type': 'Person', name: article.author.name } : undefined,
          })}
        </script>
      )}
      <article ref={ref}>
        {loading && (
          <section className="pt-32 pb-20">
            <div className="container-prose">
              <p className="text-sm text-ink-400">Loading...</p>
            </div>
          </section>
        )}

        {!loading && article && (
          <>
            <section className="relative overflow-hidden border-b border-ink-700/50 bg-ink-900 pt-28 lg:pt-36">
              <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
              <div className="container-wide relative pb-16 lg:pb-20">
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
                    <li>
                      <Link to={lang === 'en' ? '/en/' : '/es/'} className="transition-colors hover:text-ink-200">
                        {t.common.breadcrumbHome}
                      </Link>
                    </li>
                    <li><ArrowRight className="h-3 w-3" aria-hidden="true" /></li>
                    <li>
                      <Link to={insightsBase} className="transition-colors hover:text-ink-200">
                        {t.nav[6].label}
                      </Link>
                    </li>
                  </ol>
                </nav>
                <h1 className="font-display text-display-lg max-w-4xl text-balance text-white">
                  {article.title}
                </h1>
                {article.excerpt && (
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{article.excerpt}</p>
                )}
                {article.author && (
                  <p className="mt-4 text-sm text-ink-400">{article.author.name}</p>
                )}
              </div>
            </section>

            <section className="border-t border-ink-700/50 py-20 lg:py-28">
              <div className="container-prose">
                <div
                  className="space-y-4 animate-on-scroll"
                  dangerouslySetInnerHTML={{ __html: renderBlockContent(article.body || []) }}
                />
              </div>
            </section>

            <CTABlock
              title={t.insightsPage.articleCta}
              buttonLabel={t.cta.applyBlueprint}
            />
          </>
        )}
      </article>
    </>
  );
}
