import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/c4ac7438-6ac6-4d45-a68a-6bf4ac7ae9b4.png"
              alt="ГазСервис"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              О компании
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-gazservice-blue to-gazservice-blue-light"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональные газовые и строительные работы
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Более 15 лет опыта в области газификации, строительства и монтажных
            работ. Гарантия качества и соблюдение всех стандартов безопасности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gazservice-blue hover:bg-gray-100"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Получить расчет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gazservice-blue"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                О компании ГазСервис
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы специализируемся на выполнении полного комплекса газовых и
                строительных работ. Наша команда сертифицированных специалистов
                обеспечивает высокое качество услуг и строгое соблюдение
                технических норм и правил безопасности.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">поддержка</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/img/63493738-818e-4a79-8817-c896354c1598.jpg"
                alt="Команда ГазСервис"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gazservice-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предлагаем полный спектр услуг от проектирования до ввода объектов
              в эксплуатацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gas Services */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Fuel" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Газовые работы</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Газификация объектов
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Монтаж газопроводов
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Подключение газового оборудования
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Техническое обслуживание
                </li>
              </ul>
              <div className="mt-6">
                <img
                  src="/img/08d5b197-70fe-4936-9a46-bd21ec4cdec8.jpg"
                  alt="Газовые работы"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </Card>

            {/* Construction Services */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Строительные работы
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Строительство зданий
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Реконструкция объектов
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Отделочные работы
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Инженерные системы
                </li>
              </ul>
              <div className="mt-6">
                <img
                  src="/img/015293e8-1517-45c2-8799-f1d95139e3f6.jpg"
                  alt="Строительные работы"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </Card>

            {/* Additional Services */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Дополнительные услуги
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Проектирование
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Экспертиза и согласования
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Авторский надзор
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-primary mr-2 mt-0.5"
                  />
                  Гарантийное обслуживание
                </li>
              </ul>
              <div className="mt-6 bg-gradient-to-r from-gazservice-blue to-gazservice-blue-light rounded-lg h-32 flex items-center justify-center">
                <Icon name="Award" size={48} className="text-white" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600">
              Готовы обсудить ваш проект или ответить на вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">+7 (XXX) XXX-XX-XX</div>
                    <div className="text-gray-600 text-sm">Круглосуточно</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">info@gazservice.ru</div>
                    <div className="text-gray-600 text-sm">
                      Ответим в течение часа
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">
                      г. Москва, ул. Примерная, д. 123
                    </div>
                    <div className="text-gray-600 text-sm">Офис и склад</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Режим работы</h4>
                <div className="text-gray-600 space-y-1">
                  <div>Пн-Пт: 8:00 - 18:00</div>
                  <div>Сб: 9:00 - 15:00</div>
                  <div>Вс: выходной</div>
                  <div className="text-primary font-medium">
                    Аварийная служба: 24/7
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Запросить консультацию
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Тип услуги
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option>Выберите услугу</option>
                    <option>Газовые работы</option>
                    <option>Строительные работы</option>
                    <option>Проектирование</option>
                    <option>Консультация</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Опишите детали проекта..."
                  ></textarea>
                </div>

                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.poehali.dev/files/c4ac7438-6ac6-4d45-a68a-6bf4ac7ae9b4.png"
                  alt="ГазСервис"
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные газовые и строительные работы с гарантией
                качества.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={16} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Газификация объектов</li>
                <li>Строительные работы</li>
                <li>Проектирование</li>
                <li>Техническое обслуживание</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГазСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
