import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import { siteConfig } from '@/config/site';
import { Logo } from './Logo';
import { programs, getProgramPath } from '@/data/programs';

export function Footer() {
  const { t, lang, homePath } = useLang();

  return (
    <footer className="border-t border-ink-700/50 bg-ink-950">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to={homePath} aria-label="Company of Profits">
              <Logo variant="dark" className="h-7" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              {t.footer.programsTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {programs.map((p) => (
                <li key={p.slugEn}>
                  <Link
                    to={getProgramPath(p, lang)}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {lang === 'en' ? p.en.name : p.es.name}
                    {p.status === 'coming-soon' && (
                      <span className="ml-2 text-xs text-brand-light-green">
                        {t.footer.comingSoon}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              {t.footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="text-sm text-ink-400">{t.footer.privacyPolicy}</span>
              </li>
              <li>
                <span className="text-sm text-ink-400">{t.footer.terms}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteConfig.companyName}. {t.footer.rights}
          </p>
          <p className="text-xs text-ink-500">
            {siteConfig.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
