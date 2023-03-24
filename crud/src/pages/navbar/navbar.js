import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" end className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/register"
                        end className={({ isActive }) => (isActive ? styles.active : "")}
                    >Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        end className={({ isActive }) => (isActive ? styles.active : "")}
                    >Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/listar"
                        end className={({ isActive }) => (isActive ? styles.active : "")}
                    >Listar
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
