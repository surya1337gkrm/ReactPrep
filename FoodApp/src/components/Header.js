import food from '../static/food2.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/userContext';
//named exports
export const Title = () => (
  <Link to='/'>
    <img src={food} alt='food logo' className='h-14 m-2' />
  </Link>
);

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className='w-full h-max sm:flex justify-evenly items-center shadow-md sticky top-0 z-50 bg-white '>
      <Title />
      <div className='flex px-5'>
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
      <div className='bg-white m-2 p-2 border-2 border-orange-300 w-14 h-14 rounded-full shadow-md hover:scale-110'>
        <img src={user.avatar_url} className='object-cover' />
      </div>
    </header>
  );
};
//default export
export default Header;
