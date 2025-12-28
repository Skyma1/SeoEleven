import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User
} from 'lucide-react';
import { useData } from '../context/DataContext';
import apiService from '../services/api';
import { getPostById } from '../data/blogData';
import styles from '../styles/ArticlePage.module.css';

const ArticlePage = () => {
  const { id } = useParams();
  const { blogPosts } = useData();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      
      // Сначала ищем в загруженных постах из DataContext
      const foundPost = blogPosts.find(p => p.id === parseInt(id));
      
      if (foundPost) {
        setPost(foundPost);
        setLoading(false);
        return;
      }

      // Если не найден в контексте, пытаемся загрузить из API
      try {
        const { data, error } = await apiService.getBlogPost(id);
        if (!error && data) {
          setPost(data);
        } else {
          // Фоллбэк на локальные данные
          const localPost = getPostById(id);
          setPost(localPost);
        }
      } catch (err) {
        console.error('Ошибка загрузки поста:', err);
        // Фоллбэк на локальные данные
        const localPost = getPostById(id);
        setPost(localPost);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id, blogPosts]);

  if (loading) {
    return (
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <p>Загрузка статьи...</p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Статья не найдена</h1>
          <p className={styles.heroDescription}>
            К сожалению, статья с таким ID не существует.
          </p>
          <Link to="/blog" className={styles.backButton}>
            <ArrowLeft size={18} strokeWidth={1.5} />
            Вернуться в блог
          </Link>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={18} strokeWidth={1.5} />
            Вернуться в блог
          </Link>
          
          <div className={styles.articleHeader}>
            <span className={styles.articleCategory}>
              {post.category}
            </span>
            <div className={styles.articleMeta}>
              <span className={styles.articleDate}>
                <Calendar size={16} strokeWidth={1.5} />
                {formatDate(post.date)}
              </span>
              {post.readTime && (
                <span className={styles.readTime}>
                  <Clock size={16} strokeWidth={1.5} />
                  {post.readTime} мин чтения
                </span>
              )}
              <span className={styles.articleAuthor}>
                <User size={16} strokeWidth={1.5} />
                {post.author}
              </span>
            </div>
          </div>

          <h1 className={styles.articleTitle}>
            {post.title}
          </h1>

          {post.tags && post.tags.length > 0 && (
            <div className={styles.articleTags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  <Tag size={14} strokeWidth={1.5} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* БЛОК 2. СОДЕРЖИМОЕ */}
      <section className={styles.section}>
        <article className={styles.articleContent}>
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      {/* БЛОК 3. CTA */}
      <section className={styles.section}>
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Нужна помощь с проектом?</h2>
          <p className={styles.ctaDescription}>
            Обсудим ваш проект и оценим потенциал для роста. 
            Честно скажем, сможем ли помочь и какой подход будет наиболее эффективным.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Обсудить проект
            <ArrowLeft size={20} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;

