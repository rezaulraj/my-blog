import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My first created blogs',
      body: 'Hello! form the New-Yerk...',
      author: 'cabrio',
      id: 1,
    },
    {
      title: 'My first created blogs',
      body: 'Hello! form the New-Yerk...',
      author: 'cabrio',
      id: 2,
    },
    {
      title: 'My first created blogs',
      body: 'Hello! form the New-Yerk...',
      author: 'cabrio',
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <span className="author">Witten by : {blog.author}</span>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
