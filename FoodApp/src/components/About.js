import React, { useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import ClassComponent from './ClassComponent';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div className='flex-col text-center p-2 gap-2'>
      <h2>About Page</h2>
      <Link to='profile' className='bg-gray-300 m-2'>
        Profile
      </Link>
      <Outlet />
      <br />
      <ClassComponent />
    </div>
  );
};

export default About;
