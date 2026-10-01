import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { siteConfig } from '@/config/site';
import { Logo } from './Logo';
import { programs, getProgramPath } from '@/data/programs';

export function Footer() {
  const { t, lang, homePath, contactPath, applyPath } = useLang();

  const legalLinks = lang === 'en'
    ? [
        { label: t.footer.privacyPolicy, path: '/en/privacy-policy' },
        { label: t.footer.terms, path: '/en/terms-and-conditions' },
        { label: t.footer.cookiePolicy, path: '/en/cookie-policy' },
      ]
    : [
        { label: t.footer.privacyPolicy, path: '/es/politica-de-privacidad' },
        { label: t.footer.terms, path: '/es/terminos-y-condiciones' },
        { label: t.footer.cookiePolicy, path: '/es/politica-de-cookies' },
      ];

  const instagramUrl = lang === 'en' ? siteConfig.social.instagramEn : siteConfig.social.instagramEs;

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
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.linkedin}
                className="text-ink-300 transition-colors hover:text-brand-light-green"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.instagram}
                className="text-ink-300 transition-colors hover:text-brand-light-green"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
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
              <li>
                <Link
                  to={applyPath}
                  className="text-sm font-medium text-brand-light-green transition-colors hover:text-brand-light-yellow"
                >
                  {t.navCta}
                </Link>
              </li>
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
                    {p.category === 'future' && (
                      <span className="ml-2 text-xs text-brand-purple">
                        {t.common.inDevelopment}
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
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={contactPath}
                  className="text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {t.nav[8].label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-3xl rounded-lg border border-ink-700/50 bg-ink-800/20 p-4">
          <p className="text-xs leading-relaxed text-ink-400">
            {t.footer.applyVsContact}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteConfig.companyName}. {t.footer.rights}
          </p>
          <p className="text-xs text-ink-500">
            companyofprofits.com
          </p>
        </div>
      </div>
    </footer>
  );
}
