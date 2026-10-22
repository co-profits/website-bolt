import type { LucideIcon } from 'lucide-react';
import { ScanSearch, TrendingUp, Workflow, DoorOpen, Sprout, Route } from 'lucide-react';

export type ProgramIconId = 'blueprint' | 'profit-maximization' | 'operational-optimization' | 'freedom-architecture' | 'kingdom-wealth-and-impact' | 'prophetic-business-mentorship';

export type IconTone = 'light' | 'dark';
export type IconState = 'default' | 'hover' | 'focus-visible' | 'active' | 'disabled';

interface ProgramIconProps {
  id: ProgramIconId;
  size?: 16 | 20 | 24 | 32 | 48;
  tone?: IconTone;
  state?: IconState;
  decorative?: boolean;
  className?: string;
}

const lucideFallback: Record<ProgramIconId, LucideIcon> = {
  'blueprint': ScanSearch,
  'profit-maximization': TrendingUp,
  'operational-optimization': Workflow,
  'freedom-architecture': DoorOpen,
  'kingdom-wealth-and-impact': Sprout,
  'prophetic-business-mentorship': Route,
};

const stateClasses: Record<IconState, string> = {
  'default': '',
  'hover': 'text-brand-light-yellow',
  'focus-visible': 'text-brand-light-green',
  'active': 'text-brand-light-yellow',
  'disabled': 'opacity-40',
};

const toneClasses: Record<IconTone, string> = {
  'dark': 'text-brand-light-green',
  'light': 'text-brand-dark-green',
};

function CustomSvg({ id, size }: { id: ProgramIconId; size: number }) {
  const stroke = 'currentColor';
  const fill = 'currentColor';
  const s = size;
  const v = 24;
  const scale = s / v;

  const paths: Record<ProgramIconId, JSX.Element> = {
    'blueprint': (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="12" x2="20" y2="12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14.5 L12 17 L16 14.5" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12 L8 14.5 M16 12 L16 14.5 M12 12 L12 17" fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M8 12 L16 12 L16 17 L8 17 Z" fill={fill} opacity="0.25" />
      </>
    ),
    'profit-maximization': (
      <>
        <line x1="4" y1="20" x2="20" y2="20" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
        <rect x="6" y="12" width="3" height="6" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" rx="0.5" />
        <rect x="11" y="8" width="3" height="10" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" rx="0.5" />
        <rect x="16" y="5" width="3" height="13" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" rx="0.5" />
        <path d="M16 5 L19 5 L19 3 L16 3 Z" fill={fill} />
      </>
    ),
    'operational-optimization': (
      <>
        <line x1="5" y1="6" x2="10" y2="12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="12" x2="10" y2="14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="18" x2="10" y2="16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="12" x2="16" y2="12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="10" width="4" height="4" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" rx="0.5" />
      </>
    ),
    'freedom-architecture': (
      <>
        <path d="M6 20 L6 10 Q6 6 10 6 L14 6 Q18 6 18 10 L18 20" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="8" x2="10" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="8" x2="14" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="19" r="1.5" fill={fill} />
      </>
    ),
    'kingdom-wealth-and-impact': (
      <>
        <rect x="9" y="15" width="6" height="4" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10" y="10" width="4" height="4" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10.5" y="6" width="3" height="3" rx="1" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
    'prophetic-business-mentorship': (
      <>
        <path d="M5 18 Q8 10 12 14" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 19 Q11 14 15 16" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="12" cy="14" r="1.5" fill={fill} />
      </>
    ),
  };

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${v} ${v}`}
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <g transform={`scale(${scale})`}>
        {paths[id]}
      </g>
    </svg>
  );
}

export function ProgramIcon({
  id,
  size = 24,
  tone = 'dark',
  state = 'default',
  decorative = true,
  className = '',
}: ProgramIconProps) {
  const Fallback = lucideFallback[id];
  const stateClass = stateClasses[state];
  const toneClass = toneClasses[tone];
  const combined = `${toneClass} ${stateClass} ${className}`.trim();

  if (decorative) {
    return (
      <span className={`inline-flex items-center justify-center ${combined}`} aria-hidden="true">
        <CustomSvg id={id} size={size} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${combined}`}>
      <Fallback size={size} strokeWidth={1.5} />
    </span>
  );
}

export function getProgramIconId(programId: string): ProgramIconId {
  if (programId === 'blueprint' || programId.startsWith('programs:')) {
    return programId === 'blueprint' ? 'blueprint' : (programId.replace('programs:', '') as ProgramIconId);
  }
  return programId as ProgramIconId;
}
