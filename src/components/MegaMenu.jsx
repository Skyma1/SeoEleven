import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Search, Code, Cpu, Sparkles } from 'lucide-react';
import styles from '../styles/MegaMenu.module.css';

const MegaMenu = forwardRef(({ headerHeight = 73, headerTop = 0, onClose, onMouseEnter, onMouseLeave, onOverlayMouseEnter, isClosing }, ref) => {
  const services = {
    performance: {
      title: 'Реклама и трафик',
      subtitle: 'Трафик и реклама',
      icon: TrendingUp,
      items: [
        { name: 'Контекстная реклама', url: '/uslugi/kontekstnaya-reklama' },
        { name: 'Таргетированная реклама', url: '/uslugi/targetirovannaya-reklama' },
        { name: 'SEO для маркетплейсов (WB, Ozon)', url: '/uslugi/seo-dlya-marketpleysov' },
        { name: 'Яндекс Директ', url: '/uslugi/nastrojka-yandex-direct' },
      ]
    },
    seo: {
      title: 'SEO',
      subtitle: 'Классическое SEO',
      icon: Search,
      items: [
        { name: 'Комплексное SEO-продвижение', url: '/uslugi/seo-prodvizhenie' },
        { name: 'Продвижение молодых сайтов', url: '/uslugi/prodvizhenie-molodyh-sajtov' },
        { name: 'Базовая оптимизация и мета-теги', url: '/uslugi/bazovaya-optimizaciya' },
        { name: 'Статейное продвижение', url: '/uslugi/stateinoe-prodvizhenie' },
        { name: 'Сбор семантического ядра', url: '/uslugi/semanticheskoe-yadro' },
        { name: 'Ссылочное продвижение', url: '/uslugi/ssylki' },
        { name: 'Продвижение по словам', url: '/uslugi/prodvizhenie-po-slovam' },
        { name: 'SEO-аудит (классический)', url: '/uslugi/seo-audit' },
      ]
    },
    development: {
      title: 'Разработка',
      subtitle: 'Разработка и поддержка',
      icon: Code,
      items: [
        { name: 'Веб-разработка', url: '/services/web-development' },
        { name: 'Поддержка и обслуживание', url: '/services/support' },
        { name: 'Настройка хостинга', url: '/services/hosting-setup' },
        { name: 'Дизайн логотипа', url: '/services/logo-design' },
      ]
    },
    tech: {
      title: 'Технологии и ИИ',
      subtitle: 'Флагман и УТП',
      icon: Cpu,
      items: [
        { name: 'AI SEO (GEO)', url: '/services/ai-seo', featured: true },
        { name: 'Telegram-боты и Mini Apps', url: '/services/telegram-bots' },
        { name: 'Автоматизация без кода (Make, n8n)', url: '/services/no-code-automation' },
        { name: 'Индивидуальные скрипты', url: '/services/scripts' },
        { name: 'Продвинутая аналитика и аудит', url: '/services/analytics' },
      ]
    }
  };

  const megaMenuTop = headerTop + headerHeight;

  return (
    <div 
      ref={ref}
      className={styles.megaMenu}
      style={{ 
        '--header-height': `${headerHeight}px`,
        '--mega-menu-top': `${megaMenuTop}px`
      }}
    >
      <div 
        className={styles.megaMenuOverlay} 
        onClick={onClose}
        onMouseEnter={onOverlayMouseEnter}
      ></div>
      <div 
        className={`${styles.megaMenuContent} ${isClosing ? styles.megaMenuContentClosing : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.megaMenuContainer}>
        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.seo.icon size={20} strokeWidth={1.5} />
            <div>
              <h3>{services.seo.title}</h3>
              {services.seo.subtitle && (
                <p className={styles.columnSubtitle}>{services.seo.subtitle}</p>
              )}
            </div>
          </div>
          <ul className={styles.list}>
            {services.seo.items.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={styles.link} onClick={onClose}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.tech.icon size={20} strokeWidth={1.5} />
            <div>
              <h3>{services.tech.title}</h3>
              {services.tech.subtitle && (
                <p className={styles.columnSubtitle}>{services.tech.subtitle}</p>
              )}
            </div>
          </div>
          <ul className={styles.list}>
            {services.tech.items.map((item, index) => (
              <li key={index}>
                {item.featured ? (
                  <Link to={item.url} className={`${styles.link} ${styles.linkFeatured}`} onClick={onClose}>
                    <span className={styles.linkText}>{item.name}</span>
                    <span className={styles.featuredBadge}>
                      <Sparkles size={12} strokeWidth={2} />
                      Новинка
                    </span>
                  </Link>
                ) : (
                  <Link to={item.url} className={styles.link} onClick={onClose}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.development.icon size={20} strokeWidth={1.5} />
            <div>
              <h3>{services.development.title}</h3>
              {services.development.subtitle && (
                <p className={styles.columnSubtitle}>{services.development.subtitle}</p>
              )}
            </div>
          </div>
          <ul className={styles.list}>
            {services.development.items.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={styles.link} onClick={onClose}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.columnHeader}>
            <services.performance.icon size={20} strokeWidth={1.5} />
            <div>
              <h3>{services.performance.title}</h3>
              {services.performance.subtitle && (
                <p className={styles.columnSubtitle}>{services.performance.subtitle}</p>
              )}
            </div>
          </div>
          <ul className={styles.list}>
            {services.performance.items.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={styles.link} onClick={onClose}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
});

MegaMenu.displayName = 'MegaMenu';

export default MegaMenu;

