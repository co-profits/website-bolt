import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { CTABlock } from '@/components/CTABlock';
import { siteConfig } from '@/config/site';
import sanityData from 'virtual:sanity-data';
import type { PostDetail } from 'virtual:sanity-data';

interface PortableTextBlock {
  _type: string;
  style?: string;
  children?: { text: string }[];
  alt?: string;
  caption?: string;
  asset?: { url: string; metadata?: { dimensions?: { width: number; height: number } } };
  markDefs?: { _type: string; href: string; _key: string }[];
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderPortableText(blocks: unknown[]): string {
  if (!Array.isArray(blocks)) return '';
  return blocks.map((block) => {
    const b = block as PortableTextBlock;
    if (b._type === 'block') {
      const text = (b.children || []).map((c) => escapeHtml(c.text)).join('');
      if (b.style === 'h2') return `<h2 class="mt-10 mb-4 font-display text-xl text-white">${text}</h2>`;
      if (b.style === 'h3') return `<h3 class="mt-8 mb-3 font-display text-lg text-white">${text}</h3>`;
      if (b.style === 'blockquote') return `<blockquote class="border-l-2 border-brand-light-green/40 pl-4 my-6 italic text-ink-300">${text}</blockquote>`;
      if (b.style === 'normal' || !b.style) return `<p class="text-base leading-relaxed text-ink-200">${text}</p>`;
      return `<p class="text-base leading-relaxed text-ink-200">${text}</p>`;
    }
    if (b._type === 'image' && b.asset?.url) {
      const dims = b.asset.metadata?.dimensions;
      const ratio = dims ? `${dims.width} / ${dims.height}` : '16 / 9';
      const alt = b.alt ? escapeHtml(b.alt) : '';
      const caption = b.caption ? `<figcaption class="mt-2 text-xs text-ink-400">${escapeHtml(b.caption)}</figcaption>` : '';
      return `<figure class="my-8"><img src="${b.asset.url}" alt="${alt}" loading="lazy" decoding="async" class="h-auto w-full rounded-lg" style="aspect-ratio: ${ratio}" />${caption}</figure>`;
    }
    return '';
  }).join('\n');
}

export function InsightArticlePage() {
  const { t, lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const params = useParams();
  const slug = params.slug || '';

  const key = `${lang}:${slug}`;
  const article: PostDetail | undefined = sanityData.posts[key];

  const otherLang = lang === 'en' ? 'es' : 'en';
  const otherKey = `${otherLang}:${slug}`;
  const otherLangArticle: PostDetail | undefined = sanityData.posts[otherKey];

  if (!article) {
    const insightsBase = lang === 'en' ? '/en/insights/' : '/es/insights/';
    const otherInsightsBase = otherLang === 'en' ? '/en/insights/' : '/es/insights/';
    const fallbackTitle = lang === 'en' ? 'Article not available' : 'Artículo no disponible';
    const fallbackBody = lang === 'en'
      ? 'This article has not been published in your current language.'
      : 'Este artículo no ha sido publicado en tu idioma actual.';
    const viewOther = lang === 'en' ? 'Read in Spanish' : 'Leer en inglés';
    const viewIndex = lang === 'en' ? 'Browse all insights' : 'Ver todos los insights';

    return (
      <>
        <SEO
          title={fallbackTitle}
          description={fallbackBody}
          path={insightsBase}
          alternates={{ en: '/en/insights/', es: '/es/insights/' }}
        />
        <section className="surface-forest min-h-[50vh] pt-28 lg:pt-36">
          <div className="container-wide pb-20 lg:pb-28">
            <div className="max-w-2xl">
              <h1 className="font-display text-display-lg text-balance text-white">{fallbackTitle}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-300">{fallbackBody}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {otherLangArticle && (
                  <Link to={`${otherInsightsBase}${slug}/`} className="btn-primary">
                    {viewOther}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
                <Link to={insightsBase} className="btn-secondary">
                  {viewIndex}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const insightsBase = lang === 'en' ? '/en/insights/' : '/es/insights/';
  const articlePath = `${insightsBase}/${slug}`;
  const seoTitle = article.seoTitle || article.title;
  const seoDesc = article.seoDescription || article.excerpt;
  const canonical = article.canonicalOverride || `${siteConfig.domain}${articlePath}`;
  const ogImage = article.ogImage?.url || article.coverImage?.url || '/assets/images/Company_of_Profits_Logo_Dark_bg.webp';

  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: seoDesc,
    datePublished: article.publishedAt,
    dateModified: article._updatedAt,
    author: article.authorName ? { '@type': 'Person', name: article.authorName } : undefined,
    image: ogImage,
    mainEntityOfPage: canonical,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.common.breadcrumbHome, item: `${siteConfig.domain}${lang === 'en' ? '/en/' : '/es/'}` },
      { '@type': 'ListItem', position: 2, name: t.nav[5].label, item: `${siteConfig.domain}${insightsBase}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
    ],
  };

  const faqLd = article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={articlePath}
        alternates={{ en: `/en/insights/${slug}/`, es: `/es/insights/${slug}/` }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <article ref={ref}>
        <section className="surface-forest border-b border-semantic-rule-on-dark pt-28 lg:pt-36">
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
                    {t.nav[5].label}
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 className="font-display text-display-lg max-w-4xl text-balance text-white">
              {article.title}
            </h1>
            {article.keyTakeaway && (
              <p className="mt-6 max-w-2xl rounded-lg border border-brand-light-green/20 bg-brand-light-green/5 p-4 text-base leading-relaxed text-ink-200">
                {article.keyTakeaway}
              </p>
            )}
            {article.excerpt && !article.keyTakeaway && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{article.excerpt}</p>
            )}
            {article.authorName && (
              <p className="mt-4 text-sm text-ink-400">
                {article.authorName}
                {article.authorRole ? ` — ${article.authorRole}` : ''}
              </p>
            )}
            {article.publishedAt && (
              <time className="mt-1 block text-xs text-ink-500" dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            )}
          </div>
        </section>

        {article.coverImage && (
          <section className="border-b border-ink-700/50 bg-ink-950 py-8">
            <div className="container-prose">
              <figure>
                <img
                  src={article.coverImage.url}
                  alt={article.coverImage.alt || article.title}
                  loading="eager"
                  decoding="async"
                  className="h-auto w-full rounded-xl"
                  style={{ aspectRatio: `${article.coverImage.width} / ${article.coverImage.height}` }}
                />
              </figure>
            </div>
          </section>
        )}

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div
              className="space-y-4 animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: renderPortableText(article.body) }}
            />

            {article.videoUrl && (
              <div className="mt-8 overflow-hidden rounded-xl" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  src={article.videoUrl}
                  title={article.title}
                  className="h-full w-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}

            {article.audioUrl && (
              <div className="mt-8">
                <iframe src={article.audioUrl} title={article.title} className="w-full" loading="lazy" />
              </div>
            )}

            {article.pdfs.length > 0 && (
              <ul className="mt-8 space-y-3">
                {article.pdfs.map((pdf) => (
                  <li key={pdf.url}>
                    <a
                      href={pdf.url}
                      download
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-light-green underline hover:text-brand-light-yellow"
                    >
                      {pdf.title || pdf.originalFilename}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {article.faqs.length > 0 && (
              <div className="mt-12 border-t border-ink-700/50 pt-8">
                <h2 className="font-display text-xl text-white">{lang === 'en' ? 'Frequently asked questions' : 'Preguntas frecuentes'}</h2>
                <dl className="mt-6 space-y-6">
                  {article.faqs.map((faq, i) => (
                    <div key={i}>
                      <dt className="text-base font-semibold text-white">{faq.question}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-300">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </section>

        <CTABlock
          title={t.insightsPage.articleCta}
          buttonLabel={t.cta.applyBlueprint}
        />
      </article>
    </>
  );
}
