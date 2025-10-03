import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/img/fdbd186c-8b70-4f5b-803e-8e79f82b06e2.jpg',
      title: 'Балетный зал',
      description: 'Профессиональное оборудование',
      alt: 'Балетная студия'
    },
    {
      id: 2,
      image: '/img/0b9073b1-8dc2-4e0e-9a6f-f0d9b5e209b7.jpg',
      title: 'Занятия у станка',
      description: 'Отработка техники',
      alt: 'Занятие в студии'
    },
    {
      id: 3,
      image: '/img/644ed172-8a18-4e52-b8b4-d98b49fe7866.jpg',
      title: 'Выступления',
      description: 'Отчётные концерты',
      alt: 'Выступление'
    },
    {
      id: 4,
      image: '/img/c7b9a8e1-27c4-4254-b7d4-af49464a2a3f.jpg',
      title: 'Детские группы',
      description: 'Обучение с любовью',
      alt: 'Детские занятия'
    },
    {
      id: 5,
      image: '/img/b2dd2fdd-bc46-4381-af38-ddfc026eaac9.jpg',
      title: 'Классический балет',
      description: 'Работа на пуантах',
      alt: 'Пуанты'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/files/61ad2929-98c4-4637-90f2-63dd2fd4d7f8.jpg',
      title: 'Наша студия',
      description: 'Балетная мастерская',
      alt: 'Логотип'
    }
  ];

  return (
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
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-purple-100">
              <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-bold text-purple-900">{item.title}</h3>
                <p className="text-sm text-purple-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
