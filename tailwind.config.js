/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Указываем Tailwind, где искать классы для генерации CSS
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Включает все файлы .js, .ts, .jsx, .tsx в папке src
  ],
  // Активируем Dark Mode через класс
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
