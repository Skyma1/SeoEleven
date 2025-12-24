import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import styles from '../styles/MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = React.useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const services = {
    performance: {
      title: 'Performance',
      subtitle: 'Трафик и реклама',
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
      title: 'Development',
      subtitle: 'Разработка и поддержка',
      items: [
        { name: 'Web development', url: '/services/web-development' },
        { name: 'Support & maintenance', url: '/services/support' },
        { name: 'Hosting setup', url: '/services/hosting-setup' },
        { name: 'Logo design', url: '/services/logo-design' },
      ]
    },
    tech: {
      title: 'Tech & AI',
      subtitle: 'Флагман и УТП',
      items: [
        { name: 'AI SEO (GEO)', url: '/services/ai-seo', featured: true },
        { name: 'Telegram bots & Mini Apps', url: '/services/telegram-bots' },
        { name: 'No-code automation (Make, n8n)', url: '/services/no-code-automation' },
        { name: 'Custom scripts', url: '/services/scripts' },
        { name: 'Advanced analytics & audit', url: '/services/analytics' },
      ]
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
      <div className={styles.mobileMenuOverlay} onClick={onClose}></div>
      <div className={styles.mobileMenuContent}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.logo}>Студия</div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть меню">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        <nav className={styles.mobileNav}>
          <div className={styles.mobileNavItem}>
            <button 
              className={styles.mobileNavLink}
              onClick={() => toggleSection('services')}
            >
              Услуги
              {expandedSection === 'services' ? (
                <ChevronUp size={20} strokeWidth={1.5} />
              ) : (
                <ChevronDown size={20} strokeWidth={1.5} />
              )}
            </button>
            {expandedSection === 'services' && (
              <div className={styles.mobileSubmenu}>
                {Object.entries(services).map(([key, service]) => (
                  <div key={key} className={styles.mobileSubmenuSection}>
                    <div className={styles.mobileSubmenuHeader}>
                      <h3 className={styles.mobileSubmenuTitle}>{service.title}</h3>
                      {service.subtitle && (
                        <p className={styles.mobileSubmenuSubtitle}>{service.subtitle}</p>
                      )}
                    </div>
                    <ul className={styles.mobileSubmenuList}>
                      {service.items.map((item, index) => (
                        <li key={index}>
                          {item.featured ? (
                            <Link 
                              to={item.url} 
                              className={`${styles.mobileSubmenuLink} ${styles.mobileSubmenuLinkFeatured}`}
                              onClick={onClose}
                            >
                              {item.name}
                              <span className={styles.mobileFeaturedBadge}>
                                <Sparkles size={12} strokeWidth={2} />
                                Новинка
                              </span>
                            </Link>
                          ) : (
                            <Link 
                              to={item.url} 
                              className={styles.mobileSubmenuLink}
                              onClick={onClose}
                            >
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/cases" className={styles.mobileNavLink} onClick={onClose}>Кейсы</Link>
          <Link to="/blog" className={styles.mobileNavLink} onClick={onClose}>Блог</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={onClose}>О нас</Link>
          <Link to="/contact" className={styles.mobileNavLink} onClick={onClose}>Контакты</Link>
          
          <button className={styles.mobileCtaButton} onClick={onClose}>
            Начать проект
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;


