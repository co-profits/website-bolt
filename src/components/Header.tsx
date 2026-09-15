import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { Logo } from './Logo';
import { CTAButton } from './CTAButton';

export function Header() {
  const { t, switchLang, lang, applyPath } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-700/50 bg-ink-900/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between lg:h-20">
        <Link to={t.nav[0].path} aria-label="Company of Profits" className="flex-shrink-0">
          <Logo variant="dark" className="h-7 lg:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {t.nav.slice(1, -1).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={switchLang}
            className="flex items-center gap-1.5 text-sm font-medium text-ink-200 transition-colors hover:text-white"
            aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {t.languageLabel}
          </button>
          <CTAButton to={applyPath} className="hidden sm:inline-flex" icon={false}>
            {t.navCta}
          </CTAButton>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ink-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-ink-700/50 bg-ink-900/95 backdrop-blur-md">
          <nav className="container-wide flex flex-col gap-1 py-4" aria-label="Mobile">
            {t.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-ink-800/60 text-white'
                      : 'text-ink-200 hover:bg-ink-800/40 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={applyPath} className="btn-primary mt-3 w-full">
              {t.cta.applyBlueprint}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
