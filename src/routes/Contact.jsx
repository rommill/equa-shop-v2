import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  const bgClass =
    theme === "light"
      ? "bg-gradient-to-br from-blue-50 to-indigo-100"
      : "bg-gradient-to-br from-slate-900 to-slate-800";

  return (
    <div className={`min-h-screen pt-20 ${bgClass}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Contact Us
          </h1>
          <a
            href="https://pood.equa.ee/kontakt/"
            target="_blank"
            rel="noopener noreferrer"
            className="..."
          >
            Contact page
          </a>
          {/* Можно добавить форму обратной связи */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
