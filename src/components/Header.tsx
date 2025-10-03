const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://cdn.poehali.dev/files/61ad2929-98c4-4637-90f2-63dd2fd4d7f8.jpg" alt="Балетная мастерская" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-purple-900">Балетная мастерская</h1>
            <p className="text-xs text-purple-600">Арсен Маталаев</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Главная</a>
          <a href="#schedule" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Расписание</a>
          <a href="#pricing" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Абонементы</a>
          <a href="#about" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">О студии</a>
          <a href="#gallery" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Галерея</a>
          <a href="#instructors" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Преподаватели</a>
          <a href="#news" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Новости</a>
          <a href="#contacts" className="text-sm font-medium text-purple-900 hover:text-purple-600 transition-colors">Контакты</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
