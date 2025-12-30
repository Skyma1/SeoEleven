import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';
import PriceCalculator from './PriceCalculator';
import CTAButton from './CTAButton';

/**
 * Компонент для страницы Главная (новая версия)
 * Путь: /new/
 * Преобразован из NewPage/Главная.html
 */
function NewHomePage() {
  const location = useLocation();

  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-8 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
              <div className="md:col-span-8 row-span-2 bg-surface dark:bg-zinc-900 rounded-2xl p-8 sm:p-12 flex flex-col justify-between shadow-soft relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10 max-w-[640px]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/5 dark:bg-white/10 text-xs font-semibold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Digital 2026 Ready
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-graphite dark:text-white">
                    Рост бизнеса через <span className="text-primary">SEO</span>, <span className="text-primary">Рекламу</span> и <span className="text-primary">AI</span>
                  </h1>
                  <p className="text-lg text-graphite/70 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                    Точная аналитика и технологии нового поколения. Мы превращаем данные в прибыль, используя алгоритмы 2026 года.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <CTAButton 
                    variant="primary" 
                    size="lg"
                    source="home-hero"
                    className="active:scale-95"
                  >
                    Заказать аудит
                  </CTAButton>
                  <div className="flex -space-x-3 items-center ml-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" data-alt="Portrait of a female client" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawzFKELGolEo5AreprIYjQ5ovIkBxEE1RGSzPLI9WZPgjZTjtwof09d-3vizNAhoGxUJmRrFE6ZQCA5Hd6xzz6v9vmsEfkBrsi_0deCXmCM44qznJEi2D-ZP_Mo3h9ygjfE1tcjOe5eG-ikyWw_PExTkeEi8akQzn577QitFAVeI_VtDCHotFlgSosKojR35m1gBsD_OlFmlmR2jAQn_bmSVhWCbnE4mItTY5CO3Q_yGwQof_87iudXjuhhHU02xvKguzrCSjleFv')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" data-alt="Portrait of a male client" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwODB8G5v0CdmtxyPn70Pnq3F5dMRL53qVFqXXQVhLDpEjrOdDHVTY5hVgklXvP_aFJG6qi66flHDltY3jMnW1-A3CooK7WHgTkhWf5JynrK0TEzZZnsSkSdT2H2VOD64QBSZB0kXmTRn6B9BJgWprTcIKXtdv17bPI0MKw5vBZ8VfeYNUC0lWDI6iSX85ppysm1ocw4BTdEEuG3sZ6E_Lr6VjDzUmuB1au0_ugIfJMnWqlu__SzV9SooIMvD4U-PASKMpxsSe-p_j')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" data-alt="Portrait of a smiling man" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKE6GAiMbh5lYcTk6Wtp5mtp_vAM0AhoqA3QJhMG5kKSg3Gnuf2xI-4F3HP2tlWB_Ya-78BP2PNNjeOr8uvpKQ4T6ZN9O4OEk5aPqsvu5yZkUXqqLyC3Ku659M4rzrI0mUaV9RWdkcJOneIlivLKKLCBJ8gVA6-PcjMf8qJ7kvwgrc6Z2yXPoSdBy6fmodocihcSiAE5z-a2MZCjtfEHfgRzv0MS_hbxuLOLQBv8Z85I5Z5E5b1Et66S-4eCv41otK6WUTzJ5aUVFn')"}}></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface flex items-center justify-center text-xs font-bold text-graphite shadow-sm">+50</div>
                  </div>
                  <span className="text-sm font-medium text-graphite/60 dark:text-gray-400 ml-1">клиентов в работе</span>
                </div>
              </div>
              <div className="md:col-span-4 bg-graphite text-white rounded-2xl p-6 flex flex-col justify-between shadow-soft relative overflow-hidden bento-card min-h-[240px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" data-alt="Abstract dark technological pattern"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <span className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                  </span>
                  <span className="text-xs font-mono text-gray-400">LIVE STATS</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-1">+300%</div>
                  <div className="text-sm text-gray-400">Рост органического трафика за 6 месяцев</div>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer border border-transparent hover:border-primary/20">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1">SEO 2.0</h3>
                  <p className="text-xs text-graphite/60 dark:text-gray-400">Вывод в ТОП</p>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-between group cursor-pointer border border-transparent hover:border-primary/20">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">ads_click</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1">Ads</h3>
                  <p className="text-xs text-graphite/60 dark:text-gray-400">Максимум ROI</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-3 bg-graphite-light text-white rounded-2xl py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft">
                <div className="flex flex-col gap-2 md:w-1/3">
                  <h3 className="text-xl font-bold text-white">Наш технологический стек</h3>
                  <p className="text-sm text-gray-400">Инструменты аналитики и разработки 2026 года.</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 md:w-2/3 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">code</span> Python</div>
                  <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">analytics</span> GA4</div>
                  <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">smart_toy</span> OpenAI</div>
                  <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">view_in_ar</span> React</div>
                </div>
              </div>
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft bento-card flex flex-col gap-4 border-l-4 border-primary">
                <div className="flex justify-between items-start">
                  <div className="bg-[#fceae9] dark:bg-[#e5231b]/20 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined !text-[32px]">psychology</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">arrow_outward</span>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-bold mb-2">AI & Автоматизация</h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed">
                    Внедряем нейросети для генерации контента и предиктивной аналитики спроса. Опережайте конкурентов на два шага.
                  </p>
                </div>
              </div>
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft bento-card flex flex-col gap-4 border-l-4 border-primary">
                <div className="flex justify-between items-start">
                  <div className="bg-[#fceae9] dark:bg-[#e5231b]/20 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined !text-[32px]">terminal</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">arrow_outward</span>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed">
                    Создание молниеносных SPA и высоконагруженных порталов. Скорость загрузки влияет на продажи — мы делаем это быстрее всех.
                  </p>
                </div>
              </div>
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft bento-card flex flex-col gap-4 border-l-4 border-primary">
                <div className="flex justify-between items-start">
                  <div className="bg-[#fceae9] dark:bg-[#e5231b]/20 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined !text-[32px]">monitoring</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">arrow_outward</span>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-bold mb-2">Сквозная аналитика</h3>
                  <p className="text-sm text-graphite/70 dark:text-gray-400 leading-relaxed">
                    Видим весь путь клиента. От первого клика до повторных продаж. Никаких догадок, только точные данные.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 sm:p-12 shadow-soft mt-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">Результаты говорят сами за себя</h2>
                  <p className="text-graphite/70 dark:text-gray-400">Мы не просто оказываем услуги, мы становимся партнером по росту вашей выручки.</p>
                </div>
                <Link to="/new/cases" className="text-primary font-bold hover:underline flex items-center gap-1">Все кейсы <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group cursor-pointer">
                  <div className="h-64 w-full rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative mb-4">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Financial graphs and data visualization" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN32SzW7xiNCrrkciFU2K-PDaxC3wKHMCLDzo_P8tSyzStvKRIXL_QinmHCGcm_ohYfxmmM1bjlxOC_jDjGepIiPXNJR8gHz_L0GrHG6Vs-zZWxfqX1uHEByc5Lv4VqpkZD-ohF3OJpJXSNzzKAgYE95dpAlBYUHNeznuxhGf77KPzXfOtnThc7D939grhvWkqPEPqi6kjobUccwCba3P7YMwM7UUKB-yDBc95rG95OpgQe7d2m_PGxDsvRYzXxNeicVc8InWZHn5x')"}}></div>
                    <div className="absolute bottom-4 left-4 bg-white dark:bg-black/80 px-4 py-2 rounded-lg text-sm font-bold shadow-md">
                      FinTech
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Масштабирование необанка</h3>
                  <p className="text-sm text-graphite/60 dark:text-gray-400 mb-3">Комплексный маркетинг + App Store Optimization</p>
                  <div className="flex gap-4">
                    <div className="bg-background-light dark:bg-zinc-800 px-3 py-1 rounded text-sm font-semibold text-primary">ROI x4.5</div>
                    <div className="bg-background-light dark:bg-zinc-800 px-3 py-1 rounded text-sm font-semibold text-green-600">+120% Установок</div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="h-64 w-full rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden relative mb-4">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Woman shopping online with colorful bags" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvjT4rPpk_YNu34zeeObEHrUVnNvZxKrtVFFDPdtyGr1wB2D_5fAwU6c2uL7zmkxHkBQbEBTXjAqzPMGVk4LQFUDrStCIbOkw4iOR4lztuFhiS3VgIXTvZyl7OWImsmquBx_MdM6xAgPhWgdaC3nLnBqGsOxTmoCT79CbCCGaLSx8E4y_yGxuM0Tkwx3tjN3qo015RGSRAHa3FwWe7F4_CuALW70qxuXLNuma3VQYYBpUts-DfC5CFmr4zZME7YOiU2jvcIUPSq76P')"}}></div>
                    <div className="absolute bottom-4 left-4 bg-white dark:bg-black/80 px-4 py-2 rounded-lg text-sm font-bold shadow-md">
                      E-commerce
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Fashion Ритейлер</h3>
                  <p className="text-sm text-graphite/60 dark:text-gray-400 mb-3">SEO продвижение мультибрендового магазина</p>
                  <div className="flex gap-4">
                    <div className="bg-background-light dark:bg-zinc-800 px-3 py-1 rounded text-sm font-semibold text-primary">Трафик +300%</div>
                    <div className="bg-background-light dark:bg-zinc-800 px-3 py-1 rounded text-sm font-semibold text-green-600">ТОП-3 по РФ</div>
                  </div>
                </div>
              </div>
            </div>
            <PriceCalculator />
            <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg shadow-primary/20 relative overflow-hidden mt-6">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">Готовы кратно вырасти в 2026?</h2>
                <p className="text-white/90 text-lg text-white">Оставьте заявку на бесплатный экспресс-аудит вашего проекта. Мы найдем точки роста за 24 часа.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                  <CTAButton 
                    variant="secondary" 
                    size="md"
                    source="home-cta"
                    className="w-full sm:w-auto"
                  >
                    Обсудить проект
                  </CTAButton>
                </div>
                <p className="text-xs text-white/60 mt-2">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
              </div>
            </div>
          </div>
        </main>
        <NewFooter />
      </div>
    </TailwindWrapper>
  );
}

export default NewHomePage;

