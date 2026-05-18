import { Link, NavLink } from "react-router-dom";
import { CookingPot } from "lucide-react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <CookingPot />
        <span>Recipe Explorer</span>
      </Link>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
