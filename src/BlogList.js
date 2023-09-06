import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <span className="author">Witten by : {blog.author}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
