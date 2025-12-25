import React, { useState, useEffect } from 'react';
import { Search, Phone, Mail, Calendar, Filter, Download } from 'lucide-react';
import styles from '../../styles/AdminRequests.module.css';

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // TODO: Загрузка данных с API
    // fetchRequests();
    // Mock данные
    setRequests([
      {
        id: 1,
        name: 'Иван Иванов',
        contactType: 'phone',
        contact: '+7 (999) 123-45-67',
        company: 'ООО "Пример"',
        service: 'SEO-продвижение',
        website: 'example.com',
        goal: 'Рост трафика',
        budget: '30 000 – 70 000 ₽',
        timeline: '2 месяца',
        comment: 'Хочу увеличить органический трафик',
        source: 'modal',
        status: 'new',
        createdAt: new Date().toISOString()
      }
    ]);
    setLoading(false);
  }, []);

  const filteredRequests = requests.filter(request => {
    const matchesSearch = 
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.service.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statuses = {
      new: { label: 'Новая', class: styles.statusNew },
      viewed: { label: 'Просмотрена', class: styles.statusViewed },
      processed: { label: 'Обработана', class: styles.statusProcessed },
      archived: { label: 'Архив', class: styles.statusArchived }
    };
    const statusInfo = statuses[status] || statuses.new;
    return <span className={`${styles.statusBadge} ${statusInfo.class}`}>{statusInfo.label}</span>;
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.requestsAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Заявки</h1>
          <p>Просмотр и управление заявками с сайта</p>
        </div>
        <button className={styles.exportBtn}>
          <Download size={20} strokeWidth={1.5} />
          Экспорт
        </button>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск по имени, компании, услуге..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filter}>
          <Filter size={20} strokeWidth={1.5} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">Все статусы</option>
            <option value="new">Новые</option>
            <option value="viewed">Просмотренные</option>
            <option value="processed">Обработанные</option>
            <option value="archived">Архив</option>
          </select>
        </div>
      </div>

      <div className={styles.requestsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.tableRow}>
            <div className={styles.colDate}>Дата</div>
            <div className={styles.colName}>Клиент</div>
            <div className={styles.colContact}>Контакты</div>
            <div className={styles.colService}>Услуга</div>
            <div className={styles.colBudget}>Бюджет</div>
            <div className={styles.colStatus}>Статус</div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {filteredRequests.length === 0 ? (
            <div className={styles.empty}>
              <p>Заявки не найдены</p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <div key={request.id} className={styles.requestRow}>
                <div className={styles.colDate}>
                  <Calendar size={16} strokeWidth={1.5} />
                  <span>{formatDate(request.createdAt)}</span>
                </div>
                <div className={styles.colName}>
                  <div className={styles.name}>{request.name}</div>
                  {request.company && (
                    <div className={styles.company}>{request.company}</div>
                  )}
                </div>
                <div className={styles.colContact}>
                  <div className={styles.contactItem}>
                    {request.contactType === 'phone' ? (
                      <Phone size={16} strokeWidth={1.5} />
                    ) : (
                      <Mail size={16} strokeWidth={1.5} />
                    )}
                    <span>{request.contact}</span>
                  </div>
                </div>
                <div className={styles.colService}>
                  <div className={styles.service}>{request.service}</div>
                  {request.website && (
                    <div className={styles.website}>{request.website}</div>
                  )}
                </div>
                <div className={styles.colBudget}>
                  <div className={styles.budget}>{request.budget}</div>
                  {request.goal && (
                    <div className={styles.goal}>Цель: {request.goal}</div>
                  )}
                </div>
                <div className={styles.colStatus}>
                  {getStatusBadge(request.status)}
                </div>
                <div className={styles.colDetails}>
                  <button 
                    className={styles.detailsBtn}
                    onClick={() => {
                      // TODO: Открыть модальное окно с деталями
                      alert(`Детали заявки #${request.id}\n\nКомментарий: ${request.comment || 'нет'}\nСроки: ${request.timeline || 'не указаны'}\nИсточник: ${request.source}`);
                    }}
                  >
                    Детали
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRequests;

