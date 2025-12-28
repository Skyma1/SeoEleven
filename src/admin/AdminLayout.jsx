import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Settings, 
  BarChart3, 
  MessageSquare,
  Users,
  Globe,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/AdminLayout.module.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const { logout } = useAuth();

  // Предотвращаем горизонтальный скролл на body
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Статистика', exact: true },
    { path: '/admin/blog', icon: FileText, label: 'Блог' },
    { path: '/admin/cases', icon: Briefcase, label: 'Кейсы' },
    { path: '/admin/requests', icon: MessageSquare, label: 'Заявки' },
    { path: '/admin/metrica', icon: BarChart3, label: 'Яндекс.Метрика' },
    { path: '/admin/services', icon: Settings, label: 'Услуги' },
    { path: '/admin/pages', icon: Globe, label: 'Страницы' },
    { path: '/admin/users', icon: Users, label: 'Пользователи' },
  ];

  return (
    <div className={styles.adminContainer}>
      {/* Плавающая кнопка для открытия меню, когда оно закрыто */}
      {!sidebarOpen && (
        <button 
          className={styles.openMenuBtn}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      )}

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          <h2>Админ-панель</h2>
          <button 
            className={styles.toggleBtn}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                <Icon size={20} strokeWidth={1.5} />
                {sidebarOpen && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
        <div className={styles.sidebarFooter}>
          <button 
            className={styles.logoutBtn}
            onClick={logout}
            type="button"
          >
            <LogOut size={20} strokeWidth={1.5} />
            {sidebarOpen && <span>Выйти</span>}
          </button>
        </div>
      </aside>

      <main className={`${styles.mainContent} ${!sidebarOpen ? styles.sidebarClosed : ''}`}>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

