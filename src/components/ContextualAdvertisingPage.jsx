import React from 'react';
import { ArrowRight, Check, X, TrendingUp, Target, BarChart3, DollarSign, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const ContextualAdvertisingPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Контекстная реклама', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Контекстная реклама</h1>
          <p className={styles.heroSubtitle}>
            Настройка и ведение контекстной рекламы в Яндекс.Директ и Google Ads для привлечения целевого трафика
          </p>
          <p className={styles.heroDescription}>
            Контекстная реклама позволяет показывать ваши объявления пользователям, которые ищут 
            ваши товары или услуги в поисковых системах. Это один из самых эффективных способов 
            быстро получить целевой трафик и заявки. Мы настраиваем и ведём рекламные кампании, 
            оптимизируем их для максимальной эффективности и снижения стоимости привлечения клиентов.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить рекламу
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
              <li>Компании, которым нужен быстрый результат и трафик</li>
              <li>Бизнесы с чётко определённой целевой аудиторией</li>
              <li>Проекты с измеримыми целями (заявки, продажи, звонки)</li>
              <li>Компании с готовым сайтом и посадочными страницами</li>
              <li>Бизнесы, готовые инвестировать в рекламу</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без готового сайта или посадочных страниц</li>
              <li>Бизнесы с очень низкой конверсией сайта</li>
              <li>Компании без бюджета на рекламу</li>
              <li>Ниши с очень высокой стоимостью клика</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Как работает контекстная реклама</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Контекстная реклама показывает ваши объявления пользователям, которые вводят 
              релевантные запросы в поисковых системах. Когда пользователь ищет что-то, связанное 
              с вашим бизнесом, ваше объявление появляется в результатах поиска или на сайтах 
              тематической рекламной сети.
            </p>
            <p className={styles.paragraph}>
              Эффективность рекламы зависит от правильной настройки: выбора ключевых слов, написания 
              объявлений, настройки ставок, создания релевантных посадочных страниц. Мы настраиваем 
              кампании так, чтобы привлекать именно тех пользователей, которые с высокой вероятностью 
              станут клиентами, и оптимизируем для снижения стоимости привлечения.
            </p>
            <p className={styles.paragraph}>
              Ведение рекламы включает постоянный мониторинг, оптимизацию ставок, тестирование объявлений, 
              анализ эффективности и корректировку стратегии. Это позволяет постоянно улучшать результаты 
              и снижать стоимость привлечения клиентов.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как мы работаем</h2>
        <div className={styles.processGrid}>
          <div className={`${styles.processStep} ${styles.processStepDominant}`}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ и стратегия</h3>
            <p className={styles.stepDescription}>
              Изучаем бизнес, целевую аудиторию, конкурентов. Определяем цели рекламы, выбираем 
              платформы (Яндекс.Директ, Google Ads), формируем стратегию.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Подготовка</h3>
            <p className={styles.stepDescription}>
              Собираем семантическое ядро, пишем объявления, готовим посадочные страницы, 
              настраиваем цели и аналитику.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Запуск</h3>
            <p className={styles.stepDescription}>
              Настраиваем кампании, запускаем рекламу, настраиваем ставки и таргетинг, 
              подключаем аналитику.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Мониторим результаты, оптимизируем ставки, тестируем объявления, исключаем 
              неэффективные запросы, улучшаем конверсию.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Ведение</h3>
            <p className={styles.stepDescription}>
              Постоянно ведём рекламу, анализируем эффективность, корректируем стратегию, 
              отчитываемся о результатах.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <TrendingUp size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка кампаний</h3>
            <p className={styles.serviceDescription}>
              Создание и настройка рекламных кампаний в Яндекс.Директ и Google Ads с правильной 
              структурой и таргетингом
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Семантика и объявления</h3>
            <p className={styles.serviceDescription}>
              Сбор семантического ядра, написание объявлений, создание релевантных посадочных страниц
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Аналитика и отчёты</h3>
            <p className={styles.serviceDescription}>
              Настройка аналитики, отслеживание конверсий, регулярные отчёты о результатах
            </p>
          </div>
          <div className={styles.serviceItem}>
            <DollarSign size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация бюджета</h3>
            <p className={styles.serviceDescription}>
              Оптимизация ставок, распределение бюджета, снижение стоимости привлечения клиентов
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Ведение и развитие</h3>
            <p className={styles.serviceDescription}>
              Постоянное ведение рекламы, тестирование, оптимизация, развитие кампаний
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.resultsBlock}>
          <h2 className={styles.sectionTitle}>Что обычно получают клиенты</h2>
          <div className={styles.resultsContent}>
            <p className={styles.paragraph}>
              Клиенты получают целевой трафик и заявки уже в первые дни после запуска рекламы. 
              При правильной настройке контекстная реклама даёт быстрый и измеримый результат. 
              Мы оптимизируем кампании для снижения стоимости привлечения клиентов и повышения 
              конверсии.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от ниши, конкурентности, качества сайта и посадочных страниц. 
              Обычно первые результаты видны в течение недели, стабильная работа — через 2–4 недели 
              после запуска.
            </p>
            <p className={styles.paragraph}>
              Мы работаем на результат: снижаем стоимость клика, повышаем конверсию, увеличиваем 
              количество заявок при том же бюджете. Отчитываемся о результатах и прозрачно показываем, 
              куда идут средства.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.pricingBlock}>
          <h2 className={styles.sectionTitle}>Формат работы и цены</h2>
          <div className={styles.pricingContent}>
            <p className={styles.paragraph}>
              Мы работаем по модели оплаты за настройку и ведение рекламы. Настройка включает создание 
              кампаний, подготовку контента и запуск. Ведение — это постоянная оптимизация и развитие 
              рекламы.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества платформ, сложности настройки, объёма работ по ведению. 
              Настройка начинается от 50 000 рублей, ведение — от 30 000 рублей в месяц. Бюджет на 
              рекламу оплачивается отдельно в рекламные системы.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить рекламу и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextualAdvertisingPage;

