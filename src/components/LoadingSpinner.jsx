import { Loader2 } from "lucide-react";
import styles from "../styles/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <Loader2 size={40} className={styles.spinner} />
      <p className={styles.text}>Searching for recipes...</p>
    </div>
  );
}
