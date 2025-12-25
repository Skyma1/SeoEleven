import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  MessageSquare,
  Calendar,
  ArrowUp,
  ArrowDown,
  Globe,
  MapPin
} from 'lucide-react';
import styles from '../../styles/AdminStatistics.module.css';

const AdminStatistics = () => {
  const [dateRange, setDateRange] = useState('days');
  const [selectedDate, setSelectedDate] = useState({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });
  
  const [stats, setStats] = useState({
    sessions: 64,
    sessionsChange: 6300.00,
    desktopPercent: 64.06,
    mobilePercent: 35.94,
    mobileChange: 35.94,
    requests: 0,
    conversion: 0,
    visitors: 84,
    views: 119
  });

  const [trafficSources, setTrafficSources] = useState([
    { name: 'Прямые заходы', visitors: 54, percent: 64 },
    { name: 'Поисковые системы', visitors: 3, percent: 4 },
    { name: 'Внутренние переходы', visitors: 26, percent: 31 },
    { name: 'Сторонние сайты', visitors: 2, percent: 2 },
    { name: 'Социальные сети', visitors: 0, percent: 0 },
    { name: 'Реклама', visitors: 0, percent: 0 }
  ]);

  const [topPages, setTopPages] = useState([
    { url: 'syntexspb.ru/', views: 119, sessions: 45, visitors: 39, desktop: 87, mobile: 13 },
    { url: 'syntexspb.ru/catalog/molnii-i-begunki', views: 11, sessions: 9, visitors: 8, desktop: 82, mobile: 18 },
    { url: 'syntexspb.ru/catalog/lenta', views: 18, sessions: 8, visitors: 7, desktop: 94, mobile: 6 }
  ]);

  const [countries, setCountries] = useState([
    { code: 'RU', name: 'Россия', visitors: 50, percent: 78 },
    { code: 'US', name: 'США', visitors: 11, percent: 17 },
    { code: 'CA', name: 'Канада', visitors: 1, percent: 2 }
  ]);

  useEffect(() => {
    // TODO: Загрузка данных с API
    // fetchStatistics(selectedDate.start, selectedDate.end, dateRange);
  }, [selectedDate, dateRange]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className={styles.statistics}>
      <div className={styles.header}>
        <h1>Статистика</h1>
        <div className={styles.controls}>
          <div className={styles.dateButtons}>
            <button 
              className={`${styles.dateBtn} ${dateRange === 'days' ? styles.active : ''}`}
              onClick={() => setDateRange('days')}
            >
              По дням
            </button>
            <button 
              className={`${styles.dateBtn} ${dateRange === 'months' ? styles.active : ''}`}
              onClick={() => setDateRange('months')}
            >
              По месяцам
            </button>
          </div>
          <div className={styles.dateRange}>
            <input
              type="date"
              value={selectedDate.start}
              onChange={(e) => setSelectedDate({ ...selectedDate, start: e.target.value })}
              className={styles.dateInput}
            />
            <span>-</span>
            <input
              type="date"
              value={selectedDate.end}
              onChange={(e) => setSelectedDate({ ...selectedDate, end: e.target.value })}
              className={styles.dateInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.summaryCards}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>СЕССИИ</h3>
            {stats.sessionsChange > 0 && (
              <div className={styles.changePositive}>
                <ArrowUp size={14} />
                {stats.sessionsChange.toFixed(2)}%
              </div>
            )}
          </div>
          <div className={styles.cardValue}>{stats.sessions}</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>УСТРОЙСТВО</h3>
            {stats.mobileChange > 0 && (
              <div className={styles.changePositive}>
                <ArrowUp size={14} />
                {stats.mobileChange.toFixed(2)}%
              </div>
            )}
          </div>
          <div className={styles.deviceInfo}>
            <div className={styles.deviceItem}>
              <span>Десктоп:</span>
              <strong>{stats.desktopPercent.toFixed(2)}%</strong>
            </div>
            <div className={styles.deviceItem}>
              <span>Мобильные:</span>
              <strong>{stats.mobilePercent.toFixed(2)}%</strong>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>ЗАЯВКИ</h3>
          </div>
          <div className={styles.cardValue}>{stats.requests} шт.</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>КОНВЕРСИЯ</h3>
          </div>
          <div className={styles.cardValue}>{stats.conversion}%</div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Сессии</h3>
            <div className={styles.chartTotal}>{stats.sessions}</div>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartPlaceholder}>
              <p>График сессий</p>
              <small>Интеграция с бекендом для отображения реальных данных</small>
            </div>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Заявки</h3>
            <div className={styles.chartTotal}>{stats.requests}</div>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartPlaceholder}>
              <p>График заявок</p>
              <small>Интеграция с бекендом для отображения реальных данных</small>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.trafficSources}>
        <h2>Источники переходов</h2>
        <div className={styles.sourcesList}>
          {trafficSources.map((source, index) => (
            <div key={index} className={styles.sourceItem}>
              <div className={styles.sourceHeader}>
                <span className={styles.sourceName}>{source.name}</span>
                <span className={styles.sourceStats}>
                  {source.visitors} ({source.percent}%)
                </span>
              </div>
              <div className={styles.sourceBar}>
                <div 
                  className={styles.sourceBarFill}
                  style={{ width: `${source.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.topPages}>
        <h2>Популярные страницы</h2>
        <div className={styles.pagesTable}>
          <div className={styles.tableHeader}>
            <div className={styles.colPage}>Страница</div>
            <div className={styles.colViews}>Просмотры</div>
            <div className={styles.colSessions}>Сессии</div>
            <div className={styles.colVisitors}>Посетители</div>
            <div className={styles.colDevice}>Устройство</div>
          </div>
          <div className={styles.tableBody}>
            {topPages.map((page, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.colPage}>
                  <span className={styles.pageUrl}>{page.url}</span>
                </div>
                <div className={styles.colViews}>{page.views}</div>
                <div className={styles.colSessions}>{page.sessions}</div>
                <div className={styles.colVisitors}>{page.visitors}</div>
                <div className={styles.colDevice}>
                  <span className={styles.devicePercent}>
                    {page.desktop}% / {page.mobile}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.geography}>
        <h2>Топ-10 по странам</h2>
        <div className={styles.countriesList}>
          {countries.map((country, index) => (
            <div key={index} className={styles.countryItem}>
              <div className={styles.countryHeader}>
                <span className={styles.countryCode}>{country.code}</span>
                <span className={styles.countryName}>{country.name}</span>
              </div>
              <div className={styles.countryBar}>
                <div 
                  className={styles.countryBarFill}
                  style={{ width: `${country.percent}%` }}
                />
              </div>
              <div className={styles.countryStats}>
                {country.visitors} ({country.percent}%)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;

