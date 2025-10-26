import React from "react";

const About = () => {
  return (
    // Добавляем вертикальный padding, чтобы контент не прилипал к краям
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center py-20">
      <div className="flex flex-col items-start max-w-3xl gap-6 p-6 rounded-xl bg-white shadow-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 text-left">
          About Equa Shop
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed mt-2">
          Welcome to **Equa Shop**, a project designed to showcase modern web
          development techniques using **React**, **Tailwind CSS**, and **React
          Router**. This application demonstrates seamless client-side
          navigation, responsive design across all devices, and an effective
          state management system for the shopping cart.
        </p>

        <h2 className="text-3xl font-semibold text-slate-700 mt-4">
          Our Mission
        </h2>
        <p className="text-slate-600">
          Our goal is to build highly efficient and user-friendly digital
          experiences. By leveraging the power of modern JavaScript frameworks
          and utility-first CSS, we ensure that every interaction is fast,
          fluid, and intuitive. This environment serves as a foundational
          template for creating scalable e-commerce frontends.
        </p>

        <div className="w-full h-1 bg-indigo-500 rounded-full my-4 opacity-50"></div>

        <h3 className="text-xl font-medium text-slate-600">
          Key Technologies Used:
        </h3>
        <ul className="list-disc list-inside text-slate-600 ml-4">
          <li>**React.js:** For building the user interface.</li>
          <li>
            **Tailwind CSS:** For rapid, responsive, and utility-first styling.
          </li>
          <li>
            **React Router:** For declarative navigation and smooth page
            transitions.
          </li>
          <li>
            **Context API:** For simple global state management (e.g., the
            shopping cart).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
