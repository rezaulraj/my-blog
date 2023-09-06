import { useParams } from 'react-router-dom';
import useFatch from './useFatch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFatch('http://localhost:8000/blogs/' + id);
  return (
    <div className="blog-delails">
      {isPending && <div>Looding...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="p-y">Written by-{blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
