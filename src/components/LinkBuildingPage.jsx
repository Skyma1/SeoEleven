import React from 'react';
import { ArrowRight, Check, X, Link as LinkIcon, Target, BarChart3, Search } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const LinkBuildingPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Ссылочное продвижение', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Ссылочное продвижение</h1>
          <p className={styles.heroSubtitle}>
            Построение качественной ссылочной массы для улучшения позиций в поисковых системах
          </p>
          <p className={styles.heroDescription}>
            Ссылочное продвижение — это получение качественных внешних ссылок на ваш сайт. 
            Правильно построенная ссылочная масса улучшает авторитет сайта, помогает росту позиций 
            и привлекает трафик. Мы работаем только с качественными источниками и естественными ссылками.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить продвижение
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* БЛОК 2. КОМУ ПОДХОДИТ / КОМУ НЕТ */}
      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <Check size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому нужно ссылочное продвижение</h2>
            <ul className={styles.list}>
              <li>Сайты, которым нужно повысить авторитет и доверие поисковых систем</li>
              <li>Проекты, требующие роста позиций по конкурентным запросам</li>
              <li>Бизнесы с качественным контентом, достойным ссылок</li>
              <li>Компании, готовые работать над долгосрочным ростом</li>
              <li>Проекты, которые уже прошли базовую оптимизацию</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Сайты с низким качеством контента</li>
              <li>Проекты, которым нужен быстрый результат за неделю</li>
              <li>Бизнесы без готового контента для размещения ссылок</li>
              <li>Сайты с техническими проблемами, которые нужно решить сначала</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое ссылочное продвижение</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Ссылочное продвижение — это получение качественных внешних ссылок на ваш сайт с других ресурсов. 
              Поисковые системы используют ссылки как показатель авторитета и доверия: чем больше качественных 
              ссылок указывает на ваш сайт, тем выше его авторитет и тем лучше позиции в поиске. Правильно 
              построенная ссылочная масса — важная часть SEO-продвижения.
            </p>
            <p className={styles.paragraph}>
              Качественные ссылки должны быть релевантными (с тематических сайтов), естественными (не выглядеть 
              как покупные), разнообразными (разные источники, анкоры, типы ссылок). Мы работаем только с 
              качественными источниками, избегая спамных методов, которые могут навредить сайту. Важно получить 
              ссылки естественным путём, через качественный контент и отношения с другими ресурсами.
            </p>
            <p className={styles.paragraph}>
              Ссылочное продвижение — это долгосрочная работа. Качественные ссылки накапливаются постепенно, 
              но создают устойчивый рост авторитета и позиций. Это особенно важно для конкурентных ниш, где 
              ссылочный фактор играет значительную роль в ранжировании.
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
              Анализируем текущую ссылочную массу, конкурентов, определяем стратегию построения ссылок, 
              выбираем приоритетные страницы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Поиск источников</h3>
            <p className={styles.stepDescription}>
              Ищем качественные сайты для размещения ссылок, анализируем их авторитет, релевантность, 
              трафик, оцениваем доноров.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Размещение ссылок</h3>
            <p className={styles.stepDescription}>
              Размещаем ссылки на качественных ресурсах, используем правильные анкоры, разнообразные типы ссылок, 
              естественное распределение.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Мониторинг</h3>
            <p className={styles.stepDescription}>
              Отслеживаем размещённые ссылки, проверяем их индексацию, анализируем влияние на позиции и трафик.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Развитие</h3>
            <p className={styles.stepDescription}>
              Постоянно развиваем ссылочную массу, ищем новые источники, корректируем стратегию на основе результатов.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <LinkIcon size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Поиск источников</h3>
            <p className={styles.serviceDescription}>
              Поиск качественных сайтов для размещения ссылок, анализ доноров
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Размещение</h3>
            <p className={styles.serviceDescription}>
              Размещение ссылок на качественных ресурсах с правильными анкорами
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг</h3>
            <p className={styles.serviceDescription}>
              Отслеживание размещённых ссылок, анализ эффективности
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
              Клиенты получают качественную ссылочную массу, которая повышает авторитет сайта в глазах 
              поисковых систем и способствует росту позиций. Ссылки размещаются на релевантных, качественных 
              ресурсах с правильными анкорами и естественным распределением.
            </p>
            <p className={styles.paragraph}>
              Результаты проявляются постепенно, обычно через 2–4 месяца после начала работ: растёт авторитет 
              сайта, улучшаются позиции по ключевым запросам, увеличивается органический трафик. Качественные 
              ссылки работают долгосрочно и продолжают влиять на позиции.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: ссылочное продвижение — это долгосрочная работа. Качественные ссылки накапливаются 
              постепенно, но создают устойчивый рост. Мы работаем только с качественными источниками и естественными 
              методами, избегая всего, что может навредить сайту.
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
              Мы работаем в формате проекта с фиксированным объёмом работ или по подписке для постоянного 
              построения ссылочной массы. Каждый проект начинается с анализа текущей ситуации и формирования стратегии.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества ссылок, качества источников, сложности размещения и объёма работ. 
              Ссылочное продвижение начинается от 50 000 рублей за проект. При работе по подписке стоимость 
              рассчитывается индивидуально.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить продвижение и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinkBuildingPage;

