import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import Quiz from './Quiz';
import CTA from './CTA';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Обработка якорных ссылок после загрузки или изменения location
    const shouldScroll = location.hash === '#calculator' || sessionStorage.getItem('scrollToCalculator') === 'true';
    
    if (shouldScroll) {
      // Удаляем флаг из sessionStorage
      sessionStorage.removeItem('scrollToCalculator');
      
      // Увеличиваем задержку для полного рендера всех компонентов
      const scrollToCalculator = () => {
        const element = document.getElementById('calculator');
        if (element) {
          const headerHeight = 73; // Высота хедера
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Если элемент еще не найден, пробуем еще раз через небольшую задержку
          setTimeout(scrollToCalculator, 50);
        }
      };
      
      setTimeout(scrollToCalculator, 300);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Quiz />
      <CTA />
    </>
  );
};

export default Home;

