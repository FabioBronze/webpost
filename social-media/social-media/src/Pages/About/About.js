// CSS
import styles from "./About.module.css";

// React Router Dom
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre a Social <span>Media</span>
      </h2>
      <p>
        Criação de um projeto feito em React, que consiste em fazer uma rede
        social, onde os utilizadores podem publicar e editar as suas
        publicações, com um sistema de Login e Registo, onde utilizei a Firebase
        como base de dados no back-end. É um projeto bastante completo, e pude
        praticar vários componentes do React.
      </p>
      <Link to="/posts/create" className="btn">
        Criar Postagem
      </Link>
    </div>
  );
};

export default About;
