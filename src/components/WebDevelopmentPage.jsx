import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, X, Code, Smartphone, Zap, Settings, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const WebDevelopmentPage = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/contact');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Веб-разработка</h1>
          <p className={styles.heroSubtitle}>
            Создание сайтов и веб-приложений на современных технологиях
          </p>
          <p className={styles.heroDescription}>
            Мы создаём сайты и веб-приложения, которые работают быстро, безопасно и эффективно. 
            От лендингов до сложных платформ — используем современные технологии и лучшие практики 
            для создания решений, которые решают бизнес-задачи и обеспечивают отличный пользовательский опыт.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить проект
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
            <h2 className={styles.sectionTitle}>Кому подходит веб-разработка</h2>
            <ul className={styles.list}>
              <li>Компании, которым нужен сайт для представления бизнеса в интернете</li>
              <li>Бизнесы, требующие веб-приложение для автоматизации процессов</li>
              <li>Проекты, которым нужен интернет-магазин или платформа для продаж</li>
              <li>Стартапы, которым нужен MVP для тестирования идеи</li>
              <li>Компании с устаревшими сайтами, требующими обновления</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без чётко определённых требований и целей</li>
              <li>Компании, которым нужен только шаблонный сайт без доработок</li>
              <li>Бизнесы без ресурсов для поддержки и развития сайта</li>
              <li>Проекты с нереалистичными сроками или бюджетом</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое современная веб-разработка</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Современная веб-разработка — это создание сайтов и приложений, которые работают быстро, 
              безопасно и предоставляют отличный пользовательский опыт. Мы используем актуальные технологии, 
              фреймворки и подходы, которые обеспечивают надёжность, масштабируемость и простоту поддержки.
            </p>
            <p className={styles.paragraph}>
              Разработка включает создание интерфейса, программирование функционала, настройку серверной части, 
              интеграцию с внешними системами, оптимизацию производительности и SEO. Мы создаём решения, 
              которые не только выглядят хорошо, но и эффективно решают бизнес-задачи.
            </p>
            <p className={styles.paragraph}>
              Современные сайты должны быть адаптивными для всех устройств, быстро загружаться, быть безопасными 
              и удобными в использовании. Мы учитываем все эти аспекты при разработке и создаём решения, 
              которые будут работать долго и эффективно.
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
            <h3 className={styles.stepTitle}>Анализ и планирование</h3>
            <p className={styles.stepDescription}>
              Изучаем бизнес, цели проекта, целевую аудиторию, требования. Определяем функционал, 
              технологии, структуру и формируем план разработки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Проектирование</h3>
            <p className={styles.stepDescription}>
              Проектируем структуру сайта, интерфейсы, пользовательские сценарии, архитектуру, 
              базу данных, интеграции.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Разработка</h3>
            <p className={styles.stepDescription}>
              Разрабатываем сайт или приложение: создаём интерфейс, программируем функционал, 
              настраиваем сервер, интегрируем системы, оптимизируем.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Тестирование</h3>
            <p className={styles.stepDescription}>
              Тестируем функционал, совместимость, производительность, безопасность, удобство использования.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Запуск и поддержка</h3>
            <p className={styles.stepDescription}>
              Запускаем проект, обучаем команду работе с системой, обеспечиваем техническую поддержку 
              и дальнейшее развитие.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Code size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка</h3>
            <p className={styles.serviceDescription}>
              Создание сайтов и веб-приложений на современных технологиях
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Smartphone size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Адаптивность</h3>
            <p className={styles.serviceDescription}>
              Адаптивный дизайн для всех устройств, мобильная оптимизация
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Производительность</h3>
            <p className={styles.serviceDescription}>
              Оптимизация скорости загрузки, производительности, SEO
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Интеграции</h3>
            <p className={styles.serviceDescription}>
              Интеграция с CRM, платежными системами, API и другими сервисами
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
              Клиенты получают рабочий сайт или веб-приложение, которое решает их бизнес-задачи. 
              Сайт работает быстро, выглядит профессионально, удобен для пользователей и готов 
              к дальнейшему развитию. Это основа для представления бизнеса в интернете и привлечения клиентов.
            </p>
            <p className={styles.paragraph}>
              Современная разработка обеспечивает долгосрочную работу сайта без необходимости 
              частых переделок. Решение масштабируется под рост бизнеса, легко поддерживается 
              и развивается. Интеграции с CRM, платежными системами и другими сервисами автоматизируют 
              процессы и повышают эффективность.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от сложности проекта и объёма работ. Простые лендинги могут быть 
              готовы за 2–4 недели, комплексные платформы — за 2–4 месяца. Мы всегда обсуждаем сроки 
              и этапы работы заранее.
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
              Стоимость зависит от сложности проекта. Начинается от 100 000 рублей.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить проект и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;

