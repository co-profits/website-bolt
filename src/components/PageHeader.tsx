import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLang } from '@/i18n/LangContext';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, subtitle, breadcrumbs, children }: PageHeaderProps) {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden border-b border-ink-700/50 bg-ink-900 pt-28 lg:pt-36">
      <div className="bg-grid-faint absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="bg-radial-glow absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative pb-16 lg:pb-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <li>
                <Link to={t.nav[0].path} className="transition-colors hover:text-ink-200">
                  {t.common.breadcrumbHome}
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="transition-colors hover:text-ink-200">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-200">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-display text-display-lg max-w-4xl text-balance text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
