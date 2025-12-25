import React, { useState, useEffect } from 'react';
import { Save, Search } from 'lucide-react';
import styles from '../../styles/AdminServices.module.css';

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Загрузка данных с API
    // fetchServices();
    // Mock данные
    setServices([
      {
        id: 1,
        title: 'SEO-продвижение под AI (GEO)',
        description: 'Оптимизация сайта для появления в ответах AI-ассистентов...',
        price: null,
        priceFrom: true,
        link: '/services/ai-seo'
      },
      {
        id: 2,
        title: 'Комплексное SEO-продвижение',
        description: 'Полноценное продвижение сайта в поисковых системах...',
        price: 50000,
        priceFrom: true,
        link: '/uslugi/seo-prodvizhenie'
      },
      {
        id: 3,
        title: 'Контекстная реклама',
        description: 'Настройка и ведение контекстной рекламы...',
        price: 30000,
        priceFrom: true,
        link: '/uslugi/kontekstnaya-reklama'
      }
    ]);
    setLoading(false);
  }, []);

  const handleServiceChange = (id, field, value) => {
    setServices(prev => prev.map(service => 
      service.id === id 
        ? { ...service, [field]: value }
        : service
    ));
  };

  const handlePriceChange = (id, value) => {
    const numValue = value === '' ? null : parseFloat(value);
    handleServiceChange(id, 'price', numValue);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // TODO: Отправка на API
      // await fetch('/api/services', { method: 'PUT', body: JSON.stringify(services) });
      alert('Услуги успешно сохранены');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при сохранении услуг');
    } finally {
      setSaving(false);
    }
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.servicesAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Услуги</h1>
          <p>Редактирование описаний и цен услуг</p>
        </div>
        <button onClick={handleSave} className={styles.saveBtn} disabled={saving}>
          <Save size={20} strokeWidth={1.5} />
          {saving ? 'Сохранение...' : 'Сохранить все'}
        </button>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск услуг..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.servicesList}>
        {filteredServices.length === 0 ? (
          <div className={styles.empty}>
            <p>Услуги не найдены</p>
          </div>
        ) : (
          filteredServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <h3>{service.title}</h3>
                <span className={styles.serviceLink}>{service.link}</span>
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.formGroup}>
                  <label htmlFor={`desc-${service.id}`}>Описание *</label>
                  <textarea
                    id={`desc-${service.id}`}
                    value={service.description}
                    onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                    rows="4"
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.priceRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor={`price-${service.id}`}>Цена (₽)</label>
                    <div className={styles.priceInput}>
                      {service.priceFrom && (
                        <span className={styles.priceFrom}>от</span>
                      )}
                      <input
                        type="number"
                        id={`price-${service.id}`}
                        value={service.price || ''}
                        onChange={(e) => handlePriceChange(service.id, e.target.value)}
                        min="0"
                        step="1000"
                        placeholder="0"
                        className={styles.input}
                      />
                      <span className={styles.currency}>₽</span>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={service.priceFrom || false}
                        onChange={(e) => handleServiceChange(service.id, 'priceFrom', e.target.checked)}
                        className={styles.checkbox}
                      />
                      Цена "от"
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminServices;

