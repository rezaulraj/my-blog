import { useState } from 'react';

const Create = () => {
  const { title, setTitle } = useState('');
  const { author, setAuthor } = useState('');
  const { body, setBody } = useState('');
  return (
    <div className="create">
      <h2>Create a new Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="carlo">caelo</option>
          <option value="marieo">marieo</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
      </form>
    </div>
  );
};

export default Create;
