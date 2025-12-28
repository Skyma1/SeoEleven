import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from '../styles/CTA.module.css';

const CTA = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Ведем на страницу контактов для оставления заявки
    navigate('/contact#form');
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Готовы начать проект?</h2>
        <p>
          Обсудим, как мы можем помочь вашему бизнесу развиваться. 
          Свяжитесь с нами, чтобы назначить консультацию.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={handleSubmit}>
            Связаться с нами
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

