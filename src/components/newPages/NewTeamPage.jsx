import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TailwindWrapper from './TailwindWrapper';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';

/**
 * Компонент для страницы Наша команда (новая версия)
 * Путь: /new/team
 * Преобразован из NewPage/Наша команда.html
 */
function NewTeamPage() {
  const location = useLocation();

  return (
    <TailwindWrapper>
      <div className="bg-background-light dark:bg-background-dark text-graphite dark:text-white overflow-x-hidden w-full">
        <NewHeader currentPath={location.pathname} />
        <main className="w-full flex flex-col items-center pt-12 pb-20 px-4 sm:px-6">
          <div className="max-w-[1200px] w-full flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/10 text-xs font-semibold uppercase tracking-wider mb-6 border border-graphite/5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Meet the Experts
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-graphite dark:text-white">
                  Команда, которая <br/><span className="text-primary">меняет правила</span>
                </h1>
                <p className="text-lg text-graphite/70 dark:text-gray-400 max-w-lg leading-relaxed">
                  За цифрами и алгоритмами стоят люди. Мы объединяем креатив, аналитику и технологии, чтобы ваш бизнес рос быстрее рынка.
                </p>
              </div>
              <div className="hidden md:flex gap-8 pb-2">
                <div>
                  <div className="text-4xl font-bold text-graphite dark:text-white">45+</div>
                  <div className="text-sm text-graphite/60 dark:text-gray-400">Сотрудников</div>
                </div>
                <div className="w-px bg-graphite/10 dark:bg-white/10 h-full"></div>
                <div>
                  <div className="text-4xl font-bold text-graphite dark:text-white">12</div>
                  <div className="text-sm text-graphite/60 dark:text-gray-400">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">
              <div className="sm:col-span-2 sm:row-span-2 relative rounded-2xl overflow-hidden group shadow-soft bento-card">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwODB8G5v0CdmtxyPn70Pnq3F5dMRL53qVFqXXQVhLDpEjrOdDHVTY5hVgklXvP_aFJG6qi66flHDltY3jMnW1-A3CooK7WHgTkhWf5JynrK0TEzZZnsSkSdT2H2VOD64QBSZB0kXmTRn6B9BJgWprTcIKXtdv17bPI0MKw5vBZ8VfeYNUC0lWDI6iSX85ppysm1ocw4BTdEEuG3sZ6E_Lr6VjDzUmuB1au0_ugIfJMnWqlu__SzV9SooIMvD4U-PASKMpxsSe-p_j')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-block px-2 py-1 bg-primary text-white text-xs font-bold rounded mb-2 shadow-sm">CEO & Founder</div>
                  <h3 className="text-3xl font-bold text-white mb-2">Алексей Волков</h3>
                  <p className="text-white/80 text-sm md:text-base line-clamp-2 max-w-md">Создатель методологии SEO 2.0. Визионер, объединивший классический маркетинг и AI-технологии.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-soft bento-card bg-surface dark:bg-zinc-900">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawzFKELGolEo5AreprIYjQ5ovIkBxEE1RGSzPLI9WZPgjZTjtwof09d-3vizNAhoGxUJmRrFE6ZQCA5Hd6xzz6v9vmsEfkBrsi_0deCXmCM44qznJEi2D-ZP_Mo3h9ygjfE1tcjOe5eG-ikyWw_PExTkeEi8akQzn577QitFAVeI_VtDCHotFlgSosKojR35m1gBsD_OlFmlmR2jAQn_bmSVhWCbnE4mItTY5CO3Q_yGwQof_87iudXjuhhHU02xvKguzrCSjleFv')"}}></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Мария Соколова</h3>
                  <p className="text-white/70 text-sm">Head of SEO</p>
                </div>
              </div>
              <div className="bg-graphite text-white p-8 rounded-2xl flex flex-col justify-between shadow-soft bento-card relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined !text-9xl">format_quote</span>
                </div>
                <div className="relative z-10">
                  <p className="font-display text-xl leading-relaxed mb-6">"Мы не гадаем на кофейной гуще. Мы строим математические модели успеха."</p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-primary"></div>
                    <span className="text-sm font-mono text-primary uppercase">Принцип #1</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-soft bento-card bg-surface dark:bg-zinc-900">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKE6GAiMbh5lYcTk6Wtp5mtp_vAM0AhoqA3QJhMG5kKSg3Gnuf2xI-4F3HP2tlWB_Ya-78BP2PNNjeOr8uvpKQ4T6ZN9O4OEk5aPqsvu5yZkUXqqLyC3Ku659M4rzrI0mUaV9RWdkcJOneIlivLKKLCBJ8gVA6-PcjMf8qJ7kvwgrc6Z2yXPoSdBy6fmodocihcSiAE5z-a2MZCjtfEHfgRzv0MS_hbxuLOLQBv8Z85I5Z5E5b1Et66S-4eCv41otK6WUTzJ5aUVFn')"}}></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Дмитрий Ковалев</h3>
                  <p className="text-white/70 text-sm">AI & Analytics Lead</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-soft bento-card bg-surface dark:bg-zinc-900">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBxZer1OBMICv07KlWZ9ysXJoLSaUmUQye-dXic2ePTL0J7lvCS-d2LYtlxU2Mei2fFIfhh17cWfgc0wk_Nrz-C5aDnub2g-dFurCxlUGYzIEqYkBwQpOLDj1ZUDhVqbInOJvLt-gp2J7wLwNH-6uS5DzE7xY3_Yn7imbKTA0kBY6-SSntTySUHU2q0daY-xBH29nIuFIE1JawlS5zozMS7bimJrxnmg0haIj0pT583Qc54uDOb2QvNG5IGY1NOZQRnn3rlZX63DAf')"}}></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Артем Виноградов</h3>
                  <p className="text-white/70 text-sm">Lead Developer</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-soft bento-card bg-surface dark:bg-zinc-900">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCijwze5MOtTLi1RRnjkUmmBMNxywq-Hu6dzQBqhkbRSbvcPdX-vR1GhhsbTdUPLuX3Gyya_SYPMo2X1yOHXij69_UOmplye0tvNZVtsuLc7R5dlARDrxzQZqSCVOaEv8uQz3L154PR2zbpZn4qeqndbo2XhZg5dSx1ybXfWzQw0c-KVZ5Bo6yh-Sz5cZimbRONB7k1C_MdI8d2wraHSdvQE6t0YXpl9Mmx9fdvVkwUe-QDAV0jaTJ_JrNZdxM9fYI1FDC8_koVeMeU')"}}></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Елена Романова</h3>
                  <p className="text-white/70 text-sm">Art Director</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-soft bento-card bg-surface dark:bg-zinc-900">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZaIfjxyivyCKe843H9Cqp4TwwKsFqc7wZuQFSoMlSwypXDRXmkkkoN4xQN1yOXVYSHh51poouCbV1iNv0AppiDmXFiOv9XPRIDerKthGavdp7lT3VLPVUo7EjC6rbpxaEHHyLKVOeO1Rcc4NyBvs0Hc89jbWG1vQuiHlsso2F2YDm2r1ZuvVxP2lk8pE-xTl_6zujwi1X0bWeZYGstK8zsf547DeJpxkCeGkjS8JtmJC29MSVnCohdPeNsZHkZX0HkSWPx1Cukx96')"}}></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white">Ольга Белова</h3>
                  <p className="text-white/70 text-sm">Senior PPC Manager</p>
                </div>
              </div>
              <div className="bg-primary text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-soft bento-card group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="size-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <span className="material-symbols-outlined !text-3xl">add</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
                  <p className="text-white/90 text-sm mb-6 max-w-[200px]">Ищем таланты в SEO, AI и разработке</p>
                  <button className="px-6 py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors shadow-md">
                    Смотреть вакансии
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft flex flex-col items-start gap-4 hover:shadow-hover transition-shadow">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Прозрачность</h3>
                  <p className="text-sm text-graphite/60 dark:text-gray-400 leading-relaxed">Мы предоставляем полные отчеты и доступ ко всем метрикам. Вы всегда знаете, за что платите.</p>
                </div>
              </div>
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft flex flex-col items-start gap-4 hover:shadow-hover transition-shadow">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Непрерывное развитие</h3>
                  <p className="text-sm text-graphite/60 dark:text-gray-400 leading-relaxed">Наша команда тратит 20% времени на изучение новых технологий и алгоритмов ранжирования.</p>
                </div>
              </div>
              <div className="bg-surface dark:bg-zinc-900 p-8 rounded-2xl shadow-soft flex flex-col items-start gap-4 hover:shadow-hover transition-shadow">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Партнерство</h3>
                  <p className="text-sm text-graphite/60 dark:text-gray-400 leading-relaxed">Мы не подрядчики, мы — часть вашего бизнеса, заинтересованная в росте прибыли.</p>
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

export default NewTeamPage;
