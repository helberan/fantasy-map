import { Link } from 'react-router-dom';
import { About } from '../pages/about/About';

export const Menu = () => {
  return (
    <div className="Menu">
      <header>
        <h2>Menu</h2>
        <img src="" alt="" />
      </header>
      <nav>
        <Link to="/">Map</Link>
        <p>Inventory</p>
      </nav>
    </div>
  );
};
