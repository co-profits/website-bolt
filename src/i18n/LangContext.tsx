import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Lang } from '@/config/site';
import { translations, type Translation } from '@/i18n/translations';
import { getRoute, translatePath, getLangFromPath } from '@/config/routes';

interface LangContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  switchLang: () => void;
  applyPath: string;
  blueprintPath: string;
  homePath: string;
  programsPath: string;
  contactPath: string;
}

const LangContext = createContext<LangContextValue | null>(null);

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
    const newPath = translatePath(location.pathname, newLang);
    const search = location.search || '';
    const hash = location.hash || '';
    navigate(`${newPath}${search}${hash}`);
  };

  const value: LangContextValue = {
    lang,
    t: translations[lang],
    setLang,
    switchLang,
    applyPath: getRoute('apply', lang),
    blueprintPath: getRoute('blueprint', lang),
    homePath: getRoute('home', lang),
    programsPath: getRoute('programs', lang),
    contactPath: getRoute('contact', lang),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
