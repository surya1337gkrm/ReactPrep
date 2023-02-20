import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <Header />
      <h2>Oops! Error Found.</h2>
      <small>{`${err.status}: ${err.statusText}`}</small>
    </>
  );
};
export default Error;
