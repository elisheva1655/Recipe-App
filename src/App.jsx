import "./App.css";
import { Route, Routes } from "react-router-dom";
import  HomePage  from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { LikedPage } from "./pages/LikedPage";
import { PageNotFound } from "./pages/PageNotFound";
import { createContext, useContext, useState } from "react";
import { LikedProvider } from "./components/favoritesContext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      
      <Navbar />
      <main style={{ marginTop: "80px" }}>
      <LikedProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<LikedPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LikedProvider>
      </main>
    </>
  );
}

export default App;
