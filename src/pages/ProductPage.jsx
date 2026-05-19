import { useEffect, useState, useContext, createContext } from "react";
import { useParams, Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme } from "@mui/material/styles";
import styles from "../styles/ProductPage.module.css";
import { Back } from "../components/backButton";
import { LikedHeart } from "../components/likedHeart";
import { LikedContext } from "../components/favoritesContext";
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
          `${recipe[`strIngredient${i}`]}: ${recipe[`strMeasure${i}`]}`,
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

  const newFavorite = {
    id: id,
    name: recipe?.strMeal,
    pic: recipe?.strMealThumb,
  };
  if (loading) {
    return <h1>Page Loading</h1>;
  }
  return (
    <main>
      <div className={styles.item}>
        
        <div className={styles.grid2}>
          <h2>Ingredients</h2>
          <ol>
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
          <p>{recipe?.strInstructions}</p>
          <Back />
          <Link to="/favorites">
            <button>LikePage</button>
          </Link>
        </div>
        <div className={styles.grid1}>
          <LikedHeart favoriteItem={newFavorite} />
          <h2>{recipe?.strMeal}</h2>
          <img src={recipe?.strMealThumb} alt={recipe?.strMealThumb} />
        </div>
      </div>
    </main>
  );
}
