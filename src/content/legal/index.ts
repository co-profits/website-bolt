import privacyEn from '@/content/legal/privacy-policy.md?raw';
import privacyEs from '@/content/legal/politica-de-privacidad.md?raw';
import termsEn from '@/content/legal/terms-and-conditions.md?raw';
import termsEs from '@/content/legal/terminos-y-condiciones.md?raw';
import cookieEn from '@/content/legal/cookie-policy.md?raw';
import cookieEs from '@/content/legal/politica-de-cookies.md?raw';

export interface LegalDocContent {
  title: string;
  markdown: string;
}

export const legalDocs: Record<string, { en: LegalDocContent; es: LegalDocContent }> = {
  'privacy-policy': {
    en: { title: 'Privacy Policy', markdown: privacyEn },
    es: { title: 'Política de Privacidad', markdown: privacyEs },
  },
  'terms-and-conditions': {
    en: { title: 'Terms and Conditions', markdown: termsEn },
    es: { title: 'Términos y Condiciones', markdown: termsEs },
  },
  'cookie-policy': {
    en: { title: 'Cookie Policy', markdown: cookieEn },
    es: { title: 'Política de Cookies', markdown: cookieEs },
  },
};

export function getLegalDoc(doc: string, lang: 'en' | 'es'): LegalDocContent | null {
  const entry = legalDocs[doc];
  if (!entry) return null;
  return lang === 'en' ? entry.en : entry.es;
}
