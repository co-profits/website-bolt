import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: boolean;
  className?: string;
}

export function CTAButton({ to, children, variant = 'primary', icon = true, className = '' }: CTAButtonProps) {
  const baseClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-ghost';

  return (
    <Link to={to} className={`${baseClass} ${className}`}>
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
