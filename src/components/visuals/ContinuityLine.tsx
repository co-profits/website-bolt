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
      }
    : {
        before: 'Antes',
        during: 'Durante',
        after: 'Después',
        businessCounsel: 'Consejo empresarial',
        propheticDiscernment: 'Discernimiento profético',
        accessibleSummary: 'La mentoría es una relación continua y opcional con consejo empresarial y discernimiento profético antes, durante y después de cualquier programa principal.',
      };

  return (
    <figure
      className="continuity-line w-full rounded-xl border border-ink-700/50 bg-teal-900/10 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Desktop SVG — horizontal line with three points and parallel rail */}
      <svg viewBox="0 0 720 260" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg05-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D77F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Main horizontal line */}
        <line x1="80" y1="100" x2="640" y2="100" stroke="url(#vg05-line)" strokeWidth="2" />

        {/* Three spaced points */}
        <circle cx="120" cy="100" r="6" fill="#00D77F" opacity="0.6" />
        <circle cx="360" cy="100" r="7" fill="#00D77F" opacity="0.75" />
        <circle cx="600" cy="100" r="6" fill="#00D77F" opacity="0.6" />

        {/* Point labels */}
        <text x="120" y="80" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.before}
        </text>
        <text x="360" y="80" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.during}
        </text>
        <text x="600" y="80" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.after}
        </text>

        {/* Parallel rail — business counsel and prophetic discernment */}
        <line x1="80" y1="180" x2="640" y2="180" stroke="#1a3a32" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.4" />

        <text x="240" y="205" textAnchor="middle" fill="#8a9a96" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          {labels.businessCounsel}
        </text>
        <text x="480" y="205" textAnchor="middle" fill="#8a9a96" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          {labels.propheticDiscernment}
        </text>

        {/* Green signal for continuity */}
        <text x="360" y="240" textAnchor="middle" fill="#00D77F" fontSize="11" fontFamily="Inter, sans-serif" fontStyle="italic" opacity="0.7">
          {lang === 'en' ? 'Optional continuity across seasons' : 'Continuidad opcional a través de temporadas'}
        </text>
      </svg>

      {/* Mobile — vertical ordered list */}
      <div className="md:hidden">
        <ol className="relative space-y-0 border-l-2 border-brand-light-green/30 pl-6">
          <li className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-brand-light-green/60" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.before}</p>
          </li>
          <li className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-brand-light-green/70" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.during}</p>
          </li>
          <li className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-brand-light-green/60" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.after}</p>
          </li>
        </ol>
        <div className="mt-4 space-y-2 rounded-lg border border-ink-700/50 bg-ink-800/20 p-4">
          <p className="text-xs font-medium text-ink-200">{labels.businessCounsel}</p>
          <p className="text-xs font-medium text-ink-200">{labels.propheticDiscernment}</p>
        </div>
        <p className="mt-3 text-center text-xs italic text-brand-light-green/70">
          {lang === 'en' ? 'Optional continuity across seasons' : 'Continuidad opcional a través de temporadas'}
        </p>
      </div>
    </figure>
  );
}
