import {
  ClipboardList,
  ChartNoAxesCombined,
  Network,
  DoorOpen,
  Sprout,
  Compass,
  type LucideIcon,
} from 'lucide-react';

export type ProgramIconId =
  | 'blueprint'
  | 'profit-maximization'
  | 'operational-optimization'
  | 'freedom-architecture'
  | 'kingdom-wealth-and-impact'
  | 'prophetic-business-mentorship';

export type IconTone = 'light' | 'dark';
export type IconState = 'default' | 'hover' | 'focus-visible' | 'active' | 'disabled';

interface ProgramIconProps {
  id: ProgramIconId;
  size?: number;
  tone?: IconTone;
  state?: IconState;
  decorative?: boolean;
  className?: string;
  strokeWidth?: number;
}

const iconMap: Record<ProgramIconId, LucideIcon> = {
  'blueprint': ClipboardList,
  'profit-maximization': ChartNoAxesCombined,
  'operational-optimization': Network,
  'freedom-architecture': DoorOpen,
  'kingdom-wealth-and-impact': Sprout,
  'prophetic-business-mentorship': Compass,
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

export function ProgramIcon({
  id,
  size = 24,
  tone = 'dark',
  state = 'default',
  decorative = true,
  className = '',
  strokeWidth = 2.25,
}: ProgramIconProps) {
  const Icon = iconMap[id];
  const stateClass = stateClasses[state];
  const toneClass = toneClasses[tone];
  const combined = `${toneClass} ${stateClass} ${className}`.trim();

  if (decorative) {
    return (
      <span
        className={`inline-flex items-center justify-center ${combined}`}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <Icon size={size} strokeWidth={strokeWidth} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${combined}`}>
      <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />
    </span>
  );
}

export function getProgramIconId(programId: string): ProgramIconId {
  if (programId === 'blueprint' || programId.startsWith('programs:')) {
    return programId === 'blueprint' ? 'blueprint' : (programId.replace('programs:', '') as ProgramIconId);
  }
  return programId as ProgramIconId;
}
