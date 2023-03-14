import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
const Error = () => {
  const err = useRouteError();
  return (
    <div className='flex flex-col justify-between items-center min-h-screen'>
      <Header />
      {/* <div>
        <h2>Oops! Error Found.</h2>
        <small>{`${err.status}: ${err.statusText}`}</small>
      </div> */}
      <div className='h-full w-full m-5 p-5'>
        <main class='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
          <h1 class='text-9xl font-extrabold text-white tracking-widest'>
            {err.status}
          </h1>
          <div class='bg-[#FF6A3D] px-5 m-5 text-sm rounded -rotate-12 absolute'>
            {err.statusText}
          </div>
          <button class='mt-5'>
            <a class='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
              <span class='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

              <span class='relative block px-8 py-3 bg-[#1A2238] border border-current'>
                <Link to='/'>Go Home</Link>
              </span>
            </a>
          </button>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Error;
