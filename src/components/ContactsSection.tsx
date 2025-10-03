import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
