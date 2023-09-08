import { useParams, useHistory } from 'react-router-dom';
import useFatch from './useFatch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFatch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Looding...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="p-y">Written by-{blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
