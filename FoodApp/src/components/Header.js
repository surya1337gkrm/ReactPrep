import food from '../static/food.png';
//named exports
export const Title = () => (
  <a href='/'>
    <img src={food} alt='food logo' />
  </a>
);

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//default export
export default Header;
