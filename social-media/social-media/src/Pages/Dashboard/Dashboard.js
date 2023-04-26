// CSS
import styles from "./Dashboard.module.css";

// React Router
import { Link } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Manage your posts!</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>No posts found...</p>
          <Link to="/posts/create" className="btn">
            Create first post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Title</span>
          <span>Action</span>
        </div>
      )}
      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className={styles.btn_dash}>
                Open
              </Link>
              <Link to={`/posts/edit/${post.id}`} className={styles.btn_dash}>
                Edit
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className={styles.btn_dashh}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
