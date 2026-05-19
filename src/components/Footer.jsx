import { Link } from "react-router-dom";
import { CookingPot } from "lucide-react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <CookingPot size={20} style={{ marginRight: "8px" }} />
        <span>Recipe Explorer</span>
      </Link>

      <p className={styles.copyright}>© 2026</p>
    </footer>
  );
}
