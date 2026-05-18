import { Loader2 } from "lucide-react";
import styles from "../styles/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <Loader2 size={48} className={styles.spinner} strokeWidth={2.5} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
