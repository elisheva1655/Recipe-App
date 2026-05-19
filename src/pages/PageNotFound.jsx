import { Link } from "react-router-dom";
import { Ghost } from "lucide-react"; // A fun "not found" icon
import { Back } from "../components/backButton";
import styles from "../styles/PageNotFound.module.css";

export function PageNotFound() {
  return (
    <div className={styles.container}>
      <Ghost size={80} className={styles.icon} />
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>
        Oops! This recipe seems to have disappeared from the kitchen.
      </p>
      <Back className={styles.homeButton} />
    </div>
  );
}
