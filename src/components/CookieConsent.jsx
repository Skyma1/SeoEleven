import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from '../styles/CookieConsent.module.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Небольшая задержка для плавного появления
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.cookieContent}>
        <p className={styles.cookieText}>
          Мы используем cookies для улучшения работы сайта и анализа трафика. 
          Продолжая использовать сайт, вы соглашаетесь с использованием cookies.
        </p>
        <div className={styles.cookieActions}>
          <button 
            className={styles.acceptButton}
            onClick={handleAccept}
            aria-label="Принять"
          >
            Принять
          </button>
          <button 
            className={styles.closeButton}
            onClick={handleAccept}
            aria-label="Закрыть"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;


