import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../utils/cartSlice';
import Shimmer from './shimmer';

function Profile() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.cart.todos);
  const isLoading = useSelector((store) => store.cart.isLoading);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      <p className='font-bold'>
        Component to display data fetched using Redux Thunk
      </p>
      <div className='flex flex-wrap justify-center items-center'>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className='p-2 m-2 bg-orange-200 rounded-sm shadow-lg w-fit hover:scale-95 ease-in-out duration-300'>
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}
export default Profile;
