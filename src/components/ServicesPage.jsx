import React from 'react';
import { CheckCircle2, Target, Zap, TrendingUp } from 'lucide-react';
import Services from './Services';
import CTA from './CTA';
import styles from '../styles/ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Наши услуги</h1>
          <p className={styles.heroSubtitle}>
            Комплексные цифровые решения для развития вашего бизнеса в интернете
          </p>
          <p className={styles.heroDescription}>
            Мы предлагаем полный спектр услуг по продвижению, разработке и автоматизации. 
            От SEO и GEO-продвижения до создания сайтов и настройки рекламных кампаний — 
            всё для того, чтобы ваш бизнес рос и достигал поставленных целей.
          </p>
        </div>
      </section>

      {/* БЛОК 2. СПИСОК УСЛУГ */}
      <Services />

      {/* БЛОК 3. НАШИ ПРЕИМУЩЕСТВА */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Target size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.advantageTitle}>Фокус на результатах</h3>
            <p className={styles.advantageDescription}>
              Работаем над измеримыми бизнес-метриками, а не абстрактными KPI. 
              Каждое действие направлено на рост продаж и заявок.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <TrendingUp size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.advantageTitle}>Стратегический подход</h3>
            <p className={styles.advantageDescription}>
              Не работаем по шаблонам. Каждый проект начинается с анализа и разработки 
              индивидуальной стратегии под ваши цели.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <Zap size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.advantageTitle}>Комплексные решения</h3>
            <p className={styles.advantageDescription}>
              Объединяем SEO, GEO, разработку, рекламу и автоматизацию в единую систему 
              для максимальной эффективности.
            </p>
          </div>

          <div className={styles.advantageCard}>
            <div className={styles.advantageIcon}>
              <CheckCircle2 size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.advantageTitle}>Прозрачность и честность</h3>
            <p className={styles.advantageDescription}>
              Честно говорим о сроках, реалистичных ожиданиях и потенциале проекта. 
              Не обещаем невыполнимого.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 4. КАК МЫ РАБОТАЕМ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как мы работаем</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ и диагностика</h3>
            <p className={styles.stepDescription}>
              Изучаем ваш проект, бизнес-цели, конкурентов и потенциал роста. 
              Определяем, какие услуги лучше всего подойдут для вашего случая.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Разработка стратегии</h3>
            <p className={styles.stepDescription}>
              Формируем план действий с учётом ваших целей, бюджета и сроков. 
              Предлагаем оптимальное сочетание услуг для достижения результата.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Реализация</h3>
            <p className={styles.stepDescription}>
              Приступаем к работе согласно утверждённому плану. Регулярно отчитываемся 
              о прогрессе и при необходимости корректируем подход.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Контроль и развитие</h3>
            <p className={styles.stepDescription}>
              Отслеживаем результаты, анализируем эффективность и продолжаем развивать проект 
              для достижения новых целей.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. CTA */}
      <section className={styles.section}>
        <CTA />
      </section>
    </>
  );
};

export default ServicesPage;

