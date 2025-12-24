import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>404 — Страница не найдена</h1>
        <p className={styles.heroSubtitle}>
          К сожалению, запрашиваемая страница не существует
        </p>
        <p className={styles.heroDescription}>
          Возможно, страница была удалена или перемещена, либо вы ввели неправильный адрес.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
          <Link to="/" className={styles.heroCTA} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Home size={20} strokeWidth={1.5} />
            На главную
          </Link>
          <Link to="/contact" className={styles.heroCTA} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Связаться с нами
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

