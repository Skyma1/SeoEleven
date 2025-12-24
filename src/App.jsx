import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SEOPage from './components/SEOPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CasesPage from './components/CasesPage';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TelegramBotsPage from './components/TelegramBotsPage';
import NoCodeAutomationPage from './components/NoCodeAutomationPage';
import CustomScriptsPage from './components/CustomScriptsPage';
import AnalyticsPage from './components/AnalyticsPage';
import ContextualAdvertisingPage from './components/ContextualAdvertisingPage';
import TargetedAdvertisingPage from './components/TargetedAdvertisingPage';
import MarketplaceSEOPage from './components/MarketplaceSEOPage';
import YandexDirectPage from './components/YandexDirectPage';
import ComprehensiveSEOPage from './components/ComprehensiveSEOPage';
import YoungSitesSEOPage from './components/YoungSitesSEOPage';
import BasicOptimizationPage from './components/BasicOptimizationPage';
import ArticleSEOPage from './components/ArticleSEOPage';
import SemanticCorePage from './components/SemanticCorePage';
import LinkBuildingPage from './components/LinkBuildingPage';
import KeywordPromotionPage from './components/KeywordPromotionPage';
import SEOAuditPage from './components/SEOAuditPage';
import WebDevelopmentPage from './components/WebDevelopmentPage';
import SupportPage from './components/SupportPage';
import HostingSetupPage from './components/HostingSetupPage';
import LogoDesignPage from './components/LogoDesignPage';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import NotFoundPage from './components/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import './styles/globals.css';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <ScrollToTop />
        <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/ai-seo" element={<SEOPage />} />
          <Route path="/services/telegram-bots" element={<TelegramBotsPage />} />
          <Route path="/services/no-code-automation" element={<NoCodeAutomationPage />} />
          <Route path="/services/scripts" element={<CustomScriptsPage />} />
          <Route path="/services/analytics" element={<AnalyticsPage />} />
          <Route path="/uslugi/kontekstnaya-reklama" element={<ContextualAdvertisingPage />} />
          <Route path="/uslugi/targetirovannaya-reklama" element={<TargetedAdvertisingPage />} />
          <Route path="/uslugi/seo-dlya-marketpleysov" element={<MarketplaceSEOPage />} />
          <Route path="/uslugi/nastrojka-yandex-direct" element={<YandexDirectPage />} />
          <Route path="/uslugi/seo-prodvizhenie" element={<ComprehensiveSEOPage />} />
          <Route path="/uslugi/prodvizhenie-molodyh-sajtov" element={<YoungSitesSEOPage />} />
          <Route path="/uslugi/bazovaya-optimizaciya" element={<BasicOptimizationPage />} />
          <Route path="/uslugi/stateinoe-prodvizhenie" element={<ArticleSEOPage />} />
          <Route path="/uslugi/semanticheskoe-yadro" element={<SemanticCorePage />} />
          <Route path="/uslugi/ssylki" element={<LinkBuildingPage />} />
          <Route path="/uslugi/prodvizhenie-po-slovam" element={<KeywordPromotionPage />} />
          <Route path="/uslugi/seo-audit" element={<SEOAuditPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/support" element={<SupportPage />} />
          <Route path="/services/hosting-setup" element={<HostingSetupPage />} />
          <Route path="/services/logo-design" element={<LogoDesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      </div>
    </ModalProvider>
  );
}

export default App;

