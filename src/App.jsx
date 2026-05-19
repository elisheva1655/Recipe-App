import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { LikedPage } from "./pages/LikedPage";
import { PageNotFound } from "./pages/PageNotFound";
import { createContext, useContext, useState } from "react";
import { LikedProvider } from "./components/favoritesContext";
import { ScrollToTop } from "./ScrollToTop";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="appWrapper">
      <ScrollToTop />
      <Navbar />
      <main className="mainContent">
        <LikedProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/favorites" element={<LikedPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </LikedProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
