import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

interface CTABlockProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}

export function CTABlock({ eyebrow, title, subtitle, buttonLabel }: CTABlockProps) {
  const { t, applyPath } = useLang();

  return (
    <section className="relative overflow-hidden border-t border-ink-700/50 bg-ink-900">
      <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="section-eyebrow mb-4 animate-on-scroll">{eyebrow}</p>
          )}
          <h2 className="font-display text-display-md animate-on-scroll text-balance text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-ink-300 animate-on-scroll">
              {subtitle}
            </p>
          )}
          <div className="mt-10 animate-on-scroll">
            <Link to={applyPath} className="btn-primary">
              {buttonLabel || t.cta.applyBlueprint}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
