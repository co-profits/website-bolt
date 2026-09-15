import { useEffect } from 'react';
import { useLang } from '@/i18n/LangContext';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  alternates?: { en: string; es: string };
}

function buildHreflang(path: string, lang: 'en' | 'es') {
  return path;
}

export function SEO({ title, description, path, alternates }: SEOProps) {
  const { lang } = useLang();
  const fullTitle = `${title} | ${siteConfig.companyName}`;
  const baseUrl = siteConfig.domain === '[PRODUCTION DOMAIN — CONFIGURE BEFORE LAUNCH]'
    ? ''
    : siteConfig.domain;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `${baseUrl}${path}`, true);
    setMeta('og:site_name', siteConfig.companyName, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setLink('canonical', `${baseUrl}${path}`);

    const enPath = alternates?.en || path;
    const esPath = alternates?.es || path;
    setLink('alternate', `${baseUrl}${enPath}`, 'en');
    setLink('alternate', `${baseUrl}${esPath}`, 'es');
    setLink('alternate', `${baseUrl}${enPath}`, 'x-default');
  }, [fullTitle, description, path, baseUrl, alternates]);

  return null;
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
