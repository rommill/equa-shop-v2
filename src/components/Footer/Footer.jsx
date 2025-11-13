// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/images/social/facebook.png",
      url: "https://www.facebook.com/EQUAOU",
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Instagram",
      icon: "/images/social/instagram.png",
      url: "https://www.instagram.com/equamedical/",
      color: "hover:bg-pink-500 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: "/images/social/linkedin.png",
      url: "https://www.linkedin.com/company/equa-ltd/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "YouTube",
      icon: "/images/social/ytb.png",
      url: "https://www.youtube.com/watch?v=gKvC0wycuqc&t=6s",
      color: "hover:bg-red-500 hover:text-white",
    },
  ];

  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                EQUA Shop
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Your trusted partner for premium medical equipment and beauty
              products. Quality and innovation since 1995.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color} border-2 border-transparent hover:border-white`}
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="https://pood.equa.ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="https://pood.equa.ee/kategooria/eestis-toodetud-meditsiinitooted-ja-tarvikud/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Medical Products
              </a>
              <a
                href="https://pood.equa.ee/kategooria/fusioteraapia/massaaziolid-ja-kreemid/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
              >
                Beauty Products
              </a>
              <a
                href="https://pood.equa.ee/meist/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <span>📧</span>
                <a
                  href="mailto:info@equa.ee"
                  className="hover:text-blue-500 transition duration-300"
                >
                  info@equa.ee
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <span>📞</span>
                <a
                  href="tel:+37212345678"
                  className="hover:text-blue-500 transition duration-300"
                >
                  +372 738 4444
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <span>📍</span>
                <span>Lembitu 8, Tartu, Eesti</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <span>🕒</span>
                <span>Mon-Fri: 8.30 - 16.30</span>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">
              Our Location
            </h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.1234567890123!2d26.7145!3d58.3800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36fa1cfc43b1%3A0x8e47d0f7c8c8c8c8!2sLembitu%208%2C%2050430%20Tartu%2C%20Estonia!5e0!3m2!1sen!2see!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EQUA Shop Location"
              />
              <div className="p-3 bg-gray-50 dark:bg-slate-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Lembitu 8, Tartu
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* 👈 Закрываем grid */}
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 EQUA Shop. All rights reserved.
          </p>

          <div className="mt-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Created by{" "}
              <a
                href="https://www.linkedin.com/in/roman-filippov-76220933b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-blue-500 transition duration-300"
              >
                Roman Filippov
              </a>
            </span>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://pood.equa.ee/privaatsuspoliitika/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="https://pood.equa.ee/muugitingimused/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="https://pood.equa.ee/kontakt/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>{" "}
      {/* 👈 Закрываем container */}
    </footer>
  );
};

export default Footer;
