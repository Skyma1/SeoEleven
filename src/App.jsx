/**
 * Главный компонент приложения
 * 
 * Подключает все контексты (Auth, Data, Modal),
 * Error Boundary для обработки ошибок,
 * и настраивает роутинг для публичной части и админки
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Компоненты
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
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
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';

// New Pages (изолированные компоненты)
import NewHomePage from './components/newPages/NewHomePage';
import NewServicesPage from './components/newPages/NewServicesPage';
import NewBlogPage from './components/newPages/NewBlogPage';
import NewCasesPage from './components/newPages/NewCasesPage';
import NewAboutPage from './components/newPages/NewAboutPage';
import NewTeamPage from './components/newPages/NewTeamPage';
import NewVacanciesPage from './components/newPages/NewVacanciesPage';
import NewServiceTemplatePage from './components/newPages/NewServiceTemplatePage';
import CookieConsent from './components/CookieConsent';
import NotFoundPage from './components/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';

// Admin компоненты
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/pages/AdminLogin';
import AdminBlog from './admin/pages/AdminBlog';
import BlogEdit from './admin/pages/BlogEdit';
import AdminCases from './admin/pages/AdminCases';
import CaseEdit from './admin/pages/CaseEdit';
import AdminServices from './admin/pages/AdminServices';
import AdminRequests from './admin/pages/AdminRequests';
import AdminStatistics from './admin/pages/AdminStatistics';
import AdminMetrica from './admin/pages/AdminMetrica';
import AdminUsers from './admin/pages/AdminUsers';
import UserEdit from './admin/pages/UserEdit';
import AdminPages from './admin/pages/AdminPages';
import PageEdit from './admin/pages/PageEdit';

// Контексты
import { ModalProvider } from './context/ModalContext';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';

// Стили
import './styles/globals.css';
import './styles/tailwind.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <DataProvider>
          <ModalProvider>
            <div className="App">
              <ScrollToTop />
              <Routes>
                {/* Admin Login Route (не защищенный) */}
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Admin Routes (защищенные) */}
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<AdminStatistics />} />
                  <Route path="blog" element={<AdminBlog />} />
                  <Route path="blog/new" element={<BlogEdit />} />
                  <Route path="blog/:id/edit" element={<BlogEdit />} />
                  <Route path="cases" element={<AdminCases />} />
                  <Route path="cases/new" element={<CaseEdit />} />
                  <Route path="cases/:id/edit" element={<CaseEdit />} />
                  <Route path="services" element={<AdminServices />} />
                  <Route path="requests" element={<AdminRequests />} />
                  <Route path="metrica" element={<AdminMetrica />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="users/new" element={<UserEdit />} />
                  <Route path="users/:id/edit" element={<UserEdit />} />
                  <Route path="pages" element={<AdminPages />} />
                  <Route path="pages/:path/edit" element={<PageEdit />} />
                </Route>

                {/* New Pages Routes (изолированные, префикс /new) */}
                <Route path="/new" element={<NewHomePage />} />
                <Route path="/new/services" element={<NewServicesPage />} />
                <Route path="/new/blog" element={<NewBlogPage />} />
                <Route path="/new/cases" element={<NewCasesPage />} />
                <Route path="/new/about" element={<NewAboutPage />} />
                <Route path="/new/team" element={<NewTeamPage />} />
                <Route path="/new/vacancies" element={<NewVacanciesPage />} />
                <Route path="/new/service-template" element={<NewServiceTemplatePage />} />

                {/* Public Routes */}
                <Route
                  path="/*"
                  element={
                    <>
                      <Header />
                      <Breadcrumbs />
                      <main>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/services" element={<ServicesPage />} />
                          <Route path="/uslugi" element={<ServicesPage />} />
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
                    </>
                  }
                />
              </Routes>
            </div>
          </ModalProvider>
        </DataProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

