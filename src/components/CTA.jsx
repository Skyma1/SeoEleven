import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from '../styles/CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Готовы начать проект?</h2>
        <p>
          Обсудим, как мы можем помочь вашему бизнесу развиваться. 
          Свяжитесь с нами, чтобы назначить консультацию.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            Оставить заявку
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
          <button className={styles.secondaryButton}>
            <MessageCircle size={20} strokeWidth={1.5} />
            Написать нам
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

