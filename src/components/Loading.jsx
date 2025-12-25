/**
 * Loading компонент
 * 
 * Универсальный компонент для отображения состояния загрузки
 * Может быть fullScreen или inline
 */

import React from 'react';
import { Loader2 } from 'lucide-react';
import styles from '../styles/Loading.module.css';

const Loading = ({ 
  fullScreen = false, 
  message = 'Загрузка...', 
  size = 32,
  showMessage = true,
}) => {
  const className = fullScreen ? styles.fullScreen : styles.inline;
  
  return (
    <div className={className}>
      <Loader2 
        className={styles.spinner} 
        size={size} 
        strokeWidth={2} 
      />
      {showMessage && message && (
        <p className={styles.message}>{message}</p>
      )}
    </div>
  );
};

export default Loading;

