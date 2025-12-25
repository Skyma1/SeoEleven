/**
 * Error Boundary компонент
 * 
 * Ловит ошибки рендеринга React компонентов
 * и показывает fallback UI вместо краша приложения
 */

import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import styles from '../styles/ErrorBoundary.module.css';
import { handleReactError } from '../utils/errorHandlers';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние чтобы показать fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Логировать ошибку (можно отправить в Sentry)
    handleReactError(error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className={styles.errorBoundary}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <AlertTriangle size={64} strokeWidth={1.5} />
            </div>

            <h1 className={styles.title}>Что-то пошло не так</h1>
            
            <p className={styles.message}>
              Произошла ошибка при отображении этой страницы.
              <br />
              Мы уже работаем над исправлением проблемы.
            </p>

            {isDevelopment && this.state.error && (
              <div className={styles.errorDetails}>
                <h3>Детали ошибки (только в development):</h3>
                <pre className={styles.errorStack}>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            <div className={styles.actions}>
              <button 
                onClick={this.handleReset}
                className={styles.buttonSecondary}
              >
                Попробовать снова
              </button>
              <button 
                onClick={this.handleGoHome}
                className={styles.buttonPrimary}
              >
                <Home size={20} strokeWidth={1.5} />
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

