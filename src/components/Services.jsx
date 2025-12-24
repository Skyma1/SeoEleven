import React from 'react';
import { Search, Code, Palette, Cpu, ArrowRight } from 'lucide-react';
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
            <Search size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3>SEO и поисковая оптимизация</h3>
            <p>
              Стратегическая оптимизация для улучшения видимости в Google и других 
              поисковых системах. Фокусируемся на техническом SEO, контент-стратегии 
              и локальной оптимизации для привлечения целевой аудитории.
            </p>
          </div>
          <a href="#seo" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className={`${styles.secondaryLargeBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Code size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Разработка</h3>
            <p>
              Веб-приложения и сайты на современных технологиях. 
              От лендингов до сложных платформ — создаем быстрые, безопасные 
              и масштабируемые решения под ваши задачи.
            </p>
          </div>
          <a href="#development" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className={`${styles.mediumBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Palette size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Дизайн</h3>
            <p>
              Дизайн, ориентированный на пользователя, который сочетает 
              эстетику и функциональность. Создаем интуитивные и эффективные интерфейсы.
            </p>
          </div>
          <a href="#design" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className={`${styles.mediumBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Cpu size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Автоматизация</h3>
            <p>
              Автоматизация процессов, которая экономит время и снижает ошибки. 
              Помогаем оптимизировать рабочие процессы и операции.
            </p>
          </div>
          <a href="#automation" className={styles.cardLink}>
            Подробнее
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Code size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Веб-платформы</h3>
            <p>Сложные системы и интеграции</p>
          </div>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Search size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Контент-стратегия</h3>
            <p>Планирование контента с учетом SEO</p>
          </div>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Palette size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>Фирменный стиль</h3>
            <p>Визуальные системы и гайдлайны</p>
          </div>
        </div>
        
        <div className={`${styles.smallBlock} ${styles.block}`}>
          <div className={styles.iconWrapper}>
            <Cpu size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>API-интеграции</h3>
            <p>Подключение инструментов и сервисов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

