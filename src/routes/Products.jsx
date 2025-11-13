import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContext";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { medicalProducts } from "../data/productsData";

const Products = () => {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, "medical");
  };

  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-blue-50 to-indigo-100"
      : "bg-gradient-to-br from-slate-900 to-slate-800";

  return (
    <div className={`min-h-screen pt-20 ${bgClass}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            All Medical Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Complete catalog of our medical equipment
          </p>
        </div>
        <ProductGrid
          products={medicalProducts}
          onAddToCart={handleAddToCart}
          buttonColor="from-blue-500 to-indigo-500"
        />
      </div>
    </div>
  );
};

export default Products;
