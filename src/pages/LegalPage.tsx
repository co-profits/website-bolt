import { useEffect, useState } from 'react';
import { useLang } from '@/i18n/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

interface LegalDoc {
  doc: string;
}

const docMap: Record<string, { en: string; es: string; titleEn: string; titleEs: string }> = {
  'privacy-policy': { en: '/documents/legal/privacy-policy.md', es: '/documents/legal/politica-de-privacidad.md', titleEn: 'Privacy Policy', titleEs: 'Política de Privacidad' },
  'terms-and-conditions': { en: '/documents/legal/terms-and-conditions.md', es: '/documents/legal/terminos-y-condiciones.md', titleEn: 'Terms and Conditions', titleEs: 'Términos y Condiciones' },
  'cookie-policy': { en: '/documents/legal/cookie-policy.md', es: '/documents/legal/politica-de-cookies.md', titleEn: 'Cookie Policy', titleEs: 'Política de Cookies' },
  'politica-de-privacidad': { en: '/documents/legal/privacy-policy.md', es: '/documents/legal/politica-de-privacidad.md', titleEn: 'Privacy Policy', titleEs: 'Política de Privacidad' },
  'terminos-y-condiciones': { en: '/documents/legal/terms-and-conditions.md', es: '/documents/legal/terminos-y-condiciones.md', titleEn: 'Terms and Conditions', titleEs: 'Términos y Condiciones' },
  'politica-de-cookies': { en: '/documents/legal/cookie-policy.md', es: '/documents/legal/politica-de-cookies.md', titleEn: 'Cookie Policy', titleEs: 'Política de Cookies' },
};

const routeMap: Record<string, { en: string; es: string }> = {
  'privacy-policy': { en: '/en/privacy-policy', es: '/es/politica-de-privacidad' },
  'terms-and-conditions': { en: '/en/terms-and-conditions', es: '/es/terminos-y-condiciones' },
  'cookie-policy': { en: '/en/cookie-policy', es: '/es/politica-de-cookies' },
  'politica-de-privacidad': { en: '/en/privacy-policy', es: '/es/politica-de-privacidad' },
  'terminos-y-condiciones': { en: '/en/terms-and-conditions', es: '/es/terminos-y-condiciones' },
  'politica-de-cookies': { en: '/en/cookie-policy', es: '/es/politica-de-cookies' },
};

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 font-display text-lg text-white">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 font-display text-xl text-white">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="sr-only">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink-100">$1</strong>')
    .replace(/^\- (.+)$/gm, '<li class="ml-6 list-disc text-sm leading-relaxed text-ink-200">$1</li>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-2 border-brand-light-green/40 pl-4 italic text-ink-300">$1</blockquote>')
    .replace(/\n\n/g, '</p><p class="text-sm leading-relaxed text-ink-200">')
    .replace(/^(?!<)/gm, '<p class="text-sm leading-relaxed text-ink-200">')
    .replace(/<\/p><p/g, '</p>\n<p');
}

export function LegalPage({ doc }: LegalDoc) {
  const { lang } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const docInfo = docMap[doc];
  const routeInfo = routeMap[doc] || { en: '/en/', es: '/es/' };

  useEffect(() => {
    if (!docInfo) return;
    setLoading(true);
    const url = lang === 'en' ? docInfo.en : docInfo.es;
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [doc, lang, docInfo]);

  if (!docInfo) return null;

  const title = lang === 'en' ? docInfo.titleEn : docInfo.titleEs;

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
            {loading ? (
              <p className="text-sm text-ink-400">Loading...</p>
            ) : (
              <div
                className="space-y-4 animate-on-scroll"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
              />
            )}
          </div>
        </section>
      </article>
    </>
  );
}
