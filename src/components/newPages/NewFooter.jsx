import React from 'react';
import { Link } from 'react-router-dom';

function NewFooter() {
  return (
    <footer className="bg-graphite text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/new" className="flex items-center gap-2 mb-6">
              <img 
                src="/images/logo-white-text.svg" 
                alt="SEO Eleven" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Digital-студия нового поколения. Объединяем SEO, аналитику и AI для роста вашего бизнеса.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Меню</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/new/services" className="hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/new/cases" className="hover:text-primary transition-colors">Кейсы</Link></li>
              <li><Link to="/new/blog" className="hover:text-primary transition-colors">Блог</Link></li>
              <li><Link to="/new/about" className="hover:text-primary transition-colors">О нас</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Услуги</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/new/services" className="hover:text-primary transition-colors">SEO Продвижение</Link></li>
              <li><Link to="/new/services" className="hover:text-primary transition-colors">Контекстная реклама</Link></li>
              <li><Link to="/new/services" className="hover:text-primary transition-colors">AI Автоматизация</Link></li>
              <li><Link to="/new/services" className="hover:text-primary transition-colors">Разработка</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Санкт-Петербург, пл. Конституции, 3/2</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:info@seoeleven.ru">info@seoeleven.ru</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <a className="hover:text-primary transition-colors" href="tel:+79319703777">+7 931 970-37-77</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 SEO Eleven. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-primary transition-colors" href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a className="text-gray-500 hover:text-primary transition-colors" href="https://vk.com" target="_blank" rel="noopener noreferrer">VKontakte</a>
            <a className="text-gray-500 hover:text-primary transition-colors" href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;

