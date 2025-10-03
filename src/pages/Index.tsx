import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import InstructorsSection from '@/components/InstructorsSection';
import NewsSection from '@/components/NewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

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
      <Header />
      <HeroSection />
      <ScheduleSection 
        scheduleData={scheduleData} 
        selectedClass={selectedClass} 
        setSelectedClass={setSelectedClass} 
      />
      <PricingSection pricingData={pricingData} />
      <AboutSection />
      <GallerySection />
      <InstructorsSection instructors={instructors} />
      <NewsSection newsData={newsData} />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
