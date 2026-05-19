import { useEffect, useState, useContext, createContext } from "react";
import { useParams, Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme } from "@mui/material/styles";
import styles from "../styles/ProductPage.module.css";
import { Back } from "../components/backButton";
import { LikedHeart } from "../components/likedHeart";
import { LikedContext } from "../components/favoritesContext";
import LoadingSpinner from "../components/LoadingSpinner";
//export const UserContext = createContext();

export function ProductPage() {
  const [isClick, setClick] = useState();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [buttonClick, setButtonClick] = useState(false);
  const { favorites, addFavorites } = useContext(LikedContext);
  console.log("CONTEXT RECEIVED IN PRODUCT PAGE:", favorites);
  const { id } = useParams();
  const ingredientsTemp = [];

  // const favArray = new Set();

  const fetchRecipe = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url, { method: "get" });
    const data = await response.json();

    setRecipe(data.meals[0]);
    setIngredientsTemp(data.meals[0]);
    setLoading(false);
  };
  const setIngredientsTemp = (recipe) => {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredientsTemp.push(
          `${recipe[`strMeasure${i}`]} ${recipe[`strIngredient${i}`]} `,
        );
      } else {
        break;
      }
    }
    setIngredients(ingredientsTemp);
    console.log("ingredients" + ingredients);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const newFavorite = {
    idMeal: recipe?.idMeal,
    strMeal: recipe?.strMeal,
    strMealThumb: recipe?.strMealThumb,
    strCategory: recipe?.strCategory,
  };
  return (
    <main>
      <div className={styles.headerLine}>
        <Back />

        <h2 className={styles.header}>{recipe?.strMeal}</h2>
        <div></div>
      </div>
      <div className={styles.item}>
        <div className={styles.grid2}>
          <h2>Ingredients</h2>
          <ul className={styles.list}>
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions: </h3>
          <p> {recipe?.strInstructions}</p>
        </div>
        <div className={styles.grid1}>
          <img
            src={recipe?.strMealThumb}
            alt={recipe?.strMealThumb}
            className={styles.img}
          />
          <div className={styles.favorites}>
            <h4>Add to Favorites: </h4>
            <LikedHeart favoriteItem={newFavorite} />
          </div>
        </div>
      </div>
    </main>
  );
}
