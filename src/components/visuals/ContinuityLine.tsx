import { useLang } from '@/i18n/LangContext';

export function ContinuityLine() {
  const { lang } = useLang();

  const labels = lang === 'en'
    ? {
        before: 'Before',
        during: 'During',
        after: 'After',
        businessCounsel: 'Business counsel',
        propheticDiscernment: 'Prophetic discernment',
        accessibleSummary: 'Mentorship is an optional ongoing relationship with business counsel and prophetic discernment across before, during, and after any core program.',
        continuity: 'Optional continuity across seasons',
      }
    : {
        before: 'Antes',
        during: 'Durante',
        after: 'Después',
        businessCounsel: 'Consejo empresarial',
        propheticDiscernment: 'Discernimiento profético',
        accessibleSummary: 'La mentoría es una relación continua y opcional con consejo empresarial y discernimiento profético antes, durante y después de cualquier programa principal.',
        continuity: 'Continuidad opcional a través de temporadas',
      };

  return (
    <figure
      className="continuity-line w-full rounded-xl border border-ink-700/50 bg-ink-800/40 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Desktop SVG — horizontal timeline with three phases and dual rails */}
      <svg viewBox="0 0 720 280" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg05-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D77F" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00D77F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main horizontal timeline */}
        <line x1="80" y1="110" x2="640" y2="110" stroke="url(#vg05-line)" strokeWidth="2.5" />

        {/* Three spaced phase nodes */}
        <circle cx="120" cy="110" r="8" fill="#06202B" stroke="#00D77F" strokeWidth="1.5" opacity="0.7" />
        <circle cx="360" cy="110" r="10" fill="#06202B" stroke="#00D77F" strokeWidth="2" opacity="0.9" />
        <circle cx="600" cy="110" r="8" fill="#06202B" stroke="#00D77F" strokeWidth="1.5" opacity="0.7" />

        {/* Phase labels */}
        <text x="120" y="85" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.before}
        </text>
        <text x="360" y="85" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.during}
        </text>
        <text x="600" y="85" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.after}
        </text>

        {/* Dual rails — business counsel and prophetic discernment */}
        <line x1="80" y1="180" x2="640" y2="180" stroke="#1A4A58" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <line x1="80" y1="220" x2="640" y2="220" stroke="#1A4A58" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />

        {/* Rail labels */}
        <rect x="200" y="168" width="160" height="24" rx="6" fill="#0B2C38" stroke="#103845" strokeWidth="0.5" />
        <text x="280" y="184" textAnchor="middle" fill="#B5D2DB" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          {labels.businessCounsel}
        </text>

        <rect x="380" y="208" width="220" height="24" rx="6" fill="#0B2C38" stroke="#103845" strokeWidth="0.5" />
        <text x="490" y="224" textAnchor="middle" fill="#B5D2DB" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          {labels.propheticDiscernment}
        </text>

        {/* Continuity signal */}
        <text x="360" y="265" textAnchor="middle" fill="#00D77F" fontSize="11" fontFamily="Inter, sans-serif" fontStyle="italic" opacity="0.7">
          {labels.continuity}
        </text>
      </svg>

      {/* Mobile — vertical timeline with labels */}
      <div className="md:hidden">
        <ol className="relative space-y-0 border-l-2 border-brand-light-green/30 pl-6">
          <li className="relative pb-8">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-brand-light-green/60 bg-ink-900" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.before}</p>
            <p className="mt-1 text-xs text-ink-400">{labels.businessCounsel}</p>
          </li>
          <li className="relative pb-8">
            <div className="absolute -left-[27px] top-2 h-3.5 w-3.5 rounded-full border-2 border-brand-light-green bg-brand-light-green/20" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.during}</p>
            <p className="mt-1 text-xs text-ink-400">{labels.businessCounsel} · {labels.propheticDiscernment}</p>
          </li>
          <li className="relative pb-8">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-brand-light-green/60 bg-ink-900" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.after}</p>
            <p className="mt-1 text-xs text-ink-400">{labels.propheticDiscernment}</p>
          </li>
        </ol>
        <div className="mt-4 space-y-2 rounded-lg border border-ink-700/50 bg-ink-800/20 p-4">
          <p className="text-xs font-medium text-ink-200">{labels.businessCounsel}</p>
          <p className="text-xs font-medium text-ink-200">{labels.propheticDiscernment}</p>
        </div>
        <p className="mt-3 text-center text-xs italic text-brand-light-green/70">
          {labels.continuity}
        </p>
      </div>
    </figure>
  );
}
