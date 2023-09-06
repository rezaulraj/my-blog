// import { useState, useEffect } from 'react';
import useFatch from './useFatch';
import BlogList from './BlogList';
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFatch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blog'} />}
    </div>
  );
};

export default Home;
