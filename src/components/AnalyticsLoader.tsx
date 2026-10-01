import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

const CONSENT_KEY = 'cop-cookie-consent';

function loadAnalytics() {
  if (document.getElementById('ga-gtag-src')) return;

  const gaSrc = document.createElement('script');
  gaSrc.id = 'ga-gtag-src';
  gaSrc.async = true;
  gaSrc.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.analyticsId}`;
  document.head.appendChild(gaSrc);

  const gaInit = document.createElement('script');
  gaInit.id = 'ga-gtag-init';
  gaInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${siteConfig.analyticsId}');
  `;
  document.head.appendChild(gaInit);

  const clarityScript = document.createElement('script');
  clarityScript.id = 'clarity-script';
  clarityScript.type = 'text/javascript';
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${siteConfig.clarityId}");
  `;
  document.head.appendChild(clarityScript);
}

export function AnalyticsLoader() {
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (consent === 'accepted') {
        loadAnalytics();
      }
    };

    checkConsent();

    const handler = () => checkConsent();
    window.addEventListener('cookie-consent-change', handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener('cookie-consent-change', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  return null;
}
