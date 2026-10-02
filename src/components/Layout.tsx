import { useEffect, type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { AnalyticsLoader } from './AnalyticsLoader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { siteConfig } from '@/config/site';

export function Layout({ children }: { ReactNode }) {
  useScrollToTop();

  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: siteConfig.domain,
      logo: `${siteConfig.domain}${siteConfig.ogImage}`,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.instagramEn,
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'ld-organization';
    if (!document.getElementById('ld-organization')) {
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
      <AnalyticsLoader />
    </div>
  );
}
