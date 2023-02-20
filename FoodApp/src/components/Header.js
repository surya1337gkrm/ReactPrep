import food from '../static/food.png';
import { Link } from 'react-router-dom';
//named exports
export const Title = () => (
  <Link to='/'>
    <img src={food} alt='food logo' />
  </Link>
);

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact US</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
//default export
export default Header;
