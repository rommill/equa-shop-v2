import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Hero from "../components/Hero/Hero";

const Home = () => {
  const { theme } = useTheme();

  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-blue-50 to-indigo-100"
      : "bg-gradient-to-br from-slate-900 to-slate-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-slate-800";
  const buttonPrimary =
    theme === "light"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-blue-500 hover:bg-blue-600";
  const buttonSecondary =
    theme === "light"
      ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
      : "bg-slate-700 hover:bg-slate-600 text-white";

  return (
    <div className={`min-h-screen ${bgClass} ${textColor}`}>
      {/* Hero Section with Carousel */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы заботимся о качестве каждого товара и удовлетворенности наших
              клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards остаются без изменений */}
            <div
              className={`${cardBg} p-8 rounded-2xl shadow-lg border border-white/10 text-center transition duration-300 hover:shadow-xl`}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Доставляем заказы по всему городу в течение 24 часов
              </p>
            </div>

            <div
              className={`${cardBg} p-8 rounded-2xl shadow-lg border border-white/10 text-center transition duration-300 hover:shadow-xl`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Все товары проходят строгий контроль качества перед отправкой
              </p>
            </div>

            <div
              className={`${cardBg} p-8 rounded-2xl shadow-lg border border-white/10 text-center transition duration-300 hover:shadow-xl`}
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Наша команда поддержки всегда готова помочь с любыми вопросами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`${cardBg} rounded-2xl p-12 shadow-2xl border border-white/20`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать покупки?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных клиентов, которые уже открыли
              для себя мир Equa Shop
            </p>
            <Link
              to="/products"
              className={`inline-block px-12 py-4 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-105 ${buttonPrimary}`}
            >
              Перейти к товарам
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          theme === "light" ? "border-gray-200" : "border-slate-700"
        }`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Equa Shop. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Контакты
            </Link>
            <Link
              to="/products"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Товары
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
