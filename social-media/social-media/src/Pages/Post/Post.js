// CSS
import styles from "./Post.module.css";

// React Router
import { useParams } from "react-router-dom";

// Hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading, error } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando Postagem...</p>}
      {post && (
        <div className={styles.container}>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p className={styles.createdBy}>Criado por: {post.createdBy}</p>
          <p>{post.body}</p>
          <h3>Esta postagem fala sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span># </span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
      {error && <p>Ocorreu um erro ao procurar a sua postagem.</p>}
    </div>
  );
};

export default Post;
