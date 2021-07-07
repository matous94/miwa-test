import * as React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="center">
      <Link to="/characters" style={{ marginRight: '16px' }}>
        <button type="button">Characters</button>
      </Link>
      <Link to="/vehicles" style={{ marginLeft: '16px' }}>
        <button type="button">Vehicles</button>
      </Link>
    </div>
  );
};

export default HomePage;
