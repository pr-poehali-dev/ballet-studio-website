import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Instructor {
  name: string;
  title: string;
  bio: string;
}

interface InstructorsSectionProps {
  instructors: Instructor[];
}

const InstructorsSection = ({ instructors }: InstructorsSectionProps) => {
  return (
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
  );
};

export default InstructorsSection;
