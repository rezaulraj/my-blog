import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    console.log(blog);
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('the post is added.');
      setIsPending(false);
      history.push('/');
    });
  };
  return (
    <div className="create">
      <h2>Create a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="carlo">Rezaul</option>
          <option value="marieo">Karim</option>
        </select>
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button disabled>Adding Blog.....</button>}
      </form>
    </div>
  );
};

export default Create;
