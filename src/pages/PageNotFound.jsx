import { Link } from "react-router-dom";
import { Ghost } from "lucide-react"; // A fun "not found" icon
import { Back } from "../components/backButton";
import { FileQuestionMark } from "lucide-react";
import styles from "../styles/PageNotFound.module.css";

export function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>
        <div className={styles.iconWrapper}>
          <FileQuestionMark />
        </div>
        <br />
        <br />
        The page you're looking for doesn't exist.
      </p>
      <Back className={styles.homeButton} />
    </div>
  );
}
