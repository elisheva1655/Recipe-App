import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form className={styles.form} onSubmit={onSearch}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
