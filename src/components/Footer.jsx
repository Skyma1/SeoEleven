import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, MessageCircle } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>SeoEleven</h3>
            <p>
              Цифровые решения для малого и среднего бизнеса. 
              Специализируемся на SEO, разработке, дизайне и автоматизации.
            </p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/company/seoeleven" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com/seoeleven" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="https://github.com/seoeleven" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://t.me/seoeleven" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Telegram">
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Услуги</h3>
            <div className={styles.links}>
              <Link to="/services/ai-seo" className={styles.link}>AI SEO (GEO)</Link>
              <Link to="/uslugi/seo-prodvizhenie" className={styles.link}>Комплексное SEO</Link>
              <Link to="/uslugi/kontekstnaya-reklama" className={styles.link}>Контекстная реклама</Link>
              <Link to="/uslugi/targetirovannaya-reklama" className={styles.link}>Таргетированная реклама</Link>
              <Link to="/services/telegram-bots" className={styles.link}>Telegram-боты</Link>
              <Link to="/services/no-code-automation" className={styles.link}>Автоматизация</Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Компания</h3>
            <div className={styles.links}>
              <Link to="/about" className={styles.link}>О нас</Link>
              <Link to="/cases" className={styles.link}>Кейсы</Link>
              <Link to="/blog" className={styles.link}>Блог</Link>
              <Link to="/contact" className={styles.link}>Контакты</Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Контакты</h3>
            <div className={styles.links}>
              <a href="mailto:seoeleve@gmail.com" className={styles.link}>seoeleve@gmail.com</a>
              <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 SeoEleven. Все права защищены.</p>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

