import { createContext, useContext, useState } from "react";
export const LikedContext = createContext();
export function LikedProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const addFavorites = (product) => {
    let updatedFavorites;
    if (!product || !product.idMeal) {
      return;
    }
    const isFav = favorites.some((fav) => fav.idMeal === product.idMeal);
    if (isFav) {
      updatedFavorites = favorites.filter(
        (fav) => fav.idMeal !== product.idMeal,
      );
    } else {
      updatedFavorites = [...favorites, product];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <LikedContext.Provider value={{ favorites, addFavorites }}>
      {children}
    </LikedContext.Provider>
  );
}
