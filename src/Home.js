import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('harsh');

  const handelClick = () => {
    setName('Rezaul');
  };

  const [count, setNumber] = useState(0);
  const increseNumber = () => {
    setNumber(count + 1);
  };
  const decrementNumber = () => {
    if (count > 0) setNumber(count - 1);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name}</p>

      <button onClick={handelClick}>Click me</button>
      <br />
      <br />
      <button
        onClick={decrementNumber}
        style={{
          border: '3px solid red',
          background: '#333',
          color: 'white',
        }}
      >
        -
      </button>
      <span
        style={{
          padding: '0 20px',
        }}
      >
        {count}
      </span>
      <button
        onClick={increseNumber}
        style={{
          border: '3px solid green',
          background: '#333',
          color: 'white',
        }}
      >
        +
      </button>
    </div>
  );
};

export default Home;
