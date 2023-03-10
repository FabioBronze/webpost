// CSS
import styles from "./Footer.module.css";

// React Router
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre tudo o que você tem interesse!</h3>
      <p>SocialMedia &copy;2023</p>
      <Link to="https://www.linkedin.com/in/f%C3%A1bio-bronze/">
        <p>@fabio_bronze</p>
      </Link>
    </footer>
  );
};

export default Footer;

