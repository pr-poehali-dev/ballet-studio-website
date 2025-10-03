import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ScheduleItem {
  id: number;
  day: string;
  time: string;
  class: string;
  level: string;
  instructor: string;
}

interface ScheduleSectionProps {
  scheduleData: ScheduleItem[];
  selectedClass: ScheduleItem | null;
  setSelectedClass: (item: ScheduleItem) => void;
}

const ScheduleSection = ({ scheduleData, selectedClass, setSelectedClass }: ScheduleSectionProps) => {
  return (
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
  );
};

export default ScheduleSection;
