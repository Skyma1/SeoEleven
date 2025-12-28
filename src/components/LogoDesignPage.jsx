import React from 'react';
import { ArrowRight, Check, X, Palette, Target, FileText, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const LogoDesignPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Дизайн логотипа', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Дизайн логотипа</h1>
          <p className={styles.heroSubtitle}>
            Создание уникального логотипа, который отражает суть вашего бренда
          </p>
          <p className={styles.heroDescription}>
            Логотип — это визуальная идентичность вашего бренда. Мы создаём логотипы, которые 
            запоминаются, отражают ценности компании и работают в различных контекстах. От концепции 
            до финальных файлов — полный цикл создания логотипа.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить дизайн
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
            <h2 className={styles.sectionTitle}>Кому нужен дизайн логотипа</h2>
            <ul className={styles.list}>
              <li>Новые компании, создающие визуальную идентичность</li>
              <li>Бизнесы с устаревшими логотипами, требующими обновления</li>
              <li>Компании, которые хотят улучшить узнаваемость бренда</li>
              <li>Проекты, готовые инвестировать в профессиональный дизайн</li>
              <li>Бизнесы, которым нужен уникальный и запоминающийся логотип</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Компании, которые уже имеют устраивающий их логотип</li>
              <li>Проекты, требующие только шаблонных решений</li>
              <li>Бизнесы без чёткого понимания того, что они хотят</li>
              <li>Компании, которым нужен только быстрый результат без доработок</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что включает дизайн логотипа</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Дизайн логотипа — это создание визуального символа, который представляет ваш бренд. 
              Хороший логотип запоминается, отражает ценности компании, работает в различных контекстах 
              и масштабах. Логотип — основа визуальной идентичности, которая формирует первое впечатление 
              и помогает в узнаваемости бренда.
            </p>
            <p className={styles.paragraph}>
              Процесс создания включает анализ бренда, конкурентов, целевой аудитории, разработку концепций, 
              доработку выбранного варианта и подготовку файлов для использования. Важно, чтобы логотип 
              работал как в большом размере (на билборде), так и в маленьком (в социальных сетях), 
              был читаемым и узнаваемым.
            </p>
            <p className={styles.paragraph}>
              Профессиональный дизайн логотипа учитывает психологию восприятия, тренды, но при этом 
              создаёт уникальное решение, которое будет актуально долгие годы. Логотип должен отражать 
              суть бренда и помогать в коммуникации с целевой аудиторией.
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
            <h3 className={styles.stepTitle}>Исследование</h3>
            <p className={styles.stepDescription}>
              Изучаем ваш бренд, ценности, целевую аудиторию, конкурентов. Определяем направление 
              и концепцию логотипа.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Концепции</h3>
            <p className={styles.stepDescription}>
              Разрабатываем несколько концепций логотипа с разными подходами и стилями для выбора направления.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Доработка</h3>
            <p className={styles.stepDescription}>
              Дорабатываем выбранную концепцию: уточняем детали, цвета, типографику, тестируем в разных контекстах.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Финальная версия</h3>
            <p className={styles.stepDescription}>
              Создаём финальную версию логотипа во всех необходимых вариантах: цветном, чёрно-белом, 
              на светлом и тёмном фоне.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Файлы и документация</h3>
            <p className={styles.stepDescription}>
              Подготавливаем все форматы файлов (векторные, растровые), документацию по использованию, 
              гайдлайны.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Palette size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка концепций</h3>
            <p className={styles.serviceDescription}>
              Создание нескольких концепций логотипа на основе анализа бренда
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Доработка</h3>
            <p className={styles.serviceDescription}>
              Доработка выбранной концепции до финального варианта
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Файлы</h3>
            <p className={styles.serviceDescription}>
              Подготовка всех необходимых форматов файлов для использования
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
              Клиенты получают уникальный логотип, который отражает суть их бренда и помогает в 
              узнаваемости. Логотип работает в различных контекстах: на сайте, в печати, в социальных 
              сетях, на визитках. Это основа для визуальной идентичности компании.
            </p>
            <p className={styles.paragraph}>
              Профессионально разработанный логотип создаёт правильное первое впечатление, помогает 
              выделиться среди конкурентов и укрепляет позиционирование бренда. Логотип становится 
              узнаваемым символом, с которым ассоциируется компания.
            </p>
            <p className={styles.paragraph}>
              Все файлы подготовлены в необходимых форматах для использования в любых ситуациях. 
              Документация и гайдлайны помогают правильно использовать логотип в дальнейшем. 
              Результаты видны сразу: бренд получает профессиональный визуальный образ.
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
              Мы работаем в формате проекта с фиксированным объёмом работ. Каждый проект начинается 
              с исследования бренда и разработки концепций.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от сложности задачи, количества концепций, необходимости доработок 
              и объёма работ. Разработка логотипа начинается от 40 000 рублей. В стоимость входит 
              разработка концепций, доработка выбранной концепции, подготовка файлов и документации.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить дизайн и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoDesignPage;

