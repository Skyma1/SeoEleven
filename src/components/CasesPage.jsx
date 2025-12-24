import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { casesData, fetchCases } from '../data/casesData';
import styles from '../styles/CasesPage.module.css';

const CasesPage = () => {
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных из API (если доступен) или использование локальных данных
    // Для активации API раскомментируйте следующие строки:
    // fetchCases()
    //   .then(data => {
    //     setCases(data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setCases(casesData);
    //     setLoading(false);
    //   });
    
    // Временная загрузка локальных данных
    setTimeout(() => {
      setCases(casesData);
      setLoading(false);
    }, 300);
  }, []);

  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(caseItem => 
        caseItem.category.toLowerCase().includes(filter.toLowerCase()) ||
        caseItem.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );

  const categories = ['all', 'SEO', 'GEO / AI SEO', 'Разработка', 'Автоматизация'];

  if (loading) {
    return (
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <p>Загрузка кейсов...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Наши кейсы
          </h1>
          <p className={styles.heroSubtitle}>
            Реальные результаты для реальных бизнесов
          </p>
          <p className={styles.heroDescription}>
            Каждый проект — это комплексная работа над достижением конкретных бизнес-целей. 
            Мы фокусируемся на измеримых результатах и прозрачной отчетности.
          </p>
        </div>
      </section>

      {/* БЛОК 2. ФИЛЬТРЫ */}
      <section className={styles.section}>
        <div className={styles.filters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.filterButtonActive : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Все кейсы' : category}
            </button>
          ))}
        </div>
      </section>

      {/* БЛОК 3. СПИСОК КЕЙСОВ */}
      <section className={styles.section}>
        {filteredCases.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Кейсы не найдены</p>
          </div>
        ) : (
          <div className={styles.casesGrid}>
            {filteredCases.map((caseItem) => (
              <div 
                key={caseItem.id} 
                className={`${styles.caseCard} ${caseItem.featured ? styles.caseCardFeatured : ''}`}
              >
                {caseItem.featured && (
                  <div className={styles.featuredBadge}>
                    <TrendingUp size={16} strokeWidth={1.5} />
                    Рекомендуем
                  </div>
                )}
                
                <div className={styles.caseHeader}>
                  <div className={styles.caseCategory}>
                    {caseItem.category}
                  </div>
                  <div className={styles.casePeriod}>
                    <Calendar size={16} strokeWidth={1.5} />
                    {caseItem.period}
                  </div>
                </div>

                <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                <p className={styles.caseClient}>
                  <Users size={16} strokeWidth={1.5} />
                  {caseItem.client}
                </p>
                <p className={styles.caseDescription}>{caseItem.description}</p>

                <div className={styles.caseResults}>
                  <h4 className={styles.resultsTitle}>
                    <Target size={18} strokeWidth={1.5} />
                    Результаты
                  </h4>
                  <div className={styles.resultsList}>
                    {caseItem.results.map((result, index) => (
                      <div key={index} className={styles.resultItem}>
                        <span className={styles.resultValue}>{result.value}</span>
                        <span className={styles.resultLabel}>{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.caseTags}>
                  {caseItem.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.caseFooter}>
                  <button className={styles.caseButton}>
                    Подробнее
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* БЛОК 4. CTA */}
      <section className={styles.section}>
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Хотите такие же результаты?</h2>
          <p className={styles.ctaDescription}>
            Обсудим ваш проект и оценим потенциал для роста. 
            Честно скажем, сможем ли помочь и какой подход будет наиболее эффективным.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Обсудить проект
            <ArrowRight size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CasesPage;

