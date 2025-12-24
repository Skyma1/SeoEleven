import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2,
  XCircle,
  Search,
  BarChart3,
  Rocket,
  Settings,
  Users,
  Shield,
  Calculator
} from 'lucide-react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      {/* БЛОК 1. HERO — ПОЗИЦИОНИРОВАНИЕ */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Мы — SeoEleven, которая работает на результат, а не отчёты
          </h1>
          <p className={styles.heroSubtitle}>
            SEO, GEO (AI SEO), реклама, разработка и автоматизация для малого и среднего бизнеса
          </p>
          <p className={styles.heroDescription}>
            Мы фокусируемся на измеримых бизнес-результатах, стратегическом подходе и осмысленной работе. 
            Не обещаем быстрых чудес, но гарантируем прозрачность, честность и фокус на том, что реально 
            даёт рост вашему бизнесу.
          </p>
          <Link to="/" className={styles.heroCTA}>
            Посмотреть услуги
            <ArrowRight size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* БЛОК 2. КТО МЫ И КАК ДУМАЕМ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Кто мы и как думаем</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <XCircle size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.valueTitle}>Не продаём «волшебные кнопки»</h3>
            <p className={styles.valueDescription}>
              Не обещаем мгновенных результатов или универсальных решений. 
              Каждый проект требует анализа, стратегии и времени.
            </p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Target size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.valueTitle}>Не работаем без стратегии</h3>
            <p className={styles.valueDescription}>
              Каждое действие должно быть обосновано бизнес-целями. 
              Без понимания контекста и задач не берёмся за проект.
            </p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Lightbulb size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.valueTitle}>Не обещаем быстрых чудес</h3>
            <p className={styles.valueDescription}>
              SEO, GEO и развитие бизнеса — это долгосрочные процессы. 
              Мы честно говорим о сроках и реалистичных ожиданиях.
            </p>
          </div>
        </div>
        <div className={`${styles.valueCard} ${styles.valueCardDominant}`}>
          <div className={styles.valueIcon}>
            <TrendingUp size={24} strokeWidth={1.5} />
          </div>
          <h3 className={styles.valueTitle}>Фокусируемся на том, что даёт рост</h3>
          <p className={styles.valueDescription}>
            Измеримые бизнес-метрики важнее технических KPI. 
            Мы работаем над тем, что реально влияет на продажи, заявки и развитие бизнеса.
          </p>
        </div>
      </section>

      {/* БЛОК 3. ЧЕМ МЫ ОТЛИЧАЕМСЯ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Чем мы отличаемся от типичных агентств</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonColumn}>
            <div className={styles.comparisonHeader}>
              <XCircle size={20} strokeWidth={1.5} />
              <h3>Типичное агентство</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>KPI ради KPI</li>
              <li>Отчёты ради отчётов</li>
              <li>SEO по чек-листу</li>
              <li>Универсальные шаблоны</li>
            </ul>
          </div>
          
          <div className={`${styles.comparisonColumn} ${styles.comparisonColumnUs}`}>
            <div className={styles.comparisonHeader}>
              <CheckCircle2 size={20} strokeWidth={1.5} />
              <h3>Мы</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>Бизнес-метрики</li>
              <li>GEO и AI-видимость</li>
              <li>Кастомные стратегии</li>
              <li>Автоматизация и масштабирование</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 4. НАШ ПОДХОД К РАБОТЕ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Наш подход к работе</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ и диагностика</h3>
            <p className={styles.stepDescription}>
              Изучаем текущее состояние проекта, бизнес-контекст, конкурентов и потенциал роста.
            </p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Стратегия под цели бизнеса</h3>
            <p className={styles.stepDescription}>
              Формируем план действий, привязанный к вашим бизнес-целям, а не к абстрактным метрикам.
            </p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Внедрение и тестирование</h3>
            <p className={styles.stepDescription}>
              Реализуем изменения поэтапно, тестируем гипотезы и корректируем подход на основе данных.
            </p>
          </div>
          
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Контроль и корректировка</h3>
            <p className={styles.stepDescription}>
              Отслеживаем результаты, анализируем эффективность и вносим изменения для улучшения показателей.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. НАША ЭКСПЕРТИЗА И ФОКУС */}
      <section className={styles.section}>
        <div className={styles.expertiseBlock}>
          <h2 className={styles.sectionTitle}>Наша экспертиза и фокус</h2>
          <div className={styles.expertiseContent}>
            <p className={styles.expertiseParagraph}>
              <strong>SEO и GEO — наш основной фокус.</strong> Мы работаем с проектами, где важен реальный рост, 
              а не просто «галочка» в отчёте. Не берём все ниши подряд и не работаем с проектами без потенциала.
            </p>
            <p className={styles.expertiseParagraph}>
              Мы специализируемся на малом и среднем бизнесе, который готов инвестировать в долгосрочное развитие. 
              Если ваш проект требует быстрых результатов за месяц или универсальных решений — мы честно скажем, 
              что это не наш формат.
            </p>
            <p className={styles.expertiseParagraph}>
              Наша экспертиза — это не только технические навыки, но и понимание бизнеса, умение видеть связи 
              между SEO, GEO, рекламой и разработкой. Мы не разбрасываемся, а фокусируемся на том, что умеем делать хорошо.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 6. КОМАНДА */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Команда</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamIcon}>
              <Search size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.teamRole}>SEO-стратег</h3>
            <p className={styles.teamDescription}>
              Разрабатывает стратегии продвижения, анализирует конкурентов и выстраивает долгосрочные планы развития.
            </p>
          </div>
          
          <div className={styles.teamCard}>
            <div className={styles.teamIcon}>
              <Rocket size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.teamRole}>Разработчик</h3>
            <p className={styles.teamDescription}>
              Создаёт и дорабатывает сайты, настраивает автоматизацию и обеспечивает техническую основу для роста.
            </p>
          </div>
          
          <div className={styles.teamCard}>
            <div className={styles.teamIcon}>
              <BarChart3 size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.teamRole}>Аналитик</h3>
            <p className={styles.teamDescription}>
              Отслеживает метрики, интерпретирует данные и помогает принимать решения на основе фактов.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 7. ПРОЗРАЧНОСТЬ */}
      <section className={styles.section}>
        <div className={styles.transparencyBlock}>
          <div className={styles.transparencyIcon}>
            <Shield size={32} strokeWidth={1.5} />
          </div>
          <h2 className={styles.transparencyTitle}>Прозрачность</h2>
          <div className={styles.transparencyContent}>
            <p className={styles.transparencyParagraph}>
              <strong>Не даём гарантий позиций.</strong> Поисковые системы и AI-системы меняются, конкуренция растёт. 
              Мы работаем над улучшением видимости, но не обещаем конкретных позиций в выдаче.
            </p>
            <p className={styles.transparencyParagraph}>
              <strong>Не используем серые схемы.</strong> Все методы продвижения — белые и долгосрочные. 
              Мы не покупаем ссылки массово, не используем накрутки и не рискуем репутацией вашего проекта.
            </p>
            <p className={styles.transparencyParagraph}>
              <strong>Не берём проекты без перспективы роста.</strong> Если мы видим, что проект не имеет потенциала 
              или не подходит под наш формат работы, мы честно об этом говорим. Лучше отказаться сразу, чем работать 
              без результата.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 8. ФИНАЛЬНЫЙ CTA */}
      <section className={styles.section}>
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Понять, подойдёт ли вам наш формат</h2>
          <p className={styles.ctaDescription}>
            Расскажите о вашем проекте — мы оценим потенциал и честно скажем, сможем ли помочь.
          </p>
          <Link 
            to="/" 
            className={styles.ctaButton}
            onClick={(e) => {
              // Сохраняем информацию о том, что нужно прокрутить к калькулятору
              sessionStorage.setItem('scrollToCalculator', 'true');
            }}
          >
            <Calculator size={20} strokeWidth={1.5} />
            Рассчитать стоимость проекта
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

