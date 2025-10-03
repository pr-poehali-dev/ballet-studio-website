import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
