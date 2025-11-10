import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Hero from "../components/Hero/Hero";
import BannerComponent from "../components/Banner/BannerComponent";

const Home = ({ bannerData }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  return (
    <div className={`min-h-screen ${bgClass} ${textColor}`}>
      {/* 1. Hero Section - остаётся первым */}
      <Hero />

      {/* 2. Блок косметики - теперь ВТОРЫМ (перед баннером) */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Discover EQUA Beauty</h3>
            <p className="mb-6 text-lg">
              Premium skincare and cosmetics collection
            </p>
            <Link
              to="/cosmetics"
              className="inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:scale-105 transition-transform hover:shadow-lg"
            >
              Explore Beauty Products
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Banner Section - теперь ТРЕТЬИМ */}
      <BannerComponent data={bannerData} />

      {/* 4. Features Section - остальные секции без изменений */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы заботимся о качестве каждого товара и удовлетворенности наших
              клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Быстрая доставка",
                text: "Доставляем заказы по всему городу в течение 24 часов",
                color: "bg-blue-500",
              },
              {
                icon: "⭐",
                title: "Гарантия качества",
                text: "Все товары проходят строгий контроль качества перед отправкой",
                color: "bg-green-500",
              },
              {
                icon: "💬",
                title: "Поддержка 24/7",
                text: "Наша команда поддержки всегда готова помочь с любыми вопросами",
                color: "bg-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${cardBg} p-8 rounded-2xl shadow-lg border border-white/10 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110`}
                >
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`${cardBg} rounded-2xl p-12 shadow-2xl border border-white/20 transition-all duration-700 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
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
              className={`inline-block px-12 py-4 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-105 hover:shadow-lg ${buttonPrimary}`}
            >
              Перейти к товарам
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
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
