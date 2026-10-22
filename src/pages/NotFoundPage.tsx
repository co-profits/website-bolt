import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { SEO } from '@/components/SEO';

export function NotFoundPage() {
  const { t, lang, homePath } = useLang();

  const title = lang === 'en' ? 'Page not found' : 'Página no encontrada';
  const body = lang === 'en'
    ? 'The page you are looking for does not exist or may have moved.'
    : 'La página que buscas no existe o puede haberse movido.';
  const cta = lang === 'en' ? 'Return home' : 'Volver al inicio';

  return (
    <>
      <SEO
        title={title}
        description={body}
        path={lang === 'en' ? '/en/' : '/es/'}
        alternates={{ en: '/en/', es: '/es/' }}
      />
      <section className="surface-forest min-h-[60vh] pt-28 lg:pt-36">
        <div className="container-wide pb-20 lg:pb-28">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-4">404</p>
            <h1 className="font-display text-display-lg text-balance text-white">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-300">
              {body}
            </p>
            <div className="mt-10">
              <Link to={homePath} className="btn-primary">
                {cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
