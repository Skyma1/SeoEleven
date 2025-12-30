import { useEffect } from 'react';

/**
 * Компонент-обертка для новых страниц с Tailwind CSS
 * Подключает необходимые шрифты для новых страниц
 */
function TailwindWrapper({ children }) {
  useEffect(() => {
    // Подключение Google Fonts (только если еще не подключены)
    if (!document.querySelector('link[href*="Space+Grotesk"]')) {
      const spaceGroteskLink = document.createElement('link');
      spaceGroteskLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;700&display=swap';
      spaceGroteskLink.rel = 'stylesheet';
      spaceGroteskLink.id = 'google-fonts-space-grotesk';
      document.head.appendChild(spaceGroteskLink);
    }

    if (!document.querySelector('link[href*="Material+Symbols+Outlined"]')) {
      const materialSymbolsLink = document.createElement('link');
      materialSymbolsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
      materialSymbolsLink.rel = 'stylesheet';
      materialSymbolsLink.id = 'google-fonts-material-symbols';
      document.head.appendChild(materialSymbolsLink);
    }
  }, []);

  return <>{children}</>;
}

export default TailwindWrapper;
