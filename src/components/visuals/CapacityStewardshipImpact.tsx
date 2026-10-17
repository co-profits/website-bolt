import { useLang } from '@/i18n/LangContext';

export function CapacityStewardshipImpact() {
  const { lang } = useLang();

  const labels = lang === 'en'
    ? {
        capacity: 'Capacity',
        stewardship: 'Stewardship',
        purposefulImpact: 'Purposeful impact',
        inDevelopment: 'In development',
        accessibleSummary: 'Capacity moves through stewardship toward purposeful impact. This program is in development.',
      }
    : {
        capacity: 'Capacidad',
        stewardship: 'Mayordomía',
        purposefulImpact: 'Impacto con propósito',
        inDevelopment: 'En desarrollo',
        accessibleSummary: 'La capacidad pasa por la mayordomía hacia el impacto con propósito. Este programa está en desarrollo.',
      };

  return (
    <figure
      className="capacity-stewardship w-full rounded-xl border border-ink-700/50 bg-ink-950 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Status badge — above, with more visual weight */}
      <div className="mb-6 flex justify-center">
        <span className="rounded-full border border-brand-purple/30 bg-brand-purple/10 px-5 py-2 text-sm font-semibold text-brand-purple">
          {labels.inDevelopment}
        </span>
      </div>

      {/* Desktop SVG — restrained 3:1 horizon */}
      <svg viewBox="0 0 720 180" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg04-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a5a56" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4a5a56" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Horizontal line */}
        <line x1="80" y1="90" x2="640" y2="90" stroke="url(#vg04-line)" strokeWidth="1.5" />

        {/* Three stations */}
        <circle cx="120" cy="90" r="5" fill="#4a5a56" opacity="0.5" />
        <circle cx="360" cy="90" r="5" fill="#4a5a56" opacity="0.5" />
        <circle cx="600" cy="90" r="5" fill="#4a5a56" opacity="0.5" />

        <text x="120" y="120" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.capacity}
        </text>
        <text x="360" y="120" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.stewardship}
        </text>
        <text x="600" y="120" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
          {labels.purposefulImpact}
        </text>
      </svg>

      {/* Mobile — vertical line with three stations, status first */}
      <div className="md:hidden">
        <div className="relative space-y-0 border-l-2 border-ink-700/50 pl-6">
          <div className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-ink-600 bg-ink-900" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.capacity}</p>
          </div>
          <div className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-ink-600 bg-ink-900" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.stewardship}</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-ink-600 bg-ink-900" aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-white">{labels.purposefulImpact}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
