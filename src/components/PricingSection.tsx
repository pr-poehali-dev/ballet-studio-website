import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingItem {
  id: number;
  name: string;
  price: string;
  description: string;
  popular?: boolean;
}

interface PricingSectionProps {
  pricingData: PricingItem[];
}

const PricingSection = ({ pricingData }: PricingSectionProps) => {
  return (
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
  );
};

export default PricingSection;
