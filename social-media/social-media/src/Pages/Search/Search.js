// CSS
import styles from "./Search.module.css";

// React Router
import { Link } from "react-router-dom";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// Components
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Results for: {search}</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>The posts were not found from your search...</p>
            <Link to="/" className="btn btn-dark">
              Go Back
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
