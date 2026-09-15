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
import { ApplyPage } from '@/pages/ApplyPage';

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
            <Route path="/en/faq" element={<FAQPage />} />
            <Route path="/en/apply" element={<ApplyPage />} />

            {/* Spanish routes */}
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/radiografia" element={<BlueprintPage />} />
            <Route path="/es/metodologia" element={<MethodologyPage />} />
            <Route path="/es/programas" element={<ProgramsPage />} />
            <Route path="/es/programas/:slug" element={<ProgramDetailPage />} />
            <Route path="/es/por-que-company-of-profits" element={<WhyPage />} />
            <Route path="/es/nosotros" element={<AboutPage />} />
            <Route path="/es/insights" element={<InsightsPage />} />
            <Route path="/es/preguntas-frecuentes" element={<FAQPage />} />
            <Route path="/es/aplicar" element={<ApplyPage />} />

            {/* Root redirect to English */}
            <Route path="/" element={<Navigate to="/en/" replace />} />
            <Route path="*" element={<Navigate to="/en/" replace />} />
          </Routes>
        </Layout>
      </LangProvider>
    </BrowserRouter>
  );
}
