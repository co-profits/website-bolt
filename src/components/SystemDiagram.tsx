import { useLang } from '@/i18n/LangContext';

export function SystemDiagram() {
  const { lang } = useLang();

  const labels = lang === 'en'
    ? {
        strategy: 'Strategy',
        economics: 'Economics',
        operations: 'Operations',
        dependencies: 'Dependencies',
        decisions: 'Decisions',
        summary: 'The visible symptom may be local while the constraint is systemic.',
      }
    : {
        strategy: 'Estrategia',
        economics: 'Economía',
        operations: 'Operaciones',
        dependencies: 'Dependencias',
        decisions: 'Decisiones',
        summary: 'El síntoma visible puede ser local mientras la restricción es sistémica.',
      };

  const accessibleSummary = lang === 'en'
    ? 'The business system connects strategy, economics, operations and dependencies through decisions.'
    : 'El sistema empresarial conecta estrategia, economía, operaciones y dependencias a través de las decisiones.';

  return (
    <figure
      className="system-diagram w-full"
      role="img"
      aria-label={accessibleSummary}
    >
      <figcaption className="sr-only">{accessibleSummary}</figcaption>

      {/* Desktop SVG — asymmetric layout, Decisions as convergence node */}
      <svg
        viewBox="0 0 880 500"
        className="hidden w-full md:block"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sd-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D77F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D77F" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connections — four primary paths to Decisions */}
        {/* Strategy (upper-left ~180,130) → Decisions (~460,250) */}
        <path d="M 220 160 Q 340 200 430 240" fill="none" stroke="url(#sd-line)" strokeWidth="1.8" />
        {/* Economics (lower-left ~180,370) → Decisions */}
        <path d="M 220 340 Q 340 300 430 260" fill="none" stroke="url(#sd-line)" strokeWidth="1.8" />
        {/* Operations (upper-right ~700,130) → Decisions */}
        <path d="M 660 160 Q 540 200 490 240" fill="none" stroke="url(#sd-line)" strokeWidth="1.8" />
        {/* Dependencies (lower-right ~700,370) → Decisions */}
        <path d="M 660 340 Q 540 300 490 260" fill="none" stroke="url(#sd-line)" strokeWidth="1.8" />
        {/* Subtle cross: Strategy ↔ Operations */}
        <path d="M 260 145 Q 440 80 620 145" fill="none" stroke="#00D77F" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

        {/* Connection dots at Decisions */}
        <circle cx="430" cy="240" r="3" fill="#00D77F" opacity="0.5" />
        <circle cx="430" cy="260" r="3" fill="#00D77F" opacity="0.5" />
        <circle cx="490" cy="240" r="3" fill="#00D77F" opacity="0.5" />
        <circle cx="490" cy="260" r="3" fill="#00D77F" opacity="0.5" />

        {/* Strategy node — upper-left */}
        <g>
          <rect x="80" y="100" width="180" height="60" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="170" y="128" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.strategy}
          </text>
          <text x="170" y="146" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Positioning & direction' : 'Posición y dirección'}
          </text>
        </g>

        {/* Economics node — lower-left */}
        <g>
          <rect x="80" y="340" width="180" height="60" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="170" y="368" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.economics}
          </text>
          <text x="170" y="386" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Pricing, margin, cost' : 'Precios, margen, costos'}
          </text>
        </g>

        {/* Operations node — upper-right */}
        <g>
          <rect x="620" y="100" width="180" height="60" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="710" y="128" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.operations}
          </text>
          <text x="710" y="146" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Processes & delivery' : 'Procesos y entrega'}
          </text>
        </g>

        {/* Dependencies node — lower-right */}
        <g>
          <rect x="620" y="340" width="180" height="60" rx="8" fill="#0f1f1c" stroke="#1a3a32" strokeWidth="1" />
          <text x="710" y="368" textAnchor="middle" fill="#E0EDEF" fontSize="15" fontFamily="Manrope, sans-serif" fontWeight="600">
            {labels.dependencies}
          </text>
          <text x="710" y="386" textAnchor="middle" fill="#8a9a96" fontSize="10" fontFamily="Inter, sans-serif">
            {lang === 'en' ? 'Founder reliance' : 'Dependencia del fundador'}
          </text>
        </g>

        {/* Decisions node — convergence, slightly right of center */}
        <g>
          <rect x="380" y="215" width="160" height="70" rx="10" fill="#0a1f1a" stroke="#00D77F" strokeWidth="1.5" opacity="0.95" />
          <text x="460" y="248" textAnchor="middle" fill="#E0EDEF" fontSize="17" fontFamily="Manrope, sans-serif" fontWeight="700">
            {labels.decisions}
          </text>
          <text x="460" y="268" textAnchor="middle" fill="#00D77F" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">
            {lang === 'en' ? 'Convergence point' : 'Punto de convergencia'}
          </text>
        </g>

        {/* Bottom rule with summary */}
        <line x1="120" y1="440" x2="760" y2="440" stroke="#1a3a32" strokeWidth="0.5" />
        <text x="440" y="465" textAnchor="middle" fill="#8a9a96" fontSize="12" fontFamily="Inter, sans-serif" fontStyle="italic">
          {labels.summary}
        </text>
      </svg>

      {/* Mobile — vertical narrative */}
      <div className="md:hidden">
        <div className="space-y-0">
          {/* Strategy → Decisions */}
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.strategy}</p>
              <p className="mt-0.5 text-xs text-ink-400">{lang === 'en' ? 'Positioning & direction' : 'Posición y dirección'}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.economics}</p>
              <p className="mt-0.5 text-xs text-ink-400">{lang === 'en' ? 'Pricing, margin, cost' : 'Precios, margen, costos'}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          {/* Decisions convergence */}
          <div className="rounded-lg border border-brand-light-green/40 bg-brand-light-green/5 px-4 py-4 text-center">
            <p className="font-display text-base font-bold text-white">{labels.decisions}</p>
            <p className="mt-0.5 text-xs text-brand-light-green">{lang === 'en' ? 'Convergence point' : 'Punto de convergencia'}</p>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.operations}</p>
              <p className="mt-0.5 text-xs text-ink-400">{lang === 'en' ? 'Processes & delivery' : 'Procesos y entrega'}</p>
            </div>
          </div>
          <div className="ml-6 h-5 w-px bg-brand-light-green/30" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-lg border border-ink-700 bg-ink-800/40 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">{labels.dependencies}</p>
              <p className="mt-0.5 text-xs text-ink-400">{lang === 'en' ? 'Founder reliance' : 'Dependencia del fundador'}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs italic text-ink-400">{labels.summary}</p>
        </div>
      </div>
    </figure>
  );
}
