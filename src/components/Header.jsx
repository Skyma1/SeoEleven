import React from 'react';
import { Menu } from 'lucide-react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Студия</div>
        
        <nav className={styles.nav}>
          <a href="#services" className={styles.navLink}>Услуги</a>
          <a href="#about" className={styles.navLink}>О нас</a>
          <a href="#contact" className={styles.navLink}>Контакты</a>
          <button className={styles.ctaButton}>Начать</button>
        </nav>
        
        <button className={styles.mobileMenu} aria-label="Menu">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;

