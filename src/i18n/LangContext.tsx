import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Lang } from '@/config/site';
import { translations, type Translation } from '@/i18n/translations';

interface LangContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  switchLang: () => void;
  applyPath: string;
  blueprintPath: string;
  homePath: string;
  programsPath: string;
}

const LangContext = createContext<LangContextValue | null>(null);

function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/es/')) return 'es';
  return 'en';
}

function storeLang(lang: Lang) {
  try {
    localStorage.setItem('cop-lang', lang);
  } catch {
    // ignore
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => getLangFromPath(location.pathname));

  useEffect(() => {
    setLangState(getLangFromPath(location.pathname));
  }, [location.pathname]);

  const setLang = (newLang: Lang) => {
    storeLang(newLang);
    setLangState(newLang);
  };

  const switchLang = () => {
    const newLang: Lang = lang === 'en' ? 'es' : 'en';
    storeLang(newLang);
    const currentPath = location.pathname;
    let newPath: string;
    if (lang === 'en') {
      newPath = translatePathToEs(currentPath);
    } else {
      newPath = translatePathToEn(currentPath);
    }
    navigate(newPath);
  };

  const value: LangContextValue = {
    lang,
    t: translations[lang],
    setLang,
    switchLang,
    applyPath: lang === 'en' ? '/en/apply' : '/es/aplicar',
    blueprintPath: lang === 'en' ? '/en/blueprint' : '/es/radiografia',
    homePath: lang === 'en' ? '/en/' : '/es/',
    programsPath: lang === 'en' ? '/en/programs' : '/es/programas',
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

const pathMap: Record<string, string> = {
  '/en/': '/es/',
  '/en/blueprint': '/es/radiografia',
  '/en/methodology': '/es/metodologia',
  '/en/programs': '/es/programas',
  '/en/programs/profit-maximization': '/es/programas/rentabilidad-maximizada',
  '/en/programs/operational-optimization': '/es/programas/optimizacion-operativa',
  '/en/programs/freedom-architecture': '/es/programas/arquitectura-de-independencia',
  '/en/programs/kingdom-wealth-and-impact': '/es/programas/riqueza-de-reino-e-impacto',
  '/en/programs/prophetic-business-mentorship': '/es/programas/mentoria-empresarial-profetica',
  '/en/why-company-of-profits': '/es/por-que-company-of-profits',
  '/en/about': '/es/nosotros',
  '/en/insights': '/es/insights',
  '/en/faq': '/es/preguntas-frecuentes',
  '/en/apply': '/es/aplicar',
};

const reversePathMap: Record<string, string> = Object.entries(pathMap).reduce(
  (acc, [en, es]) => {
    acc[es] = en;
    return acc;
  },
  {} as Record<string, string>
);

function translatePathToEs(enPath: string): string {
  return pathMap[enPath] || '/es/';
}

function translatePathToEn(esPath: string): string {
  return reversePathMap[esPath] || '/en/';
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
