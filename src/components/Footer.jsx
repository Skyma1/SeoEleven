import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Студия</h3>
            <p>
              Цифровые решения для малого и среднего бизнеса. 
              Специализируемся на SEO, разработке, дизайне и автоматизации.
            </p>
            <div className={styles.social}>
              <a href="#linkedin" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#twitter" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#github" className={styles.socialLink} aria-label="GitHub">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="#email" className={styles.socialLink} aria-label="Email">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Услуги</h3>
            <div className={styles.links}>
              <a href="#seo" className={styles.link}>SEO и поисковая оптимизация</a>
              <a href="#development" className={styles.link}>Разработка</a>
              <a href="#design" className={styles.link}>Дизайн</a>
              <a href="#automation" className={styles.link}>Автоматизация</a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Компания</h3>
            <div className={styles.links}>
              <a href="#about" className={styles.link}>О нас</a>
              <a href="#portfolio" className={styles.link}>Портфолио</a>
              <a href="#blog" className={styles.link}>Блог</a>
              <a href="#contact" className={styles.link}>Контакты</a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Контакты</h3>
            <div className={styles.links}>
              <a href="mailto:hello@studio.com" className={styles.link}>hello@studio.com</a>
              <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2025 Студия. Все права защищены.</p>
          <div className={styles.legalLinks}>
            <a href="#privacy" className={styles.legalLink}>Политика конфиденциальности</a>
            <a href="#terms" className={styles.legalLink}>Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

