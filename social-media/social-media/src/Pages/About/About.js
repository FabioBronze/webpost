// CSS
import styles from "./About.module.css";

// React Router Dom
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About WebPost</h2>
      <p>
        Personal project, with the objective of simulating a blog, with several
        functions for the user to publish, edit or delete photos. all photos
        have a description for the user to write. Made in React and Firebase,
        this is a Full-Stack Project.
      </p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  );
};

export default About;
