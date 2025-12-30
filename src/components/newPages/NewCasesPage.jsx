import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';
import CTAButton from './CTAButton';

/**
 * Компонент для страницы Кейсы (новая версия)
 * Путь: /new/cases
 * Преобразован из NewPage/Кейсы.html
 */
function NewCasesPage() {
  const location = useLocation();
  
  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-10 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/5 dark:bg-white/10 text-xs font-semibold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Case Studies
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-graphite dark:text-white leading-tight">
                  Результаты в цифрах
                </h1>
                <p className="mt-4 text-lg text-graphite/70 dark:text-gray-400 max-w-2xl leading-relaxed">
                  Мы превращаем данные в стратегии роста. Изучите наши кейсы в формате детальных аналитических дашбордов. Никакой воды, только ROI, трафик и конверсии.
                </p>
              </div>
              <div className="flex gap-2 p-1 bg-surface dark:bg-zinc-800 rounded-lg shadow-sm border border-graphite/5 self-start md:self-end overflow-x-auto max-w-full">
                <button className="px-5 py-2.5 bg-graphite text-white rounded-md text-sm font-medium shadow-sm transition-all whitespace-nowrap">Все кейсы</button>
                <button className="px-5 py-2.5 text-graphite/70 dark:text-gray-300 hover:text-primary hover:bg-graphite/5 rounded-md text-sm font-medium transition-all whitespace-nowrap">FinTech</button>
                <button className="px-5 py-2.5 text-graphite/70 dark:text-gray-300 hover:text-primary hover:bg-graphite/5 rounded-md text-sm font-medium transition-all whitespace-nowrap">E-commerce</button>
                <button className="px-5 py-2.5 text-graphite/70 dark:text-gray-300 hover:text-primary hover:bg-graphite/5 rounded-md text-sm font-medium transition-all whitespace-nowrap">SaaS</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
              <div className="md:col-span-8 row-span-2 bg-surface dark:bg-zinc-900 rounded-2xl shadow-soft overflow-hidden group flex flex-col relative border border-transparent hover:border-primary/20 transition-all bento-card cursor-pointer">
                <div className="p-8 flex flex-col z-10 h-full justify-between relative">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">FinTech</span>
                        <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 text-[10px] font-bold uppercase tracking-wider">Mobile App</span>
                      </div>
                      <h3 className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">NeoBank Prime</h3>
                      <p className="text-graphite/60 dark:text-gray-400 text-sm mt-2 max-w-md">Комплексное продвижение мобильного банкинга. Вывод в ТОП-3 App Store и Google Play в 4 странах СНГ.</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-1 shadow-sm border border-green-200 dark:border-green-800">
                      <span className="material-symbols-outlined text-base">trending_up</span> +420% MAU
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 md:mt-12">
                    <div className="bg-background-light dark:bg-zinc-800 p-5 rounded-xl border border-graphite/5">
                      <div className="text-xs text-gray-500 mb-1 font-medium uppercase">CAC (Стоимость клиента)</div>
                      <div className="text-2xl font-bold text-graphite dark:text-white">-35%</div>
                      <div className="w-full bg-gray-200 dark:bg-zinc-700 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    <div className="bg-background-light dark:bg-zinc-800 p-5 rounded-xl border border-graphite/5">
                      <div className="text-xs text-gray-500 mb-1 font-medium uppercase">Установок / мес</div>
                      <div className="text-2xl font-bold text-graphite dark:text-white">120k+</div>
                      <div className="w-full bg-gray-200 dark:bg-zinc-700 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div className="bg-graphite dark:bg-white h-full rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div className="bg-background-light dark:bg-zinc-800 p-5 rounded-xl border border-graphite/5 col-span-2 sm:col-span-1">
                      <div className="text-xs text-gray-500 mb-1 font-medium uppercase">ROMI</div>
                      <div className="text-2xl font-bold text-graphite dark:text-white">x8.5</div>
                      <div className="w-full bg-gray-200 dark:bg-zinc-700 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-3/4 md:w-1/2 h-full opacity-10 pointer-events-none bg-contain bg-right-bottom bg-no-repeat mix-blend-multiply dark:mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN32SzW7xiNCrrkciFU2K-PDaxC3wKHMCLDzo_P8tSyzStvKRIXL_QinmHCGcm_ohYfxmmM1bjlxOC_jDjGepIiPXNJR8gHz_L0GrHG6Vs-zZWxfqX1uHEByc5Lv4VqpkZD-ohF3OJpJXSNzzKAgYE95dpAlBYUHNeznuxhGf77KPzXfOtnThc7D939grhvWkqPEPqi6kjobUccwCba3P7YMwM7UUKB-yDBc95rG95OpgQe7d2m_PGxDsvRYzXxNeicVc8InWZHn5x')"}}></div>
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none">
                  <svg className="absolute bottom-0 left-0 w-full h-24 text-primary opacity-20" preserveAspectRatio="none" viewBox="0 0 100 25">
                    <path d="M0 25 L0 15 C 10 15, 10 10, 20 12 C 30 14, 30 5, 40 8 C 50 11, 50 18, 60 15 C 70 12, 70 2, 80 5 C 90 8, 90 0, 100 0 V 25 H 0 Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div className="md:col-span-4 bg-graphite text-white rounded-2xl p-6 shadow-soft flex flex-col justify-between relative overflow-hidden group bento-card cursor-pointer min-h-[320px]">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvjT4rPpk_YNu34zeeObEHrUVnNvZxKrtVFFDPdtyGr1wB2D_5fAwU6c2uL7zmkxHkBQbEBTXjAqzPMGVk4LQFUDrStCIbOkw4iOR4lztuFhiS3VgIXTvZyl7OWImsmquBx_MdM6xAgPhWgdaC3nLnBqGsOxTmoCT79CbCCGaLSx8E4y_yGxuM0Tkwx3tjN3qo015RGSRAHa3FwWe7F4_CuALW70qxuXLNuma3VQYYBpUts-DfC5CFmr4zZME7YOiU2jvcIUPSq76P')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-graphite/90 via-transparent to-graphite/90"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <span className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                    <span className="material-symbols-outlined text-white text-xl">shopping_bag</span>
                  </span>
                  <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded shadow-lg shadow-primary/30">TOP 1</span>
                </div>
                <div className="relative z-10 mt-auto">
                  <div className="text-xs text-gray-300 font-bold uppercase mb-1">Fashion Retail</div>
                  <h3 className="text-2xl font-bold mb-4">Brand Store</h3>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-white">+315%</span>
                    <span className="text-xs text-gray-400 mb-1 max-w-[80px] leading-tight">Рост органического трафика</span>
                  </div>
                  <div className="flex gap-1.5 h-16 items-end w-full">
                    <div className="flex-1 bg-white/10 hover:bg-white/20 transition-colors h-[30%] rounded-t-sm"></div>
                    <div className="flex-1 bg-white/10 hover:bg-white/20 transition-colors h-[45%] rounded-t-sm"></div>
                    <div className="flex-1 bg-white/10 hover:bg-white/20 transition-colors h-[40%] rounded-t-sm"></div>
                    <div className="flex-1 bg-white/10 hover:bg-white/20 transition-colors h-[55%] rounded-t-sm"></div>
                    <div className="flex-1 bg-white/10 hover:bg-white/20 transition-colors h-[70%] rounded-t-sm"></div>
                    <div className="flex-1 bg-primary h-[100%] rounded-t-sm relative group/bar">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-graphite text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">Nov</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-soft relative overflow-hidden group border border-transparent hover:border-primary/20 bento-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="size-12 rounded-full bg-cover bg-center border-2 border-background-light" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKE6GAiMbh5lYcTk6Wtp5mtp_vAM0AhoqA3QJhMG5kKSg3Gnuf2xI-4F3HP2tlWB_Ya-78BP2PNNjeOr8uvpKQ4T6ZN9O4OEk5aPqsvu5yZkUXqqLyC3Ku659M4rzrI0mUaV9RWdkcJOneIlivLKKLCBJ8gVA6-PcjMf8qJ7kvwgrc6Z2yXPoSdBy6fmodocihcSiAE5z-a2MZCjtfEHfgRzv0MS_hbxuLOLQBv8Z85I5Z5E5b1Et66S-4eCv41otK6WUTzJ5aUVFn')"}}></div>
                    <div>
                      <div className="text-sm font-bold text-graphite dark:text-white">Алексей Мельников</div>
                      <div className="text-xs text-gray-500">CEO, TechStart Inc.</div>
                    </div>
                  </div>
                  <p className="text-sm text-graphite/80 dark:text-gray-300 italic leading-relaxed mb-4">
                    "Команда SEO Eleven внедрила AI-аналитику, что позволило нам сократить расходы на контекстную рекламу вдвое при сохранении объемов продаж."
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video group cursor-pointer shadow-inner">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center z-10">
                    <div className="size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-white fill-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 mix-blend-overlay"></div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-bold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm z-10">0:45</div>
                </div>
              </div>
              <div className="md:col-span-4 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between group border border-transparent hover:border-primary/20 bento-card">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-lg leading-none">Lead Gen AI</h3>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wide">Automation</span>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <div className="text-4xl font-bold text-graphite dark:text-white">2,450</div>
                    <div className="text-sm text-green-600 font-bold mb-1.5 bg-green-50 px-1.5 py-0.5 rounded text-[10px]">+22%</div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Квалифицированных лидов</div>
                </div>
                <div className="relative w-full h-32 mt-4 flex items-center justify-center">
                  <div className="relative size-28">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-100 dark:text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                      <path className="text-primary drop-shadow-lg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                      <span className="text-xl font-bold text-graphite dark:text-white">75%</span>
                      <span className="block text-[8px] text-gray-400">AI Source</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface dark:bg-zinc-900 rounded-2xl p-6 shadow-soft flex flex-col justify-between group border border-transparent hover:border-primary/20 bento-card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">B2B SaaS</span>
                    <h3 className="text-xl font-bold mt-1">CRM System</h3>
                  </div>
                  <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-graphite dark:text-white">
                    <span className="material-symbols-outlined">bar_chart</span>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-500 font-medium">Organic Growth</span>
                      <span className="font-bold text-graphite dark:text-white">+180%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full shadow-sm" style={{width: "85%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-500 font-medium">Conversion Rate</span>
                      <span className="font-bold text-graphite dark:text-white">4.8%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-2">
                      <div className="bg-graphite dark:bg-gray-400 h-2 rounded-full shadow-sm" style={{width: "65%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-500 font-medium">Retention</span>
                      <span className="font-bold text-graphite dark:text-white">92%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-2">
                      <div className="bg-gray-400 dark:bg-gray-600 h-2 rounded-full shadow-sm" style={{width: "92%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12 bg-graphite-light text-white rounded-2xl p-8 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden bento-card min-h-[160px]">
                <div className="relative z-10 max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary">stacks</span>
                    <h3 className="text-2xl font-bold">Технологический подход</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">В каждом кейсе мы используем проприетарные алгоритмы, нейросети и стек 2026 года для достижения прогнозируемых результатов.</p>
                </div>
                <div className="relative z-10 flex gap-8 md:gap-16 flex-wrap justify-center md:justify-end w-full md:w-auto">
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">database</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Big Data</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">neurology</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Neural</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">query_stats</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Predictive</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">rocket_launch</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scale</span>
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute left-0 bottom-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg shadow-primary/20 relative overflow-hidden mt-6 w-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Хотите такие же результаты?</h2>
                <p className="text-white/90 text-lg">Закажите бесплатный разбор вашей ниши. Мы покажем точки роста, которые не видят ваши конкуренты.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                  <CTAButton 
                    variant="secondary" 
                    size="md"
                    source="cases-cta"
                    className="w-full sm:w-auto"
                  >
                    Обсудить проект
                  </CTAButton>
                </div>
                <p className="text-xs text-white/60 mt-2">Конфиденциальность гарантирована.</p>
              </div>
            </div>
          </div>
        </main>
        <NewFooter />
      </div>
    </TailwindWrapper>
  );
}

export default NewCasesPage;
