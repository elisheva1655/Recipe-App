import { useNavigate } from "react-router-dom";
import styles from "../styles/RecipeCard.module.css"; // Import the module

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/product/${recipe.idMeal}`)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className={styles.image}
      />
      <h3 className={styles.title}>{recipe.strMeal}</h3>
      <p className={styles.category}>{recipe.strCategory}</p>
    </div>
  );
}
