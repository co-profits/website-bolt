import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function Layout({ children }: { children: ReactNode }) {
  useScrollToTop();
  return (
    <div className="flex min-h-screen flex-col bg-ink-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
