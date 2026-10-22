import type { ReactNode } from 'react';

type SurfaceVariant = 'paper' | 'stone' | 'forest';

interface SurfaceSectionProps {
  variant?: SurfaceVariant;
  className?: string;
  children: ReactNode;
}

const surfaceClass: Record<SurfaceVariant, string> = {
  paper: 'surface-paper',
  stone: 'surface-stone',
  forest: 'surface-forest',
};

const borderClass: Record<SurfaceVariant, string> = {
  paper: 'border-semantic-rule',
  stone: 'border-semantic-rule',
  forest: 'border-semantic-rule-on-dark',
};

export function SurfaceSection({ variant = 'forest', className = '', children }: SurfaceSectionProps) {
  return (
    <section className={`${surfaceClass[variant]} border-t ${borderClass[variant]} ${className}`.trim()}>
      {children}
    </section>
  );
}

interface PanelProps {
  className?: string;
  children: ReactNode;
}

export function Panel({ className = '', children }: PanelProps) {
  return (
    <div className={`solid-panel ${className}`.trim()}>
      {children}
    </div>
  );
}

interface LedgerRowProps {
  label: string;
  children: ReactNode;
}

export function LedgerRow({ label, children }: LedgerRowProps) {
  return (
    <div className="ledger-row">
      <div className="ledger-label">{label}</div>
      <div className="ledger-desc">{children}</div>
    </div>
  );
}
