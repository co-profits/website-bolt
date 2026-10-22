import type { Lang } from '@/config/site';

export interface RouteEntry {
  en: string;
  es: string;
}

export const routeMap: Record<string, RouteEntry> = {
  home: { en: '/en/', es: '/es/' },
  blueprint: { en: '/en/blueprint/', es: '/es/radiografia/' },
  methodology: { en: '/en/methodology/', es: '/es/metodologia/' },
  programs: { en: '/en/programs/', es: '/es/programas/' },
  'programs:profit-maximization': { en: '/en/programs/profit-maximization/', es: '/es/programas/rentabilidad-maximizada/' },
  'programs:operational-optimization': { en: '/en/programs/operational-optimization/', es: '/es/programas/optimizacion-operativa/' },
  'programs:freedom-architecture': { en: '/en/programs/freedom-architecture/', es: '/es/programas/arquitectura-de-independencia/' },
  'programs:kingdom-wealth-and-impact': { en: '/en/programs/kingdom-wealth-and-impact/', es: '/es/programas/riqueza-de-reino-e-impacto/' },
  'programs:prophetic-business-mentorship': { en: '/en/programs/prophetic-business-mentorship/', es: '/es/programas/mentoria-empresarial-profetica/' },
  why: { en: '/en/why-company-of-profits/', es: '/es/por-que-company-of-profits/' },
  about: { en: '/en/about/', es: '/es/nosotros/' },
  insights: { en: '/en/insights/', es: '/es/insights/' },
  faq: { en: '/en/faq/', es: '/es/faq/' },
  apply: { en: '/en/apply/', es: '/es/aplicar/' },
  contact: { en: '/en/contact/', es: '/es/contacto/' },
  'legal:privacy': { en: '/en/privacy-policy/', es: '/es/politica-de-privacidad/' },
  'legal:terms': { en: '/en/terms-and-conditions/', es: '/es/terminos-y-condiciones/' },
  'legal:cookies': { en: '/en/cookie-policy/', es: '/es/politica-de-cookies/' },
};

export function getRoute(key: string, lang: Lang): string {
  const entry = routeMap[key];
  if (!entry) return lang === 'en' ? '/en/' : '/es/';
  return entry[lang];
}

const pathToKeyMap: Record<string, string> = {};
for (const [key, entry] of Object.entries(routeMap)) {
  pathToKeyMap[entry.en] = key;
  pathToKeyMap[entry.es] = key;
}

export function translatePath(pathname: string, targetLang: Lang): string {
  const key = pathToKeyMap[pathname];
  if (key) return routeMap[key][targetLang];
  return targetLang === 'en' ? '/en/' : '/es/';
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/es/')) return 'es';
  return 'en';
}
