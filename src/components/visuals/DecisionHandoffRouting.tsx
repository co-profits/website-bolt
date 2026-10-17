import { useState } from 'react';
import { useLang } from '@/i18n/LangContext';

export function DecisionHandoffRouting() {
  const { lang } = useLang();
  const [focusedLane, setFocusedLane] = useState<number | null>(null);

  const labels = lang === 'en'
    ? {
        founder: 'Founder',
        team: 'Team',
        businessSystem: 'Business system',
        founderDefault: 'Founder-default',
        decisionOwnership: 'Decision ownership',
        distributedOwnership: 'Distributed ownership',
        accessibleSummary: 'Friction appears when decisions, responsibilities and handoffs keep returning to the founder. The routing shows work moving from founder-default to distributed ownership.',
      }
    : {
        founder: 'Fundador',
        team: 'Equipo',
        businessSystem: 'Sistema empresarial',
        founderDefault: 'Predeterminado por el fundador',
        decisionOwnership: 'Propiedad de las decisiones',
        distributedOwnership: 'Responsabilidad distribuida',
        accessibleSummary: 'La fricción aparece cuando las decisiones, las responsabilidades y las transferencias siguen regresando al fundador. El enrutamiento muestra el trabajo pasando del predeterminado por el fundador a la responsabilidad distribuida.',
      };

  const lanes = [labels.founder, labels.team, labels.businessSystem];

  return (
    <figure
      className="decision-routing w-full rounded-xl border border-ink-700/50 bg-teal-900/10 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Desktop SVG — three lanes with routing */}
      <svg viewBox="0 0 760 430" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg02-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D77F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Founder → Team solid route */}
        <path d="M 180 120 Q 280 120 380 120" fill="none" stroke="url(#vg02-line)" strokeWidth="1.8" />
        {/* Team → Business system solid route */}
        <path d="M 500 120 Q 560 120 620 120" fill="none" stroke="url(#vg02-line)" strokeWidth="1.8" />
        {/* Dashed route: Business system → Founder (no longer automatic return) */}
        <path d="M 640 160 Q 400 260 200 160" fill="none" stroke="#00D77F" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
        {/* Small chevron markers */}
        <path d="M 370 116 L 380 120 L 370 124" fill="none" stroke="#00D77F" strokeWidth="1.2" opacity="0.5" />
        <path d="M 610 116 L 620 120 L 610 124" fill="none" stroke="#00D77F" strokeWidth="1.2" opacity="0.5" />

        {/* Founder node — first third */}
        <g>
          <rect x="80" y="85" width="140" height="70" rx="8" fill="#0f1f1c" stroke="#3a4a46" strokeWidth="1" />
          <text x="150" y="118" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.founder}
          </text>
          <text x="150" y="136" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {labels.founderDefault}
          </text>
        </g>

        {/* Team node — center */}
        <g>
          <rect x="380" y="85" width="140" height="70" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="450" y="118" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.team}
          </text>
          <text x="450" y="136" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Mediating layer' : 'Capa intermediaria'}
          </text>
        </g>

        {/* Business system node — last third */}
        <g>
          <rect x="620" y="85" width="120" height="70" rx="8" fill="#0f1f1c" stroke="#00D77F" strokeWidth="1" opacity="0.9" />
          <text x="680" y="115" textAnchor="middle" fill="#E0EDEF" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.businessSystem}
          </text>
          <text x="680" y="135" textAnchor="middle" fill="#00D77F" fontSize="9" fontFamily="Inter, sans-serif">
            {labels.distributedOwnership}
          </text>
        </g>

        {/* Lower band: Decision ownership */}
        <line x1="80" y1="320" x2="680" y2="320" stroke="#1a3a32" strokeWidth="0.5" />
        <text x="380" y="345" textAnchor="middle" fill="#8a9a96" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">
          {labels.decisionOwnership}
        </text>
        <text x="380" y="365" textAnchor="middle" fill="#8a9a96" fontSize="11" fontFamily="Inter, sans-serif" fontStyle="italic">
          {lang === 'en' ? 'From founder-default → distributed ownership' : 'De predeterminado por el fundador → responsabilidad distribuida'}
        </text>
      </svg>

      {/* Mobile — vertical stack */}
      <div className="md:hidden">
        <div className="space-y-0">
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-600 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.founder}</p>
              <p className="mt-0.5 text-xs text-ink-400">{labels.founderDefault}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.team}</p>
              <p className="mt-0.5 text-xs text-ink-400">{lang === 'en' ? 'Mediating layer' : 'Capa intermediaria'}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-brand-light-green/40 bg-brand-light-green/5 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.businessSystem}</p>
              <p className="mt-0.5 text-xs text-brand-light-green">{labels.distributedOwnership}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs italic text-ink-400">
            {lang === 'en' ? 'From founder-default → distributed ownership' : 'De predeterminado por el fundador → responsabilidad distribuida'}
          </p>
        </div>
      </div>

      {/* Interactive lane focus (desktop) */}
      <div className="mt-4 hidden gap-3 md:flex" role="tablist" aria-label={lang === 'en' ? 'Work routing lanes' : 'Carriles de enrutamiento de trabajo'}>
        {lanes.map((lane, i) => (
          <button
            key={lane}
            role="tab"
            aria-selected={focusedLane === i}
            onClick={() => setFocusedLane(focusedLane === i ? null : i)}
            className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
              focusedLane === i
                ? 'border-brand-light-green/50 bg-brand-light-green/10 text-white'
                : 'border-ink-700 text-ink-300 hover:border-ink-500'
            }`}
          >
            {lane}
          </button>
        ))}
      </div>
    </figure>
  );
}
