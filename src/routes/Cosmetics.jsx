import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useCosmeticsCart } from "../contexts/CosmeticsCartContext"; // 👈 Возвращаем косметический контекст
import CosmeticsHero from "../components/CosmeticsHero/CosmeticsHero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { cosmeticsData } from "../data/cosmeticsData";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";

const Cosmetics = () => {
  const { theme } = useTheme();
  const { addToCart } = useCosmeticsCart(); // 👈 Используем косметическую корзину

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-pink-50 to-rose-50"
      : "bg-gradient-to-br from-purple-900 to-pink-900";

  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  return (
    <div className={`min-h-screen pt-20 ${bgClass} ${textColor}`}>
      {/* Герой-секция с логотипом */}
      <CosmeticsHero brand={cosmeticsData.brand} />

      {/* Сетка товаров */}
      <section id="products" className="py-16 px-4">
        {" "}
        {/* 👈 должен быть id="products" */}
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <ProductGrid
            products={cosmeticsData.products}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* CTA Section с крутыми кнопками */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Ready to Glow?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Discover your perfect beauty routine with our premium collection
            </p>

            {/* Кнопки в стиле Hero */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* КНОПКА 1: Градиентная (Эффект БЕЛОЙ полосы) */}
              <a
                href="https://pood.equa.ee/kategooria/fusioteraapia/massaaziolid-ja-kreemid/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden text-center inline-block"
              >
                <span className="relative z-10">Shop All Products</span>
                {/* Белая полоса, вызывающая эффект заливки */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              {/* КНОПКА 2: Контурная (Эффект БЕЛОЙ полосы + смена цвета текста) */}
              <a
                href="https://pood.equa.ee/kontakt/"
                target="_blank"
                rel="noopener noreferrer"
                // Здесь мы сохраняем контур и меняем цвет фона/текста при наведении
                className="group relative px-8 py-4 text-lg font-semibold border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-xl 
               transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-pink-500 hover:text-white overflow-hidden text-center inline-block"
              >
                <span className="relative z-10">Get Consultation</span>
                {/* Теперь здесь тоже БЕЛАЯ полоса, которая создает одинаковый эффект заливки */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* О бренде секция */}
      <section
        id="about"
        className="py-16 px-4 bg-white/50 dark:bg-black/20"
        data-aos="fade-up"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About EQUA Beauty
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {cosmeticsData.brand.description}
          </p>

          {/* Статистика */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              ["100%", "Natural Ingredients"],
              ["Cruelty Free", "Vegan Products"],
              ["24/7", "Beauty Support"],
            ].map(([value, label], index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Cosmetics;
