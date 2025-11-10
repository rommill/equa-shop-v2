// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { BannerData } from "./data/BannerData";
import Cosmetics from "./routes/Cosmetics";

import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import ProductsPage from "./routes/Products";
import CartPage from "./routes/Cart";

function App() {
  return (
    <>
      <Navbar /> {/* 👈 Просто Navbar без условий */}
      <Routes>
        <Route path="/" element={<HomePage bannerData={BannerData} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
      </Routes>
    </>
  );
}

export default App;
