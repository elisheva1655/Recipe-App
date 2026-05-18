import { useEffect, useState, useContext } from "react";
import { LikedContext } from "../components/favoritesContext";
import styles from "../styles/LikedPage.module.css";
import { Link } from "react-router-dom";
import { LikedRecipe } from "../components/likedRecipe";
import { LikedHeader } from "../components/LikedHeader";
export function LikedPage() {
  const { favorites, addFavorites } = useContext(LikedContext);

  console.log("CONTEXT RECEIVED IN Liked PAGE:", favorites);
  if (favorites.length > 0) {
    return (
      <main>
        <LikedHeader />
        <div className={styles.productList}>
          {favorites.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className={styles.product}>
                <LikedRecipe item={product} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
  } else {
    return <h1>There are no favorites</h1>;
  }
}
