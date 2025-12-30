import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';

/**
 * Компонент для страницы Вакансии (новая версия)
 * Путь: /new/vacancies
 * Преобразован из NewPage/Вакансии.html
 */
function NewVacanciesPage() {
  const location = useLocation();
  
  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-8 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-surface dark:bg-zinc-900 rounded-2xl p-8 sm:p-12 shadow-soft relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/5 dark:bg-white/10 text-xs font-semibold uppercase tracking-wider mb-6">
                    <span className="material-symbols-outlined text-sm text-primary">groups</span>
                    Карьера в SEO Eleven
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4 text-graphite dark:text-white">
                    Присоединяйся к команде <span className="text-primary">будущего</span>
                  </h1>
                  <p className="text-lg text-graphite/70 dark:text-gray-400 max-w-lg leading-relaxed">
                    Мы ищем тех, кто не боится сложных задач, AI-технологий и готов менять рынок digital-маркетинга вместе с нами.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 bg-graphite text-white rounded-2xl p-8 shadow-soft relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary">favorite</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Забота о команде</h3>
                  <p className="text-white/60 text-sm mb-6">ДМС, обучение, удаленная работа и современные макбуки.</p>
                  <div className="flex -space-x-3 items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-graphite bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawzFKELGolEo5AreprIYjQ5ovIkBxEE1RGSzPLI9WZPgjZTjtwof09d-3vizNAhoGxUJmRrFE6ZQCA5Hd6xzz6v9vmsEfkBrsi_0deCXmCM44qznJEi2D-ZP_Mo3h9ygjfE1tcjOe5eG-ikyWw_PExTkeEi8akQzn577QitFAVeI_VtDCHotFlgSosKojR35m1gBsD_OlFmlmR2jAQn_bmSVhWCbnE4mItTY5CO3Q_yGwQof_87iudXjuhhHU02xvKguzrCSjleFv')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-graphite bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwODB8G5v0CdmtxyPn70Pnq3F5dMRL53qVFqXXQVhLDpEjrOdDHVTY5hVgklXvP_aFJG6qi66flHDltY3jMnW1-A3CooK7WHgTkhWf5JynrK0TEzZZnsSkSdT2H2VOD64QBSZB0kXmTRn6B9BJgWprTcIKXtdv17bPI0MKw5vBZ8VfeYNUC0lWDI6iSX85ppysm1ocw4BTdEEuG3sZ6E_Lr6VjDzUmuB1au0_ugIfJMnWqlu__SzV9SooIMvD4U-PASKMpxsSe-p_j')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-graphite bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKE6GAiMbh5lYcTk6Wtp5mtp_vAM0AhoqA3QJhMG5kKSg3Gnuf2xI-4F3HP2tlWB_Ya-78BP2PNNjeOr8uvpKQ4T6ZN9O4OEk5aPqsvu5yZkUXqqLyC3Ku659M4rzrI0mUaV9RWdkcJOneIlivLKKLCBJ8gVA6-PcjMf8qJ7kvwgrc6Z2yXPoSdBy6fmodocihcSiAE5z-a2MZCjtfEHfgRzv0MS_hbxuLOLQBv8Z85I5Z5E5b1Et66S-4eCv41otK6WUTzJ5aUVFn')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-graphite bg-surface flex items-center justify-center text-xs font-bold text-graphite shadow-sm">+50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <button className="px-4 py-2 rounded-full bg-graphite text-white text-sm font-medium shadow-md">Все вакансии</button>
              <button className="px-4 py-2 rounded-full bg-surface hover:bg-white text-graphite border border-transparent hover:border-primary/20 text-sm font-medium transition-all shadow-sm">SEO & Content</button>
              <button className="px-4 py-2 rounded-full bg-surface hover:bg-white text-graphite border border-transparent hover:border-primary/20 text-sm font-medium transition-all shadow-sm">Development</button>
              <button className="px-4 py-2 rounded-full bg-surface hover:bg-white text-graphite border border-transparent hover:border-primary/20 text-sm font-medium transition-all shadow-sm">Analytics</button>
              <button className="px-4 py-2 rounded-full bg-surface hover:bg-white text-graphite border border-transparent hover:border-primary/20 text-sm font-medium transition-all shadow-sm">Sales</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bento-card bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between border-2 border-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Горящая вакансия
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-[#fceae9] dark:bg-[#e5231b]/20 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-[28px]">search</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Senior SEO Strategist</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-graphite/60 dark:text-gray-400">
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Full-time</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Remote</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Senior</span>
                  </div>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed mb-6">
                    Разработка стратегий продвижения для крупных E-commerce проектов. Управление командой, глубокая аналитика и внедрение AI-инструментов.
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl bg-primary hover:bg-[#c41f18] text-white font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  Откликнуться
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="bento-card bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between border border-transparent hover:border-graphite/10 group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-graphite dark:text-white">
                      <span className="material-symbols-outlined text-[28px]">terminal</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Middle Python Developer</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-graphite/60 dark:text-gray-400">
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Full-time</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Office/Hybrid</span>
                  </div>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed mb-6">
                    Разработка backend-части наших внутренних аналитических сервисов. Работа с OpenAI API, парсинг данных, оптимизация high-load систем.
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl border border-graphite/20 hover:border-primary text-graphite dark:text-white hover:text-primary font-bold transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-primary/5">
                  Откликнуться
                </button>
              </div>
              <div className="bento-card bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between border border-transparent hover:border-graphite/10 group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-graphite dark:text-white">
                      <span className="material-symbols-outlined text-[28px]">ads_click</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">PPC Manager (Direct/Ads)</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-graphite/60 dark:text-gray-400">
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Full-time</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Remote</span>
                  </div>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed mb-6">
                    Настройка и ведение рекламных кампаний в Яндекс.Директ и VK Ads. Работа с бюджетами от 500к. Анализ эффективности и масштабирование.
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl border border-graphite/20 hover:border-primary text-graphite dark:text-white hover:text-primary font-bold transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-primary/5">
                  Откликнуться
                </button>
              </div>
              <div className="bento-card bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between border border-transparent hover:border-graphite/10 group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-graphite dark:text-white">
                      <span className="material-symbols-outlined text-[28px]">psychology</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">AI Content Creator</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-graphite/60 dark:text-gray-400">
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Part-time</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Remote</span>
                  </div>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed mb-6">
                    Генерация контента с помощью нейросетей (text-to-image, text-to-text). Промпт-инжиниринг, редактура и подготовка материалов для блогов.
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl border border-graphite/20 hover:border-primary text-graphite dark:text-white hover:text-primary font-bold transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-primary/5">
                  Откликнуться
                </button>
              </div>
              <div className="bento-card bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between border border-transparent hover:border-graphite/10 group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-graphite dark:text-white">
                      <span className="material-symbols-outlined text-[28px]">support_agent</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Account Manager</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-graphite/60 dark:text-gray-400">
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Full-time</span>
                    <span className="bg-background-light dark:bg-zinc-800 px-2 py-1 rounded">Office</span>
                  </div>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed mb-6">
                    Сопровождение ключевых клиентов студии. Коммуникация, подготовка отчетов, управление ожиданиями и допродажа услуг.
                  </p>
                </div>
                <button className="w-full py-3 rounded-xl border border-graphite/20 hover:border-primary text-graphite dark:text-white hover:text-primary font-bold transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-primary/5">
                  Откликнуться
                </button>
              </div>
              <div className="bento-card bg-graphite-light rounded-2xl p-6 shadow-soft flex flex-col justify-center items-center text-center relative overflow-hidden group border border-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 to-transparent pointer-events-none opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-14 rounded-full bg-white/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined text-[32px]">mail_outline</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Не нашли вакансию?</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                    Отправьте нам свое резюме. Мы всегда рады талантливым специалистам и рассмотрим вашу кандидатуру.
                  </p>
                  <button className="px-8 py-3 rounded-xl bg-white text-graphite font-bold hover:bg-primary hover:text-white transition-all shadow-lg">
                    Отправить резюме
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <NewFooter />
      </div>
    </TailwindWrapper>
  );
}

export default NewVacanciesPage;

