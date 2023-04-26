// CSS
import styles from "./Footer.module.css";

// React Router
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Write About your Interests!</h3>
      <p>WebPost &copy;2023</p>
      <Link to="https://www.linkedin.com/in/f%C3%A1bio-bronze/">
        <p>@fabio_bronze</p>
      </Link>
    </footer>
  );
};

export default Footer;
