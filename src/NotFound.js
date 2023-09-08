import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page not gona Found</p>
      <Link to="/">Go back HomePage</Link>
    </div>
  );
};

export default NotFound;
