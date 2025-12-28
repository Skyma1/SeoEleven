import React from 'react';
import { ArrowRight, Check, X, Users, Target, BarChart3, Smartphone, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const TargetedAdvertisingPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Таргетированная реклама', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Таргетированная реклама</h1>
          <p className={styles.heroSubtitle}>
            Настройка и ведение таргетированной рекламы в социальных сетях для привлечения целевой аудитории
          </p>
          <p className={styles.heroDescription}>
            Таргетированная реклама в социальных сетях позволяет показывать ваши объявления 
            пользователям с определёнными характеристиками: возрастом, интересами, поведением, 
            геолокацией. Это эффективный способ привлечь внимание целевой аудитории и получить 
            заявки или продажи. Мы настраиваем и ведём рекламу в ВКонтакте, Facebook, Instagram, 
            Telegram и других платформах.
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
              <li>Бизнесы с активной аудиторией в социальных сетях</li>
              <li>Компании, которым нужно привлечь внимание к бренду</li>
              <li>Проекты с визуальным продуктом или услугой</li>
              <li>Бизнесы, работающие с молодой аудиторией</li>
              <li>Компании с готовым контентом для рекламы</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Бизнесы без активной аудитории в соцсетях</li>
              <li>Проекты с очень узкой нишей</li>
              <li>Компании без визуального контента</li>
              <li>Бизнесы, работающие только с B2B без соцсетей</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Как работает таргетированная реклама</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Таргетированная реклама показывает ваши объявления пользователям социальных сетей, 
              которые соответствуют заданным критериям: демография, интересы, поведение, геолокация. 
              Это позволяет показывать рекламу именно тем, кто с высокой вероятностью заинтересуется 
              вашим предложением.
            </p>
            <p className={styles.paragraph}>
              Эффективность зависит от правильного выбора аудитории, создания привлекательного 
              контента, настройки таргетинга и оптимизации кампаний. Мы анализируем вашу целевую 
              аудиторию, создаём рекламные материалы, настраиваем таргетинг и оптимизируем для 
              максимальной эффективности.
            </p>
            <p className={styles.paragraph}>
              Ведение включает постоянный мониторинг, тестирование аудиторий, оптимизацию ставок, 
              анализ эффективности и корректировку стратегии. Это позволяет постоянно улучшать 
              результаты и снижать стоимость привлечения.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как мы работаем</h2>
        <div className={styles.processGrid}>
          <div className={`${styles.processStep} ${styles.processStepDominant}`}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ аудитории</h3>
            <p className={styles.stepDescription}>
              Изучаем целевую аудиторию, её поведение в соцсетях, выбираем платформы, 
              формируем стратегию рекламы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Подготовка контента</h3>
            <p className={styles.stepDescription}>
              Создаём рекламные материалы, тексты, изображения, видео, готовим посадочные страницы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Настройка и запуск</h3>
            <p className={styles.stepDescription}>
              Настраиваем таргетинг, создаём объявления, запускаем рекламу, настраиваем аналитику.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Тестируем аудитории, оптимизируем ставки, улучшаем контент, исключаем неэффективные варианты.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Ведение</h3>
            <p className={styles.stepDescription}>
              Постоянно ведём рекламу, анализируем результаты, развиваем кампании, отчитываемся.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Users size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка таргетинга</h3>
            <p className={styles.serviceDescription}>
              Анализ аудитории, настройка таргетинга по демографии, интересам, поведению, 
              создание lookalike-аудиторий
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Smartphone size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Создание контента</h3>
            <p className={styles.serviceDescription}>
              Создание рекламных материалов: тексты, изображения, видео, сторис, карусели
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка кампаний</h3>
            <p className={styles.serviceDescription}>
              Создание и настройка рекламных кампаний в ВКонтакте, Facebook, Instagram, Telegram
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
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Ведение и оптимизация</h3>
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
              Клиенты получают привлечение целевой аудитории через социальные сети, рост узнаваемости 
              бренда и заявки. Таргетированная реклама эффективна для привлечения внимания, особенно 
              для визуальных продуктов и услуг.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от ниши, качества контента, правильности таргетинга. Обычно первые 
              результаты видны в течение недели, стабильная работа — через 2–3 недели после запуска.
            </p>
            <p className={styles.paragraph}>
              Мы оптимизируем рекламу для снижения стоимости привлечения и повышения конверсии, 
              постоянно тестируем и улучшаем результаты.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.pricingBlock}>
          <h2 className={styles.sectionTitle}>Формат работы и цены</h2>
          <div className={styles.pricingContent}>
            <p className={styles.paragraph}>
              Мы работаем по модели оплаты за настройку и ведение рекламы. Настройка включает анализ 
              аудитории, создание контента и запуск. Ведение — постоянная оптимизация и развитие.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества платформ, объёма контента, сложности таргетинга. 
              Настройка начинается от 40 000 рублей, ведение — от 25 000 рублей в месяц. Бюджет на 
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

export default TargetedAdvertisingPage;

