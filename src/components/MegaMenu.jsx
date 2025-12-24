import React from 'react';
import { TrendingUp, Search, Code, Cpu } from 'lucide-react';
import styles from '../styles/MegaMenu.module.css';

const MegaMenu = ({ headerHeight = 73, onClose, onMouseEnter, onMouseLeave }) => {
  const services = {
    performance: {
      title: 'Performance',
      icon: TrendingUp,
      items: [
        { name: 'Контекстная реклама', url: '/services/performance/contextual' },
        { name: 'Медийная реклама', url: '/services/performance/display' },
        { name: 'Конверсионная оптимизация', url: '/services/performance/conversion' },
        { name: 'Аналитика и отчёты', url: '/services/performance/analytics' },
      ]
    },
    seo: {
      title: 'SEO',
      icon: Search,
      items: [
        { name: 'Техническое SEO', url: '/services/seo/technical' },
        { name: 'Контент-стратегия', url: '/services/seo/content' },
        { name: 'Локальное SEO', url: '/services/seo/local' },
        { name: 'SEO-аудит', url: '/services/seo/audit' },
      ]
    },
    development: {
      title: 'Development',
      icon: Code,
      items: [
        { name: 'Веб-разработка', url: '/services/development/web' },
        { name: 'Мобильные приложения', url: '/services/development/mobile' },
        { name: 'E-commerce платформы', url: '/services/development/ecommerce' },
        { name: 'Интеграции и API', url: '/services/development/integrations' },
      ]
    },
    tech: {
      title: 'Tech & AI',
      icon: Cpu,
      items: [
        { name: 'Автоматизация процессов', url: '/services/tech/automation' },
        { name: 'AI и машинное обучение', url: '/services/tech/ai' },
        { name: 'Облачные решения', url: '/services/tech/cloud' },
        { name: 'Техническая поддержка', url: '/services/tech/support' },
      ]
    }
  };

  return (
    <div 
      className={styles.megaMenu}
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className={styles.megaMenuOverlay} onClick={onClose}></div>
      <div 
        className={styles.megaMenuContent}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.megaMenuContainer}>
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.performance.icon size={20} strokeWidth={1.5} />
            <h3>{services.performance.title}</h3>
          </div>
          <ul className={styles.list}>
            {services.performance.items.map((item, index) => (
              <li key={index}>
                <a href={item.url} className={styles.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.seo.icon size={20} strokeWidth={1.5} />
            <h3>{services.seo.title}</h3>
          </div>
          <ul className={styles.list}>
            {services.seo.items.map((item, index) => (
              <li key={index}>
                <a href={item.url} className={styles.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.development.icon size={20} strokeWidth={1.5} />
            <h3>{services.development.title}</h3>
          </div>
          <ul className={styles.list}>
            {services.development.items.map((item, index) => (
              <li key={index}>
                <a href={item.url} className={styles.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.tech.icon size={20} strokeWidth={1.5} />
            <h3>{services.tech.title}</h3>
          </div>
          <ul className={styles.list}>
            {services.tech.items.map((item, index) => (
              <li key={index}>
                <a href={item.url} className={styles.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

