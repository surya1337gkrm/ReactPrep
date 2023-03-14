import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Cart from './components/cart';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/shimmer';

import axios from 'axios';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

//lazy loading instamart component
const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
  const [user, setUser] = useState({});
  const getUserdata = async () => {
    try {
      const { data } = await axios.get(
        'https://api.github.com/users/surya1337gkrm'
      );
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserdata();
  }, []);

  if (!user) {
    return <Shimmer />;
  }
  //add justify-between : to center the content
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'test',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:menuId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
