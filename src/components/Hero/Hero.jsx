import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import "./Hero.css";
import { BannerData } from "../../data/BannerData";

import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Grand Equa",
    title: "EQUA Oak Line",
    title2: "Massage table with innovation solutions.",
    description: "Elevate your expectations, the Grand reality will follow",
    fullDescription:
      "Enhance the elegance of your space with the well-defined charm of genuine oak wood appearance to evoke cosy mood. The Oak Line massage table boasts oak details, seamlessly blending sophistication with style. Its signature styling makes it the perfect addition to the most stylish interiors, creating a space that exudes timeless elegance.",
    features: ["Blue", "Green", "Beige", "Grey", "Light Grey", "Light Beige"],
    price: "$123,321",
    accentColor: "from-blue-500 to-cyan-400",
    badge: "NEW",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Grand Equa",
    title: "Handcrafted Masterpieces",
    title2: "Handcrafted with care",
    description: "Luxurious Skin-Friendly Materials",
    fullDescription:
      "Immerse yourself in the artistry of EQUA upholstery shop with Oak Line's handcrafted massage table. Ultra-careful attention to detail is evident in every inch, from the 100% handcrafted construction to the elegant straight-line double stitching pattern on the upholstery. This is a masterfully crafted piece of functional art.",
    features: ["Blue", "Green", "Beige", "Grey", "Light Grey", "Light Beige"],
    price: "$123,321",
    accentColor: "from-purple-500 to-pink-500",
    badge: "HOT",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Grand Equa",
    title: "Convenient Height Adjustment",
    title2: "Ultimate Comfort",
    description: "Elevate your expectations",
    fullDescription:
      "Enhance the elegance of your space with the well-defined charm of genuine oak wood appearance to evoke cosy mood. The Oak Line massage table boasts oak details, seamlessly blending sophistication with style. Its signature styling makes it the perfect addition to the most stylish interiors, creating a space that exudes timeless elegance.",
    features: ["Blue", "Green", "Beige", "Grey", "Light Grey", "Light Beige"],
    price: "$123,321",
    accentColor: "from-gray-600 to-gray-400",
    badge: "PRO",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Oak Line",
    title: "Pressure-Sensitive Armrests",
    title2: "DESIGNED for comfort",
    description: "innovative, mechanical, pressure-sensitive armrests.",
    fullDescription:
      "Experience unparalleled comfort with Oak Line's innovative, mechanical, pressure-sensitive armrests. These armrests effortlessly adapt to the customer's arm length in seconds, adding an ergonomic touch. Designed with user comfort in mind, they redefine your massage table setup experience.",
    features: ["Blue", "Green", "Beige", "Grey", "Light Grey", "Light Beige"],
    price: "$123,321",
    accentColor: "from-amber-500 to-orange-400",
    badge: "INNOVATION",
  },
];

const Hero = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
    setIsLoaded(true);
  }, []);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    accessibility: true,
    adaptiveHeight: false,
    focusOnSelect: false,
    waitForAnimate: true,
  };

  const heroBg =
    theme === "light"
      ? "bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      : "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800";

  const cardBg = theme === "light" ? "bg-white" : "bg-slate-800";
  const borderColor =
    theme === "light" ? "border-gray-200" : "border-slate-700";
  const currentAccent =
    HeroData[currentSlide]?.accentColor || "from-blue-500 to-purple-600";

  return (
    <div id="home" className="overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${currentAccent} rounded-full blur-3xl opacity-20`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr ${currentAccent} rounded-full blur-3xl opacity-20`}
        />
      </div>

      <div
        className={`pt-24 md:pt-28 lg:pt-32 ${heroBg} flex justify-center items-center relative z-10 py-8 min-h-screen`}
      >
        <div className="container mx-auto px-4 mt-4">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-4">
                  {/* Text Content */}
                  <div className="flex flex-col justify-center gap-4 sm:gap-6 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
                    {/* Animated Badge */}
                    {data.badge && (
                      <div
                        data-aos="fade-down"
                        data-aos-duration="600"
                        className="inline-block"
                      >
                        <span
                          className={`px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r ${data.accentColor} shadow-lg hover:scale-105 transition-transform duration-300`}
                        >
                          {data.badge}
                        </span>
                      </div>
                    )}

                    <h1
                      data-aos="fade-right"
                      data-aos-duration="700"
                      data-aos-delay="100"
                      className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase mt-2"
                    >
                      {data.subtitle}
                    </h1>

                    <h1
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="200"
                      className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                    >
                      {data.title}
                    </h1>

                    <h1
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="300"
                      className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase bg-gradient-to-r ${data.accentColor} bg-clip-text text-transparent leading-tight`}
                    >
                      {data.title2}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="400"
                      className="relative mt-2"
                    >
                      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                        {data.description}
                      </p>
                      <div
                        className={`absolute -left-4 top-0 w-1 h-full bg-gradient-to-b ${data.accentColor} hidden lg:block animate-pulse`}
                      />
                    </div>

                    {/* Animated Buttons */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay="500"
                      className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6"
                    >
                      <Link
                        to="/products"
                        className={`group relative px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r ${data.accentColor} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden text-center hover:-translate-y-1`} // Добавляем подъем
                      >
                        <span className="relative z-10">Buy it now</span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </Link>

                      <div className="hidden sm:block px-8 py-4 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 cursor-default">
                        <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                          Hover over the card →
                        </span>
                      </div>
                    </div>

                    {/* Animated Stats */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="600"
                      className="flex justify-center lg:justify-start gap-8 mt-8"
                    >
                      {[
                        ["5.0", "Rating"],
                        ["2K+", "Sold"],
                        ["99%", "Satisfied"],
                      ].map(([value, label], idx) => (
                        <div key={idx} className="text-center group">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${data.accentColor} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                          >
                            {value}
                          </div>
                          <div className="text-sm text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 flex justify-center relative mt-8 lg:mt-0">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                      className="hero-flip-card"
                    >
                      <div className="hero-flip-card-inner">
                        {/* Front Side */}
                        <div className="hero-flip-card-front">
                          <div
                            className={`relative ${cardBg} ${borderColor} rounded-3xl p-6 shadow-2xl border-2 w-full h-full`}
                          >
                            <img
                              src={data.img}
                              alt={data.title}
                              className="w-full h-full object-contain drop-shadow-2xl rounded-3xl hero-image"
                            />

                            {/* Floating Elements */}
                            <div
                              className={`absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r ${data.accentColor} rounded-full opacity-80`}
                            />
                            <div
                              className={`absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r ${data.accentColor} rounded-full opacity-80`}
                            />

                            <div
                              className={`price-tag absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${data.accentColor} text-white text-sm font-bold rounded-full shadow-lg transform rotate-12 animate-float z-50`}
                            >
                              {data.price}
                            </div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 hero-flip-card:hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
                              <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm">
                                👆 Hover for details
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="hero-flip-card-back">
                          <div
                            className={`bg-gradient-to-br ${data.accentColor} text-white rounded-3xl p-6 sm:p-8 shadow-2xl w-full h-full flex flex-col justify-between`}
                          >
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                                {data.title}
                              </h3>

                              <div
                                className={`text-sm sm:text-lg opacity-90 text-center mb-4 sm:mb-6 leading-relaxed ${
                                  expandedDescriptions[data.id]
                                    ? ""
                                    : "line-clamp-3"
                                }`}
                              >
                                {data.fullDescription}
                              </div>

                              {/*  Read More/Less */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleDescription(data.id);
                                }}
                                className="w-full text-center py-2 text-sm font-semibold bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 mb-4 hover:scale-105"
                              >
                                {expandedDescriptions[data.id]
                                  ? "Show Less"
                                  : "Read More"}
                              </button>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                {data.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center text-xs sm:text-sm group hover:translate-x-1 transition-transform duration-300" // Добавляем сдвиг
                                  >
                                    <div className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Link
                              to="/products"
                              className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 hover:bg-white/30 rounded-xl text-center font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                            >
                              Buy for {data.price}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
