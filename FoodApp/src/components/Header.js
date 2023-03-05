import food from '../static/food.png';
import { Link } from 'react-router-dom';
//named exports
export const Title = () => (
  <Link to='/'>
    <img src={food} alt='food logo' className='h-24' />
  </Link>
);

const Header = () => {
  return (
    <header className='sm:flex justify-center shadow-md sticky top-0 z-50 bg-white w-full'>
      <Title />
      <div className='px-5'>
        <ul className='sm:flex py-10 gap-5'>
          <li>
            <Link
              to='/'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/instamart'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              Instamart
            </Link>
          </li>
          <li>
            <Link
              to='/cart'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
//default export
export default Header;
