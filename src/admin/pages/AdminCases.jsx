import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Calendar, Tag } from 'lucide-react';
import styles from '../../styles/AdminCases.module.css';

const AdminCases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Загрузка данных с API
    // fetchCases();
    setLoading(false);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот кейс?')) {
      // TODO: Удаление через API
      // await deleteCase(id);
      // fetchCases();
    }
  };

  const filteredCases = cases.filter(caseItem =>
    caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock данные для примера
  const mockCases = [
    {
      id: 1,
      title: 'Рост органического трафика на 250% за 6 месяцев',
      client: 'Интернет-магазин электроники',
      category: 'SEO',
      period: '6 месяцев',
      featured: true
    }
  ];

  const displayCases = cases.length > 0 ? filteredCases : mockCases;

  return (
    <div className={styles.casesAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Кейсы</h1>
          <p>Управление кейсами компании</p>
        </div>
        <Link to="/admin/cases/new" className={styles.addBtn}>
          <Plus size={20} strokeWidth={1.5} />
          Создать кейс
        </Link>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск по названию или клиенту..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.casesList}>
          {displayCases.length === 0 ? (
            <div className={styles.empty}>
              <p>Нет кейсов. Создайте первый кейс!</p>
            </div>
          ) : (
            displayCases.map((caseItem) => (
              <div key={caseItem.id} className={styles.caseCard}>
                <div className={styles.caseContent}>
                  <div className={styles.caseHeader}>
                    <h3>{caseItem.title}</h3>
                    {caseItem.featured && (
                      <span className={styles.featuredBadge}>Избранное</span>
                    )}
                  </div>
                  <div className={styles.caseClient}>
                    <strong>Клиент:</strong> {caseItem.client}
                  </div>
                  <div className={styles.caseMeta}>
                    <div className={styles.metaItem}>
                      <Tag size={16} strokeWidth={1.5} />
                      <span>{caseItem.category}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} strokeWidth={1.5} />
                      <span>{caseItem.period}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.caseActions}>
                  <Link
                    to={`/admin/cases/${caseItem.id}/edit`}
                    className={styles.editBtn}
                  >
                    <Edit size={18} strokeWidth={1.5} />
                    Редактировать
                  </Link>
                  <button
                    onClick={() => handleDelete(caseItem.id)}
                    className={styles.deleteBtn}
                  >
                    <Trash2 size={18} strokeWidth={1.5} />
                    Удалить
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminCases;

