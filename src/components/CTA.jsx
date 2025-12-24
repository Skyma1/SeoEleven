import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/CTA.module.css';

const CTA = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleSubmit = () => {
    openModal(null, 'cta');
  };

  const handleContact = () => {
    navigate('/contact');
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
            Оставить заявку
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
          <button className={styles.secondaryButton} onClick={handleContact}>
            <MessageCircle size={20} strokeWidth={1.5} />
            Написать нам
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

