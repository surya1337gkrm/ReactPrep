import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h2>About Us Page</h2>
      <Link to='profile'>Profile</Link>
      <Outlet />
    </div>
  );
};

export default About;
