import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Plus, X } from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/CaseEdit.module.css';

const CaseEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    description: '',
    category: '',
    period: '',
    results: [{ label: '', value: '' }],
    tags: '',
    featured: false,
    image: '',
    url: ''
  });
  
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isNew) {
      const fetchCase = async () => {
        setLoading(true);
        const { data, error: err } = await apiService.adminGetCase(id);
        if (err) {
          setError(err);
        } else if (data) {
          setFormData({
            title: data.title || '',
            client: data.client || '',
            description: data.description || '',
            category: data.category || '',
            period: data.period || '',
            results: Array.isArray(data.results) && data.results.length > 0 
              ? data.results 
              : [{ label: '', value: '' }],
            tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
            featured: data.featured || false,
            image: data.image || '',
            url: data.url || ''
          });
        }
        setLoading(false);
      };
      fetchCase();
    }
  }, [id, isNew]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleResultChange = (index, field, value) => {
    const newResults = [...formData.results];
    newResults[index][field] = value;
    setFormData(prev => ({ ...prev, results: newResults }));
  };

  const addResult = () => {
    setFormData(prev => ({
      ...prev,
      results: [...prev.results, { label: '', value: '' }]
    }));
  };

  const removeResult = (index) => {
    if (formData.results.length > 1) {
      setFormData(prev => ({
        ...prev,
        results: prev.results.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      const payload = {
        ...formData,
        tags: tagsArray,
        results: formData.results.filter(r => r.label && r.value)
      };

      let result;
      if (isNew) {
        result = await apiService.adminCreateCase(payload);
      } else {
        result = await apiService.adminUpdateCase(id, payload);
      }

      if (result.error) {
        setError(result.error);
        return;
      }

      navigate('/admin/cases');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      setError(error.message || 'Ошибка при сохранении кейса');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.caseEdit}>
      <div className={styles.header}>
        <button onClick={() => navigate('/admin/cases')} className={styles.backBtn}>
          <ArrowLeft size={20} strokeWidth={1.5} />
          Назад к списку
        </button>
        <h1>{isNew ? 'Создать кейс' : 'Редактировать кейс'}</h1>
      </div>

      {error && (
        <div className={styles.error}>
          Ошибка: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Название кейса *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="client">Клиент *</label>
            <input
              type="text"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="description">Описание *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.formRowTwo}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Категория *</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="period">Период *</label>
            <input
              type="text"
              id="period"
              name="period"
              value={formData.period}
              onChange={handleChange}
              required
              placeholder="например: 6 месяцев"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Результаты</label>
            {formData.results.map((result, index) => (
              <div key={index} className={styles.resultRow}>
                <input
                  type="text"
                  placeholder="Название показателя"
                  value={result.label}
                  onChange={(e) => handleResultChange(index, 'label', e.target.value)}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Значение"
                  value={result.value}
                  onChange={(e) => handleResultChange(index, 'value', e.target.value)}
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => removeResult(index)}
                  className={styles.removeBtn}
                  disabled={formData.results.length === 1}
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addResult}
              className={styles.addResultBtn}
            >
              <Plus size={18} strokeWidth={1.5} />
              Добавить результат
            </button>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="tags">Теги (через запятую)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="SEO, Техническая оптимизация, Контент-стратегия"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRowTwo}>
          <div className={styles.formGroup}>
            <label htmlFor="image">URL изображения</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="url">URL кейса</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Избранный кейс
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            onClick={() => navigate('/admin/cases')}
            className={styles.cancelBtn}
          >
            Отмена
          </button>
          <button
            type="submit"
            disabled={saving}
            className={styles.saveBtn}
          >
            <Save size={18} strokeWidth={1.5} />
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaseEdit;

