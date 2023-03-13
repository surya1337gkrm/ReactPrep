import React, { useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import ClassComponent from './ClassComponent';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const user = useContext(UserContext);

  return (
    <div className='grid p-5 text-center place-items-center gap-2 '>
      <Link to='profile' className='bg-slate-500 m-2 p-2 text-white rounded w-fit'>
        JSONPlaceHolder
      </Link>
      <Outlet />
      <br />
      <ClassComponent />
    </div>
  );
};

export default About;
