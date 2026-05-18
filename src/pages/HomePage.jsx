import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [lastSearched, setLastSearched] = useState("");

  const searchRecipes = async (e) => {
    if (e) e.preventDefault();
    if (!query) return;

    setLoading(true);
    setHasSearched(false);
    setLastSearched(query);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Recipe Explorer</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={searchRecipes} />
      </header>

      {loading && <LoadingSpinner />}

      {!loading && recipes.length > 0 && (
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}

      {!loading && hasSearched && recipes.length === 0 && (
        <div className={styles.noResults}>
          <h3>No recipes found for "{lastSearched}"</h3>
          <p>Try searching for something else</p>
        </div>
      )}
    </div>
  );
}
