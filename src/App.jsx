// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import CosmeticsHeader from "./components/CosmeticsHeader/CosmeticsHeader";
import { BannerData } from "./data/BannerData";
import Cosmetics from "./routes/Cosmetics";
import { CosmeticsCartProvider } from "./contexts/CosmeticsCartContext"; // 👈 Возвращаем
import { CartProvider } from "./contexts/CartContext"; // 👈 Оставляем для главной

import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import ProductsPage from "./routes/Products";
import CartPage from "./routes/Cart";
import CosmeticsCart from "./routes/CosmeticsCart";

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <CosmeticsCartProvider>
        {" "}
        {location.pathname === "/cosmetics" ||
        location.pathname === "/cosmetics-cart" ? (
          <CosmeticsHeader />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<HomePage bannerData={BannerData} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />{" "}
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/cosmetics-cart" element={<CosmeticsCart />} />{" "}
        </Routes>
      </CosmeticsCartProvider>
    </CartProvider>
  );
}

export default App;
