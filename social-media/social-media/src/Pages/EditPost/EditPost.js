// CSS
import styles from "./EditPost.module.css";

// React Router Dom
import { useNavigate, useParams } from "react-router-dom";

// Hoooks
import { useEffect, useState } from "react";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      if (post.tags) {
        const textTags = post.tags.join(",");
        setTags(textTags);
      }
    }
  }, [post]);

  const navigate = useNavigate();
  const { updateDocument, response } = useUpdateDocument("posts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image needs to be URL.");
    }
    const tagsArray = tags.split(",").map((tag) => tag.trim());
    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    };
    updateDocument(id, data);
    navigate("/dashboard");
  };
  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>To edit: {post.title}</h2>
          <p>Change the post data as you wish</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title</span>
              <input
                type="text"
                name="text"
                required
                placeholder="Think about your title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>Image URL</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Put an image you want"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />
            <label>
              <span>Content</span>
              <textarea
                name="body"
                required
                placeholder="Enter post content"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Enter the tags separated by commas"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn">Edit</button>}
            {response.loading && (
              <button className="btn" disabled>
                Loading...
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
