/**
 * Компонент для рендеринга страниц, созданных в PageBuilder
 */

import React, { useEffect, useRef } from 'react';

const PageRenderer = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !content) return;

    try {
      // Парсим JSON контент
      const data = typeof content === 'string' ? JSON.parse(content) : content;
      
      if (data.html && data.css) {
        // Создаем стили
        const styleId = 'page-builder-styles';
        let styleElement = document.getElementById(styleId);
        
        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }
        
        styleElement.textContent = data.css;
        
        // Устанавливаем HTML
        containerRef.current.innerHTML = data.html;
      } else if (data.html) {
        containerRef.current.innerHTML = data.html;
      } else if (typeof content === 'string' && content.trim().startsWith('<')) {
        // Если это просто HTML строка
        containerRef.current.innerHTML = content;
      }
    } catch (error) {
      console.error('Error rendering page content:', error);
      // Fallback: просто показываем как есть
      if (typeof content === 'string') {
        containerRef.current.innerHTML = content;
      }
    }
  }, [content]);

  return (
    <div 
      ref={containerRef} 
      className="page-builder-content"
      style={{
        width: '100%',
        minHeight: '100px'
      }}
    />
  );
};

export default PageRenderer;

