import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

const CONSENT_KEY = 'cop-cookie-consent';

type ConsentValue = 'accepted' | 'necessary' | null;

export function CookieBanner() {
  const { t, lang } = useLang();
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue;
    setConsent(stored);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const setChoice = (value: 'accepted' | 'necessary') => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }));
  };

  const cookiePolicyPath = lang === 'en' ? '/en/cookie-policy' : '/es/politica-de-cookies';

  if (!visible || consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-ink-700/50 bg-ink-900/95 backdrop-blur-md"
    >
      <div className="container-wide py-4">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-ink-300">
            {t.cookieBanner.text.split('Read our Cookie Policy.')[0]}
            {lang === 'en' ? 'Read our ' : 'Consulta nuestra '}
            <Link to={cookiePolicyPath} className="text-brand-light-green underline hover:text-brand-light-yellow">
              {t.footer.cookiePolicy}
            </Link>
            .
          </p>
          <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
            <Link
              to={cookiePolicyPath}
              className="rounded-lg px-3 py-2 text-xs font-medium text-ink-300 transition-colors hover:text-white"
            >
              {t.cookieBanner.settings}
            </Link>
            <button
              onClick={() => setChoice('necessary')}
              className="rounded-lg border border-ink-600 px-4 py-2 text-xs font-semibold text-ink-100 transition-colors hover:border-ink-400"
            >
              {t.cookieBanner.necessary}
            </button>
            <button
              onClick={() => setChoice('accepted')}
              className="rounded-lg bg-brand-light-green px-4 py-2 text-xs font-semibold text-brand-dark-green transition-colors hover:bg-brand-light-yellow"
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
