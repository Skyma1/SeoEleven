import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SEOPage from './components/SEOPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/seo/geo" element={<SEOPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;

