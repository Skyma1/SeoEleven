import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp
} from 'lucide-react';
import { useData } from '../context/DataContext';
import styles from '../styles/BlogPage.module.css';

const BlogPage = () => {
  const { blogPosts, loading } = useData();
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'SEO', 'GEO / AI SEO', 'Разработка', 'Автоматизация'];
  
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <p>Загрузка статей...</p>
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
            Блог
          </h1>
          <p className={styles.heroSubtitle}>
            Полезные материалы о SEO, разработке и автоматизации
          </p>
          <p className={styles.heroDescription}>
            Делимся опытом, кейсами и практическими советами для роста вашего бизнеса
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
              {category === 'all' ? 'Все статьи' : category}
            </button>
          ))}
        </div>
      </section>

      {/* БЛОК 3. СПИСОК ПОСТОВ */}
      <section className={styles.section}>
        {filteredPosts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Статьи не найдены</p>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className={`${styles.postCard} ${post.featured ? styles.postCardFeatured : ''}`}
              >
                {post.featured && (
                  <div className={styles.featuredBadge}>
                    <TrendingUp size={16} strokeWidth={1.5} />
                    Рекомендуем
                  </div>
                )}
                <div className={styles.postHeader}>
                  <span className={styles.postCategory}>
                    {post.category}
                  </span>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      <Calendar size={14} strokeWidth={1.5} />
                      {formatDate(post.date)}
                    </span>
                    {post.readTime && (
                      <span className={styles.readTime}>
                        <Clock size={14} strokeWidth={1.5} />
                        {post.readTime} мин
                      </span>
                    )}
                  </div>
                </div>

                <h2 className={styles.postTitle}>
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className={styles.postExcerpt}>
                  {post.excerpt}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className={styles.postTags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        <Tag size={12} strokeWidth={1.5} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.postFooter}>
                  <Link to={`/blog/${post.id}`} className={styles.readMoreButton}>
                    Читать далее
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BlogPage;

