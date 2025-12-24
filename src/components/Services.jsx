import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Target, ShoppingBag, Bot, Workflow, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <h2>Что мы делаем</h2>
        <p>
          Комплексные цифровые услуги для развития вашего бизнеса в интернете
        </p>
      </div>
      
      <div className={styles.gridContainer}>
        <div className={`${styles.dominantBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Sparkles size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3>SEO-продвижение под AI (GEO)</h3>
            <p>
              Оптимизация сайта для появления в ответах AI-ассистентов, нейросетей и поисковых систем нового поколения. 
              GEO (Generative Engine Optimization) фокусируется на структурированном контенте, который AI-системы 
              могут корректно интерпретировать и использовать в ответах.
            </p>
          </div>
          <Link to="/services/ai-seo" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.secondaryLargeBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Search size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Комплексное SEO-продвижение</h3>
            <p>
              Полноценное продвижение сайта в поисковых системах с комплексным подходом. 
              Включает техническую оптимизацию, работу с контентом, ссылочное продвижение, 
              аналитику и постоянное развитие для роста органического трафика.
            </p>
          </div>
          <Link to="/uslugi/seo-prodvizhenie" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.mediumBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <TrendingUp size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Контекстная реклама</h3>
            <p>
              Настройка и ведение контекстной рекламы в Яндекс.Директ и Google Ads для привлечения целевого трафика. 
              Один из самых эффективных способов быстро получить целевой трафик и заявки с оптимизацией 
              для максимальной эффективности.
            </p>
          </div>
          <Link to="/uslugi/kontekstnaya-reklama" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.mediumBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Target size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Таргетированная реклама</h3>
            <p>
              Настройка и ведение таргетированной рекламы в социальных сетях для привлечения целевой аудитории. 
              Эффективный способ привлечь внимание целевой аудитории в ВКонтакте, Facebook, Instagram, 
              Telegram и других платформах.
            </p>
          </div>
          <Link to="/uslugi/targetirovannaya-reklama" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Bot size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Telegram-боты и Mini Apps</h3>
            <p>Автоматизация коммуникаций, продаж и сервисов через Telegram-боты и мини-приложения</p>
          </div>
          <Link to="/services/telegram-bots" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Workflow size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Автоматизация без кода</h3>
            <p>Автоматизация бизнес-процессов через no-code платформы (Make, n8n) без программирования</p>
          </div>
          <Link to="/services/no-code-automation" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Code size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Веб-разработка</h3>
            <p>Создание сайтов и веб-приложений на современных технологиях, от лендингов до сложных платформ</p>
          </div>
          <Link to="/services/web-development" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <ShoppingBag size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>SEO для маркетплейсов</h3>
            <p>Оптимизация карточек товаров и продвижение на Wildberries, Ozon для увеличения продаж</p>
          </div>
          <Link to="/uslugi/seo-dlya-marketpleysov" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

