// CSS
import styles from "./PostDetail.module.css";

// React Router
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>Criado por: {post.createdBy}</p>
      <p>{post.body}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span># </span>
            {tag}
          </p>
        ))}
      </div>
      <div className={styles.read_link}>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">
          Ler
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
