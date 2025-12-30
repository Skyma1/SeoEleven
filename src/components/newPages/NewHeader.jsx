import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NewMegaMenu from './NewMegaMenu';
import CTAModal from './CTAModal';

const services = {
  seo: {
    title: 'SEO',
    subtitle: 'Классическое SEO',
    icon: 'search',
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
  tech: {
    title: 'Технологии и ИИ',
    subtitle: 'Флагман и УТП',
    icon: 'smart_toy',
    items: [
      { name: 'AI SEO (GEO)', url: '/services/ai-seo', featured: true },
      { name: 'Telegram-боты и Mini Apps', url: '/services/telegram-bots' },
      { name: 'Автоматизация без кода (Make, n8n)', url: '/services/no-code-automation' },
      { name: 'Индивидуальные скрипты', url: '/services/scripts' },
      { name: 'Продвинутая аналитика и аудит', url: '/services/analytics' },
    ]
  },
  development: {
    title: 'Разработка',
    subtitle: 'Разработка и поддержка',
    icon: 'code',
    items: [
      { name: 'Веб-разработка', url: '/services/web-development' },
      { name: 'Поддержка и обслуживание', url: '/services/support' },
      { name: 'Настройка хостинга', url: '/services/hosting-setup' },
      { name: 'Дизайн логотипа', url: '/services/logo-design' },
    ]
  },
  performance: {
    title: 'Реклама и трафик',
    subtitle: 'Трафик и реклама',
    icon: 'trending_up',
    items: [
      { name: 'Контекстная реклама', url: '/uslugi/kontekstnaya-reklama' },
      { name: 'Таргетированная реклама', url: '/uslugi/targetirovannaya-reklama' },
      { name: 'SEO для маркетплейсов (WB, Ozon)', url: '/uslugi/seo-dlya-marketpleysov' },
      { name: 'Яндекс Директ', url: '/uslugi/nastrojka-yandex-direct' },
    ]
  }
};

function NewHeader({ currentPath }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = currentPath || location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);
  const [expandedServices, setExpandedServices] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMegaMenuClosing, setIsMegaMenuClosing] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(73);
  const [headerTop, setHeaderTop] = useState(0);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const megaMenuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const closingTimeoutRef = useRef(null);
  const isHoveringServicesRef = useRef(false);
  const isHoveringMegaMenuRef = useRef(false);
  const [isCTAModalOpen, setIsCTAModalOpen] = useState(false);

  useEffect(() => {
    const updateHeaderPosition = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderHeight(headerRef.current.offsetHeight);
        setHeaderTop(rect.top);
      }
    };
    
    const handleResize = () => {
      updateHeaderPosition();
      if (window.innerWidth <= 1024 && isMegaMenuOpen) {
        setIsMegaMenuOpen(false);
        setIsMegaMenuClosing(false);
      }
    };

    const handleScroll = () => {
      updateHeaderPosition();
    };
    
    updateHeaderPosition();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMegaMenuOpen]);

  const closeMegaMenu = useCallback(() => {
    setIsMegaMenuClosing(true);
    if (closingTimeoutRef.current) {
      clearTimeout(closingTimeoutRef.current);
    }
    closingTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      setIsMegaMenuClosing(false);
    }, 250);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMegaMenuOpen &&
        event.target instanceof Node &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        closeMegaMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMegaMenuOpen) {
        closeMegaMenu();
      }
    };

    const handleScroll = () => {
      if (isMegaMenuOpen) {
        closeMegaMenu();
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMegaMenuOpen, closeMegaMenu]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
      }
    };
  }, []);

  // Mobile menu body scroll lock
  useEffect(() => {
    if (mobileMenuOpen || isMobileMenuClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, isMobileMenuClosing]);

  const checkAndCloseMenu = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringServicesRef.current && !isHoveringMegaMenuRef.current) {
        closeMegaMenu();
      }
    }, 100);
  }, [closeMegaMenu]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1024) return;
    if (isMegaMenuOpen) {
      closeMegaMenu();
    } else {
      setIsMegaMenuClosing(false);
      setIsMegaMenuOpen(true);
    }
  };

  const handleServicesMouseEnter = () => {
    if (window.innerWidth <= 1024) return;
    isHoveringServicesRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleServicesMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget instanceof Node && megaMenuRef.current && megaMenuRef.current.contains(relatedTarget)) {
      return;
    }
    isHoveringServicesRef.current = false;
    checkAndCloseMenu();
  };

  const handleMegaMenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    isHoveringMegaMenuRef.current = true;
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget instanceof Node && servicesRef.current && servicesRef.current.contains(relatedTarget)) {
      return;
    }
    if (!relatedTarget || !(relatedTarget instanceof Node) || (megaMenuRef.current && !megaMenuRef.current.contains(relatedTarget))) {
      isHoveringMegaMenuRef.current = false;
      checkAndCloseMenu();
    }
  };

  const handleMegaMenuClose = () => {
    closeMegaMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
      setExpandedServices(false);
    }, 300);
  };

  const isActive = (linkPath) => {
    if (linkPath === '/new' && path === '/new') return true;
    if (linkPath !== '/new' && path && path.startsWith(linkPath)) return true;
    return false;
  };

  return (
    <>
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-graphite/5 px-4 sm:px-6 py-4"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link to="/new" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="/images/logo.svg" 
              alt="SEO Eleven" 
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <div 
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              className="relative"
            >
              <Link 
                to="/new/services" 
                className={`text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 ${isActive('/new/services') ? 'text-primary font-bold' : ''}`}
                onClick={handleServicesClick}
              >
                Услуги
                <span className={`material-symbols-outlined text-base transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </Link>
            </div>
            <Link 
              to="/new/cases" 
              className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/new/cases') ? 'text-primary font-bold' : ''}`}
            >
              Кейсы
            </Link>
            <Link 
              to="/new/blog" 
              className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/new/blog') ? 'text-primary font-bold' : ''}`}
            >
              Блог
            </Link>
            <Link 
              to="/new/about" 
              className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/new/about') ? 'text-primary font-bold' : ''}`}
            >
              О нас
            </Link>
            <Link 
              to="/new/team" 
              className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/new/team') ? 'text-primary font-bold' : ''}`}
            >
              Команда
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsCTAModalOpen(true)}
              className="hidden sm:flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-[#c41f18] transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20"
            >
              <span className="truncate">Связаться</span>
            </button>
            <button 
              className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-surface dark:bg-zinc-800 hover:bg-graphite/5 dark:hover:bg-white/5 transition-colors"
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
              aria-label="Меню"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {(mobileMenuOpen || isMobileMenuClosing) && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuClosing ? 'opacity-0' : 'opacity-100'}`}
            onClick={closeMobileMenu}
          ></div>
          {/* Menu Content */}
          <div className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-background-light dark:bg-background-dark shadow-xl flex flex-col ${
            isMobileMenuClosing ? 'mobile-menu-slide-out' : 'mobile-menu-slide-in'
          }`}>
            <div className="flex items-center justify-between px-4 py-4 border-b border-graphite/5">
              <Link to="/new" className="flex items-center gap-3" onClick={closeMobileMenu}>
                <img 
                  src="/images/logo.svg" 
                  alt="SEO Eleven" 
                  className="h-8 w-auto"
                />
              </Link>
              <button 
                className="flex items-center justify-center rounded-lg h-10 w-10 bg-surface dark:bg-zinc-800 hover:bg-graphite/5 dark:hover:bg-white/5 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Закрыть меню"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {/* Services with dropdown */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                  onClick={() => setExpandedServices(!expandedServices)}
                >
                  <span className={isActive('/new/services') ? 'text-primary font-bold' : ''}>Услуги</span>
                  <span className={`material-symbols-outlined text-base transition-transform ${expandedServices ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {expandedServices && (
                  <div className="pl-4 mt-1 space-y-4">
                    {Object.entries(services).map(([key, service]) => (
                      <div key={key} className="pb-4 border-b border-graphite/10 dark:border-white/10 last:border-0">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="material-symbols-outlined text-primary text-lg">{service.icon}</span>
                          <div>
                            <h3 className="text-sm font-semibold text-graphite dark:text-white uppercase tracking-wide">
                              {service.title}
                            </h3>
                            {service.subtitle && (
                              <p className="text-xs text-graphite/60 dark:text-gray-400">{service.subtitle}</p>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item, index) => (
                            <li key={index}>
                              {item.featured ? (
                                <Link
                                  to={item.url}
                                  className="flex items-start gap-2 text-sm text-graphite/70 dark:text-gray-400 hover:text-primary transition-colors block"
                                  onClick={closeMobileMenu}
                                >
                                  <span className="flex-1">{item.name}</span>
                                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wide whitespace-nowrap flex-shrink-0 mt-0.5">
                                    <span className="material-symbols-outlined text-xs">auto_awesome</span>
                                    Новинка
                                  </span>
                                </Link>
                              ) : (
                                <Link
                                  to={item.url}
                                  className="text-sm text-graphite/70 dark:text-gray-400 hover:text-primary transition-colors block"
                                  onClick={closeMobileMenu}
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

              <Link 
                to="/new/cases" 
                className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors ${isActive('/new/cases') ? 'bg-graphite/5 dark:bg-white/5 text-primary' : ''}`}
                onClick={closeMobileMenu}
              >
                Кейсы
              </Link>
              <Link 
                to="/new/blog" 
                className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors ${isActive('/new/blog') ? 'bg-graphite/5 dark:bg-white/5 text-primary' : ''}`}
                onClick={closeMobileMenu}
              >
                Блог
              </Link>
              <Link 
                to="/new/about" 
                className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors ${isActive('/new/about') ? 'bg-graphite/5 dark:bg-white/5 text-primary' : ''}`}
                onClick={closeMobileMenu}
              >
                О нас
              </Link>
              <Link 
                to="/new/team" 
                className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors ${isActive('/new/team') ? 'bg-graphite/5 dark:bg-white/5 text-primary' : ''}`}
                onClick={closeMobileMenu}
              >
                Команда
              </Link>
              <Link 
                to="/new/vacancies" 
                className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-graphite/5 dark:hover:bg-white/5 hover:text-primary transition-colors ${isActive('/new/vacancies') ? 'bg-graphite/5 dark:bg-white/5 text-primary' : ''}`}
                onClick={closeMobileMenu}
              >
                Вакансии
              </Link>
              <button 
                className="w-full mt-4 px-4 py-3 rounded-lg bg-primary hover:bg-[#c41f18] text-white text-base font-bold shadow-lg shadow-primary/20 transition-colors"
                onClick={() => {
                  setIsCTAModalOpen(true);
                  closeMobileMenu();
                }}
              >
                Связаться
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <NewMegaMenu 
          ref={megaMenuRef}
          headerHeight={headerHeight}
          headerTop={headerTop}
          onClose={handleMegaMenuClose}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
          isClosing={isMegaMenuClosing}
        />
      )}

      {/* CTA Modal */}
      <CTAModal 
        isOpen={isCTAModalOpen} 
        onClose={() => setIsCTAModalOpen(false)}
        source="header"
      />
    </>
  );
}

export default NewHeader;

