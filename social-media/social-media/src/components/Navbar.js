// CSS
import styles from "./Navbar.module.css";

// Hooks
import { useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

// React Icons
import { FaBars } from "react-icons/fa";

// React Router
import { NavLink } from "react-router-dom";

// Context
import { useAuthValue } from "../context/AuthContext";

const Navbar = ({ black }) => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  const authItems = [
    {
      label: "Login",
      to: "/login",
    },
    {
      label: "Register",
      to: "/register",
    },
  ];

  const userItems = [
    {
      label: "New Post",
      to: "/posts/create",
    },
    {
      label: "Dashboard",
      to: "/dashboard",
    },
  ];

  return (
    <header className={black ? styles.header_black : ""}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          Web<span>Post</span>
        </NavLink>
        <div className={styles.menu_icon} onClick={handleOpen}>
          <FaBars />
        </div>
        <ul className={`${styles.links_list} ${open ? styles.open : ""}`}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={styles.link}
                activeclassname={styles.active}
                onClick={handleOpen}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {!user &&
            authItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={styles.link}
                  activeclassname={styles.active}
                  onClick={handleOpen}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          {user &&
            userItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={styles.link}
                  activeclassname={styles.active}
                  onClick={handleOpen}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          {user && (
            <li>
              <button className={styles.btn_logout} onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
