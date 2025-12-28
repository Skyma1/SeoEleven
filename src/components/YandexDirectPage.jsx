import React from 'react';
import { ArrowRight, Check, X, Search, Target, BarChart3, Settings, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const YandexDirectPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Настройка Яндекс.Директ', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Настройка Яндекс.Директ</h1>
          <p className={styles.heroSubtitle}>
            Профессиональная настройка и ведение рекламных кампаний в Яндекс.Директ
          </p>
          <p className={styles.heroDescription}>
            Яндекс.Директ — одна из самых эффективных платформ для контекстной рекламы в России. 
            Правильная настройка позволяет привлекать целевой трафик и получать заявки. Мы настраиваем 
            кампании, оптимизируем их для максимальной эффективности и ведём рекламу для постоянного 
            улучшения результатов.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить настройку
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <Check size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому подходит</h2>
            <ul className={styles.list}>
              <li>Компании, работающие на российском рынке</li>
              <li>Бизнесы, которым нужен быстрый результат</li>
              <li>Проекты с готовым сайтом и посадочными страницами</li>
              <li>Компании с измеримыми целями</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без готового сайта</li>
              <li>Бизнесы без бюджета на рекламу</li>
              <li>Компании, работающие только за рубежом</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что включает настройка Яндекс.Директ</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Настройка включает создание структуры кампаний, сбор семантического ядра, написание 
              объявлений, настройку таргетинга, ставок, ретаргетинга, подключение аналитики. Мы 
              настраиваем кампании так, чтобы привлекать именно тех пользователей, которые станут 
              клиентами.
            </p>
            <p className={styles.paragraph}>
              Ведение включает постоянную оптимизацию: корректировку ставок, тестирование объявлений, 
              исключение неэффективных запросов, улучшение конверсии. Это позволяет постоянно улучшать 
              результаты и снижать стоимость привлечения.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 4. КАК МЫ РАБОТАЕМ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как мы работаем</h2>
        <div className={styles.processGrid}>
          <div className={`${styles.processStep} ${styles.processStepDominant}`}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ и стратегия</h3>
            <p className={styles.stepDescription}>
              Изучаем ваш бизнес, целевую аудиторию, конкурентов, цели рекламы, формируем стратегию настройки 
              кампаний в Яндекс.Директ.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Подготовка</h3>
            <p className={styles.stepDescription}>
              Собираем семантическое ядро, пишем объявления, готовим посадочные страницы, настраиваем цели 
              и аналитику.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Настройка и запуск</h3>
            <p className={styles.stepDescription}>
              Создаём структуру кампаний, настраиваем таргетинг, ставки, ретаргетинг, запускаем рекламу, 
              настраиваем аналитику.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Оптимизируем ставки, тестируем объявления, исключаем неэффективные запросы, улучшаем конверсию, 
              снижаем стоимость привлечения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Ведение</h3>
            <p className={styles.stepDescription}>
              Постоянно ведём рекламу, анализируем результаты, развиваем кампании, корректируем стратегию, 
              отчитываемся о результатах.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка кампаний</h3>
            <p className={styles.serviceDescription}>
              Создание структуры кампаний, настройка таргетинга, ставок, ретаргетинга
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Семантика и объявления</h3>
            <p className={styles.serviceDescription}>
              Сбор семантического ядра, написание объявлений, создание посадочных страниц
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Аналитика</h3>
            <p className={styles.serviceDescription}>
              Настройка Яндекс.Метрики, отслеживание конверсий, регулярные отчёты
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация</h3>
            <p className={styles.serviceDescription}>
              Оптимизация ставок, тестирование объявлений, улучшение конверсии
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Ведение</h3>
            <p className={styles.serviceDescription}>
              Постоянное ведение рекламы, развитие кампаний, отчёты о результатах
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 6. РЕЗУЛЬТАТЫ */}
      <section className={styles.section}>
        <div className={styles.resultsBlock}>
          <h2 className={styles.sectionTitle}>Что обычно получают клиенты</h2>
          <div className={styles.resultsContent}>
            <p className={styles.paragraph}>
              Клиенты получают настроенные рекламные кампании в Яндекс.Директ, которые привлекают целевой трафик 
              и приносят заявки или продажи. Реклама настроена оптимально для максимальной эффективности и минимальной 
              стоимости привлечения клиентов.
            </p>
            <p className={styles.paragraph}>
              Результаты видны быстро, обычно в первые недели после запуска: появляется трафик, заявки, продажи. 
              Постоянная оптимизация позволяет улучшать результаты: снижать стоимость клика, повышать конверсию, 
              увеличивать количество заявок при том же бюджете.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: эффективность рекламы зависит от многих факторов: качества посадочных страниц, 
              конверсии сайта, конкурентности ниши, бюджета. Мы настраиваем рекламу оптимально, но результаты 
              также зависят от самого сайта и бизнеса. Постоянное ведение и оптимизация позволяют максимально 
              улучшить результаты.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 7. ФОРМАТ РАБОТЫ И ЦЕНЫ */}
      <section className={styles.section}>
        <div className={styles.pricingBlock}>
          <h2 className={styles.sectionTitle}>Формат работы и цены</h2>
          <div className={styles.pricingContent}>
            <p className={styles.paragraph}>
              Мы работаем в формате проекта для настройки кампаний и по подписке для постоянного ведения. 
              Настройка включает создание структуры, семантики, объявлений, запуск кампаний. Ведение включает 
              постоянную оптимизацию, развитие, отчёты.
            </p>
            <p className={styles.paragraph}>
              Стоимость настройки зависит от сложности задач, количества кампаний, необходимых работ и начинается 
              от 40 000 рублей. Ведение зависит от объёма работ и количества кампаний, начинается от 25 000 рублей 
              в месяц. Бюджет на рекламу оплачивается отдельно в Яндекс.Директ.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить настройку и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default YandexDirectPage;

