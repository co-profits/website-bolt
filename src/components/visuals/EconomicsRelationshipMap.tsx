import { useLang } from '@/i18n/LangContext';

export function EconomicsRelationshipMap() {
  const { lang } = useLang();

  const labels = lang === 'en'
    ? {
        value: 'Value',
        price: 'Price',
        margin: 'Margin',
        cost: 'Cost',
        revenueComposition: 'Revenue composition',
        profitabilityConstraint: 'Profitability constraint',
        accessibleSummary: 'Profitability depends on relationships among value, price, margin, cost and revenue composition.',
      }
    : {
        value: 'Valor',
        price: 'Precio',
        margin: 'Margen',
        cost: 'Costos',
        revenueComposition: 'Composición de ingresos',
        profitabilityConstraint: 'Restricción de rentabilidad',
        accessibleSummary: 'La rentabilidad depende de las relaciones entre valor, precio, margen, costos y composición de ingresos.',
      };

  return (
    <figure
      className="economics-map w-full rounded-xl border border-ink-700/50 bg-teal-900/10 p-6 lg:p-8"
      role="img"
      aria-label={labels.accessibleSummary}
    >
      <figcaption className="sr-only">{labels.accessibleSummary}</figcaption>

      {/* Desktop SVG */}
      <svg viewBox="0 0 720 420" className="hidden w-full md:block" aria-hidden="true">
        <defs>
          <linearGradient id="vg01-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D77F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Value → Price → Margin */}
        <path d="M 150 120 Q 200 120 250 120" fill="none" stroke="url(#vg01-line)" strokeWidth="1.8" />
        <path d="M 330 120 Q 350 130 360 180" fill="none" stroke="url(#vg01-line)" strokeWidth="1.8" />

        {/* Cost → Margin */}
        <path d="M 570 120 Q 420 130 380 190" fill="none" stroke="url(#vg01-line)" strokeWidth="1.8" />

        {/* Revenue composition → Margin (secondary, dashed) */}
        <path d="M 570 280 Q 440 270 380 230" fill="none" stroke="#00D77F" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />

        {/* Value node — upper-left */}
        <g>
          <rect x="50" y="90" width="100" height="56" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="100" y="124" textAnchor="middle" fill="#E0EDEF" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.value}
          </text>
        </g>

        {/* Price node — left-center */}
        <g>
          <rect x="250" y="90" width="80" height="56" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="290" y="124" textAnchor="middle" fill="#E0EDEF" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.price}
          </text>
        </g>

        {/* Margin — central dominant node */}
        <g>
          <rect x="330" y="165" width="120" height="70" rx="10" fill="#0a1f1a" stroke="#00D77F" strokeWidth="1.5" />
          <text x="390" y="200" textAnchor="middle" fill="#E0EDEF" fontSize="16" fontFamily="Manrope, sans-serif" fontWeight="700">
            {labels.margin}
          </text>
          <text x="390" y="218" textAnchor="middle" fill="#00D77F" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Central relationship' : 'Relación central'}
          </text>
        </g>

        {/* Cost node — upper-right */}
        <g>
          <rect x="570" y="90" width="100" height="56" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="620" y="124" textAnchor="middle" fill="#E0EDEF" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.cost}
          </text>
        </g>

        {/* Revenue composition — lower-right */}
        <g>
          <rect x="540" y="260" width="140" height="56" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="610" y="285" textAnchor="middle" fill="#E0EDEF" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.revenueComposition}
          </text>
        </g>

        {/* Bottom editorial rule: Profitability constraint */}
        <line x1="100" y1="360" x2="620" y2="360" stroke="#1a3a32" strokeWidth="0.5" />
        <text x="360" y="385" textAnchor="middle" fill="#8a9a96" fontSize="12" fontFamily="Inter, sans-serif" fontStyle="italic">
          {labels.profitabilityConstraint}
        </text>
      </svg>

      {/* Mobile — vertical narrative */}
      <div className="md:hidden">
        <div className="space-y-0">
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.value}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.price}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="rounded-lg border border-brand-light-green/40 bg-brand-light-green/5 px-4 py-4 text-center">
            <p className="font-display text-base font-bold text-white">{labels.margin}</p>
            <p className="mt-0.5 text-xs text-brand-light-green">{lang === 'en' ? 'Central relationship' : 'Relación central'}</p>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.cost}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.revenueComposition}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs italic text-ink-400">{labels.profitabilityConstraint}</p>
        </div>
      </div>
    </figure>
  );
}
