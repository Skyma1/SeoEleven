/**
 * Форма редактирования контента страницы
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save
} from 'lucide-react';
import PageBuilder from '../../components/PageBuilder';
import apiService from '../../services/api';
import styles from '../../styles/PageEdit.module.css';

const PageEdit = () => {
  const navigate = useNavigate();
  const { path } = useParams();
  const pagePath = '/' + decodeURIComponent(path || '');

  const [formData, setFormData] = useState({
    pageName: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPage();
  }, [path]);

  const fetchPage = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error: apiError } = await apiService.adminGetPage(pagePath);
      
      if (apiError) {
        throw new Error(apiError);
      }

      setFormData({
        pageName: data.pageName || '',
        content: data.content || '',
        metaTitle: data.metaTitle || '',
        metaDescription: data.metaDescription || '',
        metaKeywords: data.metaKeywords || '',
      });
    } catch (err) {
      console.error('Error fetching page:', err);
      setError(err.message || 'Не удалось загрузить страницу');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const { error: apiError } = await apiService.adminUpdatePage(pagePath, {
        content: formData.content,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        metaKeywords: formData.metaKeywords,
      });

      if (apiError) {
        throw new Error(apiError);
      }

      navigate('/admin/pages');
    } catch (err) {
      console.error('Error saving page:', err);
      setError(err.message || 'Ошибка при сохранении страницы');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Загрузка страницы...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => navigate('/admin/pages')}
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          Назад к списку
        </button>
        <h1 className={styles.title}>Редактировать: {formData.pageName}</h1>
        <code className={styles.pagePath}>{pagePath}</code>
      </div>

      {error && (
        <div className={styles.errorAlert}>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>SEO настройки</h2>
          
          <div className={styles.formGroup}>
            <label htmlFor="metaTitle" className={styles.label}>
              Meta Title
            </label>
            <input
              type="text"
              id="metaTitle"
              value={formData.metaTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
              className={styles.input}
              placeholder="Заголовок страницы для поисковых систем"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="metaDescription" className={styles.label}>
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              value={formData.metaDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
              className={styles.textarea}
              rows="3"
              placeholder="Описание страницы для поисковых систем"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="metaKeywords" className={styles.label}>
              Meta Keywords
            </label>
            <input
              type="text"
              id="metaKeywords"
              value={formData.metaKeywords}
              onChange={(e) => setFormData(prev => ({ ...prev, metaKeywords: e.target.value }))}
              className={styles.input}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Конструктор страницы</h2>
          <p className={styles.sectionDescription}>
            Перетаскивайте блоки из панели слева на страницу. Настраивайте стили в панели справа.
          </p>
          
          <PageBuilder
            value={formData.content}
            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
            onSave={(data) => {
              const content = JSON.stringify(data);
              setFormData(prev => ({ ...prev, content }));
            }}
          />

          <p className={styles.helpText}>
            💡 Используйте drag-and-drop для добавления блоков. Нажимайте на элементы для редактирования.
          </p>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => navigate('/admin/pages')}
            disabled={saving}
          >
            Отмена
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={saving}
          >
            <Save size={18} strokeWidth={1.5} />
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageEdit;

