import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(73);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMegaMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMegaMenuOpen]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleServicesMouseEnter = () => {
    setIsMegaMenuOpen(true);
  };

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.container}>
          <div className={styles.logo}>Студия</div>
          
          <nav className={styles.nav}>
            <div 
              className={styles.navItem}
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
            >
              <a 
                href="/services" 
                className={styles.navLink}
                onClick={handleServicesClick}
              >
                Услуги
                <ChevronDown 
                  size={16} 
                  strokeWidth={1.5} 
                  className={`${styles.chevron} ${isMegaMenuOpen ? styles.chevronOpen : ''}`}
                />
              </a>
            </div>
            <a href="/cases" className={styles.navLink}>Кейсы</a>
            <a href="/blog" className={styles.navLink}>Блог</a>
            <a href="/about" className={styles.navLink}>О нас</a>
            <a href="/contact" className={styles.navLink}>Контакты</a>
            <button className={styles.ctaButton}>Начать проект</button>
          </nav>
          
          <button className={styles.mobileMenu} aria-label="Menu">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>
      {isMegaMenuOpen && (
        <MegaMenu 
          headerHeight={headerHeight}
          onClose={() => setIsMegaMenuOpen(false)}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;

