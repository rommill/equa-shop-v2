// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import CosmeticsHeader from "./components/CosmeticsHeader/CosmeticsHeader";
import { BannerData } from "./data/BannerData";
import Cosmetics from "./routes/Cosmetics";
import { CosmeticsCartProvider } from "./contexts/CosmeticsCartContext";
import CosmeticsCart from "./routes/CosmeticsCart";

import HomePage from "./routes/Home";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import ProductsPage from "./routes/Products";
import CartPage from "./routes/Cart";

function App() {
  const location = useLocation();

  return (
    <CosmeticsCartProvider>
      {" "}
      {location.pathname === "/cosmetics" ? <CosmeticsHeader /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage bannerData={BannerData} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/cosmetics-cart" element={<CosmeticsCart />} />
      </Routes>
    </CosmeticsCartProvider>
  );
}

export default App;
