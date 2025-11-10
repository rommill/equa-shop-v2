import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BannerComponent = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!data) return null;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Основной контейнер баннера */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center bg-black/20 p-8 rounded-2xl backdrop-blur-sm shadow-2xl border border-white/10">
          {/* Левая часть - текст с анимациями */}
          <div className="text-left md:w-1/2">
            {/* Discount - прилетает сверху с мягким миганием */}
            <p
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="100"
              className="text-xl font-bold uppercase mb-2 text-yellow-300 animate-pulse transition-opacity duration-1000"
              style={{ animation: "pulse 2s ease-in-out infinite" }}
            >
              {data.discount}!
            </p>

            {/* Title - прилетает слева */}
            <h2
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="200"
              className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight"
            >
              {data.title}
            </h2>

            {/* Title2 - прилетает справа */}
            <h2
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="300"
              className="text-3xl md:text-4xl font-bold mb-2 text-yellow-200"
            >
              {data.title2}
            </h2>

            {/* Title3 - прилетает снизу */}
            <h3
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
            >
              {data.title3}
            </h3>

            {/* Description - появляется с увеличением */}
            <p
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              className="text-sm opacity-80 mb-4 max-w-md leading-relaxed"
            >
              {data.title4}
            </p>

            {/* Date - прилетает снизу с задержкой */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-lg">📅</span>
              <p className="text-lg font-semibold">Valid until: {data.date}</p>
            </div>

            {/* Кнопка в стиле Hero */}
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="700"
            >
              <Link
                to="/products"
                className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-white/20 to-white/10 border border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden text-center inline-block backdrop-blur-sm"
              >
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
          </div>

          {/* Правая часть - изображение БЕЗ AOS, только hover */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Изображение БЕЗ data-aos - только hover эффект */}
              <img
                src={data.image}
                alt={data.title}
                className={`w-full max-w-md object-contain transform transition-all duration-500 ease-out ${
                  isHovered
                    ? "scale-125 translate-x-8 md:translate-x-14 lg:translate-x-20"
                    : "scale-110 translate-x-8 md:translate-x-12 lg:translate-x-16"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Фон баннера который идет на всю ширину */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: data.bgColor || "#f42c37" }}
      >
        {/* Дополнительные декоративные элементы */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default BannerComponent;
