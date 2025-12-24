import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import styles from '../styles/Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMegaMenuClosing, setIsMegaMenuClosing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(73);
  const [headerTop, setHeaderTop] = useState(0);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const megaMenuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const closingTimeoutRef = useRef(null);
  const isHoveringServicesRef = useRef(false);
  const isHoveringMegaMenuRef = useRef(false);

  const handleStartProject = () => {
    openModal(null, 'header');
  };

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
      // Закрываем мега-меню при изменении размера окна на мобильное
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

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMegaMenuOpen]);

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

  const closeMegaMenu = () => {
    setIsMegaMenuClosing(true);
    if (closingTimeoutRef.current) {
      clearTimeout(closingTimeoutRef.current);
    }
    closingTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      setIsMegaMenuClosing(false);
    }, 250); // Длительность анимации
  };

  const checkAndCloseMenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringServicesRef.current && !isHoveringMegaMenuRef.current) {
        closeMegaMenu();
      }
    }, 100);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    // На мобильных устройствах мега-меню не показываем (используется мобильное меню)
    if (window.innerWidth <= 1024) return;
    if (isMegaMenuOpen) {
      closeMegaMenu();
    } else {
      setIsMegaMenuClosing(false);
      setIsMegaMenuOpen(true);
    }
  };

  const handleServicesMouseEnter = () => {
    // На мобильных устройствах не открываем мега-меню по hover
    if (window.innerWidth <= 1024) return;
    isHoveringServicesRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleServicesMouseLeave = (e) => {
    // На мобильных устройствах не обрабатываем mouseleave
    if (window.innerWidth <= 1024) return;
    // Не закрываем меню, если курсор переходит в megaMenuContent
    const relatedTarget = e?.relatedTarget;
    // Проверяем, что relatedTarget является Node перед вызовом contains
    if (relatedTarget && relatedTarget instanceof Node && megaMenuRef.current && megaMenuRef.current.contains(relatedTarget)) {
      return;
    }
    isHoveringServicesRef.current = false;
    checkAndCloseMenu();
  };

  const handleMegaMenuMouseEnter = () => {
    // На мобильных устройствах не обрабатываем mouseenter
    if (window.innerWidth <= 1024) return;
    isHoveringMegaMenuRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuMouseLeave = (e) => {
    // На мобильных устройствах не обрабатываем mouseleave
    if (window.innerWidth <= 1024) return;
    // Не закрываем меню, если курсор переходит в navItem
    const relatedTarget = e?.relatedTarget;
    // Проверяем, что relatedTarget является Node перед вызовом contains
    if (relatedTarget && relatedTarget instanceof Node && servicesRef.current && servicesRef.current.contains(relatedTarget)) {
      return;
    }
    // Если курсор уходит за пределы мега-меню (в overlay или за пределы), закрываем меню
    if (!relatedTarget || !(relatedTarget instanceof Node) || (megaMenuRef.current && !megaMenuRef.current.contains(relatedTarget))) {
      isHoveringMegaMenuRef.current = false;
      checkAndCloseMenu();
    }
  };

  const handleMegaMenuOverlayMouseEnter = () => {
    // Когда курсор попадает на overlay (за пределы контента), закрываем меню
    isHoveringMegaMenuRef.current = false;
    closeMegaMenu();
  };

  const handleMegaMenuClose = () => {
    closeMegaMenu();
  };


  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>SeoEleven</Link>
          
          <nav className={styles.nav}>
            <div 
              className={styles.navItem}
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              style={{ position: 'relative' }}
            >
              <Link 
                to="/services" 
                className={styles.navLink}
                onClick={handleServicesClick}
              >
                Услуги
                <ChevronDown 
                  size={16} 
                  strokeWidth={1.5} 
                  className={`${styles.chevron} ${isMegaMenuOpen ? styles.chevronOpen : ''}`}
                />
              </Link>
            </div>
            <Link to="/cases" className={styles.navLink}>Кейсы</Link>
            <Link to="/blog" className={styles.navLink}>Блог</Link>
            <Link to="/about" className={styles.navLink}>О нас</Link>
            <Link to="/contact" className={styles.navLink}>Контакты</Link>
            <button className={styles.ctaButton} onClick={handleStartProject}>Начать проект</button>
          </nav>
          
          <button 
            className={styles.mobileMenu} 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>
      {isMegaMenuOpen && (
        <MegaMenu 
          ref={megaMenuRef}
          headerHeight={headerHeight}
          headerTop={headerTop}
          onClose={handleMegaMenuClose}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
          onOverlayMouseEnter={handleMegaMenuOverlayMouseEnter}
          isClosing={isMegaMenuClosing}
        />
      )}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;

