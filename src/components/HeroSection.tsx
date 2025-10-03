import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
