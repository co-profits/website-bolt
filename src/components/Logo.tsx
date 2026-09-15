interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = 'h-8 w-auto' }: LogoProps) {
  const src =
    variant === 'dark'
      ? '/assets/images/Company_of_Profits_Logo_Dark.svg'
      : '/assets/images/Company_of_Profits_Logo_Light.svg';

  return (
    <img
      src={src}
      alt="Company of Profits"
      className={className}
      width={200}
      height={40}
      loading="eager"
    />
  );
}
