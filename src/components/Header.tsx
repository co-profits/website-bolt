import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { programs, getProgramPath } from '@/data/programs';
import { ProgramIcon, type ProgramIconId } from './ProgramIcon';
import { Logo } from './Logo';
import { CTAButton } from './CTAButton';

const DESKTOP_BREAKPOINT = 1100;
const HOVER_OPEN_DELAY = 100;
const HOVER_CLOSE_DELAY = 280;

export function Header() {
  const { t, switchLang, lang, applyPath, blueprintPath, programsPath } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const location = useLocation();
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const clearTimers = useCallback(() => {
    if (openTimer.current) { clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  }, []);

  const openPanel = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setProgramsOpen(true), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  const closePanel = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setProgramsOpen(false), HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  const togglePanel = useCallback(() => {
    clearTimers();
    setProgramsOpen(prev => !prev);
  }, [clearTimers]);

  const closePanelImmediate = useCallback(() => {
    clearTimers();
    setProgramsOpen(false);
  }, [clearTimers]);

  useEffect(() => {
    if (!programsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePanelImmediate();
        triggerRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current && !triggerRef.current.contains(target) &&
          !document.getElementById('programs-panel')?.contains(target)) {
        closePanelImmediate();
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [programsOpen, closePanelImmediate]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // Split nav: items before and after the Programs disclosure
  // Nav order: Home(0), Blueprint(1), Methodology(2), Programs(3), About(4), Insights(5), FAQ(6), Contact(7)
  const navBeforePrograms = t.nav.slice(1, 3); // Blueprint, Methodology
  const navAfterPrograms = t.nav.slice(4); // About, Insights, FAQ, Contact

  const corePrograms = programs.filter(p => p.category === 'core');
  const kingdomProgram = programs.find(p => p.category === 'future');
  const mentorshipProgram = programs.find(p => p.category === 'mentorship');

  const inDevLabel = lang === 'en' ? 'In development' : 'En desarrollo';
  const viewAllLabel = lang === 'en' ? 'View all programs' : 'Ver todos los programas';
  const coreLabel = lang === 'en' ? 'Core interventions' : 'Intervenciones principales';
  const continuityLabel = lang === 'en' ? 'Continuity' : 'Continuidad';
  const featuredLabel = lang === 'en' ? 'Featured' : 'Destacado';
  const closeLabel = lang === 'en' ? 'Close' : 'Cerrar';
  const programsLabel = lang === 'en' ? 'Programs' : 'Programas';
  const programsGroupLabel = lang === 'en' ? 'PROGRAMS' : 'PROGRAMAS';

  const headerBg = scrolled
    ? 'border-b border-semantic-rule-on-dark bg-ink-900/90 backdrop-blur-md'
    : 'border-b border-transparent bg-transparent';

  const showDesktop = isDesktop;
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link focus-visible-ring rounded whitespace-nowrap ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 lg:h-20 lg:gap-6 lg:px-8">
        {/* Logo column */}
        <Link to={t.nav[0].path} aria-label="Company of Profits" className="flex-shrink-0">
          <Logo variant="dark" className="h-7 lg:h-9" />
        </Link>

        {/* Navigation column — min-width:0 to prevent overflow */}
        <nav
          className={`min-w-0 flex-1 items-center justify-center gap-4 lg:gap-5 ${showDesktop ? 'flex' : 'hidden'}`}
          aria-label="Primary"
        >
          {navBeforePrograms.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}

          {/* Programs disclosure */}
          <div
            className="relative"
            onMouseEnter={openPanel}
            onMouseLeave={closePanel}
          >
            <button
              ref={triggerRef}
              onClick={togglePanel}
              aria-expanded={programsOpen}
              aria-controls="programs-panel"
              className={`nav-link focus-visible-ring flex items-center gap-1 rounded whitespace-nowrap ${programsOpen ? 'nav-link-active' : ''}`}
            >
              {programsLabel}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {programsOpen && (
              <div
                id="programs-panel"
                className="absolute right-0 top-full pt-3"
                style={{ width: 'min(960px, calc(100vw - 3rem))', right: 0 }}
              >
                <div
                  className="surface-forest border border-semantic-rule-on-dark rounded-lg shadow-xl overflow-hidden"
                  onMouseEnter={clearTimers}
                  onMouseLeave={closePanel}
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_minmax(260px,320px)] gap-0">
                    {/* Left: Featured Blueprint + Core */}
                    <div className="p-6">
                      <p className="section-eyebrow mb-4 text-xs">{featuredLabel}</p>
                      <Link
                        to={blueprintPath}
                        onClick={closePanelImmediate}
                        className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-ink-800/40 focus-visible-ring"
                      >
                        <ProgramIcon id="blueprint" size={32} tone="dark" decorative />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {lang === 'en' ? 'Prophetic Business Blueprint' : 'Radiografía Empresarial Profética'}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-ink-300">
                            {lang === 'en'
                              ? 'The diagnostic gateway before any program is recommended.'
                              : 'El diagnóstico inicial antes de recomendar cualquier programa.'}
                          </p>
                        </div>
                      </Link>

                      <div className="mt-4 pt-4 border-t border-semantic-rule-on-dark">
                        <p className="section-eyebrow mb-3 text-xs">{coreLabel}</p>
                        <div className="space-y-1">
                          {corePrograms.map(p => (
                            <Link
                              key={p.id}
                              to={getProgramPath(p, lang)}
                              onClick={closePanelImmediate}
                              className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-ink-800/40 focus-visible-ring"
                            >
                              <ProgramIcon id={p.id as ProgramIconId} size={20} tone="dark" decorative />
                              <span className="text-sm text-ink-100 group-hover:text-white">
                                {lang === 'en' ? p.en.name : p.es.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Kingdom + Mentorship + View all */}
                    <div className="border-l border-semantic-rule-on-dark bg-ink-950/50 p-6">
                      {kingdomProgram && (
                        <div className="mb-4">
                          <Link
                            to={getProgramPath(kingdomProgram, lang)}
                            onClick={closePanelImmediate}
                            className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-ink-800/40 focus-visible-ring"
                          >
                            <ProgramIcon id={kingdomProgram.id as ProgramIconId} size={20} tone="dark" decorative />
                            <div>
                              <span className="text-sm font-medium text-ink-100 group-hover:text-white block">
                                {lang === 'en' ? kingdomProgram.en.name : kingdomProgram.es.name}
                              </span>
                              <span className="mt-1 inline-block rounded-full border border-ink-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-300">
                                {inDevLabel}
                              </span>
                            </div>
                          </Link>
                        </div>
                      )}

                      {mentorshipProgram && (
                        <div className="mb-4 pt-4 border-t border-semantic-rule-on-dark">
                          <p className="section-eyebrow mb-3 text-xs">{continuityLabel}</p>
                          <Link
                            to={getProgramPath(mentorshipProgram, lang)}
                            onClick={closePanelImmediate}
                            className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-ink-800/40 focus-visible-ring"
                          >
                            <ProgramIcon id={mentorshipProgram.id as ProgramIconId} size={20} tone="dark" decorative />
                            <div>
                              <span className="text-sm font-medium text-ink-100 group-hover:text-white block">
                                {lang === 'en' ? mentorshipProgram.en.name : mentorshipProgram.es.name}
                              </span>
                              <span className="mt-1 text-xs text-ink-400 block">
                                {lang === 'en' ? mentorshipProgram.en.tagline : mentorshipProgram.es.tagline}
                              </span>
                            </div>
                          </Link>
                        </div>
                      )}

                      <Link
                        to={programsPath}
                        onClick={closePanelImmediate}
                        className="block rounded-lg p-2.5 text-sm font-semibold text-brand-light-green transition-colors hover:text-brand-light-yellow focus-visible-ring"
                      >
                        {viewAllLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navAfterPrograms.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions column */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            onClick={switchLang}
            className="flex items-center gap-1.5 text-sm font-medium text-ink-200 transition-colors hover:text-white focus-visible-ring rounded"
            aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {t.languageLabel}
          </button>
          <CTAButton
            to={applyPath}
            className={`btn-primary !px-4 !py-2 text-xs ${showDesktop ? 'inline-flex' : 'hidden'}`}
            icon={false}
          >
            {t.navCta}
          </CTAButton>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${showDesktop ? 'hidden' : 'block'} text-ink-100 focus-visible-ring rounded`}
            aria-label={closeLabel}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && !showDesktop && (
        <div className="border-t border-semantic-rule-on-dark bg-ink-900/95 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {navBeforePrograms.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `min-h-[44px] rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible-ring ${
                    isActive
                      ? 'bg-ink-800/60 text-white'
                      : 'text-ink-200 hover:bg-ink-800/40 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Programs section — one localized group, no duplicate link */}
            <div className="mt-2 pt-2 border-t border-semantic-rule-on-dark">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-light-green">
                {programsGroupLabel}
              </p>
              <Link
                to={blueprintPath}
                className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-ink-100 hover:bg-ink-800/40 hover:text-white focus-visible-ring"
              >
                <ProgramIcon id="blueprint" size={20} tone="dark" decorative />
                {lang === 'en' ? 'Prophetic Business Blueprint' : 'Radiografía Empresarial Profética'}
              </Link>
              {corePrograms.map(p => (
                <Link
                  key={p.id}
                  to={getProgramPath(p, lang)}
                  className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-ink-200 hover:bg-ink-800/40 hover:text-white focus-visible-ring"
                >
                  <ProgramIcon id={p.id as ProgramIconId} size={20} tone="dark" decorative />
                  {lang === 'en' ? p.en.name : p.es.name}
                </Link>
              ))}
              {kingdomProgram && (
                <Link
                  to={getProgramPath(kingdomProgram, lang)}
                  className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-ink-200 hover:bg-ink-800/40 hover:text-white focus-visible-ring"
                >
                  <ProgramIcon id={kingdomProgram.id as ProgramIconId} size={20} tone="dark" decorative />
                  <span>{lang === 'en' ? kingdomProgram.en.name : kingdomProgram.es.name}</span>
                  <span className="ml-auto rounded-full border border-ink-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-300">
                    {inDevLabel}
                  </span>
                </Link>
              )}
              {mentorshipProgram && (
                <Link
                  to={getProgramPath(mentorshipProgram, lang)}
                  className="flex min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-sm text-ink-200 hover:bg-ink-800/40 hover:text-white focus-visible-ring"
                >
                  <ProgramIcon id={mentorshipProgram.id as ProgramIconId} size={20} tone="dark" decorative />
                  {lang === 'en' ? mentorshipProgram.en.name : mentorshipProgram.es.name}
                </Link>
              )}
              <Link
                to={programsPath}
                className="flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-semibold text-brand-light-green hover:text-brand-light-yellow focus-visible-ring"
              >
                {viewAllLabel}
              </Link>
            </div>

            {navAfterPrograms.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `min-h-[44px] rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible-ring ${
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
              {t.navCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
