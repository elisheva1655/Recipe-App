import { Link } from "react-router-dom";
import styles from "../styles/backButton.module.css";
export function Back() {
  return (
    <>
      <Link to="/">
        <button className={styles.homeButton}>Back to Home</button>
      </Link>
    </>
  );
}
