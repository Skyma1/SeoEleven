import React from 'react';
import { ArrowRight, MessageCircle, TrendingUp, Zap } from 'lucide-react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gridContainer}>
        <div className={styles.dominantBlock}>
          <h1>Цифровые решения для растущего бизнеса</h1>
          <p>
            Помогаем малому и среднему бизнесу добиваться результатов в интернете 
            с помощью стратегического SEO, современной разработки, продуманного дизайна 
            и интеллектуальной автоматизации.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              Начать проект
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
            <button className={styles.secondaryButton}>
              <MessageCircle size={20} strokeWidth={1.5} />
              Связаться с нами
            </button>
          </div>
        </div>
        
        <div className={styles.secondaryBlock}>
          <div className={styles.iconWrapper}>
            <TrendingUp size={24} strokeWidth={1.5} />
          </div>
          <h3>Проверенные результаты</h3>
          <p>Подход на основе данных, направленный на измеримые бизнес-результаты</p>
        </div>
        
        <div className={styles.secondaryBlock}>
          <div className={styles.iconWrapper}>
            <Zap size={24} strokeWidth={1.5} />
          </div>
          <h3>Быстрая реализация</h3>
          <p>Эффективные процессы с учетом ваших сроков и бюджета</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

