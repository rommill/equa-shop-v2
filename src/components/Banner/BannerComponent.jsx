import React from "react";
import { Link } from "react-router-dom";

const BannerComponent = ({ data }) => {
  // Простая проверка, чтобы не упало, если данные не пришли
  if (!data) return null;

  return (
    <section
      className="py-12 px-4"
      style={{ backgroundColor: data.bgColor || "#f42c37" }}
    >
      <div className="container mx-auto max-w-6xl text-center text-white">
        <div className="flex flex-col md:flex-row justify-between items-center bg-black/20 p-8 rounded-xl backdrop-blur-sm shadow-xl">
          <div className="text-left md:w-1/2">
            <p className="text-xl font-bold uppercase mb-2">{data.discount}!</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">
              {data.title} {data.title2}
            </h2>
            <p className="text-sm opacity-80 mb-4">{data.title4}</p>
            <p className="text-lg font-semibold mb-6">
              Срок действия: {data.date}
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Узнать больше
            </Link>
          </div>

          {/* Placeholder для изображения */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-xs object-contain transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
