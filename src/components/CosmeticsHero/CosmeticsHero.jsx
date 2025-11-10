// src/components/CosmeticsHero/CosmeticsHero.jsx
import React from "react";

const CosmeticsHero = ({ brand }) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400"></div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center text-white">
        {/* Логотип */}
        {brand.logo && (
          <div className="mb-8">
            <img
              src={brand.logo}
              alt={brand.name}
              className="mx-auto h-24 w-auto mb-6 rounded-2xl shadow-lg"
              // 👆 добавляем rounded-2xl и shadow-lg
            />
          </div>
        )}

        {/* Заголовки */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{brand.name}</h1>

        <p className="text-2xl md:text-3xl mb-6 text-pink-100">
          {brand.slogan}
        </p>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
          {brand.description}
        </p>

        {/* CTA кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Shop Collection
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsHero;
