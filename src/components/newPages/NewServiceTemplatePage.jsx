import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';
import CTAButton from './CTAButton';

/**
 * Компонент для страницы Шаблон страницы услуг (новая версия)
 * Путь: /new/service-template
 * Преобразован из NewPage/Шаблон страницы услуг.html
 */
function NewServiceTemplatePage() {
  const location = useLocation();

  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-8 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm text-graphite/50 dark:text-gray-500 px-1">
              <Link to="/new" className="hover:text-primary transition-colors">Главная</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <Link to="/new/services" className="hover:text-primary transition-colors">Услуги</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-graphite dark:text-white font-medium">SEO Продвижение</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
              <div className="md:col-span-8 row-span-2 bg-surface dark:bg-zinc-900 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-soft relative overflow-hidden group border border-transparent hover:border-primary/10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/5 dark:bg-white/10 text-xs font-semibold uppercase tracking-wider mb-6 text-primary">
                    <span className="material-symbols-outlined text-[16px]">auto_graph</span>
                    SEO 2.0
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-graphite dark:text-white">
                    Комплексное <span className="text-primary">SEO-продвижение</span> с упором на аналитику и продажи
                  </h1>
                  <p className="text-lg text-graphite/70 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    Выводим сайты в ТОП Google и Яндекс, используя нейросети для кластеризации семантики и генерации контента. Мы не просто даем трафик, мы приводим клиентов.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-primary">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <span className="text-graphite/80 dark:text-gray-300 font-medium">Технический аудит 100+ параметров</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-primary">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <span className="text-graphite/80 dark:text-gray-300 font-medium">Прогнозирование трафика (AI)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-primary">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <span className="text-graphite/80 dark:text-gray-300 font-medium">Контент-стратегия и копирайтинг</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px] text-primary">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <span className="text-graphite/80 dark:text-gray-300 font-medium">Прозрачная отчетность в BI</span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-graphite/5 dark:border-white/5">
                  <div>
                    <span className="block text-sm text-graphite/50 dark:text-gray-500 mb-1">Стоимость услуги</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-graphite/70 dark:text-gray-400">от</span>
                      <span className="text-3xl font-bold text-graphite dark:text-white">120 000 ₽</span>
                      <span className="text-sm text-graphite/50 dark:text-gray-500">/ мес</span>
                    </div>
                  </div>
                  <CTAButton 
                    variant="primary" 
                    size="lg"
                    source="service-template-hero"
                    className="w-full sm:w-auto active:scale-95"
                  >
                    Получить стратегию
                  </CTAButton>
                </div>
              </div>
              <div className="md:col-span-4 bg-graphite text-white rounded-2xl p-6 flex flex-col justify-between shadow-soft relative overflow-hidden bento-card min-h-[220px]">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN32SzW7xiNCrrkciFU2K-PDaxC3wKHMCLDzo_P8tSyzStvKRIXL_QinmHCGcm_ohYfxmmM1bjlxOC_jDjGepIiPXNJR8gHz_L0GrHG6Vs-zZWxfqX1uHEByc5Lv4VqpkZD-ohF3OJpJXSNzzKAgYE95dpAlBYUHNeznuxhGf77KPzXfOtnThc7D939grhvWkqPEPqi6kjobUccwCba3P7YMwM7UUKB-yDBc95rG95OpgQe7d2m_PGxDsvRYzXxNeicVc8InWZHn5x')"}}></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm inline-flex">
                      <span className="material-symbols-outlined text-primary">trending_up</span>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">+124% YoY</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">ROI x4</div>
                    <p className="text-sm text-gray-400">Средний возврат инвестиций у наших клиентов в первый год</p>
                  </div>
                </div>
                <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-gray-700 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawzFKELGolEo5AreprIYjQ5ovIkBxEE1RGSzPLI9WZPgjZTjtwof09d-3vizNAhoGxUJmRrFE6ZQCA5Hd6xzz6v9vmsEfkBrsi_0deCXmCM44qznJEi2D-ZP_Mo3h9ygjfE1tcjOe5eG-ikyWw_PExTkeEi8akQzn577QitFAVeI_VtDCHotFlgSosKojR35m1gBsD_OlFmlmR2jAQn_bmSVhWCbnE4mItTY5CO3Q_yGwQof_87iudXjuhhHU02xvKguzrCSjleFv')"}}></div>
                    <div>
                      <div className="text-sm font-bold">Анна С.</div>
                      <div className="text-xs text-gray-400">Head of SEO</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft bento-card flex flex-col justify-center relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Быстрый старт</h3>
                    <p className="text-xs text-graphite/60 dark:text-gray-400">Первые результаты через 3 недели</p>
                  </div>
                </div>
                <p className="text-sm text-graphite/70 dark:text-gray-400">
                  Благодаря автоматизации рутинных процессов мы начинаем внедрение правок в первый день работы.
                </p>
              </div>
              <div className="md:col-span-4 bg-surface dark:bg-zinc-900 p-6 rounded-2xl shadow-soft bento-card border border-transparent hover:border-primary/20">
                <div className="bg-background-light dark:bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">travel_explore</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Глубокая аналитика</h3>
                <p className="text-sm text-graphite/60 dark:text-gray-400">Собираем данные из 15 источников для построения полной картины спроса.</p>
              </div>
              <div className="md:col-span-4 bg-surface dark:bg-zinc-900 p-6 rounded-2xl shadow-soft bento-card border border-transparent hover:border-primary/20">
                <div className="bg-background-light dark:bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Контент-маркетинг</h3>
                <p className="text-sm text-graphite/60 dark:text-gray-400">Пишем экспертные статьи, которые читают люди и любят поисковики.</p>
              </div>
              <div className="md:col-span-4 bg-surface dark:bg-zinc-900 p-6 rounded-2xl shadow-soft bento-card border border-transparent hover:border-primary/20">
                <div className="bg-background-light dark:bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Линкбилдинг</h3>
                <p className="text-sm text-graphite/60 dark:text-gray-400">Безопасное наращивание ссылочной массы с трастовых ресурсов.</p>
              </div>
              <div className="md:col-span-12 bg-graphite-light text-white rounded-2xl p-8 md:p-12 shadow-soft mt-0">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold mb-4">Как мы работаем</h3>
                    <p className="text-gray-400">Прозрачный процесс работы спринтами по 2 недели. Вы всегда знаете, за что платите.</p>
                    <button className="mt-8 text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                      Скачать пример отчета <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <div className="text-primary font-display text-4xl font-bold mb-2">01</div>
                      <h4 className="font-bold text-lg mb-2">Аудит и стратегия</h4>
                      <p className="text-sm text-gray-400">Анализируем сайт, конкурентов и нишу. Составляем план работ на 6 месяцев.</p>
                    </div>
                    <div>
                      <div className="text-primary font-display text-4xl font-bold mb-2">02</div>
                      <h4 className="font-bold text-lg mb-2">Внутренняя оптимизация</h4>
                      <p className="text-sm text-gray-400">Исправляем технические ошибки, оптимизируем структуру и мета-теги.</p>
                    </div>
                    <div>
                      <div className="text-primary font-display text-4xl font-bold mb-2">03</div>
                      <h4 className="font-bold text-lg mb-2">Контент и ссылки</h4>
                      <p className="text-sm text-gray-400">Создаем посадочные страницы и размещаем публикации на внешних площадках.</p>
                    </div>
                    <div>
                      <div className="text-primary font-display text-4xl font-bold mb-2">04</div>
                      <h4 className="font-bold text-lg mb-2">Аналитика и рост</h4>
                      <p className="text-sm text-gray-400">Отслеживаем позиции, корректируем стратегию и масштабируем результат.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg shadow-primary/20 relative overflow-hidden mt-6">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Нужен индивидуальный план?</h2>
                <p className="text-white/90 text-lg">Оставьте заявку, и мы подготовим коммерческое предложение с прогнозом трафика конкретно для вашего сайта.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                  <CTAButton 
                    variant="secondary" 
                    size="md"
                    source="service-template-cta"
                    className="w-full sm:w-auto"
                  >
                    Обсудить проект
                  </CTAButton>
                </div>
                <p className="text-xs text-white/60 mt-2">Конфиденциальность гарантируем.</p>
              </div>
            </div>
          </div>
        </main>
        <NewFooter />
      </div>
    </TailwindWrapper>
  );
}

export default NewServiceTemplatePage;

