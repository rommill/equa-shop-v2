// src/routes/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContext";
import Hero from "../components/Hero/Hero";
import BannerComponent from "../components/Banner/BannerComponent";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { medicalProducts, featuredProducts } from "../data/productsData";

const Home = ({ bannerData }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, "medical");
  };

  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-blue-50 to-indigo-100"
      : "bg-gradient-to-br from-slate-900 to-slate-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";

  return (
    <div className={`min-h-screen ${bgClass} ${textColor}`}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Medical Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Featured Medical Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              High-quality medical equipment and supplies for professionals and
              home use
            </p>
          </div>

          <ProductGrid
            products={medicalProducts}
            onAddToCart={handleAddToCart}
            buttonColor="from-blue-500 to-indigo-500"
          />

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden text-center inline-block"
            >
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Special Offers Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Special Medical Bundles</h3>
            <p className="mb-6 text-lg">
              Save up to 30% on our professional medical kits
            </p>
            <Link
              to="/products"
              className="group relative px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden inline-block border-2 border-white"
            >
              <span className="relative z-10">View Special Offers</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Bundles */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Bundles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete solutions for medical professionals and clinics
            </p>
          </div>

          <ProductGrid
            products={featuredProducts}
            onAddToCart={handleAddToCart}
            buttonColor="from-blue-500 to-indigo-500"
          />
        </div>
      </section>

      {/* 5. Beauty Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Discover EQUA Beauty</h3>
            <p className="mb-6 text-lg">
              Premium skincare and cosmetics collection
            </p>
            <Link
              to="/cosmetics"
              className="group relative px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden inline-block"
            >
              <span className="relative z-10">Explore Beauty Products</span>
              <div className="absolute inset-0 bg-pink-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Banner Section */}
      <BannerComponent data={bannerData} />

      {/* 7. Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We care about the quality of every product and our customers'
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Fast Delivery",
                text: "We deliver orders citywide within 24 hours",
                color: "bg-blue-500",
              },
              {
                icon: "⭐",
                title: "Quality Guarantee",
                text: "All products undergo strict quality control before shipping",
                color: "bg-green-500",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                text: "Our support team is always ready to help with any questions",
                color: "bg-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-white/10 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
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

      {/* 8. CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-2xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already discovered
              the world of Equa Shop
            </p>
            <Link
              to="/products"
              className="group relative px-12 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden inline-block"
            >
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-slate-700">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Equa Shop. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/products"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300"
            >
              Products
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
