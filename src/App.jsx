import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { ProductPage } from "./pages/ProductPage";
import { LikedPage } from "./pages/LikedPage";
import { PageNotFound } from "./pages/PageNotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="appWrapper">
      <Navbar />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<LikedPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
