import { useLang } from '@/i18n/LangContext';

export function FounderToSystemStates() {
  const { lang } = useLang();

  const labels = lang === 'en'
    ? {
        founderDefault: 'Founder as default system',
        distributedCapacity: 'Distributed capacity',
        founderByChoice: 'Founder by choice',
        accessibleSummary: 'Freedom is capacity for choice. The states move from founder as default system, through distributed capacity, to founder by choice.',
      }
    : {
        founderDefault: 'El fundador como sistema predeterminado',
        distributedCapacity: 'Capacidad distribuida',
        founderByChoice: 'El fundador por elección',
        accessibleSummary: 'La libertad es capacidad de elección. Los estados pasan del fundador como sistema predeterminado, a través de la capacidad distribuida, al fundador por elección.',
      };

  return (
    <figure
      className="founder-states w-full rounded-xl border border-ink-700/50 bg-teal-900/10 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Desktop SVG — three horizontal columns with increasing focus */}
      <svg viewBox="0 0 720 280" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg03-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a5a56" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2a7a5a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Continuous line changing density: concentrated → distributed → focused */}
        <path d="M 60 140 Q 360 80 660 140" fill="none" stroke="url(#vg03-line)" strokeWidth="2" />

        {/* Dense dashes on left (concentrated) */}
        <path d="M 60 140 Q 120 130 180 135" fill="none" stroke="#4a5a56" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
        {/* Sparse dashes in middle (distributed) */}
        <path d="M 260 135 Q 360 110 460 135" fill="none" stroke="#2a7a5a" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        {/* Focused solid on right */}
        <path d="M 540 135 Q 600 138 660 140" fill="none" stroke="#00D77F" strokeWidth="2" opacity="0.6" />

        {/* State 1 — Founder as default system (muted) */}
        <g>
          <rect x="30" y="170" width="180" height="64" rx="8" fill="#0f1f1c" stroke="#3a4a46" strokeWidth="1" />
          <text x="120" y="198" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.founderDefault.split(' ').slice(0, 3).join(' ')}
          </text>
          <text x="120" y="215" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.founderDefault.split(' ').slice(3).join(' ')}
          </text>
        </g>
        <circle cx="120" cy="140" r="5" fill="#4a5a56" opacity="0.7" />

        {/* State 2 — Distributed capacity (intermediate) */}
        <g>
          <rect x="270" y="170" width="180" height="64" rx="8" fill="#0f1f1c" stroke="#2a7a5a" strokeWidth="1" />
          <text x="360" y="198" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.distributedCapacity.split(' ').slice(0, 1).join(' ')}
          </text>
          <text x="360" y="215" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.distributedCapacity.split(' ').slice(1).join(' ')}
          </text>
        </g>
        <circle cx="360" cy="140" r="5" fill="#2a7a5a" opacity="0.7" />

        {/* State 3 — Founder by choice (green accent) */}
        <g>
          <rect x="510" y="170" width="180" height="64" rx="8" fill="#0a1f1a" stroke="#00D77F" strokeWidth="1.5" />
          <text x="600" y="198" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="700">
            {labels.founderByChoice.split(' ').slice(0, 2).join(' ')}
          </text>
          <text x="600" y="215" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="700">
            {labels.founderByChoice.split(' ').slice(2).join(' ')}
          </text>
        </g>
        <circle cx="600" cy="140" r="6" fill="#00D77F" opacity="0.85" />
      </svg>

      {/* Mobile — vertical column with lateral connection line */}
      <div className="md:hidden">
        <div className="relative space-y-0 border-l-2 border-ink-700/50 pl-6">
          <div className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-ink-500 bg-ink-900" aria-hidden="true" />
            <div className="rounded-lg border border-ink-600 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.founderDefault}</p>
            </div>
          </div>
          <div className="relative pb-6">
            <div className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-brand-light-green/50 bg-ink-900" aria-hidden="true" />
            <div className="rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.distributedCapacity}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[28px] top-2 h-4 w-4 rounded-full border-2 border-brand-light-green bg-brand-light-green/20" aria-hidden="true" />
            <div className="rounded-lg border border-brand-light-green/40 bg-brand-light-green/5 px-4 py-3">
              <p className="font-display text-sm font-bold text-white">{labels.founderByChoice}</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
