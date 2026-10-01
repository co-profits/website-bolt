import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LangProvider } from '@/i18n/LangContext';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { BlueprintPage } from '@/pages/BlueprintPage';
import { MethodologyPage } from '@/pages/MethodologyPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { ProgramDetailPage } from '@/pages/ProgramDetailPage';
import { WhyPage } from '@/pages/WhyPage';
import { AboutPage } from '@/pages/AboutPage';
import { FAQPage } from '@/pages/FAQPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { InsightArticlePage } from '@/pages/InsightArticlePage';
import { ApplyPage } from '@/pages/ApplyPage';
import { ContactPage } from '@/pages/ContactPage';
import { LegalPage } from '@/pages/LegalPage';

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Layout>
          <Routes>
            {/* English routes */}
            <Route path="/en/" element={<HomePage />} />
            <Route path="/en/blueprint" element={<BlueprintPage />} />
            <Route path="/en/methodology" element={<MethodologyPage />} />
            <Route path="/en/programs" element={<ProgramsPage />} />
            <Route path="/en/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/en/why-company-of-profits" element={<WhyPage />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/insights" element={<InsightsPage />} />
            <Route path="/en/insights/:slug" element={<InsightArticlePage />} />
            <Route path="/en/faq" element={<FAQPage />} />
            <Route path="/en/apply" element={<ApplyPage />} />
            <Route path="/en/contact" element={<ContactPage />} />
            <Route path="/en/privacy-policy" element={<LegalPage doc="privacy-policy" />} />
            <Route path="/en/terms-and-conditions" element={<LegalPage doc="terms-and-conditions" />} />
            <Route path="/en/cookie-policy" element={<LegalPage doc="cookie-policy" />} />

            {/* Spanish routes */}
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/radiografia" element={<BlueprintPage />} />
            <Route path="/es/metodologia" element={<MethodologyPage />} />
            <Route path="/es/programas" element={<ProgramsPage />} />
            <Route path="/es/programas/:slug" element={<ProgramDetailPage />} />
            <Route path="/es/por-que-company-of-profits" element={<WhyPage />} />
            <Route path="/es/nosotros" element={<AboutPage />} />
            <Route path="/es/insights" element={<InsightsPage />} />
            <Route path="/es/insights/:slug" element={<InsightArticlePage />} />
            <Route path="/es/preguntas-frecuentes" element={<FAQPage />} />
            <Route path="/es/aplicar" element={<ApplyPage />} />
            <Route path="/es/contacto" element={<ContactPage />} />
            <Route path="/es/politica-de-privacidad" element={<LegalPage doc="politica-de-privacidad" />} />
            <Route path="/es/terminos-y-condiciones" element={<LegalPage doc="terminos-y-condiciones" />} />
            <Route path="/es/politica-de-cookies" element={<LegalPage doc="politica-de-cookies" />} />

            {/* Root redirect to English */}
            <Route path="/" element={<Navigate to="/en/" replace />} />
            <Route path="*" element={<Navigate to="/en/" replace />} />
          </Routes>
        </Layout>
      </LangProvider>
    </BrowserRouter>
  );
}
