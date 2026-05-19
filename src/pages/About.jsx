import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>
          Your Kitchen, <span className={styles.accent}>Reimagined.</span>
        </h1>
        <p>Discover the joy of cooking with Recipe Explorer.</p>
      </header>

      <section className={styles.content}>
        <p>
          Welcome to <strong>Recipe Explorer</strong>, the ultimate destination
          for home cooks. We believe that finding your next favorite recipe
          shouldn't be a chore. Our search engine connects you with high-quality
          recipes from around the globe, tailored to your search.
        </p>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Fast Search</h3>
            <p>
              Find recipes instantly by searching a keyword. Your next meal is
              just a click away!
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Explore New Dishes</h3>
            <p>
              Discover delicious recipes from various cuisines. Switch things up
              and something new!
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Save your Favorites</h3>
            <p>
              Keep your most delicious recipes easily accessible by saving them
              to your favorites. Come back to the recipes you love!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
