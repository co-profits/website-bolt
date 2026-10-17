import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { getLegalDoc } from '@/content/legal';

interface LegalDoc {
  doc: string;
}

const routeMap: Record<string, { en: string; es: string }> = {
  'privacy-policy': { en: '/en/privacy-policy', es: '/es/politica-de-privacidad' },
  'terms-and-conditions': { en: '/en/terms-and-conditions', es: '/es/terminos-y-condiciones' },
  'cookie-policy': { en: '/en/cookie-policy', es: '/es/politica-de-cookies' },
  'politica-de-privacidad': { en: '/en/privacy-policy', es: '/es/politica-de-privacidad' },
  'terminos-y-condiciones': { en: '/en/terms-and-conditions', es: '/es/terminos-y-condiciones' },
  'politica-de-cookies': { en: '/en/cookie-policy', es: '/es/politica-de-cookies' },
};

function normalizeDocKey(doc: string): string {
  const map: Record<string, string> = {
    'politica-de-privacidad': 'privacy-policy',
    'terminos-y-condiciones': 'terms-and-conditions',
    'politica-de-cookies': 'cookie-policy',
  };
  return map[doc] || doc;
}

function renderMarkdownToHtml(md: string): string {
  const lines = md.split('\n');
  const html: string[] = [];
  let inList = false;
  let inBlockquote = false;

  for (const line of lines) {
    const trimmed = line.trimEnd();

    if (trimmed === '') {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
      continue;
    }

    if (trimmed.startsWith('# ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
      html.push(`<h1 class="sr-only">${trimmed.slice(2)}</h1>`);
    } else if (trimmed.startsWith('## ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
      html.push(`<h2 class="mt-10 mb-4 font-display text-xl text-white">${trimmed.slice(3)}</h2>`);
    } else if (trimmed.startsWith('### ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
      html.push(`<h3 class="mt-8 mb-3 font-display text-lg text-white">${trimmed.slice(4)}</h3>`);
    } else if (trimmed.startsWith('- ')) {
      if (!inList) { html.push('<ul class="ml-6 space-y-2">'); inList = true; }
      const item = trimmed.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink-100">$1</strong>');
      html.push(`<li class="list-disc text-sm leading-relaxed text-ink-200">${item}</li>`);
    } else if (trimmed.startsWith('> ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      if (!inBlockquote) { html.push('<blockquote class="border-l-2 border-brand-light-green/40 pl-4 italic text-ink-300">'); inBlockquote = true; }
      html.push(`<p class="text-sm leading-relaxed">${trimmed.slice(2)}</p>`);
    } else {
      if (inList) { html.push('</ul>'); inList = false; }
      if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
      const para = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink-100">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-light-green underline hover:text-brand-light-yellow">$1</a>');
      html.push(`<p class="text-sm leading-relaxed text-ink-200">${para}</p>`);
    }
  }

  if (inList) html.push('</ul>');
  if (inBlockquote) html.push('</blockquote>');

  return html.join('\n');
}

export function LegalPage({ doc }: LegalDoc) {
  const { lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();

  const docKey = normalizeDocKey(doc);
  const routeInfo = routeMap[doc] || { en: '/en/', es: '/es/' };
  const docContent = getLegalDoc(docKey, lang);

  if (!docContent) return null;

  const title = docContent.title;

  return (
    <>
      <SEO
        title={title}
        description={title}
        path={lang === 'en' ? routeInfo.en : routeInfo.es}
        alternates={routeInfo}
      />
      <article ref={ref}>
        <PageHeader
          eyebrow={lang === 'en' ? 'Legal' : 'Legal'}
          title={title}
          breadcrumbs={[{ label: title }]}
        />

        <section className="border-t border-ink-700/50 py-20 lg:py-28">
          <div className="container-prose">
            <div
              className="space-y-4 animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(docContent.markdown) }}
            />
          </div>
        </section>
      </article>
    </>
  );
}
