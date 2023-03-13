import food from '../static/food2.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
//named exports
export const Title = () => (
  <Link to='/'>
    <img
      src={food}
      alt='food logo'
      className='h-14 m-2 hover:scale-110 ease-in-out duration-300'
    />
  </Link>
);

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);

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
          {/* <li>
            <Link
              to='/contact'
              className='hover:font-bold active:font-bold focus:outline-none focus:font-bold'>
              Contact
            </Link>
          </li> */}
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
              Cart{' '}
              <span className='bg-orange-500 text-white text-center px-2 w-auto h-auto'>
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='hidden sm:bg-white sm:m-2 sm:p-2 sm:border-2 sm:border-orange-300 sm:w-14 sm:h-14 sm:rounded-full sm:shadow-md hover:scale-110 sm:block'>
        <img src={user.avatar_url} className='object-cover' />
      </div>
    </header>
  );
};
//default export
export default Header;
