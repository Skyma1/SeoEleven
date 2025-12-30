import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';

/**
 * Компонент для страницы Блог (новая версия)
 * Путь: /new/blog
 * Преобразован из NewPage/Блог.html
 */
function NewBlogPage() {
  const location = useLocation();

  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-8 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-graphite dark:text-white mb-4">Блог & Инсайты</h1>
                <p className="text-lg text-graphite/70 dark:text-gray-400 max-w-xl">
                  Экспертные статьи о SEO, рекламе и AI-технологиях. Аналитика трендов 2026 года и практические советы для роста бизнеса.
                </p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full md:max-w-md pb-1">
                <button className="px-4 py-2 rounded-full bg-graphite text-white text-sm font-medium whitespace-nowrap transition-colors">Все</button>
                <button className="px-4 py-2 rounded-full bg-surface dark:bg-zinc-800 hover:bg-white border border-transparent hover:border-gray-200 text-graphite dark:text-gray-300 text-sm font-medium whitespace-nowrap transition-colors shadow-sm">SEO 2.0</button>
                <button className="px-4 py-2 rounded-full bg-surface dark:bg-zinc-800 hover:bg-white border border-transparent hover:border-gray-200 text-graphite dark:text-gray-300 text-sm font-medium whitespace-nowrap transition-colors shadow-sm">AI Технологии</button>
                <button className="px-4 py-2 rounded-full bg-surface dark:bg-zinc-800 hover:bg-white border border-transparent hover:border-gray-200 text-graphite dark:text-gray-300 text-sm font-medium whitespace-nowrap transition-colors shadow-sm">PPC</button>
                <button className="px-4 py-2 rounded-full bg-surface dark:bg-zinc-800 hover:bg-white border border-transparent hover:border-gray-200 text-graphite dark:text-gray-300 text-sm font-medium whitespace-nowrap transition-colors shadow-sm">Разработка</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
              <article className="md:col-span-8 row-span-2 bg-surface dark:bg-zinc-900 rounded-2xl p-0 shadow-soft bento-card relative overflow-hidden group cursor-pointer flex flex-col">
                <div className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[16px]">push_pin</span> Закреплено
                </div>
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8vD9KgXyKSSnvy9llhQpawrIoLRhrraFccHgqzjw3yCFFCVctx0A9tPFHOcde35RwriIpRumMbUNHgtHhQNOVu5SM-FDd9Z9k5JM_nBT1FZhy3KCD60kCin-QATq_nRHWXw_BiABiBfsMkTdqou3DnUPJ-LAv5NqNon7qalwq-b1Ea1l3uaK3VbzXsobd-8Oq47Vm7F9BcpZ3oE20Fiuew8wAcb84sx7p5sVEoymRf7iBgsnnitWTxN-ffqiKDx4ObuQ0qORRxX0H')"}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-graphite/60 dark:text-gray-400 mb-3">
                      <span className="font-bold text-primary">AI & Strategy</span>
                      <span>•</span>
                      <span>14 Октября 2025</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                      Будущее поиска: Как Generative AI меняет правила SEO в 2026 году
                    </h2>
                    <p className="text-graphite/70 dark:text-gray-400 text-lg line-clamp-3">
                      Google SGE и новые алгоритмы ранжирования требуют коренного пересмотра стратегии. Разбираем, как адаптировать контент, чтобы оставаться в топе выдачи, когда ответы генерирует нейросеть, а не поиск по ключевым словам.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-primary font-bold">
                    Читать статью <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </div>
              </article>
              <article className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer h-full">
                <div className="mb-4 h-48 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_KWPDPhbPYmaUIk6d4Uhc3TQwiofhm8nr6e8OYR189b6mOYOkh5QgDMLFal6L7ahExu1sIxUQplwcPTInPWYiTvE5cYmOLK6zQkaSE8QMh6p93Q15jafvyFnGlvcxhwTGmWPFmYrmnFOcbHYJYWKyh7O4VqQR2ynymZhlQ9hkFMEy90x2p8TDz8gZ2-bMESvBhn_w3j2PPZXWefrgLR-3-SDLvESA1wHl61lwQr5pnCGpxgbUqdU3RsWuEYQ0bPQ2sE4E61TllXtD')"}}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-graphite/60 dark:text-gray-400 mb-2">
                    <span className="font-bold text-primary">Analytics</span>
                    <span>•</span>
                    <span>10 Окт</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    Отказ от Cookies: Новая эра сквозной аналитики
                  </h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 line-clamp-3">
                    Как отслеживать эффективность рекламы в мире, ориентированном на приватность. Server-side tracking как новый стандарт.
                  </p>
                </div>
              </article>
              <article className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer h-full">
                <div className="mb-4 h-48 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjcUdRhQJr0jm13XPlhq9FB-An2UqKvNCTyuGHGJ_QrJfjTMHI1V8EDS3QX6gt21CaQtPtcRa68D4xGydWQ3plTK2pZdn1ezNROnLwWZIkOPj4V8UjchuDwciGf2WpBiJ5cpzfDrvPvOPNk78oIdUeKYwfzj8SWW05wprPPtHbqaSPvV-qFEGkh7Cg3FaOjvgStLYAJQg8iXMOJR6pKRBhW7-ke0wUh9fljaU7WHWuk-V4Dox4tuv_GyI8IKzEcxMgbK0N_9xitg47')"}}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-graphite/60 dark:text-gray-400 mb-2">
                    <span className="font-bold text-primary">PPC</span>
                    <span>•</span>
                    <span>05 Окт</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    Автоматизация ставок: Доверяй, но проверяй
                  </h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 line-clamp-3">
                    Почему ручное управление ставками уходит в прошлое и как настроить AI-стратегии в Яндекс.Директ для максимального ROI.
                  </p>
                </div>
              </article>
              <article className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer h-full">
                <div className="mb-4 h-48 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAon1VepClavdcdVLcbPZ_nFkPt796W-N1ZWDh8KrUGuPtpsC8tDSafu4jnIZggO2wJM1QcfHL4SlwEBSEiyZwXSI65LwpPo2Y4vb4y2qWFlAdZP_vWLBIhEhfcVZ6s26_lP_-4hXHnLaZ_jhsIuf9rjjEb2dUb7F6e2_mpbw6ONwOPRFhk6j2CYkdHq_Uphjcf4GL4T6FOJ68ZJsOlyn7wD9S3cH3xqnPwSPqKY39J1k3ZVCM6JY2AFNBUKgRd-uVojAl78M7cDNoJ')"}}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-graphite/60 dark:text-gray-400 mb-2">
                    <span className="font-bold text-primary">Development</span>
                    <span>•</span>
                    <span>28 Сен</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    Web 3.0 и Frontend: Тренды 2026
                  </h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 line-clamp-3">
                    Микро-фронтенды, Edge computing и оптимизация под VR-устройства. Что должен знать современный разработчик.
                  </p>
                </div>
              </article>
              <div className="md:col-span-4 bg-graphite text-white rounded-2xl p-8 shadow-soft bento-card flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">SEO Digest</h3>
                  <p className="text-gray-400 text-sm mb-6">Только полезные инсайты и кейсы. Раз в неделю, без спама.</p>
                  <form className="flex flex-col gap-3">
                    <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500" placeholder="Ваш email" type="email"/>
                    <button className="bg-primary hover:bg-[#c41f18] text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20" type="button">Подписаться</button>
                  </form>
                  <p className="text-[10px] text-gray-500 mt-3 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                </div>
              </div>
              <article className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer h-full">
                <div className="mb-4 h-48 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTwo64sBJ8uhBfRU1RZdJVsylx6Y5JLDTRnoMRZqZorxpSb2vkalGiKzqOn7PLFfqyoAAiQki-yeOclI9Q-6LqRQAD4a1kyhIsgytFgdVh4PmR80y3Z_SV5NBbafBG7LE4Panbqnj_FdEQQQ0x3Rg1jpMQu6chFdDyQV1PzQWuinRbT7jSc-Vy1GxN20qZ2EoCZCiDCte5Ekr15L8rqNdKrEfekP5UJjPtVHfQa0nUaJd74cJ3XWm2HDxY-iyhqfIOeW2kFvGQp8Uf')"}}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-graphite/60 dark:text-gray-400 mb-2">
                    <span className="font-bold text-primary">Strategy</span>
                    <span>•</span>
                    <span>20 Сен</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    Маркетинг для B2B в эпоху AI
                  </h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 line-clamp-3">
                    Как использовать инструменты искусственного интеллекта для персонализации коммуникации с корпоративными клиентами.
                  </p>
                </div>
              </article>
            </div>
            <div className="flex justify-center mt-8">
              <button className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-graphite font-bold shadow-sm transition-all hover:shadow-md">
                <span className="material-symbols-outlined text-primary">autorenew</span>
                Загрузить ещё
              </button>
            </div>
          </div>
        </main>
        <NewFooter />
      </div>
    </TailwindWrapper>
  );
}

export default NewBlogPage;

