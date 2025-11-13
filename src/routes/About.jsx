import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              🏪 Equa Shop
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Modern E-commerce Demonstration Platform
            </p>
          </div>

          {/* Основной контент с разметкой */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <strong>Equa Shop</strong> is a cutting-edge e-commerce
              demonstration platform built with modern web technologies,
              showcasing the capabilities of React ecosystem for online retail.
              This project represents the next generation of digital shopping
              experiences, specifically designed for medical equipment and
              beauty products retailers.
            </p>

            {/* Технические особенности */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                🚀 Technical Excellence
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Equa Shop</strong> demonstrates technical excellence
                through:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>React 18</strong> with functional components and hooks
                  for modern development
                </li>
                <li>
                  <strong>Tailwind CSS</strong> for utility-first responsive
                  design and rapid prototyping
                </li>
                <li>
                  <strong>React Router v6</strong> for seamless single-page
                  application navigation
                </li>
                <li>
                  <strong>Context API + useReducer</strong> for centralized
                  state management
                </li>
                <li>
                  <strong>Vite</strong> for lightning-fast development builds
                  and optimal performance
                </li>
                <li>
                  <strong>LocalStorage Integration</strong> for persistent cart
                  data across sessions
                </li>
                <li>
                  <strong>Component-Based Architecture</strong> for maximum
                  reusability and maintainability
                </li>
              </ul>
            </div>

            {/* E-commerce Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                🛍️ E-commerce Features
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our platform delivers comprehensive e-commerce functionality:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>Dual Marketplace System</strong> - Independent
                  shopping carts for Medical Equipment and Beauty Products
                </li>
                <li>
                  <strong>Real-time Cart Management</strong> - Instant updates,
                  quantity controls, and persistent storage
                </li>
                <li>
                  <strong>Responsive Product Grids</strong> - Optimized layouts
                  with hover effects and smooth animations
                </li>
                <li>
                  <strong>Advanced Product Filtering</strong> - Category-based
                  organization and search capabilities
                </li>
                <li>
                  <strong>Theme Switching</strong> - Light/Dark mode with user
                  preference persistence
                </li>
                <li>
                  <strong>Mobile-First Design</strong> - Flawless shopping
                  experience across all devices
                </li>
                <li>
                  <strong>Professional UI/UX</strong> - Intuitive navigation and
                  conversion-optimized flows
                </li>
              </ul>
            </div>

            {/* Business Value */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                💼 Business Value Proposition
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Equa Shop</strong> delivers tangible business benefits:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>Brand Consistency</strong> - Cohesive design language
                  across product categories
                </li>
                <li>
                  <strong>Conversion Optimization</strong> - User-centric design
                  driving higher engagement and sales
                </li>
                <li>
                  <strong>Scalable Architecture</strong> - Foundation for
                  unlimited product expansion
                </li>
                <li>
                  <strong>Global Readiness</strong> - Multi-language and
                  currency support ready
                </li>
                <li>
                  <strong>SEO Optimized</strong> - Search engine friendly
                  structure and performance
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                🛠️ Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <strong>Frontend Framework:</strong> React 18 with Hooks
                </div>
                <div>
                  <strong>Routing:</strong> React Router v6
                </div>
                <div>
                  <strong>Styling:</strong> Tailwind CSS + Custom CSS-in-JS
                </div>
                <div>
                  <strong>State Management:</strong> React Context API +
                  useReducer
                </div>
                <div>
                  <strong>Build Tool:</strong> Vite
                </div>
                <div>
                  <strong>Deployment:</strong> Vercel/Hosting Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
