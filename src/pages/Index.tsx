import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const scheduleData = [
    { id: 1, day: 'Понедельник', time: '18:00', class: 'Классический балет', level: 'Начинающие', instructor: 'Арсен Маталаев' },
    { id: 2, day: 'Понедельник', time: '19:30', class: 'Партерная гимнастика', level: 'Все уровни', instructor: 'Мария Светлова' },
    { id: 3, day: 'Вторник', time: '17:00', class: 'Детский балет', level: '6-10 лет', instructor: 'Анна Петрова' },
    { id: 4, day: 'Вторник', time: '19:00', class: 'Классический балет', level: 'Продолжающие', instructor: 'Арсен Маталаев' },
    { id: 5, day: 'Среда', time: '18:00', class: 'Растяжка', level: 'Все уровни', instructor: 'Мария Светлова' },
    { id: 6, day: 'Четверг', time: '18:00', class: 'Классический балет', level: 'Начинающие', instructor: 'Арсен Маталаев' },
    { id: 7, day: 'Четверг', time: '19:30', class: 'Вариации', level: 'Продвинутый', instructor: 'Арсен Маталаев' },
    { id: 8, day: 'Пятница', time: '17:00', class: 'Детский балет', level: '6-10 лет', instructor: 'Анна Петрова' },
    { id: 9, day: 'Суббота', time: '11:00', class: 'Классический балет', level: 'Все уровни', instructor: 'Арсен Маталаев' },
    { id: 10, day: 'Суббота', time: '13:00', class: 'Партерная гимнастика', level: 'Все уровни', instructor: 'Мария Светлова' },
  ];

  const pricingData = [
    { id: 1, name: '4 занятия', price: '3 500', description: 'Абонемент на 4 занятия в месяц' },
    { id: 2, name: '8 занятий', price: '6 500', description: 'Абонемент на 8 занятий в месяц', popular: true },
    { id: 3, name: '12 занятий', price: '9 000', description: 'Абонемент на 12 занятий в месяц' },
    { id: 4, name: 'Безлимит', price: '12 000', description: 'Безлимитный абонемент на месяц' },
  ];

  const newsData = [
    { id: 1, date: '15 Сентября', title: 'Открытый урок для новичков', description: 'Приглашаем всех желающих на бесплатный открытый урок по классическому балету' },
    { id: 2, date: '10 Сентября', title: 'Новый преподаватель детского балета', description: 'Рады представить Анну Петрову - нового преподавателя детских групп' },
    { id: 3, date: '1 Сентября', title: 'Начало нового сезона', description: 'Стартует набор в новые группы для начинающих и продолжающих' },
    { id: 4, date: '25 Августа', title: 'Летний интенсив завершён', description: 'Благодарим всех участников летнего интенсива! Было прекрасно!' },
  ];

  const instructors = [
    { name: 'Арсен Маталаев', title: 'Художественный руководитель', bio: 'Заслуженный артист балета, солист Большого театра. Педагогический стаж более 15 лет.' },
    { name: 'Мария Светлова', title: 'Педагог по партеру и растяжке', bio: 'Мастер спорта по художественной гимнастике, сертифицированный инструктор по стретчингу.' },
    { name: 'Анна Петрова', title: 'Педагог детского балета', bio: 'Выпускница Академии русского балета им. А.Я. Вагановой. Специализация - работа с детьми.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
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

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 mb-6">
              Откройте для себя мир балета
            </h2>
            <p className="text-xl md:text-2xl text-purple-800 mb-8 max-w-3xl mx-auto font-light">
              Профессиональная балетная студия для детей и взрослых. Классический балет, растяжка, партер.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Calendar" className="mr-2" />
                Записаться на занятие
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
              >
                <Icon name="Phone" className="mr-2" />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Calendar" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Расписание занятий</h2>
            <p className="text-lg text-purple-700">Выберите удобное время для занятий</p>
          </div>

          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все занятия</TabsTrigger>
              <TabsTrigger value="beginner">Начинающие</TabsTrigger>
              <TabsTrigger value="kids">Детские</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {scheduleData.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="Clock" className="text-purple-600" size={20} />
                          <span className="text-lg font-semibold text-purple-900">{item.day}, {item.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-1">{item.class}</h3>
                        <p className="text-purple-600">{item.level} • {item.instructor}</p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedClass(item)}
                            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full"
                          >
                            <Icon name="UserPlus" className="mr-2" size={18} />
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-purple-900">Запись на занятие</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                              <p className="text-sm text-purple-700 mb-1">{selectedClass?.day}, {selectedClass?.time}</p>
                              <p className="font-semibold text-purple-900">{selectedClass?.class}</p>
                              <p className="text-sm text-purple-600">{selectedClass?.instructor}</p>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <Label htmlFor="name">Ваше имя</Label>
                                <Input id="name" placeholder="Введите ваше имя" />
                              </div>
                              <div>
                                <Label htmlFor="phone">Телефон</Label>
                                <Input id="phone" placeholder="+7 (___) ___-__-__" />
                              </div>
                              <div>
                                <Label htmlFor="email">Email (необязательно)</Label>
                                <Input id="email" type="email" placeholder="example@mail.ru" />
                              </div>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white">
                              Подтвердить запись
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="beginner" className="space-y-4">
              {scheduleData.filter(item => item.level === 'Начинающие' || item.level === 'Все уровни').map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="Clock" className="text-purple-600" size={20} />
                          <span className="text-lg font-semibold text-purple-900">{item.day}, {item.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-1">{item.class}</h3>
                        <p className="text-purple-600">{item.level} • {item.instructor}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full">
                        <Icon name="UserPlus" className="mr-2" size={18} />
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="kids" className="space-y-4">
              {scheduleData.filter(item => item.class.includes('Детский')).map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="Clock" className="text-purple-600" size={20} />
                          <span className="text-lg font-semibold text-purple-900">{item.day}, {item.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-1">{item.class}</h3>
                        <p className="text-purple-600">{item.level} • {item.instructor}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full">
                        <Icon name="UserPlus" className="mr-2" size={18} />
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Абонементы</h2>
            <p className="text-lg text-purple-700">Выберите подходящий абонемент</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingData.map((item) => (
              <Card 
                key={item.id} 
                className={`relative hover:shadow-xl transition-all ${item.popular ? 'border-2 border-purple-600 scale-105' : 'border-purple-100'}`}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-purple-600 mb-6">{item.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                      {item.price}
                    </span>
                    <span className="text-xl text-purple-600 ml-1">₽</span>
                  </div>
                  <Button 
                    className={`w-full rounded-full ${
                      item.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white' 
                        : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                    }`}
                    variant={item.popular ? 'default' : 'outline'}
                  >
                    Купить абонемент
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-80 h-80 object-contain transform -rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-80 h-80 object-contain transform rotate-12 scale-x-[-1]" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">О студии</h2>
          </div>
          <div className="prose prose-lg mx-auto text-purple-800">
            <p className="text-lg leading-relaxed mb-6">
              <strong className="text-purple-900">Балетная мастерская</strong> — это профессиональная студия классического балета под руководством заслуженного артиста Арсена Маталаева.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Мы предлагаем занятия для детей и взрослых всех уровней подготовки — от первых шагов в балете до профессионального совершенствования. В нашей студии царит атмосфера творчества, взаимоуважения и стремления к прекрасному.
            </p>
            <p className="text-lg leading-relaxed">
              Наша миссия — сделать балет доступным для каждого, кто мечтает прикоснуться к этому удивительному искусству. Присоединяйтесь к нам и откройте для себя мир грации, пластики и красоты!
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-64 h-64 object-contain transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-64 h-64 object-contain transform rotate-12 scale-x-[-1]" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Images" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Фотогалерея</h2>
            <p className="text-lg text-purple-700">Атмосфера нашей студии</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="/img/fdbd186c-8b70-4f5b-803e-8e79f82b06e2.jpg" alt="Балетная студия" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Балетный зал</h3>
                <p className="text-sm text-purple-600">Профессиональное оборудование</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="/img/0b9073b1-8dc2-4e0e-9a6f-f0d9b5e209b7.jpg" alt="Занятие в студии" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Занятия у станка</h3>
                <p className="text-sm text-purple-600">Отработка техники</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="/img/644ed172-8a18-4e52-b8b4-d98b49fe7866.jpg" alt="Выступление" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Выступления</h3>
                <p className="text-sm text-purple-600">Отчётные концерты</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="/img/c7b9a8e1-27c4-4254-b7d4-af49464a2a3f.jpg" alt="Детские занятия" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Детские группы</h3>
                <p className="text-sm text-purple-600">Обучение с любовью</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="/img/b2dd2fdd-bc46-4381-af38-ddfc026eaac9.jpg" alt="Пуанты" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Классический балет</h3>
                <p className="text-sm text-purple-600">Работа на пуантах</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src="https://cdn.poehali.dev/files/61ad2929-98c4-4637-90f2-63dd2fd4d7f8.jpg" alt="Логотип" className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">Наша студия</h3>
                <p className="text-sm text-purple-600">Балетная мастерская</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-10 right-20 opacity-5 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-96 h-96 object-contain" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Наши преподаватели</h2>
            <p className="text-lg text-purple-700">Профессиональная команда мастеров своего дела</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-purple-100">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{instructor.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{instructor.title}</p>
                  <p className="text-purple-700">{instructor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-32 left-5 opacity-5 pointer-events-none">
          <img src="/img/6e2925c3-d1da-4e19-b439-e1f9c380c8fb.jpg" alt="" className="w-72 h-72 object-contain transform rotate-45" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Bell" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Новости и объявления</h2>
            <p className="text-lg text-purple-700">Следите за событиями студии</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {newsData.map((news) => (
              <Card key={news.id} className="hover:shadow-xl transition-shadow border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-lg text-center min-w-[80px]">
                      <div className="text-2xl font-bold">{news.date.split(' ')[0]}</div>
                      <div className="text-sm">{news.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-900 mb-2">{news.title}</h3>
                      <p className="text-purple-700">{news.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="MapPin" size={48} className="mx-auto mb-4 text-purple-600" />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">Контакты</h2>
            <p className="text-lg text-purple-700">Мы всегда рады вашим вопросам</p>
          </div>

          <Card className="border-purple-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon name="Phone" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 mb-1">Телефон</h3>
                      <p className="text-purple-700">8-904-491-72-03</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon name="MapPin" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 mb-1">Адрес</h3>
                      <p className="text-purple-700">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon name="Clock" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 mb-1">Режим работы</h3>
                      <p className="text-purple-700">Пн-Сб: 10:00 - 21:00</p>
                      <p className="text-purple-700">Вс: выходной</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Мы в соцсетях</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://vk.com/arsen.matalaev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors"
                    >
                      <Icon name="Share2" className="text-purple-600" size={24} />
                    </a>
                    <a 
                      href="https://instagram.com/arsen.matalaev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors"
                    >
                      <Icon name="Instagram" className="text-purple-600" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-purple-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-purple-200">© 2024 Балетная мастерская. Арсен Маталаев. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;