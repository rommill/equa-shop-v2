// src/components/ProductGrid/ProductGrid.jsx - ПОЛНЫЙ КОД
import React from "react";
import { useCosmeticsCart } from "../../contexts/CosmeticsCartContext";

const ProductGrid = ({ products }) => {
  const { addToCart, getCartItemsCount } = useCosmeticsCart();

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Adding to cart:", product);

    addToCart(product); // 👈 Без второго параметра, если твой контекст так работает

    console.log("Cart items count after add:", totalItems);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
        >
          {/* Картинка продукта */}
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Бейдж поверх картинки */}
            {product.badge && (
              <div className="absolute top-3 right-3">
                <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm font-medium shadow-lg">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Контент продукта */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {product.name}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {product.category}
          </p>

          <div className="mb-4">
            {product.features?.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1"
              >
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-pink-600">{product.price}</p>
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className="group relative px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Add to Cart</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
