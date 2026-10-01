interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = 'h-8 w-auto' }: LogoProps) {
  const src =
    variant === 'dark'
      ? '/assets/images/Company_of_Profits_Logo_Dark_bg.webp'
      : '/assets/images/Company_of_Profits_Logo_Light_bg.webp';

  return (
    <img
      src={src}
      alt="Company of Profits"
      className={className}
      loading="eager"
    />
  );
}
