import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LangProvider } from '@/i18n/LangContext';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { BlueprintPage } from '@/pages/BlueprintPage';
import { MethodologyPage } from '@/pages/MethodologyPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { ProgramDetailPage } from '@/pages/ProgramDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { FAQPage } from '@/pages/FAQPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { InsightArticlePage } from '@/pages/InsightArticlePage';
import { ApplyPage } from '@/pages/ApplyPage';
import { ContactPage } from '@/pages/ContactPage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Layout>
          <Routes>
            {/* English routes */}
            <Route path="/en/" element={<HomePage />} />
            <Route path="/en/blueprint/" element={<BlueprintPage />} />
            <Route path="/en/methodology/" element={<MethodologyPage />} />
            <Route path="/en/programs/" element={<ProgramsPage />} />
            <Route path="/en/programs/:slug/" element={<ProgramDetailPage />} />
            <Route path="/en/why-company-of-profits/" element={<Navigate to="/en/about/" replace />} />
            <Route path="/en/about/" element={<AboutPage />} />
            <Route path="/en/insights/" element={<InsightsPage />} />
            <Route path="/en/insights/:slug/" element={<InsightArticlePage />} />
            <Route path="/en/faq/" element={<FAQPage />} />
            <Route path="/en/apply/" element={<ApplyPage />} />
            <Route path="/en/contact/" element={<ContactPage />} />
            <Route path="/en/privacy-policy/" element={<LegalPage doc="privacy-policy" />} />
            <Route path="/en/terms-and-conditions/" element={<LegalPage doc="terms-and-conditions" />} />
            <Route path="/en/cookie-policy/" element={<LegalPage doc="cookie-policy" />} />

            {/* Spanish routes */}
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/radiografia/" element={<BlueprintPage />} />
            <Route path="/es/metodologia/" element={<MethodologyPage />} />
            <Route path="/es/programas/" element={<ProgramsPage />} />
            <Route path="/es/programas/:slug/" element={<ProgramDetailPage />} />
            <Route path="/es/por-que-company-of-profits/" element={<Navigate to="/es/nosotros/" replace />} />
            <Route path="/es/nosotros/" element={<AboutPage />} />
            <Route path="/es/insights/" element={<InsightsPage />} />
            <Route path="/es/insights/:slug/" element={<InsightArticlePage />} />
            <Route path="/es/faq/" element={<FAQPage />} />
            <Route path="/es/preguntas-frecuentes/" element={<Navigate to="/es/faq/" replace />} />
            <Route path="/es/aplicar/" element={<ApplyPage />} />
            <Route path="/es/contacto/" element={<ContactPage />} />
            <Route path="/es/politica-de-privacidad/" element={<LegalPage doc="politica-de-privacidad" />} />
            <Route path="/es/terminos-y-condiciones/" element={<LegalPage doc="terminos-y-condiciones" />} />
            <Route path="/es/politica-de-cookies/" element={<LegalPage doc="politica-de-cookies" />} />

            {/* Legacy no-trailing-slash redirects */}
            <Route path="/en/blueprint" element={<Navigate to="/en/blueprint/" replace />} />
            <Route path="/en/methodology" element={<Navigate to="/en/methodology/" replace />} />
            <Route path="/en/programs" element={<Navigate to="/en/programs/" replace />} />
            <Route path="/en/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/en/why-company-of-profits" element={<Navigate to="/en/about/" replace />} />
            <Route path="/en/about" element={<Navigate to="/en/about/" replace />} />
            <Route path="/en/insights" element={<Navigate to="/en/insights/" replace />} />
            <Route path="/en/insights/:slug" element={<InsightArticlePage />} />
            <Route path="/en/faq" element={<Navigate to="/en/faq/" replace />} />
            <Route path="/en/apply" element={<Navigate to="/en/apply/" replace />} />
            <Route path="/en/contact" element={<Navigate to="/en/contact/" replace />} />
            <Route path="/en/privacy-policy" element={<Navigate to="/en/privacy-policy/" replace />} />
            <Route path="/en/terms-and-conditions" element={<Navigate to="/en/terms-and-conditions/" replace />} />
            <Route path="/en/cookie-policy" element={<Navigate to="/en/cookie-policy/" replace />} />

            <Route path="/es/radiografia" element={<Navigate to="/es/radiografia/" replace />} />
            <Route path="/es/metodologia" element={<Navigate to="/es/metodologia/" replace />} />
            <Route path="/es/programas" element={<Navigate to="/es/programas/" replace />} />
            <Route path="/es/programas/:slug" element={<ProgramDetailPage />} />
            <Route path="/es/por-que-company-of-profits" element={<Navigate to="/es/nosotros/" replace />} />
            <Route path="/es/nosotros" element={<Navigate to="/es/nosotros/" replace />} />
            <Route path="/es/insights" element={<Navigate to="/es/insights/" replace />} />
            <Route path="/es/insights/:slug" element={<InsightArticlePage />} />
            <Route path="/es/faq" element={<Navigate to="/es/faq/" replace />} />
            <Route path="/es/preguntas-frecuentes" element={<Navigate to="/es/faq/" replace />} />
            <Route path="/es/aplicar" element={<Navigate to="/es/aplicar/" replace />} />
            <Route path="/es/contacto" element={<Navigate to="/es/contacto/" replace />} />
            <Route path="/es/politica-de-privacidad" element={<Navigate to="/es/politica-de-privacidad/" replace />} />
            <Route path="/es/terminos-y-condiciones" element={<Navigate to="/es/terminos-y-condiciones/" replace />} />
            <Route path="/es/politica-de-cookies" element={<Navigate to="/es/politica-de-cookies/" replace />} />

            {/* Root redirect to English */}
            <Route path="/" element={<Navigate to="/en/" replace />} />
            <Route path="/en" element={<Navigate to="/en/" replace />} />
            <Route path="/es" element={<Navigate to="/es/" replace />} />

            {/* Unknown routes — intentional fallback page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </LangProvider>
    </BrowserRouter>
  );
}
