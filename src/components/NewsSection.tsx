import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface NewsSectionProps {
  newsData: NewsItem[];
}

const NewsSection = ({ newsData }: NewsSectionProps) => {
  return (
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
  );
};

export default NewsSection;
